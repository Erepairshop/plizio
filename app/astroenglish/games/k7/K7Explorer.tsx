"use client";
// K7Explorer.tsx — routes island.id → DynamicExplorer with the correct English K7 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK7.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  REPORTED_SPEECH_SANCTUARY_POOL,  REPORTED_SPEECH_SANCTUARY_LABELS,
  CONDITIONAL_CASTLE_POOL,          CONDITIONAL_CASTLE_LABELS,
  INFINITIVE_GERUND_GARDEN_POOL,    INFINITIVE_GERUND_GARDEN_LABELS,
  CAUSATIVE_CASTLE_POOL,            CAUSATIVE_CASTLE_LABELS,
  INVERSION_ISLAND_POOL,            INVERSION_ISLAND_LABELS,
  PHRASAL_VERBS_PARADISE_POOL,      PHRASAL_VERBS_PARADISE_LABELS,
  RELATIVE_CLAUSES_POOL,            RELATIVE_CLAUSES_LABELS,
  MIXED_GRAMMAR_POOL,               MIXED_GRAMMAR_LABELS,
  BIGTEST7_POOL,                    BIGTEST7_LABELS,
} from "@/lib/explorerPools/englishK7";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: REPORTED_SPEECH_SANCTUARY_POOL, labels: REPORTED_SPEECH_SANCTUARY_LABELS, title: "explorer_title", icon: "💬",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: CONDITIONAL_CASTLE_POOL,        labels: CONDITIONAL_CASTLE_LABELS,        title: "explorer_title", icon: "🏰",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: INFINITIVE_GERUND_GARDEN_POOL,  labels: INFINITIVE_GERUND_GARDEN_LABELS,  title: "explorer_title", icon: "🌱",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: CAUSATIVE_CASTLE_POOL,          labels: CAUSATIVE_CASTLE_LABELS,          title: "explorer_title", icon: "⚙️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: INVERSION_ISLAND_POOL,          labels: INVERSION_ISLAND_LABELS,          title: "explorer_title", icon: "🔄",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: PHRASAL_VERBS_PARADISE_POOL,    labels: PHRASAL_VERBS_PARADISE_LABELS,    title: "explorer_title", icon: "🌴",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: RELATIVE_CLAUSES_POOL,          labels: RELATIVE_CLAUSES_LABELS,          title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: MIXED_GRAMMAR_POOL,             labels: MIXED_GRAMMAR_LABELS,             title: "explorer_title", icon: "🎯",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST7_POOL,                  labels: BIGTEST7_LABELS,                  title: "explorer_title", icon: "🏆",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K7Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k7_${island.id}`}
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
