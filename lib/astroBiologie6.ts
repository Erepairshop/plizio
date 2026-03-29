// lib/astroBiologie6.ts
// AstroBiologie — K6 (Klasse 6) island system definitions, progress management, question helpers

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { K6_Generators } from "./biologieGenerators6";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BioK6Progress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const BIO_K6_SAVE_KEY = "astro-biologie_k6_v1";

export const BIO_K6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const BIO_K6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["arthropods", "insects", "spiders", "mollusks", "worm"],
  test2: ["forest_layers", "food_chain", "freshwater", "saltwater", "water_organisms"],
  test3: ["blood_components", "heart", "circulation", "lungs", "respiration", "male_repro"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────

export const BIO_K6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Arthropods", hu: "Ízeltlábúak", de: "Gliederfüßer", ro: "Artropode" },
    icon: "🐛", color: "#FF6B6B", sortRange: [1, 10],
    topicKeys: ["arthropods", "insects", "spiders"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Mollusks & Worms", hu: "Puhatestűek & Férgek", de: "Weichtiere & Würmer", ro: "Moluște & Viermi" },
    icon: "🐌", color: "#E55555", sortRange: [1, 10],
    topicKeys: ["mollusks", "worm"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Forest Ecosystem", hu: "Erdei ökoszisztéma", de: "Waldökosystem", ro: "Ecosistemul Pădurii" },
    icon: "🌲", color: "#2ECC71", sortRange: [1, 10],
    topicKeys: ["forest_layers", "food_chain", "decomposition"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Water Ecosystems", hu: "Vízi ökoszisztéma", de: "Gewässer", ro: "Ecosisteme Acvatice" },
    icon: "💧", color: "#3498DB", sortRange: [1, 10],
    topicKeys: ["freshwater", "saltwater", "water_organisms"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Heart & Blood", hu: "Szív & Vér", de: "Herz & Blut", ro: "Inimă & Sânge" },
    icon: "❤️", color: "#E74C3C", sortRange: [1, 10],
    topicKeys: ["blood_components", "heart"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 210, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Circulation", hu: "Vérkeringés", de: "Kreislauf", ro: "Circulație" },
    icon: "🩺", color: "#C0392B", sortRange: [1, 10],
    topicKeys: ["circulation", "blood_types"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 130, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Respiration", hu: "Légzés", de: "Atmung", ro: "Respirație" },
    icon: "💨", color: "#9B59B6", sortRange: [1, 10],
    topicKeys: ["lungs", "respiration", "gas_exchange"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 50,
  },
  {
    id: "i8",
    name: { en: "Puberty", hu: "Pubertás", de: "Pubertät", ro: "Pubertate" },
    icon: "🧬", color: "#F39C12", sortRange: [1, 10],
    topicKeys: ["male_repro", "female_repro", "hormones"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Biology Review", hu: "Biológia ismétlés", de: "Biologie-Review", ro: "Recapitulare Biologie" },
    icon: "🔬", color: "#1ABC9C", sortRange: [1, 10],
    topicKeys: ["arthropods", "forest_layers", "blood_components", "lungs", "male_repro"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadBioK6Progress(): BioK6Progress {
  try {
    const raw = localStorage.getItem(BIO_K6_SAVE_KEY);
    if (raw) return JSON.parse(raw) as BioK6Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveBioK6Progress(p: BioK6Progress): void {
  localStorage.setItem(BIO_K6_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneBioK6(progress: BioK6Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneBioK6(progress: BioK6Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedBioK6(progress: BioK6Progress, islandId: string): boolean {
  const idx = BIO_K6_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(BIO_K6_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedBioK6(progress: BioK6Progress, testId: string): boolean {
  return BIO_K6_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneBioK6(progress: BioK6Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionBioK6(
  progress: BioK6Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): BioK6Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: BioK6Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = BIO_K6_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsBioK6(progress: BioK6Progress, islandId: string): number {
  const island = BIO_K6_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestBioK6(progress: BioK6Progress, testId: string): BioK6Progress {
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

export function generateIslandQuestionsK6(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K6_Generators[key as keyof typeof K6_Generators];
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

export function generateCheckpointQuestionsK6(testId: string, count = 10): MathQuestion[] {
  const keys = shuffle([...(BIO_K6_CHECKPOINT_TOPICS[testId] || [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K6_Generators[key as keyof typeof K6_Generators];
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

export function generateMatchPairsBioK6(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({ left: q.question, right: String(q.correctAnswer) }));
}
