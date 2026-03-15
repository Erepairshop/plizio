// lib/astromath6.ts
// AstroMath — G6 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface G6Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G6_SAVE_KEY = "astromath_g6_v1";

export const G6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const G6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g6_neg_addsub", "g6_neg_compare", "g6_frac_mul", "g6_frac_diff", "g6_ratio_concept", "g6_ratio_missing"],
  test2: ["g6_pct_of", "g6_pct_word", "g6_speed", "g6_alg_eval", "g6_alg_eq1"],
  test3: ["g6_area_tri", "g6_area_para", "g6_volume", "g6_stat_mean", "g6_stat_median", "g6_stat_range"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// Follows Austrian/German Grade 6 curriculum in school order
// Saturnia planet — orange theme (#FF9500)

export const G6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Negative Numbers", hu: "Negatív számok", de: "Negative Zahlen", ro: "Numere negative" },
    icon: "🌡️", color: "#6366F1", sortRange: [-20, 20],
    topicKeys: ["g6_neg_addsub", "g6_neg_compare", "g6_neg_abs", "g6_neg_word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "negative-number-line", icon: "🔍", label: { en: "Explore Number Line",  hu: "Számegyenes felfedezése",  de: "Zahlenstrahl entdecken",    ro: "Descoperă axa numerelor" } },
      { id: "m2", category: "build",     gameType: "gravity-sort",         icon: "🌪️", label: { en: "Sort Numbers",          hu: "Számrendezés",              de: "Zahlen sortieren",           ro: "Sortează numerele"        } },
      { id: "m3", category: "challenge", gameType: "speed-round",          icon: "⚡", label: { en: "Speed Round",            hu: "Gyors kör",                de: "Speedrunde",                 ro: "Rundă rapidă"             } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Fractions Pro", hu: "Törtek Profi", de: "Bruchrechnung Profi", ro: "Fracții Pro" },
    icon: "🍕", color: "#8B5CF6", sortRange: [1, 20],
    topicKeys: ["g6_frac_mul", "g6_frac_div", "g6_frac_diff", "g6_frac_pct"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fraction-visual",  icon: "🍕", label: { en: "Fraction Pizza",    hu: "Tört pizza",          de: "Bruchpizza",         ro: "Pizza fracții"    } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",   hu: "Egyenlet drill",      de: "Gleichungs-Drill",   ro: "Ecuații"          } },
      { id: "m3", category: "challenge", gameType: "star-match",       icon: "⭐", label: { en: "Star Match",       hu: "Csillagpárosítás",    de: "Sternenpaare",       ro: "Perechi stele"    } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Ratios & Proportions", hu: "Arányok", de: "Verhältnisse", ro: "Proporții" },
    icon: "⚖️", color: "#10B981", sortRange: [1, 100],
    topicKeys: ["g6_ratio_concept", "g6_ratio_missing", "g6_ratio_split", "g6_ratio_3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "ratio-explorer", icon: "🔍", label: { en: "Discover Ratios",    hu: "Arányok felfedezése",   de: "Verhältnisse entdecken",  ro: "Descoperă proporțiile" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",       icon: "🚀", label: { en: "Ratio Quiz",         hu: "Arány kvíz",            de: "Verhältnisquiz",          ro: "Quiz proporții"        } },
      { id: "m3", category: "challenge", gameType: "speed-round",      icon: "⚡", label: { en: "Speed Round",        hu: "Gyors kör",             de: "Speedrunde",              ro: "Rundă rapidă"          } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Percentages", hu: "Százalékszámítás", de: "Prozentrechnung", ro: "Procente" },
    icon: "💯", color: "#EC4899", sortRange: [1, 1000],
    topicKeys: ["g6_pct_of", "g6_pct_base", "g6_pct_word", "g6_pct_change"],
    missions: [
      { id: "m1", category: "explore",   gameType: "percent-bar",      icon: "🔍", label: { en: "Percent Explorer",   hu: "Százalék felfedezés",    de: "Prozent entdecken",       ro: "Explorare procente"    } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",    hu: "Egyenlet drill",         de: "Gleichungs-Drill",        ro: "Ecuații"               } },
      { id: "m3", category: "challenge", gameType: "star-match",       icon: "⭐", label: { en: "Star Match",        hu: "Csillagpárosítás",       de: "Sternenpaare",            ro: "Perechi stele"         } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Speed & Motion", hu: "Sebesség & Mozgás", de: "Geschwindigkeit", ro: "Viteză & Mișcare" },
    icon: "🚀", color: "#14B8A6", sortRange: [10, 500],
    topicKeys: ["g6_speed", "g6_ratio_inv", "g6_ratio_3"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-problem-explorer", icon: "🔍", label: { en: "Speed Problems",     hu: "Sebesség feladatok",     de: "Geschwindigkeitsaufgaben", ro: "Probleme viteză"       } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",            icon: "🚀", label: { en: "Motion Quiz",        hu: "Mozgás kvíz",            de: "Bewegungsquiz",            ro: "Quiz mișcare"          } },
      { id: "m3", category: "challenge", gameType: "speed-round",           icon: "⚡", label: { en: "Speed Round",        hu: "Gyors kör",              de: "Speedrunde",               ro: "Rundă rapidă"          } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Algebra", hu: "Algebra", de: "Algebra", ro: "Algebră" },
    icon: "🔤", color: "#3B82F6", sortRange: [1, 50],
    topicKeys: ["g6_alg_eval", "g6_alg_eq1", "g6_alg_eq2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "algebra-explorer", icon: "🔍", label: { en: "Discover Algebra",   hu: "Algebra felfedezése",    de: "Algebra entdecken",       ro: "Descoperă algebra"     } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",    hu: "Egyenlet drill",         de: "Gleichungs-Drill",        ro: "Ecuații"               } },
      { id: "m3", category: "challenge", gameType: "black-hole",       icon: "🕳️", label: { en: "Black Hole",        hu: "Fekete lyuk",            de: "Schwarzes Loch",          ro: "Gaura neagră"          } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Areas & Volumes", hu: "Területek & Térfogatok", de: "Flächen & Körper", ro: "Arii & Volume" },
    icon: "📐", color: "#F59E0B", sortRange: [1, 500],
    topicKeys: ["g6_area_tri", "g6_area_para", "g6_area_trap", "g6_volume"],
    missions: [
      { id: "m1", category: "explore",   gameType: "area-explorer",  icon: "🔍", label: { en: "Discover Areas",     hu: "Területek felfedezése", de: "Flächen entdecken",       ro: "Descoperă ariile"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { en: "Geometry Quiz",      hu: "Geometria kvíz",        de: "Geometriequiz",           ro: "Quiz geometrie"        } },
      { id: "m3", category: "challenge", gameType: "star-match",     icon: "⭐", label: { en: "Star Match",         hu: "Csillagpárosítás",      de: "Sternenpaare",            ro: "Perechi stele"         } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Statistics", hu: "Statisztika", de: "Statistik", ro: "Statistică" },
    icon: "📊", color: "#14B8A6", sortRange: [1, 50],
    topicKeys: ["g6_stat_mean", "g6_stat_median", "g6_stat_mode", "g6_stat_range"],
    missions: [
      { id: "m1", category: "explore",   gameType: "stat-explorer",  icon: "🔍", label: { en: "Discover Statistics", hu: "Statisztika felfedezése", de: "Statistik entdecken",     ro: "Descoperă statistica"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",        icon: "🚀", label: { en: "Stats Quiz",          hu: "Statisztika kvíz",        de: "Statistikquiz",           ro: "Quiz statistică"       } },
      { id: "m3", category: "challenge", gameType: "true-false-blitz",  icon: "🎯", label: { en: "True or False?",      hu: "Igaz vagy Hamis?",        de: "Wahr oder Falsch?",       ro: "Adevărat sau Fals?"    } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Finale", hu: "Nagy finálé", de: "Großes Finale", ro: "Finala mare" },
    icon: "🏆", color: "#A855F7", sortRange: [-20, 200],
    topicKeys: ["g6_pct_of", "g6_frac_mul", "g6_alg_eq1", "g6_area_tri"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Final Quiz",    hu: "Záró kvíz",        de: "Finalquiz",       ro: "Quiz final"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",   hu: "Gyors kör",        de: "Speedrunde",      ro: "Rundă rapidă"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG6Progress(): G6Progress {
  try {
    const raw = localStorage.getItem(G6_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G6Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG6Progress(p: G6Progress): void {
  localStorage.setItem(G6_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneG6(progress: G6Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneG6(progress: G6Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedG6(progress: G6Progress, islandId: string): boolean {
  const idx = G6_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G6_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedG6(progress: G6Progress, testId: string): boolean {
  return G6_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneG6(progress: G6Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionG6(
  progress: G6Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G6Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G6Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = G6_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsG6(progress: G6Progress, islandId: string): number {
  const island = G6_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestG6(progress: G6Progress, testId: string): G6Progress {
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

export function generateIslandQuestionsG6(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(6, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsG6(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...G6_CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(6, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateSortRoundG6(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const step = Math.max(1, Math.floor((hi - lo) / 20));
  const available: number[] = [];
  for (let n = lo; n <= hi; n += step) available.push(n);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

export function generateMatchPairsG6(questions: MathQuestion[]): MatchPair[] {
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
