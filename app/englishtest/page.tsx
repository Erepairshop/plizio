"use client";

import LanguageTestGame from "@/components/LanguageTestGame";
import {
  ENGLISH_CURRICULUM,
  getEnglishQuestions,
  calculateUSGrade,
  ENGLISH_SUBTOPIC_HINTS,
} from "@/lib/englishCurriculum";
import type { LanguageTestConfig } from "@/lib/curriculumTypes";

const EN_CONFIG: LanguageTestConfig = {
  gameId: "englishtest",
  title: "ENGLISH TEST",
  color: "#3B82F6",
  gradeLabel: "Grade",
  gradeSublabel: "Gr.",

  countries: [
    {
      code: "US",
      flag: "🇺🇸",
      label: "United States",
      sub: "A / B / C / D / F",
    },
  ],

  curriculum: ENGLISH_CURRICULUM,
  calculateMark: calculateUSGrade,
  getQuestions: getEnglishQuestions,
  subtopicHints: ENGLISH_SUBTOPIC_HINTS,

  floatingChars: ["A", "B", "C", "?", "!", "the", "and", "..."],
  floatingColors: [
    "rgba(59,130,246,0.15)",
    "rgba(99,102,241,0.15)",
    "rgba(139,92,246,0.12)",
    "rgba(59,130,246,0.10)",
    "rgba(16,185,129,0.10)",
  ],

  labels: {
    selectCountry: "Select your country",
    selectGrade: "Select your grade",
    selectTopics: "Select topics",
    startTest: "START TEST",
    question: "Question",
    correct: "Correct!",
    answerBtn: "ANSWER",
    again: "Try Again",
    home: "Main Menu",
    gradeMark: "Grade",
    review: "Review",
    areas: "areas",
    soon: "soon",
    questions: "Qs",
    all: "All",
    allCheck: "All ✓",
    placeholder: "Your answer...",
  },
};

export default function EnglishTestPage() {
  return <LanguageTestGame config={EN_CONFIG} />;
}
