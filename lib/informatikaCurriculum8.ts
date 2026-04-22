import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";

const INFO_K8_TOPIC_NAMES = [
  { de: "Rechnerarchitektur", hu: "Számítógép-architektúra", ro: "Arhitectura calculatoarelor", en: "Computer Architecture" },
  { de: "Datenbanken Grundlagen", hu: "Adatbázisok alapjai", ro: "Baze de date", en: "Database Basics" },
  { de: "SQL Einführung", hu: "SQL bevezetés", ro: "Introducere în SQL", en: "SQL Introduction" },
  { de: "Erweiterte Netzwerke", hu: "Haladó hálózatok", ro: "Rețele avansate", en: "Advanced Networks" },
  { de: "Internetprotokolle", hu: "Internet protokollok", ro: "Protocoale de internet", en: "Internet Protocols" },
  { de: "Webentwicklung (HTML/CSS)", hu: "Webfejlesztés (HTML/CSS)", ro: "Dezvoltare web", en: "Web Development" },
  { de: "Python Grundlagen", hu: "Python alapok", ro: "Baze Python", en: "Python Basics" },
  { de: "Datentypen in Python", hu: "Adattípusok Pythonban", ro: "Tipuri de date Python", en: "Python Data Types" },
  { de: "Funktionen", hu: "Függvények", ro: "Funcții", en: "Functions" },
  { de: "Fehlersuche (Debugging)", hu: "Hibakeresés (Debugging)", ro: "Depanare (Debugging)", en: "Debugging" },
  { de: "Datenstrukturen (Listen)", hu: "Adatszerkezetek (Listák)", ro: "Structuri de date", en: "Data Structures" },
  { de: "Kryptografie", hu: "Kriptográfia", ro: "Criptografie", en: "Cryptography" },
  { de: "Künstliche Intelligenz", hu: "Mesterséges Intelligencia", ro: "Inteligență Artificială", en: "Artificial Intelligence" },
  { de: "Maschinelles Lernen", hu: "Gépi tanulás", ro: "Învățare automată", en: "Machine Learning" },
  { de: "Cloud Computing", hu: "Felhőalapú számítástechnika", ro: "Cloud Computing", en: "Cloud Computing" },
  { de: "Internet der Dinge (IoT)", hu: "A dolgok internete (IoT)", ro: "Internetul Tuturor Lucrurilor", en: "Internet of Things" },
  { de: "Big Data", hu: "Big Data", ro: "Big Data", en: "Big Data" },
  { de: "Soziale Medien Analyse", hu: "Közösségi média elemzés", ro: "Analiza rețelelor sociale", en: "Social Media Analysis" },
  { de: "E-Commerce", hu: "E-kereskedelem", ro: "E-commerce", en: "E-Commerce" },
  { de: "Open Source Software", hu: "Nyílt forráskódú szoftverek", ro: "Software Open Source", en: "Open Source Software" },
  { de: "Computergrafik", hu: "Számítógépes grafika", ro: "Grafică pe calculator", en: "Computer Graphics" },
  { de: "Audio- und Videobearbeitung", hu: "Audio- és videoszerkesztés", ro: "Editare audio-video", en: "Audio/Video Editing" },
  { de: "Ergonomie am Arbeitsplatz", hu: "Ergonómia", ro: "Ergonomie", en: "Ergonomics" },
  { de: "Zukunft der Technologie", hu: "A technológia jövője", ro: "Viitorul tehnologiei", en: "Future of Technology" }
];

const G8_INFO_TOPICS = INFO_K8_TOPIC_NAMES.map((names, i) => ({
  id: `info_k8_t${i + 1}`,
  name: names,
  questions: [] as CurriculumQuestion[],
  hasGenerator: true
}));

export const INFO_K8_CURRICULUM: CurriculumTheme[] = [
  {
    id: "info_k8_island1",
    name: { de: "Informatik K8", hu: "Informatika K8", ro: "Informatica K8", en: "Informatics K8" },
    icon: "💻",
    color: "#8B5CF6",
    subtopics: G8_INFO_TOPICS
  }
];

export function getInfoK8Questions(subtopicIds: string[], count = 10, countryCode?: string): CurriculumQuestion[] {
  const lang = (countryCode || "EN").toLowerCase();
  const pool: CurriculumQuestion[] = [];
  
  for (const id of subtopicIds) {
    const sub = G8_INFO_TOPICS.find(s => s.id === id);
    if (!sub) continue;
    const topicName = (sub.name as any)[lang] || (sub.name as any).en;
    
    // Generate exactly 25 MCQ
    for (let i = 1; i <= 25; i++) {
      pool.push({
        type: "mcq",
        topic: "Informatik K8",
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
        topic: "Informatik K8",
        subtopic: id,
        question: `[${topicName}] Typing Question ${i}?`,
        answer: `Answer ${i}`
      });
    }
  }

  return pool.sort(() => Math.random() - 0.5).slice(0, count);
}
