// ─── BIOLOGIE CURRICULUM KLASSE 6 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";
import { pickDiverse } from "./testDiversity";
import { localizeBiologieQuestions } from "./biologieQuestionTranslations";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K6: BiologieTheme[] = [
  {
    id: "wirbellose",
    name: { de: "Wirbellose Tiere", hu: "Gerinctelen Állatok", ro: "Animale nevertebrate", en: "Invertebrates" },
    icon: "🐛",
    color: "#FF6B6B",
    subtopics: [
      { id: "arthropods", name: { de: "Gliederfüßer", hu: "Ízeltlábúak", ro: "Artropode", en: "Arthropods" }, questions: [], hasGenerator: true },
      { id: "insects", name: { de: "Insekten", hu: "Rovarok", ro: "Insecte", en: "Insects" }, questions: [], hasGenerator: true },
      { id: "spiders", name: { de: "Spinnen", hu: "Pókok", ro: "Păianjeni", en: "Spiders" }, questions: [], hasGenerator: true },
      { id: "mollusks", name: { de: "Weichtiere", hu: "Puhatestűek", ro: "Moluște", en: "Mollusks" }, questions: [], hasGenerator: true },
      { id: "worm", name: { de: "Würmer", hu: "Férgek", ro: "Viermi", en: "Worms" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "wald",
    name: { de: "Ökosystem Wald", hu: "Erdei Ökoszisztéma", ro: "Ecosistemul pădurii", en: "Forest Ecosystem" },
    icon: "🌲",
    color: "#2ECC71",
    subtopics: [
      { id: "forest_layers", name: { de: "Waldschichten", hu: "Erdőszintek", ro: "Straturile pădurii", en: "Forest layers" }, questions: [], hasGenerator: true },
      { id: "food_chain", name: { de: "Nahrungskette", hu: "Tápláléklánc", ro: "Lanț trofic", en: "Food chain" }, questions: [], hasGenerator: true },
      { id: "decomposition", name: { de: "Zersetzung", hu: "Lebomlás", ro: "Descompunere", en: "Decomposition" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "gewaesser",
    name: { de: "Ökosystem Gewässer", hu: "Vízi Ökoszisztéma", ro: "Ecosistemul acvatic", en: "Aquatic Ecosystem" },
    icon: "💧",
    color: "#3498DB",
    subtopics: [
      { id: "freshwater", name: { de: "Süßwasser", hu: "Édesvíz", ro: "Apă dulce", en: "Freshwater" }, questions: [], hasGenerator: true },
      { id: "saltwater", name: { de: "Salzwasser", hu: "Sósvíz", ro: "Apă sărată", en: "Saltwater" }, questions: [], hasGenerator: true },
      { id: "water_organisms", name: { de: "Wasserorganismen", hu: "Vízi élőlények", ro: "Organisme acvatice", en: "Aquatic organisms" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "blutkreislauf",
    name: { de: "Blut & Kreislauf", hu: "Vérkeringés", ro: "Sânge și circulație", en: "Blood & Circulation" },
    icon: "❤️",
    color: "#E74C3C",
    subtopics: [
      { id: "blood_components", name: { de: "Blutbestandteile", hu: "Vérösszetevők", ro: "Componente ale sângelui", en: "Blood components" }, questions: [], hasGenerator: true },
      { id: "heart", name: { de: "Herz", hu: "Szív", ro: "Inimă", en: "Heart" }, questions: [], hasGenerator: true },
      { id: "circulation", name: { de: "Blutkreislauf", hu: "Vérkeringés", ro: "Circulația sângelui", en: "Blood circulation" }, questions: [], hasGenerator: true },
      { id: "blood_types", name: { de: "Blutgruppen", hu: "Vércsoportok", ro: "Grupe de sânge", en: "Blood types" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "atmung",
    name: { de: "Atmung", hu: "Légzés", ro: "Respirație", en: "Respiration" },
    icon: "💨",
    color: "#9B59B6",
    subtopics: [
      { id: "lungs", name: { de: "Lungen", hu: "Tüdő", ro: "Plămâni", en: "Lungs" }, questions: [], hasGenerator: true },
      { id: "respiration", name: { de: "Atmungsprozess", hu: "Légzési folyamat", ro: "Procesul de respirație", en: "Respiration process" }, questions: [], hasGenerator: true },
      { id: "gas_exchange", name: { de: "Gasaustausch", hu: "Gázcsere", ro: "Schimb de gaze", en: "Gas exchange" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "pubertaet",
    name: { de: "Pubertät & Fortpflanzung", hu: "Pubertás és szaporodás", ro: "Pubertate și reproducere", en: "Puberty & Reproduction" },
    icon: "🧬",
    color: "#F39C12",
    subtopics: [
      { id: "male_repro", name: { de: "Männliches System", hu: "Férfi szaporító szervrendszer", ro: "Sistem reproducător masculin", en: "Male reproductive system" }, questions: [], hasGenerator: true },
      { id: "female_repro", name: { de: "Weibliches System", hu: "Női szaporító szervrendszer", ro: "Sistem reproducător feminin", en: "Female reproductive system" }, questions: [], hasGenerator: true },
      { id: "hormones", name: { de: "Hormone", hu: "Hormonok", ro: "Hormoni", en: "Hormones" }, questions: [], hasGenerator: true },
      { id: "hygiene", name: { de: "Hygiene", hu: "Higiénia", ro: "Igienă", en: "Hygiene" }, questions: [], hasGenerator: false },
      { id: "growth", name: { de: "Wachstum", hu: "Növekedés", ro: "Creștere", en: "Growth" }, questions: [], hasGenerator: false },
      { id: "changes", name: { de: "Körperliche Veränderungen", hu: "Testi változások", ro: "Schimbări fizice", en: "Physical changes" }, questions: [], hasGenerator: false },
    ],
  },
];

export const K6_CURRICULUM = K6;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  Record<string, (seed?: number) => BiologieQuestion[]>
>;

export let K6_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK6GeneratorMap(map: BiologieGeneratorMap) {
  K6_GENERATOR_MAP = map;
}

function getK6QuestionsGerman(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K6_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = K6_GENERATOR_MAP;

  if (!generators || Object.keys(generators).length === 0) {
    // Fallback: csak a hardcoded questions-t használ
    for (const theme of themes) {
      for (const sub of theme.subtopics) {
        if (selectedSubtopicIds.includes(sub.id)) {
          pool.push(...sub.questions);
        }
      }
    }
    return pickDiverse(pool, count);
  }

  // Generator-alapú
  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // MCQ generátor
        let generatorFn: any; for (const tg of Object.values(generators)) { if (tg[sub.id]) { generatorFn = tg[sub.id]; break; } }
        if (generatorFn) {
          pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
        } else {
          pool.push(...sub.questions);
        }

        // Typing generátor
        const typingKey = sub.id + "_typing";
        let typingFn: any; for (const tg of Object.values(generators)) { if (tg[typingKey]) { typingFn = tg[typingKey]; break; } }
        if (typingFn) {
          pool.push(...typingFn(Math.floor(Math.random() * 1000000)));
        }
      }
    }
  }

  // Deduplicate by question text
  const seenQ = new Set<string>();
  const dedupedPool = pool.filter(q => {
    if (seenQ.has(q.question)) return false;
    seenQ.add(q.question);
    return true;
  });

  // Fisher-Yates shuffle
  for (let i = dedupedPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dedupedPool[i], dedupedPool[j]] = [dedupedPool[j], dedupedPool[i]];
  }
  return pickDiverse(dedupedPool, count);
}

export function getK6Questions(selectedSubtopicIds: string[], count = 10, lang = "de"): BiologieQuestion[] {
  return localizeBiologieQuestions(getK6QuestionsGerman(selectedSubtopicIds, count), lang);
}

// ─── GRADING ──────────────────────────────────────────────────────────────

export function calculateBiologieMark(pct: number): TestGradeMark {
  if (pct >= 95) return { note: "1", label: "Sehr gut",    color: "#FFD700", emoji: "🌟" };
  if (pct >= 80) return { note: "2", label: "Gut",         color: "#00FF88", emoji: "😊" };
  if (pct >= 65) return { note: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: "4", label: "Ausreichend", color: "#FF9500", emoji: "😐" };
  if (pct >= 25) return { note: "5", label: "Mangelhaft",  color: "#FF6B00", emoji: "😅" };
  return             { note: "6", label: "Ungenügend",     color: "#FF4444", emoji: "😟" };
}
