import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// ─── Raw JSON imports (Hungarian, K2) ────────────────────────────────────────
import t01 from "@/data/informatika/class-2/hu/1.json";
import t02 from "@/data/informatika/class-2/hu/2.json";
import t03 from "@/data/informatika/class-2/hu/3.json";
import t04 from "@/data/informatika/class-2/hu/4.json";
import t05 from "@/data/informatika/class-2/hu/5.json";
import t06 from "@/data/informatika/class-2/hu/6.json";
import t07 from "@/data/informatika/class-2/hu/7.json";
import t08 from "@/data/informatika/class-2/hu/8.json";
import t09 from "@/data/informatika/class-2/hu/9.json";
import t10 from "@/data/informatika/class-2/hu/10.json";
import t11 from "@/data/informatika/class-2/hu/11.json";
import t12 from "@/data/informatika/class-2/hu/12.json";
import t13 from "@/data/informatika/class-2/hu/13.json";
import t14 from "@/data/informatika/class-2/hu/14.json";
import t15 from "@/data/informatika/class-2/hu/15.json";
import t16 from "@/data/informatika/class-2/hu/16.json";
import t17 from "@/data/informatika/class-2/hu/17.json";
import t18 from "@/data/informatika/class-2/hu/18.json";
import t19 from "@/data/informatika/class-2/hu/19.json";
import t20 from "@/data/informatika/class-2/hu/20.json";
import t21 from "@/data/informatika/class-2/hu/21.json";
import t22 from "@/data/informatika/class-2/hu/22.json";
import t23 from "@/data/informatika/class-2/hu/23.json";
import t24 from "@/data/informatika/class-2/hu/24.json";
import t25 from "@/data/informatika/class-2/hu/25.json";

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

// ─── K2 curriculum — 5 themes × 5 subtopics = 25 topics ─────────────────────

