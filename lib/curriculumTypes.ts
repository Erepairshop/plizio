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
  name: string;
  questions: CurriculumQuestion[];
  hasGenerator?: boolean; // if true, treated as available even with empty questions[]
}

export interface CurriculumTheme {
  id: string;
  name: string;
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
  selectCountry: string;   // "Select your country"
  selectGrade: string;     // "Select your grade"
  selectTopics: string;    // "Select topics"
  startTest: string;       // "START TEST"
  question: string;        // "Question"
  correct: string;         // "Correct!"
  answerBtn: string;       // "ANSWER"
  again: string;           // "Try Again"
  home: string;            // "Main Menu"
  gradeMark: string;       // "Grade" | "Note"
  review: string;          // "Review"
  areas: string;           // "areas"
  soon: string;            // "soon"
  questions: string;       // "Qs" | "Fr."
  all: string;             // "All"
  allCheck: string;        // "All ✓"
  placeholder: string;     // "Your answer..."
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
