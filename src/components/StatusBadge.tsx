import { clsx } from 'clsx'
import { statusLabel } from '../lib/formatters'

type Props = {
  status: string
}

export function StatusBadge({ status }: Props) {
  return (
    <span className={clsx('status-badge', `status-badge--${status}`)}>
      {statusLabel(status)}
    </span>
  )
}

