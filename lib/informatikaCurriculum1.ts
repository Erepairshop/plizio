import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// ─── Raw JSON imports (Hungarian, K1) ────────────────────────────────────────
import t01 from "@/data/informatika/class-1/hu/1.json";
import t02 from "@/data/informatika/class-1/hu/2.json";
import t03 from "@/data/informatika/class-1/hu/3.json";
import t04 from "@/data/informatika/class-1/hu/4.json";
import t05 from "@/data/informatika/class-1/hu/5.json";
import t06 from "@/data/informatika/class-1/hu/6.json";
import t07 from "@/data/informatika/class-1/hu/7.json";
import t08 from "@/data/informatika/class-1/hu/8.json";
import t09 from "@/data/informatika/class-1/hu/9.json";
import t10 from "@/data/informatika/class-1/hu/10.json";
import t11 from "@/data/informatika/class-1/hu/11.json";
import t12 from "@/data/informatika/class-1/hu/12.json";
import t13 from "@/data/informatika/class-1/hu/13.json";
import t14 from "@/data/informatika/class-1/hu/14.json";
import t15 from "@/data/informatika/class-1/hu/15.json";
import t16 from "@/data/informatika/class-1/hu/16.json";
import t17 from "@/data/informatika/class-1/hu/17.json";
import t18 from "@/data/informatika/class-1/hu/18.json";
import t19 from "@/data/informatika/class-1/hu/19.json";
import t20 from "@/data/informatika/class-1/hu/20.json";
import t21 from "@/data/informatika/class-1/hu/21.json";
import t22 from "@/data/informatika/class-1/hu/22.json";
import t23 from "@/data/informatika/class-1/hu/23.json";
import t24 from "@/data/informatika/class-1/hu/24.json";
import t25 from "@/data/informatika/class-1/hu/25.json";

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

// ─── K1 curriculum — 5 themes × 5 subtopics = 25 topics ─────────────────────

