// lib/astromath7.ts
// AstroMath — G7 island system definitions, progress management, question helpers
// Verdis planet — emerald theme (#10B981)

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface G7Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G7_SAVE_KEY = "astromath_g7_v1";

export const G7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const G7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g7_pow_sq", "g7_pow_cube", "g7_alg_eval", "g7_alg_collect", "g7_eq_1step", "g7_eq_2step"],
  test2: ["g7_ineq_gt", "g7_ineq_lt", "g7_tri_sum", "g7_tri_iso", "g7_pyth_hyp", "g7_pyth_leg"],
  test3: ["g7_geo_circle", "g7_geo_circA", "g7_geo_surf", "g7_stat_median", "g7_stat_mode", "g7_stat_range"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// Follows Austrian/German Grade 7 curriculum in school order

export const G7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Powers & Exponents", hu: "Hatványok", de: "Potenzen", ro: "Puteri" },
    icon: "⚡", color: "#6366F1", sortRange: [1, 100],
    topicKeys: ["g7_pow_sq", "g7_pow_cube", "g7_pow_ten", "g7_pow_expr"],
    missions: [
      { id: "m1", category: "explore",   gameType: "power-explorer",  icon: "🔍", label: { en: "Discover Powers",     hu: "Hatványok felfedezése",  de: "Potenzen entdecken",       ro: "Descoperă puterile"     } },
      { id: "m2", category: "build",     gameType: "gravity-sort",    icon: "🌪️", label: { en: "Sort Powers",          hu: "Hatványok rendezése",    de: "Potenzen sortieren",       ro: "Sortează puterile"      } },
      { id: "m3", category: "challenge", gameType: "speed-round",     icon: "⚡", label: { en: "Speed Round",          hu: "Gyors kör",              de: "Speedrunde",               ro: "Rundă rapidă"           } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Algebraic Expressions", hu: "Algebrai kifejezések", de: "Algebraische Terme", ro: "Expresii algebrice" },
    icon: "🔤", color: "#3B82F6", sortRange: [1, 50],
    topicKeys: ["g7_alg_eval", "g7_alg_collect", "g7_alg_expand", "g7_alg_mul"],
    missions: [
      { id: "m1", category: "explore",   gameType: "algebra-explorer",  icon: "🔍", label: { en: "Explore Algebra",     hu: "Algebra felfedezése",     de: "Algebra entdecken",        ro: "Descoperă algebra"      } },
      { id: "m2", category: "build",     gameType: "equation-drill",    icon: "🧮", label: { en: "Equation Drill",      hu: "Egyenlet drill",          de: "Gleichungs-Drill",         ro: "Ecuații"                } },
      { id: "m3", category: "challenge", gameType: "star-match",        icon: "⭐", label: { en: "Star Match",           hu: "Csillagpárosítás",        de: "Sternenpaare",             ro: "Perechi stele"          } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Equations", hu: "Egyenletek", de: "Gleichungen", ro: "Ecuații" },
    icon: "⚖️", color: "#10B981", sortRange: [1, 30],
    topicKeys: ["g7_eq_1step", "g7_eq_2step", "g7_eq_frac", "g7_eq_word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "equation-explorer", icon: "🔍", label: { en: "Discover Equations",  hu: "Egyenletek felfedezése",  de: "Gleichungen entdecken",    ro: "Descoperă ecuațiile"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",        icon: "🚀", label: { en: "Equation Quiz",       hu: "Egyenlet kvíz",           de: "Gleichungsquiz",           ro: "Quiz ecuații"           } },
      { id: "m3", category: "challenge", gameType: "speed-round",       icon: "⚡", label: { en: "Speed Round",          hu: "Gyors kör",               de: "Speedrunde",               ro: "Rundă rapidă"           } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Inequalities", hu: "Egyenlőtlenségek", de: "Ungleichungen", ro: "Inegalități" },
    icon: "📊", color: "#EC4899", sortRange: [-20, 20],
    topicKeys: ["g7_ineq_gt", "g7_ineq_lt", "g7_ineq_word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "inequality-explorer", icon: "🔍", label: { en: "Discover Inequalities", hu: "Egyenlőtlenségek felfedezése", de: "Ungleichungen entdecken", ro: "Descoperă inegalitățile" } },
      { id: "m2", category: "build",     gameType: "true-false-blitz",    icon: "🎯", label: { en: "True or False?",        hu: "Igaz vagy Hamis?",            de: "Wahr oder Falsch?",       ro: "Adevărat sau Fals?"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",          icon: "🕳️", label: { en: "Black Hole",            hu: "Fekete lyuk",                 de: "Schwarzes Loch",          ro: "Gaura neagră"            } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Triangles", hu: "Háromszögek", de: "Dreiecke", ro: "Triunghiuri" },
    icon: "📐", color: "#F59E0B", sortRange: [30, 120],
    topicKeys: ["g7_tri_sum", "g7_tri_equi", "g7_tri_iso", "g7_tri_ext"],
    missions: [
      { id: "m1", category: "explore",   gameType: "triangle-explorer", icon: "🔍", label: { en: "Discover Triangles",  hu: "Háromszögek felfedezése", de: "Dreiecke entdecken",       ro: "Descoperă triunghiurile" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",        icon: "🚀", label: { en: "Triangle Quiz",       hu: "Háromszög kvíz",          de: "Dreieckequiz",             ro: "Quiz triunghiuri"        } },
      { id: "m3", category: "challenge", gameType: "star-match",        icon: "⭐", label: { en: "Star Match",           hu: "Csillagpárosítás",        de: "Sternenpaare",             ro: "Perechi stele"           } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Pythagorean Theorem", hu: "Pitagorasz-tétel", de: "Satz des Pythagoras", ro: "Teorema lui Pitagora" },
    icon: "📏", color: "#8B5CF6", sortRange: [1, 50],
    topicKeys: ["g7_pyth_hyp", "g7_pyth_leg", "g7_pyth_mixed", "g7_pyth_word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pythagoras-explorer", icon: "🔍", label: { en: "Discover Pythagoras",   hu: "Pitagorasz felfedezése",   de: "Pythagoras entdecken",      ro: "Descoperă Pitagora"      } },
      { id: "m2", category: "build",     gameType: "equation-drill",      icon: "🧮", label: { en: "Equation Drill",        hu: "Egyenlet drill",           de: "Gleichungs-Drill",          ro: "Ecuații"                 } },
      { id: "m3", category: "challenge", gameType: "speed-round",         icon: "⚡", label: { en: "Speed Round",            hu: "Gyors kör",                de: "Speedrunde",                ro: "Rundă rapidă"            } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Circle Geometry", hu: "Kör geometria", de: "Kreisgeometrie", ro: "Geometria cercului" },
    icon: "⭕", color: "#14B8A6", sortRange: [2, 30],
    topicKeys: ["g7_geo_circle", "g7_geo_circA", "g7_geo_surf"],
    missions: [
      { id: "m1", category: "explore",   gameType: "circle-explorer", icon: "🔍", label: { en: "Discover Circles",    hu: "Körök felfedezése",       de: "Kreise entdecken",         ro: "Descoperă cercurile"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",      icon: "🚀", label: { en: "Circle Quiz",         hu: "Kör kvíz",                de: "Kreisquiz",                ro: "Quiz cerc"               } },
      { id: "m3", category: "challenge", gameType: "star-match",      icon: "⭐", label: { en: "Star Match",           hu: "Csillagpárosítás",        de: "Sternenpaare",             ro: "Perechi stele"           } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Statistics", hu: "Statisztika", de: "Statistik", ro: "Statistică" },
    icon: "📉", color: "#EAB308", sortRange: [1, 50],
    topicKeys: ["g7_stat_median", "g7_stat_mode", "g7_stat_range", "g7_stat_mean"],
    missions: [
      { id: "m1", category: "explore",   gameType: "stat-explorer",     icon: "🔍", label: { en: "Discover Statistics", hu: "Statisztika felfedezése", de: "Statistik entdecken",      ro: "Descoperă statistica"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",        icon: "🚀", label: { en: "Stats Quiz",          hu: "Statisztika kvíz",        de: "Statistikquiz",            ro: "Quiz statistică"         } },
      { id: "m3", category: "challenge", gameType: "true-false-blitz",  icon: "🎯", label: { en: "True or False?",      hu: "Igaz vagy Hamis?",        de: "Wahr oder Falsch?",        ro: "Adevărat sau Fals?"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Finale", hu: "Nagy finálé", de: "Großes Finale", ro: "Finala mare" },
    icon: "🏆", color: "#A855F7", sortRange: [1, 100],
    topicKeys: ["g7_eq_1step", "g7_pyth_hyp", "g7_geo_circle", "g7_stat_median"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Final Quiz",    hu: "Záró kvíz",        de: "Finalquiz",       ro: "Quiz final"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",   hu: "Gyors kör",        de: "Speedrunde",      ro: "Rundă rapidă"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG7Progress(): G7Progress {
  try {
    const raw = localStorage.getItem(G7_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G7Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG7Progress(p: G7Progress): void {
  localStorage.setItem(G7_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneG7(progress: G7Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneG7(progress: G7Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedG7(progress: G7Progress, islandId: string): boolean {
  const idx = G7_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G7_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedG7(progress: G7Progress, testId: string): boolean {
  return G7_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneG7(progress: G7Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionG7(
  progress: G7Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G7Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G7Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = G7_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsG7(progress: G7Progress, islandId: string): number {
  const island = G7_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestG7(progress: G7Progress, testId: string): G7Progress {
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

export function generateIslandQuestionsG7(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(7, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsG7(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...G7_CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(7, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateSortRoundG7(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const step = Math.max(1, Math.floor((hi - lo) / 20));
  const available: number[] = [];
  for (let n = lo; n <= hi; n += step) available.push(n);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

export function generateMatchPairsG7(questions: MathQuestion[]): MatchPair[] {
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
