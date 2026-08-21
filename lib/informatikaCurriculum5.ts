import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";
import { selectDiverseInformatikaQuestions } from "./informatikaQuestionDiversity";

// ─── Raw JSON imports — all 4 languages, K5 ──────────────────────────────────
import t01_hu from "@/data/informatika/class-5/hu/1.json";
import t01_de from "@/data/informatika/class-5/de/1.json";
import t01_ro from "@/data/informatika/class-5/ro/1.json";
import t01_en from "@/data/informatika/class-5/en/1.json";
import t02_hu from "@/data/informatika/class-5/hu/2.json";
import t02_de from "@/data/informatika/class-5/de/2.json";
import t02_ro from "@/data/informatika/class-5/ro/2.json";
import t02_en from "@/data/informatika/class-5/en/2.json";
import t03_hu from "@/data/informatika/class-5/hu/3.json";
import t03_de from "@/data/informatika/class-5/de/3.json";
import t03_ro from "@/data/informatika/class-5/ro/3.json";
import t03_en from "@/data/informatika/class-5/en/3.json";
import t04_hu from "@/data/informatika/class-5/hu/4.json";
import t04_de from "@/data/informatika/class-5/de/4.json";
import t04_ro from "@/data/informatika/class-5/ro/4.json";
import t04_en from "@/data/informatika/class-5/en/4.json";
import t05_hu from "@/data/informatika/class-5/hu/5.json";
import t05_de from "@/data/informatika/class-5/de/5.json";
import t05_ro from "@/data/informatika/class-5/ro/5.json";
import t05_en from "@/data/informatika/class-5/en/5.json";
import t06_hu from "@/data/informatika/class-5/hu/6.json";
import t06_de from "@/data/informatika/class-5/de/6.json";
import t06_ro from "@/data/informatika/class-5/ro/6.json";
import t06_en from "@/data/informatika/class-5/en/6.json";
import t07_hu from "@/data/informatika/class-5/hu/7.json";
import t07_de from "@/data/informatika/class-5/de/7.json";
import t07_ro from "@/data/informatika/class-5/ro/7.json";
import t07_en from "@/data/informatika/class-5/en/7.json";
import t08_hu from "@/data/informatika/class-5/hu/8.json";
import t08_de from "@/data/informatika/class-5/de/8.json";
import t08_ro from "@/data/informatika/class-5/ro/8.json";
import t08_en from "@/data/informatika/class-5/en/8.json";
import t09_hu from "@/data/informatika/class-5/hu/9.json";
import t09_de from "@/data/informatika/class-5/de/9.json";
import t09_ro from "@/data/informatika/class-5/ro/9.json";
import t09_en from "@/data/informatika/class-5/en/9.json";
import t10_hu from "@/data/informatika/class-5/hu/10.json";
import t10_de from "@/data/informatika/class-5/de/10.json";
import t10_ro from "@/data/informatika/class-5/ro/10.json";
import t10_en from "@/data/informatika/class-5/en/10.json";
import t11_hu from "@/data/informatika/class-5/hu/11.json";
import t11_de from "@/data/informatika/class-5/de/11.json";
import t11_ro from "@/data/informatika/class-5/ro/11.json";
import t11_en from "@/data/informatika/class-5/en/11.json";
import t12_hu from "@/data/informatika/class-5/hu/12.json";
import t12_de from "@/data/informatika/class-5/de/12.json";
import t12_ro from "@/data/informatika/class-5/ro/12.json";
import t12_en from "@/data/informatika/class-5/en/12.json";
import t13_hu from "@/data/informatika/class-5/hu/13.json";
import t13_de from "@/data/informatika/class-5/de/13.json";
import t13_ro from "@/data/informatika/class-5/ro/13.json";
import t13_en from "@/data/informatika/class-5/en/13.json";
import t14_hu from "@/data/informatika/class-5/hu/14.json";
import t14_de from "@/data/informatika/class-5/de/14.json";
import t14_ro from "@/data/informatika/class-5/ro/14.json";
import t14_en from "@/data/informatika/class-5/en/14.json";
import t15_hu from "@/data/informatika/class-5/hu/15.json";
import t15_de from "@/data/informatika/class-5/de/15.json";
import t15_ro from "@/data/informatika/class-5/ro/15.json";
import t15_en from "@/data/informatika/class-5/en/15.json";
import t16_hu from "@/data/informatika/class-5/hu/16.json";
import t16_de from "@/data/informatika/class-5/de/16.json";
import t16_ro from "@/data/informatika/class-5/ro/16.json";
import t16_en from "@/data/informatika/class-5/en/16.json";
import t17_hu from "@/data/informatika/class-5/hu/17.json";
import t17_de from "@/data/informatika/class-5/de/17.json";
import t17_ro from "@/data/informatika/class-5/ro/17.json";
import t17_en from "@/data/informatika/class-5/en/17.json";
import t18_hu from "@/data/informatika/class-5/hu/18.json";
import t18_de from "@/data/informatika/class-5/de/18.json";
import t18_ro from "@/data/informatika/class-5/ro/18.json";
import t18_en from "@/data/informatika/class-5/en/18.json";
import t19_hu from "@/data/informatika/class-5/hu/19.json";
import t19_de from "@/data/informatika/class-5/de/19.json";
import t19_ro from "@/data/informatika/class-5/ro/19.json";
import t19_en from "@/data/informatika/class-5/en/19.json";
import t20_hu from "@/data/informatika/class-5/hu/20.json";
import t20_de from "@/data/informatika/class-5/de/20.json";
import t20_ro from "@/data/informatika/class-5/ro/20.json";
import t20_en from "@/data/informatika/class-5/en/20.json";
import t21_hu from "@/data/informatika/class-5/hu/21.json";
import t21_de from "@/data/informatika/class-5/de/21.json";
import t21_ro from "@/data/informatika/class-5/ro/21.json";
import t21_en from "@/data/informatika/class-5/en/21.json";
import t22_hu from "@/data/informatika/class-5/hu/22.json";
import t22_de from "@/data/informatika/class-5/de/22.json";
import t22_ro from "@/data/informatika/class-5/ro/22.json";
import t22_en from "@/data/informatika/class-5/en/22.json";
import t23_hu from "@/data/informatika/class-5/hu/23.json";
import t23_de from "@/data/informatika/class-5/de/23.json";
import t23_ro from "@/data/informatika/class-5/ro/23.json";
import t23_en from "@/data/informatika/class-5/en/23.json";
import t24_hu from "@/data/informatika/class-5/hu/24.json";
import t24_de from "@/data/informatika/class-5/de/24.json";
import t24_ro from "@/data/informatika/class-5/ro/24.json";
import t24_en from "@/data/informatika/class-5/en/24.json";
import t25_hu from "@/data/informatika/class-5/hu/25.json";
import t25_de from "@/data/informatika/class-5/de/25.json";
import t25_ro from "@/data/informatika/class-5/ro/25.json";
import t25_en from "@/data/informatika/class-5/en/25.json";
import t26_hu from "@/data/informatika/class-5/hu/26.json";
import t26_de from "@/data/informatika/class-5/de/26.json";
import t26_ro from "@/data/informatika/class-5/ro/26.json";
import t26_en from "@/data/informatika/class-5/en/26.json";
import t27_hu from "@/data/informatika/class-5/hu/27.json";
import t27_de from "@/data/informatika/class-5/de/27.json";
import t27_ro from "@/data/informatika/class-5/ro/27.json";
import t27_en from "@/data/informatika/class-5/en/27.json";
import t28_hu from "@/data/informatika/class-5/hu/28.json";
import t28_de from "@/data/informatika/class-5/de/28.json";
import t28_ro from "@/data/informatika/class-5/ro/28.json";
import t28_en from "@/data/informatika/class-5/en/28.json";
import t29_hu from "@/data/informatika/class-5/hu/29.json";
import t29_de from "@/data/informatika/class-5/de/29.json";
import t29_ro from "@/data/informatika/class-5/ro/29.json";
import t29_en from "@/data/informatika/class-5/en/29.json";
import t30_hu from "@/data/informatika/class-5/hu/30.json";
import t30_de from "@/data/informatika/class-5/de/30.json";
import t30_ro from "@/data/informatika/class-5/ro/30.json";
import t30_en from "@/data/informatika/class-5/en/30.json";

