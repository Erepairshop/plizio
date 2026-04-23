import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

const G8_SUBTOPICS = [
  { id: "imperialismus",            names: { de: "Imperialismus",                 hu: "Imperializmus",              ro: "Imperialismul",               en: "Imperialism" } },
  { id: "erster_weltkrieg_beginn",  names: { de: "Erster Weltkrieg — Beginn",     hu: "Első világháború — kezdet",  ro: "Primul Război Mondial — Început", en: "World War I — Start" } },
  { id: "erster_weltkrieg_verlauf", names: { de: "Erster Weltkrieg — Verlauf",    hu: "Első világháború — lefolyás",ro: "Primul Război Mondial — Desfășurare", en: "World War I — Course" } },
  { id: "weimarer_republik",        names: { de: "Weimarer Republik",             hu: "Weimari köztársaság",        ro: "Republica de la Weimar",      en: "Weimar Republic" } },
  { id: "ns_machtuebernahme",       names: { de: "NS-Machtübernahme",             hu: "Nácik hatalomátvétele",      ro: "Ascensiunea naziștilor",      en: "Nazi Rise to Power" } },
  { id: "ns_ideologie",             names: { de: "NS-Ideologie",                  hu: "Náci ideológia",             ro: "Ideologia nazistă",           en: "Nazi Ideology" } },
  { id: "ns_propaganda",            names: { de: "NS-Propaganda & Alltag",        hu: "Náci propaganda",            ro: "Propaganda nazistă",          en: "Nazi Propaganda & Daily Life" } },
  { id: "holocaust",                names: { de: "Holocaust",                     hu: "Holokauszt",                 ro: "Holocaustul",                 en: "Holocaust" } },
  { id: "zweiter_weltkrieg",        names: { de: "Zweiter Weltkrieg",             hu: "Második világháború",        ro: "Al Doilea Război Mondial",    en: "World War II" } },
  { id: "widerstand_ns",            names: { de: "Widerstand gegen NS",           hu: "Ellenállás a nácizmussal szemben", ro: "Rezistența antinazistă", en: "Resistance to Nazism" } },
  { id: "nachkriegszeit",           names: { de: "Nachkriegszeit",                hu: "Háború utáni korszak",       ro: "Perioada postbelică",         en: "Post-War Era" } },
  { id: "kalter_krieg",             names: { de: "Kalter Krieg",                  hu: "Hidegháború",                ro: "Războiul Rece",               en: "Cold War" } },
  { id: "wiedervereinigung",        names: { de: "Deutsche Wiedervereinigung",    hu: "Német újraegyesítés",        ro: "Reunificarea Germaniei",      en: "German Reunification" } },
  { id: "europa_einigung",          names: { de: "Europäische Einigung",          hu: "Európai integráció",         ro: "Integrarea Europeană",        en: "European Integration" } },
];

export const G8_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g8_theme_1",
    name: { de: "20. Jahrhundert", hu: "20. század", ro: "Secolul XX", en: "20th Century" },
    icon: "💥",
    color: "#EF4444",
    subtopics: G8_SUBTOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG8GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const topic = G8_SUBTOPICS.find(x => x.id === subtopicId);
  if (!topic) return [];

  if (lang === "de") {
    const gen = G8_Generators_Geschichte[subtopicId];
    if (gen) {
      const all = gen(Math.floor(Math.random() * 10000));
      return [...all].sort(() => Math.random() - 0.5).slice(0, count);
    }
  }

  const topicName = (topic.names as any)[lang] || topic.names.en;
  const pool: CurriculumQuestion[] = [];
  for (let i = 1; i <= 25; i++) {
    pool.push({ type: "mcq", topic: "Geschichte K8", subtopic: subtopicId, question: `[${topicName}] MCQ ${i}?`, options: [`A${i}`, `B${i}`, `C${i}`, `D${i}`], correct: 0 });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({ type: "typing", topic: "Geschichte K8", subtopic: subtopicId, question: `[${topicName}] Typing ${i}?`, answer: `Antwort ${i}` });
  }
  return pool.slice(0, count);
}
