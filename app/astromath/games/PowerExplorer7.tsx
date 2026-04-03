"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { POWEREXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const PowerExplorer7 = memo(function PowerExplorer7({
  color = "#4F46E5",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={POWEREXPLORER7_DEF} grade={7} explorerId="math_g7_powers" color={color} lang={lang} onDone={onDone} />;
});

export default PowerExplorer7;
