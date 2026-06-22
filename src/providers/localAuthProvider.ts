import type { UserProfile } from '../types/models'

const SESSION_KEY = 'luciana-sommelier-local-session-v1'

const localEmail =
  import.meta.env.VITE_LOCAL_AUTH_EMAIL?.trim() || 'luciana@local.app'
const localPassword =
  import.meta.env.VITE_LOCAL_AUTH_PASSWORD?.trim() || 'luciana123'

export const demoCredentials = {
  email: localEmail,
  password: localPassword,
}

const profile: UserProfile = {
  id: 'local-owner',
  name: 'Luciana',
  email: localEmail,
  role: 'owner',
}

export const localAuthProvider = {
  getSession() {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null

    try {
      const session = JSON.parse(raw) as { user: UserProfile }
      return session.user
    } catch {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
  },

  async login(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase()
    if (normalizedEmail !== localEmail.toLowerCase() || password !== localPassword) {
      throw new Error('Email ou senha invalidos para o modo local.')
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify({ user: profile }))
    return profile
  },

  logout() {
    localStorage.removeItem(SESSION_KEY)
  },
}

