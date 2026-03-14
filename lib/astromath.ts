// lib/astromath.ts
// AstroMath — G1 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";

// ─── Types ────────────────────────────────────────────────────────────────────

export type GameType = "orbit-quiz" | "star-match" | "gravity-sort" | "black-hole" | "number-duel";
export type Lang = "en" | "hu" | "de" | "ro";

export interface L10n { en: string; hu: string; de: string; ro: string }

export interface MissionDef {
  id: string;     // "m1" | "m2" | "m3"
  gameType: GameType;
  label: L10n;
  icon: string;
}

export interface IslandDef {
  id: string;           // "i1" … "i9"
  name: L10n;
  icon: string;
  color: string;
  sortRange: [number, number]; // for GravitySort number generation
  topicKeys: string[];         // for OrbitQuiz / BlackHole / StarMatch
  missions: MissionDef[];
  svgX: number;
  svgY: number;
}

export interface G1Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

export interface SortRound {
  numbers: number[];   // shuffled
  sorted: number[];    // correct order
}

export interface MatchPair {
  left: string;   // question text
  right: string;  // answer text
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G1_SAVE_KEY = "astromath_g1_v2";

export const CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g1_count", "g1_compare", "g1_tausch", "g1_zahlzerlegung", "g1_ergaenzen", "g1_subpics"],
  test2: ["g1_verdoppeln", "g1_halbieren", "g1_num1120", "g1_place_value20", "add20", "sub20"],
  test3: ["g1_shapes", "g1_spatial", "g1_clock", "g1_coins", "g1_weight", "g1_volume"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────

export const G1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Counting Island", hu: "Számolás sziget", de: "Zählinsel", ro: "Insula numărării" },
    icon: "🔢", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["g1_count", "g1_compare", "g1_pos"],
    missions: [
      { id: "m1", gameType: "orbit-quiz",   icon: "🚀", label: { en: "Number Quiz",    hu: "Számkvíz",        de: "Zahlenquiz",     ro: "Quiz numere"   } },
      { id: "m2", gameType: "number-duel",  icon: "⚔️", label: { en: "Number Duel",    hu: "Szám-párharc",    de: "Zahlen-Duell",   ro: "Duel numere"   } },
      { id: "m3", gameType: "star-match",   icon: "⭐", label: { en: "Star Match",     hu: "Csillagpárosítás", de: "Sternenpaare",   ro: "Perechi stele" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Addition Island", hu: "Összeadás sziget", de: "Additionsinsel", ro: "Insula adunării" },
    icon: "➕", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["g1_tausch", "g1_zahlzerlegung", "add10"],
    missions: [
      { id: "m1", gameType: "orbit-quiz", icon: "🚀", label: { en: "Add Quiz",    hu: "Összeadás kvíz",  de: "Additionsquiz",  ro: "Quiz adunare"  } },
      { id: "m2", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",  hu: "Fekete lyuk",     de: "Schwarzes Loch", ro: "Gaura neagră"  } },
      { id: "m3", gameType: "star-match", icon: "⭐", label: { en: "Star Match",  hu: "Csillagpárosítás", de: "Sternenpaare",  ro: "Perechi stele" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Subtraction Island", hu: "Kivonás sziget", de: "Subtraktionsinsel", ro: "Insula scăderii" },
    icon: "➖", color: "#FF6B6B", sortRange: [1, 10],
    topicKeys: ["sub10", "g1_ergaenzen"],
    missions: [
      { id: "m1", gameType: "orbit-quiz", icon: "🚀", label: { en: "Sub Quiz",    hu: "Kivonás kvíz",    de: "Subtraktionsquiz", ro: "Quiz scădere"  } },
      { id: "m2", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",  hu: "Fekete lyuk",     de: "Schwarzes Loch",   ro: "Gaura neagră"  } },
      { id: "m3", gameType: "star-match", icon: "⭐", label: { en: "Star Match",  hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Double & Half Island", hu: "Dupla & Fele sziget", de: "Verdoppeln & Halbieren", ro: "Dublu & Jumătate" },
    icon: "✌️", color: "#B44DFF", sortRange: [1, 18],
    topicKeys: ["g1_verdoppeln", "g1_halbieren"],
    missions: [
      { id: "m1", gameType: "orbit-quiz", icon: "🚀", label: { en: "Double Quiz",  hu: "Dupla kvíz",     de: "Verdoppeln Quiz", ro: "Quiz dublare"  } },
      { id: "m2", gameType: "star-match", icon: "⭐", label: { en: "Star Match",   hu: "Csillagpárosítás", de: "Sternenpaare", ro: "Perechi stele"   } },
      { id: "m3", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",   hu: "Fekete lyuk",    de: "Schwarzes Loch", ro: "Gaura neagră"   } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Numbers to 20", hu: "Számok 20-ig", de: "Zahlen bis 20", ro: "Numere până la 20" },
    icon: "🔟", color: "#00FF88", sortRange: [11, 20],
    topicKeys: ["g1_num1120", "g1_place_value20", "g1_sequence"],
    missions: [
      { id: "m1", gameType: "orbit-quiz",   icon: "🚀", label: { en: "Numbers Quiz",   hu: "Számkvíz",     de: "Zahlenquiz",       ro: "Quiz numere"    } },
      { id: "m2", gameType: "number-duel",  icon: "⚔️", label: { en: "Number Duel",    hu: "Szám-párharc", de: "Zahlen-Duell",     ro: "Duel numere"    } },
      { id: "m3", gameType: "black-hole",   icon: "🕳️", label: { en: "Black Hole",     hu: "Fekete lyuk",  de: "Schwarzes Loch",   ro: "Gaura neagră"   } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Word Problems", hu: "Szöveges feladatok", de: "Sachaufgaben", ro: "Probleme cu text" },
    icon: "📖", color: "#FFD700", sortRange: [1, 20],
    topicKeys: ["word", "add20", "sub20"],
    missions: [
      { id: "m1", gameType: "orbit-quiz", icon: "🚀", label: { en: "Story Quiz A",  hu: "Szöveges A",    de: "Sachaufgaben A",  ro: "Probleme A"    } },
      { id: "m2", gameType: "orbit-quiz", icon: "🚀", label: { en: "Story Quiz B",  hu: "Szöveges B",    de: "Sachaufgaben B",  ro: "Probleme B"    } },
      { id: "m3", gameType: "star-match", icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare", ro: "Perechi stele" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Shapes Island", hu: "Alakzatok sziget", de: "Formeninsel", ro: "Insula formelor" },
    icon: "🔷", color: "#10B981", sortRange: [0, 6],
    topicKeys: ["g1_shapes", "g1_spatial", "g1_pattern"],
    missions: [
      { id: "m1", gameType: "orbit-quiz", icon: "🚀", label: { en: "Shapes Quiz",   hu: "Alakzat kvíz",  de: "Formenquiz",     ro: "Quiz forme"    } },
      { id: "m2", gameType: "star-match", icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare", ro: "Perechi stele" } },
      { id: "m3", gameType: "gravity-sort", icon: "🌪️", label: { en: "Sort Shapes", hu: "Alakzat rendezés", de: "Formen sortieren", ro: "Sortare forme" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Measurements", hu: "Mérések sziget", de: "Messinsel", ro: "Insula măsurătorilor" },
    icon: "📏", color: "#FF9500", sortRange: [1, 15],
    topicKeys: ["g1_clock", "g1_coins", "g1_weight", "g1_volume", "g1_laenger", "g1_wochentage"],
    missions: [
      { id: "m1", gameType: "orbit-quiz", icon: "🚀", label: { en: "Measure Quiz",  hu: "Mérés kvíz",    de: "Messquiz",       ro: "Quiz măsurare" } },
      { id: "m2", gameType: "star-match", icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare", ro: "Perechi stele" } },
      { id: "m3", gameType: "black-hole", icon: "🕳️", label: { en: "Black Hole",   hu: "Fekete lyuk",   de: "Schwarzes Loch", ro: "Gaura neagră"  } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Data & Patterns", hu: "Adatok & Sorozatok", de: "Daten & Muster", ro: "Date & Tipare" },
    icon: "📊", color: "#E879F9", sortRange: [1, 20],
    topicKeys: ["g1_data", "g1_sequence", "word"],
    missions: [
      { id: "m1", gameType: "orbit-quiz",   icon: "🚀", label: { en: "Data Quiz",    hu: "Adat kvíz",     de: "Datenquiz",       ro: "Quiz date"      } },
      { id: "m2", gameType: "gravity-sort", icon: "🌪️", label: { en: "Sort Numbers", hu: "Számrendezés",  de: "Zahlen sortieren", ro: "Sortează"       } },
      { id: "m3", gameType: "star-match",   icon: "⭐", label: { en: "Star Match",   hu: "Csillagpárosítás", de: "Sternenpaare",  ro: "Perechi stele"  } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG1Progress(): G1Progress {
  try {
    const raw = localStorage.getItem(G1_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G1Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG1Progress(p: G1Progress): void {
  localStorage.setItem(G1_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDone(progress: G1Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: G1Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: G1Progress, islandId: string): boolean {
  const idx = G1_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G1_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlocked(progress: G1Progress, testId: string): boolean {
  return CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: G1Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: G1Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G1Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G1Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  // Check if all missions for this island are done
  const island = G1_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

/** Sum of best stars for all missions on an island (max 9 = 3 missions × 3 stars) */
export function islandTotalStars(progress: G1Progress, islandId: string): number {
  const island = G1_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: G1Progress, testId: string): G1Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── Question generation ───────────────────────────────────────────────────────

// Map app lang → mathCurriculum country code
function langToCC(lang: Lang): string {
  const map: Record<Lang, string> = { hu: "HU", de: "DE", en: "EN", ro: "RO" };
  return map[lang] ?? "EN";
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Only questions with MCQ options are valid for OrbitQuiz / BlackHole / StarMatch
function isMCQQuestion(q: MathQuestion): boolean {
  return Array.isArray(q.options) && q.options.length >= 2;
}

export function generateIslandQuestions(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(1, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestions(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(1, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

// GravitySort: pick 5 distinct random numbers from range, return shuffled + sorted
export function generateSortRound(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: take 5 unique-answer questions and build 10 cards (question ↔ answer)
export function generateMatchPairs(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({
    left: q.question,
    right: String(q.correctAnswer),
  }));
}
