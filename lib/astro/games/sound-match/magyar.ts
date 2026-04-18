import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "hu-sm-1",
    taskDescription: {
      en: "Match the emoji with the correct word.",
      de: "Ordne das Emoji dem richtigen Wort zu.",
      hu: "Parositsd az emojit a megfelelo szoval.",
      ro: "Potriveste emoji-ul cu cuvantul corect."
    },
    audioEmoji: "🍎",
    options: [
      { id: "o1", label: { en: "apple", de: "Apfel", hu: "alma", ro: "mar" }, isCorrect: true },
      { id: "o2", label: { en: "banana", de: "Banane", hu: "banan", ro: "banana" }, isCorrect: false },
      { id: "o3", label: { en: "pear", de: "Birne", hu: "korte", ro: "para" }, isCorrect: false },
      { id: "o4", label: { en: "grape", de: "Traube", hu: "szolo", ro: "strugure" }, isCorrect: false }
    ]
  },
  {
    id: "hu-sm-2",
    taskDescription: {
      en: "Find the word that matches this emoji.",
      de: "Finde das Wort, das zu diesem Emoji passt.",
      hu: "Valaszd ki az ehhez az emojihoz illo szot.",
      ro: "Alege cuvantul care se potriveste cu acest emoji."
    },
    audioEmoji: "🚲",
    options: [
      { id: "o1", label: { en: "car", de: "Auto", hu: "auto", ro: "masina" }, isCorrect: false },
      { id: "o2", label: { en: "bus", de: "Bus", hu: "busz", ro: "autobuz" }, isCorrect: false },
      { id: "o3", label: { en: "bicycle", de: "Fahrrad", hu: "kerekpar", ro: "bicicleta" }, isCorrect: true },
      { id: "o4", label: { en: "train", de: "Zug", hu: "vonat", ro: "tren" }, isCorrect: false }
    ]
  },
  {
    id: "hu-sm-3",
    taskDescription: {
      en: "Choose the weather word for this emoji.",
      de: "Wahle das Wetterwort fur dieses Emoji.",
      hu: "Valaszd ki az idojaras-szot ehhez az emojihoz.",
      ro: "Alege cuvantul despre vreme pentru acest emoji."
    },
    audioEmoji: "🌧️",
    options: [
      { id: "o1", label: { en: "wind", de: "Wind", hu: "szel", ro: "vant" }, isCorrect: false },
      { id: "o2", label: { en: "rain", de: "Regen", hu: "eso", ro: "ploaie" }, isCorrect: true },
      { id: "o3", label: { en: "sun", de: "Sonne", hu: "nap", ro: "soare" }, isCorrect: false },
      { id: "o4", label: { en: "snow", de: "Schnee", hu: "ho", ro: "zapada" }, isCorrect: false }
    ]
  }
];
