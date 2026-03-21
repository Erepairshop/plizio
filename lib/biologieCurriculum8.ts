// ─── BIOLOGIE CURRICULUM KLASSE 8 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K8: BiologieTheme[] = [
  {
    id: "genetik",
    name: "Genetik (Genetika)",
    icon: "🧬",
    color: "#9B59B6",
    subtopics: [
      { id: "dna_struktur", name: "DNA Struktur", questions: [] },
      { id: "vererbung", name: "Vererbung", questions: [] },
      { id: "mutation", name: "Mutation", questions: [] },
      { id: "genetische_technik", name: "Genetische Technik", questions: [] },
    ],
  },
  {
    id: "hormone",
    name: "Hormone & Steuersysteme (Hormonok)",
    icon: "⚗️",
    color: "#E74C3C",
    subtopics: [
      { id: "endokrine_druesen", name: "Endokrine Drüsen", questions: [] },
      { id: "hormonstoffwechsel", name: "Hormonstoffwechsel", questions: [] },
      { id: "feedback_mechanismen", name: "Feedback Mechanismen", questions: [] },
    ],
  },
  {
    id: "reproduktion",
    name: "Reproduktion & Entwicklung (Szaporodás)",
    icon: "🍼",
    color: "#F39C12",
    subtopics: [
      { id: "gametogenese", name: "Gametogenese", questions: [] },
      { id: "befruchtung", name: "Befruchtung", questions: [] },
      { id: "embryonalentwicklung", name: "Embryonalentwicklung", questions: [] },
      { id: "geschlechtsbestimmung", name: "Geschlechtsbestimmung", questions: [] },
    ],
  },
  {
    id: "biotechnologie",
    name: "Biotechnologie (Biológia Technológia)",
    icon: "🔬",
    color: "#1ABC9C",
    subtopics: [
      { id: "enzyme", name: "Enzyme", questions: [] },
      { id: "bioethik", name: "Bioethik", questions: [] },
      { id: "biotech_anwendungen", name: "Anwendungen", questions: [] },
    ],
  },
  {
    id: "systemische",
    name: "Systemische Biologie (Rendszerbiológia)",
    icon: "🌐",
    color: "#3498DB",
    subtopics: [
      { id: "integration", name: "Systemintegration", questions: [] },
      { id: "homeostasis", name: "Homöostase", questions: [] },
      { id: "stoffwechseltypologie", name: "Stoffwechseltypen", questions: [] },
    ],
  },
  {
    id: "evolution_advanced",
    name: "Evolution Vertiefung (Evolúció Mélyítés)",
    icon: "🧪",
    color: "#D35400",
    subtopics: [
      { id: "populationsgenetik", name: "Populationsgenetik", questions: [] },
      { id: "artbildung", name: "Artbildung", questions: [] },
      { id: "phylogenie", name: "Phylogenie", questions: [] },
    ],
  },
];

export const K8_CURRICULUM = K8;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  (seed?: number) => BiologieQuestion[]
>;

export let K8_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK8GeneratorMap(map: BiologieGeneratorMap) {
  K8_GENERATOR_MAP = map;
}

export function getK8Questions(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K8_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = K8_GENERATOR_MAP;

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
