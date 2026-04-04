"use client";

import type { WarRoomUnitDef } from "@/lib/gravitas/sim/warroom/types";

type Lang = "en" | "hu" | "de" | "ro";

function loc(lang: Lang, v: { en: string; hu: string; de: string; ro: string }) {
  return v[lang] ?? v.en;
}

export default function WarRoomUnitCard({
  unit,
  canAfford,
  isTraining,
  onTrain,
  lang,
}: {
  unit: WarRoomUnitDef;
  canAfford: boolean;
  isTraining: boolean;
  onTrain: () => void;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const disabled = !canAfford || isTraining;
  const tickSeconds = unit.productionTicks * 5;
  const timeLabel = tickSeconds >= 60 ? `${Math.floor(tickSeconds / 60)}m ${tickSeconds % 60}s` : `${tickSeconds}s`;

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

      {/* Cost chips */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        <span className="text-[10px] sm:text-[11px] font-black text-amber-400/80">
          {unit.cost.materials} ⛏️
        </span>
        {unit.cost.power && (
          <span className="text-[10px] sm:text-[11px] font-black text-cyan-400/80">
            {unit.cost.power} ⚡
          </span>
        )}
      </div>

      {/* Time */}
      <span className="text-[9px] sm:text-[10px] font-medium text-white/40">
        ⏱ {timeLabel}
      </span>
    </button>
  );
}
