import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "r1",
    gridSize: 3,
    pairs: [
      { id: "p1", a: { label: { en: "🐶", hu: "🐶", de: "🐶", ro: "🐶" } }, b: { label: { en: "Dog", hu: "Kutya", de: "Hund", ro: "Câine" } } },
      { id: "p2", a: { label: { en: "🐱", hu: "🐱", de: "🐱", ro: "🐱" } }, b: { label: { en: "Cat", hu: "Macska", de: "Katze", ro: "Pisică" } } },
      { id: "p3", a: { label: { en: "🐄", hu: "🐄", de: "🐄", ro: "🐄" } }, b: { label: { en: "Cow", hu: "Tehén", de: "Kuh", ro: "Vacă" } } },
      { id: "p4", a: { label: { en: "🐖", hu: "🐖", de: "🐖", ro: "🐖" } }, b: { label: { en: "Pig", hu: "Malac", de: "Schwein", ro: "Porc" } } },
      { id: "p5", a: { label: { en: "🐑", hu: "🐑", de: "🐑", ro: "🐑" } }, b: { label: { en: "Sheep", hu: "Bárány", de: "Schaf", ro: "Oaie" } } },
      { id: "p6", a: { label: { en: "🐎", hu: "🐎", de: "🐎", ro: "🐎" } }, b: { label: { en: "Horse", hu: "Ló", de: "Pferd", ro: "Cal" } } }
    ]
  },
  {
    id: "r2",
    gridSize: 3,
    pairs: [
      { id: "p1", a: { label: { en: "☀️", hu: "☀️", de: "☀️", ro: "☀️" } }, b: { label: { en: "Sun", hu: "Nap", de: "Sonne", ro: "Soare" } } },
      { id: "p2", a: { label: { en: "🌧️", hu: "🌧️", de: "🌧️", ro: "🌧️" } }, b: { label: { en: "Rain", hu: "Eső", de: "Regen", ro: "Ploaie" } } },
      { id: "p3", a: { label: { en: "❄️", hu: "❄️", de: "❄️", ro: "❄️" } }, b: { label: { en: "Snow", hu: "Hó", de: "Schnee", ro: "Zăpadă" } } },
      { id: "p4", a: { label: { en: "⚡", hu: "⚡", de: "⚡", ro: "⚡" } }, b: { label: { en: "Lightning", hu: "Villám", de: "Blitz", ro: "Fulger" } } },
      { id: "p5", a: { label: { en: "🌈", hu: "🌈", de: "🌈", ro: "🌈" } }, b: { label: { en: "Rainbow", hu: "Szivárvány", de: "Regenbogen", ro: "Curcubeu" } } },
      { id: "p6", a: { label: { en: "🌪️", hu: "🌪️", de: "🌪️", ro: "🌪️" } }, b: { label: { en: "Tornado", hu: "Tornádó", de: "Tornado", ro: "Tornadă" } } }
    ]
  },
  {
    id: "r3",
    gridSize: 3,
    pairs: [
      { id: "p1", a: { label: { en: "🚒", hu: "🚒", de: "🚒", ro: "🚒" } }, b: { label: { en: "Fire truck", hu: "Tűzoltó", de: "Feuerwehr", ro: "Pompieri" } } },
      { id: "p2", a: { label: { en: "🚓", hu: "🚓", de: "🚓", ro: "🚓" } }, b: { label: { en: "Police", hu: "Rendőrség", de: "Polizei", ro: "Poliție" } } },
      { id: "p3", a: { label: { en: "🚑", hu: "🚑", de: "🚑", ro: "🚑" } }, b: { label: { en: "Ambulance", hu: "Mentő", de: "Krankenwagen", ro: "Ambulanță" } } },
      { id: "p4", a: { label: { en: "🚜", hu: "🚜", de: "🚜", ro: "🚜" } }, b: { label: { en: "Tractor", hu: "Traktor", de: "Traktor", ro: "Tractor" } } },
      { id: "p5", a: { label: { en: "🚲", hu: "🚲", de: "🚲", ro: "🚲" } }, b: { label: { en: "Bicycle", hu: "Bicikli", de: "Fahrrad", ro: "Bicicletă" } } },
      { id: "p6", a: { label: { en: "🚁", hu: "🚁", de: "🚁", ro: "🚁" } }, b: { label: { en: "Helicopter", hu: "Helikopter", de: "Hubschrauber", ro: "Elicopter" } } }
    ]
  }
];
