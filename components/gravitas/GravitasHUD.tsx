"use client";

import React from "react";

interface Props {
  power: number;
  materials: number;
  stability: number;
  activation: number;
  entropy: number;
  labels: {
    power: string;
    materials: string;
    stability: string;
    activation: string;
    entropy: string;
  };
}

function StatChip({ label, value, accent, urgent }: { label: string; value: number; accent: string; urgent?: boolean }) {
  return (
    <div className={`rounded-2xl border transition-all duration-500 flex-1 min-w-[100px] px-4 py-3 ${urgent ? "border-rose-500/50 bg-rose-500/10 shadow-[0_0_15px_rgba(244,63,94,0.2)] animate-pulse" : "border-white/10 bg-white/5"}`}>
      <div className={`text-[10px] uppercase tracking-[0.28em] font-black transition-colors ${urgent ? "text-rose-400" : "text-white/45"}`}>{label}</div>
      <div className={`mt-1 text-xl font-black transition-colors ${urgent ? "text-rose-500" : ""}`} style={{ color: urgent ? undefined : accent }}>{value}</div>
    </div>
  );
}

export default function GravitasHUD({ power, materials, stability, activation, entropy, labels }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <StatChip label={labels.power} value={power} accent="#60A5FA" urgent={power < 8} />
      <StatChip label={labels.materials} value={materials} accent="#F59E0B" urgent={materials < 5} />
      <StatChip label={labels.stability} value={stability} accent="#34D399" urgent={stability < 25} />
      <StatChip label={labels.activation} value={activation} accent="#F472B6" />
      <StatChip label={labels.entropy} value={entropy} accent="#F43F5E" urgent={entropy > 75} />
    </div>
  );
}
