"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  MORFO8_POOL, MORFO8_LABELS,
  SINT8_POOL, SINT8_LABELS,
  ORT8_POOL, ORT8_LABELS,
  TEXT8L_POOL, TEXT8L_LABELS,
  TEXT8N_POOL, TEXT8N_LABELS,
  ARG8_POOL, ARG8_LABELS,
  FIG8_POOL, FIG8_LABELS,
  COMP8_POOL, COMP8_LABELS,
  RECAP8_POOL, RECAP8_LABELS,
} from "@/lib/explorerPools/romanaC8";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: MORFO8_POOL, labels: MORFO8_LABELS, title: "explorer_title", icon: "🎓" },
  i2: { pool: SINT8_POOL, labels: SINT8_LABELS, title: "explorer_title", icon: "📊" },
  i3: { pool: ORT8_POOL, labels: ORT8_LABELS, title: "explorer_title", icon: "✏️" },
  i4: { pool: TEXT8L_POOL, labels: TEXT8L_LABELS, title: "explorer_title", icon: "🔍" },
  i5: { pool: TEXT8N_POOL, labels: TEXT8N_LABELS, title: "explorer_title", icon: "📰" },
  i6: { pool: ARG8_POOL, labels: ARG8_LABELS, title: "explorer_title", icon: "🗣️" },
  i7: { pool: FIG8_POOL, labels: FIG8_LABELS, title: "explorer_title", icon: "🎭" },
  i8: { pool: COMP8_POOL, labels: COMP8_LABELS, title: "explorer_title", icon: "📝" },
  i9: { pool: RECAP8_POOL, labels: RECAP8_LABELS, title: "explorer_title", icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C8Explorer({ island, grade: _grade, onDone, color = "#E879F9", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c8_${island.id}`}
      subject="romana"
      color={color} lang={lang} grade={8}
      onDone={onDone}
    />
  );
}
