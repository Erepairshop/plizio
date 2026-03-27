"use client";
// K1Explorer.tsx — routes island.id → DynamicExplorer with the correct pool/labels
// To add a new island: import its POOL + LABELS from deutschK1.ts, add entry to ISLAND_CONFIG.

import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  LETTER_POOL,   LETTER_LABELS,
  SYLLABLE_POOL, SYLLABLE_LABELS,
  WORD_POOL,     WORD_LABELS,
  RHYME_POOL,    RHYME_LABELS,
  SENTENCE_POOL, SENTENCE_LABELS,
  BILDER_POOL,   BILDER_LABELS,
  ARTIKEL_POOL,  ARTIKEL_LABELS,
  LESE_POOL,     LESE_LABELS,
  EXAM_POOL,     EXAM_LABELS,
} from "@/lib/explorerPools/deutschK1";

const DeutschExplore = dynamic(
  () => import("@/app/astrodeutsch/games/DeutschExplore"),
  { ssr: false }
);

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: LETTER_POOL,   labels: LETTER_LABELS,   title: "explorer_title", icon: "🔤", mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: SYLLABLE_POOL, labels: SYLLABLE_LABELS, title: "explorer_title", icon: "✂️", mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: WORD_POOL,     labels: WORD_LABELS,     title: "explorer_title", icon: "📝", mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: RHYME_POOL,    labels: RHYME_LABELS,    title: "explorer_title", icon: "🎵", mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: SENTENCE_POOL, labels: SENTENCE_LABELS, title: "explorer_title", icon: "💬", mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: BILDER_POOL,   labels: BILDER_LABELS,   title: "explorer_title", icon: "🖼️", mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: ARTIKEL_POOL,  labels: ARTIKEL_LABELS,  title: "explorer_title", icon: "🏰", mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: LESE_POOL,     labels: LESE_LABELS,     title: "explorer_title", icon: "📖", mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: EXAM_POOL,     labels: EXAM_LABELS,     title: "explorer_title", icon: "🏆", mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K1Explorer({ island, grade, onDone, color = "#FF2D78", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];

  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool}
        labels={cfg.labels}
        title={cfg.title}
        icon={cfg.icon}
        count={5}
        mix={cfg.mix}
        explorerId={`deutsch_k1_${island.id}`}
        color={color}
        lang={lang}
        grade={1}
        onDone={onDone}
      />
    );
  }

  // Fallback (shouldn't happen for K1 — all islands covered)
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
