"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Shield, Send, AlertTriangle, Fingerprint, Activity, Clock, Zap, Cpu, Ghost } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { EspionageIntelAction, EspionageMissionType } from "@/lib/gravitas/sim/espionage/types";
import { ESPIONAGE_CONFIG } from "@/lib/gravitas/economy";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";

interface EspionagePanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const FACTIONS: { id: FactionId; name: string }[] = [
  { id: "korgath", name: "Korgath" },
  { id: "velari", name: "Velari" },
  { id: "drex", name: "Drex" },
  { id: "synthoid", name: "Synthoid" },
  { id: "noma", name: "Noma" },
];

const MISSION_TYPES: { id: EspionageMissionType; name: LocalizedString; desc: LocalizedString }[] = [
  { id: "infiltrate", name: { en: "Infiltrate", hu: "Beépülés", de: "Infiltrieren", ro: "Infiltrare" }, desc: { en: "Standard intel gathering.", hu: "Normál intel gyűjtés.", de: "Standard Intel-Sammlung.", ro: "Colectare standard de intel." } },
  { id: "deepCover", name: { en: "Deep Cover", hu: "Mély Beépülés", de: "Tiefe Deckung", ro: "Acoperire Profundă" }, desc: { en: "High yield, high exposure risk.", hu: "Magas hozam, nagy lebukási esély.", de: "Hoher Ertrag, hohes Entdeckungsrisiko.", ro: "Randament ridicat, risc mare de expunere." } },
  { id: "sabotage", name: { en: "Sabotage", hu: "Szabotázs", de: "Sabotage", ro: "Sabotaj" }, desc: { en: "Disrupt operations.", hu: "Műveletek megzavarása.", de: "Operationen stören.", ro: "Întreruperea operațiunilor." } },
  { id: "intercept", name: { en: "Intercept", hu: "Elfogás", de: "Abfangen", ro: "Intercepție" }, desc: { en: "Intercept communications.", hu: "Kommunikáció lehallgatása.", de: "Kommunikation abfangen.", ro: "Interceptarea comunicațiilor." } },
];

const INTEL_ACTIONS: { id: EspionageIntelAction; name: LocalizedString; cost: number; desc: LocalizedString; icon: React.ReactNode; requiresFaction?: boolean }[] = [
  { id: "revealBuilding", name: { en: "Reveal Building", hu: "Épület Feltárás", de: "Gebäude Aufdecken", ro: "Dezvăluie Clădirea" }, cost: ESPIONAGE_CONFIG.intelCosts.revealBuilding, desc: { en: "Gain full scout report for a building.", hu: "Teljes felderítési jelentés egy épületről.", de: "Vollständiger Spähbericht für ein Gebäude.", ro: "Obține un raport complet de cercetare." }, icon: <Eye size={14} /> },
  { id: "weakenDefense", name: { en: "Weaken Defense", hu: "Védelem Gyengítés", de: "Verteidigung Schwächen", ro: "Slăbește Apărarea" }, cost: ESPIONAGE_CONFIG.intelCosts.weakenDefense, desc: { en: "Reduce target faction armor by 20%.", hu: "Célpont páncélzatának 20%-os csökkentése.", de: "Reduziert Ziel-Rüstung um 20%.", ro: "Reduce armura facțiunii țintă cu 20%." }, icon: <Shield size={14} /> },
  { id: "factionSecret", name: { en: "Faction Secret", hu: "Frakció Titok", de: "Fraktionsgeheimnis", ro: "Secret de Facțiune" }, cost: ESPIONAGE_CONFIG.intelCosts.factionSecret, desc: { en: "Improve reputation with a faction (+15).", hu: "Reputáció javítása (+15) egy frakcióval.", de: "Ruf bei einer Fraktion verbessern (+15).", ro: "Îmbunătățește reputația cu o facțiune (+15)." }, icon: <Fingerprint size={14} />, requiresFaction: true },
  { id: "earlyWarning", name: { en: "Early Warning", hu: "Korai Figyelmeztetés", de: "Frühwarnung", ro: "Avertizare Timpurie" }, cost: ESPIONAGE_CONFIG.intelCosts.earlyWarning, desc: { en: "+2h prep time for weekly mission.", hu: "+2 óra felkészülési idő a heti küldetéshez.", de: "+2h Vorbereitungszeit für wöchentliche Mission.", ro: "+2h timp de pregătire pentru misiunea săptămânală." }, icon: <Clock size={14} /> },
  { id: "sabotageSupply", name: { en: "Sabotage Supply", hu: "Ellátás Szabotázs", de: "Nachschub Sabotieren", ro: "Sabotaj Aprovizionare" }, cost: ESPIONAGE_CONFIG.intelCosts.sabotageSupply, desc: { en: "Target faction trade offers cost 50% more.", hu: "A célpont kereskedelmi ajánlatai 50%-kal drágábbak.", de: "Ziele-Handelsangebote kosten 50% mehr.", ro: "Ofertele de comerț ale țintei costă cu 50% mai mult." }, icon: <Activity size={14} /> },
];

