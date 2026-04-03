"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { STATEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const StatExplorer8 = memo(function StatExplorer8({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={STATEXPLORER8_DEF} grade={8} explorerId="math_g8_stats" color={color} lang={lang} onDone={onDone} />;
});

export default StatExplorer8;
