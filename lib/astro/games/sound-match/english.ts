import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "en-sm-1",
    taskDescription: {
      en: "You hear this animal sound. Pick the German word.",
      de: "Du hörst dieses Tiergeräusch. Wähle das deutsche Wort.",
      hu: "Ezt az állathangot hallod. Válaszd ki a német szót.",
      ro: "Auzi acest sunet de animal. Alege cuvântul german."
    },
    audioEmoji: "🐶",
    options: [
      { id: "o1", label: { en: "der Hund", de: "der Hund", hu: "der Hund", ro: "der Hund" }, isCorrect: true },
      { id: "o2", label: { en: "die Katze", de: "die Katze", hu: "die Katze", ro: "die Katze" }, isCorrect: false },
      { id: "o3", label: { en: "der Vogel", de: "der Vogel", hu: "der Vogel", ro: "der Vogel" }, isCorrect: false },
      { id: "o4", label: { en: "die Kuh", de: "die Kuh", hu: "die Kuh", ro: "die Kuh" }, isCorrect: false }
    ]
  },
  {
    id: "en-sm-2",
    taskDescription: {
      en: "Match the weather sound to the right German noun.",
      de: "Ordne das Wettergeräusch dem richtigen deutschen Nomen zu.",
      hu: "Párosítsd az időjárás hangját a megfelelő német főnévhez.",
      ro: "Potrivește sunetul vremii cu substantivul german corect."
    },
    audioEmoji: "🌧️",
    options: [
      { id: "o1", label: { en: "der Wind", de: "der Wind", hu: "der Wind", ro: "der Wind" }, isCorrect: false },
      { id: "o2", label: { en: "der Regen", de: "der Regen", hu: "der Regen", ro: "der Regen" }, isCorrect: true },
      { id: "o3", label: { en: "der Schnee", de: "der Schnee", hu: "der Schnee", ro: "der Schnee" }, isCorrect: false },
      { id: "o4", label: { en: "die Sonne", de: "die Sonne", hu: "die Sonne", ro: "die Sonne" }, isCorrect: false }
    ]
  },
  {
    id: "en-sm-3",
    taskDescription: {
      en: "Listen and choose the matching action verb in German.",
      de: "Höre zu und wähle das passende deutsche Tätigkeitsverb.",
      hu: "Hallgasd meg, és válaszd ki a megfelelő német cselekvésigét.",
      ro: "Ascultă și alege verbul german de acțiune potrivit."
    },
    audioEmoji: "👏",
    options: [
      { id: "o1", label: { en: "klatschen", de: "klatschen", hu: "klatschen", ro: "klatschen" }, isCorrect: true },
      { id: "o2", label: { en: "lesen", de: "lesen", hu: "lesen", ro: "lesen" }, isCorrect: false },
      { id: "o3", label: { en: "schlafen", de: "schlafen", hu: "schlafen", ro: "schlafen" }, isCorrect: false },
      { id: "o4", label: { en: "schreiben", de: "schreiben", hu: "schreiben", ro: "schreiben" }, isCorrect: false }
    ]
  }
];

