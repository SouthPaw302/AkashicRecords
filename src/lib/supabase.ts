import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl: string | undefined = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey: string | undefined = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase: SupabaseClient | null = null

if (typeof window !== 'undefined') {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  } else {
    // Non-fatal: app can still run without Supabase configured
    console.warn('Supabase env vars missing: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
  }
}

export function getSupabase(): SupabaseClient | null {
  return supabase
}

