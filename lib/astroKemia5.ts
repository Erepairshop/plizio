import type { GameType, Lang, L10n, MissionCategory, MissionDef, IslandDef, SortRound, MatchPair } from "./astromath";
import { K5_CURRICULUM, getK5Questions } from "./kemiaCurriculum5";
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

export type KemiaK5Progress = AstroKemiaProgress;
export type KemiaProgress = KemiaK5Progress;

export const KEMIA_K5_SAVE_KEY = "astro_kemia_k5_v1";
export const KEMIA_K5_ISLANDS = buildAstroKemiaIslands(5, K5_CURRICULUM);
export const KEMIA_K5_CHECKPOINT_MAP = buildCheckpointMap();
export const KEMIA_K5_CHECKPOINT_TOPICS = buildCheckpointTopics(KEMIA_K5_ISLANDS);
export const KEMIA_K5_TOPIC_LABELS = buildTopicLabelMap(K5_CURRICULUM);

export function loadKemiaK5Progress(): KemiaK5Progress {
  return loadAstroKemiaProgress(KEMIA_K5_SAVE_KEY);
}

export function saveKemiaK5Progress(progress: KemiaK5Progress): void {
  saveAstroKemiaProgress(KEMIA_K5_SAVE_KEY, progress);
}

export function isMissionDoneKemiaK5(progress: KemiaK5Progress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneKemiaK5(progress: KemiaK5Progress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedKemiaK5(progress: KemiaK5Progress, islandId: string): boolean {
  return isIslandUnlocked(progress, KEMIA_K5_ISLANDS, islandId);
}

export function isCheckpointUnlockedKemiaK5(progress: KemiaK5Progress, testId: string): boolean {
  return isCheckpointUnlocked(progress, KEMIA_K5_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneKemiaK5(progress: KemiaK5Progress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionKemiaK5(progress: KemiaK5Progress, islandId: string, missionId: string, stars = 1): KemiaK5Progress {
  return completeMission(progress, KEMIA_K5_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsKemiaK5(progress: KemiaK5Progress, islandId: string): number {
  return islandTotalStars(progress, KEMIA_K5_ISLANDS, islandId);
}

export function completeTestKemiaK5(progress: KemiaK5Progress, testId: string): KemiaK5Progress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsKemiaK5(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getK5Questions, count);
}

export function generateCheckpointQuestionsKemiaK5(testId: string, count = 15) {
  return generateCheckpointQuestions(KEMIA_K5_CHECKPOINT_TOPICS, testId, getK5Questions, count);
}

export function generateSortRoundKemiaK5(range: [number, number]): SortRound {
  return generateSortRound(range);
}

export function generateMatchPairsKemiaK5(questions: { question: string; correctAnswer: string | number }[]): MatchPair[] {
  return generateMatchPairs(questions as any);
}
