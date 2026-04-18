export type Language = "de" | "hu" | "ro" | "en";

export type LocalizedText = {
  de: string;
  en: string;
  hu: string;
  ro: string;
};

export interface WortWaechterRound {
  id: string;
  title: LocalizedText;
  instruction: LocalizedText;
  targetWord: string;
  wrongWords: string[];
  theme: { bg: string; accent: string };
}

export interface ArtikelAsteroidsRound {
  id: string;
  title: LocalizedText;
  instruction: LocalizedText;
  words: { word: string; article: string }[];
  categories: string[];
  theme: { bg: string; accent: string };
}

export interface SatzbauSniperRound {
  id: string;
  title: LocalizedText;
  instruction: LocalizedText;
  words: string[];
  correctOrder: string[];
  theme: { bg: string; accent: string };
}

export interface SilbenSlicerRound {
  id: string;
  title: LocalizedText;
  instruction: LocalizedText;
  words: { word: string; syllables: string[] }[];
  theme: { bg: string; accent: string };
}

export interface VerbenVortexRound {
  id: string;
  title: LocalizedText;
  instruction: LocalizedText;
  pronoun: string;
  correctVerb: string;
  wrongVerbs: string[];
  theme: { bg: string; accent: string };
}

export interface TippSturmRound {
  id: string;
  title: LocalizedText;
  instruction: LocalizedText;
  words: string[];
  flashDuration: number;
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
