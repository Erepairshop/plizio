import type { IslandDef, GameType, MissionDef, Lang, MissionCategory } from "./astromath";
export type { IslandDef, GameType, MissionDef, Lang, MissionCategory };
import type { KemiaTheme } from "./kemiaCurriculumShared";

// Re-export all shared utilities from astroKemiaShared so consumers only need one import
export {
  type AstroKemiaProgress,
  buildCheckpointTopics,
  buildTopicLabelMap,
  completeMission,
  completeTest,
  generateCheckpointQuestions,
  generateIslandQuestions,
  generateMatchPairs,
  generateSortRound,
  islandTotalStars,
  isCheckpointDone,
  isCheckpointUnlocked,
  isIslandDone,
  isIslandUnlocked,
  isMissionDone,
  loadAstroKemiaProgress,
  saveAstroKemiaProgress,
} from "./astroKemiaShared";

// ─── Informatika-specific island builder ──────────────────────────────────────

// 9 islands — 30 curriculum subtopics distributed across them (for K5/K6)
// K7/K8 stubs have empty curricula → topicKeys will be [] per island (m2/m3 return [])
const ISLAND_CHUNK_SIZES = [4, 3, 3, 4, 3, 3, 4, 3, 3];

const ISLAND_POSITIONS = [
  { svgX: 160, svgY: 620 },  // i1 – bottom start
  { svgX: 100, svgY: 510 },  // i2
  { svgX: 215, svgY: 400 },  // i3
  // checkpoint test1 (y≈295)
  { svgX: 140, svgY: 230 },  // i4
  { svgX: 215, svgY: 140 },  // i5
  { svgX: 110, svgY: 65 },   // i6
  // checkpoint test2 (y≈50)
  { svgX: 210, svgY: -20 },  // i7
  { svgX: 110, svgY: -100 }, // i8
  { svgX: 175, svgY: -150 }, // i9 – top finish
  // checkpoint test3 (y≈-165)
] as const;

const ISLAND_COLORS = [
  "#3B82F6",  // blue
  "#8B5CF6",  // purple
  "#06B6D4",  // cyan
  "#10B981",  // emerald
  "#F59E0B",  // amber
  "#EF4444",  // red
  "#EC4899",  // pink
  "#6366F1",  // indigo
  "#14B8A6",  // teal
];

const GRADE_TO_EXPLORER: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, GameType> = {
  1: "info-explore",
  2: "info-explore",
  3: "info-explore",
  4: "info-explore",
  5: "info-explore",
  6: "info-explore",
  7: "info-explore",
  8: "info-explore",
};

const ISLAND_NAME = {
  en: [
    "Informatics Island 1", "Informatics Island 2", "Informatics Island 3",
    "Informatics Island 4", "Informatics Island 5", "Informatics Island 6",
    "Informatics Island 7", "Informatics Island 8", "Informatics Island 9",
  ],
  hu: [
    "Informatika-sziget 1", "Informatika-sziget 2", "Informatika-sziget 3",
    "Informatika-sziget 4", "Informatika-sziget 5", "Informatika-sziget 6",
    "Informatika-sziget 7", "Informatika-sziget 8", "Informatika-sziget 9",
  ],
  de: [
    "Informatik-Insel 1", "Informatik-Insel 2", "Informatik-Insel 3",
    "Informatik-Insel 4", "Informatik-Insel 5", "Informatik-Insel 6",
    "Informatik-Insel 7", "Informatik-Insel 8", "Informatik-Insel 9",
  ],
  ro: [
    "Insula Informaticii 1", "Insula Informaticii 2", "Insula Informaticii 3",
    "Insula Informaticii 4", "Insula Informaticii 5", "Insula Informaticii 6",
    "Insula Informaticii 7", "Insula Informaticii 8", "Insula Informaticii 9",
  ],
};

const ISLAND_ICONS = ["💻", "🌐", "📁", "📝", "📊", "🛡️", "⚙️", "🤖", "🎯"];

const M2_ROTATION: GameType[] = [
  "category-rush", "speed-match", "true-false-blitz", "word-chain",
  "category-rush", "speed-match", "true-false-blitz", "word-chain",
  "category-rush"
];
const M3_ROTATION: GameType[] = [
  "timeline-slider", "fill-blank", "mcq4-explanation", "sort-puzzle",
  "gap-fill-story", "timeline-slider", "fill-blank", "mcq4-explanation",
  "sort-puzzle"
];

export function buildAstroInformatikaIslands(grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, themes: KemiaTheme[]): IslandDef[] {
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
    const icon = chunk[0]?.icon ?? ISLAND_ICONS[index] ?? "💻";

    return {
      id: islandId,
      name: {
        en: ISLAND_NAME.en[index],
        hu: ISLAND_NAME.hu[index],
        de: ISLAND_NAME.de[index],
        ro: ISLAND_NAME.ro[index],
      },
      icon,
      color: ISLAND_COLORS[index],
      sortRange: [1, 10] as [number, number],
      topicKeys: chunk.map((entry) => entry.subtopic.id),
      missions: [
        {
          id: "m1",
          gameType: explorerType,
          category: "explore" as const,
          icon: "🖥️",
          label: {
            en: "Learn the Topic",
            hu: "Téma tanulása",
            de: "Thema lernen",
            ro: "Învață tema",
          },
        },
        {
          id: "m2",
          gameType: "m2",
          gameKey: M2_ROTATION[index],
          category: "build" as const,
          icon: "📝",
          label: {
            en: "Practice Quiz",
            hu: "Gyakorló kvíz",
            de: "Übungsquiz",
            ro: "Quiz de exersare",
          },
        },
        {
          id: "m3",
          gameType: "m3",
          gameKey: M3_ROTATION[index],
          category: "challenge" as const,
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

export function buildInformatikaCheckpointMap(): Record<string, string[]> {
  return {
    test1: ["i1", "i2", "i3"],
    test2: ["i4", "i5", "i6"],
    test3: ["i7", "i8", "i9"],
  };
}
