"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from "react";
import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, RotateCcw, X } from "lucide-react";
import {
  GALAXY_DECOR_LAYERS,
  GALAXY_DEMO_NODES,
  GALAXY_PLAYER_BASE_NODE,
  GALAXY_WORLD_SIZE,
  GALAXY_RENDER_WORLD_OFFSET,
  GALAXY_RENDER_WORLD_SIZE,
  getGalaxyLinkStyle,
  getGalaxyNodeAnchorStyle,
  getGalaxyTravelDistance,
  getGalaxyTravelDurationMinutes,
  getGalaxyWorldCanvasStyle,
  validateGalaxyNodes,
} from "@/lib/gravitas/world";
import type { GalaxyNode } from "@/lib/gravitas/world";
import {
  addGalaxyInventoryMaterial,
  formatDurationMinutes,
  getDroneMissionCurrentPosition,
  loadSavedDroneMission,
  saveDroneMission,
  saveGalaxyInventory,
  saveGalaxyLivePreview,
  loadSavedGalaxyInventory,
  type DroneMissionState,
  type GalaxyInventory,
  type GalaxyMaterialId,
} from "@/lib/gravitas/world/mission";
import GalaxyNodeCard, { type GalaxyMissionStatus } from "@/components/gravitas/galaxy/GalaxyNodeCard";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

type Lang = "en" | "hu" | "de" | "ro";
function localize(lang: Lang, ls: LocalizedString) {
  return ls[lang] ?? ls.en;
}

