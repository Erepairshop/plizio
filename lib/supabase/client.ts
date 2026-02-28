import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

// Client is always created but will fail on actual calls if env vars are missing.
// This prevents build-time crashes in static export mode.
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
