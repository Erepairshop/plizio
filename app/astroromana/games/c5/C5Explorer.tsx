"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  FON5_POOL, FON5_LABELS,
  SUBST5_POOL, SUBST5_LABELS,
  VERB5_POOL, VERB5_LABELS,
  PART5_POOL, PART5_LABELS,
  ORT5_POOL, ORT5_LABELS,
  SINT5_POOL, SINT5_LABELS,
  TEXT5L_POOL, TEXT5L_LABELS,
  VOC5_POOL, VOC5_LABELS,
  RECAP5_POOL, RECAP5_LABELS,
} from "@/lib/explorerPools/romanaC5";

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: FON5_POOL, labels: FON5_LABELS, title: "explorer_title", icon: "🔊" },
  i2: { pool: SUBST5_POOL, labels: SUBST5_LABELS, title: "explorer_title", icon: "📦" },
  i3: { pool: VERB5_POOL, labels: VERB5_LABELS, title: "explorer_title", icon: "🏃" },
  i4: { pool: PART5_POOL, labels: PART5_LABELS, title: "explorer_title", icon: "🎨" },
  i5: { pool: ORT5_POOL, labels: ORT5_LABELS, title: "explorer_title", icon: "✏️" },
  i6: { pool: SINT5_POOL, labels: SINT5_LABELS, title: "explorer_title", icon: "🔬" },
  i7: { pool: TEXT5L_POOL, labels: TEXT5L_LABELS, title: "explorer_title", icon: "📚" },
  i8: { pool: VOC5_POOL, labels: VOC5_LABELS, title: "explorer_title", icon: "💡" },
  i9: { pool: RECAP5_POOL, labels: RECAP5_LABELS, title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function C5Explorer({ island, grade: _grade, onDone, color = "#6366F1", lang = "ro" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
      count={5} explorerId={`romana_c5_${island.id}`}
      subject="romana"
      color={color} lang={lang} grade={5}
      onDone={onDone}
    />
  );
}
