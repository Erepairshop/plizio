"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Swords, Shield, Target, AlertCircle, ShieldAlert } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import type { FactionWar } from "@/lib/gravitas/sim/factionwars/types";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";

interface FactionWarsPanelProps {
  state: StarholdState;
  onIntervene: (war: FactionWar, side: "attacker" | "defender") => void;
  onClose: () => void;
  lang: string;
}

const FACTION_COLORS: Record<FactionId, string> = {
  korgath: "text-red-400 border-red-400/30",
  velari: "text-emerald-400 border-emerald-400/30",
  drex: "text-amber-400 border-amber-400/30",
  synthoid: "text-cyan-400 border-cyan-400/30",
  noma: "text-fuchsia-400 border-fuchsia-400/30",
};

export default function FactionWarsPanel({ state, onIntervene, onClose, lang }: FactionWarsPanelProps) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const activeWars = state.factionWars?.activeWars ?? [];

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      <div className="flex items-center justify-between px-4 py-3 border-b border-orange-500/20 bg-black/40">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-orange-500/20 text-orange-400 rounded-lg">
            <Swords size={20} />
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Galactic Conflicts", hu: "Galaktikus Konfliktusok", de: "Galaktische Konflikte", ro: "Conflicte Galactice" })}
            </h2>
            <p className="text-[10px] text-white/60 uppercase tracking-widest">Faction Wars</p>
          </div>
        </div>
        <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {activeWars.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-white/30 border border-white/5 rounded-2xl border-dashed">
            <ShieldAlert size={48} className="mb-4 opacity-20" />
            <p className="text-sm font-black uppercase tracking-widest">
              {localize({ en: "No active conflicts detected in the sector.", hu: "Nincs aktív konfliktus a szektorban.", de: "Keine aktiven Konflikte im Sektor.", ro: "Niciun conflict activ detectat în sector." })}
            </p>
          </div>
        ) : (
          activeWars.map(war => {
            const attacker = GALAXY_FACTIONS[war.attackerId];
            const defender = GALAXY_FACTIONS[war.defenderId];
            
            const hoursLeft = Math.max(0, Math.ceil((war.endsAt - Date.now()) / 3600000));

            return (
              <div key={war.id} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-6 relative">
                  
                  {/* Attacker Side */}
                  <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right w-full relative z-10">
                    <span className="text-[10px] uppercase font-black tracking-widest text-rose-400 mb-1 flex items-center gap-1">
                      <Target size={12} /> {localize({ en: "Aggressor", hu: "Támadó", de: "Angreifer", ro: "Agresor" })}
                    </span>
                    <div className={`text-xl font-black uppercase tracking-widest ${FACTION_COLORS[war.attackerId].split(' ')[0]}`}>
                      {localize(attacker.name)}
                    </div>
                    <div className="text-[10px] text-white/40 mt-1 max-w-[200px]">
                      {localize(attacker.combatStyle)}
                    </div>
                    <button
                      onClick={() => onIntervene(war, "attacker")}
                      className="mt-4 px-4 py-2 bg-rose-500/20 hover:bg-rose-500/40 border border-rose-500/30 text-rose-300 rounded-lg text-[10px] font-black uppercase tracking-widest transition flex items-center gap-2"
                    >
                      <Swords size={14} />
                      {localize({ en: "Join Assault", hu: "Csatlakozás a Támadáshoz", de: "Angriff beitreten", ro: "Alătură-te Asaltului" })}
                    </button>
                  </div>

                  {/* VS divider */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-lg shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                      VS
                    </div>
                    <div className="mt-2 text-[10px] font-mono text-orange-200/60 text-center">
                      Intensity: {"★".repeat(war.intensity)}
                      <br/>
                      Ends in: {hoursLeft}h
                    </div>
                  </div>

                  {/* Defender Side */}
                  <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full relative z-10">
                    <span className="text-[10px] uppercase font-black tracking-widest text-cyan-400 mb-1 flex items-center gap-1">
                      <Shield size={12} /> {localize({ en: "Defender", hu: "Védő", de: "Verteidiger", ro: "Apărător" })}
                    </span>
                    <div className={`text-xl font-black uppercase tracking-widest ${FACTION_COLORS[war.defenderId].split(' ')[0]}`}>
                      {localize(defender.name)}
                    </div>
                    <div className="text-[10px] text-white/40 mt-1 max-w-[200px]">
                      {localize(defender.combatStyle)}
                    </div>
                    <button
                      onClick={() => onIntervene(war, "defender")}
                      className="mt-4 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 text-cyan-300 rounded-lg text-[10px] font-black uppercase tracking-widest transition flex items-center gap-2"
                    >
                      <Shield size={14} />
                      {localize({ en: "Join Defense", hu: "Csatlakozás a Védelemhez", de: "Verteidigung beitreten", ro: "Alătură-te Apărării" })}
                    </button>
                  </div>

                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}