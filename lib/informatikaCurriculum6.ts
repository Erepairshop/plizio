import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

import t01 from "@/data/informatika/class-6/de/1.json";
import t02 from "@/data/informatika/class-6/de/2.json";
import t03 from "@/data/informatika/class-6/de/3.json";
import t04 from "@/data/informatika/class-6/de/4.json";
import t05 from "@/data/informatika/class-6/de/5.json";
import t06 from "@/data/informatika/class-6/de/6.json";
import t07 from "@/data/informatika/class-6/de/7.json";
import t08 from "@/data/informatika/class-6/de/8.json";
import t09 from "@/data/informatika/class-6/de/9.json";
import t10 from "@/data/informatika/class-6/de/10.json";
import t11 from "@/data/informatika/class-6/de/11.json";
import t12 from "@/data/informatika/class-6/de/12.json";
import t13 from "@/data/informatika/class-6/de/13.json";
import t14 from "@/data/informatika/class-6/de/14.json";
import t15 from "@/data/informatika/class-6/de/15.json";
import t16 from "@/data/informatika/class-6/de/16.json";
import t17 from "@/data/informatika/class-6/de/17.json";
import t18 from "@/data/informatika/class-6/de/18.json";
import t19 from "@/data/informatika/class-6/de/19.json";
import t20 from "@/data/informatika/class-6/de/20.json";
import t21 from "@/data/informatika/class-6/de/21.json";
import t22 from "@/data/informatika/class-6/de/22.json";
import t23 from "@/data/informatika/class-6/de/23.json";
import t24 from "@/data/informatika/class-6/de/24.json";
import t25 from "@/data/informatika/class-6/de/25.json";
import t26 from "@/data/informatika/class-6/de/26.json";
import t27 from "@/data/informatika/class-6/de/27.json";
import t28 from "@/data/informatika/class-6/de/28.json";
import t29 from "@/data/informatika/class-6/de/29.json";
import t30 from "@/data/informatika/class-6/de/30.json";

type RawTask =
  | { type: "mcq"; question: string; options: string[]; correct: number }
  | { type: "typing"; text: string };

