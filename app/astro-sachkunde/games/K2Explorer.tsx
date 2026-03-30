"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astroSachkunde1";
import {
  HAUSTIERE_POOL,  HAUSTIERE_LABELS,
  KALENDER_POOL,   KALENDER_LABELS,
  MAGNETISMUS_POOL, MAGNETISMUS_LABELS,
  WASSER_POOL,     WASSER_LABELS,
  WALDTIERE_POOL,  WALDTIERE_LABELS,
  ERNAEHRUNG_POOL, ERNAEHRUNG_LABELS,
  VERKEHR2_POOL,   VERKEHR2_LABELS,
  WERTSTOFFE_POOL, WERTSTOFFE_LABELS,
  FINALE2_POOL,    FINALE2_LABELS,
} from "@/lib/explorerPools/sachkundeK2";

const ISLAND_CONFIG: Record<string, { pool: any[]; labels: any; icon: string }> = {
  i1: { pool: HAUSTIERE_POOL,   labels: HAUSTIERE_LABELS,   icon: "🐾" },
  i2: { pool: KALENDER_POOL,    labels: KALENDER_LABELS,    icon: "📅" },
  i3: { pool: MAGNETISMUS_POOL, labels: MAGNETISMUS_LABELS, icon: "🧲" },
  i4: { pool: WASSER_POOL,      labels: WASSER_LABELS,      icon: "💧" },
  i5: { pool: WALDTIERE_POOL,   labels: WALDTIERE_LABELS,   icon: "🦊" },
  i6: { pool: ERNAEHRUNG_POOL,  labels: ERNAEHRUNG_LABELS,  icon: "🥗" },
  i7: { pool: VERKEHR2_POOL,    labels: VERKEHR2_LABELS,    icon: "🚌" },
  i8: { pool: WERTSTOFFE_POOL,  labels: WERTSTOFFE_LABELS,  icon: "♻️" },
  i9: { pool: FINALE2_POOL,     labels: FINALE2_LABELS,     icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function K2Explorer({ island, grade, onDone, color = "#4ECDC4", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (!cfg) return null;
  return (
    <DynamicExplorer
      pool={cfg.pool}
      labels={cfg.labels}
      title="explorer_title"
      icon={cfg.icon}
      count={5}
      mix={{ easy: 2, medium: 2, hard: 1 }}
      explorerId={`sachkunde_k2_${island.id}`}
      subject="sachkunde"
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
