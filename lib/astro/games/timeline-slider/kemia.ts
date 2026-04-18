import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "kem-ts-1",
    axes: {
      x: { label: { en: "pH Value", de: "pH-Wert", hu: "pH-érték", ro: "Valoare pH" }, rangeMin: 0, rangeMax: 14 }
    },
    events: [
      {
        id: "e1",
        title: {
          en: "Gastric acid",
          de: "Magensäure",
          hu: "Gyomorsav",
          ro: "Acid gastric"
        },
        correctX: 2,
        yearTolerancePct: 10
      },
      {
        id: "e2",
        title: {
          en: "Pure water",
          de: "Reines Wasser",
          hu: "Tiszta víz",
          ro: "Apă pură"
        },
        correctX: 7,
        yearTolerancePct: 5
      },
      {
        id: "e3",
        title: {
          en: "Bleach",
          de: "Bleichmittel",
          hu: "Fehérítő",
          ro: "Înălbitor"
        },
        correctX: 13,
        yearTolerancePct: 10
      }
    ]
  }
];
