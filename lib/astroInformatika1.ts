import { INFO_K1_CURRICULUM, getInfoK1Questions } from "./informatikaCurriculum1";
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

const SAVE_KEY = "astro_informatika_k1_v1";

export const INFO_K1_ISLANDS = buildAstroInformatikaIslands(1, INFO_K1_CURRICULUM);
export const INFO_K1_CHECKPOINT_MAP = buildInformatikaCheckpointMap();
export const INFO_K1_CHECKPOINT_TOPICS = buildCheckpointTopics(INFO_K1_ISLANDS);
export const INFO_K1_TOPIC_LABELS = buildTopicLabelMap(INFO_K1_CURRICULUM);

export function loadInfoK1Progress(): InformatikaProgress {
  return loadAstroKemiaProgress(SAVE_KEY);
}

export function saveInfoK1Progress(progress: InformatikaProgress): void {
  saveAstroKemiaProgress(SAVE_KEY, progress);
}

export function isMissionDoneInfoK1(progress: InformatikaProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneInfoK1(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedInfoK1(progress: InformatikaProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, INFO_K1_ISLANDS, islandId);
}

export function isCheckpointUnlockedInfoK1(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, INFO_K1_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneInfoK1(progress: InformatikaProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionInfoK1(progress: InformatikaProgress, islandId: string, missionId: string, stars = 1): InformatikaProgress {
  return completeMission(progress, INFO_K1_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsInfoK1(progress: InformatikaProgress, islandId: string): number {
  return islandTotalStars(progress, INFO_K1_ISLANDS, islandId);
}

export function completeTestInfoK1(progress: InformatikaProgress, testId: string): InformatikaProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsInfoK1(island: IslandDef, count = 10, countryCode = "HU") {
  return generateIslandQuestions(island, (ids, amount) => getInfoK1Questions(ids, amount, countryCode), count);
}

export function generateCheckpointQuestionsInfoK1(testId: string, count = 15, countryCode = "HU") {
  return generateCheckpointQuestions(INFO_K1_CHECKPOINT_TOPICS, testId, (ids, amount) => getInfoK1Questions(ids, amount, countryCode), count);
}
