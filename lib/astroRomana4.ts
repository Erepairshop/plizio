// lib/astroRomana4.ts — AstroRomână C4 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C4_SAVE_KEY = "astroromana_c4_v1";

export const C4_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C4_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "morfologie_c4/substantiv_c4", "morfologie_c4/verb_timpuri_c4",
    "morfologie_c4/adjectiv_c4", "morfologie_c4/pronume_personal_c4",
  ],
  test2: [
    "morfologie_c4/pronume_posesiv_c4", "sintaxa_c4/subiect_predicat_c4",
    "ortografie_c4/cratima_avansata_c4", "ortografie_c4/majuscule_c4",
  ],
  test3: [
    "sintaxa_c4/atribut_c4", "sintaxa_c4/complement_c4",
    "text_c4/rezumat_c4", "lectura_c4/tema_mesaj_c4",
  ],
};

export const C4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Substantivul — analiză", en: "Noun Analysis", hu: "Főnév elemzése", de: "Substantiv — Analyse" },
    icon: "📦", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["morfologie_c4/substantiv_c4", "sintaxa_c4/subiect_predicat_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare substantiv",   en: "Noun Explorer",      hu: "Főnév felfedező",    de: "Substantiv erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",        en: "Star Match",         hu: "Csillag párosítás",  de: "Sterne zuordnen"     } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",           en: "Orbit Quiz",         hu: "Orbit kvíz",         de: "Orbit-Quiz"          } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Verbul — moduri", en: "Verb Moods", hu: "Igei módok", de: "Verbmodi" },
    icon: "🎯", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["morfologie_c4/verb_timpuri_c4", "sintaxa_c4/alte_parti_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare verb",      en: "Verb Explorer",    hu: "Ige felfedező",     de: "Verb erkunden"   } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",    en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",        en: "Speed Round",      hu: "Gyors kör",         de: "Speedrunde"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Adjectivul — grade", en: "Adjective Degrees", hu: "Melléknevek fokozása", de: "Adjektiv — Steigerung" },
    icon: "📊", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["morfologie_c4/adjectiv_c4", "vocabular_c4/sinonime_antonime_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare adjectiv",  en: "Adjective Explorer", hu: "Melléknév felfedező", de: "Adjektiv erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",         hu: "Csillag párosítás",   de: "Sterne zuordnen"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",         hu: "Fekete lyuk",         de: "Schwarzes Loch"    } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Pronumele — tipuri", en: "Pronoun Types", hu: "Névmások típusai", de: "Pronomentypen" },
    icon: "👥", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["morfologie_c4/pronume_personal_c4", "morfologie_c4/pronume_posesiv_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare pronume",    en: "Pronoun Explorer",  hu: "Névmás felfedező",   de: "Pronomen erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",        hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",       hu: "Gyors kör",          de: "Speedrunde"        } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Numeralul", en: "Numerals", hu: "Számnév", de: "Das Numerale" },
    icon: "🔢", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["sintaxa_c4/alte_parti_c4", "ortografie_c4/majuscule_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare numeral",   en: "Numeral Explorer",  hu: "Számnév felfedező",  de: "Numerale erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",        hu: "Csillag párosítás",  de: "Sterne zuordnen"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",        en: "Orbit Quiz",        hu: "Orbit kvíz",         de: "Orbit-Quiz"        } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Ortografia avansată", en: "Advanced Spelling", hu: "Haladó helyesírás", de: "Fortgeschrittene Rechtschreibung" },
    icon: "✏️", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["ortografie_c4/cratima_avansata_c4", "ortografie_c4/punctuatie_c4", "ortografie_c4/scrierea_corecta_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare ortografie",  en: "Spelling Explorer",   hu: "Helyesírás felfedező", de: "Rechtschreibung erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",          hu: "Csillag párosítás", de: "Sterne zuordnen"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",          hu: "Fekete lyuk",          de: "Schwarzes Loch"           } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Propoziția — analiză", en: "Sentence Analysis", hu: "Mondatelemzés", de: "Satzanalyse" },
    icon: "🔬", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["sintaxa_c4/subiect_predicat_c4", "sintaxa_c4/atribut_c4", "sintaxa_c4/complement_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare sintaxă",    en: "Syntax Explorer",  hu: "Mondatelemzés felfedező", de: "Syntax erkunden"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",       hu: "Csillag párosítás",       de: "Sterne zuordnen"  } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",      hu: "Gyors kör",               de: "Speedrunde"       } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Compunerea", en: "Essay Writing", hu: "Fogalmazás", de: "Aufsatzschreiben" },
    icon: "📝", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["text_c4/rezumat_c4", "text_c4/text_narativ_c4", "text_c4/scrisoarea_c4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare compunere",  en: "Writing Explorer",  hu: "Fogalmazás felfedező", de: "Schreiben erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",        hu: "Csillag párosítás",  de: "Sterne zuordnen"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",        hu: "Fekete lyuk",        de: "Schwarzes Loch"    } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Recapitulare Clasa 4", en: "Grade 4 Review", hu: "4. osztály összefoglaló", de: "Klasse 4 Zusammenfassung" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "morfologie_c4/substantiv_c4", "morfologie_c4/verb_timpuri_c4",
      "sintaxa_c4/atribut_c4", "ortografie_c4/cratima_avansata_c4",
      "text_c4/rezumat_c4", "lectura_c4/tema_mesaj_c4",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Quiz final",        en: "Final Quiz",    hu: "Záró kvíz",        de: "Abschluss-Quiz" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",  en: "Star Match",    hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",     en: "Black Hole",    hu: "Fekete lyuk",      de: "Schwarzes Loch" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC4Progress(): RomanaProgress { return loadRomanaProgress(C4_SAVE_KEY, C4_ISLANDS); }
export function saveC4Progress(p: RomanaProgress): void { saveRomanaProgress(C4_SAVE_KEY, p); }
export function isMissionDoneC4(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC4(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC4(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C4_ISLANDS, islandId); }
export function isCheckpointUnlockedC4(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C4_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC4(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC4(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C4_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC4(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C4_ISLANDS, islandId); }
export function completeTestC4(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC4(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 4, count); }
export function generateCheckpointQuestionsC4(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C4_CHECKPOINT_TOPICS, 4, count); }
