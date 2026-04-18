import { rounds as categoryRushRounds } from "./games/category-rush/biologie";
import { rounds as speedMatchRounds } from "./games/speed-match/biologie";
import { rounds as trueFalseBlitzRounds } from "./games/true-false-blitz/biologie";
import { rounds as wordChainRounds } from "./games/word-chain/biologie";
import { rounds as timelineSliderRounds } from "./games/timeline-slider/biologie";
import { rounds as fillBlankRounds } from "./games/fill-blank/biologie";
import { rounds as mcq4ExplanationRounds } from "./games/mcq4-explanation/biologie";
import { rounds as sortPuzzleRounds } from "./games/sort-puzzle/biologie";
import { rounds as gapFillStoryRounds } from "./games/gap-fill-story/biologie";

export const BIOLOGIE_M2_POOLS: Record<string, any[]> = {
  "category-rush": categoryRushRounds,
  "speed-match": speedMatchRounds,
  "true-false-blitz": trueFalseBlitzRounds,
  "word-chain": wordChainRounds,
};
export const BIOLOGIE_M3_POOLS: Record<string, any[]> = {
  "timeline-slider": timelineSliderRounds,
  "fill-blank": fillBlankRounds,
  "mcq4-explanation": mcq4ExplanationRounds,
  "sort-puzzle": sortPuzzleRounds,
  "gap-fill-story": gapFillStoryRounds,
};
