import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const wordChainSachkunde: WordChainRound[] = [
  {
    id: "wc-sachkunde-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "SUN",
      de: "SONNE",
      hu: "NAP",
      ro: "SOARE"
    },
    options: [
      {
        en: "NEBULA",
        de: "ERDE",
        hu: "PLUTÓ",
        ro: "ECLIPSA"
      },
      {
        en: "STAR",
        de: "STERN",
        hu: "CSILLAG",
        ro: "STEAUA"
      },
      {
        en: "MOON",
        de: "MOND",
        hu: "HOLD",
        ro: "LUNA"
      },
      {
        en: "COMET",
        de: "KOMET",
        hu: "ÜSTÖKÖS",
        ro: "COMETĂ"
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
      en: "METEOR",
      de: "METEOR",
      hu: "METEOR",
      ro: "METEOR"
    },
    options: [
      {
        en: "PLANET",
        de: "PLANET",
        hu: "BOLYGÓ",
        ro: "PLANETĂ"
      },
      {
        en: "ROCKET",
        de: "RAKETE",
        hu: "RAKÉTA",
        ro: "RACHETĂ"
      },
      {
        en: "GALAXY",
        de: "GALAXIE",
        hu: "GALAXIS",
        ro: "GALAXIE"
      },
      {
        en: "ORBIT",
        de: "ORBIT",
        hu: "KERINGÉS",
        ro: "ORBITĂ"
      }
    ],
    correctIndex: 1
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
      en: "STAR",
      de: "STERN",
      hu: "CSILLAG",
      ro: "STEA"
    },
    options: [
      {
        en: "DUST",
        de: "STAUB",
        hu: "POR",
        ro: "PRAF"
      },
      {
        en: "LIGHT",
        de: "LICHT",
        hu: "FÉNY",
        ro: "LUMINĂ"
      },
      {
        en: "HEAT",
        de: "HITZE",
        hu: "HŐ",
        ro: "CĂLDURĂ"
      },
      {
        en: "RADIATION",
        de: "NEBEL",
        hu: "GÁZ",
        ro: "ATMOSFERĂ"
      }
    ],
    correctIndex: 3
  }
];
