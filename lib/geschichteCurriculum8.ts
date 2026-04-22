import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";

const G8_TOPICS = Array.from({ length: 24 }, (_, i) => ({
  id: `g8_t${i + 1}`,
  names: {
    de: `K8 Deutsche Geschichte Thema ${i + 1}`,
    hu: `K8 Magyar történelem Téma ${i + 1}`,
    ro: `K8 Istoria României Subiect ${i + 1}`,
    en: `K8 World History Topic ${i + 1}`,
  }
}));

// Explicit mappings
G8_TOPICS[0].names = { de: "Weimarer Republik", hu: "1848-as forradalom", ro: "Războiul de Independență", en: "Industrial Revolution" };
G8_TOPICS[1].names = { de: "Drittes Reich (WW2)", hu: "Kiegyezés (1867)", ro: "Regatul României", en: "Imperialism" };
G8_TOPICS[2].names = { de: "Holocaust", hu: "Első világháború és Trianon", ro: "Marea Unire 1918", en: "World War I" };
G8_TOPICS[3].names = { de: "Geteiltes Deutschland (DDR/BRD)", hu: "Horthy-korszak", ro: "România interbelică", en: "World War II" };
G8_TOPICS[4].names = { de: "Kalter Krieg", hu: "1956-os forradalom", ro: "Comunismul", en: "Cold War" };
G8_TOPICS[5].names = { de: "Wiedervereinigung", hu: "Rendszerváltás", ro: "Revoluția din 1989", en: "Modern Era" };

export const G8_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g8_theme_1",
    name: { de: "20. Jahrhundert", hu: "20. század", ro: "Secolul XX", en: "20th Century" },
    icon: "💥",
    color: "#EF4444",
    subtopics: G8_TOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG8GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  const t = G8_TOPICS.find(x => x.id === subtopicId);
  if (!t) return [];
  
  const topicName = (t.names as any)[lang] || t.names.en;

  for (let i = 1; i <= 25; i++) {
    pool.push({
      type: "mcq",
      topic: "Geschichte K8",
      subtopic: subtopicId,
      question: `[${topicName}] MCQ Frage ${i}?`,
      options: [`A`, `B`, `C`, `D`],
      correct: 0
    });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({
      type: "typing",
      topic: "Geschichte K8",
      subtopic: subtopicId,
      question: `[${topicName}] Typing Frage ${i}?`,
      answer: `Antwort ${i}`
    });
  }
  return pool.slice(0, count);
}
