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
            <div className="mb-8 space-y-3">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-black mb-4">Pending Rewards</h3>
              {unclaimed.map(id => {
                const milestone = STARHOLD_MILESTONES.find(m => m.id === id);
                if (!milestone) return null;
                return (
                  <div key={id} className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4 flex items-center justify-between gap-4 animate-pulse">
                    <div className="flex items-center gap-3">
                      <Gift size={20} className="text-amber-400" />
                      <div>
                        <div className="text-sm font-black text-white">{localize(milestone.label)}</div>
                        <div className="text-[10px] text-amber-200/60 font-bold uppercase tracking-widest">Milestone Achieved</div>
                      </div>
                    </div>
                    <button
                      onClick={() => onClaim(id)}
                      className="px-4 py-2 rounded-lg bg-amber-400 text-black text-xs font-black hover:scale-105 active:scale-95 transition"
                    >
                      CLAIM +{milestone.rewardStars}
                    </button>
                  </div>
                );
              })}
              <div className="h-px w-full bg-white/5 my-6" />
            </div>
          )}

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
