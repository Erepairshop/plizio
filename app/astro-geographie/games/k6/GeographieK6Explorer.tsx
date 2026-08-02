"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import { useLang } from "@/components/LanguageProvider";
import * as geo from "@/lib/explorerPools/geographieK6";

const NO_CONTENT: Record<string, string> = {
  de: "Für diese Insel sind noch keine Entdecken-Aufgaben verfügbar.",
  en: "No Explore activities are available for this island yet.",
  hu: "Ehhez a szigethez még nincsenek felfedező feladatok.",
  ro: "Pentru această insulă nu sunt încă disponibile activități de explorare.",
};

interface Props {
  island?: any;
  grade?: number;
  color?: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function GeographieK6Explorer({ island, color = "#06B6D4", lang: langProp, onDone, onClose }: Props) {
  const { lang: contextLang } = useLang();
  const lang = langProp ?? (contextLang as "de" | "en" | "hu" | "ro") ?? "de";
  const islandId = /^i[1-9]$/.test(island?.id ?? "") ? island.id : "i1";
  const pool = geo[`GEO_K6_${islandId.toUpperCase()}_POOL` as keyof typeof geo] as typeof geo.GEO_K6_POOL;
  const labels = geo[`GEO_K6_${islandId.toUpperCase()}_LABELS` as keyof typeof geo] as typeof geo.GEO_K6_LABELS;

  if (islandId === "i3" && pool.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-6 text-center">
        <div className="max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 text-white">
          <div className="mb-4 text-5xl" aria-hidden="true">🗺️</div>
          <p className="text-lg font-bold">{NO_CONTENT[lang] ?? NO_CONTENT.de}</p>
        </div>
      </div>
    );
  }

  return (
    <DynamicExplorer
      pool={pool}
      labels={labels}
      title="explorer_title"
      icon="🗺️"
      count={5}
      explorerId={`geographie_k6_${islandId}`}
      subject="geographie"
      color={color}
      lang={lang}
      grade={6}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
