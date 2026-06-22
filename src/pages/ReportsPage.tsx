import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useData } from '../context/DataContext'
import { monthlyRevenueSeries, revenueByCity, salesPipeline } from '../lib/analytics'
import { formatCurrency, formatPeriod, statusLabel } from '../lib/formatters'

const colors = ['#840716', '#6d7041', '#b79a5d', '#2b2420']

export function ReportsPage() {
  const { database, clients, sales, services } = useData()
  const monthly = monthlyRevenueSeries(database, 18).map((item) => ({
    ...item,
    label: formatPeriod(item.period),
  }))
  const cityRevenue = revenueByCity(clients, database.clientRevenueMonths, 8)
  const pipeline = salesPipeline(sales).map((item) => ({
    ...item,
    label: statusLabel(item.stage),
  }))
  const serviceStatus = ['scheduled', 'completed', 'canceled'].map((status) => ({
    name: statusLabel(status),
    value: services.filter((service) => service.status === status).length,
  }))

  return (
    <div className="page-grid">
      <section className="panel panel--wide">
        <div className="panel__header">
          <div>
            <h2>Faturamento importado</h2>
            <p>Evolução mensal dos dados consolidados da planilha.</p>
          </div>
        </div>
        <div className="chart-frame">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthly}>
              <CartesianGrid stroke="#e6d9c5" vertical={false} />
              <XAxis dataKey="label" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${Math.round(Number(value) / 1000)}k`}
              />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Bar dataKey="amount" fill="#840716" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Cidades</h2>
            <p>Top cidades por faturamento.</p>
          </div>
        </div>
        <div className="rank-list">
          {cityRevenue.map((item, index) => (
            <article key={item.city}>
              <span>{index + 1}</span>
              <strong>{item.city}</strong>
              <em>{formatCurrency(item.amount)}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Pipeline manual</h2>
            <p>Vendas criadas manualmente no sistema.</p>
          </div>
        </div>
        <div className="chart-frame chart-frame--small">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={pipeline} layout="vertical">
              <CartesianGrid stroke="#e6d9c5" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="label" type="category" tickLine={false} axisLine={false} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Bar dataKey="amount" fill="#6d7041" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Serviços</h2>
            <p>Status dos serviços de sommeliere.</p>
          </div>
        </div>
        <div className="chart-frame chart-frame--small">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie dataKey="value" data={serviceStatus} innerRadius={55} outerRadius={86}>
                {serviceStatus.map((item, index) => (
                  <Cell key={item.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="legend-list">
          {serviceStatus.map((item, index) => (
            <span key={item.name}>
              <i style={{ background: colors[index % colors.length] }} />
              {item.name}: {item.value}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
