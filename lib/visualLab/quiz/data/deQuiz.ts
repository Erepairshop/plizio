import type { QuizTask } from "../types";

// 10 quiz tasks for Germany (DE)
// POI ids verified against lib/visualLab/data/poi.ts
// County ids verified: DE-BY, DE-BW, DE-NW, DE-HH, DE-BE, DE-HE, DE-SN, DE-NI, DE-RP, DE-SH, DE-MV, DE-BB, DE-ST, DE-TH, DE-SL, DE-HB

export const deQuizTasks: QuizTask[] = [
  // --- 3 × click_poi ---
  {
    id: "de-cp-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Berlin auf der Karte!",
      hu: "Kattints Berlinre a térképen!",
      ro: "Apasă pe Berlin pe hartă!",
      en: "Click on Berlin on the map!",
    },
    targetPoiId: "city-berlin",
  },
  {
    id: "de-cp-2",
    type: "click_poi",
    question: {
      de: "Klicke auf Hamburg auf der Karte!",
      hu: "Kattints Hamburgra a térképen!",
      ro: "Apasă pe Hamburg pe hartă!",
      en: "Click on Hamburg on the map!",
    },
    targetPoiId: "city-hamburg",
  },
  {
    id: "de-cp-3",
    type: "click_poi",
    question: {
      de: "Zeige München auf der Karte!",
      hu: "Mutasd meg Münchent a térképen!",
      ro: "Arată München pe hartă!",
      en: "Show München on the map!",
    },
    targetPoiId: "city-muenchen",
  },

  // --- 2 × click_county ---
  {
    id: "de-cc-1",
    type: "click_county",
    question: {
      de: "Klicke auf das Bundesland Bayern!",
      hu: "Kattints Bajorország tartományra!",
      ro: "Apasă pe landul Bavaria!",
      en: "Click on the state of Bavaria!",
    },
    targetCountyId: "DE-BY",
  },
  {
    id: "de-cc-2",
    type: "click_county",
    question: {
      de: "Klicke auf Nordrhein-Westfalen!",
      hu: "Kattints Észak-Rajna-Vesztfáliára!",
      ro: "Apasă pe Renania de Nord-Westfalia!",
      en: "Click on North Rhine-Westphalia!",
    },
    targetCountyId: "DE-NW",
  },

  // --- 2 × distance_guess ---
  {
    id: "de-dg-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Berlin von München entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Berlin és München között? Kattints mindkét városra!",
      ro: "Cât de departe este Berlin de München? Apasă pe ambele orașe!",
      en: "How far is Berlin from München? Click on both cities!",
    },
    targetPoiId: "city-berlin",
    targetPoiId2: "city-muenchen",
    expectedKm: 504,
  },
  {
    id: "de-dg-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Hamburg von Frankfurt entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Hamburg és Frankfurt között? Kattints mindkét városra!",
      ro: "Cât de departe este Hamburg de Frankfurt? Apasă pe ambele orașe!",
      en: "How far is Hamburg from Frankfurt? Click on both cities!",
    },
    targetPoiId: "city-hamburg",
    targetPoiId2: "city-frankfurt",
    expectedKm: 390,
  },

  // --- 2 × spot_error ---
  {
    id: "de-se-1",
    type: "spot_error",
    question: {
      de: "Eine Stadt hat das falsche Bundesland! Klicke auf die falsch zugeordnete Stadt.",
      hu: "Az egyik város rossz tartományhoz van rendelve! Kattints a hibás városra.",
      ro: "Un oraș are landul greșit! Apasă pe orașul cu eroare.",
      en: "One city has the wrong state! Click on the incorrectly assigned city.",
    },
    // 5 cities shown with labels; city-koeln is shown labeled as "Dresden" (wrong)
    optionPoiIds: ["city-berlin", "city-hamburg", "city-koeln", "city-muenchen", "city-frankfurt"],
    wrongPoiId: "city-koeln",
  },
  {
    id: "de-se-2",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT in Bayern? Klicke sie an!",
      hu: "Melyik város NEM Bajorországban van? Kattints rá!",
      ro: "Care oraș NU se află în Bavaria? Apasă pe el!",
      en: "Which city is NOT in Bavaria? Click on it!",
    },
    // city-muenchen, city-nuernberg, city-augsburg, city-regensburg are in DE-BY; city-stuttgart is in DE-BW
    optionPoiIds: ["city-muenchen", "city-nuernberg", "city-augsburg", "city-regensburg", "city-stuttgart"],
    wrongPoiId: "city-stuttgart",
  },

  // --- 1 × order_by ---
  {
    id: "de-ob-1",
    type: "order_by",
    question: {
      de: "Klicke die Städte von West nach Ost: Köln → Frankfurt → Dresden!",
      hu: "Kattints a városokra nyugatról keletre: Köln → Frankfurt → Drezda!",
      ro: "Apasă orașele de la vest la est: Köln → Frankfurt → Dresden!",
      en: "Click the cities from west to east: Cologne → Frankfurt → Dresden!",
    },
    // Köln (6.96°), Frankfurt (8.68°), Dresden (13.74°) — west to east
    orderedPoiIds: ["city-koeln", "city-frankfurt", "city-dresden"],
    orderBy: "west_to_east",
  },
];
