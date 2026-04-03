import type { CurriculumTheme } from "./curriculumTypes";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";

let g5GeneratorMap: any = null;

export function setG5GeschichteGeneratorMap(map: any) {
  g5GeneratorMap = map;
}

export const G5_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "fruehe_hochkulturen",
    name: { de: "Frühe Hochkulturen", en: "Early Civilizations", hu: "Korai civilizációk", ro: "Primele civilizații" },
    subtopics: [
      { id: "fruehe_hochkulturen", name: { de: "Merkmale", en: "Features", hu: "Jellemzők", ro: "Caracteristici" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "aegypten",
    name: { de: "Altes Ägypten", en: "Ancient Egypt", hu: "Ókori Egyiptom", ro: "Egiptul Antic" },
    subtopics: [
      { id: "aegypten", name: { de: "Pharaonen és Pyramiden", en: "Pharaohs and Pyramids", hu: "Fáraók és piramisok", ro: "Faraoni și piramide" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "griechenland",
    name: { de: "Antikes Griechenland", en: "Ancient Greece", hu: "Ókori Görögország", ro: "Grecia Antică" },
    subtopics: [
      { id: "griechenland", name: { de: "Polis és Demokratie", en: "Polis and Democracy", hu: "Polisz és demokrácia", ro: "Polis și democrație" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "rom_republik",
    name: { de: "Römische Republik", en: "Roman Republic", hu: "Római Köztársaság", ro: "Republica Romană" },
    subtopics: [
      { id: "rom_republik", name: { de: "Aufstieg és Ordnung", en: "Rise and Order", hu: "Felemelkedés és rend", ro: "Ascensiune și ordine" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "rom_kaiserreich",
    name: { de: "Römisches Kaiserreich", en: "Roman Empire", hu: "Római Császárság", ro: "Imperiul Roman" },
    subtopics: [
      { id: "rom_kaiserreich", name: { de: "Kaiserzeit és Pax Romana", en: "Imperial Era", hu: "Császárkor", ro: "Era imperială" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "germanen",
    name: { de: "Die Germanen", en: "The Germans", hu: "A germánok", ro: "Germanii" },
    subtopics: [
      { id: "germanen", name: { de: "Leben im Norden", en: "Life in the North", hu: "Élet északon", ro: "Viața în nord" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "voelkerwanderung",
    name: { de: "Völkerwanderung", en: "Migration Period", hu: "Népvándorlás", ro: "Migrația popoarelor" },
    subtopics: [
      { id: "voelkerwanderung", name: { de: "Ende der Antike", en: "End of Antiquity", hu: "Az ókor vége", ro: "Sfârșitul antichității" }, questions: [], hasGenerator: true },
    ]
  }
];

export function getG5GeschichteQuestions(subtopicId: string, seed: number = 123): any[] {
  if (g5GeneratorMap && g5GeneratorMap[subtopicId]) {
    return g5GeneratorMap[subtopicId](seed);
  }
  if (G5_Generators_Geschichte[subtopicId]) {
    return G5_Generators_Geschichte[subtopicId](seed);
  }
  return [];
}
