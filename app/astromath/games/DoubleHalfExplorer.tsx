"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { DOUBLEHALFEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const DoubleHalfExplorer = memo(function DoubleHalfExplorer({
  color = "#B44DFF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={DOUBLEHALFEXPLORER_DEF} grade={1} explorerId="math_g1_doublehalf" color={color} lang={lang} onDone={onDone} />;
});

export default DoubleHalfExplorer;
