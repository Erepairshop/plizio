// lib/astroEnglish8.ts — AstroEnglish K8 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress } from "./astroEnglish";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

export const K8_SAVE_KEY = "astroenglish_k8_v1";

export const K8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "complex_grammar_g8/verbals_g8", "complex_grammar_g8/participial_modifiers_g8",
    "complex_grammar_g8/absolute_phrases_g8", "complex_grammar_g8/active_passive_g8",
  ],
  test2: [
    "complex_grammar_g8/subjunctive_g8", "complex_grammar_g8/voice_mood_shifts_g8",
    "writing_g8/argumentative_g8", "writing_g8/informational_g8",
  ],
  test3: [
    "literature_g8/point_of_view_g8", "literature_g8/genres_g8",
    "literature_g8/allusion_irony_g8", "literature_g8/theme_g8",
    "style_g8/formal_register_g8", "style_g8/domain_vocab_g8",
  ],
};

export const K8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Verbal Vortex", hu: "Igenevek örvénye", de: "Verbalnomen-Vortex", ro: "Vortexul verbalelor" },
    icon: "🌀", color: "#FF2D78", sortRange: [1, 20],
    topicKeys: ["complex_grammar_g8/verbals_g8", "complex_grammar_g8/participial_modifiers_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Verbal Quiz",    hu: "Igenév kvíz",      de: "Verbal-Quiz",     ro: "Quiz verbale"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Absolute Phrase Asteroid", hu: "Abszolút tagmondat aszteroida", de: "Absoluter-Phrase-Asteroid", ro: "Asteroidul frazelor absolute" },
    icon: "☄️", color: "#00D4FF", sortRange: [1, 20],
    topicKeys: ["complex_grammar_g8/absolute_phrases_g8", "complex_grammar_g8/active_passive_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Phrase Quiz",    hu: "Tagmondat kvíz",   de: "Phrase-Quiz",     ro: "Quiz fraze"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Subjunctive Sky", hu: "Kötőmódos égbolt", de: "Konjunktiv-Himmel", ro: "Cerul conjunctivului" },
    icon: "💭", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["complex_grammar_g8/subjunctive_g8", "complex_grammar_g8/voice_mood_shifts_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Mood Quiz",      hu: "Módja kvíz",       de: "Modus-Quiz",      ro: "Quiz mod"          } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Argumentative Arena", hu: "Érvelő aréna", de: "Argumentations-Arena", ro: "Arena argumentativă" },
    icon: "⚔️", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["writing_g8/argumentative_g8", "writing_g8/informational_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Writing Quiz",   hu: "Írás kvíz",        de: "Schreib-Quiz",    ro: "Quiz scriere"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Narrative Nebula", hu: "Elbeszélő köd", de: "Erzähl-Nebel", ro: "Nebuloasa narativă" },
    icon: "📖", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["writing_g8/narrative_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Narrative Quiz", hu: "Elbeszélő kvíz",  de: "Narrativ-Quiz",   ro: "Quiz narativ"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Point of View Portal", hu: "Nézőpont kapuja", de: "Perspektive-Portal", ro: "Portalul perspectivei" },
    icon: "👁️", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["literature_g8/point_of_view_g8", "literature_g8/genres_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "POV Quiz",       hu: "Nézőpont kvíz",    de: "Perspektive-Quiz", ro: "Quiz perspectivă" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Allusion & Irony Island", hu: "Allúzió és irónia sziget", de: "Anspielungs-Insel", ro: "Insula aluziei și ironiei" },
    icon: "🎭", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["literature_g8/allusion_irony_g8", "literature_g8/theme_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Allusion Quiz",  hu: "Allúzió kvíz",     de: "Anspielungs-Quiz", ro: "Quiz aluzie"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Register Realm", hu: "Stílusregiszter birodalom", de: "Register-Reich", ro: "Tărâmul registrelor" },
    icon: "🎓", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["style_g8/formal_register_g8", "style_g8/academic_vs_conv_g8", "style_g8/domain_vocab_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Register Quiz",  hu: "Regiszter kvíz",   de: "Register-Quiz",   ro: "Quiz registru"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Final", hu: "Nagy Döntő", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#E879F9", sortRange: [1, 20],
    topicKeys: [
      "complex_grammar_g8/verbals_g8", "complex_grammar_g8/active_passive_g8",
      "writing_g8/argumentative_g8", "literature_g8/point_of_view_g8",
      "literature_g8/theme_g8", "style_g8/formal_register_g8",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🪐", label: { en: "Orbit Quiz",     hu: "Bolygó kvíz",      de: "Planetenquiz",    ro: "Quiz planetar"     } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "💫", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK8Progress(): EnglishProgress { return loadEnglishProgress(K8_SAVE_KEY, K8_ISLANDS); }
export function saveK8Progress(p: EnglishProgress): void { saveEnglishProgress(K8_SAVE_KEY, p); }
export function isMissionDoneK8(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK8(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK8(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K8_ISLANDS, islandId); }
export function isCheckpointUnlockedK8(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K8_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK8(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK8(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K8_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK8(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K8_ISLANDS, islandId); }
export function completeTestK8(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK8(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 8, count); }
export function generateCheckpointQuestionsK8(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K8_CHECKPOINT_TOPICS, 8, count); }
