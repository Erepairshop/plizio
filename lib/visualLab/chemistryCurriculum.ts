export type ChemistryLevel = 1 | 2 | 3 | 4 | 5;

export type ChemistryGameId =
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "stoff-scanner"
  | "element-sortierer"
  | "reaktions-puzzle"
  | "bindungs-labor"
  | "ph-analyse"
  | "sicherheits-check"
  | "chemie-detektiv";

export const CHEMISTRY_SKILL_GAME_IDS = [
  "stoff-scanner",
  "element-sortierer",
  "reaktions-puzzle",
  "bindungs-labor",
  "ph-analyse",
  "sicherheits-check",
  "chemie-detektiv",
] as const satisfies readonly ChemistryGameId[];

export type ChemistrySkillGameId = (typeof CHEMISTRY_SKILL_GAME_IDS)[number];

export const CHEMISTRY_LEVEL_ROUNDS: Record<ChemistryLevel, number> = {
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 8,
};

export function clampChemistryLevel(value: number): ChemistryLevel {
  return Math.max(1, Math.min(5, Math.floor(value) || 1)) as ChemistryLevel;
}

export function requiredCorrectForChemistryLevel(level: ChemistryLevel): number {
  return CHEMISTRY_LEVEL_ROUNDS[level];
}

export function isChemistryGameAvailableForGrade(gameId: string, grade: number): boolean {
  const normalizedGrade = Math.max(1, Math.min(8, Math.floor(grade) || 1));
  if (normalizedGrade < 5) return false;
  if (gameId === "meteor-catch") return normalizedGrade <= 6;
  if (gameId === "orbit-sort") return normalizedGrade <= 7;
  return true;
}

export function isChemistrySkillGameId(value: string): value is ChemistrySkillGameId {
  return (CHEMISTRY_SKILL_GAME_IDS as readonly string[]).includes(value);
}
