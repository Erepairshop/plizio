export type BiologyLevel = 1 | 2 | 3 | 4 | 5;

export type BiologyGameId =
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "mikro-scanner"
  | "bio-sortierstation"
  | "prozess-puzzle"
  | "system-netz"
  | "lebensraum-detektiv"
  | "forschungs-check"
  | "gesundheits-mission";

export const BIOLOGY_SKILL_GAME_IDS = [
  "mikro-scanner",
  "bio-sortierstation",
  "prozess-puzzle",
  "system-netz",
  "lebensraum-detektiv",
  "forschungs-check",
  "gesundheits-mission",
] as const satisfies readonly BiologyGameId[];

export type BiologySkillGameId = (typeof BIOLOGY_SKILL_GAME_IDS)[number];

export const BIOLOGY_LEVEL_ROUNDS: Record<BiologyLevel, number> = {
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 8,
};

export function clampBiologyLevel(value: number): BiologyLevel {
  return Math.max(1, Math.min(5, Math.floor(value) || 1)) as BiologyLevel;
}

export function requiredCorrectForBiologyLevel(level: BiologyLevel): number {
  return BIOLOGY_LEVEL_ROUNDS[level];
}

export function isBiologyGameAvailableForGrade(gameId: string, grade: number): boolean {
  const normalizedGrade = Math.max(1, Math.min(8, Math.floor(grade) || 1));
  if (normalizedGrade < 5) return false;

  // The two most playful legacy surfaces are useful as an introduction, but
  // should not dominate the more technical upper-grade laboratory.
  if (gameId === "meteor-catch") return normalizedGrade <= 6;
  if (gameId === "orbit-sort") return normalizedGrade <= 7;
  return true;
}

export function isBiologySkillGameId(value: string): value is BiologySkillGameId {
  return (BIOLOGY_SKILL_GAME_IDS as readonly string[]).includes(value);
}
