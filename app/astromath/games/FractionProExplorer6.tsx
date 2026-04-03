"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { FRACTIONPROEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const FractionProExplorer6 = memo(function FractionProExplorer6({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={FRACTIONPROEXPLORER6_DEF} grade={6} explorerId="math_g6_fraction_pro" color={color} lang={lang} onDone={onDone} />;
});

export default FractionProExplorer6;
