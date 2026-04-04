// lib/astroGeographie7.ts
import type { IslandDef, Lang, MathQuestion, GeographieProgress } from "./astroGeographie";
import {
  loadGeographieProgress, saveGeographieProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateGeographieIslandQuestions, generateGeographieCheckpointQuestions,
} from "./astroGeographie";

export const K7_SAVE_KEY = "astrogeographie_k7_v2";

export const K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["geodynamics_internal", "weather_climate_dynamics", "population_migration"],
  test2: ["north_america_focus", "asia_dynamics", "environment_global_k7"],
  test3: ["geodynamics_internal", "population_migration", "environment_global_k7"],
};

export const K7_ISLANDS: IslandDef[] = [
  { id: "i1", name: { en: "Island 1", hu: "Sziget 1", de: "Insel 1", ro: "Insula 1" }, icon: "🗺️", color: "#F59E0B", sortRange: [1, 10], topicKeys: ["geodynamics_internal"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 160, svgY: 530 },
  { id: "i2", name: { en: "Island 2", hu: "Sziget 2", de: "Insel 2", ro: "Insula 2" }, icon: "🌍", color: "#EF4444", sortRange: [1, 10], topicKeys: ["weather_climate_dynamics"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 80, svgY: 440 },
  { id: "i3", name: { en: "Island 3", hu: "Sziget 3", de: "Insel 3", ro: "Insula 3" }, icon: "🧭", color: "#10B981", sortRange: [1, 10], topicKeys: ["population_migration"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 240, svgY: 360 },
  { id: "i4", name: { en: "Island 4", hu: "Sziget 4", de: "Insel 4", ro: "Insula 4" }, icon: "🌋", color: "#F59E0B", sortRange: [1, 10], topicKeys: ["north_america_focus"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 90, svgY: 270 },
  { id: "i5", name: { en: "Island 5", hu: "Sziget 5", de: "Insel 5", ro: "Insula 5" }, icon: "🏜️", color: "#6366F1", sortRange: [1, 10], topicKeys: ["asia_dynamics"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 220, svgY: 195 },
  { id: "i6", name: { en: "Island 6", hu: "Sziget 6", de: "Insel 6", ro: "Insula 6" }, icon: "🏞️", color: "#EC4899", sortRange: [1, 10], topicKeys: ["environment_global_k7"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 100, svgY: 125 },
  { id: "i7", name: { en: "Island 7", hu: "Sziget 7", de: "Insel 7", ro: "Insula 7" }, icon: "🏔️", color: "#14B8A6", sortRange: [1, 10], topicKeys: ["geodynamics_internal"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 230, svgY: 55 },
  { id: "i8", name: { en: "Island 8", hu: "Sziget 8", de: "Insel 8", ro: "Insula 8" }, icon: "🏙️", color: "#A855F7", sortRange: [1, 10], topicKeys: ["population_migration"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 80, svgY: -20 },
  { id: "i9", name: { en: "Review", hu: "Ismétlés", de: "Wiederholung", ro: "Recapitulare" }, icon: "🌟", color: "#4ECDC4", sortRange: [1, 10], topicKeys: ["environment_global_k7"], missions: [
      { id: "m1", category: "explore", gameType: "geographie-explore", icon: "🪐", label: { de: "Final-Quiz", en: "Final Quiz", hu: "Záró kvíz", ro: "Quiz final" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { de: "Üben", en: "Practice", hu: "Gyakorlás", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Challenge", en: "Challenge", hu: "Kihívás", ro: "Provocare" } }
    ], svgX: 190, svgY: -90 },
];

export function loadK7Progress(): GeographieProgress { return loadGeographieProgress(K7_SAVE_KEY, K7_ISLANDS); }
export function saveK7Progress(p: GeographieProgress): void { saveGeographieProgress(K7_SAVE_KEY, p); }
export function isMissionDoneK7(p: GeographieProgress, i: string, m: string): boolean { return isMissionDone(p, i, m); }
export function isIslandDoneK7(p: GeographieProgress, i: string): boolean { return isIslandDone(p, i); }
export function isIslandUnlockedK7(p: GeographieProgress, i: string): boolean { return isIslandUnlocked(p, K7_ISLANDS, i); }
export function isCheckpointUnlockedK7(p: GeographieProgress, t: string): boolean { return isCheckpointUnlocked(p, K7_CHECKPOINT_MAP, t); }
export function isCheckpointDoneK7(p: GeographieProgress, t: string): boolean { return isCheckpointDone(p, t); }
export function completeMissionK7(p: GeographieProgress, i: string, m: string, s = 1): GeographieProgress { return completeMission(p, K7_ISLANDS, i, m, s); }
export function islandTotalStarsK7(p: GeographieProgress, i: string): number { return islandTotalStars(p, K7_ISLANDS, i); }
export function completeTestK7(p: GeographieProgress, t: string): GeographieProgress { return completeTest(p, t); }
export function generateIslandQuestionsK7(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateGeographieIslandQuestions(island, 7, count); }
export function generateCheckpointQuestionsK7(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateGeographieCheckpointQuestions(testId, K7_CHECKPOINT_TOPICS, 7, count); }
