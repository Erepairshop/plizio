import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

import t1_hu from "@/data/informatika/class-2/hu/1.json";
import t1_de from "@/data/informatika/class-2/de/1.json";
import t1_ro from "@/data/informatika/class-2/ro/1.json";
import t1_en from "@/data/informatika/class-2/en/1.json";
import t2_hu from "@/data/informatika/class-2/hu/2.json";
import t2_de from "@/data/informatika/class-2/de/2.json";
import t2_ro from "@/data/informatika/class-2/ro/2.json";
import t2_en from "@/data/informatika/class-2/en/2.json";
import t3_hu from "@/data/informatika/class-2/hu/3.json";
import t3_de from "@/data/informatika/class-2/de/3.json";
import t3_ro from "@/data/informatika/class-2/ro/3.json";
import t3_en from "@/data/informatika/class-2/en/3.json";
import t4_hu from "@/data/informatika/class-2/hu/4.json";
import t4_de from "@/data/informatika/class-2/de/4.json";
import t4_ro from "@/data/informatika/class-2/ro/4.json";
import t4_en from "@/data/informatika/class-2/en/4.json";
import t5_hu from "@/data/informatika/class-2/hu/5.json";
import t5_de from "@/data/informatika/class-2/de/5.json";
import t5_ro from "@/data/informatika/class-2/ro/5.json";
import t5_en from "@/data/informatika/class-2/en/5.json";
import t6_hu from "@/data/informatika/class-2/hu/6.json";
import t6_de from "@/data/informatika/class-2/de/6.json";
import t6_ro from "@/data/informatika/class-2/ro/6.json";
import t6_en from "@/data/informatika/class-2/en/6.json";
import t7_hu from "@/data/informatika/class-2/hu/7.json";
import t7_de from "@/data/informatika/class-2/de/7.json";
import t7_ro from "@/data/informatika/class-2/ro/7.json";
import t7_en from "@/data/informatika/class-2/en/7.json";
import t8_hu from "@/data/informatika/class-2/hu/8.json";
import t8_de from "@/data/informatika/class-2/de/8.json";
import t8_ro from "@/data/informatika/class-2/ro/8.json";
import t8_en from "@/data/informatika/class-2/en/8.json";
import t9_hu from "@/data/informatika/class-2/hu/9.json";
import t9_de from "@/data/informatika/class-2/de/9.json";
import t9_ro from "@/data/informatika/class-2/ro/9.json";
import t9_en from "@/data/informatika/class-2/en/9.json";
import t10_hu from "@/data/informatika/class-2/hu/10.json";
import t10_de from "@/data/informatika/class-2/de/10.json";
import t10_ro from "@/data/informatika/class-2/ro/10.json";
import t10_en from "@/data/informatika/class-2/en/10.json";
import t11_hu from "@/data/informatika/class-2/hu/11.json";
import t11_de from "@/data/informatika/class-2/de/11.json";
import t11_ro from "@/data/informatika/class-2/ro/11.json";
import t11_en from "@/data/informatika/class-2/en/11.json";
import t12_hu from "@/data/informatika/class-2/hu/12.json";
import t12_de from "@/data/informatika/class-2/de/12.json";
import t12_ro from "@/data/informatika/class-2/ro/12.json";
import t12_en from "@/data/informatika/class-2/en/12.json";
import t13_hu from "@/data/informatika/class-2/hu/13.json";
import t13_de from "@/data/informatika/class-2/de/13.json";
import t13_ro from "@/data/informatika/class-2/ro/13.json";
import t13_en from "@/data/informatika/class-2/en/13.json";
import t14_hu from "@/data/informatika/class-2/hu/14.json";
import t14_de from "@/data/informatika/class-2/de/14.json";
import t14_ro from "@/data/informatika/class-2/ro/14.json";
import t14_en from "@/data/informatika/class-2/en/14.json";
import t15_hu from "@/data/informatika/class-2/hu/15.json";
import t15_de from "@/data/informatika/class-2/de/15.json";
import t15_ro from "@/data/informatika/class-2/ro/15.json";
import t15_en from "@/data/informatika/class-2/en/15.json";
import t16_hu from "@/data/informatika/class-2/hu/16.json";
import t16_de from "@/data/informatika/class-2/de/16.json";
import t16_ro from "@/data/informatika/class-2/ro/16.json";
import t16_en from "@/data/informatika/class-2/en/16.json";
import t17_hu from "@/data/informatika/class-2/hu/17.json";
import t17_de from "@/data/informatika/class-2/de/17.json";
import t17_ro from "@/data/informatika/class-2/ro/17.json";
import t17_en from "@/data/informatika/class-2/en/17.json";
import t18_hu from "@/data/informatika/class-2/hu/18.json";
import t18_de from "@/data/informatika/class-2/de/18.json";
import t18_ro from "@/data/informatika/class-2/ro/18.json";
import t18_en from "@/data/informatika/class-2/en/18.json";
import t19_hu from "@/data/informatika/class-2/hu/19.json";
import t19_de from "@/data/informatika/class-2/de/19.json";
import t19_ro from "@/data/informatika/class-2/ro/19.json";
import t19_en from "@/data/informatika/class-2/en/19.json";
import t20_hu from "@/data/informatika/class-2/hu/20.json";
import t20_de from "@/data/informatika/class-2/de/20.json";
import t20_ro from "@/data/informatika/class-2/ro/20.json";
import t20_en from "@/data/informatika/class-2/en/20.json";
import t21_hu from "@/data/informatika/class-2/hu/21.json";
import t21_de from "@/data/informatika/class-2/de/21.json";
import t21_ro from "@/data/informatika/class-2/ro/21.json";
import t21_en from "@/data/informatika/class-2/en/21.json";
import t22_hu from "@/data/informatika/class-2/hu/22.json";
import t22_de from "@/data/informatika/class-2/de/22.json";
import t22_ro from "@/data/informatika/class-2/ro/22.json";
import t22_en from "@/data/informatika/class-2/en/22.json";
import t23_hu from "@/data/informatika/class-2/hu/23.json";
import t23_de from "@/data/informatika/class-2/de/23.json";
import t23_ro from "@/data/informatika/class-2/ro/23.json";
import t23_en from "@/data/informatika/class-2/en/23.json";
import t24_hu from "@/data/informatika/class-2/hu/24.json";
import t24_de from "@/data/informatika/class-2/de/24.json";
import t24_ro from "@/data/informatika/class-2/ro/24.json";
import t24_en from "@/data/informatika/class-2/en/24.json";
import t25_hu from "@/data/informatika/class-2/hu/25.json";
import t25_de from "@/data/informatika/class-2/de/25.json";
import t25_ro from "@/data/informatika/class-2/ro/25.json";
import t25_en from "@/data/informatika/class-2/en/25.json";

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


