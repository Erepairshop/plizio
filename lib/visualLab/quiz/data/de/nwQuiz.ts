import type { QuizTask } from "../../types";

// Nordrhein-Westfalen (DE-NW) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const nwQuiz: QuizTask[] = [
  {
    id: "de-nw-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Düsseldorf auf der Karte!",
      hu: "Kattints a térképen a következőre: Düsseldorf!",
      ro: "Apasă pe Düsseldorf pe hartă!",
      en: "Click on Düsseldorf on the map!",
    },
    targetPoiId: "city-duesseldorf"
  },
  {
    id: "de-nw-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Nordrhein-Westfalen!",
      hu: "Kattints a tartományra: Nordrhein-Westfalen!",
      ro: "Apasă pe landul Nordrhein-Westfalen!",
      en: "Click on the state of Nordrhein-Westfalen!",
    },
    targetCountyId: "DE-NW"
  },
  {
    id: "de-nw-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Kölner Dom auf der Karte!",
      hu: "Kattints a térképen a következőre: Kölner Dom!",
      ro: "Apasă pe Kölner Dom pe hartă!",
      en: "Click on Kölner Dom on the map!",
    },
    targetPoiId: "landmark-cologne-cathedral"
  },
  {
    id: "de-nw-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Zeche Zollverein von Bonn entfernt?",
      hu: "Milyen messze van Zeche Zollverein és Bonn egymástól?",
      ro: "Cât de departe este Zeche Zollverein de Bonn?",
      en: "How far is Zeche Zollverein from Bonn?",
    },
    targetPoiId: "landmark-zeche-zollverein",
    targetPoiId2: "city-bonn",
    expectedKm: 83
  },
  {
    id: "de-nw-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Ruhrgebiet auf der Karte!",
      hu: "Kattints a térképen a következőre: Ruhrgebiet!",
      ro: "Apasă pe Ruhrgebiet pe hartă!",
      en: "Click on Ruhrgebiet on the map!",
    },
    targetPoiId: "industry-ruhrgebiet"
  },
  {
    id: "de-nw-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
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
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
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
      de: "Wie weit ist Wupper von Schloss Nordkirchen entfernt?",
      hu: "Milyen messze van Wupper és Schloss Nordkirchen egymástól?",
      ro: "Cât de departe este Wupper de Schloss Nordkirchen?",
      en: "How far is Wupper from Schloss Nordkirchen?",
    },
    targetPoiId: "river-wupper-extra",
    targetPoiId2: "landmark-schloss-nordkirchen",
    expectedKm: 65
  },
  {
    id: "de-nw-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
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
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
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
