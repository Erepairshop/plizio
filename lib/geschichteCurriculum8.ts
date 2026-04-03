import type { CurriculumTheme } from "./curriculumTypes";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

let g8GeneratorMap: any = null;

export function setG8GeschichteGeneratorMap(map: any) {
  g8GeneratorMap = map;
}

export const G8_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "imperialismus_them",
    name: { de: "Imperialismus és Erster Weltkrieg", en: "Imperialism & WWI", hu: "Imperializmus és I. vh.", ro: "Imperialism și Primul Război Mondial" },
    subtopics: [
      { id: "imperialismus", name: { de: "Imperialismus", en: "Imperialism", hu: "Imperializmus", ro: "Imperialism" }, questions: [], hasGenerator: true },
      { id: "erster_weltkrieg_beginn", name: { de: "Kriegsausbruch 1914", en: "Outbreak of War", hu: "Hadüzenet", ro: "Izbucnirea războiului" }, questions: [], hasGenerator: true },
      { id: "erster_weltkrieg_verlauf", name: { de: "Verlauf und Ende", en: "Course and End", hu: "Menet és vég", ro: "Desfășurare și sfârșit" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "weimarer_republik_them",
    name: { de: "Die Weimarer Republik", en: "Weimar Republic", hu: "Weimari köztársaság", ro: "Republica de la Weimar" },
    subtopics: [
      { id: "weimarer_republik", name: { de: "Entstehung und Krisen", en: "Origins and Crises", hu: "Kialakulás és válságok", ro: "Origini și crize" }, questions: [], hasGenerator: true },
      { id: "weltwirtschaftskrise", name: { de: "Weltwirtschaftskrise", en: "Great Depression", hu: "Gazdasági világválság", ro: "Marea Criză" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "ns_zeit_them",
    name: { de: "Nationalsozialismus", en: "National Socialism", hu: "Nemzetiszocializmus", ro: "Național-socialism" },
    subtopics: [
      { id: "ns_machtuebernahme", name: { de: "Machtergreifung 1933", en: "Rise to Power", hu: "Hatalomátvétel", ro: "Preluarea puterii" }, questions: [], hasGenerator: true },
      { id: "ns_ideologie", name: { de: "NS-Ideologie", en: "NS Ideology", hu: "NS ideológia", ro: "Ideologia NS" }, questions: [], hasGenerator: true },
      { id: "ns_propaganda", name: { de: "Propaganda und Alltag", en: "Propaganda & Life", hu: "Propaganda és élet", ro: "Propaganda și viața" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "holocaust_widerstand_them",
    name: { de: "Holocaust és Widerstand", en: "Holocaust & Resistance", hu: "Holokauszt és ellenállás", ro: "Holocaust și rezistență" },
    subtopics: [
      { id: "holocaust", name: { de: "Judenverfolgung", en: "Holocaust", hu: "Zsidóüldözés", ro: "Holocaust" }, questions: [], hasGenerator: true },
      { id: "widerstand_ns", name: { de: "Widerstand", en: "Resistance", hu: "Ellenállás", ro: "Rezistență" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "zweiter_weltkrieg_them",
    name: { de: "Der Zweite Weltkrieg", en: "World War II", hu: "II. világháború", ro: "Al Doilea Război Mondial" },
    subtopics: [
      { id: "zweiter_weltkrieg", name: { de: "Kriegsverlauf", en: "Course of War", hu: "A háború menete", ro: "Desfășurarea războiului" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "nachkrieg_teilung_them",
    name: { de: "Nachkriegszeit és Teilung", en: "Post-War & Division", hu: "Háború után és megosztottság", ro: "Postbelic și divizare" },
    subtopics: [
      { id: "nachkriegszeit", name: { de: "Besatzung 1945-49", en: "Occupation", hu: "Megszállás", ro: "Ocupație" }, questions: [], hasGenerator: true },
      { id: "teilung_deutschlands", name: { de: "BRD und DDR", en: "West & East Germany", hu: "NSZK és NDK", ro: "RFG și RDG" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "kalter_krieg_them",
    name: { de: "Der Kalte Krieg", en: "The Cold War", hu: "A hidegháború", ro: "Războiul Rece" },
    subtopics: [
      { id: "kalter_krieg", name: { de: "Konfrontation", en: "Confrontation", hu: "Konfrontáció", ro: "Confruntare" }, questions: [], hasGenerator: true },
      { id: "berliner_mauer", name: { de: "Die Mauer", en: "The Wall", hu: "A Fal", ro: "Zidul" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "wende_einheit_them",
    name: { de: "Mauerfall és Einheit", en: "Fall of the Wall & Unity", hu: "Fal leomlása és egység", ro: "Căderea Zidului și unitatea" },
    subtopics: [
      { id: "wiedervereinigung", name: { de: "Wiedervereinigung", en: "Reunification", hu: "Újraegyesítés", ro: "Reunificare" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "europa_heute_them",
    name: { de: "Europa und die Welt heute", en: "Europe Today", hu: "Európa ma", ro: "Europa astăzi" },
    subtopics: [
      { id: "europa_einigung", name: { de: "Europäische Einigung", en: "European Union", hu: "Európai Unió", ro: "Uniunea Europeană" }, questions: [], hasGenerator: true },
      { id: "moderne_welt", name: { de: "Moderne Welt", en: "Modern World", hu: "Modern világ", ro: "Lumea modernă" }, questions: [], hasGenerator: true },
    ]
  }
];

export function getG8GeschichteQuestions(subtopicId: string, seed: number = 123): any[] {
  if (g8GeneratorMap && g8GeneratorMap[subtopicId]) {
    return g8GeneratorMap[subtopicId](seed);
  }
  if (G8_Generators_Geschichte[subtopicId]) {
    return G8_Generators_Geschichte[subtopicId](seed);
  }
  return [];
}
