import { supabase } from "./supabase/client";
import { getSpecialCardCount } from "./specialCards";
import { getStats, type PlayerStats } from "./milestones";
import { getOwnedSkins, getActiveSkin } from "./skins";
import { getClaimedMilestones } from "./milestones";
import { getCards, type GameCard } from "./cards";

// ─── SYNC: localStorage <-> Supabase ────────────────

// Prevent concurrent syncs (race condition: two parallel syncs can restore redeemed cards)
let syncPromise: Promise<void> | null = null;

interface UserData {
  user_id: string;
  special_cards: number;
  total_games: number;
  perfect_scores: number;
  highest_streak: number;
  current_streak: number;
  last_play_date: string | null;
  owned_skins: string[];
  active_skin: string;
  sky_highest_level: number;
  milestones_claimed: string[];
  referred_by: string | null;
  share_count_today: number;
  share_date: string | null;
  extra_data: Record<string, unknown>;
}

// ─── Extra data: all localStorage keys to sync beyond the core columns ───

const CLOTHING_SLOTS = ["top", "bottom", "shoe", "cape", "glasses", "gloves"] as const;

// All localStorage keys that store game progress / avatar / room data
const GAME_PROGRESS_KEYS = [
  // Astromath
  "astromath_g1_v2", "astromath_g2_v1", "astromath_g3_v1", "astromath_g4_v1",
  "astromath_g5_v1", "astromath_g6_v1", "astromath_g7_v1", "astromath_g8_v1",
  // Astrodeutsch
  "astrodeutsch_k1_v1", "astrodeutsch_k2_v1", "astrodeutsch_k3_v1", "astrodeutsch_k4_v1",
  "astrodeutsch_k5_v1", "astrodeutsch_k6_v1", "astrodeutsch_k7_v1",
  // Expedition games
  "kodex_expedition_v2", "reflexrush_expedition_v1", "numberrush_expedition_v1",
  "wordhunt_expedition_v1", "minisudoku_expedition_v1", "sequencerush_expedition_v1",
  "numberpath_expedition_v1", "ws_expedition_v1", "lightout_expedition_v1",
  "nonogram_expedition_v1", "numbermerge_expedition_v1", "mazerush_expedition_v1",
  // Special
  "citydrive_save", "plizio_life_v1", "plizio_world_progress",
  // Room
  "plizio_rooms_owned", "plizio_rooms_furniture", "plizio_rooms_level", "plizio_furniture_owned",
  // Other
  "plizio_powerups", "plizio_milliomos_best",
] as const;

function collectExtraData(): Record<string, unknown> {
  const extra: Record<string, unknown> = {};

  // Avatar gender
  extra.avatar_gender = localStorage.getItem("plizio_avatar_gender") || null;

  // Faces
  extra.owned_faces = safeJsonParse(localStorage.getItem("plizio_owned_faces"), []);
  extra.active_face = localStorage.getItem("plizio_active_face") || null;

  // Hats & trails
  extra.owned_hats = safeJsonParse(localStorage.getItem("plizio_owned_hats"), []);
  extra.active_hat = localStorage.getItem("plizio_active_hat") || null;
  extra.owned_trails = safeJsonParse(localStorage.getItem("plizio_owned_trails"), []);
  extra.active_trail = localStorage.getItem("plizio_active_trail") || null;

  // Clothing (6 slots)
  for (const slot of CLOTHING_SLOTS) {
    extra[`owned_${slot}`] = safeJsonParse(localStorage.getItem(`plizio_owned_${slot}`), []);
    extra[`active_${slot}`] = localStorage.getItem(`plizio_active_${slot}`) || null;
  }

  // City Drive cars
  extra.citydrive_owned_cars = safeJsonParse(localStorage.getItem("citydrive_owned_cars"), []);
  extra.citydrive_active_car = localStorage.getItem("citydrive_active_car") || null;

  // Daily login reward state — sync to prevent multi-device double-claim
  extra.daily_login = safeJsonParse(localStorage.getItem("plizio_daily_login"), null);

  // Game progress — store as JSON strings (they're already JSON in localStorage)
  for (const key of GAME_PROGRESS_KEYS) {
    const val = localStorage.getItem(key);
    if (val !== null) {
      extra[key] = safeJsonParse(val, val);
    }
  }

  return extra;
}

