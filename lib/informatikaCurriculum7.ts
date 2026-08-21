import type { CurriculumQuestion } from "./curriculumTypes";
import { selectDiverseInformatikaQuestions } from "./informatikaQuestionDiversity";
import type { KemiaTheme } from "./kemiaCurriculumShared";
import INFO_K7_DATA from "./informatikaCurriculum7_data.json";

type MultiLang = { de: string; hu: string; ro: string; en: string };
type MultiLangOptions = { de: string[]; hu: string[]; ro: string[]; en: string[] };

interface RawQuestion {
  type: "mcq" | "typing";
  question: MultiLang;
  options?: MultiLangOptions;
  answer?: MultiLang | string;
  correct?: number;
}

const INFO_K7_SUBTOPICS: { id: string; names: MultiLang }[] = [
  { id: "info_k7_hardware",  names: { de: "Hardware Grundlagen",     hu: "Hardver alapok",            ro: "Baze hardware",             en: "Hardware Basics" } },
  { id: "info_k7_os",        names: { de: "Betriebssysteme",         hu: "Operációs rendszerek",      ro: "Sisteme de operare",        en: "Operating Systems" } },
  { id: "info_k7_files",     names: { de: "Dateiverwaltung",         hu: "Fájlkezelés",               ro: "Gestiunea fișierelor",      en: "File Management" } },
  { id: "info_k7_word",      names: { de: "Textverarbeitung",        hu: "Szövegszerkesztés",         ro: "Procesare text",            en: "Word Processing" } },
  { id: "info_k7_excel",     names: { de: "Tabellenkalkulation",     hu: "Táblázatkezelés",           ro: "Calcul tabelar",            en: "Spreadsheets" } },
  { id: "info_k7_ppt",       names: { de: "Präsentationen",          hu: "Prezentációk",              ro: "Prezentări",                en: "Presentations" } },
  { id: "info_k7_internet",  names: { de: "Internet & WWW",          hu: "Internet és WWW",           ro: "Internet & WWW",            en: "Internet & WWW" } },
  { id: "info_k7_search",    names: { de: "Suchmaschinen",           hu: "Keresőmotorok",             ro: "Motoare de căutare",        en: "Search Engines" } },
  { id: "info_k7_email",     names: { de: "E-Mail & Kommunikation",  hu: "E-mail és kommunikáció",    ro: "E-mail și comunicare",      en: "Email & Communication" } },
  { id: "info_k7_network",   names: { de: "Netzwerke",               hu: "Hálózatok",                 ro: "Rețele",                    en: "Networks" } },
  { id: "info_k7_bullying",  names: { de: "Cybermobbing",            hu: "Kiberzaklatás",             ro: "Cyberbullying",             en: "Cyberbullying" } },
  { id: "info_k7_security",  names: { de: "Passwörter & Sicherheit", hu: "Jelszavak és biztonság",    ro: "Parole și securitate",      en: "Passwords & Security" } },
  { id: "info_k7_coding",    names: { de: "Programmierung Grundlagen", hu: "Programozás alapok",      ro: "Baze programare",           en: "Programming Basics" } },
  { id: "info_k7_scratch",   names: { de: "Scratch",                 hu: "Scratch",                   ro: "Scratch",                   en: "Scratch" } },
  { id: "info_k7_html",      names: { de: "HTML",                    hu: "HTML",                      ro: "HTML",                      en: "HTML" } },
  { id: "info_k7_css",       names: { de: "CSS",                     hu: "CSS",                       ro: "CSS",                       en: "CSS" } },
  { id: "info_k7_db",        names: { de: "Datenbanken",             hu: "Adatbázisok",               ro: "Baze de date",              en: "Databases" } },
  { id: "info_k7_image",     names: { de: "Bildbearbeitung",         hu: "Képszerkesztés",            ro: "Procesare imagini",         en: "Image Editing" } },
  { id: "info_k7_copyright", names: { de: "Urheberrecht",            hu: "Szerzői jog",               ro: "Drepturi de autor",         en: "Copyright" } },
  { id: "info_k7_privacy",   names: { de: "Datenschutz",             hu: "Adatvédelem",               ro: "Protecția datelor",         en: "Data Privacy" } },
  { id: "info_k7_social",    names: { de: "Soziale Netzwerke",       hu: "Közösségi hálózatok",       ro: "Rețele sociale",            en: "Social Networks" } },
  { id: "info_k7_cloud",     names: { de: "Cloud & Speicher",        hu: "Felhő és tárhely",          ro: "Cloud și stocare",          en: "Cloud & Storage" } },
  { id: "info_k7_vr",        names: { de: "Virtuelle Realität",      hu: "Virtuális valóság",         ro: "Realitate Virtuală",        en: "Virtual Reality" } },
  { id: "info_k7_ai",        names: { de: "KI Einführung",           hu: "MI bevezetés",              ro: "Introducere IA",            en: "AI Introduction" } },
];

const DATA: Record<string, RawQuestion[]> = INFO_K7_DATA as Record<string, RawQuestion[]>;

export const INFO_K7_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k7_island1",
    name: "Informatik K7",
    icon: "💻",
    color: "#3B82F6",
    subtopics: INFO_K7_SUBTOPICS.map(t => ({
      id: t.id,
      name: t.names.de,
      label: t.names as any,
      questions: [],
      hasGenerator: true,
    })),
  } as any,
];

export function getInfoK7Questions(subtopicIds: string[], count = 10, countryCode?: string): CurriculumQuestion[] {
  const lang: keyof MultiLang = (countryCode === "DE" || countryCode === "AT" || countryCode === "CH") ? "de"
    : (countryCode === "RO") ? "ro"
    : (countryCode === "US" || countryCode === "GB" || countryCode === "AU" || countryCode === "CA" || countryCode === "IE" || countryCode === "NZ") ? "en"
    : "hu";
  const pool: CurriculumQuestion[] = [];

  for (const id of subtopicIds) {
    const rawArr = DATA[id] || [];
    const topicDef = INFO_K7_SUBTOPICS.find(s => s.id === id);
    const topicName = topicDef ? topicDef.names[lang] || topicDef.names.en : id;

    for (const r of rawArr) {
      const q = r.question[lang] || r.question.en;
      if (r.type === "mcq" && r.options) {
        const opts = r.options[lang] || r.options.en;
        pool.push({
          type: "mcq",
          topic: "Informatik K7",
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
          topic: "Informatik K7",
          subtopic: id,
          question: q,
          answer: ans,
        });
      }
    }
    void topicName;
  }

  return selectDiverseInformatikaQuestions(pool, count);
}
