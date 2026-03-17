// lib/astroDeutsch4.ts — AstroDeutsch K4 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K4_SAVE_KEY = "astrodeutsch_k4_v1";

export const K4_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K4_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "kasus/nominativ", "kasus/akkusativ", "kasus/dativ", "kasus/genitiv",
    "zeitformen_k4/praeteritum",
  ],
  test2: [
    "zeitformen_k4/perfekt", "wortarten_k4/pronomen_k4", "wortarten_k4/adjektivendungen_k4",
    "satzglieder_k4/subjekt_praedikat_k4", "satzglieder_k4/objekte_k4",
  ],
  test3: [
    "satzarten_k4/aussage_frage_k4", "nebensatz_k4/weil_dass_k4",
    "verben_k4/trennbare_verben_k4", "rechtschreibung_k4/das_dass",
  ],
};

export const K4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Nominative & Accusative", hu: "Alanyeset & Tárgyeset", de: "Nominativ & Akkusativ", ro: "Nominativ & Acuzativ" },
    icon: "🎯", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["kasus/nominativ", "kasus/akkusativ"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Kasus-Quiz",        en: "Case Quiz",        hu: "Eset kvíz",         ro: "Quiz caz"          } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Dative & Genitive", hu: "Részeseset & Birtokos eset", de: "Dativ & Genitiv", ro: "Dativ & Genitiv" },
    icon: "📋", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["kasus/dativ", "kasus/genitiv"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Kasus-Quiz",        en: "Case Quiz",        hu: "Eset kvíz",         ro: "Quiz caz"          } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Tenses", hu: "Igeidők", de: "Zeitformen", ro: "Timpuri verbale" },
    icon: "⏰", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["zeitformen_k4/praeteritum", "zeitformen_k4/perfekt"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Zeitformen-Quiz",   en: "Tense Quiz",       hu: "Igeidő kvíz",       ro: "Quiz timpuri"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Word Classes", hu: "Szófajok", de: "Wortarten", ro: "Clase gramaticale" },
    icon: "🏷️", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["wortarten_k4/pronomen_k4", "wortarten_k4/adjektivendungen_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Wortarten-Quiz",    en: "Word Class Quiz",  hu: "Szófaj kvíz",       ro: "Quiz clase"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Sentence Parts", hu: "Mondatrészek", de: "Satzglieder", ro: "Părți de propoziție" },
    icon: "🔬", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["satzglieder_k4/subjekt_praedikat_k4", "satzglieder_k4/objekte_k4", "satzglieder_k4/adverbiale_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Satzglieder-Quiz",  en: "Sentence Parts Quiz", hu: "Mondatrész kvíz",  ro: "Quiz propoziție"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",          hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",         hu: "Gyors kör",         ro: "Rundă rapidă"    } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Sentence Types & Clauses", hu: "Mondattípusok & Mellékmondatok", de: "Satzarten & Nebensätze", ro: "Tipuri & Subordonate" },
    icon: "📖", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["satzarten_k4/aussage_frage_k4", "satzarten_k4/aufforderung_ausruf_k4", "nebensatz_k4/weil_dass_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Satzarten-Quiz",    en: "Sentence Type Quiz", hu: "Mondattípus kvíz",  ro: "Quiz tipuri"       } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",         hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",        hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Verbs & Future", hu: "Igék & Jövő idő", de: "Verben & Futur", ro: "Verbe & Viitor" },
    icon: "🚀", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["verben_k4/trennbare_verben_k4", "verben_k4/futur_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Verben-Quiz",       en: "Verb Quiz",        hu: "Ige kvíz",          ro: "Quiz verbe"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Spelling", hu: "Helyesírás", de: "Rechtschreibung", ro: "Ortografie" },
    icon: "✍️", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k4/das_dass", "rechtschreibung_k4/aeu_eu", "rechtschreibung_k4/komma_aufzaehlung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Rechtschreib-Quiz", en: "Spelling Quiz",    hu: "Helyesírás kvíz",   ro: "Quiz ortografie"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "kasus/nominativ", "kasus/akkusativ", "kasus/dativ",
      "zeitformen_k4/praeteritum", "zeitformen_k4/perfekt", "rechtschreibung_k4/das_dass",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Final-Quiz",        en: "Final Quiz",       hu: "Záró kvíz",         ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK4Progress(): DeutschProgress { return loadDeutschProgress(K4_SAVE_KEY, K4_ISLANDS); }
export function saveK4Progress(p: DeutschProgress): void { saveDeutschProgress(K4_SAVE_KEY, p); }
export function isMissionDoneK4(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK4(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK4(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K4_ISLANDS, islandId); }
export function isCheckpointUnlockedK4(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K4_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK4(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK4(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K4_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK4(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K4_ISLANDS, islandId); }
export function completeTestK4(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK4(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 4, count); }
export function generateCheckpointQuestionsK4(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K4_CHECKPOINT_TOPICS, 4, count); }
