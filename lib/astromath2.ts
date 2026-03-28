// lib/astromath2.ts
// AstroMath — G2 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface G2Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G2_SAVE_KEY = "astromath_g2_v1";

export const G2_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const G2_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g2_zahlen100", "g2_stellenwert", "g2_compare", "g2_add_kopf", "g2_sub_kopf", "g2_add_ohne"],
  test2: ["g2_sub_ohne", "g2_add_mit", "g2_sub_mit", "g2_missing_add", "g2_missing"],
  test3: ["g2_mul_simple", "g2_div_simple", "g2_word_add", "g2_word_sub", "g2_length", "g2_clock"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// Follows Austrian/German Grade 2 curriculum in school order

export const G2_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Numbers to 100", hu: "Számok 100-ig", de: "Zahlenraum 100", ro: "Numere până la 100" },
    icon: "💯", color: "#4ECDC4", sortRange: [1, 100],
    topicKeys: ["g2_zahlen100", "g2_stellenwert", "g2_compare"],
    missions: [
      { id: "m1", category: "explore",   gameType: "place-value-100",  icon: "🔍", label: { en: "Discover Numbers",  hu: "Számok felfedezése",  de: "Zahlen entdecken",     ro: "Descoperă numerele"   } },
      { id: "m2", category: "build",     gameType: "number-duel",  icon: "⚔️", label: { en: "Number Duel",        hu: "Szám-párharc",        de: "Zahlen-Duell",         ro: "Duel numere"          } },
      { id: "m3", category: "challenge", gameType: "star-match",   icon: "⭐", label: { en: "Star Match",          hu: "Csillagpárosítás",    de: "Sternenpaare",         ro: "Perechi stele"        } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Mental Arithmetic", hu: "Fejben számolás", de: "Kopfrechnen", ro: "Calcul mental" },
    icon: "🧠", color: "#00D4FF", sortRange: [10, 100],
    topicKeys: ["g2_add_kopf", "g2_sub_kopf", "g2_seq"],
    missions: [
      { id: "m1", category: "explore",   gameType: "mental-math-explorer",  icon: "🔍", label: { en: "Discover Mental Math", hu: "Fejszámolás felfedezése", de: "Kopfrechnen entdecken", ro: "Descoperă calculul mental" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",   icon: "🚀", label: { en: "Mental Quiz",          hu: "Fejes kvíz",              de: "Kopfrechenquiz",        ro: "Quiz mental"               } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Sort Numbers",          hu: "Számrendezés",            de: "Zahlen sortieren",      ro: "Sortează"                  } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Addition (no carrying)", hu: "Összeadás (átvitel nélkül)", de: "Addition ohne Übertrag", ro: "Adunare fără transport" },
    icon: "➕", color: "#00FF88", sortRange: [1, 99],
    topicKeys: ["g2_add_ohne", "g2_add3", "g2_missing_add"],
    missions: [
      { id: "m1", category: "explore",   gameType: "column-addsub", icon: "🔍", label: { en: "Discover Addition",   hu: "Összeadás felfedezése",  de: "Addition entdecken",    ro: "Descoperă adunarea"   } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { en: "Addition Quiz",       hu: "Összeadás kvíz",         de: "Additionsquiz",         ro: "Quiz adunare"         } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "⭐", label: { en: "Star Match",           hu: "Csillagpárosítás",       de: "Sternenpaare",          ro: "Perechi stele"        } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Subtraction (no borrowing)", hu: "Kivonás (átvitel nélkül)", de: "Subtraktion ohne Übertrag", ro: "Scădere fără împrumut" },
    icon: "➖", color: "#FF6B6B", sortRange: [1, 99],
    topicKeys: ["g2_sub_ohne", "g2_sub_visual", "g2_missing"],
    missions: [
      { id: "m1", category: "explore",   gameType: "column-addsub", icon: "🔍", label: { en: "Discover Subtraction", hu: "Kivonás felfedezése",    de: "Subtraktion entdecken", ro: "Descoperă scăderea"   } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { en: "Subtraction Quiz",    hu: "Kivonás kvíz",           de: "Subtraktionsquiz",      ro: "Quiz scădere"         } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Sort Numbers",          hu: "Számrendezés",           de: "Zahlen sortieren",      ro: "Sortează numerele"    } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Addition (with carrying)", hu: "Összeadás (átvitellel)", de: "Addition mit Übertrag", ro: "Adunare cu transport" },
    icon: "🔢", color: "#B44DFF", sortRange: [10, 99],
    topicKeys: ["g2_add_mit", "g2_add_word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "carry-borrow", icon: "🔍", label: { en: "Discover Carrying",   hu: "Átvitel felfedezése",    de: "Übertrag entdecken",    ro: "Descoperă transportul" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",           hu: "Csillagpárosítás",       de: "Sternenpaare",          ro: "Perechi stele"         } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",           hu: "Fekete lyuk",            de: "Schwarzes Loch",        ro: "Gaura neagră"          } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Subtraction (with borrowing)", hu: "Kivonás (átvitellel)", de: "Subtraktion mit Übertrag", ro: "Scădere cu împrumut" },
    icon: "🔻", color: "#FFD700", sortRange: [10, 99],
    topicKeys: ["g2_sub_mit", "g2_sub_word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "carry-borrow", icon: "🔍", label: { en: "Discover Borrowing",  hu: "Elvétel felfedezése",    de: "Entbündeln entdecken",  ro: "Descoperă împrumutul" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { en: "Word Problems",       hu: "Szöveges feladatok",     de: "Sachaufgaben",          ro: "Probleme text"         } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "⭐", label: { en: "Star Match",           hu: "Csillagpárosítás",       de: "Sternenpaare",          ro: "Perechi stele"         } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Times Tables", hu: "Szorzótábla", de: "Einmaleins", ro: "Tabela înmulțirii" },
    icon: "✖️", color: "#FF9500", sortRange: [1, 50],
    topicKeys: ["g2_mul_simple", "g2_mul_rep", "g2_mul_visual"],
    missions: [
      { id: "m1", category: "explore",   gameType: "multiplication-explorer", icon: "🔍", label: { en: "Discover Multiplication", hu: "Szorzás felfedezése",  de: "Einmaleins entdecken",  ro: "Descoperă înmulțirea" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",               hu: "Csillagpárosítás",     de: "Sternenpaare",          ro: "Perechi stele"        } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Sort Products",             hu: "Szorzatok rendezése",  de: "Produkte sortieren",    ro: "Sortează produsele"   } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Division", hu: "Osztás", de: "Division", ro: "Împărțire" },
    icon: "➗", color: "#10B981", sortRange: [1, 50],
    topicKeys: ["g2_div_share", "g2_div_simple", "g2_div_rel"],
    missions: [
      { id: "m1", category: "explore",   gameType: "division-intro", icon: "🔍", label: { en: "Discover Division",  hu: "Osztás felfedezése",   de: "Division entdecken",  ro: "Descoperă împărțirea" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "🚀", label: { en: "Division Quiz",      hu: "Osztás kvíz",          de: "Divisionsquiz",       ro: "Quiz împărțire"       } },
      { id: "m3", category: "challenge", gameType: "star-match",  icon: "⭐", label: { en: "Star Match",          hu: "Csillagpárosítás",     de: "Sternenpaare",        ro: "Perechi stele"        } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Measurement & Word Problems", hu: "Mérés & Szöveges feladatok", de: "Messen & Sachaufgaben", ro: "Măsurare & Probleme" },
    icon: "📏", color: "#E879F9", sortRange: [1, 100],
    topicKeys: ["g2_word_add", "g2_word_sub", "g2_length", "g2_clock", "g2_weight"],
    missions: [
      { id: "m1", category: "explore",   gameType: "g2-measurement", icon: "🔍", label: { en: "Discover Measurement", hu: "Mérések felfedezése",    de: "Messen entdecken",    ro: "Descoperă măsurarea"  } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",            hu: "Csillagpárosítás",       de: "Sternenpaare",        ro: "Perechi stele"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",            hu: "Fekete lyuk",            de: "Schwarzes Loch",      ro: "Gaura neagră"         } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG2Progress(): G2Progress {
  try {
    const raw = localStorage.getItem(G2_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G2Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG2Progress(p: G2Progress): void {
  localStorage.setItem(G2_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneG2(progress: G2Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneG2(progress: G2Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedG2(progress: G2Progress, islandId: string): boolean {
  const idx = G2_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G2_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedG2(progress: G2Progress, testId: string): boolean {
  return G2_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneG2(progress: G2Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionG2(
  progress: G2Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G2Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G2Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = G2_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsG2(progress: G2Progress, islandId: string): number {
  const island = G2_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestG2(progress: G2Progress, testId: string): G2Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── Question generation ───────────────────────────────────────────────────────

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

function isMCQQuestion(q: MathQuestion): boolean {
  return Array.isArray(q.options) && q.options.length >= 2;
}

export function generateIslandQuestionsG2(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(2, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsG2(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...G2_CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(2, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundG2(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsG2(questions: MathQuestion[]): MatchPair[] {
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
