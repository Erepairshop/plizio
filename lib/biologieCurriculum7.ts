// ─── BIOLOGIE CURRICULUM KLASSE 7 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 19 subtopic × 2 (MCQ + Typing) = 38 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K7: BiologieTheme[] = [
  {
    id: "zellen",
    name: "Zellen & Mikroskop (Sejtek)",
    icon: "🔬",
    color: "#E67E22",
    subtopics: [
      { id: "cell_structure", name: "Zellstruktur", questions: [], hasGenerator: true },
      { id: "cell_organelles", name: "Organellen", questions: [], hasGenerator: true },
      { id: "microscope", name: "Mikroskop", questions: [], hasGenerator: true },
      { id: "cell_division", name: "Zellteilung", questions: [], hasGenerator: true },
      { id: "cell_cycle", name: "Zellzyklus", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "stoffwechsel",
    name: "Fotosynthese & Zellatmung (Anyagcsere)",
    icon: "⚡",
    color: "#27AE60",
    subtopics: [
      { id: "photosynthesis_detail", name: "Fotosynthese Detail", questions: [], hasGenerator: true },
      { id: "cellular_respiration", name: "Zellatmung", questions: [], hasGenerator: true },
      { id: "energy_transfer", name: "Energieübertrag", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "oekologie",
    name: "Ökologie (Ökológia)",
    icon: "🌍",
    color: "#16A085",
    subtopics: [
      { id: "population", name: "Population", questions: [], hasGenerator: true },
      { id: "ecological_niche", name: "Ökologische Nische", questions: [], hasGenerator: true },
      { id: "competition", name: "Konkurrenz", questions: [], hasGenerator: true },
      { id: "symbiosis", name: "Symbiose", questions: [], hasGenerator: true },
      { id: "biogeochemical_cycles", name: "Biogeochemische Kreisläufe", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "immunsystem",
    name: "Immunsystem (Immunrendszer)",
    icon: "🛡️",
    color: "#8E44AD",
    subtopics: [
      { id: "immune_cells", name: "Immunzellen", questions: [], hasGenerator: true },
      { id: "immune_response", name: "Immunantwort", questions: [], hasGenerator: true },
      { id: "vaccination", name: "Impfung", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "nervensystem",
    name: "Nervensystem (Idegrendszer)",
    icon: "🧠",
    color: "#C0392B",
    subtopics: [
      { id: "neuron", name: "Neuron", questions: [], hasGenerator: true },
      { id: "synapse", name: "Synapse", questions: [], hasGenerator: true },
      { id: "reflex", name: "Reflex", questions: [], hasGenerator: true },
      { id: "brain", name: "Gehirn", questions: [], hasGenerator: true },
      { id: "behavior_learning", name: "Verhalten & Lernen", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "evolution",
    name: "Evolution Grundlagen (Evolúció)",
    icon: "🧬",
    color: "#D35400",
    subtopics: [
      { id: "adaptation", name: "Anpassung", questions: [], hasGenerator: true },
      { id: "natural_selection", name: "Natürliche Auswahl", questions: [], hasGenerator: true },
      { id: "fossils", name: "Fossilien", questions: [], hasGenerator: true },
    ],
  },
];

export const K7_CURRICULUM = K7;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  (seed?: number) => BiologieQuestion[]
>;

export let K7_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK7GeneratorMap(map: BiologieGeneratorMap) {
  K7_GENERATOR_MAP = map;
}

export function getK7Questions(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K7_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = K7_GENERATOR_MAP;

  if (!generators || Object.keys(generators).length === 0) {
    for (const theme of themes) {
      for (const sub of theme.subtopics) {
        if (selectedSubtopicIds.includes(sub.id)) {
          pool.push(...sub.questions);
        }
      }
    }
    return pool.slice(0, count);
  }

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        let generatorFn = generators[sub.id];
        if (generatorFn) {
          pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
        } else {
          pool.push(...sub.questions);
        }

        const typingKey = sub.id + "_typing";
        let typingFn = generators[typingKey];
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

  for (let i = dedupedPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dedupedPool[i], dedupedPool[j]] = [dedupedPool[j], dedupedPool[i]];
  }
  return dedupedPool.slice(0, count);
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
