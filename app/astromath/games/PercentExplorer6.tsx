"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { PERCENTEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const PercentExplorer6 = memo(function PercentExplorer6({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={PERCENTEXPLORER6_DEF} grade={6} explorerId="math_g6_percent" color={color} lang={lang} onDone={onDone} />;
});

export default PercentExplorer6;
