import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "geo-sm-1",
    taskDescription: {
      en: "Do these match? (Country and Capital)",
      de: "Passt das zusammen? (Land und Hauptstadt)",
      hu: "Egyeznek? (Orszag es fovaros)",
      ro: "Se potrivesc? (Tara si capitala)"
    },
    pairs: [
      { id: "p1", a: { en: "Germany", de: "Deutschland", hu: "Nemetorszag", ro: "Germania" }, b: { en: "Berlin", de: "Berlin", hu: "Berlin", ro: "Berlin" }, isMatch: true },
      { id: "p2", a: { en: "Spain", de: "Spanien", hu: "Spanyolorszag", ro: "Spania" }, b: { en: "Lisbon", de: "Lissabon", hu: "Lisszabon", ro: "Lisabona" }, isMatch: false },
      { id: "p3", a: { en: "Romania", de: "Rumanien", hu: "Romania", ro: "Romania" }, b: { en: "Bucharest", de: "Bukarest", hu: "Bukarest", ro: "Bucuresti" }, isMatch: true },
      { id: "p4", a: { en: "Hungary", de: "Ungarn", hu: "Magyarorszag", ro: "Ungaria" }, b: { en: "Vienna", de: "Wien", hu: "Becs", ro: "Viena" }, isMatch: false }
    ]
  },
  {
    id: "geo-sm-2",
    taskDescription: {
      en: "Do these match? (River and Region)",
      de: "Passt das zusammen? (Fluss und Region)",
      hu: "Egyeznek? (Folyo es regio)",
      ro: "Se potrivesc? (Rau si regiune)"
    },
    pairs: [
      { id: "p1", a: { en: "Danube", de: "Donau", hu: "Duna", ro: "Dunarea" }, b: { en: "Central Europe", de: "Mitteleuropa", hu: "Kozep-Europa", ro: "Europa Centrala" }, isMatch: true },
      { id: "p2", a: { en: "Amazon", de: "Amazonas", hu: "Amazonas", ro: "Amazon" }, b: { en: "Africa", de: "Afrika", hu: "Afrika", ro: "Africa" }, isMatch: false },
      { id: "p3", a: { en: "Nile", de: "Nil", hu: "Nilus", ro: "Nil" }, b: { en: "Northeast Africa", de: "Nordostafrika", hu: "Eszakkelet-Afrika", ro: "Africa de Nord-Est" }, isMatch: true },
      { id: "p4", a: { en: "Rhine", de: "Rhein", hu: "Rajna", ro: "Rin" }, b: { en: "South America", de: "Sudamerika", hu: "Del-Amerika", ro: "America de Sud" }, isMatch: false }
    ]
  },
  {
    id: "geo-sm-3",
    taskDescription: {
      en: "Do these match? (Climate and Feature)",
      de: "Passt das zusammen? (Klima und Merkmal)",
      hu: "Egyeznek? (Eghajlat es jellemzo)",
      ro: "Se potrivesc? (Clima si caracteristica)"
    },
    pairs: [
      { id: "p1", a: { en: "Tropical", de: "Tropisch", hu: "Tropusi", ro: "Tropical" }, b: { en: "Warm all year", de: "Ganzjahrig warm", hu: "Egesz evben meleg", ro: "Cald tot anul" }, isMatch: true },
      { id: "p2", a: { en: "Polar", de: "Polar", hu: "Polaris", ro: "Polar" }, b: { en: "Heavy monsoon rain", de: "Starker Monsunregen", hu: "Ersos monszun esok", ro: "Ploi musonice puternice" }, isMatch: false },
      { id: "p3", a: { en: "Arid", de: "Trocken", hu: "Szaraz", ro: "Arid" }, b: { en: "Very low rainfall", de: "Sehr wenig Niederschlag", hu: "Nagyon keves csapadek", ro: "Foarte putine precipitatii" }, isMatch: true },
      { id: "p4", a: { en: "Temperate", de: "Gemaessigt", hu: "Mersekelt", ro: "Temperat" }, b: { en: "No seasons", de: "Keine Jahreszeiten", hu: "Nincs evszak", ro: "Fara anotimpuri" }, isMatch: false }
    ]
  }
];
