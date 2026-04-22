import type { CurriculumTheme } from "./curriculumTypes";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

let g8GeneratorMap: any = null;

export function setG8GeschichteGeneratorMap(map: any) {
  g8GeneratorMap = map;
}

export const G8_GESCHICHTE_CURRICULUM: CurriculumTheme[] = [
  {
    id: "imperialismus_them",
    name: { de: "Imperialismus und Erster Weltkrieg", hu: "Imperializmus és első világháború", ro: "Imperialismul și Primul Război Mondial", en: "Imperialism and World War I" },
    subtopics: [
      { id: "imperialismus", name: { de: "Imperialismus", hu: "Imperializmus", ro: "Imperialism", en: "Imperialism" }, questions: [], hasGenerator: true },
      { id: "erster_weltkrieg_beginn", name: { de: "Kriegsausbruch 1914", hu: "Háború kitörése 1914", ro: "Izbucnirea războiului 1914", en: "Outbreak of War 1914" }, questions: [], hasGenerator: true },
      { id: "erster_weltkrieg_verlauf", name: { de: "Verlauf und Ende", hu: "Lefolyás és vég", ro: "Desfășurare și sfârșit", en: "Course and End" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "weimarer_republik_them",
    name: { de: "Die Weimarer Republik", hu: "A weimari köztársaság", ro: "Republica de la Weimar", en: "The Weimar Republic" },
    subtopics: [
      { id: "weimarer_republik", name: { de: "Entstehung und Krisen", hu: "Kialakulás és válságok", ro: "Formare și crize", en: "Formation and Crises" }, questions: [], hasGenerator: true },
      { id: "weltwirtschaftskrise", name: { de: "Weltwirtschaftskrise", hu: "Gazdasági világválság", ro: "Criza economică mondială", en: "Great Depression" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "ns_zeit_them",
    name: { de: "Nationalsozialismus", hu: "Nemzetiszocializmus", ro: "Național-socialism", en: "National Socialism" },
    subtopics: [
      { id: "ns_machtuebernahme", name: { de: "Machtergreifung 1933", hu: "Hatalomátvétel 1933", ro: "Preluarea puterii 1933", en: "Seizure of Power 1933" }, questions: [], hasGenerator: true },
      { id: "ns_ideologie", name: { de: "NS-Ideologie", hu: "NS-ideológia", ro: "Ideologia NS", en: "Nazi Ideology" }, questions: [], hasGenerator: true },
      { id: "ns_propaganda", name: { de: "Propaganda und Alltag", hu: "Propaganda és mindennapok", ro: "Propaganda și viața de zi cu zi", en: "Propaganda and Daily Life" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "holocaust_widerstand_them",
    name: { de: "Holocaust und Widerstand", hu: "Holokauszt és ellenállás", ro: "Holocaust și rezistență", en: "Holocaust and Resistance" },
    subtopics: [
      { id: "holocaust", name: { de: "Judenverfolgung", hu: "Zsidóüldözés", ro: "Persecuția evreilor", en: "Persecution of Jews" }, questions: [], hasGenerator: true },
      { id: "widerstand_ns", name: { de: "Widerstand", hu: "Ellenállás", ro: "Rezistență", en: "Resistance" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "zweiter_weltkrieg_them",
    name: { de: "Der Zweite Weltkrieg", hu: "A második világháború", ro: "Al Doilea Război Mondial", en: "World War II" },
    subtopics: [
      { id: "zweiter_weltkrieg", name: { de: "Kriegsverlauf", hu: "A háború menete", ro: "Desfășurarea războiului", en: "Course of the War" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "nachkrieg_teilung_them",
    name: { de: "Nachkriegszeit und Teilung", hu: "A háború utáni időszak és megosztottság", ro: "Perioada postbelică și divizarea", en: "Post-War Era and Division" },
    subtopics: [
      { id: "nachkriegszeit", name: { de: "Besatzung 1945-49", hu: "Megszállás 1945-49", ro: "Ocupația 1945-49", en: "Occupation 1945-49" }, questions: [], hasGenerator: true },
      { id: "teilung_deutschlands", name: { de: "BRD und DDR", hu: "NSZK és NDK", ro: "RFG și RDG", en: "FRG and GDR" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "kalter_krieg_them",
    name: { de: "Der Kalte Krieg", hu: "A hidegháború", ro: "Războiul Rece", en: "The Cold War" },
    subtopics: [
      { id: "kalter_krieg", name: { de: "Konfrontation", hu: "Konfrontáció", ro: "Confruntare", en: "Confrontation" }, questions: [], hasGenerator: true },
      { id: "berliner_mauer", name: { de: "Die Mauer", hu: "A fal", ro: "Zidul", en: "The Wall" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "wende_einheit_them",
    name: { de: "Mauerfall und Einheit", hu: "A fal leomlása és az egység", ro: "Căderea zidului și unitatea", en: "Fall of the Wall and Unity" },
    subtopics: [
      { id: "wiedervereinigung", name: { de: "Wiedervereinigung", hu: "Újraegyesítés", ro: "Reunificare", en: "Reunification" }, questions: [], hasGenerator: true },
    ]
  },
  {
    id: "europa_heute_them",
    name: { de: "Europa und die Welt heute", hu: "Európa és a világ ma", ro: "Europa și lumea azi", en: "Europe and the World Today" },
    subtopics: [
      { id: "europa_einigung", name: { de: "Europäische Einigung", hu: "Európai egyesülés", ro: "Unificarea europeană", en: "European Unification" }, questions: [], hasGenerator: true },
      { id: "moderne_welt", name: { de: "Moderne Welt", hu: "Modern világ", ro: "Lumea modernă", en: "Modern World" }, questions: [], hasGenerator: true },
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
