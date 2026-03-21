// lib/astroMagyar2.ts
// AstroMagyar — O2 (2. osztály) island system + progress functions
// Grade 2: Szófajok, helyesírás, mondattan, szókincs, olvasáskészség
// For 7-8 year old students

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
  _lang: Lang | number = 2,
  count = 10,
): MathQuestion[] {
  const osztaly = typeof _lang === "number" ? _lang : 2;
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
  _lang: Lang | number = 2,
  count = 10,
): MathQuestion[] {
  const osztaly = typeof _lang === "number" ? _lang : 2;
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

// ─── O2 Constants ─────────────────────────────────────────────────────────────
export const O2_SAVE_KEY = "astromagyar_o2_v1";

export const O2_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O2_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "szofajok/fonev", "szofajok/ige", "szofajok/melleknev",
    "szofajok/nevelő", "szofajok/nevuto",
    "helyesiras/ly_j", "helyesiras/rovid_hosszu",
    "helyesiras/maganhangzo_harmonia", "helyesiras/hosszu_massalhangzo",
  ],
  test2: [
    "mondat/mondatfajtak", "mondat/mondatresz", "mondat/szorend",
    "szo/osszetetel", "szo/kepzok", "szo/tobbesszam", "szo/kotojelek",
  ],
  test3: [
    "ragozas/fonevreg", "ragozas/igereg",
    "szokincs/szinonimak", "szokincs/ellentetek2",
    "szokincs/termeszet", "szokincs/sport",
    "olvasas/mesek",
  ],
};

