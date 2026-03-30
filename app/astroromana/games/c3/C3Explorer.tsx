"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  SUBST3_POOL, SUBST3_LABELS,
  VERB3_POOL, VERB3_LABELS,
  ADJ3_POOL, ADJ3_LABELS,
  PRON3_POOL, PRON3_LABELS,
  ORT3_POOL, ORT3_LABELS,
  PROP3_POOL, PROP3_LABELS,
  TEXT3D_POOL, TEXT3D_LABELS,
  TEXT3N_POOL, TEXT3N_LABELS,
  RECAP3_POOL, RECAP3_LABELS,
} from "@/lib/explorerPools/romanaC3";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: SUBST3_POOL, labels: SUBST3_LABELS, title: "explorer_title", icon: "📦" },
  i2: { pool: VERB3_POOL, labels: VERB3_LABELS, title: "explorer_title", icon: "⏰" },
  i3: { pool: ADJ3_POOL, labels: ADJ3_LABELS, title: "explorer_title", icon: "🎨" },
  i4: { pool: PRON3_POOL, labels: PRON3_LABELS, title: "explorer_title", icon: "👤" },
  i5: { pool: ORT3_POOL, labels: ORT3_LABELS, title: "explorer_title", icon: "✏️" },
  i6: { pool: PROP3_POOL, labels: PROP3_LABELS, title: "explorer_title", icon: "💬" },
  i7: { pool: TEXT3D_POOL, labels: TEXT3D_LABELS, title: "explorer_title", icon: "🖼️" },
  i8: { pool: TEXT3N_POOL, labels: TEXT3N_LABELS, title: "explorer_title", icon: "📖" },
  i9: { pool: RECAP3_POOL, labels: RECAP3_LABELS, title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C3Explorer({ island, grade: _grade, onDone, color = "#10B981", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c3_${island.id}`}
      subject="romana"
      color={color} lang={lang} grade={3}
      onDone={onDone}
    />
  );
}
