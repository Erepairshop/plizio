// ─── BIOLOGIE CURRICULUM KLASSE 5 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 24 subtopic × 2 (MCQ + Typing) = 48 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K5: BiologieTheme[] = [
  {
    id: "wirbeltiere",
    name: "Wirbeltiere (Gerinces Állatok)",
    icon: "🐟",
    color: "#4CAF50",
    subtopics: [
      { id: "fish", name: "Fische", questions: [], hasGenerator: true },
      { id: "amphibian", name: "Amphibien", questions: [], hasGenerator: true },
      { id: "reptile", name: "Reptilien", questions: [], hasGenerator: true },
      { id: "bird", name: "Vögel", questions: [], hasGenerator: true },
      { id: "mammal", name: "Säugetiere", questions: [], hasGenerator: true },
      { id: "vertebrate_comparison", name: "Vergleich", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "pflanzen",
    name: "Pflanzen (Növények)",
    icon: "🌱",
    color: "#2196F3",
    subtopics: [
      { id: "plant_parts", name: "Pflanzenorgane", questions: [], hasGenerator: true },
      { id: "photosynthesis", name: "Photosynthese Grundlagen", questions: [], hasGenerator: true },
      { id: "flower_structure", name: "Blütenstruktur", questions: [], hasGenerator: true },
      { id: "plant_reproduction", name: "Fortpflanzung", questions: [], hasGenerator: true },
      { id: "plant_types", name: "Pflanzentypen", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "koerper",
    name: "Mein Körper (Testünk)",
    icon: "🦴",
    color: "#FF9800",
    subtopics: [
      { id: "skeleton", name: "Skelett", questions: [], hasGenerator: true },
      { id: "muscles", name: "Muskeln", questions: [], hasGenerator: true },
      { id: "skin", name: "Haut", questions: [], hasGenerator: true },
      { id: "body_systems", name: "Körpersysteme", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "sinnesorgane",
    name: "Sinnesorgane (Érzékszervek)",
    icon: "👁️",
    color: "#E91E63",
    subtopics: [
      { id: "eye", name: "Auge", questions: [], hasGenerator: true },
      { id: "ear", name: "Ohr", questions: [], hasGenerator: true },
      { id: "nose", name: "Nase", questions: [], hasGenerator: true },
      { id: "tongue", name: "Zunge", questions: [], hasGenerator: true },
      { id: "skin_sense", name: "Tastsinn", questions: [], hasGenerator: true },
    ],
  },
  {
    id: "ernaehrung",
    name: "Ernährung & Verdauung (Táplálkozás)",
    icon: "🍎",
    color: "#9C27B0",
    subtopics: [
      { id: "nutrients", name: "Nährstoffe", questions: [], hasGenerator: true },
      { id: "digestive_system", name: "Verdauungssystem", questions: [], hasGenerator: true },
      { id: "digestive_organs", name: "Verdauungsorgane", questions: [], hasGenerator: true },
      { id: "healthy_diet", name: "Gesunde Ernährung", questions: [], hasGenerator: true },
    ],
  },
];

export const K5_CURRICULUM = K5;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  Record<string, (seed?: number) => BiologieQuestion[]>
>;

export let K5_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK5GeneratorMap(map: BiologieGeneratorMap) {
  K5_GENERATOR_MAP = map;
}

export function getK5Questions(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K5_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = K5_GENERATOR_MAP;

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
        let generatorFn: ((seed?: number) => BiologieQuestion[]) | undefined;
        for (const themeGens of Object.values(generators)) {
          if (themeGens[sub.id]) { generatorFn = themeGens[sub.id]; break; }
        }
        if (generatorFn) {
          pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
        } else {
          pool.push(...sub.questions);
        }

        // Typing generátor
        const typingKey = sub.id + "_typing";
        let typingFn: ((seed?: number) => BiologieQuestion[]) | undefined;
        for (const themeGens of Object.values(generators)) {
          if (themeGens[typingKey]) { typingFn = themeGens[typingKey]; break; }
        }
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
