import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { AuthProvider, useAuth } from './context/AuthContext'
import { DataProvider } from './context/DataContext'
import { LoginPage } from './pages/LoginPage'

const DashboardPage = lazy(() =>
  import('./pages/DashboardPage').then((module) => ({ default: module.DashboardPage })),
)
const ClientsPage = lazy(() =>
  import('./pages/ClientsPage').then((module) => ({ default: module.ClientsPage })),
)
const ControlPage = lazy(() =>
  import('./pages/ControlPage').then((module) => ({ default: module.ControlPage })),
)
const ClientDetailPage = lazy(() =>
  import('./pages/ClientDetailPage').then((module) => ({ default: module.ClientDetailPage })),
)
const VisitsPage = lazy(() =>
  import('./pages/VisitsPage').then((module) => ({ default: module.VisitsPage })),
)
const SalesPage = lazy(() =>
  import('./pages/SalesPage').then((module) => ({ default: module.SalesPage })),
)
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })),
)
const AgendaPage = lazy(() =>
  import('./pages/AgendaPage').then((module) => ({ default: module.AgendaPage })),
)
const ReportsPage = lazy(() =>
  import('./pages/ReportsPage').then((module) => ({ default: module.ReportsPage })),
)
const SettingsPage = lazy(() =>
  import('./pages/SettingsPage').then((module) => ({ default: module.SettingsPage })),
)

function ProtectedApp() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <div className="route-loading">Carregando acesso...</div>

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return (
    <DataProvider>
      <Suspense fallback={<div className="route-loading">Carregando...</div>}>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="controle" element={<ControlPage />} />
            <Route path="clientes" element={<ClientsPage />} />
            <Route path="clientes/:id" element={<ClientDetailPage />} />
            <Route path="visitas" element={<VisitsPage />} />
            <Route path="vendas" element={<SalesPage />} />
            <Route path="servicos" element={<ServicesPage />} />
            <Route path="agenda" element={<AgendaPage />} />
            <Route path="relatorios" element={<ReportsPage />} />
            <Route path="configuracoes" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </DataProvider>
  )
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ProtectedApp />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
