import { zodResolver } from '@hookform/resolvers/zod'
import { LockKeyhole } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { z } from 'zod'
import lucianaLogo from '../assets/luciana-queiroz-logo.png'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabaseClient'
import { demoCredentials } from '../providers/localAuthProvider'

const loginSchema = z.object({
  email: z.string().email('Informe um email valido.'),
  password: z.string().min(1, 'Informe a senha.'),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth()
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: demoCredentials.email,
      password: '',
    },
  })

  if (isLoading) return <div className="route-loading">Carregando acesso...</div>
  if (isAuthenticated) return <Navigate to="/" replace />

  const onSubmit = handleSubmit(async (values) => {
    setError('')
    try {
      await login(values.email, values.password)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Nao foi possivel entrar.')
    }
  })

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="login-card__brand">
          <span>
            <img src={lucianaLogo} alt="" />
          </span>
          <div>
            <strong>Luciana Queiroz</strong>
            <small>Sommeliere</small>
          </div>
        </div>

        <div>
          <h1 id="login-title">Entrar no sistema</h1>
          <p>CRM para organizar clientes, visitas, vendas e serviços de sommeliere.</p>
        </div>

        <form onSubmit={onSubmit} className="form-stack">
          <label>
            Email
            <input type="email" autoComplete="email" {...register('email')} />
            {errors.email && <span className="field-error">{errors.email.message}</span>}
          </label>
          <label>
            Senha
            <input type="password" autoComplete="current-password" {...register('password')} />
            {errors.password && <span className="field-error">{errors.password.message}</span>}
          </label>

          {error && <p className="form-error">{error}</p>}

          <button className="primary-button" type="submit" disabled={isSubmitting}>
            <LockKeyhole size={17} />
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        {!isSupabaseConfigured && (
          <div className="login-hint">
            <strong>Modo local de desenvolvimento</strong>
            <span>
              Email: {demoCredentials.email} | Senha: {demoCredentials.password}
            </span>
          </div>
        )}
      </section>
    </main>
  )
}
