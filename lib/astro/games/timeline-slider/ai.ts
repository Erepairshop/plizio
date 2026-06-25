import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "ai-ts-1",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1950, rangeMax: 2025 }
    },
    events: [
      { id: "e1", title: { en: "Turing Test proposed", de: "Turing-Test vorgeschlagen", hu: "A Turing-teszt megszületik", ro: "Testul Turing propus" }, correctX: 1950, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Deep Blue beats chess champion", de: "Deep Blue schlägt den Schachweltmeister", hu: "A Deep Blue legyőzi a sakkbajnokot", ro: "Deep Blue învinge campionul la șah" }, correctX: 1997, yearTolerancePct: 5 },
      { id: "e3", title: { en: "ChatGPT released", de: "ChatGPT veröffentlicht", hu: "A ChatGPT megjelenik", ro: "ChatGPT lansat" }, correctX: 2022, yearTolerancePct: 5 }
    ]
  }
];
