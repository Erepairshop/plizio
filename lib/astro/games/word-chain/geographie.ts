import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "geo-wc-1",
    taskDescription: { en: "Choose the word that starts with the last letter.", de: "Wähle das Wort mit dem letzten Anfangsbuchstaben.", hu: "Válaszd azt a szót, ami az utolsó betűvel kezdődik.", ro: "Alege cuvântul care începe cu ultima literă." },
    startWord: { en: "RIVER", de: "FLUSS", hu: "FOLYÓ", ro: "RÂU" },
    options: [
      { en: "RAIN", de: "REGEN", hu: "ESŐ", ro: "PLOAIE" },
      { en: "MOUNTAIN", de: "BERG", hu: "HEGY", ro: "MUNTE" },
      { en: "DESERT", de: "WÜSTE", hu: "SIVATAG", ro: "DEȘERT" },
      { en: "ISLAND", de: "INSEL", hu: "SZIGET", ro: "INSULĂ" }
    ],
    correctIndex: 0
  },
  {
    id: "geo-wc-2",
    taskDescription: { en: "Choose the word that starts with the last letter.", de: "Wähle das Wort mit dem letzten Anfangsbuchstaben.", hu: "Válaszd azt a szót, ami az utolsó betűvel kezdődik.", ro: "Alege cuvântul care începe cu ultima literă." },
    startWord: { en: "EUROPE", de: "EUROPA", hu: "EURÓPA", ro: "EUROPA" },
    options: [
      { en: "ASIA", de: "ASIEN", hu: "ÁZSIA", ro: "ASIA" },
      { en: "CITY", de: "STADT", hu: "VÁROS", ro: "ORAȘ" },
      { en: "DELTA", de: "DELTA", hu: "DELTA", ro: "DELTA" },
      { en: "ARCTIC", de: "ARKTIS", hu: "ARKTISZ", ro: "ARCTIC" }
    ],
    correctIndex: 0
  },
  {
    id: "geo-wc-3",
    taskDescription: { en: "Choose the word that starts with the last letter.", de: "Wähle das Wort mit dem letzten Anfangsbuchstaben.", hu: "Válaszd azt a szót, ami az utolsó betűvel kezdődik.", ro: "Alege cuvântul care începe cu ultima literă." },
    startWord: { en: "CLIMATE", de: "KLIMA", hu: "ÉGHAJLAT", ro: "CLIMĂ" },
    options: [
      { en: "EQUATOR", de: "ÄQUATOR", hu: "EGYENLÍTŐ", ro: "ECUATOR" },
      { en: "OCEAN", de: "OZEAN", hu: "ÓCEÁN", ro: "OCEAN" },
      { en: "TAIGA", de: "TAIGA", hu: "TAJGA", ro: "TAIGA" },
      { en: "TUNDRA", de: "TUNDRA", hu: "TUNDRA", ro: "TUNDRA" }
    ],
    correctIndex: 0
  }
];
