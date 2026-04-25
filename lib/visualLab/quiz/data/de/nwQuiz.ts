import type { QuizTask } from "../../types";

// Nordrhein-Westfalen (DE-NW) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const nwQuiz: QuizTask[] = [
  {
    id: "de-nw-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf D\u00fcsseldorf!",
      hu: "Kattints ide: D\u00fcsseldorf!",
      ro: "Apas\u0103 pe D\u00fcsseldorf!",
      en: "Click on D\u00fcsseldorf!"
    },
    targetPoiId: "city-duesseldorf"
  },
  {
    id: "de-nw-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Nordrhein-Westfalen auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Nordrhein-Westfalen a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Nordrhein-Westfalen pe hart\u0103?",
      en: "Where is Nordrhein-Westfalen on the map?"
    },
    targetCountyId: "DE-NW"
  },
  {
    id: "de-nw-easy-3",
    type: "click_poi",
    question: {
      de: "Finde K\u00f6lner Dom!",
      hu: "Keresd meg: K\u00f6lner Dom!",
      ro: "G\u0103se\u0219te K\u00f6lner Dom!",
      en: "Find K\u00f6lner Dom!"
    },
    targetPoiId: "landmark-cologne-cathedral"
  },
  {
    id: "de-nw-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Zeche Zollverein nach Bonn?",
      hu: "Milyen messze van Zeche Zollverein \u00e9s Bonn egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Zeche Zollverein de Bonn?",
      en: "How far is it from Zeche Zollverein to Bonn?"
    },
    targetPoiId: "landmark-zeche-zollverein",
    targetPoiId2: "city-bonn",
    expectedKm: 83
  },
  {
    id: "de-nw-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Ruhrgebiet?",
      hu: "Hol tal\u00e1lhat\u00f3: Ruhrgebiet?",
      ro: "Unde se afl\u0103 Ruhrgebiet?",
      en: "Where is Ruhrgebiet located?"
    },
    targetPoiId: "industry-ruhrgebiet"
  },
  {
    id: "de-nw-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "city-bielefeld",
      "city-oberhausen",
      "port-duisburg",
      "city-bonn",
      "city-gelsenkirchen"
    ],
    wrongPoiId: "port-duisburg"
  },
  {
    id: "de-nw-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "kidlm-phantasialand-bruehl",
      "landmark-cologne-cathedral",
      "industry-ruhrgebiet",
      "city-bielefeld"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-nw-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Wupper und Schloss Nordkirchen!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Wupper \u00e9s Schloss Nordkirchen k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Wupper \u0219i Schloss Nordkirchen!",
      en: "Guess the distance between Wupper and Schloss Nordkirchen!"
    },
    targetPoiId: "river-wupper-extra",
    targetPoiId2: "landmark-schloss-nordkirchen",
    expectedKm: 65
  },
  {
    id: "de-nw-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-hermannsdenkmal",
      "landmark-gasometer-oberhausen",
      "landmark-cologne-cathedral",
      "landmark-schloss-nordkirchen",
      "landmark-zeche-zollverein"
    ],
    wrongPoiId: "hist-hermannsdenkmal"
  },
  {
    id: "de-nw-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "landmark-zeche-zollverein",
      "city-oberhausen",
      "city-duesseldorf",
      "port-duisburg"
    ],
    orderBy: "east_to_west"
  }
];
