import type { CurriculumTheme } from "./curriculumTypes";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";

let g7GeneratorMap: any = null;

export function setG7GeschichteGeneratorMap(map: any) {
  g7GeneratorMap = map;
}

export const G7_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "aufbruch_neuzeit",
    name: { de: "Aufbruch in eine neue Zeit", en: "Dawn of a New Era", hu: "Újkor hajnala", ro: "Zorii unei noi ere" },
    subtopics: [
      { id: "renaissance", name: { de: "Renaissance", en: "Renaissance", hu: "Reneszánsz", ro: "Renașterea" }, questions: [], hasGenerator: true },
      { id: "humanismus", name: { de: "Humanismus", en: "Humanism", hu: "Humanizmus", ro: "Umanism" }, questions: [], hasGenerator: true },
      { id: "buchdruck", name: { de: "Erfindung des Buchdrucks", en: "Printing Press", hu: "Könyvnyomtatás", ro: "Tiparul" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "entdeckungen",
    name: { de: "Entdeckungen und Eroberungen", en: "Discoveries and Conquests", hu: "Felfedezések és hódítások", ro: "Descoperiri și cuceriri" },
    subtopics: [
      { id: "entdeckungsfahrten", name: { de: "Entdeckungsfahrten", en: "Voyages of Discovery", hu: "Felfedező utak", ro: "Călătoriile de descoperire" }, questions: [], hasGenerator: true },
      { id: "eroberung_amerikas", name: { de: "Eroberung Amerikas", en: "Conquest of America", hu: "Amerika meghódítása", ro: "Cucerirea Americii" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "reformation_glaube",
    name: { de: "Reformation und Glaubensspaltung", en: "Reformation", hu: "Reformáció", ro: "Reforma" },
    subtopics: [
      { id: "reformation", name: { de: "Die Reformation", en: "Reformation", hu: "A reformáció", ro: "Reforma" }, questions: [], hasGenerator: true },
      { id: "bauernkrieg", name: { de: "Der Bauernkrieg", en: "Peasants' War", hu: "Parasztfelkelés", ro: "Războiul țărănesc" }, questions: [], hasGenerator: true },
      { id: "gegenreformation", name: { de: "Gegenreformation", en: "Counter-Reformation", hu: "Ellenreformáció", ro: "Contrareforma" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "dreissigjaehriger_krieg_them",
    name: { de: "Der Dreißigjährige Krieg", en: "Thirty Years' War", hu: "Harmincéves háború", ro: "Războiul de 30 de ani" },
    subtopics: [
      { id: "dreissigjaehriger_krieg", name: { de: "Ursachen und Verlauf", en: "Causes and Course", hu: "Okok és menet", ro: "Cauze și desfășurare" }, questions: [], hasGenerator: true },
      { id: "leiden_bevoelkerung", name: { de: "Leiden der Bevölkerung", en: "Suffering of the People", hu: "A lakosság szenvedése", ro: "Suferința populației" }, questions: [], hasGenerator: true },
      { id: "westfaelischer_friede", name: { de: "Westfälischer Friede", en: "Peace of Westphalia", hu: "Vesztfáliai béke", ro: "Pacea Westfalică" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "absolutismus_them",
    name: { de: "Absolutismus", en: "Absolutism", hu: "Abszolutizmus", ro: "Absolutism" },
    subtopics: [
      { id: "absolutismus_frankreich", name: { de: "Absolutismus in Frankreich", en: "Absolutism in France", hu: "Francia abszolutizmus", ro: "Absolutismul în Franța" }, questions: [], hasGenerator: true },
      { id: "versailler_hofleben", name: { de: "Das Leben in Versailles", en: "Court Life in Versailles", hu: "Élet Versailles-ban", ro: "Viața la Versailles" }, questions: [], hasGenerator: true },
      { id: "merkantilismus", name: { de: "Merkantilismus", en: "Mercantilism", hu: "Merkantilizmus", ro: "Mercantilism" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "aufklaerung_preussen",
    name: { de: "Aufklärung und Preußen", en: "Enlightenment and Prussia", hu: "Felvilágosodás és Poroszország", ro: "Iluminismul și Prusia" },
    subtopics: [
      { id: "aufklaerung", name: { de: "Die Aufklärung", en: "Enlightenment", hu: "A felvilágosodás", ro: "Iluminismul" }, questions: [], hasGenerator: true },
      { id: "preussen_friedrich", name: { de: "Friedrich der Große", en: "Frederick the Great", hu: "Nagy Frigyes", ro: "Frederic cel Mare" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "franzoesische_revolution_them",
    name: { de: "Die Französische Revolution", en: "French Revolution", hu: "Francia forradalom", ro: "Revoluția franceză" },
    subtopics: [
      { id: "ursachen_franz_rev", name: { de: "Ursachen", en: "Causes", hu: "Okok", ro: "Cauze" }, questions: [], hasGenerator: true },
      { id: "sturm_bastille", name: { de: "Beginn der Revolution", en: "Beginning of Revolution", hu: "A forradalom kezdete", ro: "Începutul revoluției" }, questions: [], hasGenerator: true },
      { id: "schreckensherrschaft", name: { de: "Schreckensherrschaft", en: "Reign of Terror", hu: "Jakobinus diktatúra", ro: "Teroarea" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "napoleon_europa",
    name: { de: "Napoleon und Europa", en: "Napoleon and Europe", hu: "Napóleon és Európa", ro: "Napoleon și Europa" },
    subtopics: [
      { id: "aufstieg_napoleon", name: { de: "Aufstieg Napoleons", en: "Rise of Napoleon", hu: "Napóleon felemelkedése", ro: "Ascensiunea lui Napoleon" }, questions: [], hasGenerator: true },
      { id: "ende_napoleon", name: { de: "Das Ende Napoleons", en: "End of Napoleon", hu: "Napóleon bukása", ro: "Căderea lui Napoleon" }, questions: [], hasGenerator: true },
      { id: "wiener_kongress", name: { de: "Wiener Kongress", en: "Congress of Vienna", hu: "Bécsi kongresszus", ro: "Congresul de la Viena" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "industrialisierung_them",
    name: { de: "Industrielle Revolution", en: "Industrial Revolution", hu: "Ipari forradalom", ro: "Revoluția industrială" },
    subtopics: [
      { id: "industrielle_revolution_anfang", name: { de: "Anfänge der Industrie", en: "Beginnings", hu: "Kezdetek", ro: "Începuturi" }, questions: [], hasGenerator: true },
      { id: "gesellschaftlicher_wandel", name: { de: "Gesellschaftlicher Wandel", en: "Social Change", hu: "Társadalmi változás", ro: "Schimbări sociale" }, questions: [], hasGenerator: true },
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
