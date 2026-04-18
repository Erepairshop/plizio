import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

// English subject: kids learning English.
export const rounds: DragSortRound[] = [
  {
    id: "en-ds-1",
    taskDescription: {
      en: "Sort words by alphabet range.",
      de: "Sortiere Wörter nach Alphabet-Bereich.",
      hu: "Rendezd a szavakat ABC-tartomány szerint.",
      ro: "Sortează cuvintele după intervalul alfabetic."
    },
    requireFullCorrect: true,
    bins: [
      { id: "b-am", label: { en: "A-M", de: "A-M", hu: "A-M", ro: "A-M" }, icon: "🔤", color: "#4CAF50" },
      { id: "b-nz", label: { en: "N-Z", de: "N-Z", hu: "N-Z", ro: "N-Z" }, icon: "🔠", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "Apple", de: "Apple", hu: "Apple", ro: "Apple" }, correctBinId: "b-am" },
      { id: "i2", label: { en: "Lion", de: "Lion", hu: "Lion", ro: "Lion" }, correctBinId: "b-am" },
      { id: "i3", label: { en: "Sun", de: "Sun", hu: "Sun", ro: "Sun" }, correctBinId: "b-nz" },
      { id: "i4", label: { en: "Zebra", de: "Zebra", hu: "Zebra", ro: "Zebra" }, correctBinId: "b-nz" }
    ]
  },
  {
    id: "en-ds-2",
    taskDescription: {
      en: "Sort by the first letter.",
      de: "Sortiere nach dem ersten Buchstaben.",
      hu: "Rendezd az első betű szerint.",
      ro: "Sortează după prima literă."
    },
    requireFullCorrect: true,
    bins: [
      { id: "b-b", label: { en: "Starts with B", de: "Beginnt mit B", hu: "B-vel kezdődik", ro: "Începe cu B" }, icon: "🅱️", color: "#2563eb" },
      { id: "b-c", label: { en: "Starts with C", de: "Beginnt mit C", hu: "C-vel kezdődik", ro: "Începe cu C" }, icon: "©️", color: "#dc2626" }
    ],
    items: [
      { id: "i1", label: { en: "Book", de: "Book", hu: "Book", ro: "Book" }, correctBinId: "b-b" },
      { id: "i2", label: { en: "Bear", de: "Bear", hu: "Bear", ro: "Bear" }, correctBinId: "b-b" },
      { id: "i3", label: { en: "Cat", de: "Cat", hu: "Cat", ro: "Cat" }, correctBinId: "b-c" },
      { id: "i4", label: { en: "Car", de: "Car", hu: "Car", ro: "Car" }, correctBinId: "b-c" }
    ]
  },
  {
    id: "en-ds-3",
    taskDescription: {
      en: "Sort words by category.",
      de: "Sortiere Wörter nach Kategorie.",
      hu: "Rendezd a szavakat kategória szerint.",
      ro: "Sortează cuvintele după categorie."
    },
    requireFullCorrect: true,
    bins: [
      { id: "b-fruit", label: { en: "Fruit", de: "Obst", hu: "Gyümölcs", ro: "Fructe" }, icon: "🍎", color: "#f59e0b" },
      { id: "b-animal", label: { en: "Animal", de: "Tier", hu: "Állat", ro: "Animal" }, icon: "🐶", color: "#8b5cf6" }
    ],
    items: [
      { id: "i1", label: { en: "Banana", de: "Banana", hu: "Banana", ro: "Banana" }, correctBinId: "b-fruit" },
      { id: "i2", label: { en: "Orange", de: "Orange", hu: "Orange", ro: "Orange" }, correctBinId: "b-fruit" },
      { id: "i3", label: { en: "Tiger", de: "Tiger", hu: "Tiger", ro: "Tiger" }, correctBinId: "b-animal" },
      { id: "i4", label: { en: "Elephant", de: "Elephant", hu: "Elephant", ro: "Elephant" }, correctBinId: "b-animal" }
    ]
  }
];
