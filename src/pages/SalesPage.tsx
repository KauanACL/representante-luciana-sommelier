import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, CircleDollarSign, XCircle } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { StatusBadge } from '../components/StatusBadge'
import { useData } from '../context/DataContext'
import { byId } from '../lib/analytics'
import { formatCurrencyPrecise, formatShortDate } from '../lib/formatters'

const saleSchema = z.object({
  clientId: z.string().min(1),
  title: z.string().min(3, 'Informe o nome da venda.'),
  amount: z.number().min(0, 'Valor invalido.'),
  stage: z.enum(['lead', 'proposal', 'won', 'lost']),
  expectedCloseDate: z.string().min(1, 'Informe a data prevista.'),
  notes: z.string().optional(),
})

type SaleForm = z.infer<typeof saleSchema>

const defaultDate = () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

export function SalesPage() {
  const { clients, sales, createSale, updateSale } = useData()
  const clientsMap = useMemo(() => byId(clients), [clients])
  const form = useForm<SaleForm>({
    resolver: zodResolver(saleSchema),
    defaultValues: {
      clientId: clients[0]?.id ?? '',
      title: '',
      amount: 0,
      stage: 'proposal',
      expectedCloseDate: defaultDate(),
      notes: '',
    },
  })

  useEffect(() => {
    if (clients[0]?.id && !form.getValues('clientId')) {
      form.setValue('clientId', clients[0].id)
    }
  }, [clients, form])

  const onSubmit = form.handleSubmit(async (values) => {
    await createSale({
      ...values,
      expectedCloseDate: new Date(`${values.expectedCloseDate}T12:00:00`).toISOString(),
      notes: values.notes ?? '',
    })
    form.reset({
      clientId: values.clientId,
      title: '',
      amount: 0,
      stage: 'proposal',
      expectedCloseDate: defaultDate(),
      notes: '',
    })
  })

  return (
    <div className="two-column two-column--form">
      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Registrar venda</h2>
            <p>Vendas manuais ficam separadas do faturamento importado.</p>
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
            Venda
            <input placeholder="Pedido, proposta ou oportunidade" {...form.register('title')} />
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
            Etapa
            <select {...form.register('stage')}>
              <option value="lead">Lead</option>
              <option value="proposal">Proposta</option>
              <option value="won">Ganha</option>
              <option value="lost">Perdida</option>
            </select>
          </label>
          <label>
            Previsão
            <input type="date" {...form.register('expectedCloseDate')} />
          </label>
          <label>
            Observações
            <textarea rows={4} {...form.register('notes')} />
          </label>
          <button className="primary-button" type="submit">
            <CircleDollarSign size={17} />
            {form.formState.isSubmitting ? 'Salvando...' : 'Salvar venda'}
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Pipeline</h2>
            <p>{sales.length} venda(s) registradas.</p>
          </div>
        </div>
        <div className="record-list">
          {sales.map((sale) => (
            <article key={sale.id} className="record-row">
              <div>
                <strong>{sale.title}</strong>
                <span>{clientsMap.get(sale.clientId)?.name ?? 'Cliente'}</span>
                <time>{formatShortDate(sale.expectedCloseDate)}</time>
              </div>
              <div className="record-row__actions">
                <strong>{formatCurrencyPrecise(sale.amount)}</strong>
                <StatusBadge status={sale.stage} />
                {sale.stage !== 'won' && sale.stage !== 'lost' && (
                  <>
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={() => updateSale({ ...sale, stage: 'won' })}
                    >
                      <CheckCircle2 size={16} />
                      Ganhar
                    </button>
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => updateSale({ ...sale, stage: 'lost' })}
                    >
                      <XCircle size={16} />
                      Perder
                    </button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
