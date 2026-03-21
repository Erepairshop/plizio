"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  HUNGARIAN_CURRICULUM,
  getHungarianQuestions,
  calculateHungarianGrade,
  HUNGARIAN_SUBTOPIC_HINTS,
} from "@/lib/hungarianCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { HUNGARIAN_VISUAL_TYPES } from "@/lib/magyarVisualGenerators";

const HU_CONFIG: LanguageTestEngineConfig = {
  gameId: "magyarteszt",
  title: "MAGYAR TESZT",
  icon: "📝",
  color: "#FF2D78",

  ttsLang: "hu-HU",
  ttsRate: 0.90,
  ttsPitch: 1.05,
  dateLocale: "hu-HU",
  storageKey: "magyarteszt_country",

  bgChars: ["A", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű", "?", "!"],
  bgColors: [
    "rgba(255,45,120,0.15)",
    "rgba(0,212,255,0.15)",
    "rgba(16,185,129,0.12)",
    "rgba(255,215,0,0.10)",
    "rgba(180,77,255,0.10)",
  ],

  countries: [
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 (5=jeles)" },
  ],
  calculateMark: calculateHungarianGrade,

  curriculum: HUNGARIAN_CURRICULUM,
  getQuestions: getHungarianQuestions,
  subtopicHints: HUNGARIAN_SUBTOPIC_HINTS,

  visualTypes: HUNGARIAN_VISUAL_TYPES,
  visualGrades: [1, 2, 3, 4, 5, 6, 7, 8],

  labels: {
    selectCountry: "Válaszd ki az országodat",
    selectGrade: "Válaszd ki az osztályodat",
    gradePrefix: "Oszt.",
    gradeFull: "Osztály",
    selectTopics: "Válaszd ki a témákat a teszthez",
    all: "Mind",
    allCheck: "Mind ✓",
    soon: "hamarosan",
    questionsShort: "Kérd.",
    startTest: "TESZT INDÍTÁSA →",
    areas: "terület",
    task: "Feladat",
    interactiveTask: "Interaktív feladat",
    readAloud: "Felolvasás",
    answerPlaceholder: "Válaszod...",
    submit: "Beküldés ✓",
    back: "Vissza",
    markLabel: "Osztályzat",
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

export default function MagyarTesztPage() {
  return <LanguageTestEngine config={HU_CONFIG} />;
}
