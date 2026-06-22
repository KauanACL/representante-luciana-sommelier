import { createEmptyDatabaseState } from '../lib/databaseState'
import { normalizeClientLocation } from '../lib/locations'
import { supabase } from '../lib/supabaseClient'
import type {
  Activity,
  Client,
  ClientContact,
  ClientStatus,
  ContactChannel,
  ContactOutcome,
  ControlActionInput,
  LocalDatabase,
  Sale,
  SaleStage,
  ServiceStatus,
  SommelierService,
  SommelierServiceType,
  UserProfile,
  Visit,
  VisitStatus,
} from '../types/models'

type ClientRow = {
  id: string
  document: string
  group_name: string
  name: string
  client_type: string
  status: ClientStatus
  address: string | null
  district: string | null
  city: string | null
  state: string | null
  state_code: string | null
  city_ibge_id: number | null
  zip_code: string | null
  email: string | null
  phone: string | null
  salesperson: string | null
  manager: string | null
  contact_description: string | null
  last_imported_action: string | null
  last_imported_action_date: string | null
  created_at: string
  updated_at: string
}

type RevenueRow = {
  id: string
  client_id: string
  period: string
  amount: number | string
}

type VisitRow = {
  id: string
  client_id: string
  scheduled_for: string
  purpose: string
  notes: string | null
  status: VisitStatus
  completed_at: string | null
  created_at: string
  updated_at: string
}

