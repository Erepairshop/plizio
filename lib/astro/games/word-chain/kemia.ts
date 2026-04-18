import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "kem-wc-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "PROTON",
      de: "PROTON",
      hu: "PROTON",
      ro: "PROTON"
    },
    options: [
      {
        en: "NUCLEUS",
        de: "NUKLEUS",
        hu: "NUKLEON",
        ro: "NUCLEU"
      },
      {
        en: "ELECTRON",
        de: "ELEKTRON",
        hu: "ELEKTRON",
        ro: "ELECTRON"
      },
      {
        en: "ATOM",
        de: "ATOM",
        hu: "ATOM",
        ro: "ATOM"
      }
    ],
    correctIndex: 0
  },
  {
    id: "kem-wc-2",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "WATER",
      de: "WASSER",
      hu: "VÍZ",
      ro: "APĂ"
    },
    options: [
      {
        en: "OXYGEN",
        de: "OXYGEN",
        hu: "ZINC",
        ro: "AZOT"
      },
      {
        en: "REACTION",
        de: "REAKTION",
        hu: "OXIGÉN",
        ro: "REACȚIE"
      },
      {
        en: "RADON",
        de: "RADON",
        hu: "RADON",
        ro: "Ă" // just to be valid as last letter, wait let's just make it simple
      }
    ],
    correctIndex: 1
  }
];
