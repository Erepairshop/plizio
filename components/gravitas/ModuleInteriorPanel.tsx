"use client";

import { useState, useEffect } from "react";
import type { StarholdState, StarholdCommand } from "@/lib/gravitas/sim/types";
import type { UpgradableModuleId, MaterialCost } from "@/lib/gravitas/economy";
import { getLevelCost, canUpgradeModule } from "@/lib/gravitas/economy";
import { METEOR_MATERIAL_META } from "@/lib/gravitas/world/demo";
import { loadSavedGalaxyInventory } from "@/lib/gravitas/world/mission";

type Lang = "en" | "hu" | "de" | "ro";

const MODULE_LABELS: Record<UpgradableModuleId, Record<Lang, string>> = {
  reactor: { en: "Reactor", hu: "Reaktor", de: "Reaktor", ro: "Reactor" },
  logistics: { en: "Logistics", hu: "Logisztika", de: "Logistik", ro: "Logistică" },
  core: { en: "Core", hu: "Mag", de: "Kern", ro: "Nucleu" },
  sensor: { en: "Sensor", hu: "Szenzor", de: "Sensor", ro: "Senzor" },
  warroom: { en: "Command", hu: "Hadiszállás", de: "Kommando", ro: "Comandă" },
  repairbay: { en: "Repair Bay", hu: "Javítóüzem", de: "Reparaturbucht", ro: "Doc reparații" },
};

function formatTime(seconds: number): string {
  if (seconds <= 0) return "0s";
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return h > 0 ? `${d}d ${h}h` : `${d}d`;
  if (h > 0) return m > 0 ? `${h}h ${m}m` : `${h}h`;
  return `${m}m`;
}

function CostChips({ cost, lang }: { cost: MaterialCost; lang: Lang }) {
  const entries = Object.entries(cost).filter(([, v]) => v && v > 0) as [string, number][];
  return (
    <div className="flex flex-wrap gap-1.5">
      {entries.map(([matId, amount]) => {
        const meta = METEOR_MATERIAL_META[matId as keyof typeof METEOR_MATERIAL_META];
        const short = meta ? (meta.short as Record<string, string>)[lang] ?? (meta.short as Record<string, string>).en : matId;
        const colorClass = meta?.colorClassName ?? "text-white/60";
        return (
          <span key={matId} className={`rounded-full border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[10px] font-black ${colorClass}`}>
            {amount} {short}
          </span>
        );
      })}
    </div>
  );
}

