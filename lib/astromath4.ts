// lib/astromath4.ts
// AstroMath — G4 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface G4Progress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G4_SAVE_KEY = "astromath_g4_v1";

export const G4_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const G4_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["place", "place1k", "mul", "div"],
  test2: ["frac", "geo", "word"],
  test3: ["units", "angles", "geo"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// Follows Austrian/German Grade 4 curriculum in school order

export const G4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Large Numbers", hu: "Nagy számok", de: "Große Zahlen", ro: "Numere mari" },
    icon: "🔢", color: "#4ECDC4", sortRange: [100, 999],
    topicKeys: ["place1k"],
    missions: [
      { id: "m1", category: "explore",   gameType: "gravity-sort",  icon: "🌪️", label: { en: "Sort Numbers",   hu: "Számrendezés",    de: "Zahlen sortieren", ro: "Sortează"       } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🚀", label: { en: "Number Quiz",    hu: "Szám kvíz",       de: "Zahlenquiz",       ro: "Quiz numere"    } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { en: "Speed Round",    hu: "Gyors kör",       de: "Speedrunde",       ro: "Rundă rapidă"  } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Multiplication", hu: "Szorzás", de: "Multiplikation", ro: "Înmulțire" },
    icon: "✖️", color: "#00D4FF", sortRange: [50, 500],
    topicKeys: ["mul"],
    missions: [
      { id: "m1", category: "explore",   gameType: "concept-explorer", icon: "🔍", label: { en: "Discover Arrays",  hu: "Felfedezés",      de: "Entdecken",        ro: "Descoperire"    } },
      { id: "m2", category: "build",     gameType: "equation-drill",   icon: "🧮", label: { en: "Equation Drill",   hu: "Egyenlet drill",  de: "Gleichungs-Drill", ro: "Ecuații"        } },
      { id: "m3", category: "challenge", gameType: "speed-round",      icon: "⚡", label: { en: "Speed Round",      hu: "Gyors kör",       de: "Speedrunde",       ro: "Rundă rapidă"  } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Division", hu: "Osztás", de: "Division", ro: "Împărțire" },
    icon: "➗", color: "#FF6B6B", sortRange: [10, 99],
    topicKeys: ["div"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",    icon: "🚀", label: { en: "Division Quiz",   hu: "Osztás kvíz",     de: "Divisionsquiz",    ro: "Quiz împărțire" } },
      { id: "m2", category: "build",     gameType: "equation-drill",icon: "🧮", label: { en: "Equation Drill",  hu: "Egyenlet drill",  de: "Gleichungs-Drill", ro: "Ecuații"        } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { en: "Speed Round",     hu: "Gyors kör",       de: "Speedrunde",       ro: "Rundă rapidă"  } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Fractions", hu: "Törtek", de: "Bruchrechnung", ro: "Fracții" },
    icon: "🍕", color: "#B44DFF", sortRange: [1, 20],
    topicKeys: ["frac"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fraction-visual", icon: "🍕", label: { en: "Fraction Pizza",  hu: "Tört pizza",      de: "Bruchpizza",       ro: "Pizza fracții"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",      icon: "🚀", label: { en: "Fraction Quiz",   hu: "Törtek kvíz",     de: "Bruchquiz",        ro: "Quiz fracții"   } },
      { id: "m3", category: "challenge", gameType: "star-match",      icon: "⭐", label: { en: "Star Match",      hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Geometry", hu: "Geometria", de: "Geometrie", ro: "Geometrie" },
    icon: "📐", color: "#00FF88", sortRange: [10, 100],
    topicKeys: ["geo"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Geometry Quiz",  hu: "Geometria kvíz",  de: "Geometriequiz",    ro: "Quiz geometrie" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Gyors kör",       de: "Speedrunde",       ro: "Rundă rapidă"  } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Word Problems", hu: "Szöveges feladatok", de: "Sachaufgaben", ro: "Probleme cu text" },
    icon: "📖", color: "#FFD700", sortRange: [100, 5000],
    topicKeys: ["word"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Story Quiz A",   hu: "Szöveges A",      de: "Sachaufgaben A",   ro: "Probleme A"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",     hu: "Fekete lyuk",     de: "Schwarzes Loch",   ro: "Gaura neagră"  } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Units & Measurement", hu: "Mértékegységek", de: "Einheiten & Messen", ro: "Unități de măsură" },
    icon: "📏", color: "#FF9500", sortRange: [10, 1000],
    topicKeys: ["units"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Units Quiz",     hu: "Mértékegység kvíz", de: "Einheitenquiz",   ro: "Quiz unități"  } },
      { id: "m2", category: "build",     gameType: "equation-drill", icon: "🧮", label: { en: "Equation Drill", hu: "Egyenlet drill",  de: "Gleichungs-Drill", ro: "Ecuații"      } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Gyors kör",       de: "Speedrunde",       ro: "Rundă rapidă"  } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Angles & Symmetry", hu: "Szögek & Szimmetria", de: "Winkel & Symmetrie", ro: "Unghiuri & Simetrie" },
    icon: "📐", color: "#10B981", sortRange: [30, 180],
    topicKeys: ["angles", "symmetry_en"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Angles Quiz",    hu: "Szög kvíz",       de: "Winkelquiz",       ro: "Quiz unghiuri" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele" } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",     hu: "Fekete lyuk",     de: "Schwarzes Loch",   ro: "Gaura neagră"  } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Final Challenge", hu: "Nagy kihívás", de: "Großes Finale", ro: "Provocarea finală" },
    icon: "🏆", color: "#E879F9", sortRange: [10, 500],
    topicKeys: ["geo", "word", "frac"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🚀", label: { en: "Final Quiz",     hu: "Záró kvíz",       de: "Finalquiz",        ro: "Quiz final"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Gyors kör",       de: "Speedrunde",       ro: "Rundă rapidă"  } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG4Progress(): G4Progress {
  try {
    const raw = localStorage.getItem(G4_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G4Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG4Progress(p: G4Progress): void {
  localStorage.setItem(G4_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneG4(progress: G4Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneG4(progress: G4Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedG4(progress: G4Progress, islandId: string): boolean {
  const idx = G4_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G4_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedG4(progress: G4Progress, testId: string): boolean {
  return G4_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneG4(progress: G4Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionG4(
  progress: G4Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G4Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G4Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = G4_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsG4(progress: G4Progress, islandId: string): number {
  const island = G4_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestG4(progress: G4Progress, testId: string): G4Progress {
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

export function generateIslandQuestionsG4(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(4, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsG4(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...G4_CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(4, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateSortRoundG4(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const step = Math.max(1, Math.floor((hi - lo) / 20));
  const available: number[] = [];
  for (let n = lo; n <= hi; n += step) available.push(n);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

export function generateMatchPairsG4(questions: MathQuestion[]): MatchPair[] {
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
