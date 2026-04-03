"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { ADDSUBEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const AddSubExplorer5 = memo(function AddSubExplorer5({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={ADDSUBEXPLORER5_DEF} grade={5} explorerId="math_g5_addsub" color={color} lang={lang} onDone={onDone} />;
});

export default AddSubExplorer5;
