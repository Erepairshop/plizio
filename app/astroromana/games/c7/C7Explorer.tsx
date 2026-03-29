"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  SINT7P_POOL, SINT7P_LABELS,
  SINT7F_POOL, SINT7F_LABELS,
  FIG7_POOL, FIG7_LABELS,
  COMT7_POOL, COMT7_LABELS,
  MORFO7_POOL, MORFO7_LABELS,
  ORT7_POOL, ORT7_LABELS,
  EPIC7_POOL, EPIC7_LABELS,
  LIRIC7_POOL, LIRIC7_LABELS,
  RECAP7_POOL, RECAP7_LABELS,
} from "@/lib/explorerPools/romanaC7";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: SINT7P_POOL, labels: SINT7P_LABELS, title: "explorer_title", icon: "🔗" },
  i2: { pool: SINT7F_POOL, labels: SINT7F_LABELS, title: "explorer_title", icon: "🔀" },
  i3: { pool: FIG7_POOL, labels: FIG7_LABELS, title: "explorer_title", icon: "🎭" },
  i4: { pool: COMT7_POOL, labels: COMT7_LABELS, title: "explorer_title", icon: "📝" },
  i5: { pool: MORFO7_POOL, labels: MORFO7_LABELS, title: "explorer_title", icon: "🔬" },
  i6: { pool: ORT7_POOL, labels: ORT7_LABELS, title: "explorer_title", icon: "✏️" },
  i7: { pool: EPIC7_POOL, labels: EPIC7_LABELS, title: "explorer_title", icon: "📚" },
  i8: { pool: LIRIC7_POOL, labels: LIRIC7_LABELS, title: "explorer_title", icon: "🎵" },
  i9: { pool: RECAP7_POOL, labels: RECAP7_LABELS, title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C7Explorer({ island, grade: _grade, onDone, color = "#B44DFF", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c7_${island.id}`}
      color={color} lang={lang} grade={7}
      onDone={onDone}
    />
  );
}
