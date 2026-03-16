// lib/astroDeutsch3.ts — AstroDeutsch K3 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K3_SAVE_KEY = "astrodeutsch_k3_v1";

export const K3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "wortarten_k3/plural", "wortarten_k3/wortfamilien_k3",
    "wortarten_k3/verben_k3", "wortarten_k3/trennbare_verben_k3",
  ],
  test2: [
    "wortarten_k3/adjektive_gegenteil", "wortarten_k3/steigerung_k3",
    "satzglieder_k3/subjekt", "satzglieder_k3/praedikat",
    "satzglieder_k3/akkusativ_obj",
  ],
  test3: [
    "satzglieder_k3/zeitformen_komplett_k3", "rechtschreibung_k3/ie_ih",
    "rechtschreibung_k3/doppelkonsonanten", "rechtschreibung_k3/ss_sz",
  ],
};

export const K3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Nouns: Plural & Families", hu: "Főnevek: Többes szám & Szócsaládok", de: "Nomen: Plural & Wortfamilien", ro: "Substantive: Plural & Familii" },
    icon: "📚", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["wortarten_k3/plural", "wortarten_k3/wortfamilien_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Plural-Quiz",       en: "Plural Quiz",      hu: "Többes szám kvíz",  ro: "Quiz plural"       } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Master Verbs", hu: "Igék mesterfokon", de: "Verben meistern", ro: "Verbe avansate" },
    icon: "⚡", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["wortarten_k3/verben_k3", "wortarten_k3/trennbare_verben_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Verben-Quiz",       en: "Verb Quiz",        hu: "Ige kvíz",          ro: "Quiz verbe"        } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adjectives & Comparison", hu: "Melléknevek & Fokozás", de: "Adjektive & Steigerung", ro: "Adjective & Gradare" },
    icon: "🎭", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["wortarten_k3/adjektive_gegenteil", "wortarten_k3/steigerung_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Adjektiv-Quiz",     en: "Adjective Quiz",   hu: "Melléknév kvíz",    ro: "Quiz adjective"    } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Subject & Predicate", hu: "Alany & Állítmány", de: "Subjekt & Prädikat", ro: "Subiect & Predicat" },
    icon: "🔍", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["satzglieder_k3/subjekt", "satzglieder_k3/praedikat", "satzglieder_k3/satzbau_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Satzglieder-Quiz",  en: "Sentence Parts Quiz", hu: "Mondatrész kvíz",  ro: "Quiz propoziție"   } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",          hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",          hu: "Fekete lyuk",       ro: "Gaură neagră"    } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Objects & Tenses", hu: "Tárgy & Igeidők", de: "Objekte & Zeitformen", ro: "Complemente & Timpuri" },
    icon: "⏳", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["satzglieder_k3/akkusativ_obj", "satzglieder_k3/zeitformen_komplett_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Zeitformen-Quiz",   en: "Tense Quiz",       hu: "Igeidő kvíz",       ro: "Quiz timpuri"      } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Past Tense & Direct Speech", hu: "Múlt idő & Egyenes beszéd", de: "Vergangenheit & Rede", ro: "Trecut & Vorbire directă" },
    icon: "💬", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["satzglieder_k3/praeteritum_k3", "satzglieder_k3/direkte_rede_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Präteritum-Quiz",   en: "Past Tense Quiz",  hu: "Múlt idő kvíz",     ro: "Quiz trecut"       } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Spelling I", hu: "Helyesírás I", de: "Rechtschreibung I", ro: "Ortografie I" },
    icon: "✍️", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k3/ie_ih", "rechtschreibung_k3/doppelkonsonanten", "rechtschreibung_k3/ss_sz"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Rechtschreib-Quiz", en: "Spelling Quiz",    hu: "Helyesírás kvíz",   ro: "Quiz ortografie"   } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Spelling II", hu: "Helyesírás II", de: "Rechtschreibung II", ro: "Ortografie II" },
    icon: "📌", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k3/dehnung_h_k3", "rechtschreibung_k3/komma_aufzaehlung_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Rechtschreib-Quiz", en: "Spelling Quiz",    hu: "Helyesírás kvíz",   ro: "Quiz ortografie"   } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "wortarten_k3/plural", "wortarten_k3/verben_k3", "wortarten_k3/adjektive_gegenteil",
      "satzglieder_k3/subjekt", "rechtschreibung_k3/ie_ih", "satzglieder_k3/zeitformen_komplett_k3",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz", icon: "🪐", label: { de: "Final-Quiz",        en: "Final Quiz",       hu: "Záró kvíz",         ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK3Progress(): DeutschProgress { return loadDeutschProgress(K3_SAVE_KEY, K3_ISLANDS); }
export function saveK3Progress(p: DeutschProgress): void { saveDeutschProgress(K3_SAVE_KEY, p); }
export function isMissionDoneK3(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK3(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK3(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K3_ISLANDS, islandId); }
export function isCheckpointUnlockedK3(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K3_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK3(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK3(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K3_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK3(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K3_ISLANDS, islandId); }
export function completeTestK3(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK3(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 3, count); }
export function generateCheckpointQuestionsK3(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K3_CHECKPOINT_TOPICS, 3, count); }
