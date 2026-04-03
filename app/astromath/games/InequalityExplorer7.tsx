"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { INEQUALITYEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const InequalityExplorer7 = memo(function InequalityExplorer7({
  color = "#F97316",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={INEQUALITYEXPLORER7_DEF} grade={7} explorerId="math_g7_ineq" color={color} lang={lang} onDone={onDone} />;
});

export default InequalityExplorer7;
