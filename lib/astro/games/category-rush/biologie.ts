import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const getCategoryRushBiologiePool = (): CategoryRushRound[] => [
  {
    id: "bio-cr-1",
    durationMs: 30000,
    categories: [
      { id: "c-mammal", label: { en: "Mammal", de: "Säugetier", hu: "Emlős", ro: "Mamifer" }, edge: "top", color: "#E91E63" },
      { id: "c-bird", label: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, edge: "bottom", color: "#03A9F4" },
      { id: "c-reptile", label: { en: "Reptile", de: "Reptil", hu: "Hüllő", ro: "Reptilă" }, edge: "left", color: "#4CAF50" },
      { id: "c-fish", label: { en: "Fish", de: "Fisch", hu: "Hal", ro: "Pește" }, edge: "right", color: "#FFC107" }
    ],
    items: [
      { id: "i1", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, correctCategoryId: "c-mammal" },
      { id: "i2", label: { en: "Eagle", de: "Adler", hu: "Sas", ro: "Vultur" }, correctCategoryId: "c-bird" },
      { id: "i3", label: { en: "Snake", de: "Schlange", hu: "Kígyó", ro: "Șarpe" }, correctCategoryId: "c-reptile" },
      { id: "i4", label: { en: "Shark", de: "Hai", hu: "Cápa", ro: "Rechin" }, correctCategoryId: "c-fish" },
      { id: "i5", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, correctCategoryId: "c-mammal" },
      { id: "i6", label: { en: "Parrot", de: "Papagei", hu: "Papagáj", ro: "Papagal" }, correctCategoryId: "c-bird" }
    ]
  }
];
