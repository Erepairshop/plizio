export type LanguageLevel = 1 | 2 | 3 | 4 | 5;

export type LanguageGameId =
  | "tipp-sturm"
  | "wort-waechter"
  | "artikel-asteroids"
  | "satzbau-sniper"
  | "silben-slicer"
  | "verben-vortex"
  | "lese-detektiv"
  | "grammatik-scanner"
  | "text-retter"
  | "wort-netz"
  | "schreibwerkstatt"
  | "literatur-lupe";

export const LANGUAGE_LEVEL_ROUNDS: Record<LanguageLevel, number> = {
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 8,
};

export function clampLanguageLevel(value: number): LanguageLevel {
  return Math.max(1, Math.min(5, Math.floor(value) || 1)) as LanguageLevel;
}

export function requiredCorrectForLanguageLevel(level: LanguageLevel): number {
  return LANGUAGE_LEVEL_ROUNDS[level];
}

export function isLanguageGameAvailableForGrade(gameId: string, grade: number): boolean {
  const normalizedGrade = Math.max(1, Math.min(8, Math.floor(grade) || 1));
  if (gameId === "literatur-lupe") return normalizedGrade >= 5;
  if (["lese-detektiv", "grammatik-scanner", "text-retter", "wort-netz", "schreibwerkstatt"].includes(gameId)) {
    return normalizedGrade >= 2;
  }
  if (gameId === "silben-slicer") return normalizedGrade <= 4;
  if (gameId === "artikel-asteroids") return normalizedGrade <= 5;
  return true;
}

export function languageBandForGrade(grade: number): "junior" | "mission" | "lab" {
  if (grade <= 2) return "junior";
  if (grade <= 4) return "mission";
  return "lab";
}
