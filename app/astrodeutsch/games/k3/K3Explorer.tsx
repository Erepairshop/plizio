"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import dynamic from "next/dynamic";
import type { IslandDef } from "@/lib/astromath";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import {
  PLURAL_POOL,    PLURAL_LABELS,
  VERB3_POOL,     VERB3_LABELS,
  STEIGER_POOL,   STEIGER_LABELS,
  SATZGLIED_POOL, SATZGLIED_LABELS,
  ZEITFORM_POOL,  ZEITFORM_LABELS,
  VERGANGEN_POOL, VERGANGEN_LABELS,
  SCHREIB_POOL,   SCHREIB_LABELS,
  ZEICHEN_POOL,   ZEICHEN_LABELS,
  EXAM3_POOL,     EXAM3_LABELS,
} from "@/lib/explorerPools/deutschK3";

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
  i1: { pool: PLURAL_POOL,    labels: PLURAL_LABELS,    title: "explorer_title", icon: "📚", mix: { easy: 2, medium: 2, hard: 1 } },
  i2: { pool: VERB3_POOL,     labels: VERB3_LABELS,     title: "explorer_title", icon: "⚡", mix: { easy: 2, medium: 2, hard: 1 } },
  i3: { pool: STEIGER_POOL,   labels: STEIGER_LABELS,   title: "explorer_title", icon: "🎭", mix: { easy: 2, medium: 2, hard: 1 } },
  i4: { pool: SATZGLIED_POOL, labels: SATZGLIED_LABELS, title: "explorer_title", icon: "🔍", mix: { easy: 2, medium: 2, hard: 1 } },
  i5: { pool: ZEITFORM_POOL,  labels: ZEITFORM_LABELS,  title: "explorer_title", icon: "⏳", mix: { easy: 2, medium: 2, hard: 1 } },
  i6: { pool: VERGANGEN_POOL, labels: VERGANGEN_LABELS, title: "explorer_title", icon: "💬", mix: { easy: 2, medium: 2, hard: 1 } },
  i7: { pool: SCHREIB_POOL,   labels: SCHREIB_LABELS,   title: "explorer_title", icon: "✍️", mix: { easy: 2, medium: 2, hard: 1 } },
  i8: { pool: ZEICHEN_POOL,   labels: ZEICHEN_LABELS,   title: "explorer_title", icon: "📌", mix: { easy: 2, medium: 2, hard: 1 } },
  i9: { pool: EXAM3_POOL,     labels: EXAM3_LABELS,     title: "explorer_title", icon: "🌟", mix: { easy: 2, medium: 2, hard: 1 } },
};

interface Props {
  island: IslandDef;
  grade:  number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?:  string;
}

export default function K3Explorer({ island, grade, onDone, color = "#10B981", lang = "de" }: Props) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool} labels={cfg.labels} title={cfg.title} icon={cfg.icon}
        count={5} mix={cfg.mix}
        explorerId={`deutsch_k3_${island.id}`}
        color={color} lang={lang} grade={3}
        onDone={onDone}
      />
    );
  }
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;
}
