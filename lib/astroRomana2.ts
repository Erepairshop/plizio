// lib/astroRomana2.ts — AstroRomână C2 island definitions & progress
import type { IslandDef, Lang, MathQuestion, RomanaProgress } from "./astroRomana";
import {
  loadRomanaProgress, saveRomanaProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateRomanaIslandQuestions, generateRomanaCheckpointQuestions,
} from "./astroRomana";

export const C2_SAVE_KEY = "astroromana_c2_v1";

export const C2_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C2_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "parti_vorbire_c2/substantiv_c2", "parti_vorbire_c2/verb_c2",
    "parti_vorbire_c2/adjectiv_c2", "propozitia_c2/subiect_predicat_c2",
  ],
  test2: [
    "ortografie_c2/a_i_reguli_c2", "ortografie_c2/sa_s_a_c2",
    "ortografie_c2/ia_i_a_c2", "propozitia_c2/punctuatie_c2",
  ],
  test3: [
    "textul_c2/narativ_c2", "textul_c2/dialog_c2",
    "lectura_c2/intelegere_c2", "vocabular_c2/omonime_c2",
  ],
};

export const C2_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { ro: "Substantivul", en: "Nouns", hu: "A főnév", de: "Das Substantiv" },
    icon: "📦", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["parti_vorbire_c2/substantiv_c2", "cuvantul_c1/singular_plural_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare substantine", en: "Noun Explorer",    hu: "Főnév felfedező",   de: "Substantiv erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",       hu: "Csillag párosítás", de: "Sterne zuordnen"     } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",         en: "Orbit Quiz",       hu: "Orbit kvíz",        de: "Orbit-Quiz"          } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { ro: "Verbul", en: "Verbs", hu: "Az ige", de: "Das Verb" },
    icon: "🏃", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["parti_vorbire_c2/verb_c2", "propozitia_c2/subiect_predicat_c2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare verbe",     en: "Verb Explorer",    hu: "Ige felfedező",     de: "Verben erkunden"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",        en: "Orbit Quiz",       hu: "Orbit kvíz",        de: "Orbit-Quiz"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",       hu: "Fekete lyuk",       de: "Schwarzes Loch"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { ro: "Adjectivul", en: "Adjectives", hu: "A melléknév", de: "Das Adjektiv" },
    icon: "🎨", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["parti_vorbire_c2/adjectiv_c2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare adjective", en: "Adjective Explorer", hu: "Melléknév felfedező", de: "Adjektive erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",         hu: "Csillag párosítás",   de: "Sterne zuordnen"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",        en: "Speed Round",        hu: "Gyors kör",           de: "Speedrunde"        } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { ro: "Articolul", en: "Articles", hu: "Az névelő", de: "Der Artikel" },
    icon: "📰", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["propozitia_c2/tipuri_prop_c2", "propozitia_c2/punctuatie_c2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare articole",  en: "Article Explorer",  hu: "Névelő felfedező",  de: "Artikel erkunden"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",        en: "Orbit Quiz",        hu: "Orbit kvíz",        de: "Orbit-Quiz"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",        hu: "Fekete lyuk",       de: "Schwarzes Loch"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { ro: "Ortografia", en: "Spelling Rules", hu: "Helyesírás", de: "Rechtschreibung" },
    icon: "✏️", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["ortografie_c2/a_i_reguli_c2", "ortografie_c2/sa_s_a_c2", "ortografie_c2/ia_i_a_c2", "ortografie_c2/sau_s_au_c2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare ortografie", en: "Spelling Explorer",  hu: "Helyesírás felfedező", de: "Rechtschreibung erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",         hu: "Csillag párosítás",    de: "Sterne zuordnen"          } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",         en: "Speed Round",        hu: "Gyors kör",            de: "Speedrunde"               } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { ro: "Propoziția simplă", en: "Simple Sentence", hu: "Egyszerű mondat", de: "Der einfache Satz" },
    icon: "💬", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["propozitia_c2/subiect_predicat_c2", "propozitia_c2/tipuri_prop_c2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare propoziții",  en: "Sentence Explorer", hu: "Mondat felfedező",  de: "Satz erkunden"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",          en: "Orbit Quiz",        hu: "Orbit kvíz",        de: "Orbit-Quiz"       } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",   icon: "🌀", label: { ro: "Sortare gravitațională",en: "Gravity Sort",      hu: "Gravitáció sorrend",de: "Gravitations-Sort"} },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { ro: "Semnele de punctuație", en: "Punctuation", hu: "Írásjelek", de: "Interpunktion" },
    icon: "❗", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["propozitia_c2/punctuatie_c2", "propozitia_c1/punctuatie_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare punctuație", en: "Punctuation Explorer", hu: "Írásjel felfedező", de: "Interpunktion erkunden" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",       en: "Star Match",           hu: "Csillag párosítás", de: "Sterne zuordnen"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",         en: "Black Hole",           hu: "Fekete lyuk",       de: "Schwarzes Loch"         } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { ro: "Textul narativ", en: "Narrative Text", hu: "Elbeszélő szöveg", de: "Erzähltext" },
    icon: "📖", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["textul_c2/narativ_c2", "textul_c2/personaje_actiuni_c2", "textul_c2/dialog_c2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Explorare text narativ", en: "Narrative Explorer",  hu: "Elbeszélés felfedező", de: "Erzähltext erkunden" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",           en: "Orbit Quiz",          hu: "Orbit kvíz",           de: "Orbit-Quiz"          } },
      { id: "m3", category: "challenge", gameType: "speed-round",    icon: "⚡", label: { ro: "Rundă rapidă",           en: "Speed Round",         hu: "Gyors kör",            de: "Speedrunde"          } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { ro: "Recapitulare Clasa 2", en: "Grade 2 Review", hu: "2. osztály összefoglaló", de: "Klasse 2 Zusammenfassung" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "parti_vorbire_c2/substantiv_c2", "parti_vorbire_c2/verb_c2",
      "ortografie_c2/a_i_reguli_c2", "propozitia_c2/subiect_predicat_c2",
      "textul_c2/narativ_c2", "lectura_c2/intelegere_c2",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Quiz final",          en: "Final Quiz",    hu: "Záró kvíz",         de: "Abschluss-Quiz"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz orbital",        en: "Orbit Quiz",    hu: "Orbit kvíz",        de: "Orbit-Quiz"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch"  } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadC2Progress(): RomanaProgress { return loadRomanaProgress(C2_SAVE_KEY, C2_ISLANDS); }
export function saveC2Progress(p: RomanaProgress): void { saveRomanaProgress(C2_SAVE_KEY, p); }
export function isMissionDoneC2(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC2(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC2(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C2_ISLANDS, islandId); }
export function isCheckpointUnlockedC2(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C2_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC2(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC2(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C2_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC2(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C2_ISLANDS, islandId); }
export function completeTestC2(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC2(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 2, count); }
export function generateCheckpointQuestionsC2(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C2_CHECKPOINT_TOPICS, 2, count); }
