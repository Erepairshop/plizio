import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";

const G7_SUBTOPICS = [
  { id: "renaissance",                 names: { de: "Renaissance",                    hu: "Reneszánsz",                   ro: "Renașterea",                    en: "Renaissance" } },
  { id: "humanismus",                  names: { de: "Humanismus",                     hu: "Humanizmus",                   ro: "Umanismul",                     en: "Humanism" } },
  { id: "buchdruck",                   names: { de: "Buchdruck (Gutenberg)",          hu: "Könyvnyomtatás (Gutenberg)",   ro: "Tiparul (Gutenberg)",           en: "Printing Press" } },
  { id: "entdeckungsfahrten",          names: { de: "Entdeckungsfahrten",             hu: "Felfedezőutak",                ro: "Marile descoperiri geografice", en: "Age of Discovery" } },
  { id: "eroberung_amerikas",          names: { de: "Eroberung Amerikas",             hu: "Amerika meghódítása",          ro: "Cucerirea Americii",            en: "Conquest of Americas" } },
  { id: "reformation",                 names: { de: "Reformation",                    hu: "Reformáció",                   ro: "Reforma",                       en: "Reformation" } },
  { id: "bauernkrieg",                 names: { de: "Deutscher Bauernkrieg",          hu: "Német parasztháború",          ro: "Războiul țărănesc german",      en: "German Peasants' War" } },
  { id: "gegenreformation",            names: { de: "Gegenreformation",               hu: "Ellenreformáció",              ro: "Contrareforma",                 en: "Counter-Reformation" } },
  { id: "dreissigjaehriger_krieg",     names: { de: "Dreißigjähriger Krieg",          hu: "Harmincéves háború",           ro: "Războiul de Treizeci de Ani",   en: "Thirty Years' War" } },
  { id: "leiden_bevoelkerung",         names: { de: "Leiden der Bevölkerung",         hu: "Lakosság szenvedései",         ro: "Suferințele populației",        en: "Suffering of the People" } },
  { id: "westfaelischer_friede",       names: { de: "Westfälischer Friede",           hu: "Vesztfáliai béke",             ro: "Pacea de la Westfalia",         en: "Peace of Westphalia" } },
  { id: "absolutismus_frankreich",     names: { de: "Absolutismus in Frankreich",     hu: "Francia abszolutizmus",        ro: "Absolutismul francez",          en: "French Absolutism" } },
  { id: "versailler_hofleben",         names: { de: "Hofleben in Versailles",         hu: "Versailles udvari élete",      ro: "Viața la Versailles",           en: "Court Life at Versailles" } },
  { id: "merkantilismus",              names: { de: "Merkantilismus",                 hu: "Merkantilizmus",               ro: "Mercantilismul",                en: "Mercantilism" } },
  { id: "aufklaerung",                 names: { de: "Aufklärung",                     hu: "Felvilágosodás",               ro: "Iluminismul",                   en: "Enlightenment" } },
  { id: "preussen_friedrich",          names: { de: "Preußen & Friedrich der Große",  hu: "Poroszország és Nagy Frigyes", ro: "Prusia și Frederic cel Mare",   en: "Prussia & Frederick the Great" } },
  { id: "ursachen_franz_rev",          names: { de: "Ursachen der Französischen Revolution", hu: "Francia forradalom okai", ro: "Cauzele Revoluției Franceze",  en: "Causes of the French Revolution" } },
  { id: "sturm_bastille",              names: { de: "Sturm auf die Bastille",         hu: "Bastille ostroma",             ro: "Căderea Bastiliei",             en: "Storming of the Bastille" } },
  { id: "schreckensherrschaft",        names: { de: "Schreckensherrschaft",           hu: "Jakobinus terror",             ro: "Teroarea",                      en: "Reign of Terror" } },
  { id: "aufstieg_napoleon",           names: { de: "Aufstieg Napoleons",             hu: "Napóleon felemelkedése",       ro: "Ascensiunea lui Napoleon",      en: "Napoleon's Rise" } },
  { id: "ende_napoleon",               names: { de: "Ende Napoleons",                 hu: "Napóleon bukása",              ro: "Sfârșitul lui Napoleon",        en: "Napoleon's Fall" } },
  { id: "wiener_kongress",             names: { de: "Wiener Kongress",                hu: "Bécsi kongresszus",            ro: "Congresul de la Viena",         en: "Congress of Vienna" } },
  { id: "industrielle_revolution_anfang", names: { de: "Industrielle Revolution",     hu: "Ipari forradalom",             ro: "Revoluția Industrială",         en: "Industrial Revolution" } },
  { id: "gesellschaftlicher_wandel",   names: { de: "Gesellschaftlicher Wandel",      hu: "Társadalmi változások",        ro: "Schimbări sociale",             en: "Social Changes" } },
  { id: "amerikanische_revolution",    names: { de: "Amerikanische Revolution",       hu: "Amerikai forradalom",          ro: "Revoluția Americană",           en: "American Revolution" } },
];

export const G7_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g7_theme_1",
    name: { de: "Frühe Neuzeit", hu: "Újkor", ro: "Epoca Modernă Timpurie", en: "Early Modern Era" },
    icon: "🎨",
    color: "#0EA5E9",
    subtopics: G7_SUBTOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG7GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const topic = G7_SUBTOPICS.find(x => x.id === subtopicId);
  if (!topic) return [];

  // TEMP: serve DE content for all languages until HU/RO/EN content is generated
  const gen = G7_Generators_Geschichte[subtopicId];
  if (gen) {
    const all = gen(Math.floor(Math.random() * 10000));
    return [...all].sort(() => Math.random() - 0.5).slice(0, count);
  }
  void lang;

  const topicName = (topic.names as any)[lang] || topic.names.en;
  const pool: CurriculumQuestion[] = [];
  for (let i = 1; i <= 25; i++) {
    pool.push({ type: "mcq", topic: "Geschichte K7", subtopic: subtopicId, question: `[${topicName}] MCQ ${i}?`, options: [`A${i}`, `B${i}`, `C${i}`, `D${i}`], correct: 0 });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({ type: "typing", topic: "Geschichte K7", subtopic: subtopicId, question: `[${topicName}] Typing ${i}?`, answer: `Antwort ${i}` });
  }
  return pool.slice(0, count);
}
