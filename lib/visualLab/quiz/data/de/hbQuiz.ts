import type { QuizTask } from "../../types";

// Bremen (DE-HB) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const hbQuiz: QuizTask[] = [
  {
    id: "de-hb-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Bremen!",
      hu: "Kattints ide: Bremen!",
      ro: "Apas\u0103 pe Bremen!",
      en: "Click on Bremen!"
    },
    targetPoiId: "city-bremen"
  },
  {
    id: "de-hb-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Bremen auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Bremen a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Bremen pe hart\u0103?",
      en: "Where is Bremen on the map?"
    },
    targetCountyId: "DE-HB"
  },
  {
    id: "de-hb-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Bremer Roland & Rathaus!",
      hu: "Keresd meg: Bremer Roland & Rathaus!",
      ro: "G\u0103se\u0219te Bremer Roland & Rathaus!",
      en: "Find Bremer Roland & Rathaus!"
    },
    targetPoiId: "hist-bremer-roland"
  },
  {
    id: "de-hb-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von der Bremer Altstadt nach Bremerhaven?",
      hu: "Milyen messze van a brémai óváros és Bremerhaven egymástól?",
      ro: "Cât de departe este orașul vechi din Bremen de Bremerhaven?",
      en: "How far is it from Bremen Old Town to Bremerhaven?"
    },
    targetPoiId: "city-bremen",
    targetPoiId2: "port-bremerhaven",
    expectedKm: 53
  },
  {
    id: "de-hb-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Weser (Bremen)?",
      hu: "Hol tal\u00e1lhat\u00f3: Weser (Bremen)?",
      ro: "Unde se afl\u0103 Weser (Bremen)?",
      en: "Where is Weser (Bremen) located?"
    },
    targetPoiId: "river-weser-hafen-hb"
  },
  {
    id: "de-hb-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
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
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
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
      de: "Sch\u00e4tze die Entfernung zwischen Weser & Bremer Hafen und Schnoorviertel!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Weser & Bremer Hafen \u00e9s Schnoorviertel k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Weser & Bremer Hafen \u0219i Schnoorviertel!",
      en: "Guess the distance between Weser & Bremer Hafen and Schnoorviertel!"
    },
    targetPoiId: "river-weser-hafen-hb",
    targetPoiId2: "hist-schnoorviertel",
    expectedKm: 1
  },
  {
    id: "de-hb-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
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
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "landmark-stadtmusikanten",
      "city-bremen",
      "hist-auswandererhaus"
    ],
    orderBy: "east_to_west"
  }
];
