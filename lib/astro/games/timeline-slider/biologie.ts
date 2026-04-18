import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const getTimelineSliderBiologiePool = (): TimelineSliderRound[] => [
  {
    id: "bio-ts-1",
    axes: {
      x: { label: { en: "Millions of years ago", de: "Millionen Jahre", hu: "Millió éve", ro: "Milioane de ani" }, rangeMin: 0, rangeMax: 500 }
    },
    events: [
      { id: "e1", title: { en: "First land plants", de: "Erste Landpflanzen", hu: "Első szárazföldi növények", ro: "Primele plante" }, correctX: 470, yearTolerancePct: 10 },
      { id: "e2", title: { en: "Dinosaurs appear", de: "Dinosaurier", hu: "Dinoszauruszok", ro: "Dinozauri" }, correctX: 230, yearTolerancePct: 10 },
      { id: "e3", title: { en: "First mammals", de: "Erste Säugetiere", hu: "Első emlősök", ro: "Primele mamifere" }, correctX: 200, yearTolerancePct: 10 },
      { id: "e4", title: { en: "Human evolution", de: "Menschliche Evolution", hu: "Emberi evolúció", ro: "Evoluția umană" }, correctX: 2, yearTolerancePct: 5 }
    ]
  }
];
