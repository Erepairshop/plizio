// lib/astroGeschichte.ts
// AstroGeschichte — Common types and logic for History islands system

import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import type { MathQuestion } from "./mathCurriculum";
import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";
import { getG5GeschichteQuestions } from "./geschichteCurriculum5";
import { getG6GeschichteQuestions } from "./geschichteCurriculum6";
import { getG7GeschichteQuestions } from "./geschichteCurriculum7";
import { getG8GeschichteQuestions } from "./geschichteCurriculum8";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair, MathQuestion };

// ─── Bridge: CurriculumQuestion → MathQuestion ────────────────────────────────
export function geschichteToMathQuestion(q: CurriculumQuestion): MathQuestion {
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

// ─── Progress type ─────────────────────────────────────────────────────────────
export interface GeschichteProgress {
  completedMissions: string[];   // "i1_m1", "i1_m2", …
  completedIslands: string[];    // "i1", "i2", …
  completedTests: string[];      // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3
}

// ─── Shuffle helper ────────────────────────────────────────────────────────────
export function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Question fetcher by grade ────────────────────────────────────────────────
function getQuestionsForGrade(grade: number, subtopicId: string, seed: number): CurriculumQuestion[] {
  switch (grade) {
    case 5: return getG5GeschichteQuestions(subtopicId, seed);
    case 6: return getG6GeschichteQuestions(subtopicId, seed);
    case 7: return getG7GeschichteQuestions(subtopicId, seed);
    case 8: return getG8GeschichteQuestions(subtopicId, seed);
    default: return [];
  }
}

// ─── Common question generator ────────────────────────────────────────────────
export function generateGeschichteIslandQuestions(
  island: IslandDef,
  grade: number,
  count = 10,
): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const subtopicId = keys[attempt % keys.length];
    const questions = getQuestionsForGrade(grade, subtopicId, Math.floor(Math.random() * 1000));
    const mcqs = questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(geschichteToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Checkpoint question generator ───────────────────────────────────────────
export function generateGeschichteCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  grade: number,
  count = 10,
): MathQuestion[] {
  const keys = shuffleArr([...(checkpointTopics[testId] ?? [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const subtopicId = keys[attempt % keys.length];
    if (!subtopicId) continue;
    
    const questions = getQuestionsForGrade(grade, subtopicId, Math.floor(Math.random() * 1000));
    const mcqs = questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(geschichteToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Progress helpers ─────────────────────────────────────────────────────────
export function loadGeschichteProgress(saveKey: string, islands: IslandDef[]): GeschichteProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as GeschichteProgress;
  } catch {}
  void islands;
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveGeschichteProgress(saveKey: string, p: GeschichteProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(saveKey, JSON.stringify(p));
  }
}

export function isMissionDone(progress: GeschichteProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: GeschichteProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: GeschichteProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(
  progress: GeschichteProgress,
  checkpointMap: Record<string, string[]>,
  testId: string,
): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: GeschichteProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: GeschichteProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars: number = 1,
): GeschichteProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: GeschichteProgress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = islands.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStars(progress: GeschichteProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: GeschichteProgress, testId: string): GeschichteProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}
