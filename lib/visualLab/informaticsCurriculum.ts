export type InformaticsLevel = 1 | 2 | 3 | 4 | 5;
export type InformaticsGameId =
  | "binary-bit-stream" | "code-commander" | "hardware-hero" | "packet-path" | "virus-vault"
  | "daten-scanner" | "system-sortierer" | "algorithmus-labor" | "netzwerk-router"
  | "cyber-schutz" | "debug-mission" | "code-detektiv";
export const INFORMATICS_SKILL_GAME_IDS = [
  "daten-scanner", "system-sortierer", "algorithmus-labor", "netzwerk-router",
  "cyber-schutz", "debug-mission", "code-detektiv",
] as const satisfies readonly InformaticsGameId[];
export type InformaticsSkillGameId = (typeof INFORMATICS_SKILL_GAME_IDS)[number];
export const INFORMATICS_LEVEL_ROUNDS: Record<InformaticsLevel, number> = { 1: 4, 2: 5, 3: 6, 4: 7, 5: 8 };
export function clampInformaticsLevel(value: number): InformaticsLevel { return Math.max(1, Math.min(5, Math.floor(value) || 1)) as InformaticsLevel; }
export function requiredCorrectForInformaticsLevel(level: InformaticsLevel): number { return INFORMATICS_LEVEL_ROUNDS[level]; }
export function isInformaticsGameAvailableForGrade(_gameId: string, grade: number): boolean { const normalized=Math.max(1,Math.min(8,Math.floor(grade)||1)); return normalized>=5; }
export function isInformaticsSkillGameId(value: string): value is InformaticsSkillGameId { return (INFORMATICS_SKILL_GAME_IDS as readonly string[]).includes(value); }