import { Search } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { compactDocument, normalizeSearch } from '../lib/formatters'
import type { Client } from '../types/models'

type Props = {
  clients: Client[]
  value: string
  onChange: (clientId: string) => void
  error?: string
}

const resultLimit = 8

const clientDetail = (client: Client) => {
  const location = [client.city, client.state].filter(Boolean).join(' / ') || 'Sem cidade'
  return `${location} - ${compactDocument(client.document)}`
}

export function ClientSearchSelect({ clients, value, onChange, error }: Props) {
  const inputId = useId()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const selectedClient = clients.find((client) => client.id === value)
  const [draftQuery, setDraftQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const query = isOpen ? draftQuery : selectedClient?.name ?? ''

  useEffect(() => {
    if (!isOpen) return undefined

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [isOpen])

  const filteredClients = useMemo(() => {
    const normalized = normalizeSearch(query)
    const matches = normalized
      ? clients.filter((client) =>
          normalizeSearch(
            `${client.name} ${client.document} ${client.city} ${client.state} ${client.group}`,
          ).includes(normalized),
        )
      : clients

    return matches.slice(0, resultLimit)
  }, [clients, query])

  const selectClient = (client: Client) => {
    onChange(client.id)
    setDraftQuery(client.name)
    setIsOpen(false)
    setActiveIndex(0)
  }

  const handleQueryChange = (nextQuery: string) => {
    setDraftQuery(nextQuery)
    setIsOpen(true)
    setActiveIndex(0)

    if (normalizeSearch(nextQuery) !== normalizeSearch(selectedClient?.name ?? '')) {
      onChange('')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsOpen(true)
      setActiveIndex((current) => Math.min(current + 1, filteredClients.length - 1))
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => Math.max(current - 1, 0))
    }

    if (event.key === 'Enter' && isOpen && filteredClients[activeIndex]) {
      event.preventDefault()
      selectClient(filteredClients[activeIndex])
    }

    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div className="client-search-select" ref={rootRef}>
      <label htmlFor={inputId}>Cliente</label>
      <div className="client-search-select__control">
        <Search size={17} />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          onFocus={(event) => {
            setDraftQuery(selectedClient?.name ?? '')
            setIsOpen(true)
            setActiveIndex(0)
            event.currentTarget.select()
          }}
          onKeyDown={handleKeyDown}
          placeholder="Digite para buscar cliente"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={`${inputId}-results`}
          aria-invalid={Boolean(error)}
        />
      </div>
      {isOpen && (
        <div className="client-search-select__results" id={`${inputId}-results`} role="listbox">
          {filteredClients.length ? (
            filteredClients.map((client, index) => (
              <button
                key={client.id}
                type="button"
                className={index === activeIndex ? 'is-active' : undefined}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectClient(client)}
                role="option"
                aria-selected={client.id === value}
              >
                <strong>{client.name}</strong>
                <span>{clientDetail(client)}</span>
              </button>
            ))
          ) : (
            <span className="client-search-select__empty">Nenhum cliente encontrado</span>
          )}
        </div>
      )}
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}
