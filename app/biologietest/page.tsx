"use client";

import { useMemo } from "react";
import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import { K5_CURRICULUM, getK5Questions } from "@/lib/biologieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/biologieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/biologieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/biologieCurriculum8";
// Generators self-register via import
import "@/lib/biologieGenerators5";
import "@/lib/biologieGenerators6";
import "@/lib/biologieGenerators7";
import "@/lib/biologieGenerators8";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { BIOLOGIE_VISUAL_TYPES, getLocalizedBiologieVisualTypes } from "@/lib/biologieVisualGenerators";
import { useLang } from "@/components/LanguageProvider";

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
  title: { de: "BIOLOGIE TEST", hu: "BIOLÓGIA TESZT", ro: "TEST DE BIOLOGIE", en: "BIOLOGY TEST" },
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
  ],
  calculateMark: calculateCountryAwareMark,

  curriculum: {
    5: K5_CURRICULUM,
    6: K6_CURRICULUM,
    7: K7_CURRICULUM,
    8: K8_CURRICULUM,
  } as any,
  visualTypes: BIOLOGIE_VISUAL_TYPES,

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

export default function BiologieTestPage() {
  const { lang } = useLang();
  const locale = { de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE";
  const config = useMemo(() => ({
    ...BIO_CONFIG,
    ttsLang: locale,
    dateLocale: locale,
    visualTypes: getLocalizedBiologieVisualTypes(lang),
    getQuestions: (grade: number, subtopicIds: string[], count: number) => {
      if (grade === 5) return getK5Questions(subtopicIds, count, lang);
      if (grade === 6) return getK6Questions(subtopicIds, count, lang);
      if (grade === 7) return getK7Questions(subtopicIds, count, lang);
      return getK8Questions(subtopicIds, count, lang);
    },
  }), [lang, locale]);
  return <LanguageTestEngine config={config} />;
}
