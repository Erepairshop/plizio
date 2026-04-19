import { INFO_K6_CURRICULUM, getInfoK6Questions } from "./informatikaCurriculum6";
import { buildAstroInformatikaIslands, buildInformatikaCheckpointMap } from "./astroInformatikaShared";
import type { IslandDef } from "./astroInformatikaShared";
export type { IslandDef, MissionDef, Lang, MissionCategory } from "./astroInformatikaShared";
import {
  type AstroKemiaProgress,
  buildCheckpointTopics,
  buildTopicLabelMap,
  completeMission,
  completeTest,
  generateCheckpointQuestions,
  generateIslandQuestions,
  islandTotalStars,
  isCheckpointDone,
  isCheckpointUnlocked,
  isIslandDone,
  isIslandUnlocked,
  isMissionDone,
  loadAstroKemiaProgress,
  saveAstroKemiaProgress,
} from "./astroKemiaShared";

export type InformatikaProgress = AstroKemiaProgress;

const SAVE_KEY = "astro_informatika_k6_v1";

export const INFO_K6_ISLANDS = buildAstroInformatikaIslands(6, INFO_K6_CURRICULUM);
export const INFO_K6_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K6_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K6_ISLANDS);
export const INFO_K6_TOPIC_LABELS = buildTopicLabelMap(INFO_K6_CURRICULUM);

export function loadInfoK6Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK6Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK6(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK6(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK6(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K6_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK6(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K6_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK6(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK6(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K6_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK6(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K6_ISLANDS, islandId);
}

export function completeTestInfoK6(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK6(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getInfoK6Questions, count);
}

export function generateCheckpointQuestionsInfoK6(testId: string, count = 15) {
  return generateCheckpointQuestions(INFO_K6_CHECKPOINT_TOPICS, testId, getInfoK6Questions, count);
}
