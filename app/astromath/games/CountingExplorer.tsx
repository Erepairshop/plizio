"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { COUNTINGEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const CountingExplorer = memo(function CountingExplorer({
  color = "#4ECDC4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={COUNTINGEXPLORER_DEF} grade={1} explorerId="math_g1_counting" color={color} lang={lang} onDone={onDone} />;
});

export default CountingExplorer;
