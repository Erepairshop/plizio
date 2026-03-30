import type { GameType, Lang, L10n, MissionCategory, MissionDef, IslandDef, SortRound, MatchPair } from "./astromath";
import { K7_CURRICULUM, getK7Questions } from "./kemiaCurriculum7";
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

export type KemiaK7Progress = AstroKemiaProgress;
export type KemiaProgress = KemiaK7Progress;

export const KEMIA_K7_SAVE_KEY = "astro_kemia_k7_v1";
export const KEMIA_K7_ISLANDS = buildAstroKemiaIslands(7, K7_CURRICULUM);
export const KEMIA_K7_CHECKPOINT_MAP = buildCheckpointMap();
export const KEMIA_K7_CHECKPOINT_TOPICS = buildCheckpointTopics(KEMIA_K7_ISLANDS);
export const KEMIA_K7_TOPIC_LABELS = buildTopicLabelMap(K7_CURRICULUM);

export function loadKemiaK7Progress(): KemiaK7Progress {
  return loadAstroKemiaProgress(KEMIA_K7_SAVE_KEY);
}

export function saveKemiaK7Progress(progress: KemiaK7Progress): void {
  saveAstroKemiaProgress(KEMIA_K7_SAVE_KEY, progress);
}

export function isMissionDoneKemiaK7(progress: KemiaK7Progress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneKemiaK7(progress: KemiaK7Progress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedKemiaK7(progress: KemiaK7Progress, islandId: string): boolean {
  return isIslandUnlocked(progress, KEMIA_K7_ISLANDS, islandId);
}

export function isCheckpointUnlockedKemiaK7(progress: KemiaK7Progress, testId: string): boolean {
  return isCheckpointUnlocked(progress, KEMIA_K7_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneKemiaK7(progress: KemiaK7Progress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionKemiaK7(progress: KemiaK7Progress, islandId: string, missionId: string, stars = 1): KemiaK7Progress {
  return completeMission(progress, KEMIA_K7_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsKemiaK7(progress: KemiaK7Progress, islandId: string): number {
  return islandTotalStars(progress, KEMIA_K7_ISLANDS, islandId);
}

export function completeTestKemiaK7(progress: KemiaK7Progress, testId: string): KemiaK7Progress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsKemiaK7(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getK7Questions, count);
}

export function generateCheckpointQuestionsKemiaK7(testId: string, count = 15) {
  return generateCheckpointQuestions(KEMIA_K7_CHECKPOINT_TOPICS, testId, getK7Questions, count);
}

export function generateSortRoundKemiaK7(range: [number, number]): SortRound {
  return generateSortRound(range);
}

export function generateMatchPairsKemiaK7(questions: { question: string; correctAnswer: string | number }[]): MatchPair[] {
  return generateMatchPairs(questions as any);
}
