import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

import t1_hu from "@/data/informatika/class-3/hu/1.json";
import t1_de from "@/data/informatika/class-3/de/1.json";
import t1_ro from "@/data/informatika/class-3/ro/1.json";
import t1_en from "@/data/informatika/class-3/en/1.json";
import t2_hu from "@/data/informatika/class-3/hu/2.json";
import t2_de from "@/data/informatika/class-3/de/2.json";
import t2_ro from "@/data/informatika/class-3/ro/2.json";
import t2_en from "@/data/informatika/class-3/en/2.json";
import t3_hu from "@/data/informatika/class-3/hu/3.json";
import t3_de from "@/data/informatika/class-3/de/3.json";
import t3_ro from "@/data/informatika/class-3/ro/3.json";
import t3_en from "@/data/informatika/class-3/en/3.json";
import t4_hu from "@/data/informatika/class-3/hu/4.json";
import t4_de from "@/data/informatika/class-3/de/4.json";
import t4_ro from "@/data/informatika/class-3/ro/4.json";
import t4_en from "@/data/informatika/class-3/en/4.json";
import t5_hu from "@/data/informatika/class-3/hu/5.json";
import t5_de from "@/data/informatika/class-3/de/5.json";
import t5_ro from "@/data/informatika/class-3/ro/5.json";
import t5_en from "@/data/informatika/class-3/en/5.json";
import t6_hu from "@/data/informatika/class-3/hu/6.json";
import t6_de from "@/data/informatika/class-3/de/6.json";
import t6_ro from "@/data/informatika/class-3/ro/6.json";
import t6_en from "@/data/informatika/class-3/en/6.json";
import t7_hu from "@/data/informatika/class-3/hu/7.json";
import t7_de from "@/data/informatika/class-3/de/7.json";
import t7_ro from "@/data/informatika/class-3/ro/7.json";
import t7_en from "@/data/informatika/class-3/en/7.json";
import t8_hu from "@/data/informatika/class-3/hu/8.json";
import t8_de from "@/data/informatika/class-3/de/8.json";
import t8_ro from "@/data/informatika/class-3/ro/8.json";
import t8_en from "@/data/informatika/class-3/en/8.json";
import t9_hu from "@/data/informatika/class-3/hu/9.json";
import t9_de from "@/data/informatika/class-3/de/9.json";
import t9_ro from "@/data/informatika/class-3/ro/9.json";
import t9_en from "@/data/informatika/class-3/en/9.json";
import t10_hu from "@/data/informatika/class-3/hu/10.json";
import t10_de from "@/data/informatika/class-3/de/10.json";
import t10_ro from "@/data/informatika/class-3/ro/10.json";
import t10_en from "@/data/informatika/class-3/en/10.json";
import t11_hu from "@/data/informatika/class-3/hu/11.json";
import t11_de from "@/data/informatika/class-3/de/11.json";
import t11_ro from "@/data/informatika/class-3/ro/11.json";
import t11_en from "@/data/informatika/class-3/en/11.json";
import t12_hu from "@/data/informatika/class-3/hu/12.json";
import t12_de from "@/data/informatika/class-3/de/12.json";
import t12_ro from "@/data/informatika/class-3/ro/12.json";
import t12_en from "@/data/informatika/class-3/en/12.json";
import t13_hu from "@/data/informatika/class-3/hu/13.json";
import t13_de from "@/data/informatika/class-3/de/13.json";
import t13_ro from "@/data/informatika/class-3/ro/13.json";
import t13_en from "@/data/informatika/class-3/en/13.json";
import t14_hu from "@/data/informatika/class-3/hu/14.json";
import t14_de from "@/data/informatika/class-3/de/14.json";
import t14_ro from "@/data/informatika/class-3/ro/14.json";
import t14_en from "@/data/informatika/class-3/en/14.json";
import t15_hu from "@/data/informatika/class-3/hu/15.json";
import t15_de from "@/data/informatika/class-3/de/15.json";
import t15_ro from "@/data/informatika/class-3/ro/15.json";
import t15_en from "@/data/informatika/class-3/en/15.json";
import t16_hu from "@/data/informatika/class-3/hu/16.json";
import t16_de from "@/data/informatika/class-3/de/16.json";
import t16_ro from "@/data/informatika/class-3/ro/16.json";
import t16_en from "@/data/informatika/class-3/en/16.json";
import t17_hu from "@/data/informatika/class-3/hu/17.json";
import t17_de from "@/data/informatika/class-3/de/17.json";
import t17_ro from "@/data/informatika/class-3/ro/17.json";
import t17_en from "@/data/informatika/class-3/en/17.json";
import t18_hu from "@/data/informatika/class-3/hu/18.json";
import t18_de from "@/data/informatika/class-3/de/18.json";
import t18_ro from "@/data/informatika/class-3/ro/18.json";
import t18_en from "@/data/informatika/class-3/en/18.json";
import t19_hu from "@/data/informatika/class-3/hu/19.json";
import t19_de from "@/data/informatika/class-3/de/19.json";
import t19_ro from "@/data/informatika/class-3/ro/19.json";
import t19_en from "@/data/informatika/class-3/en/19.json";
import t20_hu from "@/data/informatika/class-3/hu/20.json";
import t20_de from "@/data/informatika/class-3/de/20.json";
import t20_ro from "@/data/informatika/class-3/ro/20.json";
import t20_en from "@/data/informatika/class-3/en/20.json";
import t21_hu from "@/data/informatika/class-3/hu/21.json";
import t21_de from "@/data/informatika/class-3/de/21.json";
import t21_ro from "@/data/informatika/class-3/ro/21.json";
import t21_en from "@/data/informatika/class-3/en/21.json";
import t22_hu from "@/data/informatika/class-3/hu/22.json";
import t22_de from "@/data/informatika/class-3/de/22.json";
import t22_ro from "@/data/informatika/class-3/ro/22.json";
import t22_en from "@/data/informatika/class-3/en/22.json";
import t23_hu from "@/data/informatika/class-3/hu/23.json";
import t23_de from "@/data/informatika/class-3/de/23.json";
import t23_ro from "@/data/informatika/class-3/ro/23.json";
import t23_en from "@/data/informatika/class-3/en/23.json";
import t24_hu from "@/data/informatika/class-3/hu/24.json";
import t24_de from "@/data/informatika/class-3/de/24.json";
import t24_ro from "@/data/informatika/class-3/ro/24.json";
import t24_en from "@/data/informatika/class-3/en/24.json";
import t25_hu from "@/data/informatika/class-3/hu/25.json";
import t25_de from "@/data/informatika/class-3/de/25.json";
import t25_ro from "@/data/informatika/class-3/ro/25.json";
import t25_en from "@/data/informatika/class-3/en/25.json";
import t02 from "@/data/informatika/class-3/hu/t02.json";
import t03 from "@/data/informatika/class-3/hu/t03.json";
import t04 from "@/data/informatika/class-3/hu/t04.json";
import t05 from "@/data/informatika/class-3/hu/t05.json";
import t06 from "@/data/informatika/class-3/hu/t06.json";
import t07 from "@/data/informatika/class-3/hu/t07.json";
import t08 from "@/data/informatika/class-3/hu/t08.json";
import t09 from "@/data/informatika/class-3/hu/t09.json";
import t10 from "@/data/informatika/class-3/hu/t10.json";
import t11 from "@/data/informatika/class-3/hu/t11.json";
import t12 from "@/data/informatika/class-3/hu/t12.json";
import t13 from "@/data/informatika/class-3/hu/t13.json";
import t14 from "@/data/informatika/class-3/hu/t14.json";
import t15 from "@/data/informatika/class-3/hu/t15.json";
import t16 from "@/data/informatika/class-3/hu/t16.json";
import t17 from "@/data/informatika/class-3/hu/t17.json";
import t18 from "@/data/informatika/class-3/hu/t18.json";
import t19 from "@/data/informatika/class-3/hu/t19.json";
import t20 from "@/data/informatika/class-3/hu/t20.json";
import t21 from "@/data/informatika/class-3/hu/t21.json";
import t22 from "@/data/informatika/class-3/hu/t22.json";
import t23 from "@/data/informatika/class-3/hu/t23.json";
import t24 from "@/data/informatika/class-3/hu/t24.json";
import t25 from "@/data/informatika/class-3/hu/t25.json";

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