const K2_DATA: Record<string, Record<string, any>> = {
  "info_k2_t01": { hu: t1_hu, de: t1_de, ro: t1_ro, en: t1_en },
  "info_k2_t02": { hu: t2_hu, de: t2_de, ro: t2_ro, en: t2_en },
  "info_k2_t03": { hu: t3_hu, de: t3_de, ro: t3_ro, en: t3_en },
  "info_k2_t04": { hu: t4_hu, de: t4_de, ro: t4_ro, en: t4_en },
  "info_k2_t05": { hu: t5_hu, de: t5_de, ro: t5_ro, en: t5_en },
  "info_k2_t06": { hu: t6_hu, de: t6_de, ro: t6_ro, en: t6_en },
  "info_k2_t07": { hu: t7_hu, de: t7_de, ro: t7_ro, en: t7_en },
  "info_k2_t08": { hu: t8_hu, de: t8_de, ro: t8_ro, en: t8_en },
  "info_k2_t09": { hu: t9_hu, de: t9_de, ro: t9_ro, en: t9_en },
  "info_k2_t10": { hu: t10_hu, de: t10_de, ro: t10_ro, en: t10_en },
  "info_k2_t11": { hu: t11_hu, de: t11_de, ro: t11_ro, en: t11_en },
  "info_k2_t12": { hu: t12_hu, de: t12_de, ro: t12_ro, en: t12_en },
  "info_k2_t13": { hu: t13_hu, de: t13_de, ro: t13_ro, en: t13_en },
  "info_k2_t14": { hu: t14_hu, de: t14_de, ro: t14_ro, en: t14_en },
  "info_k2_t15": { hu: t15_hu, de: t15_de, ro: t15_ro, en: t15_en },
  "info_k2_t16": { hu: t16_hu, de: t16_de, ro: t16_ro, en: t16_en },
  "info_k2_t17": { hu: t17_hu, de: t17_de, ro: t17_ro, en: t17_en },
  "info_k2_t18": { hu: t18_hu, de: t18_de, ro: t18_ro, en: t18_en },
  "info_k2_t19": { hu: t19_hu, de: t19_de, ro: t19_ro, en: t19_en },
  "info_k2_t20": { hu: t20_hu, de: t20_de, ro: t20_ro, en: t20_en },
  "info_k2_t21": { hu: t21_hu, de: t21_de, ro: t21_ro, en: t21_en },
  "info_k2_t22": { hu: t22_hu, de: t22_de, ro: t22_ro, en: t22_en },
  "info_k2_t23": { hu: t23_hu, de: t23_de, ro: t23_ro, en: t23_en },
  "info_k2_t24": { hu: t24_hu, de: t24_de, ro: t24_ro, en: t24_en },
  "info_k2_t25": { hu: t25_hu, de: t25_de, ro: t25_ro, en: t25_en },
};

