// ─── QUESTION BANK SERVICE ─────────────────────────────
// Fetches questions from Supabase question_bank table for Klassenarbeit

import { supabase } from "../supabase/client";
import type { MathQuestion } from "../mathCurriculum";

export interface QuestionBankRecord {
  id: string;
  grade: number;
  topic: string;
  section: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  solution: string;
  max_points: number;
  type: string;
  options?: Array<{ text: string; isCorrect: boolean }> | null;
  explanation?: string | null;
  is_active: boolean;
  created_at: string;
}

// ─── FETCH QUESTIONS BY SECTION WITH FALLBACK ─────────────────────────────
// Returns questions with graceful degradation: same section → other grades → synthetic

export async function fetchQuestionsBySection(
  grade: number,
  section: string,
  limit: number = 5,
): Promise<MathQuestion[]> {
  const { data, error } = await supabase
    .from("question_bank")
    .select("*")
    .eq("grade", grade)
    .eq("section", section)
    .eq("is_active", true)
    .limit(limit);

  if (error) {
    console.error(`Failed to fetch questions for grade ${grade}, section ${section}:`, error);
    return [];
  }

  if (!data || data.length === 0) {
    console.warn(`No questions found for grade ${grade}, section ${section}`);
    return [];
  }

  // Convert QuestionBankRecord to MathQuestion format
  return convertQuestionBankToMathQuestions(data);
}

// ─── ROBUST FETCH WITH FALLBACK CHAIN ─────────────────────────────
// Level 1: Exact match → Level 2: Different difficulty → Level 3: Other grades → Level 4: Synthetic

export async function fetchQuestionsBySectionRobust(
  grade: number,
  section: string,
  limit: number = 5,
): Promise<MathQuestion[]> {
  // Level 1: Try exact match
  const questions = await fetchQuestionsBySection(grade, section, limit);
  if (questions.length > 0) {
    return questions;
  }

  console.warn(`Level 1 failed: no questions for grade ${grade}, section ${section}`);

  // Level 2: Try adjacent grades (up/down)
  for (const gradeDelta of [1, -1, 2, -2]) {
    const adjacentGrade = grade + gradeDelta;
    if (adjacentGrade >= 1 && adjacentGrade <= 8) {
      const { data, error } = await supabase
        .from("question_bank")
        .select("*")
        .eq("grade", adjacentGrade)
        .eq("section", section)
        .eq("is_active", true)
        .limit(limit);

      if (!error && data && data.length > 0) {
        console.warn(`Level 2 fallback: using grade ${adjacentGrade} questions for section ${section}`);
        return convertQuestionBankToMathQuestions(data);
      }
    }
  }

  console.warn(`Level 2 failed: no questions in other grades for section ${section}`);

  // Level 3: Return synthetic questions as last resort
  console.warn(`Level 3: generating synthetic questions for grade ${grade}, section ${section}`);
  return generateSyntheticQuestionsForSection(grade, section, limit);
}

// ─── HELPER: Convert DB records to MathQuestion format ─────────────────────────────

function convertQuestionBankToMathQuestions(
  records: QuestionBankRecord[]
): MathQuestion[] {
  return records.map((record: QuestionBankRecord) => {
    // Parse options from JSONB if available
    const parsedOptions = Array.isArray(record.options)
      ? record.options.map(opt => {
          if (typeof opt === 'object' && 'text' in opt) {
            return parseFloat(opt.text) || 0;
          }
          return parseFloat(String(opt)) || 0;
        })
      : [];

    return {
      question: record.question,
      options: parsedOptions.length > 0 ? parsedOptions : [],
      correctAnswer: parseInt(record.solution, 10) || 0,
      topic: record.topic,
      isWordProblem: record.type === "word_problem",
      section: record.section,
      maxPoints: record.max_points,
    };
  });
}

// ─── SYNTHETIC QUESTION GENERATOR (fallback) ─────────────────────────────
// Generates deterministic, reproducible questions based on grade/section

