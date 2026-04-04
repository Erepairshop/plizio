"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Sword, Shield, Compass, Megaphone, Eye, Zap, 
  ChevronLeft, ChevronRight, Target, Info, Users, 
  Crosshair, ShieldAlert, Activity, AlertTriangle
} from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { 
  BATTLE_TACTICS, 
  BATTLE_UNIT_PROFILES, 
  type BattleArmy, 
  type BattleTacticId, 
  type ScoutReport 
} from "@/lib/gravitas/sim/battle/types";
import { 
  AVATAR_STAT_LABELS, 
  type AvatarCombatAllocation, 
  type AvatarCombatProfile,
  validateAllocation,
  getEffectiveCombatStats
} from "@/lib/gravitas/sim/battle/avatarCombat";
import type { BuildingDescriptor } from "@/lib/gravitas/sim/battle/buildingDescriptors";
import type { Faction } from "@/lib/gravitas/sim/battle/factions";

interface ArmySetupProps {
  buildingId: string;
  descriptor: BuildingDescriptor;
  faction: Faction;
  scoutReport: ScoutReport;
  state: StarholdState;
  avatarCombat: AvatarCombatProfile;
  onStartBattle: (army: BattleArmy, allocation: AvatarCombatAllocation) => void;
  onClose: () => void;
  lang: string;
}

type Lang = "en" | "hu" | "de" | "ro";

function localize(lang: string, ls: LocalizedString): string {
  const l = lang as Lang;
  return ls[l] ?? ls.en;
}

