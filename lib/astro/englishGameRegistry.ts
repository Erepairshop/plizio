// lib/astro/englishGameRegistry.ts
// Central registry mapping gameKey -> round pool for English M2/M3 games.
// Used by app routes to dispatch M2Engine / M3Engine.

import { rounds as tapMatchRounds } from "./games/tap-match/english";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/english";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/english";
import { rounds as quickTapRounds } from "./games/quick-tap/english";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/english";
import { rounds as dragSortRounds } from "./games/drag-sort/english";
import { rounds as patternFinishRounds } from "./games/pattern-finish/english";
import { rounds as countCatchRounds } from "./games/count-catch/english";
import { rounds as soundMatchRounds } from "./games/sound-match/english";

export const ENGLISH_M2_POOLS: Record<string, any[]> = {
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
};

export const ENGLISH_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
};

