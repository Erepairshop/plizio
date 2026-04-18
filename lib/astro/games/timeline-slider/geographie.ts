import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "geo-ts-1",
    axes: { x: { label: { en: "Year", de: "Jahr", hu: "Ev", ro: "An" }, rangeMin: 1400, rangeMax: 2025 } },
    events: [
      { id: "e1", title: { en: "Mercator map projection", de: "Mercator-Projektion", hu: "Mercator-vetulet", ro: "Proiectia Mercator" }, correctX: 1569, yearTolerancePct: 4 },
      { id: "e2", title: { en: "First modern world atlas", de: "Erster moderner Weltatlas", hu: "Elso modern vilagatlasz", ro: "Primul atlas modern" }, correctX: 1570, yearTolerancePct: 4 },
      { id: "e3", title: { en: "UN founded", de: "UNO gegruendet", hu: "ENSZ alapitas", ro: "Fondarea ONU" }, correctX: 1945, yearTolerancePct: 2 },
      { id: "e4", title: { en: "Copernicus satellites", de: "Copernicus-Satelliten", hu: "Copernicus muholdak", ro: "Satelitii Copernicus" }, correctX: 2014, yearTolerancePct: 2 }
    ]
  },
  {
    id: "geo-ts-2",
    axes: { x: { label: { en: "Approx. year", de: "Ungefaehres Jahr", hu: "Kb. ev", ro: "An aproximativ" }, rangeMin: 1800, rangeMax: 2025 } },
    events: [
      { id: "e1", title: { en: "Suez Canal opened", de: "Suezkanal eroefnet", hu: "Szuezi-csatorna megnyitas", ro: "Deschiderea Canalului Suez" }, correctX: 1869, yearTolerancePct: 3 },
      { id: "e2", title: { en: "Panama Canal opened", de: "Panamakanal eroefnet", hu: "Panama-csatorna megnyitas", ro: "Deschiderea Canalului Panama" }, correctX: 1914, yearTolerancePct: 3 },
      { id: "e3", title: { en: "First Earth Day", de: "Erster Earth Day", hu: "Elso Fold napja", ro: "Prima Zi a Pamantului" }, correctX: 1970, yearTolerancePct: 2 },
      { id: "e4", title: { en: "Paris climate agreement", de: "Pariser Klimaabkommen", hu: "Parizsi klimaegyezmeny", ro: "Acordul climatic de la Paris" }, correctX: 2015, yearTolerancePct: 2 }
    ]
  },
  {
    id: "geo-ts-3",
    axes: { x: { label: { en: "Century timeline", de: "Jahrhundert-Zeitlinie", hu: "Evszazad idovonal", ro: "Cronologie pe secole" }, rangeMin: 1200, rangeMax: 2025 } },
    events: [
      { id: "e1", title: { en: "Magna Carta", de: "Magna Carta", hu: "Magna Carta", ro: "Magna Carta" }, correctX: 1215, yearTolerancePct: 4 },
      { id: "e2", title: { en: "Columbus reaches Caribbean", de: "Kolumbus in der Karibik", hu: "Kolumbusz a Karib-tersegben", ro: "Columb ajunge in Caraibe" }, correctX: 1492, yearTolerancePct: 4 },
      { id: "e3", title: { en: "First moon landing", de: "Erste Mondlandung", hu: "Elso holdraszallas", ro: "Prima aselenizare" }, correctX: 1969, yearTolerancePct: 2 },
      { id: "e4", title: { en: "GPS global service", de: "GPS globaler Dienst", hu: "GPS globalis szolgaltatas", ro: "Serviciu GPS global" }, correctX: 1995, yearTolerancePct: 2 }
    ]
  }
];
