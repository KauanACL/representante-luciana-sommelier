import { format, isValid, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value || 0)

export const formatCurrencyPrecise = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(value || 0)

export const formatNumber = (value: number) =>
  new Intl.NumberFormat('pt-BR').format(value || 0)

export const formatPeriod = (period: string) => {
  const [year, month] = period.split('/')
  if (!year || !month) return period
  const date = parseISO(`${year}-${month}-01`)
  if (!isValid(date)) return period
  return format(date, 'MMM yy', { locale: ptBR }).replace('.', '')
}

export const formatDate = (value: string) => {
  if (!value) return 'Sem data'
  const date = parseISO(value)
  if (!isValid(date)) return value
  return format(date, "dd/MM/yyyy 'as' HH:mm", { locale: ptBR })
}

export const formatShortDate = (value: string) => {
  if (!value) return 'Sem data'
  const date = parseISO(value)
  if (!isValid(date)) return value
  return format(date, 'dd/MM/yyyy', { locale: ptBR })
}

export const toDateTimeLocalInput = (value: string) => {
  if (!value) return ''
  const date = parseISO(value)
  if (!isValid(date)) return ''
  const offsetMs = date.getTimezoneOffset() * 60 * 1000
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 16)
}

export const fromDateTimeLocalInput = (value: string) => {
  if (!value) return new Date().toISOString()
  return new Date(value).toISOString()
}

export const compactDocument = (document: string) => {
  if (!document) return 'Sem documento'
  if (document.length === 11) {
    return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  if (document.length === 14) {
    return document.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    )
  }
  return document
}

export const normalizeSearch = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

export const statusLabel = (status: string) => {
  const labels: Record<string, string> = {
    active: 'Ativo',
    inactive: 'Inativo',
    prospect: 'Prospect',
    attention: 'Atenção',
    scheduled: 'Agendada',
    completed: 'Concluída',
    canceled: 'Cancelada',
    lead: 'Lead',
    proposal: 'Proposta',
    won: 'Ganha',
    lost: 'Perdida',
    contacted: 'Contato feito',
    responded: 'Respondeu',
    sale: 'Venda',
    return_scheduled: 'Pediu retorno',
    no_answer: 'Não respondeu',
    not_interested: 'Sem interesse',
    proposal_later: 'Enviar proposta depois',
  }
  return labels[status] ?? status
}

export const contactChannelLabel = (channel: string) => {
  const labels: Record<string, string> = {
    whatsapp: 'WhatsApp',
    phone: 'Telefone',
    email: 'Email',
    in_person: 'Presencial',
    other: 'Outro',
  }
  return labels[channel] ?? channel
}

export const serviceTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    Degustacao: 'Degustação',
    Treinamento: 'Treinamento',
    Harmonizacao: 'Harmonização',
    Consultoria: 'Consultoria',
  }
  return labels[type] ?? type
}
