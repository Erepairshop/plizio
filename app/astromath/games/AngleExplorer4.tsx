"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { ANGLEEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const AngleExplorer4 = memo(function AngleExplorer4({
  color = "#6366F1",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={ANGLEEXPLORER4_DEF} grade={4} explorerId="math_g4_symmetry" color={color} lang={lang} onDone={onDone} />;
});

export default AngleExplorer4;
