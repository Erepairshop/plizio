"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  ALFA_POOL, ALFA_LABELS,
  VOCALE_POOL, VOCALE_LABELS,
  SILABE_POOL, SILABE_LABELS,
  CUVINTE_POOL, CUVINTE_LABELS,
  PROPOS_POOL, PROPOS_LABELS,
  PUNCT_POOL, PUNCT_LABELS,
  MAJUSC_POOL, MAJUSC_LABELS,
  ANTO_POOL, ANTO_LABELS,
  RECAP1_POOL, RECAP1_LABELS,
} from "@/lib/explorerPools/romanaC1";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: ALFA_POOL, labels: ALFA_LABELS, title: "explorer_title", icon: "🔤" },
  i2: { pool: VOCALE_POOL, labels: VOCALE_LABELS, title: "explorer_title", icon: "🗣️" },
  i3: { pool: SILABE_POOL, labels: SILABE_LABELS, title: "explorer_title", icon: "✂️" },
  i4: { pool: CUVINTE_POOL, labels: CUVINTE_LABELS, title: "explorer_title", icon: "📝" },
  i5: { pool: PROPOS_POOL, labels: PROPOS_LABELS, title: "explorer_title", icon: "💬" },
  i6: { pool: PUNCT_POOL, labels: PUNCT_LABELS, title: "explorer_title", icon: "❗" },
  i7: { pool: MAJUSC_POOL, labels: MAJUSC_LABELS, title: "explorer_title", icon: "🔠" },
  i8: { pool: ANTO_POOL, labels: ANTO_LABELS, title: "explorer_title", icon: "↔️" },
  i9: { pool: RECAP1_POOL, labels: RECAP1_LABELS, title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C1Explorer({ island, grade: _grade, onDone, color = "#FF2D78", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c1_${island.id}`}
      color={color} lang={lang} grade={1}
      onDone={onDone}
    />
  );
}