function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const h = Math.floor(ms / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function EspionagePanel({ state, doAction, onClose, lang }: EspionagePanelProps) {
  const [now, setNow] = useState(Date.now());
  const [selectedFaction, setSelectedFaction] = useState<FactionId>("korgath");
  const [selectedType, setSelectedType] = useState<EspionageMissionType>("infiltrate");
  const [deployCount, setDeployCount] = useState(ESPIONAGE_CONFIG.minWraithsPerMission);
  const [targetActionFaction, setTargetActionFaction] = useState<FactionId>("korgath");

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(160,60,255,0.15)";

  const wraithEntries = state.warRoom.garrison.wraith ?? [];
  const totalWraiths = wraithEntries.reduce((sum, e) => sum + e.count, 0);

  const handleDeploy = () => {
    doAction({ type: "DEPLOY_SPIES", targetFactionId: selectedFaction, missionType: selectedType, wraithCount: deployCount }, dispatchColor);
  };

  const handleExtract = (missionId: string) => {
    doAction({ type: "EXTRACT_SPIES", missionId }, "rgba(244,63,94,0.15)");
  };

  const handleSpendIntel = (action: EspionageIntelAction) => {
    const requiresFaction = INTEL_ACTIONS.find(a => a.id === action)?.requiresFaction;
    doAction({ type: "SPEND_INTEL", action, extraArg: requiresFaction ? targetActionFaction : undefined }, dispatchColor);
  };

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/20 bg-black/40">
        <div className="flex items-center gap-3">
          <Eye size={20} className="text-purple-400" />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Spy Network", hu: "Kémhálózat", de: "Spionagenetzwerk", ro: "Rețea de Spionaj" })}
            </h2>
            <p className="text-[10px] text-white/60">Ghost Squadron Command</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-200 text-[11px] font-black">
            INTEL: {state.espionage.totalIntel}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Active Missions */}
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
            <span>{localize({ en: "Active Operations", hu: "Aktív Műveletek", de: "Aktive Operationen", ro: "Operațiuni Active" })}</span>
            <div className="h-px bg-purple-500/10 flex-1" />
            <span>{state.espionage.missions.length} / {ESPIONAGE_CONFIG.maxActiveMissions}</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {state.espionage.missions.length === 0 ? (
              <div className="col-span-full py-6 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                {localize({ en: "No active field operatives.", hu: "Nincsenek aktív ügynökök a terepen.", de: "Keine aktiven Feldagenten.", ro: "Niciun agent de teren activ." })}
              </div>
            ) : (
              state.espionage.missions.map(mission => {
                const isDeploying = mission.phase === "deploying";
                const isActive = mission.phase === "active";
                const isExposed = mission.phase === "exposed";
                const isEnded = mission.phase === "extracted" || mission.phase === "lost";
                
                const timeRemaining = Math.max(0, mission.activeAt - now);
                const timeElapsed = Math.max(0, now - mission.startedAt);
                
                return (
                  <div key={mission.id} className={`p-4 rounded-xl border transition-all ${isExposed ? "border-rose-500 bg-rose-950/20" : isActive ? "border-emerald-500/30 bg-white/5" : isDeploying ? "border-cyan-500/30 bg-white/5" : "border-white/5 bg-black/40 opacity-60"}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm font-black uppercase text-white/90">{mission.targetFactionId}</div>
                        <div className="text-[10px] text-white/50">{localize(MISSION_TYPES.find(t => t.id === mission.type)?.name || {en:"?"} as any)} • {mission.wraithCount} Wraiths</div>
                      </div>
                      <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${isExposed ? "bg-rose-500 text-white animate-pulse" : isActive ? "bg-emerald-500/20 text-emerald-300" : isDeploying ? "bg-cyan-500/20 text-cyan-300" : "bg-white/10 text-white/50"}`}>
                        {mission.phase}
                      </div>
                    </div>
                    
                    {isDeploying && (
                      <div className="flex items-center gap-2 text-cyan-200/80 text-xs font-mono mb-4">
                        <Send size={14} className="animate-pulse" /> Deploying: {formatDuration(timeRemaining)}
                      </div>
                    )}
                    
                    {isActive && (
                      <div className="flex items-center gap-2 text-emerald-200/80 text-xs font-mono mb-4">
                        <Activity size={14} /> Active: {formatDuration(timeElapsed)}
                      </div>
                    )}
                    
                    {(isActive || isExposed) && (
                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-white/50">Exposure Risk</span>
                            <span className={mission.exposureRisk > 70 ? "text-rose-400 font-bold" : "text-white/70"}>{Math.round(mission.exposureRisk)}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-black border border-white/10 overflow-hidden relative">
                            <motion.div 
                              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-500 via-yellow-500 to-rose-500" 
                              initial={{ width: `${mission.exposureRisk}%` }} 
                              animate={{ width: `${mission.exposureRisk}%` }} 
                            />
                            <div className="absolute left-[80%] top-0 bottom-0 w-px bg-white/50 z-10" />
                          </div>
                        </div>
                        <div className="flex justify-between text-xs font-black text-purple-300">
                          <span>Intel Gathered</span>
                          <span>+{mission.intelGathered}</span>
                        </div>
                      </div>
                    )}
                    
                    {!isEnded && (
                      <button
                        onClick={() => handleExtract(mission.id)}
                        className={`w-full py-2 rounded-lg font-black uppercase tracking-widest text-[10px] transition-all ${isExposed ? "bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]" : "bg-white/5 hover:bg-white/10 border border-white/10 text-white/70"}`}
                      >
                        {isExposed ? localize({ en: "Emergency Extract!", hu: "SÜRGŐS KIVONÁS!", de: "Notfall-Extraktion!", ro: "Extracție de Urgență!" }) : localize({ en: "Extract Agents", hu: "Kivonás", de: "Agenten extrahieren", ro: "Extrage Agenții" })}
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Deploy New Mission */}
        {state.espionage.missions.length < ESPIONAGE_CONFIG.maxActiveMissions && (
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
              <span>{localize({ en: "New Operation", hu: "Új Művelet", de: "Neue Operation", ro: "Nouă Operațiune" })}</span>
              <div className="h-px bg-purple-500/10 flex-1" />
            </h3>
            
            <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70 mb-2">Target Faction</label>
                  <select 
                    value={selectedFaction} 
                    onChange={e => setSelectedFaction(e.target.value as FactionId)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    {FACTIONS.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70 mb-2">Mission Type</label>
                  <select 
                    value={selectedType} 
                    onChange={e => setSelectedType(e.target.value as EspionageMissionType)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    {MISSION_TYPES.map(t => <option key={t.id} value={t.id}>{localize(t.name)}</option>)}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70">Assigned Wraiths</label>
                  <span className="text-[10px] text-white/50">Available: <span className="text-white font-bold">{totalWraiths}</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setDeployCount(Math.max(ESPIONAGE_CONFIG.minWraithsPerMission, deployCount - 1))}
                    disabled={deployCount <= ESPIONAGE_CONFIG.minWraithsPerMission}
                    className="h-8 w-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 flex items-center justify-center font-bold"
                  >-</button>
                  <div className="flex-1">
                    <input 
                      type="range" 
                      min={ESPIONAGE_CONFIG.minWraithsPerMission} 
                      max={Math.max(ESPIONAGE_CONFIG.minWraithsPerMission, totalWraiths)} 
                      value={deployCount} 
                      onChange={e => setDeployCount(parseInt(e.target.value))}
                      className="w-full accent-purple-500"
                      disabled={totalWraiths < ESPIONAGE_CONFIG.minWraithsPerMission}
                    />
                  </div>
                  <button 
                    onClick={() => setDeployCount(Math.min(totalWraiths, deployCount + 1))}
                    disabled={deployCount >= totalWraiths}
                    className="h-8 w-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 flex items-center justify-center font-bold"
                  >+</button>
                  <div className="w-10 text-center font-black text-purple-300">{deployCount}</div>
                </div>
              </div>
              
              <button
                onClick={handleDeploy}
                disabled={totalWraiths < ESPIONAGE_CONFIG.minWraithsPerMission}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-white/5 disabled:text-white/30 text-white font-black uppercase tracking-widest text-xs transition"
              >
                {localize({ en: "Deploy Agents", hu: "Ügynökök Bevetése", de: "Agenten Entsenden", ro: "Desfășoară Agenții" })}
              </button>
            </div>
          </div>
        )}

        {/* Intel Expenditure */}
        {state.espionage.totalIntel > 0 && (
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
              <span>{localize({ en: "Intel Operations", hu: "Hírszerzési Műveletek", de: "Intel-Operationen", ro: "Operațiuni de Intel" })}</span>
              <div className="h-px bg-purple-500/10 flex-1" />
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {INTEL_ACTIONS.map(action => {
                const canAfford = state.espionage.totalIntel >= action.cost;
                return (
                  <button
                    key={action.id}
                    onClick={() => canAfford && handleSpendIntel(action.id)}
                    disabled={!canAfford}
                    className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${canAfford ? "border-purple-500/30 bg-purple-900/20 hover:bg-purple-800/30 cursor-pointer" : "border-white/5 bg-white/5 opacity-50 cursor-not-allowed"}`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className="flex items-center gap-2 text-purple-300">
                        {action.icon}
                        <span className="font-black text-xs uppercase">{localize(action.name)}</span>
                      </div>
                      <div className={`text-[10px] font-black ${canAfford ? "text-purple-200" : "text-rose-400"}`}>
                        -{action.cost} INTEL
                      </div>
                    </div>
                    <div className="text-[10px] text-white/60 flex-1">
                      {localize(action.desc)}
                    </div>
                    {action.requiresFaction && canAfford && (
                      <select 
                        value={targetActionFaction}
                        onChange={e => setTargetActionFaction(e.target.value as FactionId)}
                        onClick={e => e.stopPropagation()}
                        className="mt-2 w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-[10px] text-white focus:outline-none"
                      >
                        {FACTIONS.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                      </select>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}