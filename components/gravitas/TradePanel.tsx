"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeftRight, Check, X as XIcon, Clock, Activity, History, Handshake, AlertTriangle, ShieldAlert } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";
import { getReputationTier } from "@/lib/gravitas/sim/faction/reputation";
import { loadSavedGalaxyInventory } from "@/lib/gravitas/world/mission";

interface TradePanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const FACTION_NAMES: Record<FactionId, string> = {
  korgath: "Korgath",
  velari: "Velari",
  drex: "Drex",
  synthoid: "Synthoid",
  noma: "Noma",
};

const FACTION_COLORS: Record<FactionId, string> = {
  korgath: "text-red-400 bg-red-400/10 border-red-400/30",
  velari: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  drex: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  synthoid: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  noma: "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/30",
};

const MATERIAL_MAP: Record<string, { code: string; color: string; label: LocalizedString }> = {
  lumen_dust: { code: "LD", color: "text-amber-300", label: { en: "Lumen Dust", hu: "Lumen Por", de: "Lumenstaub", ro: "Praf Lumen" } },
  verdant_crystals: { code: "VC", color: "text-emerald-300", label: { en: "Verdant Crystals", hu: "Zöld Kristály", de: "Grüne Kristalle", ro: "Cristale Verzi" } },
  aether_ore: { code: "AO", color: "text-blue-300", label: { en: "Aether Ore", hu: "Éter Érc", de: "Äthererz", ro: "Minereu Aether" } },
  ember_shards: { code: "ES", color: "text-rose-300", label: { en: "Ember Shards", hu: "Parázs Szilánk", de: "Glutsplitter", ro: "Cioburi de Jar" } },
  sable_alloy: { code: "SA", color: "text-slate-300", label: { en: "Sable Alloy", hu: "Sötét Ötvözet", de: "Zobellegierung", ro: "Aliaj Zibel" } },
  rift_stone: { code: "RS", color: "text-fuchsia-300", label: { en: "Rift Stone", hu: "Hasadékkő", de: "Riss-Stein", ro: "Piatră de Rift" } },
};

