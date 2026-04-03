"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PYTHAGORASEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const PythagorasExplorer7 = memo(function PythagorasExplorer7({
  color = "#2DD4BF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PYTHAGORASEXPLORER7_DEF} grade={7} explorerId="math_g7_pyth" color={color} lang={lang} onDone={onDone} />;
});

export default PythagorasExplorer7;
