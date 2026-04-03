"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { SHAPESEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const ShapesExplorer = memo(function ShapesExplorer({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={SHAPESEXPLORER_DEF} grade={1} explorerId="math_g1_shapes" color={color} lang={lang} onDone={onDone} />;
});

export default ShapesExplorer;