// ─── O2 Island Definitions ────────────────────────────────────────────────────
export const O2_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Word Types Island", hu: "Szófajok Szigete", de: "Wortarten-Insel", ro: "Insula tipurilor de cuvinte" },
    icon: "🔤", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["szofajok/fonev", "szofajok/ige", "szofajok/melleknev", "szofajok/nevelő", "szofajok/nevuto"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Reading Island", hu: "Olvasás Szigete", de: "Lese-Insel", ro: "Insula lecturii" },
    icon: "📖", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["olvasas/szokincs", "olvasas/szovegertes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "picture-word" as any, icon: "🖼️", label: { hu: "Szókincs",  en: "Vocabulary", de: "Wortschatz", ro: "Vocabular"  } },
      { id: "m2", category: "build",     gameType: "category-rush" as any, icon: "📦", label: { hu: "Rendezés", en: "Sort",       de: "Sortierung", ro: "Sortare"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",        icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Spelling Island", hu: "Helyesírás Szigete", de: "Rechtschreib-Insel", ro: "Insula ortografiei" },
    icon: "✏️", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["helyesiras/ly_j", "helyesiras/rovid_hosszu", "helyesiras/maganhangzo_harmonia", "helyesiras/hosszu_massalhangzo"],
    missions: [
      { id: "m1", category: "explore",   gameType: "memory-pair" as any,  icon: "🧠", label: { hu: "Memória",   en: "Memory",     de: "Gedächtnis",  ro: "Memorie"    } },
      { id: "m2", category: "build",     gameType: "category-rush" as any, icon: "📦", label: { hu: "Rendezés", en: "Sort",       de: "Sortierung", ro: "Sortare"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",          icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Grammar Island", hu: "Mondattan Szigete", de: "Grammatik-Insel", ro: "Insula gramaticii" },
    icon: "📝", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["mondat/mondatfajtak", "mondat/mondatresz", "mondat/szorend"],
    missions: [
      { id: "m1", category: "explore",   gameType: "memory-pair" as any,  icon: "🧠", label: { hu: "Memória",  en: "Vocabulary", de: "Wortschatz", ro: "Vocabular"  } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",           icon: "🪐", label: { hu: "Mondatépítő", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",          icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Compound Words Island", hu: "Szóösszetétel Szigete", de: "Zusammengesetzte Wörter-Insel", ro: "Insula compunerilor" },
    icon: "🔗", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szo/osszetetel", "szo/kepzok", "szo/tobbesszam", "szo/kotojelek"],
    missions: [
      { id: "m1", category: "explore",   gameType: "reading-comp" as any, icon: "📖", label: { hu: "Olvasás", en: "Build",  de: "Satzbau",     ro: "Construcție" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",              icon: "🪐", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",             icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Conjugation Island", hu: "Ragozás Szigete", de: "Konjugations-Insel", ro: "Insula conjugării" },
    icon: "📚", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["ragozas/fonevreg", "ragozas/igereg"],
    missions: [
      { id: "m1", category: "explore",   gameType: "memory-pair" as any,  icon: "🧠", label: { hu: "Memória",   en: "Memory",     de: "Gedächtnis",  ro: "Memorie"    } },
      { id: "m2", category: "build",     gameType: "category-rush" as any, icon: "📦", label: { hu: "Rendezés", en: "Sort",       de: "Sortierung", ro: "Sortare"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",          icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Synonyms Island", hu: "Szinonimák Szigete", de: "Synonyme-Insel", ro: "Insula sinonimelor" },
    icon: "🎭", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["szokincs/szinonimak", "szokincs/ellentetek2"],
    missions: [
      { id: "m1", category: "explore",   gameType: "memory-pair" as any,     icon: "🧠", label: { hu: "Memória",   en: "Memory",     de: "Gedächtnis",  ro: "Memorie"    } },
      { id: "m2", category: "build",     gameType: "sentence-builder" as any, icon: "🏗️", label: { hu: "Mondatépítő", en: "Build",  de: "Satzbau",     ro: "Construcție" } },
      { id: "m3", category: "challenge", gameType: "speed-round",             icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Vocabulary Island", hu: "Szókincs Szigete", de: "Wortschatz-Insel", ro: "Insula vocabularului" },
    icon: "🌍", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["szokincs/foglalkozasok", "szokincs/evszakok", "szokincs/iskola", "szokincs/termeszet", "szokincs/sport"],
    missions: [
      { id: "m1", category: "explore",   gameType: "reading-comp" as any, icon: "📖", label: { hu: "Olvasás",   en: "Reading",    de: "Lesen",       ro: "Lectură"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",         icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersazza"   } },
      { id: "m3", category: "challenge", gameType: "category-rush" as any, icon: "📦", label: { hu: "Rendezés", en: "Sort",       de: "Sortierung", ro: "Sortare"   } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "szofajok/fonev", "szofajok/ige", "helyesiras/ly_j",
      "mondat/mondatfajtak", "szokincs/szinonimak", "ragozas/igereg",
      "olvasas/mesek",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O2 Progress helpers ───────────────────────────────────────────────────────
export function loadO2Progress(): MagyarProgress {
  return loadMagyarProgress(O2_SAVE_KEY, O2_ISLANDS);
}
export function saveO2Progress(p: MagyarProgress): void {
  saveMagyarProgress(O2_SAVE_KEY, p);
}
export function isMissionDoneO2(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}
export function isIslandDoneO2(progress: MagyarProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}
export function isIslandUnlockedO2(progress: MagyarProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, O2_ISLANDS, islandId);
}
export function isCheckpointUnlockedO2(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, O2_CHECKPOINT_MAP, testId);
}
export function isCheckpointDoneO2(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}
export function completeMissionO2(progress: MagyarProgress, islandId: string, missionId: string, stars = 1): MagyarProgress {
  return completeMission(progress, O2_ISLANDS, islandId, missionId, stars);
}
export function islandTotalStarsO2(progress: MagyarProgress, islandId: string): number {
  return islandTotalStars(progress, O2_ISLANDS, islandId);
}
export function completeTestO2(progress: MagyarProgress, testId: string): MagyarProgress {
  return completeTest(progress, testId);
}
export function generateIslandQuestionsO2(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarIslandQuestions(island, 2, count);
}
export function generateCheckpointQuestionsO2(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarCheckpointQuestions(testId, O2_CHECKPOINT_TOPICS, 2, count);
}
