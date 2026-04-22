import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "de-mp-1",
    taskDescription: {
      en: "Match German words with their pictures!",
      de: "Finde die passenden deutschen Wort-Bild-Paare!",
      hu: "Párosítsd a német szavakat a képekkel!",
      ro: "Potrivește cuvintele germane cu imaginile!"
    },
    pairs: [
      { id: "p1", content: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, emoji: "🍎" },
      { id: "p2", content: { en: "Banane", de: "Banane", hu: "Banane", ro: "Banane" }, emoji: "🍌" },
      { id: "p3", content: { en: "Kirsche", de: "Kirsche", hu: "Kirsche", ro: "Kirsche" }, emoji: "🍒" },
      { id: "p4", content: { en: "Trauben", de: "Trauben", hu: "Trauben", ro: "Trauben" }, emoji: "🍇" }
    ]
  },
  {
    id: "de-mp-2",
    taskDescription: {
      en: "Match German animals with emoji!",
      de: "Finde die passenden Tier-Paare!",
      hu: "Párosítsd a német állatneveket az emojikkal!",
      ro: "Potrivește animalele germane cu emoji!"
    },
    pairs: [
      { id: "p1", content: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, emoji: "🐶" },
      { id: "p2", content: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, emoji: "🐱" },
      { id: "p3", content: { en: "Vogel", de: "Vogel", hu: "Vogel", ro: "Vogel" }, emoji: "🐦" },
      { id: "p4", content: { en: "Fisch", de: "Fisch", hu: "Fisch", ro: "Fisch" }, emoji: "🐟" }
    ]
  },
  {
    id: "de-mp-3",
    taskDescription: {
      en: "Match celestial German words!",
      de: "Finde die passenden Himmels-Paare!",
      hu: "Párosítsd az égitestek német szavait!",
      ro: "Potrivește cuvintele celeste germane!"
    },
    pairs: [
      { id: "p1", content: { en: "Sonne", de: "Sonne", hu: "Sonne", ro: "Sonne" }, emoji: "☀️" },
      { id: "p2", content: { en: "Mond", de: "Mond", hu: "Mond", ro: "Mond" }, emoji: "🌙" },
      { id: "p3", content: { en: "Stern", de: "Stern", hu: "Stern", ro: "Stern" }, emoji: "⭐" },
      { id: "p4", content: { en: "Wolke", de: "Wolke", hu: "Wolke", ro: "Wolke" }, emoji: "☁️" }
    ]
  }
];
