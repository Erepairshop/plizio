import { rounds as categoryRushRounds } from "./games/category-rush/ai";
import { rounds as speedMatchRounds } from "./games/speed-match/ai";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/ai";
import { rounds as wordChainRounds } from "./games/word-chain/ai";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/ai";
import { rounds as fillBlankRounds } from "./games/fill-blank/ai";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/ai";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/ai";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/ai";

export const AI_M2_POOLS: Record<string, any[]> = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
};
export const AI_M3_POOLS: Record<string, any[]> = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
};
