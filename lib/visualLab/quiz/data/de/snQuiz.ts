import type { QuizTask } from "../../types";

// Sachsen (DE-SN) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const snQuiz: QuizTask[] = [
  {
    id: "de-sn-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Dresden auf der Karte!",
      hu: "Kattints a térképen a következőre: Dresden!",
      ro: "Apasă pe Dresden pe hartă!",
      en: "Click on Dresden on the map!",
    },
    targetPoiId: "city-dresden"
  },
  {
    id: "de-sn-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Sachsen!",
      hu: "Kattints a tartományra: Sachsen!",
      ro: "Apasă pe landul Sachsen!",
      en: "Click on the state of Sachsen!",
    },
    targetCountyId: "DE-SN"
  },
  {
    id: "de-sn-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Zwinger auf der Karte!",
      hu: "Kattints a térképen a következőre: Zwinger!",
      ro: "Apasă pe Zwinger pe hartă!",
      en: "Click on Zwinger on the map!",
    },
    targetPoiId: "landmark-zwinger"
  },
  {
    id: "de-sn-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Meißen (Porzellan) von Freiberg entfernt?",
      hu: "Milyen messze van Meißen (Porzellan) és Freiberg egymástól?",
      ro: "Cât de departe este Meißen (Porzellan) de Freiberg?",
      en: "How far is Meißen (Porzellan) from Freiberg?",
    },
    targetPoiId: "city-meissen",
    targetPoiId2: "city-freiberg-sachsen-extra",
    expectedKm: 29
  },
  {
    id: "de-sn-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Fichtelberg auf der Karte!",
      hu: "Kattints a térképen a következőre: Fichtelberg!",
      ro: "Apasă pe Fichtelberg pe hartă!",
      en: "Click on Fichtelberg on the map!",
    },
    targetPoiId: "mnt-fichtelberg"
  },
  {
    id: "de-sn-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "city-goerlitz",
      "city-leipzig",
      "city-chemnitz-extra",
      "mnt-bastei-saechsische-schweiz",
      "kid-landmark-belantis"
    ],
    wrongPoiId: "mnt-bastei-saechsische-schweiz"
  },
  {
    id: "de-sn-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "industry-leipzig",
      "hist-voelkerschlachtdenkmal",
      "mnt-fichtelberg",
      "mnt-bastei-saechsische-schweiz"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-sn-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Meißen (Porzellan) von Görlitz entfernt?",
      hu: "Milyen messze van Meißen (Porzellan) és Görlitz egymástól?",
      ro: "Cât de departe este Meißen (Porzellan) de Görlitz?",
      en: "How far is Meißen (Porzellan) from Görlitz?",
    },
    targetPoiId: "city-meissen",
    targetPoiId2: "city-goerlitz",
    expectedKm: 106
  },
  {
    id: "de-sn-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-leipzig-montagsdemos",
      "city-dresden",
      "mnt-fichtelberg",
      "landmark-frauenkirche-dresden",
      "hist-voelkerschlachtdenkmal"
    ],
    wrongPoiId: "mnt-fichtelberg"
  },
  {
    id: "de-sn-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "mnt-bastei-saechsische-schweiz",
      "city-dresden",
      "hist-voelkerschlachtdenkmal",
      "kid-landmark-belantis"
    ],
    orderBy: "east_to_west"
  }
];
