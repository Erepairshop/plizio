import type { QuizTask } from "../../types";

// Brandenburg (DE-BB) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const bbQuiz: QuizTask[] = [
  {
    id: "de-bb-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Potsdam!",
      hu: "Kattints ide: Potsdam!",
      ro: "Apas\u0103 pe Potsdam!",
      en: "Click on Potsdam!"
    },
    targetPoiId: "city-potsdam"
  },
  {
    id: "de-bb-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Brandenburg auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Brandenburg a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Brandenburg pe hart\u0103?",
      en: "Where is Brandenburg on the map?"
    },
    targetCountyId: "DE-BB"
  },
  {
    id: "de-bb-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Schloss Sanssouci!",
      hu: "Keresd meg: Schloss Sanssouci!",
      ro: "G\u0103se\u0219te Schloss Sanssouci!",
      en: "Find Schloss Sanssouci!"
    },
    targetPoiId: "landmark-sanssouci"
  },
  {
    id: "de-bb-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Glienicker Br\u00fccke nach Filmpark Babelsberg?",
      hu: "Milyen messze van Glienicker Br\u00fccke \u00e9s Filmpark Babelsberg egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Glienicker Br\u00fccke de Filmpark Babelsberg?",
      en: "How far is it from Glienicker Br\u00fccke to Filmpark Babelsberg?"
    },
    targetPoiId: "hist-glienicker-bruecke",
    targetPoiId2: "landmark-filmpark-babelsberg",
    expectedKm: 4
  },
  {
    id: "de-bb-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Spreewald?",
      hu: "Hol tal\u00e1lhat\u00f3: Spreewald?",
      ro: "Unde se afl\u0103 Spreewald?",
      en: "Where is Spreewald located?"
    },
    targetPoiId: "forest-spreewald"
  },
  {
    id: "de-bb-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "forest-spreewald",
      "landmark-sanssouci",
      "hist-glienicker-bruecke",
      "hist-cecilienhof-konferenz",
      "hist-cecilienhof"
    ],
    wrongPoiId: "landmark-sanssouci"
  },
  {
    id: "de-bb-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "nature-schwielowsee",
      "city-potsdam",
      "hist-cecilienhof"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-bb-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen Schloss Rheinsberg und Gedenkst\u00e4tte Sachsenhausen!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Schloss Rheinsberg \u00e9s Gedenkst\u00e4tte Sachsenhausen k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Schloss Rheinsberg \u0219i Gedenkst\u00e4tte Sachsenhausen!",
      en: "Guess the distance between Schloss Rheinsberg and Gedenkst\u00e4tte Sachsenhausen!"
    },
    targetPoiId: "hist-cecilienhof-konferenz",
    targetPoiId2: "hist-sachsenhausen",
    expectedKm: 44
  },
  {
    id: "de-bb-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-cecilienhof-konferenz",
      "hist-cecilienhof",
      "agri-spreewald-gurken",
      "landmark-sanssouci",
      "landmark-filmpark-babelsberg"
    ],
    wrongPoiId: "agri-spreewald-gurken"
  },
  {
    id: "de-bb-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "agri-spreewald-gurken",
      "landmark-filmpark-babelsberg",
      "hist-cecilienhof"
    ],
    orderBy: "east_to_west"
  }
];
