"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { STATEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const StatExplorer7 = memo(function StatExplorer7({
  color = "#4F46E5",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={STATEXPLORER7_DEF} grade={7} explorerId="math_g7_stats" color={color} lang={lang} onDone={onDone} />;
});

export default StatExplorer7;
