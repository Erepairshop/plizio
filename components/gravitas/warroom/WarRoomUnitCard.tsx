"use client";

import type { WarRoomUnitDef } from "@/lib/gravitas/sim/warroom/types";
import { METEOR_MATERIAL_META } from "@/lib/gravitas/world/demo";

type Lang = "en" | "hu" | "de" | "ro";

function loc(lang: Lang, v: { en: string; hu: string; de: string; ro: string }) {
  return v[lang] ?? v.en;
}

export default function WarRoomUnitCard({
  unit,
  canAfford,
  isTraining,
  garrisonCount,
  onTrain,
  lang,
}: {
  unit: WarRoomUnitDef;
  canAfford: boolean;
  isTraining: boolean;
  garrisonCount: number;
  onTrain: () => void;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const atMax = garrisonCount >= unit.maxCount;
  const disabled = !canAfford || isTraining || atMax;
  const tickSeconds = unit.productionTicks * 5;
  const timeLabel = tickSeconds >= 60 ? `${Math.floor(tickSeconds / 60)}m` : `${tickSeconds}s`;

  const costEntries = Object.entries(unit.cost).filter(([, v]) => v && v > 0) as [string, number][];

  return (
    <button
      type="button"
      onClick={onTrain}
      disabled={disabled}
      className={`flex-shrink-0 w-[120px] sm:w-[140px] flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
        disabled
          ? "opacity-40 border-white/5 bg-white/[0.02] cursor-not-allowed"
          : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 active:scale-[0.97]"
      }`}
    >
      {/* Icon */}
      <span className="text-2xl leading-none">{unit.icon}</span>

      {/* Name */}
      <span className="text-[11px] sm:text-xs font-bold text-white/90 text-center leading-tight">
        {loc(l, unit.name)}
      </span>

      {/* Garrison count / max */}
      <span className="text-[9px] font-bold text-white/50">
        {garrisonCount}/{unit.maxCount}
      </span>

      {/* Cost chips — meteor materials */}
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {costEntries.map(([matId, amount]) => {
          const meta = METEOR_MATERIAL_META[matId as keyof typeof METEOR_MATERIAL_META];
          const short = meta ? loc(l, meta.short) : matId;
          const colorClass = meta?.colorClassName ?? "text-white/60";
          return (
            <span key={matId} className={`text-[9px] sm:text-[10px] font-black ${colorClass}`}>
              {amount} {short}
            </span>
          );
        })}
      </div>

      {/* Time */}
      <span className="text-[9px] sm:text-[10px] font-medium text-white/40">
        ⏱ {timeLabel}
      </span>

      {atMax && (
        <span className="text-[8px] font-bold text-amber-400/60 uppercase">MAX</span>
      )}
    </button>
  );
}
