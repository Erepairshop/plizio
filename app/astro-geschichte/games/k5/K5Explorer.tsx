"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  GESCHICHTE_K5_I1_POOL, GESCHICHTE_K5_I1_LABELS,
} from "@/lib/explorerPools/geschichteK5";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: GESCHICHTE_K5_I1_POOL, labels: GESCHICHTE_K5_I1_LABELS, title: "explorer_title", icon: "🏺" },
  // i2-i9: TODO — pool data not yet created in geschichteK5.ts
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K5Explorer({ island, onDone, color = "#F59E0B", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5}
        explorerId={`geschichte_k5_${island.id}`}
        subject="geschichte"
        color={color} lang={lang} grade={5}
        onDone={onDone}
      />
    );
  }
  return null;
}
