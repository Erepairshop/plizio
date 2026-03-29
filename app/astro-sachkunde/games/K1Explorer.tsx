"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astroSachkunde1";
import {
  SACHKUNDE_K1_KÖRPER_POOL       as KOERPER_POOL,        KÖRPER_LABELS                as KOERPER_LABELS,
  SACHKUNDE_K1_TIERE_GARTEN_POOL as TIERE_POOL,          TIERE_GARTEN_LABELS          as TIERE_LABELS,
  SACHKUNDE_K1_NATUR_POOL        as NATUR_POOL,           SACHKUNDE_K1_NATUR_LABELS    as NATUR_LABELS,
  WETTER_POOL,                                            WETTER_LABELS,
  SACHKUNDE_K1_FAMILIE_POOL      as FAMILIE_POOL,         SACHKUNDE_K1_FAMILIE_LABELS  as FAMILIE_LABELS,
  SACHKUNDE_K1_VERKEHR_POOL      as VERKEHR_POOL,         SACHKUNDE_K1_VERKEHR_LABELS  as VERKEHR_LABELS,
  SACHKUNDE_K1_MATERIAL_POOL     as MATERIAL_POOL,        SACHKUNDE_K1_MATERIAL_LABELS as MATERIAL_LABELS,
  SACHKUNDE_K1_WISSEN_POOL       as NATURE_REVIEW_POOL,   SACHKUNDE_K1_WISSEN_LABELS   as NATURE_REVIEW_LABELS,
  SACHKUNDE_K1_DIPLOM_POOL       as FINALE_POOL,          SACHKUNDE_K1_DIPLOM_LABELS   as FINALE_LABELS,
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
