import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// ─── Raw JSON imports (Hungarian, K5) ────────────────────────────────────────
import t01 from "@/data/informatika/class-5/hu/1.json";
import t02 from "@/data/informatika/class-5/hu/2.json";
import t03 from "@/data/informatika/class-5/hu/3.json";
import t04 from "@/data/informatika/class-5/hu/4.json";
import t05 from "@/data/informatika/class-5/hu/5.json";
import t06 from "@/data/informatika/class-5/hu/6.json";
import t07 from "@/data/informatika/class-5/hu/7.json";
import t08 from "@/data/informatika/class-5/hu/8.json";
import t09 from "@/data/informatika/class-5/hu/9.json";
import t10 from "@/data/informatika/class-5/hu/10.json";
import t11 from "@/data/informatika/class-5/hu/11.json";
import t12 from "@/data/informatika/class-5/hu/12.json";
import t13 from "@/data/informatika/class-5/hu/13.json";
import t14 from "@/data/informatika/class-5/hu/14.json";
import t15 from "@/data/informatika/class-5/hu/15.json";
import t16 from "@/data/informatika/class-5/hu/16.json";
import t17 from "@/data/informatika/class-5/hu/17.json";
import t18 from "@/data/informatika/class-5/hu/18.json";
import t19 from "@/data/informatika/class-5/hu/19.json";
import t20 from "@/data/informatika/class-5/hu/20.json";
import t21 from "@/data/informatika/class-5/hu/21.json";
import t22 from "@/data/informatika/class-5/hu/22.json";
import t23 from "@/data/informatika/class-5/hu/23.json";
import t24 from "@/data/informatika/class-5/hu/24.json";
import t25 from "@/data/informatika/class-5/hu/25.json";
import t26 from "@/data/informatika/class-5/hu/26.json";
import t27 from "@/data/informatika/class-5/hu/27.json";
import t28 from "@/data/informatika/class-5/hu/28.json";
import t29 from "@/data/informatika/class-5/hu/29.json";
import t30 from "@/data/informatika/class-5/hu/30.json";

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

// ─── K5 curriculum — 6 themes × 5 subtopics = 30 topics ─────────────────────

