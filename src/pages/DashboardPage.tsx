import {
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  Users,
  Wine,
} from 'lucide-react'
import { EmptyState } from '../components/EmptyState'
import { RevenueOverviewChart } from '../components/RevenueOverviewChart'
import { StatCard } from '../components/StatCard'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import {
  clientGroupSummary,
  getCurrentRevenuePeriod,
  topClientsByWonSalesRevenue,
  upcomingItems,
  wonSalesRevenueByCity,
  wonSalesRevenueForPeriod,
  wonSalesRevenueMetrics,
} from '../lib/analytics'
import { formatCurrency, formatDate, formatPeriod, serviceTypeLabel } from '../lib/formatters'

export function DashboardPage() {
  const { clients, visits, sales, services } = useData()
  const currentPeriod = getCurrentRevenuePeriod()
  const chartData = wonSalesRevenueMetrics(sales, 12)
  const topClients = topClientsByWonSalesRevenue(clients, sales, 6)
  const topCities = wonSalesRevenueByCity(clients, sales, 5)
  const groups = clientGroupSummary(clients).slice(0, 5)
  const agenda = upcomingItems(clients, visits, services, 6)
  const pendingVisits = visits.filter((visit) => visit.status === 'scheduled').length
  const scheduledServices = services.filter((service) => service.status === 'scheduled').length
  const openSales = sales.filter((sale) => sale.stage === 'lead' || sale.stage === 'proposal')

  return (
    <div className="page-grid">
      <section className="stat-grid">
        <StatCard
          label="Faturamento do mês"
          value={formatCurrency(wonSalesRevenueForPeriod(sales, currentPeriod))}
          detail={`Vendas ganhas em ${formatPeriod(currentPeriod)}`}
          icon={CircleDollarSign}
        />
        <StatCard
          label="Clientes ativos"
          value={clients.filter((client) => client.status === 'active').length.toString()}
          detail={`${clients.length} clientes na base`}
          icon={Users}
        />
        <StatCard
          label="Visitas pendentes"
          value={pendingVisits.toString()}
          detail="Agenda comercial"
          icon={CalendarCheck}
        />
        <StatCard
          label="Serviços agendados"
          value={scheduledServices.toString()}
          detail="Sommeliere"
          icon={Wine}
        />
      </section>

      <section className="panel panel--wide">
        <div className="panel__header">
          <div>
            <h2>Faturamento Luciana</h2>
            <p>Vendas ganhas cadastradas no sistema.</p>
          </div>
          <span className="soft-pill">Últimos 12 meses</span>
        </div>
        <RevenueOverviewChart
          data={chartData}
          totalLabel="Total 12 meses"
          ariaLabel="Resumo do faturamento da Luciana nos últimos 12 meses"
        />
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Agenda próxima</h2>
            <p>Visitas e serviços pendentes.</p>
          </div>
        </div>
        <div className="timeline-list">
          {agenda.length ? (
            agenda.map((item) => (
              <article key={`${item.kind}-${item.id}`} className="timeline-item">
                <span>{item.kind}</span>
                <strong>{item.title}</strong>
                <small>{item.clientName}</small>
                <time>{formatDate(item.scheduledFor)}</time>
              </article>
            ))
          ) : (
            <EmptyState
              icon={ClipboardCheck}
              title="Agenda livre"
              description="Nenhum compromisso pendente por enquanto."
            />
          )}
        </div>
      </section>

      <section className="panel panel--wide">
        <div className="panel__header">
          <div>
            <h2>Clientes em destaque</h2>
            <p>Ordenados pelas vendas ganhas da Luciana.</p>
          </div>
        </div>
        {topClients.length ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Cidade</th>
                  <th>Grupo</th>
                  <th>Status</th>
                  <th className="numeric">Faturamento</th>
                </tr>
              </thead>
              <tbody>
                {topClients.map(({ client, amount }) => (
                  <tr key={client.id}>
                    <td>
                      <strong>{client.name}</strong>
                      <span>{client.email || client.phone || 'Sem contato cadastrado'}</span>
                    </td>
                    <td>{client.city || 'Sem cidade'}</td>
                    <td>{client.group}</td>
                    <td>
                      <StatusBadge status={client.status} />
                    </td>
                    <td className="numeric">{formatCurrency(amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            icon={CircleDollarSign}
            title="Sem vendas ganhas"
            description="Os clientes em destaque aparecerão quando a Luciana ganhar vendas."
          />
        )}
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Top cidades</h2>
            <p>Faturamento da Luciana por praça.</p>
          </div>
        </div>
        {topCities.length ? (
          <div className="rank-list">
            {topCities.map((city, index) => (
              <article key={city.city}>
                <span>{index + 1}</span>
                <strong>{city.city}</strong>
                <em>{formatCurrency(city.amount)}</em>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={CircleDollarSign}
            title="Sem cidades ainda"
            description="As cidades aparecerão depois das primeiras vendas ganhas."
          />
        )}
      </section>

      <section className="panel panel--wide">
        <div className="panel__header">
          <div>
            <h2>Grupos de clientes</h2>
            <p>Distribuição importada da planilha.</p>
          </div>
        </div>
        <div className="group-summary">
          {groups.map((group) => (
            <article key={group.group}>
              <strong>{group.group}</strong>
              <div>
                <span style={{ width: `${(group.count / Math.max(clients.length, 1)) * 100}%` }} />
              </div>
              <em>{group.count} clientes</em>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Serviços de sommeliere</h2>
            <p>Resumo operacional.</p>
          </div>
        </div>
        <div className="service-summary">
          {['Degustacao', 'Treinamento', 'Harmonizacao', 'Consultoria'].map((type) => {
            const count = services.filter((service) => service.type === type).length
            return (
              <article key={type}>
                <Wine size={18} />
                <strong>{serviceTypeLabel(type)}</strong>
                <span>{count} registro(s)</span>
              </article>
            )
          })}
          <article>
            <CircleDollarSign size={18} />
            <strong>Pipeline</strong>
            <span>{formatCurrency(openSales.reduce((total, sale) => total + sale.amount, 0))}</span>
          </article>
        </div>
      </section>
    </div>
  )
}
