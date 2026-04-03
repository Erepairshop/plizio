"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { NEGATIVENUMBEREXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const NegativeNumberExplorer6 = memo(function NegativeNumberExplorer6({
  color = "#06B6D4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={NEGATIVENUMBEREXPLORER6_DEF} grade={6} explorerId="math_g6_negatives" color={color} lang={lang} onDone={onDone} />;
});

export default NegativeNumberExplorer6;
