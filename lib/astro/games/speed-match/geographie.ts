import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "geo-sm-1",
    taskDescription: {
      en: "Do these match? (Country and Capital)",
      de: "Passt das zusammen? (Land und Hauptstadt)",
      hu: "Egyeznek? (Ország és főváros)",
      ro: "Se potrivesc? (Țară și capitală)"
    },
    pairs: [
      { id: "p1", a: { en: "Germany", de: "Deutschland", hu: "Németország", ro: "Germania" }, b: { en: "Berlin", de: "Berlin", hu: "Berlin", ro: "Berlin" }, isMatch: true },
      { id: "p2", a: { en: "Spain", de: "Spanien", hu: "Spanyolország", ro: "Spania" }, b: { en: "Lisbon", de: "Lissabon", hu: "Lisszabon", ro: "Lisabona" }, isMatch: false },
      { id: "p3", a: { en: "Romania", de: "Rumänien", hu: "Románia", ro: "România" }, b: { en: "Bucharest", de: "Bukarest", hu: "Bukarest", ro: "București" }, isMatch: true },
      { id: "p4", a: { en: "Hungary", de: "Ungarn", hu: "Magyarország", ro: "Ungaria" }, b: { en: "Vienna", de: "Wien", hu: "Bécs", ro: "Viena" }, isMatch: false }
    ]
  },
  {
    id: "geo-sm-2",
    taskDescription: {
      en: "Do these match? (River and Region)",
      de: "Passt das zusammen? (Fluss und Region)",
      hu: "Egyeznek? (Folyó és régió)",
      ro: "Se potrivesc? (Râu și regiune)"
    },
    pairs: [
      { id: "p1", a: { en: "Danube", de: "Donau", hu: "Duna", ro: "Dunărea" }, b: { en: "Central Europe", de: "Mitteleuropa", hu: "Közép-Európa", ro: "Europa Centrală" }, isMatch: true },
      { id: "p2", a: { en: "Amazon", de: "Amazonas", hu: "Amazonas", ro: "Amazon" }, b: { en: "Africa", de: "Afrika", hu: "Afrika", ro: "Africa" }, isMatch: false },
      { id: "p3", a: { en: "Nile", de: "Nil", hu: "Nílus", ro: "Nil" }, b: { en: "Northeast Africa", de: "Nordostafrika", hu: "Északkelet-Afrika", ro: "Africa de Nord-Est" }, isMatch: true },
      { id: "p4", a: { en: "Rhine", de: "Rhein", hu: "Rajna", ro: "Rin" }, b: { en: "South America", de: "Südamerika", hu: "Dél-Amerika", ro: "America de Sud" }, isMatch: false }
    ]
  },
  {
    id: "geo-sm-3",
    taskDescription: {
      en: "Do these match? (Climate and Feature)",
      de: "Passt das zusammen? (Klima und Merkmal)",
      hu: "Egyeznek? (Éghajlat és jellemző)",
      ro: "Se potrivesc? (Climă și caracteristică)"
    },
    pairs: [
      { id: "p1", a: { en: "Tropical", de: "Tropisch", hu: "Trópusi", ro: "Tropical" }, b: { en: "Warm all year", de: "Ganzjährig warm", hu: "Egész évben meleg", ro: "Cald tot anul" }, isMatch: true },
      { id: "p2", a: { en: "Polar", de: "Polar", hu: "Poláris", ro: "Polar" }, b: { en: "Heavy monsoon rain", de: "Starker Monsunregen", hu: "Erős monszun esők", ro: "Ploi musonice puternice" }, isMatch: false },
      { id: "p3", a: { en: "Arid", de: "Trocken", hu: "Száraz", ro: "Arid" }, b: { en: "Very low rainfall", de: "Sehr wenig Niederschlag", hu: "Nagyon kevés csapadék", ro: "Foarte puține precipitații" }, isMatch: true },
      { id: "p4", a: { en: "Temperate", de: "Gemäßigt", hu: "Mérsékelt", ro: "Temperat" }, b: { en: "No seasons", de: "Keine Jahreszeiten", hu: "Nincs évszak", ro: "Fără anotimpuri" }, isMatch: false }
    ]
  }
];
