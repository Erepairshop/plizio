import { WordChainRound } from "../../../../components/astro-games/views/m2/WordChainView";
export const rounds: WordChainRound[] = [
  {
    id: "ges-wc-1",
    taskDescription: {
      en: "Find the word that starts with the last letter of the given word.",
      de: "Finde das Wort, das mit dem letzten Buchstaben des angegebenen Wortes beginnt.",
      hu: "Találd meg azt a szót, amelyik a megadott szó utolsó betűjével kezdődik.",
      ro: "Găsește cuvântul care începe cu ultima literă a cuvântului dat."
    },
    startWord: { en: "ROME", de: "ROM", hu: "RÓMA", ro: "ROMA" },
    options: [
      { en: "EMPIRE", de: "MONARCHIE", hu: "ANTIK", ro: "ANTIC" },
      { en: "KNIGHT", de: "RITTER", hu: "LOVAG", ro: "CAVALER" },
      { en: "CASTLE", de: "BURG", hu: "VÁR", ro: "CASTEL" },
      { en: "PYRAMID", de: "PYRAMIDE", hu: "PIRAMIS", ro: "PIRAMIDĂ" }
    ],
    correctIndex: 0
  }
];
