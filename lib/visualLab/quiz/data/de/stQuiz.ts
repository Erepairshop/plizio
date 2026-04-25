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
      de: "Wie weit ist es von der Teufelsmauer nach Lutherstadt Eisleben?",
      hu: "Milyen messze van a Teufelsmauer és Lutherstadt Eisleben egymástól?",
      ro: "Cât de departe este Teufelsmauer de Lutherstadt Eisleben?",
      en: "How far is it from Teufelsmauer to Lutherstadt Eisleben?"
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
      hu: "Hol található: Brocken?",
      ro: "Unde se află Brocken?",
      en: "Where is Brocken located?"
    },
    targetPoiId: "mnt-brocken"
  },
  {
    id: "de-st-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort gehört zu einer anderen Kategorie?",
      hu: "Keresd a hibát: Melyik hely tartozik más kategóriába?",
      ro: "Găsește greșeala: Care loc aparține unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "city-magdeburg",
      "hist-bauhaus-dessau",
      "hist-wittenberg-schlosskirche",
      "hist-quedlinburg",
      "hist-eisleben"
    ],
    wrongPoiId: "city-magdeburg"
  },
  {
    id: "de-st-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatról keletre!",
      ro: "Ordonează aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "landmark-teufelsmauer",
      "city-magdeburg",
      "city-halle-saale",
      "hist-bauhaus-dessau"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-st-hard-2",
    type: "distance_guess",
    question: {
      de: "Schätze die Entfernung zwischen Nationalpark Harz und Magdeburg!",
      hu: "Tippeld meg a távolságot a Harz Nemzeti Park és Magdeburg között!",
      ro: "Estimează distanța dintre Parcul Național Harz și Magdeburg!",
      en: "Guess the distance between Harz National Park and Magdeburg!"
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
      hu: "Mi nem illik a többihez?",
      ro: "Ce nu se potrivește cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "landmark-teufelsmauer",
      "hist-wittenberg-schlosskirche",
      "city-magdeburg",
      "mnt-brocken",
      "city-halle-saale"
    ],
    wrongPoiId: "hist-wittenberg-schlosskirche"
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
