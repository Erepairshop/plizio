import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "ro-mp-1",
    taskDescription: { en: "Match pairs", de: "Finde Paare", hu: "Keresd a párokat", ro: "Găsește perechile" },
    pairs: [
      { id: "p1", content: { en: "Sun", de: "Sonne", hu: "Nap", ro: "Soare" }, emoji: "☀️" },
      { id: "p2", content: { en: "Moon", de: "Mond", hu: "Hold", ro: "Lună" }, emoji: "🌙" },
      { id: "p3", content: { en: "Star", de: "Stern", hu: "Csillag", ro: "Stea" }, emoji: "⭐" }
    ]
  }
];
