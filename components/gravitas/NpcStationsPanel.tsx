"use client";

import React from "react";
import { X, Radio, TrendingUp, AlertTriangle, XCircle, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import type { NpcStationStatus } from "@/lib/gravitas/sim/npcstations/types";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";

interface Props {
  state: StarholdState;
  lang: string;
  onClose: () => void;
}

const STATUS_LABEL: Record<NpcStationStatus, LocalizedString> = {
  active: { en: "Active", hu: "Aktív", de: "Aktiv", ro: "Activ" },
  contested: { en: "Contested", hu: "Vitatott", de: "Umkämpft", ro: "Disputat" },
  disrupted: { en: "Disrupted", hu: "Megzavart", de: "Gestört", ro: "Perturbat" },
  closed: { en: "Offline", hu: "Offline", de: "Offline", ro: "Offline" },
};

const STATUS_COLOR: Record<NpcStationStatus, string> = {
  active: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
  contested: "border-amber-500/30 bg-amber-500/5 text-amber-400",
  disrupted: "border-orange-500/30 bg-orange-500/5 text-orange-400",
  closed: "border-rose-500/30 bg-rose-500/5 text-rose-400",
};

const STATUS_DOT: Record<NpcStationStatus, string> = {
  active: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
  contested: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]",
  disrupted: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]",
  closed: "bg-rose-600",
};

const STATUS_ICON: Record<NpcStationStatus, React.ReactNode> = {
  active: <Activity size={14} />,
  contested: <AlertTriangle size={14} />,
  disrupted: <Zap size={14} />,
  closed: <XCircle size={14} />,
};

function formatTradeMod(mod: number): string {
  if (mod === 0) return "—";
  const pct = Math.round((mod - 1) * 100);
  if (pct === 0) return "×1.0";
  return pct > 0 ? `×${mod.toFixed(2)} (+${pct}%)` : `×${mod.toFixed(2)} (${pct}%)`;
}

export default function NpcStationsPanel({ state, lang, onClose }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const stations = state.npcStations?.stations ?? [];
  const lastRotation = state.npcStations?.lastRotationTick ?? 0;
  const ticksSinceRotation = state.tick - lastRotation;
  const nextRotationIn = Math.max(0, 1800 - ticksSinceRotation);

  const offlineCount = stations.filter((s) => s.status === "closed" || s.status === "disrupted").length;
  const activeCount = stations.filter((s) => s.status === "active").length;

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className="fixed right-0 top-0 bottom-0 w-[380px] max-w-full bg-[#080c18]/95 backdrop-blur-xl border-l border-white/10 z-[60] flex flex-col shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-indigo-500/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Radio size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              {localize({ en: "NPC Stations", hu: "NPC Állomások", de: "NPC-Stationen", ro: "Stații NPC" })}
            </h2>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/30">
              {activeCount}/5{" "}
              {localize({ en: "online", hu: "online", de: "online", ro: "online" })}
              {offlineCount > 0 && (
                <span className="ml-2 text-orange-400">
                  · {offlineCount}{" "}
                  {localize({ en: "disrupted", hu: "megzavart", de: "gestört", ro: "perturbate" })}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white/50 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Network summary bar */}
        {offlineCount >= 3 && (
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-3 flex items-center gap-3">
            <AlertTriangle size={16} className="text-orange-400 shrink-0" />
            <p className="text-[11px] text-orange-300/80">
              {localize({
                en: "Trade network severely disrupted. Multiple routes unavailable.",
                hu: "A kereskedelmi hálózat súlyosan megzavarodott. Több útvonal nem elérhető.",
                de: "Handelsnetzwerk stark gestört. Mehrere Routen nicht verfügbar.",
                ro: "Rețeaua comercială sever perturbată. Mai multe rute indisponibile.",
              })}
            </p>
          </div>
        )}

        {/* Rotation timer */}
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02]">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
            {localize({ en: "Next Status Rotation", hu: "Következő Rotáció", de: "Nächste Rotation", ro: "Urm. Rotație" })}
          </span>
          <span className="text-sm font-mono text-white/60">{nextRotationIn}s</span>
        </div>

        {/* Stations */}
        <div className="space-y-3">
          {stations.map((station) => {
            const faction = GALAXY_FACTIONS[station.factionId];
            if (!faction) return null;
            return (
              <div
                key={station.factionId}
                className={`rounded-2xl border p-4 transition-all ${STATUS_COLOR[station.status]}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-0.5 ${STATUS_DOT[station.status]}`} />
                    <div className="min-w-0">
                      <div className="text-sm font-black text-white truncate">
                        {localize(faction.name)}{" "}
                        {localize({ en: "Station", hu: "Állomás", de: "Station", ro: "Stație" })}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-0.5">
                        {localize(faction.combatStyle).substring(0, 40)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span>{STATUS_ICON[station.status]}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      {localize(STATUS_LABEL[station.status])}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-white/40">
                    <TrendingUp size={11} />
                    {localize({ en: "Trade Modifier", hu: "Kereskedelmi Módosító", de: "Handelsmodifikator", ro: "Modificator Comercial" })}
                  </div>
                  <div
                    className={`text-[11px] font-mono font-black ${
                      station.tradeMod === 0
                        ? "text-rose-400"
                        : station.tradeMod > 1
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {formatTradeMod(station.tradeMod)}
                  </div>
                </div>
              </div>
            );
          })}

          {stations.length === 0 && (
            <div className="py-12 text-center text-white/30 text-xs italic border border-dashed border-white/10 rounded-xl">
              {localize({
                en: "Station data unavailable.",
                hu: "Állomásadatok nem elérhetők.",
                de: "Stationsdaten nicht verfügbar.",
                ro: "Date stație indisponibile.",
              })}
            </div>
          )}
        </div>

        {/* Trade mod legend */}
        <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4">
          <div className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-3">
            {localize({ en: "Status Effects on Trade", hu: "Státusz Hatások a Kereskedelemre", de: "Statuseffekte auf Handel", ro: "Efecte Statut pe Comerț" })}
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {(["active", "contested", "disrupted", "closed"] as NpcStationStatus[]).map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full shrink-0 ${STATUS_DOT[s]}`} />
                <span className="text-white/50">{localize(STATUS_LABEL[s])}</span>
                <span className="ml-auto font-mono text-white/30">
                  {s === "active" ? "×1.0" : s === "contested" ? "+15%" : s === "disrupted" ? "+35%" : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
