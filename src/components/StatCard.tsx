import type { LucideIcon } from 'lucide-react'

type Props = {
  label: string
  value: string
  detail: string
  icon: LucideIcon
}

export function StatCard({ label, value, detail, icon: Icon }: Props) {
  return (
    <article className="stat-card">
      <div className="stat-card__icon">
        <Icon size={18} />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
    </article>
  )
}

