import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

import t1_hu from "@/data/informatika/class-4/hu/1.json";
import t1_de from "@/data/informatika/class-4/de/1.json";
import t1_ro from "@/data/informatika/class-4/ro/1.json";
import t1_en from "@/data/informatika/class-4/en/1.json";
import t2_hu from "@/data/informatika/class-4/hu/2.json";
import t2_de from "@/data/informatika/class-4/de/2.json";
import t2_ro from "@/data/informatika/class-4/ro/2.json";
import t2_en from "@/data/informatika/class-4/en/2.json";
import t3_hu from "@/data/informatika/class-4/hu/3.json";
import t3_de from "@/data/informatika/class-4/de/3.json";
import t3_ro from "@/data/informatika/class-4/ro/3.json";
import t3_en from "@/data/informatika/class-4/en/3.json";
import t4_hu from "@/data/informatika/class-4/hu/4.json";
import t4_de from "@/data/informatika/class-4/de/4.json";
import t4_ro from "@/data/informatika/class-4/ro/4.json";
import t4_en from "@/data/informatika/class-4/en/4.json";
import t5_hu from "@/data/informatika/class-4/hu/5.json";
import t5_de from "@/data/informatika/class-4/de/5.json";
import t5_ro from "@/data/informatika/class-4/ro/5.json";
import t5_en from "@/data/informatika/class-4/en/5.json";
import t6_hu from "@/data/informatika/class-4/hu/6.json";
import t6_de from "@/data/informatika/class-4/de/6.json";
import t6_ro from "@/data/informatika/class-4/ro/6.json";
import t6_en from "@/data/informatika/class-4/en/6.json";
import t7_hu from "@/data/informatika/class-4/hu/7.json";
import t7_de from "@/data/informatika/class-4/de/7.json";
import t7_ro from "@/data/informatika/class-4/ro/7.json";
import t7_en from "@/data/informatika/class-4/en/7.json";
import t8_hu from "@/data/informatika/class-4/hu/8.json";
import t8_de from "@/data/informatika/class-4/de/8.json";
import t8_ro from "@/data/informatika/class-4/ro/8.json";
import t8_en from "@/data/informatika/class-4/en/8.json";
import t9_hu from "@/data/informatika/class-4/hu/9.json";
import t9_de from "@/data/informatika/class-4/de/9.json";
import t9_ro from "@/data/informatika/class-4/ro/9.json";
import t9_en from "@/data/informatika/class-4/en/9.json";
import t10_hu from "@/data/informatika/class-4/hu/10.json";
import t10_de from "@/data/informatika/class-4/de/10.json";
import t10_ro from "@/data/informatika/class-4/ro/10.json";
import t10_en from "@/data/informatika/class-4/en/10.json";
import t11_hu from "@/data/informatika/class-4/hu/11.json";
import t11_de from "@/data/informatika/class-4/de/11.json";
import t11_ro from "@/data/informatika/class-4/ro/11.json";
import t11_en from "@/data/informatika/class-4/en/11.json";
import t12_hu from "@/data/informatika/class-4/hu/12.json";
import t12_de from "@/data/informatika/class-4/de/12.json";
import t12_ro from "@/data/informatika/class-4/ro/12.json";
import t12_en from "@/data/informatika/class-4/en/12.json";
import t13_hu from "@/data/informatika/class-4/hu/13.json";
import t13_de from "@/data/informatika/class-4/de/13.json";
import t13_ro from "@/data/informatika/class-4/ro/13.json";
import t13_en from "@/data/informatika/class-4/en/13.json";
import t14_hu from "@/data/informatika/class-4/hu/14.json";
import t14_de from "@/data/informatika/class-4/de/14.json";
import t14_ro from "@/data/informatika/class-4/ro/14.json";
import t14_en from "@/data/informatika/class-4/en/14.json";
import t15_hu from "@/data/informatika/class-4/hu/15.json";
import t15_de from "@/data/informatika/class-4/de/15.json";
import t15_ro from "@/data/informatika/class-4/ro/15.json";
import t15_en from "@/data/informatika/class-4/en/15.json";
import t16_hu from "@/data/informatika/class-4/hu/16.json";
import t16_de from "@/data/informatika/class-4/de/16.json";
import t16_ro from "@/data/informatika/class-4/ro/16.json";
import t16_en from "@/data/informatika/class-4/en/16.json";
import t17_hu from "@/data/informatika/class-4/hu/17.json";
import t17_de from "@/data/informatika/class-4/de/17.json";
import t17_ro from "@/data/informatika/class-4/ro/17.json";
import t17_en from "@/data/informatika/class-4/en/17.json";
import t18_hu from "@/data/informatika/class-4/hu/18.json";
import t18_de from "@/data/informatika/class-4/de/18.json";
import t18_ro from "@/data/informatika/class-4/ro/18.json";
import t18_en from "@/data/informatika/class-4/en/18.json";
import t19_hu from "@/data/informatika/class-4/hu/19.json";
import t19_de from "@/data/informatika/class-4/de/19.json";
import t19_ro from "@/data/informatika/class-4/ro/19.json";
import t19_en from "@/data/informatika/class-4/en/19.json";
import t20_hu from "@/data/informatika/class-4/hu/20.json";
import t20_de from "@/data/informatika/class-4/de/20.json";
import t20_ro from "@/data/informatika/class-4/ro/20.json";
import t20_en from "@/data/informatika/class-4/en/20.json";
import t21_hu from "@/data/informatika/class-4/hu/21.json";
import t21_de from "@/data/informatika/class-4/de/21.json";
import t21_ro from "@/data/informatika/class-4/ro/21.json";
import t21_en from "@/data/informatika/class-4/en/21.json";
import t22_hu from "@/data/informatika/class-4/hu/22.json";
import t22_de from "@/data/informatika/class-4/de/22.json";
import t22_ro from "@/data/informatika/class-4/ro/22.json";
import t22_en from "@/data/informatika/class-4/en/22.json";
import t23_hu from "@/data/informatika/class-4/hu/23.json";
import t23_de from "@/data/informatika/class-4/de/23.json";
import t23_ro from "@/data/informatika/class-4/ro/23.json";
import t23_en from "@/data/informatika/class-4/en/23.json";
import t24_hu from "@/data/informatika/class-4/hu/24.json";
import t24_de from "@/data/informatika/class-4/de/24.json";
import t24_ro from "@/data/informatika/class-4/ro/24.json";
import t24_en from "@/data/informatika/class-4/en/24.json";
import t25_hu from "@/data/informatika/class-4/hu/25.json";
import t25_de from "@/data/informatika/class-4/de/25.json";
import t25_ro from "@/data/informatika/class-4/ro/25.json";
import t25_en from "@/data/informatika/class-4/en/25.json";
import t02 from "@/data/informatika/class-4/hu/t02.json";
import t03 from "@/data/informatika/class-4/hu/t03.json";
import t04 from "@/data/informatika/class-4/hu/t04.json";
import t05 from "@/data/informatika/class-4/hu/t05.json";
import t06 from "@/data/informatika/class-4/hu/t06.json";
import t07 from "@/data/informatika/class-4/hu/t07.json";
import t08 from "@/data/informatika/class-4/hu/t08.json";
import t09 from "@/data/informatika/class-4/hu/t09.json";
import t10 from "@/data/informatika/class-4/hu/t10.json";
import t11 from "@/data/informatika/class-4/hu/t11.json";
import t12 from "@/data/informatika/class-4/hu/t12.json";
import t13 from "@/data/informatika/class-4/hu/t13.json";
import t14 from "@/data/informatika/class-4/hu/t14.json";
import t15 from "@/data/informatika/class-4/hu/t15.json";
import t16 from "@/data/informatika/class-4/hu/t16.json";
import t17 from "@/data/informatika/class-4/hu/t17.json";
import t18 from "@/data/informatika/class-4/hu/t18.json";
import t19 from "@/data/informatika/class-4/hu/t19.json";
import t20 from "@/data/informatika/class-4/hu/t20.json";
import t21 from "@/data/informatika/class-4/hu/t21.json";
import t22 from "@/data/informatika/class-4/hu/t22.json";
import t23 from "@/data/informatika/class-4/hu/t23.json";
import t24 from "@/data/informatika/class-4/hu/t24.json";
import t25 from "@/data/informatika/class-4/hu/t25.json";

