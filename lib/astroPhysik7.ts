// lib/astroPhysik7.ts
// AstroPhysik — Klasse 7 island system definitions, progress management, question helpers
// Physics (Physik) for 12-13 year old students

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { getK7Questions } from "./physikCurriculum7";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PhysikK7Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// Generic name alias for consistency with page.tsx API
export type PhysikProgress = PhysikK7Progress;

// ─── Constants ────────────────────────────────────────────────────────────────

export const PHYSIK_K7_SAVE_KEY = "astro_physik_k7_v1";

export const PHYSIK_K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const PHYSIK_K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["speed_velocity", "acceleration", "newton_first", "newton_second", "newton_third", "work", "power"],
  test2: ["kinetic_energy_calc", "potential_energy_calc", "mechanical_advantage", "lenses_convex", "lenses_concave", "image_formation", "eye_optics", "optical_instruments"],
  test3: ["thermal_expansion", "specific_heat", "phase_changes", "heat_engines", "wave_equation", "electromagnetic_spectrum", "gravity_universal", "solar_system", "orbits"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// 9 islands covering Klasse 7 Physics curriculum in thematic order

export const PHYSIK_K7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Speed & Velocity", hu: "Sebesség és gyorsulás", de: "Geschwindigkeit & Beschleunigung", ro: "Viteză și accelerație" },
    icon: "🏎️", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["speed_velocity", "acceleration"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Speed",       hu: "Sebesség felfedezése",      de: "Geschwindigkeit entdecken", ro: "Descoperă viteză"        } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Speed Match",          hu: "Sebesség párosítása",      de: "Geschwindigkeits-Paare",    ro: "Perechi viteză"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Speed Challenge",     hu: "Sebesség kihívása",        de: "Geschwindigkeits-Challenge", ro: "Provocare viteză"        } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Newton's Laws", hu: "Newton törvényei", de: "Newtonsche Gesetze", ro: "Legile lui Newton" },
    icon: "🍎", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["newton_first", "newton_second", "newton_third"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Newton",       hu: "Newton törvényei",         de: "Newton entdecken",         ro: "Descoperă Newton"         } },
      { id: "m2", category: "build",     gameType: "gravity-sort",               icon: "🌪️", label: { en: "Forces Sort",         hu: "Erők rendezése",           de: "Kräfte sortieren",         ro: "Sortează forțe"          } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Newton Quiz",         hu: "Newton kvíz",              de: "Newton-Quiz",              ro: "Quiz Newton"             } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Work & Power", hu: "Munka és teljesítmény", de: "Arbeit & Leistung", ro: "Lucru și putere" },
    icon: "💪", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["work", "power"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Work",        hu: "Munka felfedezése",        de: "Arbeit entdecken",         ro: "Descoperă lucru"         } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Work Quiz",           hu: "Munka kvíz",               de: "Arbeitsquiz",              ro: "Quiz lucru"              } },
      { id: "m3", category: "challenge", gameType: "star-match",                 icon: "⭐", label: { en: "Power Match",         hu: "Teljesítmény párosítása",  de: "Leistungs-Paare",          ro: "Perechi putere"          } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Energy Calculations", hu: "Energiaszámítások", de: "Energieberechnungen", ro: "Calcule de energie" },
    icon: "🔋", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["kinetic_energy_calc", "potential_energy_calc", "mechanical_advantage"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Energy Calc", hu: "Energiaszámítás felfedezése", de: "Energieberechnung entdecken", ro: "Descoperă calcul energie" } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Energy Match",        hu: "Energia párosítása",       de: "Energie-Paare",            ro: "Perechi energie"         } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Energy Challenge",    hu: "Energia kihívása",         de: "Energie-Challenge",        ro: "Provocare energie"        } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Lenses & Optics", hu: "Lencsék és optika", de: "Linsen & Optik", ro: "Lentile și optică" },
    icon: "🔍", color: "#8B5CF6", sortRange: [1, 10],
    topicKeys: ["lenses_convex", "lenses_concave", "image_formation"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Lenses",      hu: "Lencsék felfedezése",      de: "Linsen entdecken",         ro: "Descoperă lentile"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort",               icon: "🌪️", label: { en: "Optics Sort",         hu: "Optika rendezése",         de: "Optik sortieren",          ro: "Sortează optică"         } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Lenses Quiz",        hu: "Lencsék kvíz",             de: "Linsen-Quiz",              ro: "Quiz lentile"            } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Eye & Instruments", hu: "Szem és eszközök", de: "Auge & Instrumente", ro: "Ochi și instrumente" },
    icon: "👁️", color: "#FF6B35", sortRange: [1, 10],
    topicKeys: ["eye_optics", "optical_instruments"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Eye",        hu: "Szem felfedezése",         de: "Auge entdecken",           ro: "Descoperă ochi"          } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Instrument Match",    hu: "Eszköz párosítása",        de: "Instrument-Paare",         ro: "Perechi instrument"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Eye Challenge",      hu: "Szem kihívása",            de: "Augen-Challenge",          ro: "Provocare ochi"          } },
    ],
    svgX: 120, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Thermodynamics", hu: "Termodinamika", de: "Thermodynamik", ro: "Termodinamică" },
    icon: "🌡️", color: "#FBBF24", sortRange: [1, 10],
    topicKeys: ["thermal_expansion", "specific_heat", "phase_changes", "heat_engines"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Thermo",      hu: "Termodinamika felfedezése", de: "Thermodynamik entdecken",  ro: "Descoperă termodynamică" } },
      { id: "m2", category: "build",     gameType: "gravity-sort",               icon: "🌪️", label: { en: "Heat Sort",          hu: "Hő rendezése",             de: "Wärme sortieren",          ro: "Sortează căldură"        } },
      { id: "m3", category: "challenge", gameType: "star-match",                 icon: "⭐", label: { en: "Thermo Match",       hu: "Termodinamika párosítása", de: "Thermodynamik-Paare",      ro: "Perechi termodynamică"   } },
    ],
    svgX: 210, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Waves & EM Spectrum", hu: "Hullámok és EM spektrum", de: "Wellen & EM-Spektrum", ro: "Unde și spectru EM" },
    icon: "🌊", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["wave_equation", "electromagnetic_spectrum", "infrared_uv", "wave_interference"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Waves",       hu: "Hullámok felfedezése",     de: "Wellen entdecken",         ro: "Descoperă unde"          } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Wave Quiz",          hu: "Hullám kvíz",              de: "Wellen-Quiz",              ro: "Quiz undă"               } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Spectrum Challenge",  hu: "Spektrum kihívása",        de: "Spektrum-Challenge",       ro: "Provocare spectru"       } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Earth & Space Finale", hu: "Föld és tér nagy döntő", de: "Erde & Weltall Finale", ro: "Pământ și spațiu - Final" },
    icon: "🌍", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["gravity_universal", "solar_system", "orbits", "seasons_tides", "space_exploration"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk7-explorer",               icon: "🔭", label: { en: "Discover Space",       hu: "Űr felfedezése",           de: "Weltall entdecken",        ro: "Descoperă spațiu"        } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Space Match",         hu: "Űr párosítása",            de: "Weltall-Paare",            ro: "Perechi spațiu"          } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",               icon: "🌪️", label: { en: "Final Sort",         hu: "Végső rendezés",           de: "Abschlusssortierung",      ro: "Sortare finală"          } },
    ],
    svgX: 190, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadPhysikK7Progress(): PhysikK7Progress {
  try {
    const raw = localStorage.getItem(PHYSIK_K7_SAVE_KEY);
    if (raw) return JSON.parse(raw) as PhysikK7Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function savePhysikK7Progress(p: PhysikK7Progress): void {
  localStorage.setItem(PHYSIK_K7_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDonePhysikK7(progress: PhysikK7Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDonePhysikK7(progress: PhysikK7Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedPhysikK7(progress: PhysikK7Progress, islandId: string): boolean {
  const idx = PHYSIK_K7_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(PHYSIK_K7_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedPhysikK7(progress: PhysikK7Progress, testId: string): boolean {
  return PHYSIK_K7_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDonePhysikK7(progress: PhysikK7Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionPhysikK7(
  progress: PhysikK7Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): PhysikK7Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: PhysikK7Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = PHYSIK_K7_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsPhysikK7(progress: PhysikK7Progress, islandId: string): number {
  const island = PHYSIK_K7_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestPhysikK7(progress: PhysikK7Progress, testId: string): PhysikK7Progress {
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

export function generateIslandQuestionsPhysikK7(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  // Fetch questions from the curriculum
  const curriculumQuestions = getK7Questions(island.topicKeys, count * 5);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q as any));
    }
  }

  return pool;
}

export function generateCheckpointQuestionsPhysikK7(testId: string, count = 15): MathQuestion[] {
  const keys = PHYSIK_K7_CHECKPOINT_TOPICS[testId] || [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  const curriculumQuestions = getK7Questions(keys, count * 10);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q as any));
    }
  }

  return pool;
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundPhysikK7(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsPhysikK7(questions: MathQuestion[]): MatchPair[] {
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
