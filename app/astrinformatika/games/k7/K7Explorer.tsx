"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import { INFO_K7_I1_LABELS, INFO_K7_I1_POOL } from "@/lib/explorerPools/informatikaK7_i1";
import { INFO_K7_I2_LABELS, INFO_K7_I2_POOL } from "@/lib/explorerPools/informatikaK7_i2";
import { INFO_K7_I3_LABELS, INFO_K7_I3_POOL } from "@/lib/explorerPools/informatikaK7_i3";
import { INFO_K7_I4_LABELS, INFO_K7_I4_POOL } from "@/lib/explorerPools/informatikaK7_i4";
import { INFO_K7_I5_LABELS, INFO_K7_I5_POOL } from "@/lib/explorerPools/informatikaK7_i5";
import { INFO_K7_I6_LABELS, INFO_K7_I6_POOL } from "@/lib/explorerPools/informatikaK7_i6";
import { INFO_K7_I7_LABELS, INFO_K7_I7_POOL } from "@/lib/explorerPools/informatikaK7_i7";
import { INFO_K7_I8_LABELS, INFO_K7_I8_POOL } from "@/lib/explorerPools/informatikaK7_i8";
import { INFO_K7_I9_LABELS, INFO_K7_I9_POOL } from "@/lib/explorerPools/informatikaK7_i9";

const POOL_CONFIG = {
  i1: { pool: INFO_K7_I1_POOL, labels: INFO_K7_I1_LABELS, icon: "💻" },
  i2: { pool: INFO_K7_I2_POOL, labels: INFO_K7_I2_LABELS, icon: "🌐" },
  i3: { pool: INFO_K7_I3_POOL, labels: INFO_K7_I3_LABELS, icon: "📁" },
  i4: { pool: INFO_K7_I4_POOL, labels: INFO_K7_I4_LABELS, icon: "📝" },
  i5: { pool: INFO_K7_I5_POOL, labels: INFO_K7_I5_LABELS, icon: "📊" },
  i6: { pool: INFO_K7_I6_POOL, labels: INFO_K7_I6_LABELS, icon: "🛡️" },
  i7: { pool: INFO_K7_I7_POOL, labels: INFO_K7_I7_LABELS, icon: "⚙️" },
  i8: { pool: INFO_K7_I8_POOL, labels: INFO_K7_I8_LABELS, icon: "🤖" },
  i9: { pool: INFO_K7_I9_POOL, labels: INFO_K7_I9_LABELS, icon: "🎯" },
} as const;

export default function K7Explorer({ island, grade, onDone, color = "#F59E0B", lang = "hu" }: {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}) {
  const cfg = POOL_CONFIG[island.id as keyof typeof POOL_CONFIG];
  if (!cfg) return null;
  const langCode = (["de", "en", "hu", "ro"].includes(lang) ? lang : "hu") as "de" | "en" | "hu" | "ro";
  const title = island.name[langCode] ?? island.name.en;

  return (
    <DynamicExplorer
      pool={cfg.pool}
      labels={cfg.labels}
      title={title}
      icon={cfg.icon}
      count={5}
      explorerId={`informatika_k7_${island.id}`}
      subject="informatika"
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