function restoreExtraData(extra: Record<string, unknown>): void {
  if (!extra) return;

  // Avatar gender — always trust server
  if (extra.avatar_gender) {
    localStorage.setItem("plizio_avatar_gender", extra.avatar_gender as string);
  }

  // Faces: merge owned (union), restore active from server (trust server on fresh device)
  mergeOwnedArray("plizio_owned_faces", extra.owned_faces as string[] | undefined);
  restoreActive("plizio_active_face", extra.active_face as string | undefined);

  // Hats & trails
  mergeOwnedArray("plizio_owned_hats", extra.owned_hats as string[] | undefined);
  restoreActive("plizio_active_hat", extra.active_hat as string | undefined);
  mergeOwnedArray("plizio_owned_trails", extra.owned_trails as string[] | undefined);
  restoreActive("plizio_active_trail", extra.active_trail as string | undefined);

  // Clothing (6 slots)
  for (const slot of CLOTHING_SLOTS) {
    mergeOwnedArray(`plizio_owned_${slot}`, extra[`owned_${slot}`] as string[] | undefined);
    restoreActive(`plizio_active_${slot}`, extra[`active_${slot}`] as string | undefined);
  }

  // City Drive cars
  mergeOwnedArray("citydrive_owned_cars", extra.citydrive_owned_cars as string[] | undefined);
  restoreActive("citydrive_active_car", extra.citydrive_active_car as string | undefined);

  // Daily login reward — use whichever device has the more recent lastDate
  if (extra.daily_login && typeof extra.daily_login === "object") {
    const serverState = extra.daily_login as { lastDate: string; streakCount: number };
    const localRaw = localStorage.getItem("plizio_daily_login");
    const localState = localRaw ? JSON.parse(localRaw) as { lastDate: string; streakCount: number } : null;
    if (!localState || serverState.lastDate >= localState.lastDate) {
      localStorage.setItem("plizio_daily_login", JSON.stringify(serverState));
    }
  }

  // Room data: merge owned arrays
  mergeOwnedArray("plizio_rooms_owned", extra.plizio_rooms_owned as string[] | undefined);
  mergeOwnedArray("plizio_furniture_owned", extra.plizio_furniture_owned as string[] | undefined);

  // Room furniture placement + level: take server if local is empty
  restoreJsonIfEmpty("plizio_rooms_furniture", extra.plizio_rooms_furniture);
  restoreJsonIfEmpty("plizio_rooms_level", extra.plizio_rooms_level);

  // Game progress: restore only if local doesn't have it (don't overwrite active progress)
  for (const key of GAME_PROGRESS_KEYS) {
    if (key in extra && extra[key] !== undefined) {
      const localVal = localStorage.getItem(key);
      if (!localVal) {
        // No local progress — restore from server
        const serverVal = extra[key];
        localStorage.setItem(key, typeof serverVal === "string" ? serverVal : JSON.stringify(serverVal));
      } else {
        // Both exist — merge: take higher completedMissions/completedIslands/completedLevels count
        mergeGameProgress(key, localVal, extra[key]);
      }
    }
  }

  // Other simple values
  if (extra.plizio_powerups !== undefined && !localStorage.getItem("plizio_powerups")) {
    localStorage.setItem("plizio_powerups", JSON.stringify(extra.plizio_powerups));
  }
  if (extra.plizio_milliomos_best !== undefined) {
    const localBest = parseInt(localStorage.getItem("plizio_milliomos_best") || "0");
    const serverBest = typeof extra.plizio_milliomos_best === "number" ? extra.plizio_milliomos_best : 0;
    if (serverBest > localBest) {
      localStorage.setItem("plizio_milliomos_best", serverBest.toString());
    }
  }
}

// ─── Helpers ───

