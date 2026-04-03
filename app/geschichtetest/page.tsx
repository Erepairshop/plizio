"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  GESCHICHTE_CURRICULUM,
  getGeschichteQuestions,
  calculateGeschichteMark,
  GESCHICHTE_SUBTOPIC_HINTS,
} from "@/lib/geschichteCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const BG_CHARS = ["⚔️", "🏰", "👑", "📜", "🗡️"];
const BG_COLORS = [
  "rgba(245,158,11,0.15)",
  "rgba(139,92,246,0.15)",
  "rgba(59,130,246,0.15)",
  "rgba(239,68,68,0.15)",
];

const GESCHICHTE_CONFIG: LanguageTestEngineConfig = {
  gameId: "geschichtetest",
  title: "GESCHICHTE TEST",
  icon: "🏛️",
  color: "#F59E0B",

  ttsLang: "de-DE",
  ttsRate: 0.92,
  ttsPitch: 1.05,
  dateLocale: "de-DE",
  storageKey: "geschichtetest_country",

  bgChars: BG_CHARS,
  bgColors: BG_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  calculateMark: (pct, country) => calculateGeschichteMark(pct),

  curriculum: GESCHICHTE_CURRICULUM as any,
  getQuestions: getGeschichteQuestions as any,
  subtopicHints: GESCHICHTE_SUBTOPIC_HINTS,

  labels: {
    selectCountry: "Wähle dein Land",
    selectGrade: "Wähle deine Klassenstufe",
    gradePrefix: "Kl.",
    gradeFull: "Klasse",
    selectTopics: "Themen für deinen Test auswählen",
    all: "Alle",
    allCheck: "Alle ✓",
    soon: "bald",
    questionsShort: "Fr.",
    startTest: "TEST STARTEN →",
    areas: "Bereiche",
    readingTest: "📖 Lesetest",
    readingTestDesc: "Text lesen & Fragen beantworten · 3 Fr.",
    task: "Aufgabe",
    interactiveTask: "Interaktive Aufgabe",
    readAloud: "Vorlesen",
    clickCorrectImage: "🖼 Klicke auf das richtige Bild:",
    whichLetterStarts: "🔤 Mit welchem Buchstaben beginnt das Wort?",
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

export default function GeschichteTestPage() {
  return <LanguageTestEngine config={GESCHICHTE_CONFIG} />;
}
