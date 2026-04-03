"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { DIVISIONEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const DivisionExplorer4 = memo(function DivisionExplorer4({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={DIVISIONEXPLORER4_DEF} grade={4} explorerId="math_g4_division" color={color} lang={lang} onDone={onDone} />;
});

export default DivisionExplorer4;
