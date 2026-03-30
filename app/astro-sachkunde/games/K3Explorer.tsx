"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astroSachkunde1";
import {
  WALD_K3_POOL,    WALD_K3_LABELS,
  FEUER_K3_POOL,   FEUER_K3_LABELS,
  GETREIDE_K3_POOL, GETREIDE_K3_LABELS,
  WIESE_K3_POOL,   WIESE_K3_LABELS,
  KOERPER_K3_POOL, KOERPER_K3_LABELS,
  MEDIEN_K3_POOL,  MEDIEN_K3_LABELS,
  KARTEN_K3_POOL,  KARTEN_K3_LABELS,
  STROM_K3_POOL,   STROM_K3_LABELS,
  FINALE_K3_POOL,  FINALE_K3_LABELS,
} from "@/lib/explorerPools/sachkundeK3";

const ISLAND_CONFIG: Record<string, { pool: any[]; labels: any; icon: string }> = {
  i1: { pool: WALD_K3_POOL,     labels: WALD_K3_LABELS,     icon: "🌲" },
  i2: { pool: FEUER_K3_POOL,    labels: FEUER_K3_LABELS,    icon: "🔥" },
  i3: { pool: GETREIDE_K3_POOL, labels: GETREIDE_K3_LABELS, icon: "🌾" },
  i4: { pool: WIESE_K3_POOL,    labels: WIESE_K3_LABELS,    icon: "🌻" },
  i5: { pool: KOERPER_K3_POOL,  labels: KOERPER_K3_LABELS,  icon: "🫀" },
  i6: { pool: MEDIEN_K3_POOL,   labels: MEDIEN_K3_LABELS,   icon: "📱" },
  i7: { pool: KARTEN_K3_POOL,   labels: KARTEN_K3_LABELS,   icon: "🗺️" },
  i8: { pool: STROM_K3_POOL,    labels: STROM_K3_LABELS,    icon: "⚡" },
  i9: { pool: FINALE_K3_POOL,   labels: FINALE_K3_LABELS,   icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function K3Explorer({ island, grade, onDone, color = "#4ECDC4", lang = "de" }: Props) {
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
      explorerId={`sachkunde_k3_${island.id}`}
      subject="sachkunde"
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
