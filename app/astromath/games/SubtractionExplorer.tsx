"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { SUBTRACTIONEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const SubtractionExplorer = memo(function SubtractionExplorer({
  color = "#FF6B6B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={SUBTRACTIONEXPLORER_DEF} grade={1} explorerId="math_g1_subtraction" color={color} lang={lang} onDone={onDone} />;
});

export default SubtractionExplorer;
