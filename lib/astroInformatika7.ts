import { INFO_K7_CURRICULUM, getInfoK7Questions } from "./informatikaCurriculum7";
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

const SAVE_KEY = "astro_informatika_k7_v1";

export const INFO_K7_ISLANDS = buildAstroInformatikaIslands(7, INFO_K7_CURRICULUM);
export const INFO_K7_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K7_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K7_ISLANDS);
export const INFO_K7_TOPIC_LABELS = buildTopicLabelMap(INFO_K7_CURRICULUM);

export function loadInfoK7Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK7Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK7(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK7(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK7(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K7_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK7(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K7_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK7(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK7(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K7_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK7(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K7_ISLANDS, islandId);
}

export function completeTestInfoK7(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK7(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getInfoK7Questions, count);
}

export function generateCheckpointQuestionsInfoK7(testId: string, count = 15) {
  return generateCheckpointQuestions(INFO_K7_CHECKPOINT_TOPICS, testId, getInfoK7Questions, count);
}
