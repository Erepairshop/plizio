"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { CIRCLEEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const CircleExplorer7 = memo(function CircleExplorer7({
  color = "#DB2777",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={CIRCLEEXPLORER7_DEF} grade={7} explorerId="math_g7_circles" color={color} lang={lang} onDone={onDone} />;
});

export default CircleExplorer7;
