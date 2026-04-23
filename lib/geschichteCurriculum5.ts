import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";

// ─── Subtopics with generator-backed DE content ─────────────────────────────
// Topic names + generator key mapping. Order follows ancient history flow.
const G5_SUBTOPICS = [
  { id: "fruehe_hochkulturen", names: { de: "Frühe Hochkulturen", hu: "Korai magaskultúrák", ro: "Civilizații timpurii", en: "Early Civilizations" } },
  { id: "griechenland",        names: { de: "Antikes Griechenland", hu: "Ókori Görögország", ro: "Grecia Antică", en: "Ancient Greece" } },
  { id: "aegypten",            names: { de: "Altes Ägypten", hu: "Ókori Egyiptom", ro: "Egiptul Antic", en: "Ancient Egypt" } },
  { id: "rom_republik",        names: { de: "Römische Republik", hu: "Római köztársaság", ro: "Republica Romană", en: "Roman Republic" } },
  { id: "rom_kaiserreich",     names: { de: "Römisches Kaiserreich", hu: "Római császárság", ro: "Imperiul Roman", en: "Roman Empire" } },
  { id: "germanen",            names: { de: "Germanen", hu: "Germánok", ro: "Germanii", en: "Germanic Peoples" } },
  { id: "voelkerwanderung",    names: { de: "Völkerwanderung", hu: "Népvándorlás", ro: "Marea migrație", en: "Migration Period" } },
];

export const G5_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g5_theme_1",
    name: { de: "Antike", hu: "Ókor", ro: "Antichitate", en: "Antiquity" },
    icon: "🏺",
    color: "#F59E0B",
    subtopics: G5_SUBTOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG5GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const topic = G5_SUBTOPICS.find(x => x.id === subtopicId);
  if (!topic) return [];

  // DE: use real hand-written generator content
  if (lang === "de") {
    const gen = G5_Generators_Geschichte[subtopicId];
    if (gen) {
      const all = gen();
      // shuffle + slice up to `count`
      const shuffled = [...all].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    }
  }

  // HU/RO/EN fallback — until lang-specific content is generated
  const topicName = (topic.names as any)[lang] || topic.names.en;
  const pool: CurriculumQuestion[] = [];
  for (let i = 1; i <= 25; i++) {
    pool.push({
      type: "mcq",
      topic: "Geschichte K5",
      subtopic: subtopicId,
      question: `[${topicName}] MCQ ${i}?`,
      options: [`A${i}`, `B${i}`, `C${i}`, `D${i}`],
      correct: 0
    });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({
      type: "typing",
      topic: "Geschichte K5",
      subtopic: subtopicId,
      question: `[${topicName}] Typing ${i}?`,
      answer: `Antwort ${i}`
    });
  }
  return pool.slice(0, count);
}
