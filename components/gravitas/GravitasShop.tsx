"use client";

import React from "react";
import { X, Star, Sparkles, ShieldCheck, Gift } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { STARHOLD_SHOP_ITEMS, STARHOLD_MILESTONES } from "@/lib/gravitas/sim/progression";

interface Props {
  state: StarholdState;
  lang: string;
  ui: {
    shopTitle: LocalizedString;
    shopStars: LocalizedString;
    shopUnlock: LocalizedString;
    shopDescription: LocalizedString;
  };
  onClose: () => void;
  onBuy: (itemId: string) => void;
  onClaim: (milestoneId: string) => void;
}

export default function GravitasShop({ state, lang, ui, onClose, onBuy, onClaim }: Props) {
  const stars = state.progression.stars;
  const unlocked = state.progression.unlockedItems;
  const unclaimed = state.progression.unclaimedMilestones || [];

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#0a0f1e] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-white">{localize(ui.shopTitle)}</h2>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{stars} {localize(ui.shopStars)}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {unclaimed.length > 0 && (
            <div className="mb-8 space-y-3 p-4 rounded-3xl bg-amber-400/10 border border-amber-400/20 relative overflow-hidden">
              {/* Simple background confetti animation would be here, using a CSS class */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.2)_0%,transparent_70%)] animate-pulse" />
              
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-black mb-4 flex items-center gap-2">
                <Sparkles size={12} /> Pending Rewards
              </h3>
              {unclaimed.map(id => {
                const milestone = STARHOLD_MILESTONES.find(m => m.id === id);
                if (!milestone) return null;
                return (
                  <div key={id} className="rounded-2xl border border-amber-400/30 bg-black/40 p-4 flex items-center justify-between gap-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <Gift size={20} className="text-amber-400" />
                      <div>
                        <div className="text-sm font-black text-white">{localize(milestone.label)}</div>
                        <div className="text-[10px] text-amber-200/60 font-bold uppercase tracking-widest">Milestone Achieved</div>
                      </div>
                    </div>
                    <button
                      onClick={() => onClaim(id)}
                      className="px-4 py-2 rounded-lg bg-amber-400 text-black text-xs font-black hover:scale-105 active:scale-95 transition shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                    >
                      CLAIM +{milestone.rewardStars}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="grid gap-6">
            {/* Active Milestones (In Progress) */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-black mb-2">Milestones in Progress</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STARHOLD_MILESTONES.filter(m => !state.progression.completedMilestones.includes(m.id)).map(milestone => {
                  const progress = milestone.getProgress?.(state) ?? 0;
                  return (
                    <div key={milestone.id} className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                      <div className="text-xs font-black text-white/80 mb-2 truncate">{localize(milestone.label)}</div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="text-[9px] font-black text-white/40 uppercase">Progress</div>
                        <div className="text-[9px] font-black text-cyan-400">{Math.floor(progress)}%</div>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-px w-full bg-white/5 my-2" />

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-black mb-2">Starhold Shop</h3>
              <div className="grid gap-4">
                {STARHOLD_SHOP_ITEMS.map((item) => {
              const isUnlocked = unlocked.includes(item.id);
              const canAfford = stars >= item.cost;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-5 flex items-center justify-between gap-4 transition-all ${isUnlocked ? "border-emerald-500/20 bg-emerald-500/5" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.type === "cosmetic" ? "bg-cyan-400/10 text-cyan-400" : "bg-indigo-400/10 text-indigo-400"}`}>
                      {item.type === "cosmetic" ? <Sparkles size={24} /> : <ShieldCheck size={24} />}
                    </div>
                    <div>
                      <div className="font-black text-white">{localize(item.name)}</div>
                      <p className="text-sm text-white/50 leading-snug max-w-[300px]">{localize(item.description)}</p>
                    </div>
                  </div>

                  <button
                    disabled={isUnlocked || !canAfford}
                    onClick={() => onBuy(item.id)}
                    className={`px-5 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
                      isUnlocked
                        ? "bg-emerald-500/10 text-emerald-400 cursor-default"
                        : canAfford
                          ? "bg-amber-400 text-black hover:scale-105 active:scale-95"
                          : "bg-white/5 text-white/20 cursor-not-allowed"
                    }`}
                  >
                    {isUnlocked ? (
                      localize(ui.shopUnlock)
                    ) : (
                      <>
                        <Star size={14} fill="currentColor" />
                        {item.cost}
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-6 bg-white/[0.02] border-top border-white/5">
           <p className="text-[11px] text-center text-white/30 font-medium leading-relaxed max-w-[400px] mx-auto">
             {localize(ui.shopDescription)}
           </p>
        </div>
      </div>
    </div>
  );
}
