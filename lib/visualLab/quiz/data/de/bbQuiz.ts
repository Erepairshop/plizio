import type { QuizTask } from "../../types";

// Brandenburg (DE-BB) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const bbQuiz: QuizTask[] = [
  {
    id: "de-bb-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Potsdam auf der Karte!",
      hu: "Kattints a térképen a következőre: Potsdam!",
      ro: "Apasă pe Potsdam pe hartă!",
      en: "Click on Potsdam on the map!",
    },
    targetPoiId: "city-potsdam"
  },
  {
    id: "de-bb-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Brandenburg!",
      hu: "Kattints a tartományra: Brandenburg!",
      ro: "Apasă pe landul Brandenburg!",
      en: "Click on the state of Brandenburg!",
    },
    targetCountyId: "DE-BB"
  },
  {
    id: "de-bb-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Schloss Sanssouci auf der Karte!",
      hu: "Kattints a térképen a következőre: Schloss Sanssouci!",
      ro: "Apasă pe Schloss Sanssouci pe hartă!",
      en: "Click on Schloss Sanssouci on the map!",
    },
    targetPoiId: "landmark-sanssouci"
  },
  {
    id: "de-bb-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Glienicker Brücke von Filmpark Babelsberg entfernt?",
      hu: "Milyen messze van Glienicker Brücke és Filmpark Babelsberg egymástól?",
      ro: "Cât de departe este Glienicker Brücke de Filmpark Babelsberg?",
      en: "How far is Glienicker Brücke from Filmpark Babelsberg?",
    },
    targetPoiId: "hist-glienicker-bruecke",
    targetPoiId2: "landmark-filmpark-babelsberg",
    expectedKm: 4
  },
  {
    id: "de-bb-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Spreewald auf der Karte!",
      hu: "Kattints a térképen a következőre: Spreewald!",
      ro: "Apasă pe Spreewald pe hartă!",
      en: "Click on Spreewald on the map!",
    },
    targetPoiId: "forest-spreewald"
  },
  {
    id: "de-bb-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "forest-spreewald",
      "nature-schwielowsee",
      "hist-glienicker-bruecke",
      "hist-cecilienhof-konferenz",
      "hist-cecilienhof"
    ],
    wrongPoiId: "nature-schwielowsee"
  },
  {
    id: "de-bb-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
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
      de: "Wie weit ist Schloss Rheinsberg von Gedenkstätte Sachsenhausen entfernt?",
      hu: "Milyen messze van Schloss Rheinsberg és Gedenkstätte Sachsenhausen egymástól?",
      ro: "Cât de departe este Schloss Rheinsberg de Gedenkstätte Sachsenhausen?",
      en: "How far is Schloss Rheinsberg from Gedenkstätte Sachsenhausen?",
    },
    targetPoiId: "hist-schloss-rheinsberg-extra",
    targetPoiId2: "hist-sachsenhausen",
    expectedKm: 44
  },
  {
    id: "de-bb-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "city-potsdam",
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
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "agri-spreewald-gurken",
      "landmark-filmpark-babelsberg",
      "hist-cecilienhof"
    ],
    orderBy: "east_to_west"
  }
];
