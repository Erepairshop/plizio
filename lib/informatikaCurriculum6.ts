import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";
import { selectDiverseInformatikaQuestions } from "./informatikaQuestionDiversity";

// ─── German (complete, all 30) ────────────────────────────────────────────────
import t01_de from "@/data/informatika/class-6/de/1.json";
import t02_de from "@/data/informatika/class-6/de/2.json";
import t03_de from "@/data/informatika/class-6/de/3.json";
import t04_de from "@/data/informatika/class-6/de/4.json";
import t05_de from "@/data/informatika/class-6/de/5.json";
import t06_de from "@/data/informatika/class-6/de/6.json";
import t07_de from "@/data/informatika/class-6/de/7.json";
import t08_de from "@/data/informatika/class-6/de/8.json";
import t09_de from "@/data/informatika/class-6/de/9.json";
import t10_de from "@/data/informatika/class-6/de/10.json";
import t11_de from "@/data/informatika/class-6/de/11.json";
import t12_de from "@/data/informatika/class-6/de/12.json";
import t13_de from "@/data/informatika/class-6/de/13.json";
import t14_de from "@/data/informatika/class-6/de/14.json";
import t15_de from "@/data/informatika/class-6/de/15.json";
import t16_de from "@/data/informatika/class-6/de/16.json";
import t17_de from "@/data/informatika/class-6/de/17.json";
import t18_de from "@/data/informatika/class-6/de/18.json";
import t19_de from "@/data/informatika/class-6/de/19.json";
import t20_de from "@/data/informatika/class-6/de/20.json";
import t21_de from "@/data/informatika/class-6/de/21.json";
import t22_de from "@/data/informatika/class-6/de/22.json";
import t23_de from "@/data/informatika/class-6/de/23.json";
import t24_de from "@/data/informatika/class-6/de/24.json";
import t25_de from "@/data/informatika/class-6/de/25.json";
import t26_de from "@/data/informatika/class-6/de/26.json";
import t27_de from "@/data/informatika/class-6/de/27.json";
import t28_de from "@/data/informatika/class-6/de/28.json";
import t29_de from "@/data/informatika/class-6/de/29.json";
import t30_de from "@/data/informatika/class-6/de/30.json";

// ─── Hungarian (partial: 1-12, 29, 30) ───────────────────────────────────────
import t01_hu from "@/data/informatika/class-6/hu/1.json";
import t02_hu from "@/data/informatika/class-6/hu/2.json";
import t03_hu from "@/data/informatika/class-6/hu/3.json";
import t04_hu from "@/data/informatika/class-6/hu/4.json";
import t05_hu from "@/data/informatika/class-6/hu/5.json";
import t06_hu from "@/data/informatika/class-6/hu/6.json";
import t07_hu from "@/data/informatika/class-6/hu/7.json";
import t08_hu from "@/data/informatika/class-6/hu/8.json";
import t09_hu from "@/data/informatika/class-6/hu/9.json";
import t10_hu from "@/data/informatika/class-6/hu/10.json";
import t11_hu from "@/data/informatika/class-6/hu/11.json";
import t12_hu from "@/data/informatika/class-6/hu/12.json";
import t29_hu from "@/data/informatika/class-6/hu/29.json";
import t30_hu from "@/data/informatika/class-6/hu/30.json";

// ─── Romanian (partial: 1-12, 15-24, 28-30) ──────────────────────────────────
import t01_ro from "@/data/informatika/class-6/ro/1.json";
import t02_ro from "@/data/informatika/class-6/ro/2.json";
import t03_ro from "@/data/informatika/class-6/ro/3.json";
import t04_ro from "@/data/informatika/class-6/ro/4.json";
import t05_ro from "@/data/informatika/class-6/ro/5.json";
import t06_ro from "@/data/informatika/class-6/ro/6.json";
import t07_ro from "@/data/informatika/class-6/ro/7.json";
import t08_ro from "@/data/informatika/class-6/ro/8.json";
import t09_ro from "@/data/informatika/class-6/ro/9.json";
import t10_ro from "@/data/informatika/class-6/ro/10.json";
import t11_ro from "@/data/informatika/class-6/ro/11.json";
import t12_ro from "@/data/informatika/class-6/ro/12.json";
import t15_ro from "@/data/informatika/class-6/ro/15.json";
import t16_ro from "@/data/informatika/class-6/ro/16.json";
import t17_ro from "@/data/informatika/class-6/ro/17.json";
import t18_ro from "@/data/informatika/class-6/ro/18.json";
import t19_ro from "@/data/informatika/class-6/ro/19.json";
import t20_ro from "@/data/informatika/class-6/ro/20.json";
import t21_ro from "@/data/informatika/class-6/ro/21.json";
import t22_ro from "@/data/informatika/class-6/ro/22.json";
import t23_ro from "@/data/informatika/class-6/ro/23.json";
import t24_ro from "@/data/informatika/class-6/ro/24.json";
import t28_ro from "@/data/informatika/class-6/ro/28.json";
import t29_ro from "@/data/informatika/class-6/ro/29.json";
import t30_ro from "@/data/informatika/class-6/ro/30.json";

