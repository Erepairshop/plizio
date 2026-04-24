import type { QuizTask } from "../types";
import { deQuizTasks } from "./deQuiz";
import { roQuizTasks } from "./roQuiz";

const POOL: Record<string, QuizTask[]> = {
  DE: deQuizTasks,
  RO: roQuizTasks,
};

export function getQuizPool(countryCode: string): QuizTask[] {
  return POOL[countryCode.toUpperCase()] ?? [];
}
