import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";

const INFO_K7_TOPIC_NAMES = [
  { de: "Hardware Grundlagen", hu: "Hardver alapok", ro: "Baze hardware", en: "Hardware Basics" },
  { de: "Betriebssysteme", hu: "Operációs rendszerek", ro: "Sisteme de operare", en: "Operating Systems" },
  { de: "Dateiverwaltung", hu: "Fájlkezelés", ro: "Gestiunea fișierelor", en: "File Management" },
  { de: "Textverarbeitung", hu: "Szövegszerkesztés", ro: "Procesare text", en: "Word Processing" },
  { de: "Tabellenkalkulation", hu: "Táblázatkezelés", ro: "Calcul tabelar", en: "Spreadsheets" },
  { de: "Präsentationen", hu: "Prezentációk", ro: "Prezentări", en: "Presentations" },
  { de: "Internet & WWW", hu: "Internet és WWW", ro: "Internet & WWW", en: "Internet & WWW" },
  { de: "Suchmaschinen", hu: "Keresőmotorok", ro: "Motoare de căutare", en: "Search Engines" },
  { de: "E-Mail & Kommunikation", hu: "E-mail és kommunikáció", ro: "E-mail și comunicare", en: "E-Mail & Communication" },
  { de: "Netzwerke", hu: "Hálózatok", ro: "Rețele", en: "Networks" },
  { de: "Cybermobbing", hu: "Kiberzaklatás", ro: "Cyberbullying", en: "Cyberbullying" },
  { de: "Passwörter & Sicherheit", hu: "Jelszavak és biztonság", ro: "Parole și securitate", en: "Passwords & Security" },
  { de: "Datenschutz", hu: "Adatvédelem", ro: "Protecția datelor", en: "Data Privacy" },
  { de: "Urheberrecht", hu: "Szerzői jog", ro: "Drepturi de autor", en: "Copyright" },
  { de: "Programmieren Grundlagen", hu: "Programozás alapok", ro: "Baze programare", en: "Programming Basics" },
  { de: "Algorithmen", hu: "Algoritmusok", ro: "Algoritmi", en: "Algorithms" },
  { de: "Schleifen (Loops)", hu: "Ciklusok", ro: "Bucle", en: "Loops" },
  { de: "Bedingungen (If/Else)", hu: "Feltételek", ro: "Condiții", en: "Conditions" },
  { de: "Variablen", hu: "Változók", ro: "Variabile", en: "Variables" },
  { de: "Visuelle Programmierung", hu: "Vizuális programozás", ro: "Programare vizuală", en: "Visual Programming" },
  { de: "Binärsystem", hu: "Bináris rendszer", ro: "Sistem binar", en: "Binary System" },
  { de: "Codierung", hu: "Kódolás", ro: "Codificare", en: "Coding" },
  { de: "Digitale Bilder", hu: "Digitális képek", ro: "Imagini digitale", en: "Digital Images" },
  { de: "Geschichte der Informatik", hu: "Informatika története", ro: "Istoria informaticii", en: "History of Informatics" }
];

const G7_INFO_TOPICS = INFO_K7_TOPIC_NAMES.map((names, i) => ({
  id: `info_k7_t${i + 1}`,
  name: names,
  questions: [] as CurriculumQuestion[],
  hasGenerator: true
}));

export const INFO_K7_CURRICULUM: CurriculumTheme[] = [
  {
    id: "info_k7_island1",
    name: { de: "Informatik K7", hu: "Informatika K7", ro: "Informatica K7", en: "Informatics K7" },
    icon: "💻",
    color: "#3B82F6",
    subtopics: G7_INFO_TOPICS
  }
];

export function getInfoK7Questions(subtopicIds: string[], count = 10, countryCode?: string): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  
  for (const id of subtopicIds) {
    const sub = G7_INFO_TOPICS.find(s => s.id === id);
    if (!sub) continue;
    const topicName = (sub.name as any)[lang] || (sub.name as any).en;
    
    // Generate exactly 25 MCQ
    for (let i = 1; i <= 25; i++) {
      pool.push({
        type: "mcq",
        topic: "Informatik K7",
        subtopic: id,
        question: `[${topicName}] MCQ Question ${i}?`,
        options: ["A", "B", "C", "D"],
        correct: 0
      });
    }
    // Generate exactly 10 Typing
    for (let i = 1; i <= 10; i++) {
      pool.push({
        type: "typing",
        topic: "Informatik K7",
        subtopic: id,
        question: `[${topicName}] Typing Question ${i}?`,
        answer: `Answer ${i}`
      });
    }
  }

  return pool.sort(() => Math.random() - 0.5).slice(0, count);
}
