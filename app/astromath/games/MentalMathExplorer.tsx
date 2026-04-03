"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { MENTALMATHEXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const MentalMathExplorer = memo(function MentalMathExplorer({
  color = "#00D4FF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={MENTALMATHEXPLORER_DEF} grade={2} explorerId="math_g2_mentalmath" color={color} lang={lang} onDone={onDone} />;
});

export default MentalMathExplorer;
