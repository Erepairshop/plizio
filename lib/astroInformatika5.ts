import { INFO_K5_CURRICULUM, getInfoK5Questions } from "./informatikaCurriculum5";
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

const SAVE_KEY = "astro_informatika_k5_v1";

export const INFO_K5_ISLANDS = buildAstroInformatikaIslands(5, INFO_K5_CURRICULUM);
export const INFO_K5_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K5_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K5_ISLANDS);
export const INFO_K5_TOPIC_LABELS = buildTopicLabelMap(INFO_K5_CURRICULUM);

export function loadInfoK5Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK5Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK5(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK5(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK5(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K5_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK5(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K5_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK5(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK5(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K5_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK5(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K5_ISLANDS, islandId);
}

export function completeTestInfoK5(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK5(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getInfoK5Questions, count);
}

export function generateCheckpointQuestionsInfoK5(testId: string, count = 15) {
  return generateCheckpointQuestions(INFO_K5_CHECKPOINT_TOPICS, testId, getInfoK5Questions, count);
}
