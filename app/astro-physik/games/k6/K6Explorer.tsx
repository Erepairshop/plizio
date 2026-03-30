"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import {
  PHYSIK_K6_I1_LABELS, PHYSIK_K6_I1_POOL,
  PHYSIK_K6_I2_LABELS, PHYSIK_K6_I2_POOL,
  PHYSIK_K6_I3_LABELS, PHYSIK_K6_I3_POOL,
  PHYSIK_K6_I4_LABELS, PHYSIK_K6_I4_POOL,
  PHYSIK_K6_I5_LABELS, PHYSIK_K6_I5_POOL,
  PHYSIK_K6_I6_LABELS, PHYSIK_K6_I6_POOL,
  PHYSIK_K6_I7_LABELS, PHYSIK_K6_I7_POOL,
  PHYSIK_K6_I8_LABELS, PHYSIK_K6_I8_POOL,
  PHYSIK_K6_I9_LABELS, PHYSIK_K6_I9_POOL,
} from "@/lib/explorerPools/physikK6";

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

const POOL_CONFIG: Record<string, {
  pool: typeof PHYSIK_K6_I1_POOL;
  labels: typeof PHYSIK_K6_I1_LABELS;
  title: string;
  icon: string;
}> = {
  i1: { pool: PHYSIK_K6_I1_POOL, labels: PHYSIK_K6_I1_LABELS, title: "explorer_title", icon: "⚙️" },
  i2: { pool: PHYSIK_K6_I2_POOL, labels: PHYSIK_K6_I2_LABELS, title: "explorer_title", icon: "🧱" },
  i3: { pool: PHYSIK_K6_I3_POOL, labels: PHYSIK_K6_I3_LABELS, title: "explorer_title", icon: "🔌" },
  i4: { pool: PHYSIK_K6_I4_POOL, labels: PHYSIK_K6_I4_LABELS, title: "explorer_title", icon: "🪙" },
  i5: { pool: PHYSIK_K6_I5_POOL, labels: PHYSIK_K6_I5_LABELS, title: "explorer_title", icon: "⚡" },
  i6: { pool: PHYSIK_K6_I6_POOL, labels: PHYSIK_K6_I6_LABELS, title: "explorer_title", icon: "〰️" },
  i7: { pool: PHYSIK_K6_I7_POOL, labels: PHYSIK_K6_I7_LABELS, title: "explorer_title", icon: "⚖️" },
  i8: { pool: PHYSIK_K6_I8_POOL, labels: PHYSIK_K6_I8_LABELS, title: "explorer_title", icon: "💧" },
  i9: { pool: PHYSIK_K6_I9_POOL, labels: PHYSIK_K6_I9_LABELS, title: "explorer_title", icon: "🏁" },
};

export default function K6Explorer({ island, grade, onDone, color = "#6366F1", lang = "de" }: Props) {
  const cfg = POOL_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool}
      labels={cfg.labels}
      title={cfg.title}
      icon={cfg.icon}
      count={5}
      explorerId={`physik_k6_${island.id}`}
      subject="physik"
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