/** Active upgrade progress bar for this module */
function ActiveUpgradeBar({ slot }: { slot: StarholdState["upgradeQueue"][0] }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const total = slot.completesAt - slot.startedAt;
  const elapsed = Math.min(now - slot.startedAt, total);
  const remaining = Math.max(0, slot.completesAt - now);
  const pct = total > 0 ? (elapsed / total) * 100 : 100;

  return (
    <div className="rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-black text-amber-300/90">
          🔨 Upgrading to Lv{slot.targetLevel}
        </span>
        <span className="text-[10px] font-bold text-amber-300/60">
          {formatTime(remaining / 1000)}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/30">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500/70 to-amber-400/90 transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Single-module interior panel — shows level, integrity, upgrade section.
 * Embedded inside each module's interior view.
 */
export default function ModuleInteriorPanel({
  moduleId,
  state,
  dispatch,
  lang,
  accentColor = "cyan",
}: {
  moduleId: UpgradableModuleId;
  state: StarholdState;
  dispatch: (cmd: StarholdCommand) => void;
  lang: string;
  accentColor?: "cyan" | "amber" | "fuchsia" | "indigo" | "red";
}) {
  const l = (lang || "en") as Lang;
  const currentLevel = state.moduleLevels[moduleId];
  const isMaxLevel = currentLevel >= 25;
  const isUpgrading = state.upgradeQueue.some(s => s.moduleId === moduleId);
  const activeSlot = state.upgradeQueue.find(s => s.moduleId === moduleId);
  const slotsFull = state.upgradeQueue.length >= state.upgradeSlotCount;

  const inventory = loadSavedGalaxyInventory();
  const check = canUpgradeModule(moduleId, state.moduleLevels, inventory);
  const nextEntry = getLevelCost(moduleId, currentLevel + 1);
  const moduleName = MODULE_LABELS[moduleId]?.[l] ?? moduleId;

  // Module state (for reactor/logistics/core/sensor — not warroom)
  const moduleState = moduleId !== "warroom" ? state.modules[moduleId as keyof typeof state.modules] : null;

  const isDanger = !isMaxLevel && moduleId !== "core" && (state.moduleLevels.core - currentLevel >= 3);

  const colorMap = {
    cyan: { border: "border-cyan-400/20", bg: "bg-cyan-400/[0.04]", text: "text-cyan-300", btn: "border-cyan-400/30 bg-cyan-400/12 text-cyan-100 hover:bg-cyan-400/20", badge: "bg-cyan-400/15 text-cyan-300 border-cyan-400/20" },
    amber: { border: "border-amber-400/20", bg: "bg-amber-400/[0.04]", text: "text-amber-300", btn: "border-amber-400/30 bg-amber-400/12 text-amber-100 hover:bg-amber-400/20", badge: "bg-amber-400/15 text-amber-300 border-amber-400/20" },
    fuchsia: { border: "border-fuchsia-400/20", bg: "bg-fuchsia-400/[0.04]", text: "text-fuchsia-300", btn: "border-fuchsia-400/30 bg-fuchsia-400/12 text-fuchsia-100 hover:bg-fuchsia-400/20", badge: "bg-fuchsia-400/15 text-fuchsia-300 border-fuchsia-400/20" },
    indigo: { border: "border-indigo-400/20", bg: "bg-indigo-400/[0.04]", text: "text-indigo-300", btn: "border-indigo-400/30 bg-indigo-400/12 text-indigo-100 hover:bg-indigo-400/20", badge: "bg-indigo-400/15 text-indigo-300 border-indigo-400/20" },
    red: { border: "border-red-400/20", bg: "bg-red-400/[0.04]", text: "text-red-300", btn: "border-red-400/30 bg-red-400/12 text-red-100 hover:bg-red-400/20", badge: "bg-red-400/15 text-red-300 border-red-400/20" },
  };
  const c = colorMap[accentColor];

  return (
    <div className="flex flex-col gap-3">
      {/* Module Header */}
      <div className={`rounded-2xl border ${c.border} ${c.bg} p-3`}>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-black ${c.text}`}>{moduleName}</span>
          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${isMaxLevel ? c.badge : "bg-white/5 text-white/60 border-white/10"}`}>
            Lv {currentLevel}{isMaxLevel ? " MAX" : ""}
          </span>
        </div>

        {/* Integrity + Load bars (only for standard modules) */}
        {moduleState && (
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                {l === "hu" ? "Integritás" : l === "de" ? "Integrität" : "Integrity"}
              </span>
              <span className="text-[10px] font-black text-white/70">{moduleState.integrity}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full transition-all duration-500 ${moduleState.integrity > 60 ? "bg-emerald-500" : moduleState.integrity > 30 ? "bg-amber-500" : "bg-rose-500"}`}
                style={{ width: `${moduleState.integrity}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Load</span>
              <span className="text-[10px] font-black text-white/70">{moduleState.load}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-amber-500 to-rose-500 transition-all duration-500"
                style={{ width: `${moduleState.load}%` }}
              />
            </div>
            <div className={`mt-1 text-[10px] font-black ${moduleState.online ? "text-emerald-400/80" : "text-white/40"}`}>
              {moduleState.online
                ? (l === "hu" ? "● Online" : "● Online")
                : (l === "hu" ? "○ Offline" : "○ Offline")}
            </div>
          </div>
        )}
      </div>

      {/* Danger warning */}
      {isDanger && (
        <div className="rounded-xl border border-red-400/20 bg-red-400/[0.04] px-3 py-2">
          <p className="text-[10px] font-bold text-red-400/80">
            {l === "hu" ? "⚠ Lemaradás! Fejleszd a core szintjéhez közelebb." :
             l === "de" ? "⚠ Rückstand! Näher an Core-Level bringen." :
             l === "ro" ? "⚠ Întârziere! Apropiați-vă de nivelul Core." :
             "⚠ Falling behind! Upgrade closer to core level."}
          </p>
        </div>
      )}

      {/* Active upgrade */}
      {activeSlot && <ActiveUpgradeBar slot={activeSlot} />}

      {/* Upgrade section */}
      {!isMaxLevel && !isUpgrading && nextEntry && (
        <div className={`rounded-2xl border ${c.border} ${c.bg} p-3`}>
          <div className="text-[9px] font-black uppercase tracking-wider text-white/40 mb-2">
            {l === "hu" ? "Következő szint" : l === "de" ? "Nächstes Level" : "Next Level"}
          </div>
          <CostChips cost={nextEntry.cost} lang={l} />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] font-medium text-white/35">
              ⏱ {formatTime(nextEntry.buildSeconds)}
            </span>
            <button
              type="button"
              disabled={!check.canUpgrade || slotsFull}
              onClick={() => dispatch({ type: "UPGRADE_MODULE", moduleId })}
              className={`rounded-lg px-4 py-2 text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 ${
                check.canUpgrade && !slotsFull
                  ? c.btn
                  : "border border-white/5 bg-white/[0.02] text-white/25 cursor-not-allowed"
              }`}
            >
              {check.reason === "core_level"
                ? (l === "hu" ? "Core kell" : l === "de" ? "Core nötig" : "Core req.")
                : slotsFull
                  ? (l === "hu" ? "Foglalt" : l === "de" ? "Belegt" : "Busy")
                  : (l === "hu" ? "Fejlesztés" : l === "de" ? "Upgrade" : "Upgrade")}
            </button>
          </div>
        </div>
      )}

      {/* Max level badge */}
      {isMaxLevel && (
        <div className={`rounded-2xl border ${c.border} ${c.bg} p-3 text-center`}>
          <span className={`text-[11px] font-black uppercase tracking-wider ${c.text}`}>
            ✦ {l === "hu" ? "Maximális szint elérve" : l === "de" ? "Maximalstufe erreicht" : "Maximum level reached"}
          </span>
        </div>
      )}
    </div>
  );
}
