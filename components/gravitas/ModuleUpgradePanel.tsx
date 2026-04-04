"use client";

import { useState, useEffect, useCallback } from "react";
import type { StarholdState, StarholdCommand } from "@/lib/gravitas/sim/types";
import type { UpgradableModuleId, MaterialCost } from "@/lib/gravitas/economy";
import { getLevelCost, canUpgradeModule, UPGRADE_SLOT_CONFIG } from "@/lib/gravitas/economy";
import { METEOR_MATERIAL_META } from "@/lib/gravitas/world/demo";
import { loadSavedGalaxyInventory } from "@/lib/gravitas/world/mission";

type Lang = "en" | "hu" | "de" | "ro";

const MODULE_NAMES: Record<UpgradableModuleId, Record<Lang, string>> = {
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
    <div className="flex flex-wrap gap-1">
      {entries.map(([matId, amount]) => {
        const meta = METEOR_MATERIAL_META[matId as keyof typeof METEOR_MATERIAL_META];
        const short = meta ? (meta.short as Record<string, string>)[lang] ?? (meta.short as Record<string, string>).en : matId;
        const colorClass = meta?.colorClassName ?? "text-white/60";
        return (
          <span key={matId} className={`rounded-full border border-white/8 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-black ${colorClass}`}>
            {amount} {short}
          </span>
        );
      })}
    </div>
  );
}

/** Active upgrade progress bar */
function UpgradeProgress({ slot, lang, onCancel }: {
  slot: StarholdState["upgradeQueue"][0];
  lang: Lang;
  onCancel?: () => void;
}) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const total = slot.completesAt - slot.startedAt;
  const elapsed = Math.min(now - slot.startedAt, total);
  const remaining = Math.max(0, slot.completesAt - now);
  const pct = total > 0 ? (elapsed / total) * 100 : 100;
  const moduleName = MODULE_NAMES[slot.moduleId]?.[lang] ?? slot.moduleId;

  return (
    <div className="rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-2.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-black text-amber-300/90">
          🔨 {moduleName} → Lv{slot.targetLevel}
        </span>
        <span className="text-[9px] font-bold text-amber-300/60">
          {formatTime(remaining / 1000)}
        </span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-black/30">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500/70 to-amber-400/90 transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/** Single module upgrade row */
function ModuleUpgradeRow({ moduleId, state, dispatch, lang }: {
  moduleId: UpgradableModuleId;
  state: StarholdState;
  dispatch: (cmd: StarholdCommand) => void;
  lang: Lang;
}) {
  const currentLevel = state.moduleLevels[moduleId];
  const isUpgrading = state.upgradeQueue.some(s => s.moduleId === moduleId);
  const isMaxLevel = currentLevel >= 25;
  const slotsFull = state.upgradeQueue.length >= state.upgradeSlotCount;

  const inventory = loadSavedGalaxyInventory();
  const check = canUpgradeModule(moduleId, state.moduleLevels, inventory);
  const nextEntry = getLevelCost(moduleId, currentLevel + 1);
  const moduleName = MODULE_NAMES[moduleId]?.[lang] ?? moduleId;

  const isDanger = !isMaxLevel && moduleId !== "core" && (state.moduleLevels.core - currentLevel >= 3);

  return (
    <div className={`rounded-xl border p-2.5 transition-all ${
      isDanger
        ? "border-red-400/20 bg-red-400/[0.04]"
        : "border-white/8 bg-white/[0.02]"
    }`}>
      {/* Header: name + level */}
      <div className="flex items-center justify-between">
        <span className={`text-[11px] font-black ${isDanger ? "text-red-300/90" : "text-white/85"}`}>
          {moduleName}
        </span>
        <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
          isMaxLevel
            ? "bg-amber-400/15 text-amber-300/80 border border-amber-400/20"
            : "bg-white/5 text-white/50 border border-white/8"
        }`}>
          Lv {currentLevel}{isMaxLevel ? " MAX" : ""}
        </span>
      </div>

      {/* Danger warning */}
      {isDanger && (
        <p className="mt-1 text-[9px] font-medium text-red-400/70">
          {lang === "hu" ? "⚠ Lemaradás! Fejleszd a core szintjéhez közelebb." :
           lang === "de" ? "⚠ Rückstand! Näher an Core-Level bringen." :
           lang === "ro" ? "⚠ Întârziere! Apropiați-vă de nivelul Core." :
           "⚠ Falling behind! Upgrade closer to core level."}
        </p>
      )}

      {/* Cost + upgrade button */}
      {!isMaxLevel && !isUpgrading && nextEntry && (
        <div className="mt-2 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <CostChips cost={nextEntry.cost} lang={lang} />
            <span className="mt-1 block text-[8px] font-medium text-white/30">
              ⏱ {formatTime(nextEntry.buildSeconds)}
            </span>
          </div>
          <button
            type="button"
            disabled={!check.canUpgrade || slotsFull}
            onClick={() => dispatch({ type: "UPGRADE_MODULE", moduleId })}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all ${
              check.canUpgrade && !slotsFull
                ? "border border-cyan-400/30 bg-cyan-400/12 text-cyan-100 hover:bg-cyan-400/20 active:scale-95"
                : "border border-white/5 bg-white/[0.02] text-white/25 cursor-not-allowed"
            }`}
          >
            {check.reason === "core_level"
              ? (lang === "hu" ? "Core kell" : lang === "de" ? "Core nötig" : "Core req.")
              : slotsFull
                ? (lang === "hu" ? "Foglalt" : lang === "de" ? "Belegt" : "Busy")
                : (lang === "hu" ? "Fejlesztés" : lang === "de" ? "Upgrade" : "Upgrade")}
          </button>
        </div>
      )}
    </div>
  );
}

/** Full upgrade panel — shows all modules + active queue */
export default function ModuleUpgradePanel({ state, dispatch, lang }: {
  state: StarholdState;
  dispatch: (cmd: StarholdCommand) => void;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const modules: UpgradableModuleId[] = ["core", "reactor", "logistics", "sensor", "warroom"];

  return (
    <div className="flex flex-col gap-2">
      {/* Active upgrades */}
      {state.upgradeQueue.length > 0 && (
        <div className="flex flex-col gap-1.5">
          {state.upgradeQueue.map(slot => (
            <UpgradeProgress key={slot.moduleId} slot={slot} lang={l} />
          ))}
        </div>
      )}

      {/* Slot counter */}
      <div className="flex items-center justify-between px-1">
        <span className="text-[9px] font-bold uppercase tracking-wider text-white/30">
          {lang === "hu" ? "Fejlesztések" : lang === "de" ? "Upgrades" : "Upgrades"}
        </span>
        <span className="text-[9px] font-bold text-white/25">
          {state.upgradeQueue.length}/{state.upgradeSlotCount}
          {state.upgradeSlotCount < UPGRADE_SLOT_CONFIG.maxSlots && (
            <span className="ml-1 text-white/15">
              (max {UPGRADE_SLOT_CONFIG.maxSlots})
            </span>
          )}
        </span>
      </div>

      {/* Module rows */}
      {modules.map(id => (
        <ModuleUpgradeRow key={id} moduleId={id} state={state} dispatch={dispatch} lang={l} />
      ))}
    </div>
  );
}
