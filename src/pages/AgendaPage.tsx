import { CheckCircle2, CalendarDays } from 'lucide-react'
import { useMemo } from 'react'
import { EmptyState } from '../components/EmptyState'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { byId } from '../lib/analytics'
import { formatDate, serviceTypeLabel } from '../lib/formatters'

export function AgendaPage() {
  const { clients, visits, services, updateVisit, updateService } = useData()
  const clientsMap = useMemo(() => byId(clients), [clients])
  const items = [
    ...visits.map((visit) => ({
      id: visit.id,
      kind: 'Visita',
      title: visit.purpose,
      status: visit.status,
      clientName: clientsMap.get(visit.clientId)?.name ?? 'Cliente',
      date: visit.scheduledFor,
      complete: () =>
        updateVisit({ ...visit, status: 'completed', completedAt: new Date().toISOString() }),
    })),
    ...services.map((service) => ({
      id: service.id,
      kind: 'Serviço',
      title: serviceTypeLabel(service.type),
      status: service.status,
      clientName: clientsMap.get(service.clientId)?.name ?? 'Cliente',
      date: service.scheduledFor,
      complete: () => updateService({ ...service, status: 'completed' }),
    })),
  ].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <h2>Agenda integrada</h2>
          <p>Visitas comerciais e serviços de sommeliere em uma lista única.</p>
        </div>
      </div>
      {items.length ? (
        <div className="agenda-list">
          {items.map((item) => (
            <article key={`${item.kind}-${item.id}`} className="agenda-row">
              <div className="agenda-row__date">
                <CalendarDays size={18} />
                <time>{formatDate(item.date)}</time>
              </div>
              <div>
                <span>{item.kind}</span>
                <strong>{item.title}</strong>
                <small>{item.clientName}</small>
              </div>
              <div className="record-row__actions">
                <StatusBadge status={item.status} />
                {item.status === 'scheduled' && (
                  <button type="button" className="secondary-button" onClick={item.complete}>
                    <CheckCircle2 size={16} />
                    Concluir
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={CalendarDays}
          title="Agenda vazia"
          description="Crie visitas ou serviços para montar a agenda."
        />
      )}
    </section>
  )
}
