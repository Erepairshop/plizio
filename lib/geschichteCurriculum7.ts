import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";

const G7_TOPICS = Array.from({ length: 24 }, (_, i) => ({
  id: `g7_t${i + 1}`,
  names: {
    de: `K7 Deutsche Geschichte Thema ${i + 1}`,
    hu: `K7 Magyar történelem Téma ${i + 1}`,
    ro: `K7 Istoria României Subiect ${i + 1}`,
    en: `K7 World History Topic ${i + 1}`,
  }
}));

// Explicit mappings
G7_TOPICS[0].names = { de: "Reformation", hu: "Török hódoltság", ro: "Mihai Viteazul", en: "Renaissance" };
G7_TOPICS[1].names = { de: "Bauernkriege", hu: "Mohács", ro: "Războaiele otomane", en: "Age of Discovery" };
G7_TOPICS[2].names = { de: "Dreißigjähriger Krieg", hu: "Erdélyi Fejedelemség", ro: "Regimul fanariot", en: "Scientific Revolution" };
G7_TOPICS[3].names = { de: "Absolutismus in Preußen", hu: "Habsburg uralom", ro: "Tudor Vladimirescu 1821", en: "The Enlightenment" };
G7_TOPICS[4].names = { de: "Aufklärung", hu: "Rákóczi-szabadságharc", ro: "Revoluția de la 1848", en: "American Revolution" };
G7_TOPICS[5].names = { de: "Befreiungskriege", hu: "Reformkor", ro: "Unirea Principatelor 1859", en: "French Revolution" };

export const G7_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g7_theme_1",
    name: { de: "Neuzeit", hu: "Újkor", ro: "Epoca Modernă", en: "Modern Era" },
    icon: "🌟",
    color: "#6366F1",
    subtopics: G7_TOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG7GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  const t = G7_TOPICS.find(x => x.id === subtopicId);
  if (!t) return [];
  
  const topicName = (t.names as any)[lang] || t.names.en;

  for (let i = 1; i <= 25; i++) {
    pool.push({
      type: "mcq",
      topic: "Geschichte K7",
      subtopic: subtopicId,
      question: `[${topicName}] MCQ Frage ${i}?`,
      options: [`A`, `B`, `C`, `D`],
      correct: 0
    });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({
      type: "typing",
      topic: "Geschichte K7",
      subtopic: subtopicId,
      question: `[${topicName}] Typing Frage ${i}?`,
      answer: `Antwort ${i}`
    });
  }
  return pool.slice(0, count);
}
