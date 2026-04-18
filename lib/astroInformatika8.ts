import { INFO_K8_CURRICULUM, getInfoK8Questions } from "./informatikaCurriculum8";
import { buildAstroInformatikaIslands, buildInformatikaCheckpointMap } from "./astroInformatikaShared";
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

const SAVE_KEY = "astro_informatika_k8_v1";

export const INFO_K8_ISLANDS = buildAstroInformatikaIslands(8, INFO_K8_CURRICULUM);
export const INFO_K8_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K8_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K8_ISLANDS);
export const INFO_K8_TOPIC_LABELS = buildTopicLabelMap(INFO_K8_CURRICULUM);

export function loadInfoK8Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK8Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK8(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK8(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK8(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K8_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK8(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K8_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK8(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK8(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K8_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK8(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K8_ISLANDS, islandId);
}

export function completeTestInfoK8(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK8(island: IslandDef, count = 10) {
  return generateIslandQuestions(island, getInfoK8Questions, count);
}

export function generateCheckpointQuestionsInfoK8(testId: string, count = 15) {
  return generateCheckpointQuestions(INFO_K8_CHECKPOINT_TOPICS, testId, getInfoK8Questions, count);
}
