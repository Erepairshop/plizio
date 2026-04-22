"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Activity, Sparkles, Star } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  localize: (ls: LocalizedString) => string;
  starFeedback: number | null;
}

export default function GravitasHUD({ state, localize, starFeedback }: Props) {
  return (
    <div className="absolute top-24 left-6 flex flex-col gap-4 z-40">
      {/* Resource HUD */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-cyan-400" />
            <span className="text-sm font-black text-white tabular-nums">{Math.floor(state.resources.power)}</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-emerald-400" />
            <span className="text-sm font-black text-white tabular-nums">{Math.floor(state.resources.stability)}</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-fuchsia-400" />
            <span className="text-sm font-black text-white tabular-nums">{Math.floor(state.resources.activation)}%</span>
          </div>
        </div>

        {/* Star Feedback */}
        <AnimatePresence>
          {starFeedback !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.4)]"
            >
              <Star size={12} fill="currentColor" />
              <span className="text-[10px] font-black">+{starFeedback} {localize({ en: "Meta Essence", hu: "Meta Esszencia", de: "Meta-Essenz", ro: "Esență Meta" })}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phase Indicator */}
      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm self-start">
        <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
          {localize({ en: "Phase", hu: "Fázis", de: "Phase", ro: "Fază" })} {state.phase.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
