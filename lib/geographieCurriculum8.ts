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

const K8: GeographieTheme[] = [
  {
    id: "exogenic_surface",
    name: "Exogene Prozesse",
    icon: "🏜️",
    color: "#F59E0B",
    subtopics: [
      { id: "weathering_erosion", name: { de: "Verwitterung & Erosion", en: "Weathering & Erosion", hu: "Aprózódás és erózió", ro: "Meteorizarea și eroziunea" }, questions: [], hasGenerator: true },
      { id: "fluvial_landforms", name: { de: "Formung durch Flüsse", en: "Fluvial Landforms", hu: "Folyóvízi formálás", ro: "Relief fluvial" }, questions: [], hasGenerator: true },
      { id: "glacial_landforms", name: { de: "Glaziale Formung", en: "Glacial Landforms", hu: "Jégkorszaki formálás", ro: "Relief glaciar" }, questions: [], hasGenerator: true },
      { id: "aeolian_landforms", name: { de: "Formung durch Wind", en: "Aeolian Landforms", hu: "Szél formálta felszín", ro: "Relief eolian" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "world_economy_sectors",
    name: "Weltwirtschaft",
    icon: "🏭",
    color: "#3B82F6",
    subtopics: [
      { id: "economic_sectors", name: { de: "Wirtschaftssektoren", en: "Economic Sectors", hu: "Gazdasági szektorok", ro: "Sectoare economice" }, questions: [], hasGenerator: true },
      { id: "globalization_impact", name: { de: "Globalisierung", en: "Globalization", hu: "Globalizáció", ro: "Globalizarea" }, questions: [], hasGenerator: true },
      { id: "world_trade_routes", name: { de: "Welthandel & Transport", en: "World Trade & Transport", hu: "Világkereskedelem és szállítás", ro: "Comerțul mondial și transportul" }, questions: [], hasGenerator: true },
      { id: "locational_factors", name: { de: "Standortfaktoren", en: "Locational Factors", hu: "Telepítő tényezők", ro: "Factori de localizare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "latin_america_dynamics",
    name: "Lateinamerika",
    icon: "💃",
    color: "#EF4444",
    subtopics: [
      { id: "amazon_rainforest_use", name: { de: "Nutzung des Amazonas", en: "Amazon Rainforest Use", hu: "Amazonas hasznosítása", ro: "Utilizarea Amazoniei" }, questions: [], hasGenerator: true },
      { id: "brazil_economic_power", name: { de: "Wirtschaftsmacht Brasilien", en: "Brazil's Economy", hu: "Brazília gazdasága", ro: "Economia Braziliei" }, questions: [], hasGenerator: true },
      { id: "andes_mining_climate", name: { de: "Anden: Bergbau & Klima", en: "Andes: Mining & Climate", hu: "Andok: bányászat és éghajlat", ro: "Anzii: minerit și climă" }, questions: [], hasGenerator: true },
      { id: "central_america_islands", name: { de: "Mittelamerika & Karibik", en: "Central America & Caribbean", hu: "Közép-Amerika és Karib-térség", ro: "America Centrală și Caraibe" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "africa_challenges",
    name: "Afrika südlich der Sahara",
    icon: "🦒",
    color: "#10B981",
    subtopics: [
      { id: "africa_climate_zones", name: { de: "Klimazonen Afrikas", en: "Africa Climate Zones", hu: "Afrika éghajlati övezetei", ro: "Zonele climatice ale Africii" }, questions: [], hasGenerator: true },
      { id: "hunger_resource_conflict", name: { de: "Hunger & Ressourcen", en: "Hunger & Resources", hu: "Éhezés és erőforrások", ro: "Foamete și resurse" }, questions: [], hasGenerator: true },
      { id: "developing_aid_projects", name: { de: "Entwicklungshilfe", en: "Development Aid", hu: "Fejlesztési segély", ro: "Ajutor pentru dezvoltare" }, questions: [], hasGenerator: true },
      { id: "africa_megacities_dev", name: { de: "Afrikas Millionenstädte", en: "Africa's Megacities", hu: "Afrika nagyvárosai", ro: "Mega-orașele Africii" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "australia_oceania_focus",
    name: "Australien und Ozeanien",
    icon: "🦘",
    color: "#8B5CF6",
    subtopics: [
      { id: "australia_outback_resources", name: { de: "Australisches Outback", en: "Australia Outback", hu: "Ausztrál Outback", ro: "Outback-ul australian" }, questions: [], hasGenerator: true },
      { id: "oceania_islands_threat", name: { de: "Inselwelt Ozeanien", en: "Oceania Islands", hu: "Óceánia szigetvilága", ro: "Insulele Oceaniei" }, questions: [], hasGenerator: true },
      { id: "great_barrier_reef_env", name: { de: "Great Barrier Reef", en: "Great Barrier Reef", hu: "Nagy-korallzátony", ro: "Marea Barieră de Corali" }, questions: [], hasGenerator: true },
      { id: "antarctica_research", name: { de: "Forschungsraum Antarktis", en: "Antarctica Research", hu: "Antarktisz kutatása", ro: "Cercetarea Antarcticii" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "global_challenges_future",
    name: "Herausforderungen der Zukunft",
    icon: "🚀",
    color: "#EC4899",
    subtopics: [
      { id: "energy_transition_global", name: { de: "Energiewende weltweit", en: "Global Energy Transition", hu: "Globális energiaváltás", ro: "Tranziția energetică globală" }, questions: [], hasGenerator: true },
      { id: "sustainable_development_goals", name: { de: "Nachhaltigkeitsziele", en: "Sustainable Dev Goals", hu: "Fenntarthatósági célok", ro: "Obiective de dezvoltare durabilă" }, questions: [], hasGenerator: true },
      { id: "digitalization_world", name: { de: "Digitale Vernetzung", en: "Digitalization", hu: "Digitalizáció", ro: "Digitalizarea" }, questions: [], hasGenerator: true },
      { id: "future_cities_planning", name: { de: "Städte der Zukunft", en: "Future Cities", hu: "A jövő városai", ro: "Orașele viitorului" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K8_CURRICULUM = K8;
export let K8_GENERATOR_MAP: GeographieGeneratorMap = {};

export function setK8GeneratorMap(map: GeographieGeneratorMap) {
  K8_GENERATOR_MAP = map;
}

export function getK8Questions(selectedSubtopicIds: string[], lang: string = "hu", count = 10) {
  return getGeneratedQuestions(K8, K8_GENERATOR_MAP, selectedSubtopicIds, lang, count);
}

export { calculateGeographieMark, createMCQ, createTyping, mulberry32, pick, shuffle, asCurriculumThemes };
