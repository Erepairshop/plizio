import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "mag-wc-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: { en: "ATOM", de: "ATOM", hu: "ATOM", ro: "ATOM" },
    options: [
      { en: "MOLECULE", de: "MOLEKÜL", hu: "MOLEKULA", ro: "MOLECULĂ" },
      { en: "IRON", de: "EISEN", hu: "VAS", ro: "FIER" },
      { en: "GAS", de: "GAS", hu: "GÁZ", ro: "GAZ" },
      { en: "SALT", de: "SALZ", hu: "SÓ", ro: "SARE" }
    ],
    correctIndex: 0
  },
  {
    id: "mag-wc-2",
    taskDescription: {
      en: "Find the word that starts with the last letter.",
      de: "Finde das Wort, das mit dem letzten Buchstaben beginnt.",
      hu: "Találd meg azt a szót, amelyik az utolsó betűvel kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă."
    },
    startWord: { en: "MOLECULE", de: "MOLEKÜL", hu: "MOLEKULA", ro: "MOLECULĂ" },
    options: [
      { en: "ELEMENT", de: "LITHIUM", hu: "ANYAG", ro: "ALUMINIU" },
      { en: "ACID", de: "SÄURE", hu: "SAV", ro: "ACID" },
      { en: "BASE", de: "BASE", hu: "LÚG", ro: "BAZĂ" },
      { en: "PROTON", de: "PROTON", hu: "PROTON", ro: "PROTON" }
    ],
    correctIndex: 0
  },
  {
    id: "mag-wc-3",
    taskDescription: {
      en: "Continue the word chain.",
      de: "Setze die Wortkette fort.",
      hu: "Folytasd a szóvonalat.",
      ro: "Continuă lanțul de cuvinte."
    },
    startWord: { en: "ELEMENT", de: "LITHIUM", hu: "ANYAG", ro: "ALUMINIU" },
    options: [
      { en: "TIN", de: "MAGNESIUM", hu: "GUMICUKOR", ro: "URANIU" },
      { en: "GOLD", de: "GOLD", hu: "ARANY", ro: "AUR" },
      { en: "IRON", de: "EISEN", hu: "VAS", ro: "FIER" },
      { en: "ZINC", de: "ZINK", hu: "CINK", ro: "ZINC" }
    ],
    correctIndex: 0
  }
];
