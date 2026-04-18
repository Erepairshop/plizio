// lib/astro/deutschGameRegistry.ts
// Central registry mapping gameKey → round pool for Deutsch M2/M3 games.
// Used by app/astrodeutsch/{1,2,3,4}/page.tsx to dispatch M2Engine / M3Engine.

import { rounds as tapMatchRounds } from "./games/tap-match/deutsch";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/deutsch";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/deutsch";
import { rounds as quickTapRounds } from "./games/quick-tap/deutsch";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/deutsch";
import { rounds as dragSortRounds } from "./games/drag-sort/deutsch";
import { rounds as patternFinishRounds } from "./games/pattern-finish/deutsch";
import { rounds as countCatchRounds } from "./games/count-catch/deutsch";
import { rounds as soundMatchRounds } from "./games/sound-match/deutsch";

export const DEUTSCH_M2_POOLS: Record<string, any[]> = {
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
};

export const DEUTSCH_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
};
