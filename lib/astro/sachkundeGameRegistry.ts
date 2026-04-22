// lib/astro/sachkundeGameRegistry.ts
// Central registry mapping gameKey → round pool for Sachkunde M2/M3 games.
// Used by app/astro-sachkunde/{1,2,3,4}/page.tsx to dispatch M2Engine / M3Engine.

import { rounds as tapMatchRounds } from "./games/tap-match/sachkunde";
import { rounds as memoryPairsRounds } from "./games/memory-pairs/sachkunde";
import { rounds as shapeSpotterRounds } from "./games/shape-spotter/sachkunde";
import { rounds as quickTapRounds } from "./games/quick-tap/sachkunde";
import { rounds as bubbleChoiceRounds } from "./games/bubble-choice/sachkunde";
import { rounds as dragSortRounds } from "./games/drag-sort/sachkunde";
import { rounds as patternFinishRounds } from "./games/pattern-finish/sachkunde";
import { rounds as countCatchRounds } from "./games/count-catch/sachkunde";
import { rounds as soundMatchRounds } from "./games/sound-match/sachkunde";

export const SACHKUNDE_M2_POOLS: Record<string, any[]> = {
  "tap-match": tapMatchRounds,
  "memory-pairs": memoryPairsRounds,
  "shape-spotter": shapeSpotterRounds,
  "quick-tap": quickTapRounds,
  "bubble-choice": bubbleChoiceRounds,
};

export const SACHKUNDE_M3_POOLS: Record<string, any[]> = {
  "drag-sort": dragSortRounds,
  "pattern-finish": patternFinishRounds,
  "count-catch": countCatchRounds,
  "sound-match": soundMatchRounds,
};
