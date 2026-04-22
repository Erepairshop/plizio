import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "mag-ts-1",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1800, rangeMax: 1920 }
    },
    events: [
      { id: "e1", title: { en: "Dalton's Atomic Theory", de: "Daltons Atomtheorie", hu: "Dalton atomelmélete", ro: "Teoria atomică a lui Dalton" }, correctX: 1803, yearTolerancePct: 1 },
      { id: "e2", title: { en: "Discovery of Electron", de: "Entdeckung des Elektrons", hu: "Elektron felfedezése", ro: "Descoperirea electronului" }, correctX: 1897, yearTolerancePct: 1 },
      { id: "e3", title: { en: "Rutherford Model", de: "Rutherford-Modell", hu: "Rutherford-modell", ro: "Modelul Rutherford" }, correctX: 1911, yearTolerancePct: 1 },
      { id: "e4", title: { en: "Bohr Model", de: "Bohr-Modell", hu: "Bohr-modell", ro: "Modelul Bohr" }, correctX: 1913, yearTolerancePct: 1 }
    ]
  },
  {
    id: "mag-ts-2",
    axes: {
      x: { label: { en: "Atomic Number", de: "Ordnungszahl", hu: "Rendszám", ro: "Număr atomic" }, rangeMin: 1, rangeMax: 10 }
    },
    events: [
      { id: "e1", title: { en: "Hydrogen (H)", de: "Wasserstoff (H)", hu: "Hidrogén (H)", ro: "Hidrogen (H)" }, correctX: 1, yearTolerancePct: 0 },
      { id: "e2", title: { en: "Helium (He)", de: "Helium (He)", hu: "Hélium (He)", ro: "Heliu (He)" }, correctX: 2, yearTolerancePct: 0 },
      { id: "e3", title: { en: "Lithium (Li)", de: "Lithium (Li)", hu: "Lítium (Li)", ro: "Litiu (Li)" }, correctX: 3, yearTolerancePct: 0 },
      { id: "e4", title: { en: "Neon (Ne)", de: "Neon (Ne)", hu: "Neon (Ne)", ro: "Neon (Ne)" }, correctX: 10, yearTolerancePct: 0 }
    ]
  },
  {
    id: "mag-ts-3",
    axes: {
      x: { label: { en: "pH Value", de: "pH-Wert", hu: "pH-érték", ro: "Valoare pH" }, rangeMin: 0, rangeMax: 14 }
    },
    events: [
      { id: "e1", title: { en: "Strong Acid", de: "Starke Säure", hu: "Erős sav", ro: "Acid puternic" }, correctX: 1, yearTolerancePct: 0 },
      { id: "e2", title: { en: "Neutral (Water)", de: "Neutral (Wasser)", hu: "Semleges (Víz)", ro: "Neutru (Apă)" }, correctX: 7, yearTolerancePct: 0 },
      { id: "e3", title: { en: "Strong Base", de: "Starke Base", hu: "Erős lúg", ro: "Bază puternică" }, correctX: 13, yearTolerancePct: 0 }
    ]
  }
];
