"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertTriangle, ArrowRight, Clock, Box, ShieldAlert } from "lucide-react";
import type { NodeActionFeedback } from "@/lib/gravitas/sim/map/types";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

type Lang = "en" | "hu" | "de" | "ro";

function localize(lang: Lang, ls: LocalizedString) {
  return ls[lang] ?? ls.en;
}

export default function ActionFeedbackPanel({
  feedback,
  lang,
}: {
  feedback?: NodeActionFeedback | null;
  lang: Lang;
}) {
  const [visible, setVisible] = useState<NodeActionFeedback | null>(null);

  useEffect(() => {
    if (feedback) {
      setVisible(feedback);
      
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setVisible(null);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  if (!visible) return null;

  const isSuccess = visible.success;
  const toneClass = isSuccess ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-50" : "border-rose-500/30 bg-rose-500/10 text-rose-50";
  const glowClass = isSuccess ? "shadow-[0_0_30px_rgba(16,185,129,0.15)]" : "shadow-[0_0_30px_rgba(244,63,94,0.15)]";
  const Icon = isSuccess ? CheckCircle2 : AlertTriangle;

  return (
    <div className="absolute top-20 right-4 z-[100] w-80 pointer-events-none">
      <AnimatePresence>
        <motion.div
          key="feedback-panel"
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.95 }}
          className={`pointer-events-auto relative overflow-hidden rounded-2xl border p-4 backdrop-blur-md ${toneClass} ${glowClass}`}
        >
          <button
            type="button"
            onClick={() => setVisible(null)}
            className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/70 transition hover:bg-black/40 hover:text-white"
          >
            <X size={12} />
          </button>

          <div className="flex items-center gap-3 pr-8">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-black/20 ${isSuccess ? "border-emerald-400/40 text-emerald-400" : "border-rose-400/40 text-rose-400"}`}>
              <Icon size={20} />
            </div>
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">
                {localize(lang, {
                  en: "Action Report",
                  hu: "Műveleti Jelentés",
                  de: "Aktionsbericht",
                  ro: "Raport de Acțiune",
                })}
              </div>
              <div className="mt-0.5 text-sm font-black leading-tight">
                {localize(lang, visible.summary)}
              </div>
            </div>
          </div>

          {(visible.rewardSummary || visible.riskSummary || visible.etaSummary) && (
            <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
              {visible.rewardSummary && (
                <div className="col-span-2 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-950/40 px-3 py-2 text-emerald-100">
                  <Box size={12} className="shrink-0 text-emerald-400" />
                  <span>{visible.rewardSummary}</span>
                </div>
              )}
              {visible.riskSummary && (
                <div className="col-span-2 flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-950/40 px-3 py-2 text-amber-100">
                  <ShieldAlert size={12} className="shrink-0 text-amber-400" />
                  <span>{visible.riskSummary}</span>
                </div>
              )}
              {visible.etaSummary && (
                <div className="col-span-2 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-950/40 px-3 py-2 text-cyan-100">
                  <Clock size={12} className="shrink-0 text-cyan-400" />
                  <span>{visible.etaSummary}</span>
                </div>
              )}
            </div>
          )}

          {visible.nextSuggestedAction && (
            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
              <span className="text-[9px] font-black uppercase tracking-[0.15em] opacity-60">
                {localize(lang, {
                  en: "Suggested next step",
                  hu: "Javasolt következő lépés",
                  de: "Empfohlener nächster Schritt",
                  ro: "Următorul pas sugerat",
                })}
              </span>
              <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                <span>{visible.nextSuggestedAction}</span>
                <ArrowRight size={10} className="opacity-70" />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}