import { rounds as categoryRushRounds } from "./games/category-rush/geschichte";
import { rounds as speedMatchRounds } from "./games/speed-match/geschichte";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/geschichte";
import { rounds as wordChainRounds } from "./games/word-chain/geschichte";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/geschichte";
import { rounds as fillBlankRounds } from "./games/fill-blank/geschichte";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/geschichte";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/geschichte";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/geschichte";

export const GESCHICHTE_M2_POOLS: Record<string, any[]> = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
};
export const GESCHICHTE_M3_POOLS: Record<string, any[]> = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
};
