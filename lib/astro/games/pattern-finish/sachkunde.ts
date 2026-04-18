import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const patternFinishSachkunde: PatternFinishRound[] = [
  {
    id: "pf-1",
    taskDescription: {
      de: "Setze das Muster fort. Welche Jahreszeit kommt als Nächstes?",
      hu: "Folytasd a mintát. Melyik évszak jön ezután?",
      en: "Continue the pattern. Which season comes next?",
      ro: "Continuă modelul. Ce anotimp urmează?"
    },
    pattern: [
      { de: "Frühling", hu: "Tavasz", en: "Spring", ro: "Primăvară" },
      { de: "Sommer", hu: "Nyár", en: "Summer", ro: "Vară" },
      { de: "Herbst", hu: "Ősz", en: "Autumn", ro: "Toamnă" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Winter", hu: "Tél", en: "Winter", ro: "Iarnă" }, isCorrect: true },
      { id: "o2", text: { de: "Regen", hu: "Eső", en: "Rain", ro: "Ploaie" }, isCorrect: false },
      { id: "o3", text: { de: "Schnee", hu: "Hó", en: "Snow", ro: "Zăpadă" }, isCorrect: false }
    ]
  },
  {
    id: "pf-2",
    taskDescription: {
      de: "Wie geht das Muster am Himmel weiter?",
      hu: "Hogyan folytatódik a minta az égen?",
      en: "How does the pattern in the sky continue?",
      ro: "Cum continuă modelul pe cer?"
    },
    pattern: [
      { de: "Sonne", hu: "Nap", en: "Sun", ro: "Soare" },
      { de: "Mond", hu: "Hold", en: "Moon", ro: "Lună" },
      { de: "Sonne", hu: "Nap", en: "Sun", ro: "Soare" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Wolke", hu: "Felhő", en: "Cloud", ro: "Nor" }, isCorrect: false },
      { id: "o2", text: { de: "Mond", hu: "Hold", en: "Moon", ro: "Lună" }, isCorrect: true },
      { id: "o3", text: { de: "Stern", hu: "Csillag", en: "Star", ro: "Stea" }, isCorrect: false }
    ]
  },
  {
    id: "pf-3",
    taskDescription: {
      de: "Was wächst aus dem Samen? Setze fort.",
      hu: "Mi nő a magból? Folytasd.",
      en: "What grows from the seed? Continue.",
      ro: "Ce crește din sămânță? Continuă."
    },
    pattern: [
      { de: "Samen", hu: "Mag", en: "Seed", ro: "Sămânță" },
      { de: "Spross", hu: "Hajtás", en: "Sprout", ro: "Vlăstar" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Stein", hu: "Kő", en: "Stone", ro: "Piatră" }, isCorrect: false },
      { id: "o2", text: { de: "Pflanze", hu: "Növény", en: "Plant", ro: "Plantă" }, isCorrect: true },
      { id: "o3", text: { de: "Wasser", hu: "Víz", en: "Water", ro: "Apă" }, isCorrect: false }
    ]
  },
  {
    id: "pf-4",
    taskDescription: {
      de: "Wie entwickelt sich der Frosch? Finde das letzte Bild.",
      hu: "Hogyan fejlődik a béka? Keresd meg az utolsó képet.",
      en: "How does the frog develop? Find the last picture.",
      ro: "Cum se dezvoltă broasca? Găsește ultima imagine."
    },
    pattern: [
      { de: "Ei", hu: "Tojás", en: "Egg", ro: "Ou" },
      { de: "Kaulquappe", hu: "Ebihal", en: "Tadpole", ro: "Mormoloc" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Frosch", hu: "Béka", en: "Frog", ro: "Broască" }, isCorrect: true },
      { id: "o2", text: { de: "Fisch", hu: "Hal", en: "Fish", ro: "Pește" }, isCorrect: false },
      { id: "o3", text: { de: "Vogel", hu: "Madár", en: "Bird", ro: "Pasăre" }, isCorrect: false }
    ]
  },
  {
    id: "pf-5",
    taskDescription: {
      de: "Der Wasserkreislauf: Was passiert nach dem Regen?",
      hu: "A víz körforgása: Mi történik eső után?",
      en: "The water cycle: What happens after the rain?",
      ro: "Ciclul apei: Ce se întâmplă după ploaie?"
    },
    pattern: [
      { de: "Wolke", hu: "Felhő", en: "Cloud", ro: "Nor" },
      { de: "Regen", hu: "Eső", en: "Rain", ro: "Ploaie" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Wind", hu: "Szél", en: "Wind", ro: "Vânt" }, isCorrect: false },
      { id: "o2", text: { de: "Sonne", hu: "Nap", en: "Sun", ro: "Soare" }, isCorrect: false },
      { id: "o3", text: { de: "Pfütze", hu: "Pocsolya", en: "Puddle", ro: "Baltă" }, isCorrect: true }
    ]
  }
];
