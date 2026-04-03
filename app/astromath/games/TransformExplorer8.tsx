"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { TRANSFORMEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const TransformExplorer8 = memo(function TransformExplorer8({
  color = "#0EA5E9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={TRANSFORMEXPLORER8_DEF} grade={8} explorerId="math_g8_transform" color={color} lang={lang} onDone={onDone} />;
});

export default TransformExplorer8;
