"use client";

import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import {
  SACHKUNDE_CURRICULUM,
  getSachkundeQuestions,
  SACHKUNDE_SUBTOPIC_HINTS,
  SACHKUNDE_ACTIVE_GRADES,
} from "@/lib/sachkundeCurriculum";
import { SACHKUNDE_VISUAL_TYPES } from "@/lib/sachkundeVisualGenerators";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { useLang } from "@/components/LanguageProvider";

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
  title: { de: "SACHKUNDE TEST", hu: "KÖRNYEZETISMERET TESZT", ro: "TEST DE CUNOAȘTEREA MEDIULUI", en: "NATURE & SCIENCE TEST" },
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
  calculateMark: calculateCountryAwareMark,

  curriculum: SACHKUNDE_CURRICULUM as any,
  getQuestions: getSachkundeQuestions as any,
  subtopicHints: SACHKUNDE_SUBTOPIC_HINTS,
  visualTypes: SACHKUNDE_VISUAL_TYPES,
  grades: [...SACHKUNDE_ACTIVE_GRADES],
  visualGrades: [...SACHKUNDE_ACTIVE_GRADES],
  hideLesetest: true,

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

export default function SachkundeTestPage() {
  const { lang } = useLang();
  const locale = { de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE";
  return <LanguageTestEngine config={{ ...SACHKUNDE_CONFIG, ttsLang: locale, dateLocale: locale }} />;
}
