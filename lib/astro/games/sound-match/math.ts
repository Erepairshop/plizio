import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "math-sm-1",
    taskDescription: {
      en: "Which number matches this sound?",
      de: "Welche Zahl passt zu diesem Geräusch?",
      hu: "Melyik szám illik ehhez a hanghoz?",
      ro: "Ce număr se potrivește cu acest sunet?"
    },
    audioEmoji: "🐶", // Using animal emojis as "sounds" representing numbers implicitly for fun
    options: [
      { id: "o1", label: { en: "1", de: "1", hu: "1", ro: "1" }, isCorrect: true },
      { id: "o2", label: { en: "2", de: "2", hu: "2", ro: "2" }, isCorrect: false },
      { id: "o3", label: { en: "3", de: "3", hu: "3", ro: "3" }, isCorrect: false },
      { id: "o4", label: { en: "4", de: "4", hu: "4", ro: "4" }, isCorrect: false }
    ]
  },
  {
    id: "math-sm-2",
    taskDescription: {
      en: "Which number matches this sound?",
      de: "Welche Zahl passt zu diesem Geräusch?",
      hu: "Melyik szám illik ehhez a hanghoz?",
      ro: "Ce număr se potrivește cu acest sunet?"
    },
    audioEmoji: "🐱",
    options: [
      { id: "o1", label: { en: "1", de: "1", hu: "1", ro: "1" }, isCorrect: false },
      { id: "o2", label: { en: "2", de: "2", hu: "2", ro: "2" }, isCorrect: true },
      { id: "o3", label: { en: "3", de: "3", hu: "3", ro: "3" }, isCorrect: false },
      { id: "o4", label: { en: "4", de: "4", hu: "4", ro: "4" }, isCorrect: false }
    ]
  },
  {
    id: "math-sm-3",
    taskDescription: {
      en: "Which number matches this sound?",
      de: "Welche Zahl passt zu diesem Geräusch?",
      hu: "Melyik szám illik ehhez a hanghoz?",
      ro: "Ce număr se potrivește cu acest sunet?"
    },
    audioEmoji: "🐮",
    options: [
      { id: "o1", label: { en: "2", de: "2", hu: "2", ro: "2" }, isCorrect: false },
      { id: "o2", label: { en: "4", de: "4", hu: "4", ro: "4" }, isCorrect: false },
      { id: "o3", label: { en: "3", de: "3", hu: "3", ro: "3" }, isCorrect: true },
      { id: "o4", label: { en: "5", de: "5", hu: "5", ro: "5" }, isCorrect: false }
    ]
  },
  {
    id: "math-sm-4",
    taskDescription: {
      en: "Which number matches this sound?",
      de: "Welche Zahl passt zu diesem Geräusch?",
      hu: "Melyik szám illik ehhez a hanghoz?",
      ro: "Ce număr se potrivește cu acest sunet?"
    },
    audioEmoji: "🐴",
    options: [
      { id: "o1", label: { en: "1", de: "1", hu: "1", ro: "1" }, isCorrect: false },
      { id: "o2", label: { en: "3", de: "3", hu: "3", ro: "3" }, isCorrect: false },
      { id: "o3", label: { en: "5", de: "5", hu: "5", ro: "5" }, isCorrect: false },
      { id: "o4", label: { en: "4", de: "4", hu: "4", ro: "4" }, isCorrect: true }
    ]
  }
];
