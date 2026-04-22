import { rounds as categoryRushRounds } from "./games/category-rush/geographie";
import { rounds as speedMatchRounds } from "./games/speed-match/geographie";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/geographie";
import { rounds as wordChainRounds } from "./games/word-chain/geographie";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/geographie";
import { rounds as fillBlankRounds } from "./games/fill-blank/geographie";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/geographie";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/geographie";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/geographie";

export const GEOGRAPHIE_M2_POOLS: Record<string, any[]> = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
};

export const GEOGRAPHIE_M3_POOLS: Record<string, any[]> = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
};
