import type { CurriculumTheme } from "./curriculumTypes";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";

let g6GeneratorMap: any = null;

export function setG6GeschichteGeneratorMap(map: any) {
  g6GeneratorMap = map;
}

export const G6_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "frankenreich",
    name: { de: "Das Frankenreich", en: "The Frankish Empire", hu: "A Frank Birodalom", ro: "Imperiul Franc" },
    subtopics: [
      { id: "frankenreich_chlodwig", name: { de: "Chlodwig I.", en: "Clovis I", hu: "I. Klodvig", ro: "Clovis I" }, questions: [], hasGenerator: true },
      { id: "karl_der_grosse", name: { de: "Karl der Große", en: "Charlemagne", hu: "Nagy Károly", ro: "Carol cel Mare" }, questions: [], hasGenerator: true },
      { id: "verwaltung_frankenreich", name: { de: "Verwaltung", en: "Administration", hu: "Közigazgatás", ro: "Administrație" }, questions: [], hasGenerator: true },
      { id: "reichsteilung_verdun", name: { de: "Reichsteilung", en: "Division of the Empire", hu: "Birodalmi felosztás", ro: "Divizarea Imperiului" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "ritter_burgen",
    name: { de: "Ritter és Burgen", en: "Knights and Castles", hu: "Lovagok és várak", ro: "Cavalerii și castelele" },
    subtopics: [
      { id: "staendegesellschaft_lehnswesen", name: { de: "Ständegesellschaft", en: "Feudal Society", hu: "Rendi társadalom", ro: "Societatea feudală" }, questions: [], hasGenerator: true },
      { id: "rittertum", name: { de: "Rittertum", en: "Knighthood", hu: "Lovagság", ro: "Cavalerism" }, questions: [], hasGenerator: true },
      { id: "burgen", name: { de: "Burgenbau", en: "Castles", hu: "Várépítés", ro: "Castele" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "bauern_kloester",
    name: { de: "Bauern és Klöster", en: "Peasants and Monasteries", hu: "Parasztok és kolostorok", ro: "Țăranii și mănăstirile" },
    subtopics: [
      { id: "grundherrschaft", name: { de: "Grundherrschaft", en: "Manorialism", hu: "Uradalom", ro: "Domeniul feudal" }, questions: [], hasGenerator: true },
      { id: "bauernleben", name: { de: "Bauernleben", en: "Peasant Life", hu: "Paraszti élet", ro: "Viața țăranilor" }, questions: [], hasGenerator: true },
      { id: "kloester_ora_et_labora", name: { de: "Ora et labora", en: "Ora et labora", hu: "Ora et labora", ro: "Ora et labora" }, questions: [], hasGenerator: true },
      { id: "bedeutung_kloester", name: { de: "Bedeutung der Klöster", en: "Importance of Monasteries", hu: "A kolostorok jelentősége", ro: "Importanța mănăstirilor" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "mittelalterliche_stadt",
    name: { de: "Die mittelalterliche Stadt", en: "The Medieval City", hu: "A középkori város", ro: "Orașul medieval" },
    subtopics: [
      { id: "stadtentstehung", name: { de: "Stadtentstehung", en: "Rise of Cities", hu: "Városok kialakulása", ro: "Apariția orașelor" }, questions: [], hasGenerator: true },
      { id: "zuenfte", name: { de: "Zünfte", en: "Guilds", hu: "Céhek", ro: "Bresle" }, questions: [], hasGenerator: true },
      { id: "hanse", name: { de: "Die Hanse", en: "Hanseatic League", hu: "Hanza-szövetség", ro: "Liga Hanseatică" }, questions: [], hasGenerator: true },
      { id: "stadtleben", name: { de: "Stadtleben", en: "City Life", hu: "Városi élet", ro: "Viața în oraș" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "kaiser_papst",
    name: { de: "Kaiser és Papst", en: "Emperor and Pope", hu: "Császár és pápa", ro: "Împăratul și papa" },
    subtopics: [
      { id: "investiturstreit", name: { de: "Investiturstreit", en: "Investiture Controversy", hu: "Invesztitúraharc", ro: "Controversa investiturii" }, questions: [], hasGenerator: true },
      { id: "barbarossa", name: { de: "Friedrich Barbarossa", en: "Frederick Barbarossa", hu: "Barbarossa Frigyes", ro: "Frederic Barbarossa" }, questions: [], hasGenerator: true },
      { id: "goldene_bulle", name: { de: "Goldene Bulle", en: "Golden Bull", hu: "Aranybulla", ro: "Bula de Aur" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "islam_kreuzzuege",
    name: { de: "Islam és Kreuzzüge", en: "Islam and Crusades", hu: "Iszlám és keresztes hadjáratok", ro: "Islamul și cruciadele" },
    subtopics: [
      { id: "islam_entstehung", name: { de: "Islam Entstehung", en: "Rise of Islam", hu: "Az iszlám kialakulása", ro: "Apariția Islamului" }, questions: [], hasGenerator: true },
      { id: "islam_expansion", name: { de: "Islam Expansion", en: "Islamic Expansion", hu: "Az iszlám terjeszkedése", ro: "Expansiunea islamului" }, questions: [], hasGenerator: true },
      { id: "kreuzzuege", name: { de: "Die Kreuzzüge", en: "The Crusades", hu: "A keresztes hadjáratok", ro: "Cruciadele" }, questions: [], hasGenerator: true },
      { id: "folgen_kreuzzuege", name: { de: "Folgen", en: "Consequences", hu: "Következmények", ro: "Consecințe" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "krisen_kontakte",
    name: { de: "Krisen és Kontakte", en: "Crises and Contacts", hu: "Válságok és kapcsolatok", ro: "Crize și contacte" },
    subtopics: [
      { id: "kulturkontakt", name: { de: "Kulturkontakt", en: "Cultural Contact", hu: "Kulturális kapcsolatok", ro: "Contact cultural" }, questions: [], hasGenerator: true },
      { id: "schwarzer_tod", name: { de: "Der Schwarze Tod", en: "The Black Death", hu: "A fekete halál", ro: "Moartea neagră" }, questions: [], hasGenerator: true },
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
