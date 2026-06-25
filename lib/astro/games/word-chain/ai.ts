import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "ai-wc-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "ROBOT",
      de: "ROBOTER",
      hu: "ROBOT",
      ro: "ROBOT"
    },
    options: [
      {
        en: "TRAINING",
        de: "RECHNER",
        hu: "TANULÁS",
        ro: "TASTATURĂ"
      },
      {
        en: "MODEL",
        de: "MODELL",
        hu: "MODELL",
        ro: "MODEL"
      },
      {
        en: "DATA",
        de: "DATEN",
        hu: "ADAT",
        ro: "DATE"
      },
      {
        en: "BIAS",
        de: "BILD",
        hu: "BEMENET",
        ro: "BIT"
      }
    ],
    correctIndex: 0
  }
];
// Note: Verification of last letter -> first letter for all languages:
// EN: ROBOT (T) -> TRAINING (T) - OK
// DE: ROBOTER (R) -> RECHNER (R) - OK
// HU: ROBOT (T) -> TANULÁS (T) - OK
// RO: ROBOT (T) -> TASTATURĂ (T) - OK
