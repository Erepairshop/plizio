import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";
export const rounds: CategoryRushRound[] = [
  {
    id: "ges-cr-1", durationMs: 40000,
    categories: [
      { id: "c-antiquity", label: { en: "Antiquity", de: "Antike", hu: "Ókor", ro: "Antichitate" }, edge: "top", color: "#E91E63" },
      { id: "c-middle-ages", label: { en: "Middle Ages", de: "Mittelalter", hu: "Középkor", ro: "Evul Mediu" }, edge: "bottom", color: "#03A9F4" }
    ],
    items: [
      { id: "i1", label: { en: "Pyramids", de: "Pyramiden", hu: "Piramisok", ro: "Piramide" }, correctCategoryId: "c-antiquity" },
      { id: "i2", label: { en: "Knights", de: "Ritter", hu: "Lovagok", ro: "Cavaleri" }, correctCategoryId: "c-middle-ages" },
      { id: "i3", label: { en: "Julius Caesar", de: "Julius Cäsar", hu: "Julius Caesar", ro: "Iulius Cezar" }, correctCategoryId: "c-antiquity" },
      { id: "i4", label: { en: "Castles", de: "Burgen", hu: "Várak", ro: "Castele" }, correctCategoryId: "c-middle-ages" }
    ]
  },
  {
    id: "ges-cr-2", durationMs: 40000,
    categories: [
      { id: "c-inventor", label: { en: "Inventor", de: "Erfinder", hu: "Feltaláló", ro: "Inventator" }, edge: "top", color: "#4CAF50" },
      { id: "c-ruler", label: { en: "Ruler", de: "Herrscher", hu: "Uralkodó", ro: "Conducător" }, edge: "bottom", color: "#FF9800" }
    ],
    items: [
      { id: "i1", label: { en: "Thomas Edison", de: "Thomas Edison", hu: "Thomas Edison", ro: "Thomas Edison" }, correctCategoryId: "c-inventor" },
      { id: "i2", label: { en: "Cleopatra", de: "Kleopatra", hu: "Kleopátra", ro: "Cleopatra" }, correctCategoryId: "c-ruler" },
      { id: "i3", label: { en: "Alexander the Great", de: "Alexander der Große", hu: "Nagy Sándor", ro: "Alexandru cel Mare" }, correctCategoryId: "c-ruler" },
      { id: "i4", label: { en: "Gutenberg", de: "Gutenberg", hu: "Gutenberg", ro: "Gutenberg" }, correctCategoryId: "c-inventor" }
    ]
  }
];
