"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { ALGEBRAEXPLORER6_DEF } from "@/lib/mathConfigs/g6Configs";

const AlgebraExplorer6 = memo(function AlgebraExplorer6({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={ALGEBRAEXPLORER6_DEF} grade={6} explorerId="math_g6_algebra" color={color} lang={lang} onDone={onDone} />;
});

export default AlgebraExplorer6;
