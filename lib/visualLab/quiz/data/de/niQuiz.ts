import type { QuizTask } from "../../types";

// Niedersachsen (DE-NI) — 10 quiz tasks
// Coverage: Sachkunde + Geographie + Geschichte

export const niQuiz: QuizTask[] = [
  {
    id: "de-ni-easy-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Hannover auf der Karte!",
      hu: "Kattints a térképen a következőre: Hannover!",
      ro: "Apasă pe Hannover pe hartă!",
      en: "Click on Hannover on the map!",
    },
    targetPoiId: "city-hannover"
  },
  {
    id: "de-ni-easy-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Niedersachsen!",
      hu: "Kattints a tartományra: Niedersachsen!",
      ro: "Apasă pe landul Niedersachsen!",
      en: "Click on the state of Niedersachsen!",
    },
    targetCountyId: "DE-NI"
  },
  {
    id: "de-ni-easy-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Wolfenbüttel auf der Karte!",
      hu: "Kattints a térképen a következőre: Wolfenbüttel!",
      ro: "Apasă pe Wolfenbüttel pe hartă!",
      en: "Click on Wolfenbüttel on the map!",
    },
    targetPoiId: "hist-wolfenbuettel"
  },
  {
    id: "de-ni-med-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Celle von Lüneburger Heide entfernt?",
      hu: "Milyen messze van Celle és Lüneburger Heide egymástól?",
      ro: "Cât de departe este Celle de Lüneburger Heide?",
      en: "How far is Celle from Lüneburger Heide?",
    },
    targetPoiId: "city-celle-extra",
    targetPoiId2: "forest-lueneburger-heide",
    expectedKm: 55
  },
  {
    id: "de-ni-med-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Lüneburger Heide auf der Karte!",
      hu: "Kattints a térképen a következőre: Lüneburger Heide!",
      ro: "Apasă pe Lüneburger Heide pe hartă!",
      en: "Click on Lüneburger Heide on the map!",
    },
    targetPoiId: "forest-lueneburger-heide"
  },
  {
    id: "de-ni-med-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "industry-wolfsburg",
      "city-braunschweig",
      "city-osnabrueck",
      "city-goettingen",
      "city-hildesheim-extra"
    ],
    wrongPoiId: "industry-wolfsburg"
  },
  {
    id: "de-ni-hard-1",
    type: "order_by",
    question: {
      de: "Klicke die Orte von West nach Ost an!",
      hu: "Kattints a helyekre nyugatról keletre!",
      ro: "Apasă pe locuri de la vest la est!",
      en: "Click the places from west to east!",
    },
    orderedPoiIds: [
      "city-hannover",
      "mountain-wilseder-berg",
      "forest-lueneburger-heide"
    ],
    orderBy: "west_to_east"
  },
  {
    id: "de-ni-hard-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Osnabrück von Kaiserpfalz Goslar entfernt?",
      hu: "Milyen messze van Osnabrück és Kaiserpfalz Goslar egymástól?",
      ro: "Cât de departe este Osnabrück de Kaiserpfalz Goslar?",
      en: "How far is Osnabrück from Kaiserpfalz Goslar?",
    },
    targetPoiId: "city-osnabrueck",
    targetPoiId2: "hist-goslar-kaiserpfalz",
    expectedKm: 168
  },
  {
    id: "de-ni-hard-3",
    type: "spot_error",
    question: {
      de: "Welcher Ort passt nicht zu den anderen?",
      hu: "Melyik hely nem illik a többihez?",
      ro: "Care loc nu se potrivește cu celelalte?",
      en: "Which place doesn't match the others?",
    },
    optionPoiIds: [
      "hist-bergen-belsen",
      "hist-wolfenbuettel",
      "city-braunschweig",
      "industry-wolfsburg",
      "forest-lueneburger-heide"
    ],
    wrongPoiId: "forest-lueneburger-heide"
  },
  {
    id: "de-ni-special",
    type: "order_by",
    question: {
      de: "Klicke die Orte von Ost nach West an!",
      hu: "Kattints a helyekre keletről nyugatra!",
      ro: "Apasă pe locuri de la est la vest!",
      en: "Click the places from east to west!",
    },
    orderedPoiIds: [
      "hist-wolfenbuettel",
      "hist-goslar-kaiserpfalz",
      "city-goettingen",
      "city-hannover"
    ],
    orderBy: "east_to_west"
  }
];
