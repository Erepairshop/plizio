import type { QuizTask } from "../../types";

// Rheinland-Pfalz (DE-RP) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const rpQuiz: QuizTask[] = [
  {
    id: "de-rp-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Mainz!",
      hu: "Kattints ide: Mainz!",
      ro: "Apas\u0103 pe Mainz!",
      en: "Click on Mainz!"
    },
    targetPoiId: "city-mainz"
  },
  {
    id: "de-rp-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Rheinland-Pfalz auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Rheinland-Pfalz a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Rheinland-Pfalz pe hart\u0103?",
      en: "Where is Rheinland-Pfalz on the map?"
    },
    targetCountyId: "DE-RP"
  },
  {
    id: "de-rp-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Speyerer Dom!",
      hu: "Keresd meg: Speyerer Dom!",
      ro: "G\u0103se\u0219te Speyerer Dom!",
      en: "Find Speyerer Dom!"
    },
    targetPoiId: "landmark-speyer-cathedral"
  },
  {
    id: "de-rp-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Deutsches Eck nach Reichsburg Cochem?",
      hu: "Milyen messze van Deutsches Eck \u00e9s Reichsburg Cochem egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Deutsches Eck de Reichsburg Cochem?",
      en: "How far is it from Deutsches Eck to Reichsburg Cochem?"
    },
    targetPoiId: "landmark-deutsches-eck-extra",
    targetPoiId2: "landmark-burg-cochem",
    expectedKm: 40
  },
  {
    id: "de-rp-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Ludwigshafen (BASF \u2013 Chemie)?",
      hu: "Hol tal\u00e1lhat\u00f3: Ludwigshafen (BASF \u2013 Chemie)?",
      ro: "Unde se afl\u0103 Ludwigshafen (BASF \u2013 Chemie)?",
      en: "Where is Ludwigshafen (BASF \u2013 Chemie) located?"
    },
    targetPoiId: "industry-ludwigshafen"
  },
  {
    id: "de-rp-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-marksburg",
      "landmark-burg-rheinstein",
      "landmark-burg-cochem",
      "industry-ludwigshafen",
      "hist-schloss-stolzenfels"
    ],
    wrongPoiId: "industry-ludwigshafen"
  },
  {
    id: "de-rp-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "hist-burg-eltz",
      "relief-rheintal",
      "city-mainz",
      "hist-worms-dom"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-rp-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Mainz und Burg Katz!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Mainz \u00e9s Burg Katz k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Mainz \u0219i Burg Katz!",
      en: "Guess the distance between Mainz and Burg Katz!"
    },
    targetPoiId: "city-mainz",
    targetPoiId2: "landmark-burg-katz",
    expectedKm: 41
  },
  {
    id: "de-rp-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-hambach",
      "hist-worms-dom",
      "hist-speyer",
      "city-trier",
      "industry-ludwigshafen"
    ],
    wrongPoiId: "city-trier"
  },
  {
    id: "de-rp-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "hist-speyer",
      "landmark-speyer-cathedral",
      "relief-rheintal",
      "landmark-burg-cochem"
    ],
    orderBy: "east_to_west"
  }
];
