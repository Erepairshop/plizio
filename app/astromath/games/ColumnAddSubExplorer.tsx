"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { COLUMNADDSUBEXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const ColumnAddSubExplorer = memo(function ColumnAddSubExplorer({
  color = "#00FF88",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={COLUMNADDSUBEXPLORER_DEF} grade={2} explorerId="math_g2_columnaddsub" color={color} lang={lang} onDone={onDone} />;
});

export default ColumnAddSubExplorer;
