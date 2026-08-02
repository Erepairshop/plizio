"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { useLang } from "@/components/LanguageProvider";
import * as geo from "@/lib/explorerPools/geographieK8";

interface Props {
  island?: any;
  grade?: number;
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK8Explorer({ island, color = "#06B6D4", lang: langProp, onDone, onClose }: Props) {
  const { lang: contextLang } = useLang();
  const lang = langProp ?? (contextLang as "de" | "en" | "hu" | "ro") ?? "de";
  const islandId = /^i[1-9]$/.test(island?.id ?? "") ? island.id : "i1";
  const pool = geo[`GEO_K8_${islandId.toUpperCase()}_POOL` as keyof typeof geo] as typeof geo.GEO_K8_POOL;
  const labels = geo[`GEO_K8_${islandId.toUpperCase()}_LABELS` as keyof typeof geo] as typeof geo.GEO_K8_LABELS;

  return (
    <DynamicExplorer
      pool={pool}
      labels={labels}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId={`geographie_k8_${islandId}`}
      subject="geographie"
      color={color}
      lang={lang}
      grade={8}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
