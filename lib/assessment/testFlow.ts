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

export interface KlassenarbeitMetadata {
  sectionResults: Array<{
    name: string;
    correct: number;
    total: number;
    maxPoints: number;
    earnedPoints: number;
  }>;
  totalPoints: number;
  maxTotalPoints: number;
  percentage: number;
  note: {
    value: number;
    label: string;
  };
  starsEarned: number;
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

// ─── VALIDATE KLASSENARBEIT DATA ─────────────────────────────
// Ensures Klassenarbeit metadata is valid before sending to server

function validateKlassenarbeitMetadata(data: KlassenarbeitMetadata): void {
  if (!data) return; // null is allowed

  // Validate required fields
  if (!Array.isArray(data.sectionResults)) {
    throw new Error("Invalid klassenarbeit_data: sectionResults must be array");
  }

  if (typeof data.totalPoints !== "number" || data.totalPoints < 0) {
    throw new Error("Invalid klassenarbeit_data: totalPoints must be non-negative number");
  }

  if (typeof data.maxTotalPoints !== "number" || data.maxTotalPoints <= 0) {
    throw new Error("Invalid klassenarbeit_data: maxTotalPoints must be positive number");
  }

  if (typeof data.percentage !== "number" || data.percentage < 0 || data.percentage > 100) {
    throw new Error("Invalid klassenarbeit_data: percentage must be 0-100");
  }

  if (!data.note || typeof data.note.value !== "number" || typeof data.note.label !== "string") {
    throw new Error("Invalid klassenarbeit_data: note must have value and label");
  }

  if (data.note.value < 1 || data.note.value > 6) {
    throw new Error("Invalid klassenarbeit_data: note.value must be 1-6");
  }

  if (typeof data.starsEarned !== "number" || data.starsEarned < 0) {
    throw new Error("Invalid klassenarbeit_data: starsEarned must be non-negative number");
  }

  // Validate consistency
  if (data.maxTotalPoints > 0) {
    const expectedPercentage = (data.totalPoints / data.maxTotalPoints) * 100;
    const diff = Math.abs(expectedPercentage - data.percentage);
    if (diff > 1) {
      console.warn(
        `Klassenarbeit percentage mismatch: expected ${expectedPercentage.toFixed(1)}%, got ${data.percentage}%`
      );
    }
  }
}

// ─── SUBMIT TEST ─────────────────────────────
// Sends answers to server for grading. Server reads solutions from DB.
// For Klassenarbeit: includes section breakdown and Note data.
// Returns graded results.

export async function submitTest(
  testId: string,
  answers: SubmitAnswer[],
  klassenarbeitData?: KlassenarbeitMetadata,
): Promise<TestResultFromServer> {
  // Validate data before sending
  if (klassenarbeitData) {
    validateKlassenarbeitMetadata(klassenarbeitData);
  }

  const { data, error } = await supabase.rpc("submit_test", {
    p_test_id: testId,
    p_answers: answers,
    p_klassenarbeit_data: klassenarbeitData || null,
  });

  if (error) {
    throw new Error(`Failed to submit test: ${error.message}`);
  }

  // Validate response before returning
  if (!data || typeof data !== "object") {
    throw new Error("Invalid response from server: expected object");
  }

  if (typeof data.score !== "number" || data.score < 0) {
    throw new Error("Invalid server response: score must be non-negative number");
  }

  if (typeof data.max_score !== "number" || data.max_score <= 0) {
    throw new Error("Invalid server response: max_score must be positive number");
  }

  if (typeof data.stars_earned !== "number" || data.stars_earned < 0) {
    throw new Error("Invalid server response: stars_earned must be non-negative number");
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
