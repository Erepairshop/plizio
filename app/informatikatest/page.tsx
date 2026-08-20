"use client";

import { LanguageTestEngine, calculateCountryAwareMark } from "@/app/deutschtest/page";
import { INFO_K5_CURRICULUM, getInfoK5Questions } from "@/lib/informatikaCurriculum5";
import { INFO_K6_CURRICULUM, getInfoK6AvailableSubtopicIds, getInfoK6Questions } from "@/lib/informatikaCurriculum6";
import { INFO_K7_CURRICULUM, getInfoK7Questions } from "@/lib/informatikaCurriculum7";
import { INFO_K8_CURRICULUM, getInfoK8Questions } from "@/lib/informatikaCurriculum8";
import { asCurriculumThemes } from "@/lib/kemiaCurriculumShared";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";
import { getLocalizedInformaticsVisualTypes } from "@/lib/informatikaVisualGenerators";
import { useLang } from "@/components/LanguageProvider";

const INFO_CHARS = ["💻", "🖥️", "⌨️", "🖱️", "📱", "🌐", "🔐", "💡", "🤖", "📊", "🔌", "💾", "📡", "🧠"];
const INFO_COLORS = [
  "rgba(59,130,246,0.15)",
  "rgba(139,92,246,0.12)",
  "rgba(245,158,11,0.10)",
  "rgba(239,68,68,0.10)",
  "rgba(16,185,129,0.10)",
];

const INFO_COUNTRIES: Record<string, LanguageTestEngineConfig["countries"]> = {
  de: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  hu: [{ code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" }],
  ro: [{ code: "RO", flag: "🇷🇴", label: "România", sub: "Note 1–10" }],
  en: [{ code: "US", flag: "🌐", label: "English curriculum", sub: "A / B / C / D / F" }],
};

function createInfoConfig(lang: string): LanguageTestEngineConfig {
 const activeCountry = (INFO_COUNTRIES[lang] ?? INFO_COUNTRIES.de)[0]?.code;
 const k6Available = getInfoK6AvailableSubtopicIds(activeCountry);
 const k6Curriculum = asCurriculumThemes(INFO_K6_CURRICULUM).map(theme => ({
   ...theme,
   subtopics: theme.subtopics.filter(topic => k6Available.has(topic.id)),
 })).filter(theme => theme.subtopics.length > 0);
 return {
  gameId: "informatikatest",
  title: { de: "INFORMATIK TEST", hu: "INFORMATIKA TESZT", ro: "TEST DE INFORMATICĂ", en: "INFORMATICS TEST" },
  icon: "💻",
  color: "#3B82F6",

  ttsLang: ({ de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE"),
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: ({ de: "de-DE", hu: "hu-HU", ro: "ro-RO", en: "en-US" }[lang] ?? "de-DE"),
  storageKey: "informatikatest_country",
  grades: [5, 6, 7, 8],
  hideLesetest: true,

  bgChars: INFO_CHARS,
  bgColors: INFO_COLORS,
  visualTypes: getLocalizedInformaticsVisualTypes(lang),

  countries: INFO_COUNTRIES[lang] ?? INFO_COUNTRIES.de,
  calculateMark: calculateCountryAwareMark,

  curriculum: {
    5: asCurriculumThemes(INFO_K5_CURRICULUM),
    6: k6Curriculum,
    7: asCurriculumThemes(INFO_K7_CURRICULUM),
    8: asCurriculumThemes(INFO_K8_CURRICULUM),
  },
  getCurriculumForCountry: (grade, countryCode) => {
    if (grade !== 6) return grade === 5 ? asCurriculumThemes(INFO_K5_CURRICULUM) : grade === 7 ? asCurriculumThemes(INFO_K7_CURRICULUM) : asCurriculumThemes(INFO_K8_CURRICULUM);
    const available = getInfoK6AvailableSubtopicIds(countryCode);
    return asCurriculumThemes(INFO_K6_CURRICULUM).map(theme => ({ ...theme, subtopics: theme.subtopics.filter(topic => available.has(topic.id)) })).filter(theme => theme.subtopics.length > 0);
  },

  getQuestions: (grade, subtopicIds, count, countryCode) => {
    if (grade === 5) return getInfoK5Questions(subtopicIds, count, countryCode);
    if (grade === 6) return getInfoK6Questions(subtopicIds, count, countryCode);
    if (grade === 7) return getInfoK7Questions(subtopicIds, count, countryCode);
    return getInfoK8Questions(subtopicIds, count, countryCode);
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

export default function InformatikaTestPage() {
  const { lang } = useLang();
  return <LanguageTestEngine config={createInfoConfig(lang)} />;
}
