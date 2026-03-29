"use client";
// K8Explorer.tsx — routes island.id → DynamicExplorer with the correct English K8 pool
// Each island maps to its pool (LABELS + POOL) from lib/explorerPools/englishK8.ts

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  ADVANCED_SYNTAX_POOL,          ADVANCED_SYNTAX_LABELS,
  DISCOURSE_PRAGMATICS_POOL,     DISCOURSE_PRAGMATICS_LABELS,
  STYLISTIC_STRUCTURES_POOL,     STYLISTIC_STRUCTURES_LABELS,
  SUBJUNCTIVE_MODAL_POOL,        SUBJUNCTIVE_MODAL_LABELS,
  NOMINALIZATION_POOL,           NOMINALIZATION_LABELS,
  DISCOURSE_MARKERS_POOL,        DISCOURSE_MARKERS_LABELS,
  REGISTER_FORMALITY_POOL,       REGISTER_FORMALITY_LABELS,
  SEMANTIC_RELATIONSHIPS_POOL,   SEMANTIC_RELATIONSHIPS_LABELS,
  BIGTEST8_POOL,                 BIGTEST8_LABELS,
} from "@/lib/explorerPools/englishK8";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: ADVANCED_SYNTAX_POOL,        labels: ADVANCED_SYNTAX_LABELS,        title: "explorer_title", icon: "🔬",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: DISCOURSE_PRAGMATICS_POOL,   labels: DISCOURSE_PRAGMATICS_LABELS,   title: "explorer_title", icon: "💬",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: STYLISTIC_STRUCTURES_POOL,   labels: STYLISTIC_STRUCTURES_LABELS,   title: "explorer_title", icon: "✍️",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: SUBJUNCTIVE_MODAL_POOL,      labels: SUBJUNCTIVE_MODAL_LABELS,      title: "explorer_title", icon: "🔮",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: NOMINALIZATION_POOL,         labels: NOMINALIZATION_LABELS,         title: "explorer_title", icon: "🧩",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: DISCOURSE_MARKERS_POOL,      labels: DISCOURSE_MARKERS_LABELS,      title: "explorer_title", icon: "🔗",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: REGISTER_FORMALITY_POOL,     labels: REGISTER_FORMALITY_LABELS,     title: "explorer_title", icon: "🎭",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: SEMANTIC_RELATIONSHIPS_POOL, labels: SEMANTIC_RELATIONSHIPS_LABELS, title: "explorer_title", icon: "🌐",
        mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: BIGTEST8_POOL,               labels: BIGTEST8_LABELS,               title: "explorer_title", icon: "🏆",
        mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K8Explorer({ island, grade, onDone, color = "#00D4FF", lang = "en" }: Props) {
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
        explorerId={`english_k8_${island.id}`}
        color={color}
        lang={lang}
        grade={grade}
        onDone={onDone}
      />
    );
  }

  return null;
}
