"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { AREAEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const AreaExplorer4 = memo(function AreaExplorer4({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={AREAEXPLORER4_DEF} grade={4} explorerId="math_g4_geometry" color={color} lang={lang} onDone={onDone} />;
});

export default AreaExplorer4;
