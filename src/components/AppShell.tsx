import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Store,
  Users,
  Wine,
} from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import lucianaLogo from '../assets/luciana-queiroz-logo.png'
import { useAuth } from '../context/AuthContext'
import { useData } from '../context/DataContext'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/clientes', label: 'Clientes', icon: Users },
  { to: '/visitas', label: 'Visitas', icon: CalendarDays },
  { to: '/vendas', label: 'Vendas', icon: Store },
  { to: '/servicos', label: 'Serviços', icon: Wine },
  { to: '/agenda', label: 'Agenda', icon: ClipboardList },
  { to: '/relatorios', label: 'Relatórios', icon: BarChart3 },
  { to: '/configuracoes', label: 'Configurações', icon: Settings },
]

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/clientes': 'Clientes',
  '/visitas': 'Visitas',
  '/vendas': 'Vendas',
  '/servicos': 'Serviços',
  '/agenda': 'Agenda',
  '/relatorios': 'Relatórios',
  '/configuracoes': 'Configurações',
}

export function AppShell() {
  const { logout } = useAuth()
  const { error, isLoading } = useData()
  const location = useLocation()
  const title =
    titles[location.pathname] ??
    (location.pathname.startsWith('/clientes/') ? 'Detalhe do cliente' : 'Luciana Queiroz')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink to="/" className="brand" aria-label="Ir para dashboard">
          <span className="brand__mark">
            <img src={lucianaLogo} alt="" />
          </span>
          <span>
            <strong>Luciana Queiroz</strong>
            <small>Sommeliere</small>
          </span>
        </NavLink>

        <nav className="sidebar__nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div>
            <span className="topbar__label">Área de trabalho</span>
            <h1>{title}</h1>
          </div>
          <label className="global-search">
            <Search size={17} />
            <input type="search" placeholder="Buscar cliente, cidade ou ação" />
          </label>
          <div className="user-menu">
            <span className="user-menu__logo">
              <img src={lucianaLogo} alt="" />
            </span>
            <div>
              <strong>Luciana Queiroz</strong>
              <span>Sommeliere</span>
            </div>
            <button type="button" className="icon-button" onClick={logout} aria-label="Sair">
              <LogOut size={18} />
            </button>
          </div>
        </header>

        <main className="page-wrap">
          {isLoading ? (
            <div className="route-loading">Carregando dados...</div>
          ) : (
            <>
              {error && (
                <section className="panel form-error">
                  <strong>Erro de sincronização</strong>
                  <span>{error}</span>
                </section>
              )}
              <Outlet />
            </>
          )}
        </main>
      </div>
    </div>
  )
}
