import { INFO_K3_CURRICULUM, getInfoK3Questions } from "./informatikaCurriculum3";
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

const SAVE_KEY = "astro_informatika_k3_v1";

export const INFO_K3_ISLANDS = buildAstroInformatikaIslands(3, INFO_K3_CURRICULUM);
export const INFO_K3_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K3_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K3_ISLANDS);
export const INFO_K3_TOPIC_LABELS = buildTopicLabelMap(INFO_K3_CURRICULUM);

export function loadInfoK3Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK3Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK3(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK3(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK3(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K3_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK3(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K3_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK3(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK3(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K3_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK3(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K3_ISLANDS, islandId);
}

export function completeTestInfoK3(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK3(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getInfoK3Questions, count);
}

export function generateCheckpointQuestionsInfoK3(testId: string, count = 15) {
  return generateCheckpointQuestions(INFO_K3_CHECKPOINT_TOPICS, testId, getInfoK3Questions, count);
}
