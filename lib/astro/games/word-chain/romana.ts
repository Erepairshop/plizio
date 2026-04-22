import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "rom-wc-1",
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
      { en: "MAGNESIUM", de: "MAGNESIUM", hu: "MANGÁN", ro: "MAGNEZIU" },
      { en: "IRON", de: "EISEN", hu: "VAS", ro: "FIER" },
      { en: "GOLD", de: "GOLD", hu: "ARANY", ro: "AUR" },
      { en: "LEAD", de: "BLEI", hu: "ÓLOM", ro: "PLUMB" }
    ],
    correctIndex: 0
  },
  {
    id: "rom-wc-2",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "ACID",
      de: "SÄURE",
      hu: "SAV",
      ro: "ACID"
    },
    options: [
      { en: "DENSITY", de: "EISEN", hu: "VAS", ro: "DENSITATE" },
      { en: "BASE", de: "BASE", hu: "LÚG", ro: "BAZĂ" },
      { en: "GAS", de: "GAS", hu: "GÁZ", ro: "GAZ" },
      { en: "METAL", de: "METALL", hu: "FÉM", ro: "METAL" }
    ],
    correctIndex: 0
  },
  {
    id: "rom-wc-3",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "CARBON",
      de: "KOHLENSTOFF",
      hu: "SZÉN",
      ro: "CARBON"
    },
    options: [
      { en: "NITROGEN", de: "FLUOR", hu: "NIKKEL", ro: "NITROGEN" },
      { en: "HELIUM", de: "HELIUM", hu: "HÉLIUM", ro: "HELIU" },
      { en: "SILVER", de: "SILBER", hu: "EZÜST", ro: "ARGINT" },
      { en: "ZINC", de: "ZINK", hu: "CINK", ro: "ZINC" }
    ],
    correctIndex: 0
  },
  {
    id: "rom-wc-4",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: {
      en: "SULFUR",
      de: "SCHWEFEL",
      hu: "KÉN",
      ro: "SULF"
    },
    options: [
      { en: "RADIUM", de: "LITHIUM", hu: "NATRIUM", ro: "FLUOR" },
      { en: "BROMINE", de: "BROM", hu: "BRÓM", ro: "BROM" },
      { en: "CHLORINE", de: "CHLOR", hu: "KLÓR", ro: "CLOR" },
      { en: "IODINE", de: "JOD", hu: "JÓD", ro: "IOD" }
    ],
    correctIndex: 0
  }
];
