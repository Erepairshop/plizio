"use client";

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { Lang } from "@/lib/astroMathConfigShared";

interface GenericMathExplorerProps {
  explorerId: string;
  grade: number;
  def: ExplorerDef;
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export const GenericMathExplorer = memo(function GenericMathExplorer({
  explorerId,
  grade,
  def,
  color = "#4ECDC4",
  lang = "en",
  onDone,
  onClose,
}: GenericMathExplorerProps) {
  // Ensure we pass the required lang property correctly
  const typedLang = lang as Lang;
  
  return (
    <ExplorerEngine
      def={def}
      grade={grade}
      explorerId={explorerId}
      color={color}
      lang={typedLang}
      onDone={onDone}
      onClose={onClose}
    />
  );
});

export default GenericMathExplorer;
