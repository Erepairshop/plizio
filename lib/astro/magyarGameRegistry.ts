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
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
};

export const MAGYAR_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
};
