"use client";
// K2Explorer.tsx — routes island.id → DynamicExplorer with the correct pool/labels
// To add a new island: import its POOL + LABELS from deutschK2.ts, add entry to ISLAND_CONFIG.

import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  NOMEN_POOL,    NOMEN_LABELS,
  VERB_POOL,     VERB_LABELS,
  ADJEKTIV_POOL, ADJEKTIV_LABELS,
  SATZART_POOL,  SATZART_LABELS,
  GROSS_POOL,    GROSS_LABELS,
  RECHT1_POOL,   RECHT1_LABELS,
  RECHT2_POOL,   RECHT2_LABELS,
  WORTFELD_POOL, WORTFELD_LABELS,
  EXAM2_POOL,    EXAM2_LABELS,
} from "@/lib/explorerPools/deutschK2";

const DeutschExplore = dynamic(
  () => import("@/app/astrodeutsch/games/DeutschExplore"),
  { ssr: false }
);

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
  mix?:   { easy: number; medium: number; hard: number };
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: NOMEN_POOL,    labels: NOMEN_LABELS,    title: "explorer_title", icon: "🏷️" },
  i2: { pool: VERB_POOL,     labels: VERB_LABELS,     title: "explorer_title", icon: "🏃" },
  i3: { pool: ADJEKTIV_POOL, labels: ADJEKTIV_LABELS, title: "explorer_title", icon: "🎨" },
  i4: { pool: SATZART_POOL,  labels: SATZART_LABELS,  title: "explorer_title", icon: "❓" },
  i5: { pool: GROSS_POOL,    labels: GROSS_LABELS,    title: "explorer_title", icon: "🅰️" },
  i6: { pool: RECHT1_POOL,   labels: RECHT1_LABELS,   title: "explorer_title", icon: "✍️" },
  i7: { pool: RECHT2_POOL,   labels: RECHT2_LABELS,   title: "explorer_title", icon: "🔡" },
  i8: { pool: WORTFELD_POOL, labels: WORTFELD_LABELS, title: "explorer_title", icon: "🌍" },
  i9: { pool: EXAM2_POOL,    labels: EXAM2_LABELS,    title: "explorer_title", icon: "🏆" },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K2Explorer({ island, grade, onDone, color = "#0096C7", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];

  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool}
        labels={cfg.labels}
        title={cfg.title}
        icon={cfg.icon}
        count={5}
        mix={cfg.mix}
        explorerId={`deutsch_k2_${island.id}`}
        color={color}
        lang={lang}
        grade={2}
        onDone={onDone}
      />
    );
  }

  // Fallback (shouldn't happen for K2 — all islands covered)
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
