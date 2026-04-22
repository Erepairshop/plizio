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

type M3Props = Omit<AstroGameProps<any>, "rounds" | "mode"> & {
  gameKey: string;
  rounds: any[];
};

export default function M3Engine(props: M3Props) {
  const { gameKey, ...rest } = props;

  switch (gameKey) {
    case "drag-sort":
      return <DragSortView {...rest} mode="m3" rounds={props.rounds as DragSortRound[]} />;
    case "timeline-slider":
      return <TimelineSliderView {...rest} mode="m3" rounds={props.rounds as TimelineSliderRound[]} />;
    case "pattern-finish":
      return <PatternFinishView {...rest} mode="m3" rounds={props.rounds as PatternFinishRound[]} />;
    case "count-catch":
      return <CountCatchView {...rest} mode="m3" rounds={props.rounds as CountCatchRound[]} />;
    case "sound-match":
      return <SoundMatchView {...rest} mode="m3" rounds={props.rounds as SoundMatchRound[]} />;
    case "fill-blank":
      return <FillBlankView {...rest} mode="m3" rounds={props.rounds as FillBlankRound[]} />;
    case "mcq4-explanation":
      return <MCQ4ExplanationView {...rest} mode="m3" rounds={props.rounds as MCQ4ExplanationRound[]} />;
    case "sort-puzzle":
      return <SortPuzzleView {...rest} mode="m3" rounds={props.rounds as SortPuzzleRound[]} />;
    case "gap-fill-story":
      return <GapFillStoryView {...rest} mode="m3" rounds={props.rounds as GapFillStoryRound[]} />;
    default:
      return <div className="text-white p-4">Unknown M3 gameKey: {gameKey}</div>;
  }
}
