"use client";
import { memo, useCallback } from "react";
import { useLang } from "@/components/LanguageProvider";
import SortEngine from "@/components/SortEngine";
import { generateSortRound, type SortRound } from "@/lib/astromath";

const GravitySort = memo(function GravitySort({ sortRange, color, onDone, generateRound }: {
  sortRange: [number, number]; color: string; onDone: (score: number, total: number) => void;
  generateRound?: () => SortRound;
}) {
  const { lang } = useLang();
  const gen = useCallback(() => generateRound ? generateRound() : generateSortRound(sortRange), [generateRound, sortRange]);

  return (
    <SortEngine
      sortRange={sortRange}
      color={color}
      onDone={onDone}
      generateRound={gen}
      rounds={5}
      lang={lang}
    />
  );
});

export default GravitySort;
