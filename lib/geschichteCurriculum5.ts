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
  { id: "mesopotamien_detail", names: { de: "Mesopotamien", hu: "Mezopotámia", ro: "Mesopotamia", en: "Mesopotamia" } },
  { id: "indus_zivilisation",  names: { de: "Indus-Zivilisation", hu: "Indus-völgyi civilizáció", ro: "Civilizația Indusului", en: "Indus Valley Civilization" } },
  { id: "altes_china",         names: { de: "Altes China", hu: "Ókori Kína", ro: "China Antică", en: "Ancient China" } },
  { id: "persisches_reich",    names: { de: "Persisches Reich", hu: "Perzsa Birodalom", ro: "Imperiul Persan", en: "Persian Empire" } },
  { id: "griechische_goetter", names: { de: "Griechische Götter", hu: "Görög istenek", ro: "Zei greci", en: "Greek Gods" } },
  { id: "alexander_der_grosse",names: { de: "Alexander der Große", hu: "Nagy Sándor", ro: "Alexandru cel Mare", en: "Alexander the Great" } },
  { id: "olympische_spiele",   names: { de: "Olympische Spiele", hu: "Olimpiai játékok", ro: "Jocurile Olimpice", en: "Olympic Games" } },
  { id: "griechische_philosophen", names: { de: "Griechische Philosophen", hu: "Görög filozófusok", ro: "Filozofi greci", en: "Greek Philosophers" } },
  { id: "demokratie_athen",    names: { de: "Demokratie in Athen", hu: "Athéni demokrácia", ro: "Democrația Ateniană", en: "Athenian Democracy" } },
  { id: "pharaonen_dynastien", names: { de: "Pharaonen-Dynastien", hu: "Fáraó-dinasztiák", ro: "Dinastiile faraonilor", en: "Pharaoh Dynasties" } },
  { id: "pyramiden_gizeh",     names: { de: "Pyramiden von Gizeh", hu: "Gízai piramisok", ro: "Piramidele din Giza", en: "Pyramids of Giza" } },
  { id: "mumifizierung",       names: { de: "Mumifizierung", hu: "Mumifikálás", ro: "Mumificare", en: "Mummification" } },
  { id: "punische_kriege",     names: { de: "Punische Kriege", hu: "Pun háborúk", ro: "Războaiele Punice", en: "Punic Wars" } },
  { id: "julius_caesar",       names: { de: "Julius Caesar", hu: "Julius Caesar", ro: "Iulius Cezar", en: "Julius Caesar" } },
  { id: "kaiser_augustus",     names: { de: "Kaiser Augustus", hu: "Augustus császár", ro: "Împăratul Augustus", en: "Emperor Augustus" } },
  { id: "konstantin_grosse",   names: { de: "Konstantin der Große", hu: "Nagy Konstantin", ro: "Constantin cel Mare", en: "Constantine the Great" } },
  { id: "christentum_entstehung", names: { de: "Entstehung des Christentums", hu: "A kereszténység kialakulása", ro: "Apariția creștinismului", en: "Origin of Christianity" } },
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

  // Real hand-written generator content (currently DE-only)
  // TEMP: serve DE content for all languages until HU/RO/EN content is generated
  // (prior behavior was placeholder '[Topic] MCQ N?' for non-DE)
  const gen = G5_Generators_Geschichte[subtopicId];
  if (gen) {
    const all = gen();
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  void lang;

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
