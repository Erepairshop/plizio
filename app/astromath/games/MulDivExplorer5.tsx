"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { MULDIVEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const MulDivExplorer5 = memo(function MulDivExplorer5({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={MULDIVEXPLORER5_DEF} grade={5} explorerId="math_g5_muldiv" color={color} lang={lang} onDone={onDone} />;
});

export default MulDivExplorer5;
