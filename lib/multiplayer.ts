// ─── MULTIPLAYER SYSTEM (Supabase Realtime) ─────────────────

import { supabase } from "./supabase/client";
import { getUsername } from "./username";

// ─── Types ──────────────────────────────────────────────────

export type MatchStatus = "waiting" | "playing" | "finished";
export type Difficulty = "easy" | "medium" | "hard";  // legacy
export type MatchType = "single" | "mix";

// ─── Group match player data ─────────────────────────────────
export interface MatchPlayer {
  name: string;
  id: string;
  score: number | null;
  done: boolean;
  accepted: boolean;
}

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
  // Group match fields (3-4 players)
  max_players: number;
  invited_players: string[] | null;
  players_data: MatchPlayer[] | null;
}

export type GameType =
  | "quickpick" | "wordscramble"
  | "reflexrush" | "numberrush" | "sequencerush"
  | "wordhunt"
  | "numberpath" | "pathbuilder" | "minisudoku" | "skyclimb" | "lightout" | "numbermerge" | "nonogram" | "mazerush"
  | "pipeflow" | "deductiongrid" | "deductiongrid2" | "timeecho" | "shadowswitch" | "signaldecoder"
  | "airhockey";

// Games that will be added later (page.tsx multi integration pending):
// "memoryflash" | "spotdiff" | "milliomos" | "kodex" | "pingpong" | "tennis"
// "citydrive" | "racetrack"

export const GAME_LABELS: Record<GameType, string> = {
  quickpick: "Quick Pick",
  wordscramble: "Word Scramble",
  reflexrush: "Reflex Rush",
  numberrush: "Number Rush",
  sequencerush: "Sequence Rush",
  wordhunt: "Word Hunt",
  numberpath: "Number Path",
  pathbuilder: "Path Builder",
  minisudoku: "Mini Sudoku",
  skyclimb: "Sky Climb",
  lightout: "Light Out",
  numbermerge: "Number Merge",
  nonogram: "Nonogram",
  mazerush: "Maze Rush",
  pipeflow: "Pipe Flow",
  deductiongrid: "Deduction Grid",
  deductiongrid2: "Galactic Deduction",
  timeecho: "Time Echo",
  shadowswitch: "Shadow Switch",
  signaldecoder: "Signal Decoder",
  airhockey: "Air Hockey",
};

// Games that have level-based difficulty
export const LEVEL_GAMES: Set<GameType> = new Set(["reflexrush", "numberrush", "sequencerush", "wordhunt", "numberpath", "pathbuilder", "minisudoku", "wordscramble", "skyclimb", "lightout", "numbermerge", "nonogram", "mazerush", "pipeflow", "deductiongrid", "deductiongrid2", "timeecho", "shadowswitch", "signaldecoder"]);

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

  // Check for existing active challenge between these two players
  const { data: existing } = await supabase
    .from("multiplayer_matches")
    .select("id")
    .in("status", ["waiting", "playing"])
    .eq("player1_name", myName)
    .eq("player2_name", oppData.name)
    .limit(1);

  if (existing && existing.length > 0) {
    return { match: null, error: "already_challenged" };
  }

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
    .eq("id", matchId)
    .in("status", ["playing", "finished"]);

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

  try {
    // 1v1 challenges where I'm player2
    const { data: p2, error: e1 } = await supabase
      .from("multiplayer_matches")
      .select("*")
      .eq("status", "waiting")
      .eq("player2_name", myName)
      .order("created_at", { ascending: false })
      .limit(10);

    // Group challenges where I'm invited
    const { data: group, error: e2 } = await supabase
      .from("multiplayer_matches")
      .select("*")
      .eq("status", "waiting")
      .contains("invited_players", [myName])
      .order("created_at", { ascending: false })
      .limit(10);

    if (e1 || e2) return p2 ? (p2 as MultiplayerMatch[]) : [];

    const all = [...(p2 || []), ...(group || [])] as MultiplayerMatch[];
    const seen = new Set<string>();
    return all.filter(m => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
  } catch {
    return [];
  }
}

