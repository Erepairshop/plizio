// ─── MILESTONE SYSTEM ────────────────────────────────
// Tracks player progress and awards special cards at milestones.

import { addSpecialCards } from "./specialCards";

const STATS_KEY = "plizio_stats";
const CLAIMED_KEY = "plizio_milestones_claimed";

export interface PlayerStats {
  totalGames: number;
  perfectScores: number;
  highestStreak: number;
  skyHighestLevel: number;
}

export interface Milestone {
  id: string;
  icon: string;
  requirement: (stats: PlayerStats) => boolean;
  progress: (stats: PlayerStats) => { current: number; target: number };
  reward: number;
}

export const MILESTONES: Milestone[] = [
  {
    id: "first_game",
    icon: "🎮",
    requirement: (s) => s.totalGames >= 1,
    progress: (s) => ({ current: Math.min(s.totalGames, 1), target: 1 }),
    reward: 1,
  },
  {
    id: "player_10",
    icon: "🕹️",
    requirement: (s) => s.totalGames >= 10,
    progress: (s) => ({ current: Math.min(s.totalGames, 10), target: 10 }),
    reward: 1,
  },
  {
    id: "veteran_25",
    icon: "⚔️",
    requirement: (s) => s.totalGames >= 25,
    progress: (s) => ({ current: Math.min(s.totalGames, 25), target: 25 }),
    reward: 2,
  },
  {
    id: "master_50",
    icon: "🏅",
    requirement: (s) => s.totalGames >= 50,
    progress: (s) => ({ current: Math.min(s.totalGames, 50), target: 50 }),
    reward: 3,
  },
  {
    id: "legend_100",
    icon: "👑",
    requirement: (s) => s.totalGames >= 100,
    progress: (s) => ({ current: Math.min(s.totalGames, 100), target: 100 }),
    reward: 5,
  },
  {
    id: "marathon_250",
    icon: "🏆",
    requirement: (s) => s.totalGames >= 250,
    progress: (s) => ({ current: Math.min(s.totalGames, 250), target: 250 }),
    reward: 10,
  },
  {
    id: "streak_7",
    icon: "🔥",
    requirement: (s) => s.highestStreak >= 7,
    progress: (s) => ({ current: Math.min(s.highestStreak, 7), target: 7 }),
    reward: 2,
  },
  {
    id: "streak_14",
    icon: "🔥",
    requirement: (s) => s.highestStreak >= 14,
    progress: (s) => ({ current: Math.min(s.highestStreak, 14), target: 14 }),
    reward: 3,
  },
  {
    id: "streak_30",
    icon: "🔥",
    requirement: (s) => s.highestStreak >= 30,
    progress: (s) => ({ current: Math.min(s.highestStreak, 30), target: 30 }),
    reward: 5,
  },
  {
    id: "perfect_1",
    icon: "💯",
    requirement: (s) => s.perfectScores >= 1,
    progress: (s) => ({ current: Math.min(s.perfectScores, 1), target: 1 }),
    reward: 1,
  },
  {
    id: "perfect_5",
    icon: "💯",
    requirement: (s) => s.perfectScores >= 5,
    progress: (s) => ({ current: Math.min(s.perfectScores, 5), target: 5 }),
    reward: 3,
  },
  {
    id: "sky_5",
    icon: "🏔️",
    requirement: (s) => s.skyHighestLevel >= 5,
    progress: (s) => ({ current: Math.min(s.skyHighestLevel, 5), target: 5 }),
    reward: 1,
  },
  {
    id: "sky_10",
    icon: "🏔️",
    requirement: (s) => s.skyHighestLevel >= 10,
    progress: (s) => ({ current: Math.min(s.skyHighestLevel, 10), target: 10 }),
    reward: 3,
  },
  {
    id: "sky_15",
    icon: "🏔️",
    requirement: (s) => s.skyHighestLevel >= 15,
    progress: (s) => ({ current: Math.min(s.skyHighestLevel, 15), target: 15 }),
    reward: 5,
  },
];

export function getStats(): PlayerStats {
  if (typeof window === "undefined") {
    return { totalGames: 0, perfectScores: 0, highestStreak: 0, skyHighestLevel: 0 };
  }
  const data = localStorage.getItem(STATS_KEY);
  if (!data) return { totalGames: 0, perfectScores: 0, highestStreak: 0, skyHighestLevel: 0 };
  return JSON.parse(data);
}

export function updateStats(partial: Partial<PlayerStats>): PlayerStats {
  const current = getStats();
  const updated: PlayerStats = {
    totalGames: partial.totalGames !== undefined ? Math.max(current.totalGames, partial.totalGames) : current.totalGames,
    perfectScores: partial.perfectScores !== undefined ? Math.max(current.perfectScores, partial.perfectScores) : current.perfectScores,
    highestStreak: partial.highestStreak !== undefined ? Math.max(current.highestStreak, partial.highestStreak) : current.highestStreak,
    skyHighestLevel: partial.skyHighestLevel !== undefined ? Math.max(current.skyHighestLevel, partial.skyHighestLevel) : current.skyHighestLevel,
  };
  localStorage.setItem(STATS_KEY, JSON.stringify(updated));
  return updated;
}

export function incrementTotalGames(): PlayerStats {
  const current = getStats();
  current.totalGames += 1;
  localStorage.setItem(STATS_KEY, JSON.stringify(current));
  return current;
}

export function incrementPerfectScores(): PlayerStats {
  const current = getStats();
  current.perfectScores += 1;
  localStorage.setItem(STATS_KEY, JSON.stringify(current));
  return current;
}

export function getClaimedMilestones(): string[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CLAIMED_KEY);
  return data ? JSON.parse(data) : [];
}

export function claimMilestone(id: string): number {
  const claimed = getClaimedMilestones();
  if (claimed.includes(id)) return 0;
  const milestone = MILESTONES.find((m) => m.id === id);
  if (!milestone) return 0;
  const stats = getStats();
  if (!milestone.requirement(stats)) return 0;
  claimed.push(id);
  localStorage.setItem(CLAIMED_KEY, JSON.stringify(claimed));
  addSpecialCards(milestone.reward);
  return milestone.reward;
}

// Check for any unclaimed milestones after a game and return newly claimable ones
export function checkNewMilestones(): { id: string; reward: number; icon: string }[] {
  const stats = getStats();
  const claimed = getClaimedMilestones();
  const newOnes: { id: string; reward: number; icon: string }[] = [];
  for (const m of MILESTONES) {
    if (!claimed.includes(m.id) && m.requirement(stats)) {
      newOnes.push({ id: m.id, reward: m.reward, icon: m.icon });
    }
  }
  return newOnes;
}
