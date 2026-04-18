"use client";
import React from "react";
import TapMatchView, { TapMatchRound } from "./views/m2/TapMatchView";
import CategoryRushView, { CategoryRushRound } from "./views/m2/CategoryRushView";
import { AstroGameProps } from "./types";

type M2Props = Omit<AstroGameProps<any>, "rounds" | "mode"> & {
  gameKey: string;
  rounds: any[];
};

export default function M2Engine(props: M2Props) {
  const { gameKey, ...rest } = props;

  switch (gameKey) {
    case "tap-match":
      return <TapMatchView {...rest} mode="m2" rounds={props.rounds as TapMatchRound[]} />;
    case "category-rush":
      return <CategoryRushView {...rest} mode="m2" rounds={props.rounds as CategoryRushRound[]} />;
    default:
      return <div className="text-white p-4">Unknown M2 gameKey: {gameKey}</div>;
  }
}
