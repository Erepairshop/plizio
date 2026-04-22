import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "ro-bc-1",
    taskDescription: { en: "Select the apple", de: "Wähle den Apfel", hu: "Válaszd ki az almát", ro: "Alege mărul" },
    bubbles: [
      { id: "b1", text: { en: "Apple", de: "Apfel", hu: "Alma", ro: "Măr" }, emoji: "🍎", isCorrect: true },
      { id: "b2", text: { en: "Pear", de: "Birne", hu: "Körte", ro: "Pară" }, emoji: "🍐", isCorrect: false },
      { id: "b3", text: { en: "Banana", de: "Banane", hu: "Banán", ro: "Banană" }, emoji: "🍌", isCorrect: false }
    ]
  },
  {
    id: "ro-bc-2",
    taskDescription: { en: "Select the dog", de: "Wähle den Hund", hu: "Válaszd ki a kutyát", ro: "Alege câinele" },
    bubbles: [
      { id: "b1", text: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, emoji: "🐱", isCorrect: false },
      { id: "b2", text: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶", isCorrect: true },
      { id: "b3", text: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, emoji: "🐦", isCorrect: false }
    ]
  }
];
