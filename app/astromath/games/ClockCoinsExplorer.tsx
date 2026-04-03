"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { CLOCKCOINSEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const ClockCoinsExplorer = memo(function ClockCoinsExplorer({
  color = "#FF9500",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={CLOCKCOINSEXPLORER_DEF} grade={1} explorerId="math_g1_clockcoins" color={color} lang={lang} onDone={onDone} />;
});

export default ClockCoinsExplorer;
