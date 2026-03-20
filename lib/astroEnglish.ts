// lib/astroEnglish.ts
// AstroEnglish — K1 island system + common types + EnglishQuestion bridge
// Grade 1: Phonics, Letters, Blends, Words, Sentences, Reading, Vocab

import { ENGLISH_CURRICULUM } from "./englishCurriculum";
import type { CurriculumQuestion } from "./curriculumTypes";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };
export type { MathQuestion } from "./mathCurriculum";
import type { MathQuestion } from "./mathCurriculum";

// ─── Bridge: CurriculumQuestion → MathQuestion ────────────────────────────────
export function englishToMathQuestion(eq: CurriculumQuestion): MathQuestion {
  if (eq.type === "mcq") {
    return {
      question: eq.question,
      correctAnswer: eq.options[eq.correct],
      options: [...eq.options],
      topic: eq.subtopic || eq.topic,
      isWordProblem: false,
      hasStringOptions: true,
    };
  }
  // typing question — treat answer as correctAnswer, no options
  const ans = Array.isArray(eq.answer) ? eq.answer[0] : eq.answer;
  return {
    question: eq.question,
    correctAnswer: ans,
    options: [],
    topic: eq.subtopic || eq.topic,
    isWordProblem: false,
    hasStringOptions: true,
  };
}

