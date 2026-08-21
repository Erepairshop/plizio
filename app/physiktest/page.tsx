"use client";

import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions } from "@/lib/physikCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/physikCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/physikCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/physikCurriculum8";
// Self-register all generators
import "@/lib/physikRegistration";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { getLocalizedPhysikVisualTypes, PHYSIK_VISUAL_TYPES } from "@/lib/physikVisualGenerators";
import { useLang } from "@/components/LanguageProvider";
import { useMemo } from "react";

const PHYSIK_CHARS = ["⚛️", "🔬", "⚡", "🧲", "🌊", "💡", "🌡️", "🔊", "🚀", "🔭", "⚙️", "🌍", "🔋", "🧪", "☢️", "📡"];
const PHYSIK_COLORS = [
  "rgba(107,76,230,0.15)",
  "rgba(99,102,241,0.12)",
  "rgba(139,92,246,0.12)",
  "rgba(107,76,230,0.10)",
  "rgba(79,70,229,0.10)",
];

const PHYSIK_CONFIG: LanguageTestEngineConfig = {
  gameId: "physiktest",
  title: { de: "PHYSIK TEST", hu: "FIZIKA TESZT", ro: "TEST DE FIZICĂ", en: "PHYSICS TEST" },
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

  countries: [],
  calculateMark: calculateCountryAwareMark,

  curriculum: {
    5: K5_CURRICULUM,
    6: K6_CURRICULUM,
    7: K7_CURRICULUM,
    8: K8_CURRICULUM,
  } as any,
  visualTypes: PHYSIK_VISUAL_TYPES,

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

const PHYSIK_LOCALES: Record<string, string> = {
  de: "de-DE",
  hu: "hu-HU",
  ro: "ro-RO",
  en: "en-US",
};

export default function PhysikTestPage() {
  const { lang } = useLang();
  const config = useMemo<LanguageTestEngineConfig>(() => ({
    ...PHYSIK_CONFIG,
    ttsLang: PHYSIK_LOCALES[lang] ?? "de-DE",
    dateLocale: PHYSIK_LOCALES[lang] ?? "de-DE",
    visualTypes: getLocalizedPhysikVisualTypes(lang),
    getQuestions: (grade, subtopicIds, count) => {
      if (grade === 5) return getK5Questions(subtopicIds, count, lang);
      if (grade === 6) return getK6Questions(subtopicIds, count, lang);
      if (grade === 7) return getK7Questions(subtopicIds, count, lang);
      return getK8Questions(subtopicIds, count, lang);
    },
  }), [lang]);

  return <LanguageTestEngine config={config} />;
}
