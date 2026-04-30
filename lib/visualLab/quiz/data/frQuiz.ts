import type { QuizTask } from "../types";

// 10 quiz tasks for France (FR)
// POI ids verified against lib/visualLab/data/francePoi.ts
// Region ids: FR-IDF (Île-de-France), FR-PAC (Provence-Alpes-Côte d'Azur), FR-NAQ (Nouvelle-Aquitaine)
// FR-ARA (Auvergne-Rhône-Alpes), FR-GES (Grand Est), FR-HDF (Hauts-de-France)

export const frQuizTasks: QuizTask[] = [
  // --- 3 × click_poi ---
  {
    id: "fr-cp-1",
    type: "click_poi",
    question: {
      de: "Klicke auf Paris auf der Karte!",
      hu: "Kattints Párizsra a térképen!",
      ro: "Apasă pe Paris pe hartă!",
      en: "Click on Paris on the map!",
    },
    targetPoiId: "paris",
  },
  {
    id: "fr-cp-2",
    type: "click_poi",
    question: {
      de: "Zeige Marseille auf der Karte!",
      hu: "Mutasd meg Marseille-t a térképen!",
      ro: "Arată Marsilia pe hartă!",
      en: "Show Marseille on the map!",
    },
    targetPoiId: "marseille",
  },
  {
    id: "fr-cp-3",
    type: "click_poi",
    question: {
      de: "Klicke auf Straßburg auf der Karte!",
      hu: "Kattints Strasbourgra a térképen!",
      ro: "Apasă pe Strasbourg pe hartă!",
      en: "Click on Strasbourg on the map!",
    },
    targetPoiId: "strasbourg",
  },

  // --- 2 × click_county ---
  {
    id: "fr-cc-1",
    type: "click_county",
    question: {
      de: "Klicke auf die Region Île-de-France!",
      hu: "Kattints az Île-de-France régióra!",
      ro: "Apasă pe regiunea Île-de-France!",
      en: "Click on the Île-de-France region!",
    },
    targetCountyId: "FR-IDF",
  },
  {
    id: "fr-cc-2",
    type: "click_county",
    question: {
      de: "Klicke auf die Region Provence-Alpes-Côte d'Azur!",
      hu: "Kattints a Provence-Alpes-Côte d'Azur régióra!",
      ro: "Apasă pe regiunea Provence-Alpes-Côte d'Azur!",
      en: "Click on the Provence-Alpes-Côte d'Azur region!",
    },
    targetCountyId: "FR-PAC",
  },

  // --- 2 × distance_guess ---
  {
    id: "fr-dg-1",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Paris von Marseille entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Párizs és Marseille között? Kattints mindkét városra!",
      ro: "Cât de departe este Parisul de Marsilia? Apasă pe ambele orașe!",
      en: "How far is Paris from Marseille? Click on both cities!",
    },
    // Paris (2.35°, 48.86°) ↔ Marseille (5.37°, 43.30°) = 660 km haversine
    targetPoiId: "paris",
    targetPoiId2: "marseille",
    expectedKm: 660,
  },
  {
    id: "fr-dg-2",
    type: "distance_guess",
    question: {
      de: "Wie weit ist Bordeaux von Straßburg entfernt? Klicke auf beide Städte!",
      hu: "Mekkora a távolság Bordeaux és Strasbourg között? Kattints mindkét városra!",
      ro: "Cât de departe este Bordeaux de Strasbourg? Apasă pe ambele orașe!",
      en: "How far is Bordeaux from Strasbourg? Click on both cities!",
    },
    // Bordeaux (-0.58°, 44.84°) ↔ Strasbourg (7.75°, 48.57°) = 758 km haversine
    targetPoiId: "fr-bordeaux",
    targetPoiId2: "strasbourg",
    expectedKm: 758,
  },

  // --- 2 × spot_error ---
  {
    id: "fr-se-1",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT an der Mittelmeerküste? Klicke sie an!",
      hu: "Melyik város NEM a Földközi-tenger partján van? Kattints rá!",
      ro: "Care oraș NU se află pe coasta Mediteranei? Apasă pe el!",
      en: "Which city is NOT on the Mediterranean coast? Click on it!",
    },
    // Marseille, Nice, Cannes, Montpellier are on the Mediterranean; Bordeaux is on the Atlantic
    optionPoiIds: ["marseille", "nice", "cannes", "fr-montpellier", "fr-bordeaux"],
    wrongPoiId: "fr-bordeaux",
  },
  {
    id: "fr-se-2",
    type: "spot_error",
    question: {
      de: "Welche Stadt liegt NICHT im Norden Frankreichs? Klicke sie an!",
      hu: "Melyik város NEM Észak-Franciaországban van? Kattints rá!",
      ro: "Care oraș NU se află în nordul Franței? Apasă pe el!",
      en: "Which city is NOT in northern France? Click on it!",
    },
    // Paris, Lille, Reims, Rouen are in northern France; Nice is in the south (Côte d'Azur)
    optionPoiIds: ["paris", "lille", "reims", "fr-rouen", "nice"],
    wrongPoiId: "nice",
  },

  // --- 1 × order_by ---
  {
    id: "fr-ob-1",
    type: "order_by",
    question: {
      de: "Klicke die Städte von West nach Ost: Bordeaux → Lyon → Straßburg!",
      hu: "Kattints a városokra nyugatról keletre: Bordeaux → Lyon → Strasbourg!",
      ro: "Apasă orașele de la vest la est: Bordeaux → Lyon → Strasbourg!",
      en: "Click the cities from west to east: Bordeaux → Lyon → Strasbourg!",
    },
    // Bordeaux (-0.58°), Lyon (4.84°), Strasbourg (7.75°) — west to east
    orderedPoiIds: ["fr-bordeaux", "lyon", "strasbourg"],
    orderBy: "west_to_east",
  },
];
