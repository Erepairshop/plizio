import type { QuizTask } from "../../types";

// Berlin (DE-BE) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const beQuiz: QuizTask[] = [
  {
    id: "de-be-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Berlin auf der Karte!",
      hu: "Kattints a térképen a következőre: Berlin!",
      ro: "Apasă pe Berlin pe hartă!",
      en: "Click on Berlin on the map!",
    },
    targetPoiId: "city-berlin"
  },
  {
    id: "de-be-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Berlin!",
      hu: "Kattints a tartományra: Berlin!",
      ro: "Apasă pe landul Berlin!",
      en: "Click on the state of Berlin!",
    },
    targetCountyId: "DE-BE"
  },
  {
    id: "de-be-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Brandenburger Tor auf der Karte!",
      hu: "Kattints a térképen a következőre: Brandenburger Tor!",
      ro: "Apasă pe Brandenburger Tor pe hartă!",
      en: "Click on Brandenburger Tor on the map!",
    },
    targetPoiId: "landmark-brandenburg-gate"
  },
  {
    id: "de-be-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Checkpoint Charlie von Stasi-Museum entfernt?",
      hu: "Milyen messze van Checkpoint Charlie és Stasi-Museum egymástól?",
      ro: "Cât de departe este Checkpoint Charlie de Stasi-Museum?",
      en: "How far is Checkpoint Charlie from Stasi-Museum?",
    },
    targetPoiId: "hist-checkpoint-charlie",
    targetPoiId2: "hist-stasi-museum",
    expectedKm: 7
  },
  {
    id: "de-be-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Grunewald auf der Karte!",
      hu: "Kattints a térképen a következőre: Grunewald!",
      ro: "Apasă pe Grunewald pe hartă!",
      en: "Click on Grunewald on the map!",
    },
    targetPoiId: "forest-grunewald-extra"
  },
  {
    id: "de-be-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-ddr-museum",
      "hist-wannsee",
      "hist-checkpoint-charlie",
      "landmark-east-side-gallery",
      "landmark-brandenburg-gate"
    ],
    wrongPoiId: "hist-wannsee"
  },
  {
    id: "de-be-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "zoo-berlin",
      "landmark-reichstag",
      "hist-berliner-mauer",
      "hist-ddr-museum"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-be-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Stasi-Museum von East Side Gallery Berlin entfernt?",
      hu: "Milyen messze van Stasi-Museum és East Side Gallery Berlin egymástól?",
      ro: "Cât de departe este Stasi-Museum de East Side Gallery Berlin?",
      en: "How far is Stasi-Museum from East Side Gallery Berlin?",
    },
    targetPoiId: "hist-stasi-museum",
    targetPoiId2: "landmark-east-side-gallery",
    expectedKm: 5
  },
  {
    id: "de-be-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "landmark-museumsinsel-berlin",
      "city-berlin",
      "landmark-brandenburg-gate",
      "city-berlin",
      "landmark-schloss-pfaueninsel"
    ],
    wrongPoiId: "city-berlin"
  },
  {
    id: "de-be-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "hist-checkpoint-charlie",
      "hist-berliner-mauer",
      "hist-olympiastadion-berlin",
      "landmark-schloss-pfaueninsel"
    ],
    orderBy: "east_to_west"
  }
];
