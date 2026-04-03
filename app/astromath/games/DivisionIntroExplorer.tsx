"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { DIVISIONINTROEXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const DivisionIntroExplorer = memo(function DivisionIntroExplorer({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={DIVISIONINTROEXPLORER_DEF} grade={2} explorerId="math_g2_divisionintro" color={color} lang={lang} onDone={onDone} />;
});

export default DivisionIntroExplorer;