// ─── Get challenges I sent (waiting for opponent) ───────────

export async function getMySentChallenges(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  try {
    const { data } = await supabase
      .from("multiplayer_matches")
      .select("*")
      .eq("status", "waiting")
      .eq("player1_name", myName)
      .order("created_at", { ascending: false })
      .limit(10);

    return (data as MultiplayerMatch[]) || [];
  } catch {
    return [];
  }
}

// ─── Get my active matches ──────────────────────────────────

export async function getMyActiveMatches(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  try {
    // Three queries: as P1, as P2 (1v1), and as group member
    const [{ data: asP1 }, { data: asP2 }, { data: asGroup }] = await Promise.all([
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
      supabase
        .from("multiplayer_matches")
        .select("*")
        .in("status", ["waiting", "playing"])
        .contains("invited_players", [myName])
        .order("created_at", { ascending: false })
        .limit(20),
    ]);

    const all = [...(asP1 || []), ...(asP2 || []), ...(asGroup || [])] as MultiplayerMatch[];
    const seen = new Set<string>();
    return all.filter((m) => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
  } catch {
    return [];
  }
}

// ─── Get my match history ───────────────────────────────────

export async function getMyMatchHistory(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  try {
    const [{ data: asP1 }, { data: asP2 }, { data: asGroup }] = await Promise.all([
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
      supabase
        .from("multiplayer_matches")
        .select("*")
        .eq("status", "finished")
        .contains("invited_players", [myName])
        .order("finished_at", { ascending: false })
        .limit(20),
    ]);

    const all = [...(asP1 || []), ...(asP2 || []), ...(asGroup || [])] as MultiplayerMatch[];
    const seen = new Set<string>();
    return all.filter((m) => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
  } catch {
    return [];
  }
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
      (payload: { new: unknown }) => {
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
      (payload: { new: unknown }) => {
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
  | { action: "error"; reason: string }
  | { action: "finished"; myWins: number; oppWins: number }
  | { action: "next"; url: string; roundScores?: { myScore: number; oppScore: number; roundNumber: number; totalRounds: number } };

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
  if (!data) return { action: "error", reason: "match_not_found" };

  // Match was abandoned or cancelled
  if (data.status === "abandoned" || data.status === "cancelled" || data.status === "declined") {
    return { action: "error", reason: "match_ended" };
  }

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
    // Include previous round scores
    const p1S = (data.mix_scores_p1 || []) as number[];
    const p2S = (data.mix_scores_p2 || []) as number[];
    const prevRound = currentMixRound - 1;
    if (prevRound >= 0 && prevRound < p1S.length && prevRound < p2S.length) {
      return { action: "next", url, roundScores: { myScore: isP1 ? p1S[prevRound] : p2S[prevRound], oppScore: isP1 ? p2S[prevRound] : p1S[prevRound], roundNumber: currentMixRound, totalRounds } };
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
      // Include current round scores
      const p1S = (fm.mix_scores_p1 || []) as number[];
      const p2S = (fm.mix_scores_p2 || []) as number[];
      const currRound = currentMixRound - 1;
      if (currRound >= 0 && currRound < p1S.length && currRound < p2S.length) {
        return { action: "next", url, roundScores: { myScore: isP1 ? p1S[currRound] : p2S[currRound], oppScore: isP1 ? p2S[currRound] : p1S[currRound], roundNumber: currentMixRound, totalRounds } };
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

// ═══════════════════════════════════════════════════════════════
// ─── GROUP MATCH (3-4 players) ────────────────────────────────
// ═══════════════════════════════════════════════════════════════

export const MAX_GROUP_PLAYERS = 4;

/** Check if a match is a group match (3+ players) */
export function isGroupMatch(match: MultiplayerMatch): boolean {
  return (match.max_players ?? 2) > 2;
}

/** Get my player index (0-based) in a group match */
export function getMyPlayerIndex(match: MultiplayerMatch, myName: string): number {
  const players = match.players_data as MatchPlayer[] | null;
  if (!players) return -1;
  return players.findIndex(p => p.name.toLowerCase() === myName.toLowerCase());
}

/** Create a group challenge (3-4 players) */
export async function createGroupChallenge(
  game: GameType,
  opponentNames: string[],
  options?: { level?: number }
): Promise<{ match: MultiplayerMatch | null; error?: string }> {
  const myName = getUsername();
  if (!myName) return { match: null, error: "no_username" };
  if (opponentNames.length < 2 || opponentNames.length > 3) {
    return { match: null, error: "need_2_or_3_opponents" };
  }

  // Verify all opponents exist
  const oppDataList: { name: string; user_id: string }[] = [];
  for (const name of opponentNames) {
    const { data } = await supabase
      .from("usernames")
      .select("user_id, name")
      .eq("name", name.trim())
      .limit(1)
      .single();
    if (!data) return { match: null, error: `opponent_not_found:${name}` };
    oppDataList.push(data);
  }

  const myId = await resolvePlayerId(myName);
  const maxPlayers = opponentNames.length + 1; // creator + opponents

  // Build players_data array
  const playersData: MatchPlayer[] = [
    { name: myName, id: myId, score: null, done: false, accepted: true },
    ...oppDataList.map(opp => ({
      name: opp.name, id: opp.user_id, score: null, done: false, accepted: false,
    })),
  ];

  const { data, error } = await supabase
    .from("multiplayer_matches")
    .insert({
      game,
      status: "waiting",
      player1_id: myId,
      player1_name: myName,
      player2_name: null,
      seed: generateSeed(),
      difficulty: options?.level ? String(options.level) : null,
      match_type: "single",
      max_players: maxPlayers,
      invited_players: opponentNames.map(n => n.trim()),
      players_data: playersData,
    })
    .select()
    .single();

  if (error) return { match: null, error: error.message };
  return { match: data as MultiplayerMatch };
}

/** Accept a group challenge — updates the players_data jsonb */
export async function acceptGroupChallenge(matchId: string): Promise<{ ok: boolean; allAccepted?: boolean }> {
  const myName = getUsername();
  if (!myName) return { ok: false };

  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!match) return { ok: false };

  const players = (match.players_data || []) as MatchPlayer[];
  const idx = players.findIndex(p => p.name.toLowerCase() === myName.toLowerCase());
  if (idx < 0) return { ok: false };

  players[idx].accepted = true;

  // Check if all accepted
  const allAccepted = players.every(p => p.accepted);

  const update: Record<string, unknown> = { players_data: players };
  if (allAccepted) update.status = "playing";

  await supabase
    .from("multiplayer_matches")
    .update(update)
    .eq("id", matchId);

  return { ok: true, allAccepted };
}

/** Decline a group challenge — remove self from players_data */
export async function declineGroupChallenge(matchId: string): Promise<void> {
  const myName = getUsername();
  if (!myName) return;

  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!match) return;

  const players = (match.players_data || []) as MatchPlayer[];
  const filtered = players.filter(p => p.name.toLowerCase() !== myName.toLowerCase());
  const invitedFiltered = (match.invited_players || []).filter(
    (n: string) => n.toLowerCase() !== myName.toLowerCase()
  );

  // If less than 2 players left, cancel the match
  if (filtered.length < 2) {
    await supabase
      .from("multiplayer_matches")
      .update({ status: "cancelled", players_data: filtered, invited_players: invitedFiltered })
      .eq("id", matchId);
    return;
  }

  await supabase
    .from("multiplayer_matches")
    .update({
      players_data: filtered,
      invited_players: invitedFiltered,
      max_players: filtered.length,
    })
    .eq("id", matchId);
}

/** Submit score for a group match */
export async function submitGroupScore(
  matchId: string,
  score: number,
): Promise<{ ok: boolean; allDone?: boolean; rankings?: { name: string; score: number }[] }> {
  const myName = getUsername();
  if (!myName) return { ok: false };

  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!match) return { ok: false };

  const players = (match.players_data || []) as MatchPlayer[];
  const idx = players.findIndex(p => p.name.toLowerCase() === myName.toLowerCase());
  if (idx < 0) return { ok: false };

  players[idx].score = score;
  players[idx].done = true;

  const allDone = players.every(p => p.done);

  const update: Record<string, unknown> = { players_data: players };

  if (allDone) {
    // Rank players by score (descending)
    const ranked = [...players].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    const winnerId = ranked[0].id;
    update.status = "finished";
    update.winner_id = winnerId;
    update.finished_at = new Date().toISOString();
  }

  await supabase
    .from("multiplayer_matches")
    .update(update)
    .eq("id", matchId);

  if (allDone) {
    const rankings = [...players].sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
      .map(p => ({ name: p.name, score: p.score ?? 0 }));
    return { ok: true, allDone: true, rankings };
  }

  return { ok: true, allDone: false };
}

/** Get pending group challenges for me (where I'm in invited_players) */
export async function getMyPendingGroupChallenges(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  const { data } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("status", "waiting")
    .contains("invited_players", [myName])
    .order("created_at", { ascending: false })
    .limit(10);

  return (data as MultiplayerMatch[]) || [];
}

/** Get active group matches for me */
export async function getMyActiveGroupMatches(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  // Creator's group matches
  const { data: asCreator } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .in("status", ["waiting", "playing"])
    .eq("player1_name", myName)
    .gt("max_players", 2)
    .order("created_at", { ascending: false })
    .limit(10);

  // Group matches where I'm invited
  const { data: asInvited } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .in("status", ["waiting", "playing"])
    .contains("invited_players", [myName])
    .order("created_at", { ascending: false })
    .limit(10);

  const all = [...(asCreator || []), ...(asInvited || [])] as MultiplayerMatch[];
  const seen = new Set<string>();
  return all.filter(m => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
}

/** Get group match history */
export async function getMyGroupMatchHistory(): Promise<MultiplayerMatch[]> {
  const myName = getUsername();
  if (!myName) return [];

  const { data: asCreator } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("status", "finished")
    .eq("player1_name", myName)
    .gt("max_players", 2)
    .order("finished_at", { ascending: false })
    .limit(10);

  const { data: asInvited } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("status", "finished")
    .contains("invited_players", [myName])
    .order("finished_at", { ascending: false })
    .limit(10);

  const all = [...(asCreator || []), ...(asInvited || [])] as MultiplayerMatch[];
  const seen = new Set<string>();
  return all.filter(m => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });
}

/** Poll group match for opponent scores (called from game pages) */
export async function pollGroupMatch(matchId: string): Promise<{
  allDone: boolean;
  players: MatchPlayer[];
  rankings?: { name: string; score: number }[];
}> {
  const { data } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!data) return { allDone: false, players: [] };

  const players = (data.players_data || []) as MatchPlayer[];
  const allDone = players.every(p => p.done);

  if (allDone) {
    const rankings = [...players].sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
      .map(p => ({ name: p.name, score: p.score ?? 0 }));
    return { allDone: true, players, rankings };
  }

  return { allDone: false, players };
}

/** Start a group match early (creator starts when enough players accepted) */
export async function startGroupMatch(matchId: string): Promise<{ ok: boolean }> {
  const { data: match } = await supabase
    .from("multiplayer_matches")
    .select("*")
    .eq("id", matchId)
    .single();

  if (!match) return { ok: false };

  const players = (match.players_data || []) as MatchPlayer[];
  const accepted = players.filter(p => p.accepted);
  if (accepted.length < 2) return { ok: false };

  // Remove non-accepted players
  const activePlayers = players.filter(p => p.accepted);
  const activeNames = activePlayers.filter(p => p.name !== match.player1_name).map(p => p.name);

  await supabase
    .from("multiplayer_matches")
    .update({
      status: "playing",
      players_data: activePlayers,
      invited_players: activeNames,
      max_players: activePlayers.length,
    })
    .eq("id", matchId);

  return { ok: true };
}
