"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astroSachkunde1";
import {
  VERKEHR_K4_POOL,   VERKEHR_K4_LABELS,
  WELTRAUM_K4_POOL,  WELTRAUM_K4_LABELS,
  DEUTSCHLAND_K4_POOL, DEUTSCHLAND_K4_LABELS,
  POLITIK_K4_POOL,   POLITIK_K4_LABELS,
  STROM_ADV_K4_POOL, STROM_ADV_K4_LABELS,
  PUBERTAET_K4_POOL, PUBERTAET_K4_LABELS,
  EUROPA_K4_POOL,    EUROPA_K4_LABELS,
  NATUR_PRO_K4_POOL, NATUR_PRO_K4_LABELS,
  FINALE_K4_POOL,    FINALE_K4_LABELS,
} from "@/lib/explorerPools/sachkundeK4";

const ISLAND_CONFIG: Record<string, { pool: any[]; labels: any; icon: string }> = {
  i1: { pool: VERKEHR_K4_POOL,    labels: VERKEHR_K4_LABELS,    icon: "🚗" },
  i2: { pool: WELTRAUM_K4_POOL,   labels: WELTRAUM_K4_LABELS,   icon: "🚀" },
  i3: { pool: DEUTSCHLAND_K4_POOL, labels: DEUTSCHLAND_K4_LABELS, icon: "🇩🇪" },
  i4: { pool: POLITIK_K4_POOL,    labels: POLITIK_K4_LABELS,    icon: "🏛️" },
  i5: { pool: STROM_ADV_K4_POOL,  labels: STROM_ADV_K4_LABELS,  icon: "⚡" },
  i6: { pool: PUBERTAET_K4_POOL,  labels: PUBERTAET_K4_LABELS,  icon: "🌱" },
  i7: { pool: EUROPA_K4_POOL,     labels: EUROPA_K4_LABELS,     icon: "🌍" },
  i8: { pool: NATUR_PRO_K4_POOL,  labels: NATUR_PRO_K4_LABELS,  icon: "🌿" },
  i9: { pool: FINALE_K4_POOL,     labels: FINALE_K4_LABELS,     icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function K4Explorer({ island, grade, onDone, color = "#4ECDC4", lang = "de" }: Props) {
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
      explorerId={`sachkunde_k4_${island.id}`}
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