// ─── K3 curriculum — 5 themes × 5 subtopics = 25 topics ─────────────────────


const K3_DATA: Record<string, Record<string, any>> = {
  "info_k3_t01": { hu: t1_hu, de: t1_de, ro: t1_ro, en: t1_en },
  "info_k3_t02": { hu: t2_hu, de: t2_de, ro: t2_ro, en: t2_en },
  "info_k3_t03": { hu: t3_hu, de: t3_de, ro: t3_ro, en: t3_en },
  "info_k3_t04": { hu: t4_hu, de: t4_de, ro: t4_ro, en: t4_en },
  "info_k3_t05": { hu: t5_hu, de: t5_de, ro: t5_ro, en: t5_en },
  "info_k3_t06": { hu: t6_hu, de: t6_de, ro: t6_ro, en: t6_en },
  "info_k3_t07": { hu: t7_hu, de: t7_de, ro: t7_ro, en: t7_en },
  "info_k3_t08": { hu: t8_hu, de: t8_de, ro: t8_ro, en: t8_en },
  "info_k3_t09": { hu: t9_hu, de: t9_de, ro: t9_ro, en: t9_en },
  "info_k3_t10": { hu: t10_hu, de: t10_de, ro: t10_ro, en: t10_en },
  "info_k3_t11": { hu: t11_hu, de: t11_de, ro: t11_ro, en: t11_en },
  "info_k3_t12": { hu: t12_hu, de: t12_de, ro: t12_ro, en: t12_en },
  "info_k3_t13": { hu: t13_hu, de: t13_de, ro: t13_ro, en: t13_en },
  "info_k3_t14": { hu: t14_hu, de: t14_de, ro: t14_ro, en: t14_en },
  "info_k3_t15": { hu: t15_hu, de: t15_de, ro: t15_ro, en: t15_en },
  "info_k3_t16": { hu: t16_hu, de: t16_de, ro: t16_ro, en: t16_en },
  "info_k3_t17": { hu: t17_hu, de: t17_de, ro: t17_ro, en: t17_en },
  "info_k3_t18": { hu: t18_hu, de: t18_de, ro: t18_ro, en: t18_en },
  "info_k3_t19": { hu: t19_hu, de: t19_de, ro: t19_ro, en: t19_en },
  "info_k3_t20": { hu: t20_hu, de: t20_de, ro: t20_ro, en: t20_en },
  "info_k3_t21": { hu: t21_hu, de: t21_de, ro: t21_ro, en: t21_en },
  "info_k3_t22": { hu: t22_hu, de: t22_de, ro: t22_ro, en: t22_en },
  "info_k3_t23": { hu: t23_hu, de: t23_de, ro: t23_ro, en: t23_en },
  "info_k3_t24": { hu: t24_hu, de: t24_de, ro: t24_ro, en: t24_en },
  "info_k3_t25": { hu: t25_hu, de: t25_de, ro: t25_ro, en: t25_en },
};

