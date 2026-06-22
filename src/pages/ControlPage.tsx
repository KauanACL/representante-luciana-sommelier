import {
  BellRing,
  CalendarPlus,
  CheckCircle2,
  CircleDollarSign,
  Handshake,
  Search,
  Send,
  TrendingUp,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { EmptyState } from '../components/EmptyState'
import { StatCard } from '../components/StatCard'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { byId, sum } from '../lib/analytics'
import {
  compactDocument,
  formatCurrencyPrecise,
  formatDate,
  formatShortDate,
  fromDateTimeLocalInput,
  normalizeSearch,
  statusLabel,
  toDateTimeLocalInput,
} from '../lib/formatters'
import type {
  Client,
  ClientContact,
  ClientStatus,
  ContactChannel,
  ContactOutcome,
  SaleStage,
} from '../types/models'
import type { FormEvent } from 'react'

const periodOptions = [
  { value: 'month', label: 'Este mês' },
  { value: '7', label: 'Últimos 7 dias' },
  { value: '15', label: 'Últimos 15 dias' },
  { value: '30', label: 'Últimos 30 dias' },
  { value: '60', label: 'Últimos 60 dias' },
  { value: '90', label: 'Últimos 90 dias' },
  { value: 'never', label: 'Tudo sem contato' },
] as const

type PeriodFilter = (typeof periodOptions)[number]['value']
type StatusFilter = ClientStatus | 'all'
type TypeFilter = 'all' | 'PF' | 'PJ'
type DealAction = 'lead' | 'proposal' | 'won'
type ControlAction = 'contact' | DealAction | 'return'

const contactOutcomeOptions: Array<{ value: ContactOutcome; label: string }> = [
  { value: 'responded', label: 'Respondeu' },
  { value: 'no_answer', label: 'Não respondeu' },
  { value: 'return_scheduled', label: 'Pediu retorno' },
  { value: 'not_interested', label: 'Sem interesse' },
  { value: 'proposal_later', label: 'Enviar proposta depois' },
  { value: 'contacted', label: 'Contato feito' },
]

const channelOptions: Array<{ value: ContactChannel; label: string }> = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'phone', label: 'Telefone' },
  { value: 'email', label: 'Email' },
  { value: 'in_person', label: 'Presencial' },
  { value: 'other', label: 'Outro' },
]

const todayDateInput = () => new Date().toISOString().slice(0, 10)

const tomorrowDateTimeInput = () =>
  toDateTimeLocalInput(new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString())

const startOfPeriod = (period: PeriodFilter) => {
  const now = new Date()

  if (period === 'never') return null
  if (period === 'month') return new Date(now.getFullYear(), now.getMonth(), 1)

  const date = new Date(now)
  date.setDate(date.getDate() - Number(period))
  return date
}

const saleActionMeta: Record<
  DealAction,
  { title: string; button: string; stage: SaleStage; outcome: ContactOutcome }
> = {
  lead: {
    title: 'Registrar olhando',
    button: 'Salvar olhando',
    stage: 'lead',
    outcome: 'lead',
  },
  proposal: {
    title: 'Registrar proposta',
    button: 'Salvar proposta',
    stage: 'proposal',
    outcome: 'proposal',
  },
  won: {
    title: 'Registrar venda ganha',
    button: 'Salvar venda ganha',
    stage: 'won',
    outcome: 'sale',
  },
}

const lastContactByClient = (contacts: ClientContact[]) => {
  const latest = new Map<string, ClientContact>()

  for (const contact of [...contacts].sort((a, b) => b.contactAt.localeCompare(a.contactAt))) {
    if (!latest.has(contact.clientId)) latest.set(contact.clientId, contact)
  }

  return latest
}

