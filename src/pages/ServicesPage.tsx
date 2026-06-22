import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Wine } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { byId } from '../lib/analytics'
import {
  formatCurrencyPrecise,
  formatDate,
  fromDateTimeLocalInput,
  serviceTypeLabel,
  toDateTimeLocalInput,
} from '../lib/formatters'

const serviceSchema = z.object({
  clientId: z.string().min(1),
  type: z.enum(['Degustacao', 'Treinamento', 'Harmonizacao', 'Consultoria']),
  scheduledFor: z.string().min(1),
  amount: z.number().min(0),
  notes: z.string().optional(),
})

type ServiceForm = z.infer<typeof serviceSchema>

const nextWeek = () =>
  toDateTimeLocalInput(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString())

export function ServicesPage() {
  const { clients, services, createService, updateService } = useData()
  const clientsMap = useMemo(() => byId(clients), [clients])
  const form = useForm<ServiceForm>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      clientId: clients[0]?.id ?? '',
      type: 'Treinamento',
      scheduledFor: nextWeek(),
      amount: 0,
      notes: '',
    },
  })

  useEffect(() => {
    if (clients[0]?.id && !form.getValues('clientId')) {
      form.setValue('clientId', clients[0].id)
    }
  }, [clients, form])

  const onSubmit = form.handleSubmit(async (values) => {
    await createService({
      ...values,
      scheduledFor: fromDateTimeLocalInput(values.scheduledFor),
      status: 'scheduled',
      notes: values.notes ?? '',
    })
    form.reset({
      clientId: values.clientId,
      type: 'Treinamento',
      scheduledFor: nextWeek(),
      amount: 0,
      notes: '',
    })
  })

  return (
    <div className="two-column two-column--form">
      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Agendar serviço</h2>
            <p>Degustação, treinamento, harmonização e consultoria.</p>
          </div>
        </div>
        <form className="form-stack" onSubmit={onSubmit}>
          <label>
            Cliente
            <select {...form.register('clientId')}>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Tipo
            <select {...form.register('type')}>
              <option value="Degustacao">Degustação</option>
              <option value="Treinamento">Treinamento</option>
              <option value="Harmonizacao">Harmonização</option>
              <option value="Consultoria">Consultoria</option>
            </select>
          </label>
          <label>
            Data e horário
            <input type="datetime-local" {...form.register('scheduledFor')} />
          </label>
          <label>
            Valor
            <input
              type="number"
              step="0.01"
              {...form.register('amount', { valueAsNumber: true })}
            />
          </label>
          <label>
            Observações
            <textarea rows={4} {...form.register('notes')} />
          </label>
          <button className="primary-button" type="submit">
            <Wine size={17} />
            {form.formState.isSubmitting ? 'Salvando...' : 'Salvar serviço'}
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Serviços</h2>
            <p>{services.length} registro(s) cadastrados.</p>
          </div>
        </div>
        <div className="record-list">
          {services.map((service) => (
            <article key={service.id} className="record-row">
              <div>
                <strong>{serviceTypeLabel(service.type)}</strong>
                <span>{clientsMap.get(service.clientId)?.name ?? 'Cliente'}</span>
                <time>{formatDate(service.scheduledFor)}</time>
              </div>
              <div className="record-row__actions">
                <strong>{formatCurrencyPrecise(service.amount)}</strong>
                <StatusBadge status={service.status} />
                {service.status === 'scheduled' && (
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => updateService({ ...service, status: 'completed' })}
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
