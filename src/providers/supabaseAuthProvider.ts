import { supabase } from '../lib/supabaseClient'
import type { UserProfile } from '../types/models'

const fallbackName = (email: string) => email.split('@')[0] || 'Luciana'

export const supabaseAuthProvider = {
  async getSession() {
    if (!supabase) return null

    const { data, error } = await supabase.auth.getSession()
    if (error || !data.session?.user) return null

    const user = data.session.user
    return {
      id: user.id,
      name:
        typeof user.user_metadata?.name === 'string'
          ? user.user_metadata.name
          : fallbackName(user.email ?? ''),
      email: user.email ?? '',
      role: 'user',
    } satisfies UserProfile
  },

  async login(email: string, password: string) {
    if (!supabase) throw new Error('Supabase nao esta configurado.')

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    if (error || !data.user) {
      throw new Error(error?.message ?? 'Nao foi possivel entrar.')
    }

    return {
      id: data.user.id,
      name:
        typeof data.user.user_metadata?.name === 'string'
          ? data.user.user_metadata.name
          : fallbackName(data.user.email ?? ''),
      email: data.user.email ?? '',
      role: 'user',
    } satisfies UserProfile
  },

  async logout() {
    if (!supabase) return
    await supabase.auth.signOut()
  },

  onAuthStateChange(callback: (user: UserProfile | null) => void) {
    if (!supabase) return () => undefined

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        callback(null)
        return
      }

      callback({
        id: session.user.id,
        name:
          typeof session.user.user_metadata?.name === 'string'
            ? session.user.user_metadata.name
            : fallbackName(session.user.email ?? ''),
        email: session.user.email ?? '',
        role: 'user',
      })
    })

    return () => data.subscription.unsubscribe()
  },
}

