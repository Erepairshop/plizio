import type { QuizTask } from "../../types";

// Sachsen-Anhalt (DE-ST) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const stQuiz: QuizTask[] = [
  {
    id: "de-st-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Magdeburg!",
      hu: "Kattints ide: Magdeburg!",
      ro: "Apas\u0103 pe Magdeburg!",
      en: "Click on Magdeburg!"
    },
    targetPoiId: "city-magdeburg"
  },
  {
    id: "de-st-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Sachsen-Anhalt auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Sachsen-Anhalt a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Sachsen-Anhalt pe hart\u0103?",
      en: "Where is Sachsen-Anhalt on the map?"
    },
    targetCountyId: "DE-ST"
  },
  {
    id: "de-st-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Schlosskirche Wittenberg!",
      hu: "Keresd meg: Schlosskirche Wittenberg!",
      ro: "G\u0103se\u0219te Schlosskirche Wittenberg!",
      en: "Find Schlosskirche Wittenberg!"
    },
    targetPoiId: "hist-wittenberg-schlosskirche"
  },
  {
    id: "de-st-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Saale (Sachsen-Anhalt) nach Bauhaus Dessau?",
      hu: "Milyen messze van Saale (Sachsen-Anhalt) \u00e9s Bauhaus Dessau egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Saale (Sachsen-Anhalt) de Bauhaus Dessau?",
      en: "How far is it from Saale (Sachsen-Anhalt) to Bauhaus Dessau?"
    },
    targetPoiId: "landmark-teufelsmauer",
    targetPoiId2: "hist-eisleben",
    expectedKm: 42
  },
  {
    id: "de-st-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Brocken?",
      hu: "Hol tal\u00e1lhat\u00f3: Brocken?",
      ro: "Unde se afl\u0103 Brocken?",
      en: "Where is Brocken located?"
    },
    targetPoiId: "mnt-brocken"
  },
  {
    id: "de-st-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "city-magdeburg",
      "hist-bauhaus-dessau",
      "hist-bauhaus-dessau",
      "hist-quedlinburg",
      "hist-bauhaus-dessau"
    ],
    wrongPoiId: "city-magdeburg"
  },
  {
    id: "de-st-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "landmark-teufelsmauer",
      "landmark-teufelsmauer",
      "city-halle-saale",
      "hist-bauhaus-dessau"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-st-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Quedlinburg und Dessau-Ro\u00dflau!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Quedlinburg \u00e9s Dessau-Ro\u00dflau k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Quedlinburg \u0219i Dessau-Ro\u00dflau!",
      en: "Guess the distance between Quedlinburg and Dessau-Ro\u00dflau!"
    },
    targetPoiId: "forest-harz",
    targetPoiId2: "city-magdeburg",
    expectedKm: 80
  },
  {
    id: "de-st-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "landmark-teufelsmauer",
      "hist-wittenberg-schlosskirche",
      "city-magdeburg",
      "landmark-teufelsmauer",
      "city-halle-saale"
    ],
    wrongPoiId: "city-halle-saale"
  },
  {
    id: "de-st-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "city-halle-saale",
      "landmark-teufelsmauer",
      "mnt-brocken"
    ],
    orderBy: "east_to_west"
  }
];
