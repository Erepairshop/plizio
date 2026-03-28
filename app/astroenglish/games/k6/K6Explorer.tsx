"use client";
// K6Explorer.tsx — routes island.id → DynamicExplorer with the correct English K6 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK6.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  PRONOUN6_POOL,   PRONOUN6_LABELS,
  PRECISION_POOL,  PRECISION_LABELS,
  SENTENCE6_POOL,  SENTENCE6_LABELS,
  CLAUSE_POOL,     CLAUSE_LABELS,
  WORDBUILDER_POOL, WORDBUILDER_LABELS,
  VOCAB6_POOL,     VOCAB6_LABELS,
  ACADEMIC_POOL,   ACADEMIC_LABELS,
  PUNCT6_POOL,     PUNCT6_LABELS,
  RHETORIC_POOL,   RHETORIC_LABELS,
} from "@/lib/explorerPools/englishK6";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: PRONOUN6_POOL,    labels: PRONOUN6_LABELS,    title: "explorer_title", icon: "🎯",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: PRECISION_POOL,   labels: PRECISION_LABELS,   title: "explorer_title", icon: "🔍",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: SENTENCE6_POOL,   labels: SENTENCE6_LABELS,   title: "explorer_title", icon: "📝",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: CLAUSE_POOL,      labels: CLAUSE_LABELS,      title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: WORDBUILDER_POOL, labels: WORDBUILDER_LABELS, title: "explorer_title", icon: "🧩",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: VOCAB6_POOL,      labels: VOCAB6_LABELS,      title: "explorer_title", icon: "📚",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: ACADEMIC_POOL,    labels: ACADEMIC_LABELS,    title: "explorer_title", icon: "🎓",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: PUNCT6_POOL,      labels: PUNCT6_LABELS,      title: "explorer_title", icon: "✏️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: RHETORIC_POOL,    labels: RHETORIC_LABELS,    title: "explorer_title", icon: "🗣️",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K6Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k6_${island.id}`}
        color={color}
        lang={lang}
        grade={grade}
        onDone={onDone}
      />
    );
  }

  return null;
}
