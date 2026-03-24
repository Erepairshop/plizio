// lib/astroBiologie8.ts
// AstroBiologie — K8 (Klasse 8) island system definitions, progress management, question helpers

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { K8_Generators } from "./biologieGenerators8";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BioK8Progress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const BIO_K8_SAVE_KEY = "astro-biologie_k8_v1";

export const BIO_K8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const BIO_K8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["dna_struktur", "vererbung", "mutation", "genetische_technik"],
  test2: ["endokrine_druesen", "hormonstoffwechsel", "gametogenese", "befruchtung"],
  test3: ["enzyme", "bioethik", "homeostasis", "populationsgenetik", "artbildung"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────

export const BIO_K8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "DNA & Genetics", hu: "DNS & Genetika", de: "DNA & Genetik", ro: "ADN & Genetică" },
    icon: "🧬", color: "#9B59B6", sortRange: [1, 10],
    topicKeys: ["dna_struktur", "vererbung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "dna-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Mutation & Gene Tech", hu: "Mutáció & Géntechnika", de: "Mutation & Gentechnik", ro: "Mutație & Biotehnologie" },
    icon: "🔬", color: "#8E44AD", sortRange: [1, 10],
    topicKeys: ["mutation", "genetische_technik", "genetic_counseling"],
    missions: [
      { id: "m1", category: "explore",   gameType: "mutation-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Hormones", hu: "Hormonok", de: "Hormone", ro: "Hormoni" },
    icon: "⚗️", color: "#E74C3C", sortRange: [1, 10],
    topicKeys: ["endokrine_druesen", "hormonstoffwechsel", "feedback_mechanismen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "hormone-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Reproduction", hu: "Szaporodás", de: "Reproduktion", ro: "Reproducere" },
    icon: "🍼", color: "#F39C12", sortRange: [1, 10],
    topicKeys: ["gametogenese", "befruchtung", "embryonalentwicklung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "reproduction-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Sex Determination", hu: "Nemek meghatározása", de: "Geschlechtsbestimmung", ro: "Determinarea Sexului" },
    icon: "🔬", color: "#E67E22", sortRange: [1, 10],
    topicKeys: ["geschlechtsbestimmung", "contraception"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sexdetermination-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 210, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Biotechnology", hu: "Biotechnológia", de: "Biotechnologie", ro: "Biotehnologie" },
    icon: "🧪", color: "#1ABC9C", sortRange: [1, 10],
    topicKeys: ["enzyme", "bioethik", "biotech_anwendungen"],
    missions: [
      { id: "m1", category: "explore",   gameType: "biotech-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 130, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Systems Biology", hu: "Rendszerbiológia", de: "Systemische Biologie", ro: "Biologie Sistemică" },
    icon: "🌐", color: "#3498DB", sortRange: [1, 10],
    topicKeys: ["integration", "homeostasis", "stoffwechseltypologie"],
    missions: [
      { id: "m1", category: "explore",   gameType: "biosystems-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 220, svgY: 50,
  },
  {
    id: "i8",
    name: { en: "Population Genetics", hu: "Populációgenetika", de: "Populationsgenetik", ro: "Genetica Populațiilor" },
    icon: "📊", color: "#D35400", sortRange: [1, 10],
    topicKeys: ["populationsgenetik", "artbildung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "popgen-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 100, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Phylogeny & Conservation", hu: "Törzsfejlődés & Természetvédelem", de: "Phylogenie & Naturschutz", ro: "Filogenie & Conservare" },
    icon: "🌿", color: "#27AE60", sortRange: [1, 10],
    topicKeys: ["phylogenie", "conservation_biology"],
    missions: [
      { id: "m1", category: "explore",   gameType: "phylogeny-explorer", icon: "🔭", label: { en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
    ],
    svgX: 160, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadBioK8Progress(): BioK8Progress {
  try {
    const raw = localStorage.getItem(BIO_K8_SAVE_KEY);
    if (raw) return JSON.parse(raw) as BioK8Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveBioK8Progress(p: BioK8Progress): void {
  localStorage.setItem(BIO_K8_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneBioK8(progress: BioK8Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneBioK8(progress: BioK8Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedBioK8(progress: BioK8Progress, islandId: string): boolean {
  const idx = BIO_K8_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(BIO_K8_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedBioK8(progress: BioK8Progress, testId: string): boolean {
  return BIO_K8_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneBioK8(progress: BioK8Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionBioK8(
  progress: BioK8Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): BioK8Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: BioK8Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = BIO_K8_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsBioK8(progress: BioK8Progress, islandId: string): number {
  const island = BIO_K8_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestBioK8(progress: BioK8Progress, testId: string): BioK8Progress {
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

export function generateIslandQuestionsK8(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K8_Generators[key as keyof typeof K8_Generators];
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

export function generateCheckpointQuestionsK8(testId: string, count = 10): MathQuestion[] {
  const keys = shuffle([...(BIO_K8_CHECKPOINT_TOPICS[testId] || [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = K8_Generators[key as keyof typeof K8_Generators];
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

export function generateMatchPairsBioK8(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({ left: q.question, right: String(q.correctAnswer) }));
}
