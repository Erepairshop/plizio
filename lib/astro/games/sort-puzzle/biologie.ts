import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "sp-bio-1",
    taskDescription: {
      en: "Sort the levels of biological organization from smallest to largest.",
      de: "Sortiere die Ebenen der biologischen Organisation von klein nach groß.",
      hu: "Rendezd a biológiai szerveződés szintjeit a legkisebbtől a legnagyobbig.",
      ro: "Sortează nivelurile de organizare biologică de la cel mai mic la cel mai mare."
    },
    items: [
      { id: "o1", label: { en: "Cell", de: "Zelle", hu: "Sejt", ro: "Celulă" } },
      { id: "o2", label: { en: "Tissue", de: "Gewebe", hu: "Szövet", ro: "Țesut" } },
      { id: "o3", label: { en: "Organ", de: "Organ", hu: "Szerv", ro: "Organ" } },
      { id: "o4", label: { en: "Organism", de: "Organismus", hu: "Szervezet", ro: "Organism" } }
    ],
    correctOrder: ["o1", "o2", "o3", "o4"]
  },
  {
    id: "sp-bio-2",
    taskDescription: {
      en: "Sort the path of food through the digestive system.",
      de: "Sortiere den Weg der Nahrung durch das Verdauungssystem.",
      hu: "Rendezd az étel útját az emésztőrendszeren keresztül.",
      ro: "Sortează traseul alimentelor prin sistemul digestiv."
    },
    items: [
      { id: "d1", label: { en: "Mouth", de: "Mund", hu: "Száj", ro: "Gură" } },
      { id: "d2", label: { en: "Esophagus", de: "Speiseröhre", hu: "Nyelőcső", ro: "Esofag" } },
      { id: "d3", label: { en: "Stomach", de: "Magen", hu: "Gyomor", ro: "Stomac" } },
      { id: "d4", label: { en: "Intestines", de: "Darm", hu: "Belek", ro: "Intestine" } }
    ],
    correctOrder: ["d1", "d2", "d3", "d4"]
  },
  {
    id: "sp-bio-3",
    taskDescription: {
      en: "Sort the life cycle of a butterfly.",
      de: "Sortiere den Lebenszyklus eines Schmetterlings.",
      hu: "Rendezd a pillangó életciklusát.",
      ro: "Sortează ciclul de viață al unui fluture."
    },
    items: [
      { id: "l1", label: { en: "Egg", de: "Ei", hu: "Tojás (pete)", ro: "Ou" } },
      { id: "l2", label: { en: "Caterpillar (Larva)", de: "Raupe (Larve)", hu: "Hernyó (lárva)", ro: "Omidă (larvă)" } },
      { id: "l3", label: { en: "Chrysalis (Pupa)", de: "Puppe", hu: "Báb", ro: "Crizalidă (pupă)" } },
      { id: "l4", label: { en: "Butterfly", de: "Schmetterling", hu: "Pillangó", ro: "Fluture" } }
    ],
    correctOrder: ["l1", "l2", "l3", "l4"]
  }
];