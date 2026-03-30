import { getGeneratedQuestions, type KemiaGeneratorMap, type KemiaTheme } from "./kemiaCurriculumShared";

const K6: KemiaTheme[] = [
  {
    id: "atoms_elements",
    name: "Atome und Elemente",
    icon: "⚛️",
    color: "#EF4444",
    subtopics: [
      { id: "atom_model_intro", name: { de: "Atommodell", en: "Atom Model", hu: "Atommodell", ro: "Modelul atomului" }, questions: [], hasGenerator: true },
      { id: "elements_intro", name: { de: "Elemente", en: "Elements", hu: "Elemek", ro: "Elemente" }, questions: [], hasGenerator: true },
      { id: "metals_nonmetals", name: { de: "Metalle und Nichtmetalle", en: "Metals and Nonmetals", hu: "Fémek és nemfémek", ro: "Metale și nemetale" }, questions: [], hasGenerator: true },
      { id: "symbols_intro", name: { de: "Elementsymbole", en: "Element Symbols", hu: "Vegyjelek", ro: "Simboluri chimice" }, questions: [], hasGenerator: true },
      { id: "periodic_table_intro", name: { de: "Periodensystem Einstieg", en: "Intro to Periodic Table", hu: "Periódusos rendszer alapok", ro: "Introducere în tabelul periodic" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "compounds_particles",
    name: "Verbindungen und Teilchen",
    icon: "🔗",
    color: "#F59E0B",
    subtopics: [
      { id: "compounds_intro", name: { de: "Verbindungen", en: "Compounds", hu: "Vegyületek", ro: "Compuși" }, questions: [], hasGenerator: true },
      { id: "molecules_intro", name: { de: "Moleküle", en: "Molecules", hu: "Molekulák", ro: "Molecule" }, questions: [], hasGenerator: true },
      { id: "atoms_vs_molecules", name: { de: "Atom oder Molekül", en: "Atom or Molecule", hu: "Atom vagy molekula", ro: "Atom sau moleculă" }, questions: [], hasGenerator: true },
      { id: "element_vs_compound", name: { de: "Element oder Verbindung", en: "Element or Compound", hu: "Elem vagy vegyület", ro: "Element sau compus" }, questions: [], hasGenerator: true },
      { id: "mixture_vs_compound", name: { de: "Gemisch oder Verbindung", en: "Mixture or Compound", hu: "Keverék vagy vegyület", ro: "Amestec sau compus" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "reactions_equations",
    name: "Reaktionen verstehen",
    icon: "💥",
    color: "#10B981",
    subtopics: [
      { id: "reactants_products", name: { de: "Edukte und Produkte", en: "Reactants and Products", hu: "Kiindulási anyagok és termékek", ro: "Reactanți și produși" }, questions: [], hasGenerator: true },
      { id: "reaction_energy", name: { de: "Energie bei Reaktionen", en: "Energy in Reactions", hu: "Energia a reakciókban", ro: "Energia în reacții" }, questions: [], hasGenerator: true },
      { id: "combustion_reactions", name: { de: "Verbrennungsreaktionen", en: "Combustion Reactions", hu: "Égési reakciók", ro: "Reacții de combustie" }, questions: [], hasGenerator: true },
      { id: "decomposition_intro", name: { de: "Zerlegung", en: "Decomposition", hu: "Bomlás", ro: "Descompunere" }, questions: [], hasGenerator: true },
      { id: "word_equations", name: { de: "Wortgleichungen", en: "Word Equations", hu: "Szöveges egyenletek", ro: "Ecuații în cuvinte" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "acids_bases_intro",
    name: "Säuren und Basen",
    icon: "🧫",
    color: "#3B82F6",
    subtopics: [
      { id: "acids_everyday", name: { de: "Säuren im Alltag", en: "Acids in Everyday Life", hu: "Savak a hétköznapokban", ro: "Acizi în viața de zi cu zi" }, questions: [], hasGenerator: true },
      { id: "bases_everyday", name: { de: "Basen im Alltag", en: "Bases in Everyday Life", hu: "Bázisok a hétköznapokban", ro: "Baze în viața de zi cu zi" }, questions: [], hasGenerator: true },
      { id: "indicators_intro", name: { de: "Indikatoren", en: "Indicators", hu: "Indikátorok", ro: "Indicatori" }, questions: [], hasGenerator: true },
      { id: "ph_scale_intro", name: { de: "pH-Skala", en: "pH Scale", hu: "pH-skála", ro: "Scara pH" }, questions: [], hasGenerator: true },
      { id: "neutralization_intro", name: { de: "Neutralisation", en: "Neutralization", hu: "Semlegesítés", ro: "Neutralizare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "solutions_separation",
    name: "Lösungen und Trennmethoden",
    icon: "💧",
    color: "#8B5CF6",
    subtopics: [
      { id: "solubility_intro", name: { de: "Löslichkeit", en: "Solubility", hu: "Oldhatóság", ro: "Solubilitate" }, questions: [], hasGenerator: true },
      { id: "concentration_basic", name: { de: "Konzentration", en: "Concentration", hu: "Koncentráció", ro: "Concentrație" }, questions: [], hasGenerator: true },
      { id: "crystallization", name: { de: "Kristallisation", en: "Crystallization", hu: "Kristályosítás", ro: "Cristalizare" }, questions: [], hasGenerator: true },
      { id: "distillation_intro", name: { de: "Destillation", en: "Distillation", hu: "Desztilláció", ro: "Distilare" }, questions: [], hasGenerator: true },
      { id: "chromatography_intro", name: { de: "Chromatografie", en: "Chromatography", hu: "Kromatográfia", ro: "Cromatografie" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "environment_resources",
    name: "Chemie und Umwelt",
    icon: "🌍",
    color: "#EC4899",
    subtopics: [
      { id: "water_purification", name: { de: "Wasserreinigung", en: "Water Purification", hu: "Víztisztítás", ro: "Purificarea apei" }, questions: [], hasGenerator: true },
      { id: "air_pollution_intro", name: { de: "Luftverschmutzung", en: "Air Pollution", hu: "Légszennyezés", ro: "Poluarea aerului" }, questions: [], hasGenerator: true },
      { id: "recycling_materials", name: { de: "Recycling von Stoffen", en: "Recycling Materials", hu: "Anyagok újrahasznosítása", ro: "Reciclarea materialelor" }, questions: [], hasGenerator: true },
      { id: "fossil_vs_renewable", name: { de: "Fossil oder erneuerbar", en: "Fossil or Renewable", hu: "Fosszilis vagy megújuló", ro: "Fosil sau regenerabil" }, questions: [], hasGenerator: true },
      { id: "chemistry_safety_home", name: { de: "Chemiesicherheit zuhause", en: "Chemistry Safety at Home", hu: "Kémiai biztonság otthon", ro: "Siguranță chimică acasă" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K6_CURRICULUM = K6;
export let K6_GENERATOR_MAP: KemiaGeneratorMap = {};

export function setK6GeneratorMap(map: KemiaGeneratorMap) {
  K6_GENERATOR_MAP = map;
}

export function getK6Questions(selectedSubtopicIds: string[], count = 10) {
  return getGeneratedQuestions(K6, K6_GENERATOR_MAP, selectedSubtopicIds, count);
}

export { calculateKemiaMark } from "./kemiaCurriculumShared";
