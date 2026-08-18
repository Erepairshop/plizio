export type GeographyLevel = 1 | 2 | 3 | 4 | 5;

export type GeographyGameId =
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "karten-kompass"
  | "landschaft-detektiv"
  | "klima-labor"
  | "weltregionen-atlas"
  | "mensch-raum-netz"
  | "geo-daten-check"
  | "zukunfts-planer";

export const GEOGRAPHY_SKILL_GAME_IDS = [
  "karten-kompass",
  "landschaft-detektiv",
  "klima-labor",
  "weltregionen-atlas",
  "mensch-raum-netz",
  "geo-daten-check",
  "zukunfts-planer",
] as const satisfies readonly GeographyGameId[];

export type GeographySkillGameId = (typeof GEOGRAPHY_SKILL_GAME_IDS)[number];

export const GEOGRAPHY_LEVEL_ROUNDS: Record<GeographyLevel, number> = {
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 8,
};

export function clampGeographyLevel(value: number): GeographyLevel {
  return Math.max(1, Math.min(5, Math.floor(value) || 1)) as GeographyLevel;
}

export function requiredCorrectForGeographyLevel(level: GeographyLevel): number {
  return GEOGRAPHY_LEVEL_ROUNDS[level];
}

export function isGeographyGameAvailableForGrade(gameId: string, grade: number): boolean {
  const normalizedGrade = Math.max(1, Math.min(8, Math.floor(grade) || 1));
  if (normalizedGrade < 5) return false;

  // The catch-and-sort arcade surfaces are useful as an entry point, but their
  // visual language is deliberately not shown throughout the upper grades.
  if (gameId === "meteor-catch") return normalizedGrade <= 6;
  if (gameId === "orbit-sort") return normalizedGrade <= 7;
  return true;
}

export function geographyBandForGrade(grade: number): "explorer" | "mission" | "lab" {
  if (grade <= 5) return "explorer";
  if (grade <= 6) return "mission";
  return "lab";
}

export function isGeographySkillGameId(value: string): value is GeographySkillGameId {
  return (GEOGRAPHY_SKILL_GAME_IDS as readonly string[]).includes(value);
}
