// lib/astroGeschichte5.ts — AstroGeschichte K5 island definitions & progress
import type { IslandDef, Lang, MathQuestion, GeschichteProgress } from "./astroGeschichte";
import {
  loadGeschichteProgress, saveGeschichteProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateGeschichteIslandQuestions, generateGeschichteCheckpointQuestions,
} from "./astroGeschichte";

export const K5_SAVE_KEY = "astrogeschichte_k5_v1";

export const K5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["fruehe_hochkulturen", "aegypten", "griechenland"],
  test2: ["rom_republik", "rom_kaiserreich", "germanen"],
  test3: ["voelkerwanderung", "fruehe_hochkulturen", "rom_kaiserreich"],
};

export const K5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Early Civilizations", hu: "Korai magas kultúrák", de: "Frühe Hochkulturen", ro: "Primele civilizații" },
    icon: "🏺", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["fruehe_hochkulturen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Hochkulturen Quiz", en: "Civilizations Quiz", hu: "Kultúrák kvíz", ro: "Quiz civilizații" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Ancient Egypt", hu: "Ókori Egyiptom", de: "Das alte Ägypten", ro: "Egiptul antic" },
    icon: "☥", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["aegypten"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Ägypten Quiz", en: "Egypt Quiz", hu: "Egyiptom kvíz", ro: "Quiz Egipt" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Ancient Greece", hu: "Ókori Görögország", de: "Das antike Griechenland", ro: "Grecia antică" },
    icon: "🏛️", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["griechenland"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Griechenland Quiz", en: "Greece Quiz", hu: "Görögország kvíz", ro: "Quiz Grecia" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Roman Republic", hu: "Római Köztársaság", de: "Römische Republik", ro: "Republica Romană" },
    icon: "⚔️", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["rom_republik"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Republik Quiz", en: "Republic Quiz", hu: "Köztársaság kvíz", ro: "Quiz republică" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Roman Empire", hu: "Római Császárság", de: "Römisches Kaiserreich", ro: "Imperiul Roman" },
    icon: "👑", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["rom_kaiserreich"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Kaiserreich Quiz", en: "Empire Quiz", hu: "Császárság kvíz", ro: "Quiz imperiu" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "The Germanic Peoples", hu: "A germánok", de: "Die Germanen", ro: "Popoarele germane" },
    icon: "🛡️", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["germanen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Germanen Quiz", en: "Germans Quiz", hu: "Germánok kvíz", ro: "Quiz germani" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Migration Period", hu: "Népvándorlás", de: "Völkerwanderung", ro: "Migrația popoarelor" },
    icon: "🐎", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["voelkerwanderung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Migration Quiz", en: "Migration Quiz", hu: "Vándorlás kvíz", ro: "Quiz migrație" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Transition to MA", hu: "Átmenet a középkorba", de: "Übergang Mittelalter", ro: "Tranziția spre Evul Mediu" },
    icon: "🏰", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["voelkerwanderung", "germanen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Übergang Quiz", en: "Transition Quiz", hu: "Átmenet kvíz", ro: "Quiz tranziție" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Antiquity Review", hu: "Antik ismétlés", de: "Antike Wiederholung", ro: "Recapitulare antichitate" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["fruehe_hochkulturen", "aegypten", "griechenland", "rom_republik", "rom_kaiserreich", "germanen", "voelkerwanderung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { de: "Final-Quiz", en: "Final Quiz", hu: "Záró kvíz", ro: "Quiz final" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK5Progress(): GeschichteProgress { return loadGeschichteProgress(K5_SAVE_KEY, K5_ISLANDS); }
export function saveK5Progress(p: GeschichteProgress): void { saveGeschichteProgress(K5_SAVE_KEY, p); }
export function isMissionDoneK5(p: GeschichteProgress, i: string, m: string): boolean { return isMissionDone(p, i, m); }
export function isIslandDoneK5(p: GeschichteProgress, i: string): boolean { return isIslandDone(p, i); }
export function isIslandUnlockedK5(p: GeschichteProgress, i: string): boolean { return isIslandUnlocked(p, K5_ISLANDS, i); }
export function isCheckpointUnlockedK5(p: GeschichteProgress, t: string): boolean { return isCheckpointUnlocked(p, K5_CHECKPOINT_MAP, t); }
export function isCheckpointDoneK5(p: GeschichteProgress, t: string): boolean { return isCheckpointDone(p, t); }
export function completeMissionK5(p: GeschichteProgress, i: string, m: string, s = 1): GeschichteProgress { return completeMission(p, K5_ISLANDS, i, m, s); }
export function islandTotalStarsK5(p: GeschichteProgress, i: string): number { return islandTotalStars(p, K5_ISLANDS, i); }
export function completeTestK5(p: GeschichteProgress, t: string): GeschichteProgress { return completeTest(p, t); }
export function generateIslandQuestionsK5(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateGeschichteIslandQuestions(island, 5, count); }
export function generateCheckpointQuestionsK5(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateGeschichteCheckpointQuestions(testId, K5_CHECKPOINT_TOPICS, 5, count); }
