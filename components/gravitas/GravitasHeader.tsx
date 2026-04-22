"use client";

import React from "react";
import { ChevronLeft, History as HistoryIcon, Star, Layers, Shield, Radio } from "lucide-react";
import Link from "next/link";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  localize: (ls: LocalizedString) => string;
  onChronicleOpen: () => void;
  onShopOpen: () => void;
  onCodexOpen: () => void;
  onConcordOpen: () => void;
  onNpcStationsOpen: () => void;
}

export default function GravitasHeader({ state, localize, onChronicleOpen, onShopOpen, onCodexOpen, onConcordOpen, onNpcStationsOpen }: Props) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-md z-50">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2 text-white/40 hover:text-white transition-all"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
            <ChevronLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
            {localize({ en: "Exit", hu: "Kilépés", de: "Beenden", ro: "Ieșire" })}
          </span>
        </Link>

        <div className="flex flex-col">
          <h1 className="text-xl font-black tracking-tighter text-white leading-none uppercase">
            Gravitas
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${state.lockdown ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" : "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"}`} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
              {state.lockdown 
                ? localize({ en: "System Lockdown", hu: "Rendszerzár", de: "System-Lockdown", ro: "Blocare Sistem" }) 
                : localize({ en: "Station Active", hu: "Állomás Aktív", de: "Station Aktiv", ro: "Stație Activă" })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onNpcStationsOpen}
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all"
          title={localize({ en: "NPC Stations", hu: "NPC Állomások", de: "NPC-Stationen", ro: "Stații NPC" })}
        >
          <Radio size={13} />
        </button>
        <button
          onClick={onConcordOpen}
          className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
            state.concord?.status === "member"
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
              : state.concord?.status === "revoked"
              ? "border-rose-500/40 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
              : state.concord?.status === "candidate"
              ? "border-amber-500/30 bg-amber-500/5 text-amber-400 hover:bg-amber-500/10"
              : "border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
          }`}
          title={localize({ en: "Concord", hu: "Concord", de: "Concord", ro: "Concord" })}
        >
          <Shield size={13} />
        </button>
        <button
          onClick={onCodexOpen}
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all"
          title={localize({ en: "Codex", hu: "Kódex", de: "Kodex", ro: "Codex" })}
        >
          <Layers size={13} />
        </button>
        <button
          onClick={onChronicleOpen}
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all"
          title={localize({ en: "Chronicle", hu: "Krónika", de: "Chronik", ro: "Cronică" })}
        >
          <HistoryIcon size={12} />
          <span className="text-[11px] font-black uppercase tracking-tighter">
            {localize({ en: "Chronicle", hu: "Krónika", de: "Chronik", ro: "Cronică" })}
          </span>
        </button>
        <button
          onClick={onShopOpen}
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${state.progression.lastStarGain ? "border-amber-400 bg-amber-400/20 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)] animate-pulse scale-110" : state.progression.stars > 0 ? "border-amber-400/40 bg-amber-400/5 text-amber-400" : "border-white/10 bg-white/5 text-white/40"}`}
          title={localize({ en: "Star Chamber", hu: "Csillagkamra", de: "Sternenkammer", ro: "Camera Stelelor" })}
        >
          <Star size={12} fill={state.progression.stars > 0 ? "currentColor" : "none"} className={state.progression.stars === 0 ? "opacity-40" : ""} />
        </button>
      </div>
    </div>
  );
}
