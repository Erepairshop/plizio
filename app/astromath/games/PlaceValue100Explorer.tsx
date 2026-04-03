"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PLACEVALUE100EXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const PlaceValue100Explorer = memo(function PlaceValue100Explorer({
  color = "#4ECDC4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PLACEVALUE100EXPLORER_DEF} grade={2} explorerId="math_g2_placevalue100" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValue100Explorer;
