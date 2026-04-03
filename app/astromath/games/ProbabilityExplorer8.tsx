"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PROBABILITYEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const ProbabilityExplorer8 = memo(function ProbabilityExplorer8({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PROBABILITYEXPLORER8_DEF} grade={8} explorerId="math_g8_prob" color={color} lang={lang} onDone={onDone} />;
});

export default ProbabilityExplorer8;