export const INFO_K5_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k5_alapok",
    name: "Számítógép alapok",
    icon: "💻",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k5_t01", name: { de: "Welt der Daten", en: "World of Data", hu: "Adatok világa", ro: "Lumea Datelor" }, questions: jsonToQuestions("info_k5_t01", extractTasks(t01)), hasGenerator: false },
      { id: "info_k5_t02", name: { de: "Hardware Grundlagen", en: "Hardware Basics", hu: "Hardver alapok", ro: "Bazele Hardware" }, questions: jsonToQuestions("info_k5_t02", extractTasks(t02)), hasGenerator: false },
      { id: "info_k5_t03", name: { de: "Software", en: "Software", hu: "Szoftverek", ro: "Software" }, questions: jsonToQuestions("info_k5_t03", extractTasks(t03)), hasGenerator: false },
      { id: "info_k5_t04", name: { de: "Betriebssystem", en: "Operating System", hu: "Operációs rendszer", ro: "Sistem de operare" }, questions: jsonToQuestions("info_k5_t04", extractTasks(t04)), hasGenerator: false },
      { id: "info_k5_t05", name: { de: "Dateiverwaltung", en: "File Management", hu: "Állománykezelés", ro: "Gestionarea fișierelor" }, questions: jsonToQuestions("info_k5_t05", extractTasks(t05)), hasGenerator: false },
    ],
  },
  {
    id: "info_k5_eszkozok",
    name: "Számítógép eszközök",
    icon: "⌨️",
    color: "#10B981",
    subtopics: [
      { id: "info_k5_t06", name: { de: "Peripheriegeräte", en: "Peripherals", hu: "Perifériák", ro: "Periferice" }, questions: jsonToQuestions("info_k5_t06", extractTasks(t06)), hasGenerator: false },
      { id: "info_k5_t07", name: { de: "Eingabegeräte", en: "Input Devices", hu: "Bemeneti eszközök", ro: "Dispozitive de intrare" }, questions: jsonToQuestions("info_k5_t07", extractTasks(t07)), hasGenerator: false },
      { id: "info_k5_t08", name: { de: "Ausgabegeräte", en: "Output Devices", hu: "Kimeneti eszközök", ro: "Dispozitive de ieșire" }, questions: jsonToQuestions("info_k5_t08", extractTasks(t08)), hasGenerator: false },
      { id: "info_k5_t09", name: { de: "Speichermedien", en: "Storage Media", hu: "Háttértárak", ro: "Medii de stocare" }, questions: jsonToQuestions("info_k5_t09", extractTasks(t09)), hasGenerator: false },
      { id: "info_k5_t10", name: { de: "Monitor & Display", en: "Monitor & Display", hu: "Monitor & Kijelző", ro: "Monitor & Display" }, questions: jsonToQuestions("info_k5_t10", extractTasks(t10)), hasGenerator: false },
    ],
  },
  {
    id: "info_k5_alkalmazasok",
    name: "Alkalmazások",
    icon: "📝",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k5_t11", name: { de: "Tastatur & Tippen", en: "Keyboard & Typing", hu: "Billentyűzet", ro: "Tastatură" }, questions: jsonToQuestions("info_k5_t11", extractTasks(t11)), hasGenerator: false },
      { id: "info_k5_t12", name: { de: "Maus & Steuerung", en: "Mouse & Control", hu: "Egér & Vezérlés", ro: "Mouse & Control" }, questions: jsonToQuestions("info_k5_t12", extractTasks(t12)), hasGenerator: false },
      { id: "info_k5_t13", name: { de: "Digitale Grafik", en: "Digital Graphics", hu: "Digitális grafika", ro: "Grafică digitală" }, questions: jsonToQuestions("info_k5_t13", extractTasks(t13)), hasGenerator: false },
      { id: "info_k5_t14", name: { de: "Textverarbeitung", en: "Text Processing", hu: "Szövegszerkesztés", ro: "Procesare text" }, questions: jsonToQuestions("info_k5_t14", extractTasks(t14)), hasGenerator: false },
      { id: "info_k5_t15", name: { de: "Formatierung", en: "Formatting", hu: "Formázás", ro: "Formatare" }, questions: jsonToQuestions("info_k5_t15", extractTasks(t15)), hasGenerator: false },
    ],
  },
  {
    id: "info_k5_internet",
    name: "Internet",
    icon: "🌐",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k5_t16", name: { de: "Speichern & Öffnen", en: "Saving & Opening", hu: "Mentés & Megnyitás", ro: "Salvare & Deschidere" }, questions: jsonToQuestions("info_k5_t16", extractTasks(t16)), hasGenerator: false },
      { id: "info_k5_t17", name: { de: "Internet Struktur", en: "Internet Structure", hu: "Internet felépítése", ro: "Structura Internetului" }, questions: jsonToQuestions("info_k5_t17", extractTasks(t17)), hasGenerator: false },
      { id: "info_k5_t18", name: { de: "Web-Browser", en: "Web Browser", hu: "Böngészők", ro: "Browser web" }, questions: jsonToQuestions("info_k5_t18", extractTasks(t18)), hasGenerator: false },
      { id: "info_k5_t19", name: { de: "Suchmaschinen", en: "Search Engines", hu: "Keresőmotorok", ro: "Motoare de căutare" }, questions: jsonToQuestions("info_k5_t19", extractTasks(t19)), hasGenerator: false },
      { id: "info_k5_t20", name: { de: "Glaubwürdigkeit", en: "Credibility", hu: "Hitelesség", ro: "Credibilitate" }, questions: jsonToQuestions("info_k5_t20", extractTasks(t20)), hasGenerator: false },
    ],
  },
  {
    id: "info_k5_digitalpolgar",
    name: "Digitális állampolgárság",
    icon: "🔒",
    color: "#EF4444",
    subtopics: [
      { id: "info_k5_t21", name: { de: "Digitale Sicherheit", en: "Digital Security", hu: "Digitális biztonság", ro: "Securitate digitală" }, questions: jsonToQuestions("info_k5_t21", extractTasks(t21)), hasGenerator: false },
      { id: "info_k5_t22", name: { de: "Netiquette", en: "Netiquette", hu: "Netikett", ro: "Neticheta" }, questions: jsonToQuestions("info_k5_t22", extractTasks(t22)), hasGenerator: false },
      { id: "info_k5_t23", name: { de: "E-Mail", en: "Email", hu: "Elektronikus levelezés", ro: "E-mail" }, questions: jsonToQuestions("info_k5_t23", extractTasks(t23)), hasGenerator: false },
      { id: "info_k5_t24", name: { de: "Urheberrecht", en: "Copyright", hu: "Szerzői jogok", ro: "Drepturi de autor" }, questions: jsonToQuestions("info_k5_t24", extractTasks(t24)), hasGenerator: false },
      { id: "info_k5_t25", name: { de: "Algorithmen", en: "Algorithms", hu: "Algoritmusok", ro: "Algoritmi" }, questions: jsonToQuestions("info_k5_t25", extractTasks(t25)), hasGenerator: false },
    ],
  },
  {
    id: "info_k5_moderntech",
    name: "Modern technológia",
    icon: "🤖",
    color: "#EC4899",
    subtopics: [
      { id: "info_k5_t26", name: { de: "Programmieren", en: "Programming", hu: "Programozás", ro: "Programare" }, questions: jsonToQuestions("info_k5_t26", extractTasks(t26)), hasGenerator: false },
      { id: "info_k5_t27", name: { de: "Robotik Basics", en: "Robotics Basics", hu: "Robotika", ro: "Robotică" }, questions: jsonToQuestions("info_k5_t27", extractTasks(t27)), hasGenerator: false },
      { id: "info_k5_t28", name: { de: "Künstliche Intelligenz", en: "Artificial Intelligence", hu: "Mesterséges intelligencia", ro: "Inteligență artificială" }, questions: jsonToQuestions("info_k5_t28", extractTasks(t28)), hasGenerator: false },
      { id: "info_k5_t29", name: { de: "Smarte Geräte", en: "Smart Devices", hu: "Okoseszközök", ro: "Dispozitive inteligente" }, questions: jsonToQuestions("info_k5_t29", extractTasks(t29)), hasGenerator: false },
      { id: "info_k5_t30", name: { de: "Geschichte der IT", en: "History of IT", hu: "Informatika története", ro: "Istoria IT" }, questions: jsonToQuestions("info_k5_t30", extractTasks(t30)), hasGenerator: false },
    ],
  },
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK5Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of INFO_K5_CURRICULUM) {
    for (const sub of theme.subtopics) {
      if (subtopicIds.includes(sub.id)) {
        pool.push(...sub.questions);
      }
    }
  }
  if (!count) return pool;
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
