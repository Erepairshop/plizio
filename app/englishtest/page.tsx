"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  ENGLISH_CURRICULUM,
  getEnglishQuestions,
  calculateUSGrade,
  ENGLISH_SUBTOPIC_HINTS,
  getEnglishSubtopicHint,
} from "@/lib/englishCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const EN_CHARS = ["A","B","C","D","E","F","G","?","!","the","a","is","...","I","you","we"];
const EN_COLORS = ["#3B82F6","#10B981","#F59E0B","#EF4444","#FFFFFF"];

const EN_CONFIG: LanguageTestEngineConfig = {
  gameId: "englishtest",
  title: "ENGLISH TEST",
  icon: "📖",
  color: "#3B82F6",

  ttsLang: "en-US",
  ttsRate: 0.88,
  ttsPitch: 1.0,
  dateLocale: "en-US",
  storageKey: "englishtest_country",

  bgChars: EN_CHARS,
  bgColors: EN_COLORS,

  countries: [
    { code: "US", flag: "🇺🇸", label: "United States", sub: "A / B / C / D / F" },
    { code: "GB", flag: "🇬🇧", label: "United Kingdom", sub: "A / B / C / D / F" },
    { code: "AU", flag: "🇦🇺", label: "Australia",      sub: "A / B / C / D / F" },
    { code: "CA", flag: "🇨🇦", label: "Canada",         sub: "A / B / C / D / F" },
  ],
  calculateMark: (pct) => {
    const m = calculateUSGrade(pct);
    return { note: m.label, label: m.description, color: m.color, emoji: m.emoji };
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  curriculum: ENGLISH_CURRICULUM as any,
  getQuestions: getEnglishQuestions,
  subtopicHints: ENGLISH_SUBTOPIC_HINTS,
  getSubtopicHint: getEnglishSubtopicHint,

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
    task: "Task",
    interactiveTask: "Interactive Task",
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
