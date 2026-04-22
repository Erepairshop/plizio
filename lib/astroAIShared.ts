import type { IslandDef, GameType, MissionDef, Lang, MissionCategory } from "./astromath";
export type { IslandDef, GameType, MissionDef, Lang, MissionCategory };
import type { KemiaTheme } from "./kemiaCurriculumShared";

export {
  type AstroKemiaProgress, buildCheckpointTopics, buildTopicLabelMap,
  completeMission, completeTest, generateCheckpointQuestions, generateIslandQuestions,
  generateMatchPairs, generateSortRound, islandTotalStars, isCheckpointDone,
  isCheckpointUnlocked, isIslandDone, isIslandUnlocked, isMissionDone,
  loadAstroKemiaProgress, saveAstroKemiaProgress,
} from "./astroKemiaShared";

const ISLAND_CHUNK_SIZES = [4, 3, 3, 4, 3, 3, 4, 3, 3];
const ISLAND_POSITIONS = [
  { svgX: 160, svgY: 620 }, { svgX: 100, svgY: 510 }, { svgX: 215, svgY: 400 },
  { svgX: 140, svgY: 230 }, { svgX: 215, svgY: 140 }, { svgX: 110, svgY: 65 },
  { svgX: 210, svgY: -20 }, { svgX: 110, svgY: -100 }, { svgX: 175, svgY: -150 }
] as const;

const ISLAND_COLORS = ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#6366F1", "#14B8A6"];
const GRADE_TO_EXPLORER: Record<1|2|3|4|5|6|7|8, GameType> = { 1: "info-explore", 2: "info-explore", 3: "info-explore", 4: "info-explore", 5: "info-explore", 6: "info-explore", 7: "info-explore", 8: "info-explore" };

const ISLAND_NAME = {
  en: ["AI Island 1", "AI Island 2", "AI Island 3", "AI Island 4", "AI Island 5", "AI Island 6", "AI Island 7", "AI Island 8", "AI Island 9"],
  hu: ["AI Sziget 1", "AI Sziget 2", "AI Sziget 3", "AI Sziget 4", "AI Sziget 5", "AI Sziget 6", "AI Sziget 7", "AI Sziget 8", "AI Sziget 9"],
  de: ["KI Insel 1", "KI Insel 2", "KI Insel 3", "KI Insel 4", "KI Insel 5", "KI Insel 6", "KI Insel 7", "KI Insel 8", "KI Insel 9"],
  ro: ["Insula AI 1", "Insula AI 2", "Insula AI 3", "Insula AI 4", "Insula AI 5", "Insula AI 6", "Insula AI 7", "Insula AI 8", "Insula AI 9"]
};
const ISLAND_ICONS = ["🤖", "🧠", "💬", "⚖️", "🛠️", "🚀", "📊", "🔒", "💡"];
const M2_ROTATION: GameType[] = ["category-rush", "speed-match", "true-false-blitz", "word-chain", "category-rush", "speed-match", "true-false-blitz", "word-chain", "category-rush"];
const M3_ROTATION: GameType[] = ["timeline-slider", "fill-blank", "mcq4-explanation", "sort-puzzle", "gap-fill-story", "timeline-slider", "fill-blank", "mcq4-explanation", "sort-puzzle"];

export function buildAstroAIIslands(grade: 1|2|3|4|5|6|7|8, themes: KemiaTheme[]): IslandDef[] {
  const orderedSubtopics = themes.flatMap((theme) => theme.subtopics.map((subtopic) => ({ icon: theme.icon, subtopic })));
  let cursor = 0;
  return ISLAND_CHUNK_SIZES.map((size, index) => {
    const chunk = orderedSubtopics.slice(cursor, cursor + size);
    cursor += size;
    const islandId = `i${index + 1}`;
    return {
      id: islandId,
      name: { en: ISLAND_NAME.en[index], hu: ISLAND_NAME.hu[index], de: ISLAND_NAME.de[index], ro: ISLAND_NAME.ro[index] },
      icon: chunk[0]?.icon ?? ISLAND_ICONS[index] ?? "🤖",
      color: ISLAND_COLORS[index], sortRange: [1, 10] as [number, number],
      topicKeys: chunk.map((entry) => entry.subtopic.id),
      missions: [
        { id: "m1", gameType: GRADE_TO_EXPLORER[grade], category: "explore", icon: "🖥️", label: { en: "Learn", hu: "Tanulás", de: "Lernen", ro: "Învață" } },
        { id: "m2", gameType: "m2", gameKey: M2_ROTATION[index], category: "build", icon: "📝", label: { en: "Quiz", hu: "Kvíz", de: "Quiz", ro: "Quiz" } },
        { id: "m3", gameType: "m3", gameKey: M3_ROTATION[index], category: "challenge", icon: "⚡", label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" } },
      ],
      svgX: ISLAND_POSITIONS[index].svgX, svgY: ISLAND_POSITIONS[index].svgY,
    };
  });
}
export function buildAICheckpointMap(): Record<string, string[]> {
  return { test1: ["i1", "i2", "i3"], test2: ["i4", "i5", "i6"], test3: ["i7", "i8", "i9"] };
}
