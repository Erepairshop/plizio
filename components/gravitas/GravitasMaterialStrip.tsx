"use client";

import { useEffect, useMemo, useState } from "react";
import {
  METEOR_MATERIAL_META,
  METEOR_MATERIAL_ORDER,
} from "@/lib/gravitas/world";
import {
  formatCompactGalaxyValue,
  loadSavedGalaxyInventory,
  loadSavedGalaxyLivePreview,
  type GalaxyInventory,
  type GalaxyLivePreview,
  GALAXY_STATE_UPDATED_EVENT,
} from "@/lib/gravitas/world/mission";

type Lang = "en" | "hu" | "de" | "ro";

function localize(lang: Lang, value: { en: string; hu: string; de: string; ro: string }) {
  return value[lang] ?? value.en;
}

export default function GravitasMaterialStrip({ lang }: { lang: Lang }) {
  const [inventory, setInventory] = useState<GalaxyInventory>(() => loadSavedGalaxyInventory());
  const [livePreview, setLivePreview] = useState<GalaxyLivePreview>(() => loadSavedGalaxyLivePreview());

  useEffect(() => {
    const sync = () => {
      setInventory(loadSavedGalaxyInventory());
      setLivePreview(loadSavedGalaxyLivePreview());
    };

    sync();
    window.addEventListener(GALAXY_STATE_UPDATED_EVENT, sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener(GALAXY_STATE_UPDATED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const displayInventory = useMemo(() => {
    const display = { ...inventory };
    if (livePreview) {
      display[livePreview.materialId] = Math.max(0, display[livePreview.materialId] + livePreview.amount);
    }
    return display;
  }, [inventory, livePreview]);

  return (
    <div className="grid grid-cols-3 gap-1 w-full shrink-0 sm:flex sm:flex-nowrap sm:gap-1.5 sm:w-auto sm:overflow-x-auto sm:no-scrollbar">
      {METEOR_MATERIAL_ORDER.map((materialId) => {
        const meta = METEOR_MATERIAL_META[materialId];
        const active = livePreview?.materialId === materialId;
        return (
          <div
            key={materialId}
            className={`group flex items-center gap-1 rounded-lg border px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.06em] text-white/78 transition-all sm:rounded-xl sm:px-2 sm:py-1 sm:text-[10px] sm:gap-1.5 ${
              active ? "border-white/20 bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.08)]" : meta.glowClassName
            }`}
            title={`${localize(lang, meta.label)}: ${formatCompactGalaxyValue(displayInventory[materialId])}`}
          >
            <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/10 bg-black/18 text-[7px] sm:h-4 sm:w-4 sm:text-[8px] ${meta.colorClassName}`}>
              {localize(lang, meta.short)}
            </span>
            <span className={`hidden sm:inline text-[8px] leading-none ${meta.colorClassName}`}>
              {localize(lang, meta.label)}
            </span>
            <span className="text-[10px] leading-none text-white sm:text-[11px]">
              {formatCompactGalaxyValue(displayInventory[materialId])}
            </span>
          </div>
        );
      })}
    </div>
  );
}
