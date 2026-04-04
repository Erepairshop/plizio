"use client";

import { motion } from "framer-motion";
import { Rocket, RotateCcw, X, Sword, Shield, Zap, Eye, Target, Activity } from "lucide-react";
import { GALAXY_RENDER_WORLD_OFFSET, GALAXY_RENDER_WORLD_SIZE, getGalaxyCardStyle } from "@/lib/gravitas/world";
import type { GalaxyNode, GalaxyNodeTone } from "@/lib/gravitas/world";
import { formatDurationMinutes } from "@/lib/gravitas/world/mission";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import { BUILDING_DESCRIPTORS } from "@/lib/gravitas/sim/battle/buildingDescriptors";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";

type Lang = "en" | "hu" | "de" | "ro";

export type GalaxyTravelInfo = {
  distanceUnits: number;
  durationMinutes: number;
};

export type GalaxyMissionStatus = {
  status: "traveling" | "mining" | "returning";
  remainingMinutes: number;
  elapsedMiningRatio: number;
  gatheredUnits: number;
  targetYieldUnits: number;
};

function localize(lang: Lang, ls: LocalizedString) {
  return ls[lang] ?? ls.en;
}

function toneClass(tone?: GalaxyNodeTone) {
  if (tone === "cyan") return "text-cyan-100";
  if (tone === "amber") return "text-amber-200";
  if (tone === "emerald") return "text-emerald-200";
  return "text-white";
}

