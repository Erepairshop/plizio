import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "hu-sm-1",
    taskDescription: {
      en: "Match the emoji with the correct word.",
      de: "Ordne das Emoji dem richtigen Wort zu.",
      hu: "Párosítsd az emojit a megfelelő szóval.",
      ro: "Potrivește emoji-ul cu cuvântul corect."
    },
    audioEmoji: "🍎",
    options: [
      { id: "o1", label: { en: "apple", de: "Apfel", hu: "alma", ro: "măr" }, isCorrect: true },
      { id: "o2", label: { en: "banana", de: "Banane", hu: "banán", ro: "banană" }, isCorrect: false },
      { id: "o3", label: { en: "pear", de: "Birne", hu: "körte", ro: "pară" }, isCorrect: false },
      { id: "o4", label: { en: "grape", de: "Traube", hu: "szőlő", ro: "strugure" }, isCorrect: false }
    ]
  },
  {
    id: "hu-sm-2",
    taskDescription: {
      en: "Find the word that matches this emoji.",
      de: "Finde das Wort, das zu diesem Emoji passt.",
      hu: "Válaszd ki az ehhez az emojihoz illő szót.",
      ro: "Alege cuvântul care se potrivește cu acest emoji."
    },
    audioEmoji: "🚲",
    options: [
      { id: "o1", label: { en: "car", de: "Auto", hu: "autó", ro: "mașină" }, isCorrect: false },
      { id: "o2", label: { en: "bus", de: "Bus", hu: "busz", ro: "autobuz" }, isCorrect: false },
      { id: "o3", label: { en: "bicycle", de: "Fahrrad", hu: "kerékpár", ro: "bicicletă" }, isCorrect: true },
      { id: "o4", label: { en: "train", de: "Zug", hu: "vonat", ro: "tren" }, isCorrect: false }
    ]
  },
  {
    id: "hu-sm-3",
    taskDescription: {
      en: "Choose the weather word for this emoji.",
      de: "Wähle das Wetterwort für dieses Emoji.",
      hu: "Válaszd ki az időjárás-szót ehhez az emojihoz.",
      ro: "Alege cuvântul despre vreme pentru acest emoji."
    },
    audioEmoji: "🌧️",
    options: [
      { id: "o1", label: { en: "wind", de: "Wind", hu: "szél", ro: "vânt" }, isCorrect: false },
      { id: "o2", label: { en: "rain", de: "Regen", hu: "eső", ro: "ploaie" }, isCorrect: true },
      { id: "o3", label: { en: "sun", de: "Sonne", hu: "nap", ro: "soare" }, isCorrect: false },
      { id: "o4", label: { en: "snow", de: "Schnee", hu: "hó", ro: "zăpadă" }, isCorrect: false }
    ]
  }
];