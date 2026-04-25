import type { QuizTask } from "../../types";

// Bremen (DE-HB) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const hbQuiz: QuizTask[] = [
  {
    id: "de-hb-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Bremen auf der Karte!",
      hu: "Kattints a térképen a következőre: Bremen!",
      ro: "Apasă pe Bremen pe hartă!",
      en: "Click on Bremen on the map!",
    },
    targetPoiId: "city-bremen"
  },
  {
    id: "de-hb-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Bremen!",
      hu: "Kattints a tartományra: Bremen!",
      ro: "Apasă pe landul Bremen!",
      en: "Click on the state of Bremen!",
    },
    targetCountyId: "DE-HB"
  },
  {
    id: "de-hb-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Bremer Roland & Rathaus auf der Karte!",
      hu: "Kattints a térképen a következőre: Bremer Roland & Rathaus!",
      ro: "Apasă pe Bremer Roland & Rathaus pe hartă!",
      en: "Click on Bremer Roland & Rathaus on the map!",
    },
    targetPoiId: "hist-bremer-roland"
  },
  {
    id: "de-hb-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Bremen von Bremerhaven entfernt?",
      hu: "Milyen messze van Bremen és Bremerhaven egymástól?",
      ro: "Cât de departe este Bremen de Bremerhaven?",
      en: "How far is Bremen from Bremerhaven?",
    },
    targetPoiId: "city-bremen",
    targetPoiId2: "port-bremerhaven",
    expectedKm: 53
  },
  {
    id: "de-hb-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Weser & Bremer Hafen auf der Karte!",
      hu: "Kattints a térképen a következőre: Weser & Bremer Hafen!",
      ro: "Apasă pe Weser & Bremer Hafen pe hartă!",
      en: "Click on Weser & Bremer Hafen on the map!",
    },
    targetPoiId: "river-weser-hafen-hb"
  },
  {
    id: "de-hb-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "port-bremerhaven",
      "hist-bremer-roland",
      "hist-auswandererhaus",
      "city-bremen",
      "hist-schnoorviertel"
    ],
    wrongPoiId: "hist-auswandererhaus"
  },
  {
    id: "de-hb-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "landmark-stadtmusikanten",
      "hist-buergerweide",
      "landmark-universum-bremen"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-hb-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Weser & Bremer Hafen von Schnoorviertel entfernt?",
      hu: "Milyen messze van Weser & Bremer Hafen és Schnoorviertel egymástól?",
      ro: "Cât de departe este Weser & Bremer Hafen de Schnoorviertel?",
      en: "How far is Weser & Bremer Hafen from Schnoorviertel?",
    },
    targetPoiId: "river-weser-hafen-hb",
    targetPoiId2: "hist-schnoorviertel",
    expectedKm: 1
  },
  {
    id: "de-hb-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-buergerweide",
      "port-bremerhaven",
      "river-weser-hafen-hb",
      "hist-auswandererhaus",
      "landmark-stadtmusikanten"
    ],
    wrongPoiId: "port-bremerhaven"
  },
  {
    id: "de-hb-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "landmark-stadtmusikanten",
      "city-bremen",
      "hist-auswandererhaus"
    ],
    orderBy: "east_to_west"
  }
];
