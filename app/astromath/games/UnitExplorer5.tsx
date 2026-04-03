"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { UNITEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const UnitExplorer5 = memo(function UnitExplorer5({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={UNITEXPLORER5_DEF} grade={5} explorerId="math_g5_units" color={color} lang={lang} onDone={onDone} />;
});

export default UnitExplorer5;
