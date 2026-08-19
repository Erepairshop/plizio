export type HistoryLevel = 1 | 2 | 3 | 4 | 5;

export type HistoryGameId =
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "chronik-scanner"
  | "epochen-sortierer"
  | "ursache-wirkung"
  | "quellen-labor"
  | "zeitstrahl-analyse"
  | "entscheidungs-rat"
  | "geschichts-detektiv";

export const HISTORY_SKILL_GAME_IDS = [
  "chronik-scanner",
  "epochen-sortierer",
  "ursache-wirkung",
  "quellen-labor",
  "zeitstrahl-analyse",
  "entscheidungs-rat",
  "geschichts-detektiv",
] as const satisfies readonly HistoryGameId[];

export type HistorySkillGameId = (typeof HISTORY_SKILL_GAME_IDS)[number];

export const HISTORY_LEVEL_ROUNDS: Record<HistoryLevel, number> = { 1: 4, 2: 5, 3: 6, 4: 7, 5: 8 };

export function clampHistoryLevel(value: number): HistoryLevel {
  return Math.max(1, Math.min(5, Math.floor(value) || 1)) as HistoryLevel;
}

export function requiredCorrectForHistoryLevel(level: HistoryLevel): number {
  return HISTORY_LEVEL_ROUNDS[level];
}

export function isHistoryGameAvailableForGrade(gameId: string, grade: number): boolean {
  const normalizedGrade = Math.max(1, Math.min(8, Math.floor(grade) || 1));
  if (normalizedGrade < 5) return false;
  if (gameId === "meteor-catch") return normalizedGrade <= 6;
  if (gameId === "orbit-sort") return normalizedGrade <= 7;
  return true;
}

export function isHistorySkillGameId(value: string): value is HistorySkillGameId {
  return (HISTORY_SKILL_GAME_IDS as readonly string[]).includes(value);
}