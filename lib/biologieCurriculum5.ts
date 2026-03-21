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
      { id: "fish", name: "Fische", questions: [] },
      { id: "amphibian", name: "Lurchok (Amphibien)", questions: [] },
      { id: "reptile", name: "Hüllők (Reptilien)", questions: [] },
      { id: "bird", name: "Madarak (Vögel)", questions: [] },
      { id: "mammal", name: "Emlősök (Säugetiere)", questions: [] },
      { id: "vertebrate_comparison", name: "Összehasonlítás", questions: [] },
    ],
  },
  {
    id: "pflanzen",
    name: "Pflanzen (Növények)",
    icon: "🌱",
    color: "#2196F3",
    subtopics: [
      { id: "plant_parts", name: "Növényi Szervek", questions: [] },
      { id: "photosynthesis", name: "Fotoszintézis Alapok", questions: [] },
      { id: "flower_structure", name: "Virág Szerkezete", questions: [] },
      { id: "plant_reproduction", name: "Szaporodás", questions: [] },
      { id: "plant_types", name: "Növénytípusok", questions: [] },
    ],
  },
  {
    id: "koerper",
    name: "Mein Körper (Testünk)",
    icon: "🦴",
    color: "#FF9800",
    subtopics: [
      { id: "skeleton", name: "Csontváz", questions: [] },
      { id: "muscles", name: "Izmok (Muskeln)", questions: [] },
      { id: "skin", name: "Bőr", questions: [] },
      { id: "body_systems", name: "Testrendszerek", questions: [] },
    ],
  },
  {
    id: "sinnesorgane",
    name: "Sinnesorgane (Érzékszervek)",
    icon: "👁️",
    color: "#E91E63",
    subtopics: [
      { id: "eye", name: "Szem", questions: [] },
      { id: "ear", name: "Fül", questions: [] },
      { id: "nose", name: "Orr (Nase)", questions: [] },
      { id: "tongue", name: "Nyelv (Zunge)", questions: [] },
      { id: "skin_sense", name: "Bőr-érzékelés (Tastsinne)", questions: [] },
    ],
  },
  {
    id: "ernaehrung",
    name: "Ernährung & Verdauung",
    icon: "🍎",
    color: "#9C27B0",
    subtopics: [
      { id: "nutrients", name: "Tápanyagok", questions: [] },
      { id: "digestive_system", name: "Emésztőrendszer", questions: [] },
      { id: "digestive_organs", name: "Emésztési Szervek", questions: [] },
      { id: "healthy_diet", name: "Egészséges Táplálkozás", questions: [] },
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
