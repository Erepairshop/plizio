import { rounds as tapMatchRounds } from "./games/tap-match/math";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/math";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/math";
import { rounds as quickTapRounds } from "./games/quick-tap/math";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/math";
import { rounds as dragSortRounds } from "./games/drag-sort/math";
import { rounds as patternFinishRounds } from "./games/pattern-finish/math";
import { rounds as countCatchRounds } from "./games/count-catch/math";
import { rounds as soundMatchRounds } from "./games/sound-match/math";

import { rounds as categoryRushRounds } from "./games/category-rush/math";
import { rounds as speedMatchRounds } from "./games/speed-match/math";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/math";
import { rounds as wordChainRounds } from "./games/word-chain/math";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/math";
import { rounds as fillBlankRounds } from "./games/fill-blank/math";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/math";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/math";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/math";

export const MATH_M2_POOLS: Record<string, any[]> = {
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
};
export const MATH_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
};
