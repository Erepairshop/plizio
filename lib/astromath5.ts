// lib/astromath5.ts
// AstroMath — G5 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface G5Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G5_SAVE_KEY = "astromath_g5_v1";

export const G5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const G5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g5_z_million", "g5_rnd_1000", "g5_add_mental", "g5_sub_mental", "g5_mul_written", "g5_div_mental"],
  test2: ["g5_frac_addsub", "g5_frac_compare", "g5_dec_add", "g5_dec_compare", "g5_geo_shapes", "g5_ang_types"],
  test3: ["g5_units_len", "g5_units_mass", "g5_stat_mean", "g5_word_mul", "g5_vol_cuboid", "g5_area_rect"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// Follows Austrian/German Grade 5 curriculum in school order

export const G5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Large Numbers", hu: "Nagy számok", de: "Große Zahlen", ro: "Numere mari" },
    icon: "🔢", color: "#3B82F6", sortRange: [10000, 99999],
    topicKeys: ["g5_z_million", "g5_z_compare", "g5_rnd_1000", "g5_rnd_large"],
    missions: [
      { id: "m1", category: "explore",   gameType: "place-value-explorer", icon: "🔍", label: { en: "Discover Place Values",  hu: "Helyiértékek felfedezése",  de: "Stellenwerte entdecken",    ro: "Descoperă valorile poziționale" } },
      { id: "m2", category: "build",     gameType: "gravity-sort",         icon: "🌪️", label: { en: "Sort Numbers",            hu: "Számrendezés",              de: "Zahlen sortieren",           ro: "Sortează numerele"              } },
      { id: "m3", category: "challenge", gameType: "speed-round",          icon: "⚡", label: { en: "Speed Round",              hu: "Gyors kör",                de: "Speedrunde",                 ro: "Rundă rapidă"                  } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Addition & Subtraction", hu: "Összeadás & Kivonás", de: "Addition & Subtraktion", ro: "Adunare & Scădere" },
    icon: "➕", color: "#EF4444", sortRange: [10000, 99999],
    topicKeys: ["g5_add_mental", "g5_add_written", "g5_sub_mental", "g5_sub_written"],
    missions: [
      { id: "m1", category: "explore",   gameType: "addsub-explorer",  icon: "🔍", label: { en: "Mental Math",        hu: "Fejszámolás",           de: "Kopfrechnen",         ro: "Calcul mental"      } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",     hu: "Egyenlet drill",        de: "Gleichungs-Drill",    ro: "Ecuații"            } },
      { id: "m3", category: "challenge", gameType: "star-match",       icon: "⭐", label: { en: "Star Match",          hu: "Csillagpárosítás",      de: "Sternenpaare",        ro: "Perechi stele"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Multiplication & Division", hu: "Szorzás & Osztás", de: "Multiplikation & Division", ro: "Înmulțire & Împărțire" },
    icon: "✖️", color: "#10B981", sortRange: [100, 9999],
    topicKeys: ["g5_mul_written", "g5_mul_pow10", "g5_div_mental", "g5_div_rem"],
    missions: [
      { id: "m1", category: "explore",   gameType: "concept-explorer", icon: "🔍", label: { en: "Discover Multiplication", hu: "Szorzás felfedezése",   de: "Multiplikation entdecken", ro: "Descoperă înmulțirea"   } },
      { id: "m2", category: "build",     gameType: "speed-round",      icon: "⚡", label: { en: "Speed Round",              hu: "Gyors kör",             de: "Speedrunde",               ro: "Rundă rapidă"           } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",     icon: "🌪️", label: { en: "Sort Numbers",              hu: "Számrendezés",          de: "Zahlen sortieren",         ro: "Sortează"               } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Fractions", hu: "Törtek", de: "Bruchrechnung", ro: "Fracții" },
    icon: "🍕", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["g5_frac_addsub", "g5_frac_compare", "g5_frac_mixed"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fraction-explorer-5", icon: "🔍", label: { en: "Discover Fractions",  hu: "Törtek felfedezése",      de: "Brüche entdecken",       ro: "Descoperă fracțiile"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",      icon: "🚀", label: { en: "Fraction Quiz",   hu: "Törtek kvíz",     de: "Bruchquiz",        ro: "Quiz fracții"   } },
      { id: "m3", category: "challenge", gameType: "star-match",      icon: "⭐", label: { en: "Star Match",      hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Decimals", hu: "Tizedes számok", de: "Dezimalzahlen", ro: "Numere zecimale" },
    icon: "🔟", color: "#14B8A6", sortRange: [1, 100],
    topicKeys: ["g5_dec_concept", "g5_dec_compare", "g5_dec_add", "g5_dec_sub"],
    missions: [
      { id: "m1", category: "explore",   gameType: "decimal-explorer", icon: "🔍", label: { en: "Discover Decimals",  hu: "Tizedesek felfedezése",  de: "Dezimalzahlen entdecken",  ro: "Descoperă zecimalele"  } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",     hu: "Egyenlet drill",         de: "Gleichungs-Drill",         ro: "Ecuații"               } },
      { id: "m3", category: "challenge", gameType: "speed-round",      icon: "⚡", label: { en: "Speed Round",         hu: "Gyors kör",              de: "Speedrunde",               ro: "Rundă rapidă"          } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Geometry & Angles", hu: "Geometria & Szögek", de: "Geometrie & Winkel", ro: "Geometrie & Unghiuri" },
    icon: "📐", color: "#EAB308", sortRange: [10, 180],
    topicKeys: ["g5_geo_shapes", "g5_ang_types", "g5_area_rect", "g5_peri_rect"],
    missions: [
      { id: "m1", category: "explore",   gameType: "angle-explorer", icon: "🔍", label: { en: "Discover Angles",   hu: "Szögek felfedezése",   de: "Winkel entdecken",     ro: "Descoperă unghiurile" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",     icon: "🚀", label: { en: "Geometry Quiz",     hu: "Geometria kvíz",       de: "Geometriequiz",        ro: "Quiz geometrie"       } },
      { id: "m3", category: "challenge", gameType: "star-match",     icon: "⭐", label: { en: "Star Match",        hu: "Csillagpárosítás",     de: "Sternenpaare",         ro: "Perechi stele"        } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Units & Measurement", hu: "Mértékegységek", de: "Einheiten & Messen", ro: "Unități de măsură" },
    icon: "📏", color: "#F59E0B", sortRange: [10, 10000],
    topicKeys: ["g5_units_len", "g5_units_mass", "g5_units_time", "g5_units_area"],
    missions: [
      { id: "m1", category: "explore",   gameType: "unit-explorer",    icon: "🔍", label: { en: "Discover Units",      hu: "Mértékegységek felfedezése", de: "Einheiten entdecken",     ro: "Descoperă unitățile"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",       icon: "🚀", label: { en: "Units Quiz",           hu: "Mértékegység kvíz",          de: "Einheitenquiz",           ro: "Quiz unități"           } },
      { id: "m3", category: "challenge", gameType: "true-false-blitz", icon: "🎯", label: { en: "True or False?",       hu: "Igaz vagy Hamis?",           de: "Wahr oder Falsch?",       ro: "Adevărat sau Fals?"     } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Word Problems & Data", hu: "Szöveges feladatok & Adatok", de: "Sachaufgaben & Daten", ro: "Probleme & Date" },
    icon: "📖", color: "#EC4899", sortRange: [100, 10000],
    topicKeys: ["g5_word_mul", "g5_word_div", "g5_stat_mean", "g5_word_money"],
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
    icon: "🏆", color: "#A855F7", sortRange: [100, 99999],
    topicKeys: ["g5_mul_written", "g5_frac_addsub", "g5_dec_add", "g5_geo_shapes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Final Quiz",    hu: "Záró kvíz",        de: "Finalquiz",       ro: "Quiz final"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",   hu: "Gyors kör",        de: "Speedrunde",      ro: "Rundă rapidă"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG5Progress(): G5Progress {
  try {
    const raw = localStorage.getItem(G5_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G5Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG5Progress(p: G5Progress): void {
  localStorage.setItem(G5_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneG5(progress: G5Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneG5(progress: G5Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedG5(progress: G5Progress, islandId: string): boolean {
  const idx = G5_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G5_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedG5(progress: G5Progress, testId: string): boolean {
  return G5_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneG5(progress: G5Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionG5(
  progress: G5Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G5Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G5Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = G5_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsG5(progress: G5Progress, islandId: string): number {
  const island = G5_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestG5(progress: G5Progress, testId: string): G5Progress {
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

export function generateIslandQuestionsG5(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(5, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsG5(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...G5_CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(5, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateSortRoundG5(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const step = Math.max(1, Math.floor((hi - lo) / 20));
  const available: number[] = [];
  for (let n = lo; n <= hi; n += step) available.push(n);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

export function generateMatchPairsG5(questions: MathQuestion[]): MatchPair[] {
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
