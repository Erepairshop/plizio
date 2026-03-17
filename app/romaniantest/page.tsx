"use client";

import LanguageTestGame from "@/components/LanguageTestGame";
import {
  ROMANIAN_CURRICULUM,
  getRomanianQuestions,
  calculateRomanianGrade,
  ROMANIAN_SUBTOPIC_HINTS,
} from "@/lib/romanianCurriculum";
import type { LanguageTestConfig } from "@/lib/curriculumTypes";

const RO_CONFIG: LanguageTestConfig = {
  gameId: "romaniantest",
  title: "TEST LIMBA ROMÂNĂ",
  color: "#EF4444",      // Romanian red
  gradeLabel: "Clasa",
  gradeSublabel: "Cl.",

  countries: [
    {
      code: "RO",
      flag: "🇷🇴",
      label: "România",
      sub: "FB / B / S / I",
    },
  ],

  curriculum: ROMANIAN_CURRICULUM,
  calculateMark: calculateRomanianGrade,
  getQuestions: getRomanianQuestions,
  subtopicHints: ROMANIAN_SUBTOPIC_HINTS,

  floatingChars: ["Ă", "Â", "Î", "Ș", "Ț", "?", "!", "..."],
  floatingColors: [
    "rgba(239,68,68,0.15)",
    "rgba(59,130,246,0.15)",
    "rgba(234,179,8,0.12)",
    "rgba(239,68,68,0.10)",
    "rgba(16,185,129,0.10)",
  ],

  labels: {
    selectCountry: "Alege țara",
    selectGrade: "Alege clasa",
    selectTopics: "Alege temele",
    startTest: "ÎNCEPE TESTUL",
    question: "Întrebarea",
    correct: "Corect!",
    answerBtn: "RĂSPUNDE",
    again: "Încearcă din nou",
    home: "Meniu principal",
    gradeMark: "Calificativ",
    review: "Recapitulare",
    areas: "domenii",
    soon: "în curând",
    questions: "Într.",
    all: "Toate",
    allCheck: "Toate ✓",
    placeholder: "Răspunsul tău...",
  },
};

export default function RomanianTestPage() {
  return <LanguageTestGame config={RO_CONFIG} />;
}
