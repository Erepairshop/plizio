"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions, calculateBiologieMark } from "@/lib/biologieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/biologieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/biologieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/biologieCurriculum8";
// Generators self-register via import
import "@/lib/biologieGenerators5";
import "@/lib/biologieGenerators6";
import "@/lib/biologieGenerators7";
import "@/lib/biologieGenerators8";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const BIO_CHARS = ["🧬", "🔬", "🌿", "🐾", "🦋", "🐟", "🌱", "🫀", "🧠", "🦴", "🌳", "🐝", "🦎", "🐸", "🌺", "🧪"];
const BIO_COLORS = [
  "rgba(76,175,80,0.15)",
  "rgba(46,204,113,0.12)",
  "rgba(33,150,243,0.12)",
  "rgba(76,175,80,0.10)",
  "rgba(0,150,136,0.10)",
];

const BIO_CONFIG: LanguageTestEngineConfig = {
  gameId: "biologietest",
  title: "BIOLOGIE TEST",
  icon: "🔬",
  color: "#4CAF50",

  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "de-DE",
  storageKey: "biologietest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: BIO_CHARS,
  bgColors: BIO_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
  ],
  calculateMark: (pct) => calculateBiologieMark(pct),

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
    selectTopics: "Themen für deinen Test auswählen",
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

export default function BiologieTestPage() {
  return <LanguageTestEngine config={BIO_CONFIG} />;
}
