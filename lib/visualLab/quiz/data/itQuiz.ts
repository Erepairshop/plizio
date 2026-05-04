import type { QuizTask } from "../types";

// 10 quiz tasks for Italy (IT)
// POI ids verified against lib/visualLab/data/italyPoi.ts
// Region ids: reg-lombardia, reg-toscana, reg-sicilia, reg-veneto, reg-lazio

export const itQuizTasks: QuizTask[] = [
  // --- 3 × click_poi ---
  {
    id: "it-cp-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Rom auf der Karte!",
      hu: "Kattints Rómára a térképen!",
      ro: "Apasă pe Roma pe hartă!",
      en: "Click on Rome on the map!",
    },
    targetPoiId: "rome",
  },
  {
    id: "it-cp-2",
    type: "click_poi",
    question: {
      de: "Zeige Venedig auf der Karte!",
      hu: "Mutasd meg Velencét a térképen!",
      ro: "Arată Veneția pe hartă!",
      en: "Show Venice on the map!",
    },
    targetPoiId: "venice",
  },
  {
    id: "it-cp-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Neapel auf der Karte!",
      hu: "Kattints Nápolyra a térképen!",
      ro: "Apasă pe Napoli pe hartă!",
      en: "Click on Naples on the map!",
    },
    targetPoiId: "naples",
  },

  // --- 2 × click_county ---
  {
    id: "it-cc-1",
    type: "click_county",
    question: {
      de: "Klicke auf die Region Toskana!",
      hu: "Kattints Toszkána régióra!",
      ro: "Apasă pe regiunea Toscana!",
      en: "Click on the Tuscany region!",
    },
    targetCountyId: "reg-toscana",
  },
  {
    id: "it-cc-2",
    type: "click_county",
    question: {
      de: "Klicke auf die Region Lombardei!",
      hu: "Kattints Lombardia régióra!",
      ro: "Apasă pe regiunea Lombardia!",
      en: "Click on the Lombardy region!",
    },
    targetCountyId: "reg-lombardia",
  },

  // --- 2 × distance_guess ---
  {
    id: "it-dg-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Rom von Mailand entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Róma és Milánó között? Kattints mindkét városra!",
      ro: "Cât de departe este Roma de Milano? Apasă pe ambele orașe!",
      en: "How far is Rome from Milan? Click on both cities!",
    },
    // Rome (12.50°, 41.90°) ↔ Milan (9.19°, 45.46°) = 477 km haversine
    targetPoiId: "rome",
    targetPoiId2: "milan",
    expectedKm: 477,
  },
  {
    id: "it-dg-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Venedig von Neapel entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Velence és Nápoly között? Kattints mindkét városra!",
      ro: "Cât de departe este Veneția de Napoli? Apasă pe ambele orașe!",
      en: "How far is Venice from Naples? Click on both cities!",
    },
    // Venice (12.32°, 45.44°) ↔ Naples (14.27°, 40.85°) = 534 km haversine
    targetPoiId: "venice",
    targetPoiId2: "naples",
    expectedKm: 534,
  },

  // --- 2 × spot_error ---
  {
    id: "it-se-1",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT in der Toskana? Klicke sie an!",
      hu: "Melyik város NEM Toszkánában van? Kattints rá!",
      ro: "Care oraș NU se află în Toscana? Apasă pe el!",
      en: "Which city is NOT in Tuscany? Click on it!",
    },
    // florence (reg-toscana) is in Tuscany; rome/milan/naples/it-perugia/it-ravenna are NOT.
    // The asked-for "wrong" (NOT in Tuscany) here is it-perugia (Umbria).
    optionPoiIds: ["florence", "rome", "milan", "it-perugia", "it-ravenna"],
    wrongPoiId: "it-perugia",
  },
  {
    id: "it-se-2",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT auf der italienischen Halbinsel (ohne Inseln)? Klicke sie an!",
      hu: "Melyik város NEM az olasz félszigeten van (szigetek nélkül)? Kattints rá!",
      ro: "Care oraș NU se află pe peninsula italiană (fără insule)? Apasă pe el!",
      en: "Which city is NOT on the Italian peninsula (excluding islands)? Click on it!",
    },
    // Rome, Naples, Florence, Milan are on the peninsula; it-cagliari is on Sardinia
    optionPoiIds: ["rome", "naples", "florence", "milan", "it-cagliari"],
    wrongPoiId: "it-cagliari",
  },

  // --- 1 × order_by ---
  {
    id: "it-ob-1",
    type: "order_by",
    question: {
      de: "Klicke die Städte von West nach Ost: Mailand → Florenz → Neapel!",
      hu: "Kattints a városokra nyugatról keletre: Milánó → Firenze → Nápoly!",
      ro: "Apasă orașele de la vest la est: Milano → Florența → Napoli!",
      en: "Click the cities from west to east: Milan → Florence → Naples!",
    },
    // Milan (9.19°), Florence (11.26°), Naples (14.27°) — west to east
    orderedPoiIds: ["milan", "florence", "naples"],
    orderBy: "west_to_east",
  },
];