function safeJsonParse(val: string | null, fallback: unknown): unknown {
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

function mergeOwnedArray(key: string, remoteArr: string[] | undefined): void {
  if (!remoteArr || !Array.isArray(remoteArr)) return;
  const local: string[] = safeJsonParse(localStorage.getItem(key), []) as string[];
  const merged = [...new Set([...local, ...remoteArr])];
  localStorage.setItem(key, JSON.stringify(merged));
}

// Restore active selection — always trust server value if present
// (The upload runs AFTER download, so local changes will be pushed back)
function restoreActive(key: string, remoteVal: string | undefined): void {
  if (remoteVal) {
    localStorage.setItem(key, remoteVal);
  }
}

function restoreJsonIfEmpty(key: string, remoteVal: unknown): void {
  if (remoteVal !== undefined && !localStorage.getItem(key)) {
    localStorage.setItem(key, typeof remoteVal === "string" ? remoteVal : JSON.stringify(remoteVal));
  }
}

function mergeGameProgress(key: string, localRaw: string, serverVal: unknown): void {
  try {
    const local = JSON.parse(localRaw);
    const server = typeof serverVal === "string" ? JSON.parse(serverVal) : serverVal;
    if (!local || !server || typeof local !== "object" || typeof server !== "object") return;

    // Merge array fields (union): completedMissions, completedIslands, completedLevels, completedTests, earnedBadges, collectedLetters
    const arrayFields = ["completedMissions", "completedIslands", "completedLevels", "completedTests", "earnedBadges", "collectedLetters"];
    let changed = false;
    for (const field of arrayFields) {
      if (Array.isArray(local[field]) && Array.isArray(server[field])) {
        const merged = [...new Set([...local[field], ...server[field]])];
        if (merged.length > local[field].length) {
          local[field] = merged;
          changed = true;
        }
      }
    }

    // Merge missionStars: take max per key
    if (local.missionStars && server.missionStars) {
      for (const [k, v] of Object.entries(server.missionStars)) {
        if (!local.missionStars[k] || (v as number) > local.missionStars[k]) {
          local.missionStars[k] = v;
          changed = true;
        }
      }
    }

    // Take higher currentLevel
    if (typeof server.currentLevel === "number" && typeof local.currentLevel === "number") {
      if (server.currentLevel > local.currentLevel) {
        local.currentLevel = server.currentLevel;
        changed = true;
      }
    }

    if (changed) {
      localStorage.setItem(key, JSON.stringify(local));
    }
  } catch {
    // Parse error — leave local as-is
  }
}

// ─── Upload ───

// Upload localStorage data to Supabase (after registration)
export async function uploadToSupabase(userId: string): Promise<void> {
  const stats = getStats();
  const streakData = localStorage.getItem("plizio_streak");
  const streak = streakData ? JSON.parse(streakData) : { count: 0, lastDate: null };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userData: Record<string, any> = {
    user_id: userId,
    special_cards: getSpecialCardCount(),
    total_games: stats.totalGames,
    perfect_scores: stats.perfectScores,
    highest_streak: stats.highestStreak,
    current_streak: streak.count,
    last_play_date: streak.lastDate || null,
    owned_skins: getOwnedSkins(),
    active_skin: getActiveSkin(),
    sky_highest_level: stats.skyHighestLevel,
    milestones_claimed: getClaimedMilestones(),
    referred_by: localStorage.getItem("plizio_referred") === "true" ? "ref" : null,
    share_count_today: parseInt(localStorage.getItem("plizio_share_today_count") || "0"),
    share_date: localStorage.getItem("plizio_share_today_date") || null,
  };

  // Try including extra_data in the main upsert first
  try {
    const extra = collectExtraData();
    userData.extra_data = extra;
  } catch (e) {
    console.error("collectExtraData failed:", e);
  }

  const { error } = await supabase
    .from("user_data")
    .upsert(userData, { onConflict: "user_id" });

  // If main upsert fails WITH extra_data, retry WITHOUT it (column might not exist)
  if (error) {
    console.error("Upsert with extra_data failed, retrying without:", error.message);
    delete userData.extra_data;
    const { error: retryError } = await supabase
      .from("user_data")
      .upsert(userData, { onConflict: "user_id" });
    if (retryError) throw retryError;
  }

  // Upload cards – upsert current, then delete any server cards no longer local
  const cards = getCards();
  const localIds = new Set(cards.map((c: GameCard) => c.id));

  if (cards.length > 0) {
    // Sanitize card data: ensure score/total are valid integers, date is valid string
    const cardRows = cards
      .filter((c: GameCard) => {
        if (!c.id || typeof c.id !== "string") return false;
        if (!c.game || typeof c.game !== "string") return false;
        if (typeof c.score !== "number" || !isFinite(c.score)) return false;
        if (typeof c.total !== "number" || !isFinite(c.total)) return false;
        return true;
      })
      .map((c: GameCard) => ({
        id: c.id,
        user_id: userId,
        game: c.game,
        theme: c.theme || null,
        rarity: c.rarity,
        score: Math.round(c.score),
        total: Math.round(c.total),
        date: c.date || new Date().toISOString(),
      }));

    if (cardRows.length > 0) {
      const { error: cardError } = await supabase
        .from("cards")
        .upsert(cardRows, { onConflict: "id" });

      if (cardError) {
        console.error("Card sync error:", cardError);
        console.error("Card sync — first row sample:", JSON.stringify(cardRows[0]));
        // Don't throw — let the rest of the sync proceed
      }
    }
  }

  // Delete server cards that were redeemed (tracked in plizio_redeemed_ids)
  // Only run if we actually have local cards OR have a recorded redeemed list,
  // to avoid accidentally wiping the server when localStorage is empty.
  const redeemedIds: string[] = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("plizio_redeemed_ids") || "[]")
    : [];

  if (cards.length > 0 || redeemedIds.length > 0) {
    const { data: serverCards } = await supabase
      .from("cards")
      .select("id")
      .eq("user_id", userId);

    if (serverCards && serverCards.length > 0) {
      const toDelete = serverCards
        .map((c: { id: string }) => c.id)
        .filter((id: string) => !localIds.has(id));

      if (toDelete.length > 0) {
        const { error: delError } = await supabase.from("cards").delete().in("id", toDelete);
        if (delError) {
          console.error("Card delete error:", delError);
          throw delError;
        }
      }
    }
  }

  // Everything uploaded successfully — clear tracking flags
  if (typeof window !== "undefined") {
    localStorage.removeItem("plizio_redeemed_ids");
    localStorage.removeItem("plizio_stars_dirty");
  }
}

