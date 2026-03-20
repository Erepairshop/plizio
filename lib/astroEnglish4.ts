// lib/astroEnglish4.ts — AstroEnglish K4 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress } from "./astroEnglish";
import type { MissionDef, MissionCategory } from "./astromath";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

// Re-export types for page imports
export type { IslandDef, Lang, MathQuestion, EnglishProgress, MissionDef, MissionCategory };

export const K4_SAVE_KEY = "astroenglish_k4_v1";

export const K4_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K4_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "pos_g4/relative_pronouns_g4", "pos_g4/relative_adverbs_g4",
    "pos_g4/modal_aux_g4", "pos_g4/progressive_tenses_g4",
  ],
  test2: [
    "pos_g4/adjective_order_g4", "pos_g4/prep_phrases_g4",
    "sentences_g4/fragments_runons_g4", "sentences_g4/compound_sentences_g4",
  ],
  test3: [
    "sentences_g4/direct_speech_g4", "sentences_g4/confused_words_g4",
    "spelling_g4/capitalization_g4", "spelling_g4/commas_compound_g4",
    "vocab_g4/synonyms_antonyms_g4", "vocab_g4/similes_metaphors_g4",
  ],
};

export const K4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Pronoun Planet", hu: "Névmás-bolygó", de: "Pronomen-Planet", ro: "Planeta pronumelor" },
    icon: "🎯", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["pos_g4/relative_pronouns_g4", "pos_g4/relative_adverbs_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match" as any,  icon: "🪐", label: { en: "Pronoun Match",  hu: "Névmás párosítás", de: "Pronomen-Match",   ro: "Potrivire pronume" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Modal Moon", hu: "Módbeli ige-hold", de: "Modal-Mond", ro: "Luna modalelor" },
    icon: "🌙", color: "#EF4444", sortRange: [1, 20],
    topicKeys: ["pos_g4/modal_aux_g4", "pos_g4/progressive_tenses_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,  icon: "🪐", label: { en: "Modal Fill",    hu: "Módja kitöltés",   de: "Modal-Füllung",   ro: "Umplere modale" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adjective Orbit", hu: "Melléknév-pályán", de: "Adjektiv-Orbit", ro: "Orbita adjectivelor" },
    icon: "🎨", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["pos_g4/adjective_order_g4", "pos_g4/prep_phrases_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder" as any,  icon: "🪐", label: { en: "Build Sent.",   hu: "Mondat építés",   de: "Satz-Bau",        ro: "Construire propoziții" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🪐", label: { en: "Orbit Quiz",    hu: "Pálya kvíz",        de: "Umlaufbahn-Quiz",      ro: "Quiz orbital"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Sentence Supernova", hu: "Mondat-szupernóva", de: "Satz-Supernova", ro: "Supernova propozițiilor" },
    icon: "💥", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["sentences_g4/fragments_runons_g4", "sentences_g4/compound_sentences_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush" as any,  icon: "🪐", label: { en: "Sent. Rush",    hu: "Mondat roham",     de: "Satz-Ansturm",    ro: "Asalt propoziții" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",  icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",       de: "Blitzrunde",  ro: "Rundă rapidá"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Speech Spiral", hu: "Egyenes beszéd spirál", de: "Rede-Spirale", ro: "Spirala vorbirii directe" },
    icon: "🗣️", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["sentences_g4/direct_speech_g4", "sentences_g4/confused_words_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,  icon: "🪐", label: { en: "Punctuation Fill", hu: "Írásjel kitöltés",  de: "Interpunktion-Füllung", ro: "Umplere punctuație" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",        de: "Schwarzes Loch",      ro: "Gaură neagră"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Capital Crater", hu: "Nagybetű-kráter", de: "Großschreibungs-Krater", ro: "Craterul majusculelor" },
    icon: "🅰️", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["spelling_g4/capitalization_g4", "spelling_g4/commas_compound_g4", "spelling_g4/spelling_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spell-race" as any,  icon: "🪐", label: { en: "Commonly Confused", hu: "Összetéveszthető szavak", de: "Häufig verwechselt", ro: "Cuvinte confundate" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",    hu: "Pálya kvíz",       de: "Umlaufbahn-Quiz",  ro: "Quiz orbital"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Synonym Sky", hu: "Szinonima égbolt", de: "Synonym-Himmel", ro: "Cerul sinonimelor" },
    icon: "🔀", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["vocab_g4/synonyms_antonyms_g4", "vocab_g4/similes_metaphors_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort" as any,  icon: "🪐", label: { en: "Sort Synonyms",  hu: "Szinonimák rendezése", de: "Synonyme sortieren", ro: "Sortare sinonime" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Context Comet", hu: "Kontextus-üstökös", de: "Kontext-Komet", ro: "Cometa contextului" },
    icon: "☄️", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["vocab_g4/context_clues_g4", "vocab_g4/domain_vocab_g4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,  icon: "🪐", label: { en: "Context Fill",   hu: "Kontextus kitöltés", de: "Kontext-Füllung",   ro: "Umplere context" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "pos_g4/relative_pronouns_g4", "pos_g4/modal_aux_g4",
      "sentences_g4/compound_sentences_g4", "spelling_g4/capitalization_g4",
      "vocab_g4/synonyms_antonyms_g4", "vocab_g4/similes_metaphors_g4",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés",        de: "Schwerkraft-Sortierung",      ro: "Sortare gravitațională"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK4Progress(): EnglishProgress { return loadEnglishProgress(K4_SAVE_KEY, K4_ISLANDS); }
export function saveK4Progress(p: EnglishProgress): void { saveEnglishProgress(K4_SAVE_KEY, p); }
export function isMissionDoneK4(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK4(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK4(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K4_ISLANDS, islandId); }
export function isCheckpointUnlockedK4(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K4_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK4(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK4(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K4_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK4(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K4_ISLANDS, islandId); }
export function completeTestK4(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK4(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 4, count); }
export function generateCheckpointQuestionsK4(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K4_CHECKPOINT_TOPICS, 4, count); }
