"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { GEO_K7_LABELS, GEO_K7_POOL } from "@/lib/explorerPools/geographieK7";

interface Props {
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK7Explorer({ color = "#06B6D4", lang = "de", onDone, onClose }: Props) {
  return (
    <DynamicExplorer
      pool={GEO_K7_POOL}
      labels={GEO_K7_LABELS}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId="geographie_k7_core"
      subject="sachkunde"
      color={color}
      lang={lang}
      grade={7}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
