// lib/astroDeutsch7.ts — AstroDeutsch K7 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K7_SAVE_KEY = "astrodeutsch_k7_v1";

export const K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "indirekte_rede/konjunktiv_1", "indirekte_rede/aussagen_umf",
    "passivformen_k7/werden_passiv", "passivformen_k7/sein_passiv",
  ],
  test2: [
    "passivformen_k7/passiv_modal", "stilmittel/metapher_vergleich",
    "nebensatztypen_k7/kausalsatz_k7", "nebensatztypen_k7/konditionalsatz_k7",
  ],
  test3: [
    "nebensatztypen_k7/konzessivsatz_k7", "nebensatztypen_k7/finalsatz_k7",
    "nebensatztypen_k7/temporalsatz_k7", "infinitivkonstruktionen_k7/um_zu_k7",
  ],
};

export const K7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Konjunktiv I", hu: "Konjunktív I", de: "Konjunktiv I", ro: "Conjunctiv I" },
    icon: "💭", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["indirekte_rede/konjunktiv_1", "indirekte_rede/aussagen_umf"],
    missions: [
      { id: "m1", category: "explore",   gameType: "speech-transform-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",         hu: "Csillag párosítás", ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",        hu: "Gyors kör",         ro: "Rundă rapidă"     } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Werden-Passive", hu: "werden-szenvedő", de: "Werden-Passiv", ro: "Pasiv cu werden" },
    icon: "🔧", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["passivformen_k7/werden_passiv", "passivformen_k7/sein_passiv"],
    missions: [
      { id: "m1", category: "explore",   gameType: "voice-transform-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Passive with Modal Verbs", hu: "Szenvedő + Módbeli segédige", de: "Passiv + Modalverb", ro: "Pasiv cu modal" },
    icon: "⚙️", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["passivformen_k7/passiv_modal"],
    missions: [
      { id: "m1", category: "explore",   gameType: "passive-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",         hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",        hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Figures of Speech", hu: "Stíluseszközök", de: "Stilmittel", ro: "Figuri de stil" },
    icon: "🎭", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["stilmittel/metapher_vergleich", "stilmittel/alliteration_personifikation"],
    missions: [
      { id: "m1", category: "explore",   gameType: "style-device-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Causal & Conditional", hu: "Ok- & Feltételes mellékmondat", de: "Kausal- & Konditionalsatz", ro: "Cauzale & Condiționale" },
    icon: "🔀", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["nebensatztypen_k7/kausalsatz_k7", "nebensatztypen_k7/konditionalsatz_k7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "clause-connector-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Concessive & Final", hu: "Megengedő & Célhatározói mellékmondat", de: "Konzessiv- & Finalsatz", ro: "Concesive & Finale" },
    icon: "🎯", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["nebensatztypen_k7/konzessivsatz_k7", "nebensatztypen_k7/finalsatz_k7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "clause-connector-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Temporal Clauses", hu: "Időhatározói mellékmondatok", de: "Temporalsatz", ro: "Propoziții temporale" },
    icon: "⏱️", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["nebensatztypen_k7/temporalsatz_k7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "clause-connector-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Infinitive Constructions", hu: "Infinitív szerkezetek", de: "Infinitivkonstruktionen", ro: "Construcții infinitivale" },
    icon: "🌿", color: "#A855F7", sortRange: [1, 10],
    topicKeys: ["infinitivkonstruktionen_k7/um_zu_k7", "infinitivkonstruktionen_k7/statt_ohne_zu_k7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "infinitiv-builder-explorer",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
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
      "indirekte_rede/konjunktiv_1", "passivformen_k7/werden_passiv",
      "stilmittel/metapher_vergleich", "nebensatztypen_k7/kausalsatz_k7",
      "nebensatztypen_k7/temporalsatz_k7", "infinitivkonstruktionen_k7/um_zu_k7",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer-k7",  icon: "🪐", label: { de: "Entdecken", en: "Explore", hu: "Felfedezés", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK7Progress(): DeutschProgress { return loadDeutschProgress(K7_SAVE_KEY, K7_ISLANDS); }
export function saveK7Progress(p: DeutschProgress): void { saveDeutschProgress(K7_SAVE_KEY, p); }
export function isMissionDoneK7(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK7(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK7(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K7_ISLANDS, islandId); }
export function isCheckpointUnlockedK7(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K7_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK7(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK7(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K7_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK7(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K7_ISLANDS, islandId); }
export function completeTestK7(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK7(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 7, count); }
export function generateCheckpointQuestionsK7(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K7_CHECKPOINT_TOPICS, 7, count); }