// ─── JSON → KemiaQuestion converter ──────────────────────────────────────────

type RawTask =
  | { type: "multiple_choice"; question: string; options: string[]; correctAnswer: number }
  | { type: "typing"; text: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonToQuestions(subtopicId: string, tasks: any[]): KemiaQuestion[] {
  return tasks.flatMap((task: any): KemiaQuestion[] => {
    const isMcq = task.type === "multiple_choice" || task.type === "mcq" || Array.isArray(task.options);
    if (isMcq) {
      const options: string[] = task.options ?? [];
      let correct = typeof task.correct === "number" ? task.correct
        : typeof task.correctAnswer === "number" ? task.correctAnswer
        : options.indexOf(task.answer);
      if (!(correct >= 0)) correct = 0;
      if (!task.question || !options.length) return [];
      return [{ type: "mcq", topic: "informatika", subtopic: subtopicId, question: task.question, options, correct }];
    }
    const q = task.question ?? task.text;
    const a = task.answer ?? task.text;
    if (!q) return [];
    return [{ type: "typing", topic: "informatika", subtopic: subtopicId, question: q, answer: a }];
  });
}

// A K4 JSON `tasks` lehet régi lapos tömb, vagy új { mcq:[...], typing:[...] } objektum.
// Az új typing csak promptnélküli szólista → kihagyjuk; az mcq-t (answer string) használjuk.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTasks(json: any): any[] {
  const t = json?.tasks;
  if (Array.isArray(t)) return t;
  if (t && Array.isArray(t.mcq)) return t.mcq;
  return [];
}

