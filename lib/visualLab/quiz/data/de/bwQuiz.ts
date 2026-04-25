import type { QuizTask } from "../../types";

// Baden-Württemberg (DE-BW) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const bwQuiz: QuizTask[] = [
  {
    id: "de-bw-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Stuttgart auf der Karte!",
      hu: "Kattints a térképen a következőre: Stuttgart!",
      ro: "Apasă pe Stuttgart pe hartă!",
      en: "Click on Stuttgart on the map!",
    },
    targetPoiId: "city-stuttgart"
  },
  {
    id: "de-bw-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Baden-Württemberg!",
      hu: "Kattints a tartományra: Baden-Württemberg!",
      ro: "Apasă pe landul Baden-Württemberg!",
      en: "Click on the state of Baden-Württemberg!",
    },
    targetCountyId: "DE-BW"
  },
  {
    id: "de-bw-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Heidelberger Schloss auf der Karte!",
      hu: "Kattints a térképen a következőre: Heidelberger Schloss!",
      ro: "Apasă pe Heidelberger Schloss pe hartă!",
      en: "Click on Heidelberger Schloss on the map!",
    },
    targetPoiId: "landmark-heidelberg-castle"
  },
  {
    id: "de-bw-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Schloss Sigmaringen von Feldberg (Schwarzwald) entfernt?",
      hu: "Milyen messze van Schloss Sigmaringen és Feldberg (Schwarzwald) egymástól?",
      ro: "Cât de departe este Schloss Sigmaringen de Feldberg (Schwarzwald)?",
      en: "How far is Schloss Sigmaringen from Feldberg (Schwarzwald)?",
    },
    targetPoiId: "hist-schloss-sigmaringen",
    targetPoiId2: "mnt-feldberg",
    expectedKm: 93
  },
  {
    id: "de-bw-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Feldberg (Schwarzwald) auf der Karte!",
      hu: "Kattints a térképen a következőre: Feldberg (Schwarzwald)!",
      ro: "Apasă pe Feldberg (Schwarzwald) pe hartă!",
      en: "Click on Feldberg (Schwarzwald) on the map!",
    },
    targetPoiId: "mnt-feldberg"
  },
  {
    id: "de-bw-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "city-heidelberg",
      "landmark-schloss-ludwigsburg",
      "landmark-mercedes-benz-museum",
      "kid-landmark-ravensburger-spieleland",
      "landmark-donauversickerung"
    ],
    wrongPoiId: "kid-landmark-ravensburger-spieleland"
  },
  {
    id: "de-bw-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "mnt-feldberg",
      "landmark-triberger-wasserfaelle",
      "forest-schwarzwald",
      "industry-stuttgart"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-bw-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Insel Mainau von Nordschwarzwald entfernt?",
      hu: "Milyen messze van Insel Mainau és Nordschwarzwald egymástól?",
      ro: "Cât de departe este Insel Mainau de Nordschwarzwald?",
      en: "How far is Insel Mainau from Nordschwarzwald?",
    },
    targetPoiId: "island-mainau",
    targetPoiId2: "forest-schwarzwald-nord-extra",
    expectedKm: 135
  },
  {
    id: "de-bw-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-burg-hohenzollern",
      "landmark-schloss-lichtenstein",
      "hist-schloss-sigmaringen",
      "landmark-heidelberg-castle",
      "city-stuttgart"
    ],
    wrongPoiId: "city-stuttgart"
  },
  {
    id: "de-bw-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "landmark-schloss-lichtenstein",
      "hist-schloss-sigmaringen",
      "island-mainau",
      "kidlm-europapark-rust"
    ],
    orderBy: "east_to_west"
  }
];
