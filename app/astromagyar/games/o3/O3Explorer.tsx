"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import LangExplore from "../LangExplore";
import type { IslandDef } from "@/lib/astroMagyar3";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  MAGYAR_O3_I1_LABELS, MAGYAR_O3_I1_POOL,
  MAGYAR_O3_I2_LABELS, MAGYAR_O3_I2_POOL,
  MAGYAR_O3_I3_LABELS, MAGYAR_O3_I3_POOL,
  MAGYAR_O3_I4_LABELS, MAGYAR_O3_I4_POOL,
  MAGYAR_O3_I5_LABELS, MAGYAR_O3_I5_POOL,
  MAGYAR_O3_I6_LABELS, MAGYAR_O3_I6_POOL,
  MAGYAR_O3_I7_LABELS, MAGYAR_O3_I7_POOL,
  MAGYAR_O3_I8_LABELS, MAGYAR_O3_I8_POOL,
  MAGYAR_O3_I9_LABELS, MAGYAR_O3_I9_POOL,
} from "@/lib/explorerPools/magyarO3";

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

interface IslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

const O3_ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: MAGYAR_O3_I1_POOL, labels: MAGYAR_O3_I1_LABELS, title: "explorer_title", icon: "📖" },
  i2: { pool: MAGYAR_O3_I2_POOL, labels: MAGYAR_O3_I2_LABELS, title: "explorer_title", icon: "🔗" },
  i3: { pool: MAGYAR_O3_I3_POOL, labels: MAGYAR_O3_I3_LABELS, title: "explorer_title", icon: "📝" },
  i4: { pool: MAGYAR_O3_I4_POOL, labels: MAGYAR_O3_I4_LABELS, title: "explorer_title", icon: "💬" },
  i5: { pool: MAGYAR_O3_I5_POOL, labels: MAGYAR_O3_I5_LABELS, title: "explorer_title", icon: "🎭" },
  i6: { pool: MAGYAR_O3_I6_POOL, labels: MAGYAR_O3_I6_LABELS, title: "explorer_title", icon: "✏️" },
  i7: { pool: MAGYAR_O3_I7_POOL, labels: MAGYAR_O3_I7_LABELS, title: "explorer_title", icon: "📜" },
  i8: { pool: MAGYAR_O3_I8_POOL, labels: MAGYAR_O3_I8_LABELS, title: "explorer_title", icon: "🔍" },
  i9: { pool: MAGYAR_O3_I9_POOL, labels: MAGYAR_O3_I9_LABELS, title: "explorer_title", icon: "🌟" },
};

function withHungarianFallback(labels: Record<string, Record<string, string>>): Record<string, Record<string, string>> {
  const hu = labels.hu ?? labels.en ?? labels.de ?? labels.ro ?? {};
  return {
    hu,
    en: labels.en ?? hu,
    de: labels.de ?? hu,
    ro: labels.ro ?? hu,
  };
}

export default function O3Explorer({ island, grade, onDone, lang = "hu" }: Props) {
  const cfg = O3_ISLAND_CONFIG[island.id];
  if (!cfg) {
    return <LangExplore island={island} grade={grade} onDone={onDone} />;
  }

  return (
    <DynamicExplorer
      key={`${island.id}:${lang}`}
      pool={cfg.pool}
      labels={withHungarianFallback(cfg.labels)}
      title={cfg.title}
      icon={cfg.icon}
      count={5}
      explorerId={`astromagyar_o3_${island.id}`}
      subject="magyar"
      color={island.color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
