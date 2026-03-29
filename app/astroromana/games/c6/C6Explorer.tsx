"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  MORFO6_POOL, MORFO6_LABELS,
  VERB6_POOL, VERB6_LABELS,
  PROP6_POOL, PROP6_LABELS,
  TEXT6A_POOL, TEXT6A_LABELS,
  STIL6_POOL, STIL6_LABELS,
  FIG6_POOL, FIG6_LABELS,
  ORT6_POOL, ORT6_LABELS,
  TEXT6L_POOL, TEXT6L_LABELS,
  RECAP6_POOL, RECAP6_LABELS,
} from "@/lib/explorerPools/romanaC6";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: MORFO6_POOL, labels: MORFO6_LABELS, title: "explorer_title", icon: "🔬" },
  i2: { pool: VERB6_POOL, labels: VERB6_LABELS, title: "explorer_title", icon: "⏰" },
  i3: { pool: PROP6_POOL, labels: PROP6_LABELS, title: "explorer_title", icon: "📊" },
  i4: { pool: TEXT6A_POOL, labels: TEXT6A_LABELS, title: "explorer_title", icon: "🗣️" },
  i5: { pool: STIL6_POOL, labels: STIL6_LABELS, title: "explorer_title", icon: "🎭" },
  i6: { pool: FIG6_POOL, labels: FIG6_LABELS, title: "explorer_title", icon: "🌟" },
  i7: { pool: ORT6_POOL, labels: ORT6_LABELS, title: "explorer_title", icon: "✏️" },
  i8: { pool: TEXT6L_POOL, labels: TEXT6L_LABELS, title: "explorer_title", icon: "📖" },
  i9: { pool: RECAP6_POOL, labels: RECAP6_LABELS, title: "explorer_title", icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C6Explorer({ island, grade: _grade, onDone, color = "#FF9500", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c6_${island.id}`}
      color={color} lang={lang} grade={6}
      onDone={onDone}
    />
  );
}
