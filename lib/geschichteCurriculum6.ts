import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";

const G6_TOPICS = Array.from({ length: 24 }, (_, i) => ({
  id: `g6_t${i + 1}`,
  names: {
    de: `K6 Deutsche Geschichte Thema ${i + 1}`,
    hu: `K6 Magyar történelem Téma ${i + 1}`,
    ro: `K6 Istoria României Subiect ${i + 1}`,
    en: `K6 World History Topic ${i + 1}`,
  }
}));

// Explicit mappings
G6_TOPICS[0].names = { de: "Heiliges Römisches Reich (HRE)", hu: "Árpád-ház", ro: "Formarea poporului român", en: "Early Middle Ages" };
G6_TOPICS[1].names = { de: "Investiturstreit", hu: "Szent László", ro: "Descălecatul", en: "Charlemagne" };
G6_TOPICS[2].names = { de: "Barbarossa", hu: "Könyves Kálmán", ro: "Ștefan cel Mare", en: "Feudalism" };
G6_TOPICS[3].names = { de: "Hanse", hu: "Aranybulla", ro: "Mircea cel Bătrân", en: "The Crusades" };
G6_TOPICS[4].names = { de: "Rittertum", hu: "Tatárjárás", ro: "Vlad Țepeș", en: "High Middle Ages" };
G6_TOPICS[5].names = { de: "Städtewesen", hu: "Anjou-kor", ro: "Iancu de Hunedoara", en: "The Black Death" };

export const G6_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g6_theme_1",
    name: { de: "Mittelalter", hu: "Középkor", ro: "Evul Mediu", en: "Middle Ages" },
    icon: "👑",
    color: "#8B5CF6",
    subtopics: G6_TOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG6GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  const t = G6_TOPICS.find(x => x.id === subtopicId);
  if (!t) return [];
  
  const topicName = (t.names as any)[lang] || t.names.en;

  for (let i = 1; i <= 25; i++) {
    pool.push({
      type: "mcq",
      topic: "Geschichte K6",
      subtopic: subtopicId,
      question: `[${topicName}] MCQ Frage ${i}?`,
      options: [`A`, `B`, `C`, `D`],
      correct: 0
    });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({
      type: "typing",
      topic: "Geschichte K6",
      subtopic: subtopicId,
      question: `[${topicName}] Typing Frage ${i}?`,
      answer: `Antwort ${i}`
    });
  }
  return pool.slice(0, count);
}
