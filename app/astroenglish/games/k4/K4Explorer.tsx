"use client";
// K4Explorer.tsx — routes island.id → DynamicExplorer with the correct English K4 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK4.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  PRONOUN_POOL,     PRONOUN_LABELS,
  ADJECTIVE_POOL,   ADJECTIVE_LABELS,
  ADVERB_POOL,      ADVERB_LABELS,
  COMPARISON_POOL,  COMPARISON_LABELS,
  PREPOSITION_POOL, PREPOSITION_LABELS,
  CONJUNCTION_POOL, CONJUNCTION_LABELS,
  QUESTION_POOL,    QUESTION_LABELS,
  VOCABULARY_POOL,  VOCABULARY_LABELS,
  BIGTEST4_POOL,    BIGTEST4_LABELS,
} from "@/lib/explorerPools/englishK4";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: PRONOUN_POOL,     labels: PRONOUN_LABELS,     title: "explorer_title", icon: "🎯",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: ADJECTIVE_POOL,   labels: ADJECTIVE_LABELS,   title: "explorer_title", icon: "🎨",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: ADVERB_POOL,      labels: ADVERB_LABELS,      title: "explorer_title", icon: "⚡",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: COMPARISON_POOL,  labels: COMPARISON_LABELS,  title: "explorer_title", icon: "⚖️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: PREPOSITION_POOL, labels: PREPOSITION_LABELS, title: "explorer_title", icon: "📍",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: CONJUNCTION_POOL, labels: CONJUNCTION_LABELS, title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: QUESTION_POOL,    labels: QUESTION_LABELS,    title: "explorer_title", icon: "❓",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: VOCABULARY_POOL,  labels: VOCABULARY_LABELS,  title: "explorer_title", icon: "📚",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST4_POOL,    labels: BIGTEST4_LABELS,    title: "explorer_title", icon: "🏆",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K4Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k4_${island.id}`}
        subject="english"
        color={color}
        lang={lang}
        grade={grade}
        onDone={onDone}
      />
    );
  }

  return null;
}
