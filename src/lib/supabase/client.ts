import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error(
    'Missing environment variable VITE_SUPABASE_URL. Please set it in your .env file to your Supabase project URL (e.g. https://your-project.supabase.co).',
  )
}

if (!supabaseAnonKey) {
  throw new Error(
    'Missing environment variable VITE_SUPABASE_ANON_KEY. Please set it in your .env file to your Supabase project anon (public) key.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
