import { rounds as categoryRushRounds } from "./games/category-rush/physik";
import { rounds as speedMatchRounds } from "./games/speed-match/physik";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/physik";
import { rounds as wordChainRounds } from "./games/word-chain/physik";

import { rounds as timelineSliderRounds } from "./games/timeline-slider/physik";
import { rounds as fillBlankRounds } from "./games/fill-blank/physik";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/physik";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/physik";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/physik";

export const PHYSIK_M2_POOLS = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds
};

export const PHYSIK_M3_POOLS = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds
};