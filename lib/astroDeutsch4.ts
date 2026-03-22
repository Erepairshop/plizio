// lib/astroDeutsch4.ts — AstroDeutsch K4 island definitions & progress
import type { IslandDef, Lang, MathQuestion, DeutschProgress } from "./astroDeutsch";
import {
  loadDeutschProgress, saveDeutschProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateDeutschIslandQuestions, generateDeutschCheckpointQuestions,
} from "./astroDeutsch";

export const K4_SAVE_KEY = "astrodeutsch_k4_v1";

export const K4_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K4_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "kasus/nominativ", "kasus/akkusativ", "kasus/dativ", "kasus/genitiv",
    "zeitformen_k4/praeteritum",
  ],
  test2: [
    "zeitformen_k4/perfekt", "wortarten_k4/pronomen_k4", "wortarten_k4/adjektivendungen_k4",
    "wortarten_k4/steigerung_k4", "wortarten_k4/konjunktionen_k4",
    "satzglieder_k4/subjekt_praedikat_k4", "satzglieder_k4/objekte_k4",
    "nebensatz_k4/wenn_als_k4",
  ],
  test3: [
    "satzarten_k4/aussage_frage_k4", "nebensatz_k4/weil_dass_k4",
    "verben_k4/trennbare_verben_k4", "rechtschreibung_k4/das_dass",
    "rechtschreibung_k4/dehnungs_h", "rechtschreibung_k4/ss_sz_k4",
    "passiv_k4/passiv_k4", "wortschatz_essen_k4/essen_k4",
  ],
};

