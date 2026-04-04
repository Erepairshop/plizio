"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";

function formatCompactStarholdValue(value: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  if (abs < 1000) return `${value}`;

  const units = [
    { value: 1_000_000_000_000, suffix: "t" },
    { value: 1_000_000_000, suffix: "b" },
    { value: 1_000_000, suffix: "m" },
    { value: 1_000, suffix: "k" },
  ];

  for (const unit of units) {
    if (abs < unit.value) continue;
    const scaled = abs / unit.value;
    const decimals = scaled >= 100 ? 0 : scaled >= 10 ? 1 : 2;
    const rounded = Number(scaled.toFixed(decimals));
    if (rounded >= 1000) continue;
    const text = rounded
      .toFixed(decimals)
      .replace(/\.0+$/, "")
      .replace(/(\.\d*[1-9])0+$/, "$1");
    return `${sign}${text}${unit.suffix}`;
  }

  return `${value}`;
}

export function StationHealthRing({ state }: { state: StarholdState }) {
  const modules = [
    { id: "reactor", integrity: state.modules.reactor.integrity },
    { id: "logistics", integrity: state.modules.logistics.integrity },
    { id: "sensor", integrity: state.modules.sensor.integrity },
    { id: "core", integrity: state.modules.core.integrity },
  ];

  const getColor = (val: number) => val > 60 ? "#10b981" : val > 30 ? "#f59e0b" : "#ef4444";
  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const size = 24;
  const center = size / 2;
  const isAnyLow = modules.some((m) => m.integrity < 30);

  return (
    <div className={`relative w-6 h-6 group/health ${isAnyLow ? "animate-pulse" : ""}`}>
      <svg width={size} height={size} className="-rotate-90">
        {modules.map((m, i) => {
          const offset = (circumference / 4) * i;
          const strokeVal = (m.integrity / 100) * (circumference / 4);
          return (
            <circle
              key={m.id}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={getColor(m.integrity)}
              strokeWidth="2.5"
              strokeDasharray={`${strokeVal} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          );
        })}
      </svg>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 text-[8px] font-black uppercase whitespace-nowrap opacity-0 group-hover/health:opacity-100 transition-opacity pointer-events-none z-[110] shadow-2xl">
        {modules.map((m) => (
          <div key={m.id} className="flex justify-between gap-4">
            <span className="text-white/40">{m.id}</span>
            <span>{m.integrity}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatItem({ label, value }: { label: string; value: string | number }) {
  const displayValue = typeof value === "number" ? formatCompactStarholdValue(value) : value;
  return (
    <div className="text-left">
      <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{label}</div>
      <div className="text-xl font-black text-white">{displayValue}</div>
    </div>
  );
}

export function HUDChip({ icon, value, color, onClick }: { icon: ReactNode; value: number; color: string; onClick?: () => void }) {
  const prevValueRef = useRef(value);
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      setDiff(value - prevValueRef.current);
      prevValueRef.current = value;
      const t = setTimeout(() => setDiff(null), 1000);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={diff !== null ? { scale: [1, 1.08, 1] } : { scale: 1 }}
      transition={{ duration: 0.35 }}
      className={`relative flex items-center gap-1 px-2 py-1 rounded-lg border font-black text-[11px] shrink-0 transition-all sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:rounded-xl sm:text-xs ${
        diff !== null ? "border-white/15 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "border-white/5 bg-white/5"
      } ${color} ${onClick ? "cursor-pointer hover:bg-white/10" : ""}`}
    >
      {icon}
      <motion.span
        key={value}
        initial={{ y: diff ? (diff > 0 ? 5 : -5) : 0, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-block"
      >
        {formatCompactStarholdValue(value)}
      </motion.span>
      <AnimatePresence>
        {diff !== null && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: diff > 0 ? -20 : 20 }}
            exit={{ opacity: 0 }}
            className={`absolute left-1/2 -translate-x-1/2 text-[10px] font-black ${diff > 0 ? "text-emerald-400" : "text-rose-500"}`}
          >
            {diff > 0 ? `+${diff}` : diff}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export function AvatarBaseChip({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-fuchsia-400/15 bg-fuchsia-400/8 text-fuchsia-100 transition-all hover:bg-fuchsia-400/12"
    >
      {icon}
    </button>
  );
}

export function MaterialResourceGlyph({ active }: { active?: boolean }) {
  return (
    <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
      <span className={`absolute inset-0 rounded-[4px] border border-indigo-200/30 bg-indigo-400/10 ${active ? "animate-pulse" : ""}`} />
      <span className="absolute left-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className="absolute right-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className="absolute left-[2px] bottom-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className="absolute right-[2px] bottom-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className={`absolute inset-[4px] rounded-[2px] bg-indigo-100/20 ${active ? "scale-100 opacity-100" : "scale-75 opacity-60"} transition-all`} />
      <span className={`absolute -right-[2px] -top-[2px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-opacity ${active ? "opacity-100" : "opacity-30"}`} />
    </span>
  );
}

export function Badge({ color, label, lang }: { color: string; label: LocalizedString; lang: string }) {
  return (
    <div className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-tight border border-white/5 ${color}`}>
      {label[lang as keyof LocalizedString] || label.en}
    </div>
  );
}

export function MiniActionButton({
  icon,
  label,
  onClick,
  disabled,
  highlight,
  tone = "default",
}: {
  icon?: ReactNode;
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
  tone?: "default" | "warning" | "danger";
}) {
  const toneClass =
    tone === "danger"
      ? "border-rose-500/60 bg-rose-500/14 text-rose-50"
      : tone === "warning"
        ? "border-amber-400/60 bg-amber-400/14 text-amber-50"
        : highlight
          ? "border-cyan-300/50 bg-cyan-400/14 text-cyan-100"
          : "border-white/10 bg-white/5 text-white/80";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition active:scale-95 ${
        disabled ? "cursor-not-allowed border-white/5 bg-white/5 text-white/20 grayscale" : toneClass
      }`}
    >
      {icon}
    </button>
  );
}

export function PrepDot({ active, color }: { active: boolean; color: string }) {
  return (
    <div className={`w-2.5 h-2.5 rounded-full border border-white/10 transition-colors duration-500 ${active ? color : "bg-white/5"}`} />
  );
}

export function PanelTab({ icon, label, active, onClick, emphasis }: { icon: ReactNode; label: string; active: boolean; onClick: () => void; emphasis?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-2.5 rounded-xl border transition-all ${active ? "border-white/20 bg-white/10 text-white" : emphasis ? "border-pink-500/30 bg-pink-500/10 text-pink-400 animate-pulse" : "border-white/5 bg-black/20 text-white/40"}`}
    >
      {icon}
      <span className="text-[10px] font-black mt-1 uppercase tracking-tighter">{label}</span>
    </button>
  );
}

export function MainAction({
  label,
  shortLabel,
  icon,
  onClick,
  disabled,
  highlight,
  emphasis,
  tone = "default",
  compact,
  expanded,
}: {
  label: string;
  shortLabel?: string;
  icon?: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
  emphasis?: boolean;
  tone?: "default" | "warning" | "danger";
  compact?: boolean;
  expanded?: boolean;
}) {
  const toneClass = tone === "danger"
    ? "border-rose-500/70 bg-rose-500/18 text-rose-50 shadow-[0_0_18px_rgba(244,63,94,0.24)]"
    : tone === "warning"
      ? "border-amber-400/70 bg-amber-400/18 text-amber-50 shadow-[0_0_18px_rgba(251,191,36,0.22)]"
      : "border-cyan-400 bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]";
  const activeClass = highlight || emphasis || tone !== "default" ? toneClass : "border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 text-white";

  if (expanded) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`relative min-h-[64px] rounded-2xl border p-3 text-left transition-all active:scale-[0.98] ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : activeClass}`}
      >
        <div className="flex items-start gap-2.5">
          {icon && (
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/15">
              {icon}
            </div>
          )}
          <div className="min-w-0">
            <div className="text-[13px] font-black uppercase tracking-[0.08em]">{label}</div>
          </div>
        </div>
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-0.5 w-full -rotate-12 bg-white/10" />
          </div>
        )}
        {emphasis && <div className={`absolute right-3 top-3 h-2.5 w-2.5 rounded-full animate-ping ${tone === "danger" ? "bg-rose-400" : tone === "warning" ? "bg-amber-300" : "bg-cyan-400"}`} />}
      </button>
    );
  }

  if (compact) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`relative flex h-12 min-h-[46px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl border px-1.5 text-center transition-all active:scale-95 ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : activeClass}`}
      >
        {icon}
        <span className="line-clamp-2 text-[9px] font-black uppercase leading-tight tracking-[0.08em]">
          {shortLabel ?? label}
        </span>
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-0.5 w-full -rotate-12 bg-white/10" />
          </div>
        )}
        {emphasis && <div className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full animate-ping ${tone === "danger" ? "bg-rose-400" : tone === "warning" ? "bg-amber-300" : "bg-cyan-400"}`} />}
      </button>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative h-12 min-h-[46px] min-w-[108px] rounded-xl border px-2.5 font-black text-[11px] uppercase tracking-tighter transition-all active:scale-90 active:brightness-150 ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : activeClass}`}
    >
      <span className="flex items-center justify-center gap-2">
        {icon}
        <span>{label}</span>
      </span>
      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-white/10 -rotate-12" />
        </div>
      )}
      {emphasis && <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping ${tone === "danger" ? "bg-rose-400" : tone === "warning" ? "bg-amber-300" : "bg-cyan-400"}`} />}
    </button>
  );
}

export function MarkBox({ label, value, color }: { label: string; value: number; color: "rose" | "pink" | "amber" | "indigo" }) {
  const colorMap: Record<string, string> = {
    rose: value > 5 ? "text-rose-400 border-rose-500/30 bg-rose-500/5" : "text-rose-200/60 border-white/10 bg-white/5",
    pink: value > 5 ? "text-pink-400 border-pink-500/30 bg-pink-500/5" : "text-pink-200/60 border-white/10 bg-white/5",
    amber: value > 5 ? "text-amber-400 border-amber-500/30 bg-amber-500/5" : "text-amber-200/60 border-white/10 bg-white/5",
    indigo: value > 5 ? "text-indigo-400 border-indigo-500/30 bg-indigo-500/5" : "text-indigo-200/60 border-white/10 bg-white/5",
  };
  return (
    <div className={`p-4 rounded-2xl border transition-all ${colorMap[color]}`}>
      <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">{label}</div>
      <div className="text-2xl font-black">{value}</div>
    </div>
  );
}

export function MapMiniButton({
  icon,
  active,
  onClick,
  showDot,
}: {
  icon: ReactNode;
  active?: boolean;
  onClick: () => void;
  showDot?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition ${
        active
          ? "border-cyan-300/45 bg-cyan-400/14 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.16)]"
          : "border-white/10 bg-black/28 text-white/70 hover:bg-white/10"
      }`}
    >
      {icon}
      {showDot && <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />}
    </button>
  );
}
