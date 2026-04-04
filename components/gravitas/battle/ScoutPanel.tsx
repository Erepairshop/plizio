"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  Radar, 
  ChevronLeft, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Info,
  ShieldAlert,
  Sword,
  Compass,
  Megaphone,
  Zap,
  Activity
} from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import type { ScoutReport } from "@/lib/gravitas/sim/battle/types";
import type { BuildingDescriptor } from "@/lib/gravitas/sim/battle/buildingDescriptors";
import type { Faction } from "@/lib/gravitas/sim/battle/factions";

interface ScoutPanelProps {
  buildingId: string;
  descriptor: BuildingDescriptor;
  faction: Faction;
  scoutReport: ScoutReport;
  state: StarholdState;
  onStartScout: (buildingId: string) => void;
  onClose: () => void;
  lang: string;
}

type Lang = "en" | "hu" | "de" | "ro";

function localize(lang: string, ls: LocalizedString): string {
  const l = lang as Lang;
  return ls[l] ?? ls.en;
}

function formatTime(ms: number): string {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function ScoutPanel({
  buildingId,
  descriptor,
  faction,
  scoutReport,
  state,
  onStartScout,
  onClose,
  lang
}: ScoutPanelProps) {
  const [now, setNow] = useState(Date.now());
  const activeScout = state.battleState.activeScout;
  const isScoutingThis = activeScout?.buildingId === buildingId;
  const availableDrones = state.warRoom.garrison.scout_drone ?? 0;

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const intel = scoutReport.intelLevel;
  
  // Reveal order thresholds
  const reveals = [
    { threshold: 0, label: { en: "Condition", hu: "Állapot", de: "Zustand", ro: "Condiție" }, value: descriptor.condition.label },
    { threshold: 0, label: { en: "Material", hu: "Anyag", de: "Material", ro: "Material" }, value: descriptor.material.label },
    { threshold: 25, label: { en: "Faction", hu: "Frakció", de: "Fraktion", ro: "Facțiune" }, value: faction.name },
    { threshold: 40, label: { en: "Weaponry", hu: "Fegyverzet", de: "Bewaffnung", ro: "Armament" }, value: descriptor.weaponry.label },
    { threshold: 50, label: { en: "Communication", hu: "Kommunikáció", de: "Kommunikation", ro: "Comunicare" }, value: descriptor.comms.label },
    { threshold: 60, label: { en: "Tactic Style", hu: "Taktikai stílus", de: "Taktikstil", ro: "Stil tactic" }, value: descriptor.tacticStyle.label },
  ];

  const canStart = availableDrones > 0 && !state.battleState.activeScout;

  const remainingMs = isScoutingThis ? Math.max(0, activeScout.completesAt - now) : 0;
  const progress = isScoutingThis ? 1 - (remainingMs / (activeScout.completesAt - activeScout.startedAt)) : 0;

  const intelBonus = Math.round(15 + (state.moduleLevels.sensor - 1) * 2.5);

  return (
    <div className="flex flex-col h-full w-full bg-[#050a16] text-white p-4 rounded-[24px] border border-cyan-300/20 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Radar className="text-cyan-400" size={18} />
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            {localize(lang, { en: "Scouting", hu: "Felderítés", de: "Aufklärung", ro: "Recunoaștere" })}
          </h2>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition">
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="space-y-5">
        {/* Intel Progress */}
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Eye size={14} className="text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300/70">Strategic Intel</span>
            </div>
            <span className="text-xs font-black text-cyan-100">{intel}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
              animate={{ width: `${intel}%` }}
              transition={{ type: "spring", damping: 20, stiffness: 80 }}
            />
          </div>
        </div>

        {/* Revealed Data */}
        <div className="space-y-2">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1">Intelligence Database</div>
          <div className="grid grid-cols-1 gap-1.5">
            {reveals.map((item, idx) => {
              const isRevealed = intel >= item.threshold;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                    isRevealed ? "bg-white/5 border-white/10" : "bg-black/20 border-white/5 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isRevealed ? (
                      <CheckCircle2 size={14} className="text-emerald-400" />
                    ) : (
                      <Lock size={14} className="text-white/20" />
                    )}
                    <span className={`text-[11px] font-bold ${isRevealed ? "text-white/80" : "text-white/40"}`}>
                      {localize(lang, item.label)}
                    </span>
                  </div>
                  <div className={`text-[11px] font-bold truncate max-w-[140px] text-right ${isRevealed ? "text-cyan-100" : "text-white/10 italic"}`}>
                    {isRevealed ? localize(lang, item.value) : `[${localize(lang, { en: "Locked", hu: "Rejtett", de: "Gesperrt", ro: "Blocat" })}]`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scout Action */}
        <div className="mt-auto pt-4 border-t border-white/10">
          {isScoutingThis ? (
            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">Drone Active</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-white/80">
                  <Clock size={12} />
                  <span>{formatTime(remainingMs)}</span>
                </div>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400" style={{ width: `${progress * 100}%` }} />
              </div>
              <p className="text-[10px] text-white/50 italic leading-tight text-center">
                {localize(lang, { 
                  en: "Probe is mapping structural vulnerabilities...", 
                  hu: "A szonda a szerkezeti gyengeségeket térképezi fel...", 
                  de: "Sonde kartiert strukturelle Schwachstellen...", 
                  ro: "Sonda mapează vulnerabilitățile structurale..." 
                })}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <Plus size={14} className="text-amber-400" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300/70">Deployment</span>
                </div>
                <span className={`text-[10px] font-bold ${availableDrones > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {availableDrones} {localize(lang, { en: "Drones ready", hu: "Drón kész", de: "Drohnen bereit", ro: "Drone gata" })}
                </span>
              </div>

              <button
                disabled={!canStart}
                onClick={() => onStartScout(buildingId)}
                className={`w-full py-3.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                  canStart 
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_8px_24px_rgba(34,211,238,0.2)] hover:scale-[1.02] active:scale-[0.98]" 
                    : "bg-white/5 text-white/20 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Radar size={16} />
                  <span className="text-xs font-black uppercase tracking-[0.2em]">
                    {localize(lang, { en: "Launch Scout Probe", hu: "Felderítő szonda indítása", de: "Aufklärungssonde starten", ro: "Lansează sonda" })}
                  </span>
                </div>
                <div className="text-[9px] font-bold opacity-60 uppercase tracking-widest">
                  ~30 min | +{intelBonus}% Intel
                </div>
              </button>

              {availableDrones === 0 && (
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-rose-500/5 border border-rose-500/20">
                  <Info size={12} className="text-rose-400 mt-0.5 shrink-0" />
                  <p className="text-[9px] text-rose-200/70 leading-relaxed italic">
                    {localize(lang, { 
                      en: "No scout drones available in the War Room. Fabricate more to continue scouting.", 
                      hu: "Nincs elérhető felderítő drón. Gyárts újakat a War Room-ban a folytatáshoz.", 
                      de: "Keine Aufklärungsdrohnen verfügbar. Stelle mehr im War Room her.", 
                      ro: "Nu sunt drone disponibile. Fabrică mai multe în War Room." 
                    })}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
