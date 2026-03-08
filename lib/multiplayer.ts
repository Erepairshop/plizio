// ─── MULTIPLAYER SYSTEM (Supabase Realtime) ─────────────────

import { supabase } from "./supabase/client";
import { getUsername } from "./username";

// ─── Types ──────────────────────────────────────────────────

export type MatchStatus = "waiting" | "playing" | "finished";
export type Difficulty = "easy" | "medium" | "hard";  // legacy
export type MatchType = "single" | "mix";

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
  // Difficulty for level-based games
  difficulty: Difficulty | null;
  // Mix match fields
  match_type: MatchType;
  mix_games: string[] | null;
  mix_scores_p1: number[] | null;
  mix_scores_p2: number[] | null;
  mix_round: number;
  mix_round_done_p1: boolean;
  mix_round_done_p2: boolean;
}

export type GameType =
  | "quickpick" | "memoryflash" | "mathtest" | "wordscramble"
  | "reflexrush" | "numberrush" | "spotdiff" | "sequencerush"
  | "wordhunt" | "milliomos" | "kodex" | "deutschtest"
  | "numberpath" | "minisudoku" | "skyclimb" | "lightout";

export const GAME_LABELS: Record<GameType, string> = {
  quickpick: "Quick Pick",
  memoryflash: "Memory Flash",
  mathtest: "Math Test",
  wordscramble: "Word Scramble",
  reflexrush: "Reflex Rush",
  numberrush: "Number Rush",
  spotdiff: "Spot Diff",
  sequencerush: "Sequence Rush",
  wordhunt: "Word Hunt",
  milliomos: "Milliomos",
  kodex: "Kodex",
  deutschtest: "Deutsch Test",
  numberpath: "Number Path",
  minisudoku: "Mini Sudoku",
  skyclimb: "Sky Climb",
  lightout: "Light Out",
};

// Games that have level-based difficulty
export const LEVEL_GAMES: Set<GameType> = new Set(["reflexrush", "numberrush", "sequencerush", "wordhunt", "numberpath", "minisudoku", "wordscramble", "skyclimb", "lightout"]);

// Difficulty → level mapping
export const DIFFICULTY_LEVEL: Record<Difficulty, number> = {
  easy: 3,
  medium: 5,
  hard: 9,
};

export const DIFFICULTY_LABELS = {
  en: { easy: "Easy", medium: "Medium", hard: "Hard" },
  hu: { easy: "Konnyu", medium: "Kozepes", hard: "Nehez" },
  de: { easy: "Leicht", medium: "Mittel", hard: "Schwer" },
  ro: { easy: "Usor", medium: "Mediu", hard: "Greu" },
} as Record<string, Record<Difficulty, string>>;

// ─── Parse level from match difficulty field ────────────────

export function getMatchLevel(match: MultiplayerMatch, roundIndex?: number): number | null {
  if (!match.difficulty) return null;
  const s = String(match.difficulty);
  if (s.includes(",")) {
    // Mix: comma-separated levels
    const parts = s.split(",");
    const idx = roundIndex ?? 0;
    const val = parseInt(parts[idx] || "0");
    return val > 0 ? val : null;
  }
  const val = parseInt(s);
  return isNaN(val) ? null : val;
}

// ─── Resolve player ID: auth user > usernames table > deterministic fallback ──

async function resolvePlayerId(username: string): Promise<string> {
  // 1. Try auth user
  const { data: { user } } = await supabase.auth.getUser();
  if (user?.id) return user.id;
  // 2. Try usernames table
  const { data } = await supabase
    .from("usernames")
    .select("user_id")
    .eq("name", username)
    .limit(1)
    .single();
  if (data?.user_id) return data.user_id;
  // 3. Deterministic UUID from username (v5-like)
  let h = 0x12345678;
  for (let i = 0; i < username.length; i++) {
    h = ((h << 5) - h + username.charCodeAt(i)) | 0;
  }
  const hex = (n: number) => ((n >>> 0).toString(16)).padStart(8, "0");
  const h2 = ((h * 0x45d9f3b) >>> 0);
  return `${hex(h)}-${hex(h2).slice(0,4)}-4${hex(h2).slice(5,8)}-8${hex(h).slice(1,4)}-${hex(h2)}${hex(h).slice(0,4)}`;
}

