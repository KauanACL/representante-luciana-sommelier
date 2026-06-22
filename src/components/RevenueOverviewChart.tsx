import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { formatCurrency, formatPeriod } from '../lib/formatters'

type RevenueMetric = {
  period: string
  amount: number
  buyerCount: number
  averageTicket: number
}

type Props = {
  data: RevenueMetric[]
}

type TooltipProps = {
  active?: boolean
  payload?: Array<{ payload: RevenueMetric }>
}

function RevenueTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload?.length) return null
  const item = payload[0].payload

  return (
    <div className="chart-tooltip">
      <strong>{formatPeriod(item.period)}</strong>
      <span>Faturamento: {formatCurrency(item.amount)}</span>
      <span>Clientes compradores: {item.buyerCount}</span>
      <span>Ticket médio: {formatCurrency(item.averageTicket)}</span>
    </div>
  )
}

export function RevenueOverviewChart({ data }: Props) {
  const chartData = data.map((item) => ({
    ...item,
    label: formatPeriod(item.period),
  }))
  const average =
    chartData.length > 0
      ? chartData.reduce((total, item) => total + item.amount, 0) / chartData.length
      : 0
  const max = Math.max(...chartData.map((item) => item.amount), average, 1)

  return (
    <div className="chart-frame">
      <ResponsiveContainer width="100%" height={330}>
        <ComposedChart
          data={chartData}
          margin={{ left: 4, right: 14, top: 22, bottom: 0 }}
          barCategoryGap="28%"
        >
          <CartesianGrid stroke="#e6d9c5" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={[0, Math.ceil(max * 1.2)]}
            tickFormatter={(value) => `${Math.round(Number(value) / 1000)}k`}
          />
          <Tooltip content={<RevenueTooltip />} cursor={{ fill: 'rgba(132, 7, 22, 0.05)' }} />
          <ReferenceLine
            y={average}
            stroke="#6d7041"
            strokeDasharray="5 5"
            label={{ value: 'Média', fill: '#6d7041', fontSize: 12, position: 'insideTopRight' }}
          />
          <Bar dataKey="amount" fill="#840716" radius={[7, 7, 0, 0]} />
          <Line
            type="monotone"
            dataKey="averageTicket"
            stroke="#b79a5d"
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 1, fill: '#fff' }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
