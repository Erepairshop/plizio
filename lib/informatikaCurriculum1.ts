import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

import t1_hu from "@/data/informatika/class-1/hu/1.json";
import t1_de from "@/data/informatika/class-1/de/1.json";
import t1_ro from "@/data/informatika/class-1/ro/1.json";
import t1_en from "@/data/informatika/class-1/en/1.json";
import t2_hu from "@/data/informatika/class-1/hu/2.json";
import t2_de from "@/data/informatika/class-1/de/2.json";
import t2_ro from "@/data/informatika/class-1/ro/2.json";
import t2_en from "@/data/informatika/class-1/en/2.json";
import t3_hu from "@/data/informatika/class-1/hu/3.json";
import t3_de from "@/data/informatika/class-1/de/3.json";
import t3_ro from "@/data/informatika/class-1/ro/3.json";
import t3_en from "@/data/informatika/class-1/en/3.json";
import t4_hu from "@/data/informatika/class-1/hu/4.json";
import t4_de from "@/data/informatika/class-1/de/4.json";
import t4_ro from "@/data/informatika/class-1/ro/4.json";
import t4_en from "@/data/informatika/class-1/en/4.json";
import t5_hu from "@/data/informatika/class-1/hu/5.json";
import t5_de from "@/data/informatika/class-1/de/5.json";
import t5_ro from "@/data/informatika/class-1/ro/5.json";
import t5_en from "@/data/informatika/class-1/en/5.json";
import t6_hu from "@/data/informatika/class-1/hu/6.json";
import t6_de from "@/data/informatika/class-1/de/6.json";
import t6_ro from "@/data/informatika/class-1/ro/6.json";
import t6_en from "@/data/informatika/class-1/en/6.json";
import t7_hu from "@/data/informatika/class-1/hu/7.json";
import t7_de from "@/data/informatika/class-1/de/7.json";
import t7_ro from "@/data/informatika/class-1/ro/7.json";
import t7_en from "@/data/informatika/class-1/en/7.json";
import t8_hu from "@/data/informatika/class-1/hu/8.json";
import t8_de from "@/data/informatika/class-1/de/8.json";
import t8_ro from "@/data/informatika/class-1/ro/8.json";
import t8_en from "@/data/informatika/class-1/en/8.json";
import t9_hu from "@/data/informatika/class-1/hu/9.json";
import t9_de from "@/data/informatika/class-1/de/9.json";
import t9_ro from "@/data/informatika/class-1/ro/9.json";
import t9_en from "@/data/informatika/class-1/en/9.json";
import t10_hu from "@/data/informatika/class-1/hu/10.json";
import t10_de from "@/data/informatika/class-1/de/10.json";
import t10_ro from "@/data/informatika/class-1/ro/10.json";
import t10_en from "@/data/informatika/class-1/en/10.json";
import t11_hu from "@/data/informatika/class-1/hu/11.json";
import t11_de from "@/data/informatika/class-1/de/11.json";
import t11_ro from "@/data/informatika/class-1/ro/11.json";
import t11_en from "@/data/informatika/class-1/en/11.json";
import t12_hu from "@/data/informatika/class-1/hu/12.json";
import t12_de from "@/data/informatika/class-1/de/12.json";
import t12_ro from "@/data/informatika/class-1/ro/12.json";
import t12_en from "@/data/informatika/class-1/en/12.json";
import t13_hu from "@/data/informatika/class-1/hu/13.json";
import t13_de from "@/data/informatika/class-1/de/13.json";
import t13_ro from "@/data/informatika/class-1/ro/13.json";
import t13_en from "@/data/informatika/class-1/en/13.json";
import t14_hu from "@/data/informatika/class-1/hu/14.json";
import t14_de from "@/data/informatika/class-1/de/14.json";
import t14_ro from "@/data/informatika/class-1/ro/14.json";
import t14_en from "@/data/informatika/class-1/en/14.json";
import t15_hu from "@/data/informatika/class-1/hu/15.json";
import t15_de from "@/data/informatika/class-1/de/15.json";
import t15_ro from "@/data/informatika/class-1/ro/15.json";
import t15_en from "@/data/informatika/class-1/en/15.json";
import t16_hu from "@/data/informatika/class-1/hu/16.json";
import t16_de from "@/data/informatika/class-1/de/16.json";
import t16_ro from "@/data/informatika/class-1/ro/16.json";
import t16_en from "@/data/informatika/class-1/en/16.json";
import t17_hu from "@/data/informatika/class-1/hu/17.json";
import t17_de from "@/data/informatika/class-1/de/17.json";
import t17_ro from "@/data/informatika/class-1/ro/17.json";
import t17_en from "@/data/informatika/class-1/en/17.json";
import t18_hu from "@/data/informatika/class-1/hu/18.json";
import t18_de from "@/data/informatika/class-1/de/18.json";
import t18_ro from "@/data/informatika/class-1/ro/18.json";
import t18_en from "@/data/informatika/class-1/en/18.json";
import t19_hu from "@/data/informatika/class-1/hu/19.json";
import t19_de from "@/data/informatika/class-1/de/19.json";
import t19_ro from "@/data/informatika/class-1/ro/19.json";
import t19_en from "@/data/informatika/class-1/en/19.json";
import t20_hu from "@/data/informatika/class-1/hu/20.json";
import t20_de from "@/data/informatika/class-1/de/20.json";
import t20_ro from "@/data/informatika/class-1/ro/20.json";
import t20_en from "@/data/informatika/class-1/en/20.json";
import t21_hu from "@/data/informatika/class-1/hu/21.json";
import t21_de from "@/data/informatika/class-1/de/21.json";
import t21_ro from "@/data/informatika/class-1/ro/21.json";
import t21_en from "@/data/informatika/class-1/en/21.json";
import t22_hu from "@/data/informatika/class-1/hu/22.json";
import t22_de from "@/data/informatika/class-1/de/22.json";
import t22_ro from "@/data/informatika/class-1/ro/22.json";
import t22_en from "@/data/informatika/class-1/en/22.json";
import t23_hu from "@/data/informatika/class-1/hu/23.json";
import t23_de from "@/data/informatika/class-1/de/23.json";
import t23_ro from "@/data/informatika/class-1/ro/23.json";
import t23_en from "@/data/informatika/class-1/en/23.json";
import t24_hu from "@/data/informatika/class-1/hu/24.json";
import t24_de from "@/data/informatika/class-1/de/24.json";
import t24_ro from "@/data/informatika/class-1/ro/24.json";
import t24_en from "@/data/informatika/class-1/en/24.json";
import t25_hu from "@/data/informatika/class-1/hu/25.json";
import t25_de from "@/data/informatika/class-1/de/25.json";
import t25_ro from "@/data/informatika/class-1/ro/25.json";
import t25_en from "@/data/informatika/class-1/en/25.json";

