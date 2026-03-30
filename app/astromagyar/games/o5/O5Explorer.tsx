"use client";

import type { IslandDef } from "@/lib/astroMagyar";
import PoolExplorerBase, { type MagyarPoolIslandConfig } from "../PoolExplorerBase";
import {
  MAGYAR_O5_I1_LABELS, MAGYAR_O5_I1_POOL,
  MAGYAR_O5_I2_LABELS, MAGYAR_O5_I2_POOL,
  MAGYAR_O5_I3_LABELS, MAGYAR_O5_I3_POOL,
  MAGYAR_O5_I4_LABELS, MAGYAR_O5_I4_POOL,
  MAGYAR_O5_I5_LABELS, MAGYAR_O5_I5_POOL,
  MAGYAR_O5_I6_LABELS, MAGYAR_O5_I6_POOL,
  MAGYAR_O5_I7_LABELS, MAGYAR_O5_I7_POOL,
  MAGYAR_O5_I8_LABELS, MAGYAR_O5_I8_POOL,
  MAGYAR_O5_I9_LABELS, MAGYAR_O5_I9_POOL,
} from "@/lib/explorerPools/magyarO5";

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const O5_ISLAND_CONFIG: Record<string, MagyarPoolIslandConfig> = {
  i1: { pool: MAGYAR_O5_I1_POOL, labels: MAGYAR_O5_I1_LABELS, title: "explorer_title", icon: "🔊" },
  i2: { pool: MAGYAR_O5_I2_POOL, labels: MAGYAR_O5_I2_LABELS, title: "explorer_title", icon: "🧩" },
  i3: { pool: MAGYAR_O5_I3_POOL, labels: MAGYAR_O5_I3_LABELS, title: "explorer_title", icon: "🏷️" },
  i4: { pool: MAGYAR_O5_I4_POOL, labels: MAGYAR_O5_I4_LABELS, title: "explorer_title", icon: "📝" },
  i5: { pool: MAGYAR_O5_I5_POOL, labels: MAGYAR_O5_I5_LABELS, title: "explorer_title", icon: "📖" },
  i6: { pool: MAGYAR_O5_I6_POOL, labels: MAGYAR_O5_I6_LABELS, title: "explorer_title", icon: "✏️" },
  i7: { pool: MAGYAR_O5_I7_POOL, labels: MAGYAR_O5_I7_LABELS, title: "explorer_title", icon: "🔁" },
  i8: { pool: MAGYAR_O5_I8_POOL, labels: MAGYAR_O5_I8_LABELS, title: "explorer_title", icon: "🌌" },
  i9: { pool: MAGYAR_O5_I9_POOL, labels: MAGYAR_O5_I9_LABELS, title: "explorer_title", icon: "🌟" },
};

export default function O5Explorer({ island, grade, onDone, lang = "hu" }: Props) {
  return (
    <PoolExplorerBase
      island={island}
      grade={grade}
      onDone={onDone}
      lang={lang}
      config={O5_ISLAND_CONFIG}
      explorerKeyPrefix="o5"
    />
  );
}
