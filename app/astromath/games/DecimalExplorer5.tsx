"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { DECIMALEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const DecimalExplorer5 = memo(function DecimalExplorer5({
  color = "#0EA5E9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={DECIMALEXPLORER5_DEF} grade={5} explorerId="math_g5_decimals" color={color} lang={lang} onDone={onDone} />;
});

export default DecimalExplorer5;
