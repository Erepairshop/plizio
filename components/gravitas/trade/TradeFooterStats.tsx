"use client";

import React from "react";
import { History } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";
import type { GalaxyInventory } from "@/lib/gravitas/world/mission";
import { getReputationTier } from "@/lib/gravitas/sim/faction/reputation";
import { FACTION_NAMES, MATERIAL_MAP, formatDuration } from "./tradeShared";

interface Props {
  state: StarholdState;
  inventory: GalaxyInventory;
  localize: (ls: LocalizedString) => string;
}

export default function TradeFooterStats({ state, inventory, localize }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/80 border-t border-white/10 backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">
            {localize({
              en: "Faction Reputation",
              hu: "Frakció Reputáció",
              de: "Fraktionsruf",
              ro: "Reputația Facțiunilor",
            })}
          </div>
          <div className="flex items-center gap-1.5">
            {(Object.keys(FACTION_NAMES) as FactionId[]).map((factionId) => {
              const rep = state.factionReputation.reputation[factionId] ?? 0;
              const tier = getReputationTier(rep);
              let color = "bg-white/20";
              if (tier === "hostile") color = "bg-rose-500";
              else if (tier === "tense") color = "bg-orange-400";
              else if (tier === "friendly") color = "bg-emerald-400";
              else if (tier === "allied") color = "bg-cyan-400";

              return (
                <div key={factionId} className="flex-1 flex flex-col gap-1 group relative">
                  <div className={`h-1.5 rounded-full ${color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-black rounded border border-white/10 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {FACTION_NAMES[factionId]}: {rep > 0 ? `+${rep}` : rep}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">
            <span>
              {localize({
                en: "Material Reserves",
                hu: "Anyagkészletek",
                de: "Materialreserven",
                ro: "Rezerve de Materiale",
              })}
            </span>
            <span className="flex items-center gap-1">
              <History size={10} /> {formatDuration(Date.now() - state.tradeSystem.lastRefreshAtTick)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {Object.entries(MATERIAL_MAP).map(([id, info]) => {
              const amount = inventory[id as keyof GalaxyInventory] ?? 0;
              return (
                <div key={id} className="flex items-center gap-1 text-[10px] font-mono" title={localize(info.label)}>
                  <span className={`${info.color} font-black`}>{info.code}</span>
                  <span className="text-white/70">{amount}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
