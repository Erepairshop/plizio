// lib/astroBiologie7.ts
// AstroBiologie — K7 (Klasse 7) island system definitions, progress management, question helpers

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { K7_Generators } from "./biologieGenerators7";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BioK7Progress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const BIO_K7_SAVE_KEY = "astro-biologie_k7_v1";

export const BIO_K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const BIO_K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["cell_structure", "cell_organelles", "microscope", "cell_division"],
  test2: ["photosynthesis_detail", "cellular_respiration", "population", "ecological_niche"],
  test3: ["immune_cells", "immune_response", "neuron", "synapse", "adaptation", "natural_selection"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────

export const BIO_K7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Cell Structure", hu: "Sejtek & Mikroszkóp", de: "Zellstruktur & Mikroskop", ro: "Structura Celulei" },
    icon: "🔬", color: "#E67E22", sortRange: [1, 10],
    topicKeys: ["cell_structure", "cell_organelles", "microscope"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Cell Division", hu: "Sejtoszlás & Ciklus", de: "Zellteilung & Zellzyklus", ro: "Diviziunea Celulară" },
    icon: "⚗️", color: "#D35400", sortRange: [1, 10],
    topicKeys: ["cell_division", "cell_cycle"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Photosynthesis", hu: "Fotoszintézis", de: "Fotosynthese", ro: "Fotosinteză" },
    icon: "⚡", color: "#27AE60", sortRange: [1, 10],
    topicKeys: ["photosynthesis_detail", "energy_transfer"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Cellular Respiration", hu: "Sejt-légzés", de: "Zellatmung", ro: "Respirație Celulară" },
    icon: "🌬️", color: "#16A085", sortRange: [1, 10],
    topicKeys: ["cellular_respiration"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Ecology", hu: "Ökológia", de: "Ökologie", ro: "Ecologie" },
    icon: "🌍", color: "#2980B9", sortRange: [1, 10],
    topicKeys: ["population", "ecological_niche", "competition"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 210, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Symbiosis & Cycles", hu: "Szimbiózis & Körforgások", de: "Symbiose & Kreisläufe", ro: "Simbioză & Cicluri" },
    icon: "🔄", color: "#1ABC9C", sortRange: [1, 10],
    topicKeys: ["symbiosis", "biogeochemical_cycles"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 130, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Immune System", hu: "Immunrendszer", de: "Immunsystem", ro: "Sistemul Imunitar" },
    icon: "🛡️", color: "#8E44AD", sortRange: [1, 10],
    topicKeys: ["immune_cells", "immune_response", "vaccination"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 50,
  },
  {
    id: "i8",
    name: { en: "Nervous System", hu: "Idegrendszer", de: "Nervensystem", ro: "Sistemul Nervos" },
    icon: "🧠", color: "#C0392B", sortRange: [1, 10],
    topicKeys: ["neuron", "synapse", "reflex", "brain"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Evolution", hu: "Evolúció alapjai", de: "Evolution Grundlagen", ro: "Bazele Evoluției" },
    icon: "🧬", color: "#D35400", sortRange: [1, 10],
    topicKeys: ["adaptation", "natural_selection", "behavior_learning"],
    missions: [
      { id: "m1", category: "explore",   gameType: "bio-explore", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadBioK7Progress(): BioK7Progress {
  try {
    const raw = localStorage.getItem(BIO_K7_SAVE_KEY);
    if (raw) return JSON.parse(raw) as BioK7Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveBioK7Progress(p: BioK7Progress): void {
  localStorage.setItem(BIO_K7_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneBioK7(progress: BioK7Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneBioK7(progress: BioK7Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedBioK7(progress: BioK7Progress, islandId: string): boolean {
  const idx = BIO_K7_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(BIO_K7_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedBioK7(progress: BioK7Progress, testId: string): boolean {
  return BIO_K7_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneBioK7(progress: BioK7Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionBioK7(
  progress: BioK7Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): BioK7Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: BioK7Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = BIO_K7_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsBioK7(progress: BioK7Progress, islandId: string): number {
  const island = BIO_K7_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestBioK7(progress: BioK7Progress, testId: string): BioK7Progress {
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

export function generateIslandQuestionsK7(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K7_Generators[key as keyof typeof K7_Generators];
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

export function generateCheckpointQuestionsK7(testId: string, count = 10): MathQuestion[] {
  const keys = shuffle([...(BIO_K7_CHECKPOINT_TOPICS[testId] || [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K7_Generators[key as keyof typeof K7_Generators];
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

export function generateMatchPairsBioK7(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({ left: q.question, right: String(q.correctAnswer) }));
}
