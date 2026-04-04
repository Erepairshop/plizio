"use client";

import { motion } from "framer-motion";
import { Check, X, Shield, Users, Clock, AlertTriangle, Cpu, Wrench, Activity, ChevronRight, Map } from "lucide-react";
import type { OfflineProgressReport } from "@/lib/gravitas/sim/offlineProgress";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

interface OfflineProgressPopupProps {
  report: OfflineProgressReport;
  onDismiss: () => void;
  lang: string;
}

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

export default function OfflineProgressPopup({ report, onDismiss, lang }: OfflineProgressPopupProps) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const hasEvents =
    report.completedTraining.length > 0 ||
    report.completedRepairs.length > 0 ||
    report.completedUpgrades.length > 0 ||
    report.decayedWounded > 0 ||
    report.phaseChanges.length > 0 ||
    report.completedMissions > 0;

  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        className="relative w-full max-w-md bg-zinc-900/95 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 bg-black/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/40 text-cyan-400">
              <Clock size={16} />
            </div>
            <div>
              <h2 className="font-black text-sm uppercase tracking-widest text-white/90">
                {localize({ en: "While you were away...", hu: "Amíg távol voltál...", de: "Während du weg warst...", ro: "Cât ai fost plecat..." })}
              </h2>
              <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                {formatDuration(report.offlineDurationMs)}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {!hasEvents ? (
            <div className="text-center py-6 text-white/40 text-xs italic">
              {localize({ en: "No significant events occurred.", hu: "Nem történt jelentős esemény.", de: "Keine signifikanten Ereignisse aufgetreten.", ro: "Niciun eveniment semnificativ nu a avut loc." })}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Upgrades */}
              {report.completedUpgrades.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1.5"><Cpu size={12} /> Modul Upgrades</h3>
                  <div className="space-y-1.5">
                    {report.completedUpgrades.map((u, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5 text-xs">
                        <Check size={14} className="text-emerald-400 shrink-0" />
                        <span className="text-white/80">{u.moduleId}</span>
                        <span className="text-white/40">→</span>
                        <span className="text-emerald-400 font-black">LVL {u.newLevel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Training */}
              {report.completedTraining.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1.5"><Users size={12} /> Unit Training</h3>
                  <div className="space-y-1.5">
                    {report.completedTraining.map((t, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <Check size={14} className="text-emerald-400 shrink-0" />
                          <span className="text-white/80 uppercase">{t.unitId}</span>
                          <span className="text-white/40 px-1 text-[10px]">LVL {t.level}</span>
                        </div>
                        <span className="text-emerald-400 font-black">+{t.batchSize}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Repairs */}
              {report.completedRepairs.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1.5"><Wrench size={12} /> Unit Repairs</h3>
                  <div className="space-y-1.5">
                    {report.completedRepairs.map((r, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <Check size={14} className="text-emerald-400 shrink-0" />
                          <span className="text-white/80 uppercase">{r.unitId}</span>
                        </div>
                        <span className="text-emerald-400 font-black">+{r.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Drone Missions */}
              {report.completedMissions > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1.5"><Map size={12} /> Drone Operations</h3>
                  <div className="flex flex-col gap-2 p-2 rounded bg-white/5 border border-white/5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Completed Sorties</span>
                      <span className="text-emerald-400 font-black">{report.completedMissions}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {Object.entries(report.gatheredMaterials).map(([mat, amount]) => (
                        <div key={mat} className="flex items-center gap-1 text-[10px]">
                          <span className="text-white/50">{mat.split('_')[0].toUpperCase()}:</span>
                          <span className="text-emerald-400">+{amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Phase Changes */}
              {report.phaseChanges.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1.5"><Activity size={12} /> Galaxy Cycles</h3>
                  <div className="space-y-1.5">
                    {report.phaseChanges.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5 text-xs">
                        <span className="text-white/60 capitalize">{p.from}</span>
                        <ChevronRight size={12} className="text-white/30" />
                        <span className="text-cyan-400 font-bold capitalize">{p.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Decayed Wounded (Negative) */}
              {report.decayedWounded > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-400/80 mb-2 flex items-center gap-1.5"><AlertTriangle size={12} /> Casualties</h3>
                  <div className="flex items-center justify-between p-2 rounded bg-rose-950/20 border border-rose-500/20 text-xs">
                    <span className="text-rose-200">Wounded units expired without treatment</span>
                    <span className="text-rose-400 font-black">-{report.decayedWounded}</span>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/60 shrink-0">
          <button
            onClick={onDismiss}
            className="w-full py-3 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-400/30 text-cyan-50 font-black uppercase tracking-widest text-xs transition shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:shadow-[0_0_30px_rgba(8,145,178,0.4)]"
          >
            {localize({ en: "Acknowledge", hu: "Rendben", de: "Bestätigen", ro: "Confirmă" })}
          </button>
        </div>
      </motion.div>
    </div>
  );
}