// lib/astroPhysik6.ts
// AstroPhysik — Klasse 6 island system definitions, progress management, question helpers
// Physics (Physik) for 11-12 year old students

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { getK6Questions } from "./physikCurriculum6";
import "@/lib/physikRegistration";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PhysikK6Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// Generic name alias for consistency with page.tsx API
export type PhysikProgress = PhysikK6Progress;

// ─── Constants ────────────────────────────────────────────────────────────────

export const PHYSIK_K6_SAVE_KEY = "astro_physik_k6_v1";

export const PHYSIK_K6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const PHYSIK_K6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["lever", "pulley", "inclined_plane", "wheel_axle", "screw", "pressure_basics", "liquid_pressure", "atmospheric_pressure"],
  test2: ["hydraulics", "buoyancy", "series_circuits", "parallel_circuits", "current_voltage", "resistance", "electrical_safety"],
  test3: ["density_basics", "floating_sinking", "density_calculation", "archimedes", "energy_chains", "efficiency", "wave_properties", "sound_properties", "ultrasound"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// 9 islands covering Klasse 6 Physics curriculum in thematic order

export const PHYSIK_K6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Simple Machines", hu: "Egyszerű gépek", de: "Einfache Maschinen", ro: "Mașini simple" },
    icon: "⚙️", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["lever", "pulley", "inclined_plane"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-machines-explorer",      icon: "🔭", label: { en: "Discover Machines",    hu: "Gépek felfedezése",       de: "Maschinen entdecken",      ro: "Descoperă mașini"         } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Machines Match",       hu: "Gépek párosítása",        de: "Maschinen-Paare",          ro: "Perechi mașini"           } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Machines Challenge",   hu: "Gépek kihívása",          de: "Maschinen-Herausforderung",ro: "Provocare mașini"         } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Wheel & Screw", hu: "Kerék és csavar", de: "Rad & Schraube", ro: "Roată și șurub" },
    icon: "🔩", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["wheel_axle", "screw"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-wheel-explorer",        icon: "🔭", label: { en: "Discover Wheel",       hu: "Kerék felfedezése",       de: "Rad entdecken",            ro: "Descoperă roată"          } },
      { id: "m2", category: "build",     gameType: "gravity-sort",               icon: "🌪️", label: { en: "Wheel Sort",          hu: "Kerék rendezése",         de: "Rad sortieren",            ro: "Sortează roată"           } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Wheel Quiz",          hu: "Kerék kvíz",              de: "Radquiz",                  ro: "Quiz roată"               } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Pressure", hu: "Nyomás", de: "Druck", ro: "Presiune" },
    icon: "💨", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["pressure_basics", "liquid_pressure", "atmospheric_pressure"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-pressure-explorer",     icon: "🔭", label: { en: "Discover Pressure",    hu: "Nyomás felfedezése",      de: "Druck entdecken",          ro: "Descoperă presiune"       } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Pressure Quiz",       hu: "Nyomás kvíz",             de: "Druckquiz",                ro: "Quiz presiune"            } },
      { id: "m3", category: "challenge", gameType: "star-match",                 icon: "⭐", label: { en: "Pressure Match",      hu: "Nyomás párosítása",       de: "Druck-Paare",              ro: "Perechi presiune"         } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Hydraulics & Buoyancy", hu: "Hidraulika és felhajtóerő", de: "Hydraulik & Auftrieb", ro: "Hidraulică și flotabilitate" },
    icon: "🚢", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["hydraulics", "buoyancy"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-hydraulics-explorer",   icon: "🔭", label: { en: "Discover Hydraulics",  hu: "Hidraulika felfedezése",  de: "Hydraulik entdecken",      ro: "Descoperă hidraulică"     } },
      { id: "m2", category: "build",     gameType: "black-hole",                 icon: "🕳️", label: { en: "Hydraulics Quiz",    hu: "Hidraulika kvíz",         de: "Hydraulikquiz",            ro: "Quiz hidraulică"          } },
      { id: "m3", category: "challenge", gameType: "star-match",                 icon: "⭐", label: { en: "Buoyancy Match",      hu: "Felhajtóerő párosítása",  de: "Auftrieb-Paare",           ro: "Perechi flotabilitate"    } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Circuits", hu: "Elektromos áramkörök", de: "Stromkreise", ro: "Circuite electrice" },
    icon: "🔌", color: "#8B5CF6", sortRange: [1, 10],
    topicKeys: ["series_circuits", "parallel_circuits"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-circuits-explorer",     icon: "🔭", label: { en: "Discover Circuits",    hu: "Áramkörök felfedezése",   de: "Stromkreise entdecken",    ro: "Descoperă circuite"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort",               icon: "🌪️", label: { en: "Circuits Sort",       hu: "Áramkörök rendezése",     de: "Stromkreise sortieren",    ro: "Sortează circuite"        } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Circuits Quiz",       hu: "Áramkörök kvíz",          de: "Stromkreisquiz",           ro: "Quiz circuite"            } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Current & Safety", hu: "Áram és biztonság", de: "Strom & Sicherheit", ro: "Curent și siguranță" },
    icon: "⚡", color: "#FF6B35", sortRange: [1, 10],
    topicKeys: ["current_voltage", "resistance", "electrical_safety"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-current-explorer",      icon: "🔭", label: { en: "Discover Current",     hu: "Áram felfedezése",        de: "Strom entdecken",          ro: "Descoperă curent"         } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Current Match",       hu: "Áram párosítása",         de: "Strom-Paare",              ro: "Perechi curent"           } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Safety Challenge",    hu: "Biztonság kihívása",      de: "Sicherheits-Herausforderung",ro: "Provocare siguranță"      } },
    ],
    svgX: 120, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Density", hu: "Sűrűség", de: "Dichte", ro: "Densitate" },
    icon: "⚖️", color: "#FBBF24", sortRange: [1, 10],
    topicKeys: ["density_basics", "floating_sinking", "density_calculation", "archimedes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-density-explorer",      icon: "🔭", label: { en: "Discover Density",     hu: "Sűrűség felfedezése",     de: "Dichte entdecken",         ro: "Descoperă densitate"      } },
      { id: "m2", category: "build",     gameType: "gravity-sort",               icon: "🌪️", label: { en: "Density Sort",        hu: "Sűrűség rendezése",       de: "Dichte sortieren",         ro: "Sortează densitate"       } },
      { id: "m3", category: "challenge", gameType: "star-match",                 icon: "⭐", label: { en: "Archimedes Match",    hu: "Arkhimédész párosítása",  de: "Archimedes-Paare",         ro: "Perechi Arhimede"         } },
    ],
    svgX: 210, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Energy Transfer", hu: "Energiaátvitel", de: "Energieübertragung", ro: "Transfer de energie" },
    icon: "🏭", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["energy_chains", "efficiency", "power_plants", "renewable_energy", "fossil_fuels"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-energytransfer-explorer", icon: "🔭", label: { en: "Discover Energy Transfer", hu: "Energiaátvitel felfedezése", de: "Energieübertragung entdecken", ro: "Descoperă transfer energie" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",                 icon: "🚀", label: { en: "Energy Transfer Quiz", hu: "Energiaátvitel kvíz",       de: "Energieübertragungsquiz",  ro: "Quiz transfer energie"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",                 icon: "🕳️", label: { en: "Efficiency Challenge", hu: "Hatékonyság kihívása",     de: "Effizienz-Herausforderung", ro: "Provocare eficiență"     } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Waves & Sound Finale", hu: "Hullámok és hang nagy döntő", de: "Wellen & Schall Großes Finale", ro: "Unde și sunet - Marele Final" },
    icon: "🌊", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["wave_properties", "sound_properties", "ultrasound"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk6-waves-explorer",        icon: "🔭", label: { en: "Discover Waves",       hu: "Hullámok felfedezése",    de: "Wellen entdecken",         ro: "Descoperă unde"           } },
      { id: "m2", category: "build",     gameType: "star-match",                 icon: "⭐", label: { en: "Wave Match",          hu: "Hullámok párosítása",     de: "Wellen-Paare",             ro: "Perechi unde"             } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",               icon: "🌪️", label: { en: "Final Sort",         hu: "Végső rendezés",          de: "Abschlusssortierung",      ro: "Sortare finală"           } },
    ],
    svgX: 190, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadPhysikK6Progress(): PhysikK6Progress {
  try {
    const raw = localStorage.getItem(PHYSIK_K6_SAVE_KEY);
    if (raw) return JSON.parse(raw) as PhysikK6Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function savePhysikK6Progress(p: PhysikK6Progress): void {
  localStorage.setItem(PHYSIK_K6_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDonePhysikK6(progress: PhysikK6Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDonePhysikK6(progress: PhysikK6Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedPhysikK6(progress: PhysikK6Progress, islandId: string): boolean {
  const idx = PHYSIK_K6_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(PHYSIK_K6_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedPhysikK6(progress: PhysikK6Progress, testId: string): boolean {
  return PHYSIK_K6_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDonePhysikK6(progress: PhysikK6Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionPhysikK6(
  progress: PhysikK6Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): PhysikK6Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: PhysikK6Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = PHYSIK_K6_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsPhysikK6(progress: PhysikK6Progress, islandId: string): number {
  const island = PHYSIK_K6_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestPhysikK6(progress: PhysikK6Progress, testId: string): PhysikK6Progress {
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

export function generateIslandQuestionsPhysikK6(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  // Fetch questions from the curriculum
  const curriculumQuestions = getK6Questions(island.topicKeys, count * 5);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q));
    }
  }

  return pool;
}

export function generateCheckpointQuestionsPhysikK6(testId: string, count = 15): MathQuestion[] {
  const keys = PHYSIK_K6_CHECKPOINT_TOPICS[testId] || [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  const curriculumQuestions = getK6Questions(keys, count * 10);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q));
    }
  }

  return pool;
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundPhysikK6(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsPhysikK6(questions: MathQuestion[]): MatchPair[] {
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
