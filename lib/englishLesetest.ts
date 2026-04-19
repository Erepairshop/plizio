import type { ReadingPassage } from "./languageTestTypes";

const PASSAGES_BY_GRADE: Record<number, ReadingPassage[]> = {
  3: [
    {
      title: "My Pet Dog",
      text: "I have a dog named Max. He is brown and white. Max likes to play with his red ball in the garden every day. After playing, he drinks water and sleeps on his soft bed.",
      questions: [
        { type: "mcq", question: "What color is Max?", options: ["black", "brown and white", "grey", "yellow"], correct: 1 },
        { type: "typing", question: "What is the dog's name?", answer: ["Max", "max"] },
      ],
    },
  ],
  4: [
    {
      title: "The Library",
      text: "On Saturday, Anna went to the library. She borrowed three books: one about dinosaurs, one about space, and one about cooking. She read the space book first because she wants to be an astronaut.",
      questions: [
        { type: "mcq", question: "How many books did Anna borrow?", options: ["two", "three", "four", "five"], correct: 1 },
        { type: "typing", question: "What does Anna want to be?", answer: ["astronaut", "an astronaut"] },
      ],
    },
  ],
};

export function getRandomEnglishPassage(grade: number): ReadingPassage | null {
  const list = PASSAGES_BY_GRADE[grade];
  if (!list || list.length === 0) return null;
  return list[Math.floor(Math.random() * list.length)];
}
