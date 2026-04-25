import type { QuizTask } from "../../types";

// Hamburg (DE-HH) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const hhQuiz: QuizTask[] = [
  {
    id: "de-hh-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Hamburg auf der Karte!",
      hu: "Kattints a térképen a következőre: Hamburg!",
      ro: "Apasă pe Hamburg pe hartă!",
      en: "Click on Hamburg on the map!",
    },
    targetPoiId: "city-hamburg"
  },
  {
    id: "de-hh-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Hamburg!",
      hu: "Kattints a tartományra: Hamburg!",
      ro: "Apasă pe landul Hamburg!",
      en: "Click on the state of Hamburg!",
    },
    targetCountyId: "DE-HH"
  },
  {
    id: "de-hh-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Elbphilharmonie auf der Karte!",
      hu: "Kattints a térképen a következőre: Elbphilharmonie!",
      ro: "Apasă pe Elbphilharmonie pe hartă!",
      en: "Click on Elbphilharmonie on the map!",
    },
    targetPoiId: "landmark-elbphilharmonie"
  },
  {
    id: "de-hh-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Mahnmal St. Nikolai Hamburg von Tierpark Hagenbeck Hamburg entfernt?",
      hu: "Milyen messze van Mahnmal St. Nikolai Hamburg és Tierpark Hagenbeck Hamburg egymástól?",
      ro: "Cât de departe este Mahnmal St. Nikolai Hamburg de Tierpark Hagenbeck Hamburg?",
      en: "How far is Mahnmal St. Nikolai Hamburg from Tierpark Hagenbeck Hamburg?",
    },
    targetPoiId: "hist-st-nikolai-hamburg",
    targetPoiId2: "zoo-hagenbeck-hamburg",
    expectedKm: 8
  },
  {
    id: "de-hh-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Alster Hamburg auf der Karte!",
      hu: "Kattints a térképen a következőre: Alster Hamburg!",
      ro: "Apasă pe Alster Hamburg pe hartă!",
      en: "Click on Alster Hamburg on the map!",
    },
    targetPoiId: "landmark-alster"
  },
  {
    id: "de-hh-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
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
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
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
      de: "Wie weit ist Hamburg von Reeperbahn St. Pauli entfernt?",
      hu: "Milyen messze van Hamburg és Reeperbahn St. Pauli egymástól?",
      ro: "Cât de departe este Hamburg de Reeperbahn St. Pauli?",
      en: "How far is Hamburg from Reeperbahn St. Pauli?",
    },
    targetPoiId: "city-hamburg",
    targetPoiId2: "landmark-reeperbahn",
    expectedKm: 2
  },
  {
    id: "de-hh-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
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
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "landmark-alster",
      "hist-speicherstadt",
      "kidlm-miniatur-wunderland",
      "port-hamburger-hafen"
    ],
    orderBy: "east_to_west"
  }
];
