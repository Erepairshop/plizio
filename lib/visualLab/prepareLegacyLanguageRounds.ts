import type { LanguageLevel } from "./languageCurriculum";
import type {
  ArtikelAsteroidsRound,
  SatzbauSniperRound,
  SilbenSlicerRound,
  TippSturmRound,
  VerbenVortexRound,
  WortWaechterRound,
} from "./languageTypes";

export type LegacyLanguageRound =
  | ArtikelAsteroidsRound
  | SatzbauSniperRound
  | SilbenSlicerRound
  | TippSturmRound
  | VerbenVortexRound
  | WortWaechterRound;

function itemId(base: string, index: number): string {
  return `${base}:item-${index + 1}`;
}

export function prepareLegacyLanguageRounds(gameId: string, rounds: LegacyLanguageRound[], level: LanguageLevel): LegacyLanguageRound[] {
  if (gameId === "tipp-sturm") {
    const speed = [1.2, 1.05, 0.9, 0.78, 0.68][level - 1];
    return (rounds as TippSturmRound[]).flatMap((round) => round.words.map((word, index) => ({
      ...round,
      id: itemId(round.id, index),
      words: [word],
      flashDuration: Math.max(650, Math.round(round.flashDuration * speed)),
    })));
  }
  if (gameId === "artikel-asteroids") {
    return (rounds as ArtikelAsteroidsRound[]).flatMap((round) => round.words.map((word, index) => ({
      ...round,
      id: itemId(round.id, index),
      words: [word],
    })));
  }
  if (gameId === "silben-slicer") {
    return (rounds as SilbenSlicerRound[]).flatMap((round) => round.words.map((word, index) => ({
      ...round,
      id: itemId(round.id, index),
      words: [word],
    })));
  }
  if (gameId === "wort-waechter") {
    return (rounds as WortWaechterRound[]).map((round) => ({
      ...round,
      wrongWords: round.wrongWords.slice(0, Math.max(2, Math.min(round.wrongWords.length, level + 1))),
    }));
  }
  if (gameId === "verben-vortex") {
    return (rounds as VerbenVortexRound[]).map((round) => ({
      ...round,
      wrongVerbs: round.wrongVerbs.slice(0, Math.max(2, Math.min(round.wrongVerbs.length, level + 1))),
    }));
  }
  return rounds;
}
