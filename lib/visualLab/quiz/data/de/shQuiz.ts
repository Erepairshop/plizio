import type { QuizTask } from "../../types";

// Schleswig-Holstein (DE-SH) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const shQuiz: QuizTask[] = [
  {
    id: "de-sh-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Kiel!",
      hu: "Kattints ide: Kiel!",
      ro: "Apas\u0103 pe Kiel!",
      en: "Click on Kiel!"
    },
    targetPoiId: "city-kiel"
  },
  {
    id: "de-sh-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Schleswig-Holstein auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Schleswig-Holstein a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Schleswig-Holstein pe hart\u0103?",
      en: "Where is Schleswig-Holstein on the map?"
    },
    targetCountyId: "DE-SH"
  },
  {
    id: "de-sh-easy-3",
    type: "click_poi",
    question: {
      de: "Finde L\u00fcbeck!",
      hu: "Keresd meg: L\u00fcbeck!",
      ro: "G\u0103se\u0219te L\u00fcbeck!",
      en: "Find L\u00fcbeck!"
    },
    targetPoiId: "hist-luebeck"
  },
  {
    id: "de-sh-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Nord-Ostsee-Kanal nach L\u00fcbeck?",
      hu: "Milyen messze van Nord-Ostsee-Kanal \u00e9s L\u00fcbeck egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Nord-Ostsee-Kanal de L\u00fcbeck?",
      en: "How far is it from Nord-Ostsee-Kanal to L\u00fcbeck?"
    },
    targetPoiId: "landmark-flensburger-foerde",
    targetPoiId2: "city-kiel",
    expectedKm: 71
  },
  {
    id: "de-sh-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Wattenmeer \u2013 Seehunde?",
      hu: "Hol tal\u00e1lhat\u00f3: Wattenmeer \u2013 Seehunde?",
      ro: "Unde se afl\u0103 Wattenmeer \u2013 Seehunde?",
      en: "Where is Wattenmeer \u2013 Seehunde located?"
    },
    targetPoiId: "animal-wattenmeer-seehunde"
  },
  {
    id: "de-sh-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-kiel-matrosenaufstand",
      "hist-luebeck",
      "island-fehmarn",
      "hist-skagerrakschlacht",
      "hist-nord-ostsee-kanal"
    ],
    wrongPoiId: "island-fehmarn"
  },
  {
    id: "de-sh-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "hist-kiel-matrosenaufstand",
      "hist-skagerrakschlacht",
      "city-luebeck",
      "kidlm-hansa-park"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-sh-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Nordertor Flensburg und Eider!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Nordertor Flensburg \u00e9s Eider k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Nordertor Flensburg \u0219i Eider!",
      en: "Guess the distance between Nordertor Flensburg and Eider!"
    },
    targetPoiId: "city-luebeck",
    targetPoiId2: "island-sylt",
    expectedKm: 191
  },
  {
    id: "de-sh-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "city-luebeck",
      "island-fehmarn",
      "island-helgoland",
      "island-sylt",
      "city-luebeck"
    ],
    wrongPoiId: "city-luebeck"
  },
  {
    id: "de-sh-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "city-luebeck",
      "hist-luebeck",
      "hist-skagerrakschlacht"
    ],
    orderBy: "east_to_west"
  }
];