export default function GalaxyNodeCard({
  lang,
  node,
  travelInfo,
  activeMission,
  intelLevel = 0,
  cooldownUntil = 0,
  onDispatchDrone,
  onRecallDrone,
  onOpenScout,
  onClose,
}: {
  lang: Lang;
  node: GalaxyNode;
  travelInfo?: GalaxyTravelInfo | null;
  activeMission?: GalaxyMissionStatus | null;
  intelLevel?: number;
  cooldownUntil?: number;
  onDispatchDrone?: (() => void) | null;
  onRecallDrone?: (() => void) | null;
  onOpenScout?: (() => void) | null;
  onClose: () => void;
}) {
  const descriptor = node.descriptorId ? BUILDING_DESCRIPTORS[node.descriptorId] : null;
  const faction = node.factionId ? GALAXY_FACTIONS[node.factionId] : null;

  const showBasic = intelLevel >= 0;
  const showMedium = intelLevel >= 25;
  const showAdvanced = intelLevel >= 50;
  const showFull = intelLevel >= 75;

  const now = Date.now();
  const isOnCooldown = cooldownUntil > now;
  const cooldownRemainingMs = Math.max(0, cooldownUntil - now);
  const strikeDisabled = intelLevel < 25 || isOnCooldown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ type: "spring", damping: 24, stiffness: 260 }}
      className="absolute z-20 w-[280px] max-w-[calc(100vw-2rem)] rounded-[20px] border border-cyan-300/18 bg-[#081120]/94 p-3 text-white shadow-[0_20px_56px_rgba(0,0,0,0.42)] backdrop-blur-md"
      style={getGalaxyCardStyle(node, GALAXY_RENDER_WORLD_SIZE, GALAXY_RENDER_WORLD_OFFSET)}
    >
      <button type="button" onClick={onClose} className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white">
        <X size={12} />
      </button>
      <div className="pr-8">
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-200/72">
          {localize(lang, {
            en: node.type === "resource" ? "Mining Node" : node.type === "battle" ? "Combat Site" : node.type === "base" ? "Home Base" : "Galaxy Node",
            hu: node.type === "resource" ? "Bányászati pont" : node.type === "battle" ? "Harci pont" : node.type === "base" ? "Otthoni bázis" : "Galaxis pont",
            de: node.type === "resource" ? "Abbauknoten" : node.type === "battle" ? "Kampfpunkt" : node.type === "base" ? "Heimatbasis" : "Galaxie-Knoten",
            ro: node.type === "resource" ? "Nod de minerit" : node.type === "battle" ? "Punct de luptă" : node.type === "base" ? "Bază principală" : "Nod galactic",
          })}
        </div>
        <div className="mt-1 text-[15px] font-black leading-tight text-white">{localize(lang, node.title)}</div>
        
        {node.type === "battle" && descriptor ? (
          <div className="mt-2 space-y-1.5">
            {showBasic && (
              <div className="text-[10px] leading-snug">
                <span className="text-white/40 uppercase font-bold text-[8px] mr-1.5">Condition:</span>
                <span className="text-amber-100">{localize(lang, descriptor.condition.label)}</span>
              </div>
            )}
            {showBasic && (
              <div className="text-[10px] leading-snug">
                <span className="text-white/40 uppercase font-bold text-[8px] mr-1.5">Structure:</span>
                <span className="text-blue-100">{localize(lang, descriptor.material.label)}</span>
              </div>
            )}
            {showMedium && faction && (
              <div className="text-[10px] leading-snug">
                <span className="text-white/40 uppercase font-bold text-[8px] mr-1.5">Faction:</span>
                <span className="text-rose-200 font-bold">{localize(lang, faction.name)}</span>
              </div>
            )}
            {showMedium && (
              <div className="text-[10px] leading-snug">
                <span className="text-white/40 uppercase font-bold text-[8px] mr-1.5">Weaponry:</span>
                <span className="text-orange-200">{localize(lang, descriptor.weaponry.label)}</span>
              </div>
            )}
            {showAdvanced && (
              <div className="text-[10px] leading-snug border-t border-white/5 pt-1.5 mt-1.5">
                <div className="flex items-center gap-1.5 text-cyan-200 font-bold mb-0.5">
                  <Target size={10} />
                  <span>Strategic Intel</span>
                </div>
                <div className="text-white/70 italic text-[9px]">{localize(lang, descriptor.tacticStyle.label)}</div>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-1.5 text-[11px] leading-relaxed text-white/68">{localize(lang, node.description)}</p>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 text-[9px] font-black uppercase border-t border-white/5 pt-2">
        <span className="text-white/40">Intel Level</span>
        <span className={intelLevel >= 75 ? "text-emerald-400" : intelLevel >= 25 ? "text-amber-400" : "text-rose-400"}>{intelLevel}%</span>
      </div>

      {isOnCooldown && (
        <div className="mt-2 text-[10px] font-bold text-rose-400/80 flex items-center gap-1.5">
          <Activity size={12} className="animate-pulse" />
          <span>{localize(lang, { en: "Recovery active: ", hu: "Újratöltés: ", de: "Erholung aktiv: ", ro: "Recuperare activă: " })} {formatDurationMinutes(Math.ceil(cooldownRemainingMs / 60000))}</span>
        </div>
      )}

      {travelInfo && node.type === "resource" && (
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <div className="rounded-2xl border border-cyan-300/16 bg-cyan-300/8 p-2.5">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/42">Distance</div>
            <div className="mt-1 text-[12px] font-black leading-tight text-cyan-100">{travelInfo.distanceUnits}u</div>
          </div>
          <div className="rounded-2xl border border-emerald-300/16 bg-emerald-300/8 p-2.5">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/42">Drone ETA</div>
            <div className="mt-1 text-[12px] font-black leading-tight text-emerald-100">{formatDurationMinutes(travelInfo.durationMinutes)}</div>
          </div>
        </div>
      )}
      {activeMission && (
        <div className="mt-3 rounded-[18px] border border-cyan-300/18 bg-cyan-300/8 p-2.5">
          <div className="flex items-center justify-between gap-3">
            <div className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-100/72">
              {activeMission.status === "traveling" ? "Drone en route" : activeMission.status === "returning" ? "Drone returning" : "Drone mining"}
            </div>
            <div className="text-[11px] font-black text-white">{formatDurationMinutes(activeMission.remainingMinutes)}</div>
          </div>
          {activeMission.status !== "traveling" && (
            <>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.9),rgba(16,185,129,0.9))]" style={{ width: `${Math.max(4, Math.min(100, activeMission.elapsedMiningRatio * 100))}%` }} />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-[10px] font-black">
                <span className="text-white/58">Gathered</span>
                <span className="text-emerald-100">{activeMission.gatheredUnits} / {activeMission.targetYieldUnits}</span>
              </div>
            </>
          )}
        </div>
      )}
      
      {node.type !== "battle" && (
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {node.details.map((detail) => (
            <div key={detail.id} className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
              <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/42">{localize(lang, detail.label)}</div>
              <div className={`mt-1 text-[12px] font-black leading-tight ${toneClass(detail.tone)}`}>{typeof detail.value === "object" ? localize(lang, detail.value) : detail.value}</div>
            </div>
          ))}
        </div>
      )}

      {node.type === "resource" && (
        <div className="mt-2.5 rounded-2xl border border-amber-300/16 bg-amber-300/8 px-2.5 py-2 text-[10px] leading-relaxed text-white/72">{localize(lang, node.footer)}</div>
      )}

      {onDispatchDrone && node.type === "resource" && !activeMission && (
        <button type="button" onClick={onDispatchDrone} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-300/10 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-50 transition hover:bg-cyan-300/16">
          <Rocket size={13} />
          <span>Dispatch drone</span>
        </button>
      )}
      {onDispatchDrone && node.type === "battle" && (
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex gap-2">
            {onOpenScout && (
              <button type="button" onClick={onOpenScout} className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-300/10 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-50 transition hover:bg-cyan-300/16">
                <Radar size={13} />
                <span>Scout</span>
              </button>
            )}
            <button 
              type="button" 
              onClick={onDispatchDrone} 
              disabled={strikeDisabled}
              className={`flex-[1.5] flex items-center justify-center gap-2 rounded-2xl border border-rose-500/24 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] transition shadow-[0_0_20px_rgba(244,63,94,0.15)] ${strikeDisabled ? "bg-white/5 text-white/20 border-white/10" : "bg-rose-500/10 text-rose-50 hover:bg-rose-500/16"}`}
            >
              <Sword size={13} />
              <span>Launch Strike</span>
            </button>
          </div>
          {intelLevel < 25 && (
            <div className="text-[9px] text-center text-rose-400/60 font-bold uppercase tracking-widest">
              {localize(lang, { en: "At least 25% intel required", hu: "Legalább 25% felderítés szükséges", de: "Mindestens 25% Aufklärung erforderlich", ro: "Este nevoie de cel puțin 25% informații" })}
            </div>
          )}
        </div>
      )}
      {onRecallDrone && activeMission && node.type === "resource" && activeMission.status !== "returning" && (
        <button type="button" onClick={onRecallDrone} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-300/24 bg-rose-300/10 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-rose-50 transition hover:bg-rose-300/16">
          <RotateCcw size={13} />
          <span>Recall drone</span>
        </button>
      )}
    </motion.div>
  );
}
