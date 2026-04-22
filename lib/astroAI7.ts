import { AI_K7_CURRICULUM, getAIK7Questions } from "./aiCurriculum7";
import { buildAstroAIIslands, buildAICheckpointMap } from "./astroAIShared";
import type { IslandDef } from "./astroAIShared";
export type { IslandDef, MissionDef, Lang, MissionCategory } from "./astroAIShared";
import { type AstroKemiaProgress, buildCheckpointTopics, buildTopicLabelMap, completeMission, completeTest, generateCheckpointQuestions, generateIslandQuestions, islandTotalStars, isCheckpointDone, isCheckpointUnlocked, isIslandDone, isIslandUnlocked, isMissionDone, loadAstroKemiaProgress, saveAstroKemiaProgress } from "./astroKemiaShared";

export type AIProgress = AstroKemiaProgress;
const SAVE_KEY = "astro_ai_k7_v1";

export const AI_K7_ISLANDS = buildAstroAIIslands(7, AI_K7_CURRICULUM);
export const AI_K7_CHECKPOINT_MAP = buildAICheckpointMap();
export const AI_K7_CHECKPOINT_TOPICS = buildCheckpointTopics(AI_K7_ISLANDS);
export const AI_K7_TOPIC_LABELS = buildTopicLabelMap(AI_K7_CURRICULUM);

export function loadAIK7Progress(): AIProgress { return loadAstroKemiaProgress(SAVE_KEY); }
export function saveAIK7Progress(progress: AIProgress): void { saveAstroKemiaProgress(SAVE_KEY, progress); }
export function isMissionDoneAIK7(progress: AIProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneAIK7(progress: AIProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedAIK7(progress: AIProgress, islandId: string): boolean { return isIslandUnlocked(progress, AI_K7_ISLANDS, islandId); }
export function isCheckpointUnlockedAIK7(progress: AIProgress, testId: string): boolean { return isCheckpointUnlocked(progress, AI_K7_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneAIK7(progress: AIProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionAIK7(progress: AIProgress, islandId: string, missionId: string, stars = 1): AIProgress { return completeMission(progress, AI_K7_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsAIK7(progress: AIProgress, islandId: string): number { return islandTotalStars(progress, AI_K7_ISLANDS, islandId); }
export function completeTestAIK7(progress: AIProgress, testId: string): AIProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsAIK7(island: IslandDef, count = 10) { return generateIslandQuestions(island, getAIK7Questions, count); }
export function generateCheckpointQuestionsAIK7(testId: string, count = 15) { return generateCheckpointQuestions(AI_K7_CHECKPOINT_TOPICS, testId, getAIK7Questions, count); }
