"use client";
// K6Explorer.tsx — routes island.id → DynamicExplorer with the correct English K6 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK6.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  MODAL_MASTERY_POOL,         MODAL_MASTERY_LABELS,
  PASSIVE_POWER_POOL,         PASSIVE_POWER_LABELS,
  COMPLEX_CITADEL_POOL,       COMPLEX_CITADEL_LABELS,
  RELATIVE_REFUGE_POOL,       RELATIVE_REFUGE_LABELS,
  PREPOSITION_PLAZA_POOL,     PREPOSITION_PLAZA_LABELS,
  PHRASAL_VERBS_VALLEY_POOL,  PHRASAL_VERBS_VALLEY_LABELS,
  ADVANCED_VOCABULARY_POOL,   ADVANCED_VOCABULARY_LABELS,
  MIXED_GRAMMAR_POOL,         MIXED_GRAMMAR_LABELS,
  BIGTEST6_POOL,              BIGTEST6_LABELS,
} from "@/lib/explorerPools/englishK6";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: MODAL_MASTERY_POOL,        labels: MODAL_MASTERY_LABELS,        title: "explorer_title", icon: "🔮",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: PASSIVE_POWER_POOL,        labels: PASSIVE_POWER_LABELS,        title: "explorer_title", icon: "⚡",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: COMPLEX_CITADEL_POOL,      labels: COMPLEX_CITADEL_LABELS,      title: "explorer_title", icon: "🏰",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: RELATIVE_REFUGE_POOL,      labels: RELATIVE_REFUGE_LABELS,      title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: PREPOSITION_PLAZA_POOL,    labels: PREPOSITION_PLAZA_LABELS,    title: "explorer_title", icon: "📍",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: PHRASAL_VERBS_VALLEY_POOL, labels: PHRASAL_VERBS_VALLEY_LABELS, title: "explorer_title", icon: "🌿",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: ADVANCED_VOCABULARY_POOL,  labels: ADVANCED_VOCABULARY_LABELS,  title: "explorer_title", icon: "📚",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: MIXED_GRAMMAR_POOL,        labels: MIXED_GRAMMAR_LABELS,        title: "explorer_title", icon: "🎯",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST6_POOL,             labels: BIGTEST6_LABELS,             title: "explorer_title", icon: "🏆",
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
