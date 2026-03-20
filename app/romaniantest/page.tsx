"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  ROMANIAN_CURRICULUM,
  getRomanianQuestions,
  calculateRomanianGrade,
  ROMANIAN_SUBTOPIC_HINTS,
} from "@/lib/romanianCurriculum";
import { getRandomRomanianPassage } from "@/lib/romanianLesetest";
import { ROMANIAN_VISUAL_TYPES } from "@/lib/romanianVisualGenerators";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const RO_CONFIG: LanguageTestEngineConfig = {
  gameId: "romaniantest",
  title: "TEST LIMBA ROMÂNĂ",
  icon: "📝",
  color: "#EF4444",

  ttsLang: "ro-RO",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "ro-RO",
  storageKey: "romaniantest_country",

  bgChars: ["Ă", "Â", "Î", "Ș", "Ț", "A", "B", "C", "?", "!", "R", "O", "M", "N"],
  bgColors: ["#EF4444", "#3B82F6", "#EAB308", "#10B981", "#FFFFFF"],

  countries: [
    { code: "RO", flag: "🇷🇴", label: "România", sub: "Note 1–10" },
  ],
  calculateMark: calculateRomanianGrade,

  curriculum: ROMANIAN_CURRICULUM,
  getQuestions: getRomanianQuestions,
  subtopicHints: ROMANIAN_SUBTOPIC_HINTS,

  getReadingPassage: getRandomRomanianPassage,

  visualTypes: ROMANIAN_VISUAL_TYPES,
  visualGrades: [1, 2, 3],

  labels: {
    selectCountry: "Alege țara",
    selectGrade: "Alege clasa",
    gradePrefix: "Cl.",
    gradeFull: "Clasa",
    selectTopics: "Alege temele pentru test",
    all: "Toate",
    allCheck: "Toate ✓",
    soon: "în curând",
    questionsShort: "Într.",
    startTest: "ÎNCEPE TESTUL →",
    areas: "domenii",
    readingTest: "📖 Test de lectură",
    readingTestDesc: "Citește textul și răspunde la întrebări · 3 Într.",
    task: "Exercițiul",
    interactiveTask: "Exercițiu interactiv",
    readAloud: "Citește cu voce tare",
    answerPlaceholder: "Răspunsul tău...",
    submit: "Trimite ✓",
    back: "Înapoi",
    markLabel: "Nota",
    correct: "corect",
    review: "Evaluare",
    tryAgain: "Din nou",
    mainMenu: "Meniu principal",
    pdf: "PDF",
    points: "Puncte",
    pointsShort: "Pct.",
    name: "Nume",
    date: "Data",
    wrongWordNr: "Cuvântul greșit nr.:",
    root: "Rădăcină:",
  },
};

export default function RomanianTestPage() {
  return <LanguageTestEngine config={RO_CONFIG} />;
}
