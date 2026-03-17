// lib/astroDeutsch.ts
// AstroDeutsch — K1 island system + common types + DeutschQuestion bridge
// Klasse 1: Buchstaben, Silben, Wörter, Sätze, Bilder & Wortschatz

import { DEUTSCH_CURRICULUM, type DeutschMCQ } from "./deutschCurriculum";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };
export type { MathQuestion } from "./mathCurriculum";
import type { MathQuestion } from "./mathCurriculum";

// ─── Bridge: DeutschMCQ → MathQuestion ────────────────────────────────────────
export function deutschToMathQuestion(dq: DeutschMCQ): MathQuestion {
  return {
    question: dq.question,
    correctAnswer: dq.options[dq.correct],
    options: [...dq.options],
    topic: dq.subtopic || dq.topic,
    isWordProblem: false,
    hasStringOptions: true,
  };
}

// ─── Progress type ─────────────────────────────────────────────────────────────
export interface DeutschProgress {
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
export function generateDeutschIslandQuestions(
  island: IslandDef,
  klasse: number,
  count = 10,
): MathQuestion[] {
  const themes = DEUTSCH_CURRICULUM[klasse] ?? [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);
    if (!subtopic) continue;

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as DeutschMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(deutschToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Match pairs (unique answers for StarMatch) ───────────────────────────────
export function generateDeutschMatchPairs(questions: MathQuestion[]): MatchPair[] {
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
export function generateDeutschCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  klasse: number,
  count = 10,
): MathQuestion[] {
  const themes = DEUTSCH_CURRICULUM[klasse] ?? [];
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

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as DeutschMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(deutschToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Progress helpers (generic, reused by all grades) ─────────────────────────
export function loadDeutschProgress(saveKey: string, islands: IslandDef[]): DeutschProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as DeutschProgress;
  } catch {}
  void islands; // suppress unused warning
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveDeutschProgress(saveKey: string, p: DeutschProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(saveKey, JSON.stringify(p));
  }
}

export function isMissionDone(progress: DeutschProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: DeutschProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: DeutschProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(
  progress: DeutschProgress,
  checkpointMap: Record<string, string[]>,
  testId: string,
): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: DeutschProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: DeutschProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars: number = 1,
): DeutschProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: DeutschProgress = {
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

export function islandTotalStars(progress: DeutschProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: DeutschProgress, testId: string): DeutschProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── K1 Constants ─────────────────────────────────────────────────────────────
export const K1_SAVE_KEY = "astrodeutsch_k1_v1";

export const K1_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K1_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "buchstaben/vokale", "buchstaben/silben", "buchstaben/sp_st_anlaut",
    "woerter/artikel_k1", "woerter/fehlende_buchstaben",
  ],
  test2: [
    "woerter/komposita_k1", "woerter/reime", "woerter/verben_k1",
    "saetze_k1/satzzeichen_k1", "saetze_k1/fehlende_woerter_k1",
  ],
  test3: [
    "buchstaben/gross_klein", "buchstaben/zwielaute", "woerter/wortschatz_k1",
    "farben_k1/farben_k1", "zahlen_woerter_k1/zahlen_woerter_k1",
  ],
};

// ─── K1 Island Definitions ────────────────────────────────────────────────────
export const K1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Letter Island", hu: "Betűsziget", de: "Buchstabeninsel", ro: "Insula literelor" },
    icon: "🔤", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["buchstaben/vokale", "buchstaben/gross_klein", "buchstaben/alphabet"],
    missions: [
      { id: "m1", category: "explore",   gameType: "letter-explorer",  icon: "🪐", label: { de: "Buchstaben entdecken", en: "Letter Explorer",  hu: "Betű felfedező",   ro: "Explorare litere"  } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "word-blitz",      icon: "⚡", label: { de: "Wort-Blitz",        en: "Word Blitz",       hu: "Szóvillám",         ro: "Blitz cuvinte"     } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Syllable Island", hu: "Szótagsziget", de: "Silbeninsel", ro: "Insula silabelor" },
    icon: "✂️", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["buchstaben/silben", "buchstaben/zwielaute", "buchstaben/sp_st_anlaut"],
    missions: [
      { id: "m1", category: "explore",   gameType: "syllable-explorer", icon: "🪐", label: { de: "Silben entdecken",   en: "Syllable Explorer", hu: "Szótag felfedező",  ro: "Explorare silabe"  } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "spell-race",       icon: "🏃", label: { de: "Buchstabier-Rennen", en: "Spell Race",       hu: "Betűzés verseny",   ro: "Cursă de litere"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Word Island", hu: "Szósziget", de: "Wörterinsel", ro: "Insula cuvintelor" },
    icon: "📝", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["woerter/artikel_k1", "woerter/fehlende_buchstaben", "woerter/komposita_k1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "article-explorer",  icon: "🪐", label: { de: "Artikel entdecken",  en: "Article Explorer", hu: "Névelő felfedező",  ro: "Explorare articole" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "category-rush",    icon: "🗂️", label: { de: "Kategorie-Rush",    en: "Category Rush",    hu: "Kategória roham",   ro: "Categorie rapidă"  } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Rhyme Island", hu: "Rímszıget", de: "Reiminsel", ro: "Insula rimelor" },
    icon: "🎵", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["woerter/reime", "woerter/wortschatz_k1", "woerter/verben_k1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "rhyme-explorer",    icon: "🪐", label: { de: "Reime entdecken",    en: "Rhyme Explorer",   hu: "Rím felfedező",     ro: "Explorare rime"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "gap-fill",         icon: "📝", label: { de: "Lückentext",         en: "Gap Fill",         hu: "Hiánypótlás",       ro: "Completare goluri" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Sentence Island", hu: "Mondatsziget", de: "Satzinsel", ro: "Insula propozițiilor" },
    icon: "💬", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["saetze_k1/satzzeichen_k1", "saetze_k1/fehlende_woerter_k1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-explorer", icon: "🪐", label: { de: "Sätze entdecken",    en: "Sentence Explorer", hu: "Mondat felfedező", ro: "Explorare propoziții" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "sentence-scramble", icon: "🔀", label: { de: "Satz-Puzzle",        en: "Sentence Scramble", hu: "Mondat keverő",    ro: "Amestec propoziții" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Picture Island", hu: "Képszıget", de: "Bilderinsel", ro: "Insula imaginilor" },
    icon: "🖼️", color: "#10B981", sortRange: [1, 10],
    // bilder_woerter has no MCQ — use vocabulary topics instead
    topicKeys: ["farben_k1/farben_k1", "zahlen_woerter_k1/zahlen_woerter_k1", "woerter/wortschatz_k1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "picture-word-explorer", icon: "🪐", label: { de: "Bilder entdecken", en: "Picture Explorer", hu: "Kép felfedező",    ro: "Explorare imagini" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "word-blitz",       icon: "⚡", label: { de: "Wort-Blitz",        en: "Word Blitz",       hu: "Szóvillám",         ro: "Blitz cuvinte"     } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Article Island", hu: "Névelősziget", de: "Artikelinsel", ro: "Insula articolelor" },
    icon: "📦", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["woerter/artikel_k1", "buchstaben/gross_klein", "woerter/komposita_k1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "compound-word-explorer", icon: "🪐", label: { de: "Komposita entdecken", en: "Compound Explorer", hu: "Összetett szó felfedező", ro: "Explorare compuse" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "category-rush",    icon: "🗂️", label: { de: "Kategorie-Rush",    en: "Category Rush",    hu: "Kategória roham",   ro: "Categorie rapidă"  } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Reading Island", hu: "Olvasássziget", de: "Leseinsel", ro: "Insula lecturii" },
    icon: "📖", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["woerter/fehlende_buchstaben", "woerter/wortschatz_k1", "saetze_k1/fehlende_woerter_k1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "reading-explorer",  icon: "🪐", label: { de: "Lesen entdecken",    en: "Reading Explorer", hu: "Olvasás felfedező", ro: "Explorare lectură" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "gap-fill",         icon: "📝", label: { de: "Lückentext",         en: "Gap Fill",         hu: "Hiánypótlás",       ro: "Completare goluri" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "buchstaben/vokale", "buchstaben/silben", "woerter/artikel_k1",
      "woerter/reime", "saetze_k1/satzzeichen_k1", "woerter/wortschatz_k1",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "review-explorer",   icon: "🪐", label: { de: "Große Entdeckung",   en: "Big Review",       hu: "Nagy áttekintés",   ro: "Recapitulare mare" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { de: "Sterne verbinden",  en: "Star Match",       hu: "Csillag párosítás", ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "spell-race",       icon: "🏃", label: { de: "Finale Sprint",      en: "Final Sprint",     hu: "Záró sprint",       ro: "Sprint final"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── K1 Progress helpers ───────────────────────────────────────────────────────
export function loadK1Progress(): DeutschProgress {
  return loadDeutschProgress(K1_SAVE_KEY, K1_ISLANDS);
}
export function saveK1Progress(p: DeutschProgress): void {
  saveDeutschProgress(K1_SAVE_KEY, p);
}
export function isMissionDoneK1(progress: DeutschProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}
export function isIslandDoneK1(progress: DeutschProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}
export function isIslandUnlockedK1(progress: DeutschProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, K1_ISLANDS, islandId);
}
export function isCheckpointUnlockedK1(progress: DeutschProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, K1_CHECKPOINT_MAP, testId);
}
export function isCheckpointDoneK1(progress: DeutschProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}
export function completeMissionK1(progress: DeutschProgress, islandId: string, missionId: string, stars = 1): DeutschProgress {
  return completeMission(progress, K1_ISLANDS, islandId, missionId, stars);
}
export function islandTotalStarsK1(progress: DeutschProgress, islandId: string): number {
  return islandTotalStars(progress, K1_ISLANDS, islandId);
}
export function completeTestK1(progress: DeutschProgress, testId: string): DeutschProgress {
  return completeTest(progress, testId);
}
export function generateIslandQuestionsK1(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateDeutschIslandQuestions(island, 1, count);
}
export function generateCheckpointQuestionsK1(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateDeutschCheckpointQuestions(testId, K1_CHECKPOINT_TOPICS, 1, count);
}
