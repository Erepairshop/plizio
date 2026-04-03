"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { DIVISIONEXPLORER3_DEF } from "@/lib/mathConfigs/g3Configs";

const DivisionExplorer3 = memo(function DivisionExplorer3({
  color = "#00FF88",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={DIVISIONEXPLORER3_DEF} grade={3} explorerId="math_g3_division" color={color} lang={lang} onDone={onDone} />;
});

export default DivisionExplorer3;
