"use client";

import React from "react";
import { motion } from "framer-motion";
import { getGalaxyLinkStyle, formatDurationMinutes } from "@/lib/gravitas/world";
import type { GalaxyMissionStatus } from "./GalaxyNodeCard";

interface Props {
  markerPosition: { x: number; y: number };
  renderOffset: { x: number; y: number };
  routeLine: { from: { x: number; y: number }; to: { x: number; y: number } } | null;
  missionStatus: GalaxyMissionStatus | null;
  focused: boolean;
  onToggleFocus: () => void;
}

export default function GalaxyDroneMarker({
  markerPosition,
  renderOffset,
  routeLine,
  missionStatus,
  focused,
  onToggleFocus,
}: Props) {
  return (
    <>
      {focused && routeLine && (
        <div
          className="pointer-events-none absolute z-[9] h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.06),rgba(34,211,238,0.9),rgba(34,211,238,0.08))] shadow-[0_0_12px_rgba(34,211,238,0.28)]"
          style={getGalaxyLinkStyle(routeLine.from, routeLine.to, renderOffset)}
        />
      )}
      <motion.button
        type="button"
        onClick={onToggleFocus}
        className="absolute z-[14] flex h-[72px] w-[72px] items-center justify-center rounded-full border border-cyan-300/16 bg-[#07111d]/26 shadow-[0_0_20px_rgba(34,211,238,0.18)] backdrop-blur-[1px] transition hover:scale-[1.04] hover:bg-[#0c1728]/36"
        style={{
          left: `${markerPosition.x + renderOffset.x}px`,
          top: `${markerPosition.y + renderOffset.y}px`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: missionStatus?.status === "traveling" ? [0.96, 1.06, 0.96] : [1, 1.06, 1],
          opacity: [0.88, 1, 0.88],
        }}
        transition={{
          duration: missionStatus?.status === "traveling" ? 1.4 : 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Drone"
      >
        <img
          src="/gravitas/modules/scout-probe.webp"
          alt=""
          draggable={false}
          className="h-auto w-[92%] select-none object-contain [filter:drop-shadow(0_0_16px_rgba(34,211,238,0.24))]"
        />
      </motion.button>
      {focused && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute z-[15] pointer-events-none w-[170px] rounded-[16px] border border-cyan-300/18 bg-[#081120]/92 px-3 py-2 text-white shadow-[0_16px_34px_rgba(0,0,0,0.26)] backdrop-blur-md"
          style={{
            left: `${markerPosition.x + renderOffset.x + 18}px`,
            top: `${markerPosition.y + renderOffset.y - 54}px`,
          }}
        >
          <div className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200/72">
            {missionStatus?.status === "traveling" ? "Drone route" : "Drone mining"}
          </div>
          <div className="mt-1 text-[13px] font-black text-white">
            {missionStatus?.status === "traveling"
              ? `Arrives in ${formatDurationMinutes(missionStatus.remainingMinutes)}`
              : `Finishes in ${formatDurationMinutes(missionStatus?.remainingMinutes ?? 0)}`}
          </div>
          {missionStatus?.status === "mining" && (
            <div className="mt-1 text-[10px] font-black text-emerald-100/90">
              {`Gathered ${missionStatus.gatheredUnits}/${missionStatus.targetYieldUnits}`}
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
