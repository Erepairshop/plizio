import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ededzduenwpbtrsrvzdo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_T7yBBjAdRasLoZ1rM5aHnA_QGNhRW29";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
