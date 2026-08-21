// ─── UNIVERSAL LANGUAGE TEST — Config Types ────────────────────────────────
// Shared config interface for all language tests (Deutsch, Romanian, English, etc.)
// Each language test provides its own config object.

import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";
import type { ComponentType } from "react";

// ─── Visual Component Props (shared interface for all visual q types) ────────

export interface VisualComponentProps {
  // Each visual component gets these standard props:
  userAnswer: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
  // Plus type-specific props passed via `extraProps`
  [key: string]: unknown;
}

// ─── Visual Question Type Registration ──────────────────────────────────────

export interface VisualQuestionType {
  /** Unique type key, e.g. "genus-sort", "satz-ordnen" */
  type: string;
  /** Display label for section headers, e.g. "Artikel bestimmen 🔵" */
  label: string;
  /** Label for print/PDF, e.g. "Artikel bestimmen" */
  printLabel: string;
  /** React component to render this question type */
  component: ComponentType<any>;  // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Generator function; the optional language localizes generated content. */
  generate: (count: number, lang?: string) => any[];  // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Which subtopic IDs trigger this visual type */
  subtopicIds: string[];
  /** How to extract the correct answer from a generated item */
  gradeAnswer: (question: any, given: string) => { correct: boolean; expected: string };  // eslint-disable-line @typescript-eslint/no-explicit-any
  /** How to render in the test (maps generated data → component props) */
  mapProps: (question: any, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => Record<string, unknown>;  // eslint-disable-line @typescript-eslint/no-explicit-any
  /** How to render in print HTML */
  renderPrint?: (question: any) => string;  // eslint-disable-line @typescript-eslint/no-explicit-any
}

// ─── Reading Test (Lesetest) ────────────────────────────────────────────────

export interface ReadingPassage {
  title: string;
  text: string;
  questions: Array<
    | {
        type: "mcq";
        question: string;
        options: string[];
        correct: number;
        subtopic?: string;
      }
    | {
        type: "typing";
        question: string;
        answer: string | string[];
        subtopic?: string;
      }
  >;
}

// ─── Country & Grading ─────────────────────────────────────────────────────

export interface TestCountry {
  code: string;
  flag: string;
  label: string;
  sub: string;  // grading scale description, e.g. "Note 1–6"
}

export interface TestGradeMark {
  note: number | string;  // numeric grade or letter
  label: string;          // "Sehr gut", "Foarte Bine"
  color: string;          // hex
  emoji: string;
}

// ─── Main Config Interface ─────────────────────────────────────────────────

export interface LanguageTestEngineConfig {
  // ── Identity ──
  gameId: string;                   // "deutschtest", "romaniantest"
  title: string | Record<string, string>; // "DEUTSCH TEST", "TEST LIMBA ROMÂNĂ"
  icon: string;                     // "✏️", "📝"
  color: string;                    // primary accent color hex

  // ── Localization ──
  ttsLang: string;                  // "de-DE", "ro-RO"
  ttsRate?: number;                 // default 0.88
  ttsPitch?: number;                // default 1.1
  dateLocale: string;               // "de-DE", "ro-RO"
  storageKey: string;               // "deutschtest_country", "romaniantest_country"

  // ── Background ──
  bgChars: string[];                // floating background characters
  bgColors: string[];               // floating background colors

  // ── Countries & Grading ──
  countries: TestCountry[];
  calculateMark: (pct: number, country: string) => TestGradeMark;

  // ── Curriculum ──
  curriculum: Record<number, CurriculumTheme[]>;
  /** Optional: returns country-aware curriculum themes for grade+country. Overrides static `curriculum[grade]` when present. */
  getCurriculumForCountry?: (grade: number, country: string) => CurriculumTheme[];
  getQuestions: (grade: number, subtopicIds: string[], count: number, countryCode?: string) => CurriculumQuestion[];
  generateForSubtopics?: (subtopicIds: string[], count: number) => CurriculumQuestion[];
  checkAnswer?: (given: string, expected: string | string[], grade: number) => boolean;
  subtopicHints?: Record<string, string>;
  getSubtopicHint?: (subtopicId?: string) => string | null;

