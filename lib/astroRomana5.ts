// lib/astroRomana5.ts — AstroRomână C5 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C5_SAVE_KEY = "astroromana_c5_v1";

export const C5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "lectura_c5/intentie_autor_c5", "substantiv_c5/declinarea_c5",
    "verb_c5/perfectul_simplu_c5", "ortografie_c5/a_i_c5",
  ],
  test2: [
    "pronume_c5/pronume_interogativ_c5", "verb_c5/moduri_nepersonale_c5",
    "sintaxa_c5/apostrof_atribut_c5", "ortografie_c5/scrierea_compuselor_c5",
  ],
  test3: [
    "text_c5/genuri_literare_c5", "vocabular_c5/polisemia_c5",
    "vocabular_c5/omonimia_c5", "sintaxa_c5/prop_circumstantiala_c5",
  ],
};

export const C5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Fonetică", en: "Phonetics", hu: "Fonetika", de: "Phonetik" },
    icon: "🔊", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["lectura_c5/intentie_autor_c5", "ortografie_c5/semne_diacritice_c5", "ortografie_c5/a_i_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare sunete",   en: "Sound Explore",    hu: "Hangok felfedezése", de: "Laute erkunden"     } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire cuvinte", en: "Word Match",        hu: "Szópárosítás",       de: "Wortpaare"          } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz planetar",     en: "Orbit Quiz",       hu: "Bolygó kvíz",        de: "Planeten-Quiz"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Substantivul", en: "Nouns", hu: "A főnév", de: "Das Substantiv" },
    icon: "📦", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["substantiv_c5/declinarea_c5", "substantiv_c5/substantive_colective_c5", "substantiv_c5/genul_substantivelor_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare substantiv", en: "Noun Explore",    hu: "Főnév felfedező",    de: "Substantiv erkunden" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",         en: "Orbit Quiz",     hu: "Bolygó kvíz",        de: "Planeten-Quiz"       } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",    hu: "Gyors kör",          de: "Schnellrunde"        } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Verbul", en: "Verbs", hu: "Az ige", de: "Das Verb" },
    icon: "🏃", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["verb_c5/perfectul_simplu_c5", "verb_c5/mai_mult_ca_perfect_c5", "verb_c5/moduri_nepersonale_c5", "verb_c5/acordul_predicat_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare verb",   en: "Verb Explore",     hu: "Ige felfedező",      de: "Verb erkunden"      } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire verbe",  en: "Verb Match",       hu: "Igepárosítás",       de: "Verbpaare"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",    en: "Black Hole",       hu: "Fekete lyuk",        de: "Schwarzes Loch"     } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Adjectivul & Pronumele", en: "Adjectives & Pronouns", hu: "Melléknév & Névmás", de: "Adjektiv & Pronomen" },
    icon: "🎨", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["pronume_c5/pronume_interogativ_c5", "pronume_c5/pronume_nehotarat_c5", "pronume_c5/pronume_relativ_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare pronume", en: "Pronoun Explore",  hu: "Névmás felfedező",  de: "Pronomen erkunden"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",      en: "Orbit Quiz",      hu: "Bolygó kvíz",       de: "Planeten-Quiz"      } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",      en: "Speed Round",     hu: "Gyors kör",         de: "Schnellrunde"       } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Ortografie C5", en: "Spelling C5", hu: "Helyesírás C5", de: "Rechtschreibung C5" },
    icon: "✏️", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["ortografie_c5/a_i_c5", "ortografie_c5/scrierea_compuselor_c5", "ortografie_c5/cratima_forme_c5", "ortografie_c5/semne_diacritice_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare ortografie", en: "Spelling Explore", hu: "Helyesírás felfedező", de: "Orthographie erkunden" } },
      { id: "m2", category: "build",     gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",       hu: "Fekete lyuk",          de: "Schwarzes Loch"        } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",      hu: "Gyors kör",            de: "Schnellrunde"          } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Sintaxă — Propoziția", en: "Sentence Syntax", hu: "Mondatszintaxis", de: "Satzsyntax" },
    icon: "🔬", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["sintaxa_c5/apostrof_atribut_c5", "sintaxa_c5/prop_circumstantiala_c5", "sintaxa_c5/coordonare_c5", "verb_c5/complement_circumstantial_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare sintaxă",  en: "Syntax Explore",   hu: "Szintaxis felfedező", de: "Syntax erkunden"    } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire termeni",  en: "Term Match",       hu: "Fogalompárosítás",    de: "Begriffe paaren"    } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",       en: "Orbit Quiz",       hu: "Bolygó kvíz",         de: "Planeten-Quiz"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Textul literar", en: "Literary Text", hu: "Irodalmi szöveg", de: "Literarischer Text" },
    icon: "📚", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["text_c5/genuri_literare_c5", "text_c5/specii_literare_c5", "text_c5/moduri_expunere_c5", "text_c5/personaje_caracterizare_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text literar", en: "Literary Explore",  hu: "Irodalom felfedező", de: "Literatur erkunden"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",           en: "Orbit Quiz",        hu: "Bolygó kvíz",        de: "Planeten-Quiz"       } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",           en: "Black Hole",        hu: "Fekete lyuk",        de: "Schwarzes Loch"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Vocabularul", en: "Vocabulary", hu: "Szókincs", de: "Wortschatz" },
    icon: "💡", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["vocabular_c5/polisemia_c5", "vocabular_c5/omonimia_c5", "vocabular_c5/paronimia_c5", "vocabular_c5/locutiuni_c5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare vocabular", en: "Vocab Explore",    hu: "Szókincs felfedező", de: "Wortschatz erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire cuvinte",   en: "Word Match",       hu: "Szópárosítás",       de: "Wortpaare"           } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",        en: "Speed Round",      hu: "Gyors kör",          de: "Schnellrunde"        } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Recapitulare C5", en: "Review C5", hu: "Összefoglalás C5", de: "Wiederholung C5" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "substantiv_c5/declinarea_c5", "verb_c5/perfectul_simplu_c5",
      "pronume_c5/pronume_interogativ_c5", "text_c5/genuri_literare_c5",
      "vocabular_c5/polisemia_c5", "ortografie_c5/a_i_c5",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Quiz final",      en: "Final Explore",   hu: "Záró felfedező",  de: "Finale erkunden"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",   en: "Orbit Quiz",      hu: "Bolygó kvíz",     de: "Planeten-Quiz"    } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",  en: "Black Hole",      hu: "Fekete lyuk",     de: "Schwarzes Loch"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC5Progress(): RomanaProgress { return loadRomanaProgress(C5_SAVE_KEY, C5_ISLANDS); }
export function saveC5Progress(p: RomanaProgress): void { saveRomanaProgress(C5_SAVE_KEY, p); }
export function isMissionDoneC5(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC5(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC5(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C5_ISLANDS, islandId); }
export function isCheckpointUnlockedC5(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C5_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC5(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC5(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C5_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC5(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C5_ISLANDS, islandId); }
export function completeTestC5(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC5(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 5, count); }
export function generateCheckpointQuestionsC5(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C5_CHECKPOINT_TOPICS, 5, count); }
