import type { QuizTask } from "../../types";

// Hessen (DE-HE) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const heQuiz: QuizTask[] = [
  {
    id: "de-he-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Wiesbaden auf der Karte!",
      hu: "Kattints a térképen a következőre: Wiesbaden!",
      ro: "Apasă pe Wiesbaden pe hartă!",
      en: "Click on Wiesbaden on the map!",
    },
    targetPoiId: "city-wiesbaden"
  },
  {
    id: "de-he-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Hessen!",
      hu: "Kattints a tartományra: Hessen!",
      ro: "Apasă pe landul Hessen!",
      en: "Click on the state of Hessen!",
    },
    targetCountyId: "DE-HE"
  },
  {
    id: "de-he-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Frankfurter Paulskirche auf der Karte!",
      hu: "Kattints a térképen a következőre: Frankfurter Paulskirche!",
      ro: "Apasă pe Frankfurter Paulskirche pe hartă!",
      en: "Click on Frankfurter Paulskirche on the map!",
    },
    targetPoiId: "hist-paulskirche"
  },
  {
    id: "de-he-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Frankfurt am Main von Großer Feldberg entfernt?",
      hu: "Milyen messze van Frankfurt am Main és Großer Feldberg egymástól?",
      ro: "Cât de departe este Frankfurt am Main de Großer Feldberg?",
      en: "How far is Frankfurt am Main from Großer Feldberg?",
    },
    targetPoiId: "city-frankfurt",
    targetPoiId2: "mnt-grosser-feldberg",
    expectedKm: 21
  },
  {
    id: "de-he-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Wasserkuppe auf der Karte!",
      hu: "Kattints a térképen a következőre: Wasserkuppe!",
      ro: "Apasă pe Wasserkuppe pe hartă!",
      en: "Click on Wasserkuppe on the map!",
    },
    targetPoiId: "mnt-wasserkuppe"
  },
  {
    id: "de-he-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-paulskirche",
      "landmark-burg-frankenstein",
      "landmark-goethehaus-frankfurt",
      "hist-wilhelmshoehe",
      "city-kassel"
    ],
    wrongPoiId: "city-kassel"
  },
  {
    id: "de-he-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "city-darmstadt",
      "city-frankfurt",
      "city-kassel"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-he-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Wiesbaden von Frankfurt am Main entfernt?",
      hu: "Milyen messze van Wiesbaden és Frankfurt am Main egymástól?",
      ro: "Cât de departe este Wiesbaden de Frankfurt am Main?",
      en: "How far is Wiesbaden from Frankfurt am Main?",
    },
    targetPoiId: "city-wiesbaden",
    targetPoiId2: "city-frankfurt",
    expectedKm: 32
  },
  {
    id: "de-he-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-paulskirche",
      "hist-point-alpha",
      "mnt-wasserkuppe",
      "city-frankfurt",
      "city-kassel"
    ],
    wrongPoiId: "mnt-wasserkuppe"
  },
  {
    id: "de-he-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "hist-wilhelmshoehe",
      "landmark-burg-frankenstein",
      "city-wiesbaden"
    ],
    orderBy: "east_to_west"
  }
];
