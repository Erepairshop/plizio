import type { QuizTask } from "../../types";

// Saarland (DE-SL) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const slQuiz: QuizTask[] = [
  {
    id: "de-sl-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Saarbr\u00fccken!",
      hu: "Kattints ide: Saarbr\u00fccken!",
      ro: "Apas\u0103 pe Saarbr\u00fccken!",
      en: "Click on Saarbr\u00fccken!"
    },
    targetPoiId: "city-saarbruecken"
  },
  {
    id: "de-sl-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Saarland auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Saarland a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Saarland pe hart\u0103?",
      en: "Where is Saarland on the map?"
    },
    targetCountyId: "DE-SL"
  },
  {
    id: "de-sl-easy-3",
    type: "click_poi",
    question: {
      de: "Finde V\u00f6lklinger H\u00fctte!",
      hu: "Keresd meg: V\u00f6lklinger H\u00fctte!",
      ro: "G\u0103se\u0219te V\u00f6lklinger H\u00fctte!",
      en: "Find V\u00f6lklinger H\u00fctte!"
    },
    targetPoiId: "landmark-voelklinger-huette"
  },
  {
    id: "de-sl-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von V\u00f6lklinger H\u00fctte nach Alte Abtei Mettlach?",
      hu: "Milyen messze van V\u00f6lklinger H\u00fctte \u00e9s Alte Abtei Mettlach egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este V\u00f6lklinger H\u00fctte de Alte Abtei Mettlach?",
      en: "How far is it from V\u00f6lklinger H\u00fctte to Alte Abtei Mettlach?"
    },
    targetPoiId: "landmark-voelklinger-huette",
    targetPoiId2: "city-saarbruecken",
    expectedKm: 11
  },
  {
    id: "de-sl-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Bostalsee?",
      hu: "Hol tal\u00e1lhat\u00f3: Bostalsee?",
      ro: "Unde se afl\u0103 Bostalsee?",
      en: "Where is Bostalsee located?"
    },
    targetPoiId: "nature-bostalsee"
  },
  {
    id: "de-sl-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-ludwigskirche-saarbruecken",
      "city-homburg-saar",
      "city-saarlouis",
      "landmark-voelklinger-huette",
      "landmark-saarschleife"
    ],
    wrongPoiId: "landmark-voelklinger-huette"
  },
  {
    id: "de-sl-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "landmark-voelklinger-huette",
      "hist-ludwigskirche-saarbruecken",
      "city-saarbruecken"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-sl-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Bostalsee und Bergbaumuseum Bexbach!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Bostalsee \u00e9s Bergbaumuseum Bexbach k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Bostalsee \u0219i Bergbaumuseum Bexbach!",
      en: "Guess the distance between Bostalsee and Bergbaumuseum Bexbach!"
    },
    targetPoiId: "nature-bostalsee",
    targetPoiId2: "city-homburg-saar",
    expectedKm: 33
  },
  {
    id: "de-sl-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-ludwigskirche-saarbruecken",
      "city-homburg-saar",
      "hist-ludwigskirche-saarbruecken",
      "landmark-saarschleife",
      "city-saarlouis"
    ],
    wrongPoiId: "hist-ludwigskirche-saarbruecken"
  },
  {
    id: "de-sl-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "city-saarlouis",
      "landmark-saarschleife"
    ],
    orderBy: "east_to_west"
  }
];
