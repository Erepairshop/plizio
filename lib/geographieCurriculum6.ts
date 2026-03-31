import {
  asCurriculumThemes,
  calculateGeographieMark,
  createMCQ,
  createTyping,
  getGeneratedQuestions,
  mulberry32,
  pick,
  shuffle,
  type GeographieGeneratorMap,
  type GeographieTheme,
} from "./geographieCurriculumShared";

const K6: GeographieTheme[] = [
  {
    id: "map_skills_advanced",
    name: "Vertiefung Orientierung",
    icon: "🧭",
    color: "#3B82F6",
    subtopics: [
      { id: "contour_lines", name: { de: "Höhenlinien", en: "Contour Lines", hu: "Szintvonalak", ro: "Curbe de nivel" }, questions: [], hasGenerator: true },
      { id: "gps_gis_basics", name: { de: "GPS und GIS Grundlagen", en: "GPS & GIS Basics", hu: "GPS és térinformatika", ro: "GPS și GIS" }, questions: [], hasGenerator: true },
      { id: "atlas_usage", name: { de: "Arbeit mit dem Atlas", en: "Using an Atlas", hu: "Atlasz használata", ro: "Utilizarea atlasului" }, questions: [], hasGenerator: true },
      { id: "time_zones", name: { de: "Zeitzonen der Erde", en: "Time Zones", hu: "Időzónák", ro: "Fusuri orare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "climate_zones",
    name: "Klima und Vegetationszonen",
    icon: "☀️",
    color: "#10B981",
    subtopics: [
      { id: "tropical_zone", name: { de: "Die tropische Zone", en: "The Tropical Zone", hu: "Trópusi övezet", ro: "Zona tropicală" }, questions: [], hasGenerator: true },
      { id: "subtropical_zone", name: { de: "Die subtropische Zone", en: "Subtropical Zone", hu: "Szubtrópusi övezet", ro: "Zona subtropicală" }, questions: [], hasGenerator: true },
      { id: "temperate_zone", name: { de: "Die gemäßigte Zone", en: "Temperate Zone", hu: "Mérsékelt övezet", ro: "Zona temperată" }, questions: [], hasGenerator: true },
      { id: "polar_zone", name: { de: "Die kalte Zone", en: "Polar Zone", hu: "Hideg övezet", ro: "Zona polară" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "europe_regions",
    name: "Europas Regionen",
    icon: "🌍",
    color: "#F59E0B",
    subtopics: [
      { id: "northern_europe", name: { de: "Nordeuropa", en: "Northern Europe", hu: "Észak-Európa", ro: "Europa de Nord" }, questions: [], hasGenerator: true },
      { id: "western_europe", name: { de: "Westeuropa", en: "Western Europe", hu: "Nyugat-Európa", ro: "Europa de Vest" }, questions: [], hasGenerator: true },
      { id: "southern_europe", name: { de: "Südeuropa", en: "Southern Europe", hu: "Dél-Európa", ro: "Europa de Sud" }, questions: [], hasGenerator: true },
      { id: "eastern_europe", name: { de: "Osteuropa", en: "Eastern Europe", hu: "Kelet-Európa", ro: "Europa de Est" }, questions: [], hasGenerator: true },
      { id: "central_europe_neighbors", name: { de: "Mitteleuropa & Nachbarn", en: "Central Europe & Neighbors", hu: "Közép-Európa és szomszédai", ro: "Europa Centrală și vecinii" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "waters_oceans_k6",
    name: "Wasser - Lebensader der Erde",
    icon: "🌊",
    color: "#EF4444",
    subtopics: [
      { id: "ocean_currents", name: { de: "Meeresströmungen", en: "Ocean Currents", hu: "Tengeráramlások", ro: "Curenți oceanici" }, questions: [], hasGenerator: true },
      { id: "rivers_life", name: { de: "Flüsse und ihre Bedeutung", en: "Rivers and their Importance", hu: "Folyók jelentősége", ro: "Fluviile și importanța lor" }, questions: [], hasGenerator: true },
      { id: "water_scarcity", name: { de: "Wassermangel", en: "Water Scarcity", hu: "Vízhiány", ro: "Lipsa apei" }, questions: [], hasGenerator: true },
      { id: "glaciers_ice", name: { de: "Gletscher und polares Eis", en: "Glaciers and Polar Ice", hu: "Gleccserek és sarki jég", ro: "Ghețari și gheață polară" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "agriculture_europe",
    name: "Landwirtschaft in Europa",
    icon: "🚜",
    color: "#8B5CF6",
    subtopics: [
      { id: "mediterranean_farming", name: { de: "Anbau am Mittelmeer", en: "Mediterranean Farming", hu: "Földközi-tengeri mezőgazdaság", ro: "Agricultura mediteraneană" }, questions: [], hasGenerator: true },
      { id: "livestock_farming", name: { de: "Viehhaltung", en: "Livestock Farming", hu: "Állattenyésztés", ro: "Creșterea animalelor" }, questions: [], hasGenerator: true },
      { id: "organic_farming", name: { de: "Ökologische Landwirtschaft", en: "Organic Farming", hu: "Ökológiai gazdálkodás", ro: "Agricultura ecologică" }, questions: [], hasGenerator: true },
      { id: "food_supply_chains", name: { de: "Nahrungsmittelwege", en: "Food Supply Chains", hu: "Élelmiszer-ellátási láncok", ro: "Lanțuri de aprovizionare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "tourism_leisure",
    name: "Tourismus und Freizeit",
    icon: "🏖️",
    color: "#EC4899",
    subtopics: [
      { id: "mass_tourism", name: { de: "Massentourismus", en: "Mass Tourism", hu: "Tömegturizmus", ro: "Turism de masă" }, questions: [], hasGenerator: true },
      { id: "alpine_tourism", name: { de: "Tourismus in den Alpen", en: "Tourism in the Alps", hu: "Alpesi turizmus", ro: "Turism în Alpi" }, questions: [], hasGenerator: true },
      { id: "sustainable_travel", name: { de: "Sanfter Tourismus", en: "Sustainable Travel", hu: "Fenntartható turizmus", ro: "Turism sustenabil" }, questions: [], hasGenerator: true },
      { id: "city_trips", name: { de: "Städtereisen", en: "City Trips", hu: "Városlátogatások", ro: "Turism urban" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K6_CURRICULUM = K6;
export let K6_GENERATOR_MAP: GeographieGeneratorMap = {};

export function setK6GeneratorMap(map: GeographieGeneratorMap) {
  K6_GENERATOR_MAP = map;
}

export function getK6Questions(selectedSubtopicIds: string[], lang: string = "hu", count = 10) {
  return getGeneratedQuestions(K6, K6_GENERATOR_MAP, selectedSubtopicIds, lang, count);
}

export { calculateGeographieMark, createMCQ, createTyping, mulberry32, pick, shuffle, asCurriculumThemes };
