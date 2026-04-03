"use client";
import { memo } from "react";
import GenericMathExplorer from "@/app/astromath/components/GenericMathExplorer";
import { CARRYBORROWEXPLORER_DEF } from "@/lib/mathConfigs/g2Configs";

const CarryBorrowExplorer = memo(function CarryBorrowExplorer({
  color = "#B44DFF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <GenericMathExplorer def={CARRYBORROWEXPLORER_DEF} grade={2} explorerId="math_g2_carryborrow" color={color} lang={lang} onDone={onDone} />;
});

export default CarryBorrowExplorer;
