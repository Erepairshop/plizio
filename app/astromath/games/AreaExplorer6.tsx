"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { AREAEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const AreaExplorer6 = memo(function AreaExplorer6({
  color = "#EC4899",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={AREAEXPLORER6_DEF} grade={6} explorerId="math_g6_area_vol" color={color} lang={lang} onDone={onDone} />;
});

export default AreaExplorer6;
