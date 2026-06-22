/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { createEmptyDatabaseState } from '../lib/databaseState'
import { isSupabaseConfigured } from '../lib/supabaseClient'
import { localDataProvider } from '../providers/localDataProvider'
import { supabaseDataProvider } from '../providers/supabaseDataProvider'
import type {
  Client,
  ClientContact,
  ControlActionInput,
  LocalDatabase,
  Sale,
  SommelierService,
  Visit,
} from '../types/models'

type DataContextValue = {
  database: LocalDatabase
  clients: Client[]
  visits: Visit[]
  sales: Sale[]
  contacts: ClientContact[]
  services: SommelierService[]
  isLoading: boolean
  error: string
  source: 'supabase' | 'local'
  refresh: () => Promise<void>
  createClient: (client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updateClient: (client: Client) => Promise<void>
  createVisit: (visit: Omit<Visit, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updateVisit: (visit: Visit) => Promise<void>
  createSale: (sale: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updateSale: (sale: Sale) => Promise<void>
  registerControlAction: (input: ControlActionInput) => Promise<void>
  createContact: (contact: Omit<ClientContact, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  createService: (service: Omit<SommelierService, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updateService: (service: SommelierService) => Promise<void>
  resetLocalData: () => void
}

const DataContext = createContext<DataContextValue | null>(null)
const providerSource: 'supabase' | 'local' = isSupabaseConfigured ? 'supabase' : 'local'

export function DataProvider({ children }: { children: ReactNode }) {
  const [database, setDatabase] = useState<LocalDatabase>(() =>
    isSupabaseConfigured ? createEmptyDatabaseState() : localDataProvider.load(),
  )
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured)
  const [error, setError] = useState('')

  const loadSupabase = useCallback(async () => {
    setIsLoading(true)
    setError('')
    try {
      setDatabase(await supabaseDataProvider.load())
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel carregar dados.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured) return
    void Promise.resolve().then(loadSupabase)
  }, [loadSupabase])

  const refresh = useCallback(async () => {
    if (isSupabaseConfigured) {
      await loadSupabase()
      return
    }
    setDatabase(localDataProvider.load())
  }, [loadSupabase])

  const createClient = useCallback(
    async (client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) => {
      setError('')
      try {
        if (isSupabaseConfigured) {
          setDatabase(await supabaseDataProvider.createClient(client))
        } else {
          setDatabase((current) => localDataProvider.createClient(current, client))
        }
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : 'Nao foi possivel salvar cliente.')
      }
    },
    [],
  )

  const updateClient = useCallback(async (client: Client) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.updateClient(client))
      } else {
        setDatabase((current) => localDataProvider.updateClient(current, client))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel atualizar cliente.')
    }
  }, [])

  const createVisit = useCallback(async (visit: Omit<Visit, 'id' | 'createdAt' | 'updatedAt'>) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.createVisit(visit))
      } else {
        setDatabase((current) => localDataProvider.createVisit(current, visit))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel salvar visita.')
    }
  }, [])

  const updateVisit = useCallback(async (visit: Visit) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.updateVisit(visit))
      } else {
        setDatabase((current) => localDataProvider.updateVisit(current, visit))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel atualizar visita.')
    }
  }, [])

  const createSale = useCallback(async (sale: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.createSale(sale))
      } else {
        setDatabase((current) => localDataProvider.createSale(current, sale))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel salvar venda.')
    }
  }, [])

  const updateSale = useCallback(async (sale: Sale) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.updateSale(sale))
      } else {
        setDatabase((current) => localDataProvider.updateSale(current, sale))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel atualizar venda.')
    }
  }, [])

  const createContact = useCallback(
    async (contact: Omit<ClientContact, 'id' | 'createdAt' | 'updatedAt'>) => {
      setError('')
      try {
        if (isSupabaseConfigured) {
          setDatabase(await supabaseDataProvider.createContact(contact))
        } else {
          setDatabase((current) => localDataProvider.createContact(current, contact))
        }
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : 'Nao foi possivel registrar contato.')
      }
    },
    [],
  )

  const registerControlAction = useCallback(async (input: ControlActionInput) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.registerControlAction(input))
      } else {
        setDatabase((current) => localDataProvider.registerControlAction(current, input))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel registrar acao comercial.')
    }
  }, [])

  const createService = useCallback(
    async (service: Omit<SommelierService, 'id' | 'createdAt' | 'updatedAt'>) => {
      setError('')
      try {
        if (isSupabaseConfigured) {
          setDatabase(await supabaseDataProvider.createService(service))
        } else {
          setDatabase((current) => localDataProvider.createService(current, service))
        }
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : 'Nao foi possivel salvar servico.')
      }
    },
    [],
  )

  const updateService = useCallback(async (service: SommelierService) => {
    setError('')
    try {
      if (isSupabaseConfigured) {
        setDatabase(await supabaseDataProvider.updateService(service))
      } else {
        setDatabase((current) => localDataProvider.updateService(current, service))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel atualizar servico.')
    }
  }, [])

  const resetLocalData = useCallback(() => {
    if (isSupabaseConfigured) {
      void loadSupabase()
      return
    }
    setDatabase(localDataProvider.reset())
  }, [loadSupabase])

  const value = useMemo(
    () => ({
      database,
      clients: database.clients,
      visits: database.visits,
      sales: database.sales,
      contacts: database.contacts,
      services: database.services,
      isLoading,
      error,
      source: providerSource,
      refresh,
      createClient,
      updateClient,
      createVisit,
      updateVisit,
      createSale,
      updateSale,
      registerControlAction,
      createContact,
      createService,
      updateService,
      resetLocalData,
    }),
    [
      createClient,
      createContact,
      createSale,
      createService,
      createVisit,
      database,
      error,
      isLoading,
      refresh,
      registerControlAction,
      resetLocalData,
      updateClient,
      updateSale,
      updateService,
      updateVisit,
    ],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) throw new Error('useData must be used inside DataProvider')
  return context
}
