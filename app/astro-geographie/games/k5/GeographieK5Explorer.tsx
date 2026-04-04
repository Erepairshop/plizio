"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { GEO_K5_LABELS, GEO_K5_POOL } from "@/lib/explorerPools/geographieK5";

interface Props {
  island?: any;
  grade?: number;
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK5Explorer({ color = "#06B6D4", lang = "de", onDone, onClose }: Props) {
  return (
    <DynamicExplorer
      pool={GEO_K5_POOL}
      labels={GEO_K5_LABELS}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId="geographie_k5_core"
      subject="sachkunde"
      color={color}
      lang={lang}
      grade={5}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
