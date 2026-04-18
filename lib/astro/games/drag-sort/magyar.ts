import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const rounds: DragSortRound[] = [
  {
    id: "hu-ds-1",
    requireFullCorrect: true,
    bins: [
      { id: "b-animals", label: { en: "Animals", de: "Tiere", hu: "Állatok", ro: "Animale" }, icon: "🐶", color: "#4CAF50" },
      { id: "b-fruits", label: { en: "Fruits", de: "Früchte", hu: "Gyümölcsök", ro: "Fructe" }, icon: "🍎", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "Apple", de: "Apfel", hu: "alma", ro: "măr" }, correctBinId: "b-fruits" },
      { id: "i2", label: { en: "Strawberry", de: "Erdbeere", hu: "eper", ro: "căpșună" }, correctBinId: "b-fruits" },
      { id: "i3", label: { en: "Dog", de: "Hund", hu: "kutya", ro: "câine" }, correctBinId: "b-animals" },
      { id: "i4", label: { en: "Cat", de: "Katze", hu: "macska", ro: "pisică" }, correctBinId: "b-animals" }
    ]
  },
  {
    id: "hu-ds-2",
    requireFullCorrect: true,
    bins: [
      { id: "b-vowel", label: { en: "Starts with vowel", de: "Beginnt mit Vokal", hu: "Magánhangzóval kezdődik", ro: "Începe cu vocală" }, icon: "🟢", color: "#16A34A" },
      { id: "b-cons", label: { en: "Starts with consonant", de: "Beginnt mit Konsonant", hu: "Mássalhangzóval kezdődik", ro: "Începe cu consoană" }, icon: "🔵", color: "#2563EB" }
    ],
    items: [
      { id: "i1", label: { en: "Apple", de: "Apfel", hu: "alma", ro: "măr" }, correctBinId: "b-vowel" },
      { id: "i2", label: { en: "Mouse", de: "Maus", hu: "egér", ro: "șoarece" }, correctBinId: "b-vowel" },
      { id: "i3", label: { en: "Dog", de: "Hund", hu: "kutya", ro: "câine" }, correctBinId: "b-cons" },
      { id: "i4", label: { en: "Bird", de: "Vogel", hu: "madár", ro: "pasăre" }, correctBinId: "b-cons" }
    ]
  },
  {
    id: "hu-ds-3",
    requireFullCorrect: true,
    bins: [
      { id: "b-food", label: { en: "Food", de: "Essen", hu: "Étel", ro: "Mâncare" }, icon: "🍔", color: "#F59E0B" },
      { id: "b-drink", label: { en: "Drink", de: "Getränk", hu: "Ital", ro: "Băutură" }, icon: "🥤", color: "#8B5CF6" }
    ],
    items: [
      { id: "i1", label: { en: "Bread", de: "Brot", hu: "kenyér", ro: "pâine" }, correctBinId: "b-food" },
      { id: "i2", label: { en: "Cheese", de: "Käse", hu: "sajt", ro: "brânză" }, correctBinId: "b-food" },
      { id: "i3", label: { en: "Water", de: "Wasser", hu: "víz", ro: "apă" }, correctBinId: "b-drink" },
      { id: "i4", label: { en: "Milk", de: "Milch", hu: "tej", ro: "lapte" }, correctBinId: "b-drink" }
    ]
  }
];