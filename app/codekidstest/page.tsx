"use client";

import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import { INFO_K1_CURRICULUM, getInfoK1Questions } from "@/lib/informatikaCurriculum1";
import { INFO_K2_CURRICULUM, getInfoK2Questions } from "@/lib/informatikaCurriculum2";
import { INFO_K3_CURRICULUM, getInfoK3Questions } from "@/lib/informatikaCurriculum3";
import { INFO_K4_CURRICULUM, getInfoK4Questions } from "@/lib/informatikaCurriculum4";
import { asCurriculumThemes } from "@/lib/kemiaCurriculumShared";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const CODEKIDS_CHARS = ["💻", "🎮", "🧑‍💻", "🎯", "⚙️", "🔌", "🚀", "💡"];
const CODEKIDS_COLORS = [
  "rgba(96,165,250,0.15)",  // Blue pastel
  "rgba(167,139,250,0.12)", // Purple pastel
  "rgba(251,191,36,0.15)",  // Amber pastel
  "rgba(244,114,182,0.12)", // Pink pastel
  "rgba(52,211,153,0.10)",  // Emerald pastel
];

const CODEKIDS_CONFIG: LanguageTestEngineConfig = {
  gameId: "codekidstest",
  title: { de: "CODE KIDS TEST", hu: "CODE KIDS TESZT", ro: "TEST CODE KIDS", en: "CODE KIDS TEST" },
  icon: "🧑‍💻",
  color: "#60A5FA", // Pastel Blue

  ttsLang: "hu-HU",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "hu-HU",
  storageKey: "codekidstest_country",
  grades: [1, 2, 3, 4],
  hideLesetest: true,

  bgChars: CODEKIDS_CHARS,
  bgColors: CODEKIDS_COLORS,

  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  calculateMark: calculateCountryAwareMark,

  curriculum: {
    1: asCurriculumThemes(INFO_K1_CURRICULUM),
    2: asCurriculumThemes(INFO_K2_CURRICULUM),
    3: asCurriculumThemes(INFO_K3_CURRICULUM),
    4: asCurriculumThemes(INFO_K4_CURRICULUM),
  },

  getQuestions: (grade, subtopicIds, count, countryCode) => {
    if (grade === 1) return getInfoK1Questions(subtopicIds, count, countryCode);
    if (grade === 2) return getInfoK2Questions(subtopicIds, count, countryCode);
    if (grade === 3) return getInfoK3Questions(subtopicIds, count, countryCode);
    return getInfoK4Questions(subtopicIds, count, countryCode);
  },

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

export default function CodeKidsTestPage() {
  return <LanguageTestEngine config={CODEKIDS_CONFIG} />;
}
