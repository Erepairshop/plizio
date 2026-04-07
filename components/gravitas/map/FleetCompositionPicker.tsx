"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { X, Rocket, Minus, Plus, ShieldAlert, Sparkles, Fuel, Zap } from "lucide-react";
import { WARROOM_UNITS, WARROOM_UNIT_ORDER } from "@/lib/gravitas/sim/warroom/units";
import { calculateFleetWeight, calculateFuelCost, calculateTravelTimeTicks, nodeDistance } from "@/lib/gravitas/sim/map/navigation";
import type { GarrisonEntry } from "@/lib/gravitas/sim/warroom/types";
import type { MapNode, FleetMissionType } from "@/lib/gravitas/sim/map/types";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

type Lang = "en" | "hu" | "de" | "ro";

function localize(lang: Lang, ls: LocalizedString) {
  return ls[lang] ?? ls.en;
}

function formatDurationMs(ms: number) {
  if (!Number.isFinite(ms) || ms <= 0) return "0s";
  if (ms >= 3_600_000) return `${Math.ceil(ms / 3_600_000)}h`;
  if (ms >= 60_000) return `${Math.ceil(ms / 60_000)}m`;
  return `${Math.ceil(ms / 1000)}s`;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

export default function FleetCompositionPicker({
  lang,
  node,
  missionType,
  base,
  sensorLevel,
  antimatter,
  chronoCore,
  garrison,
  onConfirm,
  onClose,
}: {
  lang: Lang;
  node: MapNode;
  missionType: FleetMissionType;
  base: { x: number; y: number };
  sensorLevel: number;
  antimatter: number;
  chronoCore: number;
  garrison: Record<string, GarrisonEntry[]>;
  onConfirm: (composition: Record<string, number>, useBoost?: boolean) => void;
  onClose: () => void;
}) {
  const [composition, setComposition] = useState<Record<string, number>>({});
  const [useBoost, setUseBoost] = useState(false);

  const availableUnits = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const [unitId, entries] of Object.entries(garrison)) {
      counts[unitId] = entries.reduce((sum, e) => sum + e.count, 0);
    }
    return counts;
  }, [garrison]);

  const handleAdjust = (unitId: string, delta: number, maxAmount?: boolean) => {
    setComposition((prev) => {
      const current = prev[unitId] || 0;
      const available = availableUnits[unitId] || 0;
      const next = maxAmount ? available : Math.max(0, Math.min(current + delta, available));
      
      if (next === 0) {
        const copy = { ...prev };
        delete copy[unitId];
        return copy;
      }
      return { ...prev, [unitId]: next };
    });
  };

  const handleClear = () => {
    setComposition({});
  };

  const distance = nodeDistance(base.x, base.y, node.x, node.y);
  const totalUnits = Object.values(composition).reduce((sum, c) => sum + c, 0);
  const fleetWeight = calculateFleetWeight(composition);
  const fuelCost = calculateFuelCost(distance, fleetWeight);
  const travelTimeTicks = calculateTravelTimeTicks(distance, sensorLevel, fleetWeight, useBoost);
  const isValid = totalUnits > 0 && antimatter >= fuelCost && (!useBoost || chronoCore > 0);

  const missionConfig = useMemo(() => {
    if (missionType === "attack") {
      return {
        label: { en: "Combat Dispatch", hu: "Harci indítás", de: "Kampfeinsatz", ro: "Trimitere de luptă" },
        toneClass: "text-rose-100 border-rose-400/20 bg-rose-500/10",
        btnClass: "bg-rose-500/20 hover:bg-rose-500/30 text-rose-100 border-rose-500/30",
        glow: "shadow-[0_0_20px_rgba(244,63,94,0.15)]",
        icon: <ShieldAlert size={14} />,
      };
    }
    if (missionType === "collect") {
      return {
        label: { en: "Mining Expedition", hu: "Bányász expedíció", de: "Bergbau-Expedition", ro: "Expediție minieră" },
        toneClass: "text-emerald-100 border-emerald-400/20 bg-emerald-500/10",
        btnClass: "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-100 border-emerald-500/30",
        glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        icon: <Fuel size={14} />,
      };
    }
    return {
      label: { en: "Recon Mission", hu: "Felderítő küldetés", de: "Aufklärungsmission", ro: "Misiune de recunoaștere" },
      toneClass: "text-cyan-100 border-cyan-400/20 bg-cyan-500/10",
      btnClass: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-100 border-cyan-500/30",
      glow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
      icon: <Sparkles size={14} />,
    };
  }, [missionType]);

  return (
    <div className="absolute inset-0 z-[50] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className={`w-full max-w-[360px] rounded-[24px] border border-white/10 bg-[#08111f]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh] ${missionConfig.glow}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className={`flex h-8 w-8 items-center justify-center rounded-xl border ${missionConfig.toneClass}`}>
              {missionConfig.icon}
            </div>
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
                {localize(lang, { en: "Fleet Dispatch", hu: "Flotta indítás", de: "Flottenentsendung", ro: "Trimitere Flotă" })}
              </div>
              <div className="text-[14px] font-black text-white">
                {localize(lang, missionConfig.label)}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition"
          >
            <X size={14} />
          </button>
        </div>

        {/* Units List */}
        <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-2 custom-scrollbar">
          {WARROOM_UNIT_ORDER.map((unitId) => {
            const available = availableUnits[unitId] || 0;
            if (available === 0) return null;
            const def = WARROOM_UNITS[unitId];
            if (!def) return null;
            const current = composition[unitId] || 0;

            return (
              <div key={unitId} className={`flex flex-col gap-2 rounded-2xl border ${current > 0 ? "border-cyan-500/30 bg-cyan-500/5" : "border-white/5 bg-white/5"} p-2.5 transition-colors`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/40 text-[14px]">
                    {def.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-black text-white">{localize(lang, def.name)}</div>
                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-white/40 mt-0.5">
                      <span>{available} {localize(lang, { en: "avail", hu: "elérhető", de: "verfügbar", ro: "disp" })}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className={def.role === "tank" ? "text-blue-300" : def.role === "assault" ? "text-rose-300" : def.role === "recon" ? "text-violet-300" : "text-emerald-300"}>
                        {def.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1.5 bg-black/20 rounded-xl p-1 border border-white/5">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      disabled={current === 0}
                      onClick={() => handleAdjust(unitId, -1)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
                    >
                      <Minus size={12} />
                    </button>
                    <div className="w-8 text-center text-[12px] font-black text-white">
                      {current}
                    </div>
                    <button
                      type="button"
                      disabled={current >= available}
                      onClick={() => handleAdjust(unitId, 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <button
                    type="button"
                    disabled={current >= available}
                    onClick={() => handleAdjust(unitId, 0, true)}
                    className="flex h-7 px-3 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-200 border border-cyan-500/20 hover:bg-cyan-500/20 disabled:opacity-30 text-[9px] font-bold tracking-wider uppercase ml-auto"
                  >
                    Max
                  </button>
                </div>
              </div>
            );
          })}

          {Object.keys(availableUnits).length === 0 && (
            <div className="py-8 text-center text-[11px] font-bold text-white/40 uppercase tracking-widest">
              {localize(lang, { en: "No units available", hu: "Nincs elérhető egység", de: "Keine Einheiten verfügbar", ro: "Fără unități disponibile" })}
            </div>
          )}
        </div>

        {/* Summary Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 shrink-0">
          {/* ChronoCore Boost Toggle */}
          <div className={`mb-3 flex items-center justify-between rounded-xl border p-2.5 transition-all ${useBoost ? "border-fuchsia-500/40 bg-fuchsia-500/10 shadow-[0_0_15px_rgba(217,70,239,0.15)]" : "border-white/5 bg-black/20"}`}>
            <div className="flex items-center gap-2.5">
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg border ${useBoost ? "border-fuchsia-400/40 text-fuchsia-300" : "border-white/10 text-white/30"}`}>
                <Zap size={14} className={useBoost ? "animate-pulse" : ""} />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.15em] text-white/60">
                  {localize(lang, { en: "Chrono Overdrive", hu: "Chrono Túlhajtás", de: "Chrono-Overdrive", ro: "Overdrive Chrono" })}
                </div>
                <div className={`text-[10px] font-bold ${useBoost ? "text-fuchsia-200" : "text-white/30"}`}>
                  {useBoost 
                    ? localize(lang, { en: "Travel compressed (10x)", hu: "Tömörített utazás (10x)", de: "Reise komprimiert (10x)", ro: "Călătorie comprimată (10x)" })
                    : localize(lang, { en: "Standard travel speed", hu: "Normál utazási sebesség", de: "Standardgeschwindigkeit", ro: "Viteză standard" })}
                </div>
              </div>
            </div>
            <button
              type="button"
              disabled={chronoCore <= 0}
              onClick={() => setUseBoost(!useBoost)}
              className={`relative h-5 w-9 rounded-full transition-colors ${useBoost ? "bg-fuchsia-500" : "bg-white/10"} ${chronoCore <= 0 ? "opacity-20 grayscale cursor-not-allowed" : ""}`}
            >
              <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${useBoost ? "left-4.5" : "left-0.5"}`} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="rounded-xl border border-white/5 bg-black/20 p-2">
              <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/40">
                {localize(lang, { en: "Weight", hu: "Súly", de: "Gewicht", ro: "Greutate" })}
              </div>
              <div className="mt-0.5 text-[12px] font-black text-white">
                {formatNumber(fleetWeight)}
              </div>
            </div>
            <div className={`rounded-xl border p-2 ${antimatter < fuelCost ? "border-rose-500/30 bg-rose-500/10" : "border-white/5 bg-black/20"}`}>
              <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/40 flex items-center justify-between">
                <span>{localize(lang, { en: "Fuel", hu: "Üzemanyag", de: "Treibstoff", ro: "Combustibil" })}</span>
              </div>
              <div className={`mt-0.5 text-[12px] font-black flex items-center gap-1 ${antimatter < fuelCost ? "text-rose-400" : "text-amber-200"}`}>
                <Zap size={10} className={antimatter < fuelCost ? "text-rose-400" : "text-amber-400"} />
                {formatNumber(fuelCost)}
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/20 p-2">
              <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/40">
                {localize(lang, { en: "ETA", hu: "Érkezés", de: "ETA", ro: "ETA" })}
              </div>
              <div className="mt-0.5 text-[12px] font-black text-cyan-200">
                {formatDurationMs(travelTimeTicks * 1000)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClear}
              disabled={totalUnits === 0}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-white/70 transition hover:bg-white/10 disabled:opacity-30"
            >
              {localize(lang, { en: "Clear", hu: "Törlés", de: "Löschen", ro: "Șterge" })}
            </button>
            <button
              type="button"
              disabled={!isValid}
              onClick={() => onConfirm(composition, useBoost)}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition ${isValid ? missionConfig.btnClass : "bg-white/5 border-white/5 text-white/30"}`}
            >
              <Rocket size={14} />
              <span>{localize(lang, { en: "Launch Fleet", hu: "Flotta indítása", de: "Flotte starten", ro: "Lansează Flota" })}</span>
            </button>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
