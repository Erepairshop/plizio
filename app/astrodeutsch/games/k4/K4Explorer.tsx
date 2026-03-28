"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  KASUS_POOL,     KASUS_LABELS,
  DATIV_POOL,     DATIV_LABELS,
  ZEITFORM4_POOL, ZEITFORM4_LABELS,
  WORTART_POOL,   WORTART_LABELS,
  SATZGLIED4_POOL,SATZGLIED4_LABELS,
  SATZART4_POOL,  SATZART4_LABELS,
  VERB4_POOL,     VERB4_LABELS,
  RECHT4_POOL,    RECHT4_LABELS,
  EXAM4_POOL,     EXAM4_LABELS,
} from "@/lib/explorerPools/deutschK4";

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
  i1: { pool: KASUS_POOL,      labels: KASUS_LABELS,      title: "explorer_title", icon: "🎯" },
  i2: { pool: DATIV_POOL,      labels: DATIV_LABELS,      title: "explorer_title", icon: "📋" },
  i3: { pool: ZEITFORM4_POOL,  labels: ZEITFORM4_LABELS,  title: "explorer_title", icon: "⏰" },
  i4: { pool: WORTART_POOL,    labels: WORTART_LABELS,    title: "explorer_title", icon: "🏷️" },
  i5: { pool: SATZGLIED4_POOL, labels: SATZGLIED4_LABELS, title: "explorer_title", icon: "🔬" },
  i6: { pool: SATZART4_POOL,   labels: SATZART4_LABELS,   title: "explorer_title", icon: "📖" },
  i7: { pool: VERB4_POOL,      labels: VERB4_LABELS,      title: "explorer_title", icon: "🚀" },
  i8: { pool: RECHT4_POOL,     labels: RECHT4_LABELS,     title: "explorer_title", icon: "✍️" },
  i9: { pool: EXAM4_POOL,      labels: EXAM4_LABELS,      title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K4Explorer({ island, grade, onDone, color = "#F59E0B", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5} mix={cfg.mix}
        explorerId={`deutsch_k4_${island.id}`}
        color={color} lang={lang} grade={4}
        onDone={onDone}
      />
    );
  }
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
