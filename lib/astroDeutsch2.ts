// lib/astroDeutsch2.ts — AstroDeutsch K2 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K2_SAVE_KEY = "astrodeutsch_k2_v1";

export const K2_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K2_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "wortarten_k2/nomen_k2", "wortarten_k2/artikel_k2", "wortarten_k2/plural_k2",
    "wortarten_k2/verben_k2", "wortarten_k2/konjugation_k2",
  ],
  test2: [
    "wortarten_k2/adjektive_k2", "wortarten_k2/personalpronomen_k2",
    "saetze_k2/satzarten", "saetze_k2/wortstellung_k2", "saetze_k2/fragewörter_k2",
  ],
  test3: [
    "rechtschreibung_k2/tz_z", "rechtschreibung_k2/ck_k", "rechtschreibung_k2/doppelvokal",
    "wortfelder_k2/tiere_k2", "wortfelder_k2/schule_k2",
  ],
};

export const K2_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Nouns & Articles", hu: "Főnév & Névelő", de: "Nomen & Artikel", ro: "Substantive & Articole" },
    icon: "🏷️", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["wortarten_k2/nomen_k2", "wortarten_k2/artikel_k2", "wortarten_k2/plural_k2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "noun-explorer", icon: "🏷️", label: { de: "Nomen entdecken",  en: "Noun Explorer",    hu: "Főnév felfedező",   ro: "Explorare substantive" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Verbs", hu: "Igék", de: "Verben", ro: "Verbe" },
    icon: "🏃", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["wortarten_k2/verben_k2", "wortarten_k2/konjugation_k2", "wortarten_k2/imperativ_k2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "verb-explorer", icon: "🏃", label: { de: "Verben entdecken",  en: "Verb Explorer",    hu: "Ige felfedező",     ro: "Explorare verbe"   } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",  en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adjectives & Pronouns", hu: "Melléknevek & Névmások", de: "Adjektive & Pronomen", ro: "Adjective & Pronume" },
    icon: "🎨", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["wortarten_k2/adjektive_k2", "wortarten_k2/personalpronomen_k2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "adjective-explorer", icon: "🎨", label: { de: "Adjektive entdecken", en: "Adjective Explorer", hu: "Melléknév felfedező", ro: "Explorare adjective" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",  en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Sentence Types", hu: "Mondattípusok", de: "Satzarten", ro: "Tipuri de propoziții" },
    icon: "❓", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["saetze_k2/satzarten", "saetze_k2/wortstellung_k2", "saetze_k2/fragewörter_k2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-type-explorer", icon: "❓", label: { de: "Satzarten entdecken", en: "Sentence Explorer", hu: "Mondat felfedező",  ro: "Explorare propoziții" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Capitalization", hu: "Nagybetűírás", de: "Großschreibung", ro: "Majuscule" },
    icon: "🅰️", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["saetze_k2/grossschreibung_k2", "saetze_k2/verbindungswoerter_k2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "capitalization-explorer", icon: "🅰️", label: { de: "Großschreibung entdecken", en: "Capital Explorer", hu: "Nagybetű felfedező", ro: "Explorare majuscule" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",          hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",  en: "Black Hole",          hu: "Fekete lyuk",       ro: "Gaură neagră"    } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Spelling I", hu: "Helyesírás I", de: "Rechtschreibung I", ro: "Ortografie I" },
    icon: "✍️", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k2/tz_z", "rechtschreibung_k2/ck_k", "rechtschreibung_k2/doppelvokal"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spelling-rule-explorer", icon: "✍️", label: { de: "tz/ck entdecken",   en: "Spelling Explorer", hu: "Helyesírás felfedező", ro: "Explorare ortografie" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Spelling II", hu: "Helyesírás II", de: "Rechtschreibung II", ro: "Ortografie II" },
    icon: "🔡", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k2/doppelkonsonanten_k2", "rechtschreibung_k2/dehnungs_h", "rechtschreibung_k2/wortfamilien_k2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spelling-explorer-2", icon: "🔡", label: { de: "Dehnungs-h entdecken", en: "Spelling Explorer II", hu: "Helyesírás II felfedező", ro: "Ortografie II" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Word Fields", hu: "Szócsoportok", de: "Wortfelder", ro: "Câmpuri lexicale" },
    icon: "🌍", color: "#A855F7", sortRange: [1, 10],
    topicKeys: [
      "wortfelder_k2/schule_k2", "wortfelder_k2/koerper_k2", "wortfelder_k2/tiere_k2",
      "wortfelder_k2/familie_k2", "wortfelder_k2/essen_k2",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-field-explorer", icon: "🌍", label: { de: "Wortfelder entdecken", en: "Word Field Explorer", hu: "Szócsoport felfedező", ro: "Explorare vocabular" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "wortarten_k2/nomen_k2", "wortarten_k2/artikel_k2", "wortarten_k2/verben_k2",
      "saetze_k2/satzarten", "rechtschreibung_k2/tz_z", "wortfelder_k2/tiere_k2",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer", icon: "🌟", label: { de: "Große Entdeckung",  en: "Big Review",       hu: "Nagy áttekintés",   ro: "Recapitulare mare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",  en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK2Progress(): DeutschProgress { return loadDeutschProgress(K2_SAVE_KEY, K2_ISLANDS); }
export function saveK2Progress(p: DeutschProgress): void { saveDeutschProgress(K2_SAVE_KEY, p); }
export function isMissionDoneK2(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK2(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK2(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K2_ISLANDS, islandId); }
export function isCheckpointUnlockedK2(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K2_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK2(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK2(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K2_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK2(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K2_ISLANDS, islandId); }
export function completeTestK2(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK2(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 2, count); }
export function generateCheckpointQuestionsK2(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K2_CHECKPOINT_TOPICS, 2, count); }
