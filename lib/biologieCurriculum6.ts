// ─── BIOLOGIE CURRICULUM KLASSE 6 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K6: BiologieTheme[] = [
  {
    id: "wirbellose",
    name: "Wirbellose Tiere (Gerinctelen Állatok)",
    icon: "🐛",
    color: "#FF6B6B",
    subtopics: [
      { id: "arthropods", name: "Gliederfüßer", questions: [] },
      { id: "insects", name: "Insekten", questions: [] },
      { id: "spiders", name: "Spinnen", questions: [] },
      { id: "mollusks", name: "Weichtiere", questions: [] },
      { id: "worm", name: "Würmer", questions: [] },
    ],
  },
  {
    id: "wald",
    name: "Ökosystem Wald (Erdei Ökoszisztéma)",
    icon: "🌲",
    color: "#2ECC71",
    subtopics: [
      { id: "forest_layers", name: "Waldschichten", questions: [] },
      { id: "food_chain", name: "Nahrungskette", questions: [] },
      { id: "decomposition", name: "Zersetzung", questions: [] },
    ],
  },
  {
    id: "gewaesser",
    name: "Ökosystem Gewässer (Vízi Ökoszisztéma)",
    icon: "💧",
    color: "#3498DB",
    subtopics: [
      { id: "freshwater", name: "Süßwasser", questions: [] },
      { id: "saltwater", name: "Salzwasser", questions: [] },
      { id: "water_organisms", name: "Wasserorganismen", questions: [] },
    ],
  },
  {
    id: "blutkreislauf",
    name: "Blut & Kreislauf (Vérkeringés)",
    icon: "❤️",
    color: "#E74C3C",
    subtopics: [
      { id: "blood_components", name: "Blutbestandteile", questions: [] },
      { id: "heart", name: "Herz", questions: [] },
      { id: "circulation", name: "Blutkreislauf", questions: [] },
      { id: "blood_types", name: "Blutgruppen", questions: [] },
    ],
  },
  {
    id: "atmung",
    name: "Atmung (Légzés)",
    icon: "💨",
    color: "#9B59B6",
    subtopics: [
      { id: "lungs", name: "Lungen", questions: [] },
      { id: "respiration", name: "Atmungsprozess", questions: [] },
      { id: "gas_exchange", name: "Gasaustausch", questions: [] },
    ],
  },
  {
    id: "pubertaet",
    name: "Pubertät & Fortpflanzung (Pubertás)",
    icon: "🧬",
    color: "#F39C12",
    subtopics: [
      { id: "male_repro", name: "Männliches System", questions: [] },
      { id: "female_repro", name: "Weibliches System", questions: [] },
      { id: "hormones", name: "Hormone", questions: [] },
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

export function getK6Questions(
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
    return pool.slice(0, count);
  }

  // Generator-alapú
  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // MCQ generátor
        let generatorFn = generators[sub.id];
        if (generatorFn) {
          pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
        } else {
          pool.push(...sub.questions);
        }

        // Typing generátor
        const typingKey = sub.id + "_typing";
        let typingFn = generators[typingKey];
        if (typingFn) {
          pool.push(...typingFn(Math.floor(Math.random() * 1000000)));
        }
      }
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
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
