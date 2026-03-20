// lib/astroMagyar.ts
// AstroMagyar — O1 (1. osztály) island system + common types + MagyarQuestion bridge
// 1. osztály: Betűk, szótagok, hangok, szavak, ellentétek, mondatok, szókincsen

import { MAGYAR_CURRICULUM, type MagyarMCQ } from "./magyarCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };
export type { MathQuestion } from "./mathCurriculum";
import type { MathQuestion } from "./mathCurriculum";

// ─── Bridge: MagyarMCQ → MathQuestion ──────────────────────────────────────
export function magyarToMathQuestion(mq: MagyarMCQ): MathQuestion {
  return {
    question: mq.question,
    correctAnswer: mq.options[mq.correct],
    options: [...mq.options],
    topic: mq.subtopic || mq.topic,
    isWordProblem: false,
    hasStringOptions: true,
  };
}

// ─── Progress type ─────────────────────────────────────────────────────────────
export interface MagyarProgress {
  completedMissions: string[];   // "i1_m1", "i1_m2", …
  completedIslands: string[];    // "i1", "i2", …
  completedTests: string[];      // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3
}

// ─── Shuffle helper ────────────────────────────────────────────────────────────
export function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Common question generator ────────────────────────────────────────────────
export function generateMagyarIslandQuestions(
  island: IslandDef,
  _lang: Lang | number = 1,
  count = 10,
): MathQuestion[] {
  const osztaly = typeof _lang === "number" ? _lang : 1;
  const themes = MAGYAR_CURRICULUM[osztaly] ?? [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);
    if (!subtopic) continue;

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as MagyarMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(magyarToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Match pairs (unique answers for StarMatch) ───────────────────────────────
export function generateMagyarMatchPairs(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({ left: q.question, right: String(q.correctAnswer) }));
}

// ─── Checkpoint question generator ───────────────────────────────────────────
export function generateMagyarCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  _lang: Lang | number = 1,
  count = 10,
): MathQuestion[] {
  const osztaly = typeof _lang === "number" ? _lang : 1;
  const themes = MAGYAR_CURRICULUM[osztaly] ?? [];
  const keys = shuffleArr([...(checkpointTopics[testId] ?? [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    if (!key) continue;
    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);
    if (!subtopic) continue;

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as MagyarMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(magyarToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Progress helpers (generic, reused by all grades) ─────────────────────────
export function loadMagyarProgress(saveKey: string, islands: IslandDef[]): MagyarProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as MagyarProgress;
  } catch {}
  void islands; // suppress unused warning
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveMagyarProgress(saveKey: string, p: MagyarProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(saveKey, JSON.stringify(p));
  }
}

export function isMissionDone(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: MagyarProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: MagyarProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(
  progress: MagyarProgress,
  checkpointMap: Record<string, string[]>,
  testId: string,
): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: MagyarProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: MagyarProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars: number = 1,
): MagyarProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: MagyarProgress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = islands.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStars(progress: MagyarProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: MagyarProgress, testId: string): MagyarProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── O1 Constants ─────────────────────────────────────────────────────────────
export const O1_SAVE_KEY = "astromagyar_o1_v1";

export const O1_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O1_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "betuk/maganhangzok", "betuk/massalhangzok", "betuk/abc_sorrend",
    "betuk/szotagszam", "betuk/betuparak", "betuk/kettozodes", "betuk/betufelismeres",
  ],
  test2: [
    "szavak/fonevek", "szavak/igek", "szavak/melleknevek",
    "szavak/ellentetek", "mondatok/mondatfajtak", "szavak/kicsinyitokepozo", "szavak/hangutanzo",
  ],
  test3: [
    "mondatok/irasjelek", "mondatok/nagybetu", "szokincs/allatok",
    "szokincs/szinek", "szokincs/csalad", "mondatok/kerdes_felelet",
    "szokincs/napszakok", "szokincs/ruhazat", "szokincs/idojaras", "szokincs/kozlekedes", "szokincs/heteknapjai",
  ],
};

// ─── O1 Island Definitions ────────────────────────────────────────────────────
export const O1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Letter Island", hu: "Betűsziget", de: "Buchstabeninsel", ro: "Insula literelor" },
    icon: "🔤", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["betuk/maganhangzok", "betuk/massalhangzok", "betuk/abc_sorrend", "betuk/kettozodes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",    icon: "🪐", label: { hu: "Betű rendezés",     en: "Letter Sort",      de: "Buchstaben-Sortierung", ro: "Sortare litere"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Villámkör",        en: "Speed Round",      de: "Blitzrunde",            ro: "Rundă rapidă"     } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Syllable Island", hu: "Szótagsziget", de: "Silbeninsel", ro: "Insula silabelor" },
    icon: "✂️", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["betuk/szotagszam", "betuk/elvalasztas", "betuk/betuparak", "betuk/betufelismeres"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spell-race",   icon: "🪐", label: { hu: "Szótag verseny",    en: "Syllable Race",    de: "Silben-Rennen",         ro: "Cursă silabe"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { hu: "Fekete lyuk",       en: "Black Hole",       de: "Schwarzes Loch",        ro: "Gaură neagră"     } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Sounds Island", hu: "Hangok szigete", de: "Laute-Insel", ro: "Insula sunetelor" },
    icon: "🎵", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["betuk/rovid_hosszu", "betuk/j_ly", "szavak/hangutanzo"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush", icon: "🪐", label: { hu: "Hang roham",        en: "Sound Rush",       de: "Laut-Ansturm",          ro: "Asalt sunete"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",  icon: "🪐", label: { hu: "Pálya kvíz",        en: "Orbit Quiz",       de: "Umlaufbahn-Quiz",       ro: "Quiz orbital"     } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Words Island", hu: "Szósziget", de: "Wörterinsel", ro: "Insula cuvintelor" },
    icon: "📝", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["szavak/fonevek", "szavak/igek", "szavak/melleknevek", "szavak/kicsinyitokepozo"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",    icon: "🪐", label: { hu: "Szó rendezés",     en: "Word Sort",        de: "Wort-Sortierung",       ro: "Sortare cuvinte"  } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Villámkör",        en: "Speed Round",      de: "Blitzrunde",            ro: "Rundă rapidă"     } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Opposites Island", hu: "Ellentétek szigete", de: "Gegenteil-Insel", ro: "Insula opuselor" },
    icon: "↔️", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szavak/ellentetek", "szavak/fonevek", "mondatok/kerdes_felelet"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder", icon: "🪐", label: { hu: "Ellentétek párosítás", en: "Opposite Match",    de: "Gegenteil-Zuordnung",    ro: "Potrivire opuse"  } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás",   en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { hu: "Fekete lyuk",         en: "Black Hole",       de: "Schwarzes Loch",        ro: "Gaură neagră"     } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Sentences Island", hu: "Mondatok szigete", de: "Satzinsel", ro: "Insula propozițiilor" },
    icon: "💬", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["mondatok/mondatfajtak", "mondatok/irasjelek", "mondatok/nagybetu", "szokincs/heteknapjai"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder", icon: "🪐", label: { hu: "Mondat építés",   en: "Build Sentences",  de: "Satz-Bau",              ro: "Construire propoziții" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",  icon: "🪐", label: { hu: "Pálya kvíz",        en: "Orbit Quiz",       de: "Umlaufbahn-Quiz",       ro: "Quiz orbital"     } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Animals Island", hu: "Állatok szigete", de: "Tier-Insel", ro: "Insula animalelor" },
    icon: "🐾", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["szokincs/allatok", "szokincs/szinek", "szokincs/napszakok"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush", icon: "🪐", label: { hu: "Állat roham",       en: "Animal Rush",      de: "Tier-Ansturm",          ro: "Asalt animale"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Villámkör",        en: "Speed Round",      de: "Blitzrunde",            ro: "Rundă rapidă"     } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Family Island", hu: "Család szigete", de: "Familie-Insel", ro: "Insula familiei" },
    icon: "👨‍👩‍👧", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["szokincs/csalad", "szokincs/testresz", "szokincs/elelmiszer", "szokincs/ruhazat"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap",     icon: "🪐", label: { hu: "Hiánypótlás",       en: "Fill Gaps",        de: "Lückentext",            ro: "Completare goluri" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { hu: "Fekete lyuk",       en: "Black Hole",       de: "Schwarzes Loch",        ro: "Gaură neagră"     } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "betuk/maganhangzok", "betuk/szotagszam", "szavak/fonevek",
      "szavak/ellentetek", "mondatok/irasjelek", "szokincs/allatok",
      "szokincs/idojaras", "szokincs/kozlekedes",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match", icon: "🪐", label: { hu: "Szabály párosítás", en: "Match Rules",      de: "Regel-Match",           ro: "Potrivire reguli" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { hu: "Csillag párosítás", en: "Star Match",       de: "Stern-Match",           ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🪨", label: { hu: "Gravitációs rendezés", en: "Gravity Sort",     de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O1 Progress helpers ───────────────────────────────────────────────────────
export function loadO1Progress(): MagyarProgress {
  return loadMagyarProgress(O1_SAVE_KEY, O1_ISLANDS);
}
export function saveO1Progress(p: MagyarProgress): void {
  saveMagyarProgress(O1_SAVE_KEY, p);
}
export function isMissionDoneO1(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}
export function isIslandDoneO1(progress: MagyarProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}
export function isIslandUnlockedO1(progress: MagyarProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, O1_ISLANDS, islandId);
}
export function isCheckpointUnlockedO1(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, O1_CHECKPOINT_MAP, testId);
}
export function isCheckpointDoneO1(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}
export function completeMissionO1(progress: MagyarProgress, islandId: string, missionId: string, stars = 1): MagyarProgress {
  return completeMission(progress, O1_ISLANDS, islandId, missionId, stars);
}
export function islandTotalStarsO1(progress: MagyarProgress, islandId: string): number {
  return islandTotalStars(progress, O1_ISLANDS, islandId);
}
export function completeTestO1(progress: MagyarProgress, testId: string): MagyarProgress {
  return completeTest(progress, testId);
}
export function generateIslandQuestionsO1(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarIslandQuestions(island, 1, count);
}
export function generateCheckpointQuestionsO1(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarCheckpointQuestions(testId, O1_CHECKPOINT_TOPICS, 1, count);
}
