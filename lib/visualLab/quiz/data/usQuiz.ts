import type { QuizTask } from "../types";

// 10 quiz tasks for USA (US)
// POI ids verified against lib/visualLab/data/usaPoi.ts
// State/region ids: US-CA (California), US-TX (Texas), US-FL (Florida), US-NY (New York), US-IL (Illinois)

export const usQuizTasks: QuizTask[] = [
  // --- 3 × click_poi ---
  {
    id: "us-cp-1",
    type: "click_poi",
    question: {
      de: "Klicke auf New York City auf der Karte!",
      hu: "Kattints New York Cityre a térképen!",
      ro: "Apasă pe New York City pe hartă!",
      en: "Click on New York City on the map!",
    },
    targetPoiId: "usa_nyc",
  },
  {
    id: "us-cp-2",
    type: "click_poi",
    question: {
      de: "Zeige Los Angeles auf der Karte!",
      hu: "Mutasd meg Los Angelest a térképen!",
      ro: "Arată Los Angeles pe hartă!",
      en: "Show Los Angeles on the map!",
    },
    targetPoiId: "usa_la",
  },
  {
    id: "us-cp-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Chicago auf der Karte!",
      hu: "Kattints Chicagóra a térképen!",
      ro: "Apasă pe Chicago pe hartă!",
      en: "Click on Chicago on the map!",
    },
    targetPoiId: "usa_chi",
  },

  // --- 2 × click_county ---
  {
    id: "us-cc-1",
    type: "click_county",
    question: {
      de: "Klicke auf den Bundesstaat Kalifornien!",
      hu: "Kattints Kalifornia államra!",
      ro: "Apasă pe statul California!",
      en: "Click on the state of California!",
    },
    targetCountyId: "US-CA",
  },
  {
    id: "us-cc-2",
    type: "click_county",
    question: {
      de: "Klicke auf den Bundesstaat Texas!",
      hu: "Kattints Texas államra!",
      ro: "Apasă pe statul Texas!",
      en: "Click on the state of Texas!",
    },
    targetCountyId: "US-TX",
  },

  // --- 2 × distance_guess ---
  {
    id: "us-dg-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist New York City von Los Angeles entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság New York City és Los Angeles között? Kattints mindkét városra!",
      ro: "Cât de departe este New York City de Los Angeles? Apasă pe ambele orașe!",
      en: "How far is New York City from Los Angeles? Click on both cities!",
    },
    // NYC (-74.01°, 40.71°) ↔ LA (-118.24°, 34.05°) = 3936 km haversine
    targetPoiId: "usa_nyc",
    targetPoiId2: "usa_la",
    expectedKm: 3936,
  },
  {
    id: "us-dg-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Chicago von Miami entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Chicago és Miami között? Kattints mindkét városra!",
      ro: "Cât de departe este Chicago de Miami? Apasă pe ambele orașe!",
      en: "How far is Chicago from Miami? Click on both cities!",
    },
    // Chicago (-87.63°, 41.88°) ↔ Miami (-80.19°, 25.76°) = 1917 km haversine
    targetPoiId: "usa_chi",
    targetPoiId2: "usa_mia",
    expectedKm: 1917,
  },

  // --- 2 × spot_error ---
  {
    id: "us-se-1",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT an der Ostküste? Klicke sie an!",
      hu: "Melyik város NEM a keleti parton van? Kattints rá!",
      ro: "Care oraș NU se află pe coasta de est? Apasă pe el!",
      en: "Which city is NOT on the East Coast? Click on it!",
    },
    // NYC (-74°), Philadelphia (-75°), Boston (-71°), Miami (-80°) are on the East Coast;
    // Los Angeles (-118°) is on the West Coast
    optionPoiIds: ["usa_nyc", "usa_phi", "usa_bos", "usa_mia", "usa_la"],
    wrongPoiId: "usa_la",
  },
  {
    id: "us-se-2",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT im Mittleren Westen (Midwest)? Klicke sie an!",
      hu: "Melyik város NEM a Középső Nyugaton (Midwest) van? Kattints rá!",
      ro: "Care oraș NU se află în Midwest? Apasă pe el!",
      en: "Which city is NOT in the Midwest? Click on it!",
    },
    // Chicago (-87°/IL), Columbus (-83°/OH), Detroit (-83°/MI), Indianapolis (-86°/IN) are Midwest;
    // Dallas (-97°/TX) is in the South
    optionPoiIds: ["usa_chi", "usa_col", "usa_dal", "usa_den", "usa_sea"],
    wrongPoiId: "usa_sea",
  },

  // --- 1 × order_by ---
  {
    id: "us-ob-1",
    type: "order_by",
    question: {
      de: "Klicke die Städte von West nach Ost: San Francisco → Chicago → New York City!",
      hu: "Kattints a városokra nyugatról keletre: San Francisco → Chicago → New York City!",
      ro: "Apasă orașele de la vest la est: San Francisco → Chicago → New York City!",
      en: "Click the cities from west to east: San Francisco → Chicago → New York City!",
    },
    // San Francisco (-122.42°), Chicago (-87.63°), NYC (-74.01°) — west to east
    orderedPoiIds: ["usa_sf", "usa_chi", "usa_nyc"],
    orderBy: "west_to_east",
  },
];
