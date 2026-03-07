// ─── MULTIPLAYER SYSTEM (Supabase Realtime) ─────────────────

import { supabase } from "./supabase/client";
import { getUsername } from "./username";

// ─── Types ──────────────────────────────────────────────────

export type MatchStatus = "waiting" | "playing" | "finished";

export interface MultiplayerMatch {
  id: string;
  game: string;
  status: MatchStatus;
  player1_id: string | null;
  player2_id: string | null;
  player1_name: string;
  player2_name: string | null;
  player1_score: number | null;
  player2_score: number | null;
  player1_done: boolean;
  player2_done: boolean;
  winner_id: string | null;
  seed: string;
  created_at: string;
  finished_at: string | null;
}

export type GameType = "quickpick" | "memoryflash" | "reflexgrid" | "mathtest" | "wordscramble";

export const GAME_LABELS: Record<GameType, string> = {
  quickpick: "Quick Pick",
  memoryflash: "Memory Flash",
  reflexgrid: "Reflex Grid",
  mathtest: "Math Test",
  wordscramble: "Word Scramble",
};

// ─── Seed generation (both players get identical game) ──────

export function generateSeed(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// ─── Create a challenge (player1 waits for opponent) ────────

export async function createChallenge(
  game: GameType,
  opponentName: string
): Promise<{ match: MultiplayerMatch | null; error?: string }> {
  const myName = getUsername();
  if (!myName) return { match: null, error: "no_username" };

  // Lookup opponent to verify they exist (use 'name' field everywhere for consistency)
  const { data: oppData } = await supabase
    .from("usernames")
    .select("user_id, name")
    .eq("name", opponentName.trim())
    .limit(1)
    .single();

  if (!oppData) return { match: null, error: "opponent_not_found" };

  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("multiplayer_matches")
    .insert({
      game,
      status: "waiting",
      player1_id: user?.id || null,
      player1_name: myName,
      player2_name: oppData.name,
      player2_id: oppData.user_id,
      seed: generateSeed(),
    })
    .select()
    .single();

  if (error) return { match: null, error: error.message };
  return { match: data as MultiplayerMatch };
}

// ─── Accept a challenge ─────────────────────────────────────

export async function acceptChallenge(
  matchId: string
): Promise<{ ok: boolean; error?: string }> {
  const { data: { user } } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("multiplayer_matches")
    .update({
      status: "playing",
      player2_id: user?.id || null,
    })
    .eq("id", matchId);

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

// ─── Submit score ───────────────────────────────────────────

export async function submitScore(
  matchId: string,
  score: number,
  isPlayer1: boolean
): Promise<{ ok: boolean }> {
  const field = isPlayer1 ? "player1_score" : "player2_score";
  const doneField = isPlayer1 ? "player1_done" : "player2_done";

  const { error } = await supabase
    .from("multiplayer_matches")
    .update({ [field]: score, [doneField]: true })
    .eq("id", matchId);

  if (error) return { ok: false };

  // Check if both players are done
  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (match?.player1_done && match?.player2_done) {
    const winnerId =
      (match.player1_score ?? 0) >= (match.player2_score ?? 0)
        ? match.player1_id
        : match.player2_id;

    await supabase
      .from("multiplayer_matches")
      .update({
        status: "finished",
        winner_id: winnerId,
        finished_at: new Date().toISOString(),
      })
      .eq("id", matchId);
  }

  return { ok: true };
}

// ─── Get pending challenges for me ──────────────────────────

export async function getMyPendingChallenges(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  const { data } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("status", "waiting")
    .eq("player2_name", myName)
    .order("created_at", { ascending: false })
    .limit(10);

  return (data as MultiplayerMatch[]) || [];
}

// ─── Get challenges I sent (waiting for opponent) ───────────

export async function getMySentChallenges(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  const { data } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("status", "waiting")
    .eq("player1_name", myName)
    .order("created_at", { ascending: false })
    .limit(10);

  return (data as MultiplayerMatch[]) || [];
}

// ─── Get my active matches ──────────────────────────────────

export async function getMyActiveMatches(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  // Two separate queries to avoid .or() parsing issues with special chars
  const [{ data: asP1 }, { data: asP2 }] = await Promise.all([
    supabase
      .from("multiplayer_matches")
      .select("*")
      .in("status", ["waiting", "playing"])
      .eq("player1_name", myName)
      .order("created_at", { ascending: false })
      .limit(20),
    supabase
      .from("multiplayer_matches")
      .select("*")
      .in("status", ["waiting", "playing"])
      .eq("player2_name", myName)
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const all = [...(asP1 || []), ...(asP2 || [])] as MultiplayerMatch[];
  // Dedupe by id
  const seen = new Set<string>();
  return all.filter((m) => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
}

// ─── Get my match history ───────────────────────────────────

export async function getMyMatchHistory(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  const [{ data: asP1 }, { data: asP2 }] = await Promise.all([
    supabase
      .from("multiplayer_matches")
      .select("*")
      .eq("status", "finished")
      .eq("player1_name", myName)
      .order("finished_at", { ascending: false })
      .limit(20),
    supabase
      .from("multiplayer_matches")
      .select("*")
      .eq("status", "finished")
      .eq("player2_name", myName)
      .order("finished_at", { ascending: false })
      .limit(20),
  ]);

  const all = [...(asP1 || []), ...(asP2 || [])] as MultiplayerMatch[];
  const seen = new Set<string>();
  return all.filter((m) => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
}

// ─── Subscribe to match updates (Realtime) ──────────────────

export function subscribeToMatch(
  matchId: string,
  onUpdate: (match: MultiplayerMatch) => void
) {
  const channel = supabase
    .channel(`match-${matchId}`)
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "multiplayer_matches",
        filter: `id=eq.${matchId}`,
      },
      (payload) => {
        onUpdate(payload.new as MultiplayerMatch);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

// ─── Subscribe to incoming challenges (Realtime) ────────────

export function subscribeToMyChallenges(
  onChallenge: (match: MultiplayerMatch) => void
) {
  const myName = getUsername();
  if (!myName) return () => {};

  const channel = supabase
    .channel("my-challenges")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "multiplayer_matches",
        filter: `player2_name=eq.${myName}`,
      },
      (payload) => {
        onChallenge(payload.new as MultiplayerMatch);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

// ─── Decline / cancel a match ───────────────────────────────

export async function declineChallenge(matchId: string): Promise<void> {
  await supabase
    .from("multiplayer_matches")
    .update({ status: "declined" })
    .eq("id", matchId)
    .eq("status", "waiting");
}

export async function cancelChallenge(matchId: string): Promise<void> {
  await supabase
    .from("multiplayer_matches")
    .update({ status: "cancelled" })
    .eq("id", matchId)
    .eq("status", "waiting");
}

export async function abandonMatch(matchId: string): Promise<void> {
  await supabase
    .from("multiplayer_matches")
    .update({ status: "abandoned" })
    .eq("id", matchId)
    .eq("status", "playing");
}
