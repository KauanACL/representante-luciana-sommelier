import type * as XLSXType from 'xlsx'
import { byId, periodFromDate, sum, wonSalesRevenueMetrics } from './analytics'
import { formatDate, formatPeriod, formatShortDate, serviceTypeLabel, statusLabel } from './formatters'
import type { LocalDatabase } from '../types/models'

type CellValue = string | number | boolean | Date
type XlsxModule = typeof import('xlsx')

type SheetDefinition = {
  name: string
  headers: string[]
  rows: CellValue[][]
  widths: number[]
  currencyColumns?: number[]
}

const currencyFormat = '"R$" #,##0'

const safeDate = (value: string, withTime = false) => {
  if (!value) return ''
  return withTime ? formatDate(value) : formatShortDate(value)
}

const clientContact = (email: string, phone: string) =>
  [email, phone].filter(Boolean).join(' | ')

const setCurrencyFormat = (
  XLSX: XlsxModule,
  worksheet: XLSXType.WorkSheet,
  columns: number[],
) => {
  const ref = worksheet['!ref']
  if (!ref || columns.length === 0) return

  const range = XLSX.utils.decode_range(ref)
  for (let row = 1; row <= range.e.r; row += 1) {
    for (const column of columns) {
      const address = XLSX.utils.encode_cell({ r: row, c: column })
      const cell = worksheet[address]
      if (cell && typeof cell.v === 'number') {
        cell.z = currencyFormat
      }
    }
  }
}

const appendSheet = (
  XLSX: XlsxModule,
  workbook: XLSXType.WorkBook,
  definition: SheetDefinition,
) => {
  const worksheet = XLSX.utils.aoa_to_sheet([definition.headers, ...definition.rows])
  worksheet['!cols'] = definition.widths.map((width) => ({ wch: width }))
  setCurrencyFormat(XLSX, worksheet, definition.currencyColumns ?? [])
  XLSX.utils.book_append_sheet(workbook, worksheet, definition.name)
}

export const buildReportsWorkbook = async (database: LocalDatabase) => {
  const XLSX = await import('xlsx')
  const workbook = XLSX.utils.book_new()
  const clientsMap = byId(database.clients)
  const wonSales = database.sales.filter((sale) => sale.stage === 'won')
  const totalRevenue = sum(wonSales.map((sale) => sale.amount))
  const last12Revenue = sum(wonSalesRevenueMetrics(database.sales, 12).map((item) => item.amount))
  const salesAmount = sum(database.sales.map((sale) => sale.amount))
  const servicesAmount = sum(database.services.map((service) => service.amount))

  appendSheet(XLSX, workbook, {
    name: 'Resumo',
    headers: ['Indicador', 'Valor'],
    widths: [34, 22],
    currencyColumns: [1],
    rows: [
      ['Gerado em', safeDate(new Date().toISOString(), true)],
      ['Clientes cadastrados', database.clients.length],
      ['Clientes ativos', database.clients.filter((client) => client.status === 'active').length],
      [
        'Clientes inativos',
        database.clients.filter((client) => client.status === 'inactive').length,
      ],
      ['Clientes em atenção', database.clients.filter((client) => client.status === 'attention').length],
      ['Prospects', database.clients.filter((client) => client.status === 'prospect').length],
      ['Faturamento total Luciana', totalRevenue],
      ['Faturamento últimos 12 meses', last12Revenue],
      ['Vendas registradas', database.sales.length],
      ['Vendas ganhas', wonSales.length],
      ['Valor em vendas', salesAmount],
      ['Visitas registradas', database.visits.length],
      ['Serviços registrados', database.services.length],
      ['Valor em serviços', servicesAmount],
    ],
  })

  appendSheet(XLSX, workbook, {
    name: 'Clientes',
    headers: [
      'Nome',
      'Documento',
      'Tipo',
      'Status',
      'Grupo',
      'Cidade',
      'UF',
      'Contato',
      'Vendedor',
      'Gestor',
    ],
    widths: [34, 20, 10, 16, 12, 24, 8, 34, 18, 22],
    rows: database.clients.map((client) => [
      client.name,
      client.document,
      client.type,
      statusLabel(client.status),
      client.group,
      client.city,
      client.state,
      clientContact(client.email, client.phone),
      client.salesperson,
      client.manager,
    ]),
  })

  appendSheet(XLSX, workbook, {
    name: 'Faturamento',
    headers: ['Cliente', 'Documento', 'Venda', 'Período', 'Mês', 'Valor', 'Cidade', 'UF', 'Grupo'],
    widths: [34, 20, 28, 12, 12, 16, 24, 8, 12],
    currencyColumns: [5],
    rows: wonSales.map((sale) => {
      const client = clientsMap.get(sale.clientId)
      const period = periodFromDate(sale.expectedCloseDate)
      return [
        client?.name ?? 'Cliente não encontrado',
        client?.document ?? '',
        sale.title,
        period,
        formatPeriod(period),
        sale.amount,
        client?.city ?? '',
        client?.state ?? '',
        client?.group ?? '',
      ]
    }),
  })

  appendSheet(XLSX, workbook, {
    name: 'Vendas',
    headers: ['Cliente', 'Título', 'Valor', 'Etapa', 'Previsão de fechamento', 'Observações'],
    widths: [34, 28, 16, 18, 22, 40],
    currencyColumns: [2],
    rows: database.sales.map((sale) => {
      const client = clientsMap.get(sale.clientId)
      return [
        client?.name ?? 'Cliente não encontrado',
        sale.title,
        sale.amount,
        statusLabel(sale.stage),
        safeDate(sale.expectedCloseDate),
        sale.notes,
      ]
    }),
  })

  appendSheet(XLSX, workbook, {
    name: 'Visitas',
    headers: ['Cliente', 'Data', 'Objetivo', 'Status', 'Observações'],
    widths: [34, 22, 30, 18, 42],
    rows: database.visits.map((visit) => {
      const client = clientsMap.get(visit.clientId)
      return [
        client?.name ?? 'Cliente não encontrado',
        safeDate(visit.scheduledFor, true),
        visit.purpose,
        statusLabel(visit.status),
        visit.notes,
      ]
    }),
  })

  appendSheet(XLSX, workbook, {
    name: 'Serviços',
    headers: ['Cliente', 'Tipo', 'Data', 'Status', 'Valor', 'Observações'],
    widths: [34, 20, 22, 18, 16, 42],
    currencyColumns: [4],
    rows: database.services.map((service) => {
      const client = clientsMap.get(service.clientId)
      return [
        client?.name ?? 'Cliente não encontrado',
        serviceTypeLabel(service.type),
        safeDate(service.scheduledFor, true),
        statusLabel(service.status),
        service.amount,
        service.notes,
      ]
    }),
  })

  return workbook
}

export const exportReportsExcel = async (database: LocalDatabase) => {
  const today = new Date().toISOString().slice(0, 10)
  const XLSX = await import('xlsx')
  XLSX.writeFile(await buildReportsWorkbook(database), `luciana-queiroz-relatorios-${today}.xlsx`, {
    compression: true,
  })
}
