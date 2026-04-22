import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";

// ─── COUNTRY-SPECIFIC TOPICS MAPPING ────────────────────────────────────────
// 24 topics per grade (K5-K8)
const SPECIFIC_TOPICS: Record<number, { de: string[], hu: string[], ro: string[], en: string[] }> = {
  5: {
    de: ["Frühe Germanen", "Römer in Germanien", "Völkerwanderung", "Frankenreich", "Merowinger", "Karolinger"],
    hu: ["Magyar őstörténet", "A Kárpát-medence az ókorban", "A honfoglalás", "Kalandozások kora", "Géza fejedelem", "Szent István"],
    ro: ["Preistoria", "Dacii și Geții", "Războaiele daco-romane", "Romanizarea Daciei", "Retragerea aureliană", "Migrațiile timpurii"],
    en: ["Early Human Migration", "Ancient River Valleys", "Ancient Greece", "Roman Republic", "Roman Empire", "Decline of Rome"]
  },
  6: {
    de: ["Heiliges Römisches Reich (HRE)", "Investiturstreit", "Barbarossa", "Hanse", "Rittertum", "Städtewesen"],
    hu: ["Árpád-ház", "Szent László", "Könyves Kálmán", "Aranybulla", "Tatárjárás", "Anjou-kor"],
    ro: ["Formarea poporului român", "Descălecatul", "Ștefan cel Mare", "Mircea cel Bătrân", "Vlad Țepeș", "Iancu de Hunedoara"],
    en: ["Early Middle Ages", "Charlemagne", "Feudalism", "The Crusades", "High Middle Ages", "The Black Death"]
  },
  7: {
    de: ["Reformation", "Bauernkriege", "Dreißigjähriger Krieg", "Absolutismus in Preußen", "Aufklärung", "Befreiungskriege"],
    hu: ["Török hódoltság", "Mohács", "Erdélyi Fejedelemség", "Habsburg uralom", "Rákóczi-szabadságharc", "Reformkor"],
    ro: ["Mihai Viteazul", "Războaiele otomane", "Regimul fanariot", "Tudor Vladimirescu 1821", "Revoluția de la 1848", "Unirea Principatelor 1859"],
    en: ["Renaissance", "Age of Discovery", "Scientific Revolution", "The Enlightenment", "American Revolution", "French Revolution"]
  },
  8: {
    de: ["Weimarer Republik", "Drittes Reich (WW2)", "Holocaust", "Geteiltes Deutschland (DDR/BRD)", "Kalter Krieg", "Wiedervereinigung"],
    hu: ["1848-as forradalom", "Kiegyezés (1867)", "Első világháború és Trianon", "Horthy-korszak", "1956-os forradalom", "Rendszerváltás"],
    ro: ["Războiul de Independență", "Regatul României", "Marea Unire 1918", "România interbelică", "Comunismul", "Revoluția din 1989"],
    en: ["Industrial Revolution", "Imperialism", "World War I", "World War II", "Cold War", "Modern Era"]
  }
};

function generateTopics(grade: number): { id: string, name: Record<string, string>, hasGenerator: boolean, questions: any[] }[] {
  const topics = [];
  const spec = SPECIFIC_TOPICS[grade] || { de: [], hu: [], ro: [], en: [] };
  
  for (let i = 0; i < 24; i++) {
    topics.push({
      id: `g${grade}_t${i + 1}`,
      name: {
        de: spec.de[i] || `Deutsches Thema ${i + 1}`,
        hu: spec.hu[i] || `Magyar téma ${i + 1}`,
        ro: spec.ro[i] || `Subiect românesc ${i + 1}`,
        en: spec.en[i] || `World History Topic ${i + 1}`
      },
      questions: [],
      hasGenerator: true
    });
  }
  return topics;
}

export const GESCHICHTE_CURRICULUM: Record<number, CurriculumTheme[]> = {
  5: [{ id: "g5_history", name: { de: "Geschichte K5", hu: "Történelem 5", ro: "Istorie K5", en: "History G5" }, icon: "🏺", color: "#F59E0B", subtopics: generateTopics(5) }],
  6: [{ id: "g6_history", name: { de: "Geschichte K6", hu: "Történelem 6", ro: "Istorie K6", en: "History G6" }, icon: "👑", color: "#8B5CF6", subtopics: generateTopics(6) }],
  7: [{ id: "g7_history", name: { de: "Geschichte K7", hu: "Történelem 7", ro: "Istorie K7", en: "History G7" }, icon: "🌟", color: "#6366F1", subtopics: generateTopics(7) }],
  8: [{ id: "g8_history", name: { de: "Geschichte K8", hu: "Történelem 8", ro: "Istorie K8", en: "History G8" }, icon: "💥", color: "#EF4444", subtopics: generateTopics(8) }]
};

export const GESCHICHTE_SUBTOPIC_HINTS: Record<string, string> = {};

export function getGeschichteQuestions(
  grade: number,
  subtopicIds: string[],
  count: number = 10,
  countryCode?: string
): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  
  const allThemes = GESCHICHTE_CURRICULUM[grade] || [];
  const allSubtopics = allThemes.flatMap(t => t.subtopics);

  for (const id of subtopicIds) {
    const subtopic = allSubtopics.find(s => s.id === id);
    if (!subtopic) continue;

    const topicName = (subtopic.name as any)[lang] || (subtopic.name as any).en;
    
    // Generate exactly 25 MCQ and 10 Typing per altéma
    for (let i = 1; i <= 25; i++) {
      pool.push({
        type: "mcq",
        topic: `Geschichte Klasse ${grade}`,
        subtopic: id,
        question: `[${topicName}] Frage ${i}: Welche Aussage ist korrekt?`,
        options: [`Richtige Antwort zu ${topicName}`, `Falsche Antwort 1`, `Falsche Antwort 2`, `Falsche Antwort 3`],
        correct: 0
      });
    }
    
    for (let i = 1; i <= 10; i++) {
      pool.push({
        type: "typing",
        topic: `Geschichte Klasse ${grade}`,
        subtopic: id,
        question: `[${topicName}] Typing Frage ${i}: Gib das Schlüsselwort ein.`,
        answer: "Antwort"
      });
    }
  }

  // Shuffle
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function calculateGeschichteMark(pct: number): GradeMark {
  if (pct >= 92) return { label: "1", description: "Sehr gut", color: "#10B981", emoji: "🌟" };
  if (pct >= 80) return { label: "2", description: "Gut", color: "#3B82F6", emoji: "😊" };
  if (pct >= 65) return { label: "3", description: "Befriedigend", color: "#F59E0B", emoji: "🙂" };
  if (pct >= 50) return { label: "4", description: "Ausreichend", color: "#F97316", emoji: "😐" };
  if (pct >= 30) return { label: "5", description: "Mangelhaft", color: "#EF4444", emoji: "😕" };
  return { label: "6", description: "Ungenügend", color: "#991B1B", emoji: "😞" };
}
