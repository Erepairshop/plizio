// lib/astroGeographie.ts
import "./geographieRegistration";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import type { MathQuestion } from "./mathCurriculum";
import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";
import { getK5Questions } from "./geographieCurriculum5";
import { getK6Questions } from "./geographieCurriculum6";
import { getK7Questions } from "./geographieCurriculum7";
import { getK8Questions } from "./geographieCurriculum8";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair, MathQuestion };

export function geographieToMathQuestion(q: CurriculumQuestion): MathQuestion {
  const mcq = q as CurriculumMCQ;
  return {
    question: mcq.question,
    correctAnswer: mcq.options[mcq.correct],
    options: [...mcq.options],
    topic: mcq.subtopic || mcq.topic,
    isWordProblem: false,
    hasStringOptions: true,
  };
}

export interface GeographieProgress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

export function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuestionsForGrade(grade: number, subtopicId: string, seed: number): CurriculumQuestion[] {
  switch (grade) {
    case 5: return getK5Questions([subtopicId], "de", 50);
    case 6: return getK6Questions([subtopicId], "de", 50);
    case 7: return getK7Questions([subtopicId], "de", 50);
    case 8: return getK8Questions([subtopicId], "de", 50);
    default: return [];
  }
}

export function generateGeographieIslandQuestions(island: IslandDef, grade: number, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);
  if (keys.length === 0) return [];
  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const subtopicId = keys[attempt % keys.length];
    const questions = getQuestionsForGrade(grade, subtopicId, Math.floor(Math.random() * 1000));
    const mcqs = questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;
    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(geographieToMathQuestion(q));
    }
  }
  return pool;
}

export function generateGeographieCheckpointQuestions(testId: string, checkpointTopics: Record<string, string[]>, grade: number, count = 10): MathQuestion[] {
  const keys = shuffleArr([...(checkpointTopics[testId] ?? [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  if (keys.length === 0) return [];
  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const subtopicId = keys[attempt % keys.length];
    const questions = getQuestionsForGrade(grade, subtopicId, Math.floor(Math.random() * 1000));
    const mcqs = questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;
    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(geographieToMathQuestion(q));
    }
  }
  return pool;
}

export function loadGeographieProgress(saveKey: string, islands: IslandDef[]): GeographieProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as GeographieProgress;
  } catch {}
  void islands;
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveGeographieProgress(saveKey: string, p: GeographieProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(saveKey, JSON.stringify(p));
  }
}

export function isMissionDone(progress: GeographieProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: GeographieProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: GeographieProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(progress: GeographieProgress, checkpointMap: Record<string, string[]>, testId: string): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: GeographieProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(progress: GeographieProgress, islands: IslandDef[], islandId: string, missionId: string, stars: number = 1): GeographieProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: GeographieProgress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key) ? progress.completedMissions : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };
  const island = islands.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) => updated.completedMissions.includes(`${islandId}_${m.id}`));
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStars(progress: GeographieProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: GeographieProgress, testId: string): GeographieProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}
