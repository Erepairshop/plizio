"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PLACEVALUEEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const PlaceValueExplorer4 = memo(function PlaceValueExplorer4({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PLACEVALUEEXPLORER4_DEF} grade={4} explorerId="math_g4_placevalue" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValueExplorer4;
