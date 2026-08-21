"use client";

import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import { AI_K5_CURRICULUM, getAIK5Questions } from "@/lib/aiCurriculum5";
import { AI_K6_CURRICULUM, getAIK6Questions } from "@/lib/aiCurriculum6";
import { AI_K7_CURRICULUM, getAIK7Questions } from "@/lib/aiCurriculum7";
import { AI_K8_CURRICULUM, getAIK8Questions } from "@/lib/aiCurriculum8";
import { asCurriculumThemes } from "@/lib/kemiaCurriculumShared";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { getLocalizedAiVisualTypes } from "@/lib/aiVisualGenerators";
import { useLang } from "@/components/LanguageProvider";

const AI_CHARS = ["🤖", "🧠", "💬", "⚖️", "🛠️", "🚀", "📊", "🔒", "💡", "📡", "🔋"];
const AI_COLORS = [
  "rgba(59,130,246,0.15)",
  "rgba(139,92,246,0.12)",
  "rgba(245,158,11,0.10)",
  "rgba(239,68,68,0.10)",
  "rgba(16,185,129,0.10)",
];

const AI_COUNTRIES: Record<string, LanguageTestEngineConfig["countries"]> = {
  de: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  hu: [{ code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" }],
  ro: [{ code: "RO", flag: "🇷🇴", label: "România", sub: "Note 1–10" }],
  en: [{ code: "US", flag: "🌐", label: "English curriculum", sub: "A / B / C / D / F" }],
};

function createAiConfig(lang: string): LanguageTestEngineConfig {
 return {
  gameId: "aitest",
  title: { de: "KI TEST", hu: "AI TESZT", ro: "TEST AI", en: "AI TEST" },
  icon: "🤖",
  color: "#3B82F6",

  ttsLang: ({ de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE"),
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: ({ de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE"),
  storageKey: "aitest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: AI_CHARS,
  bgColors: AI_COLORS,
  visualTypes: getLocalizedAiVisualTypes(lang),

  countries: AI_COUNTRIES[lang] ?? AI_COUNTRIES.de,
  calculateMark: calculateCountryAwareMark,

  curriculum: {
    5: asCurriculumThemes(AI_K5_CURRICULUM),
    6: asCurriculumThemes(AI_K6_CURRICULUM),
    7: asCurriculumThemes(AI_K7_CURRICULUM),
    8: asCurriculumThemes(AI_K8_CURRICULUM),
  },

  getQuestions: (grade, subtopicIds, count, countryCode) => {
    const lang =
      countryCode === "HU"
        ? "hu"
        : countryCode === "RO"
          ? "ro"
          : countryCode === "US" ||
              countryCode === "GB" ||
              countryCode === "AU" ||
              countryCode === "CA" ||
              countryCode === "IE" ||
              countryCode === "NZ"
            ? "en"
            : "de";
    if (grade === 5) return getAIK5Questions(subtopicIds, count, lang);
    if (grade === 6) return getAIK6Questions(subtopicIds, count, lang);
    if (grade === 7) return getAIK7Questions(subtopicIds, count, lang);
    return getAIK8Questions(subtopicIds, count, lang);
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

export default function AITestPage() {
  const { lang } = useLang();
  return <LanguageTestEngine config={createAiConfig(lang)} />;
}