// ─── JSON → KemiaQuestion converter ──────────────────────────────────────────

type RawTask =
  | { type: "mcq"; question: string; options: string[]; correct: number }
  | { type: "typing"; text: string };

function jsonToQuestions(subtopicId: string, tasks: RawTask[]): KemiaQuestion[] {
  return tasks.flatMap((task): KemiaQuestion[] => {
    if (task.type === "mcq") {
      return [{
        type: "mcq",
        topic: "informatika",
        subtopic: subtopicId,
        question: task.question,
        options: task.options,
        correct: task.correct,
      }];
    }
    return [{
      type: "typing",
      topic: "informatika",
      subtopic: subtopicId,
      question: task.text,
      answer: task.text,
    }];
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTasks(json: any): RawTask[] {
  return (json.tasks ?? []) as RawTask[];
}

// ─── Multi-lang bundle ────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const K5_DATA: Record<string, Record<string, any>> = {
  "info_k5_t01": { hu: t01_hu, de: t01_de, ro: t01_ro, en: t01_en },
  "info_k5_t02": { hu: t02_hu, de: t02_de, ro: t02_ro, en: t02_en },
  "info_k5_t03": { hu: t03_hu, de: t03_de, ro: t03_ro, en: t03_en },
  "info_k5_t04": { hu: t04_hu, de: t04_de, ro: t04_ro, en: t04_en },
  "info_k5_t05": { hu: t05_hu, de: t05_de, ro: t05_ro, en: t05_en },
  "info_k5_t06": { hu: t06_hu, de: t06_de, ro: t06_ro, en: t06_en },
  "info_k5_t07": { hu: t07_hu, de: t07_de, ro: t07_ro, en: t07_en },
  "info_k5_t08": { hu: t08_hu, de: t08_de, ro: t08_ro, en: t08_en },
  "info_k5_t09": { hu: t09_hu, de: t09_de, ro: t09_ro, en: t09_en },
  "info_k5_t10": { hu: t10_hu, de: t10_de, ro: t10_ro, en: t10_en },
  "info_k5_t11": { hu: t11_hu, de: t11_de, ro: t11_ro, en: t11_en },
  "info_k5_t12": { hu: t12_hu, de: t12_de, ro: t12_ro, en: t12_en },
  "info_k5_t13": { hu: t13_hu, de: t13_de, ro: t13_ro, en: t13_en },
  "info_k5_t14": { hu: t14_hu, de: t14_de, ro: t14_ro, en: t14_en },
  "info_k5_t15": { hu: t15_hu, de: t15_de, ro: t15_ro, en: t15_en },
  "info_k5_t16": { hu: t16_hu, de: t16_de, ro: t16_ro, en: t16_en },
  "info_k5_t17": { hu: t17_hu, de: t17_de, ro: t17_ro, en: t17_en },
  "info_k5_t18": { hu: t18_hu, de: t18_de, ro: t18_ro, en: t18_en },
  "info_k5_t19": { hu: t19_hu, de: t19_de, ro: t19_ro, en: t19_en },
  "info_k5_t20": { hu: t20_hu, de: t20_de, ro: t20_ro, en: t20_en },
  "info_k5_t21": { hu: t21_hu, de: t21_de, ro: t21_ro, en: t21_en },
  "info_k5_t22": { hu: t22_hu, de: t22_de, ro: t22_ro, en: t22_en },
  "info_k5_t23": { hu: t23_hu, de: t23_de, ro: t23_ro, en: t23_en },
  "info_k5_t24": { hu: t24_hu, de: t24_de, ro: t24_ro, en: t24_en },
  "info_k5_t25": { hu: t25_hu, de: t25_de, ro: t25_ro, en: t25_en },
  "info_k5_t26": { hu: t26_hu, de: t26_de, ro: t26_ro, en: t26_en },
  "info_k5_t27": { hu: t27_hu, de: t27_de, ro: t27_ro, en: t27_en },
  "info_k5_t28": { hu: t28_hu, de: t28_de, ro: t28_ro, en: t28_en },
  "info_k5_t29": { hu: t29_hu, de: t29_de, ro: t29_ro, en: t29_en },
  "info_k5_t30": { hu: t30_hu, de: t30_de, ro: t30_ro, en: t30_en },
};

function _pickTasks(subId: string, cc?: string): RawTask[] {
  const lang = (cc === "DE" || cc === "AT" || cc === "CH") ? "de"
    : (cc === "RO") ? "ro"
    : (cc === "US" || cc === "GB" || cc === "AU" || cc === "CA" || cc === "IE" || cc === "NZ") ? "en"
    : "hu";
  const bundle = K5_DATA[subId];
  if (!bundle) return [];
  const picked = bundle[lang] || bundle.hu || bundle.en || bundle.de;
  return extractTasks(picked);
}

// ─── K5 curriculum — 6 themes × 5 subtopics = 30 topics ─────────────────────

export const INFO_K5_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k5_alapok",
    name: { de: "Computer Grundlagen", hu: "Számítógép alapok", ro: "Bazele computerului", en: "Computer Basics" },
    icon: "💻",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k5_t01", name: { de: "Welt der Daten", en: "World of Data", hu: "Adatok világa", ro: "Lumea Datelor" }, questions: [], hasGenerator: true },
      { id: "info_k5_t02", name: { de: "Hardware Grundlagen", en: "Hardware Basics", hu: "Hardver alapok", ro: "Bazele Hardware" }, questions: [], hasGenerator: true },
      { id: "info_k5_t03", name: { de: "Software", en: "Software", hu: "Szoftverek", ro: "Software" }, questions: [], hasGenerator: true },
      { id: "info_k5_t04", name: { de: "Betriebssystem", en: "Operating System", hu: "Operációs rendszer", ro: "Sistem de operare" }, questions: [], hasGenerator: true },
      { id: "info_k5_t05", name: { de: "Dateiverwaltung", en: "File Management", hu: "Állománykezelés", ro: "Gestionarea fișierelor" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k5_eszkozok",
    name: { de: "Computergeräte", hu: "Számítógép eszközök", ro: "Dispozitive computer", en: "Computer Devices" },
    icon: "⌨️",
    color: "#10B981",
    subtopics: [
      { id: "info_k5_t06", name: { de: "Peripheriegeräte", en: "Peripherals", hu: "Perifériák", ro: "Periferice" }, questions: [], hasGenerator: true },
      { id: "info_k5_t07", name: { de: "Eingabegeräte", en: "Input Devices", hu: "Bemeneti eszközök", ro: "Dispozitive de intrare" }, questions: [], hasGenerator: true },
      { id: "info_k5_t08", name: { de: "Ausgabegeräte", en: "Output Devices", hu: "Kimeneti eszközök", ro: "Dispozitive de ieșire" }, questions: [], hasGenerator: true },
      { id: "info_k5_t09", name: { de: "Speichermedien", en: "Storage Media", hu: "Háttértárak", ro: "Medii de stocare" }, questions: [], hasGenerator: true },
      { id: "info_k5_t10", name: { de: "Monitor & Display", en: "Monitor & Display", hu: "Monitor & Kijelző", ro: "Monitor & Display" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k5_alkalmazasok",
    name: { de: "Anwendungen", hu: "Alkalmazások", ro: "Aplicații", en: "Applications" },
    icon: "📝",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k5_t11", name: { de: "Tastatur & Tippen", en: "Keyboard & Typing", hu: "Billentyűzet", ro: "Tastatură" }, questions: [], hasGenerator: true },
      { id: "info_k5_t12", name: { de: "Maus & Steuerung", en: "Mouse & Control", hu: "Egér & Vezérlés", ro: "Mouse & Control" }, questions: [], hasGenerator: true },
      { id: "info_k5_t13", name: { de: "Digitale Grafik", en: "Digital Graphics", hu: "Digitális grafika", ro: "Grafică digitală" }, questions: [], hasGenerator: true },
      { id: "info_k5_t14", name: { de: "Textverarbeitung", en: "Text Processing", hu: "Szövegszerkesztés", ro: "Procesare text" }, questions: [], hasGenerator: true },
      { id: "info_k5_t15", name: { de: "Formatierung", en: "Formatting", hu: "Formázás", ro: "Formatare" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k5_internet",
    name: { de: "Internet", hu: "Internet", ro: "Internet", en: "Internet" },
    icon: "🌐",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k5_t16", name: { de: "Speichern & Öffnen", en: "Saving & Opening", hu: "Mentés & Megnyitás", ro: "Salvare & Deschidere" }, questions: [], hasGenerator: true },
      { id: "info_k5_t17", name: { de: "Internet Struktur", en: "Internet Structure", hu: "Internet felépítése", ro: "Structura Internetului" }, questions: [], hasGenerator: true },
      { id: "info_k5_t18", name: { de: "Web-Browser", en: "Web Browser", hu: "Böngészők", ro: "Browser web" }, questions: [], hasGenerator: true },
      { id: "info_k5_t19", name: { de: "Suchmaschinen", en: "Search Engines", hu: "Keresőmotorok", ro: "Motoare de căutare" }, questions: [], hasGenerator: true },
      { id: "info_k5_t20", name: { de: "Glaubwürdigkeit", en: "Credibility", hu: "Hitelesség", ro: "Credibilitate" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k5_digitalpolgar",
    name: { de: "Digitale Bürgerschaft", hu: "Digitális állampolgárság", ro: "Cetățenie digitală", en: "Digital Citizenship" },
    icon: "🔒",
    color: "#EF4444",
    subtopics: [
      { id: "info_k5_t21", name: { de: "Digitale Sicherheit", en: "Digital Security", hu: "Digitális biztonság", ro: "Securitate digitală" }, questions: [], hasGenerator: true },
      { id: "info_k5_t22", name: { de: "Netiquette", en: "Netiquette", hu: "Netikett", ro: "Neticheta" }, questions: [], hasGenerator: true },
      { id: "info_k5_t23", name: { de: "E-Mail", en: "Email", hu: "Elektronikus levelezés", ro: "E-mail" }, questions: [], hasGenerator: true },
      { id: "info_k5_t24", name: { de: "Urheberrecht", en: "Copyright", hu: "Szerzői jogok", ro: "Drepturi de autor" }, questions: [], hasGenerator: true },
      { id: "info_k5_t25", name: { de: "Algorithmen", en: "Algorithms", hu: "Algoritmusok", ro: "Algoritmi" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k5_moderntech",
    name: { de: "Moderne Technologie", hu: "Modern technológia", ro: "Tehnologie modernă", en: "Modern Technology" },
    icon: "🤖",
    color: "#EC4899",
    subtopics: [
      { id: "info_k5_t26", name: { de: "Programmieren", en: "Programming", hu: "Programozás", ro: "Programare" }, questions: [], hasGenerator: true },
      { id: "info_k5_t27", name: { de: "Robotik Basics", en: "Robotics Basics", hu: "Robotika", ro: "Robotică" }, questions: [], hasGenerator: true },
      { id: "info_k5_t28", name: { de: "Künstliche Intelligenz", en: "Artificial Intelligence", hu: "Mesterséges intelligencia", ro: "Inteligență artificială" }, questions: [], hasGenerator: true },
      { id: "info_k5_t29", name: { de: "Smarte Geräte", en: "Smart Devices", hu: "Okoseszközök", ro: "Dispozitive inteligente" }, questions: [], hasGenerator: true },
      { id: "info_k5_t30", name: { de: "Geschichte der IT", en: "History of IT", hu: "Informatika története", ro: "Istoria IT" }, questions: [], hasGenerator: true },
    ],
  },
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK5Questions(subtopicIds: string[], count?: number, countryCode?: string): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const id of subtopicIds) {
    const tasks = _pickTasks(id, countryCode);
    pool.push(...jsonToQuestions(id, tasks));
  }
  return selectDiverseInformatikaQuestions(pool, count);
}
