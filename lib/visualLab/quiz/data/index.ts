import type { QuizTask } from "../types";
import { deQuizTasks } from "./deQuiz";
import { roQuizTasks } from "./roQuiz";
import { huQuizTasks } from "./huQuiz";
import { frQuizTasks } from "./frQuiz";
import { itQuizTasks } from "./itQuiz";
import { usQuizTasks } from "./usQuiz";
import { deBundeslandQuiz } from "./de";

const POOL: Record<string, QuizTask[]> = {
  DE: deQuizTasks,
  RO: roQuizTasks,
  HU: huQuizTasks,
  FR: frQuizTasks,
  IT: itQuizTasks,
  US: usQuizTasks,
};

export function getQuizPool(countryCode: string): QuizTask[] {
  // Bundesland-szintu pool ha kapott formaja "DE-BY", "DE-NW" stb
  const upper = countryCode.toUpperCase();
  if (deBundeslandQuiz[upper]) return deBundeslandQuiz[upper];
  return POOL[upper] ?? [];
}
