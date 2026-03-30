"use client";
// K5Explorer.tsx — routes island.id → DynamicExplorer with the correct English K5 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK5.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  CONJUNCTION_POOL,   CONJUNCTION_LABELS,
  INTERJECTION_POOL,  INTERJECTION_LABELS,
  TENSE5_POOL,        TENSE5_LABELS,
  SENTENCE5_POOL,     SENTENCE5_LABELS,
  PUNCTUATION5_POOL,  PUNCTUATION5_LABELS,
  SPELLING5_POOL,     SPELLING5_LABELS,
  ROOTWORD_POOL,      ROOTWORD_LABELS,
  FIGURATIVE_POOL,    FIGURATIVE_LABELS,
  BIGTEST5_POOL,      BIGTEST5_LABELS,
} from "@/lib/explorerPools/englishK5";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: CONJUNCTION_POOL,   labels: CONJUNCTION_LABELS,   title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: INTERJECTION_POOL,  labels: INTERJECTION_LABELS,  title: "explorer_title", icon: "❗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: TENSE5_POOL,        labels: TENSE5_LABELS,        title: "explorer_title", icon: "⏳",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: SENTENCE5_POOL,     labels: SENTENCE5_LABELS,     title: "explorer_title", icon: "🏔️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: PUNCTUATION5_POOL,  labels: PUNCTUATION5_LABELS,  title: "explorer_title", icon: "✏️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: SPELLING5_POOL,     labels: SPELLING5_LABELS,     title: "explorer_title", icon: "📖",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: ROOTWORD_POOL,      labels: ROOTWORD_LABELS,      title: "explorer_title", icon: "🪸",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: FIGURATIVE_POOL,    labels: FIGURATIVE_LABELS,    title: "explorer_title", icon: "🌊",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST5_POOL,      labels: BIGTEST5_LABELS,      title: "explorer_title", icon: "🏆",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K5Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k5_${island.id}`}
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
