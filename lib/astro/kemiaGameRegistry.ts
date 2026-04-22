import { rounds as categoryRushRounds } from "./games/category-rush/kemia";
import { rounds as speedMatchRounds } from "./games/speed-match/kemia";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/kemia";
import { rounds as wordChainRounds } from "./games/word-chain/kemia";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/kemia";
import { rounds as fillBlankRounds } from "./games/fill-blank/kemia";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/kemia";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/kemia";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/kemia";

export const KEMIA_M2_POOLS: Record<string, any[]> = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
};
export const KEMIA_M3_POOLS: Record<string, any[]> = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
};