function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const h = Math.floor(ms / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function TradePanel({ state, doAction, onClose, lang }: TradePanelProps) {
  const [now, setNow] = useState(Date.now());
  const [inventory, setInventory] = useState(() => loadSavedGalaxyInventory());
  const [activeTab, setActiveTab] = useState<"offers" | "transit">("offers");

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setInventory(loadSavedGalaxyInventory());
  }, [state.tick]);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(255,180,30,0.15)";

  const handleAccept = (offerId: string) => {
    doAction({ type: "ACCEPT_TRADE", offerId }, dispatchColor);
  };

  const handleReject = (offerId: string) => {
    doAction({ type: "REJECT_TRADE", offerId }, "rgba(244,63,94,0.15)");
  };

  const handleNegotiate = (offerId: string, intensity: "bargain" | "hardball") => {
    doAction({ type: "NEGOTIATE_TRADE", offerId, intensity }, dispatchColor);
  };

  const isTradePhase = state.galaxyCycle.currentPhase === "trade";

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-amber-500/20 bg-black/40">
        <div className="flex items-center gap-3">
          <ArrowLeftRight size={20} className="text-amber-400" />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Trade Station", hu: "Kereskedelmi Állomás", de: "Handelsstation", ro: "Stație de Comerț" })}
            </h2>
            <p className="text-[10px] text-white/60">Inter-Faction Commerce</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
            state.tradeSystem.marketState === "cheap" ? "bg-emerald-900/30 border-emerald-500/30 text-emerald-200" :
            state.tradeSystem.marketState === "inflated" ? "bg-rose-900/30 border-rose-500/30 text-rose-200" :
            state.tradeSystem.marketState === "black_market" ? "bg-fuchsia-900/30 border-fuchsia-500/30 text-fuchsia-200 animate-pulse" :
            "bg-amber-900/30 border-amber-500/30 text-amber-200"
          }`}>
            <Activity size={12} />
            Market: {state.tradeSystem.marketState.replace('_', ' ')}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto p-2 gap-2 bg-black/40 border-b border-amber-500/10 shrink-0 scrollbar-hide">
        <button
          onClick={() => setActiveTab("offers")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
            activeTab === "offers" 
              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" 
              : "bg-white/5 text-white/40 border border-transparent hover:bg-white/10 hover:text-white/80"
          }`}
        >
          <ArrowLeftRight size={14} />
          {localize({ en: "Offers", hu: "Ajánlatok", de: "Angebote", ro: "Oferte" })}
          <span className="ml-1 px-1.5 py-0.5 rounded-full bg-black/50 text-[9px]">{state.tradeSystem.offers.length}</span>
        </button>
        <button
          onClick={() => setActiveTab("transit")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
            activeTab === "transit" 
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" 
              : "bg-white/5 text-white/40 border border-transparent hover:bg-white/10 hover:text-white/80"
          }`}
        >
          <Clock size={14} />
          {localize({ en: "In Transit", hu: "Úton", de: "Unterwegs", ro: "În Tranzit" })}
          <span className="ml-1 px-1.5 py-0.5 rounded-full bg-black/50 text-[9px]">{state.tradeSystem.activeTrades.length}</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "offers" && (
            <motion.div key="offers" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1 overflow-y-auto p-4 h-full absolute inset-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-32">
                {state.tradeSystem.offers.length === 0 ? (
                  <div className="col-span-full py-10 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                    {localize({ 
                      en: "No active offers. New offers will arrive in the next cycle.", 
                      hu: "Nincs aktív ajánlat. Új ajánlatok a következő ciklusban érkeznek.", 
                      de: "Keine aktiven Angebote. Neue Angebote kommen im nächsten Zyklus.", 
                      ro: "Nicio ofertă activă. Oferte noi vor sosi în următorul ciclu." 
                    })}
                  </div>
                ) : (
                  state.tradeSystem.offers.map(offer => {
                    const rep = state.factionReputation.reputation[offer.factionId] ?? 0;
                    const tier = getReputationTier(rep);
                    const hasEnough = (inventory[offer.materialWanted as keyof typeof inventory] ?? 0) >= offer.amountWanted;
                    const timeRemaining = Math.max(0, offer.expiresAt - now);

                    const offMat = MATERIAL_MAP[offer.materialOffered];
                    const wantMat = MATERIAL_MAP[offer.materialWanted];
                    const discount = offer.amountWanted < offer.originalAmountWanted;

                    return (
                      <div key={offer.id} className="flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
                        {/* Offer Header */}
                        <div className="flex items-center justify-between px-3 py-2 bg-black/40 border-b border-white/5">
                          <div className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${FACTION_COLORS[offer.factionId]}`}>
                            {FACTION_NAMES[offer.factionId]}
                          </div>
                          <div className="flex gap-2">
                            <div className="px-1.5 py-0.5 rounded bg-white/10 text-white/60 text-[9px] font-black uppercase tracking-widest">
                              {offer.partnerType.replace('_', ' ')}
                            </div>
                            <div className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-widest">
                              {offer.routeType.replace('_', ' ')}
                            </div>
                          </div>
                        </div>

                        {/* Offer Body */}
                        <div className="flex flex-col p-4 flex-1">
                          <div className="flex items-center justify-between gap-4 flex-1">
                            {/* Gives */}
                            <div className="flex-1">
                              <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">
                                {localize({ en: "Offered", hu: "Kínál", de: "Bietet", ro: "Oferit" })}
                              </div>
                              <div className={`text-2xl font-black ${offMat?.color ?? "text-white"}`}>
                                +{offer.amountOffered}
                              </div>
                              <div className="text-[10px] text-white/60">
                                {offMat ? localize(offMat.label) : offer.materialOffered}
                              </div>
                            </div>

                            <ArrowLeftRight size={20} className="text-white/20 shrink-0" />

                            {/* Wants */}
                            <div className="flex-1 text-right">
                              <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">
                                {localize({ en: "Wanted", hu: "Kér", de: "Verlangt", ro: "Cerut" })}
                              </div>
                              <div className={`text-2xl font-black flex justify-end gap-2 items-center ${hasEnough ? "text-white" : "text-rose-400"}`}>
                                {discount && <span className="text-sm line-through text-white/30">{offer.originalAmountWanted}</span>}
                                -{offer.amountWanted}
                              </div>
                              <div className="text-[10px] text-white/60">
                                {wantMat ? localize(wantMat.label) : offer.materialWanted}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Negotiation / Actions */}
                        <div className="flex flex-col border-t border-white/5 bg-black/20">
                          {offer.negotiationAttempts < 2 ? (
                            <div className="flex p-2 gap-2 border-b border-white/5">
                              <button
                                onClick={() => handleNegotiate(offer.id, "bargain")}
                                className="flex-1 py-1.5 rounded bg-white/5 hover:bg-white/10 text-[9px] font-black uppercase tracking-widest text-amber-200 transition"
                              >
                                Bargain (Safe)
                              </button>
                              <button
                                onClick={() => handleNegotiate(offer.id, "hardball")}
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
                              onClick={() => handleReject(offer.id)}
                              className="flex items-center justify-center gap-2 py-3 hover:bg-rose-900/20 text-rose-300/70 hover:text-rose-300 transition-colors text-[10px] font-black uppercase tracking-widest"
                            >
                              <XIcon size={14} />
                              {localize({ en: "Reject", hu: "Elutasít", de: "Ablehnen", ro: "Respinge" })}
                            </button>
                            <button
                              onClick={() => handleAccept(offer.id)}
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
                  })
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "transit" && (
            <motion.div key="transit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1 overflow-y-auto p-4 h-full absolute inset-0">
              <div className="space-y-4 pb-32">
                {state.tradeSystem.activeTrades.length === 0 ? (
                  <div className="py-10 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                    {localize({ 
                      en: "No shipments currently in transit.", 
                      hu: "Jelenleg nincsenek szállítmányok úton.", 
                      de: "Derzeit keine Lieferungen unterwegs.", 
                      ro: "Niciun transport în tranzit în prezent." 
                    })}
                  </div>
                ) : (
                  state.tradeSystem.activeTrades.map(trade => {
                    const timeRemaining = Math.max(0, trade.completesAt - now);
                    const totalDuration = trade.completesAt - trade.startedAt;
                    const progress = totalDuration > 0 ? 100 - (timeRemaining / totalDuration) * 100 : 100;
                    
                    const isDelayed = trade.status === "delayed";
                    
                    return (
                      <div key={trade.id} className="bg-black/40 border border-cyan-500/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${FACTION_COLORS[trade.offer.factionId]}`}>
                              {FACTION_NAMES[trade.offer.factionId]}
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-widest">
                              {trade.offer.routeType.replace('_', ' ')}
                            </span>
                            {isDelayed && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-widest animate-pulse flex items-center gap-1">
                                <AlertTriangle size={10} /> Delayed
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                            <Clock size={12} /> ETA: {formatDuration(timeRemaining)}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono mb-3">
                          <span className="text-white/60">Expecting:</span>
                          <span className="text-emerald-400">+{trade.offer.amountOffered} {MATERIAL_MAP[trade.offer.materialOffered]?.code ?? trade.offer.materialOffered}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-black border border-white/10 rounded-full overflow-hidden relative">
                          <motion.div 
                            className={`h-full ${isDelayed ? "bg-amber-500" : "bg-cyan-500"}`}
                            initial={{ width: `${progress}%` }}
                            animate={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trade Stats Footer */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/80 border-t border-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Reputation */}
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">
              {localize({ en: "Faction Reputation", hu: "Frakció Reputáció", de: "Fraktionsruf", ro: "Reputația Facțiunilor" })}
            </div>
            <div className="flex items-center gap-1.5">
              {(Object.keys(FACTION_NAMES) as FactionId[]).map(factionId => {
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
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-black rounded border border-white/10 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      {FACTION_NAMES[factionId]}: {rep > 0 ? `+${rep}` : rep}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inventory overview */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">
              <span>{localize({ en: "Material Reserves", hu: "Anyagkészletek", de: "Materialreserven", ro: "Rezerve de Materiale" })}</span>
              <span className="flex items-center gap-1"><History size={10} /> {formatDuration(Date.now() - state.tradeSystem.lastRefreshAt)}</span>
            </div>
            <div className="flex items-center gap-3">
              {Object.entries(MATERIAL_MAP).map(([id, info]) => {
                const amount = inventory[id as keyof typeof inventory] ?? 0;
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
    </div>
  );
}
