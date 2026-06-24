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
    name: { de: "Vertiefung Orientierung", hu: "Tájékozódás elmélyítése", ro: "Aprofundarea orientării", en: "Advanced Orientation" },
    icon: "🧭",
    color: "#3B82F6",
    subtopics: [
      { id: "contour_lines", name: { de: "Höhenlinien", en: "Contour Lines", hu: "Szintvonalak", ro: "Curbe de nivel" }, questions: [], hasGenerator: true },
      { id: "gps_gis_basics", name: { de: "GPS und GIS Grundlagen", en: "GPS & GIS Basics", hu: "GPS és térinformatika", ro: "GPS és GIS" }, questions: [], hasGenerator: true },
      { id: "atlas_usage", name: { de: "Arbeit mit dem Atlas", en: "Using an Atlas", hu: "Atlasz használata", ro: "Utilizarea atlasului" }, questions: [], hasGenerator: true },
      { id: "time_zones", name: { de: "Zeitzonen der Erde", en: "Time Zones", hu: "Időzónák", ro: "Fusuri orare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "europe_overview",
    name: { de: "Europa im Überblick", hu: "Európa áttekintése", ro: "Prezentare generală a Europei", en: "Europe Overview" },
    icon: "🌐",
    color: "#2563EB",
    subtopics: [
      { id: "eu_geography", name: { de: "Europas Geografie", en: "European Geography", hu: "Európa földrajza", ro: "Geografia Europei" }, questions: [], hasGenerator: true },
      { id: "eu_mountain_ranges", name: { de: "Europäische Gebirge", en: "European Mountain Ranges", hu: "Európai hegységek", ro: "Lanțuri muntoase europene" }, questions: [], hasGenerator: true },
      { id: "eu_rivers_seas", name: { de: "Flüsse und Meere Europas", en: "Rivers and Seas of Europe", hu: "Európa folyói és tengererei", ro: "Râurile și mările Europei" }, questions: [], hasGenerator: true },
      { id: "population_europe", name: { de: "Bevölkerung Europas", en: "Population of Europe", hu: "Európa népessége", ro: "Populația Europei" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "climate_zones",
    name: { de: "Klima und Vegetationszonen", hu: "Éghajlati és növényzeti övezetek", ro: "Zone climatice și de vegetație", en: "Climate and Vegetation Zones" },
    icon: "☀️",
    color: "#10B981",
    subtopics: [
      { id: "tropical_zone", name: { de: "Die tropische Zone", en: "The Tropical Zone", hu: "Trópusi övezet", ro: "Zona tropicală" }, questions: [], hasGenerator: true },
      { id: "subtropical_zone", name: { de: "Die subtropische Zone", en: "Subtropical Zone", hu: "Szubtrópusi övezet", ro: "Zona subtropicală" }, questions: [], hasGenerator: true },
      { id: "temperate_zone", name: { de: "Die gemäßigte Zone", en: "Temperate Zone", hu: "Mérsékelt övezet", ro: "Zona temperată" }, questions: [], hasGenerator: true },
      { id: "polar_zone", name: { de: "Die kalte Zone", en: "Polar Zone", hu: "Hideg övezet", ro: "Zona polară" }, questions: [], hasGenerator: true },
      { id: "climate_zones_basics", name: { de: "Klimazonengrundsätze", en: "Climate Zone Basics", hu: "Éghajlati övezetek alapjai", ro: "Bazele zonelor climatice" }, questions: [], hasGenerator: true },
      { id: "climate_zones_eu", name: { de: "Klimazonen Europas", en: "Climate Zones of Europe", hu: "Európa éghajlati övezetei", ro: "Zonele climatice ale Europei" }, questions: [], hasGenerator: true },
      { id: "vegetation_zones", name: { de: "Vegetationszonen", en: "Vegetation Zones", hu: "Növényzeti övezetek", ro: "Zone de vegetație" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "europe_regions",
    name: { de: "Europas Regionen", hu: "Európa régiói", ro: "Regiunile Europei", en: "Europe's Regions" },
    icon: "🌍",
    color: "#F59E0B",
    subtopics: [
      { id: "northern_europe", name: { de: "Nordeuropa", en: "Northern Europe", hu: "Észak-Európa", ro: "Europa de Nord" }, questions: [], hasGenerator: true },
      { id: "western_europe", name: { de: "Westeuropa", en: "Western Europe", hu: "Nyugat-Európa", ro: "Europa de Vest" }, questions: [], hasGenerator: true },
      { id: "southern_europe", name: { de: "Südeuropa", en: "Southern Europe", hu: "Dél-Európa", ro: "Europa de Sud" }, questions: [], hasGenerator: true },
      { id: "eastern_europe", name: { de: "Osteuropa", en: "Eastern Europe", hu: "Kelet-Európa", ro: "Europa de Est" }, questions: [], hasGenerator: true },
      { id: "central_europe_neighbors", name: { de: "Mitteleuropa & Nachbarn", en: "Central Europe & Neighbors", hu: "Közép-Európa és szomszédai", ro: "Europa Centrală și vecinii" }, questions: [], hasGenerator: true },
      { id: "germany_regions", name: { de: "Regionen Deutschlands", en: "Regions of Germany", hu: "Németország régiói", ro: "Regiunile Germaniei" }, questions: [], hasGenerator: true },
      { id: "france_regions", name: { de: "Regionen Frankreichs", en: "Regions of France", hu: "Franciaország régiói", ro: "Regiunile Franței" }, questions: [], hasGenerator: true },
      { id: "uk_regions", name: { de: "Regionen Großbritanniens", en: "Regions of the UK", hu: "Nagy-Britannia régiói", ro: "Regiunile Marii Britanii" }, questions: [], hasGenerator: true },
      { id: "italy_regions", name: { de: "Regionen Italiens", en: "Regions of Italy", hu: "Olaszország régiói", ro: "Regiunile Italiei" }, questions: [], hasGenerator: true },
      { id: "spain_regions", name: { de: "Regionen Spaniens", en: "Regions of Spain", hu: "Spanyolország régiói", ro: "Regiunile Spaniei" }, questions: [], hasGenerator: true },
      { id: "poland_hungary", name: { de: "Polen und Ungarn", en: "Poland and Hungary", hu: "Lengyelország és Magyarország", ro: "Polonia și Ungaria" }, questions: [], hasGenerator: true },
      { id: "balkans", name: { de: "Der Balkan", en: "The Balkans", hu: "A Balkán", ro: "Balcanii" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "waters_oceans_k6",
    name: { de: "Wasser - Lebensader der Erde", hu: "Víz - a Föld éltető ereje", ro: "Apa - sursa de viață a Pământului", en: "Water - Lifeline of the Earth" },
    icon: "🌊",
    color: "#EF4444",
    subtopics: [
      { id: "ocean_currents", name: { de: "Meeresströmungen", en: "Ocean Currents", hu: "Tengeráramlások", ro: "Curenți oceanici" }, questions: [], hasGenerator: true },
      { id: "rivers_life", name: { de: "Flüsse und ihre Bedeutung", en: "Rivers and their Importance", hu: "Folyók jelentősége", ro: "Fluviile și importanța lor" }, questions: [], hasGenerator: true },
      { id: "water_scarcity", name: { de: "Wassermangel", en: "Water Scarcity", hu: "Vízhiány", ro: "Lipsa apei" }, questions: [], hasGenerator: true },
      { id: "glaciers_ice", name: { de: "Gletscher und polares Eis", en: "Glaciers and Polar Ice", hu: "Gleccserek és sarki jég", ro: "Ghețari și gheață polară" }, questions: [], hasGenerator: true },
      { id: "water_cycle_detailed", name: { de: "Der Wasserkreislauf", en: "The Water Cycle", hu: "A vízkör részletesen", ro: "Ciclul apei detaliat" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "agriculture_europe",
    name: { de: "Landwirtschaft in Europa", hu: "Mezőgazdaság Európában", ro: "Agricultura în Europa", en: "Agriculture in Europe" },
    icon: "🚜",
    color: "#8B5CF6",
    subtopics: [
      { id: "mediterranean_farming", name: { de: "Anbau am Mittelmeer", en: "Mediterranean Farming", hu: "Földközi-tengeri mezőgazdaság", ro: "Agricultura mediteraneană" }, questions: [], hasGenerator: true },
      { id: "livestock_farming", name: { de: "Viehhaltung", en: "Livestock Farming", hu: "Állattenyésztés", ro: "Creșterea animalelor" }, questions: [], hasGenerator: true },
      { id: "organic_farming", name: { de: "Ökologische Landwirtschaft", en: "Organic Farming", hu: "Ökológiai gazdálkodás", ro: "Agricultura ecologică" }, questions: [], hasGenerator: true },
      { id: "soil_types", name: { de: "Bodentypen", en: "Soil Types", hu: "Talajtípusok", ro: "Tipuri de sol" }, questions: [], hasGenerator: true },
      { id: "food_supply_chains", name: { de: "Nahrungsmittelwege", en: "Food Supply Chains", hu: "Élelmiszer-ellátási láncok", ro: "Lanțuri de aprovizionare" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "economy_transport",
    name: { de: "Wirtschaft und Verkehr", hu: "Gazdaság és közlekedés", ro: "Economie și transport", en: "Economy and Transport" },
    icon: "🏭",
    color: "#0891B2",
    subtopics: [
      { id: "eu_economy", name: { de: "Wirtschaft Europas", en: "Economy of Europe", hu: "Európa gazdasága", ro: "Economia Europei" }, questions: [], hasGenerator: true },
      { id: "eu_industry", name: { de: "Industrie in Europa", en: "Industry in Europe", hu: "Ipar Európában", ro: "Industria în Europa" }, questions: [], hasGenerator: true },
      { id: "transport_europe", name: { de: "Verkehr in Europa", en: "Transport in Europe", hu: "Közlekedés Európában", ro: "Transportul în Europa" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "tourism_leisure",
    name: { de: "Tourismus und Freizeit", hu: "Turizmus és szabadidő", ro: "Turism și timp liber", en: "Tourism and Leisure" },
    icon: "🏖️",
    color: "#EC4899",
    subtopics: [
      { id: "mass_tourism", name: { de: "Massentourismus", en: "Mass Tourism", hu: "Tömegturizmus", ro: "Turism de masă" }, questions: [], hasGenerator: false },
      { id: "alpine_tourism", name: { de: "Tourismus in den Alpen", en: "Tourism in the Alps", hu: "Alpesi turizmus", ro: "Turism în Alpi" }, questions: [], hasGenerator: false },
      { id: "sustainable_travel", name: { de: "Sanfter Tourismus", en: "Sustainable Travel", hu: "Fenntartható turizmus", ro: "Turism sustenabil" }, questions: [], hasGenerator: false },
      { id: "city_trips", name: { de: "Städtereisen", en: "City Trips", hu: "Városlátogatások", ro: "Turism urban" }, questions: [], hasGenerator: false },
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
