import { rounds as tapMatchRounds } from "./games/tap-match/romana";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/romana";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/romana";
import { rounds as quickTapRounds } from "./games/quick-tap/romana";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/romana";
import { rounds as dragSortRounds } from "./games/drag-sort/romana";
import { rounds as patternFinishRounds } from "./games/pattern-finish/romana";
import { rounds as countCatchRounds } from "./games/count-catch/romana";
import { rounds as soundMatchRounds } from "./games/sound-match/romana";

export const ROMANA_M2_POOLS: Record<string, any[]> = {
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds
};

export const ROMANA_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds
};