export const INFO_K2_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k2_desktop",
    name: { de: "Desktop Grundlagen", hu: "Desktop alapok", ro: "Bazele desktop-ului", en: "Desktop Basics" },
    icon: "🖥️",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k2_t01", name: { de: "Symbole", en: "Icons", hu: "Ikonok", ro: "Pictograme" }, questions: jsonToQuestions("info_k2_t01", extractTasks(t01)), hasGenerator: false },
      { id: "info_k2_t02", name: { de: "Schreibtisch", en: "Desktop", hu: "Asztal", ro: "Desktop" }, questions: jsonToQuestions("info_k2_t02", extractTasks(t02)), hasGenerator: false },
      { id: "info_k2_t03", name: { de: "Ordner und Dateien", en: "Folders and Files", hu: "Mappák és fájlok", ro: "Dosare și fișiere" }, questions: jsonToQuestions("info_k2_t03", extractTasks(t03)), hasGenerator: false },
      { id: "info_k2_t04", name: { de: "Doppelklick", en: "Double Click", hu: "Dupla kattintás", ro: "Dublu clic" }, questions: jsonToQuestions("info_k2_t04", extractTasks(t04)), hasGenerator: false },
      { id: "info_k2_t05", name: { de: "Drag & Drop", en: "Drag & Drop", hu: "Fogd és vidd", ro: "Trage și plasează" }, questions: jsonToQuestions("info_k2_t05", extractTasks(t05)), hasGenerator: false },
    ],
  },
  {
    id: "info_k2_interakcio",
    name: { de: "Interaktion", hu: "Interakció", ro: "Interacțiune", en: "Interaction" },
    icon: "🖱️",
    color: "#10B981",
    subtopics: [
      { id: "info_k2_t06", name: { de: "Rechtsklick", en: "Right Click", hu: "Jobb kattintás", ro: "Clic dreapta" }, questions: jsonToQuestions("info_k2_t06", extractTasks(t06)), hasGenerator: false },
      { id: "info_k2_t07", name: { de: "Großbuchstaben / Kleinbuchstaben", en: "Uppercase / Lowercase", hu: "Nagybetűk és kisbetűk", ro: "Majuscule / Minuscule" }, questions: jsonToQuestions("info_k2_t07", extractTasks(t07)), hasGenerator: false },
      { id: "info_k2_t08", name: { de: "Zahlen-Tasten", en: "Number Keys", hu: "Számgombok", ro: "Taste numerice" }, questions: jsonToQuestions("info_k2_t08", extractTasks(t08)), hasGenerator: false },
      { id: "info_k2_t09", name: { de: "Backspace / Delete", en: "Backspace / Delete", hu: "Törlés gombok", ro: "Taste de ștergere" }, questions: jsonToQuestions("info_k2_t09", extractTasks(t09)), hasGenerator: false },
      { id: "info_k2_t10", name: { de: "Einfacher Texteditor", en: "Simple Text Editor", hu: "Egyszerű szövegszerkesztő", ro: "Editor de text simplu" }, questions: jsonToQuestions("info_k2_t10", extractTasks(t10)), hasGenerator: false },
    ],
  },
  {
    id: "info_k2_programok",
    name: { de: "Programme", hu: "Programok", ro: "Programe", en: "Programs" },
    icon: "📝",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k2_t11", name: { de: "Text speichern", en: "Save Text", hu: "Szöveg mentése", ro: "Salvare text" }, questions: jsonToQuestions("info_k2_t11", extractTasks(t11)), hasGenerator: false },
      { id: "info_k2_t12", name: { de: "Datei öffnen", en: "Open File", hu: "Fájl megnyitása", ro: "Deschidere fișier" }, questions: jsonToQuestions("info_k2_t12", extractTasks(t12)), hasGenerator: false },
      { id: "info_k2_t13", name: { de: "Malprogramm (Paint)", en: "Drawing Program (Paint)", hu: "Rajzprogram (Paint)", ro: "Program de desen (Paint)" }, questions: jsonToQuestions("info_k2_t13", extractTasks(t13)), hasGenerator: false },
      { id: "info_k2_t14", name: { de: "Werkzeuge (Pinsel, Radiergummi)", en: "Tools (Brush, Eraser)", hu: "Eszközök (Ecset, Radír)", ro: "Instrumente (Pensulă, Radieră)" }, questions: jsonToQuestions("info_k2_t14", extractTasks(t14)), hasGenerator: false },
      { id: "info_k2_t15", name: { de: "Zeichnung speichern", en: "Save Drawing", hu: "Rajz mentése", ro: "Salvare desen" }, questions: jsonToQuestions("info_k2_t15", extractTasks(t15)), hasGenerator: false },
    ],
  },
  {
    id: "info_k2_funkciok",
    name: { de: "Funktionen", hu: "Funkciók", ro: "Funcții", en: "Functions" },
    icon: "⚙️",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k2_t16", name: { de: "Farben beim Zeichnen", en: "Colors in Drawing", hu: "Színek a rajzolásnál", ro: "Culori în desen" }, questions: jsonToQuestions("info_k2_t16", extractTasks(t16)), hasGenerator: false },
      { id: "info_k2_t17", name: { de: "Drucken Grundlagen", en: "Printing Basics", hu: "Nyomtatás alapjai", ro: "Bazele imprimării" }, questions: jsonToQuestions("info_k2_t17", extractTasks(t17)), hasGenerator: false },
      { id: "info_k2_t18", name: { de: "Kopieren / Einfügen", en: "Copy / Paste", hu: "Másolás és beillesztés", ro: "Copiere / Lipire" }, questions: jsonToQuestions("info_k2_t18", extractTasks(t18)), hasGenerator: false },
      { id: "info_k2_t19", name: { de: "Papierkorb", en: "Recycle Bin", hu: "Lomtár", ro: "Coș de reciclare" }, questions: jsonToQuestions("info_k2_t19", extractTasks(t19)), hasGenerator: false },
      { id: "info_k2_t20", name: { de: "Suchen (Strg+F)", en: "Search (Ctrl+F)", hu: "Keresés", ro: "Căutare (Ctrl+F)" }, questions: jsonToQuestions("info_k2_t20", extractTasks(t20)), hasGenerator: false },
    ],
  },
  {
    id: "info_k2_kreativ",
    name: { de: "Kreativ", hu: "Kreatív", ro: "Creativ", en: "Creative" },
    icon: "🎨",
    color: "#EC4899",
    subtopics: [
      { id: "info_k2_t21", name: { de: "Spielend lernen", en: "Learning by Playing", hu: "Játékos tanulás", ro: "Învățare prin joc" }, questions: jsonToQuestions("info_k2_t21", extractTasks(t21)), hasGenerator: false },
      { id: "info_k2_t22", name: { de: "Audioprogramm", en: "Audio Program", hu: "Audióprogram", ro: "Program audio" }, questions: jsonToQuestions("info_k2_t22", extractTasks(t22)), hasGenerator: false },
      { id: "info_k2_t23", name: { de: "Bilder aus dem Internet", en: "Images from the Internet", hu: "Képek az internetről", ro: "Imagini de pe internet" }, questions: jsonToQuestions("info_k2_t23", extractTasks(t23)), hasGenerator: false },
      { id: "info_k2_t24", name: { de: "Form / Größe im Bild", en: "Shape / Size in Image", hu: "Forma és méret a képen", ro: "Formă / Dimensiune în imagine" }, questions: jsonToQuestions("info_k2_t24", extractTasks(t24)), hasGenerator: false },
      { id: "info_k2_t25", name: { de: "Gruppieren", en: "Grouping", hu: "Csoportosítás", ro: "Grupare" }, questions: jsonToQuestions("info_k2_t25", extractTasks(t25)), hasGenerator: false },
    ],
  }
];

export function getInfoK2Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of INFO_K2_CURRICULUM) {
    for (const sub of theme.subtopics) {
      if (subtopicIds.includes(sub.id)) {
        pool.push(...sub.questions);
      }
    }
  }
  if (!count) return pool;
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
