import { AI_K5_CURRICULUM, getAIK5Questions } from "./aiCurriculum5";
import { buildAstroAIIslands, buildAICheckpointMap } from "./astroAIShared";
import type { IslandDef } from "./astroAIShared";
export type { IslandDef, MissionDef, Lang, MissionCategory } from "./astroAIShared";
import { type AstroKemiaProgress, buildCheckpointTopics, buildTopicLabelMap, completeMission, completeTest, generateCheckpointQuestions, generateIslandQuestions, islandTotalStars, isCheckpointDone, isCheckpointUnlocked, isIslandDone, isIslandUnlocked, isMissionDone, loadAstroKemiaProgress, saveAstroKemiaProgress } from "./astroKemiaShared";

export type AIProgress = AstroKemiaProgress;
const SAVE_KEY = "astro_ai_k5_v1";

export const AI_K5_ISLANDS = buildAstroAIIslands(5, AI_K5_CURRICULUM);
export const AI_K5_CHECKPOINT_MAP = buildAICheckpointMap();
export const AI_K5_CHECKPOINT_TOPICS = buildCheckpointTopics(AI_K5_ISLANDS);
export const AI_K5_TOPIC_LABELS = buildTopicLabelMap(AI_K5_CURRICULUM);

export function loadAIK5Progress(): AIProgress { return loadAstroKemiaProgress(SAVE_KEY); }
export function saveAIK5Progress(progress: AIProgress): void { saveAstroKemiaProgress(SAVE_KEY, progress); }
export function isMissionDoneAIK5(progress: AIProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneAIK5(progress: AIProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedAIK5(progress: AIProgress, islandId: string): boolean { return isIslandUnlocked(progress, AI_K5_ISLANDS, islandId); }
export function isCheckpointUnlockedAIK5(progress: AIProgress, testId: string): boolean { return isCheckpointUnlocked(progress, AI_K5_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneAIK5(progress: AIProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionAIK5(progress: AIProgress, islandId: string, missionId: string, stars = 1): AIProgress { return completeMission(progress, AI_K5_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsAIK5(progress: AIProgress, islandId: string): number { return islandTotalStars(progress, AI_K5_ISLANDS, islandId); }
export function completeTestAIK5(progress: AIProgress, testId: string): AIProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsAIK5(island: IslandDef, count = 10, lang = "hu") { return generateIslandQuestions(island, (ids, amount) => getAIK5Questions(ids, amount, lang), count); }
export function generateCheckpointQuestionsAIK5(testId: string, count = 15, lang = "hu") { return generateCheckpointQuestions(AI_K5_CHECKPOINT_TOPICS, testId, (ids, amount) => getAIK5Questions(ids, amount, lang), count); }
