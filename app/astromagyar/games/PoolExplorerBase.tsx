"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import LangExplore from "./LangExplore";
import type { PoolTopicDef } from "@/lib/explorerPools/types";

export interface MagyarPoolIslandConfig {
  pool: PoolTopicDef[];
  labels: Record<string, Record<string, string>>;
  title: string;
  icon: string;
}

interface MinimalIslandDef {
  id: string;
  color: string;
}

interface Props<TIsland extends MinimalIslandDef> {
  island: TIsland;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
  config: Record<string, MagyarPoolIslandConfig>;
  explorerKeyPrefix: string;
}

function withHungarianFallback(labels: Record<string, Record<string, string>>): Record<string, Record<string, string>> {
  const hu = labels.hu ?? labels.en ?? labels.de ?? labels.ro ?? {};
  return {
    hu,
    en: labels.en ?? hu,
    de: labels.de ?? hu,
    ro: labels.ro ?? hu,
  };
}

export default function PoolExplorerBase<TIsland extends MinimalIslandDef>({
  island,
  grade,
  onDone,
  lang = "hu",
  config,
  explorerKeyPrefix,
}: Props<TIsland>) {
  const cfg = config[island.id];
  if (!cfg) {
    return <LangExplore island={island} grade={grade} onDone={onDone} />;
  }

  return (
    <DynamicExplorer
      key={`${explorerKeyPrefix}:${island.id}:${lang}`}
      pool={cfg.pool}
      labels={withHungarianFallback(cfg.labels)}
      title={cfg.title}
      icon={cfg.icon}
      count={5}
      explorerId={`astromagyar_${explorerKeyPrefix}_${island.id}`}
      subject="magyar"
      color={island.color}
      lang={lang}
      grade={grade}
      onDone={onDone}
    />
  );
}
