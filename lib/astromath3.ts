// lib/astromath3.ts
// AstroMath — G3 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface G3Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G3_SAVE_KEY = "astromath_g3_v1";

export const G3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const G3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g3_place_val", "g3_compare_t", "g3_add_mental", "g3_add_written", "g3_sub_mental", "g3_sub_written"],
  test2: ["g3_mul_table", "g3_mul_groups", "g3_div_basic", "g3_div_rem", "g3_length_t", "g3_weight_t"],
  test3: ["g3_shapes_t", "g3_perim_text", "g3_area_text", "g3_word_add_t", "g3_word_sub_t", "g3_word_mul_t"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// Follows Austrian/German Grade 3 curriculum in school order

export const G3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Numbers to 1000", hu: "Számok 1000-ig", de: "Zahlenraum 1000", ro: "Numere până la 1000" },
    icon: "🔢", color: "#4ECDC4", sortRange: [100, 999],
    topicKeys: ["g3_place_val", "g3_compare_t"],
    missions: [
      { id: "m1", category: "explore",   gameType: "place-value-explorer", icon: "🔍", label: { en: "Discover Place Values",  hu: "Helyiértékek felfedezése",  de: "Stellenwerte entdecken",    ro: "Descoperă valorile poziționale" } },
      { id: "m2", category: "build",     gameType: "number-duel",          icon: "⚔️", label: { en: "Number Duel",            hu: "Szám-párharc",              de: "Zahlen-Duell",               ro: "Duel numere"                    } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",         icon: "🌪️", label: { en: "Sort Numbers",            hu: "Számrendezés",              de: "Zahlen sortieren",           ro: "Sortează numerele"              } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Addition to 1000", hu: "Összeadás 1000-ig", de: "Addition bis 1000", ro: "Adunare până la 1000" },
    icon: "➕", color: "#00D4FF", sortRange: [100, 999],
    topicKeys: ["g3_add_mental", "g3_add_written"],
    missions: [
      { id: "m1", category: "explore",   gameType: "concept-explorer", icon: "🔍", label: { en: "Discover Addition",    hu: "Összeadás felfedezése",    de: "Addition entdecken",       ro: "Descoperă adunarea"     } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",      hu: "Egyenlet drill",           de: "Gleichungs-Drill",         ro: "Ecuații"                } },
      { id: "m3", category: "challenge", gameType: "speed-round",      icon: "⚡", label: { en: "Speed Round",          hu: "Gyors kör",                de: "Speedrunde",               ro: "Rundă rapidă"           } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Subtraction to 1000", hu: "Kivonás 1000-ig", de: "Subtraktion bis 1000", ro: "Scădere până la 1000" },
    icon: "➖", color: "#FF6B6B", sortRange: [100, 999],
    topicKeys: ["g3_sub_mental", "g3_sub_written"],
    missions: [
      { id: "m1", category: "explore",   gameType: "concept-explorer", icon: "🔍", label: { en: "Discover Subtraction", hu: "Kivonás felfedezése",      de: "Subtraktion entdecken",    ro: "Descoperă scăderea"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",       icon: "🚀", label: { en: "Subtraction Quiz",    hu: "Kivonás kvíz",             de: "Subtraktionsquiz",         ro: "Quiz scădere"           } },
      { id: "m3", category: "challenge", gameType: "black-hole",       icon: "🕳️", label: { en: "Black Hole",           hu: "Fekete lyuk",              de: "Schwarzes Loch",           ro: "Gaura neagră"           } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Times Tables", hu: "Szorzótábla", de: "Einmaleins", ro: "Tabela înmulțirii" },
    icon: "✖️", color: "#B44DFF", sortRange: [2, 100],
    topicKeys: ["g3_mul_table", "g3_mul_groups"],
    missions: [
      { id: "m1", category: "explore",   gameType: "concept-explorer", icon: "🔍", label: { en: "Discover Multiplication", hu: "Szorzás felfedezése",   de: "Einmaleins entdecken",     ro: "Descoperă înmulțirea"   } },
      { id: "m2", category: "build",     gameType: "star-match",       icon: "⭐", label: { en: "Star Match",               hu: "Csillagpárosítás",      de: "Sternenpaare",             ro: "Perechi stele"          } },
      { id: "m3", category: "challenge", gameType: "speed-round",      icon: "⚡", label: { en: "Speed Round",              hu: "Gyors kör",             de: "Speedrunde",               ro: "Rundă rapidă"           } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Division", hu: "Osztás", de: "Division", ro: "Împărțire" },
    icon: "➗", color: "#00FF88", sortRange: [2, 90],
    topicKeys: ["g3_div_basic", "g3_div_rem"],
    missions: [
      { id: "m1", category: "explore",   gameType: "division-explorer", icon: "🔍", label: { en: "Discover Division",  hu: "Osztás felfedezése",      de: "Division entdecken",       ro: "Descoperă împărțirea"   } },
      { id: "m2", category: "build",     gameType: "equation-drill",    icon: "🧮", label: { en: "Equation Drill",     hu: "Egyenlet drill",          de: "Gleichungs-Drill",         ro: "Ecuații"                } },
      { id: "m3", category: "challenge", gameType: "star-match",        icon: "⭐", label: { en: "Star Match",          hu: "Csillagpárosítás",        de: "Sternenpaare",             ro: "Perechi stele"          } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Units & Measurement", hu: "Mértékegységek", de: "Größen & Einheiten", ro: "Unități de măsură" },
    icon: "📏", color: "#FFD700", sortRange: [1, 1000],
    topicKeys: ["g3_length_t", "g3_weight_t", "g3_time_t"],
    missions: [
      { id: "m1", category: "explore",   gameType: "unit-explorer",      icon: "🔍", label: { en: "Discover Units",      hu: "Mértékegységek felfedezése", de: "Einheiten entdecken",     ro: "Descoperă unitățile"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",         icon: "🚀", label: { en: "Units Quiz",           hu: "Mértékegység kvíz",          de: "Einheitenquiz",           ro: "Quiz unități"           } },
      { id: "m3", category: "challenge", gameType: "true-false-blitz",   icon: "🎯", label: { en: "True or False?",       hu: "Igaz vagy Hamis?",           de: "Wahr oder Falsch?",       ro: "Adevărat sau Fals?"     } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Geometry & Perimeter", hu: "Geometria & Kerület", de: "Geometrie & Umfang", ro: "Geometrie & Perimetru" },
    icon: "📐", color: "#FF9500", sortRange: [2, 50],
    topicKeys: ["g3_shapes_t", "g3_perim_text", "g3_area_text"],
    missions: [
      { id: "m1", category: "explore",   gameType: "area-explorer",   icon: "🔍", label: { en: "Discover Shapes",    hu: "Alakzatok felfedezése",   de: "Formen entdecken",        ro: "Descoperă formele"      } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { en: "Star Match",         hu: "Csillagpárosítás",        de: "Sternenpaare",            ro: "Perechi stele"          } },
      { id: "m3", category: "challenge", gameType: "speed-round",     icon: "⚡", label: { en: "Speed Round",        hu: "Gyors kör",               de: "Speedrunde",              ro: "Rundă rapidă"           } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Word Problems", hu: "Szöveges feladatok", de: "Sachaufgaben", ro: "Probleme cu text" },
    icon: "📖", color: "#10B981", sortRange: [50, 500],
    topicKeys: ["g3_word_add_t", "g3_word_sub_t", "g3_word_mul_t"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-problem-explorer", icon: "🔍", label: { en: "Discover Word Problems", hu: "Szöveges feladatok megismerése", de: "Sachaufgaben entdecken",  ro: "Descoperă problemele"   } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",            icon: "🚀", label: { en: "Story Quiz",             hu: "Szöveges kvíz",                 de: "Sachaufgaben-Quiz",       ro: "Quiz probleme"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",            icon: "🕳️", label: { en: "Black Hole",             hu: "Fekete lyuk",                   de: "Schwarzes Loch",          ro: "Gaura neagră"           } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Final Challenge", hu: "Nagy kihívás", de: "Großes Finale", ro: "Provocarea finală" },
    icon: "🏆", color: "#E879F9", sortRange: [10, 500],
    topicKeys: ["g3_add_mental", "g3_mul_table", "g3_word_add_t"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Final Quiz",    hu: "Záró kvíz",        de: "Finalquiz",       ro: "Quiz final"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
      { id: "m3", category: "challenge", gameType: "chain-calc",  icon: "🔗", label: { en: "Chain Calc",   hu: "Láncszámítás",     de: "Kettenrechnen",   ro: "Calcul în lanț" } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG3Progress(): G3Progress {
  try {
    const raw = localStorage.getItem(G3_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G3Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG3Progress(p: G3Progress): void {
  localStorage.setItem(G3_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneG3(progress: G3Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneG3(progress: G3Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedG3(progress: G3Progress, islandId: string): boolean {
  const idx = G3_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G3_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedG3(progress: G3Progress, testId: string): boolean {
  return G3_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneG3(progress: G3Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionG3(
  progress: G3Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G3Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G3Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = G3_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsG3(progress: G3Progress, islandId: string): number {
  const island = G3_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestG3(progress: G3Progress, testId: string): G3Progress {
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

export function generateIslandQuestionsG3(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(3, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsG3(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...G3_CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(3, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateSortRoundG3(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const step = Math.max(1, Math.floor((hi - lo) / 20));
  const available: number[] = [];
  for (let n = lo; n <= hi; n += step) available.push(n);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

export function generateMatchPairsG3(questions: MathQuestion[]): MatchPair[] {
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
