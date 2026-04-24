import type { QuizTask } from "../types";

// 10 quiz tasks for Romania (RO)
// POI ids verified against lib/visualLab/data/romaniaPoi.ts
// County ids verified: RO-B, RO-CJ, RO-TM, RO-IS, RO-CT, RO-BV, RO-DJ, RO-BH, RO-SB, RO-MS

export const roQuizTasks: QuizTask[] = [
  // --- 3 × click_poi ---
  {
    id: "ro-cp-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Bukarest auf der Karte!",
      hu: "Kattints Bukarestre a térképen!",
      ro: "Apasă pe București pe hartă!",
      en: "Click on Bucharest on the map!",
    },
    targetPoiId: "city-bucuresti",
  },
  {
    id: "ro-cp-2",
    type: "click_poi",
    question: {
      de: "Zeige Cluj-Napoca auf der Karte!",
      hu: "Mutasd meg Kolozsvárt a térképen!",
      ro: "Arată Cluj-Napoca pe hartă!",
      en: "Show Cluj-Napoca on the map!",
    },
    targetPoiId: "city-cluj-napoca",
  },
  {
    id: "ro-cp-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Timișoara auf der Karte!",
      hu: "Kattints Temesvárra a térképen!",
      ro: "Apasă pe Timișoara pe hartă!",
      en: "Click on Timișoara on the map!",
    },
    targetPoiId: "city-timisoara",
  },

  // --- 2 × click_county ---
  {
    id: "ro-cc-1",
    type: "click_county",
    question: {
      de: "Klicke auf den Kreis Transsilvanien-Klausenburg (Cluj)!",
      hu: "Kattints Kolozs (Cluj) megyére!",
      ro: "Apasă pe județul Cluj!",
      en: "Click on Cluj County!",
    },
    targetCountyId: "RO-CJ",
  },
  {
    id: "ro-cc-2",
    type: "click_county",
    question: {
      de: "Klicke auf den Kreis Constanța (am Schwarzen Meer)!",
      hu: "Kattints Constanța (Konstanca) megyére a Fekete-tenger partján!",
      ro: "Apasă pe județul Constanța (la Marea Neagră)!",
      en: "Click on Constanța County (on the Black Sea)!",
    },
    targetCountyId: "RO-CT",
  },

  // --- 2 × distance_guess ---
  {
    id: "ro-dg-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Bukarest von Cluj-Napoca entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Bukarest és Kolozsvár között? Kattints mindkét városra!",
      ro: "Cât de departe este București de Cluj-Napoca? Apasă pe ambele orașe!",
      en: "How far is Bucharest from Cluj-Napoca? Click on both cities!",
    },
    targetPoiId: "city-bucuresti",
    targetPoiId2: "city-cluj-napoca",
    expectedKm: 324,
  },
  {
    id: "ro-dg-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Timișoara von Iași entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Temesvár és Iași között? Kattints mindkét városra!",
      ro: "Cât de departe este Timișoara de Iași? Apasă pe ambele orașe!",
      en: "How far is Timișoara from Iași? Click on both cities!",
    },
    targetPoiId: "city-timisoara",
    targetPoiId2: "city-iasi",
    expectedKm: 560,
  },

  // --- 2 × spot_error ---
  {
    id: "ro-se-1",
    type: "spot_error",
    question: {
      de: "Eine Stadt ist falsch beschriftet! Klicke auf die falsche Stadt.",
      hu: "Az egyik város nevét felcserélték! Kattints a hibás városra.",
      ro: "Un oraș este etichetat greșit! Apasă pe orașul cu eroare.",
      en: "One city has a wrong label! Click on the incorrectly labeled city.",
    },
    // city-brasov is shown labeled as "Sibiu" (wrong — Brasov is in RO-BV, not RO-SB)
    optionPoiIds: ["city-bucuresti", "city-cluj-napoca", "city-brasov", "city-iasi", "city-timisoara"],
    wrongPoiId: "city-brasov",
  },
  {
    id: "ro-se-2",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT in Siebenbürgen? Klicke sie an!",
      hu: "Melyik város NEM Erdélyben van? Kattints rá!",
      ro: "Care oraș NU se află în Transilvania? Apasă pe el!",
      en: "Which city is NOT in Transylvania? Click on it!",
    },
    // Cluj, Brasov, Sibiu, Targu-Mures are in Transylvania; Craiova is in Oltenia (RO-DJ)
    optionPoiIds: ["city-cluj-napoca", "city-brasov", "city-sibiu", "city-targu-mures", "city-craiova"],
    wrongPoiId: "city-craiova",
  },

  // --- 1 × order_by ---
  {
    id: "ro-ob-1",
    type: "order_by",
    question: {
      de: "Klicke die Städte von West nach Ost: Timișoara → Sibiu → Constanța!",
      hu: "Kattints a városokra nyugatról keletre: Temesvár → Szeben → Konstanca!",
      ro: "Apasă orașele de la vest la est: Timișoara → Sibiu → Constanța!",
      en: "Click the cities from west to east: Timișoara → Sibiu → Constanța!",
    },
    // Timișoara (21.21°), Sibiu (24.15°), Constanța (28.63°) — west to east
    orderedPoiIds: ["city-timisoara", "city-sibiu", "city-constanta"],
    orderBy: "west_to_east",
  },
];
