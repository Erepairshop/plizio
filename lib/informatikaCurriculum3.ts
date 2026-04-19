import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

// ─── Raw JSON imports (Hungarian, K3) ────────────────────────────────────────
import t01 from "@/data/informatika/class-3/hu/t01.json";
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

export const INFO_K3_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k3_internet",
    name: "Internet",
    icon: "🌐",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k3_t01", name: { de: "Das Internet", en: "The Internet", hu: "Az Internet", ro: "Internetul" }, questions: jsonToQuestions("info_k3_t01", extractTasks(t01)), hasGenerator: false },
      { id: "info_k3_t02", name: { de: "Browser", en: "Browser", hu: "Böngésző", ro: "Browser" }, questions: jsonToQuestions("info_k3_t02", extractTasks(t02)), hasGenerator: false },
      { id: "info_k3_t03", name: { de: "URL (Adresse)", en: "URL (Address)", hu: "URL (Cím)", ro: "URL (Adresă)" }, questions: jsonToQuestions("info_k3_t03", extractTasks(t03)), hasGenerator: false },
      { id: "info_k3_t04", name: { de: "Erste Suche", en: "First Search", hu: "Első keresés", ro: "Prima căutare" }, questions: jsonToQuestions("info_k3_t04", extractTasks(t04)), hasGenerator: false },
      { id: "info_k3_t05", name: { de: "Link / Hyperlink", en: "Link / Hyperlink", hu: "Link / Hiperhivatkozás", ro: "Link / Hiperlink" }, questions: jsonToQuestions("info_k3_t05", extractTasks(t05)), hasGenerator: false },
    ],
  },
  {
    id: "info_k3_kereses_media",
    name: "Keresés & Média",
    icon: "🔍",
    color: "#10B981",
    subtopics: [
      { id: "info_k3_t06", name: { de: "Google Grundlagen", en: "Google Basics", hu: "Google alapok", ro: "Bazele Google" }, questions: jsonToQuestions("info_k3_t06", extractTasks(t06)), hasGenerator: false },
      { id: "info_k3_t07", name: { de: "YouTube Kids", en: "YouTube Kids", hu: "YouTube Kids", ro: "YouTube Kids" }, questions: jsonToQuestions("info_k3_t07", extractTasks(t07)), hasGenerator: false },
      { id: "info_k3_t08", name: { de: "E-Mail (Idee)", en: "E-Mail (Basics)", hu: "E-mail (Alapok)", ro: "E-mail (Baze)" }, questions: jsonToQuestions("info_k3_t08", extractTasks(t08)), hasGenerator: false },
      { id: "info_k3_t09", name: { de: "Chat Grundlagen", en: "Chat Basics", hu: "Chat alapok", ro: "Bazele Chat-ului" }, questions: jsonToQuestions("info_k3_t09", extractTasks(t09)), hasGenerator: false },
      { id: "info_k3_t10", name: { de: "Word — Schreiben", en: "Word — Writing", hu: "Word — Írás", ro: "Word — Scriere" }, questions: jsonToQuestions("info_k3_t10", extractTasks(t10)), hasGenerator: false },
    ],
  },
  {
    id: "info_k3_szovegszerkesztes",
    name: "Szövegszerkesztés",
    icon: "📝",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k3_t11", name: { de: "Schriftgröße / Stil", en: "Font Size / Style", hu: "Betűméret / Stílus", ro: "Dimensiune font / Stil" }, questions: jsonToQuestions("info_k3_t11", extractTasks(t11)), hasGenerator: false },
      { id: "info_k3_t12", name: { de: "Titel / Absatz", en: "Title / Paragraph", hu: "Cím / Bekezdés", ro: "Titlu / Paragraf" }, questions: jsonToQuestions("info_k3_t12", extractTasks(t12)), hasGenerator: false },
      { id: "info_k3_t13", name: { de: "Liste", en: "List", hu: "Lista", ro: "Listă" }, questions: jsonToQuestions("info_k3_t13", extractTasks(t13)), hasGenerator: false },
      { id: "info_k3_t14", name: { de: "Tabelle Grundlagen", en: "Table Basics", hu: "Táblázat alapok", ro: "Bazele tabelelor" }, questions: jsonToQuestions("info_k3_t14", extractTasks(t14)), hasGenerator: false },
      { id: "info_k3_t15", name: { de: "Excel — Zellen", en: "Excel — Cells", hu: "Excel — Cellák", ro: "Excel — Celule" }, questions: jsonToQuestions("info_k3_t15", extractTasks(t15)), hasGenerator: false },
    ],
  },
  {
    id: "info_k3_tablazat_prezentacio",
    name: "Táblázat & Prezentáció",
    icon: "📊",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k3_t16", name: { de: "Einfache Rechnung", en: "Simple Calculation", hu: "Egyszerű számítás", ro: "Calcul simplu" }, questions: jsonToQuestions("info_k3_t16", extractTasks(t16)), hasGenerator: false },
      { id: "info_k3_t17", name: { de: "PowerPoint — Folie", en: "PowerPoint — Slide", hu: "PowerPoint — Dia", ro: "PowerPoint — Diapozitiv" }, questions: jsonToQuestions("info_k3_t17", extractTasks(t17)), hasGenerator: false },
      { id: "info_k3_t18", name: { de: "Bild einfügen", en: "Insert Image", hu: "Kép beszúrása", ro: "Inserare imagine" }, questions: jsonToQuestions("info_k3_t18", extractTasks(t18)), hasGenerator: false },
      { id: "info_k3_t19", name: { de: "Druckvorschau", en: "Print Preview", hu: "Nyomtatási kép", ro: "Previzualizare imprimare" }, questions: jsonToQuestions("info_k3_t19", extractTasks(t19)), hasGenerator: false },
      { id: "info_k3_t20", name: { de: "PDF Idee", en: "PDF Basics", hu: "PDF alapok", ro: "Bazele PDF" }, questions: jsonToQuestions("info_k3_t20", extractTasks(t20)), hasGenerator: false },
    ],
  },
  {
    id: "info_k3_halado",
    name: "Haladó",
    icon: "🚀",
    color: "#EC4899",
    subtopics: [
      { id: "info_k3_t21", name: { de: "Dateiformate (.docx .jpg)", en: "File Formats (.docx .jpg)", hu: "Fájlformátumok (.docx .jpg)", ro: "Formate de fișiere (.docx .jpg)" }, questions: jsonToQuestions("info_k3_t21", extractTasks(t21)), hasGenerator: false },
      { id: "info_k3_t22", name: { de: "Zip / Komprimieren", en: "Zip / Compress", hu: "Zip / Tömörítés", ro: "Zip / Comprimare" }, questions: jsonToQuestions("info_k3_t22", extractTasks(t22)), hasGenerator: false },
      { id: "info_k3_t23", name: { de: "Screenshot", en: "Screenshot", hu: "Képernyőkép (Screenshot)", ro: "Captură de ecran" }, questions: jsonToQuestions("info_k3_t23", extractTasks(t23)), hasGenerator: false },
      { id: "info_k3_t24", name: { de: "Lesezeichen", en: "Bookmark", hu: "Könyvjelző", ro: "Marcaj" }, questions: jsonToQuestions("info_k3_t24", extractTasks(t24)), hasGenerator: false },
      { id: "info_k3_t25", name: { de: "Rechtschreibprüfung", en: "Spell Check", hu: "Helyesírás-ellenőrző", ro: "Verificare ortografică" }, questions: jsonToQuestions("info_k3_t25", extractTasks(t25)), hasGenerator: false },
    ],
  }
];
