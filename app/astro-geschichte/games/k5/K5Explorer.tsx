"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  GESCHICHTE_K5_I1_POOL, GESCHICHTE_K5_I1_LABELS,
  GESCHICHTE_K5_I2_POOL, GESCHICHTE_K5_I2_LABELS,
  GESCHICHTE_K5_I3_POOL, GESCHICHTE_K5_I3_LABELS,
  GESCHICHTE_K5_I4_POOL, GESCHICHTE_K5_I4_LABELS,
  GESCHICHTE_K5_I5_POOL, GESCHICHTE_K5_I5_LABELS,
  GESCHICHTE_K5_I6_POOL, GESCHICHTE_K5_I6_LABELS,
  GESCHICHTE_K5_I7_POOL, GESCHICHTE_K5_I7_LABELS,
  GESCHICHTE_K5_I8_POOL, GESCHICHTE_K5_I8_LABELS,
  GESCHICHTE_K5_I9_POOL, GESCHICHTE_K5_I9_LABELS,
} from "@/lib/explorerPools/geschichteK5";

interface IslandConfig {
  pool:   PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title:  string;
  icon:   string;
}

const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: GESCHICHTE_K5_I1_POOL, labels: GESCHICHTE_K5_I1_LABELS, title: "explorer_title", icon: "🏺" },
  i2: { pool: GESCHICHTE_K5_I2_POOL, labels: GESCHICHTE_K5_I2_LABELS, title: "explorer_title", icon: "🏛️" },
  i3: { pool: GESCHICHTE_K5_I3_POOL, labels: GESCHICHTE_K5_I3_LABELS, title: "explorer_title", icon: "⚔️" },
  i4: { pool: GESCHICHTE_K5_I4_POOL, labels: GESCHICHTE_K5_I4_LABELS, title: "explorer_title", icon: "🗡️" },
  i5: { pool: GESCHICHTE_K5_I5_POOL, labels: GESCHICHTE_K5_I5_LABELS, title: "explorer_title", icon: "🏰" },
  i6: { pool: GESCHICHTE_K5_I6_POOL, labels: GESCHICHTE_K5_I6_LABELS, title: "explorer_title", icon: "📜" },
  i7: { pool: GESCHICHTE_K5_I7_POOL, labels: GESCHICHTE_K5_I7_LABELS, title: "explorer_title", icon: "👑" },
  i8: { pool: GESCHICHTE_K5_I8_POOL, labels: GESCHICHTE_K5_I8_LABELS, title: "explorer_title", icon: "🛡️" },
  i9: { pool: GESCHICHTE_K5_I9_POOL, labels: GESCHICHTE_K5_I9_LABELS, title: "explorer_title", icon: "🗺️" },
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
