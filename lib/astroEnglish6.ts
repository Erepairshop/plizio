// lib/astroEnglish6.ts — AstroEnglish K6 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress } from "./astroEnglish";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

export const K6_SAVE_KEY = "astroenglish_k6_v1";

export const K6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "grammar_g6/pronoun_cases_g6", "grammar_g6/intensive_pronouns_g6",
    "grammar_g6/pronoun_agreement_g6", "grammar_g6/pronoun_shifts_g6",
  ],
  test2: [
    "grammar_g6/sentence_patterns_g6", "vocab_g6/synonyms_homographs_g6",
    "vocab_g6/analogies_g6", "vocab_g6/connotation_g6",
  ],
  test3: [
    "structures_g6/clauses_g6", "structures_g6/complex_sentences_g6",
    "structures_g6/relative_clauses_g6", "punctuation_g6/commas_dashes_g6",
    "vocab_g6/academic_vocab_g6",
  ],
};

export const K6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Pronoun Portal", hu: "Névmás-kapu", de: "Pronomen-Portal", ro: "Portalul pronumelor" },
    icon: "👤", color: "#FF9500", sortRange: [1, 20],
    topicKeys: ["grammar_g6/pronoun_cases_g6", "grammar_g6/intensive_pronouns_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Pronoun Quiz",   hu: "Névmás kvíz",      de: "Pronomen-Quiz",   ro: "Quiz pronume"      } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Agreement Asteroid Belt", hu: "Egyeztetés aszteroidaöv", de: "Kongruenz-Asteroidengürtel", ro: "Centura de asteroizi a acordului" },
    icon: "🔄", color: "#EF4444", sortRange: [1, 20],
    topicKeys: ["grammar_g6/pronoun_agreement_g6", "grammar_g6/pronoun_shifts_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Agreement Quiz", hu: "Egyeztetés kvíz",  de: "Kongruenz-Quiz",  ro: "Quiz acord"        } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Sentence Pattern Station", hu: "Mondatminta állomás", de: "Satzmuster-Station", ro: "Stația tiparelor de propoziție" },
    icon: "📐", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["grammar_g6/sentence_patterns_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Pattern Quiz",   hu: "Minta kvíz",       de: "Muster-Quiz",     ro: "Quiz tipare"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Synonym Supernova", hu: "Szinonima-szupernóva", de: "Synonym-Supernova", ro: "Supernova sinonimelor" },
    icon: "🔀", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["vocab_g6/synonyms_homographs_g6", "vocab_g6/analogies_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Synonym Quiz",   hu: "Szinonima kvíz",   de: "Synonyme-Quiz",   ro: "Quiz sinonime"     } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Connotation Comet", hu: "Konnotáció-üstökös", de: "Konnotations-Komet", ro: "Cometa conotației" },
    icon: "☄️", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["vocab_g6/connotation_g6", "vocab_g6/academic_vocab_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Connotation Quiz", hu: "Konnotáció kvíz", de: "Konnotations-Quiz", ro: "Quiz conotație" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Clause Crater", hu: "Mellékmondat-kráter", de: "Klausel-Krater", ro: "Craterul clauzelor" },
    icon: "🌋", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["structures_g6/clauses_g6", "structures_g6/complex_sentences_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Clause Quiz",    hu: "Mellékmondat kvíz", de: "Klausel-Quiz",   ro: "Quiz clauze"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Relative Clause Ridge", hu: "Vonatkozói mellékmondat-hegygerinc", de: "Relativsatz-Kamm", ro: "Creasta propozițiilor relative" },
    icon: "🏔️", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["structures_g6/relative_clauses_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Relative Quiz",  hu: "Vonatkozói kvíz",  de: "Relativ-Quiz",    ro: "Quiz relative"     } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Punctuation Peak", hu: "Írásjel-csúcs", de: "Interpunktions-Gipfel", ro: "Vârful punctuației" },
    icon: "📌", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["punctuation_g6/commas_dashes_g6", "punctuation_g6/punct_effect_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Punctuation Quiz", hu: "Írásjel kvíz",   de: "Interpunktions-Quiz", ro: "Quiz punctuație" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "grammar_g6/pronoun_cases_g6", "grammar_g6/pronoun_agreement_g6",
      "vocab_g6/synonyms_homographs_g6", "structures_g6/complex_sentences_g6",
      "punctuation_g6/commas_dashes_g6", "vocab_g6/academic_vocab_g6",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK6Progress(): EnglishProgress { return loadEnglishProgress(K6_SAVE_KEY, K6_ISLANDS); }
export function saveK6Progress(p: EnglishProgress): void { saveEnglishProgress(K6_SAVE_KEY, p); }
export function isMissionDoneK6(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK6(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK6(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K6_ISLANDS, islandId); }
export function isCheckpointUnlockedK6(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K6_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK6(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK6(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K6_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK6(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K6_ISLANDS, islandId); }
export function completeTestK6(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK6(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 6, count); }
export function generateCheckpointQuestionsK6(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K6_CHECKPOINT_TOPICS, 6, count); }
