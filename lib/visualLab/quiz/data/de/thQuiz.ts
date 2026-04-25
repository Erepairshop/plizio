import type { QuizTask } from "../../types";

// Thüringen (DE-TH) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const thQuiz: QuizTask[] = [
  {
    id: "de-th-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Erfurt auf der Karte!",
      hu: "Kattints a térképen a következőre: Erfurt!",
      ro: "Apasă pe Erfurt pe hartă!",
      en: "Click on Erfurt on the map!",
    },
    targetPoiId: "city-erfurt"
  },
  {
    id: "de-th-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Thüringen!",
      hu: "Kattints a tartományra: Thüringen!",
      ro: "Apasă pe landul Thüringen!",
      en: "Click on the state of Thüringen!",
    },
    targetCountyId: "DE-TH"
  },
  {
    id: "de-th-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Wartburg auf der Karte!",
      hu: "Kattints a térképen a következőre: Wartburg!",
      ro: "Apasă pe Wartburg pe hartă!",
      en: "Click on Wartburg on the map!",
    },
    targetPoiId: "landmark-wartburg"
  },
  {
    id: "de-th-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Weimar von Wartburg entfernt?",
      hu: "Milyen messze van Weimar és Wartburg egymástól?",
      ro: "Cât de departe este Weimar de Wartburg?",
      en: "How far is Weimar from Wartburg?",
    },
    targetPoiId: "hist-weimar",
    targetPoiId2: "landmark-wartburg",
    expectedKm: 72
  },
  {
    id: "de-th-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Großer Beerberg auf der Karte!",
      hu: "Kattints a térképen a következőre: Großer Beerberg!",
      ro: "Apasă pe Großer Beerberg pe hartă!",
      en: "Click on Großer Beerberg on the map!",
    },
    targetPoiId: "mountain-grosser-beerberg-extra"
  },
  {
    id: "de-th-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-erfurter-dom",
      "landmark-wartburg",
      "hist-weimar",
      "city-gera",
      "hist-buchenwald"
    ],
    wrongPoiId: "city-gera"
  },
  {
    id: "de-th-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "landmark-wartburg",
      "hist-kyffhaeuser-denkmal",
      "hist-weimar",
      "city-gera"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-th-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Jena von Erfurter Dom & Severikirche entfernt?",
      hu: "Milyen messze van Jena és Erfurter Dom & Severikirche egymástól?",
      ro: "Cât de departe este Jena de Erfurter Dom & Severikirche?",
      en: "How far is Jena from Erfurter Dom & Severikirche?",
    },
    targetPoiId: "city-jena",
    targetPoiId2: "hist-erfurter-dom",
    expectedKm: 40
  },
  {
    id: "de-th-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "city-erfurt",
      "hist-erfurter-dom",
      "landmark-wartburg",
      "hist-buchenwald",
      "hist-mittelbau-dora"
    ],
    wrongPoiId: "landmark-wartburg"
  },
  {
    id: "de-th-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "city-gera",
      "hist-erfurter-dom",
      "hist-wartburg"
    ],
    orderBy: "east_to_west"
  }
];
