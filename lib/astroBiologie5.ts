// lib/astroBiologie5.ts
// AstroBiologie — K5 (Klasse 5) island system definitions, progress management, question helpers
// Biology education for Grade 5 students

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { K5_Generators } from "./biologieGenerators5";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BioK5Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

export type BioProgress = BioK5Progress;

// ─── Constants ────────────────────────────────────────────────────────────────

export const BIO_K5_SAVE_KEY = "astro-biologie_k5_v1";

export const BIO_K5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const BIO_K5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["fish", "amphibian", "reptile", "bird", "mammal"],
  test2: ["plant_parts", "photosynthesis", "flower_structure", "plant_reproduction", "skeleton"],
  test3: ["eye", "ear", "nose", "nutrients", "digestive_system", "healthy_diet"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────

export const BIO_K5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Fish & Amphibians", hu: "Halak & Kétéltűek", de: "Fische & Amphibien", ro: "Pești & Amfibieni" },
    icon: "🐟", color: "#4CAF50", sortRange: [1, 10],
    topicKeys: ["fish", "amphibian"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Reptiles & Birds", hu: "Hüllők & Madarak", de: "Reptilien & Vögel", ro: "Reptile & Păsări" },
    icon: "🦎", color: "#45A049", sortRange: [1, 10],
    topicKeys: ["reptile", "bird"],
    missions: [
      { id: "m1", category: "explore",   gameType: "reptile-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Mammals", hu: "Emlősök", de: "Säugetiere", ro: "Mamifere" },
    icon: "🦊", color: "#388E3C", sortRange: [1, 10],
    topicKeys: ["mammal", "vertebrate_comparison"],
    missions: [
      { id: "m1", category: "explore",   gameType: "mammal-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Plant Organs", hu: "Növényi szervek", de: "Pflanzenorgane", ro: "Organe vegetale" },
    icon: "🌱", color: "#2196F3", sortRange: [1, 10],
    topicKeys: ["plant_parts", "photosynthesis"],
    missions: [
      { id: "m1", category: "explore",   gameType: "plant-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Flowers & Reproduction", hu: "Virágok & szaporodás", de: "Blüte & Fortpflanzung", ro: "Flori & Reproducere" },
    icon: "🌸", color: "#1565C0", sortRange: [1, 10],
    topicKeys: ["flower_structure", "plant_reproduction", "plant_types"],
    missions: [
      { id: "m1", category: "explore",   gameType: "flower-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 210, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Skeleton & Muscles", hu: "Csontváz & Izmok", de: "Skelett & Muskeln", ro: "Schelet & Mușchi" },
    icon: "🦴", color: "#FF9800", sortRange: [1, 10],
    topicKeys: ["skeleton", "muscles", "skin"],
    missions: [
      { id: "m1", category: "explore",   gameType: "skeleton-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 130, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Body Systems", hu: "Testrendszerek", de: "Körpersysteme", ro: "Sisteme corporale" },
    icon: "💪", color: "#F57C00", sortRange: [1, 10],
    topicKeys: ["body_systems"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bodysystem-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 50,
  },
  {
    id: "i8",
    name: { en: "Sense Organs", hu: "Érzékszervek", de: "Sinnesorgane", ro: "Organe de simț" },
    icon: "👁️", color: "#E91E63", sortRange: [1, 10],
    topicKeys: ["eye", "ear", "nose", "tongue", "skin_sense"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sense-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Nutrition", hu: "Táplálkozás", de: "Ernährung", ro: "Nutriție" },
    icon: "🍎", color: "#9C27B0", sortRange: [1, 10],
    topicKeys: ["nutrients", "digestive_system", "digestive_organs", "healthy_diet"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadBioK5Progress(): BioK5Progress {
  try {
    const raw = localStorage.getItem(BIO_K5_SAVE_KEY);
    if (raw) return JSON.parse(raw) as BioK5Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveBioK5Progress(p: BioK5Progress): void {
  localStorage.setItem(BIO_K5_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneBioK5(progress: BioK5Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneBioK5(progress: BioK5Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedBioK5(progress: BioK5Progress, islandId: string): boolean {
  const idx = BIO_K5_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(BIO_K5_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedBioK5(progress: BioK5Progress, testId: string): boolean {
  return BIO_K5_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneBioK5(progress: BioK5Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionBioK5(
  progress: BioK5Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): BioK5Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: BioK5Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = BIO_K5_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsBioK5(progress: BioK5Progress, islandId: string): number {
  const island = BIO_K5_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestBioK5(progress: BioK5Progress, testId: string): BioK5Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── Question generation ───────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function isMCQQuestion(q: { type: string }): boolean {
  return q.type === "mcq";
}

function convertMCQToMathQuestion(mcq: any): MathQuestion {
  return {
    question: mcq.question,
    correctAnswer: mcq.options[mcq.correct],
    options: mcq.options,
    topic: mcq.subtopic,
    isWordProblem: false,
  };
}

export function generateIslandQuestionsK5(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K5_Generators[key as keyof typeof K5_Generators];
    if (!gen) continue;
    const qs = gen(Math.floor(Math.random() * 1000000));
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(convertMCQToMathQuestion(q));
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsK5(testId: string, count = 10): MathQuestion[] {
  const keys = shuffle([...(BIO_K5_CHECKPOINT_TOPICS[testId] || [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K5_Generators[key as keyof typeof K5_Generators];
    if (!gen) continue;
    const qs = gen(Math.floor(Math.random() * 1000000));
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(convertMCQToMathQuestion(q));
      }
    }
  }
  return pool;
}

export function generateSortRoundBioK5(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

export function generateMatchPairsBioK5(questions: MathQuestion[]): MatchPair[] {
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
