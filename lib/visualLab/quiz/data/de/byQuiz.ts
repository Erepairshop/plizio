import type { QuizTask } from "../../types";

// Bayern (DE-BY) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const byQuiz: QuizTask[] = [
  {
    id: "de-by-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf M\u00fcnchen!",
      hu: "Kattints ide: M\u00fcnchen!",
      ro: "Apas\u0103 pe M\u00fcnchen!",
      en: "Click on M\u00fcnchen!"
    },
    targetPoiId: "city-muenchen"
  },
  {
    id: "de-by-easy-2",
    type: "click_county",
    question: {
      de: "Wo liegt Bayern auf der Karte?",
      hu: "Hol tal\u00e1lhat\u00f3 Bayern a t\u00e9rk\u00e9pen?",
      ro: "Unde se afl\u0103 Bayern pe hart\u0103?",
      en: "Where is Bayern on the map?"
    },
    targetCountyId: "DE-BY"
  },
  {
    id: "de-by-easy-3",
    type: "click_poi",
    question: {
      de: "Finde Schloss Neuschwanstein!",
      hu: "Keresd meg: Schloss Neuschwanstein!",
      ro: "G\u0103se\u0219te Schloss Neuschwanstein!",
      en: "Find Schloss Neuschwanstein!"
    },
    targetPoiId: "landmark-neuschwanstein"
  },
  {
    id: "de-by-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist es von Burg Trausnitz nach Schloss Nymphenburg?",
      hu: "Milyen messze van Burg Trausnitz \u00e9s Schloss Nymphenburg egym\u00e1st\u00f3l?",
      ro: "C\u00e2t de departe este Burg Trausnitz de Schloss Nymphenburg?",
      en: "How far is it from Burg Trausnitz to Schloss Nymphenburg?"
    },
    targetPoiId: "landmark-burg-trausnitz",
    targetPoiId2: "industry-ingolstadt",
    expectedKm: 63
  },
  {
    id: "de-by-med-2",
    type: "click_poi",
    question: {
      de: "Wo befindet sich Zugspitze?",
      hu: "Hol tal\u00e1lhat\u00f3: Zugspitze?",
      ro: "Unde se afl\u0103 Zugspitze?",
      en: "Where is Zugspitze located?"
    },
    targetPoiId: "mnt-zugspitze"
  },
  {
    id: "de-by-med-3",
    type: "spot_error",
    question: {
      de: "Finde den Fehler: Welcher Ort geh\u00f6rt zu einer anderen Kategorie?",
      hu: "Keresd a hib\u00e1t: Melyik hely tartozik m\u00e1s kateg\u00f3ri\u00e1ba?",
      ro: "G\u0103se\u0219te gre\u0219eala: Care loc apar\u021bine unei alte categorii?",
      en: "Spot the error: Which place belongs to a different category?"
    },
    optionPoiIds: [
      "hist-nuernberg-justizpalast",
      "hist-augsburg",
      "hist-regensburg",
      "hist-reichsparteitag",
      "landmark-donaudurchbruch"
    ],
    wrongPoiId: "landmark-donaudurchbruch"
  },
  {
    id: "de-by-hard-1",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Westen nach Osten!",
      hu: "Rendezd ezeket a helyeket nyugatr\u00f3l keletre!",
      ro: "Ordoneaz\u0103 aceste locuri de la vest la est!",
      en: "Order these places from west to east!"
    },
    orderedPoiIds: [
      "hist-kaiserburg-nuernberg",
      "hist-reichsparteitag",
      "zoo-hellabrunn-muenchen",
      "animal-alpen-gaemse"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-by-hard-2",
    type: "distance_guess",
    question: {
      de: "Sch\u00e4tze die Entfernung zwischen BMW Welt & Museum und Rothenburg ob der Tauber!",
      hu: "Tippeld meg a t\u00e1vols\u00e1got BMW Welt & Museum \u00e9s Rothenburg ob der Tauber k\u00f6z\u00f6tt!",
      ro: "Estimeaz\u0103 distan\u021ba dintre BMW Welt & Museum \u0219i Rothenburg ob der Tauber!",
      en: "Guess the distance between BMW Welt & Museum and Rothenburg ob der Tauber!"
    },
    targetPoiId: "landmark-bmw-welt",
    targetPoiId2: "hist-rothenburg",
    expectedKm: 167
  },
  {
    id: "de-by-hard-3",
    type: "spot_error",
    question: {
      de: "Was passt nicht zu den anderen?",
      hu: "Mi nem illik a t\u00f6bbihez?",
      ro: "Ce nu se potrive\u0219te cu celelalte?",
      en: "What does not fit with the others?"
    },
    optionPoiIds: [
      "landmark-lechfall",
      "landmark-neuschwanstein",
      "city-bayreuth",
      "landmark-donaudurchbruch",
      "landmark-burg-trausnitz"
    ],
    wrongPoiId: "city-bayreuth"
  },
  {
    id: "de-by-special",
    type: "order_by",
    question: {
      de: "Ordne diese Orte von Osten nach Westen!",
      hu: "Rendezd ezeket a helyeket keletr\u0151l nyugatra!",
      ro: "Ordoneaz\u0103 aceste locuri de la est la vest!",
      en: "Order these places from east to west!"
    },
    orderedPoiIds: [
      "kidlm-deutsches-museum-muenchen",
      "city-nuernberg",
      "mountain-zugspitzplatt",
      "hist-schloss-mespelbrunn"
    ],
    orderBy: "east_to_west"
  }
];
