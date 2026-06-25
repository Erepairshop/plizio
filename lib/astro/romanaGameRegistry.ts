import { rounds as tapMatchRounds } from "./games/tap-match/romana";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/romana";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/romana";
import { rounds as quickTapRounds } from "./games/quick-tap/romana";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/romana";
import { rounds as dragSortRounds } from "./games/drag-sort/romana";
import { rounds as patternFinishRounds } from "./games/pattern-finish/romana";
import { rounds as countCatchRounds } from "./games/count-catch/romana";
import { rounds as soundMatchRounds } from "./games/sound-match/romana";

import { rounds as categoryRushRounds } from "./games/category-rush/romana";
import { rounds as speedMatchRounds } from "./games/speed-match/romana";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/romana";
import { rounds as wordChainRounds } from "./games/word-chain/romana";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/romana";
import { rounds as fillBlankRounds } from "./games/fill-blank/romana";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/romana";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/romana";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/romana";

export const ROMANA_M2_POOLS: Record<string, any[]> = {
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
export const ROMANA_M3_POOLS: Record<string, any[]> = {
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