function jsonToQuestions(subtopicId: string, tasks: RawTask[]): KemiaQuestion[] {
  return tasks.flatMap((task): KemiaQuestion[] => {
    if (task.type === "mcq") {
      return [{ type: "mcq", topic: "informatika", subtopic: subtopicId, question: task.question, options: task.options, correct: task.correct }];
    }
    return [{ type: "typing", topic: "informatika", subtopic: subtopicId, question: task.text, answer: task.text }];
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const e = (json: any): RawTask[] => (json.tasks ?? []) as RawTask[];

export const INFO_K6_CURRICULUM: KemiaTheme[] = [
  {
    id: "info_k6_szoveg",
    name: "Szöveg & Táblázat",
    icon: "📊",
    color: "#3B82F6",
    subtopics: [
      { id: "info_k6_t01", name: { de: "Begriff und Messung der Information", en: "Information Concept & Measurement", hu: "Az információ fogalma és mérése", ro: "Conceptul informației" }, questions: jsonToQuestions("info_k6_t01", e(t01)), hasGenerator: false },
      { id: "info_k6_t02", name: { de: "Grundlagen von Netzwerken", en: "Network Basics", hu: "Hálózatok alapjai", ro: "Bazele rețelelor" }, questions: jsonToQuestions("info_k6_t02", e(t02)), hasGenerator: false },
      { id: "info_k6_t03", name: { de: "Internetdienste", en: "Internet Services", hu: "Internet szolgáltatások", ro: "Servicii internet" }, questions: jsonToQuestions("info_k6_t03", e(t03)), hasGenerator: false },
      { id: "info_k6_t04", name: { de: "Cloud-Dienste", en: "Cloud Services", hu: "Felhő szolgáltatások", ro: "Servicii cloud" }, questions: jsonToQuestions("info_k6_t04", e(t04)), hasGenerator: false },
      { id: "info_k6_t05", name: { de: "Online-Zusammenarbeit", en: "Online Collaboration", hu: "Online együttműködés", ro: "Colaborare online" }, questions: jsonToQuestions("info_k6_t05", e(t05)), hasGenerator: false },
    ],
  },
  {
    id: "info_k6_media",
    name: "Média & Grafika",
    icon: "🖼️",
    color: "#10B981",
    subtopics: [
      { id: "info_k6_t06", name: { de: "Fortgeschrittene Bildbearbeitung", en: "Advanced Image Editing", hu: "Képszerkesztés haladó", ro: "Editare imagini avansată" }, questions: jsonToQuestions("info_k6_t06", e(t06)), hasGenerator: false },
      { id: "info_k6_t07", name: { de: "Grundlagen der Vektorgrafik", en: "Vector Graphics Basics", hu: "Vektorgrafika alapjai", ro: "Vectorgrafică" }, questions: jsonToQuestions("info_k6_t07", e(t07)), hasGenerator: false },
      { id: "info_k6_t08", name: { de: "Textverarbeitung: Tabellen", en: "Text: Tables", hu: "Szövegszerkesztés: Táblázatok", ro: "Procesare text: Tabele" }, questions: jsonToQuestions("info_k6_t08", e(t08)), hasGenerator: false },
      { id: "info_k6_t09", name: { de: "Grundlagen der Präsentation", en: "Presentation Basics", hu: "Prezentáció alapjai", ro: "Bazele prezentării" }, questions: jsonToQuestions("info_k6_t09", e(t09)), hasGenerator: false },
      { id: "info_k6_t10", name: { de: "Foliendesign", en: "Slide Design", hu: "Dia tervezés", ro: "Design diapozitive" }, questions: jsonToQuestions("info_k6_t10", e(t10)), hasGenerator: false },
    ],
  },
  {
    id: "info_k6_tablazat",
    name: "Táblázat & Adatbázis",
    icon: "📋",
    color: "#F59E0B",
    subtopics: [
      { id: "info_k6_t11", name: { de: "Animationen und Übergänge", en: "Animations & Transitions", hu: "Animációk és áttűnések", ro: "Animații și tranziții" }, questions: jsonToQuestions("info_k6_t11", e(t11)), hasGenerator: false },
      { id: "info_k6_t12", name: { de: "Grundlagen der Tabellenkalkulation", en: "Spreadsheet Basics", hu: "Táblázatkezelés alapjai", ro: "Bazele calculului tabelar" }, questions: jsonToQuestions("info_k6_t12", e(t12)), hasGenerator: false },
      { id: "info_k6_t13", name: { de: "Zellenformatierung", en: "Cell Formatting", hu: "Cellaformázás", ro: "Formatarea celulelor" }, questions: jsonToQuestions("info_k6_t13", e(t13)), hasGenerator: false },
      { id: "info_k6_t14", name: { de: "Einfache Funktionen", en: "Simple Functions", hu: "Egyszerű függvények", ro: "Funcții simple" }, questions: jsonToQuestions("info_k6_t14", e(t14)), hasGenerator: false },
      { id: "info_k6_t15", name: { de: "Diagramme erstellen", en: "Creating Charts", hu: "Diagramok", ro: "Diagrame" }, questions: jsonToQuestions("info_k6_t15", e(t15)), hasGenerator: false },
    ],
  },
  {
    id: "info_k6_programozas",
    name: "Programozás alapjai",
    icon: "💡",
    color: "#8B5CF6",
    subtopics: [
      { id: "info_k6_t16", name: { de: "Datenbank-Grundlagen", en: "Database Basics", hu: "Adatbázis alapjai", ro: "Baze de date" }, questions: jsonToQuestions("info_k6_t16", e(t16)), hasGenerator: false },
      { id: "info_k6_t17", name: { de: "Flussdiagramme", en: "Flowcharts", hu: "Folyamatábrák", ro: "Diagrame flux" }, questions: jsonToQuestions("info_k6_t17", e(t17)), hasGenerator: false },
      { id: "info_k6_t18", name: { de: "Variablen in der Programmierung", en: "Variables in Programming", hu: "Változók programozásban", ro: "Variabile în programare" }, questions: jsonToQuestions("info_k6_t18", e(t18)), hasGenerator: false },
      { id: "info_k6_t19", name: { de: "Schleifen", en: "Loops", hu: "Ciklusok", ro: "Bucle" }, questions: jsonToQuestions("info_k6_t19", e(t19)), hasGenerator: false },
      { id: "info_k6_t20", name: { de: "Bedingte Verzweigungen", en: "Conditionals", hu: "Feltételes elágazások", ro: "Condiții" }, questions: jsonToQuestions("info_k6_t20", e(t20)), hasGenerator: false },
    ],
  },
  {
    id: "info_k6_digitalbizt",
    name: "Digitális biztonság",
    icon: "🔐",
    color: "#EF4444",
    subtopics: [
      { id: "info_k6_t21", name: { de: "Ereignisgesteuerte Programmierung", en: "Event-driven Programming", hu: "Eseményvezérelt programozás", ro: "Programare bazată pe evenimente" }, questions: jsonToQuestions("info_k6_t21", e(t21)), hasGenerator: false },
      { id: "info_k6_t22", name: { de: "Nutzung von mobilen Apps", en: "Mobile App Usage", hu: "Mobilalkalmazások", ro: "Aplicații mobile" }, questions: jsonToQuestions("info_k6_t22", e(t22)), hasGenerator: false },
      { id: "info_k6_t23", name: { de: "HTML/CSS Einführung", en: "HTML/CSS Introduction", hu: "HTML/CSS bevezető", ro: "Introducere HTML/CSS" }, questions: jsonToQuestions("info_k6_t23", e(t23)), hasGenerator: false },
      { id: "info_k6_t24", name: { de: "Datenschutz und DSGVO", en: "Data Protection & GDPR", hu: "Adatvédelem", ro: "Protecția datelor" }, questions: jsonToQuestions("info_k6_t24", e(t24)), hasGenerator: false },
      { id: "info_k6_t25", name: { de: "Urheberrecht und Lizenzen", en: "Copyright & Licenses", hu: "Szerzői jogok és licencek", ro: "Drepturi de autor și licențe" }, questions: jsonToQuestions("info_k6_t25", e(t25)), hasGenerator: false },
    ],
  },
  {
    id: "info_k6_moderntech",
    name: "Modern technológia",
    icon: "🤖",
    color: "#EC4899",
    subtopics: [
      { id: "info_k6_t26", name: { de: "Medienkompetenz und Fake News", en: "Media Literacy & Fake News", hu: "Médiaismeret és álhírek", ro: "Competență media" }, questions: jsonToQuestions("info_k6_t26", e(t26)), hasGenerator: false },
      { id: "info_k6_t27", name: { de: "Cyberbullying-Prävention", en: "Cyberbullying Prevention", hu: "Kiberbántalmazás megelőzése", ro: "Prevenirea cyberbullying-ului" }, questions: jsonToQuestions("info_k6_t27", e(t27)), hasGenerator: false },
      { id: "info_k6_t28", name: { de: "Roboter programmieren", en: "Programming Robots", hu: "Robotok programozása", ro: "Programarea roboților" }, questions: jsonToQuestions("info_k6_t28", e(t28)), hasGenerator: false },
      { id: "info_k6_t29", name: { de: "IoT - Smart Home", en: "IoT - Smart Home", hu: "IoT - Okos otthon", ro: "IoT - Casă inteligentă" }, questions: jsonToQuestions("info_k6_t29", e(t29)), hasGenerator: false },
      { id: "info_k6_t30", name: { de: "Zukunft der Informatik", en: "Future of IT", hu: "Az informatika jövője", ro: "Viitorul informaticii" }, questions: jsonToQuestions("info_k6_t30", e(t30)), hasGenerator: false },
    ],
  },
];

export function getInfoK6Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of INFO_K6_CURRICULUM) {
    for (const sub of theme.subtopics) {
      if (subtopicIds.includes(sub.id)) pool.push(...sub.questions);
    }
  }
  if (!count) return pool;
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
