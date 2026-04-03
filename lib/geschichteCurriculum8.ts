import type { CurriculumTheme } from "./curriculumTypes";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

let g8GeneratorMap: any = null;

export function setG8GeschichteGeneratorMap(map: any) {
  g8GeneratorMap = map;
}

export const G8_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "imperialismus_them",
    name: "Imperialismus és Erster Weltkrieg",
    subtopics: [
      { id: "imperialismus", name: "Imperialismus", questions: [], hasGenerator: true },
      { id: "erster_weltkrieg_beginn", name: "Kriegsausbruch 1914", questions: [], hasGenerator: true },
      { id: "erster_weltkrieg_verlauf", name: "Verlauf und Ende", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "weimarer_republik_them",
    name: "Die Weimarer Republik",
    subtopics: [
      { id: "weimarer_republik", name: "Entstehung und Krisen", questions: [], hasGenerator: true },
      { id: "weltwirtschaftskrise", name: "Weltwirtschaftskrise", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "ns_zeit_them",
    name: "Nationalsozialismus",
    subtopics: [
      { id: "ns_machtuebernahme", name: "Machtergreifung 1933", questions: [], hasGenerator: true },
      { id: "ns_ideologie", name: "NS-Ideologie", questions: [], hasGenerator: true },
      { id: "ns_propaganda", name: "Propaganda und Alltag", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "holocaust_widerstand_them",
    name: "Holocaust és Widerstand",
    subtopics: [
      { id: "holocaust", name: "Judenverfolgung", questions: [], hasGenerator: true },
      { id: "widerstand_ns", name: "Widerstand", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "zweiter_weltkrieg_them",
    name: "Der Zweite Weltkrieg",
    subtopics: [
      { id: "zweiter_weltkrieg", name: "Kriegsverlauf", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "nachkrieg_teilung_them",
    name: "Nachkriegszeit és Teilung",
    subtopics: [
      { id: "nachkriegszeit", name: "Besatzung 1945-49", questions: [], hasGenerator: true },
      { id: "teilung_deutschlands", name: "BRD und DDR", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "kalter_krieg_them",
    name: "Der Kalte Krieg",
    subtopics: [
      { id: "kalter_krieg", name: "Konfrontation", questions: [], hasGenerator: true },
      { id: "berliner_mauer", name: "Die Mauer", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "wende_einheit_them",
    name: "Mauerfall és Einheit",
    subtopics: [
      { id: "wiedervereinigung", name: "Wiedervereinigung", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "europa_heute_them",
    name: "Europa und die Welt heute",
    subtopics: [
      { id: "europa_einigung", name: "Europäische Einigung", questions: [], hasGenerator: true },
      { id: "moderne_welt", name: "Moderne Welt", questions: [], hasGenerator: true },
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
