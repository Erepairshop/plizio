"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { GEO_K6_LABELS, GEO_K6_POOL } from "@/lib/explorerPools/geographieK6";

interface Props {
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK6Explorer({ color = "#06B6D4", lang = "de", onDone, onClose }: Props) {
  return (
    <DynamicExplorer
      pool={GEO_K6_POOL}
      labels={GEO_K6_LABELS}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId="geographie_k6_core"
      subject="geographie"
      color={color}
      lang={lang}
      grade={6}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
