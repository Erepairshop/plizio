"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  PASSIV6_POOL,    PASSIV6_LABELS,
  KONJ2_POOL,      KONJ2_LABELS,
  INFINITIV6_POOL, INFINITIV6_LABELS,
  SYN_ANT_POOL,    SYN_ANT_LABELS,
  FREMD5_POOL,     FREMD5_LABELS,
  SATZ6_POOL,      SATZ6_LABELS,
  WORT6_POOL,      WORT6_LABELS,
  ZEICHEN6_POOL,   ZEICHEN6_LABELS,
  EXAM6_POOL,      EXAM6_LABELS,
} from "@/lib/explorerPools/deutschK6";

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
  i1: { pool: PASSIV6_POOL,    labels: PASSIV6_LABELS,    title: "explorer_title", icon: "🔄" },
  i2: { pool: KONJ2_POOL,      labels: KONJ2_LABELS,      title: "explorer_title", icon: "🌀" },
  i3: { pool: INFINITIV6_POOL, labels: INFINITIV6_LABELS, title: "explorer_title", icon: "∞" },
  i4: { pool: SYN_ANT_POOL,    labels: SYN_ANT_LABELS,    title: "explorer_title", icon: "🔀" },
  i5: { pool: FREMD5_POOL,     labels: FREMD5_LABELS,     title: "explorer_title", icon: "🌐" },
  i6: { pool: SATZ6_POOL,      labels: SATZ6_LABELS,      title: "explorer_title", icon: "🔗" },
  i7: { pool: WORT6_POOL,      labels: WORT6_LABELS,      title: "explorer_title", icon: "🧩" },
  i8: { pool: ZEICHEN6_POOL,   labels: ZEICHEN6_LABELS,   title: "explorer_title", icon: "📌" },
  i9: { pool: EXAM6_POOL,      labels: EXAM6_LABELS,      title: "explorer_title", icon: "🌟" },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K6Explorer({ island, grade, onDone, color = "#FF9500", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5} mix={cfg.mix}
        explorerId={`deutsch_k6_${island.id}`}
        subject="deutsch"
        color={color} lang={lang} grade={6}
        onDone={onDone}
      />
    );
  }
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
