// lib/astroGeschichte7.ts — AstroGeschichte K7 island definitions & progress
import type { IslandDef, Lang, MathQuestion, GeschichteProgress } from "./astroGeschichte";
import {
  loadGeschichteProgress, saveGeschichteProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateGeschichteIslandQuestions, generateGeschichteCheckpointQuestions,
} from "./astroGeschichte";

export const K7_SAVE_KEY = "astrogeschichte_k7_v1";

export const K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["absolutismus_frankreich", "aufklaerung", "amerikanische_revolution"],
  test2: ["ursachen_franz_rev", "aufstieg_napoleon", "wiener_kongress"],
  test3: ["industrielle_revolution_anfang", "gesellschaftlicher_wandel", "renaissance"],
};

export const K7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Absolutism", hu: "Abszolutizmus", de: "Absolutismus", ro: "Absolutism" },
    icon: "☀️", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["absolutismus_frankreich", "versailler_hofleben", "merkantilismus"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Ludwig Quiz", en: "Louis XIV Quiz", hu: "Lajos kvíz", ro: "Quiz Ludovic" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Enlightenment", hu: "Felvilágosodás", de: "Aufklärung", ro: "Iluminism" },
    icon: "🌟", color: "#FBBF24", sortRange: [1, 10],
    topicKeys: ["aufklaerung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Vernunft Quiz", en: "Reason Quiz", hu: "Ész kvíz", ro: "Quiz rațiune" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "American Revolution", hu: "Amerikai forradalom", de: "Amerikanische Revolution", ro: "Revoluția Americană" },
    icon: "🗽", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["amerikanische_revolution"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "USA Quiz", en: "USA Quiz", hu: "USA kvíz", ro: "Quiz SUA" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "French Revolution", hu: "Francia forradalom", de: "Französische Revolution", ro: "Revoluția Franceză" },
    icon: "🔥", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["ursachen_franz_rev", "sturm_bastille", "schreckensherrschaft"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Revolutions Quiz", en: "Revolution Quiz", hu: "Forradalom kvíz", ro: "Quiz revoluție" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Napoleon", hu: "Napóleon", de: "Napoleon", ro: "Napoleon" },
    icon: "🎩", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["aufstieg_napoleon", "ende_napoleon"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Napoleon Quiz", en: "Napoleon Quiz", hu: "Napóleon kvíz", ro: "Quiz Napoleon" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Congress of Vienna", hu: "Bécsi kongresszus", de: "Wiener Kongress", ro: "Congresul de la Viena" },
    icon: "🤝", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["wiener_kongress"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Kongress Quiz", en: "Congress Quiz", hu: "Kongresszus kvíz", ro: "Quiz congres" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Industrialization", hu: "Iparosodás", de: "Industrialisierung", ro: "Industrializarea" },
    icon: "🏭", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["industrielle_revolution_anfang"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Industrie Quiz", en: "Industry Quiz", hu: "Ipar kvíz", ro: "Quiz industrie" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Vormärz & Revolution", hu: "Vormärz és forradalom", de: "Vormärz & Revolution", ro: "Vormärz și revoluția" },
    icon: "🇩🇪", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["gesellschaftlicher_wandel"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "1848 Quiz", en: "1848 Quiz", hu: "1848 kvíz", ro: "Quiz 1848" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Modern Era Review", hu: "Újkori ismétlés", de: "Neuzeit Wiederholung", ro: "Recapitulare epoca modernă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["renaissance", "reformation", "absolutismus_frankreich", "aufklaerung", "franzoesische_revolution_anfang", "industrielle_revolution_anfang"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Final-Quiz", en: "Final Quiz", hu: "Záró kvíz", ro: "Quiz final" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK7Progress(): GeschichteProgress { return loadGeschichteProgress(K7_SAVE_KEY, K7_ISLANDS); }
export function saveK7Progress(p: GeschichteProgress): void { saveGeschichteProgress(K7_SAVE_KEY, p); }
export function isMissionDoneK7(p: GeschichteProgress, i: string, m: string): boolean { return isMissionDone(p, i, m); }
export function isIslandDoneK7(p: GeschichteProgress, i: string): boolean { return isIslandDone(p, i); }
export function isIslandUnlockedK7(p: GeschichteProgress, i: string): boolean { return isIslandUnlocked(p, K7_ISLANDS, i); }
export function isCheckpointUnlockedK7(p: GeschichteProgress, t: string): boolean { return isCheckpointUnlocked(p, K7_CHECKPOINT_MAP, t); }
export function isCheckpointDoneK7(p: GeschichteProgress, t: string): boolean { return isCheckpointDone(p, t); }
export function completeMissionK7(p: GeschichteProgress, i: string, m: string, s = 1): GeschichteProgress { return completeMission(p, K7_ISLANDS, i, m, s); }
export function islandTotalStarsK7(p: GeschichteProgress, i: string): number { return islandTotalStars(p, K7_ISLANDS, i); }
export function completeTestK7(p: GeschichteProgress, t: string): GeschichteProgress { return completeTest(p, t); }
export function generateIslandQuestionsK7(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateGeschichteIslandQuestions(island, 7, count); }
export function generateCheckpointQuestionsK7(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateGeschichteCheckpointQuestions(testId, K7_CHECKPOINT_TOPICS, 7, count); }
