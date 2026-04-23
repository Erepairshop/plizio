import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";

const G6_SUBTOPICS = [
  { id: "frankenreich_chlodwig",         names: { de: "Frankenreich & Chlodwig",     hu: "Frank Birodalom és Klodvig",  ro: "Regatul Francilor și Clovis", en: "Frankish Kingdom & Clovis" } },
  { id: "karl_der_grosse",               names: { de: "Karl der Große",              hu: "Nagy Károly",                 ro: "Carol cel Mare",              en: "Charlemagne" } },
  { id: "verwaltung_frankenreich",       names: { de: "Verwaltung des Frankenreichs",hu: "Frank Birodalom igazgatása",  ro: "Administrarea Regatului Franc", en: "Frankish Administration" } },
  { id: "reichsteilung_verdun",          names: { de: "Reichsteilung (Verdun)",      hu: "Verduni szerződés",           ro: "Tratatul de la Verdun",       en: "Treaty of Verdun" } },
  { id: "staendegesellschaft_lehnswesen",names: { de: "Ständegesellschaft & Lehnswesen",hu: "Rendi társadalom és hűbériség",ro: "Societatea feudală",         en: "Feudal Society" } },
  { id: "rittertum",                     names: { de: "Rittertum",                   hu: "Lovagkor",                    ro: "Cavalerismul",                en: "Knighthood" } },
  { id: "burgen",                        names: { de: "Burgen",                      hu: "Várak",                       ro: "Castele",                     en: "Castles" } },
  { id: "grundherrschaft",               names: { de: "Grundherrschaft",             hu: "Földesúri rendszer",          ro: "Domeniul feudal",             en: "Manorialism" } },
  { id: "bauernleben",                   names: { de: "Bauernleben",                 hu: "Paraszti élet",               ro: "Viața țăranilor",             en: "Peasant Life" } },
  { id: "kloester_ora_et_labora",        names: { de: "Klöster — Ora et Labora",     hu: "Kolostorok — Ora et Labora",  ro: "Mănăstirile",                 en: "Monasteries" } },
  { id: "bedeutung_kloester",            names: { de: "Bedeutung der Klöster",       hu: "Kolostorok szerepe",          ro: "Rolul mănăstirilor",          en: "Monasteries' Role" } },
  { id: "stadtentstehung",               names: { de: "Stadtentstehung",             hu: "Városok kialakulása",         ro: "Apariția orașelor",           en: "Rise of Cities" } },
  { id: "zuenfte",                       names: { de: "Zünfte",                      hu: "Céhek",                       ro: "Breslele",                    en: "Guilds" } },
  { id: "hanse",                         names: { de: "Hanse",                       hu: "Hanza-szövetség",             ro: "Liga Hanseatică",             en: "Hanseatic League" } },
  { id: "stadtleben",                    names: { de: "Stadtleben",                  hu: "Városi élet",                 ro: "Viața urbană",                en: "Urban Life" } },
  { id: "investiturstreit",              names: { de: "Investiturstreit",            hu: "Invesztitúra-harc",           ro: "Lupta pentru învestitură",    en: "Investiture Controversy" } },
  { id: "barbarossa",                    names: { de: "Barbarossa",                  hu: "Barbarossa Frigyes",          ro: "Barbarossa",                  en: "Barbarossa" } },
  { id: "goldene_bulle",                 names: { de: "Goldene Bulle",               hu: "Aranybulla (1356)",           ro: "Bula de Aur",                 en: "Golden Bull" } },
  { id: "islam_entstehung",              names: { de: "Entstehung des Islam",        hu: "Az iszlám kialakulása",       ro: "Apariția Islamului",          en: "Rise of Islam" } },
  { id: "islam_expansion",               names: { de: "Islamische Expansion",        hu: "Iszlám terjeszkedés",         ro: "Expansiunea Islamică",        en: "Islamic Expansion" } },
  { id: "kreuzzuege",                    names: { de: "Kreuzzüge",                   hu: "Keresztes hadjáratok",        ro: "Cruciadele",                  en: "Crusades" } },
  { id: "folgen_kreuzzuege",             names: { de: "Folgen der Kreuzzüge",        hu: "Keresztes hadjáratok hatásai",ro: "Consecințele cruciadelor",    en: "Consequences of Crusades" } },
  { id: "kulturkontakt",                 names: { de: "Kulturkontakt",               hu: "Kulturális kapcsolatok",      ro: "Contactul cultural",          en: "Cultural Contact" } },
  { id: "schwarzer_tod",                 names: { de: "Schwarzer Tod",               hu: "Fekete halál (pestis)",       ro: "Moartea Neagră",              en: "Black Death" } },
];

export const G6_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "g6_theme_1",
    name: { de: "Mittelalter", hu: "Középkor", ro: "Evul Mediu", en: "Middle Ages" },
    icon: "🏰",
    color: "#8B5CF6",
    subtopics: G6_SUBTOPICS.map(t => ({ id: t.id, name: t.names, questions: [], hasGenerator: true }))
  }
];

export function getG6GeschichteQuestions(subtopicId: string, countryCode: string = "EN", count: number = 35): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const topic = G6_SUBTOPICS.find(x => x.id === subtopicId);
  if (!topic) return [];

  if (lang === "de") {
    const gen = G6_Generators_Geschichte[subtopicId];
    if (gen) {
      const all = gen(Math.floor(Math.random() * 10000));
      return [...all].sort(() => Math.random() - 0.5).slice(0, count);
    }
  }

  const topicName = (topic.names as any)[lang] || topic.names.en;
  const pool: CurriculumQuestion[] = [];
  for (let i = 1; i <= 25; i++) {
    pool.push({ type: "mcq", topic: "Geschichte K6", subtopic: subtopicId, question: `[${topicName}] MCQ ${i}?`, options: [`A${i}`, `B${i}`, `C${i}`, `D${i}`], correct: 0 });
  }
  for (let i = 1; i <= 10; i++) {
    pool.push({ type: "typing", topic: "Geschichte K6", subtopic: subtopicId, question: `[${topicName}] Typing ${i}?`, answer: `Antwort ${i}` });
  }
  return pool.slice(0, count);
}
