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

/** Renders inline material chips — same style as HUDChip so they fit in one row */
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
    <>
      {METEOR_MATERIAL_ORDER.map((materialId) => {
        const meta = METEOR_MATERIAL_META[materialId];
        const active = livePreview?.materialId === materialId;
        return (
          <div
            key={materialId}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg border font-black text-[11px] shrink-0 transition-all sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:rounded-xl sm:text-xs ${
              active ? "border-white/20 bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.08)]" : "border-white/5 bg-white/5"
            } ${meta.colorClassName}`}
            title={`${localize(lang, meta.label)}: ${formatCompactGalaxyValue(displayInventory[materialId])}`}
          >
            <span className="text-[10px] opacity-70 sm:text-[11px]">
              {localize(lang, meta.short)}
            </span>
            <span className="text-white">
              {formatCompactGalaxyValue(displayInventory[materialId])}
            </span>
          </div>
        );
      })}
    </>
  );
}
