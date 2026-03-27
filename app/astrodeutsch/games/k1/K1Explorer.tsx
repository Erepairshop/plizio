"use client";
// K1Explorer.tsx — routes island.id → pool-based explorer (or falls back to DeutschExplore)
// When a new pool explorer is ready for an island, add it to ISLAND_MAP below.

import dynamic from "next/dynamic";
import LetterExplorerK1 from "./LetterExplorerK1";
import type { IslandDef } from "@/lib/astromath";

const DeutschExplore = dynamic(
  () => import("@/app/astrodeutsch/games/DeutschExplore"),
  { ssr: false }
);

// Pool-based explorers per island — add here as they get written
const ISLAND_MAP: Partial<Record<string, React.ComponentType<{ color?: string; onDone: (s: number, t: number) => void; lang?: string }>>> = {
  i1: LetterExplorerK1,
  // i2: SyllableExplorerK1,   ← add when ready
  // i3: ArticleExplorerK1,    ← add when ready
  // ...
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function K1Explorer({ island, grade, onDone, color = "#FF2D78", lang = "de" }: Props) {
  const PoolExplorer = ISLAND_MAP[island.id];

  if (PoolExplorer) {
    return <PoolExplorer color={color} lang={lang} onDone={onDone} />;
  }

  // Fallback: old DeutschExplore for islands not yet pool-based
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
