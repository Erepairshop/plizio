"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import {
  KEMIA_K6_I1_LABELS, KEMIA_K6_I1_POOL,
  KEMIA_K6_I2_LABELS, KEMIA_K6_I2_POOL,
  KEMIA_K6_I3_LABELS, KEMIA_K6_I3_POOL,
  KEMIA_K6_I4_LABELS, KEMIA_K6_I4_POOL,
  KEMIA_K6_I5_LABELS, KEMIA_K6_I5_POOL,
  KEMIA_K6_I6_LABELS, KEMIA_K6_I6_POOL,
  KEMIA_K6_I7_LABELS, KEMIA_K6_I7_POOL,
  KEMIA_K6_I8_LABELS, KEMIA_K6_I8_POOL,
  KEMIA_K6_I9_LABELS, KEMIA_K6_I9_POOL,
} from "@/lib/explorerPools/kemiaK6";

const POOL_CONFIG = {
  i1: { pool: KEMIA_K6_I1_POOL, labels: KEMIA_K6_I1_LABELS, icon: "⚛️" },
  i2: { pool: KEMIA_K6_I2_POOL, labels: KEMIA_K6_I2_LABELS, icon: "🔗" },
  i3: { pool: KEMIA_K6_I3_POOL, labels: KEMIA_K6_I3_LABELS, icon: "💥" },
  i4: { pool: KEMIA_K6_I4_POOL, labels: KEMIA_K6_I4_LABELS, icon: "🧫" },
  i5: { pool: KEMIA_K6_I5_POOL, labels: KEMIA_K6_I5_LABELS, icon: "💧" },
  i6: { pool: KEMIA_K6_I6_POOL, labels: KEMIA_K6_I6_LABELS, icon: "🌍" },
  i7: { pool: KEMIA_K6_I7_POOL, labels: KEMIA_K6_I7_LABELS, icon: "🧪" },
  i8: { pool: KEMIA_K6_I8_POOL, labels: KEMIA_K6_I8_LABELS, icon: "🔥" },
  i9: { pool: KEMIA_K6_I9_POOL, labels: KEMIA_K6_I9_LABELS, icon: "🔬" },
} as const;

export default function K6Explorer({ island, grade, onDone, color = "#3B82F6", lang = "de" }: {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}) {
  const cfg = POOL_CONFIG[island.id as keyof typeof POOL_CONFIG];
  if (!cfg) return null;

  return (
    <DynamicExplorer
      pool={cfg.pool}
      labels={cfg.labels}
      title="explorer_title"
      icon={cfg.icon}
      count={5}
      explorerId={`kemia_k6_${island.id}`}
      subject="chemie"
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
