"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions, calculateKemiaMark } from "@/lib/kemiaCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/kemiaCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/kemiaCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/kemiaCurriculum8";
import "@/lib/kemiaRegistration";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const KEMIA_CHARS = ["⚗️", "🧪", "⚛️", "🧬", "💧", "🔥", "🫧", "🔬", "🧫", "🧱", "🌡️", "🔋", "🌍", "☣️"];
const KEMIA_COLORS = [
  "rgba(16,185,129,0.15)",
  "rgba(59,130,246,0.12)",
  "rgba(168,85,247,0.12)",
  "rgba(244,63,94,0.10)",
  "rgba(245,158,11,0.10)",
];

const KEMIA_CONFIG: LanguageTestEngineConfig = {
  gameId: "kemiatest",
  title: "CHEMIE TEST",
  icon: "⚗️",
  color: "#10B981",

  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "de-DE",
  storageKey: "kemiatest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: KEMIA_CHARS,
  bgColors: KEMIA_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
  ],
  calculateMark: (pct) => calculateKemiaMark(pct),

  curriculum: {
    5: K5_CURRICULUM as any,
    6: K6_CURRICULUM as any,
    7: K7_CURRICULUM as any,
    8: K8_CURRICULUM as any,
  },

  getQuestions: (grade, subtopicIds, count) => {
    if (grade === 5) return getK5Questions(subtopicIds, count);
    if (grade === 6) return getK6Questions(subtopicIds, count);
    if (grade === 7) return getK7Questions(subtopicIds, count);
    return getK8Questions(subtopicIds, count);
  },

  labels: {
    selectCountry: "Wähle dein Land",
    selectGrade: "Wähle deine Klassenstufe",
    gradePrefix: "Kl.",
    gradeFull: "Klasse",
    selectTopics: "Themen für deinen Chemietest auswählen",
    all: "Alle",
    allCheck: "Alle ✓",
    soon: "bald",
    questionsShort: "Fr.",
    startTest: "TEST STARTEN →",
    areas: "Bereiche",
    task: "Aufgabe",
    interactiveTask: "Interaktive Aufgabe",
    readAloud: "Vorlesen",
    answerPlaceholder: "Antwort...",
    submit: "Abgeben ✓",
    back: "Zurück",
    markLabel: "Note",
    correct: "richtig",
    review: "Auswertung",
    tryAgain: "Nochmal",
    mainMenu: "Hauptmenü",
    pdf: "PDF",
    points: "Punkte",
    pointsShort: "Pkt.",
    name: "Name",
    date: "Datum",
  },
};

export default function KemiaTestPage() {
  return <LanguageTestEngine config={KEMIA_CONFIG} />;
}
