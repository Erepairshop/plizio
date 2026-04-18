import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "ro-sm-1",
    taskDescription: { en: "What makes this sound?", de: "Was macht dieses Geräusch?", hu: "Mi adja ezt a hangot?", ro: "Ce face acest sunet?" },
    audioEmoji: "🐶",
    options: [
      { id: "o1", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, isCorrect: true },
      { id: "o2", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, isCorrect: false }
    ]
  }
];
