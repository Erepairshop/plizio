import { getGeneratedQuestions, type KemiaGeneratorMap, type KemiaTheme } from "./kemiaCurriculumShared";

const K7: KemiaTheme[] = [
  {
    id: "atomic_structure",
    name: "Atombau",
    icon: "⚛️",
    color: "#EF4444",
    subtopics: [
      { id: "protons_neutrons_electrons", name: { de: "Protonen, Neutronen, Elektronen", en: "Protons, Neutrons, Electrons", hu: "Protonok, neutronok, elektronok", ro: "Protoni, neutroni, electroni" }, questions: [], hasGenerator: true },
      { id: "atomic_number", name: { de: "Ordnungszahl", en: "Atomic Number", hu: "Rendszám", ro: "Număr atomic" }, questions: [], hasGenerator: true },
      { id: "mass_number", name: { de: "Massenzahl", en: "Mass Number", hu: "Tömegszám", ro: "Număr de masă" }, questions: [], hasGenerator: true },
      { id: "electron_shells", name: { de: "Elektronenschalen", en: "Electron Shells", hu: "Elektronhéjak", ro: "Straturi electronice" }, questions: [], hasGenerator: true },
      { id: "isotopes_intro", name: { de: "Isotope", en: "Isotopes", hu: "Izotópok", ro: "Izotopi" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "periodic_table",
    name: "Periodensystem",
    icon: "📋",
    color: "#F59E0B",
    subtopics: [
      { id: "groups_periods", name: { de: "Gruppen und Perioden", en: "Groups and Periods", hu: "Csoportok és periódusok", ro: "Grupe și perioade" }, questions: [], hasGenerator: true },
      { id: "alkali_metals", name: { de: "Alkalimetalle", en: "Alkali Metals", hu: "Alkálifémek", ro: "Metale alcaline" }, questions: [], hasGenerator: true },
      { id: "halogens", name: { de: "Halogene", en: "Halogens", hu: "Halogének", ro: "Halogeni" }, questions: [], hasGenerator: true },
      { id: "noble_gases", name: { de: "Edelgase", en: "Noble Gases", hu: "Nemesgázok", ro: "Gaze nobile" }, questions: [], hasGenerator: true },
      { id: "periodic_trends_basic", name: { de: "Einfache Trends", en: "Basic Periodic Trends", hu: "Egyszerű periódusos trendek", ro: "Tendințe periodice simple" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "bonding",
    name: "Bindungen",
    icon: "🔗",
    color: "#10B981",
    subtopics: [
      { id: "chemical_bonds_intro", name: { de: "Chemische Bindung", en: "Chemical Bonds", hu: "Kémiai kötés", ro: "Legături chimice" }, questions: [], hasGenerator: true },
      { id: "ionic_bonding", name: { de: "Ionenbindung", en: "Ionic Bonding", hu: "Ionos kötés", ro: "Legătură ionică" }, questions: [], hasGenerator: true },
      { id: "covalent_bonding", name: { de: "Atombindung", en: "Covalent Bonding", hu: "Kovalens kötés", ro: "Legătură covalentă" }, questions: [], hasGenerator: true },
      { id: "molecular_formulas", name: { de: "Molekülformeln", en: "Molecular Formulas", hu: "Molekulaképletek", ro: "Formule moleculare" }, questions: [], hasGenerator: true },
      { id: "valence_intro", name: { de: "Valenz", en: "Valency", hu: "Vegyérték", ro: "Valență" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "reactions_stoich",
    name: "Reaktionen und Gleichungen",
    icon: "⚖️",
    color: "#3B82F6",
    subtopics: [
      { id: "equations_symbols", name: { de: "Reaktionsgleichungen", en: "Chemical Equations", hu: "Kémiai egyenletek", ro: "Ecuații chimice" }, questions: [], hasGenerator: true },
      { id: "balancing_intro", name: { de: "Gleichungen ausgleichen", en: "Balancing Equations", hu: "Egyenletrendezés", ro: "Echilibrarea ecuațiilor" }, questions: [], hasGenerator: true },
      { id: "conservation_mass", name: { de: "Massenerhaltung", en: "Conservation of Mass", hu: "Tömegmegmaradás", ro: "Conservarea masei" }, questions: [], hasGenerator: true },
      { id: "reaction_types_basic", name: { de: "Reaktionstypen", en: "Reaction Types", hu: "Reakciótípusok", ro: "Tipuri de reacții" }, questions: [], hasGenerator: true },
      { id: "oxidation_intro", name: { de: "Oxidation", en: "Oxidation", hu: "Oxidáció", ro: "Oxidare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "acids_bases_salts",
    name: "Säuren, Basen, Salze",
    icon: "🧪",
    color: "#8B5CF6",
    subtopics: [
      { id: "acid_properties", name: { de: "Eigenschaften von Säuren", en: "Properties of Acids", hu: "Savak tulajdonságai", ro: "Proprietățile acizilor" }, questions: [], hasGenerator: true },
      { id: "base_properties", name: { de: "Eigenschaften von Basen", en: "Properties of Bases", hu: "Bázisok tulajdonságai", ro: "Proprietățile bazelor" }, questions: [], hasGenerator: true },
      { id: "salt_formation", name: { de: "Salzbildung", en: "Salt Formation", hu: "Sók képződése", ro: "Formarea sărurilor" }, questions: [], hasGenerator: true },
      { id: "neutralization_equation", name: { de: "Neutralisationsgleichung", en: "Neutralization Equation", hu: "Semlegesítési egyenlet", ro: "Ecuația neutralizării" }, questions: [], hasGenerator: true },
      { id: "indicator_colors", name: { de: "Indikatorfarben", en: "Indicator Colors", hu: "Indikátor színei", ro: "Culorile indicatorilor" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "metals_resources",
    name: "Metalle und Rohstoffe",
    icon: "⛏️",
    color: "#EC4899",
    subtopics: [
      { id: "metal_properties", name: { de: "Eigenschaften der Metalle", en: "Properties of Metals", hu: "A fémek tulajdonságai", ro: "Proprietățile metalelor" }, questions: [], hasGenerator: true },
      { id: "metal_reactivity", name: { de: "Reaktivität von Metallen", en: "Metal Reactivity", hu: "Fémek reakciókészsége", ro: "Reactivitatea metalelor" }, questions: [], hasGenerator: true },
      { id: "corrosion_protection", name: { de: "Korrosion und Schutz", en: "Corrosion and Protection", hu: "Korrózió és védelem", ro: "Coroziune și protecție" }, questions: [], hasGenerator: true },
      { id: "ores_extraction_intro", name: { de: "Erze und Gewinnung", en: "Ores and Extraction", hu: "Ércek és kinyerés", ro: "Minereuri și extracție" }, questions: [], hasGenerator: true },
      { id: "alloys_intro", name: { de: "Legierungen", en: "Alloys", hu: "Ötvözetek", ro: "Aliaje" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K7_CURRICULUM = K7;
export let K7_GENERATOR_MAP: KemiaGeneratorMap = {};

export function setK7GeneratorMap(map: KemiaGeneratorMap) {
  K7_GENERATOR_MAP = map;
}

export function getK7Questions(selectedSubtopicIds: string[], count = 10) {
  return getGeneratedQuestions(K7, K7_GENERATOR_MAP, selectedSubtopicIds, count);
}

export { calculateKemiaMark } from "./kemiaCurriculumShared";
