import { MapPin } from 'lucide-react'
import { useMemo } from 'react'
import { BRAZIL_STATES } from '../data/brazilLocations'
import { getCitiesByState } from '../lib/locations'

type Props = {
  stateCode: string
  cityIbgeId: number | null
  onChange: (location: { stateCode: string; cityIbgeId: number | null }) => void
  stateError?: string
  cityError?: string
  allowEmptyCity?: boolean
}

export function LocationSelect({
  stateCode,
  cityIbgeId,
  onChange,
  stateError,
  cityError,
  allowEmptyCity = false,
}: Props) {
  const cities = useMemo(() => getCitiesByState(stateCode), [stateCode])

  return (
    <>
      <label>
        UF
        <select
          value={stateCode}
          onChange={(event) => onChange({ stateCode: event.target.value, cityIbgeId: null })}
        >
          <option value="">Selecione a UF</option>
          {BRAZIL_STATES.map((state) => (
            <option key={state.code} value={state.code}>
              {state.code} - {state.name}
            </option>
          ))}
        </select>
        {stateError && <span className="field-error">{stateError}</span>}
      </label>

      <label>
        Cidade
        <div className="location-select__city">
          <MapPin size={16} />
          <select
            value={cityIbgeId ? String(cityIbgeId) : ''}
            disabled={!stateCode}
            onChange={(event) =>
              onChange({
                stateCode,
                cityIbgeId: event.target.value ? Number(event.target.value) : null,
              })
            }
          >
            <option value="">
              {stateCode
                ? allowEmptyCity
                  ? 'Sem cidade cadastrada'
                  : 'Selecione a cidade'
                : 'Escolha a UF primeiro'}
            </option>
            {cities.map((city) => (
              <option key={city.ibgeId} value={city.ibgeId}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        {cityError && <span className="field-error">{cityError}</span>}
      </label>
    </>
  )
}
