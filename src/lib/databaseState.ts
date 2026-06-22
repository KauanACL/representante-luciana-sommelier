import type { LocalDatabase, UserProfile } from '../types/models'

export const emptyProfile: UserProfile = {
  id: 'anonymous',
  name: 'Luciana',
  email: '',
  role: 'user',
}

export const createEmptyDatabaseState = (profile: UserProfile = emptyProfile): LocalDatabase => ({
  version: 2,
  initializedAt: new Date().toISOString(),
  revenuePeriods: [],
  clients: [],
  clientRevenueMonths: [],
  visits: [],
  sales: [],
  services: [],
  activities: [],
  profile,
})

