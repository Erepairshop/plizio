import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

export const rounds: PatternFinishRound[] = [
  {
    id: "sk-pf-1",
    taskDescription: {
      de: "Wie entwickeln sich Pflanzen? Setze das Muster fort.",
      hu: "Hogyan fejlődnek a növények? Folytasd a mintát.",
      en: "How do plants develop? Continue the pattern.",
      ro: "Cum se dezvoltă plantele? Continuă modelul."
    },
    pattern: [
      { de: "Samen", hu: "Mag", en: "Seed", ro: "Sămânță" },
      { de: "Spross", hu: "Hajtás", en: "Sprout", ro: "Vlăstar" },
      { de: "Pflanze", hu: "Növény", en: "Plant", ro: "Plantă" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Blüte", hu: "Virág", en: "Flower", ro: "Floare" }, isCorrect: true },
      { id: "o2", text: { de: "Stein", hu: "Kő", en: "Stone", ro: "Piatră" }, isCorrect: false },
      { id: "o3", text: { de: "Erde", hu: "Föld", en: "Soil", ro: "Sol" }, isCorrect: false },
      { id: "o4", text: { de: "Wolke", hu: "Felhő", en: "Cloud", ro: "Nor" }, isCorrect: false }
    ]
  },
  {
    id: "sk-pf-2",
    taskDescription: {
      de: "Wie geht der Wasserkreislauf weiter?",
      hu: "Hogyan folytatódik a víz körforgása?",
      en: "How does the water cycle continue?",
      ro: "Cum continuă ciclul apei?"
    },
    pattern: [
      { de: "Sonne", hu: "Nap", en: "Sun", ro: "Soare" },
      { de: "Verdunstung", hu: "Párolgás", en: "Evaporation", ro: "Evaporare" },
      { de: "Wolke", hu: "Felhő", en: "Cloud", ro: "Nor" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Regen", hu: "Eső", en: "Rain", ro: "Ploaie" }, isCorrect: true },
      { id: "o2", text: { de: "Feuer", hu: "Tűz", en: "Fire", ro: "Foc" }, isCorrect: false },
      { id: "o3", text: { de: "Wind", hu: "Szél", en: "Wind", ro: "Vânt" }, isCorrect: false },
      { id: "o4", text: { de: "Sand", hu: "Homok", en: "Sand", ro: "Nisip" }, isCorrect: false }
    ]
  },
  {
    id: "sk-pf-3",
    taskDescription: {
      de: "Wie entwickelt sich ein Schmetterling?",
      hu: "Hogyan fejlődik egy pillangó?",
      en: "How does a butterfly develop?",
      ro: "Cum se dezvoltă un fluture?"
    },
    pattern: [
      { de: "Ei", hu: "Tojás", en: "Egg", ro: "Ou" },
      { de: "Raupe", hu: "Hernyó", en: "Caterpillar", ro: "Omidă" },
      { de: "Puppe", hu: "Báb", en: "Chrysalis", ro: "Crizalidă" },
      { de: "?", hu: "?", en: "?", ro: "?" }
    ],
    options: [
      { id: "o1", text: { de: "Schmetterling", hu: "Pillangó", en: "Butterfly", ro: "Fluture" }, isCorrect: true },
      { id: "o2", text: { de: "Käfer", hu: "Bogár", en: "Beetle", ro: "Gândac" }, isCorrect: false },
      { id: "o3", text: { de: "Vogel", hu: "Madár", en: "Bird", ro: "Pasăre" }, isCorrect: false },
      { id: "o4", text: { de: "Biene", hu: "Méh", en: "Bee", ro: "Albină" }, isCorrect: false }
    ]
  },
  {
    id: "sk-pf-4",
    taskDescription: {
      de: "Die Jahreszeiten: Was kommt nach dem Herbst?",
      hu: "Az évszakok: Mi jön az ősz után?",
      en: "The seasons: What comes after autumn?",
      ro: "Anotimpurile: Ce urmează după toamnă?"
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
      { id: "o3", text: { de: "Tag", hu: "Nappal", en: "Day", ro: "Zi" }, isCorrect: false },
      { id: "o4", text: { de: "Nacht", hu: "Éjszaka", en: "Night", ro: "Noapte" }, isCorrect: false }
    ]
  },
  {
    id: "sk-pf-5",
    taskDescription: {
      de: "Der Lebenszyklus eines Frosches. Was fehlt?",
      hu: "A béka életciklusa. Mi hiányzik?",
      en: "The life cycle of a frog. What is missing?",
      ro: "Ciclul de viață al unei broaște. Ce lipsește?"
    },
    pattern: [
      { de: "Laich", hu: "Békapete", en: "Spawn", ro: "Icre" },
      { de: "Kaulquappe", hu: "Ebihal", en: "Tadpole", ro: "Mormoloc" },
      { de: "?", hu: "?", en: "?", ro: "?" },
      { de: "Frosch", hu: "Béka", en: "Frog", ro: "Broască" }
    ],
    options: [
      { id: "o1", text: { de: "Jungfrosch", hu: "Kisbéka", en: "Froglet", ro: "Broască tânără" }, isCorrect: true },
      { id: "o2", text: { de: "Fisch", hu: "Hal", en: "Fish", ro: "Pește" }, isCorrect: false },
      { id: "o3", text: { de: "Molch", hu: "Gőte", en: "Newt", ro: "Triton" }, isCorrect: false },
      { id: "o4", text: { de: "Kröte", hu: "Varangy", en: "Toad", ro: "Broască râioasă" }, isCorrect: false }
    ]
  }
];
