import { rounds as categoryRushRounds } from "./games/category-rush/magyar";
import { rounds as speedMatchRounds } from "./games/speed-match/magyar";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/magyar";
import { rounds as wordChainRounds } from "./games/word-chain/magyar";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/magyar";
import { rounds as fillBlankRounds } from "./games/fill-blank/magyar";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/magyar";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/magyar";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/magyar";

import { rounds as tapMatchRounds } from "./games/tap-match/magyar";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/magyar";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/magyar";
import { rounds as quickTapRounds } from "./games/quick-tap/magyar";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/magyar";
import { rounds as dragSortRounds } from "./games/drag-sort/magyar";
import { rounds as patternFinishRounds } from "./games/pattern-finish/magyar";
import { rounds as countCatchRounds } from "./games/count-catch/magyar";
import { rounds as soundMatchRounds } from "./games/sound-match/magyar";

export const MAGYAR_M2_POOLS: Record<string, any[]> = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
};

export const MAGYAR_M3_POOLS: Record<string, any[]> = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
};
