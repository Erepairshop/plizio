import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";

const G5_TOPICS = Array.from({ length: 24 }, (_, i) => ({
  id: `g5_t${i + 1}`,
  names: {
    de: `K5 Deutsche Geschichte Thema ${i + 1}`,
    hu: `K5 Magyar történelem Téma ${i + 1}`,
    ro: `K5 Istoria României Subiect ${i + 1}`,
    en: `K5 World History Topic ${i + 1}`,
  }
}));

// Explicit specific mappings requested by user
G5_TOPICS[0].names = { de: "Frühe Germanen", hu: "Magyar őstörténet", ro: "Dacii și Geții", en: "Early Human Migration" };
G5_TOPICS[1].names = { de: "Römer in Germanien", hu: "A Kárpát-medence az ókorban", ro: "Războaiele daco-romane", en: "Ancient River Valleys" };
G5_TOPICS[2].names = { de: "Völkerwanderung", hu: "A honfoglalás", ro: "Romanizarea Daciei", en: "Ancient Greece" };
G5_TOPICS[3].names = { de: "Frankenreich", hu: "Kalandozások kora", ro: "Retragerea aureliană", en: "Roman Republic" };
G5_TOPICS[4].names = { de: "Merowinger", hu: "Géza fejedelem", ro: "Migrațiile timpurii", en: "Roman Empire" };
G5_TOPICS[5].names = { de: "Karolinger", hu: "Szent István és az államalapítás", ro: "Formarea poporului român", en: "Decline of Rome" };

export const G5_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g5_theme_1",
    name: { de: "Ursprünge", hu: "Kezdetek", ro: "Origini", en: "Origins" },
    icon: "🏺",
    color: "#F59E0B",
    subtopics: G5_TOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG5GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  const t = G5_TOPICS.find(x => x.id === subtopicId);
  if (!t) return [];
  
  const topicName = (t.names as any)[lang] || t.names.en;

  for (let i = 1; i <= 25; i++) {
    pool.push({
      type: "mcq",
      topic: "Geschichte K5",
      subtopic: subtopicId,
      question: `[${topicName}] MCQ Frage ${i}?`,
      options: [`Antwort A ${i}`, `Antwort B ${i}`, `Antwort C ${i}`, `Antwort D ${i}`],
      correct: 0
    });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({
      type: "typing",
      topic: "Geschichte K5",
      subtopic: subtopicId,
      question: `[${topicName}] Typing Frage ${i}?`,
      answer: `Antwort ${i}`
    });
  }
  return pool.slice(0, count);
}
