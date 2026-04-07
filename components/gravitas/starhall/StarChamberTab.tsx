"use client";

import React from "react";
import { Star, Sparkles, ShieldCheck, Gift, Gem } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { STARHOLD_SHOP_ITEMS, STARHOLD_MILESTONES } from "@/lib/gravitas/sim/progression";
import { getHybridCost, getPricingTier, TIER_COLOR, TIER_LABEL } from "./starhallShared";

interface Props {
  state: StarholdState;
  lang: string;
  onBuy: (itemId: string) => void;
  onClaim: (milestoneId: string) => void;
}

export default function StarChamberTab({ state, lang, onBuy, onClaim }: Props) {
  const stars = state.progression.stars;
  const unlocked = state.progression.unlockedItems;
  const unclaimed = state.progression.unclaimedMilestones ?? [];
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      {unclaimed.length > 0 && (
        <section className="rounded-2xl border border-amber-400/30 bg-amber-500/5 p-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.25),transparent_60%)]" />
          <div className="relative flex items-center gap-2 mb-3">
            <Sparkles size={12} className="text-amber-300" />
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-black">
              {localize({ en: "Pending Tribute", hu: "Beváltásra Vár", de: "Ausstehender Tribut", ro: "Tribut în Așteptare" })}
            </h3>
          </div>
          <div className="relative space-y-2">
            {unclaimed.map((id) => {
              const milestone = STARHOLD_MILESTONES.find((m) => m.id === id);
              if (!milestone) return null;
              return (
                <div key={id} className="flex items-center justify-between gap-3 rounded-xl border border-amber-400/20 bg-black/40 p-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Gift size={16} className="text-amber-300 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-black text-white truncate">{localize(milestone.label)}</div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-amber-200/60 font-black">
                        {localize({ en: "Milestone reached", hu: "Mérföldkő elérve", de: "Meilenstein erreicht", ro: "Reper atins" })}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onClaim(id)}
                    className="px-3 py-1.5 rounded-md bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                  >
                    +{milestone.rewardStars}
                    <Star size={10} className="inline ml-1" fill="currentColor" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-black">
            {localize({ en: "Stellar Catalog", hu: "Csillag Katalógus", de: "Stellarer Katalog", ro: "Catalog Stelar" })}
          </h3>
          <div className="flex items-center gap-1 text-[10px] font-black text-amber-300">
            <Star size={10} fill="currentColor" />
            {stars}
          </div>
        </div>
        <div className="grid gap-3">
          {STARHOLD_SHOP_ITEMS.map((item) => {
            const isUnlocked = unlocked.includes(item.id);
            const hybrid = getHybridCost(item);
            const tier = getPricingTier(item);
            const canAfford = stars >= hybrid.stars;

            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3 flex items-center justify-between gap-3 transition-colors ${
                  isUnlocked
                    ? "border-emerald-500/25 bg-emerald-500/5"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      item.type === "cosmetic" ? "bg-cyan-400/10 text-cyan-300" : "bg-indigo-400/10 text-indigo-300"
                    }`}
                  >
                    {item.type === "cosmetic" ? <Sparkles size={16} /> : <ShieldCheck size={16} />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="font-black text-white text-xs truncate">{localize(item.name)}</div>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border ${TIER_COLOR[tier]}`}
                      >
                        {localize(TIER_LABEL[tier])}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/50 leading-snug line-clamp-2">{localize(item.description)}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    {hybrid.stars > 0 && (
                      <span className="flex items-center gap-0.5 text-amber-300 font-black">
                        <Star size={9} fill="currentColor" />
                        {hybrid.stars}
                      </span>
                    )}
                    {hybrid.materialAmount != null && hybrid.materialLabel && (
                      <span className="flex items-center gap-0.5 text-emerald-300 font-black">
                        <Gem size={9} />
                        {hybrid.materialAmount}
                      </span>
                    )}
                  </div>
                  <button
                    disabled={isUnlocked || !canAfford}
                    onClick={() => onBuy(item.id)}
                    className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest transition ${
                      isUnlocked
                        ? "bg-emerald-500/10 text-emerald-300 cursor-default"
                        : canAfford
                          ? "bg-amber-400 text-black hover:brightness-110 active:scale-95"
                          : "bg-white/5 text-white/25 cursor-not-allowed"
                    }`}
                  >
                    {isUnlocked
                      ? localize({ en: "Owned", hu: "Megvan", de: "Erworben", ro: "Deținut" })
                      : localize({ en: "Acquire", hu: "Megszerez", de: "Kaufen", ro: "Obține" })}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-black mb-3">
          {localize({ en: "Milestones in Progress", hu: "Folyamatban Lévő Mérföldkövek", de: "Meilensteine in Arbeit", ro: "Repere în Curs" })}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {STARHOLD_MILESTONES.filter((m) => !state.progression.completedMilestones.includes(m.id)).map((m) => {
            const progress = m.getProgress?.(state) ?? 0;
            return (
              <div key={m.id} className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                <div className="text-[11px] font-black text-white/80 mb-1.5 truncate">{localize(m.label)}</div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-1 flex items-center justify-between text-[9px] font-black uppercase tracking-widest">
                  <span className="text-white/40">{Math.floor(progress)}%</span>
                  <span className="text-amber-300 flex items-center gap-0.5">
                    +{m.rewardStars}
                    <Star size={8} fill="currentColor" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