export const K4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Nominative & Accusative", hu: "Alanyeset & Tárgyeset", de: "Nominativ & Akkusativ", ro: "Nominativ & Acuzativ" },
    icon: "🎯", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["kasus/nominativ", "kasus/akkusativ"],
    missions: [
      { id: "m1", category: "explore",   gameType: "kasus-explorer",  icon: "🔍", label: { de: "Kasus entdecken",   en: "Case Explorer",    hu: "Eset felfedező",    ro: "Explorer cazuri"   } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🌪️", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Blitzrunde", en: "Speed Round", hu: "Villámkör", ro: "Rundă rapidă" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Dative & Genitive", hu: "Részeseset & Birtokos eset", de: "Dativ & Genitiv", ro: "Dativ & Genitiv" },
    icon: "📋", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["kasus/dativ", "kasus/genitiv", "wortarten_k4/praepositionen_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "kasus2-explorer", icon: "🔍", label: { de: "Dativ entdecken",   en: "Dative Explorer",  hu: "Dativ felfedező",   ro: "Explorer Dativ"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Tenses", hu: "Igeidők", de: "Zeitformen", ro: "Timpuri verbale" },
    icon: "⏰", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["zeitformen_k4/praeteritum", "zeitformen_k4/perfekt"],
    missions: [
      { id: "m1", category: "explore",   gameType: "tense-explorer-k4", icon: "🔍", label: { de: "Zeitformen entdecken", en: "Tense Explorer", hu: "Igeidő felfedező", ro: "Explorer timpuri" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Word Classes", hu: "Szófajok", de: "Wortarten", ro: "Clase gramaticale" },
    icon: "🏷️", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["wortarten_k4/pronomen_k4", "wortarten_k4/adjektivendungen_k4", "wortarten_k4/steigerung_k4", "wortarten_k4/zusammengesetzte_nomen_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-class-explorer-k4", icon: "🔍", label: { de: "Wortarten entdecken", en: "Word Class Explorer", hu: "Szófaj felfedező", ro: "Explorer clase" } },
      { id: "m2", category: "build",     gameType: "black-hole",  icon: "🕳️", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Sentence Parts", hu: "Mondatrészek", de: "Satzglieder", ro: "Părți de propoziție" },
    icon: "🔬", color: "#6366F1", sortRange: [1, 10],
    topicKeys: ["satzglieder_k4/subjekt_praedikat_k4", "satzglieder_k4/objekte_k4", "satzglieder_k4/adverbiale_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-part-explorer-k4", icon: "🔍", label: { de: "Satzglieder entdecken", en: "Sentence Part Explorer", hu: "Mondatrész felfedező", ro: "Explorer propoziție" } },
      { id: "m2", category: "build",     gameType: "true-false-blitz",  icon: "⚡", label: { de: "Sterne verbinden",  en: "Star Match",          hu: "Csillag párosítás", ro: "Potrivire stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Sentence Types & Clauses", hu: "Mondattípusok & Mellékmondatok", de: "Satzarten & Nebensätze", ro: "Tipuri & Subordonate" },
    icon: "📖", color: "#EC4899", sortRange: [1, 10],
    topicKeys: [
      "satzarten_k4/aussage_frage_k4", "satzarten_k4/aufforderung_ausruf_k4",
      "nebensatz_k4/weil_dass_k4", "nebensatz_k4/wenn_als_k4", "nebensatz_k4/obwohl_k4", "nebensatz_k4/damit_um_zu_k4",
      "wortarten_k4/konjunktionen_k4",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "clause-explorer", icon: "🔍", label: { de: "Satzarten entdecken", en: "Clause Explorer", hu: "Mondattípus felfedező", ro: "Explorer tipuri" } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🌪️", label: { de: "Sterne verbinden",  en: "Star Match",         hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "deutsch-visual", icon: "📝", label: { de: "Übungsblatt", en: "Worksheet", hu: "Feladatlap", ro: "Fișă de lucru" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Verbs & Future", hu: "Igék & Jövő idő", de: "Verben & Futur", ro: "Verbe & Viitor" },
    icon: "🚀", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["verben_k4/trennbare_verben_k4", "verben_k4/futur_k4", "passiv_k4/passiv_k4", "woertliche_rede_k4/redezeichen_k4"],
    missions: [
      { id: "m1", category: "explore",   gameType: "verb-explorer-k4", icon: "🔍", label: { de: "Verben entdecken",  en: "Verb Explorer",    hu: "Ige felfedező",     ro: "Explorer verbe"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { de: "Speedrunde",        en: "Speed Round",      hu: "Gyors kör",         ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Spelling", hu: "Helyesírás", de: "Rechtschreibung", ro: "Ortografie" },
    icon: "✍️", color: "#A855F7", sortRange: [1, 10],
    topicKeys: [
      "rechtschreibung_k4/das_dass", "rechtschreibung_k4/aeu_eu", "rechtschreibung_k4/komma_aufzaehlung",
      "rechtschreibung_k4/dehnungs_h", "rechtschreibung_k4/doppelkonsonanten_k4",
      "rechtschreibung_k4/ss_sz_k4", "rechtschreibung_k4/gross_klein_k4", "rechtschreibung_k4/silbentrennung_k4",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "spelling-explorer-k4", icon: "🔍", label: { de: "Rechtschreib-Entdecker", en: "Spelling Explorer", hu: "Helyesírás felfedező", ro: "Explorer ortografie" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "kasus/nominativ", "kasus/akkusativ", "kasus/dativ",
      "zeitformen_k4/praeteritum", "zeitformen_k4/perfekt", "rechtschreibung_k4/das_dass",
      "textarbeit_k4/brief_k4", "textarbeit_k4/nacherzaehlung_k4", "textarbeit_k4/bericht_k4",
      "wortschatz_verkehr_k4/verkehrsmittel_k4", "wortschatz_kleidung_k4/kleidung_k4",
      "wortschatz_essen_k4/essen_k4", "wortschatz_reisen_k4/reisen_k4",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer-k4", icon: "🔍", label: { de: "Alles Entdecken",   en: "Review Explorer",  hu: "Összefoglaló felfedező", ro: "Explorer recapitulare" } },
      { id: "m2", category: "build",     gameType: "black-hole",  icon: "🕳️", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "gap-fill", icon: "✏️", label: { de: "Lückentext", en: "Gap Fill", hu: "Hiánypótlás", ro: "Completare goluri" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK4Progress(): DeutschProgress { return loadDeutschProgress(K4_SAVE_KEY, K4_ISLANDS); }
export function saveK4Progress(p: DeutschProgress): void { saveDeutschProgress(K4_SAVE_KEY, p); }
export function isMissionDoneK4(progress: DeutschProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK4(progress: DeutschProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK4(progress: DeutschProgress, islandId: string): boolean { return isIslandUnlocked(progress, K4_ISLANDS, islandId); }
export function isCheckpointUnlockedK4(progress: DeutschProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K4_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK4(progress: DeutschProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK4(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress { return completeMission(progress, K4_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK4(progress: DeutschProgress, islandId: string): number { return islandTotalStars(progress, K4_ISLANDS, islandId); }
export function completeTestK4(progress: DeutschProgress, testId: string): DeutschProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK4(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschIslandQuestions(island, 4, count); }
export function generateCheckpointQuestionsK4(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateDeutschCheckpointQuestions(testId, K4_CHECKPOINT_TOPICS, 4, count); }