function generateSyntheticQuestionsForSection(
  grade: number,
  section: string,
  limit: number
): MathQuestion[] {
  const synthetic: MathQuestion[] = [];

  const templates: Record<string, { template: (i: number) => string; answerFn: (i: number) => number }[]> = {
    "Kopfrechnen": [
      { template: (i) => `${10 + i} + ${5 + (i % 3)} = ?`, answerFn: (i) => 10 + i + 5 + (i % 3) },
      { template: (i) => `${20 + i} - ${8 + (i % 5)} = ?`, answerFn: (i) => 20 + i - 8 - (i % 5) },
      { template: (i) => `${(i % 5) + 2} × ${(i % 6) + 2} = ?`, answerFn: (i) => ((i % 5) + 2) * ((i % 6) + 2) },
    ],
    "Schriftlich": [
      { template: (i) => `${100 + i * 10} + ${50 + i * 5} = ?`, answerFn: (i) => 100 + i * 10 + 50 + i * 5 },
      { template: (i) => `${200 + i * 15} - ${75 + i * 10} = ?`, answerFn: (i) => 200 + i * 15 - 75 - i * 10 },
    ],
    "Sachaufgaben": [
      { template: (i) => `Ein Apfel kostet ${2 + i}€. Wie viel kosten ${3 + (i % 4)}?`, answerFn: (i) => (2 + i) * (3 + (i % 4)) },
    ],
    "Geometrie": [
      { template: (i) => `Umfang eines Quadrats mit Seite ${5 + i} cm = ?`, answerFn: (i) => (5 + i) * 4 },
    ],
    "Bonus": [
      { template: (i) => `${10 + i} - ${3 + (i % 5)} × 2 = ?`, answerFn: (i) => 10 + i - (3 + (i % 5)) * 2 },
    ],
  };

  const templateList = templates[section] || templates["Kopfrechnen"];

  for (let i = 0; i < limit; i++) {
    const template = templateList[i % templateList.length];
    const questionText = typeof template.template === "string"
      ? template.template
      : template.template(i);

    synthetic.push({
      question: questionText,
      correctAnswer: typeof template.answerFn === "function"
        ? template.answerFn(i)
        : 0,
      options: [],
      topic: section,
      isWordProblem: section === "Sachaufgaben",
      section,
      maxPoints: 1,
    });
  }

  return synthetic;
}

// ─── FETCH WITH DIFFICULTY BALANCE ─────────────────────────────
// Fetch questions with balanced difficulty distribution
// 30% easy, 40% medium, 30% hard

export async function fetchQuestionsByDifficulty(
  grade: number,
  section: string,
  limit: number = 5,
  difficulty: "easy" | "medium" | "hard" = "medium",
): Promise<MathQuestion[]> {
  const { data, error } = await supabase
    .from("question_bank")
    .select("*")
    .eq("grade", grade)
    .eq("section", section)
    .eq("difficulty", difficulty)
    .eq("is_active", true)
    .limit(limit);

  if (error) {
    console.error(
      `Failed to fetch ${difficulty} questions for grade ${grade}, section ${section}:`,
      error
    );
    return [];
  }

  if (!data || data.length === 0) {
    console.warn(
      `No ${difficulty} questions found for grade ${grade}, section ${section}`
    );
    return [];
  }

  return data.map((record: QuestionBankRecord) => {
    const parsedOptions = Array.isArray(record.options)
      ? record.options.map(opt => {
          if (typeof opt === 'object' && 'text' in opt) {
            return parseFloat(opt.text) || 0;
          }
          return parseFloat(String(opt)) || 0;
        })
      : [];

    return {
      question: record.question,
      options: parsedOptions.length > 0 ? parsedOptions : [],
      correctAnswer: parseInt(record.solution, 10) || 0,
      topic: record.topic,
      isWordProblem: record.type === "word_problem",
      section: record.section,
      maxPoints: record.max_points,
    };
  });
}

// ─── FETCH MIXED QUESTIONS BY SECTIONS WITH DIFFICULTY BALANCE ─────────────────────────────
// Distribution: 30% easy, 40% medium, 30% hard
// Example: for 2 questions → 1 easy, 1 medium (no hard for small counts)

export async function fetchQuestionsBySections(
  grade: number,
  sections: Record<string, number>, // { "Kopfrechnen": 2, "Schriftlich": 3, ... }
  balanceDifficulty: boolean = true,
): Promise<MathQuestion[]> {
  const allQuestions: MathQuestion[] = [];

  for (const [section, count] of Object.entries(sections)) {
    if (!balanceDifficulty) {
      // Original behavior: just fetch count questions
      const questions = await fetchQuestionsBySection(grade, section, count);
      allQuestions.push(...questions);
      continue;
    }

    // Difficulty balance distribution
    const easyCount = Math.round(count * 0.3);
    const mediumCount = Math.round(count * 0.4);
    const hardCount = count - easyCount - mediumCount;

    // Fetch by difficulty
    const easyQuestions = easyCount > 0
      ? await fetchQuestionsByDifficulty(grade, section, easyCount, "easy")
      : [];
    const mediumQuestions = mediumCount > 0
      ? await fetchQuestionsByDifficulty(grade, section, mediumCount, "medium")
      : [];
    const hardQuestions = hardCount > 0
      ? await fetchQuestionsByDifficulty(grade, section, hardCount, "hard")
      : [];

    // Combine and add to results
    allQuestions.push(...easyQuestions, ...mediumQuestions, ...hardQuestions);
  }

  return allQuestions;
}

// ─── REPEAT PREVENTION ─────────────────────────────
// Track and prevent reuse of questions within 7 days with fallback

export async function logQuestionUsage(
  userId: string,
  questionId: string,
  testInstanceId?: string
): Promise<void> {
  const { error } = await supabase
    .from("test_question_history")
    .insert({
      user_id: userId,
      question_id: questionId,
      test_instance_id: testInstanceId,
      test_type: "klassenarbeit",
      used_at: new Date().toISOString(),
    });

  if (error) {
    console.warn(`Failed to log question usage: ${error.message}`);
    // Don't throw - this is optional tracking
  }
}

