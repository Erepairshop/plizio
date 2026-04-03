"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { SYSTEMEXPLORER8_DEF } from "@/lib/mathConfigs/g8Configs";

const SystemExplorer8 = memo(function SystemExplorer8({
  color = "#06B6D4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={SYSTEMEXPLORER8_DEF} grade={8} explorerId="math_g8_systems" color={color} lang={lang} onDone={onDone} />;
});

export default SystemExplorer8;
