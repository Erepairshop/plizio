"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { G2MEASUREMENTEXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const G2MeasurementExplorer = memo(function G2MeasurementExplorer({
  color = "#E879F9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={G2MEASUREMENTEXPLORER_DEF} grade={2} explorerId="math_g2_measurement" color={color} lang={lang} onDone={onDone} />;
});

export default G2MeasurementExplorer;