// ─── K4 curriculum — 5 themes × 5 subtopics = 25 topics ─────────────────────


const K4_DATA: Record<string, Record<string, any>> = {
  "info_k4_t01": { hu: t1_hu, de: t1_de, ro: t1_ro, en: t1_en },
  "info_k4_t02": { hu: t2_hu, de: t2_de, ro: t2_ro, en: t2_en },
  "info_k4_t03": { hu: t3_hu, de: t3_de, ro: t3_ro, en: t3_en },
  "info_k4_t04": { hu: t4_hu, de: t4_de, ro: t4_ro, en: t4_en },
  "info_k4_t05": { hu: t5_hu, de: t5_de, ro: t5_ro, en: t5_en },
  "info_k4_t06": { hu: t6_hu, de: t6_de, ro: t6_ro, en: t6_en },
  "info_k4_t07": { hu: t7_hu, de: t7_de, ro: t7_ro, en: t7_en },
  "info_k4_t08": { hu: t8_hu, de: t8_de, ro: t8_ro, en: t8_en },
  "info_k4_t09": { hu: t9_hu, de: t9_de, ro: t9_ro, en: t9_en },
  "info_k4_t10": { hu: t10_hu, de: t10_de, ro: t10_ro, en: t10_en },
  "info_k4_t11": { hu: t11_hu, de: t11_de, ro: t11_ro, en: t11_en },
  "info_k4_t12": { hu: t12_hu, de: t12_de, ro: t12_ro, en: t12_en },
  "info_k4_t13": { hu: t13_hu, de: t13_de, ro: t13_ro, en: t13_en },
  "info_k4_t14": { hu: t14_hu, de: t14_de, ro: t14_ro, en: t14_en },
  "info_k4_t15": { hu: t15_hu, de: t15_de, ro: t15_ro, en: t15_en },
  "info_k4_t16": { hu: t16_hu, de: t16_de, ro: t16_ro, en: t16_en },
  "info_k4_t17": { hu: t17_hu, de: t17_de, ro: t17_ro, en: t17_en },
  "info_k4_t18": { hu: t18_hu, de: t18_de, ro: t18_ro, en: t18_en },
  "info_k4_t19": { hu: t19_hu, de: t19_de, ro: t19_ro, en: t19_en },
  "info_k4_t20": { hu: t20_hu, de: t20_de, ro: t20_ro, en: t20_en },
  "info_k4_t21": { hu: t21_hu, de: t21_de, ro: t21_ro, en: t21_en },
  "info_k4_t22": { hu: t22_hu, de: t22_de, ro: t22_ro, en: t22_en },
  "info_k4_t23": { hu: t23_hu, de: t23_de, ro: t23_ro, en: t23_en },
  "info_k4_t24": { hu: t24_hu, de: t24_de, ro: t24_ro, en: t24_en },
  "info_k4_t25": { hu: t25_hu, de: t25_de, ro: t25_ro, en: t25_en },
};

