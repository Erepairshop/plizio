import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// K7 data not yet available — placeholder curriculum with empty questions
export const INFO_K7_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k7_island1",
    name: "Informatika K7 – 1. sziget",
    icon: "💻",
    color: "#3B82F6",
    subtopics: Array.from({ length: 15 }, (_, i) => ({
      id: `info_k7_t${String(i + 1).padStart(2, "0")}`,
      name: { de: `Thema ${i + 1}`, en: `Topic ${i + 1}`, hu: `Téma ${i + 1}`, ro: `Subiect ${i + 1}` },
      questions: [] as KemiaQuestion[],
      hasGenerator: false,
    })),
  },
  {
    id: "info_k7_island2",
    name: "Informatika K7 – 2. sziget",
    icon: "🌐",
    color: "#8B5CF6",
    subtopics: Array.from({ length: 15 }, (_, i) => ({
      id: `info_k7_t${String(i + 16).padStart(2, "0")}`,
      name: { de: `Thema ${i + 16}`, en: `Topic ${i + 16}`, hu: `Téma ${i + 16}`, ro: `Subiect ${i + 16}` },
      questions: [] as KemiaQuestion[],
      hasGenerator: false,
    })),
  },
];

export function getInfoK7Questions(_subtopicIds: string[], _count?: number): KemiaQuestion[] {
  return [];
}
