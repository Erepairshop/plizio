"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astroSachkunde1";
import {
  KOERPER_POOL,      KOERPER_LABELS,
  TIERE_POOL,        TIERE_LABELS,
  NATUR_POOL,        NATUR_LABELS,
  WETTER_POOL,       WETTER_LABELS,
  FAMILIE_POOL,      FAMILIE_LABELS,
  VERKEHR_POOL,      VERKEHR_LABELS,
  MATERIAL_POOL,     MATERIAL_LABELS,
  NATURE_REVIEW_POOL, NATURE_REVIEW_LABELS,
  FINALE_POOL,       FINALE_LABELS,
} from "@/lib/explorerPools/sachkundeK1";

const ISLAND_CONFIG: Record<string, { pool: any[]; labels: any; icon: string }> = {
  i1: { pool: KOERPER_POOL,       labels: KOERPER_LABELS,       icon: "🫀" },
  i2: { pool: TIERE_POOL,         labels: TIERE_LABELS,         icon: "🐾" },
  i3: { pool: NATUR_POOL,         labels: NATUR_LABELS,         icon: "🌿" },
  i4: { pool: WETTER_POOL,        labels: WETTER_LABELS,        icon: "🌤️" },
  i5: { pool: FAMILIE_POOL,       labels: FAMILIE_LABELS,       icon: "🏠" },
  i6: { pool: VERKEHR_POOL,       labels: VERKEHR_LABELS,       icon: "🚦" },
  i7: { pool: MATERIAL_POOL,      labels: MATERIAL_LABELS,      icon: "♻️" },
  i8: { pool: NATURE_REVIEW_POOL, labels: NATURE_REVIEW_LABELS, icon: "🌳" },
  i9: { pool: FINALE_POOL,        labels: FINALE_LABELS,        icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function K1Explorer({ island, grade, onDone, color = "#4ECDC4", lang = "de" }: Props) {
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
      explorerId={`sachkunde_k1_${island.id}`}
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
