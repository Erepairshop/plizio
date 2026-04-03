"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { WORDPROBLEMEXPLORER4_DEF } from "@/lib/mathConfigs/g4Configs";

const WordProblemExplorer4 = memo(function WordProblemExplorer4({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={WORDPROBLEMEXPLORER4_DEF} grade={4} explorerId="math_g4_wordproblems" color={color} lang={lang} onDone={onDone} />;
});

export default WordProblemExplorer4;
