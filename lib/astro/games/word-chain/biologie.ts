import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "wc-bio-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "CELL",
      de: "ZELLE",
      hu: "SEJT",
      ro: "CELULĂ"
    },
    options: [
      {
        en: "LEAF",
        de: "EIS",
        hu: "TOJÁS",
        ro: "ĂLE"
      },
      {
        en: "HEART",
        de: "HERZ",
        hu: "SZÍV",
        ro: "INIMĂ"
      },
      {
        en: "BONE",
        de: "KNOCHEN",
        hu: "CSONT",
        ro: "OS"
      },
      {
        en: "BRAIN",
        de: "GEHIRN",
        hu: "AGY",
        ro: "CREIER"
      }
    ],
    correctIndex: 0
  },
  {
    id: "wc-bio-2",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "PLANT",
      de: "PFLANZE",
      hu: "NÖVÉNY",
      ro: "PLANTĂ"
    },
    options: [
      {
        en: "ANIMAL",
        de: "TIER",
        hu: "ÁLLAT",
        ro: "ANIMAL"
      },
      {
        en: "TREE",
        de: "ERDE",
        hu: "NYÚL",
        ro: "Ă"
      },
      {
        en: "ROOT",
        de: "WURZEL",
        hu: "GYÖKÉR",
        ro: "RĂDĂCINĂ"
      },
      {
        en: "LEAF",
        de: "BLATT",
        hu: "LEVÉL",
        ro: "FRUNZĂ"
      }
    ],
    correctIndex: 1
  },
  {
    id: "wc-bio-3",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "BLOOD",
      de: "BLUT",
      hu: "VÉR",
      ro: "SÂNGE"
    },
    options: [
      {
        en: "VEIN",
        de: "VENE",
        hu: "ÉREN",
        ro: "VENĂ"
      },
      {
        en: "HEART",
        de: "HERZ",
        hu: "SZÍV",
        ro: "INIMĂ"
      },
      {
        en: "DOG",
        de: "TIER",
        hu: "RÁK",
        ro: "ERBIVOR"
      },
      {
        en: "CELL",
        de: "ZELLE",
        hu: "SEJT",
        ro: "CELULĂ"
      }
    ],
    correctIndex: 2
  }
];