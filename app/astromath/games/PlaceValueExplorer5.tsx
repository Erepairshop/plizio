"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PLACEVALUEEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const PlaceValueExplorer5 = memo(function PlaceValueExplorer5({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PLACEVALUEEXPLORER5_DEF} grade={5} explorerId="math_g5_largenumbers" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValueExplorer5;
