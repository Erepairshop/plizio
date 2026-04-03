import type { CurriculumTheme } from "./curriculumTypes";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";

let g6GeneratorMap: any = null;

export function setG6GeschichteGeneratorMap(map: any) {
  g6GeneratorMap = map;
}

export const G6_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "frankenreich",
    name: "Das Frankenreich",
    subtopics: [
      { id: "frankenreich_chlodwig", name: "Chlodwig I.", questions: [], hasGenerator: true },
      { id: "karl_der_grosse", name: "Karl der Große", questions: [], hasGenerator: true },
      { id: "verwaltung_frankenreich", name: "Verwaltung", questions: [], hasGenerator: true },
      { id: "reichsteilung_verdun", name: "Reichsteilung", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "ritter_burgen",
    name: "Ritter und Burgen",
    subtopics: [
      { id: "staendegesellschaft_lehnswesen", name: "Ständegesellschaft", questions: [], hasGenerator: true },
      { id: "rittertum", name: "Rittertum", questions: [], hasGenerator: true },
      { id: "burgen", name: "Burgenbau", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "bauern_kloester",
    name: "Bauern und Klöster",
    subtopics: [
      { id: "grundherrschaft", name: "Grundherrschaft", questions: [], hasGenerator: true },
      { id: "bauernleben", name: "Bauernleben", questions: [], hasGenerator: true },
      { id: "kloester_ora_et_labora", name: "Ora et labora", questions: [], hasGenerator: true },
      { id: "bedeutung_kloester", name: "Bedeutung der Klöster", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "mittelalterliche_stadt",
    name: "Die mittelalterliche Stadt",
    subtopics: [
      { id: "stadtentstehung", name: "Stadtentstehung", questions: [], hasGenerator: true },
      { id: "zuenfte", name: "Zünfte", questions: [], hasGenerator: true },
      { id: "hanse", name: "Die Hanse", questions: [], hasGenerator: true },
      { id: "stadtleben", name: "Stadtleben", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "kaiser_papst",
    name: "Kaiser und Papst",
    subtopics: [
      { id: "investiturstreit", name: "Investiturstreit", questions: [], hasGenerator: true },
      { id: "barbarossa", name: "Friedrich Barbarossa", questions: [], hasGenerator: true },
      { id: "goldene_bulle", name: "Goldene Bulle", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "islam_kreuzzuege",
    name: "Islam und Kreuzzüge",
    subtopics: [
      { id: "islam_entstehung", name: "Islam Entstehung", questions: [], hasGenerator: true },
      { id: "islam_expansion", name: "Islam Expansion", questions: [], hasGenerator: true },
      { id: "kreuzzuege", name: "Die Kreuzzüge", questions: [], hasGenerator: true },
      { id: "folgen_kreuzzuege", name: "Folgen", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "krisen_kontakte",
    name: "Krisen und Kontakte",
    subtopics: [
      { id: "kulturkontakt", name: "Kulturkontakt", questions: [], hasGenerator: true },
      { id: "schwarzer_tod", name: "Der Schwarze Tod", questions: [], hasGenerator: true },
    ]
  }
];

export function getG6GeschichteQuestions(subtopicId: string, seed: number = 123): any[] {
  if (g6GeneratorMap && g6GeneratorMap[subtopicId]) {
    return g6GeneratorMap[subtopicId](seed);
  }
  if (G6_Generators_Geschichte[subtopicId]) {
    return G6_Generators_Geschichte[subtopicId](seed);
  }
  return [];
}
