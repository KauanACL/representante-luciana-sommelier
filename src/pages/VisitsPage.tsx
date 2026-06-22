import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarPlus, CheckCircle2 } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { ClientSearchSelect } from '../components/ClientSearchSelect'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { byId } from '../lib/analytics'
import { formatDate, fromDateTimeLocalInput, toDateTimeLocalInput } from '../lib/formatters'

const visitSchema = z.object({
  clientId: z.string().min(1, 'Escolha um cliente.'),
  scheduledFor: z.string().min(1, 'Informe a data.'),
  purpose: z.string().min(3, 'Informe o objetivo.'),
  notes: z.string().optional(),
})

type VisitForm = z.infer<typeof visitSchema>

const tomorrow = () => toDateTimeLocalInput(new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString())

export function VisitsPage() {
  const { clients, visits, createVisit, updateVisit } = useData()
  const clientsMap = useMemo(() => byId(clients), [clients])
  const form = useForm<VisitForm>({
    resolver: zodResolver(visitSchema),
    defaultValues: {
      scheduledFor: tomorrow(),
      purpose: '',
      notes: '',
      clientId: clients[0]?.id ?? '',
    },
  })
  const selectedClientId = useWatch({ control: form.control, name: 'clientId' })

  useEffect(() => {
    if (clients[0]?.id && !form.getValues('clientId')) {
      form.setValue('clientId', clients[0].id)
    }
  }, [clients, form])

  const sortedVisits = [...visits].sort((a, b) => b.scheduledFor.localeCompare(a.scheduledFor))

  const onSubmit = form.handleSubmit(async (values) => {
    await createVisit({
      clientId: values.clientId,
      scheduledFor: fromDateTimeLocalInput(values.scheduledFor),
      purpose: values.purpose,
      notes: values.notes ?? '',
      status: 'scheduled',
    })
    form.reset({ scheduledFor: tomorrow(), purpose: '', notes: '', clientId: values.clientId })
  })

  return (
    <div className="two-column two-column--form">
      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Agendar visita</h2>
            <p>Use para retornos comerciais, pós-venda e prospecção.</p>
          </div>
        </div>
        <form className="form-stack" onSubmit={onSubmit}>
          <input type="hidden" {...form.register('clientId')} />
          <ClientSearchSelect
            clients={clients}
            value={selectedClientId}
            onChange={(clientId) =>
              form.setValue('clientId', clientId, { shouldDirty: true, shouldValidate: true })
            }
            error={form.formState.errors.clientId?.message}
          />
          <label>
            Data e horário
            <input type="datetime-local" {...form.register('scheduledFor')} />
          </label>
          <label>
            Objetivo
            <input placeholder="Retornar, apresentar proposta, revisar carta..." {...form.register('purpose')} />
          </label>
          <label>
            Observações
            <textarea rows={4} {...form.register('notes')} />
          </label>
          <button className="primary-button" type="submit">
            <CalendarPlus size={17} />
            {form.formState.isSubmitting ? 'Salvando...' : 'Agendar visita'}
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Visitas</h2>
            <p>{visits.length} registro(s) manuais.</p>
          </div>
        </div>
        <div className="record-list">
          {sortedVisits.map((visit) => (
            <article key={visit.id} className="record-row">
              <div>
                <strong>{visit.purpose}</strong>
                <span>{clientsMap.get(visit.clientId)?.name ?? 'Cliente'}</span>
                <time>{formatDate(visit.scheduledFor)}</time>
              </div>
              <div className="record-row__actions">
                <StatusBadge status={visit.status} />
                {visit.status === 'scheduled' && (
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() =>
                      updateVisit({
                        ...visit,
                        status: 'completed',
                        completedAt: new Date().toISOString(),
                      })
                    }
                  >
                    <CheckCircle2 size={16} />
                    Concluir
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
