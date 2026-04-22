import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";
import t01 from "@/data/ai/class-7/hu/1.json";

type RawTask = { type: "mcq"; question: string; options: string[]; correct: number } | { type: "typing"; text: string };

function jsonToQuestions(subtopicId: string, tasks: RawTask[]): KemiaQuestion[] {
  return tasks.flatMap((task): KemiaQuestion[] => {
    if (task.type === "mcq") {
      return [{ type: "mcq", topic: "ai", subtopic: subtopicId, question: task.question, options: task.options, correct: task.correct }];
    }
    return [{ type: "typing", topic: "ai", subtopic: subtopicId, question: task.text, answer: task.text }];
  });
}

const e = (json: any): RawTask[] => (json.tasks ?? []) as RawTask[];

export const AI_K7_CURRICULUM: KemiaTheme[] = Array.from({length: 6}, (_, th) => ({
  id: `ai_k7_th${th+1}`, name: `AI Téma ${th+1}`, icon: "💡", color: "#F59E0B",
  subtopics: Array.from({length: 5}, (_, sub) => ({
    id: `ai_k7_t${th*5 + sub + 1}`,
    name: { de: `Thema ${th*5 + sub + 1}`, en: `Topic ${th*5 + sub + 1}`, hu: `Téma ${th*5 + sub + 1}`, ro: `Tema ${th*5 + sub + 1}` },
    questions: jsonToQuestions(`ai_k7_t${th*5 + sub + 1}`, e(t01)),
    hasGenerator: false
  }))
}));

export function getAIK7Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of AI_K7_CURRICULUM) {
    for (const sub of theme.subtopics) {
      if (subtopicIds.includes(sub.id)) pool.push(...sub.questions);
    }
  }
  if (!count) return pool;
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
