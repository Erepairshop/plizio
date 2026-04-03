"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { WORDPROBLEMEXPLORER5_DEF } from "@/lib/mathConfigs/g5Configs";

const WordProblemExplorer5 = memo(function WordProblemExplorer5({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={WORDPROBLEMEXPLORER5_DEF} grade={5} explorerId="math_g5_wordproblems" color={color} lang={lang} onDone={onDone} />;
});

export default WordProblemExplorer5;
