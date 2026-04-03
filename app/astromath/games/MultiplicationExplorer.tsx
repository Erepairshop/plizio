"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { MULTIPLICATIONEXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const MultiplicationExplorer = memo(function MultiplicationExplorer({
  color = "#FF9500",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={MULTIPLICATIONEXPLORER_DEF} grade={2} explorerId="math_g2_multiplication" color={color} lang={lang} onDone={onDone} />;
});

export default MultiplicationExplorer;
