// ─── TEST FLOW SERVICE ─────────────────────────────
// Orchestrates the end-to-end test flow via Supabase RPCs.
// Frontend generates questions → sends to DB → server grades.

import { supabase } from "../supabase/client";
import { generateTestWithMeta, type MathQuestion } from "../mathCurriculum";
import { mapTestToItemInserts, type ItemInsert } from "./itemAdapter";

// ─── TYPES ─────────────────────────────

export interface TestSession {
  testId: string;
  blueprintId: string | null;
  questions: MathQuestion[]; // For UI display (from content_json, no solutions)
  generatorKeys: string[];
}

export interface SubmitAnswer {
  question_index: number;
  answer: number;
  time_spent_sec: number;
}

export interface TestResultFromServer {
  test_id: string;
  score: number;
  max_score: number;
  percentage: number;
  total_time_sec: number;
  topic_breakdown: Record<string, { correct: number; total: number }>;
  cognitive_breakdown: Record<string, { correct: number; total: number }>;
  stars_earned: number;
  xp_earned: number;
  is_first_attempt: boolean;
}

export interface DashboardData {
  profile: {
    country: string;
    grade: number;
    stars: number;
    xp: number;
  };
  streak: {
    current: number;
    best: number;
    tests_completed: number;
  };
  recent_tests: Array<{
    id: string;
    score: number;
    max_score: number;
    percentage: number;
    total_time_sec: number;
    stars_earned: number;
    created_at: string;
  }>;
  weak_areas: Array<{
    topic: string;
    subskill: string;
    accuracy: number;
    attempts: number;
  }>;
  strong_areas: Array<{
    topic: string;
    subskill: string;
    accuracy: number;
    streak: number;
  }>;
}

// ─── FIND BLUEPRINT ─────────────────────────────

export async function findBlueprint(
  country: string,
  grade: number,
  testType: string = "practice",
): Promise<string | null> {
  const { data, error } = await supabase
    .from("blueprints")
    .select("id")
    .eq("country", country)
    .eq("grade", grade)
    .eq("test_type", testType)
    .eq("is_active", true)
    .limit(1)
    .single();

  if (error || !data) return null;
  return data.id;
}

// ─── CREATE TEST ─────────────────────────────
// 1. Generate questions locally (existing generators)
// 2. Map to Item format
// 3. Send to Supabase via create_test_instance RPC
// 4. Return test session for UI

export async function createTest(
  grade: number,
  countryCode: string,
  blueprintId?: string | null,
): Promise<TestSession> {
  // Step 1: Generate questions with generator keys
  const { questions, generatorKeys } = generateTestWithMeta(grade, undefined, countryCode);

  // Step 2: Map to Supabase Item insert format
  const items: ItemInsert[] = mapTestToItemInserts(questions, generatorKeys, grade, countryCode);

  // Step 3: Call RPC to create test instance
  const { data, error } = await supabase.rpc("create_test_instance", {
    p_blueprint_id: blueprintId || null,
    p_items: items,
  });

  if (error) {
    throw new Error(`Failed to create test: ${error.message}`);
  }

  return {
    testId: data.test_id,
    blueprintId: blueprintId || null,
    questions, // MathQuestion[] for UI display
    generatorKeys,
  };
}

// ─── START TEST ─────────────────────────────

export async function startTest(testId: string): Promise<void> {
  const { error } = await supabase.rpc("start_test", {
    p_test_id: testId,
  });

  if (error) {
    throw new Error(`Failed to start test: ${error.message}`);
  }
}

// ─── SUBMIT TEST ─────────────────────────────
// Sends answers to server for grading. Server reads solutions from DB.
// Returns graded results.

export async function submitTest(
  testId: string,
  answers: SubmitAnswer[],
): Promise<TestResultFromServer> {
  const { data, error } = await supabase.rpc("submit_test", {
    p_test_id: testId,
    p_answers: answers,
  });

  if (error) {
    throw new Error(`Failed to submit test: ${error.message}`);
  }

  return data as TestResultFromServer;
}

// ─── GET DASHBOARD ─────────────────────────────

export async function getDashboard(): Promise<DashboardData> {
  const { data, error } = await supabase.rpc("get_user_dashboard");

  if (error) {
    throw new Error(`Failed to get dashboard: ${error.message}`);
  }

  return data as DashboardData;
}

// ─── CHECK IF SUPABASE IS CONFIGURED ─────────────────────────────
// Returns false if env vars are missing (guest/local mode)

export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project.supabase.co"
  );
}
