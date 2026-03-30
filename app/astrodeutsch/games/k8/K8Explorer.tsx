"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  KONJUNKTIV_K8_POOL,  KONJUNKTIV_K8_LABELS,
  PASSIV_K8_POOL,      PASSIV_K8_LABELS,
  NEBEN_K8_POOL,       NEBEN_K8_LABELS,
  STIL_K8_POOL,        STIL_K8_LABELS,
  TEXTSORTEN_K8_POOL,  TEXTSORTEN_K8_LABELS,
  EPOCHEN_K8_POOL,     EPOCHEN_K8_LABELS,
  NOM_SPRACH_K8_POOL,  NOM_SPRACH_K8_LABELS,
  ANALYSE_K8_POOL,     ANALYSE_K8_LABELS,
  EXAM8_POOL,          EXAM8_LABELS,
} from "@/lib/explorerPools/deutschK8";

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
  i1: { pool: KONJUNKTIV_K8_POOL, labels: KONJUNKTIV_K8_LABELS, title: "explorer_title", icon: "💬" },
  i2: { pool: PASSIV_K8_POOL,     labels: PASSIV_K8_LABELS,     title: "explorer_title", icon: "↔️" },
  i3: { pool: NEBEN_K8_POOL,      labels: NEBEN_K8_LABELS,      title: "explorer_title", icon: "🔗" },
  i4: { pool: STIL_K8_POOL,       labels: STIL_K8_LABELS,       title: "explorer_title", icon: "🎭" },
  i5: { pool: TEXTSORTEN_K8_POOL, labels: TEXTSORTEN_K8_LABELS, title: "explorer_title", icon: "📝" },
  i6: { pool: EPOCHEN_K8_POOL,    labels: EPOCHEN_K8_LABELS,    title: "explorer_title", icon: "📚" },
  i7: { pool: NOM_SPRACH_K8_POOL, labels: NOM_SPRACH_K8_LABELS, title: "explorer_title", icon: "📊" },
  i8: { pool: ANALYSE_K8_POOL,    labels: ANALYSE_K8_LABELS,    title: "explorer_title", icon: "🧑‍🎓" },
  i9: { pool: EXAM8_POOL,         labels: EXAM8_LABELS,         title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K8Explorer({ island, grade, onDone, color = "#E879F9", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5}
        explorerId={`deutsch_k8_${island.id}`}
        subject="deutsch"
        color={color} lang={lang} grade={8}
        onDone={onDone}
      />
    );
  }
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
