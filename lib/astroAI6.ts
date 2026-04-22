import { AI_K6_CURRICULUM, getAIK6Questions } from "./aiCurriculum6";
import { buildAstroAIIslands, buildAICheckpointMap } from "./astroAIShared";
import type { IslandDef } from "./astroAIShared";
export type { IslandDef, MissionDef, Lang, MissionCategory } from "./astroAIShared";
import { type AstroKemiaProgress, buildCheckpointTopics, buildTopicLabelMap, completeMission, completeTest, generateCheckpointQuestions, generateIslandQuestions, islandTotalStars, isCheckpointDone, isCheckpointUnlocked, isIslandDone, isIslandUnlocked, isMissionDone, loadAstroKemiaProgress, saveAstroKemiaProgress } from "./astroKemiaShared";

export type AIProgress = AstroKemiaProgress;
const SAVE_KEY = "astro_ai_k6_v1";

export const AI_K6_ISLANDS = buildAstroAIIslands(6, AI_K6_CURRICULUM);
export const AI_K6_CHECKPOINT_MAP = buildAICheckpointMap();
export const AI_K6_CHECKPOINT_TOPICS = buildCheckpointTopics(AI_K6_ISLANDS);
export const AI_K6_TOPIC_LABELS = buildTopicLabelMap(AI_K6_CURRICULUM);

export function loadAIK6Progress(): AIProgress { return loadAstroKemiaProgress(SAVE_KEY); }
export function saveAIK6Progress(progress: AIProgress): void { saveAstroKemiaProgress(SAVE_KEY, progress); }
export function isMissionDoneAIK6(progress: AIProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneAIK6(progress: AIProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedAIK6(progress: AIProgress, islandId: string): boolean { return isIslandUnlocked(progress, AI_K6_ISLANDS, islandId); }
export function isCheckpointUnlockedAIK6(progress: AIProgress, testId: string): boolean { return isCheckpointUnlocked(progress, AI_K6_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneAIK6(progress: AIProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionAIK6(progress: AIProgress, islandId: string, missionId: string, stars = 1): AIProgress { return completeMission(progress, AI_K6_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsAIK6(progress: AIProgress, islandId: string): number { return islandTotalStars(progress, AI_K6_ISLANDS, islandId); }
export function completeTestAIK6(progress: AIProgress, testId: string): AIProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsAIK6(island: IslandDef, count = 10) { return generateIslandQuestions(island, getAIK6Questions, count); }
export function generateCheckpointQuestionsAIK6(testId: string, count = 15) { return generateCheckpointQuestions(AI_K6_CHECKPOINT_TOPICS, testId, getAIK6Questions, count); }
