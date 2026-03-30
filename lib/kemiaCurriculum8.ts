import { getGeneratedQuestions, type KemiaGeneratorMap, type KemiaTheme } from "./kemiaCurriculumShared";

const K8: KemiaTheme[] = [
  {
    id: "organic_intro",
    name: "Organische Chemie",
    icon: "🧬",
    color: "#EF4444",
    subtopics: [
      { id: "carbon_special", name: { de: "Besonderheit von Kohlenstoff", en: "Why Carbon Is Special", hu: "A szén különlegessége", ro: "De ce carbonul este special" }, questions: [], hasGenerator: true },
      { id: "hydrocarbons_intro", name: { de: "Kohlenwasserstoffe", en: "Hydrocarbons", hu: "Szénhidrogének", ro: "Hidrocarburi" }, questions: [], hasGenerator: true },
      { id: "alkanes_intro", name: { de: "Alkane", en: "Alkanes", hu: "Alkánok", ro: "Alcani" }, questions: [], hasGenerator: true },
      { id: "alkenes_intro", name: { de: "Alkene", en: "Alkenes", hu: "Alkének", ro: "Alchene" }, questions: [], hasGenerator: true },
      { id: "fuels_organic", name: { de: "Organische Brennstoffe", en: "Organic Fuels", hu: "Szerves tüzelőanyagok", ro: "Combustibili organici" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "organic_groups",
    name: "Stoffklassen",
    icon: "🧪",
    color: "#F59E0B",
    subtopics: [
      { id: "alcohols_intro", name: { de: "Alkohole", en: "Alcohols", hu: "Alkoholok", ro: "Alcooli" }, questions: [], hasGenerator: true },
      { id: "carboxylic_acids", name: { de: "Carbonsäuren", en: "Carboxylic Acids", hu: "Karbonsavak", ro: "Acizi carboxilici" }, questions: [], hasGenerator: true },
      { id: "esters_intro", name: { de: "Ester", en: "Esters", hu: "Észterek", ro: "Esteri" }, questions: [], hasGenerator: true },
      { id: "polymers_intro", name: { de: "Polymere", en: "Polymers", hu: "Polimerek", ro: "Polimeri" }, questions: [], hasGenerator: true },
      { id: "plastics_daily", name: { de: "Kunststoffe im Alltag", en: "Plastics in Daily Life", hu: "Műanyagok a hétköznapokban", ro: "Plastice în viața de zi cu zi" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "rates_equilibrium",
    name: "Reaktionsgeschwindigkeit",
    icon: "⏱️",
    color: "#10B981",
    subtopics: [
      { id: "reaction_rate_intro", name: { de: "Reaktionsgeschwindigkeit", en: "Reaction Rate", hu: "Reakciósebesség", ro: "Viteza reacției" }, questions: [], hasGenerator: true },
      { id: "surface_area_effect", name: { de: "Oberfläche", en: "Surface Area Effect", hu: "Felület hatása", ro: "Efectul suprafeței" }, questions: [], hasGenerator: true },
      { id: "temperature_rate", name: { de: "Temperatur und Geschwindigkeit", en: "Temperature and Rate", hu: "Hőmérséklet és sebesség", ro: "Temperatura și viteza" }, questions: [], hasGenerator: true },
      { id: "concentration_rate", name: { de: "Konzentration und Geschwindigkeit", en: "Concentration and Rate", hu: "Koncentráció és sebesség", ro: "Concentrația și viteza" }, questions: [], hasGenerator: true },
      { id: "catalysts_intro", name: { de: "Katalysatoren", en: "Catalysts", hu: "Katalizátorok", ro: "Catalizatori" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "electrochemistry",
    name: "Elektrochemie",
    icon: "🔋",
    color: "#3B82F6",
    subtopics: [
      { id: "ions_in_solution", name: { de: "Ionen in Lösung", en: "Ions in Solution", hu: "Ionok oldatban", ro: "Ioni în soluție" }, questions: [], hasGenerator: true },
      { id: "electrolysis_intro", name: { de: "Elektrolyse", en: "Electrolysis", hu: "Elektrolízis", ro: "Electroliză" }, questions: [], hasGenerator: true },
      { id: "electrodes_intro", name: { de: "Elektroden", en: "Electrodes", hu: "Elektródák", ro: "Electrozi" }, questions: [], hasGenerator: true },
      { id: "batteries_intro", name: { de: "Batterien und Zellen", en: "Batteries and Cells", hu: "Elemek és cellák", ro: "Baterii și pile" }, questions: [], hasGenerator: true },
      { id: "redox_intro", name: { de: "Redox Einstieg", en: "Intro to Redox", hu: "Redox alapok", ro: "Introducere în redox" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "quantitative_chem",
    name: "Berechnungen",
    icon: "📐",
    color: "#8B5CF6",
    subtopics: [
      { id: "formula_mass", name: { de: "Formelmasse", en: "Formula Mass", hu: "Képlettömeg", ro: "Masă moleculară" }, questions: [], hasGenerator: true },
      { id: "mole_intro", name: { de: "Stoffmenge", en: "Mole Concept", hu: "Anyagmennyiség", ro: "Mol" }, questions: [], hasGenerator: true },
      { id: "simple_stoichiometry", name: { de: "Einfache Stöchiometrie", en: "Simple Stoichiometry", hu: "Egyszerű sztöchiometria", ro: "Stoechiometrie simplă" }, questions: [], hasGenerator: true },
      { id: "yield_intro", name: { de: "Ausbeute", en: "Yield", hu: "Kihozatal", ro: "Randament" }, questions: [], hasGenerator: true },
      { id: "concentration_calc", name: { de: "Konzentrationsrechnung", en: "Concentration Calculations", hu: "Koncentrációszámítás", ro: "Calculul concentrației" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "chemistry_society",
    name: "Chemie in Umwelt und Technik",
    icon: "🌍",
    color: "#EC4899",
    subtopics: [
      { id: "fertilizers_intro", name: { de: "Düngemittel", en: "Fertilizers", hu: "Műtrágyák", ro: "Îngrășăminte" }, questions: [], hasGenerator: true },
      { id: "soaps_detergents", name: { de: "Seifen und Waschmittel", en: "Soaps and Detergents", hu: "Szappanok és mosószerek", ro: "Săpunuri și detergenți" }, questions: [], hasGenerator: true },
      { id: "food_chemistry", name: { de: "Lebensmittelchemie", en: "Food Chemistry", hu: "Élelmiszerkémia", ro: "Chimia alimentelor" }, questions: [], hasGenerator: true },
      { id: "green_chemistry_intro", name: { de: "Grüne Chemie", en: "Green Chemistry", hu: "Zöld kémia", ro: "Chimie verde" }, questions: [], hasGenerator: true },
      { id: "wastewater_treatment", name: { de: "Abwasserreinigung", en: "Wastewater Treatment", hu: "Szennyvíztisztítás", ro: "Tratarea apelor uzate" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K8_CURRICULUM = K8;
export let K8_GENERATOR_MAP: KemiaGeneratorMap = {};

export function setK8GeneratorMap(map: KemiaGeneratorMap) {
  K8_GENERATOR_MAP = map;
}

export function getK8Questions(selectedSubtopicIds: string[], count = 10) {
  return getGeneratedQuestions(K8, K8_GENERATOR_MAP, selectedSubtopicIds, count);
}

export { calculateKemiaMark } from "./kemiaCurriculumShared";
