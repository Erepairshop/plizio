"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, AlertTriangle } from "lucide-react";
import type { ActiveTrade } from "@/lib/gravitas/sim/trade/types";
import { FACTION_COLORS, FACTION_NAMES, MATERIAL_MAP, formatDuration } from "./tradeShared";

interface Props {
  trade: ActiveTrade;
  now: number;
}

export default function TradeTransitCard({ trade, now }: Props) {
  const timeRemaining = Math.max(0, trade.completesAt - now);
  const totalDuration = trade.completesAt - trade.startedAt;
  const progress = totalDuration > 0 ? 100 - (timeRemaining / totalDuration) * 100 : 100;
  const isDelayed = trade.status === "delayed";

  return (
    <div className="bg-black/40 border border-cyan-500/20 rounded-xl p-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${FACTION_COLORS[trade.offer.factionId]}`}
          >
            {FACTION_NAMES[trade.offer.factionId]}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-widest">
            {trade.offer.routeType.replace("_", " ")}
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
        <span className="text-emerald-400">
          +{trade.offer.amountOffered}{" "}
          {MATERIAL_MAP[trade.offer.materialOffered]?.code ?? trade.offer.materialOffered}
        </span>
      </div>

      <div className="h-1.5 w-full bg-black border border-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full ${isDelayed ? "bg-amber-500" : "bg-cyan-500"}`}
          initial={{ width: `${progress}%` }}
          animate={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
