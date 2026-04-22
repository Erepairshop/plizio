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

// New pools
import { rounds as categoryRushRounds } from "./games/category-rush/deutsch";
import { rounds as speedMatchRounds } from "./games/speed-match/deutsch";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/deutsch";
import { rounds as wordChainRounds } from "./games/word-chain/deutsch";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/deutsch";
import { rounds as fillBlankRounds } from "./games/fill-blank/deutsch";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/deutsch";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/deutsch";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/deutsch";

export const DEUTSCH_M2_POOLS: Record<string, any[]> = {
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

export const DEUTSCH_M3_POOLS: Record<string, any[]> = {
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
