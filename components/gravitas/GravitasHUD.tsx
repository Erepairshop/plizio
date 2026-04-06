"use client";

import React from "react";

interface Props {
  power: number;
  materials: number;
  stability: number;
  activation: number;
  entropy: number;
  antimatter?: number;
  antimatterMax?: number;
  labels: {
    power: string;
    materials: string;
    stability: string;
    activation: string;
    entropy: string;
    antimatter?: string;
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

function FuelCell({ value, max, label }: { value: number; max: number; label: string }) {
  const ratio = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
  const critical = ratio < 0.14;
  const low = ratio < 0.33;
  return (
    <div className={`rounded-2xl border px-4 py-3 flex-1 min-w-[140px] ${critical ? "border-rose-500/50 bg-rose-500/10 shadow-[0_0_18px_rgba(244,63,94,0.18)] animate-pulse" : low ? "border-amber-400/30 bg-amber-400/8" : "border-fuchsia-400/20 bg-fuchsia-500/8"}`}>
      <div className="flex items-center justify-between gap-3">
        <div className={`text-[10px] uppercase tracking-[0.28em] font-black ${critical ? "text-rose-300" : low ? "text-amber-200" : "text-fuchsia-200"}`}>{label}</div>
        <div className={`text-[11px] font-black ${critical ? "text-rose-200" : low ? "text-amber-100" : "text-fuchsia-100"}`}>{value}/{max}</div>
      </div>
      <div className="relative mt-2 h-28 overflow-hidden rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(31,10,52,0.9),rgba(5,8,16,0.96))]">
        <div
          className={`absolute inset-x-2 bottom-2 rounded-[16px] border border-white/8 transition-all duration-500 ${critical ? "shadow-[0_0_24px_rgba(244,63,94,0.35)]" : "shadow-[0_0_18px_rgba(217,70,239,0.22)]"}`}
          style={{
            height: `${Math.max(8, ratio * 100)}%`,
            background: "linear-gradient(180deg, rgba(236,72,153,0.34), rgba(245,158,11,0.24))",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_24%,transparent_76%,rgba(255,255,255,0.08))]" />
          <div className="absolute inset-0 animate-[gravitasFuelFlow_4s_linear_infinite] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_4px,transparent_4px,transparent_13px)] opacity-35" />
          {[0.25, 0.5, 0.75].map((mark) => (
            <span key={mark} className="absolute left-2 right-2 h-px bg-white/10" style={{ bottom: `${mark * 100}%` }} />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 px-2 py-2 text-[8px] font-black uppercase tracking-[0.18em] text-white/52">
          <span>Fuel Cell</span>
          <span>•</span>
          <span>{Math.round(ratio * 100)}%</span>
        </div>
      </div>
    </div>
  );
}

export default function GravitasHUD({ power, materials, stability, activation, entropy, antimatter = 0, antimatterMax = 100, labels }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <StatChip label={labels.power} value={power} accent="#60A5FA" urgent={power < 8} />
      <StatChip label={labels.materials} value={materials} accent="#F59E0B" urgent={materials < 5} />
      <StatChip label={labels.stability} value={stability} accent="#34D399" urgent={stability < 25} />
      <StatChip label={labels.activation} value={activation} accent="#F472B6" />
      <StatChip label={labels.entropy} value={entropy} accent="#F43F5E" urgent={entropy > 75} />
      <FuelCell value={antimatter} max={antimatterMax} label={labels.antimatter ?? "Antimatter"} />
      <style jsx>{`
        @keyframes gravitasFuelFlow {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 120px;
          }
        }
      `}</style>
    </div>
  );
}