export const INFO_K1_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k1_alapok",
    name: "Számítógép alapok",
    icon: "💻",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k1_t01", name: { de: "Was ist ein Computer?", en: "What is a computer?", hu: "Mi a számítógép?", ro: "Ce este un computer?" }, questions: jsonToQuestions("info_k1_t01", extractTasks(t01)), hasGenerator: false },
      { id: "info_k1_t02", name: { de: "Der Bildschirm", en: "The screen", hu: "A képernyő", ro: "Ecranul" }, questions: jsonToQuestions("info_k1_t02", extractTasks(t02)), hasGenerator: false },
      { id: "info_k1_t03", name: { de: "Die Maus (Linksklick)", en: "The mouse (left click)", hu: "Az egér (balklikk)", ro: "Mouse-ul (click stânga)" }, questions: jsonToQuestions("info_k1_t03", extractTasks(t03)), hasGenerator: false },
      { id: "info_k1_t04", name: { de: "Die Tastatur", en: "The keyboard", hu: "A billentyűzet", ro: "Tastatura" }, questions: jsonToQuestions("info_k1_t04", extractTasks(t04)), hasGenerator: false },
      { id: "info_k1_t05", name: { de: "Einschalten / Ausschalten", en: "Turn on / Turn off", hu: "Bekapcsolás / Kikapcsolás", ro: "Pornire / Oprire" }, questions: jsonToQuestions("info_k1_t05", extractTasks(t05)), hasGenerator: false },
    ],
  },
  {
    id: "info_k1_hasznalat",
    name: "Használat",
    icon: "🖱️",
    color: "#10B981",
    subtopics: [
      { id: "info_k1_t06", name: { de: "Ein Spiel starten", en: "Start a game", hu: "Egy játék indítása", ro: "Începe un joc" }, questions: jsonToQuestions("info_k1_t06", extractTasks(t06)), hasGenerator: false },
      { id: "info_k1_t07", name: { de: "Das Spiel beenden", en: "Close the game", hu: "A játék bezárása", ro: "Închide jocul" }, questions: jsonToQuestions("info_k1_t07", extractTasks(t07)), hasGenerator: false },
      { id: "info_k1_t08", name: { de: "Lautstärke", en: "Volume", hu: "Hangerő", ro: "Volum" }, questions: jsonToQuestions("info_k1_t08", extractTasks(t08)), hasGenerator: false },
      { id: "info_k1_t09", name: { de: "Musik hören", en: "Listen to music", hu: "Zene hallgatása", ro: "Ascultă muzică" }, questions: jsonToQuestions("info_k1_t09", extractTasks(t09)), hasGenerator: false },
      { id: "info_k1_t10", name: { de: "Video anschauen", en: "Watch a video", hu: "Videó nézése", ro: "Urmărește un videoclip" }, questions: jsonToQuestions("info_k1_t10", extractTasks(t10)), hasGenerator: false },
    ],
  },
  {
    id: "info_k1_media",
    name: "Média",
    icon: "🎬",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k1_t11", name: { de: "Bild öffnen", en: "Open a picture", hu: "Kép megnyitása", ro: "Deschide o imagine" }, questions: jsonToQuestions("info_k1_t11", extractTasks(t11)), hasGenerator: false },
      { id: "info_k1_t12", name: { de: "Einfaches Malen", en: "Simple drawing", hu: "Egyszerű rajzolás", ro: "Desen simplu" }, questions: jsonToQuestions("info_k1_t12", extractTasks(t12)), hasGenerator: false },
      { id: "info_k1_t13", name: { de: "Farben", en: "Colors", hu: "Színek", ro: "Culori" }, questions: jsonToQuestions("info_k1_t13", extractTasks(t13)), hasGenerator: false },
      { id: "info_k1_t14", name: { de: "Richtig sitzen", en: "Sit properly", hu: "Helyes ülés", ro: "Stai corect" }, questions: jsonToQuestions("info_k1_t14", extractTasks(t14)), hasGenerator: false },
      { id: "info_k1_t15", name: { de: "Max 30 Minuten Bildschirmzeit", en: "Max 30 minutes screen time", hu: "Max 30 perc képernyőidő", ro: "Maxim 30 de minute timp pe ecran" }, questions: jsonToQuestions("info_k1_t15", extractTasks(t15)), hasGenerator: false },
    ],
  },
  {
    id: "info_k1_egeszseg",
    name: "Egészség",
    icon: "❤️",
    color: "#EF4444",
    subtopics: [
      { id: "info_k1_t16", name: { de: "Augenschutz", en: "Eye protection", hu: "Szemvédelem", ro: "Protecția ochilor" }, questions: jsonToQuestions("info_k1_t16", extractTasks(t16)), hasGenerator: false },
      { id: "info_k1_t17", name: { de: "Das Passwort ist geheim", en: "The password is secret", hu: "A jelszó titkos", ro: "Parola este secretă" }, questions: jsonToQuestions("info_k1_t17", extractTasks(t17)), hasGenerator: false },
      { id: "info_k1_t18", name: { de: "Mit Fremden im Internet reden? Nein!", en: "Talk to strangers on the internet? No!", hu: "Idegenekkel beszélgetni az interneten? Nem!", ro: "Vorbești cu străini pe internet? Nu!" }, questions: jsonToQuestions("info_k1_t18", extractTasks(t18)), hasGenerator: false },
      { id: "info_k1_t19", name: { de: "Eltern fragen", en: "Ask parents", hu: "Szülőket megkérdezni", ro: "Întreabă părinții" }, questions: jsonToQuestions("info_k1_t19", extractTasks(t19)), hasGenerator: false },
      { id: "info_k1_t20", name: { de: "Ein freundliches Bild", en: "A friendly picture", hu: "Egy barátságos kép", ro: "O imagine prietenoasă" }, questions: jsonToQuestions("info_k1_t20", extractTasks(t20)), hasGenerator: false },
    ],
  },
  {
    id: "info_k1_biztonsag",
    name: "Biztonság",
    icon: "🛡️",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k1_t21", name: { de: "Stift vs. Computer", en: "Pen vs. Computer", hu: "Ceruza vs. Számítógép", ro: "Pix vs. Computer" }, questions: jsonToQuestions("info_k1_t21", extractTasks(t21)), hasGenerator: false },
      { id: "info_k1_t22", name: { de: "Ein/Aus", en: "On/Off", hu: "Be/Ki", ro: "Pornit/Oprit" }, questions: jsonToQuestions("info_k1_t22", extractTasks(t22)), hasGenerator: false },
      { id: "info_k1_t23", name: { de: "Computer sauber halten", en: "Keep the computer clean", hu: "A számítógép tisztán tartása", ro: "Păstrează computerul curat" }, questions: jsonToQuestions("info_k1_t23", extractTasks(t23)), hasGenerator: false },
      { id: "info_k1_t24", name: { de: "Lieblingsfigur", en: "Favorite character", hu: "Kedvenc figura", ro: "Personaj preferat" }, questions: jsonToQuestions("info_k1_t24", extractTasks(t24)), hasGenerator: false },
      { id: "info_k1_t25", name: { de: "Kreatives Spiel", en: "Creative game", hu: "Kreatív játék", ro: "Joc creativ" }, questions: jsonToQuestions("info_k1_t25", extractTasks(t25)), hasGenerator: false },
    ],
  },
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK1Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of INFO_K1_CURRICULUM) {
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
