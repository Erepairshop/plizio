"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import { INFO_K5_I1_LABELS as AI_K5_I1_LABELS, INFO_K5_I1_POOL as AI_K5_I1_POOL } from "@/lib/explorerPools/aiK5_i1";
import { INFO_K5_I2_LABELS as AI_K5_I2_LABELS, INFO_K5_I2_POOL as AI_K5_I2_POOL } from "@/lib/explorerPools/aiK5_i2";
import { INFO_K5_I3_LABELS as AI_K5_I3_LABELS, INFO_K5_I3_POOL as AI_K5_I3_POOL } from "@/lib/explorerPools/aiK5_i3";
import { INFO_K5_I4_LABELS as AI_K5_I4_LABELS, INFO_K5_I4_POOL as AI_K5_I4_POOL } from "@/lib/explorerPools/aiK5_i4";
import { INFO_K5_I5_LABELS as AI_K5_I5_LABELS, INFO_K5_I5_POOL as AI_K5_I5_POOL } from "@/lib/explorerPools/aiK5_i5";
import { INFO_K5_I6_LABELS as AI_K5_I6_LABELS, INFO_K5_I6_POOL as AI_K5_I6_POOL } from "@/lib/explorerPools/aiK5_i6";
import { INFO_K5_I7_LABELS as AI_K5_I7_LABELS, INFO_K5_I7_POOL as AI_K5_I7_POOL } from "@/lib/explorerPools/aiK5_i7";
import { INFO_K5_I8_LABELS as AI_K5_I8_LABELS, INFO_K5_I8_POOL as AI_K5_I8_POOL } from "@/lib/explorerPools/aiK5_i8";
import { INFO_K5_I9_LABELS as AI_K5_I9_LABELS, INFO_K5_I9_POOL as AI_K5_I9_POOL } from "@/lib/explorerPools/aiK5_i9";

const POOL_CONFIG = {
  i1: { pool: AI_K5_I1_POOL, labels: AI_K5_I1_LABELS, icon: "🤖" },
  i2: { pool: AI_K5_I2_POOL, labels: AI_K5_I2_LABELS, icon: "🧠" },
  i3: { pool: AI_K5_I3_POOL, labels: AI_K5_I3_LABELS, icon: "💬" },
  i4: { pool: AI_K5_I4_POOL, labels: AI_K5_I4_LABELS, icon: "⚖️" },
  i5: { pool: AI_K5_I5_POOL, labels: AI_K5_I5_LABELS, icon: "🛠️" },
  i6: { pool: AI_K5_I6_POOL, labels: AI_K5_I6_LABELS, icon: "🚀" },
  i7: { pool: AI_K5_I7_POOL, labels: AI_K5_I7_LABELS, icon: "📊" },
  i8: { pool: AI_K5_I8_POOL, labels: AI_K5_I8_LABELS, icon: "🔒" },
  i9: { pool: AI_K5_I9_POOL, labels: AI_K5_I9_LABELS, icon: "💡" },
} as const;

export default function K5Explorer({ island, grade, onDone, color = "#3B82F6", lang = "hu" }: {
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
      explorerId={`ai_k5_${island.id}`}
      subject="informatika"
      color={color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
