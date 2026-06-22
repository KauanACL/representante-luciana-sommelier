import {
  Bar,
  BarChart,
  ReferenceLine,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { RevenueMetric } from '../lib/analytics'
import { formatCurrency, formatPeriod } from '../lib/formatters'

type Props = {
  data: RevenueMetric[]
  totalLabel?: string
  totalDetail?: string
  ariaLabel?: string
}

type TooltipProps = {
  active?: boolean
  payload?: Array<{ payload: RevenueMetric }>
}

const formatSignedCurrency = (value: number) => {
  if (value === 0) return formatCurrency(0)
  const sign = value > 0 ? '+' : '-'
  return `${sign}${formatCurrency(Math.abs(value))}`
}

function RevenueTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload?.length) return null
  const item = payload[0].payload

  return (
    <div className="chart-tooltip">
      <strong>{formatPeriod(item.period)}</strong>
      <span>
        Faturamento <b>{formatCurrency(item.amount)}</b>
      </span>
      <span>
        Clientes compradores <b>{item.buyerCount}</b>
      </span>
      <span>
        Ticket médio <b>{formatCurrency(item.averageTicket)}</b>
      </span>
    </div>
  )
}

export function RevenueOverviewChart({
  data,
  totalLabel,
  totalDetail,
  ariaLabel = 'Resumo do faturamento do período',
}: Props) {
  const chartData = data.map((item) => ({
    ...item,
    label: formatPeriod(item.period),
  }))
  const average =
    chartData.length > 0
      ? chartData.reduce((total, item) => total + item.amount, 0) / chartData.length
      : 0
  const total = chartData.reduce((sum, item) => sum + item.amount, 0)
  const hasRevenue = total > 0
  const max = hasRevenue ? Math.max(...chartData.map((item) => item.amount), average, 1) : 1
  const bestMonth = chartData.reduce<RevenueMetric | undefined>(
    (best, item) => (item.amount > 0 && (!best || item.amount > best.amount) ? item : best),
    undefined,
  )
  const latest = chartData.at(-1)
  const previous = chartData.at(-2)
  const latestVariation = latest && previous ? latest.amount - previous.amount : 0
  const latestVariationDetail =
    latest && previous
      ? `${formatPeriod(latest.period)} vs ${formatPeriod(previous.period)}`
      : 'Sem mês anterior'
  const summaryItems = [
    {
      label: totalLabel ?? `Total ${chartData.length} meses`,
      value: formatCurrency(total),
      detail: totalDetail ?? `${chartData.length} meses no período`,
    },
    {
      label: 'Média mensal',
      value: formatCurrency(average),
      detail: 'Linha dourada no gráfico',
    },
    {
      label: 'Melhor mês',
      value: bestMonth ? formatCurrency(bestMonth.amount) : formatCurrency(0),
      detail: bestMonth ? formatPeriod(bestMonth.period) : 'Sem vendas ganhas',
    },
    {
      label: 'Variação',
      value: formatSignedCurrency(latestVariation),
      detail: latestVariationDetail,
    },
  ]

  return (
    <div className="revenue-chart">
      <div className="revenue-chart__summary" aria-label={ariaLabel}>
        {summaryItems.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.detail}</small>
          </article>
        ))}
      </div>

      <div className="chart-frame chart-frame--revenue">
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={chartData} margin={{ left: 0, right: 12, top: 24, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueBarGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#a20b1d" />
                <stop offset="100%" stopColor="#6d050f" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#eadfcb" strokeDasharray="4 8" vertical={false} />
            <XAxis
              dataKey="label"
              axisLine={false}
              interval="preserveStartEnd"
              minTickGap={16}
              tick={{ fill: '#746a60', fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              domain={[0, hasRevenue ? Math.ceil(max * 1.18) : 1]}
              ticks={hasRevenue ? undefined : [0]}
              tick={{ fill: '#746a60', fontSize: 12 }}
              tickFormatter={(value) =>
                Number(value) >= 1000 ? `${Math.round(Number(value) / 1000)}k` : formatCurrency(Number(value))
              }
              tickLine={false}
              width={42}
            />
            <Tooltip content={<RevenueTooltip />} cursor={{ fill: 'rgba(132, 7, 22, 0.06)' }} />
            {hasRevenue && (
              <ReferenceLine
                y={average}
                stroke="#b79a5d"
                strokeDasharray="6 6"
                strokeWidth={2}
                label={{
                  value: 'Média',
                  fill: '#85682b',
                  fontSize: 12,
                  fontWeight: 700,
                  position: 'insideTopRight',
                }}
              />
            )}
            <Bar
              dataKey="amount"
              fill="url(#revenueBarGradient)"
              maxBarSize={46}
              radius={[8, 8, 0, 0]}
            >
              {chartData.map((item) => (
                <Cell
                  key={item.period}
                  fill={item.period === bestMonth?.period ? '#b79a5d' : 'url(#revenueBarGradient)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
