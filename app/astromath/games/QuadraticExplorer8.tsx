"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { QUADRATICEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const QuadraticExplorer8 = memo(function QuadraticExplorer8({
  color = "#EF4444",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={QUADRATICEXPLORER8_DEF} grade={8} explorerId="math_g8_quad" color={color} lang={lang} onDone={onDone} />;
});

export default QuadraticExplorer8;
