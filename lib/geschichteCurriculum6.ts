import type { CurriculumTheme } from "./curriculumTypes";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";

let g6GeneratorMap: any = null;

export function setG6GeschichteGeneratorMap(map: any) {
  g6GeneratorMap = map;
}

export const G6_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "frankenreich",
    name: { de: "Das Frankenreich", hu: "A Frank Birodalom", ro: "Imperiul Franc", en: "The Frankish Empire" },
    subtopics: [
      { id: "frankenreich_chlodwig", name: { de: "Chlodwig I.", hu: "I. Klodvig", ro: "Clovis I", en: "Clovis I" }, questions: [], hasGenerator: true },
      { id: "karl_der_grosse", name: { de: "Karl der Große", hu: "Nagy Károly", ro: "Carol cel Mare", en: "Charlemagne" }, questions: [], hasGenerator: true },
      { id: "verwaltung_frankenreich", name: { de: "Verwaltung", hu: "Közigazgatás", ro: "Administrație", en: "Administration" }, questions: [], hasGenerator: true },
      { id: "reichsteilung_verdun", name: { de: "Reichsteilung", hu: "Birodalom felosztása", ro: "Divizarea imperiului", en: "Division of the Empire" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "ritter_burgen",
    name: { de: "Ritter und Burgen", hu: "Lovagok és várak", ro: "Cavaleri și castele", en: "Knights and Castles" },
    subtopics: [
      { id: "staendegesellschaft_lehnswesen", name: { de: "Ständegesellschaft", hu: "Rendi társadalom", ro: "Societatea de stări", en: "Estates of the realm" }, questions: [], hasGenerator: true },
      { id: "rittertum", name: { de: "Rittertum", hu: "Lovagság", ro: "Cavalerism", en: "Knighthood" }, questions: [], hasGenerator: true },
      { id: "burgen", name: { de: "Burgenbau", hu: "Várépítés", ro: "Construcția de castele", en: "Castle building" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "bauern_kloester",
    name: { de: "Bauern und Klöster", hu: "Parasztok és kolostorok", ro: "Țărani și mănăstiri", en: "Peasants and Monasteries" },
    subtopics: [
      { id: "grundherrschaft", name: { de: "Grundherrschaft", hu: "Földesúri rendszer", ro: "Sistemul feudal", en: "Manorialism" }, questions: [], hasGenerator: true },
      { id: "bauernleben", name: { de: "Bauernleben", hu: "Paraszti élet", ro: "Viața țăranilor", en: "Peasant life" }, questions: [], hasGenerator: true },
      { id: "kloester_ora_et_labora", name: { de: "Ora et labora", hu: "Imádkozz és dolgozz", ro: "Roagă-te și lucrează", en: "Pray and work" }, questions: [], hasGenerator: true },
      { id: "bedeutung_kloester", name: { de: "Bedeutung der Klöster", hu: "A kolostorok jelentősége", ro: "Importanța mănăstirilor", en: "Importance of monasteries" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "mittelalterliche_stadt",
    name: { de: "Die mittelalterliche Stadt", hu: "A középkori város", ro: "Orașul medieval", en: "The Medieval City" },
    subtopics: [
      { id: "stadtentstehung", name: { de: "Stadtentstehung", hu: "Városok kialakulása", ro: "Formarea orașelor", en: "Emergence of cities" }, questions: [], hasGenerator: true },
      { id: "zuenfte", name: { de: "Zünfte", hu: "Céhek", ro: "Bresle", en: "Guilds" }, questions: [], hasGenerator: true },
      { id: "hanse", name: { de: "Die Hanse", hu: "A Hanza-szövetség", ro: "Liga Hanseatică", en: "The Hanseatic League" }, questions: [], hasGenerator: true },
      { id: "stadtleben", name: { de: "Stadtleben", hu: "Városi élet", ro: "Viața urbană", en: "City life" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "kaiser_papst",
    name: { de: "Kaiser und Papst", hu: "Császár és pápa", ro: "Împărat și papă", en: "Emperor and Pope" },
    subtopics: [
      { id: "investiturstreit", name: { de: "Investiturstreit", hu: "Invesztitúraharc", ro: "Lupta pentru învestitură", en: "Investiture Controversy" }, questions: [], hasGenerator: true },
      { id: "barbarossa", name: { de: "Friedrich Barbarossa", hu: "Rőtszakállú Frigyes", ro: "Frederic Barbarossa", en: "Frederick Barbarossa" }, questions: [], hasGenerator: true },
      { id: "goldene_bulle", name: { de: "Goldene Bulle", hu: "Aranybulla", ro: "Bula de Aur", en: "Golden Bull" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "islam_kreuzzuege",
    name: { de: "Islam und Kreuzzüge", hu: "Iszlám és keresztes hadjáratok", ro: "Islamul și Cruciadele", en: "Islam and Crusades" },
    subtopics: [
      { id: "islam_entstehung", name: { de: "Islam Entstehung", hu: "Az iszlám kialakulása", ro: "Formarea islamului", en: "Emergence of Islam" }, questions: [], hasGenerator: true },
      { id: "islam_expansion", name: { de: "Islam Expansion", hu: "Az iszlám terjeszkedése", ro: "Expansiunea islamului", en: "Expansion of Islam" }, questions: [], hasGenerator: true },
      { id: "kreuzzuege", name: { de: "Die Kreuzzüge", hu: "A keresztes hadjáratok", ro: "Cruciadele", en: "The Crusades" }, questions: [], hasGenerator: true },
      { id: "folgen_kreuzzuege", name: { de: "Folgen", hu: "Következmények", ro: "Consecințe", en: "Consequences" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "krisen_kontakte",
    name: { de: "Krisen und Kontakte", hu: "Válságok és kapcsolatok", ro: "Crize și contacte", en: "Crises and Contacts" },
    subtopics: [
      { id: "kulturkontakt", name: { de: "Kulturkontakt", hu: "Kulturális kapcsolat", ro: "Contact cultural", en: "Cultural contact" }, questions: [], hasGenerator: true },
      { id: "schwarzer_tod", name: { de: "Der Schwarze Tod", hu: "A fekete halál", ro: "Moartea Neagră", en: "The Black Death" }, questions: [], hasGenerator: true },
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
