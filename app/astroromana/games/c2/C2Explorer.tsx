"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  SUBST2_POOL, SUBST2_LABELS,
  VERB2_POOL, VERB2_LABELS,
  ADJ2_POOL, ADJ2_LABELS,
  ART2_POOL, ART2_LABELS,
  ORT2_POOL, ORT2_LABELS,
  PROP2_POOL, PROP2_LABELS,
  PUNCTS2_POOL, PUNCTS2_LABELS,
  TEXT2_POOL, TEXT2_LABELS,
  RECAP2_POOL, RECAP2_LABELS,
} from "@/lib/explorerPools/romanaC2";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: SUBST2_POOL, labels: SUBST2_LABELS, title: "explorer_title", icon: "📦" },
  i2: { pool: VERB2_POOL, labels: VERB2_LABELS, title: "explorer_title", icon: "🏃" },
  i3: { pool: ADJ2_POOL, labels: ADJ2_LABELS, title: "explorer_title", icon: "🎨" },
  i4: { pool: ART2_POOL, labels: ART2_LABELS, title: "explorer_title", icon: "📰" },
  i5: { pool: ORT2_POOL, labels: ORT2_LABELS, title: "explorer_title", icon: "✏️" },
  i6: { pool: PROP2_POOL, labels: PROP2_LABELS, title: "explorer_title", icon: "💬" },
  i7: { pool: PUNCTS2_POOL, labels: PUNCTS2_LABELS, title: "explorer_title", icon: "❗" },
  i8: { pool: TEXT2_POOL, labels: TEXT2_LABELS, title: "explorer_title", icon: "📖" },
  i9: { pool: RECAP2_POOL, labels: RECAP2_LABELS, title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C2Explorer({ island, grade: _grade, onDone, color = "#3B82F6", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c2_${island.id}`}
      color={color} lang={lang} grade={2}
      onDone={onDone}
    />
  );
}
