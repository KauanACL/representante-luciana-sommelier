export type ClientStatus = 'active' | 'inactive' | 'prospect' | 'attention'

export type Client = {
  id: string
  document: string
  group: string
  name: string
  type: 'PF' | 'PJ' | string
  status: ClientStatus
  address: string
  district: string
  city: string
  state: string
  stateCode?: string
  cityIbgeId?: number | null
  zipCode: string
  email: string
  phone: string
  salesperson: string
  manager: string
  contactDescription: string
  lastImportedAction: string
  lastImportedActionDate: string
  createdAt: string
  updatedAt: string
}

export type ClientRevenueMonth = {
  id: string
  clientId: string
  period: string
  amount: number
}

export type VisitStatus = 'scheduled' | 'completed' | 'canceled'

export type Visit = {
  id: string
  clientId: string
  scheduledFor: string
  purpose: string
  notes: string
  status: VisitStatus
  completedAt?: string
  createdAt: string
  updatedAt: string
}

export type SaleStage = 'lead' | 'proposal' | 'won' | 'lost'

export type Sale = {
  id: string
  clientId: string
  title: string
  amount: number
  stage: SaleStage
  expectedCloseDate: string
  closedAt?: string
  notes: string
  createdAt: string
  updatedAt: string
}

export type ContactChannel = 'whatsapp' | 'phone' | 'email' | 'in_person' | 'other'

export type ContactOutcome =
  | 'contacted'
  | 'responded'
  | 'lead'
  | 'proposal'
  | 'proposal_later'
  | 'sale'
  | 'return_scheduled'
  | 'no_answer'
  | 'not_interested'

export type ClientContact = {
  id: string
  clientId: string
  contactAt: string
  channel: ContactChannel
  outcome: ContactOutcome
  notes: string
  createdAt: string
  updatedAt: string
}

export type ControlActionInput = {
  contact: Omit<ClientContact, 'id' | 'createdAt' | 'updatedAt'>
  sale?: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>
  visit?: Omit<Visit, 'id' | 'createdAt' | 'updatedAt'>
}

export type SommelierServiceType =
  | 'Degustacao'
  | 'Treinamento'
  | 'Harmonizacao'
  | 'Consultoria'

export type ServiceStatus = 'scheduled' | 'completed' | 'canceled'

export type SommelierService = {
  id: string
  clientId: string
  type: SommelierServiceType
  scheduledFor: string
  status: ServiceStatus
  amount: number
  notes: string
  createdAt: string
  updatedAt: string
}

export type Activity = {
  id: string
  entity: 'client' | 'visit' | 'sale' | 'service' | 'system'
  entityId: string
  action: string
  description: string
  createdAt: string
}

export type UserProfile = {
  id: string
  name: string
  email: string
  role: 'owner' | 'admin' | 'user'
}

export type LocalDatabase = {
  version: 4
  initializedAt: string
  revenuePeriods: string[]
  clients: Client[]
  clientRevenueMonths: ClientRevenueMonth[]
  visits: Visit[]
  sales: Sale[]
  contacts: ClientContact[]
  services: SommelierService[]
  activities: Activity[]
  profile: UserProfile
}
