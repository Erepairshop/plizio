import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "math-bc-1",
    taskDescription: {
      en: "What is 5 + 3?",
      de: "Was ist 5 + 3?",
      hu: "Mennyi 5 + 3?",
      ro: "Cât este 5 + 3?"
    },
    bubbles: [
      { id: "b1", text: { en: "7", de: "7", hu: "7", ro: "7" }, emoji: "7️⃣", isCorrect: false },
      { id: "b2", text: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "8️⃣", isCorrect: true },
      { id: "b3", text: { en: "9", de: "9", hu: "9", ro: "9" }, emoji: "9️⃣", isCorrect: false },
      { id: "b4", text: { en: "6", de: "6", hu: "6", ro: "6" }, emoji: "6️⃣", isCorrect: false }
    ]
  },
  {
    id: "math-bc-2",
    taskDescription: {
      en: "What is 10 - 4?",
      de: "Was ist 10 - 4?",
      hu: "Mennyi 10 - 4?",
      ro: "Cât este 10 - 4?"
    },
    bubbles: [
      { id: "b1", text: { en: "5", de: "5", hu: "5", ro: "5" }, emoji: "5️⃣", isCorrect: false },
      { id: "b2", text: { en: "6", de: "6", hu: "6", ro: "6" }, emoji: "6️⃣", isCorrect: true },
      { id: "b3", text: { en: "7", de: "7", hu: "7", ro: "7" }, emoji: "7️⃣", isCorrect: false },
      { id: "b4", text: { en: "4", de: "4", hu: "4", ro: "4" }, emoji: "4️⃣", isCorrect: false }
    ]
  },
  {
    id: "math-bc-3",
    taskDescription: {
      en: "What is 2 x 4?",
      de: "Was ist 2 x 4?",
      hu: "Mennyi 2 x 4?",
      ro: "Cât este 2 x 4?"
    },
    bubbles: [
      { id: "b1", text: { en: "6", de: "6", hu: "6", ro: "6" }, emoji: "6️⃣", isCorrect: false },
      { id: "b2", text: { en: "10", de: "10", hu: "10", ro: "10" }, emoji: "🔟", isCorrect: false },
      { id: "b3", text: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "8️⃣", isCorrect: true },
      { id: "b4", text: { en: "12", de: "12", hu: "12", ro: "12" }, emoji: "🔢", isCorrect: false }
    ]
  },
  {
    id: "math-bc-4",
    taskDescription: {
      en: "Which number is even?",
      de: "Welche Zahl ist gerade?",
      hu: "Melyik szám páros?",
      ro: "Care număr este par?"
    },
    bubbles: [
      { id: "b1", text: { en: "3", de: "3", hu: "3", ro: "3" }, emoji: "3️⃣", isCorrect: false },
      { id: "b2", text: { en: "7", de: "7", hu: "7", ro: "7" }, emoji: "7️⃣", isCorrect: false },
      { id: "b3", text: { en: "5", de: "5", hu: "5", ro: "5" }, emoji: "5️⃣", isCorrect: false },
      { id: "b4", text: { en: "8", de: "8", hu: "8", ro: "8" }, emoji: "8️⃣", isCorrect: true }
    ]
  }
];
