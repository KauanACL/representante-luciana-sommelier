import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, CircleDollarSign, MessageCircle, Save } from 'lucide-react'
import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts'
import { z } from 'zod'
import { EmptyState } from '../components/EmptyState'
import { LocationSelect } from '../components/LocationSelect'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { wonSalesRevenueMetrics } from '../lib/analytics'
import {
  compactDocument,
  contactChannelLabel,
  formatCurrency,
  formatDate,
  formatPeriod,
  formatShortDate,
  serviceTypeLabel,
  statusLabel,
} from '../lib/formatters'
import { resolveLocation, resolveLocationFromCityId } from '../lib/locations'
import type { ClientStatus } from '../types/models'

const editSchema = z.object({
  name: z.string().min(2),
  document: z.string(),
  type: z.string(),
  group: z.string(),
  status: z.enum(['active', 'inactive', 'prospect', 'attention']),
  stateCode: z.string().optional(),
  cityIbgeId: z.number().nullable().optional(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  district: z.string(),
  zipCode: z.string(),
  contactDescription: z.string(),
})

type EditForm = z.infer<typeof editSchema>

export function ClientDetailPage() {
  const { id } = useParams()
  const { clients, visits, sales, contacts, services, updateClient } = useData()
  const client = clients.find((item) => item.id === id)
  const form = useForm<EditForm>({
    resolver: zodResolver(editSchema),
  })
  const selectedStateCode = useWatch({ control: form.control, name: 'stateCode' }) ?? ''
  const selectedCityIbgeId = useWatch({ control: form.control, name: 'cityIbgeId' }) ?? null

  useEffect(() => {
    if (!client) return
    const location = resolveLocation({
      city: client.city,
      state: client.state,
      stateCode: client.stateCode,
      cityIbgeId: client.cityIbgeId,
    })

    form.reset({
      name: client.name,
      document: client.document,
      type: client.type,
      group: client.group,
      status: client.status,
      stateCode: location.stateCode,
      cityIbgeId: location.cityIbgeId,
      email: client.email,
      phone: client.phone,
      address: client.address,
      district: client.district,
      zipCode: client.zipCode,
      contactDescription: client.contactDescription,
    })
  }, [client, form])

  if (!client) return <Navigate to="/clientes" replace />

  const clientVisits = visits.filter((visit) => visit.clientId === client.id)
  const clientSales = sales.filter((sale) => sale.clientId === client.id)
  const clientContacts = contacts
    .filter((contact) => contact.clientId === client.id)
    .sort((a, b) => b.contactAt.localeCompare(a.contactAt))
  const clientServices = services.filter((service) => service.clientId === client.id)
  const operationalHistory = [
    ...clientContacts.map((contact) => ({
      id: `contact-${contact.id}`,
      date: contact.contactAt,
      title: statusLabel(contact.outcome),
      detail: `Contato | ${contactChannelLabel(contact.channel)}`,
      note: contact.notes,
    })),
    ...clientVisits.map((visit) => ({
      id: `visit-${visit.id}`,
      date: visit.scheduledFor,
      title: visit.purpose,
      detail: `Visita | ${formatDate(visit.scheduledFor)}`,
      note: visit.notes,
    })),
    ...clientSales.map((sale) => ({
      id: `sale-${sale.id}`,
      date: sale.closedAt || sale.expectedCloseDate,
      title: sale.title,
      detail: `Venda | ${formatCurrency(sale.amount)}`,
      note: statusLabel(sale.stage),
    })),
    ...clientServices.map((service) => ({
      id: `service-${service.id}`,
      date: service.scheduledFor,
      title: serviceTypeLabel(service.type),
      detail: `Serviço | ${formatShortDate(service.scheduledFor)}`,
      note: statusLabel(service.status),
    })),
  ].sort((a, b) => b.date.localeCompare(a.date))
  const chartData = wonSalesRevenueMetrics(clientSales, 12).map((item) => ({
    ...item,
    label: formatPeriod(item.period),
  }))
  const totalRevenue = clientSales
    .filter((sale) => sale.stage === 'won')
    .reduce((total, sale) => total + sale.amount, 0)

  const onSubmit = form.handleSubmit(async (values) => {
    const selectedLocation =
      resolveLocationFromCityId(values.cityIbgeId ?? null) ??
      resolveLocation({ state: values.stateCode ?? client.stateCode ?? client.state })

    await updateClient({
      ...client,
      ...values,
      status: values.status as ClientStatus,
      city: selectedLocation.city,
      state: selectedLocation.state,
      stateCode: selectedLocation.stateCode,
      cityIbgeId: selectedLocation.cityIbgeId,
    })
  })

  return (
    <div className="stack-page">
      <Link to="/clientes" className="back-link">
        <ArrowLeft size={17} />
        Voltar para clientes
      </Link>

      <section className="detail-hero">
        <div>
          <h2>{client.name}</h2>
          <p>{[client.city, client.state].filter(Boolean).join(' / ') || 'Cidade não informada'}</p>
        </div>
        <div className="detail-hero__meta">
          <StatusBadge status={client.status} />
          <strong>{formatCurrency(totalRevenue)}</strong>
          <span>{compactDocument(client.document)}</span>
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Editar cadastro</h2>
            <p>Atualize os dados cadastrais e mantenha o cadastro organizado.</p>
          </div>
        </div>
        <form className="form-grid" onSubmit={onSubmit}>
          <label>
            Nome
            <input {...form.register('name')} />
          </label>
          <label>
            CNPJ/CPF
            <input {...form.register('document')} />
          </label>
          <label>
            Tipo
            <select {...form.register('type')}>
              <option value="PJ">PJ</option>
              <option value="PF">PF</option>
            </select>
          </label>
          <label>
            Grupo
            <input {...form.register('group')} />
          </label>
          <label>
            Status
            <select {...form.register('status')}>
              <option value="active">Ativo</option>
              <option value="attention">Atenção</option>
              <option value="prospect">Prospect</option>
              <option value="inactive">Inativo</option>
            </select>
          </label>
          <LocationSelect
            allowEmptyCity
            stateCode={selectedStateCode}
            cityIbgeId={selectedCityIbgeId}
            onChange={(location) => {
              form.setValue('stateCode', location.stateCode, {
                shouldDirty: true,
                shouldValidate: true,
              })
              form.setValue('cityIbgeId', location.cityIbgeId, {
                shouldDirty: true,
                shouldValidate: true,
              })
            }}
          />
          <label>
            CEP
            <input {...form.register('zipCode')} />
          </label>
          <label>
            Email
            <input type="email" {...form.register('email')} />
          </label>
          <label>
            Telefone
            <input {...form.register('phone')} />
          </label>
          <label>
            Bairro
            <input {...form.register('district')} />
          </label>
          <label className="form-grid__wide">
            Endereço
            <input {...form.register('address')} />
          </label>
          <label className="form-grid__wide">
            Observações de contato
            <textarea rows={3} {...form.register('contactDescription')} />
          </label>
          <div className="form-actions">
            <button type="submit" className="primary-button">
              <Save size={17} />
              {form.formState.isSubmitting ? 'Salvando...' : 'Salvar alterações'}
            </button>
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Histórico de contatos</h2>
            <p>Últimas conversas, retornos e resultados comerciais desse cliente.</p>
          </div>
        </div>
        {clientContacts.length ? (
          <div className="record-list">
            {clientContacts.slice(0, 8).map((contact) => (
              <article key={contact.id} className="record-row">
                <div>
                  <strong>{statusLabel(contact.outcome)}</strong>
                  <span>{contactChannelLabel(contact.channel)}</span>
                  <time>{formatDate(contact.contactAt)}</time>
                  {contact.notes && <small>{contact.notes}</small>}
                </div>
                <div className="record-row__actions">
                  <StatusBadge status={contact.outcome} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={MessageCircle}
            title="Sem contatos registrados"
            description="Os contatos feitos pelo Controle vão aparecer aqui."
          />
        )}
      </section>

      <div className="two-column">
        <section className="panel">
          <div className="panel__header">
            <div>
              <h2>Faturamento Luciana</h2>
              <p>Vendas ganhas desse cliente.</p>
            </div>
          </div>
          {totalRevenue > 0 ? (
            <div className="chart-frame chart-frame--small">
              <ResponsiveContainer width="100%" height={230}>
                <BarChart data={chartData}>
                  <CartesianGrid stroke="#e6d9c5" vertical={false} />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) =>
                      Number(value) >= 1000
                        ? `${Math.round(Number(value) / 1000)}k`
                        : formatCurrency(Number(value))
                    }
                  />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Bar dataKey="amount" fill="#840716" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <EmptyState
              icon={CircleDollarSign}
              title="Sem vendas ganhas"
              description="O faturamento desse cliente começa quando uma venda for marcada como ganha."
            />
          )}
        </section>

        <section className="panel">
          <div className="panel__header">
            <div>
              <h2>Histórico operacional</h2>
              <p>Visitas, vendas e serviços desse cliente.</p>
            </div>
          </div>
          <div className="mini-feed">
            {operationalHistory.slice(0, 8).map((item) => (
              <article key={item.id}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
                {item.note && <small>{item.note}</small>}
              </article>
            ))}
            {!operationalHistory.length && (
              <span>Nenhum lançamento manual para este cliente.</span>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
