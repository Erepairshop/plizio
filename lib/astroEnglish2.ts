// lib/astroEnglish2.ts — AstroEnglish K2 island definitions & progress
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

export const K2_SAVE_KEY = "astroenglish_k2_v1";

export const K2_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K2_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "pos_g2/nouns_common_proper_g2", "pos_g2/nouns_plural_g2",
    "pos_g2/verbs_g2", "pos_g2/irregular_past_g2",
  ],
  test2: [
    "pos_g2/adj_adv_g2", "pos_g2/pronouns_g2",
    "sentences_g2/simple_compound_g2", "sentences_g2/expanding_g2",
  ],
  test3: [
    "spelling_g2/vowel_patterns_g2", "spelling_g2/vowel_teams_g2",
    "spelling_g2/prefixes_suffixes_g2", "vocab_g2/shades_of_meaning_g2",
    "vocab_g2/context_clues_g2",
  ],
};

export const K2_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Noun Nebula", hu: "Főnév-köd", de: "Substantiv-Nebel", ro: "Nebuloasa substantivelor" },
    icon: "🏷️", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["pos_g2/nouns_common_proper_g2", "pos_g2/nouns_plural_g2", "pos_g2/collective_nouns_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort" as any,    icon: "🪐", label: { en: "Noun Sort",     hu: "Főnév rendezés",   de: "Substantiv-Sortierung", ro: "Sortare substantive" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés",        de: "Schwerkraft-Sortierung",      ro: "Sortare gravitațională"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Verb Vortex", hu: "Ige-örvény", de: "Verb-Vortex", ro: "Vortexul verbelor" },
    icon: "⚡", color: "#EF4444", sortRange: [1, 20],
    topicKeys: ["pos_g2/verbs_g2", "pos_g2/irregular_past_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,     icon: "🪐", label: { en: "Verb Fill",     hu: "Ige kitöltés",     de: "Verb-Füllung",    ro: "Umplere verbe" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",  icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",       de: "Blitzrunde",  ro: "Rundă rapidă"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adjective Asteroid", hu: "Melléknév-aszteroida", de: "Adjektiv-Asteroid", ro: "Asteroidul adjectivelor" },
    icon: "🎨", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["pos_g2/adj_adv_g2", "pos_g2/pronouns_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush" as any, icon: "🪐", label: { en: "Adj. Rush",     hu: "Melléknév roham",  de: "Adjektiv-Ansturm", ro: "Asalt adjective" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",        de: "Schwarzes Loch",      ro: "Gaură neagră"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Sentence Station", hu: "Mondat-állomás", de: "Satz-Station", ro: "Stația propozițiilor" },
    icon: "💬", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["sentences_g2/simple_compound_g2", "sentences_g2/expanding_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder" as any, icon: "🪐", label: { en: "Build Sent.",   hu: "Mondat építés",   de: "Satz-Bau",        ro: "Construire propoziții" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",  icon: "🪨", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés",       de: "Schwerkraft-Sortierung",  ro: "Sortare gravitațională"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Vowel Valley", hu: "Magánhangzó-völgy", de: "Vokal-Tal", ro: "Valea vocalelor" },
    icon: "🌈", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["spelling_g2/vowel_patterns_g2", "spelling_g2/vowel_teams_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spell-race" as any,   icon: "🪐", label: { en: "Vowel Spell",   hu: "Magánhangzó helyesírás", de: "Vokal-Schreib", ro: "Literare vocale" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Prefix Planet", hu: "Előtag-bolygó", de: "Präfix-Planet", ro: "Planeta prefixelor" },
    icon: "🔡", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["spelling_g2/prefixes_suffixes_g2", "spelling_g2/irregular_spelling_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match" as any, icon: "🪐", label: { en: "Match Prefix",  hu: "Előtag párosítás", de: "Präfix-Match",      ro: "Potrivire prefixe" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Meaning Moon", hu: "Jelentés-hold", de: "Bedeutungs-Mond", ro: "Luna sensurilor" },
    icon: "🌙", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["vocab_g2/shades_of_meaning_g2", "vocab_g2/context_clues_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap" as any,     icon: "🪐", label: { en: "Vocab Fill",    hu: "Szókincs kitöltés", de: "Wortschatz-Füllung", ro: "Umplere vocabular" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Grammar Galaxy", hu: "Grammatika-galaxis", de: "Grammatik-Galaxie", ro: "Galaxia gramaticii" },
    icon: "🌌", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["pos_g2/nouns_common_proper_g2", "pos_g2/verbs_g2", "pos_g2/adj_adv_g2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Grammar Quiz",   hu: "Grammatika kvíz",  de: "Grammatik-Quiz",  ro: "Quiz gramatică"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🪐", label: { en: "Orbit Quiz",   hu: "Pálya kvíz", de: "Umlaufbahn-Quiz", ro: "Quiz orbital" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",  icon: "🪨", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés",       de: "Schwerkraft-Sortierung",  ro: "Sortare gravitațională"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "pos_g2/nouns_common_proper_g2", "pos_g2/verbs_g2", "pos_g2/adj_adv_g2",
      "sentences_g2/simple_compound_g2", "spelling_g2/vowel_patterns_g2",
      "vocab_g2/context_clues_g2",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Pálya kvíz", de: "Umlaufbahn-Quiz",     ro: "Quiz orbital"   } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Star Match",    hu: "Csillag párosítás",        de: "Stern-Match",      ro: "Potrivire stele"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK2Progress(): EnglishProgress { return loadEnglishProgress(K2_SAVE_KEY, K2_ISLANDS); }
export function saveK2Progress(p: EnglishProgress): void { saveEnglishProgress(K2_SAVE_KEY, p); }
export function isMissionDoneK2(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK2(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK2(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K2_ISLANDS, islandId); }
export function isCheckpointUnlockedK2(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K2_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK2(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK2(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K2_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK2(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K2_ISLANDS, islandId); }
export function completeTestK2(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK2(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 2, count); }
export function generateCheckpointQuestionsK2(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K2_CHECKPOINT_TOPICS, 2, count); }
