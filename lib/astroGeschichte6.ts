// lib/astroGeschichte6.ts — AstroGeschichte K6 island definitions & progress
import type { IslandDef, Lang, MathQuestion, GeschichteProgress } from "./astroGeschichte";
import {
  buildGeschichteSaveKey,
  createGeschichteVariantContent,
  loadGeschichteProgress, saveGeschichteProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateGeschichteIslandQuestions, generateGeschichteCheckpointQuestions, getGeschichteVariantProfile,
} from "./astroGeschichte";

export const K6_SAVE_KEY = "astrogeschichte_k6_v1";

export const K6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["frankenreich_chlodwig", "karl_der_grosse", "staendegesellschaft_lehnswesen"],
  test2: ["kreuzzuege", "stadtleben", "islam_entstehung"],
  test3: ["schwarzer_tod", "investiturstreit", "karl_der_grosse"],
};

export const K6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Early Middle Ages", hu: "Korai középkor", de: "Frühes Mittelalter", ro: "Evul Mediu timpuriu" },
    icon: "👑", color: "#8B5CF6", sortRange: [1, 10],
    topicKeys: ["frankenreich_chlodwig"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Franken Quiz", en: "Franks Quiz", hu: "Frankok kvíz", ro: "Quiz franci" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "category-rush",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "timeline-slider", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Charlemagne", hu: "Nagy Károly", de: "Karl der Große", ro: "Carol cel Mare" },
    icon: "🏰", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["karl_der_grosse", "verwaltung_frankenreich"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Karl Quiz", en: "Charlemagne Quiz", hu: "Károly kvíz", ro: "Quiz Carol" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "speed-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "fill-blank", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Feudalism", hu: "Hűbériség", de: "Lehnswesen", ro: "Feudalism" },
    icon: "🛡️", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["staendegesellschaft_lehnswesen", "rittertum", "burgen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Lehnswesen Quiz", en: "Feudalism Quiz", hu: "Hűbériség kvíz", ro: "Quiz feudalism" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "true-false-blitz",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "mcq4-explanation", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "The Crusades", hu: "A keresztes hadjáratok", de: "Die Kreuzzüge", ro: "Cruciadele" },
    icon: "⚔️", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["kreuzzuege", "folgen_kreuzzuege"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Kreuzzüge Quiz", en: "Crusades Quiz", hu: "Hadjáratok kvíz", ro: "Quiz cruciade" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "word-chain",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "sort-puzzle", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "City Life", hu: "Városi élet", de: "Stadtleben", ro: "Viața la oraș" },
    icon: "🏠", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["stadtentstehung", "zuenfte", "hanse", "stadtleben"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Stadt Quiz", en: "City Quiz", hu: "Város kvíz", ro: "Quiz oraș" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "category-rush",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "gap-fill-story", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Golden Age of Islam", hu: "Az iszlám aranykora", de: "Islam Goldenes Zeitalter", ro: "Epoca de aur a islamului" },
    icon: "🌙", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["islam_entstehung", "islam_expansion", "kulturkontakt"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Islam Quiz", en: "Islam Quiz", hu: "Iszlám kvíz", ro: "Quiz islam" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "speed-match",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "timeline-slider", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Late MA Crisis", hu: "Késő középkori válság", de: "Krise des Spätmittelalters", ro: "Criza Evului Mediu" },
    icon: "☣️", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["schwarzer_tod"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Krise Quiz", en: "Crisis Quiz", hu: "Válság kvíz", ro: "Quiz criză" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "true-false-blitz",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "fill-blank", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Emperor & Papacy", hu: "Császár és pápa", de: "Investiturstreit", ro: "Imperiul și Papalitatea" },
    icon: "⛪", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["investiturstreit", "barbarossa", "goldene_bulle"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Kirche Quiz", en: "Church Quiz", hu: "Egyház kvíz", ro: "Quiz biserică" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "word-chain",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "mcq4-explanation", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Medieval Review", hu: "Középkori ismétlés", de: "Mittelalter Wiederholung", ro: "Recapitulare medievală" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["karl_der_grosse", "staendegesellschaft_lehnswesen", "kreuzzuege", "stadtleben", "investiturstreit", "schwarzer_tod"],
    missions: [
      { id: "m1", category: "explore",   gameType: "geschichte-explore",  icon: "🪐", label: { de: "Final-Quiz", en: "Final Quiz", hu: "Záró kvíz", ro: "Quiz final" } },
      { id: "m2", category: "build",     gameType: "m2", gameKey: "category-rush",  icon: "⭐", label: { de: "Sterne verbinden", en: "Star Match", hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "m3", gameKey: "sort-puzzle", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function getK6ProgressKey(variantId?: string): string { return buildGeschichteSaveKey(K6_SAVE_KEY, variantId); }
export function getK6VariantContent(lang: Lang) { return createGeschichteVariantContent(6, lang, K6_ISLANDS, K6_CHECKPOINT_MAP, K6_CHECKPOINT_TOPICS); }
export function loadK6Progress(variantId?: string): GeschichteProgress { return loadGeschichteProgress(getK6ProgressKey(variantId), K6_ISLANDS); }
export function saveK6Progress(p: GeschichteProgress, variantId?: string): void { saveGeschichteProgress(getK6ProgressKey(variantId), p); }
export function isMissionDoneK6(p: GeschichteProgress, i: string, m: string): boolean { return isMissionDone(p, i, m); }
export function isIslandDoneK6(p: GeschichteProgress, i: string): boolean { return isIslandDone(p, i); }
export function isIslandUnlockedK6(p: GeschichteProgress, i: string): boolean { return isIslandUnlocked(p, K6_ISLANDS, i); }
export function isCheckpointUnlockedK6(p: GeschichteProgress, t: string): boolean { return isCheckpointUnlocked(p, K6_CHECKPOINT_MAP, t); }
export function isCheckpointDoneK6(p: GeschichteProgress, t: string): boolean { return isCheckpointDone(p, t); }
export function completeMissionK6(p: GeschichteProgress, i: string, m: string, s = 1): GeschichteProgress { return completeMission(p, K6_ISLANDS, i, m, s); }
export function islandTotalStarsK6(p: GeschichteProgress, i: string): number { return islandTotalStars(p, K6_ISLANDS, i); }
export function completeTestK6(p: GeschichteProgress, t: string): GeschichteProgress { return completeTest(p, t); }
export function generateIslandQuestionsK6(island: IslandDef, lang: Lang, count = 10): MathQuestion[] { return generateGeschichteIslandQuestions(island, 6, count, getGeschichteVariantProfile(lang)); }
export function generateCheckpointQuestionsK6(testId: string, lang: Lang, count = 10, checkpointTopics: Record<string, string[]> = K6_CHECKPOINT_TOPICS): MathQuestion[] { return generateGeschichteCheckpointQuestions(testId, checkpointTopics, 6, count, getGeschichteVariantProfile(lang)); }
