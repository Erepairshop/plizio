"use client";

import React from "react";
import { motion } from "framer-motion";
import type { GalaxyNode } from "@/lib/gravitas/world";
import { GALAXY_RENDER_WORLD_SIZE, getGalaxyNodeAnchorStyle } from "@/lib/gravitas/world";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import { getNodeAuraStyle } from "./galaxyViewHelpers";

type Lang = "en" | "hu" | "de" | "ro";

interface Props {
  node: GalaxyNode;
  renderOffset: { x: number; y: number };
  isLiteMode: boolean;
  onSelect: (id: string) => void;
  lang: Lang;
  localize: (lang: Lang, ls: LocalizedString) => string;
}

function GalaxyNodeMarkerComponent({ node, renderOffset, isLiteMode, onSelect, lang, localize }: Props) {
  return (
    <motion.button
      type="button"
      data-galaxy-node="true"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={() => onSelect(node.id)}
      className="absolute z-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
      style={getGalaxyNodeAnchorStyle(node.position, GALAXY_RENDER_WORLD_SIZE, renderOffset)}
      animate={node.motion as any}
      transition={{ duration: node.motionDuration, repeat: Infinity, ease: "easeInOut" }}
    >
      {!isLiteMode && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/10 blur-[0.5px]"
          animate={{ scale: [0.95, 1.03, 0.96], opacity: [0.16, 0.24, 0.16] }}
          transition={{ duration: 4.6 + (node.motionDuration % 3), repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={getNodeAuraStyle(node)}
        animate={isLiteMode ? { scale: 1, opacity: 0.5 } : { scale: [0.96, 1.06, 0.98], opacity: [0.42, 0.68, 0.42] }}
        transition={{ duration: 5.4 + (node.motionDuration % 4), repeat: Infinity, ease: "easeInOut" }}
      />
      {!isLiteMode && (
        <>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-white/90 blur-[0.5px]"
            animate={{ opacity: [0.12, 0.72, 0.12], scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 3.2 + (node.motionDuration % 2), repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute right-[14%] top-[26%] h-1.5 w-1.5 rounded-full bg-cyan-200/90 blur-[0.5px]"
            animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -5, 0] }}
            transition={{ duration: 4.2 + (node.motionDuration % 5), repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-[20%] bottom-[18%] h-3.5 w-3.5 rounded-full border border-white/10 bg-white/10"
            animate={{ x: [0, -3, 1, 0], y: [0, 2, -2, 0], opacity: [0.22, 0.42, 0.24, 0.22] }}
            transition={{ duration: 6 + (node.motionDuration % 4), repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute right-[18%] bottom-[12%] h-2.5 w-2.5 rounded-full border border-white/10 bg-white/10"
            animate={{ x: [0, 2, -2, 0], y: [0, -2, 2, 0], opacity: [0.18, 0.3, 0.18] }}
            transition={{ duration: 5.2 + (node.motionDuration % 3), repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {node.pulseClassName && <span className={node.pulseClassName} />}
      <img
        src={node.assetSrc}
        alt={localize(lang, node.assetAlt ?? node.title)}
        draggable={false}
        className={`${node.assetClassName} ${node.toneClassName ?? ""}`}
      />
    </motion.button>
  );
}

export default React.memo(GalaxyNodeMarkerComponent);
