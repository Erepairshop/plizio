"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PLACEVALUEEXPLORER3_DEF } from "@/lib/mathConfigs/g3Configs";

const PlaceValueExplorer3 = memo(function PlaceValueExplorer3({
  color = "#B44DFF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PLACEVALUEEXPLORER3_DEF} grade={3} explorerId="math_g3_placevalue" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValueExplorer3;
