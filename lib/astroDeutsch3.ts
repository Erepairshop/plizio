// lib/astroDeutsch3.ts — AstroDeutsch K3 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K3_SAVE_KEY = "astrodeutsch_k3_v1";

export const K3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "wortarten_k3/plural", "wortarten_k3/wortfamilien_k3",
    "wortarten_k3/verben_k3", "wortarten_k3/trennbare_verben_k3",
  ],
  test2: [
    "wortarten_k3/adjektive_gegenteil", "wortarten_k3/steigerung_k3",
    "satzglieder_k3/subjekt", "satzglieder_k3/praedikat",
    "satzglieder_k3/akkusativ_obj",
  ],
  test3: [
    "satzglieder_k3/zeitformen_komplett_k3", "rechtschreibung_k3/ie_ih",
    "rechtschreibung_k3/doppelkonsonanten", "rechtschreibung_k3/ss_sz",
    "wortschatz_alltag_k3/berufe_k3", "wortschatz_alltag_k3/natur_k3",
    "kleidung/kleidung_k3",
  ],
};

export const K3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Nouns: Plural & Families", hu: "Főnevek: Többes szám & Szócsaládok", de: "Nomen: Plural & Wortfamilien", ro: "Substantive: Plural & Familii" },
    icon: "📚", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["wortarten_k3/plural", "wortarten_k3/wortfamilien_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "plural-family-explorer", icon: "🌳", label: { de: "Plural entdecken",  en: "Discover Plurals",  hu: "Többes szám felfedezés", ro: "Descoperă pluralul" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Blitzrunde", en: "Speed Round", hu: "Villámkör", ro: "Rundă rapidă" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Master Verbs", hu: "Igék mesterfokon", de: "Verben meistern", ro: "Verbe avansate" },
    icon: "⚡", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["wortarten_k3/verben_k3", "wortarten_k3/trennbare_verben_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "separable-verb-explorer", icon: "✂️", label: { de: "Verben entdecken",  en: "Discover Verbs",    hu: "Igék felfedezése",      ro: "Descoperă verbele"  } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adjectives & Comparison", hu: "Melléknevek & Fokozás", de: "Adjektive & Steigerung", ro: "Adjective & Gradare" },
    icon: "🎭", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["wortarten_k3/adjektive_gegenteil", "wortarten_k3/steigerung_k3", "eigenschafte_adjektive/eigenschaften_k3", "synonyme_antonyme/synonyme_antonyme_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "comparison-explorer",     icon: "📊", label: { de: "Steigerung entdecken", en: "Discover Comparison", hu: "Fokozás felfedezése", ro: "Descoperă gradarea" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Subject & Predicate", hu: "Alany & Állítmány", de: "Subjekt & Prädikat", ro: "Subiect & Predicat" },
    icon: "🔍", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["satzglieder_k3/subjekt", "satzglieder_k3/praedikat", "satzglieder_k3/satzbau_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-parts-explorer", icon: "🔎", label: { de: "Satzglieder entdecken", en: "Discover Sentence Parts", hu: "Mondatrészek felfedezése", ro: "Descoperă propoziția" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",          hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Blitzrunde", en: "Speed Round", hu: "Villámkör", ro: "Rundă rapidă" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Objects & Tenses", hu: "Tárgy & Igeidők", de: "Objekte & Zeitformen", ro: "Complemente & Timpuri" },
    icon: "⏳", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["satzglieder_k3/akkusativ_obj", "satzglieder_k3/zeitformen_komplett_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "tense-timeline-explorer", icon: "🕰️", label: { de: "Zeitformen entdecken", en: "Discover Tenses",    hu: "Igeidők felfedezése",   ro: "Descoperă timpurile" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Past Tense & Direct Speech", hu: "Múlt idő & Egyenes beszéd", de: "Vergangenheit & Rede", ro: "Trecut & Vorbire directă" },
    icon: "💬", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["satzglieder_k3/praeteritum_k3", "satzglieder_k3/direkte_rede_k3", "wortschatz_alltag_k3/tagesablauf_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "past-speech-explorer",    icon: "📜", label: { de: "Vergangenheit entdecken", en: "Discover Past Tense", hu: "Múlt idő felfedezése", ro: "Descoperă trecutul" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Blitzrunde", en: "Speed Round", hu: "Villámkör", ro: "Rundă rapidă" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Spelling I", hu: "Helyesírás I", de: "Rechtschreibung I", ro: "Ortografie I" },
    icon: "✍️", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k3/ie_ih", "rechtschreibung_k3/doppelkonsonanten", "rechtschreibung_k3/ss_sz"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spelling-k3-explorer",    icon: "🔤", label: { de: "Schreibung entdecken", en: "Discover Spelling",   hu: "Helyesírás felfedezése", ro: "Descoperă ortografia" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Spelling II", hu: "Helyesírás II", de: "Rechtschreibung II", ro: "Ortografie II" },
    icon: "📌", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["rechtschreibung_k3/dehnung_h_k3", "rechtschreibung_k3/komma_aufzaehlung_k3", "kleidung/kleidung_k3", "wortschatz_alltag_k3/essen_k3", "wortschatz_alltag_k3/zuhause_k3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "punctuation-explorer",    icon: "🔡", label: { de: "Zeichensetzung entdecken", en: "Discover Punctuation", hu: "Írásjelek felfedezése", ro: "Descoperă punctuația" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Blitzrunde", en: "Speed Round", hu: "Villámkör", ro: "Rundă rapidă" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "wortarten_k3/plural", "wortarten_k3/verben_k3", "wortarten_k3/adjektive_gegenteil",
      "satzglieder_k3/subjekt", "rechtschreibung_k3/ie_ih", "satzglieder_k3/zeitformen_komplett_k3",
      "wortschatz_alltag_k3/berufe_k3", "wortschatz_alltag_k3/natur_k3", "wortschatz_alltag_k3/schule_k3",
      "wortschatz_expansion_k3/aktivitaeten_k3", "further_wortschatz/schulalltag_natur_k3",
      "wortschatz_alltag_k3/weg_k3",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",         icon: "🌟", label: { de: "Große Entdeckung",      en: "Big Discovery",    hu: "Nagy felfedezés",       ro: "Marea descoperire"  } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "sentence-scramble", icon: "🔀", label: { de: "Satz-Puzzle", en: "Sentence Scramble", hu: "Mondat keverő", ro: "Amestec propoziții" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK3Progress(): DeutschProgress { return loadDeutschProgress(K3_SAVE_KEY, K3_ISLANDS); }
export function saveK3Progress(p: DeutschProgress): void { saveDeutschProgress(K3_SAVE_KEY, p); }
export function isMissionDoneK3(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK3(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK3(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K3_ISLANDS, islandId); }
export function isCheckpointUnlockedK3(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K3_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK3(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK3(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K3_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK3(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K3_ISLANDS, islandId); }
export function completeTestK3(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK3(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 3, count); }
export function generateCheckpointQuestionsK3(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K3_CHECKPOINT_TOPICS, 3, count); }
