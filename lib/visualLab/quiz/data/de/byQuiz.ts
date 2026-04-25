import type { QuizTask } from "../../types";

// Bayern (DE-BY) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const byQuiz: QuizTask[] = [
  {
    id: "de-by-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf München auf der Karte!",
      hu: "Kattints a térképen a következőre: München!",
      ro: "Apasă pe München pe hartă!",
      en: "Click on München on the map!",
    },
    targetPoiId: "city-muenchen"
  },
  {
    id: "de-by-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Bayern!",
      hu: "Kattints a tartományra: Bayern!",
      ro: "Apasă pe landul Bayern!",
      en: "Click on the state of Bayern!",
    },
    targetCountyId: "DE-BY"
  },
  {
    id: "de-by-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Schloss Neuschwanstein auf der Karte!",
      hu: "Kattints a térképen a következőre: Schloss Neuschwanstein!",
      ro: "Apasă pe Schloss Neuschwanstein pe hartă!",
      en: "Click on Schloss Neuschwanstein on the map!",
    },
    targetPoiId: "landmark-neuschwanstein"
  },
  {
    id: "de-by-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Burg Trausnitz von Schloss Nymphenburg entfernt?",
      hu: "Milyen messze van Burg Trausnitz és Schloss Nymphenburg egymástól?",
      ro: "Cât de departe este Burg Trausnitz de Schloss Nymphenburg?",
      en: "How far is Burg Trausnitz from Schloss Nymphenburg?",
    },
    targetPoiId: "landmark-burg-trausnitz",
    targetPoiId2: "landmark-nymphenburg-extra",
    expectedKm: 63
  },
  {
    id: "de-by-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Zugspitze auf der Karte!",
      hu: "Kattints a térképen a következőre: Zugspitze!",
      ro: "Apasă pe Zugspitze pe hartă!",
      en: "Click on Zugspitze on the map!",
    },
    targetPoiId: "mnt-zugspitze"
  },
  {
    id: "de-by-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
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
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
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
      de: "Wie weit ist BMW Welt & Museum von Rothenburg ob der Tauber entfernt?",
      hu: "Milyen messze van BMW Welt & Museum és Rothenburg ob der Tauber egymástól?",
      ro: "Cât de departe este BMW Welt & Museum de Rothenburg ob der Tauber?",
      en: "How far is BMW Welt & Museum from Rothenburg ob der Tauber?",
    },
    targetPoiId: "landmark-bmw-welt",
    targetPoiId2: "hist-rothenburg",
    expectedKm: 167
  },
  {
    id: "de-by-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
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
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
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
