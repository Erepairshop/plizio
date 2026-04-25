import type { QuizTask } from "../../types";

// Hessen (DE-HE) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const heQuiz: QuizTask[] = [
  {
    id: "de-he-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Wiesbaden!",
      hu: "Kattints ide: Wiesbaden!",
      ro: "Apas\u0103 pe Wiesbaden!",
      en: "Click on Wiesbaden!"
    },
    targetPoiId: "city-wiesbaden"
  },
  {
    id: "de-he-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Hessen auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Hessen a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Hessen pe hart\u0103?",
      en: "Where is Hessen on the map?"
    },
    targetCountyId: "DE-HE"
  },
  {
    id: "de-he-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Frankfurter Paulskirche!",
      hu: "Keresd meg: Frankfurter Paulskirche!",
      ro: "G\u0103se\u0219te Frankfurter Paulskirche!",
      en: "Find Frankfurter Paulskirche!"
    },
    targetPoiId: "hist-paulskirche"
  },
  {
    id: "de-he-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Frankfurt am Main nach Gro\u00dfer Feldberg?",
      hu: "Milyen messze van Frankfurt am Main \u00e9s Gro\u00dfer Feldberg egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Frankfurt am Main de Gro\u00dfer Feldberg?",
      en: "How far is it from Frankfurt am Main to Gro\u00dfer Feldberg?"
    },
    targetPoiId: "city-frankfurt",
    targetPoiId2: "mnt-grosser-feldberg",
    expectedKm: 21
  },
  {
    id: "de-he-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Wasserkuppe?",
      hu: "Hol tal\u00e1lhat\u00f3: Wasserkuppe?",
      ro: "Unde se afl\u0103 Wasserkuppe?",
      en: "Where is Wasserkuppe located?"
    },
    targetPoiId: "mnt-wasserkuppe"
  },
  {
    id: "de-he-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
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
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
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
      de: "Wie weit ist es von Wiesbaden nach Frankfurt am Main?",
      hu: "Milyen messze van Wiesbaden Frankfurttól?",
      ro: "Cât de departe este Wiesbaden de Frankfurt am Main?",
      en: "How far is it from Wiesbaden to Frankfurt am Main?"
    },
    targetPoiId: "city-wiesbaden",
    targetPoiId2: "city-frankfurt",
    expectedKm: 32
  },
  {
    id: "de-he-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
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
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "hist-wilhelmshoehe",
      "landmark-burg-frankenstein",
      "city-wiesbaden"
    ],
    orderBy: "east_to_west"
  }
];
