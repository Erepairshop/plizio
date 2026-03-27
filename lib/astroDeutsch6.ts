// lib/astroDeutsch6.ts — AstroDeutsch K6 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K6_SAVE_KEY = "astrodeutsch_k6_v1";

export const K6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "grammatik_k6/passiv", "grammatik_k6/konjunktiv_2",
    "grammatik_k6/infinitiv_zu", "grammatik_k6/modalverben_k6",
  ],
  test2: [
    "wortschatz_k6/synonyme", "wortschatz_k6/antonyme", "wortschatz_k6/fremdwoerter",
    "satzstrukturen_k6/relativsatz",
  ],
  test3: [
    "satzstrukturen_k6/kausalsatz", "wortbildung_k6/komposita_k6",
    "wortbildung_k6/derivation_k6", "zeichensetzung_k6/doppelpunkt_k6",
  ],
};

export const K6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Active & Passive", hu: "Cselekvő & Szenvedő szerkezet", de: "Aktiv & Passiv", ro: "Activ & Pasiv" },
    icon: "🔄", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["grammatik_k6/passiv"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Passiv-Quiz",       en: "Passive Quiz",     hu: "Szenvedő kvíz",     ro: "Quiz pasiv"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidá"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Konjunktiv II", hu: "Konjunktív II", de: "Konjunktiv II", ro: "Conjunctiv II" },
    icon: "🌀", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["grammatik_k6/konjunktiv_2", "grammatik_k6/modalverben_k6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Konjunktiv-Quiz",   en: "Subjunctive Quiz", hu: "Kötőmód kvíz",      ro: "Quiz conjunctiv"   } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Infinitive with zu", hu: "Infinitív zu-val", de: "Infinitiv mit zu", ro: "Infinitiv cu zu" },
    icon: "∞", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["grammatik_k6/infinitiv_zu"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Infinitiv-Quiz",    en: "Infinitive Quiz",  hu: "Infinitív kvíz",    ro: "Quiz infinitiv"    } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Übungsblatt",     en: "Worksheet",        hu: "Feladatlap",        ro: "Fișă de lucru"     } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Synonyms & Antonyms", hu: "Szinonimák & Antonimák", de: "Synonyme & Antonyme", ro: "Sinonime & Antonime" },
    icon: "🔀", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["wortschatz_k6/synonyme", "wortschatz_k6/antonyme"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Synonyme-Quiz",     en: "Synonym Quiz",     hu: "Szinonima kvíz",    ro: "Quiz sinonime"     } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Foreign Words", hu: "Idegen szavak", de: "Fremdwörter", ro: "Cuvinte străine" },
    icon: "🌐", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["wortschatz_k6/fremdwoerter"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Fremdwörter-Quiz",  en: "Foreign Words Quiz", hu: "Idegen szó kvíz",  ro: "Quiz cuvinte"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",   hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",         hu: "Fekete lyuk",       ro: "Gaură neagră"    } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Relative & Causal Clauses", hu: "Vonatkozói & Okhatározói mellékmondat", de: "Relativsatz & Kausalsatz", ro: "Relative & Cauzale" },
    icon: "🔗", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["satzstrukturen_k6/relativsatz", "satzstrukturen_k6/kausalsatz"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Nebensatz-Quiz",    en: "Clause Quiz",      hu: "Mellékmondat kvíz", ro: "Quiz subordonate"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "word-blitz", icon: "💬", label: { de: "Übungsblatt",     en: "Worksheet",        hu: "Feladatlap",        ro: "Fișă de lucru"     } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Word Formation", hu: "Szóalkotás", de: "Wortbildung", ro: "Formare de cuvinte" },
    icon: "🧩", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["wortbildung_k6/komposita_k6", "wortbildung_k6/derivation_k6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Wortbildung-Quiz",  en: "Word Formation Quiz", hu: "Szóalkotás kvíz",  ro: "Quiz formare"      } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",   hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",         hu: "Gyors kör",         ro: "Rundă rapidă"    } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Punctuation", hu: "Írásjelek", de: "Zeichensetzung", ro: "Punctuație" },
    icon: "📌", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["zeichensetzung_k6/doppelpunkt_k6", "zeichensetzung_k6/gedankenstrich_k6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Zeichen-Quiz",      en: "Punctuation Quiz", hu: "Írásjel kvíz",      ro: "Quiz punctuație"   } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { de: "Schwarzes Loch",   en: "Black Hole",       hu: "Fekete lyuk",       ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "grammatik_k6/passiv", "grammatik_k6/konjunktiv_2",
      "wortschatz_k6/synonyme", "satzstrukturen_k6/relativsatz",
      "wortbildung_k6/komposita_k6", "zeichensetzung_k6/doppelpunkt_k6",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "deutsch-explore",  icon: "🪐", label: { de: "Final-Quiz",        en: "Final Quiz",       hu: "Záró kvíz",         ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { de: "Schwerkraft-Sortierung", en: "Gravity Sort",    hu: "Gravitációs rendezés", ro: "Sortare gravitaționale" } },
      { id: "m3", category: "challenge", gameType: "word-blitz",  icon: "💬", label: { de: "Wort-Blitz", en: "Word Blitz", hu: "Szóvillám", ro: "Blitz cuvinte" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK6Progress(): DeutschProgress { return loadDeutschProgress(K6_SAVE_KEY, K6_ISLANDS); }
export function saveK6Progress(p: DeutschProgress): void { saveDeutschProgress(K6_SAVE_KEY, p); }
export function isMissionDoneK6(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK6(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK6(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K6_ISLANDS, islandId); }
export function isCheckpointUnlockedK6(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K6_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK6(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK6(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K6_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK6(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K6_ISLANDS, islandId); }
export function completeTestK6(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK6(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 6, count); }
export function generateCheckpointQuestionsK6(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K6_CHECKPOINT_TOPICS, 6, count); }
