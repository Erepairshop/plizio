"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { EQUATIONEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const EquationExplorer7 = memo(function EquationExplorer7({
  color = "#0EA5E9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={EQUATIONEXPLORER7_DEF} grade={7} explorerId="math_g7_eq" color={color} lang={lang} onDone={onDone} />;
});

export default EquationExplorer7;
