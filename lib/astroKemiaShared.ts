import type { MathQuestion } from "./mathCurriculum";
import type { IslandDef, MatchPair, SortRound } from "./astromath";
import type { KemiaQuestion, KemiaTheme } from "./kemiaCurriculumShared";

export interface AstroKemiaProgress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

const ISLAND_POSITIONS = [
  { svgX: 160, svgY: 530 },
  { svgX: 90, svgY: 440 },
  { svgX: 220, svgY: 360 },
  { svgX: 100, svgY: 280 },
  { svgX: 230, svgY: 200 },
  { svgX: 120, svgY: 120 },
  { svgX: 210, svgY: 40 },
  { svgX: 100, svgY: -40 },
  { svgX: 190, svgY: -100 },
] as const;

const ISLAND_COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
  "#F97316",
  "#6366F1",
  "#EF4444",
];

const ISLAND_CHUNK_SIZES = [4, 3, 3, 4, 3, 3, 4, 3, 3];

const GRADE_TO_EXPLORER: Record<5 | 6 | 7 | 8, "ck5-explorer" | "ck6-explorer" | "ck7-explorer" | "ck8-explorer"> = {
  5: "ck5-explorer",
  6: "ck6-explorer",
  7: "ck7-explorer",
  8: "ck8-explorer",
};

const ISLAND_NAME_PREFIX = {
  en: "Chem Island",
  hu: "Kémia-sziget",
  de: "Chemieinsel",
  ro: "Insula chimiei",
};

export function buildAstroKemiaIslands(grade: 5 | 6 | 7 | 8, themes: KemiaTheme[]): IslandDef[] {
  const orderedSubtopics = themes.flatMap((theme) =>
    theme.subtopics.map((subtopic) => ({
      icon: theme.icon,
      subtopic,
    }))
  );

  let cursor = 0;

  return ISLAND_CHUNK_SIZES.map((size, index) => {
    const chunk = orderedSubtopics.slice(cursor, cursor + size);
    cursor += size;

    const islandId = `i${index + 1}`;
    const explorerType = GRADE_TO_EXPLORER[grade];
    const icon = chunk[0]?.icon ?? "⚗️";

    return {
      id: islandId,
      name: {
        en: `${ISLAND_NAME_PREFIX.en} ${index + 1}`,
        hu: `${ISLAND_NAME_PREFIX.hu} ${index + 1}`,
        de: `${ISLAND_NAME_PREFIX.de} ${index + 1}`,
        ro: `${ISLAND_NAME_PREFIX.ro} ${index + 1}`,
      },
      icon,
      color: ISLAND_COLORS[index],
      sortRange: [1, 10],
      topicKeys: chunk.map((entry) => entry.subtopic.id),
      missions: [
        {
          id: "m1",
          gameType: explorerType,
          category: "explore",
          icon: "🔭",
          label: {
            en: "Learn the Topic",
            hu: "Téma tanulása",
            de: "Thema lernen",
            ro: "Învață tema",
          },
        },
        {
          id: "m2",
          gameType: "orbit-quiz",
          category: "build",
          icon: "🧪",
          label: {
            en: "Practice Quiz",
            hu: "Gyakorló kvíz",
            de: "Übungsquiz",
            ro: "Quiz de exersare",
          },
        },
        {
          id: "m3",
          gameType: "black-hole",
          category: "challenge",
          icon: "⚡",
          label: {
            en: "Challenge",
            hu: "Kihívás",
            de: "Herausforderung",
            ro: "Provocare",
          },
        },
      ],
      svgX: ISLAND_POSITIONS[index].svgX,
      svgY: ISLAND_POSITIONS[index].svgY,
    };
  });
}

export function buildCheckpointMap(): Record<string, string[]> {
  return {
    test1: ["i1", "i2", "i3"],
    test2: ["i4", "i5", "i6"],
    test3: ["i7", "i8", "i9"],
  };
}

export function buildCheckpointTopics(islands: IslandDef[]): Record<string, string[]> {
  return {
    test1: islands.slice(0, 3).flatMap((island) => island.topicKeys),
    test2: islands.slice(3, 6).flatMap((island) => island.topicKeys),
    test3: islands.slice(6, 9).flatMap((island) => island.topicKeys),
  };
}

