"use client";

import React from "react";
import { ArrowLeftRight, Check, X as XIcon } from "lucide-react";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { TradeOffer } from "@/lib/gravitas/sim/trade/types";
import type { GalaxyInventory } from "@/lib/gravitas/world/mission";
import { FACTION_COLORS, FACTION_NAMES, MATERIAL_MAP } from "./tradeShared";

interface Props {
  offer: TradeOffer;
  inventory: GalaxyInventory;
  localize: (ls: LocalizedString) => string;
  onAccept: (offerId: string) => void;
  onReject: (offerId: string) => void;
  onNegotiate: (offerId: string, intensity: "bargain" | "hardball") => void;
}

export default function TradeOfferCard({
  offer,
  inventory,
  localize,
  onAccept,
  onReject,
  onNegotiate,
}: Props) {
  const hasEnough = (inventory[offer.materialWanted as keyof GalaxyInventory] ?? 0) >= offer.amountWanted;
  const offMat = MATERIAL_MAP[offer.materialOffered];
  const wantMat = MATERIAL_MAP[offer.materialWanted];
  const discount = offer.amountWanted < offer.originalAmountWanted;

  return (
    <div className="flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-black/40 border-b border-white/5">
        <div
          className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${FACTION_COLORS[offer.factionId]}`}
        >
          {FACTION_NAMES[offer.factionId]}
        </div>
        <div className="flex gap-2">
          <div className="px-1.5 py-0.5 rounded bg-white/10 text-white/60 text-[9px] font-black uppercase tracking-widest">
            {offer.partnerType.replace("_", " ")}
          </div>
          <div className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-widest">
            {offer.routeType.replace("_", " ")}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col p-4 flex-1">
        <div className="flex items-center justify-between gap-4 flex-1">
          <div className="flex-1">
            <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">
              {localize({ en: "Offered", hu: "Kínál", de: "Bietet", ro: "Oferit" })}
            </div>
            <div className={`text-2xl font-black ${offMat?.color ?? "text-white"}`}>+{offer.amountOffered}</div>
            <div className="text-[10px] text-white/60">
              {offMat ? localize(offMat.label) : offer.materialOffered}
            </div>
          </div>

          <ArrowLeftRight size={20} className="text-white/20 shrink-0" />

          <div className="flex-1 text-right">
            <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">
              {localize({ en: "Wanted", hu: "Kér", de: "Verlangt", ro: "Cerut" })}
            </div>
            <div
              className={`text-2xl font-black flex justify-end gap-2 items-center ${
                hasEnough ? "text-white" : "text-rose-400"
              }`}
            >
              {discount && <span className="text-sm line-through text-white/30">{offer.originalAmountWanted}</span>}
              -{offer.amountWanted}
            </div>
            <div className="text-[10px] text-white/60">
              {wantMat ? localize(wantMat.label) : offer.materialWanted}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col border-t border-white/5 bg-black/20">
        {offer.negotiationAttempts < 2 ? (
          <div className="flex p-2 gap-2 border-b border-white/5">
            <button
              onClick={() => onNegotiate(offer.id, "bargain")}
              className="flex-1 py-1.5 rounded bg-white/5 hover:bg-white/10 text-[9px] font-black uppercase tracking-widest text-amber-200 transition"
            >
              Bargain (Safe)
            </button>
            <button
              onClick={() => onNegotiate(offer.id, "hardball")}
              className="flex-1 py-1.5 rounded bg-rose-900/20 hover:bg-rose-900/40 border border-rose-500/20 text-[9px] font-black uppercase tracking-widest text-rose-300 transition"
            >
              Hardball (Risky)
            </button>
          </div>
        ) : (
          <div className="p-2 text-center text-[9px] font-black uppercase tracking-widest text-rose-400/50 border-b border-white/5">
            Final Offer
          </div>
        )}
        <div className="grid grid-cols-2 divide-x divide-white/5">
          <button
            onClick={() => onReject(offer.id)}
            className="flex items-center justify-center gap-2 py-3 hover:bg-rose-900/20 text-rose-300/70 hover:text-rose-300 transition-colors text-[10px] font-black uppercase tracking-widest"
          >
            <XIcon size={14} />
            {localize({ en: "Reject", hu: "Elutasít", de: "Ablehnen", ro: "Respinge" })}
          </button>
          <button
            onClick={() => onAccept(offer.id)}
            disabled={!hasEnough}
            className="flex items-center justify-center gap-2 py-3 bg-emerald-600/10 hover:bg-emerald-600/30 disabled:bg-white/5 border-t-2 border-transparent hover:border-emerald-500/30 disabled:border-transparent text-emerald-400 disabled:text-white/20 transition-all text-[10px] font-black uppercase tracking-widest"
          >
            <Check size={14} />
            {localize({ en: "Deal", hu: "Üzlet", de: "Deal", ro: "Afacere" })}
          </button>
        </div>
      </div>
    </div>
  );
}
