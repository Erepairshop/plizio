// lib/astroPhysik5.ts
// AstroPhysik — Klasse 5 island system definitions, progress management, question helpers
// Physics (Physik) for 10-11 year old students

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { getK5Questions } from "./physikCurriculum5";
import "@/lib/physikRegistration";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PhysikK5Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// Generic name alias for consistency with page.tsx API
export type PhysikProgress = PhysikK5Progress;

// ─── Constants ────────────────────────────────────────────────────────────────

export const PHYSIK_K5_SAVE_KEY = "astro_physik_k5_v1";

export const PHYSIK_K5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const PHYSIK_K5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["push_pull", "friction", "gravity", "weight_mass", "air_resistance", "force_measurement"],
  test2: ["energy_forms", "kinetic_energy", "potential_energy", "energy_conversion", "energy_conservation", "temperature"],
  test3: ["light_sources", "shadows", "reflection", "refraction", "colors_spectrum", "sound_waves", "pitch_volume", "echo", "speed_of_sound", "magnets", "magnetic_field", "static_electricity", "simple_circuits"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// 9 islands covering Klasse 5 Physics curriculum in thematic order

export const PHYSIK_K5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Forces Basics", hu: "Erők alapjai", de: "Kraftgrundlagen", ro: "Bazele forțelor" },
    icon: "💪", color: "#EF4444", sortRange: [1, 10],
    topicKeys: ["push_pull", "friction"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-forces-explorer",     icon: "🔭", label: { en: "Discover Forces",     hu: "Erők felfedezése",        de: "Kräfte entdecken",         ro: "Descoperă forțe"        } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Forces Match",        hu: "Erők párosítása",         de: "Kraft-Paare",              ro: "Perechi forțe"          } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Forces Challenge",    hu: "Erők kihívása",           de: "Kraft-Herausforderung",    ro: "Provocare forțe"        } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Gravity & Weight", hu: "Gravitáció és súly", de: "Schwerkraft & Gewicht", ro: "Gravitație și greutate" },
    icon: "🌍", color: "#F59E0B", sortRange: [1, 10],
    topicKeys: ["gravity", "weight_mass", "air_resistance"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-gravity-explorer",    icon: "🔭", label: { en: "Discover Gravity",    hu: "Gravitáció felfedezése",   de: "Schwerkraft entdecken",    ro: "Descoperă gravitație"   } },
      { id: "m2", category: "build",     gameType: "gravity-sort",            icon: "🌪️", label: { en: "Weight Sort",        hu: "Súly rendezése",          de: "Gewicht sortieren",        ro: "Sortează greutate"      } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",              icon: "🚀", label: { en: "Weight Quiz",         hu: "Súly kvíz",               de: "Gewichtsquiz",             ro: "Quiz greutate"          } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Force Measurement", hu: "Erőmérés", de: "Kraftmessung", ro: "Măsurarea forței" },
    icon: "📏", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["force_measurement"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-measurement-explorer", icon: "🔭", label: { en: "Discover Measuring",  hu: "Mérés felfedezése",       de: "Messung entdecken",        ro: "Descoperă măsurare"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",              icon: "🚀", label: { en: "Measurement Quiz",    hu: "Mérés kvíz",              de: "Messungsquiz",             ro: "Quiz măsurare"          } },
      { id: "m3", category: "challenge", gameType: "star-match",              icon: "⭐", label: { en: "Measure Match",       hu: "Mérés párosítása",        de: "Messungs-Paare",           ro: "Perechi măsurare"       } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Energy Forms", hu: "Energiaformák", de: "Energieformen", ro: "Forme de energie" },
    icon: "⚡", color: "#3B82F6", sortRange: [1, 10],
    topicKeys: ["energy_forms", "kinetic_energy", "potential_energy"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-energy-explorer",     icon: "🔭", label: { en: "Discover Energy",     hu: "Energia felfedezése",     de: "Energie entdecken",        ro: "Descoperă energie"      } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Energy Match",        hu: "Energia párosítása",      de: "Energie-Paare",            ro: "Perechi energie"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Energy Challenge",    hu: "Energia kihívása",        de: "Energie-Herausforderung",  ro: "Provocare energie"      } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Energy Conversion", hu: "Energiaátalakulás", de: "Energieumwandlung", ro: "Conversia energiei" },
    icon: "🔄", color: "#8B5CF6", sortRange: [1, 10],
    topicKeys: ["energy_conversion", "energy_conservation"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-conversion-explorer", icon: "🔭", label: { en: "Discover Conversion",  hu: "Átalakulás felfedezése",  de: "Umwandlung entdecken",     ro: "Descoperă conversie"    } },
      { id: "m2", category: "build",     gameType: "gravity-sort",            icon: "🌪️", label: { en: "Energy Sort",        hu: "Energia rendezése",       de: "Energie sortieren",        ro: "Sortează energie"       } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",              icon: "🚀", label: { en: "Conversion Quiz",     hu: "Átalakulás kvíz",         de: "Umwandlungsquiz",          ro: "Quiz conversie"         } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Heat & States", hu: "Hő és halmazállapotok", de: "Wärme & Aggregatzustände", ro: "Căldură și stări" },
    icon: "🌡️", color: "#FF6B35", sortRange: [1, 10],
    topicKeys: ["temperature", "heat_transfer", "states_of_matter", "melting_boiling"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-heat-explorer",       icon: "🔭", label: { en: "Discover Heat",       hu: "Hő felfedezése",          de: "Wärme entdecken",          ro: "Descoperă căldură"      } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Heat Match",          hu: "Hő párosítása",           de: "Wärme-Paare",              ro: "Perechi căldură"        } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Heat Challenge",      hu: "Hő kihívása",             de: "Wärme-Herausforderung",    ro: "Provocare căldură"      } },
    ],
    svgX: 120, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Light & Optics", hu: "Fény és optika", de: "Licht & Optik", ro: "Lumină și optică" },
    icon: "💡", color: "#FBBF24", sortRange: [1, 10],
    topicKeys: ["light_sources", "shadows", "reflection", "refraction", "colors_spectrum"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-light-explorer",      icon: "🔭", label: { en: "Discover Light",      hu: "Fény felfedezése",        de: "Licht entdecken",          ro: "Descoperă lumină"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort",            icon: "🌪️", label: { en: "Light Sort",         hu: "Fény rendezése",          de: "Licht sortieren",          ro: "Sortează lumină"        } },
      { id: "m3", category: "challenge", gameType: "star-match",              icon: "⭐", label: { en: "Optics Match",        hu: "Optika párosítása",       de: "Optik-Paare",              ro: "Perechi optică"         } },
    ],
    svgX: 210, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Sound & Waves", hu: "Hang és hullámok", de: "Schall & Wellen", ro: "Sunet și unde" },
    icon: "🔊", color: "#14B8A6", sortRange: [1, 10],
    topicKeys: ["sound_waves", "pitch_volume", "echo", "speed_of_sound"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-sound-explorer",      icon: "🔭", label: { en: "Discover Sound",      hu: "Hang felfedezése",        de: "Schall entdecken",         ro: "Descoperă sunet"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",              icon: "🚀", label: { en: "Sound Quiz",          hu: "Hang kvíz",               de: "Schallquiz",               ro: "Quiz sunet"             } },
      { id: "m3", category: "challenge", gameType: "black-hole",              icon: "🕳️", label: { en: "Sound Challenge",     hu: "Hang kihívása",           de: "Schall-Herausforderung",   ro: "Provocare sunet"        } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Magnetism Grand Finale", hu: "Mágnesesség nagy döntő", de: "Magnetismus Großes Finale", ro: "Magnetism - Marele Final" },
    icon: "🧲", color: "#EC4899", sortRange: [1, 10],
    topicKeys: ["magnets", "magnetic_field", "static_electricity", "simple_circuits"],
    missions: [
      { id: "m1", category: "explore",   gameType: "pk5-magnetism-explorer",  icon: "🔭", label: { en: "Discover Magnetism",  hu: "Mágnesesség felfedezése", de: "Magnetismus entdecken",    ro: "Descoperă magnetism"    } },
      { id: "m2", category: "build",     gameType: "star-match",              icon: "⭐", label: { en: "Magnetic Match",      hu: "Mágneses párosítás",      de: "Magnet-Paare",             ro: "Perechi magnetic"       } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",            icon: "🌪️", label: { en: "Final Sort",         hu: "Végső rendezés",          de: "Abschlusssortierung",      ro: "Sortare finală"         } },
    ],
    svgX: 190, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadPhysikK5Progress(): PhysikK5Progress {
  try {
    const raw = localStorage.getItem(PHYSIK_K5_SAVE_KEY);
    if (raw) return JSON.parse(raw) as PhysikK5Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function savePhysikK5Progress(p: PhysikK5Progress): void {
  localStorage.setItem(PHYSIK_K5_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDonePhysikK5(progress: PhysikK5Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDonePhysikK5(progress: PhysikK5Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedPhysikK5(progress: PhysikK5Progress, islandId: string): boolean {
  const idx = PHYSIK_K5_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(PHYSIK_K5_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedPhysikK5(progress: PhysikK5Progress, testId: string): boolean {
  return PHYSIK_K5_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDonePhysikK5(progress: PhysikK5Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionPhysikK5(
  progress: PhysikK5Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): PhysikK5Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: PhysikK5Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = PHYSIK_K5_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsPhysikK5(progress: PhysikK5Progress, islandId: string): number {
  const island = PHYSIK_K5_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestPhysikK5(progress: PhysikK5Progress, testId: string): PhysikK5Progress {
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

export function generateIslandQuestionsPhysikK5(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  // Fetch questions from the curriculum
  const curriculumQuestions = getK5Questions(island.topicKeys, count * 5);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q));
    }
  }

  return pool;
}

export function generateCheckpointQuestionsPhysikK5(testId: string, count = 15): MathQuestion[] {
  const keys = PHYSIK_K5_CHECKPOINT_TOPICS[testId] || [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  const curriculumQuestions = getK5Questions(keys, count * 10);

  for (const q of curriculumQuestions) {
    if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
      seen.add(q.question);
      pool.push(convertMCQToMathQuestion(q));
    }
  }

  return pool;
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundPhysikK5(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsPhysikK5(questions: MathQuestion[]): MatchPair[] {
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
