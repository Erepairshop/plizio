import type { BattleResult } from "./types";

/** XP earned from a battle */
export function getBattleXP(result: BattleResult, difficulty: number): number {
  const base = difficulty * 20;
  if (result.victory) return base * 1.5;
  return base * 0.5; // still learn from defeat!
}

/** Level progression: XP -> level */
export function getCombatLevel(totalXP: number): number {
  // level = 1 + floor(sqrt(totalXP / 50))
  // lv1: 0xp, lv2: 50xp, lv5: 800xp, lv10: 4050xp, lv20: 18050xp
  return 1 + Math.floor(Math.sqrt(totalXP / 50));
}

/** XP required for the next level */
export function getXPForNextLevel(currentLevel: number): number {
  return currentLevel * currentLevel * 50;
}
