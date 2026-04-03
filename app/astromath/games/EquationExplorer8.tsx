"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { EQUATIONEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const EquationExplorer8 = memo(function EquationExplorer8({
  color = "#4F46E5",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={EQUATIONEXPLORER8_DEF} grade={8} explorerId="math_g8_eq_adv" color={color} lang={lang} onDone={onDone} />;
});

export default EquationExplorer8;
