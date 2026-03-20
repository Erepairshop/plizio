// lib/astroEnglish5.ts — AstroEnglish K5 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress } from "./astroEnglish";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

export const K5_SAVE_KEY = "astroenglish_k5_v1";

export const K5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "conjunctions_g5", "correlative_conj_g5",
    "interjections_g5", "perfect_tenses_g5",
  ],
  test2: [
    "tense_shifts_g5", "complex_sentences_g5", "intro_clauses_g5", "combining_g5",
    "commas_g5", "titles_italics_g5", "apostrophes_g5",
  ],
  test3: [
    "spelling_strategies_g5", "greek_latin_g5", "prefixes_suffixes_g5",
    "figurative_language_g5", "connotation_denotation_g5", "academic_g5",
  ],
};

export const K5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Conjunction Cove", hu: "Kötőszó-öbölbői", de: "Konjunktions-Bucht", ro: "Golfurile conjuncțiilor" },
    icon: "🔗", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["conjunctions_g5", "correlative_conj_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Conjunction Quiz", hu: "Kötőszó kvíz",     de: "Konjunktions-Quiz", ro: "Quiz conjuncții"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidă"       } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Interjection Isle", hu: "Kiáltás-sziget", de: "Ausrufe-Insel", ro: "Insula exclamațiilor" },
    icon: "❗", color: "#FF2D78", sortRange: [1, 20],
    topicKeys: ["interjections_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Interjection Quiz", hu: "Felkiáltás kvíz",   de: "Interjektions-Quiz", ro: "Quiz interjecții"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",      hu: "Fekete lyuk",       de: "Schwarzes Loch",    ro: "Gaură neagră"       } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Tense Temple", hu: "Igeidő-templom", de: "Zeit-Tempel", ro: "Templul timpului" },
    icon: "⏰", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["perfect_tenses_g5", "tense_shifts_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Tense Quiz",       hu: "Időforma kvíz",     de: "Tempus-Quiz",       ro: "Quiz timpuri"       } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidă"       } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Sentence Summit", hu: "Mondat-csúcs", de: "Satz-Gipfel", ro: "Vârful propozițiilor" },
    icon: "🏔️", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["complex_sentences_g5", "intro_clauses_g5", "combining_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Sentence Quiz",    hu: "Mondat kvíz",       de: "Satz-Quiz",         ro: "Quiz propoziții"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",      hu: "Fekete lyuk",       de: "Schwarzes Loch",    ro: "Gaură neagră"       } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Punctuation Port", hu: "Írásjelek-kikötő", de: "Satzzeichen-Hafen", ro: "Portul punctuației" },
    icon: "✏️", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["commas_g5", "titles_italics_g5", "apostrophes_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Punctuation Quiz", hu: "Központozás kvíz",   de: "Interpunktions-Quiz", ro: "Quiz punctuație"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",         ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",         ro: "Rundă rapidă"       } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Spelling Shore", hu: "Helyesírás-part", de: "Schreib-Ufer", ro: "Țărmul ortografiei" },
    icon: "📝", color: "#E879F9", sortRange: [1, 20],
    topicKeys: ["spelling_strategies_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Spelling Quiz",    hu: "Helyesírás kvíz",   de: "Rechtschreib-Quiz", ro: "Quiz ortografie"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",      hu: "Fekete lyuk",       de: "Schwarzes Loch",    ro: "Gaură neagră"       } },
    ],
    svgX: 90, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Root Word Reef", hu: "Gyök-szó-zátony", de: "Wurzel-Riff", ro: "Aripa rădăcinii" },
    icon: "🌿", color: "#00D4FF", sortRange: [1, 20],
    topicKeys: ["greek_latin_g5", "prefixes_suffixes_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Word Parts Quiz",  hu: "Szórészek kvíz",    de: "Wortteile-Quiz",    ro: "Quiz cuvinte"       } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
    ],
    svgX: 220, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Figurative Falls", hu: "Átvitt-értelmi esés", de: "Bildhafte-Fälle", ro: "Căderea figurativă" },
    icon: "🎭", color: "#FF6B6B", sortRange: [1, 20],
    topicKeys: ["figurative_language_g5", "connotation_denotation_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Figurative Quiz",   hu: "Átvittértelmű kvíz", de: "Figur-Quiz",        ro: "Quiz figurat"       } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidă"       } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Academic Atoll", hu: "Akadémiai-atoll", de: "Akademisches-Atoll", ro: "Acolul academic" },
    icon: "🎓", color: "#FFD700", sortRange: [1, 20],
    topicKeys: ["academic_g5", "formal_informal_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Academic Quiz",    hu: "Tudományos kvíz",   de: "Akademisch-Quiz",   ro: "Quiz academic"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidă"       } },
    ],
    svgX: 200, svgY: -120,
  },
];

export function loadK5Progress(): EnglishProgress { return loadEnglishProgress(K5_SAVE_KEY, K5_ISLANDS); }
export function saveK5Progress(p: EnglishProgress): void { saveEnglishProgress(K5_SAVE_KEY, p); }
export function isMissionDoneK5(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK5(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK5(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K5_ISLANDS, islandId); }
export function isCheckpointUnlockedK5(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K5_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK5(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK5(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K5_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK5(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K5_ISLANDS, islandId); }
export function completeTestK5(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK5(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 5, count); }
export function generateCheckpointQuestionsK5(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K5_CHECKPOINT_TOPICS, 5, count); }
