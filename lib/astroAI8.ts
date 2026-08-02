import { AI_K8_CURRICULUM, getAIK8Questions } from "./aiCurriculum8";
import { buildAstroAIIslands, buildAICheckpointMap } from "./astroAIShared";
import type { IslandDef } from "./astroAIShared";
export type { IslandDef, MissionDef, Lang, MissionCategory } from "./astroAIShared";
import { type AstroKemiaProgress, buildCheckpointTopics, buildTopicLabelMap, completeMission, completeTest, generateCheckpointQuestions, generateIslandQuestions, islandTotalStars, isCheckpointDone, isCheckpointUnlocked, isIslandDone, isIslandUnlocked, isMissionDone, loadAstroKemiaProgress, saveAstroKemiaProgress } from "./astroKemiaShared";

export type AIProgress = AstroKemiaProgress;
const SAVE_KEY = "astro_ai_k8_v1";

export const AI_K8_ISLANDS = buildAstroAIIslands(8, AI_K8_CURRICULUM);
export const AI_K8_CHECKPOINT_MAP = buildAICheckpointMap();
export const AI_K8_CHECKPOINT_TOPICS = buildCheckpointTopics(AI_K8_ISLANDS);
export const AI_K8_TOPIC_LABELS = buildTopicLabelMap(AI_K8_CURRICULUM);

export function loadAIK8Progress(): AIProgress { return loadAstroKemiaProgress(SAVE_KEY); }
export function saveAIK8Progress(progress: AIProgress): void { saveAstroKemiaProgress(SAVE_KEY, progress); }
export function isMissionDoneAIK8(progress: AIProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneAIK8(progress: AIProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedAIK8(progress: AIProgress, islandId: string): boolean { return isIslandUnlocked(progress, AI_K8_ISLANDS, islandId); }
export function isCheckpointUnlockedAIK8(progress: AIProgress, testId: string): boolean { return isCheckpointUnlocked(progress, AI_K8_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneAIK8(progress: AIProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionAIK8(progress: AIProgress, islandId: string, missionId: string, stars = 1): AIProgress { return completeMission(progress, AI_K8_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsAIK8(progress: AIProgress, islandId: string): number { return islandTotalStars(progress, AI_K8_ISLANDS, islandId); }
export function completeTestAIK8(progress: AIProgress, testId: string): AIProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsAIK8(island: IslandDef, count = 10, lang = "hu") { return generateIslandQuestions(island, (ids, amount) => getAIK8Questions(ids, amount, lang), count); }
export function generateCheckpointQuestionsAIK8(testId: string, count = 15, lang = "hu") { return generateCheckpointQuestions(AI_K8_CHECKPOINT_TOPICS, testId, (ids, amount) => getAIK8Questions(ids, amount, lang), count); }
