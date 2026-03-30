import type { GameType, Lang, L10n, MissionCategory, MissionDef, IslandDef, SortRound, MatchPair } from "./astromath";
import { K6_CURRICULUM, getK6Questions } from "./kemiaCurriculum6";
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

export type KemiaK6Progress = AstroKemiaProgress;
export type KemiaProgress = KemiaK6Progress;

export const KEMIA_K6_SAVE_KEY = "astro_kemia_k6_v1";
export const KEMIA_K6_ISLANDS = buildAstroKemiaIslands(6, K6_CURRICULUM);
export const KEMIA_K6_CHECKPOINT_MAP = buildCheckpointMap();
export const KEMIA_K6_CHECKPOINT_TOPICS = buildCheckpointTopics(KEMIA_K6_ISLANDS);
export const KEMIA_K6_TOPIC_LABELS = buildTopicLabelMap(K6_CURRICULUM);

export function loadKemiaK6Progress(): KemiaK6Progress {
  return loadAstroKemiaProgress(KEMIA_K6_SAVE_KEY);
}

export function saveKemiaK6Progress(progress: KemiaK6Progress): void {
  saveAstroKemiaProgress(KEMIA_K6_SAVE_KEY, progress);
}

export function isMissionDoneKemiaK6(progress: KemiaK6Progress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneKemiaK6(progress: KemiaK6Progress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedKemiaK6(progress: KemiaK6Progress, islandId: string): boolean {
  return isIslandUnlocked(progress, KEMIA_K6_ISLANDS, islandId);
}

export function isCheckpointUnlockedKemiaK6(progress: KemiaK6Progress, testId: string): boolean {
  return isCheckpointUnlocked(progress, KEMIA_K6_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneKemiaK6(progress: KemiaK6Progress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionKemiaK6(progress: KemiaK6Progress, islandId: string, missionId: string, stars = 1): KemiaK6Progress {
  return completeMission(progress, KEMIA_K6_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsKemiaK6(progress: KemiaK6Progress, islandId: string): number {
  return islandTotalStars(progress, KEMIA_K6_ISLANDS, islandId);
}

export function completeTestKemiaK6(progress: KemiaK6Progress, testId: string): KemiaK6Progress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsKemiaK6(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getK6Questions, count);
}

export function generateCheckpointQuestionsKemiaK6(testId: string, count = 15) {
  return generateCheckpointQuestions(KEMIA_K6_CHECKPOINT_TOPICS, testId, getK6Questions, count);
}

export function generateSortRoundKemiaK6(range: [number, number]): SortRound {
  return generateSortRound(range);
}

export function generateMatchPairsKemiaK6(questions: { question: string; correctAnswer: string | number }[]): MatchPair[] {
  return generateMatchPairs(questions as any);
}