export default function ArmySetup({
  buildingId,
  descriptor,
  faction,
  scoutReport,
  state,
  avatarCombat,
  onStartBattle,
  onClose,
  lang
}: ArmySetupProps) {
  const [allocation, setAllocation] = useState<AvatarCombatAllocation>(avatarCombat.allocation);
  const [selectedUnits, setSelectedUnits] = useState<Record<string, number>>({});
  const [tacticId, setTacticId] = useState<BattleTacticId>("aggressive");

  const intel = scoutReport.intelLevel;
  const showFaction = intel >= 25;
  const showMaterial = intel >= 0;
  const showCondition = intel >= 0;
  const showWeaponry = intel >= 40;
  const showTactic = intel >= 60;

  const availableGarrison = state.warRoom.garrison;
  const unitIds = Object.keys(BATTLE_UNIT_PROFILES);

  const effectiveStats = useMemo(() => {
    return getEffectiveCombatStats({ ...avatarCombat, allocation });
  }, [avatarCombat, allocation]);

  const handleUpdateStat = useCallback((key: keyof AvatarCombatAllocation, delta: number) => {
    setAllocation(prev => {
      const next = { ...prev };
      const targetValue = Math.max(0, Math.min(100, prev[key] + delta));
      const actualDelta = targetValue - prev[key];
      
      if (actualDelta === 0) return prev;

      next[key] = targetValue;
      
      const otherKeys = (Object.keys(prev) as (keyof AvatarCombatAllocation)[]).filter(k => k !== key);
      let remainingToAdjust = -actualDelta;

      if (actualDelta > 0) {
        // Taking from others
        const keysWithRoom = otherKeys.filter(k => prev[k] > 0);
        if (keysWithRoom.length === 0) return prev; // Nowhere to take from

        // Proportional reduction
        const totalOtherValue = keysWithRoom.reduce((sum, k) => sum + prev[k], 0);
        keysWithRoom.forEach(k => {
          const share = prev[k] / totalOtherValue;
          const reduction = Math.min(prev[k], Math.round((actualDelta * share) / 5) * 5);
          next[k] -= reduction;
          remainingToAdjust += reduction;
        });

        // Cleanup remaining rounding errors (5% steps)
        while (Math.abs(remainingToAdjust) >= 5) {
          const sign = remainingToAdjust > 0 ? 1 : -1;
          const candidates = otherKeys.filter(k => sign > 0 ? true : next[k] > 0);
          if (candidates.length === 0) break;
          const luckyKey = candidates.sort((a, b) => sign > 0 ? next[a] - next[b] : next[b] - next[a])[0];
          next[luckyKey] += 5 * sign;
          remainingToAdjust -= 5 * sign;
        }
      } else {
        // Adding back to others (when current is decreased)
        const additionPerStat = Math.floor((-actualDelta / otherKeys.length) / 5) * 5;
        otherKeys.forEach(k => {
          next[k] += additionPerStat;
          remainingToAdjust += additionPerStat;
        });
        
        // Final cleanup
        while (Math.abs(remainingToAdjust) >= 5) {
          const luckyKey = otherKeys[Math.floor(Math.random() * otherKeys.length)];
          next[luckyKey] += 5;
          remainingToAdjust -= 5;
        }
      }

      return next;
    });
  }, []);

  const handleUpdateUnit = (unitId: string, delta: number) => {
    setSelectedUnits(prev => {
      const current = prev[unitId] ?? 0;
      const available = availableGarrison[unitId as any] ?? 0;
      const nextValue = Math.max(0, Math.min(available, current + delta));
      return { ...prev, [unitId]: nextValue };
    });
  };

  const totalSelectedUnits = Object.values(selectedUnits).reduce((a, b) => a + b, 0);
  const isValid = totalSelectedUnits > 0 && validateAllocation(allocation);

  const statIcons: Record<keyof AvatarCombatAllocation, React.ReactNode> = {
    firepower: <Sword size={14} />,
    barrier: <Shield size={14} />,
    tactics: <Compass size={14} />,
    inspiration: <Megaphone size={14} />,
    intel: <Eye size={14} />,
    energy: <Zap size={14} />,
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#050a16] text-white p-4 rounded-[24px] border border-cyan-300/20 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Crosshair className="text-rose-400" size={18} />
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            {localize(lang, { en: "Battle Preparation", hu: "Csata előkészítés", de: "Kampfvorbereitung", ro: "Pregătire luptă" })}
          </h2>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition">
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {/* Target Info */}
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-3">
          <div className="flex items-center gap-2 mb-2">
            <Target size={14} className="text-rose-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-300/70">Target Profile</span>
          </div>
          <div className="text-sm font-bold text-white mb-1">{localize(lang, descriptor.title)}</div>
          
          <div className="grid grid-cols-1 gap-1.5 text-[11px]">
            {showFaction && (
              <div className="flex items-center gap-2">
                <Users size={12} className="text-white/40" />
                <span className="text-white/60">Defenders:</span>
                <span className="text-rose-200 font-bold">{localize(lang, faction.name)}</span>
              </div>
            )}
            {showMaterial && (
              <div className="flex items-center gap-2">
                <ShieldAlert size={12} className="text-white/40" />
                <span className="text-white/60">Armor:</span>
                <span className="text-cyan-200">{localize(lang, descriptor.material.label)}</span>
              </div>
            )}
            {showWeaponry && (
              <div className="flex items-center gap-2">
                <Sword size={12} className="text-white/40" />
                <span className="text-white/60">Weaponry:</span>
                <span className="text-orange-300">{localize(lang, descriptor.weaponry.label)}</span>
              </div>
            )}
            {showTactic && (
              <div className="flex items-center gap-2 mt-1 p-1.5 rounded-lg bg-black/30 border border-white/5">
                <AlertTriangle size={12} className="text-amber-400" />
                <span className="text-amber-100 italic">{localize(lang, descriptor.tacticStyle.label)}</span>
              </div>
            )}
          </div>
          
          <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2">
            <span className="text-[9px] font-black uppercase text-white/40">Intel Quality</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400" style={{ width: `${intel}%` }} />
              </div>
              <span className="text-[10px] font-bold text-cyan-400">{intel}%</span>
            </div>
          </div>
        </div>

        {/* Avatar Allocation */}
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300/70">Avatar Resonance</span>
            </div>
            <span className="text-[10px] font-bold text-white/50">Total: 100%</span>
          </div>

          <div className="space-y-3">
            {(Object.keys(AVATAR_STAT_LABELS) as (keyof AvatarCombatAllocation)[]).map((key) => {
              const label = AVATAR_STAT_LABELS[key];
              const value = allocation[key];
              const eff = Math.round(effectiveStats[key]);
              
              return (
                <div key={key} className="space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="text-cyan-400">{statIcons[key]}</span>
                      <span>{localize(lang, label.name)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Eff: {eff}</span>
                      <span className="w-8 text-right font-black text-cyan-100">{value}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden flex">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                        animate={{ width: `${value}%` }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                      />
                    </div>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => handleUpdateStat(key, -5)}
                        className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 active:scale-95 transition text-[14px] font-bold"
                      >
                        -
                      </button>
                      <button 
                        onClick={() => handleUpdateStat(key, 5)}
                        className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 active:scale-95 transition text-[14px] font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 p-2 rounded-xl bg-black/40 border border-white/5">
            <div className="text-[9px] font-black uppercase text-white/30 mb-1">Active Archetype</div>
            <div className="text-[10px] text-emerald-200">
              <span className="font-bold">{localize(lang, avatarCombat.title)}</span>
              <span className="mx-1 opacity-50">|</span>
              <span className="opacity-80">
                {localize(lang, { 
                  en: "Core multiplier bonus active", 
                  hu: "Mag-szorzó bónusz aktív", 
                  de: "Kern-Multiplikator-Bonus aktiv", 
                  ro: "Bonus multiplicator nucleu activ" 
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Army Selection */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3">
          <div className="flex items-center gap-2 mb-3">
            <Users size={14} className="text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300/70">Army Deployment</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {unitIds.map(id => {
              const profile = BATTLE_UNIT_PROFILES[id];
              const available = availableGarrison[id] ?? 0;
              const selected = selectedUnits[id] ?? 0;
              
              return (
                <div key={id} className="flex items-center justify-between p-2 rounded-xl bg-black/20 border border-white/5">
                  <div>
                    <div className="text-[11px] font-bold capitalize">{id.replace("_", " ")}</div>
                    <div className="text-[9px] text-white/40">Available: {available}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleUpdateUnit(id, -1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 active:scale-90 transition"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className={`text-xs font-black min-w-[20px] text-center ${selected > 0 ? "text-amber-200" : "text-white/20"}`}>
                      {selected}
                    </span>
                    <button 
                      onClick={() => handleUpdateUnit(id, 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 active:scale-90 transition"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tactic Selection */}
        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-3">
          <div className="flex items-center gap-2 mb-3">
            <Compass size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300/70">Strategic Tactic</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {(Object.keys(BATTLE_TACTICS) as BattleTacticId[]).map(id => {
              const tactic = BATTLE_TACTICS[id];
              const active = tacticId === id;
              
              return (
                <button
                  key={id}
                  onClick={() => setTacticId(id)}
                  className={`px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition ${
                    active 
                      ? "bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]" 
                      : "bg-white/5 text-white/40 hover:bg-white/10"
                  }`}
                >
                  {localize(lang, tactic.name)}
                </button>
              );
            })}
          </div>

          <div className="p-2 rounded-xl bg-black/30 border border-white/5 text-[10px] leading-relaxed text-indigo-100/80 italic">
            "{localize(lang, BATTLE_TACTICS[tacticId].description)}"
          </div>
        </div>
      </div>

      {/* Footer / Start Button */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <button
          disabled={!isValid}
          onClick={() => onStartBattle({ units: selectedUnits, tacticId }, allocation)}
          className={`w-full py-3.5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 ${
            isValid 
              ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-[0_8px_24px_rgba(225,29,72,0.3)] hover:scale-[1.02] active:scale-[0.98]" 
              : "bg-white/5 text-white/20 cursor-not-allowed"
          }`}
        >
          <Sword size={18} className={isValid ? "animate-pulse" : ""} />
          <span className="text-xs font-black uppercase tracking-[0.25em]">
            {localize(lang, { en: "Launch Strike", hu: "Támadás indítása", de: "Angriff starten", ro: "Lansează atacul" })}
          </span>
        </button>
        {!isValid && totalSelectedUnits === 0 && (
          <p className="text-center text-[9px] text-rose-400/60 mt-2 font-bold uppercase tracking-widest">
            {localize(lang, { en: "Select units to proceed", hu: "Válassz egységeket a folytatáshoz", de: "Wähle Einheiten aus", ro: "Selectează unități" })}
          </p>
        )}
      </div>
    </div>
  );
}
