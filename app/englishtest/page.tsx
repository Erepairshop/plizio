"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  ENGLISH_CURRICULUM,
  getEnglishQuestions,
  calculateUSGrade,
  ENGLISH_SUBTOPIC_HINTS,
} from "@/lib/englishCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const EN_CONFIG: LanguageTestEngineConfig = {
  gameId: "englishtest",
  title: "ENGLISH TEST",
  icon: "📝",
  color: "#3B82F6",

  ttsLang: "en-US",
  ttsRate: 0.92,
  ttsPitch: 1.05,
  dateLocale: "en-US",
  storageKey: "englishtest_country",

  bgChars: ["A", "B", "C", "?", "!", "the", "and", "is", "I", "you", "we", "..."],
  bgColors: [
    "rgba(59,130,246,0.15)",
    "rgba(99,102,241,0.15)",
    "rgba(139,92,246,0.12)",
    "rgba(59,130,246,0.10)",
    "rgba(16,185,129,0.10)",
  ],

  countries: [
    { code: "US", flag: "🇺🇸", label: "United States", sub: "A / B / C / D / F" },
    { code: "GB", flag: "🇬🇧", label: "United Kingdom", sub: "A / B / C / D / F" },
    { code: "AU", flag: "🇦🇺", label: "Australia", sub: "A / B / C / D / F" },
    { code: "CA", flag: "🇨🇦", label: "Canada", sub: "A / B / C / D / F" },
  ],
  calculateMark: calculateUSGrade,

  curriculum: ENGLISH_CURRICULUM,
  getQuestions: getEnglishQuestions,
  subtopicHints: ENGLISH_SUBTOPIC_HINTS,

  labels: {
    selectCountry: "Select your country",
    selectGrade: "Select your grade level",
    gradePrefix: "Gr.",
    gradeFull: "Grade",
    selectTopics: "Choose topics for your test",
    all: "All",
    allCheck: "All ✓",
    soon: "soon",
    questionsShort: "Qs",
    startTest: "START TEST →",
    areas: "areas",
    task: "Question",
    interactiveTask: "Interactive task",
    readAloud: "Read aloud",
    answerPlaceholder: "Your answer...",
    submit: "Submit ✓",
    back: "Back",
    markLabel: "Grade",
    correct: "correct",
    review: "Review",
    tryAgain: "Try Again",
    mainMenu: "Main Menu",
    pdf: "PDF",
    points: "Points",
    pointsShort: "Pts.",
    name: "Name",
    date: "Date",
  },
};

export default function EnglishTestPage() {
  return <LanguageTestEngine config={EN_CONFIG} />;
}
