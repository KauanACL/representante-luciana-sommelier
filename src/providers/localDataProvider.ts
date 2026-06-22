import { clientRevenueSeed, clientSeed, revenuePeriods } from '../data/seed'
import { createEmptyDatabaseState } from '../lib/databaseState'
import type {
  Activity,
  Client,
  LocalDatabase,
  Sale,
  SommelierService,
  Visit,
} from '../types/models'

const STORAGE_KEY = 'luciana-sommelier-local-db-v2'
const LEGACY_STORAGE_KEYS = ['luciana-sommelier-local-db-v1']

const now = () => new Date().toISOString()
const makeId = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`

const createActivity = (
  entity: Activity['entity'],
  entityId: string,
  action: string,
  description: string,
): Activity => ({
  id: makeId('activity'),
  entity,
  entityId,
  action,
  description,
  createdAt: now(),
})

const createInitialDatabase = (): LocalDatabase => ({
  ...createEmptyDatabaseState({
    id: 'local-owner',
    name: 'Luciana',
    email: import.meta.env.VITE_LOCAL_AUTH_EMAIL || 'luciana@local.app',
    role: 'owner',
  }),
  revenuePeriods: Array.from(revenuePeriods),
  clients: clientSeed,
  clientRevenueMonths: clientRevenueSeed,
  activities: [
    createActivity(
      'system',
      'seed',
      'seed-imported',
      'Base real importada da planilha clientes_consolidado_padronizado.xlsx.',
    ),
  ],
})

const save = (database: LocalDatabase) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(database))
}

const clearLegacy = () => {
  for (const key of LEGACY_STORAGE_KEYS) {
    localStorage.removeItem(key)
  }
}

const sortByUpdated = <T extends { updatedAt: string }>(items: T[]) =>
  [...items].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))

export const localDataProvider = {
  load(): LocalDatabase {
    clearLegacy()
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      const fresh = createInitialDatabase()
      save(fresh)
      return fresh
    }

    try {
      const parsed = JSON.parse(raw) as LocalDatabase
      if (parsed.version !== 2) throw new Error('Unsupported local database')
      return parsed
    } catch {
      const fresh = createInitialDatabase()
      save(fresh)
      return fresh
    }
  },

  reset() {
    clearLegacy()
    const fresh = createInitialDatabase()
    save(fresh)
    return fresh
  },

  commit(database: LocalDatabase) {
    save(database)
    return database
  },

  createClient(database: LocalDatabase, client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) {
    const timestamp = now()
    const created: Client = {
      ...client,
      id: makeId('client'),
      createdAt: timestamp,
      updatedAt: timestamp,
    }

    return localDataProvider.commit({
      ...database,
      clients: sortByUpdated([created, ...database.clients]),
      activities: [
        createActivity('client', created.id, 'created', `Cliente ${created.name} cadastrado.`),
        ...database.activities,
      ],
    })
  },

  updateClient(database: LocalDatabase, client: Client) {
    const updated = { ...client, updatedAt: now() }
    return localDataProvider.commit({
      ...database,
      clients: database.clients.map((item) => (item.id === updated.id ? updated : item)),
      activities: [
        createActivity('client', updated.id, 'updated', `Cliente ${updated.name} atualizado.`),
        ...database.activities,
      ],
    })
  },

  createVisit(database: LocalDatabase, visit: Omit<Visit, 'id' | 'createdAt' | 'updatedAt'>) {
    const timestamp = now()
    const created: Visit = {
      ...visit,
      id: makeId('visit'),
      createdAt: timestamp,
      updatedAt: timestamp,
    }
    return localDataProvider.commit({
      ...database,
      visits: [created, ...database.visits],
      activities: [
        createActivity('visit', created.id, 'created', `Visita agendada: ${created.purpose}.`),
        ...database.activities,
      ],
    })
  },

  updateVisit(database: LocalDatabase, visit: Visit) {
    const updated = { ...visit, updatedAt: now() }
    return localDataProvider.commit({
      ...database,
      visits: database.visits.map((item) => (item.id === updated.id ? updated : item)),
      activities: [
        createActivity('visit', updated.id, 'updated', `Visita atualizada: ${updated.purpose}.`),
        ...database.activities,
      ],
    })
  },

  createSale(database: LocalDatabase, sale: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>) {
    const timestamp = now()
    const created: Sale = {
      ...sale,
      id: makeId('sale'),
      createdAt: timestamp,
      updatedAt: timestamp,
    }
    return localDataProvider.commit({
      ...database,
      sales: [created, ...database.sales],
      activities: [
        createActivity('sale', created.id, 'created', `Venda registrada: ${created.title}.`),
        ...database.activities,
      ],
    })
  },

  updateSale(database: LocalDatabase, sale: Sale) {
    const updated = { ...sale, updatedAt: now() }
    return localDataProvider.commit({
      ...database,
      sales: database.sales.map((item) => (item.id === updated.id ? updated : item)),
      activities: [
        createActivity('sale', updated.id, 'updated', `Venda atualizada: ${updated.title}.`),
        ...database.activities,
      ],
    })
  },

  createService(
    database: LocalDatabase,
    service: Omit<SommelierService, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    const timestamp = now()
    const created: SommelierService = {
      ...service,
      id: makeId('service'),
      createdAt: timestamp,
      updatedAt: timestamp,
    }
    return localDataProvider.commit({
      ...database,
      services: [created, ...database.services],
      activities: [
        createActivity(
          'service',
          created.id,
          'created',
          `Servico de sommeliere agendado: ${created.type}.`,
        ),
        ...database.activities,
      ],
    })
  },

  updateService(database: LocalDatabase, service: SommelierService) {
    const updated = { ...service, updatedAt: now() }
    return localDataProvider.commit({
      ...database,
      services: database.services.map((item) => (item.id === updated.id ? updated : item)),
      activities: [
        createActivity('service', updated.id, 'updated', `Servico atualizado: ${updated.type}.`),
        ...database.activities,
      ],
    })
  },
}
