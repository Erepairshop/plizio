"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { FRACTIONEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const FractionExplorer5 = memo(function FractionExplorer5({
  color = "#14B8A6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={FRACTIONEXPLORER5_DEF} grade={5} explorerId="math_g5_fractions" color={color} lang={lang} onDone={onDone} />;
});

export default FractionExplorer5;
