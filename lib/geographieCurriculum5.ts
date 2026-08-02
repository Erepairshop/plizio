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

const K5: GeographieTheme[] = [
  {
    id: "map_skills_basic",
    name: { de: "Orientierung auf der Erde", hu: "Tájékozódás a Földön", ro: "Orientarea pe Pământ", en: "Orientation on Earth" },
    icon: "🗺️",
    color: "#3B82F6",
    subtopics: [
      { id: "compass_directions", name: { de: "Himmelsrichtungen", en: "Compass Directions", hu: "Égtájak", ro: "Puncte cardinale" }, questions: [], hasGenerator: true },
      { id: "map_symbols", name: { de: "Kartenzeichen", en: "Map Symbols", hu: "Térképjelek", ro: "Simboluri cartografice" }, questions: [], hasGenerator: true },
      { id: "scale_basics", name: { de: "Maßstab Grundlagen", en: "Scale Basics", hu: "Méretarány alapok", ro: "Bazele scării" }, questions: [], hasGenerator: true },
      { id: "globe_vs_map", name: { de: "Globus und Karte", en: "Globe vs. Map", hu: "Glóbusz és térkép", ro: "Glob și hartă" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "earth_basics",
    name: { de: "Unser Planet Erde", hu: "Bolygónk, a Föld", ro: "Planeta noastră Pământ", en: "Our Planet Earth" },
    icon: "🌍",
    color: "#10B981",
    subtopics: [
      { id: "continents_oceans", name: { de: "Kontinente und Ozeane", en: "Continents and Oceans", hu: "Kontinensek és óceánok", ro: "Continente și oceane" }, questions: [], hasGenerator: true },
      { id: "earth_layers", name: { de: "Aufbau der Erde", en: "Layers of the Earth", hu: "A Föld felépítése", ro: "Structura Pământului" }, questions: [], hasGenerator: true },
      { id: "rotation_revolution", name: { de: "Erdbewegungen", en: "Earth Movements", hu: "Földmozgások", ro: "Mișcările Pământului" }, questions: [], hasGenerator: true },
      { id: "zones_light", name: { de: "Beleuchtungszonen", en: "Lighting Zones", hu: "Világítási övezetek", ro: "Zone de iluminare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "germany_landscapes",
    name: { de: "Landschaften und Regionen", hu: "Tájak és régiók", ro: "Peisaje și regiuni", en: "Landscapes and Regions" },
    icon: "⛰️",
    color: "#F59E0B",
    subtopics: [
      { id: "germany_states", name: { de: "Regionen und Hauptorte", en: "Regions and Key Centers", hu: "Régiók és központok", ro: "Regiuni și centre" }, questions: [], hasGenerator: true },
      { id: "coasts_north_baltic", name: { de: "Küsten, Seen und Flüsse", en: "Coasts, Lakes and Rivers", hu: "Partok, tavak és folyók", ro: "Coaste, lacuri și râuri" }, questions: [], hasGenerator: true },
      { id: "lowlands_north", name: { de: "Ebenen und Tiefländer", en: "Plains and Lowlands", hu: "Síkságok és alföldek", ro: "Câmpii și zone joase" }, questions: [], hasGenerator: true },
      { id: "central_uplands", name: { de: "Hügel- und Mittelgebirgsräume", en: "Hills and Uplands", hu: "Dombságok és középhegységek", ro: "Dealuri și podișuri" }, questions: [], hasGenerator: true },
      { id: "alps_foothills", name: { de: "Gebirge und Hochlagen", en: "Mountains and Highlands", hu: "Hegységek és magasabb tájak", ro: "Munți și zone înalte" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "living_spaces",
    name: { de: "Leben in Stadt und Land", hu: "Élet városon és falun", ro: "Viața la oraș și la sat", en: "Life in City and Country" },
    icon: "🏘️",
    color: "#EF4444",
    subtopics: [
      { id: "city_functions", name: { de: "Aufgaben einer Stadt", en: "City Functions", hu: "Városi funkciók", ro: "Funcțiile orașului" }, questions: [], hasGenerator: true },
      { id: "village_life", name: { de: "Leben auf dem Dorf", en: "Village Life", hu: "Falusi élet", ro: "Viața la sat" }, questions: [], hasGenerator: true },
      { id: "agriculture_basics", name: { de: "Landwirtschaft Grundlagen", en: "Agriculture Basics", hu: "Mezőgazdaság alapok", ro: "Bazele agriculturii" }, questions: [], hasGenerator: true },
      { id: "industry_zones", name: { de: "Industriegebiete", en: "Industrial Zones", hu: "Ipari övezetek", ro: "Zone industriale" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "europe_overview_k5",
    name: { de: "Europa im Überblick", hu: "Európa áttekintése", ro: "Prezentare generală a Europei", en: "Europe Overview" },
    icon: "🇪🇺",
    color: "#8B5CF6",
    subtopics: [
      { id: "europe_countries_capitals", name: { de: "Länder und Hauptstädte", en: "Countries and Capitals", hu: "Országok és fővárosok", ro: "Țări și capitale" }, questions: [], hasGenerator: true },
      { id: "europe_mountains_rivers", name: { de: "Gebirge und Flüsse", en: "Mountains and Rivers", hu: "Hegységek és folyók", ro: "Munți și fluvii" }, questions: [], hasGenerator: true },
      { id: "europe_climates", name: { de: "Klimazonen Europas", en: "European Climates", hu: "Európa éghajlatai", ro: "Climele Europei" }, questions: [], hasGenerator: true },
      { id: "eu_basics", name: { de: "Die Europäische Union", en: "EU Basics", hu: "Európai Unió alapok", ro: "Bazele UE" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "nature_environment_k5",
    name: { de: "Natur und Umwelt", hu: "Természet és környezet", ro: "Natură și mediu", en: "Nature and Environment" },
    icon: "🌿",
    color: "#EC4899",
    subtopics: [
      { id: "national_parks", name: { de: "Nationalparks", en: "National Parks", hu: "Nemzeti parkok", ro: "Parcuri naționale" }, questions: [], hasGenerator: true },
      { id: "weather_elements", name: { de: "Wetterelemente", en: "Weather Elements", hu: "Időjárási elemek", ro: "Elemente meteorologice" }, questions: [], hasGenerator: true },
      { id: "waste_recycling", name: { de: "Müll und Recycling", en: "Waste and Recycling", hu: "Hulladék és újrahasznosítás", ro: "Deșeuri și reciclare" }, questions: [], hasGenerator: true },
      { id: "energy_saving", name: { de: "Energiesparen", en: "Energy Saving", hu: "Energiatakarékosság", ro: "Economisirea energiei" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K5_CURRICULUM = K5;
export let K5_GENERATOR_MAP: GeographieGeneratorMap = {};

export function setK5GeneratorMap(map: GeographieGeneratorMap) {
  K5_GENERATOR_MAP = map;
}

export function getK5Questions(selectedSubtopicIds: string[], lang: string = "hu", count = 10) {
  return getGeneratedQuestions(K5, K5_GENERATOR_MAP, selectedSubtopicIds, lang, count);
}

export { calculateGeographieMark, createMCQ, createTyping, mulberry32, pick, shuffle, asCurriculumThemes };
