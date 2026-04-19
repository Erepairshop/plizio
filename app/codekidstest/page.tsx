"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { INFO_K1_CURRICULUM, getInfoK1Questions } from "@/lib/informatikaCurriculum1";
import { INFO_K2_CURRICULUM, getInfoK2Questions } from "@/lib/informatikaCurriculum2";
import { INFO_K3_CURRICULUM, getInfoK3Questions } from "@/lib/informatikaCurriculum3";
import { INFO_K4_CURRICULUM, getInfoK4Questions } from "@/lib/informatikaCurriculum4";
import { asCurriculumThemes, calculateKemiaMark } from "@/lib/kemiaCurriculumShared";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const CODEKIDS_CHARS = ["💻", "🎮", "🧑‍💻", "🎯", "⚙️", "🔌", "🚀", "💡"];
const CODEKIDS_COLORS = [
  "rgba(96,165,250,0.15)",  // Blue pastel
  "rgba(167,139,250,0.12)", // Purple pastel
  "rgba(251,191,36,0.15)",  // Amber pastel
  "rgba(244,114,182,0.12)", // Pink pastel
  "rgba(52,211,153,0.10)",  // Emerald pastel
];

const CODEKIDS_CONFIG: LanguageTestEngineConfig = {
  gameId: "codekidstest",
  title: "Code Kids Test",
  icon: "🧑‍💻",
  color: "#60A5FA", // Pastel Blue

  ttsLang: "hu-HU",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "hu-HU",
  storageKey: "codekidstest_country",
  grades: [1, 2, 3, 4],
  hideLesetest: true,

  bgChars: CODEKIDS_CHARS,
  bgColors: CODEKIDS_COLORS,

  countries: [
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
    { code: "RO", flag: "🇷🇴", label: "România", sub: "1–10 notă" },
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
  ],
  calculateMark: (pct) => calculateKemiaMark(pct),

  curriculum: {
    1: asCurriculumThemes(INFO_K1_CURRICULUM),
    2: asCurriculumThemes(INFO_K2_CURRICULUM),
    3: asCurriculumThemes(INFO_K3_CURRICULUM),
    4: asCurriculumThemes(INFO_K4_CURRICULUM),
  },

  getQuestions: (grade, subtopicIds, count) => {
    if (grade === 1) return getInfoK1Questions(subtopicIds, count);
    if (grade === 2) return getInfoK2Questions(subtopicIds, count);
    if (grade === 3) return getInfoK3Questions(subtopicIds, count);
    return getInfoK4Questions(subtopicIds, count);
  },

  labels: {
    selectCountry: "Válaszd ki az országod",
    selectGrade: "Válaszd ki az osztályt",
    gradePrefix: "K",
    gradeFull: "Osztály",
    selectTopics: "Válaszd ki a témákat",
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

export default function CodeKidsTestPage() {
  return <LanguageTestEngine config={CODEKIDS_CONFIG} />;
}
