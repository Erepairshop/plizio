import type { QuizTask } from "../../types";

// Niedersachsen (DE-NI) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const niQuiz: QuizTask[] = [
  {
    id: "de-ni-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Hannover!",
      hu: "Kattints ide: Hannover!",
      ro: "Apas\u0103 pe Hannover!",
      en: "Click on Hannover!"
    },
    targetPoiId: "city-hannover"
  },
  {
    id: "de-ni-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Niedersachsen auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Niedersachsen a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Niedersachsen pe hart\u0103?",
      en: "Where is Niedersachsen on the map?"
    },
    targetCountyId: "DE-NI"
  },
  {
    id: "de-ni-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Wolfenb\u00fcttel!",
      hu: "Keresd meg: Wolfenb\u00fcttel!",
      ro: "G\u0103se\u0219te Wolfenb\u00fcttel!",
      en: "Find Wolfenb\u00fcttel!"
    },
    targetPoiId: "hist-wolfenbuettel"
  },
  {
    id: "de-ni-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Celle nach L\u00fcneburger Heide?",
      hu: "Milyen messze van Celle \u00e9s L\u00fcneburger Heide egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Celle de L\u00fcneburger Heide?",
      en: "How far is it from Celle to L\u00fcneburger Heide?"
    },
    targetPoiId: "relief-lueneburger-heide",
    targetPoiId2: "forest-lueneburger-heide",
    expectedKm: 11
  },
  {
    id: "de-ni-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich L\u00fcneburger Heide?",
      hu: "Hol tal\u00e1lhat\u00f3: L\u00fcneburger Heide?",
      ro: "Unde se afl\u0103 L\u00fcneburger Heide?",
      en: "Where is L\u00fcneburger Heide located?"
    },
    targetPoiId: "forest-lueneburger-heide"
  },
  {
    id: "de-ni-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "industry-wolfsburg",
      "city-braunschweig",
      "city-osnabrueck",
      "city-goettingen",
      "city-braunschweig"
    ],
    wrongPoiId: "city-braunschweig"
  },
  {
    id: "de-ni-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "city-hannover",
      "mountain-wilseder-berg",
      "forest-lueneburger-heide",
      "relief-lueneburger-heide"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-ni-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Osnabr\u00fcck und Goslar!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Osnabr\u00fcck \u00e9s Goslar k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Osnabr\u00fcck \u0219i Goslar!",
      en: "Guess the distance between Osnabr\u00fcck and Goslar!"
    },
    targetPoiId: "kidlm-heide-park-soltau",
    targetPoiId2: "industry-wolfsburg",
    expectedKm: 91
  },
  {
    id: "de-ni-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-bergen-belsen",
      "hist-wolfenbuettel",
      "city-braunschweig",
      "industry-wolfsburg",
      "forest-lueneburger-heide"
    ],
    wrongPoiId: "forest-lueneburger-heide"
  },
  {
    id: "de-ni-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "hist-wolfenbuettel",
      "hist-goslar-kaiserpfalz",
      "city-goettingen",
      "city-hannover"
    ],
    orderBy: "east_to_west"
  }
];
