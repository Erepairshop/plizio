"use client";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Power, Wrench, Radar, Cpu } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import GravitasHUD from "@/components/gravitas/GravitasHUD";
import GravitasScene from "@/components/gravitas/GravitasScene";
import GravitasActivation from "@/components/gravitas/GravitasActivation";
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
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

  const [state, dispatch] = useReducer(reducer, undefined, createInitialStarholdState);
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("core");
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

  return (
    <main className="min-h-screen bg-[#050816] text-white px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-3 mb-5">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
            <ChevronLeft size={16} /> {localize(ui.back)}
          </Link>
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-black">{phaseLabel}</div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%),rgba(255,255,255,0.04)] backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-black">{localize(ui.title)}</div>
                <h1 className="mt-3 text-3xl sm:text-5xl font-black">{localize(ui.subtitle)}</h1>
              </div>
              <div className="w-28 h-28 rounded-full border border-cyan-300/30 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.16)]">
                <div className={`w-16 h-16 rounded-full transition-all duration-500 ${state.avatarAwake ? "bg-pink-400 shadow-[0_0_45px_rgba(244,114,182,0.7)]" : "bg-white/15"}`} />
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

            <section className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 overflow-hidden relative group">
               {/* Threat approach indicator */}
               <div className="absolute inset-0 bg-rose-500/[0.03] animate-pulse" />
               <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                     <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${state.threat.countdown <= 3 ? "border-rose-500 animate-bounce text-rose-500" : state.threat.countdown <= 7 ? "border-amber-500 text-amber-500" : "border-cyan-500/50 text-cyan-400"}`}>
                        <div className="text-xl font-black">{state.threat.countdown}</div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-black">{localize(ui.approachingThreat)}</div>
                        <div className="text-lg font-black text-white/90">{localize(content.threats[state.threat.type])}</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-500 ${state.threat.fortified ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-white/5 border-white/10 text-white/20"}`}>
                        {localize(ui.fortified)}
                     </div>
                     <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-500 ${state.threat.dampened ? "bg-indigo-500/20 border-indigo-500 text-indigo-400" : "bg-white/5 border-white/10 text-white/20"}`}>
                        {localize(ui.dampened)}
                     </div>
                  </div>
               </div>
               <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${state.threat.countdown <= 3 ? "bg-rose-500" : state.threat.countdown <= 7 ? "bg-amber-500" : "bg-cyan-500"}`}
                    style={{ width: `${(state.threat.countdown / state.threat.totalDuration) * 100}%` }}
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
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{localize(ui.objective)}</div>
                <p className="mt-3 text-white/75 leading-relaxed">{localize(ui.objectiveText)}</p>
                {state.avatarAwake && (
                  <p className="mt-4 text-pink-200 font-semibold">{localize(ui.awakened)}</p>
                )}
              </div>
              <GravitasActivation
                state={state}
                t={{
                  transferTitle: localize(ui.transferTitle),
                  transferReady: localize(ui.transferReady),
                  transferLocked: localize(ui.transferLocked),
                  transferStageLabel: localize(ui.transferStageLabel),
                  transferStage0: lang === "hu" ? "Alvó" : lang === "de" ? "Ruhend" : lang === "ro" ? "Adormit" : "Dormant",
                  transferStage1: lang === "hu" ? "Csatorna nyitva" : lang === "de" ? "Leitung geöffnet" : lang === "ro" ? "Canal deschis" : "Conduit primed",
                  transferStage2: lang === "hu" ? "Pulzus rögzítve" : lang === "de" ? "Puls verankert" : lang === "ro" ? "Puls fixat" : "Pulse anchored",
                  transferStage3: lang === "hu" ? "Testrezgés" : lang === "de" ? "Hüllenresonanz" : lang === "ro" ? "Rezonanța corpului" : "Shell resonance",
                  transferStage4: lang === "hu" ? "Tudati szikra" : lang === "de" ? "Bewusstseinsfunke" : lang === "ro" ? "Scânteie conștientă" : "Conscious spark",
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
              <button
                type="button"
                onClick={() => dispatch({ type: "SCAVENGE" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">01</div>
                <div className="mt-2 font-black">{localize(ui.scavenge)}</div>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "STABILIZE_REACTOR" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">02</div>
                <div className="mt-2 font-black">{localize(ui.stabilize)}</div>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "REPAIR_MODULE", moduleId: "logistics" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">03</div>
                <div className="mt-2 font-black">{localize(ui.repairLogistics)}</div>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "REROUTE_TO_CORE" })}
                disabled={!canReroute}
                className={[
                  "rounded-2xl border px-4 py-4 text-left transition",
                  canReroute
                    ? "border-cyan-300/30 bg-cyan-400/10 hover:bg-cyan-400/15"
                    : "border-white/10 bg-white/5 text-white/35 cursor-not-allowed",
                ].join(" ")}
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">04</div>
                <div className="mt-2 font-black">{localize(ui.reroute)}</div>
              </button>
            </div>
          </section>

          <aside className="grid gap-5">
            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{localize(ui.modules)}</div>
              <div className="mt-4 space-y-3">
                {Object.values(state.modules).map((module) => {
                  const Icon = moduleIcon(module.id);
                  const isSelected = module.id === selectedModule;
                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setSelectedModule(module.id)}
                      className={[
                        "w-full rounded-2xl border bg-black/20 p-4 text-left transition",
                        isSelected ? "border-pink-400/35 bg-pink-500/8" : "border-white/10 hover:bg-white/6",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-pink-400/16 text-pink-200" : module.online ? "bg-cyan-400/12 text-cyan-200" : "bg-white/8 text-white/40"}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-black">{localize(module.name)}</div>
                            <div className="text-xs text-white/50">{module.online ? localize(ui.online) : localize(ui.offline)}</div>
                          </div>
                        </div>
                        <div className="text-right text-xs text-white/55">
                          <div>{localize(ui.integrity)}: {module.integrity}%</div>
                          <div>{localize(ui.load)}: {module.load}%</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[28px] border border-pink-300/15 bg-pink-500/[0.04] p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-pink-200/75 font-black">{localize(ui.focus)}</div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-xl font-black">{localize(selectedModuleState.name)}</div>
                <div className={`rounded-full px-3 py-1 text-xs font-black ${selectedModuleState.online ? "bg-cyan-400/12 text-cyan-200" : "bg-white/8 text-white/50"}`}>
                  {selectedModuleState.online ? localize(ui.online) : localize(ui.offline)}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{localize(ui.focusHint)}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.selectedStatus)}</div>
                  <div className="mt-2 text-white/82">{localize(ui.integrity)}: {selectedModuleState.integrity}%</div>
                  <div className="text-white/62">{localize(ui.load)}: {selectedModuleState.load}%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.selectedRole)}</div>
                  <div className="mt-2 text-white/82">{localize(content.modules[selectedModule].role)}</div>
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
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.reactorScar)}</div>
                  <div className="mt-2 text-lg font-black text-rose-200">{state.marks.reactorScar}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.shellStrain)}</div>
                  <div className="mt-2 text-lg font-black text-pink-200">{state.marks.shellStrain}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.supplyStress)}</div>
                  <div className="mt-2 text-lg font-black text-amber-200">{state.marks.supplyStress}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{localize(ui.voidEcho)}</div>
                  <div className="mt-2 text-lg font-black text-indigo-200">{state.marks.voidEcho}</div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-500/[0.04] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-amber-100/70 font-black">{localize(ui.driftRisk)}</div>
                  <div className={`rounded-full px-3 py-1 text-[11px] font-black ${totalMarks >= 12 ? "bg-rose-500/15 text-rose-200" : totalMarks >= 6 ? "bg-amber-400/15 text-amber-200" : "bg-emerald-400/15 text-emerald-200"}`}>
                    {driftRiskLabel}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{localize(ui.riskHint)}</p>
              </div>
            </section>

            {state.anomalies.length > 0 && (
              <section className="rounded-[28px] border border-rose-400/20 bg-rose-500/[0.08] p-5 shadow-2xl">
                <div className="text-xs uppercase tracking-[0.28em] text-rose-200/80 font-black">{localize(ui.anomalies)}</div>
                <div className="mt-4 space-y-3">
                  {state.anomalies.map((anomaly) => (
                    <div key={anomaly.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-black text-rose-100">{localize(anomaly.name)}</div>
                        <div className="text-xs text-rose-300 font-black uppercase tracking-wider">{localize(ui.severity)}: {anomaly.severity}</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                         <div className="h-1 flex-1 rounded-full bg-white/10">
                            <div className="h-full bg-rose-400 rounded-full" style={{ width: `${(anomaly.severity / 5) * 100}%` }} />
                         </div>
                         {anomaly.duration !== undefined && (
                           <div className="text-[10px] text-white/40">{anomaly.duration}T</div>
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
                        "rounded-2xl border px-4 py-4 text-left transition",
                        action.disabled || state.pendingEvent
                          ? "border-white/10 bg-white/5 text-white/35 cursor-not-allowed"
                        : action.emphasis === "primary"
                          ? "border-pink-300/25 bg-pink-500/8 hover:bg-pink-500/12"
                          : "border-cyan-300/20 bg-black/20 hover:bg-cyan-400/10",
                      ].join(" ")}
                    >
                    <div className="font-black">{localize(action.label)}</div>
                    <div className="mt-1 text-sm text-white/60">{localize(action.hint)}</div>
                  </button>
                ))}
              </div>
            </section>

            {state.pendingEvent && (
              <section className="rounded-[28px] border border-amber-300/20 bg-amber-500/[0.06] p-5 shadow-2xl">
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
                      className="rounded-2xl border border-amber-300/20 bg-black/20 px-4 py-3 text-left transition hover:bg-amber-400/10"
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
              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/6 px-4 py-3 text-sm text-cyan-100">
                {localize(state.alert)}
              </div>
              <div className="mt-4 space-y-2">
                {state.journal.map((line, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/72">
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
