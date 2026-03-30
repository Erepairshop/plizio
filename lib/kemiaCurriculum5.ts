import {
  asCurriculumThemes,
  calculateKemiaMark,
  createMCQ,
  createTyping,
  getGeneratedQuestions,
  mulberry32,
  pick,
  shuffle,
  type KemiaGeneratorMap,
  type KemiaTheme,
} from "./kemiaCurriculumShared";

const K5: KemiaTheme[] = [
  {
    id: "matter_basics",
    name: "Stoffe im Alltag",
    icon: "🧱",
    color: "#EF4444",
    subtopics: [
      { id: "materials_daily", name: { de: "Alltagsstoffe", en: "Everyday Materials", hu: "Mindennapi anyagok", ro: "Substanțe cotidiene" }, questions: [], hasGenerator: true },
      { id: "solids_liquids_gases", name: { de: "Fest, flüssig, gasförmig", en: "Solids, Liquids, Gases", hu: "Szilárd, folyékony, gáz", ro: "Solid, lichid, gaz" }, questions: [], hasGenerator: true },
      { id: "state_changes_basic", name: { de: "Zustandsänderungen", en: "Changes of State", hu: "Halmazállapot-változás", ro: "Schimbări de stare" }, questions: [], hasGenerator: true },
      { id: "properties_hard_soft", name: { de: "Hart, weich, elastisch", en: "Hard, Soft, Elastic", hu: "Kemény, puha, rugalmas", ro: "Dur, moale, elastic" }, questions: [], hasGenerator: true },
      { id: "properties_waterproof", name: { de: "Wasserdicht oder saugend", en: "Waterproof or Absorbent", hu: "Vízálló vagy nedvszívó", ro: "Impermeabil sau absorbant" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "particle_intro",
    name: "Teilchenmodell",
    icon: "⚪",
    color: "#F59E0B",
    subtopics: [
      { id: "particle_idea", name: { de: "Alles besteht aus Teilchen", en: "Everything Is Made of Particles", hu: "Minden részecskékből áll", ro: "Totul este alcătuit din particule" }, questions: [], hasGenerator: true },
      { id: "particle_spacing", name: { de: "Teilchenabstand", en: "Particle Spacing", hu: "Részecskék távolsága", ro: "Distanța dintre particule" }, questions: [], hasGenerator: true },
      { id: "particle_motion", name: { de: "Teilchenbewegung", en: "Particle Motion", hu: "Részecskemozgás", ro: "Mișcarea particulelor" }, questions: [], hasGenerator: true },
      { id: "heating_particles", name: { de: "Erwärmen und Teilchen", en: "Heating and Particles", hu: "Melegítés és részecskék", ro: "Încălzirea și particulele" }, questions: [], hasGenerator: true },
      { id: "cooling_particles", name: { de: "Abkühlen und Teilchen", en: "Cooling and Particles", hu: "Hűtés és részecskék", ro: "Răcirea și particulele" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "mixtures",
    name: "Gemische trennen",
    icon: "🥣",
    color: "#10B981",
    subtopics: [
      { id: "pure_vs_mixture", name: { de: "Reinstoff oder Gemisch", en: "Pure Substance or Mixture", hu: "Tiszta anyag vagy keverék", ro: "Substanță pură sau amestec" }, questions: [], hasGenerator: true },
      { id: "solutions_intro", name: { de: "Lösungen", en: "Solutions", hu: "Oldatok", ro: "Soluții" }, questions: [], hasGenerator: true },
      { id: "suspensions_intro", name: { de: "Suspensionen", en: "Suspensions", hu: "Szuszpenziók", ro: "Suspensii" }, questions: [], hasGenerator: true },
      { id: "filtration_basic", name: { de: "Filtrieren", en: "Filtration", hu: "Szűrés", ro: "Filtrare" }, questions: [], hasGenerator: true },
      { id: "evaporation_basic", name: { de: "Eindampfen", en: "Evaporation Separation", hu: "Bepárlás", ro: "Evaporare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "water_air",
    name: "Wasser und Luft",
    icon: "💧",
    color: "#3B82F6",
    subtopics: [
      { id: "water_properties", name: { de: "Eigenschaften von Wasser", en: "Properties of Water", hu: "A víz tulajdonságai", ro: "Proprietățile apei" }, questions: [], hasGenerator: true },
      { id: "water_cycle_chem", name: { de: "Wasserkreislauf chemisch", en: "Water Cycle in Chemistry", hu: "Vízkörforgás kémiája", ro: "Ciclul apei în chimie" }, questions: [], hasGenerator: true },
      { id: "air_is_mixture", name: { de: "Luft als Gemisch", en: "Air as a Mixture", hu: "A levegő mint keverék", ro: "Aerul ca amestec" }, questions: [], hasGenerator: true },
      { id: "oxygen_for_burning", name: { de: "Sauerstoff und Brennen", en: "Oxygen and Burning", hu: "Oxigén és égés", ro: "Oxigen și ardere" }, questions: [], hasGenerator: true },
      { id: "carbon_dioxide_intro", name: { de: "Kohlenstoffdioxid", en: "Carbon Dioxide", hu: "Szén-dioxid", ro: "Dioxid de carbon" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "reactions_intro",
    name: "Chemische Veränderungen",
    icon: "✨",
    color: "#8B5CF6",
    subtopics: [
      { id: "physical_vs_chemical", name: { de: "Physikalisch oder chemisch", en: "Physical or Chemical Change", hu: "Fizikai vagy kémiai változás", ro: "Schimbare fizică sau chimică" }, questions: [], hasGenerator: true },
      { id: "burning_signs", name: { de: "Kennzeichen der Verbrennung", en: "Signs of Burning", hu: "Az égés jelei", ro: "Semnele arderii" }, questions: [], hasGenerator: true },
      { id: "rusting_intro", name: { de: "Rosten", en: "Rusting", hu: "Rozsdásodás", ro: "Ruginire" }, questions: [], hasGenerator: true },
      { id: "dissolving_vs_reacting", name: { de: "Lösen oder reagieren", en: "Dissolving or Reacting", hu: "Oldódás vagy reakció", ro: "Dizolvare sau reacție" }, questions: [], hasGenerator: true },
      { id: "reaction_clues", name: { de: "Hinweise auf Reaktionen", en: "Clues for Reactions", hu: "Reakció jelei", ro: "Indicii ale reacțiilor" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "lab_safety",
    name: "Labor und Messen",
    icon: "🧪",
    color: "#EC4899",
    subtopics: [
      { id: "lab_rules", name: { de: "Laborregeln", en: "Lab Rules", hu: "Labor szabályok", ro: "Reguli de laborator" }, questions: [], hasGenerator: true },
      { id: "hazard_symbols_basic", name: { de: "Gefahrensymbole", en: "Hazard Symbols", hu: "Veszélyjelek", ro: "Simboluri de pericol" }, questions: [], hasGenerator: true },
      { id: "measuring_volume", name: { de: "Volumen messen", en: "Measuring Volume", hu: "Térfogat mérése", ro: "Măsurarea volumului" }, questions: [], hasGenerator: true },
      { id: "measuring_mass", name: { de: "Masse messen", en: "Measuring Mass", hu: "Tömeg mérése", ro: "Măsurarea masei" }, questions: [], hasGenerator: true },
      { id: "simple_experiments", name: { de: "Einfache Versuche", en: "Simple Experiments", hu: "Egyszerű kísérletek", ro: "Experimente simple" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K5_CURRICULUM = K5;
export let K5_GENERATOR_MAP: KemiaGeneratorMap = {};

export function setK5GeneratorMap(map: KemiaGeneratorMap) {
  K5_GENERATOR_MAP = map;
}

export function getK5Questions(selectedSubtopicIds: string[], count = 10) {
  return getGeneratedQuestions(K5, K5_GENERATOR_MAP, selectedSubtopicIds, count);
}

export { calculateKemiaMark, createMCQ, createTyping, mulberry32, pick, shuffle, asCurriculumThemes };
