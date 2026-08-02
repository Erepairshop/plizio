"use client";
import React from "react";
import DragSortView, { DragSortRound } from "./views/m3/DragSortView";
import TimelineSliderView, { TimelineSliderRound } from "./views/m3/TimelineSliderView";
import PatternFinishView, { PatternFinishRound } from "./views/m3/PatternFinishView";
import CountCatchView, { CountCatchRound } from "./views/m3/CountCatchView";
import SoundMatchView, { SoundMatchRound } from "./views/m3/SoundMatchView";
import FillBlankView, { FillBlankRound } from "./views/m3/FillBlankView";
import MCQ4ExplanationView, { MCQ4ExplanationRound } from "./views/m3/MCQ4ExplanationView";
import SortPuzzleView, { SortPuzzleRound } from "./views/m3/SortPuzzleView";
import GapFillStoryView, { GapFillStoryRound } from "./views/m3/GapFillStoryView";
import { AstroGameProps } from "./types";
import GameUnavailable from "./GameUnavailable";

type M3Props = Omit<AstroGameProps<any>, "rounds" | "mode"> & {
  gameKey: string;
  rounds: any[];
};

function isRenderableM3Round(gameKey: string, round: any) {
  if (!round) return false;
  switch (gameKey) {
    case "drag-sort":
      return Array.isArray(round.bins) && round.bins.length > 0 && Array.isArray(round.items) && round.items.length > 0;
    case "timeline-slider":
      return Boolean(round.axes?.x) && Array.isArray(round.events) && round.events.length > 0;
    case "pattern-finish":
      return Array.isArray(round.pattern) && round.pattern.length > 0 && Array.isArray(round.options) && round.options.some((option: any) => option?.isCorrect);
    case "count-catch":
      return Array.isArray(round.itemsToCount) && round.itemsToCount.length > 0 && Array.isArray(round.options) && round.options.some((option: any) => option?.isCorrect);
    case "sound-match":
      return Boolean(round.audioEmoji) && Array.isArray(round.options) && round.options.some((option: any) => option?.isCorrect);
    case "fill-blank":
      return Boolean(round.sentenceParts) && Array.isArray(round.options) && round.options.length > 0 && Number.isInteger(round.correctIndex);
    case "mcq4-explanation":
      return Boolean(round.question) && Array.isArray(round.options) && round.options.length > 0 && Number.isInteger(round.correctIndex);
    case "sort-puzzle":
      return Array.isArray(round.items) && round.items.length > 0 && Array.isArray(round.correctOrder) && round.correctOrder.length > 0;
    case "gap-fill-story":
      return Boolean(round.story) && Array.isArray(round.blanks) && round.blanks.length > 0;
    default:
      return false;
  }
}

export default function M3Engine(props: M3Props) {
  const { gameKey, ...rest } = props;
  const rounds = Array.isArray(props.rounds) ? props.rounds.filter((round) => isRenderableM3Round(gameKey, round)) : [];

  if (rounds.length === 0) return <GameUnavailable lang={props.lang} />;

  switch (gameKey) {
    case "drag-sort":
      return <DragSortView {...rest} mode="m3" rounds={rounds as DragSortRound[]} />;
    case "timeline-slider":
      return <TimelineSliderView {...rest} mode="m3" rounds={rounds as TimelineSliderRound[]} />;
    case "pattern-finish":
      return <PatternFinishView {...rest} mode="m3" rounds={rounds as PatternFinishRound[]} />;
    case "count-catch":
      return <CountCatchView {...rest} mode="m3" rounds={rounds as CountCatchRound[]} />;
    case "sound-match":
      return <SoundMatchView {...rest} mode="m3" rounds={rounds as SoundMatchRound[]} />;
    case "fill-blank":
      return <FillBlankView {...rest} mode="m3" rounds={rounds as FillBlankRound[]} />;
    case "mcq4-explanation":
      return <MCQ4ExplanationView {...rest} mode="m3" rounds={rounds as MCQ4ExplanationRound[]} />;
    case "sort-puzzle":
      return <SortPuzzleView {...rest} mode="m3" rounds={rounds as SortPuzzleRound[]} />;
    case "gap-fill-story":
      return <GapFillStoryView {...rest} mode="m3" rounds={rounds as GapFillStoryRound[]} />;
    default:
      return <GameUnavailable lang={props.lang} />;
  }
}
