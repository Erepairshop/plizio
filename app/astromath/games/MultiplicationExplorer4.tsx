"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { MULTIPLICATIONEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const MultiplicationExplorer4 = memo(function MultiplicationExplorer4({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={MULTIPLICATIONEXPLORER4_DEF} grade={4} explorerId="math_g4_multiplication" color={color} lang={lang} onDone={onDone} />;
});

export default MultiplicationExplorer4;
