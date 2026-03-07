// ─── USERNAME SYSTEM (Supabase-backed unique names) ─────────

import { supabase } from "./supabase/client";

const USERNAME_KEY = "plizio_username";
const USERNAME_ID_KEY = "plizio_username_id"; // row id in usernames table

export function getUsername(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USERNAME_KEY);
}

export function hasUsername(): boolean {
  if (typeof window === "undefined") return false;
  const name = localStorage.getItem(USERNAME_KEY);
  return !!name && name.trim().length > 0;
}

/** Check if a name is available (case-insensitive) */
export async function isNameAvailable(name: string): Promise<boolean> {
  const { data } = await supabase
    .from("usernames")
    .select("id")
    .ilike("name", name.trim())
    .limit(1);
  return !data || data.length === 0;
}

/** Suggest alternatives if name is taken */
export function suggestNames(base: string): string[] {
  const clean = base.trim().slice(0, 13);
  const rand = () => Math.floor(Math.random() * 99) + 1;
  return [
    `${clean}${rand()}`,
    `${clean}_pro`,
    `${clean}X`,
    `${clean}${Math.floor(Math.random() * 900) + 100}`,
    `x${clean}x`,
  ];
}

/** Register a unique username in Supabase + save locally */
export async function registerUsername(name: string): Promise<{ ok: boolean; error?: string }> {
  const trimmed = name.trim();
  if (trimmed.length < 2) return { ok: false, error: "min2" };
  if (trimmed.length > 16) return { ok: false, error: "max16" };
  if (!/^[a-zA-Z0-9\u00C0-\u024F_\-]+$/.test(trimmed)) return { ok: false, error: "invalid" };

  // Get current auth user (may be null for anonymous visitors)
  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("usernames")
    .insert({ name: trimmed, display_name: trimmed, user_id: user?.id || null })
    .select("id")
    .single();

  if (error) {
    // Unique constraint violation
    if (error.code === "23505") return { ok: false, error: "taken" };
    return { ok: false, error: error.message };
  }

  localStorage.setItem(USERNAME_KEY, trimmed);
  if (data?.id) localStorage.setItem(USERNAME_ID_KEY, data.id);
  return { ok: true };
}

/** Link username to auth user after registration/login */
export async function linkUsernameToUser(userId: string): Promise<void> {
  const name = getUsername();
  if (!name) return;
  await supabase
    .from("usernames")
    .update({ user_id: userId })
    .ilike("name", name);
}

/** Update last_seen timestamp */
export async function updateLastSeen(): Promise<void> {
  const name = getUsername();
  if (!name) return;
  await supabase
    .from("usernames")
    .update({ last_seen: new Date().toISOString() })
    .ilike("name", name);
}

/** Search usernames for challenge (returns top 5 matches) */
export async function searchUsernames(query: string): Promise<string[]> {
  if (query.trim().length < 1) return [];
  const { data } = await supabase
    .from("usernames")
    .select("display_name")
    .ilike("name", `%${query.trim()}%`)
    .neq("name", getUsername() || "")
    .order("last_seen", { ascending: false })
    .limit(5);
  return data?.map((r) => r.display_name) || [];
}
