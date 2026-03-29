// lib/astroRomana8.ts — AstroRomână C8 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C8_SAVE_KEY = "astroromana_c8_v1";

export const C8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "morfologie_c8/verb_forme_avansate", "morfologie_c8/pronume_cazuri",
    "sintaxa_c8/sintaxa_propozitie_simpla", "sintaxa_c8/analiza_sintactica",
  ],
  test2: [
    "sintaxa_c8/subordonare_recapitulare", "text_literatura_c8/figuri_stil",
    "text_literatura_c8/text_literar_genuri", "morfologie_c8/morfologie_recapitulare",
  ],
  test3: [
    "text_literatura_c8/comentariu_literar", "text_literatura_c8/texturi_nonliterare",
    "text_literatura_c8/stil_vocabular", "sintaxa_c8/sintaxa_propozitie_compusa",
  ],
};

export const C8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Evaluare — Morfologie", en: "National Exam — Morphology", hu: "Érettségi — Morfológia", de: "Nationalprüfung — Morphologie" },
    icon: "🎓", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["morfologie_c8/verb_forme_avansate", "morfologie_c8/pronume_cazuri", "morfologie_c8/articol_definit_nedefinit", "morfologie_c8/substantiv_gen_numar"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare morfologie",  en: "Morphology Explore",  hu: "Morfológia felfedező",  de: "Morphologie erkunden"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",          en: "Orbit Quiz",          hu: "Bolygó kvíz",           de: "Planeten-Quiz"         } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",          en: "Speed Round",         hu: "Gyors kör",             de: "Schnellrunde"          } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Evaluare — Sintaxă", en: "National Exam — Syntax", hu: "Érettségi — Szintaxis", de: "Nationalprüfung — Syntax" },
    icon: "📊", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["sintaxa_c8/sintaxa_propozitie_simpla", "sintaxa_c8/sintaxa_propozitie_compusa", "sintaxa_c8/analiza_sintactica", "sintaxa_c8/membri_propozitie"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare sintaxă",   en: "Syntax Explore",    hu: "Szintaxis felfedező",  de: "Syntax erkunden"    } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire funcții",   en: "Function Match",    hu: "Funkció párosítás",    de: "Funktionen paaren"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",        hu: "Fekete lyuk",          de: "Schwarzes Loch"     } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Evaluare — Ortografie", en: "National Exam — Spelling", hu: "Érettségi — Helyesírás", de: "Nationalprüfung — Rechtschreibung" },
    icon: "✏️", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["sintaxa_c8/subordonare_recapitulare", "morfologie_c8/morfologie_recapitulare"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare recapitulare", en: "Review Explore",   hu: "Összefoglalás felfedező", de: "Wiederholung erkunden" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",           en: "Orbit Quiz",       hu: "Bolygó kvíz",            de: "Planeten-Quiz"         } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",           en: "Speed Round",      hu: "Gyors kör",              de: "Schnellrunde"          } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Textul literar — Analiză", en: "Literary Text Analysis", hu: "Irodalmi szövegelemzés", de: "Literarische Textanalyse" },
    icon: "🔍", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["text_literatura_c8/figuri_stil", "text_literatura_c8/text_literar_genuri", "text_literatura_c8/comentariu_literar"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text literar", en: "Literary Explore", hu: "Irodalom felfedező",    de: "Literatur erkunden"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire figuri",      en: "Figure Match",     hu: "Stíluseszköz párosítás", de: "Stilfigur-Paare"     } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",          en: "Orbit Quiz",       hu: "Bolygó kvíz",            de: "Planeten-Quiz"       } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Textul non-literar", en: "Non-Literary Text", hu: "Nem irodalmi szöveg", de: "Nichtliterarischer Text" },
    icon: "📰", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["text_literatura_c8/texturi_nonliterare", "text_literatura_c8/stil_vocabular"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text non-lit.",  en: "Non-Lit. Explore",  hu: "Nem irodalmi felfedező", de: "Nichtlit. erkunden" } },
      { id: "m2", category: "build",     gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",             en: "Black Hole",        hu: "Fekete lyuk",            de: "Schwarzes Loch"     } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",             en: "Speed Round",       hu: "Gyors kör",              de: "Schnellrunde"       } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Argumentare și exprimare", en: "Argumentation & Expression", hu: "Érvelés & Kifejezés", de: "Argumentation & Ausdruck" },
    icon: "🗣️", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["text_literatura_c8/comentariu_literar", "text_literatura_c8/figuri_stil"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare argumentare",   en: "Argument Explore",   hu: "Érvelés felfedező",   de: "Argumentation erkunden" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",            en: "Orbit Quiz",         hu: "Bolygó kvíz",         de: "Planeten-Quiz"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",            en: "Black Hole",         hu: "Fekete lyuk",         de: "Schwarzes Loch"         } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Figuri de stil — Recapitulare", en: "Figures of Speech Review", hu: "Stíluseszközök összefoglalása", de: "Stilmittel — Wiederholung" },
    icon: "🎭", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["text_literatura_c8/figuri_stil", "text_literatura_c8/text_literar_genuri", "morfologie_c8/morfologie_recapitulare"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare figuri de stil",  en: "Figures Explore",    hu: "Stíluseszköz felfedező", de: "Stilmittel erkunden"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire figuri",         en: "Figure Match",       hu: "Stíluseszköz párosítás", de: "Stilfigur-Paare"      } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",             en: "Speed Round",        hu: "Gyors kör",             de: "Schnellrunde"         } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Compunerea literară", en: "Literary Composition", hu: "Irodalmi fogalmazás", de: "Literarisches Schreiben" },
    icon: "📝", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["text_literatura_c8/comentariu_literar", "text_literatura_c8/stil_vocabular", "sintaxa_c8/analiza_sintactica"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare compunere",  en: "Composition Explore", hu: "Fogalmazás felfedező", de: "Aufsatz erkunden"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",        en: "Orbit Quiz",          hu: "Bolygó kvíz",          de: "Planeten-Quiz"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",        en: "Black Hole",          hu: "Fekete lyuk",          de: "Schwarzes Loch"       } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Simulare Evaluare Națională", en: "National Exam Simulation", hu: "Nemzeti Vizsga Szimuláció", de: "Simulation Nationalpüfung" },
    icon: "🏆", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "morfologie_c8/verb_forme_avansate", "sintaxa_c8/analiza_sintactica",
      "text_literatura_c8/figuri_stil", "text_literatura_c8/comentariu_literar",
      "morfologie_c8/pronume_cazuri", "sintaxa_c8/subordonare_recapitulare",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Simulare examen",   en: "Exam Simulation",   hu: "Vizsga szimuláció",  de: "Prüfungssimulation"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",     en: "Orbit Quiz",        hu: "Bolygó kvíz",        de: "Planeten-Quiz"       } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă finală",     en: "Final Round",       hu: "Döntő kör",          de: "Finale Runde"        } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC8Progress(): RomanaProgress { return loadRomanaProgress(C8_SAVE_KEY, C8_ISLANDS); }
export function saveC8Progress(p: RomanaProgress): void { saveRomanaProgress(C8_SAVE_KEY, p); }
export function isMissionDoneC8(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC8(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC8(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C8_ISLANDS, islandId); }
export function isCheckpointUnlockedC8(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C8_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC8(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC8(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C8_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC8(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C8_ISLANDS, islandId); }
export function completeTestC8(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC8(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 8, count); }
export function generateCheckpointQuestionsC8(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C8_CHECKPOINT_TOPICS, 8, count); }
