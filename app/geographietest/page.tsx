"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions, calculateGeographieMark } from "@/lib/geographieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/geographieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/geographieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/geographieCurriculum8";
import { asCurriculumThemes } from "@/lib/geographieCurriculumShared";
import "@/lib/geographieRegistration";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const GEO_CHARS = ["🗺️", "🌍", "🧭", "⛰️", "🌊", "🌋", "🏞️", "🛰️", "🪨", "🧱", "🌦️", "🌴"];
const GEO_COLORS = [
  "rgba(6,182,212,0.16)",
  "rgba(20,184,166,0.12)",
  "rgba(14,165,233,0.12)",
  "rgba(16,185,129,0.10)",
  "rgba(34,211,238,0.10)",
];

const GEO_CONFIG = {
  gameId: "geographietest",
  title: "GEOGRAPHIE TEST",
  icon: "🗺️",
  color: "#06B6D4",
  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.05,
  dateLocale: "de-DE",
  storageKey: "geographietest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,
  bgChars: GEO_CHARS,
  bgColors: GEO_COLORS,
  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
  ],
  calculateMark: (pct) => calculateGeographieMark(pct),
  curriculum: {
    5: asCurriculumThemes(K5_CURRICULUM),
    6: asCurriculumThemes(K6_CURRICULUM),
    7: asCurriculumThemes(K7_CURRICULUM),
    8: asCurriculumThemes(K8_CURRICULUM),
  },
  getQuestions: (grade: number, subtopicIds: string[], count: number) => {
    if (grade === 5) return getK5Questions(subtopicIds, "de", count);
    if (grade === 6) return getK6Questions(subtopicIds, "de", count);
    if (grade === 7) return getK7Questions(subtopicIds, "de", count);
    return getK8Questions(subtopicIds, "de", count);
  },
  labels: {
    selectCountry: "Wähle dein Land",
    selectGrade: "Wähle deine Klassenstufe",
    gradePrefix: "Kl.",
    gradeFull: "Klasse",
    selectTopics: "Themen für deinen Geographietest auswählen",
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
} as LanguageTestEngineConfig;

export default function GeographieTestPage() {
  return <LanguageTestEngine config={GEO_CONFIG} />;
}
