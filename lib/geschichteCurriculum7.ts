import type { CurriculumTheme } from "./curriculumTypes";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";

let g7GeneratorMap: any = null;

export function setG7GeschichteGeneratorMap(map: any) {
  g7GeneratorMap = map;
}

export const G7_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "aufbruch_neuzeit",
    name: "Aufbruch in eine neue Zeit",
    subtopics: [
      { id: "renaissance", name: "Renaissance", questions: [], hasGenerator: true },
      { id: "humanismus", name: "Humanismus", questions: [], hasGenerator: true },
      { id: "buchdruck", name: "Erfindung des Buchdrucks", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "entdeckungen",
    name: "Entdeckungen und Eroberungen",
    subtopics: [
      { id: "entdeckungsfahrten", name: "Entdeckungsfahrten", questions: [], hasGenerator: true },
      { id: "eroberung_amerikas", name: "Eroberung Amerikas", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "reformation_glaube",
    name: "Reformation und Glaubensspaltung",
    subtopics: [
      { id: "reformation", name: "Die Reformation", questions: [], hasGenerator: true },
      { id: "bauernkrieg", name: "Der Bauernkrieg", questions: [], hasGenerator: true },
      { id: "gegenreformation", name: "Gegenreformation", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "dreissigjaehriger_krieg_them",
    name: "Der Dreißigjährige Krieg",
    subtopics: [
      { id: "dreissigjaehriger_krieg", name: "Ursachen und Verlauf", questions: [], hasGenerator: true },
      { id: "leiden_bevoelkerung", name: "Leiden der Bevölkerung", questions: [], hasGenerator: true },
      { id: "westfaelischer_friede", name: "Westfälischer Friede", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "absolutismus_them",
    name: "Absolutismus",
    subtopics: [
      { id: "absolutismus_frankreich", name: "Absolutismus in Frankreich", questions: [], hasGenerator: true },
      { id: "versailler_hofleben", name: "Das Leben in Versailles", questions: [], hasGenerator: true },
      { id: "merkantilismus", name: "Merkantilismus", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "aufklaerung_preussen",
    name: "Aufklärung und Preußen",
    subtopics: [
      { id: "aufklaerung", name: "Die Aufklärung", questions: [], hasGenerator: true },
      { id: "preussen_friedrich", name: "Friedrich der Große", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "franzoesische_revolution_them",
    name: "Die Französische Revolution",
    subtopics: [
      { id: "ursachen_franz_rev", name: "Ursachen", questions: [], hasGenerator: true },
      { id: "sturm_bastille", name: "Beginn der Revolution", questions: [], hasGenerator: true },
      { id: "schreckensherrschaft", name: "Schreckensherrschaft", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "napoleon_europa",
    name: "Napoleon und Europa",
    subtopics: [
      { id: "aufstieg_napoleon", name: "Aufstieg Napoleons", questions: [], hasGenerator: true },
      { id: "ende_napoleon", name: "Das Ende Napoleons", questions: [], hasGenerator: true },
      { id: "wiener_kongress", name: "Wiener Kongress", questions: [], hasGenerator: true },
    ]
  },
  {
    id: "industrialisierung_them",
    name: "Industrielle Revolution",
    subtopics: [
      { id: "industrielle_revolution_anfang", name: "Anfänge der Industrie", questions: [], hasGenerator: true },
      { id: "gesellschaftlicher_wandel", name: "Gesellschaftlicher Wandel", questions: [], hasGenerator: true },
    ]
  }
];

export function getG7GeschichteQuestions(subtopicId: string, seed: number = 123): any[] {
  if (g7GeneratorMap && g7GeneratorMap[subtopicId]) {
    return g7GeneratorMap[subtopicId](seed);
  }
  if (G7_Generators_Geschichte[subtopicId]) {
    return G7_Generators_Geschichte[subtopicId](seed);
  }
  return [];
}
