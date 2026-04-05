"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, CheckCircle2, Play, Beaker, AlertTriangle, FlaskConical } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import { RESEARCH_PROJECTS } from "@/lib/gravitas/sim/research/projects";
import type { ResearchProject, ResearchFieldId, ResearchTier } from "@/lib/gravitas/sim/research/types";
import { canResearch } from "@/lib/gravitas/sim/research/engine";
import { loadSavedGalaxyInventory } from "@/lib/gravitas/world/mission";

interface ResearchPanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const FIELD_ICONS: Record<ResearchFieldId, string> = {
  weapons: "⚔️",
  shields: "🛡️",
  logistics: "📦",
  sensors: "📡",
  void: "🌀",
  core: "⚛️",
};

const FIELD_NAMES: Record<ResearchFieldId, LocalizedString> = {
  weapons: { en: "Weapons", hu: "Fegyverek", de: "Waffen", ro: "Arme" },
  shields: { en: "Shields", hu: "Pajzsok", de: "Schilde", ro: "Scuturi" },
  logistics: { en: "Logistics", hu: "Logisztika", de: "Logistik", ro: "Logistică" },
  sensors: { en: "Sensors", hu: "Szenzorok", de: "Sensoren", ro: "Senzori" },
  void: { en: "Void", hu: "Void", de: "Void", ro: "Void" },
  core: { en: "Core", hu: "Mag", de: "Kern", ro: "Nucleu" },
};

