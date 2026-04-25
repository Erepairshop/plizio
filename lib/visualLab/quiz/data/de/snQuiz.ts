import type { QuizTask } from "../../types";

// Sachsen (DE-SN) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const snQuiz: QuizTask[] = [
  {
    id: "de-sn-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Dresden!",
      hu: "Kattints ide: Dresden!",
      ro: "Apas\u0103 pe Dresden!",
      en: "Click on Dresden!"
    },
    targetPoiId: "city-dresden"
  },
  {
    id: "de-sn-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Sachsen auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Sachsen a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Sachsen pe hart\u0103?",
      en: "Where is Sachsen on the map?"
    },
    targetCountyId: "DE-SN"
  },
  {
    id: "de-sn-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Zwinger!",
      hu: "Keresd meg: Zwinger!",
      ro: "G\u0103se\u0219te Zwinger!",
      en: "Find Zwinger!"
    },
    targetPoiId: "landmark-zwinger"
  },
  {
    id: "de-sn-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Meißen nach Freiberg?",
      hu: "Milyen messze van Meißen és Freiberg egymástól?",
      ro: "Cât de departe este Meißen de Freiberg?",
      en: "How far is it from Meißen to Freiberg?"
    },
    targetPoiId: "city-meissen",
    targetPoiId2: "city-freiberg-sachsen-extra",
    expectedKm: 29
  },
  {
    id: "de-sn-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Fichtelberg?",
      hu: "Hol található: Fichtelberg?",
      ro: "Unde se află Fichtelberg?",
      en: "Where is Fichtelberg located?"
    },
    targetPoiId: "mnt-fichtelberg"
  },
  {
    id: "de-sn-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort gehört zu einer anderen Kategorie?",
      hu: "Keresd a hibát: Melyik hely tartozik más kategóriába?",
      ro: "Găsește greșeala: Care loc aparține unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "city-goerlitz",
      "city-leipzig",
      "city-chemnitz",
      "mnt-bastei-saechsische-schweiz",
      "kid-landmark-belantis"
    ],
    wrongPoiId: "mnt-bastei-saechsische-schweiz"
  },
  {
    id: "de-sn-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatról keletre!",
      ro: "Ordonează aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
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
      de: "Schätze die Entfernung zwischen Meißen (Porzellan) und Görlitz!",
      hu: "Tippeld meg a távolságot Meißen (Porzellan) és Görlitz között!",
      ro: "Estimează distanța dintre Meißen (Porzellan) și Görlitz!",
      en: "Guess the distance between Meißen (Porcelain) and Görlitz!"
    },
    targetPoiId: "city-meissen",
    targetPoiId2: "city-goerlitz",
    expectedKm: 106
  },
  {
    id: "de-sn-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
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
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
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
