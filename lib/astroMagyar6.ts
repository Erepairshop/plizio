// lib/astroMagyar6.ts
// AstroMagyar — O6 (6. osztály) island system
// 9 islands for advanced Hungarian language learning
// Szaknyelv, retorika, szövegértelmezés, helyesírás, fogalmazás

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

// ─── Progress type (shared with O1, O2, etc.) ──────────────────────────────
export interface MagyarProgress {
  completedMissions: string[];   // "i1_m1", "i2_m2", …
  completedIslands: string[];    // "i1", "i2", …
  completedTests: string[];      // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3
}

// ─── Shuffle helper ────────────────────────────────────────────────────────
export function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Common question generator ────────────────────────────────────────────
export function generateMagyarIslandQuestions(
  island: IslandDef,
  _lang: Lang | number = 6,
  count = 10,
): MathQuestion[] {
  const osztaly = typeof _lang === "number" ? _lang : 6;
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

// ─── Match pairs (unique answers for StarMatch) ───────────────────────────
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

// ─── Checkpoint question generator ─────────────────────────────────────────
export function generateMagyarCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  _lang: Lang | number = 6,
  count = 10,
): MathQuestion[] {
  const osztaly = typeof _lang === "number" ? _lang : 6;
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

// ─── Progress helpers ──────────────────────────────────────────────────────
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

// ─── O6 Constants ──────────────────────────────────────────────────────────
export const O6_SAVE_KEY = "astromagyar_o6_v1";

export const O6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "mondat/osszetett_mellér", "mondat/osszetett_alár",
    "stilisztika/hasonlat_metafora", "stilisztika/megszemelyes",
  ],
  test2: [
    "szokincs/idegen_szavak", "szokincs/szakkifejezesek",
    "nyelvtort/nyelvcsal", "retorika/erveles_alap",
  ],
  test3: [
    "szoveg/ertelmez_halado", "helyesiras/tulajdonnev",
    "helyesiras/mozaikszó", "fogalmazas/essze", "fogalmazas/jellemzes",
  ],
};

// ─── O6 Island Definitions ────────────────────────────────────────────────
export const O6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Compound Sentences", hu: "Összetett mondatok", de: "Zusammengesetzte Sätze", ro: "Propoziții compuse" },
    icon: "🔗", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["mondat/osszetett_mellér", "mondat/osszetett_alár"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Stylistic Figures", hu: "Szóképek", de: "Stilistische Figuren", ro: "Figuri stilistice" },
    icon: "🎭", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["stilisztika/hasonlat_metafora", "stilisztika/megszemelyes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Advanced Vocabulary", hu: "Szókincs haladó", de: "Erweitertes Vokabular", ro: "Vocabular avansat" },
    icon: "📚", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["szokincs/idegen_szavak", "szokincs/szakkifejezesek"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Language History", hu: "Nyelvtörténet", de: "Sprachgeschichte", ro: "Istorie limbă" },
    icon: "🌍", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["nyelvtort/nyelvcsal", "nyelvtort/jovenényszavak"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Rhetoric Basics", hu: "Retorika alapok", de: "Rhetorik-Grundlagen", ro: "Bazele ritoricii" },
    icon: "💬", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["retorika/erveles_alap", "retorika/meggyozes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Text Comprehension", hu: "Szövegértelmezés", de: "Textverständnis", ro: "Înțelegere text" },
    icon: "🔍", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["szoveg/ertelmez_halado", "szoveg/elemzes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Proper Spelling", hu: "Helyesírás mester", de: "Orthographie-Meister", ro: "Maestrul ortografiei" },
    icon: "✅", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["helyesiras/tulajdonnev", "helyesiras/mozaikszó"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Advanced Composition", hu: "Fogalmazás haladó", de: "Fortgeschrittenes Schreiben", ro: "Redactare avansată" },
    icon: "✍️", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["fogalmazas/essze", "fogalmazas/jellemzes"],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "mondat/osszetett_mellér", "stilisztika/hasonlat_metafora",
      "szokincs/idegen_szavak", "nyelvtort/nyelvcsal", "retorika/erveles_alap",
      "szoveg/ertelmez_halado", "helyesiras/tulajdonnev", "fogalmazas/essze",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O6 Progress helpers ───────────────────────────────────────────────────
export function loadO6Progress(): MagyarProgress {
  return loadMagyarProgress(O6_SAVE_KEY, O6_ISLANDS);
}
export function saveO6Progress(p: MagyarProgress): void {
  saveMagyarProgress(O6_SAVE_KEY, p);
}
export function isMissionDoneO6(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}
export function isIslandDoneO6(progress: MagyarProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}
export function isIslandUnlockedO6(progress: MagyarProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, O6_ISLANDS, islandId);
}
export function isCheckpointUnlockedO6(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, O6_CHECKPOINT_MAP, testId);
}
export function isCheckpointDoneO6(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}
export function completeMissionO6(progress: MagyarProgress, islandId: string, missionId: string, stars = 1): MagyarProgress {
  return completeMission(progress, O6_ISLANDS, islandId, missionId, stars);
}
export function islandTotalStarsO6(progress: MagyarProgress, islandId: string): number {
  return islandTotalStars(progress, O6_ISLANDS, islandId);
}
export function completeTestO6(progress: MagyarProgress, testId: string): MagyarProgress {
  return completeTest(progress, testId);
}
export function generateIslandQuestionsO6(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarIslandQuestions(island, 6, count);
}
export function generateCheckpointQuestionsO6(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarCheckpointQuestions(testId, O6_CHECKPOINT_TOPICS, 6, count);
}
