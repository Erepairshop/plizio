// lib/astroGeschichte8.ts — AstroGeschichte K8 island definitions & progress
import type { IslandDef, Lang, MathQuestion, GeschichteProgress } from "./astroGeschichte";
import {
  loadGeschichteProgress, saveGeschichteProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateGeschichteIslandQuestions, generateGeschichteCheckpointQuestions,
} from "./astroGeschichte";

export const K8_SAVE_KEY = "astrogeschichte_k8_v1";

export const K8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["imperialismus", "erster_weltkrieg_beginn", "weimarer_republik"],
  test2: ["ns_machtuebernahme", "zweiter_weltkrieg", "kalter_krieg"],
  test3: ["wiedervereinigung", "europa_einigung", "imperialismus"],
};

export const K8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Imperialism", hu: "Imperializmus", de: "Imperialismus", ro: "Imperialism" },
    icon: "🌍", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["imperialismus"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Kolonien Quiz", en: "Colony Quiz", hu: "Gyarmat kvíz", ro: "Quiz colonii" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "World War I", hu: "I. világháború", de: "Erster Weltkrieg", ro: "Primul Război Mondial" },
    icon: "⚔️", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["erster_weltkrieg_beginn", "erster_weltkrieg_verlauf"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "WWI Quiz", en: "WWI Quiz", hu: "I. vh. kvíz", ro: "Quiz Primul RM" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Weimar Republic", hu: "Weimari Köztársaság", de: "Weimarer Republik", ro: "Republica de la Weimar" },
    icon: "🏛️", color: "#FBBF24", sortRange: [1, 10],
    topicKeys: ["weimarer_republik", "weltwirtschaftskrise"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Weimar Quiz", en: "Weimar Quiz", hu: "Weimar kvíz", ro: "Quiz Weimar" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "National Socialism", hu: "Nemzetiszocializmus", de: "Nationalsozialismus", ro: "Național-socialism" },
    icon: "⚠️", color: "#991B1B", sortRange: [1, 10],
    topicKeys: ["ns_machtuebernahme", "ns_ideologie", "ns_propaganda"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "NS-Zeit Quiz", en: "NS Quiz", hu: "Náci kvíz", ro: "Quiz nazism" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "World War II", hu: "II. világháború", de: "Zweiter Weltkrieg", ro: "Al Doilea Război Mondial" },
    icon: "💥", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["zweiter_weltkrieg", "holocaust", "widerstand_ns"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "WWII Quiz", en: "WWII Quiz", hu: "II. vh. kvíz", ro: "Quiz Al Doilea RM" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Cold War", hu: "Hidegháború", de: "Kalter Krieg", ro: "Războiul Rece" },
    icon: "❄️", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["kalter_krieg"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Kalter Krieg Quiz", en: "Cold War Quiz", hu: "Hidegháború kvíz", ro: "Quiz Războiul Rece" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Reunification", hu: "Újraegyesítés", de: "Wiedervereinigung", ro: "Reunificarea" },
    icon: "🇩🇪", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["wiedervereinigung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Einheit Quiz", en: "Unity Quiz", hu: "Egység kvíz", ro: "Quiz unitate" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "European Union", hu: "Európai Unió", de: "Europäische Einigung", ro: "Uniunea Europeană" },
    icon: "🇪🇺", color: "#1E3A8A", sortRange: [1, 10],
    topicKeys: ["europa_einigung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "EU Quiz", en: "EU Quiz", hu: "EU kvíz", ro: "Quiz UE" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "20th Century Review", hu: "20. századi ismétlés", de: "20.Jhdt Wiederholung", ro: "Recapitulare secolul XX" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["imperialismus", "erster_weltkrieg_beginn", "weimarer_republik", "ns_machtuebernahme", "zweiter_weltkrieg", "kalter_krieg", "wiedervereinigung", "europa_einigung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Final-Quiz", en: "Final Quiz", hu: "Záró kvíz", ro: "Quiz final" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK8Progress(): GeschichteProgress { return loadGeschichteProgress(K8_SAVE_KEY, K8_ISLANDS); }
export function saveK8Progress(p: GeschichteProgress): void { saveGeschichteProgress(K8_SAVE_KEY, p); }
export function isMissionDoneK8(p: GeschichteProgress, i: string, m: string): boolean { return isMissionDone(p, i, m); }
export function isIslandDoneK8(p: GeschichteProgress, i: string): boolean { return isIslandDone(p, i); }
export function isIslandUnlockedK8(p: GeschichteProgress, i: string): boolean { return isIslandUnlocked(p, K8_ISLANDS, i); }
export function isCheckpointUnlockedK8(p: GeschichteProgress, t: string): boolean { return isCheckpointUnlocked(p, K8_CHECKPOINT_MAP, t); }
export function isCheckpointDoneK8(p: GeschichteProgress, t: string): boolean { return isCheckpointDone(p, t); }
export function completeMissionK8(p: GeschichteProgress, i: string, m: string, s = 1): GeschichteProgress { return completeMission(p, K8_ISLANDS, i, m, s); }
export function islandTotalStarsK8(p: GeschichteProgress, i: string): number { return islandTotalStars(p, K8_ISLANDS, i); }
export function completeTestK8(p: GeschichteProgress, t: string): GeschichteProgress { return completeTest(p, t); }
export function generateIslandQuestionsK8(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateGeschichteIslandQuestions(island, 8, count); }
export function generateCheckpointQuestionsK8(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateGeschichteCheckpointQuestions(testId, K8_CHECKPOINT_TOPICS, 8, count); }
