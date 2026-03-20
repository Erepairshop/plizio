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
    "pos_g5/conjunctions_g5", "pos_g5/interjections_g5",
    "pos_g5/perfect_tenses_g5", "pos_g5/tense_shifts_g5",
  ],
  test2: [
    "pos_g5/correlative_conj_g5", "sentences_g5/complex_sentences_g5",
    "sentences_g5/intro_clauses_g5", "sentences_g5/combining_g5",
  ],
  test3: [
    "spelling_g5/commas_g5", "spelling_g5/titles_italics_g5",
    "spelling_g5/apostrophes_g5", "vocab_g5/greek_latin_g5",
    "vocab_g5/figurative_language_g5",
  ],
};

export const K5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Conjunction Junction", hu: "Kötőszó-csomópont", de: "Konjunktions-Knotenpunkt", ro: "Joncțiunea conjuncțiilor" },
    icon: "🔗", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["pos_g5/conjunctions_g5", "pos_g5/interjections_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Conjunction Quiz", hu: "Kötőszó kvíz",    de: "Konjunktions-Quiz", ro: "Quiz conjuncții" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Perfect Tense Peak", hu: "Befejezett ige-csúcs", de: "Perfekt-Gipfel", ro: "Vârful timpului perfect" },
    icon: "⏳", color: "#EF4444", sortRange: [1, 20],
    topicKeys: ["pos_g5/perfect_tenses_g5", "pos_g5/tense_shifts_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Tense Quiz",     hu: "Igeidő kvíz",      de: "Tempus-Quiz",     ro: "Quiz timpuri"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Correlative Cove", hu: "Korrelatív öböl", de: "Korrelative Bucht", ro: "Golful corelativelor" },
    icon: "⚖️", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["pos_g5/correlative_conj_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Correlative Quiz", hu: "Korrelatív kvíz", de: "Korrelativer Quiz", ro: "Quiz corelative" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Complex Clause Cliff", hu: "Összetett mellékmondatos szikla", de: "Komplex-Klausel-Klippe", ro: "Faleza clauzelor complexe" },
    icon: "🔬", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["sentences_g5/complex_sentences_g5", "sentences_g5/intro_clauses_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Clause Quiz",    hu: "Mellékmondat kvíz", de: "Klausel-Quiz",   ro: "Quiz clauze"       } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Combining Cosmos", hu: "Mondategyesítő kozmosz", de: "Kombinations-Kosmos", ro: "Cosmosul combinărilor" },
    icon: "🧩", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["sentences_g5/combining_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Combining Quiz", hu: "Összevonás kvíz",  de: "Kombinations-Quiz", ro: "Quiz combinare"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Punctuation Pulsar", hu: "Írásjel-pulzár", de: "Interpunktions-Pulsar", ro: "Pulsarul punctuației" },
    icon: "📌", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["spelling_g5/commas_g5", "spelling_g5/titles_italics_g5", "spelling_g5/apostrophes_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Punctuation Quiz", hu: "Írásjel kvíz",   de: "Interpunktions-Quiz", ro: "Quiz punctuație" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Greek & Latin Galaxy", hu: "Görög-Latin galaxis", de: "Griechisch-Lateinische Galaxie", ro: "Galaxia greacă și latină" },
    icon: "🏛️", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["vocab_g5/greek_latin_g5", "vocab_g5/prefixes_suffixes_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Roots Quiz",     hu: "Gyök kvíz",        de: "Wurzel-Quiz",     ro: "Quiz rădăcini"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Figurative Language Forest", hu: "Képletes nyelv erdő", de: "Bildsprachen-Wald", ro: "Pădurea limbajului figurat" },
    icon: "🎭", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["vocab_g5/figurative_language_g5", "vocab_g5/connotation_denotation_g5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Figure Quiz",    hu: "Képletes kvíz",    de: "Bildsprache-Quiz", ro: "Quiz figuri"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "pos_g5/conjunctions_g5", "pos_g5/perfect_tenses_g5",
      "sentences_g5/complex_sentences_g5", "spelling_g5/commas_g5",
      "vocab_g5/greek_latin_g5", "vocab_g5/figurative_language_g5",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 190, svgY: -90,
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
