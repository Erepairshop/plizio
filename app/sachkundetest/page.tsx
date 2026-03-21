"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  SACHKUNDE_CURRICULUM,
  getSachkundeQuestions,
  calculateSachkundeMark,
  SACHKUNDE_SUBTOPIC_HINTS,
} from "@/lib/sachkundeCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const SK_CHARS = ["🌿", "🐾", "🧲", "🌍", "💧", "☀️", "🌡️", "🧪", "🔬", "🗺️", "⚡", "🌳", "🦋", "🐝"];
const SK_COLORS = [
  "rgba(76,175,80,0.15)",
  "rgba(78,205,196,0.15)",
  "rgba(69,183,209,0.12)",
  "rgba(255,107,107,0.10)",
  "rgba(255,234,167,0.10)",
];

const SACHKUNDE_CONFIG: LanguageTestEngineConfig = {
  gameId: "sachkundetest",
  title: "SACHKUNDE TEST",
  icon: "🌍",
  color: "#4CAF50",

  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "de-DE",
  storageKey: "sachkundetest_country",

  bgChars: SK_CHARS,
  bgColors: SK_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  calculateMark: (pct, country) => calculateSachkundeMark(pct, country),

  curriculum: SACHKUNDE_CURRICULUM as any,
  getQuestions: getSachkundeQuestions as any,
  subtopicHints: SACHKUNDE_SUBTOPIC_HINTS,

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

export default function SachkundeTestPage() {
  return <LanguageTestEngine config={SACHKUNDE_CONFIG} />;
}
