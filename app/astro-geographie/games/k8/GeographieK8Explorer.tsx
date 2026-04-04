"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { GEO_K8_LABELS, GEO_K8_POOL } from "@/lib/explorerPools/geographieK8";

interface Props {
  island?: any;
  grade?: number;
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK8Explorer({ color = "#06B6D4", lang = "de", onDone, onClose }: Props) {
  return (
    <DynamicExplorer
      pool={GEO_K8_POOL}
      labels={GEO_K8_LABELS}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId="geographie_k8_core"
      subject="sachkunde"
      color={color}
      lang={lang}
      grade={8}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