// ─── Seed generation (both players get identical game) ──────

export function generateSeed(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// ─── Create a challenge (player1 waits for opponent) ────────

export async function createChallenge(
  game: GameType,
  opponentName: string,
  options?: { difficulty?: Difficulty; level?: number; matchType?: MatchType; mixGames?: GameType[]; mixLevels?: (number | null)[] }
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

  const userId = await resolvePlayerId(myName);

  const isMix = options?.matchType === "mix";
  const mixGames = isMix ? (options?.mixGames || []) : null;

  const { data, error } = await supabase
    .from("multiplayer_matches")
    .insert({
      game: isMix ? "mix" : game,
      status: "waiting",
      player1_id: userId,
      player1_name: myName,
      player2_name: oppData.name,
      player2_id: oppData.user_id,
      seed: generateSeed(),
      difficulty: isMix && options?.mixLevels
        ? options.mixLevels.map(l => l ?? 0).join(",")
        : options?.level ? String(options.level) : (options?.difficulty || null),
      match_type: isMix ? "mix" : "single",
      mix_games: mixGames,
      mix_scores_p1: isMix ? [] : null,
      mix_scores_p2: isMix ? [] : null,
      mix_round: isMix ? 1 : 0,
      mix_round_done_p1: false,
      mix_round_done_p2: false,
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
  const myName = getUsername();
  const updateFields: Record<string, unknown> = { status: "playing" };
  if (myName) {
    const myId = await resolvePlayerId(myName);
    updateFields.player2_id = myId;
  }

  const { error } = await supabase
    .from("multiplayer_matches")
    .update(updateFields)
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

// ─── Mix match: submit round score ──────────────────────────

export async function submitMixRoundScore(
  matchId: string,
  score: number,
  isPlayer1: boolean
): Promise<{ ok: boolean; bothDone?: boolean; roundScores?: { p1: number[]; p2: number[] } }> {
  // Get current match state
  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!match) return { ok: false };

  const doneField = isPlayer1 ? "mix_round_done_p1" : "mix_round_done_p2";
  const scoresField = isPlayer1 ? "mix_scores_p1" : "mix_scores_p2";
  const currentScores = (isPlayer1 ? match.mix_scores_p1 : match.mix_scores_p2) as number[] || [];
  const updatedScores = [...currentScores, score];

  await supabase
    .from("multiplayer_matches")
    .update({
      [scoresField]: updatedScores,
      [doneField]: true,
    })
    .eq("id", matchId);

  // Re-fetch to check if both done
  const { data: fresh } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!fresh) return { ok: true };

  const bothDone = fresh.mix_round_done_p1 && fresh.mix_round_done_p2;
  return {
    ok: true,
    bothDone,
    roundScores: { p1: fresh.mix_scores_p1 || [], p2: fresh.mix_scores_p2 || [] },
  };
}

// ─── Mix match: advance to next round ───────────────────────

export async function advanceMixRound(matchId: string): Promise<{ ok: boolean; finished?: boolean; nextRound?: number }> {
  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!match) return { ok: false };

  const totalRounds = (match.mix_games as string[])?.length || 5;
  const currentRound = match.mix_round as number;

  if (currentRound >= totalRounds) {
    // Match finished — determine winner
    const p1Scores = (match.mix_scores_p1 || []) as number[];
    const p2Scores = (match.mix_scores_p2 || []) as number[];
    let p1Wins = 0, p2Wins = 0;
    for (let i = 0; i < p1Scores.length; i++) {
      if (p1Scores[i] > p2Scores[i]) p1Wins++;
      else if (p2Scores[i] > p1Scores[i]) p2Wins++;
    }
    const winnerId = p1Wins > p2Wins ? match.player1_id : p2Wins > p1Wins ? match.player2_id : null;

    await supabase
      .from("multiplayer_matches")
      .update({
        status: "finished",
        winner_id: winnerId,
        player1_score: p1Wins,
        player2_score: p2Wins,
        player1_done: true,
        player2_done: true,
        finished_at: new Date().toISOString(),
      })
      .eq("id", matchId);

    return { ok: true, finished: true };
  }

  // Advance to next round
  const nextRound = currentRound + 1;
  await supabase
    .from("multiplayer_matches")
    .update({
      mix_round: nextRound,
      mix_round_done_p1: false,
      mix_round_done_p2: false,
      seed: generateSeed(), // new seed for each round
    })
    .eq("id", matchId);

  return { ok: true, finished: false, nextRound };
}

// ─── Mix polling helper (called from game pages) ─────────────

export type MixPollResult =
  | { action: "wait" }
  | { action: "finished"; myWins: number; oppWins: number }
  | { action: "next"; url: string };

export async function pollMixRound(
  matchId: string,
  currentMixRound: number,
  isP1: boolean,
  opponentName: string,
): Promise<MixPollResult> {
  const { data } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();
  if (!data) return { action: "wait" };

  const totalRounds = (data.mix_games as string[])?.length || 5;
  const dbRound = (data.mix_round as number) || 1;

  // Match already finished
  if (data.status === "finished") {
    const p1S = (data.mix_scores_p1 || []) as number[];
    const p2S = (data.mix_scores_p2 || []) as number[];
    const myS = isP1 ? p1S : p2S;
    const opS = isP1 ? p2S : p1S;
    let myW = 0, opW = 0;
    for (let i = 0; i < myS.length; i++) {
      if (myS[i] > (opS[i] ?? 0)) myW++;
      else if (myS[i] < (opS[i] ?? 0)) opW++;
    }
    return { action: "finished", myWins: myW, oppWins: opW };
  }

  // Round already advanced (other player advanced it)
  if (dbRound > currentMixRound) {
    const nextGame = (data.mix_games as string[])[dbRound - 1];
    let url = `/${nextGame}?match=${matchId}&seed=${data.seed}&p=${isP1 ? "1" : "2"}&vs=${encodeURIComponent(opponentName)}&mixround=${dbRound}`;
    if (data.difficulty && String(data.difficulty).includes(",")) {
      const levels = String(data.difficulty).split(",");
      const lv = levels[dbRound - 1];
      if (lv && Number(lv) > 0) url += `&level=${lv}`;
    }
    return { action: "next", url };
  }

  // Both done on current round
  const bothDone = data.mix_round_done_p1 && data.mix_round_done_p2;
  if (!bothDone) return { action: "wait" };

  // Only P1 advances the round to avoid race condition
  if (isP1) {
    const adv = await advanceMixRound(matchId);
    if (adv.finished) {
      const p1S = (data.mix_scores_p1 || []) as number[];
      const p2S = (data.mix_scores_p2 || []) as number[];
      const myS = isP1 ? p1S : p2S;
      const opS = isP1 ? p2S : p1S;
      let myW = 0, opW = 0;
      for (let i = 0; i < myS.length; i++) {
        if (myS[i] > (opS[i] ?? 0)) myW++;
        else if (myS[i] < (opS[i] ?? 0)) opW++;
      }
      return { action: "finished", myWins: myW, oppWins: opW };
    }
    // Re-fetch to get updated round
    const { data: fm } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
    if (fm && fm.mix_games) {
      const nr = (fm.mix_round as number) || adv.nextRound || 2;
      const nextGame = (fm.mix_games as string[])[nr - 1];
      let url = `/${nextGame}?match=${matchId}&seed=${fm.seed}&p=1&vs=${encodeURIComponent(opponentName)}&mixround=${nr}`;
      if (fm.difficulty && String(fm.difficulty).includes(",")) {
        const levels = String(fm.difficulty).split(",");
        const lv = levels[nr - 1];
        if (lv && Number(lv) > 0) url += `&level=${lv}`;
      }
      return { action: "next", url };
    }
  }

  // P2 waits for P1 to advance
  return { action: "wait" };
}

// ─── Get mix round standings ────────────────────────────────

export function getMixStandings(p1Scores: number[], p2Scores: number[]): { p1Wins: number; p2Wins: number } {
  let p1Wins = 0, p2Wins = 0;
  for (let i = 0; i < Math.min(p1Scores.length, p2Scores.length); i++) {
    if (p1Scores[i] > p2Scores[i]) p1Wins++;
    else if (p2Scores[i] > p1Scores[i]) p2Wins++;
  }
  return { p1Wins, p2Wins };
}
