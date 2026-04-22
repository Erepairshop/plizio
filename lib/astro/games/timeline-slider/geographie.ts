import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "geo-ts-1",
    axes: { x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1400, rangeMax: 2025 } },
    events: [
      { id: "e1", title: { en: "Mercator map projection", de: "Mercator-Projektion", hu: "Mercator-vetület", ro: "Proiecția Mercator" }, correctX: 1569, yearTolerancePct: 4 },
      { id: "e2", title: { en: "First modern world atlas", de: "Erster moderner Weltatlas", hu: "Első modern világatlasz", ro: "Primul atlas modern" }, correctX: 1570, yearTolerancePct: 4 },
      { id: "e3", title: { en: "UN founded", de: "UNO gegründet", hu: "ENSZ alapítása", ro: "Fondarea ONU" }, correctX: 1945, yearTolerancePct: 2 },
      { id: "e4", title: { en: "Copernicus satellites", de: "Copernicus-Satelliten", hu: "Copernicus műholdak", ro: "Sateliții Copernicus" }, correctX: 2014, yearTolerancePct: 2 }
    ]
  },
  {
    id: "geo-ts-2",
    axes: { x: { label: { en: "Approx. year", de: "Ungefähres Jahr", hu: "Kb. év", ro: "An aproximativ" }, rangeMin: 1800, rangeMax: 2025 } },
    events: [
      { id: "e1", title: { en: "Suez Canal opened", de: "Suezkanal eröffnet", hu: "Szuezi-csatorna megnyitása", ro: "Deschiderea Canalului Suez" }, correctX: 1869, yearTolerancePct: 3 },
      { id: "e2", title: { en: "Panama Canal opened", de: "Panamakanal eröffnet", hu: "Panama-csatorna megnyitása", ro: "Deschiderea Canalului Panama" }, correctX: 1914, yearTolerancePct: 3 },
      { id: "e3", title: { en: "First Earth Day", de: "Erster Earth Day", hu: "Első Föld napja", ro: "Prima Zi a Pământului" }, correctX: 1970, yearTolerancePct: 2 },
      { id: "e4", title: { en: "Paris climate agreement", de: "Pariser Klimaabkommen", hu: "Párizsi klímaegyezmény", ro: "Acordul climatic de la Paris" }, correctX: 2015, yearTolerancePct: 2 }
    ]
  },
  {
    id: "geo-ts-3",
    axes: { x: { label: { en: "Century timeline", de: "Jahrhundert-Zeitlinie", hu: "Évszázad idővonal", ro: "Cronologie pe secole" }, rangeMin: 1200, rangeMax: 2025 } },
    events: [
      { id: "e1", title: { en: "Magna Carta", de: "Magna Carta", hu: "Magna Carta", ro: "Magna Carta" }, correctX: 1215, yearTolerancePct: 4 },
      { id: "e2", title: { en: "Columbus reaches Caribbean", de: "Kolumbus in der Karibik", hu: "Kolumbusz a Karib-térségben", ro: "Columb ajunge în Caraibe" }, correctX: 1492, yearTolerancePct: 4 },
      { id: "e3", title: { en: "First moon landing", de: "Erste Mondlandung", hu: "Első holdra szállás", ro: "Prima aselenizare" }, correctX: 1969, yearTolerancePct: 2 },
      { id: "e4", title: { en: "GPS global service", de: "GPS globaler Dienst", hu: "GPS globális szolgáltatás", ro: "Serviciu GPS global" }, correctX: 1995, yearTolerancePct: 2 }
    ]
  }
];
