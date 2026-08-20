import type { CurriculumQuestion } from "./curriculumTypes";
import { selectDiverseInformatikaQuestions } from "./informatikaQuestionDiversity";
import type { KemiaTheme } from "./kemiaCurriculumShared";
import INFO_K8_DATA from "./informatikaCurriculum8_data.json";

type MultiLang = { de: string; hu: string; ro: string; en: string };
type MultiLangOptions = { de: string[]; hu: string[]; ro: string[]; en: string[] };

interface RawQuestion {
  type: "mcq" | "typing";
  question: MultiLang;
  options?: MultiLangOptions;
  answer?: MultiLang | string;
  correct?: number;
}

const INFO_K8_SUBTOPICS: { id: string; names: MultiLang }[] = [
  { id: "info_k8_algo",       names: { de: "Algorithmen Grundlagen",   hu: "Algoritmus alapok",       ro: "Baze algoritmi",       en: "Algorithm Basics" } },
  { id: "info_k8_python",     names: { de: "Programmierung Python",    hu: "Python programozás",      ro: "Programare Python",    en: "Python Programming" } },
  { id: "info_k8_control",    names: { de: "Kontrollstrukturen",       hu: "Vezérlési szerkezetek",   ro: "Structuri control",    en: "Control Structures" } },
  { id: "info_k8_func",       names: { de: "Funktionen",               hu: "Függvények",              ro: "Funcții",              en: "Functions" } },
  { id: "info_k8_data",       names: { de: "Datenstrukturen",          hu: "Adatszerkezetek",         ro: "Structuri de date",    en: "Data Structures" } },
  { id: "info_k8_oop",        names: { de: "OOP Grundlagen",           hu: "OOP alapok",              ro: "Baze OOP",             en: "OOP Basics" } },
  { id: "info_k8_web",        names: { de: "Webentwicklung",           hu: "Webfejlesztés",           ro: "Dezvoltare web",       en: "Web Development" } },
  { id: "info_k8_js",         names: { de: "JavaScript Grundlagen",    hu: "JavaScript alapok",       ro: "Baze JavaScript",      en: "JavaScript Basics" } },
  { id: "info_k8_http",       names: { de: "HTTP & APIs",              hu: "HTTP és API-k",           ro: "HTTP și API-uri",      en: "HTTP & APIs" } },
  { id: "info_k8_sql",        names: { de: "Datenbanken SQL",          hu: "Adatbázis SQL",           ro: "Baze de date SQL",     en: "SQL Databases" } },
  { id: "info_k8_crypto",     names: { de: "Kryptographie",            hu: "Kriptográfia",            ro: "Criptografie",         en: "Cryptography" } },
  { id: "info_k8_cyber",      names: { de: "Cyber Security",           hu: "Kiberbiztonság",          ro: "Securitate cibernetică", en: "Cyber Security" } },
  { id: "info_k8_network",    names: { de: "Netzwerk Protokolle",      hu: "Hálózati protokollok",    ro: "Protocoale rețea",     en: "Network Protocols" } },
  { id: "info_k8_ai",         names: { de: "Künstliche Intelligenz",   hu: "Mesterséges intelligencia", ro: "Inteligență Artificială", en: "Artificial Intelligence" } },
  { id: "info_k8_git",        names: { de: "Versionskontrolle Git",    hu: "Verziókezelés Git",       ro: "Control versiuni Git", en: "Version Control Git" } },
  { id: "info_k8_pm",         names: { de: "Projektmanagement",        hu: "Projektmenedzsment",      ro: "Management proiect",   en: "Project Management" } },
  { id: "info_k8_uiux",       names: { de: "UI/UX Design",             hu: "UI/UX tervezés",          ro: "Design UI/UX",         en: "UI/UX Design" } },
  { id: "info_k8_mobile",     names: { de: "Mobile Entwicklung",       hu: "Mobilfejlesztés",         ro: "Dezvoltare mobilă",    en: "Mobile Development" } },
  { id: "info_k8_cloud",      names: { de: "Cloud Computing",          hu: "Felhő számítástechnika",  ro: "Cloud Computing",      en: "Cloud Computing" } },
  { id: "info_k8_bigdata",    names: { de: "Big Data",                 hu: "Big Data",                ro: "Big Data",             en: "Big Data" } },
  { id: "info_k8_ethics",     names: { de: "Ethik in der IT",          hu: "Informatikai etika",      ro: "Etică în IT",          en: "Ethics in IT" } },
  { id: "info_k8_opensource", names: { de: "Open Source",              hu: "Nyílt forráskód",         ro: "Open Source",          en: "Open Source" } },
  { id: "info_k8_future",     names: { de: "Zukunft der IT",           hu: "Informatika jövője",      ro: "Viitorul IT",          en: "Future of IT" } },
  { id: "info_k8_careers",    names: { de: "IT-Berufe",                hu: "IT szakmák",              ro: "Cariere IT",           en: "IT Careers" } },
];

const DATA: Record<string, RawQuestion[]> = INFO_K8_DATA as Record<string, RawQuestion[]>;

export const INFO_K8_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k8_island1",
    name: "Informatik K8",
    icon: "💻",
    color: "#3B82F6",
    subtopics: INFO_K8_SUBTOPICS.map(t => ({
      id: t.id,
      name: t.names.de,
      label: t.names as any,
      questions: [],
      hasGenerator: true,
    })),
  } as any,
];

export function getInfoK8Questions(subtopicIds: string[], count = 10, countryCode?: string): CurriculumQuestion[] {
  const lang: keyof MultiLang = (countryCode === "DE" || countryCode === "AT" || countryCode === "CH") ? "de"
    : (countryCode === "RO") ? "ro"
    : (countryCode === "US" || countryCode === "GB" || countryCode === "AU" || countryCode === "CA" || countryCode === "IE" || countryCode === "NZ") ? "en"
    : "hu";
  const pool: CurriculumQuestion[] = [];

  for (const id of subtopicIds) {
    const rawArr = DATA[id] || [];
    for (const r of rawArr) {
      const q = r.question[lang] || r.question.en;
      if (r.type === "mcq" && r.options) {
        const opts = r.options[lang] || r.options.en;
        pool.push({
          type: "mcq",
          topic: "Informatik K8",
          subtopic: id,
          question: q,
          options: [...opts],
          correct: r.correct ?? 0,
        });
      } else if (r.type === "typing") {
        let ans: string = "";
        if (typeof r.answer === "string") ans = r.answer;
        else if (r.answer) ans = r.answer[lang] || r.answer.en || "";
        pool.push({
          type: "typing",
          topic: "Informatik K8",
          subtopic: id,
          question: q,
          answer: ans,
        });
      }
    }
  }

  return selectDiverseInformatikaQuestions(pool, count);
}
