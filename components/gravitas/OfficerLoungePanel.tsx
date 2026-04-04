"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Medal, Shield, Crosshair, Zap, ArrowRight, Skull, HeartPulse, UserPlus, Info } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import { OFFICER_TRAITS } from "@/lib/gravitas/sim/officers/engine";
import { OFFICER_CONFIG } from "@/lib/gravitas/economy";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";

interface OfficerLoungePanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const FACTION_COLORS: Record<FactionId, string> = {
  korgath: "text-red-400 bg-red-400/10 border-red-400/30",
  velari: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  drex: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  synthoid: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  noma: "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/30",
};

export default function OfficerLoungePanel({ state, doAction, onClose, lang }: OfficerLoungePanelProps) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(168,85,247,0.15)"; // Purple tone for officers

  const handleRecruit = (officerId: string) => {
    doAction({ type: "RECRUIT_OFFICER", officerId }, dispatchColor);
  };

  const handleDismiss = (officerId: string) => {
    doAction({ type: "DISMISS_OFFICER", officerId }, "rgba(244,63,94,0.15)");
  };

  const timeUntilRefresh = Math.max(0, (state.officers.lastRecruitRefresh + OFFICER_CONFIG.recruitRefreshMs) - now);
  
  const h = Math.floor(timeUntilRefresh / 3600000);
  const m = Math.floor((timeUntilRefresh % 3600000) / 60000);
  const s = Math.floor((timeUntilRefresh % 60000) / 1000);
  const formattedRefresh = `${h}h ${m}m ${s}s`;

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/20 bg-black/40">
        <div className="flex items-center gap-3">
          <Medal size={20} className="text-purple-400" />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Officer Lounge", hu: "Tisztiszék", de: "Offiziersmesse", ro: "Clubul Ofițerilor" })}
            </h2>
            <p className="text-[10px] text-white/60">Tactical Command Personnel</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        
        {/* Active Officers */}
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
            <span>{localize({ en: "Active Officers", hu: "Aktív Tisztek", de: "Aktive Offiziere", ro: "Ofițeri Activi" })}</span>
            <div className="h-px bg-purple-500/10 flex-1" />
            <span>{state.officers.active.length} / {OFFICER_CONFIG.maxActiveOfficers}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {state.officers.active.length === 0 ? (
              <div className="col-span-full py-8 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                {localize({ en: "No active officers assigned to duty.", hu: "Nincsenek aktív tisztek beosztva.", de: "Keine aktiven Offiziere im Dienst.", ro: "Niciun ofițer activ la datorie." })}
              </div>
            ) : (
              state.officers.active.map(officer => {
                const isWounded = officer.status === "wounded";
                const traitData = OFFICER_TRAITS[officer.trait];
                const xpProgress = (officer.xp % 100) / 100;
                
                let healTimeRemaining = 0;
                if (isWounded) {
                  healTimeRemaining = Math.max(0, officer.availableAt - now);
                }

                return (
                  <div key={officer.id} className={`p-4 rounded-xl border transition-all relative overflow-hidden ${isWounded ? "border-rose-500/30 bg-rose-950/20" : "border-purple-500/30 bg-purple-900/10"}`}>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl shrink-0 ${FACTION_COLORS[officer.factionId]}`}>
                        {officer.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-black text-white uppercase tracking-widest truncate">{officer.name}</h4>
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${isWounded ? "bg-rose-500/20 text-rose-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                            {isWounded ? "Wounded" : "Ready"}
                          </span>
                        </div>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest mb-3">
                          {localize(GALAXY_FACTIONS[officer.factionId].name)}
                        </div>

                        {/* Trait & Stats */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2 bg-black/40 rounded border border-white/5">
                            <div className="text-[9px] uppercase text-white/40 mb-1">Trait</div>
                            <div className="text-xs font-bold text-purple-300">{localize(traitData.name)}</div>
                            <div className="text-[9px] text-purple-200/70">{localize(traitData.description)}</div>
                          </div>
                          <div className="p-2 bg-black/40 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[9px] uppercase text-white/40">Level</span>
                              <span className="text-xs font-bold text-cyan-300">{officer.level}</span>
                            </div>
                            <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5 mt-auto">
                              <div className="h-full bg-cyan-500" style={{ width: `${xpProgress * 100}%` }} />
                            </div>
                          </div>
                        </div>

                        {isWounded && healTimeRemaining > 0 && (
                          <div className="mb-3 text-[10px] text-rose-300 flex items-center gap-1.5">
                            <HeartPulse size={12} className="animate-pulse" />
                            {localize({ en: "Recovery time:", hu: "Felépülési idő:", de: "Erholungszeit:", ro: "Timp recuperare:" })} 
                            <span className="font-mono font-bold">{Math.ceil(healTimeRemaining / 60000)}m</span>
                          </div>
                        )}

                        <div className="flex justify-end">
                          <button
                            onClick={() => handleDismiss(officer.id)}
                            className="text-[10px] uppercase font-black tracking-widest text-rose-400 hover:text-rose-300 transition"
                          >
                            {localize({ en: "Dismiss", hu: "Elbocsátás", de: "Entlassen", ro: "Concediere" })}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Recruitment Board */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 flex items-center gap-2">
              <span>{localize({ en: "Recruitment Board", hu: "Toborzótábla", de: "Rekrutierungsbrett", ro: "Panou Recrutare" })}</span>
              <div className="h-px w-8 bg-purple-500/10" />
            </h3>
            <div className="text-[10px] text-white/40 font-mono">
              Refresh: {formattedRefresh}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {state.officers.recruits.map(recruit => {
              const traitData = OFFICER_TRAITS[recruit.trait];
              const canAfford = state.resources.supply >= OFFICER_CONFIG.baseRecruitCost;
              const hasRoom = state.officers.active.length < OFFICER_CONFIG.maxActiveOfficers;

              return (
                <div key={recruit.id} className="p-3 flex flex-col bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded flex items-center justify-center font-black text-lg ${FACTION_COLORS[recruit.factionId]}`}>
                      {recruit.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-white/90">{recruit.name}</div>
                      <div className="text-[9px] text-white/50 uppercase">{localize(GALAXY_FACTIONS[recruit.factionId].name)}</div>
                    </div>
                  </div>

                  <div className="text-[10px] text-purple-200/80 mb-4 bg-purple-900/20 p-2 rounded">
                    <span className="font-bold block mb-0.5">{localize(traitData.name)}</span>
                    <span className="opacity-80">{localize(traitData.description)}</span>
                  </div>

                  <button
                    onClick={() => handleRecruit(recruit.id)}
                    disabled={!canAfford || !hasRoom}
                    className="mt-auto w-full py-2 bg-purple-600/20 hover:bg-purple-600/40 disabled:bg-white/5 disabled:opacity-50 border border-purple-500/30 text-purple-300 text-[10px] font-black uppercase tracking-widest transition flex items-center justify-center gap-2 rounded-lg"
                  >
                    <UserPlus size={14} />
                    {OFFICER_CONFIG.baseRecruitCost} SU
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}