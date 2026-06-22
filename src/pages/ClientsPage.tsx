import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Search, Users } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { EmptyState } from '../components/EmptyState'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { compactDocument, normalizeSearch } from '../lib/formatters'

const clientSchema = z.object({
  name: z.string().min(2, 'Informe o nome.'),
  document: z.string().min(3, 'Informe CNPJ, CPF ou identificador.'),
  type: z.string().min(1),
  group: z.string().min(1),
  status: z.enum(['active', 'inactive', 'prospect', 'attention']),
  city: z.string().optional(),
  state: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
})

type ClientForm = z.infer<typeof clientSchema>

export function ClientsPage() {
  const { clients, createClient } = useData()
  const [query, setQuery] = useState('')
  const [cityFilter, setCityFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, reset, formState } = useForm<ClientForm>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      type: 'PJ',
      group: 'ON',
      status: 'active',
    },
  })

  const cityOptions = useMemo(() => {
    const cities = new Map<string, string>()

    clients.forEach((client) => {
      const city = client.city.trim()
      if (!city) return
      const normalizedCity = normalizeSearch(city)
      if (!cities.has(normalizedCity)) {
        cities.set(normalizedCity, city)
      }
    })

    return Array.from(cities, ([value, label]) => ({ value, label })).sort((a, b) =>
      a.label.localeCompare(b.label, 'pt-BR'),
    )
  }, [clients])

  const matchingClients = useMemo(() => {
    const normalized = normalizeSearch(query)
    return clients
      .filter((client) => cityFilter === 'all' || normalizeSearch(client.city) === cityFilter)
      .filter((client) => typeFilter === 'all' || client.type.toUpperCase() === typeFilter)
      .filter((client) => statusFilter === 'all' || client.status === statusFilter)
      .filter((client) => {
        if (!normalized) return true
        return normalizeSearch(
          `${client.name} ${client.city} ${client.state} ${client.group} ${client.document}`,
        ).includes(normalized)
      })
  }, [cityFilter, clients, query, statusFilter, typeFilter])

  const visibleClients = useMemo(() => matchingClients.slice(0, 120), [matchingClients])
  const hasDisplayLimit = matchingClients.length > visibleClients.length

  const onSubmit = handleSubmit(async (values) => {
    await createClient({
      name: values.name,
      document: values.document,
      type: values.type,
      group: values.group,
      status: values.status,
      city: values.city ?? '',
      state: values.state?.toUpperCase() ?? '',
      email: values.email ?? '',
      phone: values.phone ?? '',
      address: values.address ?? '',
      district: '',
      zipCode: '',
      salesperson: 'Luciana',
      manager: '',
      contactDescription: '',
      lastImportedAction: '',
      lastImportedActionDate: '',
    })
    reset()
    setShowForm(false)
  })

  return (
    <div className="stack-page">
      <section className="toolbar-panel">
        <label className="search-box">
          <Search size={17} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar cliente ou documento"
          />
        </label>
        <select value={cityFilter} onChange={(event) => setCityFilter(event.target.value)}>
          <option value="all">Todas as cidades</option>
          {cityOptions.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
          <option value="all">PF e PJ</option>
          <option value="PF">PF</option>
          <option value="PJ">PJ</option>
        </select>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option value="all">Todos os status</option>
          <option value="active">Ativos</option>
          <option value="inactive">Inativos</option>
          <option value="attention">Atenção</option>
          <option value="prospect">Prospects</option>
        </select>
        <button type="button" className="primary-button" onClick={() => setShowForm((v) => !v)}>
          <Plus size={17} />
          Novo cliente
        </button>
      </section>

      {showForm && (
        <section className="panel">
          <div className="panel__header">
            <div>
              <h2>Novo cliente</h2>
              <p>Cadastro manual separado da importação da planilha.</p>
            </div>
          </div>
          <form className="form-grid" onSubmit={onSubmit}>
            <label>
              Nome
              <input {...register('name')} />
              {formState.errors.name && (
                <span className="field-error">{formState.errors.name.message}</span>
              )}
            </label>
            <label>
              CNPJ/CPF
              <input {...register('document')} />
            </label>
            <label>
              Tipo
              <select {...register('type')}>
                <option value="PJ">PJ</option>
                <option value="PF">PF</option>
              </select>
            </label>
            <label>
              Grupo
              <select {...register('group')}>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                <option value="KA">KA</option>
                <option value="PF">PF</option>
              </select>
            </label>
            <label>
              Status
              <select {...register('status')}>
                <option value="active">Ativo</option>
                <option value="attention">Atenção</option>
                <option value="prospect">Prospect</option>
                <option value="inactive">Inativo</option>
              </select>
            </label>
            <label>
              Cidade
              <input {...register('city')} />
            </label>
            <label>
              UF
              <input maxLength={2} {...register('state')} />
            </label>
            <label>
              Email
              <input type="email" {...register('email')} />
            </label>
            <label>
              Telefone
              <input {...register('phone')} />
            </label>
            <label className="form-grid__wide">
              Endereço
              <input {...register('address')} />
            </label>
            <div className="form-actions">
              <button type="submit" className="primary-button">
                {formState.isSubmitting ? 'Salvando...' : 'Salvar cliente'}
              </button>
            </div>
          </form>
        </section>
      )}

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Base de clientes</h2>
            <p>
              {visibleClients.length} cliente(s) exibidos de {matchingClients.length} encontrado(s)
              nos filtros, em {clients.length} cadastrado(s).
              {hasDisplayLimit ? ' Exibindo os primeiros 120.' : ''}
            </p>
          </div>
        </div>
        {visibleClients.length ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Documento</th>
                  <th>Cidade</th>
                  <th>Grupo</th>
                  <th>Status</th>
                  <th>Contato</th>
                </tr>
              </thead>
              <tbody>
                {visibleClients.map((client) => (
                  <tr key={client.id}>
                    <td>
                      <Link to={`/clientes/${client.id}`} className="table-link">
                        {client.name}
                      </Link>
                      <span>{client.type}</span>
                    </td>
                    <td>{compactDocument(client.document)}</td>
                    <td>{[client.city, client.state].filter(Boolean).join(' / ') || 'Sem cidade'}</td>
                    <td>{client.group}</td>
                    <td>
                      <StatusBadge status={client.status} />
                    </td>
                    <td>{client.email || client.phone || 'Sem contato'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            icon={Users}
            title="Nenhum cliente encontrado"
            description="Ajuste os filtros ou cadastre um novo cliente."
          />
        )}
      </section>
    </div>
  )
}
