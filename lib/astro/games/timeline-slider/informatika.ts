import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "info-ts-1",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1940, rangeMax: 2020 }
    },
    events: [
      { id: "e1", title: { en: "ENIAC (First Computer)", de: "ENIAC (Erster Computer)", hu: "ENIAC (Az első számítógép)", ro: "ENIAC (Primul computer)" }, correctX: 1946, yearTolerancePct: 5 },
      { id: "e2", title: { en: "World Wide Web (WWW)", de: "World Wide Web (WWW)", hu: "Világháló (WWW)", ro: "World Wide Web (WWW)" }, correctX: 1989, yearTolerancePct: 5 },
      { id: "e3", title: { en: "First iPhone", de: "Erstes iPhone", hu: "Az első iPhone", ro: "Primul iPhone" }, correctX: 2007, yearTolerancePct: 5 }
    ]
  }
];
