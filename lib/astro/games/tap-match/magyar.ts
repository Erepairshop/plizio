import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

// Magyar tantárgy: magyar szókincs + állathangok + gyümölcsök/kategória + évszakok
export const rounds: TapMatchRound[] = [
  {
    id: "hu-tm-1",
    timeLimitMs: 60000,
    taskDescription: {
      en: "Match each animal with its sound",
      de: "Ordne jedes Tier seinem Laut zu",
      hu: "Párosítsd az állatot a hangjával",
      ro: "Potrivește animalul cu sunetul său",
    },
    left: [
      { id: "L1", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, emoji: "🐱" },
      { id: "L2", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶" },
      { id: "L3", label: { en: "Horse", de: "Pferd", hu: "Ló", ro: "Cal" }, emoji: "🐎" },
      { id: "L4", label: { en: "Cow", de: "Kuh", hu: "Tehén", ro: "Vacă" }, emoji: "🐄" },
    ],
    right: [
      { id: "R1", label: { en: "Miaow", de: "Miau", hu: "Miau", ro: "Miau" }, emoji: "😺" },
      { id: "R2", label: { en: "Bark", de: "Wau", hu: "Vau-vau", ro: "Ham-ham" }, emoji: "🦴" },
      { id: "R3", label: { en: "Neigh", de: "Wiehern", hu: "Nyihaha", ro: "Nechezat" }, emoji: "🌾" },
      { id: "R4", label: { en: "Moo", de: "Muh", hu: "Bú", ro: "Muuu" }, emoji: "🥛" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" },
    ],
  },
  {
    id: "hu-tm-2",
    timeLimitMs: 60000,
    taskDescription: {
      en: "Match fruits with the category 'Fruit'",
      de: "Ordne Früchte der Kategorie 'Obst' zu",
      hu: "Párosítsd a gyümölcsöket a kategóriával",
      ro: "Potrivește fructele cu categoria",
    },
    left: [
      { id: "L1", label: { en: "Apple", de: "Apfel", hu: "Alma", ro: "Măr" }, emoji: "🍎" },
      { id: "L2", label: { en: "Banana", de: "Banane", hu: "Banán", ro: "Banană" }, emoji: "🍌" },
      { id: "L3", label: { en: "Strawberry", de: "Erdbeere", hu: "Eper", ro: "Căpșună" }, emoji: "🍓" },
      { id: "L4", label: { en: "Grape", de: "Traube", hu: "Szőlő", ro: "Strugure" }, emoji: "🍇" },
    ],
    right: [
      { id: "R1", label: { en: "Red fruit", de: "Rote Frucht", hu: "Piros gyümölcs", ro: "Fruct roșu" }, emoji: "🍎" },
      { id: "R2", label: { en: "Yellow fruit", de: "Gelbe Frucht", hu: "Sárga gyümölcs", ro: "Fruct galben" }, emoji: "🍌" },
      { id: "R3", label: { en: "Small red fruit", de: "Kleine rote Frucht", hu: "Kis piros gyümölcs", ro: "Fruct mic roșu" }, emoji: "🍓" },
      { id: "R4", label: { en: "Purple cluster", de: "Lila Trauben", hu: "Lila fürt", ro: "Ciorchine mov" }, emoji: "🍇" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" },
    ],
  },
  {
    id: "hu-tm-3",
    timeLimitMs: 60000,
    taskDescription: {
      en: "Match the season with its weather",
      de: "Ordne die Jahreszeit dem Wetter zu",
      hu: "Párosítsd az évszakot az időjárással",
      ro: "Potrivește anotimpul cu vremea",
    },
    left: [
      { id: "L1", label: { en: "Summer", de: "Sommer", hu: "Nyár", ro: "Vară" }, emoji: "☀️" },
      { id: "L2", label: { en: "Winter", de: "Winter", hu: "Tél", ro: "Iarnă" }, emoji: "❄️" },
      { id: "L3", label: { en: "Spring", de: "Frühling", hu: "Tavasz", ro: "Primăvară" }, emoji: "🌸" },
      { id: "L4", label: { en: "Autumn", de: "Herbst", hu: "Ősz", ro: "Toamnă" }, emoji: "🍂" },
    ],
    right: [
      { id: "R1", label: { en: "Hot", de: "Heiß", hu: "Meleg", ro: "Cald" }, emoji: "🥵" },
      { id: "R2", label: { en: "Cold, snow", de: "Kalt, Schnee", hu: "Hideg, hó", ro: "Rece, zăpadă" }, emoji: "🥶" },
      { id: "R3", label: { en: "Blooming flowers", de: "Blüten", hu: "Virágzás", ro: "Flori" }, emoji: "🌷" },
      { id: "R4", label: { en: "Yellow leaves", de: "Gelbe Blätter", hu: "Sárga levelek", ro: "Frunze galbene" }, emoji: "🍁" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" },
    ],
  },
];
