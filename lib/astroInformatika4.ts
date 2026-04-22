import { INFO_K4_CURRICULUM, getInfoK4Questions } from "./informatikaCurriculum4";
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

const SAVE_KEY = "astro_informatika_k4_v1";

export const INFO_K4_ISLANDS = buildAstroInformatikaIslands(4, INFO_K4_CURRICULUM);
export const INFO_K4_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K4_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K4_ISLANDS);
export const INFO_K4_TOPIC_LABELS = buildTopicLabelMap(INFO_K4_CURRICULUM);

export function loadInfoK4Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK4Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK4(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK4(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK4(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K4_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK4(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K4_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK4(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK4(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K4_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK4(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K4_ISLANDS, islandId);
}

export function completeTestInfoK4(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK4(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getInfoK4Questions, count);
}

export function generateCheckpointQuestionsInfoK4(testId: string, count = 15) {
  return generateCheckpointQuestions(INFO_K4_CHECKPOINT_TOPICS, testId, getInfoK4Questions, count);
}
