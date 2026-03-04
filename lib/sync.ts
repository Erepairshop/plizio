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
}

// Upload localStorage data to Supabase (after registration)
export async function uploadToSupabase(userId: string): Promise<void> {
  const stats = getStats();
  const streakData = localStorage.getItem("plizio_streak");
  const streak = streakData ? JSON.parse(streakData) : { count: 0, lastDate: null };

  const userData: UserData = {
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

  const { error } = await supabase
    .from("user_data")
    .upsert(userData, { onConflict: "user_id" });

  if (error) throw error;

  // Upload cards – upsert current, then delete any server cards no longer local
  const cards = getCards();
  const localIds = new Set(cards.map((c: GameCard) => c.id));

  if (cards.length > 0) {
    const cardRows = cards.map((c: GameCard) => ({
      id: c.id,
      user_id: userId,
      game: c.game,
      theme: c.theme || null,
      rarity: c.rarity,
      score: c.score,
      total: c.total,
      date: c.date,
    }));

    const { error: cardError } = await supabase
      .from("cards")
      .upsert(cardRows, { onConflict: "id" });

    if (cardError) console.error("Card sync error:", cardError);
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
        await supabase.from("cards").delete().in("id", toDelete);
      }
    }
  }

  // Clear redeemed IDs tracker – server is now in sync
  if (typeof window !== "undefined") {
    localStorage.removeItem("plizio_redeemed_ids");
  }
}

// Download Supabase data to localStorage (after login on new device)
export async function downloadFromSupabase(userId: string): Promise<void> {
  const { data, error } = await supabase
    .from("user_data")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error || !data) return;

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

  // Special cards: take higher
  const currentSpecial = getSpecialCardCount();
  const mergedSpecial = Math.max(currentSpecial, data.special_cards || 0);
  localStorage.setItem("plizio_special_cards", mergedSpecial.toString());

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
      await downloadFromSupabase(userId);
      await uploadToSupabase(userId);
    } finally {
      syncPromise = null;
    }
  })();
  return syncPromise;
}
