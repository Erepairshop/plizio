"use client";

import React from "react";
import { X, Shield, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { CONCORD_RULE_DEFINITIONS, CONCORD_STATUS_META } from "@/lib/gravitas/sim/concord/engine";

interface Props {
  state: StarholdState;
  lang: string;
  onClose: () => void;
}

const STATUS_RING_COLOR: Record<string, string> = {
  none: "border-gray-500/40 text-gray-400",
  candidate: "border-amber-500/60 text-amber-400",
  member: "border-emerald-500/60 text-emerald-400",
  revoked: "border-rose-500/60 text-rose-400",
};

const STATUS_BG: Record<string, string> = {
  none: "bg-gray-500/10",
  candidate: "bg-amber-500/10",
  member: "bg-emerald-500/10",
  revoked: "bg-rose-500/10",
};

const GAUGE_COLOR: Record<string, string> = {
  none: "bg-gray-500",
  candidate: "bg-amber-400",
  member: "bg-emerald-400",
  revoked: "bg-rose-400",
};

export default function ConcordPanel({ state, lang, onClose }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const concord = state.concord;
  const status = concord?.status ?? "none";
  const standing = concord?.standing ?? 0;
  const totalViolations = concord?.totalViolations ?? 0;
  const lastEval = concord?.lastEvaluatedTick ?? 0;
  const ticksSinceEval = state.tick - lastEval;
  const statusMeta = CONCORD_STATUS_META[status];

  const TICKS_TO_NEXT_EVAL = 300 - (ticksSinceEval % 300);

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className="fixed right-0 top-0 bottom-0 w-[380px] max-w-full bg-[#080c18]/95 backdrop-blur-xl border-l border-white/10 z-[60] flex flex-col shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-cyan-500/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${STATUS_RING_COLOR[status]} ${STATUS_BG[status]}`}>
            <Shield size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              {localize({ en: "Concord Standing", hu: "Concord Státusz", de: "Concord-Status", ro: "Status Concord" })}
            </h2>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-black uppercase tracking-widest ${STATUS_RING_COLOR[status]}`}>
                {localize(statusMeta.label)}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white/50 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Standing Gauge */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
                {localize({ en: "Galactic Standing", hu: "Galaktikus Tekintély", de: "Galaktisches Ansehen", ro: "Statut Galactic" })}
              </div>
              <div className="text-3xl font-black text-white leading-none">{standing}</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">
                {localize({ en: "Next Eval", hu: "Következő Értékelés", de: "Nächste Auswertung", ro: "Urm. Evaluare" })}
              </div>
              <div className="text-sm font-mono text-white/60">{TICKS_TO_NEXT_EVAL}s</div>
            </div>
          </div>

          {/* Progress bar segmented */}
          <div className="relative h-3 w-full bg-white/5 rounded-full overflow-hidden mt-2">
            <div
              className={`absolute left-0 top-0 h-full rounded-full transition-all duration-700 ${GAUGE_COLOR[status]}`}
              style={{ width: `${standing}%` }}
            />
            {/* Threshold markers */}
            <div className="absolute top-0 h-full w-px bg-amber-400/40" style={{ left: "40%" }} />
            <div className="absolute top-0 h-full w-px bg-emerald-400/40" style={{ left: "72%" }} />
          </div>
          <div className="flex justify-between mt-1.5 text-[8px] font-black text-white/20 uppercase">
            <span>0</span>
            <span className="text-amber-400/50">
              {localize({ en: "Candidate", hu: "Jelölt", de: "Kandidat", ro: "Candidat" })} 40
            </span>
            <span className="text-emerald-400/50">
              {localize({ en: "Member", hu: "Tag", de: "Mitglied", ro: "Membru" })} 72
            </span>
            <span>100</span>
          </div>
        </div>

        {/* Violations */}
        <div className={`rounded-2xl border p-4 flex items-center gap-4 ${totalViolations >= 5 ? "border-rose-500/30 bg-rose-500/5" : totalViolations >= 3 ? "border-amber-500/20 bg-amber-500/5" : "border-white/10 bg-white/[0.02]"}`}>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${totalViolations >= 5 ? "bg-rose-500/20 text-rose-400" : totalViolations >= 3 ? "bg-amber-500/20 text-amber-400" : "bg-white/5 text-white/40"}`}>
            <AlertTriangle size={20} />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
              {localize({ en: "Total Violations", hu: "Összes Szabályszegés", de: "Gesamte Verstöße", ro: "Total Încălcări" })}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-2xl font-black ${totalViolations >= 5 ? "text-rose-400" : totalViolations >= 3 ? "text-amber-400" : "text-white/80"}`}>
                {totalViolations}
              </span>
              <span className="text-sm font-black text-white/30">/ 5</span>
            </div>
            {totalViolations >= 5 && (
              <div className="text-[10px] text-rose-400/80 font-black mt-0.5">
                {localize({ en: "Membership revoked", hu: "Tagság visszavonva", de: "Mitgliedschaft widerrufen", ro: "Calitate revocată" })}
              </div>
            )}
          </div>
        </div>

        {/* Rules */}
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
            {localize({ en: "Compliance Rules", hu: "Megfelelési Szabályok", de: "Compliance-Regeln", ro: "Reguli de Conformitate" })}
          </div>
          <div className="space-y-2">
            {CONCORD_RULE_DEFINITIONS.map((rule) => {
              const passing = rule.check(state);
              return (
                <div
                  key={rule.id}
                  className={`rounded-xl border p-3 flex items-center gap-3 transition-all ${passing ? "border-emerald-500/20 bg-emerald-500/5" : "border-rose-500/20 bg-rose-500/5"}`}
                >
                  <div className={`shrink-0 ${passing ? "text-emerald-400" : "text-rose-400"}`}>
                    {passing ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-black text-white/80 truncate">{localize(rule.label)}</div>
                  </div>
                  <div className="shrink-0 text-[9px] font-black uppercase">
                    {passing ? (
                      <span className="text-emerald-400/70">+{rule.bonusPoints}</span>
                    ) : (
                      <span className="text-rose-400/70">−{rule.penaltyPoints}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Membership benefits */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-4">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-3">
            {localize({ en: "Member Benefits", hu: "Tagság Előnyei", de: "Mitgliedsvorteile", ro: "Beneficii Membre" })}
          </div>
          <div className="space-y-2 text-[11px] text-white/50">
            <div className={`flex items-center gap-2 ${status === "member" ? "text-emerald-300" : ""}`}>
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === "member" ? "bg-emerald-400" : "bg-white/20"}`} />
              {localize({ en: "+15% trade yield via Concord routes", hu: "+15% kereskedelmi hozam Concord útvonalakon", de: "+15% Handelserträge über Concord-Routen", ro: "+15% venit comercial pe rutele Concord" })}
            </div>
            <div className={`flex items-center gap-2 ${status === "member" ? "text-emerald-300" : ""}`}>
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === "member" ? "bg-emerald-400" : "bg-white/20"}`} />
              {localize({ en: "Access to restricted Codex entries", hu: "Hozzáférés korlátozott Kódex bejegyzésekhez", de: "Zugang zu gesperrten Kodex-Einträgen", ro: "Acces la intrări Codex restricționate" })}
            </div>
            <div className={`flex items-center gap-2 ${status === "revoked" ? "text-rose-400" : ""}`}>
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === "revoked" ? "bg-rose-400" : "bg-white/20"}`} />
              {localize({ en: "Revoked: −20% research speed penalty", hu: "Visszavonva: −20% kutatási sebesség büntetés", de: "Widerrufen: −20% Forschungsgeschwindigkeit", ro: "Revocat: −20% penalizare viteză cercetare" })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
