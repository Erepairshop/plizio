"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { TRIANGLEEXPLORER7_DEF } from "@/lib/mathConfigs/g7Configs";

const TriangleExplorer7 = memo(function TriangleExplorer7({
  color = "#DB2777",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={TRIANGLEEXPLORER7_DEF} grade={7} explorerId="math_g7_triangles" color={color} lang={lang} onDone={onDone} />;
});

export default TriangleExplorer7;
