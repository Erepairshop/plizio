"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  SUBST4_POOL, SUBST4_LABELS,
  VERB4_POOL, VERB4_LABELS,
  ADJ4_POOL, ADJ4_LABELS,
  PRON4_POOL, PRON4_LABELS,
  NUM4_POOL, NUM4_LABELS,
  ORT4_POOL, ORT4_LABELS,
  PROP4_POOL, PROP4_LABELS,
  COMP4_POOL, COMP4_LABELS,
  RECAP4_POOL, RECAP4_LABELS,
} from "@/lib/explorerPools/romanaC4";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: SUBST4_POOL, labels: SUBST4_LABELS, title: "explorer_title", icon: "📦" },
  i2: { pool: VERB4_POOL, labels: VERB4_LABELS, title: "explorer_title", icon: "🎯" },
  i3: { pool: ADJ4_POOL, labels: ADJ4_LABELS, title: "explorer_title", icon: "📊" },
  i4: { pool: PRON4_POOL, labels: PRON4_LABELS, title: "explorer_title", icon: "👥" },
  i5: { pool: NUM4_POOL, labels: NUM4_LABELS, title: "explorer_title", icon: "🔢" },
  i6: { pool: ORT4_POOL, labels: ORT4_LABELS, title: "explorer_title", icon: "✏️" },
  i7: { pool: PROP4_POOL, labels: PROP4_LABELS, title: "explorer_title", icon: "🔬" },
  i8: { pool: COMP4_POOL, labels: COMP4_LABELS, title: "explorer_title", icon: "📝" },
  i9: { pool: RECAP4_POOL, labels: RECAP4_LABELS, title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C4Explorer({ island, grade: _grade, onDone, color = "#F59E0B", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c4_${island.id}`}
      color={color} lang={lang} grade={4}
      onDone={onDone}
    />
  );
}
