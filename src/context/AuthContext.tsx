/* eslint-disable react-refresh/only-export-components */
import {
  useEffect,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { localAuthProvider } from '../providers/localAuthProvider'
import { supabaseAuthProvider } from '../providers/supabaseAuthProvider'
import { isSupabaseConfigured } from '../lib/supabaseClient'
import type { UserProfile } from '../types/models'

type AuthContextValue = {
  user: UserProfile | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() =>
    isSupabaseConfigured ? null : localAuthProvider.getSession(),
  )
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) return undefined

    let active = true
    supabaseAuthProvider
      .getSession()
      .then((sessionUser) => {
        if (active) setUser(sessionUser)
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    const unsubscribe = supabaseAuthProvider.onAuthStateChange((sessionUser) => {
      setUser(sessionUser)
      setIsLoading(false)
    })

    return () => {
      active = false
      unsubscribe()
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const sessionUser = isSupabaseConfigured
      ? await supabaseAuthProvider.login(email, password)
      : await localAuthProvider.login(email, password)
    setUser(sessionUser)
  }, [])

  const logout = useCallback(() => {
    if (isSupabaseConfigured) {
      void supabaseAuthProvider.logout()
    } else {
      localAuthProvider.logout()
    }
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), isLoading, login, logout }),
    [isLoading, login, logout, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
