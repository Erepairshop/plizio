import type { CurriculumTheme } from "./curriculumTypes";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";

let g5GeneratorMap: any = null;

export function setG5GeschichteGeneratorMap(map: any) {
  g5GeneratorMap = map;
}

export const G5_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "fruehe_hochkulturen",
    name: { de: "Frühe Hochkulturen", hu: "Korai magaskultúrák", ro: "Primele civilizații", en: "Early High Cultures" },
    subtopics: [
      { id: "fruehe_hochkulturen", name: { de: "Merkmale", hu: "Jellemzők", ro: "Caracteristici", en: "Characteristics" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "aegypten",
    name: { de: "Altes Ägypten", hu: "Ókori Egyiptom", ro: "Egiptul Antic", en: "Ancient Egypt" },
    subtopics: [
      { id: "aegypten", name: { de: "Pharaonen und Pyramiden", hu: "Fáraók és piramisok", ro: "Faraoni și piramide", en: "Pharaohs and Pyramids" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "griechenland",
    name: { de: "Antikes Griechenland", hu: "Ókori Görögország", ro: "Grecia Antică", en: "Ancient Greece" },
    subtopics: [
      { id: "griechenland", name: { de: "Polis und Demokratie", hu: "Polisz és demokrácia", ro: "Polis și democrație", en: "Polis and Democracy" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "rom_republik",
    name: { de: "Römische Republik", hu: "Római Köztársaság", ro: "Republica Romană", en: "Roman Republic" },
    subtopics: [
      { id: "rom_republik", name: { de: "Aufstieg und Ordnung", hu: "Felemelkedés és rend", ro: "Ascensiune și ordine", en: "Rise and Order" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "rom_kaiserreich",
    name: { de: "Römisches Kaiserreich", hu: "Római Császárság", ro: "Imperiul Roman", en: "Roman Empire" },
    subtopics: [
      { id: "rom_kaiserreich", name: { de: "Kaiserzeit und Pax Romana", hu: "Császárkor és Pax Romana", ro: "Epoca imperială și Pax Romana", en: "Imperial Era and Pax Romana" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "germanen",
    name: { de: "Die Germanen", hu: "A germánok", ro: "Popoarele germanice", en: "The Germanic Peoples" },
    subtopics: [
      { id: "germanen", name: { de: "Leben im Norden", hu: "Élet északon", ro: "Viața în nord", en: "Life in the North" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "voelkerwanderung",
    name: { de: "Völkerwanderung", hu: "Népvándorlás", ro: "Marea Migrație", en: "Migration Period" },
    subtopics: [
      { id: "voelkerwanderung", name: { de: "Ende der Antike", hu: "Az ókor vége", ro: "Sfârșitul Antichității", en: "End of Antiquity" }, questions: [], hasGenerator: true },
    ]
  }
];

export function getG5GeschichteQuestions(subtopicId: string, seed: number = 123): any[] {
  if (g5GeneratorMap && g5GeneratorMap[subtopicId]) {
    return g5GeneratorMap[subtopicId](seed);
  }
  if (G5_Generators_Geschichte[subtopicId]) {
    return G5_Generators_Geschichte[subtopicId]();
  }
  return [];
}