function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const d = Math.floor(ms / (24 * 60 * 60 * 1000));
  const h = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function ResearchPanel({ state, doAction, onClose, lang }: ResearchPanelProps) {
  const [now, setNow] = useState(Date.now());
  const [activeField, setActiveField] = useState<ResearchFieldId>("weapons");
  const [inventory, setInventory] = useState(() => loadSavedGalaxyInventory());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Refresh inventory whenever we open/render just to be safe
    setInventory(loadSavedGalaxyInventory());
  }, [state.tick]);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const handleStart = (projectId: string) => {
    if (canResearch(state, projectId)) {
      doAction({ type: "START_RESEARCH", projectId }, "rgba(34,211,238,0.15)");
    }
  };

  const handleCancel = () => {
    doAction({ type: "CANCEL_RESEARCH" }, "rgba(244,63,94,0.15)");
  };

  const activeProject = state.research.active ? RESEARCH_PROJECTS.find(p => p.id === state.research.active!.projectId) : null;
  const activeProgress = state.research.active && activeProject
    ? Math.min(100, Math.max(0, ((now - state.research.active.startedAt) / (state.research.active.completesAt - state.research.active.startedAt)) * 100))
    : 0;
  const activeRemainingMs = state.research.active ? Math.max(0, state.research.active.completesAt - now) : 0;

  const fields: ResearchFieldId[] = ["weapons", "shields", "logistics", "sensors", "void", "core"];
  const projectsByTier = useMemo(() => {
    const map = new Map<ResearchTier, ResearchProject[]>();
    for (const p of RESEARCH_PROJECTS) {
      if (p.fieldId === activeField) {
        if (!map.has(p.tier)) map.set(p.tier, []);
        map.get(p.tier)!.push(p);
      }
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [activeField]);

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
        <div className="flex items-center gap-3">
          <FlaskConical size={20} className="text-cyan-400" />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Research Lab", hu: "Kutatóközpont", de: "Forschungslabor", ro: "Laborator Cercetare" })}
            </h2>
            <p className="text-[10px] text-white/60">Core LVL {state.moduleLevels.core}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <X size={16} />
        </button>
      </div>

      <div className="border-b border-cyan-500/10 bg-cyan-950/10 px-4 py-3">
        <p className="max-w-4xl text-[11px] leading-relaxed text-cyan-100/65">
          {localize({
            en: "Spend core resources to unlock permanent upgrades. Research keeps running in the background until it finishes or you cancel it.",
            hu: "Költs core erőforrásokat tartós fejlesztések feloldására. A kutatás a háttérben fut, amíg be nem fejeződik vagy meg nem szakítod.",
            de: "Gib Kernressourcen aus, um permanente Upgrades freizuschalten. Forschung läuft im Hintergrund, bis sie fertig ist oder abgebrochen wird.",
            ro: "Folosește resursele core pentru a debloca îmbunătățiri permanente. Cercetarea rulează în fundal până se termină sau o anulezi.",
          })}
        </p>
      </div>

      {/* Active Research Bar */}
      <div className="p-4 border-b border-white/5 bg-white/5">
        <div className="text-[10px] uppercase font-black tracking-widest mb-2 text-white/50">
          {localize({ en: "Active Project", hu: "Aktív Projekt", de: "Aktives Projekt", ro: "Proiect Activ" })}
        </div>
        {activeProject && state.research.active ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex-1 w-full min-w-0">
              <div className="text-sm font-black text-cyan-300 truncate">{localize(activeProject.name)}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-cyan-400"
                    initial={{ width: `${activeProgress}%` }}
                    animate={{ width: `${activeProgress}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-cyan-100 min-w-[50px] text-right">
                  {formatDuration(activeRemainingMs)}
                </span>
              </div>
            </div>
            <button
              onClick={handleCancel}
              className="shrink-0 px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-[10px] font-black uppercase tracking-widest text-rose-300 transition"
            >
              {localize({ en: "Cancel", hu: "Mégse", de: "Abbrechen", ro: "Anulare" })}
            </button>
          </div>
        ) : (
          <div className="text-xs italic text-white/40 flex items-center gap-2">
            <Beaker size={14} />
            {localize({ en: "No active research. Select a project below.", hu: "Nincs aktív kutatás. Válassz egy projektet.", de: "Keine aktive Forschung. Wähle ein Projekt.", ro: "Nicio cercetare activă. Alege un proiect." })}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col min-h-0">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-white/5 no-scrollbar shrink-0">
          {fields.map(field => {
            const isDiscovered = state.research.discoveredFields.includes(field);
            const isActive = activeField === field;
            return (
              <button
                key={field}
                onClick={() => isDiscovered && setActiveField(field)}
                className={`flex items-center gap-2 px-5 py-3 border-b-2 whitespace-nowrap transition-colors ${
                  !isDiscovered 
                    ? "opacity-40 border-transparent cursor-not-allowed" 
                    : isActive
                      ? "border-cyan-400 bg-cyan-400/5 text-white"
                      : "border-transparent hover:bg-white/5 text-white/60"
                }`}
              >
                <span>{FIELD_ICONS[field]}</span>
                <span className="text-xs font-black uppercase tracking-wider">{localize(FIELD_NAMES[field])}</span>
                {!isDiscovered && <Lock size={12} className="ml-1" />}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {projectsByTier.map(([tier, projects]) => (
            <div key={tier}>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                <span>Tier {tier}</span>
                <div className="h-px bg-white/10 flex-1" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map(project => {
                  const isCompleted = state.research.completed.includes(project.id);
                  const isAvailable = canResearch(state, project.id);
                  const isCurrentlyActive = state.research.active?.projectId === project.id;
                  
                  // Compute why it might be locked
                  let lockReason = "";
                  if (!isCompleted && !isAvailable && !isCurrentlyActive) {
                    if (state.research.active) lockReason = "Busy";
                    else if (state.moduleLevels.core < (tier === 1 ? 3 : tier === 2 ? 8 : tier === 3 ? 14 : 20)) lockReason = "Core LVL";
                    else if (project.prerequisites.projects?.some((r: string) => !state.research.completed.includes(r))) lockReason = "Prereq";
                    else lockReason = "Cost";
                  }

                  return (
                    <div
                      key={project.id}
                      className={`relative flex flex-col p-3 rounded-xl border transition-all ${
                        isCompleted
                          ? "border-emerald-500/30 bg-emerald-900/10"
                          : isAvailable
                            ? "border-cyan-500/30 bg-white/5 hover:bg-cyan-900/20 cursor-pointer"
                            : isCurrentlyActive
                              ? "border-amber-500/30 bg-amber-900/10"
                              : "border-white/10 bg-black/40 opacity-50"
                      }`}
                      onClick={() => !isCompleted && !isCurrentlyActive && handleStart(project.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-black text-sm text-white/90">{localize(project.name)}</div>
                        {isCompleted && <CheckCircle2 size={16} className="text-emerald-400" />}
                        {isCurrentlyActive && <Play size={16} className="text-amber-400 animate-pulse" />}
                        {!isCompleted && !isAvailable && !isCurrentlyActive && <Lock size={14} className="text-white/40" />}
                      </div>
                      
                      <div className="text-[10px] text-white/60 mb-3 flex-1">
                        {localize(project.description)}
                        <div className="mt-2 space-y-0.5">
                          {project.effects.map((eff, i) => (
                            <div key={i} className="text-cyan-200/80 font-mono">
                              » {eff.description ? localize(eff.description) : `${eff.type}: ${eff.target} (${eff.value > 0 ? '+' : ''}${eff.value})`}
                            </div>
                          ))}
                        </div>
                      </div>

                      {!isCompleted && (
                        <div className="flex items-end justify-between mt-auto">
                          <div className="flex flex-col gap-1.5">
                            {project.unlockHint && (
                              <div className="text-[9px] font-black text-amber-400/80 uppercase tracking-widest bg-amber-950/30 px-1.5 py-0.5 rounded border border-amber-500/20 inline-block w-fit">
                                {localize(project.unlockHint)}
                              </div>
                            )}
                            <div className="flex flex-wrap gap-1.5">
                              {Object.entries(project.materialCost).map(([mat, rawAmount]) => {
                                const amount = rawAmount as number;
                                if (!amount) return null;
                                const hasEnough = (inventory[mat as keyof typeof inventory] ?? 0) >= amount;
                                return (
                                  <div key={mat} className={`px-1.5 py-0.5 rounded text-[9px] font-black border ${hasEnough ? "border-white/10 text-white/60" : "border-rose-500/30 text-rose-400"}`}>
                                    {mat.split('_')[0].substring(0,2).toUpperCase()} {amount}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mb-0.5">
                            ⏱ {formatDuration(project.baseDurationMs ?? (tier === 1 ? 6*3600000 : tier === 2 ? 18*3600000 : tier === 3 ? 48*3600000 : 120*3600000))}
                          </div>
                        </div>
                      )}
                      
                      {lockReason && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 rounded border border-white/10 text-[9px] font-black uppercase tracking-widest text-rose-300 whitespace-nowrap pointer-events-none">
                          {lockReason}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Summary */}
      <div className="px-4 py-2 border-t border-white/10 bg-black/60 text-[10px] text-white/40 flex justify-between">
        <span>{state.research.completed.length} / 40 Projects Completed</span>
        <span>Core Capacity: {state.moduleLevels.core >= 20 ? "T4" : state.moduleLevels.core >= 14 ? "T3" : state.moduleLevels.core >= 8 ? "T2" : state.moduleLevels.core >= 3 ? "T1" : "None"}</span>
      </div>
    </div>
  );
}