function _pickTasks(subId: string, cc?: string): RawTask[] {
  const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de'
    : (cc === 'RO') ? 'ro'
    : (cc === 'US' || cc === 'GB' || cc === 'AU' || cc === 'CA' || cc === 'IE' || cc === 'NZ') ? 'en'
    : 'hu';
  const bundle = K3_DATA[subId];
  if (!bundle) return [];
  const picked = bundle[lang] || bundle.hu || bundle.en || bundle.de;
  return extractTasks(picked);
}

export const INFO_K3_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k3_internet",
    name: { de: "Internet", hu: "Internet", ro: "Internet", en: "Internet" },
    icon: "🌐",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k3_t01", name: { de: "Das Internet", en: "The Internet", hu: "Az Internet", ro: "Internetul" }, questions: [], hasGenerator: false },
      { id: "info_k3_t02", name: { de: "Browser", en: "Browser", hu: "Böngésző", ro: "Browser" }, questions: [], hasGenerator: false },
      { id: "info_k3_t03", name: { de: "URL (Adresse)", en: "URL (Address)", hu: "URL (Cím)", ro: "URL (Adresă)" }, questions: [], hasGenerator: false },
      { id: "info_k3_t04", name: { de: "Erste Suche", en: "First Search", hu: "Első keresés", ro: "Prima căutare" }, questions: [], hasGenerator: false },
      { id: "info_k3_t05", name: { de: "Link / Hyperlink", en: "Link / Hyperlink", hu: "Link / Hiperhivatkozás", ro: "Link / Hiperlink" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k3_kereses_media",
    name: { de: "Suche & Medien", hu: "Keresés & Média", ro: "Căutare & Media", en: "Search & Media" },
    icon: "🔍",
    color: "#10B981",
    subtopics: [
      { id: "info_k3_t06", name: { de: "Google Grundlagen", en: "Google Basics", hu: "Google alapok", ro: "Bazele Google" }, questions: [], hasGenerator: false },
      { id: "info_k3_t07", name: { de: "YouTube Kids", en: "YouTube Kids", hu: "YouTube Kids", ro: "YouTube Kids" }, questions: [], hasGenerator: false },
      { id: "info_k3_t08", name: { de: "E-Mail (Idee)", en: "E-Mail (Basics)", hu: "E-mail (Alapok)", ro: "E-mail (Baze)" }, questions: [], hasGenerator: false },
      { id: "info_k3_t09", name: { de: "Chat Grundlagen", en: "Chat Basics", hu: "Chat alapok", ro: "Bazele Chat-ului" }, questions: [], hasGenerator: false },
      { id: "info_k3_t10", name: { de: "Word — Schreiben", en: "Word — Writing", hu: "Word — Írás", ro: "Word — Scriere" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k3_szovegszerkesztes",
    name: { de: "Textverarbeitung", hu: "Szövegszerkesztés", ro: "Procesare text", en: "Word Processing" },
    icon: "📝",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k3_t11", name: { de: "Schriftgröße / Stil", en: "Font Size / Style", hu: "Betűméret / Stílus", ro: "Dimensiune font / Stil" }, questions: [], hasGenerator: false },
      { id: "info_k3_t12", name: { de: "Titel / Absatz", en: "Title / Paragraph", hu: "Cím / Bekezdés", ro: "Titlu / Paragraf" }, questions: [], hasGenerator: false },
      { id: "info_k3_t13", name: { de: "Liste", en: "List", hu: "Lista", ro: "Listă" }, questions: [], hasGenerator: false },
      { id: "info_k3_t14", name: { de: "Tabelle Grundlagen", en: "Table Basics", hu: "Táblázat alapok", ro: "Bazele tabelelor" }, questions: [], hasGenerator: false },
      { id: "info_k3_t15", name: { de: "Excel — Zellen", en: "Excel — Cells", hu: "Excel — Cellák", ro: "Excel — Celule" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k3_tablazat_prezentacio",
    name: { de: "Tabelle & Präsentation", hu: "Táblázat & Prezentáció", ro: "Tabel & Prezentare", en: "Spreadsheet & Presentation" },
    icon: "📊",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k3_t16", name: { de: "Einfache Rechnung", en: "Simple Calculation", hu: "Egyszerű számítás", ro: "Calcul simplu" }, questions: [], hasGenerator: false },
      { id: "info_k3_t17", name: { de: "PowerPoint — Folie", en: "PowerPoint — Slide", hu: "PowerPoint — Dia", ro: "PowerPoint — Diapozitiv" }, questions: [], hasGenerator: false },
      { id: "info_k3_t18", name: { de: "Bild einfügen", en: "Insert Image", hu: "Kép beszúrása", ro: "Inserare imagine" }, questions: [], hasGenerator: false },
      { id: "info_k3_t19", name: { de: "Druckvorschau", en: "Print Preview", hu: "Nyomtatási kép", ro: "Previzualizare imprimare" }, questions: [], hasGenerator: false },
      { id: "info_k3_t20", name: { de: "PDF Idee", en: "PDF Basics", hu: "PDF alapok", ro: "Bazele PDF" }, questions: [], hasGenerator: false },
    ],
  },
  {
    id: "info_k3_halado",
    name: { de: "Fortgeschritten", hu: "Haladó", ro: "Avansat", en: "Advanced" },
    icon: "🚀",
    color: "#EC4899",
    subtopics: [
      { id: "info_k3_t21", name: { de: "Dateiformate (.docx .jpg)", en: "File Formats (.docx .jpg)", hu: "Fájlformátumok (.docx .jpg)", ro: "Formate de fișiere (.docx .jpg)" }, questions: [], hasGenerator: false },
      { id: "info_k3_t22", name: { de: "Zip / Komprimieren", en: "Zip / Compress", hu: "Zip / Tömörítés", ro: "Zip / Comprimare" }, questions: [], hasGenerator: false },
      { id: "info_k3_t23", name: { de: "Screenshot", en: "Screenshot", hu: "Képernyőkép (Screenshot)", ro: "Captură de ecran" }, questions: [], hasGenerator: false },
      { id: "info_k3_t24", name: { de: "Lesezeichen", en: "Bookmark", hu: "Könyvjelző", ro: "Marcaj" }, questions: [], hasGenerator: false },
      { id: "info_k3_t25", name: { de: "Rechtschreibprüfung", en: "Spell Check", hu: "Helyesírás-ellenőrző", ro: "Verificare ortografică" }, questions: [], hasGenerator: false },
    ],
  }
];

// ─── Question getter ──────────────────────────────────────────────────────────

export function getInfoK3Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of INFO_K3_CURRICULUM) {
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