function getNodeAuraStyle(node: GalaxyNode): CSSProperties {
  if (node.type === "base") {
    return { background: "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0.14) 28%, rgba(34,211,238,0.05) 50%, transparent 74%)" };
  }
  if (node.type === "battle") {
    return { background: "radial-gradient(circle, rgba(251,146,60,0.26) 0%, rgba(251,146,60,0.12) 28%, rgba(251,146,60,0.05) 52%, transparent 76%)" };
  }
  if (node.type === "resource") {
    const materialId = node.materialId ?? "aether_ore";
    const palette: Record<string, string> = {
      lumen_dust: "rgba(167,139,250,0.24)",
      verdant_crystals: "rgba(74,222,128,0.24)",
      aether_ore: "rgba(34,211,238,0.24)",
      ember_shards: "rgba(251,191,36,0.24)",
      sable_alloy: "rgba(148,163,184,0.22)",
      rift_stone: "rgba(56,189,248,0.24)",
    };
    const color = palette[materialId] ?? "rgba(34,211,238,0.24)";
    return { background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0.05) 54%, transparent 78%)` };
  }
  return { background: "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.03) 58%, transparent 78%)" };
}

export default function GalaxyInteriorView({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const isLiteMode = process.env.NODE_ENV !== "production";
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [activeMission, setActiveMission] = useState<DroneMissionState | null>(() => loadSavedDroneMission());
  const [missionClock, setMissionClock] = useState(() => Date.now());
  const [focusedDroneNodeId, setFocusedDroneNodeId] = useState<string | null>(null);
  const [galaxyInventory, setGalaxyInventory] = useState<GalaxyInventory>(() => loadSavedGalaxyInventory());
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const panDragRef = useRef<{
    active: boolean;
    dragging: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({ active: false, dragging: false, pointerId: null, startX: 0, startY: 0, lastX: 0, lastY: 0 });
  const suppressNextNodeClickRef = useRef(false);
  const activeMissionRef = useRef<DroneMissionState | null>(activeMission);
  const activeMissionStatusRef = useRef<GalaxyMissionStatus | null>(null);
  const galaxyNodes = useMemo(() => GALAXY_DEMO_NODES, []);
  const placementReport = useMemo(() => validateGalaxyNodes(galaxyNodes, GALAXY_WORLD_SIZE), [galaxyNodes]);
  const selectedNode = galaxyNodes.find((node) => node.id === selectedNodeId) ?? null;
  const playerBaseNode = galaxyNodes.find((node) => node.type === "base") ?? GALAXY_PLAYER_BASE_NODE;
  const renderOffset = GALAXY_RENDER_WORLD_OFFSET;

  const selectedNodeTravelInfo = useMemo(() => {
    if (!selectedNode || selectedNode.id === playerBaseNode.id) return null;
    return {
      distanceUnits: getGalaxyTravelDistance(playerBaseNode.position, selectedNode.position),
      durationMinutes: getGalaxyTravelDurationMinutes(playerBaseNode.position, selectedNode.position, "drone"),
    };
  }, [playerBaseNode.id, playerBaseNode.position, selectedNode]);

  const activeMissionTarget = activeMission ? galaxyNodes.find((node) => node.id === activeMission.targetNodeId) ?? null : null;
  const activeMissionMarkerPosition = useMemo(() => {
    if (!activeMission || !activeMissionTarget) return null;
    return getDroneMissionCurrentPosition(activeMission, activeMissionTarget.position, playerBaseNode.position, missionClock);
  }, [activeMission, activeMissionTarget, missionClock, playerBaseNode.position]);
  const activeMissionStatus = useMemo<GalaxyMissionStatus | null>(() => {
    if (!activeMission) return null;
    if (missionClock < activeMission.arrivalAt) {
      const remainingMinutes = Math.max(1, Math.ceil((activeMission.arrivalAt - missionClock) / 60000));
      return { status: "traveling" as const, remainingMinutes, elapsedMiningRatio: 0, gatheredUnits: 0, targetYieldUnits: activeMission.targetYieldUnits };
    }
    if (activeMission.phase === "returning" && activeMission.returnCompleteAt) {
      const remainingMinutes = Math.max(1, Math.ceil((activeMission.returnCompleteAt - missionClock) / 60000));
      const returnTotalMs = Math.max(1, activeMission.returnCompleteAt - (activeMission.returnStartedAt ?? missionClock));
      const returnElapsedMs = Math.max(0, missionClock - (activeMission.returnStartedAt ?? missionClock));
      return { status: "returning" as const, remainingMinutes, elapsedMiningRatio: Math.min(1, returnElapsedMs / returnTotalMs), gatheredUnits: activeMission.committedUnits ?? 0, targetYieldUnits: activeMission.targetYieldUnits };
    }
    const remainingMinutes = Math.max(0, Math.ceil((activeMission.miningCompleteAt - missionClock) / 60000));
    const miningElapsedMs = Math.max(0, missionClock - activeMission.arrivalAt);
    const miningTotalMs = Math.max(1, activeMission.miningCompleteAt - activeMission.arrivalAt);
    const elapsedMiningRatio = Math.min(1, miningElapsedMs / miningTotalMs);
    return { status: "mining" as const, remainingMinutes, elapsedMiningRatio, gatheredUnits: Math.min(activeMission.targetYieldUnits, Math.floor(activeMission.targetYieldUnits * elapsedMiningRatio)), targetYieldUnits: activeMission.targetYieldUnits };
  }, [activeMission, missionClock]);

  const selectedNodeMission = selectedNode && activeMission && activeMission.targetNodeId === selectedNode.id ? activeMissionStatus : null;
  const isFocusedMissionVisible = Boolean(activeMission && activeMissionTarget && focusedDroneNodeId === activeMission.targetNodeId);

  useEffect(() => { activeMissionRef.current = activeMission; }, [activeMission]);
  useEffect(() => { activeMissionStatusRef.current = activeMissionStatus; }, [activeMissionStatus]);
  useEffect(() => {
    if (!activeMission) return undefined;
    const interval = window.setInterval(() => setMissionClock(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [activeMission]);
  useEffect(() => { saveDroneMission(activeMission); }, [activeMission]);
  useEffect(() => { saveGalaxyInventory(galaxyInventory); }, [galaxyInventory]);
  useEffect(() => {
    const persist = () => {
      saveDroneMission(activeMissionRef.current);
      saveGalaxyInventory(galaxyInventory);
      const currentMission = activeMissionRef.current;
      const currentStatus = activeMissionStatusRef.current;
      if (currentMission && currentStatus?.status === "mining") {
        saveGalaxyLivePreview({ materialId: currentMission.materialId, amount: currentStatus.gatheredUnits });
      } else {
        saveGalaxyLivePreview(null);
      }
    };
    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", persist);
    window.addEventListener("visibilitychange", persist);
    return () => {
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("beforeunload", persist);
      window.removeEventListener("visibilitychange", persist);
    };
  }, [galaxyInventory]);
  useEffect(() => {
    if (!placementReport.valid) console.warn("[gravitas/galaxy] invalid node placement", placementReport.issues);
  }, [placementReport]);
  useEffect(() => {
    if (activeMissionStatus?.status === "mining" && activeMission) {
      saveGalaxyLivePreview({ materialId: activeMission.materialId, amount: activeMissionStatus.gatheredUnits });
      return;
    }
    saveGalaxyLivePreview(null);
  }, [activeMission, activeMissionStatus?.gatheredUnits, activeMissionStatus?.status]);
  useEffect(() => {
    if (focusedDroneNodeId && (!activeMission || activeMission.targetNodeId !== focusedDroneNodeId)) {
      setFocusedDroneNodeId(null);
    }
  }, [activeMission, focusedDroneNodeId]);
  useEffect(() => {
    if (!activeMission || activeMission.phase !== "traveling") return;
    if (missionClock < activeMission.arrivalAt) return;
    setActiveMission((current) => {
      if (!current || current.id !== activeMission.id || current.phase !== "traveling") return current;
      return { ...current, phase: "mining" };
    });
  }, [activeMission, missionClock]);
  useEffect(() => {
    if (!activeMission || activeMission.phase !== "returning" || !activeMission.returnCompleteAt) return;
    if (missionClock < activeMission.returnCompleteAt) return;
    setActiveMission(null);
    setFocusedDroneNodeId(null);
  }, [activeMission, missionClock]);

  const dispatchDrone = useCallback((targetNode: GalaxyNode) => {
    if (targetNode.type !== "resource" || activeMission) return;
    const travelDurationMinutes = getGalaxyTravelDurationMinutes(playerBaseNode.position, targetNode.position, "drone");
    const miningDurationMinutes = targetNode.mining?.baseDurationMinutes ?? 60;
    const targetYieldUnits = targetNode.mining?.baseUnitsPerRun ?? 48;
    const startedAt = Date.now();
    const arrivalAt = startedAt + travelDurationMinutes * 60_000;
    const miningCompleteAt = arrivalAt + miningDurationMinutes * 60_000;
    setMissionClock(startedAt);
    setActiveMission({ id: `mission-${targetNode.id}-${startedAt}`, targetNodeId: targetNode.id, materialId: targetNode.materialId as GalaxyMaterialId, phase: "traveling", startedAt, arrivalAt, miningCompleteAt, travelDurationMinutes, miningDurationMinutes, targetYieldUnits });
    setFocusedDroneNodeId(null);
    setSelectedNodeId(targetNode.id);
  }, [activeMission, playerBaseNode.position]);
  const recallDrone = useCallback(() => {
    if (!activeMission || !activeMissionTarget || activeMission.phase === "returning") return;
    const now = Date.now();
    const committedUnits = now >= activeMission.arrivalAt
      ? Math.min(activeMission.targetYieldUnits, Math.floor(activeMission.targetYieldUnits * Math.min(1, Math.max(0, (now - activeMission.arrivalAt) / Math.max(1, activeMission.miningCompleteAt - activeMission.arrivalAt)))))
      : 0;
    const currentPosition = getDroneMissionCurrentPosition(activeMission, activeMissionTarget.position, playerBaseNode.position, now);
    const returnDurationMinutes = getGalaxyTravelDurationMinutes(currentPosition, playerBaseNode.position, "drone");
    const returnStartedAt = now;
    const returnCompleteAt = returnStartedAt + returnDurationMinutes * 60_000;
    if (committedUnits > 0) setGalaxyInventory((current) => addGalaxyInventoryMaterial(current, activeMission.materialId, committedUnits));
    setMissionClock(now);
    setActiveMission({ ...activeMission, phase: "returning", committedUnits: (activeMission.committedUnits ?? 0) + committedUnits, returnStartedAt, returnCompleteAt, returnStartPosition: currentPosition });
  }, [activeMission, activeMissionTarget, playerBaseNode.position]);
  useEffect(() => {
    if (!activeMission || activeMission.phase !== "mining") return;
    if (missionClock < activeMission.miningCompleteAt) return;
    recallDrone();
  }, [activeMission, missionClock, recallDrone]);
  const activeMissionRouteLine = useMemo(() => {
    if (!activeMission || !activeMissionTarget) return null;
    if (activeMission.phase === "traveling") return { from: playerBaseNode.position, to: activeMissionTarget.position };
    if (activeMission.phase === "returning") return { from: activeMissionMarkerPosition ?? activeMission.returnStartPosition ?? activeMissionTarget.position, to: playerBaseNode.position };
    return null;
  }, [activeMission, activeMissionMarkerPosition, activeMissionTarget, playerBaseNode.position]);
  const focusBase = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({
      left: Math.max(0, playerBaseNode.position.x + renderOffset.x - container.clientWidth / 2),
      top: Math.max(0, playerBaseNode.position.y + renderOffset.y - container.clientHeight / 2),
      behavior: "smooth",
    });
    setSelectedNodeId(playerBaseNode.id);
  }, [playerBaseNode.id, playerBaseNode.position, renderOffset.x, renderOffset.y]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      focusBase();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [focusBase]);

  const beginPan = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    panDragRef.current = {
      active: true,
      dragging: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
    };
    container.setPointerCapture(event.pointerId);
    container.style.cursor = "grabbing";
  }, []);

  const movePan = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    const drag = panDragRef.current;
    if (!container || !drag.active || drag.pointerId !== event.pointerId) return;
    const movedDistance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
    if (!drag.dragging && movedDistance > 6) {
      drag.dragging = true;
      suppressNextNodeClickRef.current = true;
    }
    if (!drag.dragging) return;
    const dx = drag.lastX - event.clientX;
    const dy = drag.lastY - event.clientY;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    container.scrollLeft += dx;
    container.scrollTop += dy;
  }, []);

  const endPan = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    const drag = panDragRef.current;
    if (!container || drag.pointerId !== event.pointerId) return;
    drag.active = false;
    drag.dragging = false;
    drag.pointerId = null;
    container.style.cursor = "grab";
    try {
      container.releasePointerCapture(event.pointerId);
    } catch {
      // ignore capture release failures
    }
    window.setTimeout(() => {
      suppressNextNodeClickRef.current = false;
    }, 0);
  }, []);

  const handleWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    event.preventDefault();
    const delta = event.shiftKey ? event.deltaY : (Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY);
    if (event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      container.scrollLeft += delta;
    } else {
      container.scrollTop += delta;
    }
  }, []);

  const handleNodeSelect = useCallback((nodeId: string) => {
    if (suppressNextNodeClickRef.current) return;
    setSelectedNodeId(nodeId);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/75 transition hover:bg-white/15 hover:text-white">
        <X size={16} />
      </button>
      <div
        className="absolute inset-0 overflow-auto"
        ref={scrollContainerRef}
        style={{
          backgroundImage: "url('/gravitas/galaxy/deep-space-tile.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "460px 460px",
          overscrollBehavior: "contain",
          touchAction: "none",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
        }}
        onWheel={handleWheel}
        onPointerDown={beginPan}
        onPointerMove={movePan}
        onPointerUp={endPan}
        onPointerCancel={endPan}
      >
        <div className="relative overflow-hidden" style={getGalaxyWorldCanvasStyle(GALAXY_RENDER_WORLD_SIZE)}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.08),transparent_20%),radial-gradient(circle_at_76%_24%,rgba(168,85,247,0.08),transparent_18%),radial-gradient(circle_at_52%_68%,rgba(15,23,42,0.38),transparent_36%)]" />
          {GALAXY_DECOR_LAYERS.map((layer) => (<img key={layer.id} src={layer.src} alt="" draggable={false} className={layer.className} />))}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute z-[8] w-[196px] sm:w-[220px]"
            style={{ left: "82%", top: "16%", transform: "translate(-50%, -50%)" }}
            animate={{ x: [0, 14, -4, 0], y: [0, -12, 6, 0], rotate: [-4, 3, -2, -4], opacity: [0.72, 0.92, 0.78, 0.72] }}
            transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-[18%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),rgba(34,211,238,0.06)_42%,transparent_76%)] blur-2xl" />
            <img
              src="/gravitas/modules/scout-probe.webp"
              alt=""
              draggable={false}
              className="h-auto w-full select-none object-contain opacity-[0.92] [filter:drop-shadow(0_0_18px_rgba(34,211,238,0.22))_drop-shadow(0_12px_22px_rgba(2,6,23,0.44))]"
            />
          </motion.div>
          {galaxyNodes.map((node) => (
            <motion.button key={node.id} type="button" onClick={() => handleNodeSelect(node.id)} className="absolute z-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70" style={getGalaxyNodeAnchorStyle(node.position, GALAXY_RENDER_WORLD_SIZE, renderOffset)} animate={node.motion as any} transition={{ duration: node.motionDuration, repeat: Infinity, ease: "easeInOut" }}>
              {!isLiteMode && (
                <motion.span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/10 blur-[0.5px]" animate={{ scale: [0.95, 1.03, 0.96], opacity: [0.16, 0.24, 0.16] }} transition={{ duration: 4.6 + (node.motionDuration % 3), repeat: Infinity, ease: "easeInOut" }} />
              )}
              <motion.span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" style={getNodeAuraStyle(node)} animate={isLiteMode ? { scale: 1, opacity: 0.5 } : { scale: [0.96, 1.06, 0.98], opacity: [0.42, 0.68, 0.42] }} transition={{ duration: 5.4 + (node.motionDuration % 4), repeat: Infinity, ease: "easeInOut" }} />
              {!isLiteMode && (
                <>
                  <motion.span aria-hidden className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-white/90 blur-[0.5px]" animate={{ opacity: [0.12, 0.72, 0.12], scale: [0.8, 1.25, 0.8] }} transition={{ duration: 3.2 + (node.motionDuration % 2), repeat: Infinity, ease: "easeInOut" }} />
                  <motion.span aria-hidden className="pointer-events-none absolute right-[14%] top-[26%] h-1.5 w-1.5 rounded-full bg-cyan-200/90 blur-[0.5px]" animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -5, 0] }} transition={{ duration: 4.2 + (node.motionDuration % 5), repeat: Infinity, ease: "easeInOut" }} />
                  <motion.span aria-hidden className="pointer-events-none absolute left-[20%] bottom-[18%] h-3.5 w-3.5 rounded-full border border-white/10 bg-white/10" animate={{ x: [0, -3, 1, 0], y: [0, 2, -2, 0], opacity: [0.22, 0.42, 0.24, 0.22] }} transition={{ duration: 6 + (node.motionDuration % 4), repeat: Infinity, ease: "easeInOut" }} />
                  <motion.span aria-hidden className="pointer-events-none absolute right-[18%] bottom-[12%] h-2.5 w-2.5 rounded-full border border-white/10 bg-white/10" animate={{ x: [0, 2, -2, 0], y: [0, -2, 2, 0], opacity: [0.18, 0.3, 0.18] }} transition={{ duration: 5.2 + (node.motionDuration % 3), repeat: Infinity, ease: "easeInOut" }} />
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
          ))}
          {activeMissionTarget && activeMissionMarkerPosition && (
            <>
              {isFocusedMissionVisible && activeMissionRouteLine && <div className="pointer-events-none absolute z-[9] h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.06),rgba(34,211,238,0.9),rgba(34,211,238,0.08))] shadow-[0_0_12px_rgba(34,211,238,0.28)]" style={getGalaxyLinkStyle(activeMissionRouteLine.from, activeMissionRouteLine.to, renderOffset)} />}
              <motion.button type="button" onClick={() => {
                  if (suppressNextNodeClickRef.current) return;
                  setFocusedDroneNodeId((current) => (current === activeMission?.targetNodeId ? null : activeMission?.targetNodeId ?? null));
                }}
                className="absolute z-[14] flex h-[72px] w-[72px] items-center justify-center rounded-full border border-cyan-300/16 bg-[#07111d]/26 shadow-[0_0_20px_rgba(34,211,238,0.18)] backdrop-blur-[1px] transition hover:scale-[1.04] hover:bg-[#0c1728]/36"
                style={{ left: `${activeMissionMarkerPosition.x + renderOffset.x}px`, top: `${activeMissionMarkerPosition.y + renderOffset.y}px`, transform: "translate(-50%, -50%)" }}
                animate={{ scale: activeMissionStatus?.status === "traveling" ? [0.96, 1.06, 0.96] : [1, 1.06, 1], opacity: [0.88, 1, 0.88] }}
                transition={{ duration: activeMissionStatus?.status === "traveling" ? 1.4 : 1.8, repeat: Infinity, ease: "easeInOut" }}
                aria-label="Drone"
              >
                <img
                  src="/gravitas/modules/scout-probe.webp"
                  alt=""
                  draggable={false}
                  className="h-auto w-[92%] select-none object-contain [filter:drop-shadow(0_0_16px_rgba(34,211,238,0.24))]"
                />
              </motion.button>
              {isFocusedMissionVisible && (
                <motion.div initial={{ opacity: 0, y: 6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute z-[15] pointer-events-none w-[170px] rounded-[16px] border border-cyan-300/18 bg-[#081120]/92 px-3 py-2 text-white shadow-[0_16px_34px_rgba(0,0,0,0.26)] backdrop-blur-md" style={{ left: `${activeMissionMarkerPosition.x + renderOffset.x + 18}px`, top: `${activeMissionMarkerPosition.y + renderOffset.y - 54}px` }}>
                  <div className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200/72">{activeMissionStatus?.status === "traveling" ? "Drone route" : "Drone mining"}</div>
                  <div className="mt-1 text-[13px] font-black text-white">{activeMissionStatus?.status === "traveling" ? `Arrives in ${formatDurationMinutes(activeMissionStatus.remainingMinutes)}` : `Finishes in ${formatDurationMinutes(activeMissionStatus?.remainingMinutes ?? 0)}`}</div>
                  {activeMissionStatus?.status === "mining" && <div className="mt-1 text-[10px] font-black text-emerald-100/90">{`Gathered ${activeMissionStatus.gatheredUnits}/${activeMissionStatus.targetYieldUnits}`}</div>}
                </motion.div>
              )}
            </>
          )}
          <AnimatePresence>
            {selectedNode && (
              <GalaxyNodeCard
                lang={lang}
                node={selectedNode}
                travelInfo={selectedNodeTravelInfo}
                activeMission={selectedNodeMission}
                onDispatchDrone={selectedNode.type === "resource" && !activeMission ? () => dispatchDrone(selectedNode) : null}
                onRecallDrone={selectedNode.type === "resource" && activeMission ? recallDrone : null}
                onClose={() => setSelectedNodeId(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
