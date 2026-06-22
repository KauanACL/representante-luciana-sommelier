import type {
  Client,
  ClientRevenueMonth,
  LocalDatabase,
  Sale,
  SommelierService,
  Visit,
} from '../types/models'

export const byId = <T extends { id: string }>(items: T[]) =>
  new Map(items.map((item) => [item.id, item]))

export const sum = (values: number[]) => values.reduce((total, value) => total + value, 0)

export const getLatestRevenuePeriod = (database: LocalDatabase) =>
  database.revenuePeriods[database.revenuePeriods.length - 1] ?? ''

export const revenueForPeriod = (revenues: ClientRevenueMonth[], period: string) =>
  sum(revenues.filter((item) => item.period === period).map((item) => item.amount))

export const monthlyRevenueSeries = (database: LocalDatabase, limit = 12) =>
  database.revenuePeriods.slice(-limit).map((period) => ({
    period,
    amount: revenueForPeriod(database.clientRevenueMonths, period),
  }))

export const monthlyRevenueMetrics = (database: LocalDatabase, limit = 12) =>
  database.revenuePeriods.slice(-limit).map((period) => {
    const rows = database.clientRevenueMonths.filter(
      (item) => item.period === period && item.amount > 0,
    )
    const amount = sum(rows.map((item) => item.amount))
    const buyerCount = new Set(rows.map((item) => item.clientId)).size

    return {
      period,
      amount,
      buyerCount,
      averageTicket: buyerCount ? amount / buyerCount : 0,
    }
  })

export const clientRevenueSeries = (database: LocalDatabase, clientId: string) =>
  database.revenuePeriods.map((period) => ({
    period,
    amount:
      database.clientRevenueMonths.find(
        (item) => item.clientId === clientId && item.period === period,
      )?.amount ?? 0,
  }))

export const totalRevenueByClient = (revenues: ClientRevenueMonth[]) => {
  const totals = new Map<string, number>()
  for (const revenue of revenues) {
    totals.set(revenue.clientId, (totals.get(revenue.clientId) ?? 0) + revenue.amount)
  }
  return totals
}

export const topClientsByRevenue = (database: LocalDatabase, limit = 8) => {
  const totals = totalRevenueByClient(database.clientRevenueMonths)
  return [...database.clients]
    .map((client) => ({ client, amount: totals.get(client.id) ?? 0 }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit)
}

export const revenueByCity = (clients: Client[], revenues: ClientRevenueMonth[], limit = 8) => {
  const clientsMap = byId(clients)
  const totals = new Map<string, number>()

  for (const revenue of revenues) {
    const city = clientsMap.get(revenue.clientId)?.city || 'Sem cidade'
    totals.set(city, (totals.get(city) ?? 0) + revenue.amount)
  }

  return [...totals.entries()]
    .map(([city, amount]) => ({ city, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit)
}

export const upcomingItems = (
  clients: Client[],
  visits: Visit[],
  services: SommelierService[],
  limit = 8,
) => {
  const clientsMap = byId(clients)
  const visitItems = visits
    .filter((visit) => visit.status === 'scheduled')
    .map((visit) => ({
      id: visit.id,
      kind: 'Visita',
      title: visit.purpose,
      clientName: clientsMap.get(visit.clientId)?.name ?? 'Cliente',
      scheduledFor: visit.scheduledFor,
    }))

  const serviceItems = services
    .filter((service) => service.status === 'scheduled')
    .map((service) => ({
      id: service.id,
      kind: 'Serviço',
      title: service.type,
      clientName: clientsMap.get(service.clientId)?.name ?? 'Cliente',
      scheduledFor: service.scheduledFor,
    }))

  return [...visitItems, ...serviceItems]
    .sort((a, b) => a.scheduledFor.localeCompare(b.scheduledFor))
    .slice(0, limit)
}

export const salesPipeline = (sales: Sale[]) => {
  const stages = ['lead', 'proposal', 'won', 'lost'] as const
  return stages.map((stage) => ({
    stage,
    count: sales.filter((sale) => sale.stage === stage).length,
    amount: sum(sales.filter((sale) => sale.stage === stage).map((sale) => sale.amount)),
  }))
}

export const clientGroupSummary = (clients: Client[]) => {
  const groups = new Map<string, number>()
  for (const client of clients) {
    groups.set(client.group || 'Sem grupo', (groups.get(client.group || 'Sem grupo') ?? 0) + 1)
  }

  return [...groups.entries()]
    .map(([group, count]) => ({ group, count }))
    .sort((a, b) => b.count - a.count)
}

