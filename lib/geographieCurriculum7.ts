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

const K7: GeographieTheme[] = [
  {
    id: "geodynamics_internal",
    name: "Endogene Prozesse",
    icon: "🌋",
    color: "#EF4444",
    subtopics: [
      { id: "plate_tectonics", name: { de: "Plattentektonik", en: "Plate Tectonics", hu: "Lemeztektonika", ro: "Tectonica plăcilor" }, questions: [], hasGenerator: true },
      { id: "earthquakes_measuring", name: { de: "Erdbeben", en: "Earthquakes", hu: "Földrengések", ro: "Cutremure" }, questions: [], hasGenerator: true },
      { id: "volcanism_types", name: { de: "Vulkanismus", en: "Volcanism", hu: "Vulkanizmus", ro: "Vulcanism" }, questions: [], hasGenerator: true },
      { id: "mountain_formation", name: { de: "Gebirgsbildung", en: "Mountain Formation", hu: "Hegységképződés", ro: "Formarea munților" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "weather_climate_dynamics",
    name: "Wetter und Klima",
    icon: "⛈️",
    color: "#3B82F6",
    subtopics: [
      { id: "atmosphere_layers", name: { de: "Aufbau der Atmosphäre", en: "Atmosphere Layers", hu: "Légkör felépítése", ro: "Straturile atmosferei" }, questions: [], hasGenerator: true },
      { id: "global_wind_systems", name: { de: "Planetarische Zirkulation", en: "Global Wind Systems", hu: "Globális szélrendszerek", ro: "Circulația atmosferică" }, questions: [], hasGenerator: true },
      { id: "high_low_pressure", name: { de: "Hoch- und Tiefdruck", en: "High & Low Pressure", hu: "Magas és alacsony nyomás", ro: "Presiune ridicată și scăzută" }, questions: [], hasGenerator: true },
      { id: "climate_graphs_analysis", name: { de: "Klimadiagramme auswerten", en: "Climate Graph Analysis", hu: "Klímadiagram elemzés", ro: "Analiza diagramelor climatice" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "population_migration",
    name: "Bevölkerung und Migration",
    icon: "👥",
    color: "#F59E0B",
    subtopics: [
      { id: "population_density_global", name: { de: "Bevölkerungsverteilung", en: "Population Distribution", hu: "Népsűrűség eloszlása", ro: "Distribuția populației" }, questions: [], hasGenerator: true },
      { id: "demographic_transition", name: { de: "Demographischer Übergang", en: "Demographic Transition", hu: "Demográfiai átmenet", ro: "Tranziția demografică" }, questions: [], hasGenerator: true },
      { id: "migration_push_pull", name: { de: "Ursachen von Migration", en: "Causes of Migration", hu: "Migráció okai", ro: "Cauzele migrației" }, questions: [], hasGenerator: true },
      { id: "urbanization_megacities", name: { de: "Verstädterung & Megastädte", en: "Urbanization & Megacities", hu: "Urbanizáció és megavárosok", ro: "Urbanizare și mega-orașe" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "north_america_focus",
    name: "Nordamerika",
    icon: "🇺🇸",
    color: "#10B981",
    subtopics: [
      { id: "usa_landscapes", name: { de: "Naturräume der USA", en: "USA Landscapes", hu: "USA tájegységek", ro: "Relieful SUA" }, questions: [], hasGenerator: true },
      { id: "belt_system_agriculture", name: { de: "Landwirtschaftliche Belts", en: "Agricultural Belts", hu: "Mezőgazdasági övezetek", ro: "Centuri agricole" }, questions: [], hasGenerator: true },
      { id: "silicon_valley_high_tech", name: { de: "High-Tech-Regionen", en: "High-Tech Regions", hu: "High-tech régiók", ro: "Regiuni de înaltă tehnologie" }, questions: [], hasGenerator: true },
      { id: "canada_overview", name: { de: "Kanada im Überblick", en: "Canada Overview", hu: "Kanada áttekintés", ro: "Prezentare generală Canada" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "asia_dynamics",
    name: "Asien: Kontrastreicher Kontinent",
    icon: "⛩️",
    color: "#8B5CF6",
    subtopics: [
      { id: "monsoon_mechanics", name: { de: "Der Monsun", en: "Monsoon Mechanics", hu: "A monszun", ro: "Musonul" }, questions: [], hasGenerator: true },
      { id: "china_rise_economy", name: { de: "Wirtschaftsmacht China", en: "China's Economy", hu: "Kína gazdasága", ro: "Economia Chinei" }, questions: [], hasGenerator: true },
      { id: "india_population_dev", name: { de: "Entwicklungsschwellenland Indien", en: "India's Development", hu: "India fejlődése", ro: "Dezvoltarea Indiei" }, questions: [], hasGenerator: true },
      { id: "japan_hazards_high_tech", name: { de: "Japan: Naturgefahr & Technik", en: "Japan: Hazards & Tech", hu: "Japán: veszélyek és technika", ro: "Japonia: hazarde și tehnologie" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "environment_global_k7",
    name: "Globale Umweltprobleme",
    icon: "🌡️",
    color: "#EC4899",
    subtopics: [
      { id: "global_warming_basics", name: { de: "Erderwärmung Ursachen", en: "Global Warming Basics", hu: "Globális felmelegedés", ro: "Încălzirea globală" }, questions: [], hasGenerator: true },
      { id: "tropical_rainforest_destruction", name: { de: "Regenwaldzerstörung", en: "Rainforest Destruction", hu: "Esőerdők pusztulása", ro: "Distrugerea pădurilor tropicale" }, questions: [], hasGenerator: true },
      { id: "desertification_sahel", name: { de: "Wüstenausbreitung", en: "Desertification", hu: "Elsivatagosodás", ro: "Deșertificare" }, questions: [], hasGenerator: true },
      { id: "ocean_pollution_plastic", name: { de: "Verschmutzung der Meere", en: "Ocean Pollution", hu: "Óceánok szennyezése", ro: "Poluarea oceanelor" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K7_CURRICULUM = K7;
export let K7_GENERATOR_MAP: GeographieGeneratorMap = {};

export function setK7GeneratorMap(map: GeographieGeneratorMap) {
  K7_GENERATOR_MAP = map;
}

export function getK7Questions(selectedSubtopicIds: string[], lang: string = "hu", count = 10) {
  return getGeneratedQuestions(K7, K7_GENERATOR_MAP, selectedSubtopicIds, lang, count);
}

export { calculateGeographieMark, createMCQ, createTyping, mulberry32, pick, shuffle, asCurriculumThemes };
