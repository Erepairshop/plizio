// lib/astroDeutsch8.ts — AstroDeutsch K8 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K8_SAVE_KEY = "astrodeutsch_k8_v1";

export const K8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "konjunktiv_k8/konjunktiv_i_k8", "konjunktiv_k8/konjunktiv_ii_k8",
    "passiv_k8/passiv_bildung_k8", "passiv_k8/passiversatz_k8",
    "komplexe_grammatik_k8/partizipial",
  ],
  test2: [
    "komplexe_grammatik_k8/nebensatztypen", "stilmittel_k8/stilmittel_erkennung_k8",
    "stilmittel_k8/stilwirkung_k8", "textsorten_k8/eroerterung",
  ],
  test3: [
    "literatur_k8/erzaehlperspektiven", "literatur_k8/epochen",
    "nominalstil_k8/nominalstil_umformung_k8", "sprachebenen_k8/register_k8",
    "charakterisierung_k8/charakterisierung_methoden_k8",
  ],
};

export const K8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Konjunktiv I & II", hu: "Konjunktív I & II", de: "Konjunktiv I & II", ro: "Conjunctiv I & II" },
    icon: "💬", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["konjunktiv_k8/konjunktiv_i_k8", "konjunktiv_k8/konjunktiv_ii_k8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🔄", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",         en: "Speed Round",         hu: "Gyors kör",          ro: "Rundă rapidă"       } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Passive & Alternatives", hu: "Szenvedő & Alternatívák", de: "Passiv & Passiversatz", ro: "Pasiv & Alternative" },
    icon: "↔️", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["passiv_k8/passiv_bildung_k8", "passiv_k8/passiversatz_k8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🔄", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "speed-round",  icon: "⚡", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { de: "Schwarzes Loch",    en: "Black Hole",          hu: "Fekete lyuk",        ro: "Gaură neagră"       } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Participle & Clauses", hu: "Melléknévi igenév & Mellékmondatok", de: "Partizipien & Nebensätze", ro: "Participii & Subordonate" },
    icon: "🔗", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["komplexe_grammatik_k8/partizipial", "komplexe_grammatik_k8/nebensatztypen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🔗", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { de: "Übungsblatt",      en: "Worksheet",           hu: "Feladatlap",         ro: "Fișă de lucru"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Stylistic Devices", hu: "Stíluseszközök", de: "Stilmittel", ro: "Figuri de stil" },
    icon: "🎭", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["stilmittel_k8/stilmittel_erkennung_k8", "stilmittel_k8/stilwirkung_k8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🎭", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",         en: "Speed Round",         hu: "Gyors kör",          ro: "Rundă rapidă"       } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Text Types", hu: "Szövegtípusok", de: "Textsorten", ro: "Tipuri de text" },
    icon: "📝", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["textsorten_k8/eroerterung", "textsorten_k8/bericht_erzaehlung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "📝", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { de: "Schwarzes Loch",    en: "Black Hole",          hu: "Fekete lyuk",        ro: "Gaură neagră"       } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Literature & Epochs", hu: "Irodalom & Korszakok", de: "Literatur & Epochen", ro: "Literatură & Epoci" },
    icon: "📚", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["literatur_k8/erzaehlperspektiven", "literatur_k8/epochen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "📚", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "black-hole",  icon: "🕳️", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { de: "Übungsblatt",      en: "Worksheet",           hu: "Feladatlap",         ro: "Fișă de lucru"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Nominal Style & Registers", hu: "Névszói stílus & Regiszterek", de: "Nominalstil & Sprachebenen", ro: "Stil nominal & Registre" },
    icon: "📊", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["nominalstil_k8/nominalstil_umformung_k8", "sprachebenen_k8/register_k8", "sprachebenen_k8/fachsprache_k8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "📊", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",         en: "Speed Round",         hu: "Gyors kör",          ro: "Rundă rapidă"       } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Characterization & Summary", hu: "Jellemzés & Tartalmi összefoglaló", de: "Charakterisierung & Inhaltsangabe", ro: "Caracterizare & Rezumat" },
    icon: "🧑‍🎓", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["charakterisierung_k8/charakterisierung_methoden_k8", "inhaltsangabe_k8/inhaltsangabe_grundlagen_k8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🧑‍🎓", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "speed-round",  icon: "⚡", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { de: "Schwarzes Loch",    en: "Black Hole",          hu: "Fekete lyuk",        ro: "Gaură neagră"       } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Final", hu: "Nagy Döntő", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#E879F9", sortRange: [1, 10],
    topicKeys: [
      "konjunktiv_k8/konjunktiv_i_k8", "passiv_k8/passiv_bildung_k8",
      "stilmittel_k8/stilmittel_erkennung_k8", "komplexe_grammatik_k8/partizipial",
      "literatur_k8/epochen", "sprachebenen_k8/register_k8",
      "zeichensetzung_k8/semikolon_k8",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🌟", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { de: "Planetenquiz",       en: "Orbit Quiz",          hu: "Bolygó kvíz",        ro: "Quiz planetar"      } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "⭐", label: { de: "Stern-Paare",       en: "Star Match",          hu: "Csillag párosítás",  ro: "Potrivire stele"    } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK8Progress(): DeutschProgress { return loadDeutschProgress(K8_SAVE_KEY, K8_ISLANDS); }
export function saveK8Progress(p: DeutschProgress): void { saveDeutschProgress(K8_SAVE_KEY, p); }
export function isMissionDoneK8(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK8(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK8(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K8_ISLANDS, islandId); }
export function isCheckpointUnlockedK8(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K8_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK8(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK8(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K8_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK8(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K8_ISLANDS, islandId); }
export function completeTestK8(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK8(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 8, count); }
export function generateCheckpointQuestionsK8(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K8_CHECKPOINT_TOPICS, 8, count); }
