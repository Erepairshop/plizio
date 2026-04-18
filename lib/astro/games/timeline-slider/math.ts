import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "math-ts-1",
    axes: {
      x: { label: { en: "Number Line", de: "Zahlenstrahl", hu: "Számegyenes", ro: "Axă numerică" }, rangeMin: 0, rangeMax: 1000 }
    },
    events: [
      { id: "e1", title: { en: "One hundred", de: "Einhundert", hu: "Száz", ro: "O sută" }, correctX: 100, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Five hundred", de: "Fünfhundert", hu: "Ötszáz", ro: "Cinci sute" }, correctX: 500, yearTolerancePct: 5 },
      { id: "e3", title: { en: "Seven hundred fifty", de: "Siebenhundertfünfzig", hu: "Hétszázötven", ro: "Șapte sute cincizeci" }, correctX: 750, yearTolerancePct: 5 },
      { id: "e4", title: { en: "Nine hundred ninety", de: "Neunhundertneunzig", hu: "Kilencszázkilencven", ro: "Nouă sute nouăzeci" }, correctX: 990, yearTolerancePct: 2 }
    ]
  },
  {
    id: "math-ts-2",
    axes: {
      x: { label: { en: "Locate the value", de: "Finde den Wert", hu: "Keresd meg az értéket", ro: "Găsește valoarea" }, rangeMin: 0, rangeMax: 100 }
    },
    events: [
      { id: "e1", title: { en: "A quarter of 100", de: "Ein Viertel von 100", hu: "100 negyede", ro: "Un sfert din 100" }, correctX: 25, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Half of 100", de: "Die Hälfte von 100", hu: "100 fele", ro: "Jumătate din 100" }, correctX: 50, yearTolerancePct: 5 },
      { id: "e3", title: { en: "Three quarters of 100", de: "Drei Viertel von 100", hu: "100 háromnegyede", ro: "Trei sferturi din 100" }, correctX: 75, yearTolerancePct: 5 },
      { id: "e4", title: { en: "The square of 9", de: "Das Quadrat von 9", hu: "9 négyzete", ro: "Pătratul lui 9" }, correctX: 81, yearTolerancePct: 5 }
    ]
  }
];