// ─── English (partial: 1-12, 22-24, 28-30) ───────────────────────────────────
import t01_en from "@/data/informatika/class-6/en/1.json";
import t02_en from "@/data/informatika/class-6/en/2.json";
import t03_en from "@/data/informatika/class-6/en/3.json";
import t04_en from "@/data/informatika/class-6/en/4.json";
import t05_en from "@/data/informatika/class-6/en/5.json";
import t06_en from "@/data/informatika/class-6/en/6.json";
import t07_en from "@/data/informatika/class-6/en/7.json";
import t08_en from "@/data/informatika/class-6/en/8.json";
import t09_en from "@/data/informatika/class-6/en/9.json";
import t10_en from "@/data/informatika/class-6/en/10.json";
import t11_en from "@/data/informatika/class-6/en/11.json";
import t12_en from "@/data/informatika/class-6/en/12.json";
import t22_en from "@/data/informatika/class-6/en/22.json";
import t23_en from "@/data/informatika/class-6/en/23.json";
import t24_en from "@/data/informatika/class-6/en/24.json";
import t28_en from "@/data/informatika/class-6/en/28.json";
import t29_en from "@/data/informatika/class-6/en/29.json";
import t30_en from "@/data/informatika/class-6/en/30.json";

type RawTask =
  | { type: "mcq"; question: string; options: string[]; correct: number }
  | { type: "typing"; text: string };