  // ── Visual Components (optional, per-language) ──
  visualTypes?: VisualQuestionType[];
  /** Which grades support visual questions */
  visualGrades?: number[];

  // ── Grade list (optional, defaults to 1-8) ──
  grades?: number[];
  /** If true, the Lesetest toggle is hidden from topics screen */
  hideLesetest?: boolean;

  // ── Reading Test (optional) ──
  getReadingPassage?: (grade: number) => ReadingPassage | null;

  // ── PDF Generation (optional) ──
  generatePdf?: (params: {
    gradeLevel: string;
    date: string;
    questions: Array<{ question: string; type: string }>;
    answers: Array<{ correct: boolean; given: string; expected: string }>;
    scoreCount: number;
    totalCount: number;
    percentage: number;
    noteValue: number | string;
    noteLabel: string;
    noteColor: string;
    studentName?: string;
  }) => void;

  // ── G1 Image Components (optional, for Deutsch Klasse 1) ──
  g1Icons?: Record<string, ComponentType>;
  g1WordLabels?: Record<string, string>;

  // ── Labels (all UI strings) ──
  labels: {
    // Country/Grade selection
    selectCountry: string | Record<string, string>;           // "Wähle dein Land"
    selectGrade: string | Record<string, string>;             // "Wähle deine Klassenstufe"
    gradePrefix: string | Record<string, string>;             // "Kl." / "Cl."
    gradeFull: string | Record<string, string>;               // "Klasse" / "Clasa"

    // Topic selection
    selectTopics: string | Record<string, string>;            // "Themen für deinen Test auswählen"
    all: string | Record<string, string>;                     // "Alle"
    allCheck: string | Record<string, string>;                // "Alle ✓"
    soon: string | Record<string, string>;                    // "bald" / "în curând"
    questionsShort: string | Record<string, string>;          // "Fr." / "Într."
    startTest: string | Record<string, string>;               // "TEST STARTEN →"
    areas: string | Record<string, string>;                   // "Bereiche" / "domenii"

    // Reading test
    readingTest?: string | Record<string, string>;            // "📖 Lesetest" / "📖 Test de lectură"
    readingTestDesc?: string | Record<string, string>;        // "Text lesen & Fragen beantworten · 3 Fr."

    // Test screen
    task: string | Record<string, string>;                    // "Aufgabe" / "Exercițiul"
    interactiveTask: string | Record<string, string>;         // "Interaktive Aufgabe" / "Exercițiu interactiv"
    readAloud: string | Record<string, string>;               // "Vorlesen" / "Citește cu voce tare"
    clickCorrectImage?: string | Record<string, string>;      // "🖼 Klicke auf das richtige Bild:"
    whichLetterStarts?: string | Record<string, string>;      // "🔤 Mit welchem Buchstaben beginnt das Wort?"
    answerPlaceholder: string | Record<string, string>;       // "Antwort..." / "Răspuns..."
    submit: string | Record<string, string>;                  // "Abgeben ✓" / "Trimite ✓"
    back: string | Record<string, string>;                    // "Zurück" / "Înapoi"

    // Result screen
    markLabel: string | Record<string, string>;               // "Note" / "Calificativ"
    correct: string | Record<string, string>;                 // "richtig" / "corect"
    review: string | Record<string, string>;                  // "Auswertung" / "Evaluare"
    tryAgain: string | Record<string, string>;                // "Nochmal" / "Din nou"
    mainMenu: string | Record<string, string>;                // "Hauptmenü" / "Meniu principal"
    pdf: string | Record<string, string>;                     // "PDF"

    // Print
    points?: string | Record<string, string>;                 // "Punkte" / "Puncte"
    pointsShort?: string | Record<string, string>;            // "Pkt." / "Pct."
    name?: string | Record<string, string>;                   // "Name" / "Nume"
    date?: string | Record<string, string>;                   // "Datum" / "Data"
    wrongWordNr?: string | Record<string, string>;            // "Falsches Wort Nr.:" / "Cuvântul greșit nr.:"
    root?: string | Record<string, string>;                   // "Stamm:" / "Rădăcină:"
  };
}
