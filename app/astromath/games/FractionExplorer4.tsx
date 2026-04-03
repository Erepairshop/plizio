"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { FRACTIONEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const FractionExplorer4 = memo(function FractionExplorer4({
  color = "#FB923C",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={FRACTIONEXPLORER4_DEF} grade={4} explorerId="math_g4_fractions" color={color} lang={lang} onDone={onDone} />;
});

export default FractionExplorer4;
