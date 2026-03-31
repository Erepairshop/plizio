"use client";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Power, Wrench, Radar, Cpu, Star, AlertTriangle, Activity, Zap, ShieldAlert } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import GravitasHUD from "@/components/gravitas/GravitasHUD";
import GravitasScene from "@/components/gravitas/GravitasScene";
import GravitasActivation from "@/components/gravitas/GravitasActivation";
import GravitasShop from "@/components/gravitas/GravitasShop";
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
import { saveGravitasState, loadGravitasState, clearGravitasSave } from "@/lib/gravitas/sim/persistence";
import { applyStarholdCommand, getGravitasActionSlots } from "@/lib/gravitas/sim/commands";
import { canStartActivationTransfer } from "@/lib/gravitas/sim/activation";
import { advanceStarholdTick } from "@/lib/gravitas/sim/tick";
import type { StarholdCommand, StarholdModuleId, StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { GRAVITAS_TEXT } from "@/lib/gravitas/sim/content";

function reducer(state: StarholdState, command: StarholdCommand | { type: "__TICK__" }) {
  if (command.type === "__TICK__") {
    return advanceStarholdTick(state);
  }
  return applyStarholdCommand(state, command);
}

function moduleIcon(moduleId: StarholdModuleId) {
  switch (moduleId) {
    case "reactor":
      return Power;
    case "logistics":
      return Wrench;
    case "sensor":
      return Radar;
    case "core":
      return Cpu;
  }
}

type Lang = "en" | "hu" | "de" | "ro";

export default function GravitasPage() {
  const { lang: currentLang } = useLang();
  const lang = (currentLang as Lang) || "en";
  const content = GRAVITAS_TEXT;
  const ui = content.ui;

  const [state, dispatch] = useReducer(reducer, undefined, () => loadGravitasState() ?? createInitialStarholdState());
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("core");
  const [shopOpen, setShopOpen] = useState(false);
  const holdRef = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      dispatch({ type: "__TICK__" });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    return () => {
      if (holdRef.current !== null) {
        window.clearInterval(holdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (state.tick % 5 === 0) {
      saveGravitasState(state);
    }
  }, [state.tick]); // eslint-disable-line react-hooks/exhaustive-deps

  const localize = (ls: LocalizedString | null | undefined) => {
    if (!ls) return "";
    return ls[lang] ?? ls.en;
  };

  const phaseLabel = useMemo(() => {
    if (state.phase === "boot") return localize(ui.phaseBoot);
    if (state.phase === "activation") return localize(ui.phaseActivation);
    return localize(ui.phaseAwakened);
  }, [state.phase, lang, ui]);

  const canReroute = canStartActivationTransfer(state);

  const beginTransfer = () => {
    if (state.phase !== "activation" || holdRef.current !== null || state.avatarAwake) return;
    holdRef.current = window.setInterval(() => {
      dispatch({ type: "CHANNEL_TO_CORE", amount: 0.6 });
    }, 60);
  };

  const stopTransfer = () => {
    if (holdRef.current !== null) {
      window.clearInterval(holdRef.current);
      holdRef.current = null;
    }
  };

  const selectedModuleState = state.modules[selectedModule];
  const totalMarks = state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress + state.marks.voidEcho;
  const driftRiskLabel = useMemo(() => {
    const combinedRisk = totalMarks + Math.floor(state.entropy / 10);
    const labelObj = combinedRisk >= 15 ? ui.riskCritical : combinedRisk >= 8 ? ui.riskRising : ui.riskLow;
    return localize(labelObj);
  }, [totalMarks, state.entropy, lang, ui]);

  const moduleActions = useMemo(
    () => getGravitasActionSlots(selectedModule, state),
    [selectedModule, state]
  );

  const isRecovering = state.threat.aftershock > 0 || state.crisis;
  const isLockdown = state.lockdown;
  const hasPredictor = state.progression.unlockedItems.includes("threat_predictor");
  const hasUnclaimed = (state.progression.unclaimedMilestones || []).length > 0;

  return (
    <main className={`min-h-screen transition-colors duration-1000 ${isLockdown ? "bg-[#0a0a0a]" : state.crisis ? "bg-[#1a0505]" : "bg-[#050816]"} text-white px-4 py-5 sm:px-6 sm:py-6`}>
      {shopOpen && (
        <GravitasShop
          state={state}
          lang={lang}
          ui={ui}
          onClose={() => setShopOpen(false)}
          onBuy={(itemId) => dispatch({ type: "BUY_ITEM", itemId })}
          onClaim={(milestoneId) => dispatch({ type: "CLAIM_MILESTONE", milestoneId })}
        />
      )}
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold hover:text-white transition">
              <ChevronLeft size={16} /> {localize(ui.back)}
            </Link>
            <button
              onClick={() => { clearGravitasSave(); window.location.reload(); }}
              className="text-[11px] font-semibold text-white/30 hover:text-white/60 transition px-2 py-1 rounded border border-white/10 hover:border-white/20"
            >
              {lang === "hu" ? "Új játék" : lang === "de" ? "Neues Spiel" : lang === "ro" ? "Joc nou" : "New Game"}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShopOpen(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 group ${hasUnclaimed ? "border-amber-400 bg-amber-400/20 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-pulse" : state.progression.stars >= 5 ? "border-amber-400 bg-amber-400/10 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.2)]" : "border-white/10 bg-white/5 text-white/40"}`}
              >
                <Star size={14} fill={state.progression.stars > 0 ? "currentColor" : "none"} className="group-hover:scale-110 transition" />
                <span className="text-xs font-black">{state.progression.stars}</span>
                {hasUnclaimed && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-[#050816] animate-bounce" />
                )}
              </button>
              {state.progression.lastStarGain > 0 && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 text-amber-400 font-black text-sm animate-out fade-out slide-out-to-top-4 duration-1000 fill-mode-forwards">
                  +{state.progression.lastStarGain} <Star size={12} fill="currentColor" />
                </div>
              )}
            </div>
            <div className={`text-xs uppercase tracking-[0.35em] font-black transition-colors ${state.highStability ? "text-emerald-400" : "text-cyan-300"}`}>{phaseLabel}</div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className={`rounded-[28px] border transition-colors duration-1000 ${isLockdown ? "border-white/10 bg-white/[0.02]" : state.crisis ? "border-rose-500/30 bg-rose-500/[0.02]" : "border-white/10 bg-white/[0.04]"} backdrop-blur-xl p-5 sm:p-6 shadow-2xl overflow-hidden relative`}>
            {state.crisis && !isLockdown && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent animate-pulse" />
            )}

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-[400px]">
                <div className="flex items-center gap-2">
                  <div className={`text-xs uppercase tracking-[0.35em] font-black ${isLockdown ? "text-white/40" : state.crisis ? "text-rose-400" : "text-cyan-300"}`}>{localize(ui.title)}</div>
                  {isLockdown && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[9px] font-black animate-pulse">
                      <ShieldAlert size={10} /> LOCKDOWN
                    </div>
                  )}
                  {state.crisis && !isLockdown && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[9px] font-black animate-pulse">
                      <AlertTriangle size={10} /> CRISIS
                    </div>
                  )}
                  {state.highStability && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black">
                      <Activity size={10} /> OPTIMAL
                    </div>
                  )}
                </div>
                <h1 className="mt-3 text-3xl sm:text-5xl font-black leading-tight">{localize(ui.subtitle)}</h1>
              </div>
              <div className={`w-28 h-28 rounded-full border transition-all duration-1000 ${isLockdown ? "border-white/20 bg-white/5" : state.crisis ? "border-rose-500/40 bg-rose-500/10" : "border-cyan-300/30 bg-cyan-400/10"} flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.16)]`}>
                <div className={`w-16 h-16 rounded-full transition-all duration-500 ${state.avatarAwake ? "bg-pink-400 shadow-[0_0_45px_rgba(244,114,182,0.7)]" : isLockdown ? "bg-white/5" : state.crisis ? "bg-rose-500/40" : "bg-white/15"}`} />
              </div>
            </div>

            <div className="mt-6">
              <GravitasHUD
                power={state.resources.power}
                materials={state.resources.materials}
                stability={state.resources.stability}
                activation={state.resources.activation}
                entropy={state.entropy}
                labels={{
                  power: localize(ui.pwr),
                  materials: localize(ui.mat),
                  stability: localize(ui.stb),
                  activation: localize(ui.act),
                  entropy: localize(ui.ent),
                }}
              />
            </div>

            <section className={`mt-6 rounded-2xl border transition-all duration-500 ${state.threat.aftershock > 0 ? "border-amber-500/40 bg-amber-500/15" : state.threat.countdown <= 3 ? "border-rose-500/30 bg-rose-500/10 shadow-[0_0_20px_rgba(244,63,94,0.1)]" : "border-white/10 bg-black/30"} p-5 overflow-hidden relative group`}>
               <div className={`absolute inset-0 transition-colors duration-1000 ${state.threat.aftershock > 0 ? "bg-amber-500/[0.08]" : "bg-rose-500/[0.03]"} animate-pulse`} />
               <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                     <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-1000 ${state.threat.aftershock > 0 ? "border-amber-500 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse" : state.threat.countdown <= 3 ? "border-rose-500 animate-bounce text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]" : state.threat.countdown <= 7 ? "border-amber-500 text-amber-500" : hasPredictor ? "border-cyan-500 text-cyan-400" : "border-cyan-500/50 text-cyan-400"}`}>
                        <div className="text-xl font-black">
                           {(state.threat.aftershock > 0 || state.threat.countdown <= 10 || hasPredictor) ? (state.threat.aftershock > 0 ? state.threat.aftershock : state.threat.countdown) : "--"}
                        </div>
                     </div>
                     <div>
                        <div className="flex items-center gap-2">
                          <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-black">
                             {state.threat.aftershock > 0 ? localize(content.threats.aftershockPhase) : localize(ui.approachingThreat)}
                          </div>
                          {state.threat.aftershock > 0 && <Activity size={12} className="text-amber-400 animate-spin" />}
                        </div>
                        <div className="text-lg font-black text-white/90">{localize(content.threats[state.threat.type])}</div>
                        {state.threat.aftershock > 0 ? (
                           <p className="text-[11px] text-amber-200/80 mt-1 font-bold">{localize(content.threats.lingeringDrift)}</p>
                        ) : (
                           <p className="text-[11px] text-white/50 mt-1">
                              {state.threat.type === "distortionWave" ? (lang === "hu" ? "Javaslat: Váz megerősítése (Reaktor)" : lang === "de" ? "Empfehlung: Hülle verstärken (Reaktor)" : lang === "ro" ? "Recomandare: Fortifică corpul (Reactor)" : "Recommendation: Fortify Shell (Reactor)") :
                               state.threat.type === "voidStorm" ? (lang === "hu" ? "Javaslat: Jelcsillapítás (Szenzor)" : lang === "de" ? "Empfehlung: Signale dämpfen (Sensor)" : lang === "ro" ? "Recomandare: Atenuează semnalele (Senzor)" : "Recommendation: Dampen Signals (Sensor)") :
                               (lang === "hu" ? "Javaslat: Meteorok elfogása (Logisztika)" : lang === "de" ? "Empfehlung: Meteore abfangen (Logistik)" : lang === "ro" ? "Recomandare: Interceptează meteorii (Logistică)" : "Recommendation: Intercept Meteors (Logistics)")}
                           </p>
                        )}
                     </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2 max-w-[240px]">
                     <PrepFlag active={state.threat.fortified} label={localize(ui.fortified)} color="emerald" />
                     <PrepFlag active={state.threat.dampened} label={localize(ui.dampened)} color="indigo" />
                     <PrepFlag active={state.threat.intercepted} label={lang === "hu" ? "Elfogva" : lang === "de" ? "Abgefangen" : lang === "ro" ? "Interceptat" : "Intercepted"} color="amber" />
                     <PrepFlag active={state.threat.predicted} label={lang === "hu" ? "Jósolva" : lang === "de" ? "Vorhergesagt" : lang === "ro" ? "Previzionat" : "Predicted"} color="cyan" />
                  </div>
               </div>
               <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${state.threat.aftershock > 0 ? "bg-amber-500" : state.threat.countdown <= 3 ? "bg-rose-500" : state.threat.countdown <= 7 ? "bg-amber-500" : "bg-cyan-500"}`}
                    style={{ width: `${state.threat.aftershock > 0 ? (state.threat.aftershock / 6) * 100 : (state.threat.countdown / state.threat.totalDuration) * 100}%` }}
                  />
               </div>
            </section>

            <div className="mt-6">
              <GravitasScene
                state={state}
                selectedModule={selectedModule}
                onSelectModule={setSelectedModule}
                activeEventId={state.pendingEvent?.id ?? null}
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className={`rounded-2xl border transition-colors duration-1000 ${isLockdown ? "border-white/5 bg-white/[0.01]" : state.crisis ? "border-rose-500/20 bg-rose-500/5" : "border-white/10 bg-black/20"} p-4 relative overflow-hidden group`}>
                <div className={`absolute top-0 left-0 w-1 h-full ${isLockdown ? "bg-white/10" : "bg-cyan-400/20"} group-hover:bg-cyan-400/40 transition-colors`} />
                <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{localize(ui.objective)}</div>
                <p className="mt-3 text-white/75 leading-relaxed">{localize(ui.objectiveText)}</p>
                {state.avatarAwake && (
                  <div className="mt-4 flex items-center gap-2 text-pink-200 font-black animate-in fade-in slide-in-from-left-2 duration-1000">
                    <Zap size={14} fill="currentColor" /> {localize(ui.awakened)}
                  </div>
                )}
              </div>
              <GravitasActivation
                state={state}
                t={{
                  transferTitle: localize(ui.transferTitle),
                  transferReady: localize(ui.transferReady),
                  transferLocked: localize(ui.transferLocked),
                  transferStageLabel: localize(ui.transferStageLabel),
                  hold: localize(ui.hold),
                  awakeningMoment: localize(ui.awakeningMoment),
                  awakeningBody: localize(ui.awakeningBody),
                  resonance: localize(ui.resonance),
                }}
                onBeginTransfer={beginTransfer}
                onStopTransfer={stopTransfer}
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <MainAction index="01" label={localize(ui.scavenge)} onClick={() => dispatch({ type: "SCAVENGE" })} disabled={isLockdown} />
              <MainAction index="02" label={localize(ui.stabilize)} onClick={() => dispatch({ type: "STABILIZE_REACTOR" })} emphasis={isRecovering && !isLockdown} />
              <MainAction index="03" label={localize(ui.repairLogistics)} onClick={() => dispatch({ type: "REPAIR_MODULE", moduleId: "logistics" })} />
              <MainAction
                index="04"
                label={localize(ui.reroute)}
                onClick={() => dispatch({ type: "REROUTE_TO_CORE" })}
                disabled={!canReroute || isLockdown}
                highlight={canReroute && !isLockdown}
              />
            </div>
          </section>

          <aside className="grid gap-5">
            <section className={`rounded-[28px] border transition-colors duration-1000 ${isLockdown ? "border-white/5 bg-white/[0.01]" : state.crisis ? "border-rose-500/20 bg-rose-500/[0.02]" : "border-white/10 bg-white/[0.04]"} p-5 shadow-2xl`}>
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{localize(ui.modules)}</div>
              <div className="mt-4 space-y-3">
                {Object.values(state.modules).map((module) => {
                  const Icon = moduleIcon(module.id);
                  const isSelected = module.id === selectedModule;
                  const isDamaged = module.integrity < 40;
                  const needsRecovery = isRecovering && (module.id === "reactor" || module.id === "sensor");

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setSelectedModule(module.id)}
                      className={[
                        "w-full rounded-2xl border bg-black/20 p-4 text-left transition relative overflow-hidden group",
                        isSelected ? "border-pink-400/35 bg-pink-500/8" : isDamaged ? "border-rose-500/30 hover:border-rose-500/50 bg-rose-500/5" : "border-white/10 hover:bg-white/6",
                      ].join(" ")}
                    >
                      {isDamaged && (
                        <div className="absolute top-0 right-0 p-1.5">
                          <ShieldAlert size={14} className="text-rose-500 animate-pulse" />
                        </div>
                      )}
                      {needsRecovery && !isSelected && (
                        <div className="absolute bottom-0 right-0 p-1.5">
                          <Zap size={12} className="text-amber-400/50 animate-bounce" />
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isSelected ? "bg-pink-400/16 text-pink-200" : isDamaged ? "bg-rose-500/20 text-rose-400" : module.online ? "bg-cyan-400/12 text-cyan-200" : "bg-white/8 text-white/40"}`}>
                            <Icon size={18} className={isSelected ? "animate-pulse" : ""} />
                          </div>
                          <div>
                            <div className={`font-black transition-colors ${isDamaged ? "text-rose-200" : isSelected ? "text-pink-100" : "text-white"}`}>{localize(module.name)}</div>
                            <div className="text-xs text-white/50">{module.online ? localize(ui.online) : localize(ui.offline)}</div>
                          </div>
                        </div>
                        <div className="text-right text-xs text-white/55">
                          <div className={isDamaged ? "text-rose-400 font-black" : ""}>{localize(ui.integrity)}: {module.integrity}%</div>
                          <div>{localize(ui.load)}: {module.load}%</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className={`rounded-[28px] border transition-all duration-500 ${selectedModuleState.integrity < 40 ? "border-rose-500/20 bg-rose-500/[0.04]" : "border-pink-300/15 bg-pink-500/[0.04]"} p-5 shadow-2xl relative overflow-hidden`}>
              <div className="text-xs uppercase tracking-[0.28em] text-pink-200/75 font-black">{localize(ui.focus)}</div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-xl font-black">{localize(selectedModuleState.name)}</div>
                <div className={`rounded-full px-3 py-1 text-xs font-black ${selectedModuleState.online ? "bg-cyan-400/12 text-cyan-200" : "bg-white/8 text-white/50"}`}>
                  {selectedModuleState.online ? localize(ui.online) : localize(ui.offline)}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{localize(ui.focusHint)}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className={`rounded-2xl border px-3 py-3 transition-colors ${selectedModuleState.integrity < 40 ? "border-rose-500/20 bg-rose-500/10" : "border-white/10 bg-black/20"}`}>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.selectedStatus)}</div>
                  <div className={`mt-2 ${selectedModuleState.integrity < 40 ? "text-rose-400 font-black animate-pulse" : "text-white/82"}`}>{localize(ui.integrity)}: {selectedModuleState.integrity}%</div>
                  <div className="text-white/62">{localize(ui.load)}: {selectedModuleState.load}%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.selectedRole)}</div>
                  <div className="mt-2 text-white/82 leading-snug">{localize(content.modules[selectedModule].role)}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{localize(ui.marks)}</div>
                <div className="flex items-center gap-2">
                   <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{localize(ui.entropy)}</div>
                   <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden border border-white/5">
                      <div
                        className={`h-full transition-all duration-500 ${state.entropy > 70 ? "bg-rose-500" : state.entropy > 40 ? "bg-amber-500" : "bg-cyan-500"}`}
                        style={{ width: `${state.entropy}%` }}
                      />
                   </div>
                   <div className="text-[10px] font-black text-white/50 w-6 text-right">{state.entropy}</div>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <MarkBox label={localize(ui.reactorScar)} value={state.marks.reactorScar} color="rose" />
                <MarkBox label={localize(ui.shellStrain)} value={state.marks.shellStrain} color="pink" />
                <MarkBox label={localize(ui.supplyStress)} value={state.marks.supplyStress} color="amber" />
                <MarkBox label={localize(ui.voidEcho)} value={state.marks.voidEcho} color="indigo" />
              </div>
              <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-500/[0.04] px-4 py-4 relative overflow-hidden group">
                <div className="flex items-center justify-between gap-3 relative z-10">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-amber-100/70 font-black">{localize(ui.driftRisk)}</div>
                  <div className={`rounded-full px-3 py-1 text-[11px] font-black ${totalMarks >= 12 ? "bg-rose-500/15 text-rose-200 shadow-[0_0_10px_rgba(244,63,94,0.2)]" : totalMarks >= 6 ? "bg-amber-400/15 text-amber-200" : "bg-emerald-400/15 text-emerald-200"}`}>
                    {driftRiskLabel}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/68 italic relative z-10">{localize(ui.riskHint)}</p>
              </div>
            </section>

            {state.anomalies.length > 0 && (
              <section className="rounded-[28px] border border-rose-400/20 bg-rose-500/[0.08] p-5 shadow-2xl animate-in fade-in duration-500">
                <div className="text-xs uppercase tracking-[0.28em] text-rose-200/80 font-black">{localize(ui.anomalies)}</div>
                <div className="mt-4 space-y-3">
                  {state.anomalies.map((anomaly) => (
                    <div key={anomaly.id} className="rounded-2xl border border-white/10 bg-black/30 p-4 relative group hover:bg-black/40 transition-colors">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-black text-rose-100">{localize(anomaly.name)}</div>
                        <div className="text-xs text-rose-300 font-black uppercase tracking-wider">{localize(ui.severity)}: {anomaly.severity}</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                         <div className="h-1 flex-1 rounded-full bg-white/10">
                            <div className="h-full bg-rose-400 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]" style={{ width: `${(anomaly.severity / 5) * 100}%` }} />
                         </div>
                         {anomaly.duration !== undefined && (
                           <div className="text-[10px] text-white/40 font-bold">{anomaly.duration}T</div>
                         )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-[28px] border border-cyan-300/15 bg-cyan-400/[0.04] p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/80 font-black">{localize(ui.actions)}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/68">{localize(ui.actionHint)}</p>
              <div className="mt-4 grid gap-3">
                {moduleActions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => dispatch(action.command)}
                      disabled={action.disabled || !!state.pendingEvent}
                      className={[
                        "rounded-2xl border px-4 py-4 text-left transition active:scale-[0.98] group relative overflow-hidden",
                        action.disabled || state.pendingEvent
                          ? "border-white/10 bg-white/5 text-white/35 cursor-not-allowed"
                        : action.emphasis === "primary"
                          ? "border-pink-300/25 bg-pink-500/8 hover:bg-pink-500/12 shadow-[0_0_20px_rgba(244,114,182,0.05)]"
                          : "border-cyan-300/20 bg-black/20 hover:bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.05)]",
                      ].join(" ")}
                    >
                    <div className="font-black group-hover:text-white transition-colors flex items-center justify-between gap-2">
                      {localize(action.label)}
                      {action.emphasis === "primary" && <Zap size={14} className="text-pink-400 animate-pulse" />}
                    </div>
                    <div className="mt-1 text-sm text-white/60 leading-tight">{localize(action.hint)}</div>
                  </button>
                ))}
              </div>
            </section>

            {state.pendingEvent && (
              <section className="rounded-[28px] border border-amber-300/20 bg-amber-500/[0.06] p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs uppercase tracking-[0.28em] text-amber-200/80 font-black">{localize(ui.eventTitle)}</div>
                  {state.pendingEvent.chainStep && state.pendingEvent.chainTotal && (
                    <div className="rounded-full border border-amber-300/20 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-100/75 font-black">
                      {localize(ui.eventChain)} {state.pendingEvent.chainStep}/{state.pendingEvent.chainTotal}
                    </div>
                  )}
                </div>
                <div className="mt-3 text-xl font-black text-white">{localize(state.pendingEvent.title)}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/72">{localize(state.pendingEvent.body)}</p>
                <div className="mt-4 grid gap-3">
                  {state.pendingEvent.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => dispatch({ type: "RESOLVE_EVENT", optionId: option.id })}
                      className="rounded-2xl border border-amber-300/20 bg-black/20 px-4 py-3 text-left transition hover:bg-amber-400/10 active:scale-[0.98]"
                    >
                      <div className="text-[11px] uppercase tracking-[0.22em] text-amber-200/60 font-black">{localize(ui.resolve)}</div>
                      <div className="mt-1 font-black text-white">{localize(option.label)}</div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{localize(ui.journal)}</div>
              {state.alert && (
                <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/6 px-4 py-3 text-sm text-cyan-100 font-medium flex items-center gap-3 animate-in slide-in-from-left-2 duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {localize(state.alert)}
                </div>
              )}
              <div className="mt-4 space-y-2">
                {state.journal.map((line, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/72 border-l-2 border-l-white/20 hover:border-l-cyan-400 transition-all">
                    {localize(line)}
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function PrepFlag({ active, label, color }: { active: boolean; label: string; color: "emerald" | "indigo" | "amber" | "cyan" }) {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
    indigo: "bg-indigo-500/20 border-indigo-500 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]",
    amber: "bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
    cyan: "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]",
  };
  return (
    <div className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest border transition-all duration-500 ${active ? colorMap[color] : "bg-white/5 border-white/10 text-white/20"}`}>
      {label}
    </div>
  );
}

function MarkBox({ label, value, color }: { label: string; value: number; color: "rose" | "pink" | "amber" | "indigo" }) {
  const colorMap: Record<string, string> = {
    rose: value > 5 ? "text-rose-400" : "text-rose-200",
    pink: value > 5 ? "text-pink-400" : "text-pink-200",
    amber: value > 5 ? "text-amber-400" : "text-amber-200",
    indigo: value > 5 ? "text-indigo-400" : "text-indigo-200",
  };
  return (
    <div className={`rounded-2xl border border-white/10 bg-black/20 px-3 py-3 hover:bg-black/30 transition-colors ${value > 8 ? "shadow-[inset_0_0_10px_rgba(244,63,94,0.1)]" : ""}`}>
      <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{label}</div>
      <div className={`mt-2 text-lg font-black ${colorMap[color]}`}>{value}</div>
    </div>
  );
}

function MainAction({ index, label, onClick, disabled, highlight, emphasis }: { index: string; label: string; onClick: () => void; disabled?: boolean; highlight?: boolean; emphasis?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-2xl border px-4 py-4 text-left transition active:scale-95 group relative overflow-hidden",
        disabled
          ? "border-white/10 bg-white/5 text-white/20 cursor-not-allowed"
          : highlight || emphasis
            ? "border-cyan-300/40 bg-cyan-400/10 hover:bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
            : "border-white/10 bg-white/5 hover:bg-white/10",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div className={`text-xs uppercase tracking-[0.25em] font-black transition-colors ${disabled ? "text-white/10" : "text-white/45 group-hover:text-cyan-300"}`}>{index}</div>
        {emphasis && (
          <div className="text-[8px] font-black bg-cyan-400 text-black px-1.5 py-0.5 rounded animate-pulse">RECOVERY</div>
        )}
      </div>
      <div className="mt-2 font-black">{label}</div>
      {emphasis && <div className="absolute top-0 right-0 w-1 h-full bg-cyan-400 animate-pulse" />}
    </button>
  );
}
