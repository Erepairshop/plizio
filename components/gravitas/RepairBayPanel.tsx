"use client";

import { useState, useEffect, useMemo } from "react";
import { X, Wrench, AlertTriangle, Shield, Crosshair, Radar, Activity, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { WarRoomUnitId } from "@/lib/gravitas/sim/warroom/types";
import { getRepairSlotCount, getRepairBatchCost } from "@/lib/gravitas/sim/repairbay/repair";
import { REPAIR_BAY_CONFIG } from "@/lib/gravitas/economy";
import { loadSavedGalaxyInventory } from "@/lib/gravitas/world/mission";

interface RepairBayPanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const UNIT_ICONS: Record<WarRoomUnitId, React.ReactNode> = {
  sentinel: <Shield size={16} />,
  vanguard: <Crosshair size={16} />,
  wraith: <Radar size={16} />,
  nexus: <Activity size={16} />,
  korgath_berserker: <Crosshair size={16} className="text-red-400" />,
  velari_shadow: <Radar size={16} className="text-emerald-400" />,
  drex_marauder: <Crosshair size={16} className="text-amber-400" />,
  synthoid_titan: <Shield size={16} className="text-cyan-400" />,
  noma_weaver: <Activity size={16} className="text-fuchsia-400" />,
};

const UNIT_NAMES: Record<WarRoomUnitId, LocalizedString> = {
  sentinel: { en: "Sentinel", hu: "Sentinel", de: "Sentinel", ro: "Sentinel" },
  vanguard: { en: "Vanguard", hu: "Vanguard", de: "Vanguard", ro: "Vanguard" },
  wraith: { en: "Wraith", hu: "Wraith", de: "Wraith", ro: "Wraith" },
  nexus: { en: "Nexus", hu: "Nexus", de: "Nexus", ro: "Nexus" },
  korgath_berserker: { en: "K. Berserker", hu: "K. Berserker", de: "K. Berserker", ro: "K. Berserker" },
  velari_shadow: { en: "V. Shadow", hu: "V. Árnyék", de: "V. Schatten", ro: "V. Umbră" },
  drex_marauder: { en: "D. Marauder", hu: "D. Fosztogató", de: "D. Plünderer", ro: "D. Prădător" },
  synthoid_titan: { en: "S. Titan", hu: "S. Titán", de: "S. Titan", ro: "S. Titan" },
  noma_weaver: { en: "N. Weaver", hu: "N. Szövő", de: "N. Weber", ro: "N. Țesător" },
};

function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const h = Math.floor(ms / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function RepairBayPanel({ state, doAction, onClose, lang }: RepairBayPanelProps) {
  const [now, setNow] = useState(Date.now());
  const [selectedUnit, setSelectedUnit] = useState<WarRoomUnitId | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [repairCount, setRepairCount] = useState<number>(1);
  const [inventory, setInventory] = useState(() => loadSavedGalaxyInventory());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setInventory(loadSavedGalaxyInventory());
  }, [state.tick]);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(52,211,153,0.15)";

  const maxSlots = getRepairSlotCount(state.repairBay.level);
  const activeSlots = state.repairBay.repairSlots.filter(s => s !== null);
  const emptySlotsCount = maxSlots - activeSlots.length;

  const handleStartRepair = () => {
    if (!selectedUnit) return;
    doAction({ type: "START_REPAIR", unitId: selectedUnit, unitLevel: selectedLevel, count: repairCount }, dispatchColor);
    setSelectedUnit(null);
  };

  const handleCancelRepair = (slotIndex: number) => {
    doAction({ type: "CANCEL_REPAIR", slotIndex }, "rgba(244,63,94,0.15)");
  };

  // Group wounded units
  const woundedGroups = useMemo(() => {
    const groups: { unitId: WarRoomUnitId; level: number; count: number; battlesSurvived?: number }[] = [];
    (Object.keys(state.repairBay.wounded) as WarRoomUnitId[]).forEach(unitId => {
      const entries = state.repairBay.wounded[unitId] ?? [];
      entries.forEach(entry => {
        groups.push({ unitId, level: entry.level, count: entry.count, battlesSurvived: entry.battlesSurvived });
      });
    });
    return groups;
  }, [state.repairBay.wounded]);

  // Check for decay warning
  const decayGraceHours = REPAIR_BAY_CONFIG.decayGraceHours + state.moduleLevels.core * REPAIR_BAY_CONFIG.decayGracePerCoreLevel;
  const decayGraceMs = decayGraceHours * 60 * 60 * 1000;
  const timeUntilDecay = state.repairBay.woundedAt ? Math.max(0, (state.repairBay.woundedAt + decayGraceMs) - now) : 0;
  const hasWounded = woundedGroups.length > 0;
  const isDecaying = hasWounded && state.repairBay.woundedAt && timeUntilDecay === 0;
  const decayWarningActive = hasWounded && state.repairBay.woundedAt && timeUntilDecay < 4 * 60 * 60 * 1000; // Warning 4h before

  // Selected unit max
  const selectedWoundedEntry = selectedUnit ? (state.repairBay.wounded[selectedUnit] ?? []).find(e => e.level === selectedLevel) : null;
  const maxRepairable = selectedWoundedEntry ? selectedWoundedEntry.count : 0;

  useEffect(() => {
    if (repairCount > maxRepairable) {
      setRepairCount(maxRepairable > 0 ? maxRepairable : 1);
    }
  }, [maxRepairable, repairCount]);

  const repairCost = selectedUnit ? getRepairBatchCost(selectedUnit, selectedLevel, repairCount, state.repairBay.level, state.moduleLevels.logistics, state) : {};
  const canAfford = Object.entries(repairCost).every(([matId, amount]) => amount === undefined || amount === 0 || (inventory[matId as keyof typeof inventory] ?? 0) >= amount);

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-emerald-500/20 bg-black/40">
        <div className="flex items-center gap-3">
          <Wrench size={20} className="text-emerald-400" />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Repair Bay", hu: "Javítóműhely", de: "Reparaturbucht", ro: "Unitate de Reparații" })}
            </h2>
            <p className="text-[10px] text-white/60">Module LVL {state.repairBay.level}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <X size={16} />
        </button>
      </div>

      {/* Decay Warning */}
      {hasWounded && state.repairBay.woundedAt && (
        <div className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border-b border-white/5 flex items-center gap-2 ${isDecaying ? "bg-rose-900/30 text-rose-400 animate-pulse border-rose-500/50" : decayWarningActive ? "bg-amber-900/30 text-amber-400" : "bg-black/40 text-white/40"}`}>
          <AlertTriangle size={14} />
          {isDecaying ? (
            localize({ en: "Units are dying! Repair them or they will be lost permanently!", hu: "Egységek halnak! Javítsd őket vagy elvesznek!", de: "Einheiten sterben! Reparieren oder sie sind für immer verloren!", ro: "Unitățile mor! Repară-le sau vor fi pierdute definitiv!" })
          ) : (
            <>
              {localize({ en: "Time until casualties:", hu: "Idő az első áldozatokig:", de: "Zeit bis Verluste:", ro: "Timp până la primele pierderi:" })}
              <span className="font-mono text-xs">{formatDuration(timeUntilDecay)}</span>
            </>
          )}
        </div>
      )}

      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        
        {/* Wounded List */}
        <div className="md:w-1/3 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-black/20">
          <div className="p-3 text-[11px] font-black uppercase tracking-widest text-rose-300/50 border-b border-white/5 bg-black/40 flex justify-between">
            {localize({ en: "Wounded Units", hu: "Sebesült Egységek", de: "Verwundete Einheiten", ro: "Unități Rănite" })}
            <span className="text-white/40">{woundedGroups.reduce((acc, g) => acc + g.count, 0)}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {woundedGroups.length === 0 ? (
              <div className="text-center py-8 text-white/30 text-xs italic">
                {localize({ en: "No wounded units.", hu: "Nincsenek sebesültek.", de: "Keine verwundeten Einheiten.", ro: "Nicio unitate rănită." })}
              </div>
            ) : (
              woundedGroups.map((group, idx) => (
                <button
                  key={`${group.unitId}_${group.level}_${idx}`}
                  onClick={() => {
                    setSelectedUnit(group.unitId);
                    setSelectedLevel(group.level);
                    setRepairCount(1);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-left transition-colors ${selectedUnit === group.unitId && selectedLevel === group.level ? "bg-emerald-900/20 border-emerald-500/50" : "bg-rose-900/10 border-rose-500/20 hover:border-rose-500/50"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-black/40 text-rose-400">
                      {UNIT_ICONS[group.unitId]}
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase text-white/90">
                        {localize(UNIT_NAMES[group.unitId])}
                      </div>
                      <div className="text-[10px] text-white/50">
                        LVL {group.level} {group.battlesSurvived ? `• VET (${group.battlesSurvived})` : ""}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-black text-rose-300">
                    {group.count}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Repair Slots & Action */}
        <div className="flex-1 flex flex-col min-w-0 bg-black/40 overflow-y-auto">
          
          <div className="p-4 border-b border-white/5">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-emerald-300/50 mb-3 flex items-center justify-between">
              <span>{localize({ en: "Repair Queue", hu: "Javítási Sor", de: "Reparaturwarteschlange", ro: "Coadă de Reparații" })}</span>
              <span>{activeSlots.length} / {maxSlots}</span>
            </h3>
            
            <div className="space-y-2">
              {state.repairBay.repairSlots.map((slot, idx) => {
                if (slot) {
                  const progress = Math.min(100, Math.max(0, ((now - slot.startedAt) / (slot.completesAt - slot.startedAt)) * 100));
                  const timeRemaining = Math.max(0, slot.completesAt - now);
                  
                  return (
                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-emerald-500/20">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="p-1.5 rounded-md bg-black/40 text-emerald-400">
                          {UNIT_ICONS[slot.unitId]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-xs font-black uppercase text-white truncate">{localize(UNIT_NAMES[slot.unitId])}</span>
                            <span className="text-[10px] text-emerald-300 font-black">×{slot.batchSize}</span>
                            <span className="text-[10px] text-white/40 ml-auto">LVL {slot.targetLevel}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-black/50 rounded-full overflow-hidden">
                              <motion.div className="h-full bg-emerald-400" initial={{ width: `${progress}%` }} animate={{ width: `${progress}%` }} />
                            </div>
                            <span className="text-[9px] font-mono text-emerald-200/80 w-10 text-right">{formatDuration(timeRemaining)}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCancelRepair(idx)}
                        className="shrink-0 px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-[9px] font-black uppercase tracking-widest text-rose-300 transition"
                      >
                        {localize({ en: "Cancel", hu: "Mégse", de: "Abbruch", ro: "Anulare" })}
                      </button>
                    </div>
                  );
                } else if (idx < maxSlots) {
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 border-dashed flex items-center justify-center text-white/30 text-[10px] font-black uppercase tracking-widest h-[58px]">
                      {localize({ en: "Empty Slot", hu: "Üres Hely", de: "Leerer Platz", ro: "Loc Gol" })}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Action Area */}
          <div className="p-4 flex-1 flex flex-col justify-end">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-emerald-300/50 mb-3">
              {localize({ en: "Initiate Repair", hu: "Javítás Indítása", de: "Reparatur Einleiten", ro: "Inițiază Reparația" })}
            </h3>
            
            <div className="bg-black/50 border border-white/10 rounded-xl p-4">
              {!selectedUnit ? (
                <div className="text-center py-6 text-white/30 text-xs italic">
                  {localize({ en: "Select a wounded unit from the list to begin repairs.", hu: "Válassz egy sebesült egységet a listából a javításhoz.", de: "Wähle eine verwundete Einheit aus der Liste, um Reparaturen zu beginnen.", ro: "Selectează o unitate rănită din listă pentru a începe reparațiile." })}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="text-emerald-400">{UNIT_ICONS[selectedUnit]}</div>
                      <div>
                        <div className="text-sm font-black uppercase text-white/90">{localize(UNIT_NAMES[selectedUnit])}</div>
                        <div className="text-[10px] text-white/50">LVL {selectedLevel}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-black text-white/40">Available</div>
                      <div className="text-sm font-black text-rose-400">{maxRepairable}</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[10px] uppercase font-black tracking-widest text-emerald-300/70">Repair Count</label>
                      <span className="text-[10px] font-black text-emerald-300">{repairCount}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setRepairCount(Math.max(1, repairCount - 1))} disabled={repairCount <= 1} className="h-8 w-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 font-bold">-</button>
                      <input 
                        type="range" 
                        min="1" 
                        max={maxRepairable || 1} 
                        value={repairCount} 
                        onChange={e => setRepairCount(parseInt(e.target.value))}
                        className="flex-1 accent-emerald-500"
                        disabled={maxRepairable <= 1}
                      />
                      <button onClick={() => setRepairCount(Math.min(maxRepairable, repairCount + 1))} disabled={repairCount >= maxRepairable} className="h-8 w-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 font-bold">+</button>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg p-2 flex flex-wrap gap-2">
                    <span className="text-[9px] uppercase font-black tracking-widest text-white/40 mr-2 flex items-center">Cost:</span>
                    {Object.entries(repairCost).map(([matId, amount]) => {
                      if (!amount) return null;
                      const hasAmt = (inventory[matId as keyof typeof inventory] ?? 0) >= amount;
                      return (
                        <div key={matId} className={`px-1.5 py-0.5 rounded text-[9px] font-black border ${hasAmt ? "border-white/10 text-white/60" : "border-rose-500/30 text-rose-400"}`}>
                          {matId.split('_')[0].substring(0,2).toUpperCase()} {amount}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleStartRepair}
                    disabled={!canAfford || emptySlotsCount === 0 || maxRepairable === 0}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-white/5 disabled:text-white/30 border-b-2 border-emerald-800 disabled:border-transparent text-white font-black uppercase tracking-widest text-xs transition"
                  >
                    {emptySlotsCount === 0 
                      ? localize({ en: "No Empty Slots", hu: "Nincs Üres Hely", de: "Keine leeren Plätze", ro: "Fără Locuri Libere" }) 
                      : !canAfford 
                        ? localize({ en: "Insufficient Materials", hu: "Nincs Elég Anyag", de: "Nicht genug Materialien", ro: "Materiale Insuficiente" })
                        : localize({ en: "Start Repair", hu: "Javítás Indítása", de: "Reparatur Starten", ro: "Start Reparație" })}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="px-4 py-2 bg-black/60 border-t border-white/10 text-[9px] font-black uppercase tracking-widest flex justify-between text-white/40">
        <div className="flex gap-4">
          <span>Repaired: <span className="text-emerald-400">{state.commander.metrics.unitsRepaired}</span></span>
        </div>
      </div>
    </div>
  );
}