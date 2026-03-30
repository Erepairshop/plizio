"use client";
// K2Explorer.tsx — routes island.id → DynamicExplorer with the correct English K2 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK2.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  NOUN_POOL,      NOUN_LABELS,
  VERB_POOL,      VERB_LABELS,
  ADJ_POOL,       ADJ_LABELS,
  SENTENCE2_POOL, SENTENCE2_LABELS,
  VOWEL_POOL,     VOWEL_LABELS,
  PREFIX_POOL,    PREFIX_LABELS,
  MEANING_POOL,   MEANING_LABELS,
  GRAMMAR2_POOL,  GRAMMAR2_LABELS,
  BIGTEST_POOL,   BIGTEST_LABELS,
} from "@/lib/explorerPools/englishK2";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: NOUN_POOL,      labels: NOUN_LABELS,      title: "explorer_title", icon: "🏷️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: VERB_POOL,      labels: VERB_LABELS,      title: "explorer_title", icon: "⚡",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: ADJ_POOL,       labels: ADJ_LABELS,       title: "explorer_title", icon: "🎨",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: SENTENCE2_POOL, labels: SENTENCE2_LABELS, title: "explorer_title", icon: "💬",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: VOWEL_POOL,     labels: VOWEL_LABELS,     title: "explorer_title", icon: "🌈",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: PREFIX_POOL,    labels: PREFIX_LABELS,    title: "explorer_title", icon: "🔡",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: MEANING_POOL,   labels: MEANING_LABELS,   title: "explorer_title", icon: "🌙",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: GRAMMAR2_POOL,  labels: GRAMMAR2_LABELS,  title: "explorer_title", icon: "🌌",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST_POOL,   labels: BIGTEST_LABELS,   title: "explorer_title", icon: "🌟",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K2Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k2_${island.id}`}
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
