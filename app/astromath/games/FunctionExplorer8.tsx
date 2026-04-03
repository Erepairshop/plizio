"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { FUNCTIONEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const FunctionExplorer8 = memo(function FunctionExplorer8({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={FUNCTIONEXPLORER8_DEF} grade={8} explorerId="math_g8_functions" color={color} lang={lang} onDone={onDone} />;
});

export default FunctionExplorer8;
