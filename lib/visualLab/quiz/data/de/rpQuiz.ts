import type { QuizTask } from "../../types";

// Rheinland-Pfalz (DE-RP) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const rpQuiz: QuizTask[] = [
  {
    id: "de-rp-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Mainz auf der Karte!",
      hu: "Kattints a térképen a következőre: Mainz!",
      ro: "Apasă pe Mainz pe hartă!",
      en: "Click on Mainz on the map!",
    },
    targetPoiId: "city-mainz"
  },
  {
    id: "de-rp-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Rheinland-Pfalz!",
      hu: "Kattints a tartományra: Rheinland-Pfalz!",
      ro: "Apasă pe landul Rheinland-Pfalz!",
      en: "Click on the state of Rheinland-Pfalz!",
    },
    targetCountyId: "DE-RP"
  },
  {
    id: "de-rp-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Speyerer Dom auf der Karte!",
      hu: "Kattints a térképen a következőre: Speyerer Dom!",
      ro: "Apasă pe Speyerer Dom pe hartă!",
      en: "Click on Speyerer Dom on the map!",
    },
    targetPoiId: "landmark-speyer-cathedral"
  },
  {
    id: "de-rp-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Deutsches Eck von Reichsburg Cochem entfernt?",
      hu: "Milyen messze van Deutsches Eck és Reichsburg Cochem egymástól?",
      ro: "Cât de departe este Deutsches Eck de Reichsburg Cochem?",
      en: "How far is Deutsches Eck from Reichsburg Cochem?",
    },
    targetPoiId: "landmark-deutsches-eck-extra",
    targetPoiId2: "landmark-burg-cochem",
    expectedKm: 40
  },
  {
    id: "de-rp-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Ludwigshafen (BASF – Chemie) auf der Karte!",
      hu: "Kattints a térképen a következőre: Ludwigshafen (BASF – Chemie)!",
      ro: "Apasă pe Ludwigshafen (BASF – Chemie) pe hartă!",
      en: "Click on Ludwigshafen (BASF – Chemie) on the map!",
    },
    targetPoiId: "industry-ludwigshafen"
  },
  {
    id: "de-rp-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-marksburg",
      "landmark-burg-rheinstein",
      "landmark-burg-cochem",
      "industry-ludwigshafen",
      "hist-schloss-stolzenfels"
    ],
    wrongPoiId: "industry-ludwigshafen"
  },
  {
    id: "de-rp-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "hist-burg-eltz",
      "relief-rheintal",
      "city-mainz",
      "hist-worms-dom"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-rp-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Mainz von Burg Katz entfernt?",
      hu: "Milyen messze van Mainz és Burg Katz egymástól?",
      ro: "Cât de departe este Mainz de Burg Katz?",
      en: "How far is Mainz from Burg Katz?",
    },
    targetPoiId: "city-mainz",
    targetPoiId2: "landmark-burg-katz",
    expectedKm: 41
  },
  {
    id: "de-rp-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-hambach",
      "hist-worms-dom",
      "hist-speyer",
      "city-trier",
      "industry-ludwigshafen"
    ],
    wrongPoiId: "city-trier"
  },
  {
    id: "de-rp-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "hist-speyer",
      "landmark-speyer-cathedral",
      "relief-rheintal",
      "landmark-burg-cochem"
    ],
    orderBy: "east_to_west"
  }
];
