"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  ADJEKTIV5_POOL,   ADJEKTIV5_LABELS,
  PRONOMEN_POOL,    PRONOMEN_LABELS,
  PRAEP_POOL,       PRAEP_LABELS,
  SATZGLIED5_POOL,  SATZGLIED5_LABELS,
  ZEICHEN5_POOL,    ZEICHEN5_LABELS,
  PARTIZIP_POOL,    PARTIZIP_LABELS,
  PASSIV_POOL,      PASSIV_LABELS,
  WORTSCHATZ5_POOL, WORTSCHATZ5_LABELS,
  EXAM5_POOL,       EXAM5_LABELS,
} from "@/lib/explorerPools/deutschK5";

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
  i1: { pool: ADJEKTIV5_POOL,   labels: ADJEKTIV5_LABELS,   title: "explorer_title", icon: "📊" },
  i2: { pool: PRONOMEN_POOL,    labels: PRONOMEN_LABELS,    title: "explorer_title", icon: "👤" },
  i3: { pool: PRAEP_POOL,       labels: PRAEP_LABELS,       title: "explorer_title", icon: "🔗" },
  i4: { pool: SATZGLIED5_POOL,  labels: SATZGLIED5_LABELS,  title: "explorer_title", icon: "🔬" },
  i5: { pool: ZEICHEN5_POOL,    labels: ZEICHEN5_LABELS,    title: "explorer_title", icon: "📌" },
  i6: { pool: PARTIZIP_POOL,    labels: PARTIZIP_LABELS,    title: "explorer_title", icon: "📜" },
  i7: { pool: PASSIV_POOL,      labels: PASSIV_LABELS,      title: "explorer_title", icon: "🔄" },
  i8: { pool: WORTSCHATZ5_POOL, labels: WORTSCHATZ5_LABELS, title: "explorer_title", icon: "📚" },
  i9: { pool: EXAM5_POOL,       labels: EXAM5_LABELS,       title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K5Explorer({ island, grade, onDone, color = "#6366F1", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5} mix={cfg.mix}
        explorerId={`deutsch_k5_${island.id}`}
        color={color} lang={lang} grade={5}
        onDone={onDone}
      />
    );
  }
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
