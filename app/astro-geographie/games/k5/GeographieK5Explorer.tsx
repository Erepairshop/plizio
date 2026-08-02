"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { useLang } from "@/components/LanguageProvider";
import { buildGeographieExplorerId, getGeographieVariantProfile } from "@/lib/astroGeographie";
import * as geo from "@/lib/explorerPools/geographieK5";

interface Props {
  island?: any;
  grade?: number;
  color?: string;
  lang?: string;
  variantId?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK5Explorer({ island, color = "#06B6D4", lang: langProp, variantId, onDone, onClose }: Props) {
  const { lang: contextLang } = useLang();
  const lang = langProp ?? (contextLang as "de" | "en" | "hu" | "ro") ?? "de";
  const variant = getGeographieVariantProfile(lang);
  const islandId = /^i[1-9]$/.test(island?.id ?? "") ? island.id : "i1";
  const pool = geo[`GEO_K5_${islandId.toUpperCase()}_POOL` as keyof typeof geo] as typeof geo.GEO_K5_POOL;
  const labels = geo[`GEO_K5_${islandId.toUpperCase()}_LABELS` as keyof typeof geo] as typeof geo.GEO_K5_LABELS;

  return (
    <DynamicExplorer
      pool={pool}
      labels={labels}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId={buildGeographieExplorerId(`geographie_k5_${islandId}`, variantId ?? variant.id)}
      subject="geographie"
      color={color}
      lang={lang}
      grade={5}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
