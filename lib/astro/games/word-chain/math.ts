import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "wc-math-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "ZERO",
      de: "NULL",
      hu: "NULLA",
      ro: "ZERO"
    },
    options: [
      {
        en: "ONE",
        de: "LINIE",
        hu: "ADAT",
        ro: "OPT"
      },
      {
        en: "FOUR",
        de: "VIER",
        hu: "NÉGY",
        ro: "PATRU"
      },
      {
        en: "TEN",
        de: "ZEHN",
        hu: "TÍZ",
        ro: "ZECE"
      },
      {
        en: "PLUS",
        de: "PLUS",
        hu: "PLUSZ",
        ro: "PLUS"
      }
    ],
    correctIndex: 0
  },
  {
    id: "wc-math-2",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "THREE",
      de: "DREI",
      hu: "HÁROM",
      ro: "TREI"
    },
    options: [
      {
        en: "TWO",
        de: "ZWEI",
        hu: "KETTŐ",
        ro: "DOI"
      },
      {
        en: "EIGHT",
        de: "IST-GLEICH",
        hu: "MÍNUSZ",
        ro: "INVERS"
      },
      {
        en: "NINE",
        de: "NEUN",
        hu: "KILENC",
        ro: "NOUĂ"
      },
      {
        en: "SIX",
        de: "SECHS",
        hu: "HAT",
        ro: "ȘASE"
      }
    ],
    correctIndex: 1
  },
  {
    id: "wc-math-3",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "PLUS",
      de: "PLUS",
      hu: "PLUSZ",
      ro: "PLUS"
    },
    options: [
      {
        en: "MINUS",
        de: "MINUS",
        hu: "MÍNUSZ",
        ro: "MINUS"
      },
      {
        en: "DIVIDE",
        de: "DURCH",
        hu: "OSZTÁS",
        ro: "ÎMPĂRȚIT"
      },
      {
        en: "SQUARE",
        de: "SUMME",
        hu: "ZÉRÓ",
        ro: "SUMĂ"
      },
      {
        en: "AREA",
        de: "FLÄCHE",
        hu: "TERÜLET",
        ro: "ARIE"
      }
    ],
    correctIndex: 2
  }
];
