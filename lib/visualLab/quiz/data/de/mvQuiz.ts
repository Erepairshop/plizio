import type { QuizTask } from "../../types";

// Mecklenburg-Vorpommern (DE-MV) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const mvQuiz: QuizTask[] = [
  {
    id: "de-mv-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Schwerin!",
      hu: "Kattints ide: Schwerin!",
      ro: "Apas\u0103 pe Schwerin!",
      en: "Click on Schwerin!"
    },
    targetPoiId: "city-schwerin"
  },
  {
    id: "de-mv-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Mecklenburg-Vorpommern auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Mecklenburg-Vorpommern a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Mecklenburg-Vorpommern pe hart\u0103?",
      en: "Where is Mecklenburg-Vorpommern on the map?"
    },
    targetCountyId: "DE-MV"
  },
  {
    id: "de-mv-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Schweriner Schloss!",
      hu: "Keresd meg: Schweriner Schloss!",
      ro: "G\u0103se\u0219te Schweriner Schloss!",
      en: "Find Schweriner Schloss!"
    },
    targetPoiId: "landmark-schwerin-castle"
  },
  {
    id: "de-mv-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es vom Schweriner See nach Stralsund?",
      hu: "Milyen messze van a Schweriner See és Stralsund egymástól?",
      ro: "Cât de departe este Schweriner See de Stralsund?",
      en: "How far is it from Schweriner See to Stralsund?"
    },
    targetPoiId: "lake-schweriner-see",
    targetPoiId2: "hist-stralsund-hansestadt",
    expectedKm: 133
  },
  {
    id: "de-mv-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich M\u00fcritz?",
      hu: "Hol tal\u00e1lhat\u00f3: M\u00fcritz?",
      ro: "Unde se afl\u0103 M\u00fcritz?",
      en: "Where is M\u00fcritz located?"
    },
    targetPoiId: "lake-mueritz"
  },
  {
    id: "de-mv-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort gehört zu einer anderen Kategorie?",
      hu: "Keresd a hibát: Melyik hely tartozik más kategóriába?",
      ro: "Găsește greșeala: Care loc aparține unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "port-rostock",
      "city-schwerin",
      "city-wismar",
      "hist-stralsund-hansestadt",
      "hist-peenemuende"
    ],
    wrongPoiId: "port-rostock"
  },
  {
    id: "de-mv-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "city-rostock",
      "island-ruegen",
      "hist-peenemuende",
      "island-usedom"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-mv-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Schweriner See und Peenem\u00fcnde!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Schweriner See \u00e9s Peenem\u00fcnde k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Schweriner See \u0219i Peenem\u00fcnde!",
      en: "Guess the distance between Schweriner See and Peenem\u00fcnde!"
    },
    targetPoiId: "lake-schweriner-see",
    targetPoiId2: "hist-peenemuende",
    expectedKm: 162
  },
  {
    id: "de-mv-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a többihez?",
      ro: "Ce nu se potrivește cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-stralsund-hansestadt",
      "city-rostock",
      "city-greifswald",
      "city-schwerin",
      "island-usedom"
    ],
    wrongPoiId: "island-usedom"
  },
  {
    id: "de-mv-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "hist-stralsund-hansestadt",
      "lake-mueritz",
      "port-rostock",
      "hist-wismar-hansestadt"
    ],
    orderBy: "east_to_west"
  }
];
