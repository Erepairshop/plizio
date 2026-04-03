"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { RATIOEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const RatioExplorer6 = memo(function RatioExplorer6({
  color = "#F97316",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={RATIOEXPLORER6_DEF} grade={6} explorerId="math_g6_ratios" color={color} lang={lang} onDone={onDone} />;
});

export default RatioExplorer6;