// ─── Progress type ─────────────────────────────────────────────────────────────
export interface EnglishProgress {
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
export function generateEnglishIslandQuestions(
  island: IslandDef,
  grade: number,
  count = 10,
): MathQuestion[] {
  const themes = ENGLISH_CURRICULUM[grade] ?? [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);
    if (!subtopic) continue;

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as CurriculumQuestion[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(englishToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Match pairs (unique answers for StarMatch) ───────────────────────────────
export function generateEnglishMatchPairs(questions: MathQuestion[]): MatchPair[] {
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
export function generateEnglishCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  grade: number,
  count = 10,
): MathQuestion[] {
  const themes = ENGLISH_CURRICULUM[grade] ?? [];
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

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as CurriculumQuestion[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(englishToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Progress helpers (generic, reused by all grades) ─────────────────────────
export function loadEnglishProgress(saveKey: string, islands: IslandDef[]): EnglishProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as EnglishProgress;
  } catch {}
  void islands; // suppress unused warning
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveEnglishProgress(saveKey: string, p: EnglishProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(saveKey, JSON.stringify(p));
  }
}

export function isMissionDone(progress: EnglishProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: EnglishProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: EnglishProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(
  progress: EnglishProgress,
  checkpointMap: Record<string, string[]>,
  testId: string,
): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: EnglishProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: EnglishProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars: number = 1,
): EnglishProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: EnglishProgress = {
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

export function islandTotalStars(progress: EnglishProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: EnglishProgress, testId: string): EnglishProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── K1 Constants ─────────────────────────────────────────────────────────────
export const K1_SAVE_KEY = "astroenglish_k1_v1";

export const K1_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K1_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "phonics_g1/short_long_vowels_g1", "phonics_g1/digraphs_g1",
    "phonics_g1/uppercase_lowercase_g1", "phonics_g1/syllables_g1",
    "phonics_g1/blends_g1",
  ],
  test2: [
    "phonics_g1/rhyming_g1", "words_g1/sight_words_g1", "words_g1/nouns_g1",
    "words_g1/verbs_g1", "words_g1/articles_g1",
  ],
  test3: [
    "words_g1/compound_words_g1", "words_g1/adjectives_g1",
    "sentences_g1/end_punctuation_g1", "sentences_g1/capitalization_g1",
    "sentences_g1/sentence_vs_not_g1",
  ],
};

// ─── K1 Island Definitions ────────────────────────────────────────────────────
export const K1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Phonics Island", hu: "Fonetika sziget", de: "Phonik-Insel", ro: "Insula fonetică" },
    icon: "🔤", color: "#FF2D78", sortRange: [1, 20],
    topicKeys: ["phonics_g1/short_long_vowels_g1", "phonics_g1/digraphs_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Vowel Quiz",     hu: "Magánhangzó kvíz", de: "Vokal-Quiz",      ro: "Quiz vocale"       } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Letter Land", hu: "Betűország", de: "Buchstabenland", ro: "Țara literelor" },
    icon: "🅰️", color: "#00D4FF", sortRange: [1, 20],
    topicKeys: ["phonics_g1/uppercase_lowercase_g1", "phonics_g1/syllables_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Letter Quiz",    hu: "Betű kvíz",        de: "Buchstaben-Quiz", ro: "Quiz litere"       } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Blend Bay", hu: "Mássalhangzó-öböl", de: "Blend-Bucht", ro: "Golful combinațiilor" },
    icon: "🌊", color: "#00FF88", sortRange: [1, 20],
    topicKeys: ["phonics_g1/blends_g1", "phonics_g1/rhyming_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Blend Quiz",     hu: "Blend kvíz",       de: "Blend-Quiz",      ro: "Quiz combinații"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Word World", hu: "Szóvilág", de: "Wortwelt", ro: "Lumea cuvintelor" },
    icon: "📝", color: "#FFD700", sortRange: [1, 20],
    topicKeys: ["words_g1/sight_words_g1", "words_g1/nouns_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Word Quiz",      hu: "Szó kvíz",         de: "Wort-Quiz",       ro: "Quiz cuvinte"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Action Cove", hu: "Ige-öböl", de: "Verb-Bucht", ro: "Golful verbelor" },
    icon: "🏃", color: "#B44DFF", sortRange: [1, 20],
    topicKeys: ["words_g1/verbs_g1", "words_g1/articles_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Verb Quiz",      hu: "Ige kvíz",         de: "Verb-Quiz",       ro: "Quiz verbe"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Compound Cape", hu: "Összetett szó-fok", de: "Komposita-Kap", ro: "Capul cuvintelor compuse" },
    icon: "🔗", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["words_g1/compound_words_g1", "words_g1/adjectives_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Word Quiz",      hu: "Szó kvíz",         de: "Wort-Quiz",       ro: "Quiz cuvinte"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Sentence Shore", hu: "Mondat-part", de: "Satz-Strand", ro: "Țărmul propozițiilor" },
    icon: "💬", color: "#FF9500", sortRange: [1, 20],
    topicKeys: ["sentences_g1/end_punctuation_g1", "sentences_g1/capitalization_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Sentence Quiz",  hu: "Mondat kvíz",      de: "Satz-Quiz",       ro: "Quiz propoziții"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Grammar Gulf", hu: "Nyelvtan-öböl", de: "Grammatik-Golf", ro: "Golful gramaticii" },
    icon: "📖", color: "#E879F9", sortRange: [1, 20],
    topicKeys: ["sentences_g1/sentence_vs_not_g1", "sentences_g1/declarative_interrogative_g1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Grammar Quiz",   hu: "Grammatika kvíz",  de: "Grammatik-Quiz",  ro: "Quiz gramatică"    } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Story Summit", hu: "Mese-csúcs", de: "Geschichten-Gipfel", ro: "Vârful poveștilor" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "sentences_g1/imperative_exclamatory_g1", "reading_g1/story_comprehension_g1",
      "phonics_g1/short_long_vowels_g1", "words_g1/sight_words_g1",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Story Quiz",     hu: "Mesé kvíz",        de: "Geschichten-Quiz", ro: "Quiz povești"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── K1 Progress helpers ───────────────────────────────────────────────────────
export function loadK1Progress(): EnglishProgress {
  return loadEnglishProgress(K1_SAVE_KEY, K1_ISLANDS);
}
export function saveK1Progress(p: EnglishProgress): void {
  saveEnglishProgress(K1_SAVE_KEY, p);
}
export function isMissionDoneK1(progress: EnglishProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}
export function isIslandDoneK1(progress: EnglishProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}
export function isIslandUnlockedK1(progress: EnglishProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, K1_ISLANDS, islandId);
}
export function isCheckpointUnlockedK1(progress: EnglishProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, K1_CHECKPOINT_MAP, testId);
}
export function isCheckpointDoneK1(progress: EnglishProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}
export function completeMissionK1(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress {
  return completeMission(progress, K1_ISLANDS, islandId, missionId, stars);
}
export function islandTotalStarsK1(progress: EnglishProgress, islandId: string): number {
  return islandTotalStars(progress, K1_ISLANDS, islandId);
}
export function completeTestK1(progress: EnglishProgress, testId: string): EnglishProgress {
  return completeTest(progress, testId);
}
export function generateIslandQuestionsK1(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateEnglishIslandQuestions(island, 1, count);
}
export function generateCheckpointQuestionsK1(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateEnglishCheckpointQuestions(testId, K1_CHECKPOINT_TOPICS, 1, count);
}
