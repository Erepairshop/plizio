// ─── USERNAME SYSTEM (Supabase-backed unique names) ─────────

import { supabase } from "./supabase/client";

const USERNAME_KEY = "plizio_username";
const USERNAME_ID_KEY = "plizio_username_id"; // row id in usernames table
const USERNAME_PENDING_KEY = "plizio_username_pending";

const USERNAME_PATTERN = /^[\p{L}\p{M}\p{N}_-]+$/u;

export function normalizeUsername(name: string): string {
  return name.trim().normalize("NFC");
}

export function usernameLength(name: string): number {
  const normalized = normalizeUsername(name);
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(normalized)).length;
  }
  return Array.from(normalized).length;
}

export function isValidUsername(name: string): boolean {
  return USERNAME_PATTERN.test(normalizeUsername(name));
}

function saveLocalUsername(name: string, pending: boolean): void {
  localStorage.setItem(USERNAME_KEY, name);
  if (pending) localStorage.setItem(USERNAME_PENDING_KEY, "1");
  else localStorage.removeItem(USERNAME_PENDING_KEY);
}

export function getUsername(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USERNAME_KEY);
}

export function hasUsername(): boolean {
  if (typeof window === "undefined") return false;
  const name = localStorage.getItem(USERNAME_KEY);
  return !!name && name.trim().length > 0;
}

/** Check if a name is available (case-insensitive via DB index) */
export async function isNameAvailable(name: string): Promise<boolean> {
  const normalized = normalizeUsername(name);
  const { data } = await supabase
    .from("usernames")
    .select("id")
    .eq("name", normalized)
    .limit(1);
  return !data || data.length === 0;
}

/** Suggest alternatives if name is taken */
export function suggestNames(base: string): string[] {
  const clean = Array.from(normalizeUsername(base)).slice(0, 13).join("");
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
  const trimmed = normalizeUsername(name);
  const length = usernameLength(trimmed);
  if (length < 2) return { ok: false, error: "min2" };
  if (length > 16) return { ok: false, error: "max16" };
  if (!isValidUsername(trimmed)) return { ok: false, error: "invalid" };

  try {
    // Reading the local session avoids an unnecessary auth network request here.
    const { data: { session } } = await supabase.auth.getSession();
    const abort = new AbortController();
    const timeout = window.setTimeout(() => abort.abort(), 8000);
    const { data, error } = await supabase
      .from("usernames")
      .insert({ name: trimmed, display_name: trimmed, user_id: session?.user.id || null })
      .select("id")
      .abortSignal(abort.signal)
      .single();
    window.clearTimeout(timeout);

    if (error) {
      // A real uniqueness conflict must remain visible to the visitor.
      if (error.code === "23505") return { ok: false, error: "taken" };
      // Network/DNS errors from a paused Supabase project have no useful DB code.
      if (error.code) return { ok: false, error: error.message };
      saveLocalUsername(trimmed, true);
      return { ok: true };
    }

    saveLocalUsername(trimmed, false);
    if (data?.id) localStorage.setItem(USERNAME_ID_KEY, data.id);
    return { ok: true };
  } catch {
    // A player name must never block the game because the optional cloud is down.
    saveLocalUsername(trimmed, true);
    return { ok: true };
  }
}

/** Link username to auth user after registration/login */
export async function linkUsernameToUser(userId: string): Promise<void> {
  const name = getUsername();
  if (!name) return;
  await supabase
    .from("usernames")
    .update({ user_id: userId })
    .eq("name", name);
}

/**
 * Sync username to Supabase on login/register.
 * PRIORITY: if the userId already has a username on the server, restore it locally.
 * This prevents a locally-typed "TempName" from overwriting the user's real username.
 */
export async function syncUsernameToSupabase(userId: string): Promise<void> {
  // FIRST: check if this userId already has a username on the server
  const { data: serverLinked } = await supabase
    .from("usernames")
    .select("id, name")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  if (serverLinked) {
    // Server is authoritative — restore the real username locally
    localStorage.setItem(USERNAME_KEY, serverLinked.name);
    localStorage.setItem(USERNAME_ID_KEY, serverLinked.id);
    localStorage.removeItem(USERNAME_PENDING_KEY);
    await supabase
      .from("usernames")
      .update({ last_seen: new Date().toISOString() })
      .eq("id", serverLinked.id);
    return;
  }

  // No server username for this userId yet — link/register the local username
  const name = getUsername();
  if (!name) return;

  // Check if name already exists in the table (registered anonymously)
  const { data: existing } = await supabase
    .from("usernames")
    .select("id, user_id")
    .eq("name", name)
    .limit(1)
    .maybeSingle();

  if (existing) {
    // Name exists — link to user if not yet linked
    if (!existing.user_id) {
      await supabase
        .from("usernames")
        .update({ user_id: userId, last_seen: new Date().toISOString() })
        .eq("id", existing.id);
    } else {
      await supabase
        .from("usernames")
        .update({ last_seen: new Date().toISOString() })
        .eq("id", existing.id);
    }
    localStorage.setItem(USERNAME_ID_KEY, existing.id);
    localStorage.removeItem(USERNAME_PENDING_KEY);
  } else {
    // Insert new username linked to this user
    const { data } = await supabase
      .from("usernames")
      .insert({ name, display_name: name, user_id: userId })
      .select("id")
      .single();
    if (data?.id) {
      localStorage.setItem(USERNAME_ID_KEY, data.id);
      localStorage.removeItem(USERNAME_PENDING_KEY);
    }
  }
}

/** Change username (must be unique, user must be logged in) */
export async function changeUsername(newName: string): Promise<{ ok: boolean; error?: string }> {
  const trimmed = normalizeUsername(newName);
  const length = usernameLength(trimmed);
  if (length < 2) return { ok: false, error: "min2" };
  if (length > 16) return { ok: false, error: "max16" };
  if (!isValidUsername(trimmed)) return { ok: false, error: "invalid" };

  const oldName = getUsername();
  if (!oldName) return { ok: false, error: "no_username" };
  if (trimmed === oldName) return { ok: true };

  // Check availability
  const available = await isNameAvailable(trimmed);
  if (!available) return { ok: false, error: "taken" };

  // Update in Supabase
  const { error } = await supabase
    .from("usernames")
    .update({ name: trimmed, display_name: trimmed })
    .eq("name", oldName);

  if (error) {
    if (error.code === "23505") return { ok: false, error: "taken" };
    return { ok: false, error: error.message };
  }

  localStorage.setItem(USERNAME_KEY, trimmed);
  return { ok: true };
}

/** Update last_seen timestamp */
export async function updateLastSeen(): Promise<void> {
  const name = getUsername();
  if (!name) return;
  await supabase
    .from("usernames")
    .update({ last_seen: new Date().toISOString() })
    .eq("name", name);
}

/** Search usernames for challenge (returns top 5 matches) */
export async function searchUsernames(query: string): Promise<string[]> {
  if (query.trim().length < 1) return [];
  const { data } = await supabase
    .from("usernames")
    .select("name")
    .ilike("name", `%${query.trim()}%`)
    .neq("name", getUsername() || "")
    .order("last_seen", { ascending: false })
    .limit(5);
  return data?.map((r: { name: string }) => r.name) || [];
}
