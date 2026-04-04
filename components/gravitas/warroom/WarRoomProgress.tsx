"use client";

import type { WarRoomProductionSlot, WarRoomUnitDef } from "@/lib/gravitas/sim/warroom/types";

type Lang = "en" | "hu" | "de" | "ro";

const CANCEL_LABEL: Record<Lang, string> = {
  en: "Cancel",
  hu: "Mégse",
  de: "Abbrechen",
  ro: "Anulare",
};

function loc(lang: Lang, v: { en: string; hu: string; de: string; ro: string }) {
  return v[lang] ?? v.en;
}

export default function WarRoomProgress({
  slot,
  unitDef,
  onCancel,
  lang,
}: {
  slot: WarRoomProductionSlot;
  unitDef: WarRoomUnitDef;
  onCancel: () => void;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const progress = 1 - slot.remaining / slot.duration;
  const remainSec = slot.remaining * 5;
  const timeStr = remainSec >= 60 ? `${Math.floor(remainSec / 60)}m ${remainSec % 60}s` : `${remainSec}s`;

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl border border-amber-500/20 bg-amber-500/5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{unitDef.icon}</span>
          <span className="text-xs font-bold text-white/80">{loc(l, unitDef.name)}</span>
        </div>
        <span className="text-[11px] font-black text-amber-400 tabular-nums">{timeStr}</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      {/* Cancel */}
      <button
        type="button"
        onClick={onCancel}
        className="self-end text-[10px] sm:text-[11px] font-bold text-red-400/70 hover:text-red-400 transition-colors"
      >
        {CANCEL_LABEL[l]}
      </button>
    </div>
  );
}
