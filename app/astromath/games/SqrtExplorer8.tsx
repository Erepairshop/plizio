"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { SQRTEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const SqrtExplorer8 = memo(function SqrtExplorer8({
  color = "#6366F1",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={SQRTEXPLORER8_DEF} grade={8} explorerId="math_g8_sqrt" color={color} lang={lang} onDone={onDone} />;
});

export default SqrtExplorer8;
