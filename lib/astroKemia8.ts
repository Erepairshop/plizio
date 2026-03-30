import type { GameType, Lang, L10n, MissionCategory, MissionDef, IslandDef, SortRound, MatchPair } from "./astromath";
import { K8_CURRICULUM, getK8Questions } from "./kemiaCurriculum8";
import {
  type AstroKemiaProgress,
  buildAstroKemiaIslands,
  buildCheckpointMap,
  buildCheckpointTopics,
  buildTopicLabelMap,
  completeMission,
  completeTest,
  generateCheckpointQuestions,
  generateIslandQuestions,
  generateMatchPairs,
  generateSortRound,
  islandTotalStars,
  isCheckpointDone,
  isCheckpointUnlocked,
  isIslandDone,
  isIslandUnlocked,
  isMissionDone,
  loadAstroKemiaProgress,
  saveAstroKemiaProgress,
} from "./astroKemiaShared";

export type { GameType, Lang, L10n, MissionCategory, MissionDef, IslandDef, SortRound, MatchPair };

export type KemiaK8Progress = AstroKemiaProgress;
export type KemiaProgress = KemiaK8Progress;

export const KEMIA_K8_SAVE_KEY = "astro_kemia_k8_v1";
export const KEMIA_K8_ISLANDS = buildAstroKemiaIslands(8, K8_CURRICULUM);
export const KEMIA_K8_CHECKPOINT_MAP = buildCheckpointMap();
export const KEMIA_K8_CHECKPOINT_TOPICS = buildCheckpointTopics(KEMIA_K8_ISLANDS);
export const KEMIA_K8_TOPIC_LABELS = buildTopicLabelMap(K8_CURRICULUM);

export function loadKemiaK8Progress(): KemiaK8Progress {
  return loadAstroKemiaProgress(KEMIA_K8_SAVE_KEY);
}

export function saveKemiaK8Progress(progress: KemiaK8Progress): void {
  saveAstroKemiaProgress(KEMIA_K8_SAVE_KEY, progress);
}

export function isMissionDoneKemiaK8(progress: KemiaK8Progress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneKemiaK8(progress: KemiaK8Progress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedKemiaK8(progress: KemiaK8Progress, islandId: string): boolean {
  return isIslandUnlocked(progress, KEMIA_K8_ISLANDS, islandId);
}

export function isCheckpointUnlockedKemiaK8(progress: KemiaK8Progress, testId: string): boolean {
  return isCheckpointUnlocked(progress, KEMIA_K8_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneKemiaK8(progress: KemiaK8Progress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionKemiaK8(progress: KemiaK8Progress, islandId: string, missionId: string, stars = 1): KemiaK8Progress {
  return completeMission(progress, KEMIA_K8_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsKemiaK8(progress: KemiaK8Progress, islandId: string): number {
  return islandTotalStars(progress, KEMIA_K8_ISLANDS, islandId);
}

export function completeTestKemiaK8(progress: KemiaK8Progress, testId: string): KemiaK8Progress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsKemiaK8(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getK8Questions, count);
}

export function generateCheckpointQuestionsKemiaK8(testId: string, count = 15) {
  return generateCheckpointQuestions(KEMIA_K8_CHECKPOINT_TOPICS, testId, getK8Questions, count);
}

export function generateSortRoundKemiaK8(range: [number, number]): SortRound {
  return generateSortRound(range);
}

export function generateMatchPairsKemiaK8(questions: { question: string; correctAnswer: string | number }[]): MatchPair[] {
  return generateMatchPairs(questions as any);
}
