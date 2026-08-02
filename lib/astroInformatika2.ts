import { INFO_K2_CURRICULUM, getInfoK2Questions } from "./informatikaCurriculum2";
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

const SAVE_KEY = "astro_informatika_k2_v1";

export const INFO_K2_ISLANDS = buildAstroInformatikaIslands(2, INFO_K2_CURRICULUM);
export const INFO_K2_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K2_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K2_ISLANDS);
export const INFO_K2_TOPIC_LABELS = buildTopicLabelMap(INFO_K2_CURRICULUM);

export function loadInfoK2Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK2Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK2(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK2(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK2(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K2_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK2(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K2_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK2(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK2(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K2_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK2(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K2_ISLANDS, islandId);
}

export function completeTestInfoK2(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK2(island: IslandDef, count = 10, countryCode = "HU") {
  return generateIslandQuestions(island, (ids, amount) => getInfoK2Questions(ids, amount, countryCode), count);
}

export function generateCheckpointQuestionsInfoK2(testId: string, count = 15, countryCode = "HU") {
  return generateCheckpointQuestions(INFO_K2_CHECKPOINT_TOPICS, testId, (ids, amount) => getInfoK2Questions(ids, amount, countryCode), count);
}
