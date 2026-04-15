export type Language = "de" | "hu" | "ro" | "en";

export interface WortWaechterRound {
  id: string;
  title: string;
  instruction: string;
  targetWord: string;
  wrongWords: string[];
  theme: { bg: string; accent: string };
}

export interface ArtikelAsteroidsRound {
  id: string;
  title: string;
  instruction: string;
  words: { word: string; article: string }[];
  categories: string[]; // e.g. ["der", "die", "das"]
  theme: { bg: string; accent: string };
}

export interface SatzbauSniperRound {
  id: string;
  title: string;
  instruction: string;
  words: string[]; // words in scrambled order
  correctOrder: string[];
  theme: { bg: string; accent: string };
}

export interface SilbenSlicerRound {
  id: string;
  title: string;
  instruction: string;
  words: { word: string; syllables: string[] }[];
  theme: { bg: string; accent: string };
}

export interface VerbenVortexRound {
  id: string;
  title: string;
  instruction: string;
  pronoun: string;
  correctVerb: string;
  wrongVerbs: string[];
  theme: { bg: string; accent: string };
}

export interface TippSturmRound {
  id: string;
  title: string;
  instruction: string;
  words: string[];
  flashDuration: number; // ms to show the word before hiding
  theme: { bg: string; accent: string };
}

export interface LanguageGradePool {
  grade: number;
  wortWaechter: WortWaechterRound[];
  artikelAsteroids: ArtikelAsteroidsRound[];
  satzbauSniper: SatzbauSniperRound[];
  silbenSlicer: SilbenSlicerRound[];
  verbenVortex: VerbenVortexRound[];
  tippSturm: TippSturmRound[];
}

export type LanguagePools = Record<Language, Record<number, LanguageGradePool>>;
