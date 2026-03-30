"use client";

import type { IslandDef } from "@/lib/astroMagyar";
import PoolExplorerBase, { type MagyarPoolIslandConfig } from "../PoolExplorerBase";
import {
  MAGYAR_O8_I1_LABELS, MAGYAR_O8_I1_POOL,
  MAGYAR_O8_I2_LABELS, MAGYAR_O8_I2_POOL,
  MAGYAR_O8_I3_LABELS, MAGYAR_O8_I3_POOL,
  MAGYAR_O8_I4_LABELS, MAGYAR_O8_I4_POOL,
  MAGYAR_O8_I5_LABELS, MAGYAR_O8_I5_POOL,
  MAGYAR_O8_I6_LABELS, MAGYAR_O8_I6_POOL,
  MAGYAR_O8_I7_LABELS, MAGYAR_O8_I7_POOL,
  MAGYAR_O8_I8_LABELS, MAGYAR_O8_I8_POOL,
  MAGYAR_O8_I9_LABELS, MAGYAR_O8_I9_POOL,
} from "@/lib/explorerPools/magyarO8";

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const O8_ISLAND_CONFIG: Record<string, MagyarPoolIslandConfig> = {
  i1: { pool: MAGYAR_O8_I1_POOL, labels: MAGYAR_O8_I1_LABELS, title: "explorer_title", icon: "📜" },
  i2: { pool: MAGYAR_O8_I2_POOL, labels: MAGYAR_O8_I2_LABELS, title: "explorer_title", icon: "🎨" },
  i3: { pool: MAGYAR_O8_I3_POOL, labels: MAGYAR_O8_I3_LABELS, title: "explorer_title", icon: "🔍" },
  i4: { pool: MAGYAR_O8_I4_POOL, labels: MAGYAR_O8_I4_LABELS, title: "explorer_title", icon: "✍️" },
  i5: { pool: MAGYAR_O8_I5_POOL, labels: MAGYAR_O8_I5_LABELS, title: "explorer_title", icon: "📖" },
  i6: { pool: MAGYAR_O8_I6_POOL, labels: MAGYAR_O8_I6_LABELS, title: "explorer_title", icon: "🔬" },
  i7: { pool: MAGYAR_O8_I7_POOL, labels: MAGYAR_O8_I7_LABELS, title: "explorer_title", icon: "💬" },
  i8: { pool: MAGYAR_O8_I8_POOL, labels: MAGYAR_O8_I8_LABELS, title: "explorer_title", icon: "🛠️" },
  i9: { pool: MAGYAR_O8_I9_POOL, labels: MAGYAR_O8_I9_LABELS, title: "explorer_title", icon: "🌟" },
};

export default function O8Explorer({ island, grade, onDone, lang = "hu" }: Props) {
  return (
    <PoolExplorerBase
      island={island}
      grade={grade}
      onDone={onDone}
      lang={lang}
      config={O8_ISLAND_CONFIG}
      explorerKeyPrefix="o8"
    />
  );
}