function _pickTasks(subId: string, cc?: string): RawTask[] {
  const lang = (cc === "DE" || cc === "AT" || cc === "CH") ? "de"
    : (cc === "RO") ? "ro"
    : (cc === "US" || cc === "GB" || cc === "AU" || cc === "CA" || cc === "IE" || cc === "NZ") ? "en"
    : "hu";
  const bundle = K2_DATA[subId];
  if (!bundle) return [];
  const picked = bundle[lang] || bundle.hu || bundle.en || bundle.de;
  return extractTasks(picked);
}

export const INFO_K2_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k2_desktop",
    name: { de: "Desktop Grundlagen", hu: "Desktop alapok", ro: "Bazele desktop-ului", en: "Desktop Basics" },
    icon: "🖥️",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k2_t01", name: { de: "Symbole", en: "Icons", hu: "Ikonok", ro: "Pictograme" }, questions: [], hasGenerator: false },
      { id: "info_k2_t02", name: { de: "Schreibtisch", en: "Desktop", hu: "Asztal", ro: "Desktop" }, questions: [], hasGenerator: false },
      { id: "info_k2_t03", name: { de: "Ordner und Dateien", en: "Folders and Files", hu: "Mappák és fájlok", ro: "Dosare și fișiere" }, questions: [], hasGenerator: false },
      { id: "info_k2_t04", name: { de: "Doppelklick", en: "Double Click", hu: "Dupla kattintás", ro: "Dublu clic" }, questions: [], hasGenerator: false },
      { id: "info_k2_t05", name: { de: "Drag & Drop", en: "Drag & Drop", hu: "Fogd és vidd", ro: "Trage și plasează" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k2_interakcio",
    name: { de: "Interaktion", hu: "Interakció", ro: "Interacțiune", en: "Interaction" },
    icon: "🖱️",
    color: "#10B981",
    subtopics: [
      { id: "info_k2_t06", name: { de: "Rechtsklick", en: "Right Click", hu: "Jobb kattintás", ro: "Clic dreapta" }, questions: [], hasGenerator: false },
      { id: "info_k2_t07", name: { de: "Großbuchstaben / Kleinbuchstaben", en: "Uppercase / Lowercase", hu: "Nagybetűk és kisbetűk", ro: "Majuscule / Minuscule" }, questions: [], hasGenerator: false },
      { id: "info_k2_t08", name: { de: "Zahlen-Tasten", en: "Number Keys", hu: "Számgombok", ro: "Taste numerice" }, questions: [], hasGenerator: false },
      { id: "info_k2_t09", name: { de: "Backspace / Delete", en: "Backspace / Delete", hu: "Törlés gombok", ro: "Taste de ștergere" }, questions: [], hasGenerator: false },
      { id: "info_k2_t10", name: { de: "Einfacher Texteditor", en: "Simple Text Editor", hu: "Egyszerű szövegszerkesztő", ro: "Editor de text simplu" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k2_programok",
    name: { de: "Programme", hu: "Programok", ro: "Programe", en: "Programs" },
    icon: "📝",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k2_t11", name: { de: "Text speichern", en: "Save Text", hu: "Szöveg mentése", ro: "Salvare text" }, questions: [], hasGenerator: false },
      { id: "info_k2_t12", name: { de: "Datei öffnen", en: "Open File", hu: "Fájl megnyitása", ro: "Deschidere fișier" }, questions: [], hasGenerator: false },
      { id: "info_k2_t13", name: { de: "Malprogramm (Paint)", en: "Drawing Program (Paint)", hu: "Rajzprogram (Paint)", ro: "Program de desen (Paint)" }, questions: [], hasGenerator: false },
      { id: "info_k2_t14", name: { de: "Werkzeuge (Pinsel, Radiergummi)", en: "Tools (Brush, Eraser)", hu: "Eszközök (Ecset, Radír)", ro: "Instrumente (Pensulă, Radieră)" }, questions: [], hasGenerator: false },
      { id: "info_k2_t15", name: { de: "Zeichnung speichern", en: "Save Drawing", hu: "Rajz mentése", ro: "Salvare desen" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k2_funkciok",
    name: { de: "Funktionen", hu: "Funkciók", ro: "Funcții", en: "Functions" },
    icon: "⚙️",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k2_t16", name: { de: "Farben beim Zeichnen", en: "Colors in Drawing", hu: "Színek a rajzolásnál", ro: "Culori în desen" }, questions: [], hasGenerator: false },
      { id: "info_k2_t17", name: { de: "Drucken Grundlagen", en: "Printing Basics", hu: "Nyomtatás alapjai", ro: "Bazele imprimării" }, questions: [], hasGenerator: false },
      { id: "info_k2_t18", name: { de: "Kopieren / Einfügen", en: "Copy / Paste", hu: "Másolás és beillesztés", ro: "Copiere / Lipire" }, questions: [], hasGenerator: false },
      { id: "info_k2_t19", name: { de: "Papierkorb", en: "Recycle Bin", hu: "Lomtár", ro: "Coș de reciclare" }, questions: [], hasGenerator: false },
      { id: "info_k2_t20", name: { de: "Suchen (Strg+F)", en: "Search (Ctrl+F)", hu: "Keresés", ro: "Căutare (Ctrl+F)" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k2_kreativ",
    name: { de: "Kreativ", hu: "Kreatív", ro: "Creativ", en: "Creative" },
    icon: "🎨",
    color: "#EC4899",
    subtopics: [
      { id: "info_k2_t21", name: { de: "Spielend lernen", en: "Learning by Playing", hu: "Játékos tanulás", ro: "Învățare prin joc" }, questions: [], hasGenerator: false },
      { id: "info_k2_t22", name: { de: "Audioprogramm", en: "Audio Program", hu: "Audióprogram", ro: "Program audio" }, questions: [], hasGenerator: false },
      { id: "info_k2_t23", name: { de: "Bilder aus dem Internet", en: "Images from the Internet", hu: "Képek az internetről", ro: "Imagini de pe internet" }, questions: [], hasGenerator: false },
      { id: "info_k2_t24", name: { de: "Form / Größe im Bild", en: "Shape / Size in Image", hu: "Forma és méret a képen", ro: "Formă / Dimensiune în imagine" }, questions: [], hasGenerator: false },
      { id: "info_k2_t25", name: { de: "Gruppieren", en: "Grouping", hu: "Csoportosítás", ro: "Grupare" }, questions: [], hasGenerator: false },
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
