import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "kem-ts-1",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1700, rangeMax: 2000 }
    },
    events: [
      { id: "e1", title: { en: "Discovery of Oxygen", de: "Entdeckung von Sauerstoff", hu: "Oxigén felfedezése", ro: "Descoperirea oxigenului" }, correctX: 1774, yearTolerancePct: 1 },
      { id: "e2", title: { en: "Dalton's Atomic Theory", de: "Daltons Atomtheorie", hu: "Dalton atomelmélete", ro: "Teoria atomică a lui Dalton" }, correctX: 1803, yearTolerancePct: 1 },
      { id: "e3", title: { en: "Mendeleev's Periodic Table", de: "Mendelejew Periodensystem", hu: "Mengyelejev periódusos rendszere", ro: "Tabelul periodic al lui Mendeleev" }, correctX: 1869, yearTolerancePct: 1 },
      { id: "e4", title: { en: "Discovery of Electron", de: "Entdeckung des Elektrons", hu: "Elektron felfedezése", ro: "Descoperirea electronului" }, correctX: 1897, yearTolerancePct: 1 }
    ]
  },
  {
    id: "kem-ts-2",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1890, rangeMax: 1950 }
    },
    events: [
      { id: "e1", title: { en: "Rutherford Model", de: "Rutherford-Modell", hu: "Rutherford-modell", ro: "Modelul Rutherford" }, correctX: 1911, yearTolerancePct: 1 },
      { id: "e2", title: { en: "Bohr Model", de: "Bohr-Modell", hu: "Bohr-modell", ro: "Modelul Bohr" }, correctX: 1913, yearTolerancePct: 1 },
      { id: "e3", title: { en: "Discovery of Proton", de: "Entdeckung des Protons", hu: "Proton felfedezése", ro: "Descoperirea protonului" }, correctX: 1917, yearTolerancePct: 1 },
      { id: "e4", title: { en: "Discovery of Neutron", de: "Entdeckung des Neutrons", hu: "Neutron felfedezése", ro: "Descoperirea neutronului" }, correctX: 1932, yearTolerancePct: 1 }
    ]
  },
  {
    id: "kem-ts-3",
    axes: {
      x: { label: { en: "Atomic Number", de: "Ordnungszahl", hu: "Rendszám", ro: "Număr atomic" }, rangeMin: 1, rangeMax: 20 }
    },
    events: [
      { id: "e1", title: { en: "Hydrogen (H)", de: "Wasserstoff (H)", hu: "Hidrogén (H)", ro: "Hidrogen (H)" }, correctX: 1, yearTolerancePct: 0 },
      { id: "e2", title: { en: "Carbon (C)", de: "Kohlenstoff (C)", hu: "Szén (C)", ro: "Carbon (C)" }, correctX: 6, yearTolerancePct: 0 },
      { id: "e3", title: { en: "Oxygen (O)", de: "Sauerstoff (O)", hu: "Oxigén (O)", ro: "Oxigen (O)" }, correctX: 8, yearTolerancePct: 0 },
      { id: "e4", title: { en: "Calcium (Ca)", de: "Kalzium (Ca)", hu: "Kalcium (Ca)", ro: "Calciu (Ca)" }, correctX: 20, yearTolerancePct: 0 }
    ]
  }
];
