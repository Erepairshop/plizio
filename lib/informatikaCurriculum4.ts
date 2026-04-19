import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// ─── Raw JSON imports (Hungarian, K4) ────────────────────────────────────────
import t01 from "@/data/informatika/class-4/hu/t01.json";
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

function jsonToQuestions(subtopicId: string, tasks: RawTask[]): KemiaQuestion[] {
  return tasks.flatMap((task): KemiaQuestion[] => {
    if (task.type === "multiple_choice") {
      return [{
        type: "mcq",
        topic: "informatika",
        subtopic: subtopicId,
        question: task.question,
        options: task.options,
        correct: task.correctAnswer,
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

// ─── K4 curriculum — 5 themes × 5 subtopics = 25 topics ─────────────────────

export const INFO_K4_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k4_programozas_alap",
    name: "Programozás alap",
    icon: "💻",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k4_t01", name: { de: "Scratch Einführung", en: "Scratch Introduction", hu: "Scratch bevezetés", ro: "Introducere Scratch" }, questions: jsonToQuestions("info_k4_t01", extractTasks(t01)), hasGenerator: false },
      { id: "info_k4_t02", name: { de: "Blockbasierte Programmierung", en: "Block-based Programming", hu: "Blokkalapú programozás", ro: "Programare bazată pe blocuri" }, questions: jsonToQuestions("info_k4_t02", extractTasks(t02)), hasGenerator: false },
      { id: "info_k4_t03", name: { de: "Algorithmus-Begriff", en: "Algorithm Concept", hu: "Algoritmus fogalma", ro: "Conceptul de algoritm" }, questions: jsonToQuestions("info_k4_t03", extractTasks(t03)), hasGenerator: false },
      { id: "info_k4_t04", name: { de: "Anweisungs-Sequenz", en: "Instruction Sequence", hu: "Utasítássorozat", ro: "Secvență de instrucțiuni" }, questions: jsonToQuestions("info_k4_t04", extractTasks(t04)), hasGenerator: false },
      { id: "info_k4_t05", name: { de: "Schleife (Loop)", en: "Loop", hu: "Ciklus (Loop)", ro: "Buclă (Loop)" }, questions: jsonToQuestions("info_k4_t05", extractTasks(t05)), hasGenerator: false },
    ],
  },
  {
    id: "info_k4_logika",
    name: "Logika",
    icon: "🧩",
    color: "#10B981",
    subtopics: [
      { id: "info_k4_t06", name: { de: "Bedingung (If)", en: "Condition (If)", hu: "Feltétel (If)", ro: "Condiție (If)" }, questions: jsonToQuestions("info_k4_t06", extractTasks(t06)), hasGenerator: false },
      { id: "info_k4_t07", name: { de: "Variable", en: "Variable", hu: "Változó", ro: "Variabilă" }, questions: jsonToQuestions("info_k4_t07", extractTasks(t07)), hasGenerator: false },
      { id: "info_k4_t08", name: { de: "Input / Output", en: "Input / Output", hu: "Bemenet / Kimenet", ro: "Intrare / Ieșire" }, questions: jsonToQuestions("info_k4_t08", extractTasks(t08)), hasGenerator: false },
      { id: "info_k4_t09", name: { de: "Sprite / Animation (Scratch)", en: "Sprite / Animation (Scratch)", hu: "Szereplő / Animáció (Scratch)", ro: "Personaj / Animație (Scratch)" }, questions: jsonToQuestions("info_k4_t09", extractTasks(t09)), hasGenerator: false },
      { id: "info_k4_t10", name: { de: "Musik-Loop", en: "Music Loop", hu: "Zenei ciklus", ro: "Buclă muzicală" }, questions: jsonToQuestions("info_k4_t10", extractTasks(t10)), hasGenerator: false },
    ],
  },
  {
    id: "info_k4_kreativ_alkalmazasok",
    name: "Kreatív alkalmazások",
    icon: "🎨",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k4_t11", name: { de: "Foto-Editing Grundlagen", en: "Photo Editing Basics", hu: "Képszerkesztés alapjai", ro: "Bazele editării foto" }, questions: jsonToQuestions("info_k4_t11", extractTasks(t11)), hasGenerator: false },
      { id: "info_k4_t12", name: { de: "Video-Editing Grundlagen", en: "Video Editing Basics", hu: "Videószerkesztés alapjai", ro: "Bazele editării video" }, questions: jsonToQuestions("info_k4_t12", extractTasks(t12)), hasGenerator: false },
      { id: "info_k4_t13", name: { de: "PowerPoint fortgeschritten", en: "Advanced PowerPoint", hu: "Haladó PowerPoint", ro: "PowerPoint avansat" }, questions: jsonToQuestions("info_k4_t13", extractTasks(t13)), hasGenerator: false },
      { id: "info_k4_t14", name: { de: "Präsentations-Regeln", en: "Presentation Rules", hu: "Prezentációs szabályok", ro: "Reguli de prezentare" }, questions: jsonToQuestions("info_k4_t14", extractTasks(t14)), hasGenerator: false },
      { id: "info_k4_t15", name: { de: "Recherche (Suchbegriffe)", en: "Research (Search Terms)", hu: "Keresés (Keresőszavak)", ro: "Cercetare (Termeni de căutare)" }, questions: jsonToQuestions("info_k4_t15", extractTasks(t15)), hasGenerator: false },
    ],
  },
  {
    id: "info_k4_research_kommunikacio",
    name: "Research + kommunikáció",
    icon: "📡",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k4_t16", name: { de: "Wikipedia Kids", en: "Wikipedia Kids", hu: "Gyerek Wikipédia", ro: "Wikipedia Kids" }, questions: jsonToQuestions("info_k4_t16", extractTasks(t16)), hasGenerator: false },
      { id: "info_k4_t17", name: { de: "Quelle — ist sie vertrauenswürdig?", en: "Source — is it reliable?", hu: "Forrás — megbízható?", ro: "Sursa — este de încredere?" }, questions: jsonToQuestions("info_k4_t17", extractTasks(t17)), hasGenerator: false },
      { id: "info_k4_t18", name: { de: "Digitaler Fußabdruck", en: "Digital Footprint", hu: "Digitális lábnyom", ro: "Amprenta digitală" }, questions: jsonToQuestions("info_k4_t18", extractTasks(t18)), hasGenerator: false },
      { id: "info_k4_t19", name: { de: "Sicherheit: starkes Passwort", en: "Security: Strong Password", hu: "Biztonság: erős jelszó", ro: "Securitate: Parolă puternică" }, questions: jsonToQuestions("info_k4_t19", extractTasks(t19)), hasGenerator: false },
      { id: "info_k4_t20", name: { de: "Cybermobbing", en: "Cyberbullying", hu: "Számítógépes zaklatás", ro: "Hărțuire cibernetică" }, questions: jsonToQuestions("info_k4_t20", extractTasks(t20)), hasGenerator: false },
    ],
  },
  {
    id: "info_k4_biztonsag_jovo",
    name: "Biztonság + jövő",
    icon: "🛡️",
    color: "#EC4899",
    subtopics: [
      { id: "info_k4_t21", name: { de: "Screenshot erweitert", en: "Advanced Screenshot", hu: "Haladó képernyőkép", ro: "Captură de ecran avansată" }, questions: jsonToQuestions("info_k4_t21", extractTasks(t21)), hasGenerator: false },
      { id: "info_k4_t22", name: { de: "Cloud Grundlagen (Drive)", en: "Cloud Basics (Drive)", hu: "Felhő alapok (Drive)", ro: "Bazele Cloud (Drive)" }, questions: jsonToQuestions("info_k4_t22", extractTasks(t22)), hasGenerator: false },
      { id: "info_k4_t23", name: { de: "Zusammenarbeit (Docs)", en: "Collaboration (Docs)", hu: "Együttműködés (Docs)", ro: "Colaborare (Docs)" }, questions: jsonToQuestions("info_k4_t23", extractTasks(t23)), hasGenerator: false },
      { id: "info_k4_t24", name: { de: "Erste HTML", en: "First HTML", hu: "Első HTML", ro: "Primul HTML" }, questions: jsonToQuestions("info_k4_t24", extractTasks(t24)), hasGenerator: false },
      { id: "info_k4_t25", name: { de: "Kreatives Projekt", en: "Creative Project", hu: "Kreatív projekt", ro: "Proiect creativ" }, questions: jsonToQuestions("info_k4_t25", extractTasks(t25)), hasGenerator: false },
    ],
  }
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK4Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of INFO_K4_CURRICULUM) {
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

