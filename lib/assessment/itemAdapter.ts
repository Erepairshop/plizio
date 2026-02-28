// ─── ITEM ADAPTER ─────────────────────────────
// Wraps existing MathQuestion generators into Supabase Item insert format.
// This is the bridge between the current frontend generators and the DB schema.

import type { MathQuestion } from "../mathCurriculum";

// Metadata for each generator - maps generator key to subskill + difficulty
export interface GeneratorMeta {
  topic: string;
  subskill: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  cognitiveLevel: 1 | 2 | 3;
  estimatedTimeSec: number;
  examTags: string[];
}

// Item format matching Supabase items table insert
export interface ItemInsert {
  country: string;
  grade: number;
  subject: string;
  topic: string;
  subskill: string;
  difficulty: number;
  cognitive_level: number;
  calculator_allowed: boolean;
  estimated_time_sec: number;
  max_points: number;
  question_type: string;
  exam_tags: string[];
  content_json: {
    questionText: string;
    options: number[];
    isWordProblem: boolean;
  };
  solution_json: {
    correctAnswer: number;
  };
  generator_key: string;
}

// ─── GRADE 5 GENERATOR METADATA ─────────────────────────────
// Maps each G5 generator key to its metadata.
// Only Grade 5 for now (minimal vertical slice).

export const G5_META: Record<string, GeneratorMeta> = {
  largeNumbers:      { topic: "rounding",     subskill: "round_to_thousands",     difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 20, examTags: ["practice"] },
  roundHundreds:     { topic: "rounding",     subskill: "round_to_hundreds",      difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 20, examTags: ["practice"] },
  orderOfOps:        { topic: "orderOfOps",   subskill: "mul_then_add",           difficulty: 2, cognitiveLevel: 2, estimatedTimeSec: 25, examTags: ["practice", "OKM"] },
  orderOfOpsB:       { topic: "orderOfOps",   subskill: "sub_then_mul",           difficulty: 3, cognitiveLevel: 2, estimatedTimeSec: 30, examTags: ["practice", "OKM"] },
  orderOfOpsC:       { topic: "orderOfOps",   subskill: "brackets_then_mul",      difficulty: 3, cognitiveLevel: 2, estimatedTimeSec: 30, examTags: ["practice", "OKM"] },
  orderOfOpsD:       { topic: "orderOfOps",   subskill: "mixed_ops_reminder",     difficulty: 3, cognitiveLevel: 2, estimatedTimeSec: 30, examTags: ["practice"] },
  fractionAdd:       { topic: "fractionAdd",  subskill: "fraction_add_same_denom", difficulty: 3, cognitiveLevel: 1, estimatedTimeSec: 25, examTags: ["practice", "OKM"] },
  fractionSub:       { topic: "fractionSub",  subskill: "fraction_sub_same_denom", difficulty: 3, cognitiveLevel: 1, estimatedTimeSec: 25, examTags: ["practice", "OKM"] },
  percent10:         { topic: "percent",      subskill: "percent_10",             difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 20, examTags: ["practice", "OKM"] },
  percent50:         { topic: "percent",      subskill: "percent_50",             difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 15, examTags: ["practice"] },
  percent25:         { topic: "percent",      subskill: "percent_25",             difficulty: 3, cognitiveLevel: 2, estimatedTimeSec: 25, examTags: ["practice", "OKM"] },
  geoRectPerimeter:  { topic: "geometry",     subskill: "rect_perimeter",         difficulty: 2, cognitiveLevel: 2, estimatedTimeSec: 25, examTags: ["practice"] },
  geoRectArea:       { topic: "geometry",     subskill: "rect_area",              difficulty: 2, cognitiveLevel: 2, estimatedTimeSec: 25, examTags: ["practice"] },
  geoSquarePerimeter:{ topic: "geometry",     subskill: "square_perimeter",       difficulty: 1, cognitiveLevel: 1, estimatedTimeSec: 15, examTags: ["practice"] },
  wordDiscount:      { topic: "wordProblem",  subskill: "discount_calc",          difficulty: 3, cognitiveLevel: 3, estimatedTimeSec: 40, examTags: ["practice", "OKM"] },
  wordOps:           { topic: "wordProblem",  subskill: "multi_step_ops",         difficulty: 3, cognitiveLevel: 3, estimatedTimeSec: 35, examTags: ["practice", "OKM"] },
};

// Review generators from G4 that appear in G5 periods
export const G4_REVIEW_META: Record<string, GeneratorMeta> = {
  writtenMul: { topic: "writtenMul", subskill: "written_mul",  difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 30, examTags: ["practice"] },
  writtenDiv: { topic: "writtenDiv", subskill: "written_div",  difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 30, examTags: ["practice"] },
  fractions:  { topic: "fractions",  subskill: "basic_fractions", difficulty: 2, cognitiveLevel: 1, estimatedTimeSec: 20, examTags: ["practice"] },
};

// ─── CORE ADAPTER FUNCTION ─────────────────────────────

export function mapGeneratorOutputToItemInsertFormat(
  question: MathQuestion,
  generatorKey: string,
  grade: number,
  countryCode: string,
  meta?: GeneratorMeta,
): ItemInsert {
  // Look up metadata from the grade-specific map
  const m = meta || G5_META[generatorKey] || G4_REVIEW_META[generatorKey] || {
    topic: question.topic,
    subskill: question.topic,
    difficulty: 2,
    cognitiveLevel: 1,
    estimatedTimeSec: 25,
    examTags: ["practice"],
  };

  return {
    country: countryCode,
    grade,
    subject: "math",
    topic: m.topic,
    subskill: m.subskill,
    difficulty: m.difficulty,
    cognitive_level: m.cognitiveLevel,
    calculator_allowed: false,
    estimated_time_sec: m.estimatedTimeSec,
    max_points: 1,
    question_type: "multiple_choice",
    exam_tags: m.examTags,
    content_json: {
      questionText: question.question,
      options: question.options,
      isWordProblem: question.isWordProblem,
    },
    solution_json: {
      correctAnswer: question.correctAnswer,
    },
    generator_key: generatorKey,
  };
}

// ─── BATCH ADAPTER ─────────────────────────────
// Converts an array of MathQuestions with their generator keys into ItemInserts

export function mapTestToItemInserts(
  questions: MathQuestion[],
  generatorKeys: string[],
  grade: number,
  countryCode: string,
): ItemInsert[] {
  return questions.map((q, i) =>
    mapGeneratorOutputToItemInsertFormat(q, generatorKeys[i] || "unknown", grade, countryCode)
  );
}
