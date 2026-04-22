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
  title: { de: "RUMÄNISCH TEST", hu: "ROMÁN TESZT", ro: "TEST LIMBA ROMÂNĂ", en: "ROMANIAN TEST" },
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
  visualGrades: [1, 2, 3, 4, 5, 6, 7, 8],

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
    wrongWordNr: { de: "Falsches Wort Nr.:", hu: "Hibás szó száma:", ro: "Cuvântul greșit nr.:", en: "Wrong word no.:" },
    root: { de: "Stamm:", hu: "Tő:", ro: "Rădăcină:", en: "Root:" },
  },
};

export default function RomanianTestPage() {
  return <LanguageTestEngine config={RO_CONFIG} />;
}
