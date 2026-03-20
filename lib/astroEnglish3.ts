// lib/astroEnglish3.ts — AstroEnglish K3 island definitions & progress
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

export const K3_SAVE_KEY = "astroenglish_k3_v1";

export const K3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "pos_g3/nouns_plural_g3", "pos_g3/abstract_nouns_g3",
    "pos_g3/verb_tenses_g3", "pos_g3/adj_comparative_g3",
  ],
  test2: [
    "pos_g3/adverbs_g3", "pos_g3/conjunctions_g3",
    "sentences_g3/subject_predicate_g3", "sentences_g3/simple_compound_g3",
  ],
  test3: [
    "sentences_g3/direct_quotations_g3", "sentences_g3/fragments_runons_g3",
    "spelling_g3/prefixes_g3", "spelling_g3/suffixes_g3",
    "vocab_g3/literal_nonliteral_g3", "vocab_g3/context_clues_g3",
  ],
};

export const K3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Plural Peak", hu: "Többes szám csúcs", de: "Plural-Gipfel", ro: "Vârful pluralului" },
    icon: "📚", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["pos_g3/nouns_plural_g3", "pos_g3/abstract_nouns_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort" as any,  icon: "🪐", label: { en: "Noun Sort",      hu: "Főnév rendezés",   de: "Substantiv-Sortierung", ro: "Sortare substantive" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Tense Tower", hu: "Igeidő-torony", de: "Tempus-Turm", ro: "Turnul timpurilor" },
    icon: "⏰", color: "#EF4444", sortRange: [1, 20],
    topicKeys: ["pos_g3/verb_tenses_g3", "pos_g3/adj_comparative_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,  icon: "🪐", label: { en: "Verb Tense Fill", hu: "Igeidő kitöltés",   de: "Tempus-Füllung",  ro: "Umplere timpuri" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "⭐", label: { en: "Star Match",    hu: "Csillag párosítás",       de: "Stern-Match",  ro: "Potrivire stele"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adverb Archipelago", hu: "Határozószó-szigetcsoport", de: "Adverb-Archipel", ro: "Arhipelagul adverbelor" },
    icon: "🌊", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["pos_g3/adverbs_g3", "pos_g3/conjunctions_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush" as any,  icon: "🪐", label: { en: "Adverb Rush",    hu: "Határozószó roham", de: "Adverb-Ansturm",  ro: "Asalt adverbe" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",        de: "Schwarzes Loch",      ro: "Gaură neagră"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Subject Star", hu: "Alany-csillag", de: "Subjekt-Stern", ro: "Steaua subiectului" },
    icon: "🔍", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["sentences_g3/subject_predicate_g3", "sentences_g3/simple_compound_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder" as any,  icon: "🪐", label: { en: "Build Sent.",   hu: "Mondat építés",   de: "Satz-Bau",        ro: "Construire propoziții" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round",  icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",       de: "Blitzrunde",  ro: "Rundă rapidá"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Quote Quasar", hu: "Idézet-kvazár", de: "Zitat-Quasar", ro: "Quasarul citatelor" },
    icon: "💬", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["sentences_g3/direct_quotations_g3", "sentences_g3/fragments_runons_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match" as any,  icon: "🪐", label: { en: "Match Grammar",  hu: "Nyelvtan párosítás", de: "Grammatik-Match", ro: "Potrivire gramatică" } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Gravity Sort",     hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung",     ro: "Sortare gravitațională"   } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Star Match",    hu: "Csillag párosítás",        de: "Stern-Match",      ro: "Potrivire stele"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Prefix Pulsar", hu: "Előtag-pulzár", de: "Präfix-Pulsar", ro: "Pulsarul prefixelor" },
    icon: "🔠", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["spelling_g3/prefixes_g3", "spelling_g3/suffixes_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spell-race" as any,  icon: "🪐", label: { en: "Affix Spell",    hu: "Előtag helyesírás", de: "Affix-Schreib",   ro: "Literare afixe" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Word Family Falls", hu: "Szócsalád-vízesés", de: "Wortfamilien-Wasserfall", ro: "Cascada familiilor de cuvinte" },
    icon: "🌿", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["spelling_g3/word_families_g3", "spelling_g3/homophones_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,  icon: "🪐", label: { en: "Homophones Fill", hu: "Homofonak kitöltés", de: "Homophone-Füllung", ro: "Umplere omonime" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Vocabulary Valley", hu: "Szókincs-völgy", de: "Wortschatz-Tal", ro: "Valea vocabularului" },
    icon: "📖", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["vocab_g3/literal_nonliteral_g3", "vocab_g3/word_relationships_g3", "vocab_g3/context_clues_g3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match" as any,  icon: "🪐", label: { en: "Meaning Match",  hu: "Jelentés párosítás", de: "Bedeutungs-Match", ro: "Potrivire sensuri" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",   hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "⭐", label: { en: "Star Match",    hu: "Csillag párosítás",       de: "Stern-Match",  ro: "Potrivire stele"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "pos_g3/nouns_plural_g3", "pos_g3/verb_tenses_g3", "pos_g3/adj_comparative_g3",
      "sentences_g3/subject_predicate_g3", "spelling_g3/prefixes_g3",
      "vocab_g3/literal_nonliteral_g3",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Gravity Sort",     hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung",     ro: "Sortare gravitațională"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🪐", label: { en: "Orbit Quiz",    hu: "Pálya kvíz",        de: "Umlaufbahn-Quiz",      ro: "Quiz orbital"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK3Progress(): EnglishProgress { return loadEnglishProgress(K3_SAVE_KEY, K3_ISLANDS); }
export function saveK3Progress(p: EnglishProgress): void { saveEnglishProgress(K3_SAVE_KEY, p); }
export function isMissionDoneK3(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK3(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK3(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K3_ISLANDS, islandId); }
export function isCheckpointUnlockedK3(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K3_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK3(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK3(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K3_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK3(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K3_ISLANDS, islandId); }
export function completeTestK3(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK3(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 3, count); }
export function generateCheckpointQuestionsK3(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K3_CHECKPOINT_TOPICS, 3, count); }
