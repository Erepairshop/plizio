import type { QuizTask } from "../../types";

// Sachsen-Anhalt (DE-ST) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const stQuiz: QuizTask[] = [
  {
    id: "de-st-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Magdeburg auf der Karte!",
      hu: "Kattints a térképen a következőre: Magdeburg!",
      ro: "Apasă pe Magdeburg pe hartă!",
      en: "Click on Magdeburg on the map!",
    },
    targetPoiId: "city-magdeburg"
  },
  {
    id: "de-st-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Sachsen-Anhalt!",
      hu: "Kattints a tartományra: Sachsen-Anhalt!",
      ro: "Apasă pe landul Sachsen-Anhalt!",
      en: "Click on the state of Sachsen-Anhalt!",
    },
    targetCountyId: "DE-ST"
  },
  {
    id: "de-st-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Schlosskirche Wittenberg auf der Karte!",
      hu: "Kattints a térképen a következőre: Schlosskirche Wittenberg!",
      ro: "Apasă pe Schlosskirche Wittenberg pe hartă!",
      en: "Click on Schlosskirche Wittenberg on the map!",
    },
    targetPoiId: "hist-wittenberg-schlosskirche"
  },
  {
    id: "de-st-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Teufelsmauer von Lutherstadt Eisleben entfernt?",
      hu: "Milyen messze van Teufelsmauer és Lutherstadt Eisleben egymástól?",
      ro: "Cât de departe este Teufelsmauer de Lutherstadt Eisleben?",
      en: "How far is Teufelsmauer from Lutherstadt Eisleben?",
    },
    targetPoiId: "landmark-teufelsmauer",
    targetPoiId2: "hist-eisleben",
    expectedKm: 41
  },
  {
    id: "de-st-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Brocken auf der Karte!",
      hu: "Kattints a térképen a következőre: Brocken!",
      ro: "Apasă pe Brocken pe hartă!",
      en: "Click on Brocken on the map!",
    },
    targetPoiId: "mnt-brocken"
  },
  {
    id: "de-st-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "city-magdeburg",
      "hist-bauhaus-dessau",
      "hist-wittenberg-schlosskirche",
      "hist-quedlinburg",
      "hist-eisleben"
    ],
    wrongPoiId: "city-magdeburg"
  },
  {
    id: "de-st-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "landmark-teufelsmauer",
      "city-magdeburg",
      "city-halle-saale",
      "hist-bauhaus-dessau"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-st-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Harz von Magdeburg entfernt?",
      hu: "Milyen messze van Harz és Magdeburg egymástól?",
      ro: "Cât de departe este Harz de Magdeburg?",
      en: "How far is Harz from Magdeburg?",
    },
    targetPoiId: "forest-harz",
    targetPoiId2: "city-magdeburg",
    expectedKm: 80
  },
  {
    id: "de-st-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "landmark-teufelsmauer",
      "hist-wittenberg-schlosskirche",
      "city-magdeburg",
      "mnt-brocken",
      "city-halle-saale"
    ],
    wrongPoiId: "hist-wittenberg-schlosskirche"
  },
  {
    id: "de-st-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "city-halle-saale",
      "landmark-teufelsmauer",
      "mnt-brocken"
    ],
    orderBy: "east_to_west"
  }
];
