import type { QuizTask } from "../../types";

// Hamburg (DE-HH) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const hhQuiz: QuizTask[] = [
  {
    id: "de-hh-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Hamburg!",
      hu: "Kattints ide: Hamburg!",
      ro: "Apas\u0103 pe Hamburg!",
      en: "Click on Hamburg!"
    },
    targetPoiId: "city-hamburg"
  },
  {
    id: "de-hh-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Hamburg auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Hamburg a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Hamburg pe hart\u0103?",
      en: "Where is Hamburg on the map?"
    },
    targetCountyId: "DE-HH"
  },
  {
    id: "de-hh-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Elbphilharmonie!",
      hu: "Keresd meg: Elbphilharmonie!",
      ro: "G\u0103se\u0219te Elbphilharmonie!",
      en: "Find Elbphilharmonie!"
    },
    targetPoiId: "landmark-elbphilharmonie"
  },
  {
    id: "de-hh-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Mahnmal St. Nikolai Hamburg nach Alster?",
      hu: "Milyen messze van Mahnmal St. Nikolai Hamburg \u00e9s Alster egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Mahnmal St. Nikolai Hamburg de Alster?",
      en: "How far is it from Mahnmal St. Nikolai Hamburg to Alster?"
    },
    targetPoiId: "hist-st-nikolai-hamburg",
    targetPoiId2: "zoo-hagenbeck-hamburg",
    expectedKm: 8
  },
  {
    id: "de-hh-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Alster Hamburg?",
      hu: "Hol tal\u00e1lhat\u00f3: Alster Hamburg?",
      ro: "Unde se afl\u0103 Alster Hamburg?",
      en: "Where is Alster Hamburg located?"
    },
    targetPoiId: "landmark-alster"
  },
  {
    id: "de-hh-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "landmark-reeperbahn",
      "hist-st-nikolai-hamburg",
      "landmark-fischmarkt-hamburg",
      "landmark-beatles-museum",
      "city-hamburg"
    ],
    wrongPoiId: "hist-st-nikolai-hamburg"
  },
  {
    id: "de-hh-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "landmark-fischmarkt-hamburg",
      "hist-michel-hamburg",
      "city-hamburg",
      "landmark-alster"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-hh-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Hamburg und Reeperbahn St. Pauli!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Hamburg \u00e9s Reeperbahn St. Pauli k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Hamburg \u0219i Reeperbahn St. Pauli!",
      en: "Guess the distance between Hamburg and Reeperbahn St. Pauli!"
    },
    targetPoiId: "city-hamburg",
    targetPoiId2: "landmark-reeperbahn",
    expectedKm: 2
  },
  {
    id: "de-hh-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-speicherstadt",
      "kidlm-miniatur-wunderland",
      "hist-michel-hamburg",
      "hist-st-nikolai-hamburg",
      "zoo-hagenbeck-hamburg"
    ],
    wrongPoiId: "zoo-hagenbeck-hamburg"
  },
  {
    id: "de-hh-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "landmark-alster",
      "landmark-alster",
      "kidlm-miniatur-wunderland",
      "port-hamburger-hafen"
    ],
    orderBy: "east_to_west"
  }
];
