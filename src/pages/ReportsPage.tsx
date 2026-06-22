import { CircleDollarSign, Download, Wine } from 'lucide-react'
import { useState } from 'react'
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { EmptyState } from '../components/EmptyState'
import { RevenueOverviewChart } from '../components/RevenueOverviewChart'
import { useData } from '../context/DataContext'
import {
  salesPipeline,
  wonSalesRevenueByCity,
  wonSalesRevenueMetrics,
  type RevenuePeriodSelection,
} from '../lib/analytics'
import { exportReportsExcel } from '../lib/excelExport'
import { formatCurrency, statusLabel } from '../lib/formatters'

const colors = ['#840716', '#6d7041', '#b79a5d', '#2b2420']
const periodOptions: Array<{ value: RevenuePeriodSelection; label: string; totalLabel: string }> = [
  { value: 3, label: 'Últimos 3 meses', totalLabel: 'Total 3 meses' },
  { value: 6, label: 'Últimos 6 meses', totalLabel: 'Total 6 meses' },
  { value: 12, label: 'Últimos 12 meses', totalLabel: 'Total 12 meses' },
  { value: 24, label: 'Últimos 24 meses', totalLabel: 'Total 24 meses' },
  { value: 'all', label: 'Tudo', totalLabel: 'Total geral' },
]

export function ReportsPage() {
  const { database, clients, sales, services } = useData()
  const [periodSelection, setPeriodSelection] = useState<RevenuePeriodSelection>(12)
  const selectedPeriodOption =
    periodOptions.find((option) => option.value === periodSelection) ?? periodOptions[2]
  const monthly = wonSalesRevenueMetrics(sales, periodSelection)
  const cityRevenue = wonSalesRevenueByCity(clients, sales, 8)
  const maxCityRevenue = Math.max(...cityRevenue.map((item) => item.amount), 1)
  const pipeline = salesPipeline(sales).map((item) => ({
    ...item,
    label: statusLabel(item.stage),
    metric: item.amount || item.count,
  }))
  const maxPipelineMetric = Math.max(...pipeline.map((item) => item.metric), 1)
  const hasPipelineData = sales.length > 0
  const serviceStatus = ['scheduled', 'completed', 'canceled'].map((status) => ({
    name: statusLabel(status),
    value: services.filter((service) => service.status === status).length,
  }))
  const hasServiceData = services.length > 0

  return (
    <div className="page-grid">
      <section className="panel report-export-panel">
        <div>
          <h2>Exportar dados</h2>
          <p>Baixe clientes, contatos, faturamento, vendas, visitas e serviços em um único Excel.</p>
        </div>
        <button
          type="button"
          className="primary-button"
          onClick={() => void exportReportsExcel(database)}
        >
          <Download size={17} />
          Baixar Excel
        </button>
      </section>

      <section className="panel panel--wide">
        <div className="panel__header">
          <div>
            <h2>Faturamento Luciana</h2>
            <p>Vendas ganhas cadastradas no sistema.</p>
          </div>
          <label className="report-period-control">
            Período
            <select
              value={periodSelection}
              onChange={(event) => {
                const value = event.target.value
                setPeriodSelection(value === 'all' ? 'all' : (Number(value) as RevenuePeriodSelection))
              }}
            >
              {periodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <RevenueOverviewChart
          data={monthly}
          totalLabel={selectedPeriodOption.totalLabel}
          totalDetail={selectedPeriodOption.label}
          ariaLabel={`Resumo do faturamento da Luciana: ${selectedPeriodOption.label}`}
        />
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Cidades</h2>
            <p>Top cidades por vendas ganhas.</p>
          </div>
        </div>
        {cityRevenue.length ? (
          <div className="analysis-bar-list">
            {cityRevenue.map((item, index) => (
              <article key={item.city} className="analysis-bar-row">
                <span className="analysis-bar-row__rank">{index + 1}</span>
                <div className="analysis-bar-row__content">
                  <div className="analysis-bar-row__meta">
                    <strong>{item.city}</strong>
                    <em>{formatCurrency(item.amount)}</em>
                  </div>
                  <div className="analysis-bar-row__track">
                    <span style={{ width: `${(item.amount / maxCityRevenue) * 100}%` }} />
                  </div>
                </div>
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

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Pipeline manual</h2>
            <p>Vendas criadas manualmente no sistema.</p>
          </div>
        </div>
        {hasPipelineData ? (
          <div className="analysis-bar-list">
            {pipeline.map((item) => (
              <article key={item.stage} className="analysis-bar-row analysis-bar-row--pipeline">
                <div className="analysis-bar-row__content">
                  <div className="analysis-bar-row__meta">
                    <strong>{item.label}</strong>
                    <em>{formatCurrency(item.amount)}</em>
                  </div>
                  <div className="analysis-bar-row__track">
                    <span style={{ width: `${(item.metric / maxPipelineMetric) * 100}%` }} />
                  </div>
                  <small>{item.count} venda(s)</small>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={CircleDollarSign}
            title="Pipeline vazio"
            description="As vendas cadastradas vão aparecer aqui por etapa."
          />
        )}
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Serviços</h2>
            <p>Status dos serviços de sommeliere.</p>
          </div>
        </div>
        {hasServiceData ? (
          <>
            <div className="chart-frame chart-frame--small">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie dataKey="value" data={serviceStatus} innerRadius={58} outerRadius={88}>
                    {serviceStatus.map((item, index) => (
                      <Cell key={item.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${Number(value)} registro(s)`} />
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
          </>
        ) : (
          <EmptyState
            icon={Wine}
            title="Sem serviços ainda"
            description="Os serviços cadastrados vão aparecer aqui por status."
          />
        )}
      </section>
    </div>
  )
}
