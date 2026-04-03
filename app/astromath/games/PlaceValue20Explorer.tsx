"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PLACEVALUE20EXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const PlaceValue20Explorer = memo(function PlaceValue20Explorer({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PLACEVALUE20EXPLORER_DEF} grade={1} explorerId="math_g1_placevalue20" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValue20Explorer;
