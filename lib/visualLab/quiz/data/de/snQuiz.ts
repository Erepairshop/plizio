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
      de: "Wie weit ist es von Mei\u00dfen nach Freiberg?",
      hu: "Milyen messze van Mei\u00dfen \u00e9s Freiberg egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Mei\u00dfen de Freiberg?",
      en: "How far is it from Mei\u00dfen to Freiberg?"
    },
    targetPoiId: "hist-colditz",
    targetPoiId2: "city-goerlitz",
    expectedKm: 152
  },
  {
    id: "de-sn-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Fichtelberg?",
      hu: "Hol tal\u00e1lhat\u00f3: Fichtelberg?",
      ro: "Unde se afl\u0103 Fichtelberg?",
      en: "Where is Fichtelberg located?"
    },
    targetPoiId: "mnt-fichtelberg"
  },
  {
    id: "de-sn-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "city-goerlitz",
      "city-leipzig",
      "city-goerlitz",
      "mnt-bastei-saechsische-schweiz",
      "kid-landmark-belantis"
    ],
    wrongPoiId: "kid-landmark-belantis"
  },
  {
    id: "de-sn-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
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
      de: "Sch\u00e4tze die Entfernung zwischen Mei\u00dfen (Porzellan) und Freiberg!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got Mei\u00dfen (Porzellan) \u00e9s Freiberg k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre Mei\u00dfen (Porzellan) \u0219i Freiberg!",
      en: "Guess the distance between Mei\u00dfen (Porzellan) and Freiberg!"
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
