"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  KONJ1_POOL,        KONJ1_LABELS,
  PASSIV7_POOL,      PASSIV7_LABELS,
  PASSIV_MODAL_POOL, PASSIV_MODAL_LABELS,
  STIL_POOL,         STIL_LABELS,
  CAUSAL_COND_POOL,  CAUSAL_COND_LABELS,
  KONZ_FINAL_POOL,   KONZ_FINAL_LABELS,
  TEMPORAL7_POOL,    TEMPORAL7_LABELS,
  INFINITIV7_POOL,   INFINITIV7_LABELS,
  EXAM7_POOL,        EXAM7_LABELS,
} from "@/lib/explorerPools/deutschK7";

const DeutschExplore = dynamic(
  () => import("@/app/astrodeutsch/games/DeutschExplore"),
  { ssr: false }
);

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: KONJ1_POOL,        labels: KONJ1_LABELS,        title: "explorer_title", icon: "💭" },
  i2: { pool: PASSIV7_POOL,      labels: PASSIV7_LABELS,      title: "explorer_title", icon: "🔧" },
  i3: { pool: PASSIV_MODAL_POOL, labels: PASSIV_MODAL_LABELS, title: "explorer_title", icon: "⚙️" },
  i4: { pool: STIL_POOL,         labels: STIL_LABELS,         title: "explorer_title", icon: "🎭" },
  i5: { pool: CAUSAL_COND_POOL,  labels: CAUSAL_COND_LABELS,  title: "explorer_title", icon: "🔀" },
  i6: { pool: KONZ_FINAL_POOL,   labels: KONZ_FINAL_LABELS,   title: "explorer_title", icon: "🎯" },
  i7: { pool: TEMPORAL7_POOL,    labels: TEMPORAL7_LABELS,    title: "explorer_title", icon: "⏱️" },
  i8: { pool: INFINITIV7_POOL,   labels: INFINITIV7_LABELS,   title: "explorer_title", icon: "🌿" },
  i9: { pool: EXAM7_POOL,        labels: EXAM7_LABELS,        title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K7Explorer({ island, grade, onDone, color = "#B44DFF", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5}
        explorerId={`deutsch_k7_${island.id}`}
        subject="deutsch"
        color={color} lang={lang} grade={7}
        onDone={onDone}
      />
    );
  }
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