// ─── Download ───

// Download Supabase data to localStorage (after login on new device)
export async function downloadFromSupabase(userId: string): Promise<void> {
  const { data, error } = await supabase
    .from("user_data")
    .select("*")
    .eq("user_id", userId)
    .single();

  // PGRST116 = no rows found (first sync, no server data yet) — that's OK
  if (error && error.code !== "PGRST116") {
    console.error("Download sync error:", error);
    throw error;
  }
  if (!data) return; // no server data yet — first time user

  // Merge: take higher values
  const currentStats = getStats();
  const mergedStats: PlayerStats = {
    totalGames: Math.max(currentStats.totalGames, data.total_games || 0),
    perfectScores: Math.max(currentStats.perfectScores, data.perfect_scores || 0),
    highestStreak: Math.max(currentStats.highestStreak, data.highest_streak || 0),
    skyHighestLevel: Math.max(currentStats.skyHighestLevel, data.sky_highest_level || 0),
  };
  localStorage.setItem("plizio_stats", JSON.stringify(mergedStats));

  // Current streak: restore if server has higher
  const currentStreakData = localStorage.getItem("plizio_streak");
  const localStreak = currentStreakData ? JSON.parse(currentStreakData) : { count: 0, lastDate: null };
  if ((data.current_streak || 0) > (localStreak.count || 0)) {
    localStorage.setItem("plizio_streak", JSON.stringify({
      count: data.current_streak,
      lastDate: data.last_play_date,
    }));
  }

  // Special cards: if locally modified (dirty), keep local; otherwise trust server directly.
  // Math.max was wrong here: if device A spent stars and device B had the old (higher) value
  // locally, Math.max would permanently restore the spent stars on every sync.
  const starsDirty = localStorage.getItem("plizio_stars_dirty") === "1";
  if (!starsDirty) {
    localStorage.setItem("plizio_special_cards", (data.special_cards || 0).toString());
  }

  // Skins: merge (union)
  const currentSkins = getOwnedSkins();
  const remoteSkins: string[] = data.owned_skins || [];
  const mergedSkins = [...new Set([...currentSkins, ...remoteSkins])];
  localStorage.setItem("plizio_owned_skins", JSON.stringify(mergedSkins));

  // Active skin: remote csak akkor alkalmazandó, ha local még nincs beállítva
  // (Ha user aktivált skint localisan, azt ne írja felül a régi remote érték)
  if (data.active_skin && localStorage.getItem("plizio_active_skin") === null) {
    localStorage.setItem("plizio_active_skin", data.active_skin);
  }

  // Milestones: merge (union)
  const currentMilestones = getClaimedMilestones();
  const remoteMilestones: string[] = data.milestones_claimed || [];
  const mergedMilestones = [...new Set([...currentMilestones, ...remoteMilestones])];
  localStorage.setItem("plizio_milestones_claimed", JSON.stringify(mergedMilestones));

  // Sky highest level
  const skyHighest = Math.max(
    parseInt(localStorage.getItem("plizio_skyclimb_highest") || "1"),
    data.sky_highest_level || 1
  );
  localStorage.setItem("plizio_skyclimb_highest", skyHighest.toString());

  // ─── Extra data (avatar, clothing, room, game progress) ───
  try {
    const extra = data.extra_data;
    if (extra && typeof extra === "object" && Object.keys(extra).length > 0) {
      console.log("[sync] Restoring extra_data, keys:", Object.keys(extra).length);
      restoreExtraData(extra as Record<string, unknown>);
    } else {
      console.log("[sync] No extra_data on server (empty or missing)");
    }
  } catch (e) {
    console.error("[sync] restoreExtraData failed:", e);
  }

  // Download cards
  const { data: cards } = await supabase
    .from("cards")
    .select("*")
    .eq("user_id", userId);

  if (cards && cards.length > 0) {
    const currentCards = getCards();
    const currentIds = new Set(currentCards.map((c: GameCard) => c.id));
    const redeemedIds = new Set<string>(JSON.parse(localStorage.getItem("plizio_redeemed_ids") || "[]"));
    const newCards = cards
      .filter((c) => !currentIds.has(c.id) && !redeemedIds.has(c.id))
      .map((c) => ({
        id: c.id,
        game: c.game,
        theme: c.theme,
        rarity: c.rarity,
        score: c.score,
        total: c.total,
        date: c.date,
      }));
    const merged = [...currentCards, ...newCards];
    localStorage.setItem("plizio_cards", JSON.stringify(merged));
  }
}

// Bidirectional sync: download first (merge higher stats from server),
// then upload (push merged state + delete redeemed cards from server).
// Redeemed card IDs are tracked in plizio_redeemed_ids so download
// never restores them even when they still exist on the server.
// A module-level lock ensures only one sync runs at a time – concurrent
// calls (e.g. checkAuth + onAuthChange both firing on page mount) would
// otherwise race and restore already-redeemed cards from the server.
// Errors propagate to the caller so the UI can show the error state.
export async function syncToSupabase(userId: string): Promise<void> {
  if (syncPromise) return syncPromise;
  syncPromise = (async () => {
    try {
      console.log("[sync] Starting bidirectional sync for", userId);
      await downloadFromSupabase(userId);
      console.log("[sync] Download complete, starting upload");
      await uploadToSupabase(userId);
      console.log("[sync] Upload complete");
      // Sync username to usernames table
      const { syncUsernameToSupabase } = await import("./username");
      await syncUsernameToSupabase(userId);
    } catch (err) {
      console.error("Sync failed:", err);
      throw err;
    } finally {
      syncPromise = null;
    }
  })();
  return syncPromise;
}
