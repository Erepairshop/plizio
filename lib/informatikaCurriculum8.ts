import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// K8 data not yet available — placeholder curriculum with empty questions
export const INFO_K8_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k8_island1",
    name: { de: "Informatik K8 – Insel 1", hu: "Informatika K8 – 1. sziget", ro: "Informatica K8 – Insula 1", en: "Informatics K8 – Island 1" },
    icon: "💻",
    color: "#3B82F6",
    subtopics: Array.from({ length: 15 }, (_, i) => ({
      id: `info_k8_t${String(i + 1).padStart(2, "0")}`,
      name: { de: `Thema ${i + 1}`, en: `Topic ${i + 1}`, hu: `Téma ${i + 1}`, ro: `Subiect ${i + 1}` },
      questions: [] as KemiaQuestion[],
      hasGenerator: false,
    })),
  },
  {
    id: "info_k8_island2",
    name: { de: "Informatik K8 – Insel 2", hu: "Informatika K8 – 2. sziget", ro: "Informatica K8 – Insula 2", en: "Informatics K8 – Island 2" },
    icon: "🌐",
    color: "#8B5CF6",
    subtopics: Array.from({ length: 15 }, (_, i) => ({
      id: `info_k8_t${String(i + 16).padStart(2, "0")}`,
      name: { de: `Thema ${i + 16}`, en: `Topic ${i + 16}`, hu: `Téma ${i + 16}`, ro: `Subiect ${i + 16}` },
      questions: [] as KemiaQuestion[],
      hasGenerator: false,
    })),
  },
];

export function getInfoK8Questions(_subtopicIds: string[], _count?: number): KemiaQuestion[] {
  return [];
}
