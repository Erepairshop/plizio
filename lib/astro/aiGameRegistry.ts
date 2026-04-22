import { rounds as categoryRushRounds } from "./games/category-rush/informatika";
import { rounds as speedMatchRounds } from "./games/speed-match/informatika";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/informatika";
import { rounds as wordChainRounds } from "./games/word-chain/informatika";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/informatika";
import { rounds as fillBlankRounds } from "./games/fill-blank/informatika";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/informatika";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/informatika";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/informatika";

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
