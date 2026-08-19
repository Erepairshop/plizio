export type PhysicsLevel = 1 | 2 | 3 | 4 | 5;

export type PhysicsGameId =
  | "formula-blitz"
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "kraft-labor"
  | "schaltkreis-werkstatt"
  | "optik-laser"
  | "energie-manager"
  | "messdaten-analyse"
  | "experiment-check"
  | "formel-detektiv";

export const PHYSICS_SKILL_GAME_IDS = [
  "kraft-labor",
  "schaltkreis-werkstatt",
  "optik-laser",
  "energie-manager",
  "messdaten-analyse",
  "experiment-check",
  "formel-detektiv",
] as const satisfies readonly PhysicsGameId[];

export type PhysicsSkillGameId = (typeof PHYSICS_SKILL_GAME_IDS)[number];

export const PHYSICS_LEVEL_ROUNDS: Record<PhysicsLevel, number> = {
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 8,
};

export function clampPhysicsLevel(value: number): PhysicsLevel {
  return Math.max(1, Math.min(5, Math.floor(value) || 1)) as PhysicsLevel;
}

export function requiredCorrectForPhysicsLevel(level: PhysicsLevel): number {
  return PHYSICS_LEVEL_ROUNDS[level];
}

export function isPhysicsGameAvailableForGrade(gameId: string, grade: number): boolean {
  const normalizedGrade = Math.max(1, Math.min(8, Math.floor(grade) || 1));
  if (normalizedGrade < 5) return false;
  if (gameId === "meteor-catch") return normalizedGrade <= 6;
  if (gameId === "orbit-sort") return normalizedGrade <= 7;
  return true;
}

export function isPhysicsSkillGameId(value: string): value is PhysicsSkillGameId {
  return (PHYSICS_SKILL_GAME_IDS as readonly string[]).includes(value);
}
