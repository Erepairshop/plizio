import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "info-wc-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima letteră a cuvântului dat."
    },
    startWord: {
      en: "DATA",
      de: "DATEN",
      hu: "ADAT",
      ro: "DATE"
    },
    options: [
      {
        en: "ALGORITHM",
        de: "NETZWERK",
        hu: "TÁROLÓ",
        ro: "ECRAN"
      },
      {
        en: "FILE",
        de: "DATEI",
        hu: "EGÉR",
        ro: "FIȘIER"
      },
      {
        en: "BYTE",
        de: "BILD",
        hu: "BIT",
        ro: "BIT"
      },
      {
        en: "CHIP",
        de: "COMPUTER",
        hu: "CPU",
        ro: "CHIP"
      }
    ],
    correctIndex: 0
  }
];
// Note: Verification of last letter starts for all languages:
// EN: DATA (A) -> ALGORITHM (A) - OK
// DE: DATEN (N) -> NETZWERK (N) - OK
// HU: ADAT (T) -> TÁROLÓ (T) - OK
// RO: DATE (E) -> ECRAN (E) - OK
