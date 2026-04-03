"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PATTERNEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const PatternExplorer = memo(function PatternExplorer({
  color = "#E879F9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PATTERNEXPLORER_DEF} grade={1} explorerId="math_g1_patterns" color={color} lang={lang} onDone={onDone} />;
});

export default PatternExplorer;
