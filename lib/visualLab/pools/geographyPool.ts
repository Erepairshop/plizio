import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const GEOGRAPHY_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Geography",
  meteorCatch: [
    {
      id: "geo-capitals",
      title: { de: "Hauptstädte fangen", en: "Catch the Capitals", hu: "Fővárosok vadászata", ro: "Prinde capitalele" },
      prompt: { de: "Fange nur Hauptstädte.", en: "Catch only capital cities.", hu: "Csak fővárosokat fogj ki.", ro: "Prinde doar capitalele." },
      goal: 7,
      speed: 5,
      theme: { sky: "#082f49", glow: "#38bdf8", accent: "#0ea5e9" },
      correctItems: [
        { id: "berlin", label: { de: "Berlin", en: "Berlin", hu: "Berlin", ro: "Berlin" }, emoji: "🏛️" },
        { id: "budapest", label: { de: "Budapest", en: "Budapest", hu: "Budapest", ro: "Budapest" }, emoji: "🌉" },
        { id: "london", label: { de: "London", en: "London", hu: "London", ro: "London" }, emoji: "🕰️" },
        { id: "paris", label: { de: "Paris", en: "Paris", hu: "Paris", ro: "Paris" }, emoji: "🗼" },
      ],
      wrongItems: [
        { id: "germany", label: { de: "Deutschland", en: "Germany", hu: "Németország", ro: "Germania" }, emoji: "🇩🇪" },
        { id: "europe", label: { de: "Europa", en: "Europe", hu: "Európa", ro: "Europa" }, emoji: "🇪🇺" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "geo-continents",
      title: { de: "Kontinente ordnen", en: "Sort Continents", hu: "Kontinensek rendezése", ro: "Sortează continentele" },
      instruction: { de: "In welchem Kontinent liegt das Land?", en: "In which continent is this country?", hu: "Melyik kontinensen van az ország?", ro: "În ce continent se află țara?" },
      theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
      buckets: [
        { id: "europe", label: { de: "Europa", en: "Europe", hu: "Európa", ro: "Europa" }, color: "#3b82f6" },
        { id: "asia", label: { de: "Asien", en: "Asia", hu: "Ázsia", ro: "Asia" }, color: "#ef4444" },
      ],
      items: [
        { id: "germany", label: { de: "Deutschland", en: "Germany", hu: "Németország", ro: "Germania" }, emoji: "🇩🇪", bucketId: "europe" },
        { id: "france", label: { de: "Frankreich", en: "France", hu: "Franciaország", ro: "Franța" }, emoji: "🇫🇷", bucketId: "europe" },
        { id: "china", label: { de: "China", en: "China", hu: "Kína", ro: "China" }, emoji: "🇨🇳", bucketId: "asia" },
        { id: "japan", label: { de: "Japan", en: "Japan", hu: "Japán", ro: "Japán" }, emoji: "🇯🇵", bucketId: "asia" },
      ],
    }
  ],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
};
