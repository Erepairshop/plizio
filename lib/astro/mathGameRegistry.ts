// lib/astro/mathGameRegistry.ts
// Central registry mapping gameKey → round pool for Math M2/M3 games.
// Used by app/astromath/{1,2,3,4}/page.tsx to dispatch M2Engine / M3Engine.

import { rounds as tapMatchRounds } from "./games/tap-match/math";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/math";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/math";
import { rounds as quickTapRounds } from "./games/quick-tap/math";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/math";
import { rounds as dragSortRounds } from "./games/drag-sort/math";
import { rounds as patternFinishRounds } from "./games/pattern-finish/math";
import { rounds as countCatchRounds } from "./games/count-catch/math";
import { rounds as soundMatchRounds } from "./games/sound-match/math";

export const MATH_M2_POOLS: Record<string, any[]> = {
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
};

export const MATH_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
};
