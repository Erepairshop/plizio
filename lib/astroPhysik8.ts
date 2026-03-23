// lib/astroPhysik8.ts
// AstroPhysik — Klasse 8 island system definitions, progress management, question helpers
// Physics (Physik) for 13-14 year old students (advanced electricity, electromagnetism, nuclear, modern physics)

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { getK8Questions } from "./physikCurriculum8";
import "@/lib/physikRegistration";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PhysikK8Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// Generic name alias for consistency with page.tsx API
export type PhysikProgress = PhysikK8Progress;

// ─── Constants ────────────────────────────────────────────────────────────────

export const PHYSIK_K8_SAVE_KEY = "astro_physik_k8_v1";

export const PHYSIK_K8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const PHYSIK_K8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["ohm_law", "resistance_calc", "electric_power", "electric_energy", "semiconductors", "electromagnets", "electromagnetic_induction"],
  test2: ["generators", "transformers", "electric_motors", "atomic_structure", "radioactivity", "half_life", "nuclear_energy"],
  test3: ["special_relativity", "photoelectric_effect", "wave_particle", "quantum_basics", "renewable_sources", "solar_energy", "wind_energy", "nuclear_power", "energy_efficiency"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// 9 islands covering Klasse 8 Physics curriculum in advanced order

export const PHYSIK_K8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Ohm's Law", hu: "Ohm-törvény", de: "Ohmsches Gesetz", ro: "Legea lui Ohm" },
    icon: "⚡", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["ohm_law", "resistance_calc"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-ohm-explorer",        icon: "🔭", label: { en: "Discover Ohm's Law",  hu: "Ohm-törvény felfedezése", de: "Ohmsches Gesetz entdecken",   ro: "Descoperă legea lui Ohm"    } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Ohm Match",            hu: "Ohm párosítása",          de: "Ohm-Paare",                   ro: "Perechi Ohm"                } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Resistance Challenge", hu: "Ellenállás kihívása",      de: "Widerstands-Herausforderung", ro: "Provocare rezistență"       } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Electric Power", hu: "Elektromos teljesítmény", de: "Elektrische Leistung", ro: "Putere electrică" },
    icon: "💡", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["electric_power", "electric_energy"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-power-explorer",      icon: "🔭", label: { en: "Discover Power",       hu: "Teljesítmény felfedezése", de: "Leistung entdecken",         ro: "Descoperă putere"           } },
      { id: "m2", category: "build",     gameType: "gravity-sort",            icon: "🌪️", label: { en: "Power Sort",          hu: "Teljesítmény rendezése",   de: "Leistung sortieren",        ro: "Sortează putere"            } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",              icon: "🚀", label: { en: "Energy Quiz",         hu: "Energia kvíz",            de: "Energiequiz",               ro: "Quiz energie"               } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Semiconductors", hu: "Félvezetők", de: "Halbleiter", ro: "Semiconductori" },
    icon: "🔬", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["semiconductors"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-semiconductor-explorer", icon: "🔭", label: { en: "Discover Semiconductors", hu: "Félvezetők felfedezése",   de: "Halbleiter entdecken",      ro: "Descoperă semiconductori"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",              icon: "🚀", label: { en: "Semiconductor Quiz",   hu: "Félvezeték kvíz",         de: "Halbleiter-Quiz",           ro: "Quiz semiconductori"        } },
      { id: "m3", category: "challenge", gameType: "star-match",              icon: "⭐", label: { en: "Diode Match",         hu: "Dióda párosítása",        de: "Dioden-Paare",              ro: "Perechi diodă"              } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Electromagnets & Induction", hu: "Elektromágnesek és indukció", de: "Elektromagnete & Induktion", ro: "Electromagneți și inducție" },
    icon: "🧲", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["electromagnets", "electromagnetic_induction"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-electromagnetic-explorer", icon: "🔭", label: { en: "Discover EM",         hu: "EM felfedezése",          de: "EM entdecken",              ro: "Descoperă EM"               } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "EM Match",            hu: "EM párosítása",           de: "EM-Paare",                  ro: "Perechi EM"                 } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Induction Challenge", hu: "Indukció kihívása",        de: "Induktions-Herausforderung", ro: "Provocare inducție"         } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Generators & Motors", hu: "Generátorok és motorok", de: "Generatoren & Motoren", ro: "Generatoare și motoare" },
    icon: "⚙️", color: "#8B5CF6", sortRange: [1, 10],
    topicKeys: ["generators", "transformers", "electric_motors"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-generators-explorer",  icon: "🔭", label: { en: "Discover Machines",   hu: "Gépek felfedezése",       de: "Maschinen entdecken",       ro: "Descoperă mașini"           } },
      { id: "m2", category: "build",     gameType: "gravity-sort",            icon: "🌪️", label: { en: "Power Devices Sort", hu: "Eszközök rendezése",       de: "Geräte sortieren",          ro: "Sortează dispozitive"       } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",              icon: "🚀", label: { en: "Transformer Quiz",   hu: "Transzformátor kvíz",     de: "Transformator-Quiz",        ro: "Quiz transformator"         } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Atomic Structure & Radioactivity", hu: "Atomi szerkezet és radioaktivitás", de: "Atomstruktur & Radioaktivität", ro: "Structură atomică și radioactivitate" },
    icon: "☢️", color: "#FF6B35", sortRange: [1, 10],
    topicKeys: ["atomic_structure", "radioactivity", "half_life"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-atomic-explorer",     icon: "🔭", label: { en: "Discover Atoms",      hu: "Atomok felfedezése",      de: "Atome entdecken",           ro: "Descoperă atomi"            } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Particle Match",     hu: "Részecskék párosítása",    de: "Teilchen-Paare",            ro: "Perechi particule"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Decay Challenge",     hu: "Bomlás kihívása",         de: "Zerfall-Herausforderung",   ro: "Provocare dezintegrare"    } },
    ],
    svgX: 120, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Nuclear Energy", hu: "Atomenergia", de: "Kernenergie", ro: "Energie nucleară" },
    icon: "🏭", color: "#FBBF24", sortRange: [1, 10],
    topicKeys: ["nuclear_energy", "nuclear_power"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-nuclear-explorer",    icon: "🔭", label: { en: "Discover Nuclear",    hu: "Atommag felfedezése",     de: "Kern entdecken",            ro: "Descoperă nuclear"          } },
      { id: "m2", category: "build",     gameType: "gravity-sort",            icon: "🌪️", label: { en: "Fission Sort",       hu: "Hasadás rendezése",       de: "Spaltung sortieren",        ro: "Sortează fisiune"           } },
      { id: "m3", category: "challenge", gameType: "star-match",              icon: "⭐", label: { en: "Nuclear Match",      hu: "Atommag párosítása",      de: "Kern-Paare",                ro: "Perechi nucleare"           } },
    ],
    svgX: 210, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Modern Physics", hu: "Modern fizika", de: "Moderne Physik", ro: "Fizica modernă" },
    icon: "🌌", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["special_relativity", "photoelectric_effect", "wave_particle", "quantum_basics"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-modern-explorer",     icon: "🔭", label: { en: "Discover Modern",     hu: "Modern felfedezése",      de: "Moderne entdecken",         ro: "Descoperă modernă"          } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",              icon: "🚀", label: { en: "Quantum Quiz",        hu: "Kvantum kvíz",            de: "Quanten-Quiz",              ro: "Quiz cuantic"               } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Relativity Challenge", hu: "Relativitás kihívása",     de: "Relativitäts-Herausforderung", ro: "Provocare relativitate"     } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Energy & Environment Grand Finale", hu: "Energia és környezet nagy döntő", de: "Energie & Umwelt Großes Finale", ro: "Energie și Mediu - Marele Final" },
    icon: "🌍", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["renewable_sources", "solar_energy", "wind_energy", "energy_efficiency", "electromagnetic_waves"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk8-environment-explorer", icon: "🔭", label: { en: "Discover Renewable",   hu: "Megújuló felfedezése",     de: "Erneuerbar entdecken",      ro: "Descoperă regenerabile"     } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Energy Match",        hu: "Energia párosítása",      de: "Energie-Paare",             ro: "Perechi energie"            } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",            icon: "🌪️", label: { en: "Final Sort",         hu: "Végső rendezés",          de: "Abschlusssortierung",       ro: "Sortare finală"             } },
    ],
    svgX: 190, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadPhysikK8Progress(): PhysikK8Progress {
  try {
    const raw = localStorage.getItem(PHYSIK_K8_SAVE_KEY);
    if (raw) return JSON.parse(raw) as PhysikK8Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function savePhysikK8Progress(p: PhysikK8Progress): void {
  localStorage.setItem(PHYSIK_K8_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDonePhysikK8(progress: PhysikK8Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDonePhysikK8(progress: PhysikK8Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedPhysikK8(progress: PhysikK8Progress, islandId: string): boolean {
  const idx = PHYSIK_K8_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(PHYSIK_K8_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedPhysikK8(progress: PhysikK8Progress, testId: string): boolean {
  return PHYSIK_K8_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDonePhysikK8(progress: PhysikK8Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionPhysikK8(
  progress: PhysikK8Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): PhysikK8Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: PhysikK8Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = PHYSIK_K8_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsPhysikK8(progress: PhysikK8Progress, islandId: string): number {
  const island = PHYSIK_K8_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestPhysikK8(progress: PhysikK8Progress, testId: string): PhysikK8Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── Question generation ───────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface CurriculumMCQ {
  type: "mcq";
  topic: string;
  subtopic: string;
  question: string;
  options: string[];
  correct: number;
}

function isMCQQuestion(q: any): boolean {
  return q.type === "mcq" && Array.isArray(q.options) && q.options.length >= 2;
}

function convertMCQToMathQuestion(mcq: CurriculumMCQ): MathQuestion {
  return {
    question: mcq.question,
    correctAnswer: mcq.options[mcq.correct],
    options: mcq.options,
    topic: mcq.subtopic,
    isWordProblem: false,
  };
}

export function generateIslandQuestionsPhysikK8(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  // Fetch questions from the curriculum
  const curriculumQuestions = getK8Questions(island.topicKeys, count * 5);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q));
    }
  }

  return pool;
}

export function generateCheckpointQuestionsPhysikK8(testId: string, count = 15): MathQuestion[] {
  const keys = PHYSIK_K8_CHECKPOINT_TOPICS[testId] || [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  const curriculumQuestions = getK8Questions(keys, count * 10);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q));
    }
  }

  return pool;
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundPhysikK8(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsPhysikK8(questions: MathQuestion[]): MatchPair[] {
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
