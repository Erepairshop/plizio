"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { SPEEDEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const SpeedExplorer6 = memo(function SpeedExplorer6({
  color = "#EF4444",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={SPEEDEXPLORER6_DEF} grade={6} explorerId="math_g6_motion" color={color} lang={lang} onDone={onDone} />;
});

export default SpeedExplorer6;
