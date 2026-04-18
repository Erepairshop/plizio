import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const rounds: DragSortRound[] = [
  {
    id: "ro-ds-1",
    requireFullCorrect: true,
    bins: [
      { id: "b-fruits", label: { en: "Fruits", de: "Früchte", hu: "Gyümölcsök", ro: "Fructe" }, icon: "🍎", color: "#FF5722" },
      { id: "b-animals", label: { en: "Animals", de: "Tiere", hu: "Állatok", ro: "Animale" }, icon: "🐶", color: "#4CAF50" }
    ],
    items: [
      { id: "i1", label: { en: "Apple", de: "Apfel", hu: "Alma", ro: "Măr" }, correctBinId: "b-fruits" },
      { id: "i2", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, correctBinId: "b-animals" },
      { id: "i3", label: { en: "Banana", de: "Banane", hu: "Banán", ro: "Banană" }, correctBinId: "b-fruits" },
      { id: "i4", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, correctBinId: "b-animals" }
    ]
  }
];
