"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { ALGEBRAEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const AlgebraExplorer7 = memo(function AlgebraExplorer7({
  color = "#7C3AED",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={ALGEBRAEXPLORER7_DEF} grade={7} explorerId="math_g7_algebra" color={color} lang={lang} onDone={onDone} />;
});

export default AlgebraExplorer7;
