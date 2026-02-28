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
  created_at: string;
}

// ─── FETCH QUESTIONS BY SECTION ─────────────────────────────

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
  return data.map((record: QuestionBankRecord) => ({
    question: record.question,
    options: [], // Question bank stores solution, not options
    correctAnswer: parseInt(record.solution, 10) || 0, // Parse solution as correct answer
    topic: record.topic,
    isWordProblem: record.type === "word_problem",
    section: record.section,
    maxPoints: record.max_points,
  }));
}

// ─── FETCH MIXED QUESTIONS BY SECTIONS ─────────────────────────────
// Fetch questions across multiple sections with specified quantities

export async function fetchQuestionsBySections(
  grade: number,
  sections: Record<string, number>, // { "Kopfrechnen": 2, "Schriftlich": 3, ... }
): Promise<MathQuestion[]> {
  const allQuestions: MathQuestion[] = [];

  for (const [section, count] of Object.entries(sections)) {
    const questions = await fetchQuestionsBySection(grade, section, count);
    allQuestions.push(...questions);
  }

  return allQuestions;
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
