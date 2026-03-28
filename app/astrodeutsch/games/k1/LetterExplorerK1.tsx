"use client";
// LetterExplorerK1 — Island i1: Buchstabeninsel
// Pool-based: 7 topics in LETTER_POOL, 5 random per session.
// To add/edit content: lib/explorerPools/deutschK1.ts → LETTER_POOL / LETTER_LABELS

import { memo } from "react";
import DynamicExplorer from "@/components/DynamicExplorer";
import { LETTER_POOL, LETTER_LABELS } from "@/lib/explorerPools/deutschK1";

const LetterExplorerK1 = memo(function LetterExplorerK1({
  color = "#FF2D78",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <DynamicExplorer
      pool={LETTER_POOL}
      labels={LETTER_LABELS}
      title="explorer_title"
      icon="🔤"
      count={5}
      mix={{ easy: 2, medium: 2, hard: 1 }}
      explorerId="deutsch_k1_letter"
      color={color}
      lang={lang}
      grade={1}
      onDone={onDone}
    />
  );
});

export default LetterExplorerK1;
