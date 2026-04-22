"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { INFO_K5_CURRICULUM, getInfoK5Questions } from "@/lib/informatikaCurriculum5";
import { INFO_K6_CURRICULUM, getInfoK6Questions } from "@/lib/informatikaCurriculum6";
import { INFO_K7_CURRICULUM, getInfoK7Questions } from "@/lib/informatikaCurriculum7";
import { INFO_K8_CURRICULUM, getInfoK8Questions } from "@/lib/informatikaCurriculum8";
import { asCurriculumThemes, calculateKemiaMark } from "@/lib/kemiaCurriculumShared";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const INFO_CHARS = ["💻", "🖥️", "⌨️", "🖱️", "📱", "🌐", "🔐", "💡", "🤖", "📊", "🔌", "💾", "📡", "🧠"];
const INFO_COLORS = [
  "rgba(59,130,246,0.15)",
  "rgba(139,92,246,0.12)",
  "rgba(245,158,11,0.10)",
  "rgba(239,68,68,0.10)",
  "rgba(16,185,129,0.10)",
];

const INFO_CONFIG: LanguageTestEngineConfig = {
  gameId: "informatikatest",
  title: "INFORMATIKA TEST",
  icon: "💻",
  color: "#3B82F6",

  ttsLang: "hu-HU",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "hu-HU",
  storageKey: "informatikatest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: INFO_CHARS,
  bgColors: INFO_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  calculateMark: (pct) => calculateKemiaMark(pct),

  curriculum: {
    5: asCurriculumThemes(INFO_K5_CURRICULUM),
    6: asCurriculumThemes(INFO_K6_CURRICULUM),
    7: asCurriculumThemes(INFO_K7_CURRICULUM),
    8: asCurriculumThemes(INFO_K8_CURRICULUM),
  },

  getQuestions: (grade, subtopicIds, count) => {
    if (grade === 5) return getInfoK5Questions(subtopicIds, count);
    if (grade === 6) return getInfoK6Questions(subtopicIds, count);
    if (grade === 7) return getInfoK7Questions(subtopicIds, count);
    return getInfoK8Questions(subtopicIds, count);
  },

  labels: {
    selectCountry: "Válaszd ki az országod",
    selectGrade: "Válaszd ki az osztályt",
    gradePrefix: "K",
    gradeFull: "Osztály",
    selectTopics: "Válaszd ki az informatika témákat",
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

export default function InformatikaTestPage() {
  return <LanguageTestEngine config={INFO_CONFIG} />;
}
