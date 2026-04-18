import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const rounds: DragSortRound[] = [
  {
    id: "math-ds-1",
    requireFullCorrect: true,
    bins: [
      { id: "b-even", label: { en: "Even", de: "Gerade", hu: "Páros", ro: "Par" }, icon: "2️⃣", color: "#4CAF50" },
      { id: "b-odd", label: { en: "Odd", de: "Ungerade", hu: "Páratlan", ro: "Impar" }, icon: "1️⃣", color: "#9E9E9E" }
    ],
    items: [
      { id: "i1", label: { en: "2", de: "2", hu: "2", ro: "2" }, correctBinId: "b-even" },
      { id: "i2", label: { en: "5", de: "5", hu: "5", ro: "5" }, correctBinId: "b-odd" },
      { id: "i3", label: { en: "8", de: "8", hu: "8", ro: "8" }, correctBinId: "b-even" },
      { id: "i4", label: { en: "11", de: "11", hu: "11", ro: "11" }, correctBinId: "b-odd" }
    ]
  },
  {
    id: "math-ds-2",
    requireFullCorrect: true,
    bins: [
      { id: "b-less10", label: { en: "< 10", de: "< 10", hu: "< 10", ro: "< 10" }, icon: "⬇️", color: "#FF9800" },
      { id: "b-more10", label: { en: "> 10", de: "> 10", hu: "> 10", ro: "> 10" }, icon: "⬆️", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "5", de: "5", hu: "5", ro: "5" }, correctBinId: "b-less10" },
      { id: "i2", label: { en: "15", de: "15", hu: "15", ro: "15" }, correctBinId: "b-more10" },
      { id: "i3", label: { en: "8", de: "8", hu: "8", ro: "8" }, correctBinId: "b-less10" },
      { id: "i4", label: { en: "20", de: "20", hu: "20", ro: "20" }, correctBinId: "b-more10" }
    ]
  },
  {
    id: "math-ds-3",
    requireFullCorrect: true,
    bins: [
      { id: "b-add", label: { en: "Addition", de: "Addition", hu: "Összeadás", ro: "Adunare" }, icon: "➕", color: "#E91E63" },
      { id: "b-sub", label: { en: "Subtraction", de: "Subtraktion", hu: "Kivonás", ro: "Scădere" }, icon: "➖", color: "#9C27B0" }
    ],
    items: [
      { id: "i1", label: { en: "5 + 3", de: "5 + 3", hu: "5 + 3", ro: "5 + 3" }, correctBinId: "b-add" },
      { id: "i2", label: { en: "10 - 4", de: "10 - 4", hu: "10 - 4", ro: "10 - 4" }, correctBinId: "b-sub" },
      { id: "i3", label: { en: "2 + 2", de: "2 + 2", hu: "2 + 2", ro: "2 + 2" }, correctBinId: "b-add" },
      { id: "i4", label: { en: "8 - 5", de: "8 - 5", hu: "8 - 5", ro: "8 - 5" }, correctBinId: "b-sub" }
    ]
  }
];
