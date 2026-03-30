"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions, calculatePhysikMark } from "@/lib/physikCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/physikCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/physikCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/physikCurriculum8";
// Self-register all generators
import "@/lib/physikRegistration";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const PHYSIK_CHARS = ["⚛️", "🔬", "⚡", "🧲", "🌊", "💡", "🌡️", "🔊", "🚀", "🔭", "⚙️", "🌍", "🔋", "🧪", "☢️", "📡"];
const PHYSIK_COLORS = [
  "rgba(107,76,230,0.15)",
  "rgba(99,102,241,0.12)",
  "rgba(139,92,246,0.12)",
  "rgba(107,76,230,0.10)",
  "rgba(79,70,229,0.10)",
];

function calculatePhysikCountryMark(pct: number, country: string) {
  if (country === "AT" || country === "HU") {
    if (pct >= 87) return { note: 1, label: "Sehr gut", color: "#FFD700", emoji: "🌟" };
    if (pct >= 73) return { note: 2, label: "Gut", color: "#00FF88", emoji: "😊" };
    if (pct >= 57) return { note: 3, label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
    if (pct >= 40) return { note: 4, label: "Genügend", color: "#FF6B00", emoji: "😅" };
    return { note: 5, label: "Nicht genügend", color: "#FF4444", emoji: "😟" };
  }
  if (country === "CH") {
    if (pct >= 92) return { note: 6, label: "Sehr gut", color: "#FFD700", emoji: "🌟" };
    if (pct >= 81) return { note: 5, label: "Gut", color: "#00FF88", emoji: "😊" };
    if (pct >= 67) return { note: 4, label: "Genügend", color: "#00D4FF", emoji: "🙂" };
    if (pct >= 50) return { note: 3, label: "Schwach", color: "#FF6B00", emoji: "😅" };
    if (pct >= 30) return { note: 2, label: "Sehr schwach", color: "#FF4444", emoji: "😟" };
    return { note: 1, label: "Unbrauchbar", color: "#FF2D78", emoji: "😢" };
  }
  return calculatePhysikMark(pct);
}

const PHYSIK_CONFIG: LanguageTestEngineConfig = {
  gameId: "physiktest",
  title: "PHYSIK TEST",
  icon: "⚛️",
  color: "#6B4CE6",

  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "de-DE",
  storageKey: "physiktest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: PHYSIK_CHARS,
  bgColors: PHYSIK_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
  ],
  calculateMark: (pct, country) => calculatePhysikCountryMark(pct, country),

  curriculum: {
    5: K5_CURRICULUM,
    6: K6_CURRICULUM,
    7: K7_CURRICULUM,
    8: K8_CURRICULUM,
  } as any,

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
    selectTopics: "Themen für deinen Physiktest auswählen",
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

export default function PhysikTestPage() {
  return <LanguageTestEngine config={PHYSIK_CONFIG} />;
}
