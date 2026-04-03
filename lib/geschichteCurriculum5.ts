import type { CurriculumTheme } from "./curriculumTypes";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";

let g5GeneratorMap: any = null;

export function setG5GeschichteGeneratorMap(map: any) {
  g5GeneratorMap = map;
}

export const G5_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "fruehe_hochkulturen",
    name: "Frühe Hochkulturen",
    subtopics: [
      { id: "fruehe_hochkulturen", name: "Merkmale", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "aegypten",
    name: "Altes Ägypten",
    subtopics: [
      { id: "aegypten", name: "Pharaonen und Pyramiden", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "griechenland",
    name: "Antikes Griechenland",
    subtopics: [
      { id: "griechenland", name: "Polis und Demokratie", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "rom_republik",
    name: "Römische Republik",
    subtopics: [
      { id: "rom_republik", name: "Aufstieg und Ordnung", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "rom_kaiserreich",
    name: "Römisches Kaiserreich",
    subtopics: [
      { id: "rom_kaiserreich", name: "Kaiserzeit und Pax Romana", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "germanen",
    name: "Die Germanen",
    subtopics: [
      { id: "germanen", name: "Leben im Norden", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "voelkerwanderung",
    name: "Völkerwanderung",
    subtopics: [
      { id: "voelkerwanderung", name: "Ende der Antike", questions: [], hasGenerator: true },
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
