import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";

export const rounds: WordChainRound[] = [
  {
    id: "geo-wc-1",
    taskDescription: { en: "Choose the word that starts with the last letter.", de: "Waehle das Wort mit dem letzten Anfangsbuchstaben.", hu: "Valaszd azt a szot, ami az utolso betuvel kezdodik.", ro: "Alege cuvantul care incepe cu ultima litera." },
    startWord: { en: "RIVER", de: "FLUSS", hu: "FOLYO", ro: "RAU" },
    options: [
      { en: "RAIN", de: "REGEN", hu: "ESO", ro: "PLOAIE" },
      { en: "MOUNTAIN", de: "BERG", hu: "HEGY", ro: "MUNTE" },
      { en: "DESERT", de: "WUESTE", hu: "SIVATAG", ro: "DESERT" },
      { en: "ISLAND", de: "INSEL", hu: "SZIGET", ro: "INSULA" }
    ],
    correctIndex: 0
  },
  {
    id: "geo-wc-2",
    taskDescription: { en: "Choose the word that starts with the last letter.", de: "Waehle das Wort mit dem letzten Anfangsbuchstaben.", hu: "Valaszd azt a szot, ami az utolso betuvel kezdodik.", ro: "Alege cuvantul care incepe cu ultima litera." },
    startWord: { en: "EUROPE", de: "EUROPA", hu: "EUROPA", ro: "EUROPA" },
    options: [
      { en: "ASIA", de: "ASIEN", hu: "AZSIA", ro: "ASIA" },
      { en: "CITY", de: "STADT", hu: "VAROS", ro: "ORAS" },
      { en: "DELTA", de: "DELTA", hu: "DELTA", ro: "DELTA" },
      { en: "ARCTIC", de: "ARKTIS", hu: "ARKTISZ", ro: "ARCTIC" }
    ],
    correctIndex: 0
  },
  {
    id: "geo-wc-3",
    taskDescription: { en: "Choose the word that starts with the last letter.", de: "Waehle das Wort mit dem letzten Anfangsbuchstaben.", hu: "Valaszd azt a szot, ami az utolso betuvel kezdodik.", ro: "Alege cuvantul care incepe cu ultima litera." },
    startWord: { en: "CLIMATE", de: "KLIMA", hu: "EGHAJLAT", ro: "CLIMA" },
    options: [
      { en: "EQUATOR", de: "AEQUATOR", hu: "EGYENLITO", ro: "ECUATOR" },
      { en: "OCEAN", de: "OZEAN", hu: "OCEAN", ro: "OCEAN" },
      { en: "TAIGA", de: "TAIGA", hu: "TAJGA", ro: "TAIGA" },
      { en: "TUNDRA", de: "TUNDRA", hu: "TUNDRA", ro: "TUNDRA" }
    ],
    correctIndex: 0
  }
];
