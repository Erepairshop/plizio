import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const getQuickTapSachkundePool = (): QuickTapRound[] => [
  {
    id: "sk-qt-1",
    taskDescription: {
      en: "Tap all the fruits!",
      de: "Tippe auf alle Früchte!",
      hu: "Érintsd meg az összes gyümölcsöt!",
      ro: "Atinge toate fructele!"
    },
    items: [
      { id: "i1", content: { en: "Apple", de: "Apfel", hu: "Alma", ro: "Măr" }, emoji: "🍎", isTarget: true },
      { id: "i2", content: { en: "Carrot", de: "Karotte", hu: "Répa", ro: "Morcov" }, emoji: "🥕", isTarget: false },
      { id: "i3", content: { en: "Banana", de: "Banane", hu: "Banán", ro: "Banană" }, emoji: "🍌", isTarget: true },
      { id: "i4", content: { en: "Potato", de: "Kartoffel", hu: "Krumpli", ro: "Cartof" }, emoji: "🥔", isTarget: false },
      { id: "i5", content: { en: "Grapes", de: "Trauben", hu: "Szőlő", ro: "Struguri" }, emoji: "🍇", isTarget: true },
      { id: "i6", content: { en: "Onion", de: "Zwiebel", hu: "Hagyma", ro: "Ceapă" }, emoji: "🧅", isTarget: false },
      { id: "i7", content: { en: "Orange", de: "Orange", hu: "Narancs", ro: "Portocală" }, emoji: "🍊", isTarget: true },
      { id: "i8", content: { en: "Broccoli", de: "Brokkoli", hu: "Brokkoli", ro: "Broccoli" }, emoji: "🥦", isTarget: false },
      { id: "i9", content: { en: "Strawberry", de: "Erdbeere", hu: "Eper", ro: "Căpșună" }, emoji: "🍓", isTarget: true }
    ]
  },
  {
    id: "sk-qt-2",
    taskDescription: {
      en: "Tap all the animals that can fly!",
      de: "Tippe auf alle Tiere, die fliegen können!",
      hu: "Érintsd meg az összes repülni tudó állatot!",
      ro: "Atinge toate animalele care pot zbura!"
    },
    items: [
      { id: "i1", content: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, emoji: "🐦", isTarget: true },
      { id: "i2", content: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶", isTarget: false },
      { id: "i3", content: { en: "Butterfly", de: "Schmetterling", hu: "Pillangó", ro: "Fluture" }, emoji: "🦋", isTarget: true },
      { id: "i4", content: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, emoji: "🐱", isTarget: false },
      { id: "i5", content: { en: "Bat", de: "Fledermaus", hu: "Denevér", ro: "Liliac" }, emoji: "🦇", isTarget: true },
      { id: "i6", content: { en: "Fish", de: "Fisch", hu: "Hal", ro: "Pește" }, emoji: "🐟", isTarget: false },
      { id: "i7", content: { en: "Bee", de: "Biene", hu: "Méh", ro: "Albină" }, emoji: "🐝", isTarget: true },
      { id: "i8", content: { en: "Horse", de: "Pferd", hu: "Ló", ro: "Cal" }, emoji: "🐴", isTarget: false },
      { id: "i9", content: { en: "Duck", de: "Ente", hu: "Kacsa", ro: "Rață" }, emoji: "🦆", isTarget: true }
    ]
  },
  {
    id: "sk-qt-3",
    taskDescription: {
      en: "Tap all the things found in space!",
      de: "Tippe auf alles, was im Weltraum ist!",
      hu: "Érintsd meg az űrben található dolgokat!",
      ro: "Atinge toate lucrurile găsite în spațiu!"
    },
    items: [
      { id: "i1", content: { en: "Star", de: "Stern", hu: "Csillag", ro: "Stea" }, emoji: "⭐", isTarget: true },
      { id: "i2", content: { en: "Tree", de: "Baum", hu: "Fa", ro: "Copac" }, emoji: "🌳", isTarget: false },
      { id: "i3", content: { en: "Planet", de: "Planet", hu: "Bolygó", ro: "Planetă" }, emoji: "🪐", isTarget: true },
      { id: "i4", content: { en: "Car", de: "Auto", hu: "Autó", ro: "Mașină" }, emoji: "🚗", isTarget: false },
      { id: "i5", content: { en: "Comet", de: "Komet", hu: "Üstökös", ro: "Cometă" }, emoji: "☄️", isTarget: true },
      { id: "i6", content: { en: "House", de: "Haus", hu: "Ház", ro: "Casă" }, emoji: "🏠", isTarget: false },
      { id: "i7", content: { en: "Moon", de: "Mond", hu: "Hold", ro: "Lună" }, emoji: "🌙", isTarget: true },
      { id: "i8", content: { en: "Bicycle", de: "Fahrrad", hu: "Bicikli", ro: "Bicicletă" }, emoji: "🚲", isTarget: false },
      { id: "i9", content: { en: "Galaxy", de: "Galaxie", hu: "Galaxis", ro: "Galaxie" }, emoji: "🌌", isTarget: true }
    ]
  }
];
