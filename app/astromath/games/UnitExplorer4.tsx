"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { UNITEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const UnitExplorer4 = memo(function UnitExplorer4({
  color = "#0EA5E9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={UNITEXPLORER4_DEF} grade={4} explorerId="math_g4_units" color={color} lang={lang} onDone={onDone} />;
});

export default UnitExplorer4;
