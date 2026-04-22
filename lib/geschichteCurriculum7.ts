import type { CurriculumTheme } from "./curriculumTypes";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";

let g7GeneratorMap: any = null;

export function setG7GeschichteGeneratorMap(map: any) {
  g7GeneratorMap = map;
}

export const G7_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "aufbruch_neuzeit",
    name: { de: "Aufbruch in eine neue Zeit", hu: "Új korszak kezdete", ro: "Începutul unei noi ere", en: "Dawn of a New Era" },
    subtopics: [
      { id: "renaissance", name: { de: "Renaissance", hu: "Reneszánsz", ro: "Renașterea", en: "Renaissance" }, questions: [], hasGenerator: true },
      { id: "humanismus", name: { de: "Humanismus", hu: "Humanizmus", ro: "Umanism", en: "Humanism" }, questions: [], hasGenerator: true },
      { id: "buchdruck", name: { de: "Erfindung des Buchdrucks", hu: "A könyvnyomtatás feltalálása", ro: "Invenția tiparului", en: "Invention of the Printing Press" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "entdeckungen",
    name: { de: "Entdeckungen und Eroberungen", hu: "Felfedezések és hódítások", ro: "Descoperiri și cuceriri", en: "Discoveries and Conquests" },
    subtopics: [
      { id: "entdeckungsfahrten", name: { de: "Entdeckungsfahrten", hu: "Felfedezőutak", ro: "Călătorii de descoperire", en: "Voyages of Discovery" }, questions: [], hasGenerator: true },
      { id: "eroberung_amerikas", name: { de: "Eroberung Amerikas", hu: "Amerika meghódítása", ro: "Cucerirea Americii", en: "Conquest of America" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "reformation_glaube",
    name: { de: "Reformation und Glaubensspaltung", hu: "Reformáció és hitvita", ro: "Reforma și divizarea religioasă", en: "Reformation and Religious Schism" },
    subtopics: [
      { id: "reformation", name: { de: "Die Reformation", hu: "A reformáció", ro: "Reforma", en: "The Reformation" }, questions: [], hasGenerator: true },
      { id: "bauernkrieg", name: { de: "Der Bauernkrieg", hu: "A parasztháború", ro: "Războiul țărănesc", en: "The Peasants' War" }, questions: [], hasGenerator: true },
      { id: "gegenreformation", name: { de: "Gegenreformation", hu: "Ellenreformáció", ro: "Contrareforma", en: "Counter-Reformation" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "dreissigjaehriger_krieg_them",
    name: { de: "Der Dreißigjährige Krieg", hu: "A harmincéves háború", ro: "Războiul de Treizeci de Ani", en: "The Thirty Years' War" },
    subtopics: [
      { id: "dreissigjaehriger_krieg", name: { de: "Ursachen und Verlauf", hu: "Okok és lefolyás", ro: "Cauze și desfășurare", en: "Causes and Course" }, questions: [], hasGenerator: true },
      { id: "leiden_bevoelkerung", name: { de: "Leiden der Bevölkerung", hu: "A lakosság szenvedései", ro: "Suferințele populației", en: "Suffering of the Population" }, questions: [], hasGenerator: true },
      { id: "westfaelischer_friede", name: { de: "Westfälischer Friede", hu: "Vesztfáliai béke", ro: "Pacea Westfalică", en: "Peace of Westphalia" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "absolutismus_them",
    name: { de: "Absolutismus", hu: "Abszolutizmus", ro: "Absolutism", en: "Absolutism" },
    subtopics: [
      { id: "absolutismus_frankreich", name: { de: "Absolutismus in Frankreich", hu: "Abszolutizmus Franciaországban", ro: "Absolutismul în Franța", en: "Absolutism in France" }, questions: [], hasGenerator: true },
      { id: "versailler_hofleben", name: { de: "Das Leben in Versailles", hu: "Élet Versailles-ban", ro: "Viața la Versailles", en: "Life at Versailles" }, questions: [], hasGenerator: true },
      { id: "merkantilismus", name: { de: "Merkantilismus", hu: "Merkantilizmus", ro: "Mercantilism", en: "Mercantilism" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "aufklaerung_preussen",
    name: { de: "Aufklärung und Preußen", hu: "Felvilágosodás és Poroszország", ro: "Iluminismul și Prusia", en: "Enlightenment and Prussia" },
    subtopics: [
      { id: "aufklaerung", name: { de: "Die Aufklärung", hu: "A felvilágosodás", ro: "Iluminismul", en: "The Enlightenment" }, questions: [], hasGenerator: true },
      { id: "preussen_friedrich", name: { de: "Friedrich der Große", hu: "Nagy Frigyes", ro: "Frederic cel Mare", en: "Frederick the Great" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "franzoesische_revolution_them",
    name: { de: "Die Französische Revolution", hu: "A francia forradalom", ro: "Revoluția Franceză", en: "The French Revolution" },
    subtopics: [
      { id: "ursachen_franz_rev", name: { de: "Ursachen", hu: "Okok", ro: "Cauze", en: "Causes" }, questions: [], hasGenerator: true },
      { id: "sturm_bastille", name: { de: "Beginn der Revolution", hu: "A forradalom kezdete", ro: "Începutul Revoluției", en: "Beginning of the Revolution" }, questions: [], hasGenerator: true },
      { id: "schreckensherrschaft", name: { de: "Schreckensherrschaft", hu: "Rémuralom", ro: "Teroarea", en: "Reign of Terror" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "napoleon_europa",
    name: { de: "Napoleon und Europa", hu: "Napóleon és Európa", ro: "Napoleon și Europa", en: "Napoleon and Europe" },
    subtopics: [
      { id: "aufstieg_napoleon", name: { de: "Aufstieg Napoleons", hu: "Napóleon felemelkedése", ro: "Ascensiunea lui Napoleon", en: "Rise of Napoleon" }, questions: [], hasGenerator: true },
      { id: "ende_napoleon", name: { de: "Das Ende Napoleons", hu: "Napóleon bukása", ro: "Sfârșitul lui Napoleon", en: "The End of Napoleon" }, questions: [], hasGenerator: true },
      { id: "wiener_kongress", name: { de: "Wiener Kongress", hu: "Bécsi kongresszus", ro: "Congresul de la Viena", en: "Congress of Vienna" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "industrialisierung_them",
    name: { de: "Industrielle Revolution", hu: "Ipari forradalom", ro: "Revoluția Industrială", en: "Industrial Revolution" },
    subtopics: [
      { id: "industrielle_revolution_anfang", name: { de: "Anfänge der Industrie", hu: "Az ipar kezdetei", ro: "Începuturile industriei", en: "Beginnings of Industry" }, questions: [], hasGenerator: true },
      { id: "gesellschaftlicher_wandel", name: { de: "Gesellschaftlicher Wandel", hu: "Társadalmi változás", ro: "Schimbare socială", en: "Social Change" }, questions: [], hasGenerator: true },
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
