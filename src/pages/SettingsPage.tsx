import { Database, Download, RefreshCcw, ShieldCheck } from 'lucide-react'
import { useData } from '../context/DataContext'

export function SettingsPage() {
  const { database, refresh, resetLocalData, source, isLoading, error } = useData()

  const exportData = () => {
    const blob = new Blob([JSON.stringify(database, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'luciana-crm-backup.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="stack-page">
      <section className="panel warning-panel warning-panel--success">
        <ShieldCheck size={22} />
        <div>
          <h2>{source === 'supabase' ? 'Supabase conectado' : 'Fallback local ativo'}</h2>
          <p>
            {source === 'supabase'
              ? 'O app esta usando Auth e Postgres do Supabase. As chaves sensiveis devem ficar apenas em ambiente seguro.'
              : 'O app esta em modo local de desenvolvimento porque as variaveis Supabase nao foram configuradas.'}
          </p>
        </div>
      </section>

      {error && (
        <section className="panel form-error">
          <strong>Erro de sincronização</strong>
          <span>{error}</span>
        </section>
      )}

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Resumo da base</h2>
            <p>Dados reais importados da planilha e lançamentos feitos no sistema.</p>
          </div>
          <Database size={21} />
        </div>
        <div className="settings-grid">
          <article>
            <strong>{database.clients.length}</strong>
            <span>Clientes</span>
          </article>
          <article>
            <strong>{database.clientRevenueMonths.length}</strong>
            <span>Lançamentos de faturamento</span>
          </article>
          <article>
            <strong>{database.visits.length}</strong>
            <span>Visitas</span>
          </article>
          <article>
            <strong>{database.services.length}</strong>
            <span>Serviços</span>
          </article>
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Manutenção</h2>
            <p>Exportação é útil para auditoria durante a fase de implantação.</p>
          </div>
        </div>
        <div className="button-row">
          <button type="button" className="secondary-button" onClick={exportData}>
            <Download size={17} />
            Exportar JSON
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              void refresh()
            }}
            disabled={isLoading}
          >
            <RefreshCcw size={17} />
            Sincronizar
          </button>
          {source === 'local' && (
            <button
              type="button"
              className="ghost-button ghost-button--danger"
              onClick={() => {
                if (window.confirm('Resetar dados locais para a planilha real?')) {
                  resetLocalData()
                }
              }}
            >
              Resetar local
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

