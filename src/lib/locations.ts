import { BRAZIL_CITIES, BRAZIL_STATES, type BrazilCity } from '../data/brazilLocations'
import type { Client } from '../types/models'

const INVALID_CITY_KEYS = new Set(['', 'mg', 'minas gerais'])

export const normalizeLocationKey = (value: string | null | undefined) =>
  (value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const statesByCode = new Map(BRAZIL_STATES.map((state) => [state.code, state]))
const statesByName = new Map(
  BRAZIL_STATES.map((state) => [normalizeLocationKey(state.name), state]),
)
const citiesById = new Map(BRAZIL_CITIES.map((city) => [city.ibgeId, city]))
const citiesByState = new Map<string, BrazilCity[]>()
const citiesByStateAndName = new Map<string, BrazilCity>()
const cityNameCounts = new Map<string, number>()

for (const city of BRAZIL_CITIES) {
  const stateCities = citiesByState.get(city.stateCode) ?? []
  stateCities.push(city)
  citiesByState.set(city.stateCode, stateCities)

  const cityKey = normalizeLocationKey(city.name)
  citiesByStateAndName.set(`${city.stateCode}:${cityKey}`, city)
  cityNameCounts.set(cityKey, (cityNameCounts.get(cityKey) ?? 0) + 1)
}

const uniqueCitiesByName = new Map<string, BrazilCity>()
for (const city of BRAZIL_CITIES) {
  const cityKey = normalizeLocationKey(city.name)
  if (cityNameCounts.get(cityKey) === 1) {
    uniqueCitiesByName.set(cityKey, city)
  }
}

export type ResolvedLocation = {
  city: string
  state: string
  stateCode: string
  cityIbgeId: number | null
}

export const getStateByCode = (stateCode: string | null | undefined) =>
  statesByCode.get((stateCode ?? '').trim().toUpperCase())

export const getCitiesByState = (stateCode: string | null | undefined) =>
  citiesByState.get((stateCode ?? '').trim().toUpperCase()) ?? []

export const getCityByIbgeId = (cityIbgeId: number | null | undefined) =>
  typeof cityIbgeId === 'number' ? citiesById.get(cityIbgeId) : undefined

export const resolveStateCode = (value: string | null | undefined) => {
  const code = (value ?? '').trim().toUpperCase()
  if (statesByCode.has(code)) return code

  const state = statesByName.get(normalizeLocationKey(value))
  return state?.code ?? ''
}

export const resolveLocation = ({
  city,
  state,
  stateCode,
  cityIbgeId,
}: {
  city?: string | null
  state?: string | null
  stateCode?: string | null
  cityIbgeId?: number | null
}): ResolvedLocation => {
  const cityById = getCityByIbgeId(cityIbgeId)
  if (cityById) {
    return {
      city: cityById.name,
      state: cityById.stateCode,
      stateCode: cityById.stateCode,
      cityIbgeId: cityById.ibgeId,
    }
  }

  const resolvedStateCode = resolveStateCode(stateCode) || resolveStateCode(state)
  const cityKey = normalizeLocationKey(city)

  if (INVALID_CITY_KEYS.has(cityKey)) {
    return {
      city: '',
      state: resolvedStateCode,
      stateCode: resolvedStateCode,
      cityIbgeId: null,
    }
  }

  if (resolvedStateCode) {
    const cityByState = citiesByStateAndName.get(`${resolvedStateCode}:${cityKey}`)
    if (cityByState) {
      return {
        city: cityByState.name,
        state: cityByState.stateCode,
        stateCode: cityByState.stateCode,
        cityIbgeId: cityByState.ibgeId,
      }
    }
  }

  const uniqueCity = uniqueCitiesByName.get(cityKey)
  if (uniqueCity) {
    return {
      city: uniqueCity.name,
      state: uniqueCity.stateCode,
      stateCode: uniqueCity.stateCode,
      cityIbgeId: uniqueCity.ibgeId,
    }
  }

  return {
    city: (city ?? '').trim(),
    state: resolvedStateCode || (state ?? '').trim().toUpperCase(),
    stateCode: resolvedStateCode,
    cityIbgeId: null,
  }
}

export const resolveLocationFromCityId = (
  cityIbgeId: number | null | undefined,
): ResolvedLocation | null => {
  const city = getCityByIbgeId(cityIbgeId)
  if (!city) return null

  return {
    city: city.name,
    state: city.stateCode,
    stateCode: city.stateCode,
    cityIbgeId: city.ibgeId,
  }
}

export const normalizeClientLocation = <T extends Pick<Client, 'city' | 'state'> & Partial<Client>>(
  client: T,
) => {
  const location = resolveLocation({
    city: client.city,
    state: client.state,
    stateCode: client.stateCode,
    cityIbgeId: client.cityIbgeId,
  })

  return {
    ...client,
    city: location.city,
    state: location.state,
    stateCode: location.stateCode,
    cityIbgeId: location.cityIbgeId,
  }
}

export const normalizeClientsLocation = <T extends Pick<Client, 'city' | 'state'> & Partial<Client>>(
  clients: T[],
) => clients.map((client) => normalizeClientLocation(client))