type SaleRow = {
  id: string
  client_id: string
  title: string
  amount: number | string
  stage: SaleStage
  expected_close_date: string
  closed_at: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

type ContactRow = {
  id: string
  client_id: string
  contact_at: string
  channel: ContactChannel
  outcome: ContactOutcome
  notes: string | null
  created_at: string
  updated_at: string
}

type ServiceRow = {
  id: string
  client_id: string
  service_type: SommelierServiceType
  scheduled_for: string
  status: ServiceStatus
  amount: number | string
  notes: string | null
  created_at: string
  updated_at: string
}

type ActivityRow = {
  id: string
  entity: Activity['entity']
  entity_id: string
  action: string
  description: string
  created_at: string
}

type ProfileRow = {
  id: string
  name: string | null
  email: string
  role: UserProfile['role']
}

const toMoney = (value: number | string | null | undefined) => Number(value ?? 0)

const toPeriodLabel = (period: string) => period.slice(0, 7).replace('-', '/')

const toPeriodDate = (period: string) => `${period.replace('/', '-')}-01`

const mapClient = (row: ClientRow): Client =>
  normalizeClientLocation({
    id: row.id,
    document: row.document,
    group: row.group_name,
    name: row.name,
    type: row.client_type,
    status: row.status,
    address: row.address ?? '',
    district: row.district ?? '',
    city: row.city ?? '',
    state: row.state ?? '',
    stateCode: row.state_code ?? row.state ?? '',
    cityIbgeId: row.city_ibge_id,
    zipCode: row.zip_code ?? '',
    email: row.email ?? '',
    phone: row.phone ?? '',
    salesperson: row.salesperson ?? '',
    manager: row.manager ?? '',
    contactDescription: row.contact_description ?? '',
    lastImportedAction: row.last_imported_action ?? '',
    lastImportedActionDate: row.last_imported_action_date ?? '',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  })

const toClientInsert = (client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) => ({
  document: client.document,
  group_name: client.group,
  name: client.name,
  client_type: client.type,
  status: client.status,
  address: client.address,
  district: client.district,
  city: client.city,
  state: client.state,
  state_code: client.stateCode || client.state || null,
  city_ibge_id: client.cityIbgeId ?? null,
  zip_code: client.zipCode,
  email: client.email,
  phone: client.phone,
  salesperson: client.salesperson,
  manager: client.manager,
  contact_description: client.contactDescription,
  last_imported_action: client.lastImportedAction,
  last_imported_action_date: client.lastImportedActionDate || null,
})

const toClientUpdate = (client: Client) => ({
  ...toClientInsert(client),
  updated_at: new Date().toISOString(),
})

const mapRevenue = (row: RevenueRow) => ({
  id: row.id,
  clientId: row.client_id,
  period: toPeriodLabel(row.period),
  amount: toMoney(row.amount),
})

const mapVisit = (row: VisitRow): Visit => ({
  id: row.id,
  clientId: row.client_id,
  scheduledFor: row.scheduled_for,
  purpose: row.purpose,
  notes: row.notes ?? '',
  status: row.status,
  completedAt: row.completed_at ?? undefined,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
})

const toVisitInsert = (visit: Omit<Visit, 'id' | 'createdAt' | 'updatedAt'>) => ({
  client_id: visit.clientId,
  scheduled_for: visit.scheduledFor,
  purpose: visit.purpose,
  notes: visit.notes,
  status: visit.status,
  completed_at: visit.completedAt ?? null,
})

const mapSale = (row: SaleRow): Sale => ({
  id: row.id,
  clientId: row.client_id,
  title: row.title,
  amount: toMoney(row.amount),
  stage: row.stage,
  expectedCloseDate: row.expected_close_date,
  closedAt: row.closed_at ?? undefined,
  notes: row.notes ?? '',
  createdAt: row.created_at,
  updatedAt: row.updated_at,
})

const toSaleInsert = (sale: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>) => ({
  client_id: sale.clientId,
  title: sale.title,
  amount: sale.amount,
  stage: sale.stage,
  expected_close_date: sale.expectedCloseDate,
  closed_at: sale.stage === 'won' ? sale.closedAt ?? new Date().toISOString() : null,
  notes: sale.notes,
})

const mapContact = (row: ContactRow): ClientContact => ({
  id: row.id,
  clientId: row.client_id,
  contactAt: row.contact_at,
  channel: row.channel,
  outcome: row.outcome,
  notes: row.notes ?? '',
  createdAt: row.created_at,
  updatedAt: row.updated_at,
})

const toContactInsert = (contact: Omit<ClientContact, 'id' | 'createdAt' | 'updatedAt'>) => ({
  client_id: contact.clientId,
  contact_at: contact.contactAt,
  channel: contact.channel,
  outcome: contact.outcome,
  notes: contact.notes,
})

const mapService = (row: ServiceRow): SommelierService => ({
  id: row.id,
  clientId: row.client_id,
  type: row.service_type,
  scheduledFor: row.scheduled_for,
  status: row.status,
  amount: toMoney(row.amount),
  notes: row.notes ?? '',
  createdAt: row.created_at,
  updatedAt: row.updated_at,
})

const toServiceInsert = (
  service: Omit<SommelierService, 'id' | 'createdAt' | 'updatedAt'>,
) => ({
  client_id: service.clientId,
  service_type: service.type,
  scheduled_for: service.scheduledFor,
  status: service.status,
  amount: service.amount,
  notes: service.notes,
})

const mapActivity = (row: ActivityRow): Activity => ({
  id: row.id,
  entity: row.entity,
  entityId: row.entity_id,
  action: row.action,
  description: row.description,
  createdAt: row.created_at,
})

const mapProfile = (row: ProfileRow): UserProfile => ({
  id: row.id,
  name: row.name || 'Luciana',
  email: row.email,
  role: row.role,
})

const assertSupabase = () => {
  if (!supabase) throw new Error('Supabase nao esta configurado.')
  return supabase
}

const assertNoError = (error: { message: string } | null) => {
  if (error) throw new Error(error.message)
}

export const supabaseDataProvider = {
  async load(): Promise<LocalDatabase> {
    const client = assertSupabase()
    const { data: userData, error: userError } = await client.auth.getUser()
    assertNoError(userError)
    const user = userData.user

    const [
      profilesResult,
      clientsResult,
      revenueResult,
      visitsResult,
      salesResult,
      contactsResult,
      servicesResult,
      activitiesResult,
    ] = await Promise.all([
      user
        ? client.from('profiles').select('*').eq('id', user.id).maybeSingle<ProfileRow>()
        : Promise.resolve({ data: null, error: null }),
      client.from('clients').select('*').order('updated_at', { ascending: false }),
      client.from('client_revenue_months').select('*').order('period', { ascending: true }),
      client.from('visits').select('*').order('scheduled_for', { ascending: true }),
      client.from('sales').select('*').order('updated_at', { ascending: false }),
      client.from('client_contacts').select('*').order('contact_at', { ascending: false }),
      client.from('sommelier_services').select('*').order('scheduled_for', { ascending: true }),
      client.from('activities').select('*').order('created_at', { ascending: false }).limit(100),
    ])

    assertNoError(profilesResult.error)
    assertNoError(clientsResult.error)
    assertNoError(revenueResult.error)
    assertNoError(visitsResult.error)
    assertNoError(salesResult.error)
    assertNoError(contactsResult.error)
    assertNoError(servicesResult.error)
    assertNoError(activitiesResult.error)

    const revenue = (revenueResult.data ?? []).map((row) => mapRevenue(row as RevenueRow))
    const periods = [...new Set(revenue.map((item) => item.period))].sort()

    return {
      ...createEmptyDatabaseState(
        profilesResult.data
          ? mapProfile(profilesResult.data)
          : {
              id: user?.id ?? 'authenticated',
              name: 'Luciana',
              email: user?.email ?? '',
              role: 'user',
            },
      ),
      revenuePeriods: periods,
      clients: (clientsResult.data ?? []).map((row) => mapClient(row as ClientRow)),
      clientRevenueMonths: revenue,
      visits: (visitsResult.data ?? []).map((row) => mapVisit(row as VisitRow)),
      sales: (salesResult.data ?? []).map((row) => mapSale(row as SaleRow)),
      contacts: (contactsResult.data ?? []).map((row) => mapContact(row as ContactRow)),
      services: (servicesResult.data ?? []).map((row) => mapService(row as ServiceRow)),
      activities: (activitiesResult.data ?? []).map((row) => mapActivity(row as ActivityRow)),
    }
  },

  async createClient(clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) {
    const { error } = await assertSupabase()
      .from('clients')
      .insert(toClientInsert(clientData))
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async updateClient(clientData: Client) {
    const { error } = await assertSupabase()
      .from('clients')
      .update(toClientUpdate(clientData))
      .eq('id', clientData.id)
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async createVisit(visit: Omit<Visit, 'id' | 'createdAt' | 'updatedAt'>) {
    const { error } = await assertSupabase().from('visits').insert(toVisitInsert(visit))
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async updateVisit(visit: Visit) {
    const { error } = await assertSupabase()
      .from('visits')
      .update({ ...toVisitInsert(visit), updated_at: new Date().toISOString() })
      .eq('id', visit.id)
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async createSale(sale: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>) {
    const { error } = await assertSupabase().from('sales').insert(toSaleInsert(sale))
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async updateSale(sale: Sale) {
    const { error } = await assertSupabase()
      .from('sales')
      .update({ ...toSaleInsert(sale), updated_at: new Date().toISOString() })
      .eq('id', sale.id)
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async registerControlAction(input: ControlActionInput) {
    const { error } = await assertSupabase().rpc('register_control_action', {
      p_client_id: input.contact.clientId,
      p_contact_at: input.contact.contactAt,
      p_channel: input.contact.channel,
      p_outcome: input.contact.outcome,
      p_notes: input.contact.notes,
      p_sale_title: input.sale?.title ?? null,
      p_sale_amount: input.sale?.amount ?? null,
      p_sale_stage: input.sale?.stage ?? null,
      p_sale_expected_close_date: input.sale?.expectedCloseDate ?? null,
      p_sale_closed_at: input.sale?.closedAt ?? null,
      p_visit_scheduled_for: input.visit?.scheduledFor ?? null,
      p_visit_purpose: input.visit?.purpose ?? null,
      p_visit_notes: input.visit?.notes ?? null,
    })
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async createContact(contact: Omit<ClientContact, 'id' | 'createdAt' | 'updatedAt'>) {
    const { error } = await assertSupabase()
      .from('client_contacts')
      .insert(toContactInsert(contact))
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async createService(service: Omit<SommelierService, 'id' | 'createdAt' | 'updatedAt'>) {
    const { error } = await assertSupabase()
      .from('sommelier_services')
      .insert(toServiceInsert(service))
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  async updateService(service: SommelierService) {
    const { error } = await assertSupabase()
      .from('sommelier_services')
      .update({ ...toServiceInsert(service), updated_at: new Date().toISOString() })
      .eq('id', service.id)
    assertNoError(error)
    return supabaseDataProvider.load()
  },

  toPeriodDate,
}
