"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeftRight, Clock, Activity } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import { loadSavedGalaxyInventory } from "@/lib/gravitas/world/mission";
import TradeOfferCard from "@/components/gravitas/trade/TradeOfferCard";
import TradeTransitCard from "@/components/gravitas/trade/TradeTransitCard";
import TradeFooterStats from "@/components/gravitas/trade/TradeFooterStats";
import { localizeWith } from "@/components/gravitas/trade/tradeShared";

interface TradePanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
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

  const localize = localizeWith(lang);
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
          <MarketBadge marketState={state.tradeSystem.marketState} />
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto p-2 gap-2 bg-black/40 border-b border-amber-500/10 shrink-0 scrollbar-hide">
        <TabPill
          active={activeTab === "offers"}
          accent="amber"
          icon={<ArrowLeftRight size={14} />}
          label={localize({ en: "Offers", hu: "Ajánlatok", de: "Angebote", ro: "Oferte" })}
          count={state.tradeSystem.offers.length}
          onClick={() => setActiveTab("offers")}
        />
        <TabPill
          active={activeTab === "transit"}
          accent="cyan"
          icon={<Clock size={14} />}
          label={localize({ en: "In Transit", hu: "Úton", de: "Unterwegs", ro: "În Tranzit" })}
          count={state.tradeSystem.activeTrades.length}
          onClick={() => setActiveTab("transit")}
        />
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "offers" && (
            <motion.div
              key="offers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 overflow-y-auto p-4 h-full absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-32">
                {state.tradeSystem.offers.length === 0 ? (
                  <div className="col-span-full py-10 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                    {localize({
                      en: "No active offers. New offers will arrive in the next cycle.",
                      hu: "Nincs aktív ajánlat. Új ajánlatok a következő ciklusban érkeznek.",
                      de: "Keine aktiven Angebote. Neue Angebote kommen im nächsten Zyklus.",
                      ro: "Nicio ofertă activă. Oferte noi vor sosi în următorul ciclu.",
                    })}
                  </div>
                ) : (
                  state.tradeSystem.offers.map((offer) => (
                    <TradeOfferCard
                      key={offer.id}
                      offer={offer}
                      inventory={inventory}
                      localize={localize}
                      onAccept={handleAccept}
                      onReject={handleReject}
                      onNegotiate={handleNegotiate}
                    />
                  ))
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "transit" && (
            <motion.div
              key="transit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 overflow-y-auto p-4 h-full absolute inset-0"
            >
              <div className="space-y-4 pb-32">
                {state.tradeSystem.activeTrades.length === 0 ? (
                  <div className="py-10 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                    {localize({
                      en: "No shipments currently in transit.",
                      hu: "Jelenleg nincsenek szállítmányok úton.",
                      de: "Derzeit keine Lieferungen unterwegs.",
                      ro: "Niciun transport în tranzit în prezent.",
                    })}
                  </div>
                ) : (
                  state.tradeSystem.activeTrades.map((trade) => (
                    <TradeTransitCard key={trade.id} trade={trade} now={now} />
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <TradeFooterStats state={state} inventory={inventory} localize={localize} />
    </div>
  );
}

function MarketBadge({ marketState }: { marketState: StarholdState["tradeSystem"]["marketState"] }) {
  return (
    <div
      className={`px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
        marketState === "cheap"
          ? "bg-emerald-900/30 border-emerald-500/30 text-emerald-200"
          : marketState === "inflated"
            ? "bg-rose-900/30 border-rose-500/30 text-rose-200"
            : marketState === "black_market"
              ? "bg-fuchsia-900/30 border-fuchsia-500/30 text-fuchsia-200 animate-pulse"
              : "bg-amber-900/30 border-amber-500/30 text-amber-200"
      }`}
    >
      <Activity size={12} />
      Market: {marketState.replace("_", " ")}
    </div>
  );
}

interface TabPillProps {
  active: boolean;
  accent: "amber" | "cyan";
  icon: React.ReactNode;
  label: string;
  count: number;
  onClick: () => void;
}

function TabPill({ active, accent, icon, label, count, onClick }: TabPillProps) {
  const activeCls =
    accent === "amber"
      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
      : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
        active ? activeCls : "bg-white/5 text-white/40 border border-transparent hover:bg-white/10 hover:text-white/80"
      }`}
    >
      {icon}
      {label}
      <span className="ml-1 px-1.5 py-0.5 rounded-full bg-black/50 text-[9px]">{count}</span>
    </button>
  );
}
