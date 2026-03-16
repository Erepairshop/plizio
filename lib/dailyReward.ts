// ─── DAILY LOGIN REWARD SYSTEM ───────────────────────
// Awards 1⭐ per day + streak bonuses at 7/14/30 days.
// Stars are NOT given immediately on login — they are awarded after the first
// game of the day (via awardPendingDailyStars(), triggered by plizio-game-played).
// Streak also feeds PlayerStats.highestStreak → unlocks streak milestones.

import { addSpecialCards } from "./specialCards";
import { updateStats } from "./milestones";

const KEY = "plizio_daily_login";
const PENDING_KEY = "plizio_daily_pending_stars";

export interface DailyLoginState {
  lastDate: string;   // "YYYY-MM-DD"
  streakCount: number;
}

export interface DailyRewardResult {
  alreadyClaimed: boolean;
  baseReward: number;        // always 1 on a new day
  streakBonus: number;       // 2/3/5 at 7/14/30 days
  streakCount: number;
  streakBroken: boolean;     // true if >1 day gap (reset to 1)
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}

export function getDailyLoginState(): DailyLoginState | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

/** Call on app load. Returns null if already claimed today. */
export function claimDailyReward(): DailyRewardResult | null {
  if (typeof window === "undefined") return null;

  const t = today();
  const state = getDailyLoginState();

  // Already claimed today
  if (state?.lastDate === t) {
    return { alreadyClaimed: true, baseReward: 0, streakBonus: 0, streakCount: state.streakCount, streakBroken: false };
  }

  // Calculate new streak
  let newStreak = 1;
  let streakBroken = false;
  if (state) {
    const diff = daysBetween(state.lastDate, t);
    if (diff === 1) {
      newStreak = state.streakCount + 1;
    } else {
      streakBroken = state.streakCount > 1;
    }
  }

  // Streak bonus
  let streakBonus = 0;
  if (newStreak === 7)  streakBonus = 2;
  if (newStreak === 14) streakBonus = 3;
  if (newStreak === 30) streakBonus = 5;

  // Save state
  localStorage.setItem(KEY, JSON.stringify({ lastDate: t, streakCount: newStreak }));

  // Save pending stars — awarded after first game of the day (NOT immediately)
  const total = 1 + streakBonus;
  localStorage.setItem(PENDING_KEY, String(total));

  // Update highestStreak in PlayerStats → triggers streak milestones
  updateStats({ highestStreak: newStreak });

  return { alreadyClaimed: false, baseReward: 1, streakBonus, streakCount: newStreak, streakBroken };
}

/** Call after a game is played. Awards pending daily stars if any. Returns stars awarded (0 if none). */
export function awardPendingDailyStars(): number {
  if (typeof window === "undefined") return 0;
  const raw = localStorage.getItem(PENDING_KEY);
  if (!raw) return 0;
  const stars = parseInt(raw, 10);
  if (stars <= 0) return 0;
  localStorage.removeItem(PENDING_KEY);
  addSpecialCards(stars);
  window.dispatchEvent(new Event("plizio-cards-changed"));
  return stars;
}
