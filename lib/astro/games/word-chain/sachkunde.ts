import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "wc-sachkunde-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "ANIMAL",
      de: "TIER",
      hu: "ÁLLAT",
      ro: "ANIMAL"
    },
    options: [
      {
        en: "LION",
        de: "RATTE",
        hu: "TEVE",
        ro: "LEU"
      },
      {
        en: "DOG",
        de: "HUND",
        hu: "KUTYA",
        ro: "CÂINE"
      },
      {
        en: "CAT",
        de: "KATZE",
        hu: "MACSKA",
        ro: "PISICĂ"
      },
      {
        en: "BIRD",
        de: "VOGEL",
        hu: "MADÁR",
        ro: "PASĂRE"
      }
    ],
    correctIndex: 0
  },
  {
    id: "wc-sachkunde-2",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "RAIN",
      de: "REGEN",
      hu: "ESŐ",
      ro: "PLOAIE"
    },
    options: [
      {
        en: "SUN",
        de: "SONNE",
        hu: "NAP",
        ro: "SOARE"
      },
      {
        en: "WIND",
        de: "WIND",
        hu: "SZÉL",
        ro: "VÂNT"
      },
      {
        en: "NATURE",
        de: "NATUR",
        hu: "ŐSZ",
        ro: "ECOSISTEM"
      },
      {
        en: "CLOUD",
        de: "WOLKE",
        hu: "FELHŐ",
        ro: "NOR"
      }
    ],
    correctIndex: 2
  },
  {
    id: "wc-sachkunde-3",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "WOOD",
      de: "HOLZ",
      hu: "FA",
      ro: "LEMN"
    },
    options: [
      {
        en: "FOREST",
        de: "WALD",
        hu: "ERDŐ",
        ro: "PĂDURE"
      },
      {
        en: "LEAF",
        de: "BLATT",
        hu: "LEVÉL",
        ro: "FRUNZĂ"
      },
      {
        en: "FLOWER",
        de: "BLUME",
        hu: "VIRÁG",
        ro: "FLOARE"
      },
      {
        en: "DESERT",
        de: "ZWEIG",
        hu: "ALMA",
        ro: "NATURĂ"
      }
    ],
    correctIndex: 3
  }
];
