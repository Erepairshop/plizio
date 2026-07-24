"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Medal, Shield, Crosshair, Zap, ArrowRight, Skull, HeartPulse, UserPlus, Info } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import { OFFICER_ASSIGNMENTS, OFFICER_MISSIONS, OFFICER_TRAITS } from "@/lib/gravitas/sim/officers/engine";
import type { OfficerAssignment, OfficerMissionType } from "@/lib/gravitas/sim/officers/types";
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
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(168,85,247,0.15)"; // Purple tone for officers

  const handleRecruit = (officerId: string) => {
    doAction({ type: "RECRUIT_OFFICER", officerId }, dispatchColor);
  };

  const handleDismiss = (officerId: string) => {
    doAction({ type: "DISMISS_OFFICER", officerId }, "rgba(244,63,94,0.15)");
  };

  const handleAssignment = (officerId: string, assignmentId: OfficerAssignment | null) => {
    doAction({ type: "ASSIGN_OFFICER", officerId, assignmentId }, dispatchColor);
  };

  const handleMission = (officerId: string, missionType: OfficerMissionType) => {
    doAction({ type: "SEND_OFFICER_MISSION", officerId, missionType }, "rgba(245,158,11,0.15)");
  };

  const refreshTicks = Math.floor(OFFICER_CONFIG.recruitRefreshMs / 1000);
  const timeUntilRefreshTicks = Math.max(0, (state.officers.lastRecruitRefreshTick + refreshTicks) - state.tick);
  
  const h = Math.floor(timeUntilRefreshTicks / 3600);
  const m = Math.floor((timeUntilRefreshTicks % 3600) / 60);
  const s = Math.floor(timeUntilRefreshTicks % 60);
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

      <div className="border-b border-purple-500/10 bg-white/5 px-4 py-3">
        <p className="max-w-4xl text-[11px] leading-relaxed text-white/60">
          {localize({
            en: "Recruit officers here, assign them to duty, and dismiss them when needed. Their traits add passive bonuses to battles, logistics, and scouting.",
            hu: "Itt toborozhatsz tiszteket, beoszthatod őket szolgálatra, és szükség esetén elbocsáthatod őket. Tulajdonságaik passzív bónuszokat adnak a csatákhoz, a logisztikához és a felderítéshez.",
            de: "Hier rekrutierst du Offiziere, weist sie dem Dienst zu und entlässt sie bei Bedarf. Ihre Eigenschaften geben passive Boni für Kämpfe, Logistik und Aufklärung.",
            ro: "Aici recrutezi ofițeri, îi poți pune în serviciu și îi poți concedia când e nevoie. Trăsăturile lor oferă bonusuri pasive pentru lupte, logistică și cercetare.",
          })}
        </p>
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
                const isOnMission = officer.missionStatus === "on_mission";
                const traitData = OFFICER_TRAITS[officer.trait];
                const xpProgress = (officer.xp % 100) / 100;
                const missionTicksRemaining = officer.currentMission
                  ? Math.max(0, officer.currentMission.endTick - state.tick)
                  : 0;
                
                let healTicksRemaining = 0;
                if (isWounded) {
                  healTicksRemaining = Math.max(0, officer.availableAtTick - state.tick);
                }

                return (
                  <div key={officer.id} className={`p-4 rounded-xl border transition-all relative overflow-hidden ${isWounded ? "border-rose-500/30 bg-rose-950/20" : isOnMission ? "border-amber-500/30 bg-amber-950/20" : "border-purple-500/30 bg-purple-900/10"}`}>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl shrink-0 ${FACTION_COLORS[officer.factionId]}`}>
                        {officer.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-black text-white uppercase tracking-widest truncate">{officer.name}</h4>
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${isWounded ? "bg-rose-500/20 text-rose-400" : isOnMission ? "bg-amber-500/20 text-amber-300" : "bg-emerald-500/20 text-emerald-400"}`}>
                            {isWounded
                              ? localize({ en: "Wounded", hu: "Sérült", de: "Verwundet", ro: "Rănit" })
                              : isOnMission
                                ? `${Math.ceil(missionTicksRemaining / 60)}m`
                                : localize({ en: "Ready", hu: "Kész", de: "Bereit", ro: "Pregătit" })}
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

                        {isWounded && healTicksRemaining > 0 ? (
                          <div className="mb-3 text-[10px] text-rose-300 flex items-center gap-1.5">
                            <HeartPulse size={12} className="animate-pulse" />
                            {localize({ en: "Recovery time:", hu: "Felépülési idő:", de: "Erholungszeit:", ro: "Timp recuperare:" })} 
                            <span className="font-mono font-bold">
                              {healTicksRemaining >= 60 ? `${Math.ceil(healTicksRemaining / 60)}m` : `${healTicksRemaining}s`}
                            </span>
                          </div>
                        ) : null}

                        {!isOnMission && (
                          <div className="mb-3">
                            <div className="mb-1 text-[9px] font-black uppercase tracking-widest text-white/40">
                              {localize({ en: "Assignment", hu: "Beosztás", de: "Zuweisung", ro: "Alocare" })}
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {OFFICER_ASSIGNMENTS.map(assignment => {
                                const selected = officer.assignment === assignment.id;
                                const occupiedBy = state.officers.active.find(
                                  candidate => candidate.id !== officer.id && candidate.assignment === assignment.id,
                                );
                                return (
                                  <button
                                    key={assignment.id}
                                    type="button"
                                    disabled={isWounded}
                                    onClick={() => handleAssignment(officer.id, selected ? null : assignment.id)}
                                    className={`rounded border px-2 py-1 text-left text-[9px] transition disabled:opacity-40 ${selected ? "border-violet-400/50 bg-violet-500/20 text-violet-100" : "border-white/10 bg-black/30 text-white/60 hover:bg-white/10"}`}
                                  >
                                    <span className="block font-bold">{localize(assignment.label)}</span>
                                    <span className="block truncate font-mono text-[8px] opacity-60">
                                      {occupiedBy ? occupiedBy.name : assignment.bonus}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {!isWounded && !isOnMission && (
                          <div className="mb-3">
                            <div className="mb-1 text-[9px] font-black uppercase tracking-widest text-white/40">
                              {localize({ en: "Mission", hu: "Küldetés", de: "Mission", ro: "Misiune" })}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {OFFICER_MISSIONS.map(mission => (
                                <button
                                  key={mission.id}
                                  type="button"
                                  onClick={() => handleMission(officer.id, mission.id)}
                                  title={`${Math.ceil(mission.durationTicks / 60)}m · ${mission.risk}`}
                                  className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-[9px] font-bold text-amber-200 transition hover:bg-amber-500/20"
                                >
                                  {localize(mission.label)} · {Math.ceil(mission.durationTicks / 60)}m
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {isOnMission && officer.currentMission && (
                          <div className="mb-3 rounded border border-amber-500/20 bg-amber-500/10 p-2 text-[10px] text-amber-100">
                            <div className="font-bold">
                              {localize(OFFICER_MISSIONS.find(mission => mission.id === officer.currentMission?.type)!.label)}
                            </div>
                            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/40">
                              <div
                                className="h-full bg-amber-400 transition-all"
                                style={{
                                  width: `${Math.max(0, Math.min(100, (
                                    (state.tick - officer.currentMission.startTick) /
                                    (officer.currentMission.endTick - officer.currentMission.startTick)
                                  ) * 100))}%`,
                                }}
                              />
                            </div>
                          </div>
                        )}

                        {officer.recentReports.length > 0 && (
                          <div className="mb-3 space-y-1">
                            <div className="text-[9px] font-black uppercase tracking-widest text-white/40">
                              {localize({ en: "Recent reports", hu: "Legutóbbi jelentések", de: "Letzte Berichte", ro: "Rapoarte recente" })}
                            </div>
                            {officer.recentReports.map((report, index) => (
                              <div key={`${report.tick}-${index}`} className="rounded border border-white/5 bg-black/30 p-2 text-[9px] text-white/60">
                                <span className={report.outcome === "success" ? "text-emerald-300" : report.outcome === "wound" ? "text-rose-300" : "text-amber-300"}>
                                  {report.outcome.toUpperCase()}
                                </span>
                                <span className="ml-2">{localize(report.note)}</span>
                                {report.lootKey && report.lootAmount ? (
                                  <span className="ml-2 font-mono text-cyan-300">+{report.lootAmount} {report.lootKey}</span>
                                ) : null}
                              </div>
                            ))}
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
