import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const getDragSortSachkundePool = (): DragSortRound[] => [
  {
    id: "sk-ds-1",
    requireFullCorrect: true,
    bins: [
      { id: "b-living", label: { en: "Living", de: "Lebendig", hu: "Élő", ro: "Viu" }, icon: "🌱", color: "#4CAF50" },
      { id: "b-nonliving", label: { en: "Non-Living", de: "Nicht lebendig", hu: "Élettelen", ro: "Neviu" }, icon: "🪨", color: "#9E9E9E" }
    ],
    items: [
      { id: "i1", label: { en: "Tree", de: "Baum", hu: "Fa", ro: "Copac" }, correctBinId: "b-living" },
      { id: "i2", label: { en: "Rock", de: "Stein", hu: "Kő", ro: "Piatră" }, correctBinId: "b-nonliving" },
      { id: "i3", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, correctBinId: "b-living" },
      { id: "i4", label: { en: "Car", de: "Auto", hu: "Autó", ro: "Mașină" }, correctBinId: "b-nonliving" }
    ]
  },
  {
    id: "sk-ds-2",
    requireFullCorrect: true,
    bins: [
      { id: "b-wild", label: { en: "Wild", de: "Wildtier", hu: "Vadállat", ro: "Sălbatic" }, icon: "🦁", color: "#FF9800" },
      { id: "b-pet", label: { en: "Pet", de: "Haustier", hu: "Háziállat", ro: "De companie" }, icon: "🐶", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "Lion", de: "Löwe", hu: "Oroszlán", ro: "Leu" }, correctBinId: "b-wild" },
      { id: "i2", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, correctBinId: "b-pet" },
      { id: "i3", label: { en: "Wolf", de: "Wolf", hu: "Farkas", ro: "Lup" }, correctBinId: "b-wild" },
      { id: "i4", label: { en: "Hamster", de: "Hamster", hu: "Hörcsög", ro: "Hamster" }, correctBinId: "b-pet" }
    ]
  }
];
