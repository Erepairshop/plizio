"use client";
import React from "react";
import TapMatchView, { TapMatchRound } from "./views/m2/TapMatchView";
import CategoryRushView, { CategoryRushRound } from "./views/m2/CategoryRushView";
import MemoryPairsView, { MemoryPairsRound } from "./views/m2/MemoryPairsView";
import ShapeSpotterView, { ShapeSpotterRound } from "./views/m2/ShapeSpotterView";
import QuickTapView, { QuickTapRound } from "./views/m2/QuickTapView";
import BubbleChoiceView, { BubbleChoiceRound } from "./views/m2/BubbleChoiceView";
import SpeedMatchView, { SpeedMatchRound } from "./views/m2/SpeedMatchView";
import TrueFalseBlitzView, { TrueFalseBlitzRound } from "./views/m2/TrueFalseBlitzView";
import WordChainView, { WordChainRound } from "./views/m2/WordChainView";
import { AstroGameProps } from "./types";
import GameUnavailable from "./GameUnavailable";

type M2Props = Omit<AstroGameProps<any>, "rounds" | "mode"> & {
  gameKey: string;
  rounds: any[];
};

export default function M2Engine(props: M2Props) {
  const { gameKey, ...rest } = props;
  const rounds = Array.isArray(props.rounds)
    ? props.rounds.filter((round) => {
        if (!round) return false;
        if (gameKey === "quick-tap") return Array.isArray(round.items) && round.items.some((item: QuickTapRound["items"][number]) => item.isTarget);
        if (gameKey === "memory-pairs") return Array.isArray(round.pairs) && round.pairs.length > 0;
        if (gameKey === "shape-spotter") return Array.isArray(round.shapes) && round.shapes.some((shape: ShapeSpotterRound["shapes"][number]) => shape.isTarget);
        return true;
      })
    : [];

  if (rounds.length === 0) return <GameUnavailable lang={props.lang} />;

  switch (gameKey) {
    case "tap-match":
      return <TapMatchView {...rest} mode="m2" rounds={rounds as TapMatchRound[]} />;
    case "category-rush":
      return <CategoryRushView {...rest} mode="m2" rounds={rounds as CategoryRushRound[]} />;
    case "memory-pairs":
      return <MemoryPairsView {...rest} mode="m2" rounds={rounds as MemoryPairsRound[]} />;
    case "shape-spotter":
      return <ShapeSpotterView {...rest} mode="m2" rounds={rounds as ShapeSpotterRound[]} />;
    case "quick-tap":
      return <QuickTapView {...rest} mode="m2" rounds={rounds as QuickTapRound[]} />;
    case "bubble-choice":
      return <BubbleChoiceView {...rest} mode="m2" rounds={rounds as BubbleChoiceRound[]} />;
    case "speed-match":
      return <SpeedMatchView {...rest} mode="m2" rounds={rounds as SpeedMatchRound[]} />;
    case "true-false-blitz":
      return <TrueFalseBlitzView {...rest} mode="m2" rounds={rounds as TrueFalseBlitzRound[]} />;
    case "word-chain":
      return <WordChainView {...rest} mode="m2" rounds={rounds as WordChainRound[]} />;
    default:
      return <GameUnavailable lang={props.lang} />;
  }
}
