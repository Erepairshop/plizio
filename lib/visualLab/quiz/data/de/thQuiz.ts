import type { QuizTask } from "../../types";

// Thüringen (DE-TH) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const thQuiz: QuizTask[] = [
  {
    id: "de-th-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Erfurt!",
      hu: "Kattints ide: Erfurt!",
      ro: "Apas\u0103 pe Erfurt!",
      en: "Click on Erfurt!"
    },
    targetPoiId: "city-erfurt"
  },
  {
    id: "de-th-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Th\u00fcringen auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Th\u00fcringen a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Th\u00fcringen pe hart\u0103?",
      en: "Where is Th\u00fcringen on the map?"
    },
    targetCountyId: "DE-TH"
  },
  {
    id: "de-th-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Wartburg!",
      hu: "Keresd meg: Wartburg!",
      ro: "G\u0103se\u0219te Wartburg!",
      en: "Find Wartburg!"
    },
    targetPoiId: "landmark-wartburg"
  },
  {
    id: "de-th-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Weimar nach Kr\u00e4merbr\u00fccke Erfurt?",
      hu: "Milyen messze van Weimar \u00e9s Kr\u00e4merbr\u00fccke Erfurt egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Weimar de Kr\u00e4merbr\u00fccke Erfurt?",
      en: "How far is it from Weimar to Kr\u00e4merbr\u00fccke Erfurt?"
    },
    targetPoiId: "hist-weimar",
    targetPoiId2: "landmark-wartburg",
    expectedKm: 72
  },
  {
    id: "de-th-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Gro\u00dfer Beerberg?",
      hu: "Hol tal\u00e1lhat\u00f3: Gro\u00dfer Beerberg?",
      ro: "Unde se afl\u0103 Gro\u00dfer Beerberg?",
      en: "Where is Gro\u00dfer Beerberg located?"
    },
    targetPoiId: "hist-weimar"
  },
  {
    id: "de-th-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-erfurter-dom",
      "landmark-wartburg",
      "hist-erfurter-dom",
      "city-gera",
      "hist-buchenwald"
    ],
    wrongPoiId: "city-gera"
  },
  {
    id: "de-th-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
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
      de: "Sch\u00e4tze die Entfernung zwischen Jena und Erfurter Dom & Severikirche!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Jena \u00e9s Erfurter Dom & Severikirche k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Jena \u0219i Erfurter Dom & Severikirche!",
      en: "Guess the distance between Jena and Erfurter Dom & Severikirche!"
    },
    targetPoiId: "city-jena",
    targetPoiId2: "hist-erfurter-dom",
    expectedKm: 40
  },
  {
    id: "de-th-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
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
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "landmark-saalfelder-feengrotten",
      "hist-erfurter-dom",
      "hist-wartburg",
      "hist-wartburg"
    ],
    orderBy: "east_to_west"
  }
];