function jsonToQuestions(subtopicId: string, tasks: RawTask[]): KemiaQuestion[] {
  return tasks.flatMap((task): KemiaQuestion[] => {
    if (task.type === "mcq") {
      return [{ type: "mcq", topic: "informatika", subtopic: subtopicId, question: task.question, options: task.options, correct: task.correct }];
    }
    return [{ type: "typing", topic: "informatika", subtopic: subtopicId, question: task.text, answer: task.text }];
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTasks(json: any): RawTask[] {
  return (json?.tasks ?? []) as RawTask[];
}

// ─── Multi-lang bundle (null = use de fallback) ───────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LangBundle = { de: any; hu: any; ro: any; en: any };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const K6_DATA: Record<string, LangBundle> = {
  "info_k6_t01": { de: t01_de, hu: t01_hu, ro: t01_ro, en: t01_en },
  "info_k6_t02": { de: t02_de, hu: t02_hu, ro: t02_ro, en: t02_en },
  "info_k6_t03": { de: t03_de, hu: t03_hu, ro: t03_ro, en: t03_en },
  "info_k6_t04": { de: t04_de, hu: t04_hu, ro: t04_ro, en: t04_en },
  "info_k6_t05": { de: t05_de, hu: t05_hu, ro: t05_ro, en: t05_en },
  "info_k6_t06": { de: t06_de, hu: t06_hu, ro: t06_ro, en: t06_en },
  "info_k6_t07": { de: t07_de, hu: t07_hu, ro: t07_ro, en: t07_en },
  "info_k6_t08": { de: t08_de, hu: t08_hu, ro: t08_ro, en: t08_en },
  "info_k6_t09": { de: t09_de, hu: t09_hu, ro: t09_ro, en: t09_en },
  "info_k6_t10": { de: t10_de, hu: t10_hu, ro: t10_ro, en: t10_en },
  "info_k6_t11": { de: t11_de, hu: t11_hu, ro: t11_ro, en: t11_en },
  "info_k6_t12": { de: t12_de, hu: t12_hu, ro: t12_ro, en: t12_en },
  "info_k6_t13": { de: t13_de, hu: null,   ro: null,   en: null   },
  "info_k6_t14": { de: t14_de, hu: null,   ro: null,   en: null   },
  "info_k6_t15": { de: t15_de, hu: null,   ro: t15_ro, en: null   },
  "info_k6_t16": { de: t16_de, hu: null,   ro: t16_ro, en: null   },
  "info_k6_t17": { de: t17_de, hu: null,   ro: t17_ro, en: null   },
  "info_k6_t18": { de: t18_de, hu: null,   ro: t18_ro, en: null   },
  "info_k6_t19": { de: t19_de, hu: null,   ro: t19_ro, en: null   },
  "info_k6_t20": { de: t20_de, hu: null,   ro: t20_ro, en: null   },
  "info_k6_t21": { de: t21_de, hu: null,   ro: t21_ro, en: null   },
  "info_k6_t22": { de: t22_de, hu: null,   ro: t22_ro, en: t22_en },
  "info_k6_t23": { de: t23_de, hu: null,   ro: t23_ro, en: t23_en },
  "info_k6_t24": { de: t24_de, hu: null,   ro: t24_ro, en: t24_en },
  "info_k6_t25": { de: t25_de, hu: null,   ro: null,   en: null   },
  "info_k6_t26": { de: t26_de, hu: null,   ro: null,   en: null   },
  "info_k6_t27": { de: t27_de, hu: null,   ro: null,   en: null   },
  "info_k6_t28": { de: t28_de, hu: null,   ro: t28_ro, en: t28_en },
  "info_k6_t29": { de: t29_de, hu: t29_hu, ro: t29_ro, en: t29_en },
  "info_k6_t30": { de: t30_de, hu: t30_hu, ro: t30_ro, en: t30_en },
};

function languageForCountry(cc?: string): "de" | "hu" | "ro" | "en" {
  return (cc === "DE" || cc === "AT" || cc === "CH") ? "de"
    : (cc === "RO") ? "ro"
    : (cc === "US" || cc === "GB" || cc === "AU" || cc === "CA" || cc === "IE" || cc === "NZ") ? "en"
    : "hu";
}

export function getInfoK6AvailableSubtopicIds(cc?: string): Set<string> {
  const lang = languageForCountry(cc);
  return new Set(Object.entries(K6_DATA).filter(([, bundle]) => Boolean(bundle[lang])).map(([id]) => id));
}

function _pickTasks(subId: string, cc?: string): RawTask[] {
  const lang = languageForCountry(cc);
  const bundle = K6_DATA[subId];
  if (!bundle) return [];
  const picked = bundle[lang];
  if (!picked) return [];
  return extractTasks(picked);
}

export const INFO_K6_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k6_szoveg",
    name: { de: "Text & Tabelle", hu: "Szöveg & Táblázat", ro: "Text & Tabel", en: "Text & Spreadsheet" },
    icon: "📊",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k6_t01", name: { de: "Begriff und Messung der Information", en: "Information Concept & Measurement", hu: "Az információ fogalma és mérése", ro: "Conceptul informației" }, questions: [], hasGenerator: true },
      { id: "info_k6_t02", name: { de: "Grundlagen von Netzwerken", en: "Network Basics", hu: "Hálózatok alapjai", ro: "Bazele rețelelor" }, questions: [], hasGenerator: true },
      { id: "info_k6_t03", name: { de: "Internetdienste", en: "Internet Services", hu: "Internet szolgáltatások", ro: "Servicii internet" }, questions: [], hasGenerator: true },
      { id: "info_k6_t04", name: { de: "Cloud-Dienste", en: "Cloud Services", hu: "Felhő szolgáltatások", ro: "Servicii cloud" }, questions: [], hasGenerator: true },
      { id: "info_k6_t05", name: { de: "Online-Zusammenarbeit", en: "Online Collaboration", hu: "Online együttműködés", ro: "Colaborare online" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k6_media",
    name: { de: "Medien & Grafik", hu: "Média & Grafika", ro: "Media & Grafică", en: "Media & Graphics" },
    icon: "🖼️",
    color: "#10B981",
    subtopics: [
      { id: "info_k6_t06", name: { de: "Fortgeschrittene Bildbearbeitung", en: "Advanced Image Editing", hu: "Képszerkesztés haladó", ro: "Editare imagini avansată" }, questions: [], hasGenerator: true },
      { id: "info_k6_t07", name: { de: "Grundlagen der Vektorgrafik", en: "Vector Graphics Basics", hu: "Vektorgrafika alapjai", ro: "Vectorgrafică" }, questions: [], hasGenerator: true },
      { id: "info_k6_t08", name: { de: "Textverarbeitung: Tabellen", en: "Text: Tables", hu: "Szövegszerkesztés: Táblázatok", ro: "Procesare text: Tabele" }, questions: [], hasGenerator: true },
      { id: "info_k6_t09", name: { de: "Grundlagen der Präsentation", en: "Presentation Basics", hu: "Prezentáció alapjai", ro: "Bazele prezentării" }, questions: [], hasGenerator: true },
      { id: "info_k6_t10", name: { de: "Foliendesign", en: "Slide Design", hu: "Dia tervezés", ro: "Design diapozitive" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k6_tablazat",
    name: { de: "Tabelle & Datenbank", hu: "Táblázat & Adatbázis", ro: "Tabel & Bază de date", en: "Spreadsheet & Database" },
    icon: "📋",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k6_t11", name: { de: "Animationen und Übergänge", en: "Animations & Transitions", hu: "Animációk és áttűnések", ro: "Animații și tranziții" }, questions: [], hasGenerator: true },
      { id: "info_k6_t12", name: { de: "Grundlagen der Tabellenkalkulation", en: "Spreadsheet Basics", hu: "Táblázatkezelés alapjai", ro: "Bazele calculului tabelar" }, questions: [], hasGenerator: true },
      { id: "info_k6_t13", name: { de: "Zellenformatierung", en: "Cell Formatting", hu: "Cellaformázás", ro: "Formatarea celulelor" }, questions: [], hasGenerator: true },
      { id: "info_k6_t14", name: { de: "Einfache Funktionen", en: "Simple Functions", hu: "Egyszerű függvények", ro: "Funcții simple" }, questions: [], hasGenerator: true },
      { id: "info_k6_t15", name: { de: "Diagramme erstellen", en: "Creating Charts", hu: "Diagramok", ro: "Diagrame" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k6_programozas",
    name: { de: "Programmierung Grundlagen", hu: "Programozás alapjai", ro: "Bazele programării", en: "Programming Basics" },
    icon: "💡",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k6_t16", name: { de: "Datenbank-Grundlagen", en: "Database Basics", hu: "Adatbázis alapjai", ro: "Baze de date" }, questions: [], hasGenerator: true },
      { id: "info_k6_t17", name: { de: "Flussdiagramme", en: "Flowcharts", hu: "Folyamatábrák", ro: "Diagrame flux" }, questions: [], hasGenerator: true },
      { id: "info_k6_t18", name: { de: "Variablen in der Programmierung", en: "Variables in Programming", hu: "Változók programozásban", ro: "Variabile în programare" }, questions: [], hasGenerator: true },
      { id: "info_k6_t19", name: { de: "Schleifen", en: "Loops", hu: "Ciklusok", ro: "Bucle" }, questions: [], hasGenerator: true },
      { id: "info_k6_t20", name: { de: "Bedingte Verzweigungen", en: "Conditionals", hu: "Feltételes elágazások", ro: "Condiții" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k6_digitalbizt",
    name: { de: "Digitale Sicherheit", hu: "Digitális biztonság", ro: "Securitate digitală", en: "Digital Security" },
    icon: "🔐",
    color: "#EF4444",
    subtopics: [
      { id: "info_k6_t21", name: { de: "Ereignisgesteuerte Programmierung", en: "Event-driven Programming", hu: "Eseményvezérelt programozás", ro: "Programare bazată pe evenimente" }, questions: [], hasGenerator: true },
      { id: "info_k6_t22", name: { de: "Nutzung von mobilen Apps", en: "Mobile App Usage", hu: "Mobilalkalmazások", ro: "Aplicații mobile" }, questions: [], hasGenerator: true },
      { id: "info_k6_t23", name: { de: "HTML/CSS Einführung", en: "HTML/CSS Introduction", hu: "HTML/CSS bevezető", ro: "Introducere HTML/CSS" }, questions: [], hasGenerator: true },
      { id: "info_k6_t24", name: { de: "Datenschutz und DSGVO", en: "Data Protection & GDPR", hu: "Adatvédelem", ro: "Protecția datelor" }, questions: [], hasGenerator: true },
      { id: "info_k6_t25", name: { de: "Urheberrecht und Lizenzen", en: "Copyright & Licenses", hu: "Szerzői jogok és licencek", ro: "Drepturi de autor și licențe" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k6_moderntech",
    name: { de: "Moderne Technologie", hu: "Modern technológia", ro: "Tehnologie modernă", en: "Modern Technology" },
    icon: "🤖",
    color: "#EC4899",
    subtopics: [
      { id: "info_k6_t26", name: { de: "Medienkompetenz und Fake News", en: "Media Literacy & Fake News", hu: "Médiaismeret és álhírek", ro: "Competență media" }, questions: [], hasGenerator: true },
      { id: "info_k6_t27", name: { de: "Cyberbullying-Prävention", en: "Cyberbullying Prevention", hu: "Kiberbántalmazás megelőzése", ro: "Prevenirea cyberbullying-ului" }, questions: [], hasGenerator: true },
      { id: "info_k6_t28", name: { de: "Roboter programmieren", en: "Programming Robots", hu: "Robotok programozása", ro: "Programarea roboților" }, questions: [], hasGenerator: true },
      { id: "info_k6_t29", name: { de: "IoT - Smart Home", en: "IoT - Smart Home", hu: "IoT - Okos otthon", ro: "IoT - Casă inteligentă" }, questions: [], hasGenerator: true },
      { id: "info_k6_t30", name: { de: "Zukunft der Informatik", en: "Future of IT", hu: "Az informatika jövője", ro: "Viitorul informaticii" }, questions: [], hasGenerator: true },
    ],
  },
];

export function getInfoK6Questions(subtopicIds: string[], count?: number, countryCode?: string): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const id of subtopicIds) {
    const tasks = _pickTasks(id, countryCode);
    pool.push(...jsonToQuestions(id, tasks));
  }
  return selectDiverseInformatikaQuestions(pool, count);
}
