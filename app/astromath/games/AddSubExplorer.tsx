"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { ADDSUBEXPLORER_DEF } from "@/lib/mathConfigs/g1Configs";

const AddSubExplorer = memo(function AddSubExplorer({
  color = "#00D4FF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={ADDSUBEXPLORER_DEF} grade={1} explorerId="math_g1_addsub" color={color} lang={lang} onDone={onDone} />;
});

export default AddSubExplorer;
