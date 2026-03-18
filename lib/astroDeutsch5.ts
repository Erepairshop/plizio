// lib/astroDeutsch5.ts — AstroDeutsch K5 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K5_SAVE_KEY = "astrodeutsch_k5_v1";

export const K5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "wortarten_k5/steigerung", "wortarten_k5/pronomen",
    "wortarten_k5/relativpronomen", "wortarten_k5/praepositionen_k5",
  ],
  test2: [
    "wortarten_k5/konjunktionen_k5", "satzglieder_k5/adverbiale",
    "zeichensetzung_k5/komma_nebensatz", "zeichensetzung_k5/direkte_rede",
  ],
  test3: [
    "zeitformen_k5/partizip_2_k5", "zeitformen_k5/plusquamperfekt_k5",
    "passiv_k5/vorgangspassiv_k5", "wortschatz_k5/synonyme_k5",
  ],
};

export const K5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Adjectives & Comparison", hu: "Melléknevek & Fokozás", de: "Adjektive & Steigerung", ro: "Adjective & Comparație" },
    icon: "📊", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["wortarten_k5/steigerung", "wortarten_k5/adverbien_k5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "adjective-comparison-explorer",  icon: "🪐", label: { de: "Steigerung-Quiz",   en: "Comparison Quiz",  hu: "Fokozás kvíz",      ro: "Quiz comparație"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Pronouns", hu: "Névmások", de: "Pronomen", ro: "Pronume" },
    icon: "👤", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["wortarten_k5/pronomen", "wortarten_k5/relativpronomen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pronoun-explorer-k5",  icon: "🪐", label: { de: "Pronomen-Quiz",     en: "Pronoun Quiz",     hu: "Névmás kvíz",       ro: "Quiz pronume"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Prepositions & Conjunctions", hu: "Elöljárók & Kötőszók", de: "Präpositionen & Konjunktionen", ro: "Prepoziții & Conjuncții" },
    icon: "🔗", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["wortarten_k5/praepositionen_k5", "wortarten_k5/konjunktionen_k5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "preposition-case-explorer",  icon: "🪐", label: { de: "Präpositions-Quiz", en: "Preposition Quiz", hu: "Elöljáró kvíz",     ro: "Quiz prepoziții"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Sentence Parts", hu: "Mondatrészek", de: "Satzglieder", ro: "Părți de propoziție" },
    icon: "🔬", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["satzglieder_k5/adverbiale", "satzglieder_k5/wortstellung", "satzglieder_k5/adjektivdeklination_k5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-analysis-explorer",  icon: "🪐", label: { de: "Satzglieder-Quiz",  en: "Sentence Parts Quiz", hu: "Mondatrész kvíz",  ro: "Quiz propoziție"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",          hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",         hu: "Gyors kör",         ro: "Rundă rapidă"    } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Punctuation", hu: "Írásjelek", de: "Zeichensetzung", ro: "Punctuație" },
    icon: "📌", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["zeichensetzung_k5/komma_nebensatz", "zeichensetzung_k5/direkte_rede"],
    missions: [
      { id: "m1", category: "explore",   gameType: "punctuation-explorer-k5",  icon: "🪐", label: { de: "Zeichen-Quiz",      en: "Punctuation Quiz", hu: "Írásjel kvíz",      ro: "Quiz punctuație"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Participle & Past Perfect", hu: "Melléknévi igenév & Régmúlt", de: "Partizip & Plusquamperfekt", ro: "Participiu & Mai-mult-ca-perfect" },
    icon: "📜", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["zeitformen_k5/partizip_1_k5", "zeitformen_k5/partizip_2_k5", "zeitformen_k5/plusquamperfekt_k5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "participle-explorer",  icon: "🪐", label: { de: "Partizip-Quiz",     en: "Participle Quiz",  hu: "Igenév kvíz",       ro: "Quiz participiu"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Passive Voice", hu: "Szenvedő szerkezet", de: "Passiv", ro: "Diateza pasivă" },
    icon: "🔄", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["passiv_k5/vorgangspassiv_k5", "passiv_k5/passiv_praeteritum_k5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "passive-explorer",  icon: "🪐", label: { de: "Passiv-Quiz",       en: "Passive Quiz",     hu: "Szenvedő kvíz",     ro: "Quiz pasiv"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Spelling & Vocabulary", hu: "Helyesírás & Szókincs", de: "Rechtschreibung & Wortschatz", ro: "Ortografie & Vocabular" },
    icon: "📚", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k5/ss_beta_k5", "rechtschreibung_k5/grossklein_k5", "wortschatz_k5/synonyme_k5", "wortschatz_k5/fremdwoerter_k5"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spelling-word-explorer",  icon: "🪐", label: { de: "Rechtschreib-Quiz", en: "Spelling Quiz",    hu: "Helyesírás kvíz",   ro: "Quiz ortografie"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "wortarten_k5/steigerung", "wortarten_k5/pronomen", "satzglieder_k5/adverbiale",
      "zeitformen_k5/partizip_2_k5", "passiv_k5/vorgangspassiv_k5", "wortschatz_k5/synonyme_k5",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer-k5",  icon: "🪐", label: { de: "Final-Quiz",        en: "Final Quiz",       hu: "Záró kvíz",         ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK5Progress(): DeutschProgress { return loadDeutschProgress(K5_SAVE_KEY, K5_ISLANDS); }
export function saveK5Progress(p: DeutschProgress): void { saveDeutschProgress(K5_SAVE_KEY, p); }
export function isMissionDoneK5(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK5(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK5(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K5_ISLANDS, islandId); }
export function isCheckpointUnlockedK5(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K5_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK5(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK5(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K5_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK5(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K5_ISLANDS, islandId); }
export function completeTestK5(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK5(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 5, count); }
export function generateCheckpointQuestionsK5(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K5_CHECKPOINT_TOPICS, 5, count); }
