"use client";

import { LanguageTestEngine } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions, calculateGeographieMark } from "@/lib/geographieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/geographieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/geographieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/geographieCurriculum8";
import { asCurriculumThemes } from "@/lib/geographieCurriculumShared";
import "@/lib/geographieRegistration";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { GEOGRAPHIE_VISUAL_TYPES } from "@/lib/geographieVisualGenerators";
import { useLang } from "@/components/LanguageProvider";

const GEO_CHARS = ["🗺️", "🌍", "🧭", "⛰️", "🌊", "🌋", "🏞️", "🛰️", "🪨", "🧱", "🌦️", "🌴"];
const GEO_COLORS = [
  "rgba(6,182,212,0.16)",
  "rgba(20,184,166,0.12)",
  "rgba(14,165,233,0.12)",
  "rgba(16,185,129,0.10)",
  "rgba(34,211,238,0.10)",
];

function createGeoConfig(lang: string): LanguageTestEngineConfig {
  return {
  gameId: "geographietest",
  title: { de: "GEOGRAPHIE TEST", hu: "FÖLDRAJZ TESZT", ro: "TEST DE GEOGRAFIE", en: "GEOGRAPHY TEST" },
  icon: "🗺️",
  color: "#06B6D4",
  ttsLang: ({de:"de-DE",hu:"hu-HU",ro:"ro-RO",en:"en-US"}[lang] ?? "de-DE"),
  ttsRate: 0.88,
  ttsPitch: 1.05,
  dateLocale: "de-DE",
  storageKey: "geographietest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,
  bgChars: GEO_CHARS,
  bgColors: GEO_COLORS,
  visualTypes: GEOGRAPHIE_VISUAL_TYPES,
  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  calculateMark: (pct) => calculateGeographieMark(pct),
  curriculum: {
    5: asCurriculumThemes(K5_CURRICULUM),
    6: asCurriculumThemes(K6_CURRICULUM),
    7: asCurriculumThemes(K7_CURRICULUM),
    8: asCurriculumThemes(K8_CURRICULUM),
  },
  getQuestions: (grade, subtopicIds, count) => {
    if (grade === 5) return getK5Questions(subtopicIds, lang, count);
    if (grade === 6) return getK6Questions(subtopicIds, lang, count);
    if (grade === 7) return getK7Questions(subtopicIds, lang, count);
    return getK8Questions(subtopicIds, lang, count);
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
}

export default function GeographieTestPage() {
  const { lang } = useLang();
  return <LanguageTestEngine config={createGeoConfig(lang)} />;
}
