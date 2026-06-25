import { rounds as tapMatchRounds } from "./games/tap-match/english";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/english";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/english";
import { rounds as quickTapRounds } from "./games/quick-tap/english";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/english";
import { rounds as dragSortRounds } from "./games/drag-sort/english";
import { rounds as patternFinishRounds } from "./games/pattern-finish/english";
import { rounds as countCatchRounds } from "./games/count-catch/english";
import { rounds as soundMatchRounds } from "./games/sound-match/english";

import { rounds as categoryRushRounds } from "./games/category-rush/english";
import { rounds as speedMatchRounds } from "./games/speed-match/english";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/english";
import { rounds as wordChainRounds } from "./games/word-chain/english";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/english";
import { rounds as fillBlankRounds } from "./games/fill-blank/english";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/english";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/english";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/english";

export const ENGLISH_M2_POOLS: Record<string, any[]> = {
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
export const ENGLISH_M3_POOLS: Record<string, any[]> = {
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
