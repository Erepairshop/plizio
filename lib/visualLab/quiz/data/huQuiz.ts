import type { QuizTask } from "../types";

// 10 quiz tasks for Hungary (HU)
// POI ids verified against lib/visualLab/data/hungaryPoi.ts
// County ids: HU-GS (Győr-Moson-Sopron), HU-HB (Hajdú-Bihar), HU-BA (Baranya), HU-CS (Csongrád-Csanád)

export const huQuizTasks: QuizTask[] = [
  // --- 3 × click_poi ---
  {
    id: "hu-cp-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Budapest auf der Karte!",
      hu: "Kattints Budapestre a térképen!",
      ro: "Apasă pe Budapesta pe hartă!",
      en: "Click on Budapest on the map!",
    },
    targetPoiId: "budapest-city",
  },
  {
    id: "hu-cp-2",
    type: "click_poi",
    question: {
      de: "Zeige Debrecen auf der Karte!",
      hu: "Mutasd meg Debrecent a térképen!",
      ro: "Arată Debrecen pe hartă!",
      en: "Show Debrecen on the map!",
    },
    targetPoiId: "debrecen",
  },
  {
    id: "hu-cp-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Pécs auf der Karte!",
      hu: "Kattints Pécsre a térképen!",
      ro: "Apasă pe Pécs pe hartă!",
      en: "Click on Pécs on the map!",
    },
    targetPoiId: "pecs",
  },

  // --- 2 × click_county ---
  {
    id: "hu-cc-1",
    type: "click_county",
    question: {
      de: "Klicke auf das Komitat Győr-Moson-Sopron!",
      hu: "Kattints Győr-Moson-Sopron megyére!",
      ro: "Apasă pe județul Győr-Moson-Sopron!",
      en: "Click on Győr-Moson-Sopron County!",
    },
    targetCountyId: "gyor-moson-sopron",
  },
  {
    id: "hu-cc-2",
    type: "click_county",
    question: {
      de: "Klicke auf das Komitat Hajdú-Bihar!",
      hu: "Kattints Hajdú-Bihar megyére!",
      ro: "Apasă pe județul Hajdú-Bihar!",
      en: "Click on Hajdú-Bihar County!",
    },
    targetCountyId: "hajdu-bihar",
  },

  // --- 2 × distance_guess ---
  {
    id: "hu-dg-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Budapest von Debrecen entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Budapest és Debrecen között? Kattints mindkét városra!",
      ro: "Cât de departe este Budapesta de Debrecen? Apasă pe ambele orașe!",
      en: "How far is Budapest from Debrecen? Click on both cities!",
    },
    // Budapest (19.04°, 47.50°) ↔ Debrecen (21.63°, 47.53°) = 194 km haversine
    targetPoiId: "budapest-city",
    targetPoiId2: "debrecen",
    expectedKm: 194,
  },
  {
    id: "hu-dg-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Pécs von Miskolc entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Pécs és Miskolc között? Kattints mindkét városra!",
      ro: "Cât de departe este Pécs de Miskolc? Apasă pe ambele orașe!",
      en: "How far is Pécs from Miskolc? Click on both cities!",
    },
    // Pécs (18.23°, 46.07°) ↔ Miskolc (20.79°, 48.10°) = 297 km haversine
    targetPoiId: "pecs",
    targetPoiId2: "miskolc",
    expectedKm: 297,
  },

  // --- 2 × spot_error ---
  {
    id: "hu-se-1",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT an der Donau? Klicke sie an!",
      hu: "Melyik város NEM a Duna mentén van? Kattints rá!",
      ro: "Care oraș NU se află pe Dunăre? Apasă pe el!",
      en: "Which city is NOT on the Danube? Click on it!",
    },
    // Budapest, Esztergom, Visegrád, Szentendre are on the Danube; Debrecen is NOT
    optionPoiIds: ["budapest-city", "esztergom", "visegrad", "szentendre", "debrecen"],
    wrongPoiId: "debrecen",
  },
  {
    id: "hu-se-2",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT am Balaton? Klicke sie an!",
      hu: "Melyik város NEM a Balaton partján van? Kattints rá!",
      ro: "Care oraș NU se află pe malul lacului Balaton? Apasă pe el!",
      en: "Which city is NOT on Lake Balaton? Click on it!",
    },
    // Siófok, Balatonfüldvár, Keszthely (strand) are on Lake Balaton; Szeged is NOT
    optionPoiIds: ["siofok", "balatonfoldvar", "keszthely-strand", "balatonalmadi-strand", "szeged"],
    wrongPoiId: "szeged",
  },

  // --- 1 × order_by ---
  {
    id: "hu-ob-1",
    type: "order_by",
    question: {
      de: "Klicke die Städte von West nach Ost: Győr → Budapest → Debrecen!",
      hu: "Kattints a városokra nyugatról keletre: Győr → Budapest → Debrecen!",
      ro: "Apasă orașele de la vest la est: Győr → Budapesta → Debrecen!",
      en: "Click the cities from west to east: Győr → Budapest → Debrecen!",
    },
    // Győr (17.64°), Budapest (19.04°), Debrecen (21.63°) — west to east
    orderedPoiIds: ["gyor", "budapest-city", "debrecen"],
    orderBy: "west_to_east",
  },
];
