"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { AI_K5_CURRICULUM, getAIK5Questions } from "@/lib/aiCurriculum5";
import { AI_K6_CURRICULUM, getAIK6Questions } from "@/lib/aiCurriculum6";
import { AI_K7_CURRICULUM, getAIK7Questions } from "@/lib/aiCurriculum7";
import { AI_K8_CURRICULUM, getAIK8Questions } from "@/lib/aiCurriculum8";
import { asCurriculumThemes, calculateKemiaMark } from "@/lib/kemiaCurriculumShared";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const AI_CHARS = ["🤖", "🧠", "💬", "⚖️", "🛠️", "🚀", "📊", "🔒", "💡", "📡", "🔋"];
const AI_COLORS = [
  "rgba(59,130,246,0.15)",
  "rgba(139,92,246,0.12)",
  "rgba(245,158,11,0.10)",
  "rgba(239,68,68,0.10)",
  "rgba(16,185,129,0.10)",
];

const AI_CONFIG: LanguageTestEngineConfig = {
  gameId: "aitest",
  title: "AI TEST",
  icon: "🤖",
  color: "#3B82F6",

  ttsLang: "hu-HU",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "hu-HU",
  storageKey: "aitest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: AI_CHARS,
  bgColors: AI_COLORS,

  countries: [
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
    { code: "RO", flag: "🇷🇴", label: "România", sub: "1–10 notă" },
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
  ],
  calculateMark: (pct) => calculateKemiaMark(pct),

  curriculum: {
    5: asCurriculumThemes(AI_K5_CURRICULUM),
    6: asCurriculumThemes(AI_K6_CURRICULUM),
    7: asCurriculumThemes(AI_K7_CURRICULUM),
    8: asCurriculumThemes(AI_K8_CURRICULUM),
  },

  getQuestions: (grade, subtopicIds, count) => {
    if (grade === 5) return getAIK5Questions(subtopicIds, count);
    if (grade === 6) return getAIK6Questions(subtopicIds, count);
    if (grade === 7) return getAIK7Questions(subtopicIds, count);
    return getAIK8Questions(subtopicIds, count);
  },

  labels: {
    selectCountry: "Válaszd ki az országod",
    selectGrade: "Válaszd ki az osztályt",
    gradePrefix: "K",
    gradeFull: "Osztály",
    selectTopics: "Válaszd ki az AI témákat",
    all: "Összes",
    allCheck: "Összes ✓",
    soon: "hamarosan",
    questionsShort: "K.",
    startTest: "TESZT INDÍTÁSA →",
    areas: "Témakörök",
    task: "Feladat",
    interactiveTask: "Interaktív feladat",
    readAloud: "Felolvasás",
    answerPlaceholder: "Válasz...",
    submit: "Leadás ✓",
    back: "Vissza",
    markLabel: "Jegy",
    correct: "helyes",
    review: "Kiértékelés",
    tryAgain: "Újra",
    mainMenu: "Főmenü",
    pdf: "PDF",
    points: "Pont",
    pointsShort: "P.",
    name: "Név",
    date: "Dátum",
  },
};

export default function AITestPage() {
  return <LanguageTestEngine config={AI_CONFIG} />;
}
