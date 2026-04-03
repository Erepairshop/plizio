"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { GEOMETRYEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const GeometryExplorer5 = memo(function GeometryExplorer5({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={GEOMETRYEXPLORER5_DEF} grade={5} explorerId="math_g5_geometry" color={color} lang={lang} onDone={onDone} />;
});

export default GeometryExplorer5;
