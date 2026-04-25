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
      hu: "Hol található: Grunewald?",
      ro: "Unde se află Grunewald?",
      en: "Where is Grunewald located?"
    },
    targetPoiId: "forest-grunewald-extra"
  },
  {
    id: "de-be-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort gehört zu einer anderen Kategorie?",
      hu: "Keresd a hibát: Melyik hely tartozik más kategóriába?",
      ro: "Găsește greșeala: Care loc aparține unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-ddr-museum",
      "hist-wannsee",
      "hist-checkpoint-charlie",
      "landmark-east-side-gallery",
      "landmark-brandenburg-gate"
    ],
    wrongPoiId: "hist-wannsee"
  },
  {
    id: "de-be-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatról keletre!",
      ro: "Ordonează aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "zoo-berlin",
      "landmark-reichstag",
      "hist-berliner-mauer",
      "hist-ddr-museum"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-be-hard-2",
    type: "distance_guess",
    question: {
      de: "Schätze die Entfernung zwischen Stasi-Museum und East Side Gallery!",
      hu: "Tippeld meg a távolságot a Stasi-Museum és az East Side Gallery között!",
      ro: "Estimează distanța dintre Stasi-Museum și East Side Gallery!",
      en: "Guess the distance between Stasi-Museum and East Side Gallery!"
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
      hu: "Mi nem illik a többihez?",
      ro: "Ce nu se potrivește cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "landmark-museumsinsel-berlin",
      "city-berlin",
      "landmark-brandenburg-gate",
      "landmark-tv-tower",
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
