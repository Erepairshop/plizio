"use client";
// K3Explorer.tsx — routes island.id → DynamicExplorer with the correct English K3 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK3.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  PLURAL_POOL,    PLURAL_LABELS,
  TENSE_POOL,     TENSE_LABELS,
  ADVERB_POOL,    ADVERB_LABELS,
  SUBJECT_POOL,   SUBJECT_LABELS,
  QUOTE_POOL,     QUOTE_LABELS,
  PREFIX3_POOL,   PREFIX3_LABELS,
  WORDFAM_POOL,   WORDFAM_LABELS,
  VOCAB3_POOL,    VOCAB3_LABELS,
  BIGTEST3_POOL,  BIGTEST3_LABELS,
} from "@/lib/explorerPools/englishK3";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: PLURAL_POOL,   labels: PLURAL_LABELS,   title: "explorer_title", icon: "📚",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: TENSE_POOL,    labels: TENSE_LABELS,    title: "explorer_title", icon: "⏰",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: ADVERB_POOL,   labels: ADVERB_LABELS,   title: "explorer_title", icon: "🌀",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: SUBJECT_POOL,  labels: SUBJECT_LABELS,  title: "explorer_title", icon: "⭐",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: QUOTE_POOL,    labels: QUOTE_LABELS,    title: "explorer_title", icon: "💬",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: PREFIX3_POOL,  labels: PREFIX3_LABELS,  title: "explorer_title", icon: "🔡",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: WORDFAM_POOL,  labels: WORDFAM_LABELS,  title: "explorer_title", icon: "🌊",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: VOCAB3_POOL,   labels: VOCAB3_LABELS,   title: "explorer_title", icon: "🌿",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST3_POOL, labels: BIGTEST3_LABELS, title: "explorer_title", icon: "🌟",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K3Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k3_${island.id}`}
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
