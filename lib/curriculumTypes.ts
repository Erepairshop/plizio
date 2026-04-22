// ─── SHARED CURRICULUM TYPES ──────────────────────────────────────────────────
// Used by deutschCurriculum.ts, englishCurriculum.ts, and future language tests.

export interface CurriculumMCQ {
  type: "mcq";
  topic: string;
  subtopic: string;
  question: string;
  options: string[];
  correct: number;
  hint?: string;
}

export interface CurriculumTyping {
  type: "typing";
  topic: string;
  subtopic: string;
  question: string;
  answer: string | string[];
  hint?: string;
}

export type CurriculumQuestion = CurriculumMCQ | CurriculumTyping;

export interface CurriculumSubtopic {
  id: string;
  name: string | Record<string, string>;
  questions: CurriculumQuestion[];
  hasGenerator?: boolean; // if true, treated as available even with empty questions[]
}

export interface CurriculumTheme {
  id: string;
  name: string | Record<string, string>;
  icon?: string;
  color?: string;
  subtopics: CurriculumSubtopic[];
}

// ─── GRADE MARK (grading result) ──────────────────────────────────────────────

export interface GradeMark {
  label: string;       // "A", "1", "Très bien", "10"
  description: string; // "Excellent", "Sehr gut", "Outstanding"
  color: string;       // hex color
  emoji: string;
}

// ─── COUNTRY OPTION ───────────────────────────────────────────────────────────

export interface CountryOption {
  code: string;   // "US", "GB", "DE", "AT", "CH"
  flag: string;   // emoji flag
  label: string;  // "United States"
  sub: string;    // "A / B / C / D / F"
}

// ─── LANGUAGE TEST CONFIG ─────────────────────────────────────────────────────
// One config object per test (englishtest, deutschtest, frenchtest, etc.)

export interface LanguageTestLabels {
  selectCountry: string | Record<string, string>;
  selectGrade: string | Record<string, string>;
  selectTopics: string | Record<string, string>;
  startTest: string | Record<string, string>;
  question: string | Record<string, string>;
  correct: string | Record<string, string>;
  answerBtn: string | Record<string, string>;
  again: string | Record<string, string>;
  home: string | Record<string, string>;
  gradeMark: string | Record<string, string>;
  review: string | Record<string, string>;
  areas: string | Record<string, string>;
  soon: string | Record<string, string>;
  questions: string | Record<string, string>;
  all: string | Record<string, string>;
  allCheck: string | Record<string, string>;
  placeholder: string | Record<string, string>;
}

export interface LanguageTestConfig {
  gameId: string;              // "englishtest" | "deutschtest"
  title: string;               // "ENGLISH TEST"
  color: string;               // primary color, e.g. "#FF2D78"
  gradeLabel: string;          // "Grade" | "Klasse"
  gradeSublabel: string;       // "Gr." | "Kl."
  countries: CountryOption[];
  curriculum: Record<number, CurriculumTheme[]>;
  calculateMark: (pct: number, countryCode: string) => GradeMark;
  getQuestions: (grade: number, subtopicIds: string[], count?: number) => CurriculumQuestion[];
  subtopicHints?: Record<string, string>;
  floatingChars: string[];
  floatingColors: string[];
  labels: LanguageTestLabels;
}
