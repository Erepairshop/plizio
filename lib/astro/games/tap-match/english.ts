import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

// English mint tantárgy: magyar/német/román anyanyelvű gyerekek tanulnak angolul.
// Párosítás: English word ↔ anyanyelvi fordítás VAGY English word ↔ emoji/picture.
export const rounds: TapMatchRound[] = [
  {
    id: "en-tm-1",
    taskDescription: {
      en: "Match the English word with the picture",
      de: "Ordne das englische Wort dem Bild zu",
      hu: "Párosítsd az angol szót a képpel",
      ro: "Potrivește cuvântul englezesc cu imaginea",
    },
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "house", de: "house", hu: "house", ro: "house" }, emoji: "🏠" },
      { id: "L2", label: { en: "book", de: "book", hu: "book", ro: "book" }, emoji: "📘" },
      { id: "L3", label: { en: "apple", de: "apple", hu: "apple", ro: "apple" }, emoji: "🍎" },
      { id: "L4", label: { en: "school", de: "school", hu: "school", ro: "school" }, emoji: "🏫" },
    ],
    right: [
      { id: "R1", label: { en: "🏠", de: "Haus", hu: "ház", ro: "casă" }, emoji: "🏠" },
      { id: "R2", label: { en: "📘", de: "Buch", hu: "könyv", ro: "carte" }, emoji: "📘" },
      { id: "R3", label: { en: "🍎", de: "Apfel", hu: "alma", ro: "măr" }, emoji: "🍎" },
      { id: "R4", label: { en: "🏫", de: "Schule", hu: "iskola", ro: "școală" }, emoji: "🏫" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" },
    ],
  },
  {
    id: "en-tm-2",
    taskDescription: {
      en: "Match the English animal with its translation",
      de: "Ordne das englische Tier seiner Übersetzung zu",
      hu: "Párosítsd az angol állatot a fordítással",
      ro: "Potrivește animalul englezesc cu traducerea",
    },
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "dog", de: "dog", hu: "dog", ro: "dog" }, emoji: "🐶" },
      { id: "L2", label: { en: "cat", de: "cat", hu: "cat", ro: "cat" }, emoji: "🐱" },
      { id: "L3", label: { en: "horse", de: "horse", hu: "horse", ro: "horse" }, emoji: "🐴" },
      { id: "L4", label: { en: "fish", de: "fish", hu: "fish", ro: "fish" }, emoji: "🐟" },
    ],
    right: [
      { id: "R1", label: { en: "pet, barks", de: "Hund", hu: "kutya", ro: "câine" }, emoji: "🦴" },
      { id: "R2", label: { en: "pet, meows", de: "Katze", hu: "macska", ro: "pisică" }, emoji: "🐟" },
      { id: "R3", label: { en: "big animal, rides", de: "Pferd", hu: "ló", ro: "cal" }, emoji: "🌾" },
      { id: "R4", label: { en: "swims in water", de: "Fisch", hu: "hal", ro: "pește" }, emoji: "💧" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" },
    ],
  },
  {
    id: "en-tm-3",
    taskDescription: {
      en: "Match the English color with the object",
      de: "Ordne die englische Farbe dem Objekt zu",
      hu: "Párosítsd az angol színt a tárggyal",
      ro: "Potrivește culoarea englezească cu obiectul",
    },
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "red", de: "red", hu: "red", ro: "red" }, emoji: "🔴" },
      { id: "L2", label: { en: "yellow", de: "yellow", hu: "yellow", ro: "yellow" }, emoji: "🟡" },
      { id: "L3", label: { en: "green", de: "green", hu: "green", ro: "green" }, emoji: "🟢" },
      { id: "L4", label: { en: "blue", de: "blue", hu: "blue", ro: "blue" }, emoji: "🔵" },
    ],
    right: [
      { id: "R1", label: { en: "apple, fire truck", de: "Apfel, Feuerwehr", hu: "alma, tűzoltóautó", ro: "măr, mașină pompieri" }, emoji: "🍎" },
      { id: "R2", label: { en: "sun, banana", de: "Sonne, Banane", hu: "nap, banán", ro: "soare, banană" }, emoji: "☀️" },
      { id: "R3", label: { en: "grass, tree", de: "Gras, Baum", hu: "fű, fa", ro: "iarbă, copac" }, emoji: "🌳" },
      { id: "R4", label: { en: "sky, ocean", de: "Himmel, Meer", hu: "ég, tenger", ro: "cer, mare" }, emoji: "🌊" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" },
    ],
  },
];