// ─── JSON → KemiaQuestion converter ──────────────────────────────────────────

type RawTask =
  | { type: "mcq"; question: string; options: string[]; correct: number }
  | { type: "typing"; text: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonToQuestions(subtopicId: string, tasks: any[]): KemiaQuestion[] {
  return tasks.flatMap((task: any): KemiaQuestion[] => {
    const isMcq = task.type === "mcq" || task.type === "multiple_choice" || Array.isArray(task.options);
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTasks(json: any): RawTask[] {
  return (json.tasks ?? []) as RawTask[];
}

// ─── K1 curriculum — 5 themes × 5 subtopics = 25 topics ─────────────────────


const K1_DATA: Record<string, Record<string, any>> = {
  "info_k1_t01": { hu: t1_hu, de: t1_de, ro: t1_ro, en: t1_en },
  "info_k1_t02": { hu: t2_hu, de: t2_de, ro: t2_ro, en: t2_en },
  "info_k1_t03": { hu: t3_hu, de: t3_de, ro: t3_ro, en: t3_en },
  "info_k1_t04": { hu: t4_hu, de: t4_de, ro: t4_ro, en: t4_en },
  "info_k1_t05": { hu: t5_hu, de: t5_de, ro: t5_ro, en: t5_en },
  "info_k1_t06": { hu: t6_hu, de: t6_de, ro: t6_ro, en: t6_en },
  "info_k1_t07": { hu: t7_hu, de: t7_de, ro: t7_ro, en: t7_en },
  "info_k1_t08": { hu: t8_hu, de: t8_de, ro: t8_ro, en: t8_en },
  "info_k1_t09": { hu: t9_hu, de: t9_de, ro: t9_ro, en: t9_en },
  "info_k1_t10": { hu: t10_hu, de: t10_de, ro: t10_ro, en: t10_en },
  "info_k1_t11": { hu: t11_hu, de: t11_de, ro: t11_ro, en: t11_en },
  "info_k1_t12": { hu: t12_hu, de: t12_de, ro: t12_ro, en: t12_en },
  "info_k1_t13": { hu: t13_hu, de: t13_de, ro: t13_ro, en: t13_en },
  "info_k1_t14": { hu: t14_hu, de: t14_de, ro: t14_ro, en: t14_en },
  "info_k1_t15": { hu: t15_hu, de: t15_de, ro: t15_ro, en: t15_en },
  "info_k1_t16": { hu: t16_hu, de: t16_de, ro: t16_ro, en: t16_en },
  "info_k1_t17": { hu: t17_hu, de: t17_de, ro: t17_ro, en: t17_en },
  "info_k1_t18": { hu: t18_hu, de: t18_de, ro: t18_ro, en: t18_en },
  "info_k1_t19": { hu: t19_hu, de: t19_de, ro: t19_ro, en: t19_en },
  "info_k1_t20": { hu: t20_hu, de: t20_de, ro: t20_ro, en: t20_en },
  "info_k1_t21": { hu: t21_hu, de: t21_de, ro: t21_ro, en: t21_en },
  "info_k1_t22": { hu: t22_hu, de: t22_de, ro: t22_ro, en: t22_en },
  "info_k1_t23": { hu: t23_hu, de: t23_de, ro: t23_ro, en: t23_en },
  "info_k1_t24": { hu: t24_hu, de: t24_de, ro: t24_ro, en: t24_en },
  "info_k1_t25": { hu: t25_hu, de: t25_de, ro: t25_ro, en: t25_en },
};

function _pickTasks(subId: string, cc?: string): RawTask[] {
  const lang = (cc === "DE" || cc === "AT" || cc === "CH") ? "de"
    : (cc === "RO") ? "ro"
    : (cc === "US" || cc === "GB" || cc === "AU" || cc === "CA" || cc === "IE" || cc === "NZ") ? "en"
    : "hu";
  const bundle = K1_DATA[subId];
  if (!bundle) return [];
  const picked = bundle[lang] || bundle.hu || bundle.en || bundle.de;
  return extractTasks(picked);
}

export const INFO_K1_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k1_alapok",
    name: { de: "Computer Grundlagen", hu: "Számítógép alapok", ro: "Bazele computerului", en: "Computer Basics" },
    icon: "💻",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k1_t01", name: { de: "Was ist ein Computer?", en: "What is a computer?", hu: "Mi a számítógép?", ro: "Ce este un computer?" }, questions: [], hasGenerator: true },
      { id: "info_k1_t02", name: { de: "Der Bildschirm", en: "The screen", hu: "A képernyő", ro: "Ecranul" }, questions: [], hasGenerator: true },
      { id: "info_k1_t03", name: { de: "Die Maus (Linksklick)", en: "The mouse (left click)", hu: "Az egér (balklikk)", ro: "Mouse-ul (click stânga)" }, questions: [], hasGenerator: true },
      { id: "info_k1_t04", name: { de: "Die Tastatur", en: "The keyboard", hu: "A billentyűzet", ro: "Tastatura" }, questions: [], hasGenerator: true },
      { id: "info_k1_t05", name: { de: "Einschalten / Ausschalten", en: "Turn on / Turn off", hu: "Bekapcsolás / Kikapcsolás", ro: "Pornire / Oprire" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k1_hasznalat",
    name: { de: "Nutzung", hu: "Használat", ro: "Utilizare", en: "Usage" },
    icon: "🖱️",
    color: "#10B981",
    subtopics: [
      { id: "info_k1_t06", name: { de: "Ein Spiel starten", en: "Start a game", hu: "Egy játék indítása", ro: "Începe un joc" }, questions: [], hasGenerator: true },
      { id: "info_k1_t07", name: { de: "Das Spiel beenden", en: "Close the game", hu: "A játék bezárása", ro: "Închide jocul" }, questions: [], hasGenerator: true },
      { id: "info_k1_t08", name: { de: "Lautstärke", en: "Volume", hu: "Hangerő", ro: "Volum" }, questions: [], hasGenerator: true },
      { id: "info_k1_t09", name: { de: "Musik hören", en: "Listen to music", hu: "Zene hallgatása", ro: "Ascultă muzică" }, questions: [], hasGenerator: true },
      { id: "info_k1_t10", name: { de: "Video anschauen", en: "Watch a video", hu: "Videó nézése", ro: "Urmărește un videoclip" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k1_media",
    name: { de: "Medien", hu: "Média", ro: "Media", en: "Media" },
    icon: "🎬",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k1_t11", name: { de: "Bild öffnen", en: "Open a picture", hu: "Kép megnyitása", ro: "Deschide o imagine" }, questions: [], hasGenerator: true },
      { id: "info_k1_t12", name: { de: "Einfaches Malen", en: "Simple drawing", hu: "Egyszerű rajzolás", ro: "Desen simplu" }, questions: [], hasGenerator: true },
      { id: "info_k1_t13", name: { de: "Farben", en: "Colors", hu: "Színek", ro: "Culori" }, questions: [], hasGenerator: true },
      { id: "info_k1_t14", name: { de: "Richtig sitzen", en: "Sit properly", hu: "Helyes ülés", ro: "Stai corect" }, questions: [], hasGenerator: true },
      { id: "info_k1_t15", name: { de: "Max 30 Minuten Bildschirmzeit", en: "Max 30 minutes screen time", hu: "Max 30 perc képernyőidő", ro: "Maxim 30 de minute timp pe ecran" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k1_egeszseg",
    name: { de: "Gesundheit", hu: "Egészség", ro: "Sănătate", en: "Health" },
    icon: "❤️",
    color: "#EF4444",
    subtopics: [
      { id: "info_k1_t16", name: { de: "Augenschutz", en: "Eye protection", hu: "Szemvédelem", ro: "Protecția ochilor" }, questions: [], hasGenerator: true },
      { id: "info_k1_t17", name: { de: "Das Passwort ist geheim", en: "The password is secret", hu: "A jelszó titkos", ro: "Parola este secretă" }, questions: [], hasGenerator: true },
      { id: "info_k1_t18", name: { de: "Mit Fremden im Internet reden? Nein!", en: "Talk to strangers on the internet? No!", hu: "Idegenekkel beszélgetni az interneten? Nem!", ro: "Vorbești cu străini pe internet? Nu!" }, questions: [], hasGenerator: true },
      { id: "info_k1_t19", name: { de: "Eltern fragen", en: "Ask parents", hu: "Szülőket megkérdezni", ro: "Întreabă părinții" }, questions: [], hasGenerator: true },
      { id: "info_k1_t20", name: { de: "Ein freundliches Bild", en: "A friendly picture", hu: "Egy barátságos kép", ro: "O imagine prietenoasă" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "info_k1_biztonsag",
    name: { de: "Sicherheit", hu: "Biztonság", ro: "Securitate", en: "Security" },
    icon: "🛡️",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k1_t21", name: { de: "Stift vs. Computer", en: "Pen vs. Computer", hu: "Ceruza vs. Számítógép", ro: "Pix vs. Computer" }, questions: [], hasGenerator: true },
      { id: "info_k1_t22", name: { de: "Ein/Aus", en: "On/Off", hu: "Be/Ki", ro: "Pornit/Oprit" }, questions: [], hasGenerator: true },
      { id: "info_k1_t23", name: { de: "Computer sauber halten", en: "Keep the computer clean", hu: "A számítógép tisztán tartása", ro: "Păstrează computerul curat" }, questions: [], hasGenerator: true },
      { id: "info_k1_t24", name: { de: "Lieblingsfigur", en: "Favorite character", hu: "Kedvenc figura", ro: "Personaj preferat" }, questions: [], hasGenerator: true },
      { id: "info_k1_t25", name: { de: "Kreatives Spiel", en: "Creative game", hu: "Kreatív játék", ro: "Joc creativ" }, questions: [], hasGenerator: true },
    ],
  },
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK1Questions(subtopicIds: string[], count?: number, countryCode?: string): KemiaQuestion[] {
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
