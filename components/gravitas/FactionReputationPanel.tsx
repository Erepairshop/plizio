"use client";

import { motion } from "framer-motion";
import { X, Users, Crosshair, Shield, Activity, Eye, Radar } from "lucide-react";
import type { FactionReputationState, ReputationTier } from "@/lib/gravitas/sim/faction/types";
import { getReputationTier } from "@/lib/gravitas/sim/faction/reputation";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";
import type { FactionId } from "@/lib/gravitas/sim/battle/factions";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

interface FactionReputationPanelProps {
  factionReputation: FactionReputationState;
  lang: string;
  onClose: () => void;
}

const FACTION_ORDER: FactionId[] = ["korgath", "velari", "drex", "synthoid", "noma"];

const TIER_COLORS: Record<ReputationTier, string> = {
  hostile: "text-red-400 bg-red-400/20",
  tense: "text-orange-400 bg-orange-400/20",
  neutral: "text-white/60 bg-white/20",
  friendly: "text-green-400 bg-green-400/20",
  allied: "text-cyan-400 bg-cyan-400/20",
};

const TIER_GRADIENTS: Record<ReputationTier, string> = {
  hostile: "from-red-500/80 to-red-400/80",
  tense: "from-orange-500/80 to-orange-400/80",
  neutral: "from-white/40 to-white/30",
  friendly: "from-green-500/80 to-green-400/80",
  allied: "from-cyan-500/80 to-cyan-400/80",
};

const TIER_NAMES: Record<ReputationTier, LocalizedString> = {
  hostile: { en: "Hostile", hu: "Ellenséges", de: "Feindlich", ro: "Ostil" },
  tense: { en: "Tense", hu: "Feszült", de: "Angespannt", ro: "Tensionat" },
  neutral: { en: "Neutral", hu: "Semleges", de: "Neutral", ro: "Neutru" },
  friendly: { en: "Friendly", hu: "Barátságos", de: "Freundlich", ro: "Prietenos" },
  allied: { en: "Allied", hu: "Szövetséges", de: "Aliat", ro: "Aliat" },
};

export default function FactionReputationPanel({ factionReputation, lang, onClose }: FactionReputationPanelProps) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  // Find best and worst factions
  let bestFaction: FactionId | null = null;
  let worstFaction: FactionId | null = null;
  let bestVal = -Infinity;
  let worstVal = Infinity;

  FACTION_ORDER.forEach(fid => {
    const val = factionReputation.reputation[fid] ?? 0;
    if (val > bestVal) { bestVal = val; bestFaction = fid; }
    if (val < worstVal) { worstVal = val; worstFaction = fid; }
  });

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 z-[60] bg-[#0a0f1e]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-[32px] flex flex-col max-h-[85vh] lg:max-h-none">
      <div className="sticky top-0 z-10 bg-[#0a0f1e]/80 backdrop-blur-md flex items-center justify-between p-6 border-b border-white/5 rounded-t-[32px]">
        <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
          <Users size={20} className="text-purple-400" />
          {localize({ en: "Factions", hu: "Frakciók", de: "Fraktionen", ro: "Facțiuni" })}
        </h2>
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-32 space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl border border-white/5 bg-black/20 flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
              {localize({ en: "Highest Standing", hu: "Legjobb Viszony", de: "Höchstes Ansehen", ro: "Cea mai bună reputație" })}
            </span>
            <span className="text-sm font-black text-cyan-400">{bestFaction ? localize(GALAXY_FACTIONS[bestFaction as keyof typeof GALAXY_FACTIONS].name) : "—"}</span>
          </div>
          <div className="p-3 rounded-xl border border-white/5 bg-black/20 flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
              {localize({ en: "Lowest Standing", hu: "Legrosszabb Viszony", de: "Niedrigstes Ansehen", ro: "Cea mai proastă reputație" })}
            </span>
            <span className="text-sm font-black text-red-400">{worstFaction ? localize(GALAXY_FACTIONS[worstFaction as keyof typeof GALAXY_FACTIONS].name) : "—"}</span>
          </div>
        </div>

        {/* Faction Cards */}
        <div className="space-y-4">
          {FACTION_ORDER.map(factionId => {
            const faction = GALAXY_FACTIONS[factionId];
            const repValue = factionReputation.reputation[factionId] ?? 0;
            const tier = getReputationTier(repValue);
            
            // Calculate bar properties (range -100 to 100 mapped to 0% to 100%)
            const barWidth = `${Math.abs(repValue)}%`;
            const isNegative = repValue < 0;
            const barLeft = isNegative ? `${50 - Math.abs(repValue) / 2}%` : '50%';
            const barRight = isNegative ? 'auto' : '50%';

            return (
              <div key={factionId} className="flex flex-col p-4 rounded-2xl border border-white/10 bg-white/5 overflow-hidden relative">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${TIER_COLORS[tier]}`}>
                      {localize(TIER_NAMES[tier])}
                    </div>
                    <div className="text-base font-black text-white/90">
                      {localize(faction.name)}
                    </div>
                  </div>
                  <div className={`text-lg font-black ${repValue < 0 ? 'text-red-400' : repValue > 0 ? 'text-green-400' : 'text-white/60'}`}>
                    {repValue > 0 ? `+${repValue}` : repValue}
                  </div>
                </div>

                {/* Reputation Bar */}
                <div className="relative h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5 mb-3">
                  {/* Center Line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20 z-10" />
                  
                  {/* Fill */}
                  {repValue !== 0 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.abs(repValue) / 2}%`, x: isNegative ? '-100%' : '0%' }}
                      className={`absolute top-0 bottom-0 left-1/2 bg-gradient-to-r ${TIER_GRADIENTS[tier]}`}
                      style={{ originX: isNegative ? 1 : 0 }}
                    />
                  )}
                </div>

                <div className="text-[11px] text-white/60 leading-relaxed">
                  {localize(faction.description)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}