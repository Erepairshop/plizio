// lib/astroSachkunde1.ts
// AstroSachkunde — G1 (Grade 1) island system definitions, progress management, question helpers
// Sachkunde (German Environmental Science) for 6-7 year old students

import { type MathQuestion } from "./mathCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import { G1_Generators_Sachkunde } from "./sachkundeGenerators1";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SachkundeG1Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const SK_G1_SAVE_KEY = "astrosachkunde_g1_v1";

export const SK_G1_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const SK_G1_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["körperteile", "sinnesorgane", "gesundheit_hygiene", "haustiere", "wilde_tiere", "tierlaute"],
  test2: ["jahreszeiten_natur", "bäume", "blueten_fruechte", "wetter", "jahreszeiten_detail", "monate_tage"],
  test3: ["familie", "zuhause", "regeln_verhalten", "verkehrsmittel", "verkehrsregeln", "sicherheit"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────
// 9 islands covering Grade 1 Sachkunde curriculum in thematic order

export const SK_G1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Body & Senses", hu: "Test és érzékek", de: "Körper & Sinne", ro: "Corp și simțuri" },
    icon: "👤", color: "#FF6B9D", sortRange: [1, 10],
    topicKeys: ["körperteile", "sinnesorgane", "gesundheit_hygiene"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Discover Body Parts",  hu: "Testrészek felfedezése",  de: "Körperteile entdecken",      ro: "Descoperă părți corpului"   } },
      { id: "m2", category: "build",     gameType: "star-match",   icon: "⭐", label: { en: "Sense Quiz",          hu: "Érzékek kvíz",             de: "Sinnesquiz",                ro: "Quiz simțuri"              } },
      { id: "m3", category: "challenge", gameType: "black-hole",   icon: "🕳️", label: { en: "Health Challenge",   hu: "Egészség kihívás",         de: "Gesundheits-Herausforderung", ro: "Provocare sănătate"         } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Pets & Wild Animals", hu: "Háziallatások és vadállatok", de: "Haustiere & Wilde Tiere", ro: "Animale de companie & Animale sălbatice" },
    icon: "🐾", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["haustiere", "wilde_tiere", "tierlaute"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Discover Animals",    hu: "Állatok felfedezése",      de: "Tiere entdecken",            ro: "Descoperă animale"         } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Animal Sorting",     hu: "Állatok rendezése",        de: "Tiere sortieren",            ro: "Sortează animale"          } },
      { id: "m3", category: "challenge", gameType: "true-false-blitz", icon: "⚡", label: { en: "Sound Challenge",    hu: "Hangok kihívása",          de: "Tierlaut-Herausforderung",   ro: "Provocare sunete"          } },
    ],
    svgX: 90, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Seasons & Nature", hu: "Évszakok és természet", de: "Jahreszeiten & Natur", ro: "Anotimpuri & Natură" },
    icon: "🌿", color: "#95E1D3", sortRange: [1, 10],
    topicKeys: ["jahreszeiten_natur", "bäume", "blueten_fruechte"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Discover Nature",    hu: "Természet felfedezése",    de: "Natur entdecken",            ro: "Descoperă natură"          } },
      { id: "m2", category: "build",     gameType: "star-match",   icon: "⭐", label: { en: "Tree & Flower Quiz", hu: "Fa és virág kvíz",         de: "Baum- & Blütenquiz",        ro: "Quiz arbore și floare"     } },
      { id: "m3", category: "challenge", gameType: "black-hole",   icon: "🕳️", label: { en: "Season Challenge",   hu: "Évszak kihívás",           de: "Jahreszeiten-Herausforderung", ro: "Provocare anotimpuri"       } },
    ],
    svgX: 220, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Weather & Calendar", hu: "Időjárás és naptár", de: "Wetter & Kalender", ro: "Vreme & Calendar" },
    icon: "☁️", color: "#F7DC6F", sortRange: [1, 10],
    topicKeys: ["wetter", "jahreszeiten_detail", "monate_tage"],
    missions: [
      { id: "m1", category: "explore",   gameType: "true-false-blitz", icon: "🔍", label: { en: "Weather Explorer",   hu: "Időjárás feltáró",         de: "Wetter-Erkunder",            ro: "Explorator vreme"          } },
      { id: "m2", category: "build",     gameType: "star-match",   icon: "⭐", label: { en: "Calendar Quiz",      hu: "Naptár kvíz",              de: "Kalenderquiz",              ro: "Quiz calendar"             } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",   icon: "🚀", label: { en: "Weather Battle",    hu: "Időjárás csata",           de: "Wetter-Kampf",              ro: "Bătălie vreme"             } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Family & Home", hu: "Család és otthon", de: "Familie & Zuhause", ro: "Familie & Casă" },
    icon: "🏠", color: "#BB8FCE", sortRange: [1, 10],
    topicKeys: ["familie", "zuhause", "regeln_verhalten"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Family Explorer",    hu: "Család feltárása",         de: "Familie entdecken",          ro: "Descoperă familie"         } },
      { id: "m2", category: "build",     gameType: "star-match",   icon: "⭐", label: { en: "Home Quiz",         hu: "Otthon kvíz",              de: "Zuhause-Quiz",              ro: "Quiz casă"                 } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { en: "Rules Challenge",   hu: "Szabályok kihívása",       de: "Regeln-Herausforderung",     ro: "Provocare reguli"          } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Traffic & Safety", hu: "Közlekedés és biztonság", de: "Verkehr & Sicherheit", ro: "Trafic & Siguranță" },
    icon: "🚦", color: "#F0B27A", sortRange: [1, 10],
    topicKeys: ["verkehrsmittel", "verkehrsregeln", "sicherheit"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Discover Transport",  hu: "Közlekedés felfedezése",   de: "Verkehrsmittel entdecken",   ro: "Descoperă transport"       } },
      { id: "m2", category: "build",     gameType: "true-false-blitz", icon: "⚡", label: { en: "Safety Quiz",       hu: "Biztonság kvíz",           de: "Sicherheitsquiz",           ro: "Quiz siguranță"            } },
      { id: "m3", category: "challenge", gameType: "black-hole",   icon: "🕳️", label: { en: "Rules Challenge",   hu: "Forgalmi szabályok",       de: "Verkehrsregeln-Herausforderung", ro: "Provocare reguli trafic"    } },
    ],
    svgX: 120, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Materials & Recycling", hu: "Anyagok és újrahasznosítás", de: "Materialien & Recycling", ro: "Materiale & Reciclare" },
    icon: "♻️", color: "#76D7C4", sortRange: [1, 10],
    topicKeys: ["materialien", "mülltrennung"],
    missions: [
      { id: "m1", category: "explore",   gameType: "star-match",   icon: "🔍", label: { en: "Material Explorer",   hu: "Anyagok feltárása",        de: "Materialien entdecken",      ro: "Descoperă materiale"       } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",   icon: "🚀", label: { en: "Waste Sorting",      hu: "Hulladékrendezés",         de: "Müll sortieren",            ro: "Sortare gunoi"             } },
      { id: "m3", category: "challenge", gameType: "true-false-blitz", icon: "⚡", label: { en: "Recycling Quest",   hu: "Újrahasznosítás küldetés",  de: "Recycling-Quest",           ro: "Misiune reciclare"         } },
    ],
    svgX: 210, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Nature Review", hu: "Természet ismétlés", de: "Natur Wiederholung", ro: "Revizuire natură" },
    icon: "🌳", color: "#85C1E9", sortRange: [1, 10],
    topicKeys: ["jahreszeiten_natur", "wilde_tiere", "bäume"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Nature Quiz",       hu: "Természet kvíz",           de: "Natur-Quiz",                ro: "Quiz natură"               } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { en: "Animal Sort",      hu: "Állatok rendezése",        de: "Tiere sortieren",            ro: "Sortare animale"           } },
      { id: "m3", category: "challenge", gameType: "star-match",   icon: "⭐", label: { en: "Forest Match",      hu: "Erdő párosítás",           de: "Wald-Paare",                ro: "Perechi pădure"            } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Grand Finale", hu: "Nagy döntő", de: "Großes Finale", ro: "Marele Final" },
    icon: "🏆", color: "#F1948A", sortRange: [1, 10],
    topicKeys: ["körperteile", "haustiere", "wetter", "verkehrsmittel"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",   icon: "🔍", label: { en: "Grand Quiz",        hu: "Nagy kvíz",                de: "Großes Quiz",               ro: "Quiz Mare"                 } },
      { id: "m2", category: "build",     gameType: "black-hole",   icon: "🕳️", label: { en: "Master Challenge",  hu: "Mester kihívás",           de: "Meister-Herausforderung",   ro: "Provocare maestru"         } },
      { id: "m3", category: "challenge", gameType: "star-match",   icon: "⭐", label: { en: "Final Match",       hu: "Végső párosítás",          de: "Abschließendes Pairing",    ro: "Pereche finală"            } },
    ],
    svgX: 190, svgY: -100,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadSKG1Progress(): SachkundeG1Progress {
  try {
    const raw = localStorage.getItem(SK_G1_SAVE_KEY);
    if (raw) return JSON.parse(raw) as SachkundeG1Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveSKG1Progress(p: SachkundeG1Progress): void {
  localStorage.setItem(SK_G1_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDoneSKG1(progress: SachkundeG1Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneSKG1(progress: SachkundeG1Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedSKG1(progress: SachkundeG1Progress, islandId: string): boolean {
  const idx = SK_G1_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(SK_G1_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedSKG1(progress: SachkundeG1Progress, testId: string): boolean {
  return SK_G1_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneSKG1(progress: SachkundeG1Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionSKG1(
  progress: SachkundeG1Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): SachkundeG1Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: SachkundeG1Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = SK_G1_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsSKG1(progress: SachkundeG1Progress, islandId: string): number {
  const island = SK_G1_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestSKG1(progress: SachkundeG1Progress, testId: string): SachkundeG1Progress {
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

function isMCQQuestion(q: CurriculumMCQ): boolean {
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

export function generateIslandQuestionsSKG1(island: IslandDef, count = 10): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = G1_Generators_Sachkunde[key as keyof typeof G1_Generators_Sachkunde];
    if (!gen) continue;

    const qs = gen();
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(convertMCQToMathQuestion(q));
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestionsSKG1(testId: string, count = 10): MathQuestion[] {
  const keys = shuffle([...(SK_G1_CHECKPOINT_TOPICS[testId] || [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const gen = G1_Generators_Sachkunde[key as keyof typeof G1_Generators_Sachkunde];
    if (!gen) continue;

    const qs = gen();
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(convertMCQToMathQuestion(q));
      }
    }
  }
  return pool;
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundSKG1(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsSKG1(questions: MathQuestion[]): MatchPair[] {
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
