"use client";

import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions } from "@/lib/kemiaCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/kemiaCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/kemiaCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/kemiaCurriculum8";
import { asCurriculumThemes } from "@/lib/kemiaCurriculumShared";
import "@/lib/kemiaRegistration";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { getLocalizedKemiaVisualTypes, KEMIA_VISUAL_TYPES } from "@/lib/kemiaVisualGenerators";
import { useLang } from "@/components/LanguageProvider";
import { useMemo } from "react";

const KEMIA_CHARS = ["⚗️", "🧪", "⚛️", "🧬", "💧", "🔥", "🫧", "🔬", "🧫", "🧱", "🌡️", "🔋", "🌍", "☣️"];
const KEMIA_COLORS = [
  "rgba(16,185,129,0.15)",
  "rgba(59,130,246,0.12)",
  "rgba(168,85,247,0.12)",
  "rgba(244,63,94,0.10)",
  "rgba(245,158,11,0.10)",
];

const KEMIA_CONFIG: LanguageTestEngineConfig = {
  gameId: "kemiatest",
  title: { de: "CHEMIE TEST", hu: "KÉMIA TESZT", ro: "TEST DE CHIMIE", en: "CHEMISTRY TEST" },
  icon: "⚗️",
  color: "#10B981",

  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "de-DE",
  storageKey: "kemiatest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: KEMIA_CHARS,
  bgColors: KEMIA_COLORS,

  countries: [],
  calculateMark: calculateCountryAwareMark,

  curriculum: {
    5: asCurriculumThemes(K5_CURRICULUM),
    6: asCurriculumThemes(K6_CURRICULUM),
    7: asCurriculumThemes(K7_CURRICULUM),
    8: asCurriculumThemes(K8_CURRICULUM),
  },
  visualTypes: KEMIA_VISUAL_TYPES,

  getQuestions: (grade, subtopicIds, count) => {
    if (grade === 5) return getK5Questions(subtopicIds, count);
    if (grade === 6) return getK6Questions(subtopicIds, count);
    if (grade === 7) return getK7Questions(subtopicIds, count);
    return getK8Questions(subtopicIds, count);
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

const KEMIA_LOCALES: Record<string, string> = {
  de: "de-DE",
  hu: "hu-HU",
  ro: "ro-RO",
  en: "en-US",
};

export default function KemiaTestPage() {
  const { lang } = useLang();
  const config = useMemo<LanguageTestEngineConfig>(() => ({
    ...KEMIA_CONFIG,
    ttsLang: KEMIA_LOCALES[lang] ?? "de-DE",
    dateLocale: KEMIA_LOCALES[lang] ?? "de-DE",
    visualTypes: getLocalizedKemiaVisualTypes(lang),
    getQuestions: (grade, subtopicIds, count) => {
      if (grade === 5) return getK5Questions(subtopicIds, count, lang);
      if (grade === 6) return getK6Questions(subtopicIds, count, lang);
      if (grade === 7) return getK7Questions(subtopicIds, count, lang);
      return getK8Questions(subtopicIds, count, lang);
    },
  }), [lang]);

  return <LanguageTestEngine config={config} />;
}