export function ControlPage() {
  const { clients, contacts, sales, registerControlAction } = useData()
  const clientsMap = useMemo(() => byId(clients), [clients])
  const latestContacts = useMemo(() => lastContactByClient(contacts), [contacts])
  const [period, setPeriod] = useState<PeriodFilter>('month')
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('all')
  const [type, setType] = useState<TypeFilter>('all')
  const [status, setStatus] = useState<StatusFilter>('active')
  const [activeAction, setActiveAction] = useState<{ clientId: string; type: ControlAction } | null>(null)
  const [savingAction, setSavingAction] = useState('')
  const [saleForm, setSaleForm] = useState({
    title: '',
    amount: '',
    expectedCloseDate: todayDateInput(),
    notes: '',
  })
  const [contactForm, setContactForm] = useState({
    channel: 'whatsapp' as ContactChannel,
    outcome: 'responded' as ContactOutcome,
    notes: '',
    returnScheduledFor: tomorrowDateTimeInput(),
    returnPurpose: 'Retorno comercial',
    proposalTitle: '',
    proposalAmount: '',
    proposalExpectedCloseDate: todayDateInput(),
  })
  const [returnForm, setReturnForm] = useState({
    scheduledFor: tomorrowDateTimeInput(),
    purpose: 'Retorno comercial',
    notes: '',
  })

  const periodStart = useMemo(() => startOfPeriod(period), [period])

  const cityOptions = useMemo(() => {
    const cities = new Map<string, string>()
    for (const client of clients) {
      if (!client.city) continue
      cities.set(normalizeSearch(client.city), client.city)
    }
    return [...cities.entries()].sort((a, b) => a[1].localeCompare(b[1], 'pt-BR'))
  }, [clients])

  const filteredClients = useMemo(() => {
    const query = normalizeSearch(search)
    const cityKey = city === 'all' ? '' : city

    return clients.filter((client) => {
      if (status !== 'all' && client.status !== status) return false
      if (type !== 'all' && client.type !== type) return false
      if (cityKey && normalizeSearch(client.city) !== cityKey) return false

      if (!query) return true

      return normalizeSearch(
        [
          client.name,
          client.document,
          client.city,
          client.state,
          client.group,
          client.email,
          client.phone,
        ].join(' '),
      ).includes(query)
    })
  }, [city, clients, search, status, type])

  const pendingClients = useMemo(
    () =>
      filteredClients
        .filter((client) => {
          const lastContact = latestContacts.get(client.id)
          if (period === 'never') return !lastContact
          if (!lastContact || !periodStart) return true
          return new Date(lastContact.contactAt) < periodStart
        })
        .sort((a, b) => {
          const aContact = latestContacts.get(a.id)
          const bContact = latestContacts.get(b.id)

          if (!aContact && bContact) return -1
          if (aContact && !bContact) return 1
          if (!aContact && !bContact) return a.name.localeCompare(b.name, 'pt-BR')

          return (aContact?.contactAt ?? '').localeCompare(bContact?.contactAt ?? '')
        }),
    [filteredClients, latestContacts, period, periodStart],
  )

  const contactedClientCount = useMemo(() => {
    const allowedClients = new Set(filteredClients.map((client) => client.id))
    const contacted = new Set<string>()

    for (const contact of contacts) {
      if (!allowedClients.has(contact.clientId)) continue
      if (periodStart && new Date(contact.contactAt) < periodStart) continue
      contacted.add(contact.clientId)
    }

    return contacted.size
  }, [contacts, filteredClients, periodStart])

  const openPipeline = sales.filter((sale) => sale.stage === 'lead' || sale.stage === 'proposal')
  const wonSalesInPeriod = sales.filter((sale) => {
    if (sale.stage !== 'won') return false
    if (!periodStart) return true
    return new Date(sale.expectedCloseDate) >= periodStart
  })
  const wonAmount = sum(wonSalesInPeriod.map((sale) => sale.amount))
  const selectedPeriodLabel = periodOptions.find((item) => item.value === period)?.label ?? ''

  const openDealForm = (client: Client, action: DealAction) => {
    setActiveAction({ clientId: client.id, type: action })
    setSaleForm({
      title:
        action === 'won'
          ? `Venda - ${client.name}`
          : action === 'proposal'
            ? `Proposta - ${client.name}`
            : `Olhando - ${client.name}`,
      amount: '',
      expectedCloseDate: todayDateInput(),
      notes: '',
    })
  }

  const openContactForm = (client: Client) => {
    setActiveAction({ clientId: client.id, type: 'contact' })
    setContactForm({
      channel: 'whatsapp',
      outcome: 'responded',
      notes: '',
      returnScheduledFor: tomorrowDateTimeInput(),
      returnPurpose: 'Retorno comercial',
      proposalTitle: `Proposta - ${client.name}`,
      proposalAmount: '',
      proposalExpectedCloseDate: todayDateInput(),
    })
  }

  const openReturnForm = (clientId: string) => {
    setActiveAction({ clientId, type: 'return' })
    setReturnForm({
      scheduledFor: tomorrowDateTimeInput(),
      purpose: 'Retorno comercial',
      notes: '',
    })
  }

  const saveActionForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!activeAction) return

    const client = clientsMap.get(activeAction.clientId)
    if (!client) return

    const actionKey = `${activeAction.clientId}:${activeAction.type}`
    setSavingAction(actionKey)
    const contactAt = new Date().toISOString()

    if (activeAction.type === 'contact') {
      const outcome = contactForm.outcome
      const notes = contactForm.notes.trim()
      await registerControlAction({
        contact: {
          clientId: activeAction.clientId,
          contactAt,
          channel: contactForm.channel,
          outcome,
          notes: notes || contactOutcomeOptions.find((option) => option.value === outcome)?.label || '',
        },
        visit:
          outcome === 'return_scheduled'
            ? {
                clientId: activeAction.clientId,
                scheduledFor: fromDateTimeLocalInput(contactForm.returnScheduledFor),
                purpose: contactForm.returnPurpose.trim() || 'Retorno comercial',
                notes,
                status: 'scheduled',
              }
            : undefined,
        sale:
          outcome === 'proposal_later'
            ? {
                clientId: activeAction.clientId,
                title: contactForm.proposalTitle.trim() || `Proposta - ${client.name}`,
                amount: Number(contactForm.proposalAmount || 0),
                stage: 'proposal',
                expectedCloseDate: new Date(`${contactForm.proposalExpectedCloseDate}T12:00:00`).toISOString(),
                notes,
              }
            : undefined,
      })
    } else if (activeAction.type === 'return') {
      await registerControlAction({
        contact: {
          clientId: activeAction.clientId,
          contactAt,
          channel: 'other',
          outcome: 'return_scheduled',
          notes: returnForm.notes.trim() || `Retorno agendado para ${client.name}.`,
        },
        visit: {
          clientId: activeAction.clientId,
          scheduledFor: fromDateTimeLocalInput(returnForm.scheduledFor),
          purpose: returnForm.purpose.trim() || 'Retorno comercial',
          notes: returnForm.notes.trim(),
          status: 'scheduled',
        },
      })
    } else {
      const meta = saleActionMeta[activeAction.type]
      const title = saleForm.title.trim() || `${meta.button} - ${client.name}`
      const notes = saleForm.notes.trim()
      const saleDate = new Date(`${saleForm.expectedCloseDate}T12:00:00`).toISOString()

      await registerControlAction({
        contact: {
          clientId: activeAction.clientId,
          contactAt,
          channel: 'other',
          outcome: meta.outcome,
          notes: notes || `${statusLabel(meta.stage)} registrada pela tela de controle.`,
        },
        sale: {
          clientId: activeAction.clientId,
          title,
          amount: Number(saleForm.amount || 0),
          stage: meta.stage,
          expectedCloseDate: saleDate,
          closedAt: meta.stage === 'won' ? saleDate : undefined,
          notes,
        },
      })
    }

    setActiveAction(null)
    setSavingAction('')
  }

  return (
    <div className="stack-page control-page">
      <section className="panel control-hero">
        <div>
          <span className="soft-pill">Controle comercial</span>
          <h2>Clientes sem contato no período</h2>
          <p>
            Use esta fila para marcar contatos, abrir oportunidades, registrar propostas,
            vendas ganhas e retornos sem sair da lista.
          </p>
        </div>
        <strong>{selectedPeriodLabel}</strong>
      </section>

      <section className="stat-grid">
        <StatCard
          label="Pendentes"
          value={String(pendingClients.length)}
          detail="Clientes no filtro atual"
          icon={BellRing}
        />
        <StatCard
          label="Contatados"
          value={String(contactedClientCount)}
          detail={period === 'never' ? 'Com histórico' : selectedPeriodLabel}
          icon={CheckCircle2}
        />
        <StatCard
          label="Em negociação"
          value={String(openPipeline.length)}
          detail="Olhando e propostas"
          icon={Handshake}
        />
        <StatCard
          label="Vendas ganhas"
          value={formatCurrencyPrecise(wonAmount)}
          detail={`${wonSalesInPeriod.length} venda(s) no período`}
          icon={CircleDollarSign}
        />
      </section>

      <section className="control-toolbar">
        <label className="control-toolbar__search">
          Buscar
          <span>
            <Search size={16} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cliente, doc. ou cidade"
            />
          </span>
        </label>
        <label>
          Período
          <select value={period} onChange={(event) => setPeriod(event.target.value as PeriodFilter)}>
            {periodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Cidade
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="all">Todas as cidades</option>
            {cityOptions.map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Tipo
          <select value={type} onChange={(event) => setType(event.target.value as TypeFilter)}>
            <option value="all">PF e PJ</option>
            <option value="PF">PF</option>
            <option value="PJ">PJ</option>
          </select>
        </label>
        <label>
          Status
          <select value={status} onChange={(event) => setStatus(event.target.value as StatusFilter)}>
            <option value="all">Todos os status</option>
            <option value="active">Ativos</option>
            <option value="attention">Atenção</option>
            <option value="prospect">Prospects</option>
            <option value="inactive">Inativos</option>
          </select>
        </label>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Lista de acompanhamento</h2>
            <p>
              {pendingClients.length} cliente(s) sem contato para o período e filtros atuais.
            </p>
          </div>
        </div>

        {pendingClients.length ? (
          <div className="control-list">
            {pendingClients.map((client) => {
              const lastContact = latestContacts.get(client.id)
              const actionKeyPrefix = `${client.id}:`
              const isActionOpen = activeAction?.clientId === client.id

              return (
                <article key={client.id} className="control-card">
                  <div className="control-card__main">
                    <header className="control-card__header">
                      <div>
                        <strong>{client.name}</strong>
                        <span>
                          {client.city || 'Sem cidade'}
                          {client.state ? `/${client.state}` : ''} · {compactDocument(client.document)}
                        </span>
                      </div>
                      <StatusBadge status={client.status} />
                    </header>

                    <div className="control-card__meta">
                      <span>
                        <BellRing size={14} />
                        {lastContact
                          ? `Último contato em ${formatShortDate(lastContact.contactAt)}`
                          : 'Nunca contatada'}
                      </span>
                      <span>{client.type}</span>
                      <span>{client.group || 'Sem grupo'}</span>
                    </div>
                  </div>

                  <div className="control-card__actions">
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={() => openContactForm(client)}
                    >
                      <CheckCircle2 size={16} />
                      Contato feito
                    </button>
                    <button type="button" className="ghost-button" onClick={() => openDealForm(client, 'lead')}>
                      <TrendingUp size={16} />
                      Olhando
                    </button>
                    <button type="button" className="ghost-button" onClick={() => openDealForm(client, 'proposal')}>
                      <Send size={16} />
                      Proposta
                    </button>
                    <button type="button" className="primary-button" onClick={() => openDealForm(client, 'won')}>
                      <CircleDollarSign size={16} />
                      Venda ganha
                    </button>
                    <button type="button" className="ghost-button" onClick={() => openReturnForm(client.id)}>
                      <CalendarPlus size={16} />
                      Retorno
                    </button>
                  </div>

                  {isActionOpen && (
                    <form className="control-action-form" onSubmit={saveActionForm}>
                      {activeAction.type === 'contact' ? (
                        <>
                          <label>
                            Canal
                            <select
                              value={contactForm.channel}
                              onChange={(event) =>
                                setContactForm((current) => ({
                                  ...current,
                                  channel: event.target.value as ContactChannel,
                                }))
                              }
                            >
                              {channelOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label>
                            Resultado
                            <select
                              value={contactForm.outcome}
                              onChange={(event) =>
                                setContactForm((current) => ({
                                  ...current,
                                  outcome: event.target.value as ContactOutcome,
                                }))
                              }
                            >
                              {contactOutcomeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          {contactForm.outcome === 'return_scheduled' && (
                            <>
                              <label>
                                Data do retorno
                                <input
                                  type="datetime-local"
                                  value={contactForm.returnScheduledFor}
                                  onChange={(event) =>
                                    setContactForm((current) => ({
                                      ...current,
                                      returnScheduledFor: event.target.value,
                                    }))
                                  }
                                />
                              </label>
                              <label>
                                Objetivo do retorno
                                <input
                                  value={contactForm.returnPurpose}
                                  onChange={(event) =>
                                    setContactForm((current) => ({
                                      ...current,
                                      returnPurpose: event.target.value,
                                    }))
                                  }
                                />
                              </label>
                            </>
                          )}
                          {contactForm.outcome === 'proposal_later' && (
                            <>
                              <label>
                                Proposta
                                <input
                                  value={contactForm.proposalTitle}
                                  onChange={(event) =>
                                    setContactForm((current) => ({
                                      ...current,
                                      proposalTitle: event.target.value,
                                    }))
                                  }
                                />
                              </label>
                              <label>
                                Valor previsto
                                <input
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  value={contactForm.proposalAmount}
                                  onChange={(event) =>
                                    setContactForm((current) => ({
                                      ...current,
                                      proposalAmount: event.target.value,
                                    }))
                                  }
                                  placeholder="0,00"
                                />
                              </label>
                              <label>
                                Enviar até
                                <input
                                  type="date"
                                  value={contactForm.proposalExpectedCloseDate}
                                  onChange={(event) =>
                                    setContactForm((current) => ({
                                      ...current,
                                      proposalExpectedCloseDate: event.target.value,
                                    }))
                                  }
                                />
                              </label>
                            </>
                          )}
                          <label className="control-action-form__wide">
                            Observações
                            <textarea
                              rows={3}
                              value={contactForm.notes}
                              onChange={(event) =>
                                setContactForm((current) => ({
                                  ...current,
                                  notes: event.target.value,
                                }))
                              }
                            />
                          </label>
                        </>
                      ) : activeAction.type === 'return' ? (
                        <>
                          <label>
                            Data e horário
                            <input
                              type="datetime-local"
                              value={returnForm.scheduledFor}
                              onChange={(event) =>
                                setReturnForm((current) => ({
                                  ...current,
                                  scheduledFor: event.target.value,
                                }))
                              }
                            />
                          </label>
                          <label>
                            Objetivo
                            <input
                              value={returnForm.purpose}
                              onChange={(event) =>
                                setReturnForm((current) => ({
                                  ...current,
                                  purpose: event.target.value,
                                }))
                              }
                            />
                          </label>
                          <label className="control-action-form__wide">
                            Observações
                            <textarea
                              rows={3}
                              value={returnForm.notes}
                              onChange={(event) =>
                                setReturnForm((current) => ({
                                  ...current,
                                  notes: event.target.value,
                                }))
                              }
                            />
                          </label>
                        </>
                      ) : (
                        <>
                          <label>
                            {saleActionMeta[activeAction.type].title}
                            <input
                              value={saleForm.title}
                              onChange={(event) =>
                                setSaleForm((current) => ({ ...current, title: event.target.value }))
                              }
                            />
                          </label>
                          <label>
                            Valor
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              value={saleForm.amount}
                              onChange={(event) =>
                                setSaleForm((current) => ({ ...current, amount: event.target.value }))
                              }
                              placeholder="0,00"
                            />
                          </label>
                          <label>
                            Data
                            <input
                              type="date"
                              value={saleForm.expectedCloseDate}
                              onChange={(event) =>
                                setSaleForm((current) => ({
                                  ...current,
                                  expectedCloseDate: event.target.value,
                                }))
                              }
                            />
                          </label>
                          <label className="control-action-form__wide">
                            Observações
                            <textarea
                              rows={3}
                              value={saleForm.notes}
                              onChange={(event) =>
                                setSaleForm((current) => ({ ...current, notes: event.target.value }))
                              }
                            />
                          </label>
                        </>
                      )}

                      <div className="control-action-form__buttons">
                        <button
                          type="button"
                          className="ghost-button"
                          onClick={() => setActiveAction(null)}
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="primary-button"
                          disabled={savingAction.startsWith(actionKeyPrefix)}
                        >
                          {savingAction.startsWith(actionKeyPrefix)
                            ? 'Salvando...'
                            : activeAction.type === 'contact'
                              ? 'Salvar contato'
                              : activeAction.type === 'return'
                              ? 'Agendar retorno'
                              : saleActionMeta[activeAction.type].button}
                        </button>
                      </div>
                    </form>
                  )}

                  {lastContact && (
                    <small className="control-card__history">
                      Último resultado: {statusLabel(lastContact.outcome)} · {formatDate(lastContact.contactAt)}
                    </small>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <EmptyState
            icon={CheckCircle2}
            title="Nenhum cliente pendente"
            description="Os filtros atuais não têm clientes em atraso de contato."
          />
        )}
      </section>
    </div>
  )
}
