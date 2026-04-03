"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { STATEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const StatExplorer6 = memo(function StatExplorer6({
  color = "#6366F1",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={STATEXPLORER6_DEF} grade={6} explorerId="math_g6_data" color={color} lang={lang} onDone={onDone} />;
});

export default StatExplorer6;
