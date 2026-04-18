"use client";
import React from "react";
import DragSortView, { DragSortRound } from "./views/m3/DragSortView";
import TimelineSliderView, { TimelineSliderRound } from "./views/m3/TimelineSliderView";
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
    default:
      return <div className="text-white p-4">Unknown M3 gameKey: {gameKey}</div>;
  }
}
