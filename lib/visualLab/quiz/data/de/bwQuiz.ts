import type { QuizTask } from "../../types";

// Baden-Württemberg (DE-BW) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const bwQuiz: QuizTask[] = [
  {
    id: "de-bw-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Stuttgart!",
      hu: "Kattints ide: Stuttgart!",
      ro: "Apas\u0103 pe Stuttgart!",
      en: "Click on Stuttgart!"
    },
    targetPoiId: "city-stuttgart"
  },
  {
    id: "de-bw-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Baden-W\u00fcrttemberg auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Baden-W\u00fcrttemberg a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Baden-W\u00fcrttemberg pe hart\u0103?",
      en: "Where is Baden-W\u00fcrttemberg on the map?"
    },
    targetCountyId: "DE-BW"
  },
  {
    id: "de-bw-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Heidelberger Schloss!",
      hu: "Keresd meg: Heidelberger Schloss!",
      ro: "G\u0103se\u0219te Heidelberger Schloss!",
      en: "Find Heidelberger Schloss!"
    },
    targetPoiId: "landmark-heidelberg-castle"
  },
  {
    id: "de-bw-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Schloss Sigmaringen nach Feldberg (Schwarzwald)?",
      hu: "Milyen messze van Schloss Sigmaringen és Feldberg (Schwarzwald) egymástól?",
      ro: "Cât de departe este Schloss Sigmaringen de Feldberg (Schwarzwald)?",
      en: "How far is it from Schloss Sigmaringen to Feldberg (Schwarzwald)?"
    },
    targetPoiId: "hist-schloss-sigmaringen",
    targetPoiId2: "mnt-feldberg",
    expectedKm: 93
  },
  {
    id: "de-bw-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Feldberg (Schwarzwald)?",
      hu: "Hol tal\u00e1lhat\u00f3: Feldberg (Schwarzwald)?",
      ro: "Unde se afl\u0103 Feldberg (Schwarzwald)?",
      en: "Where is Feldberg (Schwarzwald) located?"
    },
    targetPoiId: "mnt-feldberg"
  },
  {
    id: "de-bw-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "city-heidelberg",
      "landmark-schloss-ludwigsburg",
      "landmark-mercedes-benz-museum",
      "kid-landmark-ravensburger-spieleland",
      "landmark-donauversickerung"
    ],
    wrongPoiId: "kid-landmark-ravensburger-spieleland"
  },
  {
    id: "de-bw-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "mnt-feldberg",
      "landmark-triberger-wasserfaelle",
      "forest-schwarzwald",
      "industry-stuttgart"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-bw-hard-2",
    type: "distance_guess",
    question: {
      de: "Schätze die Entfernung zwischen Insel Mainau und Nordschwarzwald!",
      hu: "Tippeld meg a távolságot Insel Mainau és Nordschwarzwald között!",
      ro: "Estimează distanța dintre Insel Mainau și Nordschwarzwald!",
      en: "Guess the distance between Insel Mainau and Nordschwarzwald!"
    },
    targetPoiId: "island-mainau",
    targetPoiId2: "forest-schwarzwald-nord-extra",
    expectedKm: 135
  },
  {
    id: "de-bw-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a többihez?",
      ro: "Ce nu se potrivește cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "hist-burg-hohenzollern",
      "landmark-schloss-lichtenstein",
      "hist-schloss-sigmaringen",
      "landmark-heidelberg-castle",
      "city-stuttgart"
    ],
    wrongPoiId: "city-stuttgart"
  },
  {
    id: "de-bw-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "landmark-schloss-lichtenstein",
      "hist-schloss-sigmaringen",
      "island-mainau",
      "kidlm-europapark-rust"
    ],
    orderBy: "east_to_west"
  }
];
