import type { QuizTask } from "../../types";

// Schleswig-Holstein (DE-SH) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const shQuiz: QuizTask[] = [
  {
    id: "de-sh-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Kiel auf der Karte!",
      hu: "Kattints a térképen a következőre: Kiel!",
      ro: "Apasă pe Kiel pe hartă!",
      en: "Click on Kiel on the map!",
    },
    targetPoiId: "city-kiel"
  },
  {
    id: "de-sh-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Schleswig-Holstein!",
      hu: "Kattints a tartományra: Schleswig-Holstein!",
      ro: "Apasă pe landul Schleswig-Holstein!",
      en: "Click on the state of Schleswig-Holstein!",
    },
    targetCountyId: "DE-SH"
  },
  {
    id: "de-sh-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Lübeck auf der Karte!",
      hu: "Kattints a térképen a következőre: Lübeck!",
      ro: "Apasă pe Lübeck pe hartă!",
      en: "Click on Lübeck on the map!",
    },
    targetPoiId: "hist-luebeck"
  },
  {
    id: "de-sh-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Flensburger Förde von Kiel entfernt?",
      hu: "Milyen messze van Flensburger Förde és Kiel egymástól?",
      ro: "Cât de departe este Flensburger Förde de Kiel?",
      en: "How far is Flensburger Förde from Kiel?",
    },
    targetPoiId: "landmark-flensburger-foerde",
    targetPoiId2: "city-kiel",
    expectedKm: 71
  },
  {
    id: "de-sh-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Wattenmeer – Seehunde auf der Karte!",
      hu: "Kattints a térképen a következőre: Wattenmeer – Seehunde!",
      ro: "Apasă pe Wattenmeer – Seehunde pe hartă!",
      en: "Click on Wattenmeer – Seehunde on the map!",
    },
    targetPoiId: "animal-wattenmeer-seehunde"
  },
  {
    id: "de-sh-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-kiel-matrosenaufstand",
      "hist-luebeck",
      "island-fehmarn",
      "hist-skagerrakschlacht",
      "hist-nord-ostsee-kanal"
    ],
    wrongPoiId: "island-fehmarn"
  },
  {
    id: "de-sh-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "hist-kiel-matrosenaufstand",
      "hist-skagerrakschlacht",
      "city-luebeck",
      "kidlm-hansa-park"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-sh-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Lübeck von Sylt entfernt?",
      hu: "Milyen messze van Lübeck és Sylt egymástól?",
      ro: "Cât de departe este Lübeck de Sylt?",
      en: "How far is Lübeck from Sylt?",
    },
    targetPoiId: "city-luebeck",
    targetPoiId2: "island-sylt",
    expectedKm: 191
  },
  {
    id: "de-sh-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "city-luebeck",
      "island-fehmarn",
      "island-helgoland",
      "island-sylt",
      "city-luebeck"
    ],
    wrongPoiId: "city-luebeck"
  },
  {
    id: "de-sh-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "kidlm-hansa-park",
      "city-luebeck",
      "hist-skagerrakschlacht"
    ],
    orderBy: "east_to_west"
  }
];
