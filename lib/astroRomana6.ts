// lib/astroRomana6.ts — AstroRomână C6 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C6_SAVE_KEY = "astroromana_c6_v1";

export const C6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "substantiv_c6/declinare_c6", "pronume_c6/personale_c6",
    "sintaxa_c6/subiect_c6", "sintaxa_c6/predicat_verbal_c6",
  ],
  test2: [
    "verb_c6/moduri_nepersonale_c6", "verb_c6/diateze_c6",
    "fraza_c6/subord_completive_c6", "adverb_prepozitie_c6/conjunctie_c6",
  ],
  test3: [
    "vocabular_c6/polisemie_c6", "vocabular_c6/locutiuni_c6",
    "text_lectura_c6/genuri_c6", "fraza_c6/subord_atributive_c6",
  ],
};

export const C6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Morfologie avansată", en: "Advanced Morphology", hu: "Haladó morfológia", de: "Erweiterte Morphologie" },
    icon: "🔬", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["substantiv_c6/declinare_c6", "substantiv_c6/functii_sintactice_c6", "substantiv_c6/defective_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare morfologie", en: "Morphology Explore", hu: "Morfológia felfedező", de: "Morphologie erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",         hu: "Csillag párosítás",  de: "Sterne zuordnen"      } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",          en: "Speed Round",        hu: "Gyors kör",           de: "Schnellrunde"         } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Verbul — Moduri & Timpuri", en: "Verb Moods & Tenses", hu: "Igemódok & Igeidők", de: "Verbmodi & Zeiten" },
    icon: "⏰", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["verb_c6/moduri_nepersonale_c6", "verb_c6/timpuri_literare_c6", "verb_c6/diateze_c6", "verb_c6/neregulata_c6", "verb_c6/acord_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare verb",    en: "Verb Explore",    hu: "Ige felfedező",  de: "Verb erkunden"    } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire verbe",  en: "Verb Match",      hu: "Igepárosítás",   de: "Verbpaare"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",    en: "Black Hole",      hu: "Fekete lyuk",    de: "Schwarzes Loch"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Propoziția — Analiză", en: "Sentence Analysis", hu: "Mondatelemzés", de: "Satzanalyse" },
    icon: "📊", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["sintaxa_c6/subiect_c6", "sintaxa_c6/predicat_verbal_c6", "sintaxa_c6/predicat_nominal_c6", "sintaxa_c6/complement_direct_c6", "sintaxa_c6/atribut_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare sintaxă",  en: "Syntax Explore",   hu: "Szintaxis felfedező", de: "Syntax erkunden"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",   en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",       en: "Speed Round",      hu: "Gyors kör",           de: "Schnellrunde"     } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Textul argumentativ", en: "Argumentative Text", hu: "Érvelő szöveg", de: "Argumentativer Text" },
    icon: "🗣️", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["text_lectura_c6/genuri_c6", "text_lectura_c6/moduri_expunere_c6", "text_lectura_c6/texte_nonliterare_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text",   en: "Text Explore",    hu: "Szöveg felfedező", de: "Text erkunden"   } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire termeni", en: "Term Match",     hu: "Fogalompárosítás", de: "Begriffe paaren" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",     en: "Orbit Quiz",      hu: "Bolygó kvíz",      de: "Planeten-Quiz"   } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Stilistică de bază", en: "Basic Stylistics", hu: "Alapvető stilisztika", de: "Grundlegende Stilistik" },
    icon: "🎭", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["pronume_c6/personale_c6", "pronume_c6/demonstrative_c6", "pronume_c6/reflexive_c6", "adverb_prepozitie_c6/adverb_tipuri_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare pronume",  en: "Pronoun Explore",  hu: "Névmás felfedező",  de: "Pronomen erkunden"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",   en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen"  } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",      en: "Speed Round",      hu: "Gyors kör",         de: "Schnellrunde"       } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Figuri de stil", en: "Figures of Speech", hu: "Stíluseszközök", de: "Stilmittel" },
    icon: "🌟", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["fraza_c6/subord_completive_c6", "fraza_c6/subord_circumstantiale_c6", "fraza_c6/subord_atributive_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare frază",    en: "Clause Explore",    hu: "Tagmondat felfedező", de: "Nebensatz erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",   en: "Star Match",        hu: "Csillag párosítás", de: "Sterne zuordnen"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",      en: "Black Hole",        hu: "Fekete lyuk",         de: "Schwarzes Loch"     } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Ortografie C6", en: "Spelling C6", hu: "Helyesírás C6", de: "Rechtschreibung C6" },
    icon: "✏️", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["adverb_prepozitie_c6/conjunctie_c6", "adverb_prepozitie_c6/prepozitie_cazuri_c6", "adverb_prepozitie_c6/interjectie_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare ortografie", en: "Spelling Explore", hu: "Helyesírás felfedező", de: "Rechtschreibung erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire cuvinte",    en: "Word Match",       hu: "Szópárosítás",         de: "Wortpaare"               } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",      hu: "Gyors kör",            de: "Schnellrunde"            } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Textul literar C6", en: "Literary Text C6", hu: "Irodalmi szöveg C6", de: "Literarischer Text C6" },
    icon: "📖", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["text_lectura_c6/genuri_c6", "text_lectura_c6/personaje_c6", "vocabular_c6/polisemie_c6", "vocabular_c6/locutiuni_c6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text literar", en: "Literary Explore", hu: "Irodalom felfedező", de: "Literatur erkunden"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",       en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",           en: "Black Hole",       hu: "Fekete lyuk",        de: "Schwarzes Loch"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Recapitulare C6", en: "Review C6", hu: "Összefoglalás C6", de: "Wiederholung C6" },
    icon: "🏆", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "substantiv_c6/declinare_c6", "verb_c6/diateze_c6",
      "sintaxa_c6/complement_direct_c6", "fraza_c6/subord_completive_c6",
      "vocabular_c6/polisemie_c6", "text_lectura_c6/genuri_c6",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Quiz final",     en: "Final Explore",  hu: "Záró felfedező", de: "Finale erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele", en: "Star Match",     hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă", en: "Speed Round",    hu: "Gyors kör",      de: "Schnellrunde"    } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC6Progress(): RomanaProgress { return loadRomanaProgress(C6_SAVE_KEY, C6_ISLANDS); }
export function saveC6Progress(p: RomanaProgress): void { saveRomanaProgress(C6_SAVE_KEY, p); }
export function isMissionDoneC6(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC6(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC6(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C6_ISLANDS, islandId); }
export function isCheckpointUnlockedC6(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C6_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC6(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC6(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C6_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC6(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C6_ISLANDS, islandId); }
export function completeTestC6(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC6(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 6, count); }
export function generateCheckpointQuestionsC6(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C6_CHECKPOINT_TOPICS, 6, count); }
