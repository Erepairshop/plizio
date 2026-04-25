import type { QuizTask } from "../../types";

// Mecklenburg-Vorpommern (DE-MV) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const mvQuiz: QuizTask[] = [
  {
    id: "de-mv-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Schwerin auf der Karte!",
      hu: "Kattints a térképen a következőre: Schwerin!",
      ro: "Apasă pe Schwerin pe hartă!",
      en: "Click on Schwerin on the map!",
    },
    targetPoiId: "city-schwerin"
  },
  {
    id: "de-mv-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Mecklenburg-Vorpommern!",
      hu: "Kattints a tartományra: Mecklenburg-Vorpommern!",
      ro: "Apasă pe landul Mecklenburg-Vorpommern!",
      en: "Click on the state of Mecklenburg-Vorpommern!",
    },
    targetCountyId: "DE-MV"
  },
  {
    id: "de-mv-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Schweriner Schloss auf der Karte!",
      hu: "Kattints a térképen a következőre: Schweriner Schloss!",
      ro: "Apasă pe Schweriner Schloss pe hartă!",
      en: "Click on Schweriner Schloss on the map!",
    },
    targetPoiId: "landmark-schwerin-castle"
  },
  {
    id: "de-mv-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Schweriner See von Hansestadt Stralsund entfernt?",
      hu: "Milyen messze van Schweriner See és Hansestadt Stralsund egymástól?",
      ro: "Cât de departe este Schweriner See de Hansestadt Stralsund?",
      en: "How far is Schweriner See from Hansestadt Stralsund?",
    },
    targetPoiId: "lake-schweriner-see",
    targetPoiId2: "hist-stralsund-hansestadt",
    expectedKm: 133
  },
  {
    id: "de-mv-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Müritz auf der Karte!",
      hu: "Kattints a térképen a következőre: Müritz!",
      ro: "Apasă pe Müritz pe hartă!",
      en: "Click on Müritz on the map!",
    },
    targetPoiId: "lake-mueritz"
  },
  {
    id: "de-mv-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "port-rostock",
      "city-schwerin",
      "city-schwerin",
      "hist-stralsund-hansestadt",
      "hist-peenemuende"
    ],
    wrongPoiId: "port-rostock"
  },
  {
    id: "de-mv-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "city-rostock",
      "island-ruegen",
      "hist-peenemuende",
      "island-usedom"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-mv-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Schweriner See von Peenemünde entfernt?",
      hu: "Milyen messze van Schweriner See és Peenemünde egymástól?",
      ro: "Cât de departe este Schweriner See de Peenemünde?",
      en: "How far is Schweriner See from Peenemünde?",
    },
    targetPoiId: "lake-schweriner-see",
    targetPoiId2: "hist-peenemuende",
    expectedKm: 164
  },
  {
    id: "de-mv-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-stralsund-hansestadt",
      "city-rostock",
      "city-rostock-extra",
      "city-schwerin",
      "island-usedom"
    ],
    wrongPoiId: "island-usedom"
  },
  {
    id: "de-mv-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "hist-stralsund-hansestadt",
      "lake-mueritz",
      "port-rostock",
      "hist-wismar-hansestadt"
    ],
    orderBy: "east_to_west"
  }
];