function _pickTasks(subId: string, cc?: string): RawTask[] {
  const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de'
    : (cc === 'RO') ? 'ro'
    : (cc === 'US' || cc === 'GB' || cc === 'AU' || cc === 'CA' || cc === 'IE' || cc === 'NZ') ? 'en'
    : 'hu';
  const bundle = K4_DATA[subId];
  if (!bundle) return [];
  const picked = bundle[lang] || bundle.hu || bundle.en || bundle.de;
  return extractTasks(picked);
}

export const INFO_K4_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k4_programozas_alap",
    name: { de: "Programmierung Grundlagen", hu: "Programozás alap", ro: "Bazele programării", en: "Programming Basics" },
    icon: "💻",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k4_t01", name: { de: "Scratch Einführung", en: "Scratch Introduction", hu: "Scratch bevezetés", ro: "Introducere Scratch" }, questions: [], hasGenerator: true },
      { id: "info_k4_t02", name: { de: "Blockbasierte Programmierung", en: "Block-based Programming", hu: "Blokkalapú programozás", ro: "Programare bazată pe blocuri" }, questions: [], hasGenerator: true },
      { id: "info_k4_t03", name: { de: "Algorithmus-Begriff", en: "Algorithm Concept", hu: "Algoritmus fogalma", ro: "Conceptul de algoritm" }, questions: [], hasGenerator: true },
      { id: "info_k4_t04", name: { de: "Anweisungs-Sequenz", en: "Instruction Sequence", hu: "Utasítássorozat", ro: "Secvență de instrucțiuni" }, questions: [], hasGenerator: true },
      { id: "info_k4_t05", name: { de: "Schleife (Loop)", en: "Loop", hu: "Ciklus (Loop)", ro: "Buclă (Loop)" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k4_logika",
    name: { de: "Logik", hu: "Logika", ro: "Logică", en: "Logic" },
    icon: "🧩",
    color: "#10B981",
    subtopics: [
      { id: "info_k4_t06", name: { de: "Bedingung (If)", en: "Condition (If)", hu: "Feltétel (If)", ro: "Condiție (If)" }, questions: [], hasGenerator: true },
      { id: "info_k4_t07", name: { de: "Variable", en: "Variable", hu: "Változó", ro: "Variabilă" }, questions: [], hasGenerator: true },
      { id: "info_k4_t08", name: { de: "Input / Output", en: "Input / Output", hu: "Bemenet / Kimenet", ro: "Intrare / Ieșire" }, questions: [], hasGenerator: true },
      { id: "info_k4_t09", name: { de: "Sprite / Animation (Scratch)", en: "Sprite / Animation (Scratch)", hu: "Szereplő / Animáció (Scratch)", ro: "Personaj / Animație (Scratch)" }, questions: [], hasGenerator: true },
      { id: "info_k4_t10", name: { de: "Musik-Loop", en: "Music Loop", hu: "Zenei ciklus", ro: "Buclă muzicală" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k4_kreativ_alkalmazasok",
    name: { de: "Kreative Anwendungen", hu: "Kreatív alkalmazások", ro: "Aplicații creative", en: "Creative Applications" },
    icon: "🎨",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k4_t11", name: { de: "Foto-Editing Grundlagen", en: "Photo Editing Basics", hu: "Képszerkesztés alapjai", ro: "Bazele editării foto" }, questions: [], hasGenerator: true },
      { id: "info_k4_t12", name: { de: "Video-Editing Grundlagen", en: "Video Editing Basics", hu: "Videószerkesztés alapjai", ro: "Bazele editării video" }, questions: [], hasGenerator: true },
      { id: "info_k4_t13", name: { de: "PowerPoint fortgeschritten", en: "Advanced PowerPoint", hu: "Haladó PowerPoint", ro: "PowerPoint avansat" }, questions: [], hasGenerator: true },
      { id: "info_k4_t14", name: { de: "Präsentations-Regeln", en: "Presentation Rules", hu: "Prezentációs szabályok", ro: "Reguli de prezentare" }, questions: [], hasGenerator: true },
      { id: "info_k4_t15", name: { de: "Recherche (Suchbegriffe)", en: "Research (Search Terms)", hu: "Keresés (Keresőszavak)", ro: "Cercetare (Termeni de căutare)" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k4_research_kommunikacio",
    name: { de: "Recherche + Kommunikation", hu: "Research + kommunikáció", ro: "Cercetare + Comunicare", en: "Research + Communication" },
    icon: "📡",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k4_t16", name: { de: "Wikipedia Kids", en: "Wikipedia Kids", hu: "Gyerek Wikipédia", ro: "Wikipedia Kids" }, questions: [], hasGenerator: true },
      { id: "info_k4_t17", name: { de: "Quelle — ist sie vertrauenswürdig?", en: "Source — is it reliable?", hu: "Forrás — megbízható?", ro: "Sursa — este de încredere?" }, questions: [], hasGenerator: true },
      { id: "info_k4_t18", name: { de: "Digitaler Fußabdruck", en: "Digital Footprint", hu: "Digitális lábnyom", ro: "Amprenta digitală" }, questions: [], hasGenerator: true },
      { id: "info_k4_t19", name: { de: "Sicherheit: starkes Passwort", en: "Security: Strong Password", hu: "Biztonság: erős jelszó", ro: "Securitate: Parolă puternică" }, questions: [], hasGenerator: true },
      { id: "info_k4_t20", name: { de: "Cybermobbing", en: "Cyberbullying", hu: "Számítógépes zaklatás", ro: "Hărțuire cibernetică" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k4_biztonsag_jovo",
    name: { de: "Sicherheit + Zukunft", hu: "Biztonság + jövő", ro: "Securitate + Viitor", en: "Security + Future" },
    icon: "🛡️",
    color: "#EC4899",
    subtopics: [
      { id: "info_k4_t21", name: { de: "Screenshot erweitert", en: "Advanced Screenshot", hu: "Haladó képernyőkép", ro: "Captură de ecran avansată" }, questions: [], hasGenerator: true },
      { id: "info_k4_t22", name: { de: "Cloud Grundlagen (Drive)", en: "Cloud Basics (Drive)", hu: "Felhő alapok (Drive)", ro: "Bazele Cloud (Drive)" }, questions: [], hasGenerator: true },
      { id: "info_k4_t23", name: { de: "Zusammenarbeit (Docs)", en: "Collaboration (Docs)", hu: "Együttműködés (Docs)", ro: "Colaborare (Docs)" }, questions: [], hasGenerator: true },
      { id: "info_k4_t24", name: { de: "Erste HTML", en: "First HTML", hu: "Első HTML", ro: "Primul HTML" }, questions: [], hasGenerator: true },
      { id: "info_k4_t25", name: { de: "Kreatives Projekt", en: "Creative Project", hu: "Kreatív projekt", ro: "Proiect creativ" }, questions: [], hasGenerator: true },
    ],
  }
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK4Questions(subtopicIds: string[], count?: number, countryCode?: string): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const id of subtopicIds) {
    const tasks = _pickTasks(id, countryCode);
    pool.push(...jsonToQuestions(id, tasks));
  }
  if (!count) return pool;
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

