// lib/astroRomana3.ts — AstroRomână C3 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C3_SAVE_KEY = "astroromana_c3_v1";

export const C3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "substantiv_c3/gen_subst_c3", "substantiv_c3/numar_subst_c3",
    "verb_c3/conjugare_c3", "verb_c3/timp_verb_c3",
  ],
  test2: [
    "adjectiv_c3/acord_adj_c3", "vocabular_c3/sinonime_c3",
    "ortografie_c3/cratima_c3", "propozitia_c3/propozitie_dezv_c3",
  ],
  test3: [
    "propozitia_c3/figuri_stil_c3", "lectura_c3/intelegere_c3",
    "lectura_c3/idee_principala_c3", "vocabular_c3/familia_cuvintelor_c3",
  ],
};

export const C3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Substantivul — cazuri", en: "Noun Cases", hu: "Főnév esetei", de: "Substantiv — Fälle" },
    icon: "📦", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["substantiv_c3/gen_subst_c3", "substantiv_c3/numar_subst_c3", "substantiv_c3/caz_subst_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare substantiv",   en: "Noun Explorer",     hu: "Főnév felfedező",    de: "Substantiv erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",        en: "Star Match",        hu: "Csillag párosítás",  de: "Sterne zuordnen"     } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",           en: "Orbit Quiz",        hu: "Orbit kvíz",         de: "Orbit-Quiz"          } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Verbul — timpuri", en: "Verb Tenses", hu: "Igeidők", de: "Verbzeiten" },
    icon: "⏰", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["verb_c3/conjugare_c3", "verb_c3/timp_verb_c3", "verb_c3/persoana_nr_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare verb",       en: "Verb Explorer",    hu: "Ige felfedező",     de: "Verb erkunden"   } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",      hu: "Gyors kör",         de: "Speedrunde"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Adjectivul — acordul", en: "Adjective Agreement", hu: "Melléknév egyeztetés", de: "Adjektiv — Kongruenz" },
    icon: "🎨", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["adjectiv_c3/acord_adj_c3", "adjectiv_c3/adj_propozitie_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare adjectiv",   en: "Adjective Explorer", hu: "Melléknév felfedező", de: "Adjektiv erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",         hu: "Csillag párosítás",   de: "Sterne zuordnen"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",        en: "Black Hole",         hu: "Fekete lyuk",         de: "Schwarzes Loch"    } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Pronumele personal", en: "Personal Pronouns", hu: "Személyes névmások", de: "Personalpronomen" },
    icon: "👤", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["vocabular_c3/sinonime_c3", "vocabular_c3/antonime_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare pronume",   en: "Pronoun Explorer", hu: "Névmás felfedező",  de: "Pronomen erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",    en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",        en: "Speed Round",      hu: "Gyors kör",         de: "Speedrunde"        } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Ortografia", en: "Spelling Rules", hu: "Helyesírás", de: "Rechtschreibung" },
    icon: "✏️", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["ortografie_c3/cratima_c3", "vocabular_c3/familia_cuvintelor_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare ortografie",  en: "Spelling Explorer",  hu: "Helyesírás felfedező", de: "Rechtschreibung erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",       en: "Star Match",         hu: "Csillag párosítás",    de: "Sterne zuordnen"          } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",          en: "Orbit Quiz",         hu: "Orbit kvíz",           de: "Orbit-Quiz"               } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Propoziția dezvoltată", en: "Expanded Sentence", hu: "Bővített mondat", de: "Der erweiterte Satz" },
    icon: "💬", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["propozitia_c3/propozitie_dezv_c3", "propozitia_c3/figuri_stil_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare propoziție",  en: "Sentence Explorer", hu: "Mondat felfedező",   de: "Satz erkunden"    } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",        hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",        hu: "Fekete lyuk",        de: "Schwarzes Loch"   } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Textul descriptiv", en: "Descriptive Text", hu: "Leíró szöveg", de: "Beschreibender Text" },
    icon: "🖼️", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["lectura_c3/intelegere_c3", "lectura_c3/idee_principala_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text descriptiv", en: "Descriptive Explorer", hu: "Leírás felfedező",  de: "Beschreibung erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",          en: "Star Match",           hu: "Csillag párosítás", de: "Sterne zuordnen"       } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",             en: "Speed Round",          hu: "Gyors kör",         de: "Speedrunde"            } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Textul narativ C3", en: "Narrative Structure", hu: "Elbeszélés szerkezete", de: "Erzählstruktur" },
    icon: "📖", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["lectura_c3/intelegere_c3", "propozitia_c3/figuri_stil_c3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare narativ",   en: "Narrative Explorer", hu: "Elbeszélés felfedező", de: "Erzählung erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",    en: "Star Match",         hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",        hu: "Fekete lyuk",       de: "Schwarzes Loch"   } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Recapitulare Clasa 3", en: "Grade 3 Review", hu: "3. osztály összefoglaló", de: "Klasse 3 Zusammenfassung" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "substantiv_c3/caz_subst_c3", "verb_c3/timp_verb_c3",
      "adjectiv_c3/acord_adj_c3", "ortografie_c3/cratima_c3",
      "propozitia_c3/figuri_stil_c3", "lectura_c3/idee_principala_c3",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Quiz final",        en: "Final Quiz",    hu: "Záró kvíz",        de: "Abschluss-Quiz" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",  en: "Star Match",    hu: "Csillag párosítás", de: "Sterne zuordnen" } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",     en: "Black Hole",    hu: "Fekete lyuk",      de: "Schwarzes Loch" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC3Progress(): RomanaProgress { return loadRomanaProgress(C3_SAVE_KEY, C3_ISLANDS); }
export function saveC3Progress(p: RomanaProgress): void { saveRomanaProgress(C3_SAVE_KEY, p); }
export function isMissionDoneC3(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC3(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC3(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C3_ISLANDS, islandId); }
export function isCheckpointUnlockedC3(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C3_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC3(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC3(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C3_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC3(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C3_ISLANDS, islandId); }
export function completeTestC3(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC3(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 3, count); }
export function generateCheckpointQuestionsC3(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C3_CHECKPOINT_TOPICS, 3, count); }