export function buildTopicLabelMap(themes: KemiaTheme[]): Record<string, Record<"en" | "hu" | "de" | "ro", string>> {
  return Object.fromEntries(
    themes.flatMap((theme) =>
      theme.subtopics.map((subtopic) => [subtopic.id, subtopic.name] as const)
    )
  );
}

export function loadAstroKemiaProgress(saveKey: string): AstroKemiaProgress {
  try {
    const raw = localStorage.getItem(saveKey);
    if (raw) return JSON.parse(raw) as AstroKemiaProgress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveAstroKemiaProgress(saveKey: string, progress: AstroKemiaProgress): void {
  localStorage.setItem(saveKey, JSON.stringify(progress));
}

export function isMissionDone(progress: AstroKemiaProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: AstroKemiaProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: AstroKemiaProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((island) => island.id === islandId);
  if (idx <= 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(progress: AstroKemiaProgress, checkpointMap: Record<string, string[]>, testId: string): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: AstroKemiaProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: AstroKemiaProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars = 1
): AstroKemiaProgress {
  const key = `${islandId}_${missionId}`;
  const previousStars = progress.missionStars ?? {};
  const bestStars = Math.max(stars, previousStars[key] ?? 0);
  const updated: AstroKemiaProgress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...previousStars, [key]: bestStars },
  };

  const island = islands.find((entry) => entry.id === islandId);
  if (!island) return updated;

  const allMissionsDone = island.missions.every((mission) =>
    updated.completedMissions.includes(`${islandId}_${mission.id}`)
  );

  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }

  return updated;
}

export function islandTotalStars(progress: AstroKemiaProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((entry) => entry.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, mission) => sum + (stars[`${islandId}_${mission.id}`] ?? 0), 0);
}

export function completeTest(progress: AstroKemiaProgress, testId: string): AstroKemiaProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

type CurriculumMCQ = KemiaQuestion & {
  type: "mcq";
  question: string;
  options: string[];
  correct: number;
  subtopic: string;
};

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function isMCQQuestion(question: KemiaQuestion): question is CurriculumMCQ {
  return question.type === "mcq" && Array.isArray(question.options) && typeof question.correct === "number";
}

function convertMCQToMathQuestion(question: CurriculumMCQ): MathQuestion {
  return {
    question: question.question,
    correctAnswer: question.options[question.correct],
    options: question.options,
    topic: question.subtopic,
    isWordProblem: false,
  };
}

export function generateIslandQuestions(
  island: IslandDef,
  getQuestions: (selectedSubtopicIds: string[], count?: number) => KemiaQuestion[],
  count = 10
): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const curriculumQuestions = getQuestions(island.topicKeys, count * 5);

  for (const question of curriculumQuestions) {
    if (isMCQQuestion(question) && !seen.has(question.question) && pool.length < count) {
      seen.add(question.question);
      pool.push(convertMCQToMathQuestion(question));
    }
  }

  return pool;
}

export function generateCheckpointQuestions(
  checkpointTopics: Record<string, string[]>,
  testId: string,
  getQuestions: (selectedSubtopicIds: string[], count?: number) => KemiaQuestion[],
  count = 15
): MathQuestion[] {
  const keys = checkpointTopics[testId] ?? [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const curriculumQuestions = getQuestions(keys, count * 8);

  for (const question of curriculumQuestions) {
    if (isMCQQuestion(question) && !seen.has(question.question) && pool.length < count) {
      seen.add(question.question);
      pool.push(convertMCQToMathQuestion(question));
    }
  }

  return pool;
}

export function generateSortRound(range: [number, number]): SortRound {
  const [low, high] = range;
  const available = Array.from({ length: high - low + 1 }, (_, i) => low + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  return { numbers: shuffle(sorted), sorted };
}

export function generateMatchPairs(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];

  for (const question of questions) {
    const key = String(question.correctAnswer);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(question);
    }
    if (unique.length === 5) break;
  }

  return unique.map((question) => ({
    left: question.question,
    right: String(question.correctAnswer),
  }));
}
