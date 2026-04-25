import type { QuizTask } from "../../types";

// Saarland (DE-SL) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const slQuiz: QuizTask[] = [
  {
    id: "de-sl-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Saarbr\u00fccken!",
      hu: "Kattints ide: Saarbr\u00fccken!",
      ro: "Apas\u0103 pe Saarbr\u00fccken!",
      en: "Click on Saarbr\u00fccken!"
    },
    targetPoiId: "city-saarbruecken"
  },
  {
    id: "de-sl-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Saarland auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Saarland a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Saarland pe hart\u0103?",
      en: "Where is Saarland on the map?"
    },
    targetCountyId: "DE-SL"
  },
  {
    id: "de-sl-easy-3",
    type: "click_poi",
    question: {
      de: "Finde V\u00f6lklinger H\u00fctte!",
      hu: "Keresd meg: V\u00f6lklinger H\u00fctte!",
      ro: "G\u0103se\u0219te V\u00f6lklinger H\u00fctte!",
      en: "Find V\u00f6lklinger H\u00fctte!"
    },
    targetPoiId: "landmark-voelklinger-huette"
  },
  {
    id: "de-sl-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von der Völklinger Hütte nach Saarbrücken?",
      hu: "Milyen messze van a Völklinger Hütte és Saarbrücken egymástól?",
      ro: "Cât de departe este Völklinger Hütte de Saarbrücken?",
      en: "How far is it from Völklinger Hütte to Saarbrücken?"
    },
    targetPoiId: "landmark-voelklinger-huette",
    targetPoiId2: "city-saarbruecken",
    expectedKm: 11
  },
  {
    id: "de-sl-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Bostalsee?",
      hu: "Hol található: Bostalsee?",
      ro: "Unde se află Bostalsee?",
      en: "Where is Bostalsee located?"
    },
    targetPoiId: "nature-bostalsee"
  },
  {
    id: "de-sl-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort gehört zu einer anderen Kategorie?",
      hu: "Keresd a hibát: Melyik hely tartozik más kategóriába?",
      ro: "Găsește greșeala: Care loc aparține unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
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
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatról keletre!",
      ro: "Ordonează aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
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
      de: "Schätze die Entfernung zwischen Bostalsee und Homburg (Saar)!",
      hu: "Tippeld meg a távolságot a Bostalsee és Homburg (Saar) között!",
      ro: "Estimează distanța dintre Bostalsee și Homburg (Saar)!",
      en: "Guess the distance between Bostalsee and Homburg (Saar)!"
    },
    targetPoiId: "nature-bostalsee",
    targetPoiId2: "city-homburg-saar",
    expectedKm: 33
  },
  {
    id: "de-sl-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a többihez?",
      ro: "Ce nu se potrivește cu celelalte?",
      en: "What does not fit with the others?"
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
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "city-saarlouis",
      "landmark-saarschleife"
    ],
    orderBy: "east_to_west"
  }
];
