"use client";
// K1Explorer.tsx — routes island.id → DynamicExplorer with the correct English K1 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK1.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  PHONICS_POOL,   PHONICS_LABELS,
  LETTER_POOL,    LETTER_LABELS,
  BLEND_POOL,     BLEND_LABELS,
  WORD_POOL,      WORD_LABELS,
  ACTION_POOL,    ACTION_LABELS,
  COMPOUND_POOL,  COMPOUND_LABELS,
  SENTENCE_POOL,  SENTENCE_LABELS,
  GRAMMAR_POOL,   GRAMMAR_LABELS,
  STORY_POOL,     STORY_LABELS,
} from "@/lib/explorerPools/englishK1";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: PHONICS_POOL,   labels: PHONICS_LABELS,   title: "explorer_title", icon: "🔤",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: LETTER_POOL,    labels: LETTER_LABELS,    title: "explorer_title", icon: "🅰️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: BLEND_POOL,     labels: BLEND_LABELS,     title: "explorer_title", icon: "🌊",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: WORD_POOL,      labels: WORD_LABELS,      title: "explorer_title", icon: "📝",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: ACTION_POOL,    labels: ACTION_LABELS,    title: "explorer_title", icon: "🏃",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: COMPOUND_POOL,  labels: COMPOUND_LABELS,  title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: SENTENCE_POOL,  labels: SENTENCE_LABELS,  title: "explorer_title", icon: "💬",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: GRAMMAR_POOL,   labels: GRAMMAR_LABELS,   title: "explorer_title", icon: "📖",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: STORY_POOL,     labels: STORY_LABELS,     title: "explorer_title", icon: "🌟",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K1Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k1_${island.id}`}
        color={color}
        lang={lang}
        grade={grade}
        onDone={onDone}
      />
    );
  }

  // Fallback: shouldn't happen if all islands are covered
  return null;
}
