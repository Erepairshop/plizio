// lib/astroRomana7.ts — AstroRomână C7 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C7_SAVE_KEY = "astroromana_c7_v1";

export const C7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "adjectiv_c7/adjectiv_clasificare", "numeral_c7/numeral_cardinal",
    "verb_c7/verb_indicativ", "fraza_subord_c7/subord_subiectiva",
  ],
  test2: [
    "verb_c7/verb_conjunctiv", "verb_c7/verb_diateze_c7",
    "fraza_subord_c7/subord_completiva_directa", "fraza_subord_c7/subord_loc",
  ],
  test3: [
    "text_c7/text_roman_nuvela", "text_c7/text_liric_c7",
    "vocabular_c7/vocabular_familie_lexicala", "fraza_subord_c7/subord_mod",
  ],
};

export const C7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Sintaxa propoziției", en: "Clause Syntax", hu: "Tagmondatszintaxis", de: "Satzsyntax" },
    icon: "🔗", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["adjectiv_c7/adjectiv_clasificare", "adjectiv_c7/adjectiv_grade", "adjectiv_c7/adjectiv_functii"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare adjectiv",   en: "Adjective Explore",  hu: "Melléknév felfedező",  de: "Adjektiv erkunden"   } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",         en: "Orbit Quiz",         hu: "Bolygó kvíz",          de: "Planeten-Quiz"       } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",        hu: "Gyors kör",            de: "Schnellrunde"        } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Sintaxa frazei", en: "Sentence-Level Syntax", hu: "Mondatszintaxis", de: "Satzkomplex-Syntax" },
    icon: "🔀", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["numeral_c7/numeral_cardinal", "numeral_c7/numeral_ordinal", "verb_c7/verb_indicativ"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare numeral",   en: "Numeral Explore",   hu: "Számnév felfedező",   de: "Numeral erkunden"   } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire numerale", en: "Numeral Match",     hu: "Számnév párosítás",   de: "Numeral paaren"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",        hu: "Fekete lyuk",         de: "Schwarzes Loch"     } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Figuri de stil avansate", en: "Advanced Figures of Speech", hu: "Haladó stíluseszközök", de: "Erweiterte Stilmittel" },
    icon: "🎭", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["verb_c7/verb_conjunctiv", "verb_c7/verb_conditional_imperativ", "verb_c7/verb_moduri_nepers_c7", "verb_c7/verb_diateze_c7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare verb",    en: "Verb Explore",     hu: "Ige felfedező",   de: "Verb erkunden"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",     en: "Orbit Quiz",       hu: "Bolygó kvíz",     de: "Planeten-Quiz"    } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",     en: "Speed Round",      hu: "Gyors kör",       de: "Schnellrunde"     } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Comentariul literar", en: "Literary Commentary", hu: "Irodalmi kommentár", de: "Literarischer Kommentar" },
    icon: "📝", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["fraza_subord_c7/subord_subiectiva", "fraza_subord_c7/subord_completiva_directa", "fraza_subord_c7/subord_completiva_indirecta"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare fraze subord.",  en: "Subordinate Explore", hu: "Alárendelés felfedező", de: "Nebensätze erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire propoziții",    en: "Clause Match",        hu: "Mondat párosítás",      de: "Satzpaare"           } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",            en: "Orbit Quiz",          hu: "Bolygó kvíz",           de: "Planeten-Quiz"       } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Morfologie avansată C7", en: "Advanced Morphology C7", hu: "Haladó morfológia C7", de: "Erweiterte Morphologie C7" },
    icon: "🔬", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["fraza_subord_c7/subord_loc", "fraza_subord_c7/subord_timp", "fraza_subord_c7/subord_mod"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare circumstanțiale", en: "Adverbial Explore",  hu: "Határozói alárendelés", de: "Adverbialsätze erkunden" } },
      { id: "m2", category: "build",     gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",             en: "Black Hole",         hu: "Fekete lyuk",           de: "Schwarzes Loch"          } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",             en: "Speed Round",        hu: "Gyors kör",             de: "Schnellrunde"            } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Ortografie C7", en: "Spelling C7", hu: "Helyesírás C7", de: "Rechtschreibung C7" },
    icon: "✏️", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["vocabular_c7/vocabular_familie_lexicala", "vocabular_c7/vocabular_mijloace"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare vocabular",  en: "Vocab Explore",    hu: "Szókincs felfedező",  de: "Wortschatz erkunden"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",         en: "Orbit Quiz",       hu: "Bolygó kvíz",         de: "Planeten-Quiz"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",       hu: "Fekete lyuk",         de: "Schwarzes Loch"       } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Textul epic", en: "Epic Text", hu: "Epikus szöveg", de: "Epischer Text" },
    icon: "📚", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["text_c7/text_roman_nuvela", "text_c7/text_dramatic_c7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text epic",    en: "Epic Explore",     hu: "Epika felfedező",    de: "Epik erkunden"       } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire genuri",      en: "Genre Match",      hu: "Műfaj párosítás",    de: "Genre-Paare"         } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",          en: "Orbit Quiz",       hu: "Bolygó kvíz",        de: "Planeten-Quiz"       } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Textul liric", en: "Lyric Text", hu: "Lírai szöveg", de: "Lyrischer Text" },
    icon: "🎵", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["text_c7/text_liric_c7", "text_c7/text_roman_nuvela"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text liric", en: "Lyric Explore",   hu: "Líra felfedező",   de: "Lyrik erkunden"    } },
      { id: "m2", category: "build",     gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",      hu: "Fekete lyuk",      de: "Schwarzes Loch"    } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",     hu: "Gyors kör",        de: "Schnellrunde"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Recapitulare C7", en: "Review C7", hu: "Összefoglalás C7", de: "Wiederholung C7" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "adjectiv_c7/adjectiv_grade", "verb_c7/verb_diateze_c7",
      "fraza_subord_c7/subord_subiectiva", "text_c7/text_liric_c7",
      "vocabular_c7/vocabular_familie_lexicala", "numeral_c7/numeral_ordinal",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Quiz final",     en: "Final Explore",  hu: "Záró felfedező", de: "Finale erkunden" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",  en: "Orbit Quiz",     hu: "Bolygó kvíz",    de: "Planeten-Quiz"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră", en: "Black Hole",     hu: "Fekete lyuk",    de: "Schwarzes Loch"  } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC7Progress(): RomanaProgress { return loadRomanaProgress(C7_SAVE_KEY, C7_ISLANDS); }
export function saveC7Progress(p: RomanaProgress): void { saveRomanaProgress(C7_SAVE_KEY, p); }
export function isMissionDoneC7(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC7(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC7(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C7_ISLANDS, islandId); }
export function isCheckpointUnlockedC7(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C7_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC7(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC7(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C7_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC7(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C7_ISLANDS, islandId); }
export function completeTestC7(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC7(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 7, count); }
export function generateCheckpointQuestionsC7(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C7_CHECKPOINT_TOPICS, 7, count); }
