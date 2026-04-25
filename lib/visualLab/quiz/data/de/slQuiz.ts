import type { QuizTask } from "../../types";

// Saarland (DE-SL) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const slQuiz: QuizTask[] = [
  {
    id: "de-sl-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Saarbrücken auf der Karte!",
      hu: "Kattints a térképen a következőre: Saarbrücken!",
      ro: "Apasă pe Saarbrücken pe hartă!",
      en: "Click on Saarbrücken on the map!",
    },
    targetPoiId: "city-saarbruecken"
  },
  {
    id: "de-sl-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Saarland!",
      hu: "Kattints a tartományra: Saarland!",
      ro: "Apasă pe landul Saarland!",
      en: "Click on the state of Saarland!",
    },
    targetCountyId: "DE-SL"
  },
  {
    id: "de-sl-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Völklinger Hütte auf der Karte!",
      hu: "Kattints a térképen a következőre: Völklinger Hütte!",
      ro: "Apasă pe Völklinger Hütte pe hartă!",
      en: "Click on Völklinger Hütte on the map!",
    },
    targetPoiId: "landmark-voelklinger-huette"
  },
  {
    id: "de-sl-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Völklinger Hütte von Saarbrücken entfernt?",
      hu: "Milyen messze van Völklinger Hütte és Saarbrücken egymástól?",
      ro: "Cât de departe este Völklinger Hütte de Saarbrücken?",
      en: "How far is Völklinger Hütte from Saarbrücken?",
    },
    targetPoiId: "landmark-voelklinger-huette",
    targetPoiId2: "city-saarbruecken",
    expectedKm: 11
  },
  {
    id: "de-sl-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Bostalsee auf der Karte!",
      hu: "Kattints a térképen a következőre: Bostalsee!",
      ro: "Apasă pe Bostalsee pe hartă!",
      en: "Click on Bostalsee on the map!",
    },
    targetPoiId: "nature-bostalsee"
  },
  {
    id: "de-sl-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-ludwigskirche-saarbruecken",
      "city-homburg-saar",
      "city-saarlouis",
      "landmark-voelklinger-huette",
      "landmark-saarschleife"
    ],
    wrongPoiId: "landmark-saarschleife"
  },
  {
    id: "de-sl-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "landmark-voelklinger-huette",
      "hist-ludwigskirche-saarbruecken",
      "city-homburg-saar"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-sl-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Bostalsee von Homburg (Saar) entfernt?",
      hu: "Milyen messze van Bostalsee és Homburg (Saar) egymástól?",
      ro: "Cât de departe este Bostalsee de Homburg (Saar)?",
      en: "How far is Bostalsee from Homburg (Saar)?",
    },
    targetPoiId: "nature-bostalsee",
    targetPoiId2: "city-homburg-saar",
    expectedKm: 33
  },
  {
    id: "de-sl-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-ludwigskirche-saarbruecken",
      "city-homburg-saar",
      "city-saarbruecken",
      "landmark-saarschleife",
      "city-saarlouis"
    ],
    wrongPoiId: "landmark-saarschleife"
  },
  {
    id: "de-sl-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "city-saarlouis",
      "landmark-saarschleife"
    ],
    orderBy: "east_to_west"
  }
];
