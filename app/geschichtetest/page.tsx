"use client";

import { useMemo } from "react";
import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import {
  GESCHICHTE_CURRICULUM,
  getGeschichteQuestions,
  GESCHICHTE_SUBTOPIC_HINTS,
  getCurriculumForCountry,
} from "@/lib/geschichteCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { useLang } from "@/components/LanguageProvider";
import { getLocalizedGeschichteVisualTypes } from "@/lib/geschichteVisualGenerators";

const BG_CHARS = ["⚔️", "🏰", "👑", "📜", "🗡️"];
const BG_COLORS = [
  "rgba(245,158,11,0.15)",
  "rgba(139,92,246,0.15)",
  "rgba(59,130,246,0.15)",
  "rgba(239,68,68,0.15)",
];

const GESCHICHTE_CONFIG: LanguageTestEngineConfig = {
  gameId: "geschichtetest",
  title: { de: "GESCHICHTE TEST", hu: "TÖRTÉNELEM TESZT", ro: "TEST DE ISTORIE", en: "HISTORY TEST" },
  icon: "🏛️",
  color: "#F59E0B",

  ttsLang: "de-DE",
  ttsRate: 0.92,
  ttsPitch: 1.05,
  dateLocale: "de-DE",
  storageKey: "geschichtetest_country",

  bgChars: BG_CHARS,
  bgColors: BG_COLORS,
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
    { code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" },
    { code: "RO", flag: "🇷🇴", label: "România", sub: "Note 1–10" },
    { code: "US", flag: "🇺🇸", label: "United States", sub: "A / B / C / D / F" },
    { code: "GB", flag: "🇬🇧", label: "United Kingdom", sub: "Grade 9–1 (GCSE)" },
  ],
  calculateMark: calculateCountryAwareMark,

  curriculum: GESCHICHTE_CURRICULUM as any,
  getCurriculumForCountry: getCurriculumForCountry as any,
  getQuestions: getGeschichteQuestions as any,
  subtopicHints: GESCHICHTE_SUBTOPIC_HINTS,

  labels: {
    selectCountry: { de: "Wähle dein Land", hu: "Válassz országot", ro: "Alege țara", en: "Select your country" },
    selectGrade: { de: "Wähle deine Klassenstufe", hu: "Válassz osztályt", ro: "Alege clasa", en: "Select your grade" },
    gradePrefix: { de: "Kl.", hu: "O.", ro: "Cl.", en: "Gr." },
    gradeFull: { de: "Klasse", hu: "Osztály", ro: "Clasa", en: "Grade" },
    selectTopics: { de: "Themen für deinen Test auswählen", hu: "Válassz témákat a teszthez", ro: "Alege temele pentru test", en: "Select topics for your test" },
    all: { de: "Alle", hu: "Mind", ro: "Toate", en: "All" },
    allCheck: { de: "Alle ✓", hu: "Mind ✓", ro: "Toate ✓", en: "All ✓" },
    soon: { de: "bald", hu: "hamarosan", ro: "în curând", en: "soon" },
    questionsShort: { de: "Fr.", hu: "Kérd.", ro: "Într.", en: "Qs" },
    startTest: { de: "TEST STARTEN →", hu: "TESZT INDÍTÁSA →", ro: "ÎNCEPE TESTUL →", en: "START TEST →" },
    areas: { de: "Bereiche", hu: "témakör", ro: "domenii", en: "areas" },
    readingTest: { de: "📖 Lesetest", hu: "📖 Olvasás teszt", ro: "📖 Test de lectură", en: "📖 Reading test" },
    readingTestDesc: { de: "Text lesen & Fragen beantworten · 3 Fr.", hu: "Szöveg olvasása és kérdések · 3 Kérd.", ro: "Citește textul și răspunde · 3 Într.", en: "Read text & answer questions · 3 Qs" },
    task: { de: "Aufgabe", hu: "Feladat", ro: "Exercițiul", en: "Task" },
    interactiveTask: { de: "Interaktive Aufgabe", hu: "Interaktív feladat", ro: "Exercițiu interactiv", en: "Interactive task" },
    readAloud: { de: "Vorlesen", hu: "Felolvasás", ro: "Citește cu voce tare", en: "Read aloud" },
    clickCorrectImage: { de: "🖼 Klicke auf das richtige Bild:", hu: "🖼 Kattints a helyes képre:", ro: "🖼 Fă clic pe imaginea corectă:", en: "🖼 Click the correct image:" },
    whichLetterStarts: { de: "🔤 Mit welchem Buchstaben beginnt das Wort?", hu: "🔤 Milyen betűvel kezdődik a szó?", ro: "🔤 Cu ce literă începe cuvântul?", en: "🔤 What letter does the word start with?" },
    answerPlaceholder: { de: "Antwort...", hu: "Válasz...", ro: "Răspuns...", en: "Answer..." },
    submit: { de: "Abgeben ✓", hu: "Beküldés ✓", ro: "Trimite ✓", en: "Submit ✓" },
    back: { de: "Zurück", hu: "Vissza", ro: "Înapoi", en: "Back" },
    markLabel: { de: "Note", hu: "Jegy", ro: "Nota", en: "Grade" },
    correct: { de: "richtig", hu: "helyes", ro: "corect", en: "correct" },
    review: { de: "Auswertung", hu: "Értékelés", ro: "Evaluare", en: "Review" },
    tryAgain: { de: "Nochmal", hu: "Újra", ro: "Din nou", en: "Try again" },
    mainMenu: { de: "Hauptmenü", hu: "Főmenü", ro: "Meniu principal", en: "Main menu" },
    pdf: { de: "PDF", hu: "PDF", ro: "PDF", en: "PDF" },
    points: { de: "Punkte", hu: "Pontok", ro: "Puncte", en: "Points" },
    pointsShort: { de: "Pkt.", hu: "P.", ro: "Pct.", en: "Pts." },
    name: { de: "Name", hu: "Név", ro: "Nume", en: "Name" },
    date: { de: "Datum", hu: "Dátum", ro: "Data", en: "Date" },
  },
};

export default function GeschichteTestPage() {
  const { lang } = useLang();
  const locale = { de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE";
  const config = useMemo(() => ({
    ...GESCHICHTE_CONFIG,
    ttsLang: locale,
    dateLocale: locale,
    visualTypes: getLocalizedGeschichteVisualTypes(lang),
  }), [lang, locale]);
  return <LanguageTestEngine config={config} />;
}
