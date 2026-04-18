import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

// English subject: kids learning English.
export const rounds: SoundMatchRound[] = [
  {
    id: "en-sm-1",
    taskDescription: {
      en: "You hear this animal sound. Pick the English word.",
      de: "Du hörst dieses Tiergeräusch. Wähle das englische Wort.",
      hu: "Ezt az állathangot hallod. Válaszd ki az angol szót.",
      ro: "Auzi acest sunet de animal. Alege cuvântul englezesc."
    },
    audioEmoji: "🐶",
    options: [
      { id: "o1", label: { en: "dog", de: "dog", hu: "dog", ro: "dog" }, isCorrect: true },
      { id: "o2", label: { en: "cat", de: "cat", hu: "cat", ro: "cat" }, isCorrect: false },
      { id: "o3", label: { en: "bird", de: "bird", hu: "bird", ro: "bird" }, isCorrect: false },
      { id: "o4", label: { en: "cow", de: "cow", hu: "cow", ro: "cow" }, isCorrect: false }
    ]
  },
  {
    id: "en-sm-2",
    taskDescription: {
      en: "Match the weather sound to the right English noun.",
      de: "Ordne das Wettergeräusch dem richtigen englischen Nomen zu.",
      hu: "Párosítsd az időjárás hangját a megfelelő angol főnévhez.",
      ro: "Potrivește sunetul vremii cu substantivul englezesc corect."
    },
    audioEmoji: "🌧️",
    options: [
      { id: "o1", label: { en: "wind", de: "wind", hu: "wind", ro: "wind" }, isCorrect: false },
      { id: "o2", label: { en: "rain", de: "rain", hu: "rain", ro: "rain" }, isCorrect: true },
      { id: "o3", label: { en: "snow", de: "snow", hu: "snow", ro: "snow" }, isCorrect: false },
      { id: "o4", label: { en: "sun", de: "sun", hu: "sun", ro: "sun" }, isCorrect: false }
    ]
  },
  {
    id: "en-sm-3",
    taskDescription: {
      en: "Listen and choose the matching action verb in English.",
      de: "Höre zu und wähle das passende englische Tätigkeitsverb.",
      hu: "Hallgasd meg, és válaszd ki a megfelelő angol cselekvésigét.",
      ro: "Ascultă și alege verbul englezesc de acțiune potrivit."
    },
    audioEmoji: "👏",
    options: [
      { id: "o1", label: { en: "clap", de: "clap", hu: "clap", ro: "clap" }, isCorrect: true },
      { id: "o2", label: { en: "read", de: "read", hu: "read", ro: "read" }, isCorrect: false },
      { id: "o3", label: { en: "sleep", de: "sleep", hu: "sleep", ro: "sleep" }, isCorrect: false },
      { id: "o4", label: { en: "write", de: "write", hu: "write", ro: "write" }, isCorrect: false }
    ]
  }
];
