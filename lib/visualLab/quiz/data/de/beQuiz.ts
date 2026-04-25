import type { QuizTask } from "../../types";

// Berlin (DE-BE) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const beQuiz: QuizTask[] = [
  {
    id: "de-be-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Berlin!",
      hu: "Kattints ide: Berlin!",
      ro: "Apas\u0103 pe Berlin!",
      en: "Click on Berlin!"
    },
    targetPoiId: "city-berlin"
  },
  {
    id: "de-be-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Berlin auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Berlin a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Berlin pe hart\u0103?",
      en: "Where is Berlin on the map?"
    },
    targetCountyId: "DE-BE"
  },
  {
    id: "de-be-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Brandenburger Tor!",
      hu: "Keresd meg: Brandenburger Tor!",
      ro: "G\u0103se\u0219te Brandenburger Tor!",
      en: "Find Brandenburger Tor!"
    },
    targetPoiId: "landmark-brandenburg-gate"
  },
  {
    id: "de-be-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Checkpoint Charlie nach Stasi-Museum?",
      hu: "Milyen messze van Checkpoint Charlie \u00e9s Stasi-Museum egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Checkpoint Charlie de Stasi-Museum?",
      en: "How far is it from Checkpoint Charlie to Stasi-Museum?"
    },
    targetPoiId: "hist-checkpoint-charlie",
    targetPoiId2: "hist-stasi-museum",
    expectedKm: 7
  },
  {
    id: "de-be-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Grunewald?",
      hu: "Hol tal\u00e1lhat\u00f3: Grunewald?",
      ro: "Unde se afl\u0103 Grunewald?",
      en: "Where is Grunewald located?"
    },
    targetPoiId: "landmark-brandenburg-gate"
  },
  {
    id: "de-be-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-ddr-museum",
      "hist-wannsee",
      "hist-checkpoint-charlie",
      "landmark-east-side-gallery",
      "landmark-east-side-gallery"
    ],
    wrongPoiId: "landmark-east-side-gallery"
  },
  {
    id: "de-be-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "zoo-berlin",
      "landmark-reichstag",
      "hist-november-revolution",
      "hist-ddr-museum"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-be-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Havel (Berlin) und East Side Gallery Berlin!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Havel (Berlin) \u00e9s East Side Gallery Berlin k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Havel (Berlin) \u0219i East Side Gallery Berlin!",
      en: "Guess the distance between Havel (Berlin) and East Side Gallery Berlin!"
    },
    targetPoiId: "hist-stasi-museum",
    targetPoiId2: "landmark-east-side-gallery",
    expectedKm: 5
  },
  {
    id: "de-be-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "landmark-museumsinsel-berlin",
      "city-berlin",
      "landmark-museumsinsel-berlin",
      "landmark-brandenburg-gate",
      "landmark-schloss-pfaueninsel"
    ],
    wrongPoiId: "city-berlin"
  },
  {
    id: "de-be-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "hist-checkpoint-charlie",
      "hist-berliner-mauer",
      "hist-olympiastadion-berlin",
      "landmark-schloss-pfaueninsel"
    ],
    orderBy: "east_to_west"
  }
];
