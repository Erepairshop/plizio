import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";
export const rounds: TimelineSliderRound[] = [
  {
    id: "ges-ts-1",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 400, rangeMax: 2000 }
    },
    events: [
      { id: "e1", title: { en: "Columbus", de: "Kolumbus", hu: "Kolumbusz", ro: "Columb" }, correctX: 1492, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Moon Landing", de: "Mondlandung", hu: "Holdra szállás", ro: "Aterizarea pe Lună" }, correctX: 1969, yearTolerancePct: 5 },
      { id: "e3", title: { en: "Fall of Rome", de: "Fall Roms", hu: "Róma bukása", ro: "Căderea Romei" }, correctX: 476, yearTolerancePct: 5 }
    ]
  }
];
