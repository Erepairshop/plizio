"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import {
  ENGLISH_CURRICULUM,
  getEnglishQuestions,
  calculateEnglishGrade,
  ENGLISH_SUBTOPIC_HINTS,
} from "@/lib/englishCurriculum";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { ENGLISH_VISUAL_TYPES } from "@/lib/englishVisualGenerators";
import { getRandomEnglishPassage } from "@/lib/englishLesetest";

const EN_CONFIG: LanguageTestEngineConfig = {
  gameId: "englishtest",
  title: { de: "ENGLISCH TEST", hu: "ANGOL TESZT", ro: "TEST DE ENGLEZĂ", en: "ENGLISH TEST" },
  icon: "📝",
  color: "#3B82F6",

  ttsLang: "en-US",
  ttsRate: 0.92,
  ttsPitch: 1.05,
  dateLocale: "en-US",
  storageKey: "englishtest_country",

  bgChars: ["A", "B", "C", "?", "!", "the", "and", "is", "I", "you", "we", "..."],
  bgColors: [
    "rgba(59,130,246,0.15)",
    "rgba(99,102,241,0.15)",
    "rgba(139,92,246,0.12)",
    "rgba(59,130,246,0.10)",
    "rgba(16,185,129,0.10)",
  ],

  countries: [
    { code: "US", flag: "🇺🇸", label: "United States", sub: "A / B / C / D / F" },
    { code: "GB", flag: "🇬🇧", label: "United Kingdom", sub: "Grade 9–1 (GCSE)" },
    { code: "AU", flag: "🇦🇺", label: "Australia", sub: "A / B / C / D / E" },
    { code: "CA", flag: "🇨🇦", label: "Canada", sub: "A+ / A / B+ / B / C+ / C / D / F" },
    { code: "IE", flag: "🇮🇪", label: "Ireland", sub: "H1–H8 (Higher) / O1–O8" },
    { code: "NZ", flag: "🇳🇿", label: "New Zealand", sub: "NCEA: N / A / M / E" },
  ],
  calculateMark: calculateEnglishGrade,

  curriculum: ENGLISH_CURRICULUM,
  getQuestions: getEnglishQuestions,
  subtopicHints: ENGLISH_SUBTOPIC_HINTS,

  visualTypes: ENGLISH_VISUAL_TYPES,
  visualGrades: [1, 2, 3, 4, 5, 6, 7, 8],

  getReadingPassage: getRandomEnglishPassage,

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

export default function EnglishTestPage() {
  return <LanguageTestEngine config={EN_CONFIG} />;
}
