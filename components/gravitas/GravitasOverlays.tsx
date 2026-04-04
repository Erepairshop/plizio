"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpCircle, FileText, LayoutGrid, ShieldHalf, Star, Terminal, X, Zap } from "lucide-react";
import ModuleUpgradePanel from "@/components/gravitas/ModuleUpgradePanel";
import DilemmaCard from "@/components/gravitas/DilemmaCard";
import FactionReputationPanel from "@/components/gravitas/FactionReputationPanel";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import { Badge, MainAction, MarkBox, StatItem } from "@/components/gravitas/GravitasUiParts";

type Lang = "en" | "hu" | "de" | "ro";

type Props = any;

export default function GravitasOverlays(props: Props) {
  const {
    lang,
    content,
    ui,
    state,
    activePanel,
    setActivePanel,
    resourceHelpOpen,
    setResourceHelpOpen,
    resourceHelp,
    avatarBaseOpen,
    setAvatarBaseOpen,
    quickActionsOpen,
    setQuickActionsOpen,
    showGameOver,
    starFeedback,
    hasUnclaimed,
    unclaimed,
    selectedModule,
    setSelectedModule,
    moduleActions,
    quickActions,
    systemsAction,
    prioritizedMobileActions,
    hiddenUrgentActions,
    actionFeedback,
    localize,
    doAction,
    restartGravitasChapter,
  } = props;

  return (
    <>
      <AnimatePresence>
        {resourceHelpOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm p-4 flex items-end sm:items-center sm:justify-center"
            onClick={() => setResourceHelpOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#0b1224]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/75">
                    {localize({ en: "Resource Help", hu: "Erőforrás súgó", de: "Ressourcenhilfe", ro: "Ajutor resurse" })}
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    {localize(resourceHelp[resourceHelpOpen].title)}
                  </div>
                </div>
                <button onClick={() => setResourceHelpOpen(null)} className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70">
                  <X size={16} className="mx-auto" />
                </button>
              </div>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/82">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{localize({ en: "What it is", hu: "Mi ez", de: "Was es ist", ro: "Ce este" })}</div>
                  <p className="mt-1">{localize(resourceHelp[resourceHelpOpen].body)}</p>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{localize({ en: "What it affects", hu: "Mire hat", de: "Worauf es wirkt", ro: "Ce influențează" })}</div>
                  <p className="mt-1">{localize(resourceHelp[resourceHelpOpen].impact)}</p>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{localize({ en: "How to improve it", hu: "Hogyan javítható", de: "Wie man es verbessert", ro: "Cum se îmbunătățește" })}</div>
                  <p className="mt-1">{localize(resourceHelp[resourceHelpOpen].fix)}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {avatarBaseOpen && state.avatarProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[91] bg-black/70 backdrop-blur-sm p-4 flex items-end sm:items-center sm:justify-center"
            onClick={() => setAvatarBaseOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[28px] border border-fuchsia-400/15 bg-[#0b1224]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-300/75">
                    {localize({ en: "Avatar base", hu: "Avatar alap", de: "Avatar-Basis", ro: "Bază avatar" })}
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    {localize(state.avatarProfile.title)}
                  </div>
                </div>
                <button onClick={() => setAvatarBaseOpen(false)} className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70">
                  <X size={16} className="mx-auto" />
                </button>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                  {localize({ en: "Developable imprint lines", hu: "Fejleszthető lenyomat ágak", de: "Entwickelbare Prägungslinien", ro: "Linii de amprentă dezvoltabilă" })}
                </div>
                <div className="mt-3 space-y-2">
                  {state.avatarProfile.answers.map((answer: any, idx: number) => (
                    <div key={`${answer.questionId}-${answer.optionId}-${idx}`} className="rounded-2xl border border-fuchsia-400/10 bg-black/20 px-3 py-2.5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[9px] font-black uppercase tracking-[0.16em] text-fuchsia-200/70">
                            {localize({ en: "Imprint line", hu: "Lenyomat ág", de: "Prägungslinie", ro: "Linie de amprentă" })} {idx + 1}
                          </div>
                          <div className="mt-1 text-sm font-black text-white/90">
                            {localize(answer.label)}
                          </div>
                        </div>
                        <div className="shrink-0 rounded-full border border-cyan-400/15 bg-cyan-400/8 px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-cyan-100/80">
                          {localize({ en: "Locked", hu: "Zárolt", de: "Gesperrt", ro: "Blocat" })}
                        </div>
                      </div>
                      <div className="mt-2 text-[11px] leading-relaxed text-white/55">
                        {localize({
                          en: "This response will open a dedicated avatar growth branch later.",
                          hu: "Ez a válasz később egy külön avatar-fejlődési ágat nyit meg.",
                          de: "Diese Antwort wird später einen eigenen Avatar-Entwicklungszweig öffnen.",
                          ro: "Acest răspuns va deschide mai târziu o ramură dedicată de evoluție a avatarului.",
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {quickActionsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm p-4 pt-24 lg:hidden"
            onClick={() => setQuickActionsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto flex h-full w-full max-w-xl flex-col rounded-[28px] border border-white/10 bg-[#0b1224]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/5 p-5">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/75">
                    {localize({ en: "Command Deck", hu: "Parancspult", de: "Befehlsdeck", ro: "Punte de comandă" })}
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    {localize({ en: "All Quick Commands", hu: "Összes gyors parancs", de: "Alle Schnellbefehle", ro: "Toate comenzile rapide" })}
                  </div>
                </div>
                <button type="button" onClick={() => setQuickActionsOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 pb-[calc(6rem+env(safe-area-inset-bottom))]">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {quickActions.map((action: any) => (
                    <MainAction
                      key={`sheet-${action.key}`}
                      label={action.label}
                      shortLabel={action.shortLabel}
                      icon={action.icon}
                      onClick={() => {
                        setQuickActionsOpen(false);
                        action.onClick();
                      }}
                      disabled={action.disabled}
                      highlight={action.highlight}
                      emphasis={action.emphasis}
                      tone={action.tone}
                      expanded
                    />
                  ))}
                  {systemsAction && (
                    <MainAction
                      key="sheet-systems"
                      label={systemsAction.label}
                      shortLabel={systemsAction.shortLabel}
                      icon={systemsAction.icon}
                      onClick={() => {
                        setQuickActionsOpen(false);
                        systemsAction.onClick();
                      }}
                      disabled={systemsAction.disabled}
                      highlight={systemsAction.highlight}
                      emphasis={systemsAction.emphasis}
                      tone={systemsAction.tone}
                      expanded
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {activePanel && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-20 z-[60] bg-[#0a0f1e]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-[32px] flex flex-col max-h-[85vh] lg:max-h-none"
          >
            <div className="sticky top-0 z-10 bg-[#0a0f1e]/80 backdrop-blur-md flex items-center justify-between p-6 border-b border-white/5 rounded-t-[32px]">
              <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                {activePanel === "modules" && <><LayoutGrid size={20} className="text-cyan-400" /> {localize(ui.modules)}</>}
                {activePanel === "marks" && <><ShieldHalf size={20} className="text-rose-400" /> {localize(ui.marks)}</>}
                {activePanel === "upgrades" && <><ArrowUpCircle size={20} className="text-emerald-400" /> {localize({ en: "Upgrades", hu: "Fejlesztések", de: "Upgrades", ro: "Îmbunătățiri" })}</>}
                {activePanel === "journal" && <><FileText size={20} className="text-amber-400" /> {localize(ui.journal)}</>}
              </h2>
              <button onClick={() => setActivePanel(null)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 pb-32">
              {activePanel === "modules" && (
                <div className="space-y-6">
                  {(props.mods.sensorBoost || props.mods.coreShield || props.mods.fullGrid) && (
                    <div className="space-y-2">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Synergies</h3>
                      <div className="flex flex-wrap gap-2">
                        {props.mods.sensorBoost && <Badge color="bg-emerald-500/20 text-emerald-400" label={{ en: "⚡ Reactor + Sensor synergy: +2 stability/tick", hu: "⚡ Reaktor + Szenzor szinergia: +2 stabilitás/tick", de: "⚡ Reaktor + Sensor Synergie: +2 Stabilität/Tick", ro: "⚡ Sinergie Reactor + Senzor: +2 stabilitate/tic" }} lang={lang} />}
                        {props.mods.coreShield && <Badge color="bg-blue-500/20 text-blue-400" label={{ en: "🛡 Logistics + Core synergy: core protected", hu: "🛡 Logisztika + Mag szinergia: mag védve", de: "🛡 Logistik + Kern Synergie: Kern geschützt", ro: "🛡 Sinergie Logistică + Nucleu: nucleu protejat" }} lang={lang} />}
                        {props.mods.fullGrid && <Badge color="bg-amber-500/20 text-amber-400" label={{ en: "✨ Full Grid: +2 power, 2× mark decay", hu: "✨ Teljes hálózat: +2 energia, 2× mark fogyás", de: "✨ Volles Netz: +2 Energie, 2× Mark-Abbau", ro: "✨ Rețea completă: +2 energie, 2× degradare marcaje" }} lang={lang} />}
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3">
                    {Object.values(state.modules).map((m: any) => {
                      const Icon = props.selectedModule === m.id ? Zap : Zap;
                      const isSelected = m.id === selectedModule;
                      const integrityColor = m.integrity > 60 ? "bg-emerald-500" : m.integrity > 30 ? "bg-amber-500" : "bg-rose-500";
                      return (
                        <button key={m.id} onClick={() => setSelectedModule(m.id)} className={`relative p-4 rounded-2xl border text-left transition overflow-hidden ${isSelected ? "border-cyan-400 bg-cyan-400/10" : "border-white/10 bg-white/5"} ${m.load >= 90 ? "animate-pulse ring-2 ring-rose-500 ring-inset" : ""} ${!m.online ? "opacity-60" : ""}`}>
                          <div className="flex items-center justify-between mb-2">
                            <Icon size={16} className={isSelected ? "text-cyan-400" : "text-white/40"} />
                            <div className="flex items-center gap-2">
                              <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-white/65">LVL {state.moduleLevels?.[m.id as keyof typeof state.moduleLevels] ?? 1}</div>
                              <div className="text-[10px] font-black">{m.integrity}%</div>
                            </div>
                          </div>
                          <div className="text-xs font-black truncate mb-2">{localize(m.name)}</div>
                          <div className="space-y-1">
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className={`h-full ${integrityColor} transition-all duration-500`} style={{ width: `${m.integrity}%` }} /></div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-rose-500 transition-all duration-500" style={{ width: `${m.load}%` }} /></div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="text-lg font-black">{localize(state.modules[selectedModule].name)}</div>
                    </div>
                    <p className="text-sm text-white/60 mb-4">{localize(content.modules[selectedModule].role)}</p>
                    <div className="space-y-3">
                      {moduleActions.map((action: any) => (
                        <button key={action.id} onClick={() => { doAction(action.command, "rgba(34,211,238,0.4)"); if (!action.command.type.includes("EVENT")) setActivePanel(null); }} disabled={action.disabled} className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition active:scale-[0.98] active:brightness-125 ${action.disabled ? "opacity-30 grayscale cursor-not-allowed" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                          <div><div className="text-sm font-black">{localize(action.label)}</div><div className="text-[11px] text-white/40">{localize(action.hint)}</div></div>
                          <Zap size={14} className={action.emphasis === "primary" ? "text-pink-400 animate-pulse" : "text-white/20"} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activePanel === "marks" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    <MarkBox label={localize(ui.reactorScar)} value={state.marks.reactorScar} color="rose" />
                    <MarkBox label={localize(ui.shellStrain)} value={state.marks.shellStrain} color="pink" />
                    <MarkBox label={localize(ui.supplyStress)} value={state.marks.supplyStress} color="amber" />
                    <MarkBox label={localize(ui.voidEcho)} value={state.marks.voidEcho} color="indigo" />
                  </div>
                  <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-black uppercase tracking-widest text-white/40">{localize(ui.entropy)}</div>
                      <div className="text-xs font-black">{state.entropy}%</div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className={`h-full transition-all duration-500 ${state.entropy > 70 ? "bg-rose-500" : state.entropy > 40 ? "bg-amber-500" : "bg-cyan-500"}`} style={{ width: `${state.entropy}%` }} /></div>
                  </div>
                </div>
              )}
              {activePanel === "upgrades" && (
                <ModuleUpgradePanel state={state} dispatch={(cmd: any) => doAction(cmd, "rgba(16,185,129,0.4)")} lang={lang} />
              )}
              {activePanel === "journal" && (
                <div className="space-y-4">
                  {state.alert && <div className="p-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-100 text-sm font-medium flex items-center gap-3"><Terminal size={16} className="text-cyan-400 shrink-0" />{localize(state.alert)}</div>}
                  <div className="space-y-3">
                    {state.journal.map((line: any, idx: number) => <div key={idx} className="p-3 rounded-xl border border-white/5 bg-white/[0.03] text-sm text-white/80 border-l-2 border-l-white/15 flex gap-3"><span className="font-black text-white/45 uppercase shrink-0 mt-0.5 text-[10px]">T{line.tick}</span><span>{localize(line.text)}</span></div>)}
                    {state.journal.length === 0 && <div className="p-12 text-center text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">{localize(ui.awaitingLog)}</div>}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state.dilemmaSystem?.activeDilemma && (
          <DilemmaCard 
            dilemma={state.dilemmaSystem.activeDilemma.event} 
            onResolve={(idx: number) => {
              const optionId = state.dilemmaSystem.activeDilemma!.event.options[idx].id;
              doAction({ type: "RESOLVE_DILEMMA", optionId }, "rgba(251,191,36,0.2)");
            }} 
            lang={lang} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state.pendingEvent && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} className="pointer-events-none fixed inset-x-0 bottom-[104px] z-[100] px-3 lg:inset-x-auto lg:bottom-6 lg:right-6 lg:px-0">
            <div className={`pointer-events-auto mx-auto w-full max-w-md rounded-[26px] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:mx-0 lg:w-[380px] ${state.pendingEvent.id === "avatarPreparation" ? "border border-fuchsia-400/30 bg-[#130815]/96" : "border border-amber-400/30 bg-[#151005]/96"}`}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${state.pendingEvent.id === "avatarPreparation" ? "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300" : "border-amber-400/20 bg-amber-400/10 text-amber-400"}`}>
                  {state.pendingEvent.id === "avatarPreparation" ? localize({ en: "Avatar preparation", hu: "Avatar-előkészítés", de: "Avatar-Vorbereitung", ro: "Pregătire avatar" }) : "Anomaly Detected"}
                </div>
              </div>
              <h2 className="mb-2 text-lg font-black leading-tight text-white lg:text-xl">{localize(state.pendingEvent.title)}</h2>
              <p className={`mb-4 text-sm leading-relaxed lg:text-[15px] ${state.pendingEvent.id === "avatarPreparation" ? "text-fuchsia-100/72" : "text-white/72"}`}>{localize(state.pendingEvent.body)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGameOver && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center p-8 text-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md space-y-8">
              <div className="w-24 h-24 rounded-full border-2 border-rose-500/30 flex items-center justify-center mx-auto">
                <Star size={48} className="text-rose-500 animate-pulse" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tighter text-rose-500 uppercase">
                  {localize(props.contentVictoryStationLostTitle)}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                <StatItem label="Ticks" value={state.tick} />
                <StatItem label="Chapter" value={state.chapter === "demo" ? "I" : "II"} />
                <StatItem label="Threats" value={state.threatCycle} />
                <StatItem label="Awakened" value={state.avatarAwake ? "YES" : "NO"} />
                <StatItem label="Stars" value={state.progression.stars} />
              </div>
              <button onClick={() => restartGravitasChapter(state.chapter)} className="w-full py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl">
                {props.contentVictoryTryAgain}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

    </>
  );
}
