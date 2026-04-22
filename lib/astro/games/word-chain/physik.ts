import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "wc-phys-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "ATOM",
      de: "ATOM",
      hu: "ATOM",
      ro: "ATOM"
    },
    options: [
      {
        en: "MASS",
        de: "MASSE",
        hu: "MÁGNES",
        ro: "MASĂ"
      },
      {
        en: "LIGHT",
        de: "LICHT",
        hu: "FÉNY",
        ro: "LUMINĂ"
      },
      {
        en: "ENERGY",
        de: "ENERGIE",
        hu: "ENERGIA",
        ro: "ENERGIE"
      },
      {
        en: "HEAT",
        de: "HITZE",
        hu: "HŐ",
        ro: "CĂLDURĂ"
      }
    ],
    correctIndex: 0
  },
  {
    id: "wc-phys-2",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "FORCE",
      de: "KRAFT",
      hu: "ERŐ",
      ro: "FORȚĂ"
    },
    options: [
      {
        en: "ENERGY",
        de: "TEMPO",
        hu: "ŐSROBBANÁS",
        ro: "ĂLE"
      },
      {
        en: "WORK",
        de: "WERK",
        hu: "MUNKA",
        ro: "MUNCĂ"
      },
      {
        en: "SPEED",
        de: "STROM",
        hu: "SEBESSÉG",
        ro: "VITEZĂ"
      },
      {
        en: "ELECTRON",
        de: "ELEKTRON",
        hu: "ELEKTRON",
        ro: "ELECTRON"
      }
    ],
    correctIndex: 0
  },
  {
    id: "wc-phys-3",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "MAGNET",
      de: "MAGNET",
      hu: "MÁGNES",
      ro: "MAGNET"
    },
    options: [
      {
        en: "TEMPERATURE",
        de: "TEMPERATUR",
        hu: "SÚRLÓDÁS",
        ro: "TEMPERATURĂ"
      },
      {
        en: "GRAVITY",
        de: "GRAVITATION",
        hu: "GRAVITÁCIÓ",
        ro: "GRAVITAȚIE"
      },
      {
        en: "VACUUM",
        de: "VAKUUM",
        hu: "VÁKUUM",
        ro: "VID"
      },
      {
        en: "LENS",
        de: "LINSE",
        hu: "LENCSE",
        ro: "LENTILĂ"
      }
    ],
    correctIndex: 0
  }
];