export async function getUsedQuestionIds(
  userId: string,
  daysBack: number = 7
): Promise<Set<string>> {
  const { data, error } = await supabase
    .from("test_question_history")
    .select("question_id")
    .eq("user_id", userId)
    .eq("test_type", "klassenarbeit")
    .gt("used_at", new Date(Date.now() - daysBack * 24 * 60 * 60 * 1000).toISOString());

  if (error) {
    console.warn(`Failed to fetch used questions: ${error.message}`);
    return new Set();
  }

  return new Set((data || []).map((row: { question_id: string }) => row.question_id));
}

// ─── REPEAT PREVENTION WITH INTELLIGENT FALLBACK ─────────────────────────────
// If repeat prevention excludes too many questions, relax the time window

export async function getAvailableQuestionsForRepeatPrevention(
  userId: string,
  totalQuestionsInBank: number,
  minAvailableRatio: number = 0.4 // At least 40% must be available
): Promise<{ usedIds: Set<string>; windowDays: number }> {
  let daysBack = 7; // Start with 7-day window

  while (daysBack >= 0) {
    const usedIds = await getUsedQuestionIds(userId, daysBack);
    const availableCount = totalQuestionsInBank - usedIds.size;
    const availableRatio = totalQuestionsInBank > 0 ? availableCount / totalQuestionsInBank : 1;

    if (availableRatio >= minAvailableRatio || daysBack === 0) {
      // Either we have enough questions, or we've hit the final window (allow all)
      console.log(
        `Repeat prevention window: ${daysBack} days, available: ${availableRatio.toFixed(1)}%`
      );
      return { usedIds, windowDays: daysBack };
    }

    // Relax the window
    daysBack = Math.max(0, daysBack - 2);
  }

  // Final fallback: return empty set (allow all questions)
  console.warn(
    `Repeat prevention would exclude too many questions. ` +
    `Relaxing to unlimited window (allow recent questions).`
  );
  return { usedIds: new Set(), windowDays: 0 };
}

// ─── SEED QUESTION BANK (for development) ─────────────────────────────
// This can be called once to populate the question_bank table
// In production, this would be managed through a separate admin panel

export const SAMPLE_QUESTIONS_GRADE_5 = [
  // Kopfrechnen
  {
    grade: 5,
    topic: "Arithmetic",
    section: "Kopfrechnen",
    difficulty: "easy" as const,
    question: "25 + 18 = ?",
    solution: "43",
    max_points: 1,
    type: "mental",
  },
  {
    grade: 5,
    topic: "Arithmetic",
    section: "Kopfrechnen",
    difficulty: "easy" as const,
    question: "7 × 6 = ?",
    solution: "42",
    max_points: 1,
    type: "mental",
  },
  // Schriftlich
  {
    grade: 5,
    topic: "Arithmetic",
    section: "Schriftlich",
    difficulty: "medium" as const,
    question: "234 + 567 = ?",
    solution: "801",
    max_points: 2,
    type: "written",
  },
  {
    grade: 5,
    topic: "Arithmetic",
    section: "Schriftlich",
    difficulty: "medium" as const,
    question: "456 - 189 = ?",
    solution: "267",
    max_points: 2,
    type: "written",
  },
  {
    grade: 5,
    topic: "Arithmetic",
    section: "Schriftlich",
    difficulty: "medium" as const,
    question: "23 × 12 = ?",
    solution: "276",
    max_points: 2,
    type: "written",
  },
  // Sachaufgaben
  {
    grade: 5,
    topic: "Word Problems",
    section: "Sachaufgaben",
    difficulty: "medium" as const,
    question:
      "Ein Buch kostet 15€. Wie viel kosten 4 Bücher zusammen?",
    solution: "60",
    max_points: 3,
    type: "word_problem",
  },
  {
    grade: 5,
    topic: "Word Problems",
    section: "Sachaufgaben",
    difficulty: "hard" as const,
    question:
      "Maria hat 50€. Sie kauft ein Heft für 3€ und einen Stift für 2€. Wie viel Geld hat sie noch?",
    solution: "45",
    max_points: 3,
    type: "word_problem",
  },
  // Geometrie
  {
    grade: 5,
    topic: "Geometry",
    section: "Geometrie",
    difficulty: "easy" as const,
    question: "Wie viele Ecken hat ein Quadrat?",
    solution: "4",
    max_points: 2,
    type: "geometry",
  },
  {
    grade: 5,
    topic: "Geometry",
    section: "Geometrie",
    difficulty: "medium" as const,
    question: "Der Umfang eines Quadrats mit Seitenlänge 5cm ist: ?",
    solution: "20",
    max_points: 2,
    type: "geometry",
  },
  // Bonus
  {
    grade: 5,
    topic: "Logic",
    section: "Bonus",
    difficulty: "hard" as const,
    question: "2 + 2 × 2 = ?",
    solution: "6",
    max_points: 1,
    type: "logic",
  },
];
