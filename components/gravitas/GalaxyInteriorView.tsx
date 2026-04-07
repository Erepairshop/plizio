"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  GALAXY_DECOR_LAYERS,
  GALAXY_DEMO_NODES,
  GALAXY_PLAYER_BASE_NODE,
  GALAXY_WORLD_SIZE,
  GALAXY_RENDER_WORLD_OFFSET,
  GALAXY_RENDER_WORLD_SIZE,
  getGalaxyTravelDistance,
  getGalaxyTravelDurationMinutes,
  getGalaxyWorldCanvasStyle,
  validateGalaxyNodes,
} from "@/lib/gravitas/world";
import type { GalaxyNode } from "@/lib/gravitas/world";
import {
  addGalaxyInventoryMaterial,
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
import { getAvailableActions } from "@/lib/gravitas/sim/map/actions";
import GalaxyNodeCard, { type GalaxyMissionStatus } from "@/components/gravitas/galaxy/GalaxyNodeCard";
import GalaxyNodeMarker from "@/components/gravitas/galaxy/GalaxyNodeMarker";
import GalaxyDroneMarker from "@/components/gravitas/galaxy/GalaxyDroneMarker";
import { localizeGalaxy } from "@/components/gravitas/galaxy/galaxyViewHelpers";

type Lang = "en" | "hu" | "de" | "ro";

export default function GalaxyInteriorView({
  lang,
  state,
  scoutReports = {},
  onLaunchStrike,
  onOpenScout,
  onClose,
}: {
  lang: Lang;
  state: import("@/lib/gravitas/sim/types").StarholdState;
  scoutReports?: Record<string, import("@/lib/gravitas/sim/battle/types").ScoutReport>;
  onLaunchStrike?: (node: GalaxyNode) => void;
  onOpenScout?: (node: GalaxyNode) => void;
  onClose: () => void;
}) {
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

  const selectedNodeIntel = selectedNode ? scoutReports[selectedNode.id]?.intelLevel ?? 0 : 0;
  const selectedNodeCooldown = selectedNode ? state.battleState.buildingCooldowns[selectedNode.id] ?? 0 : 0;

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

  const backendNode = useMemo(() => {
    if (!selectedNode) return null;
    return state.galaxy.transientNodes.find(n => n.id === selectedNode.id);
  }, [selectedNode, state.galaxy.transientNodes]);

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
    setActiveMission({ id: `mission-${targetNode.id}-${startedAt}`, droneIndex: 0, targetNodeId: targetNode.id, materialId: targetNode.materialId as GalaxyMaterialId, phase: "traveling", startedAt, arrivalAt, miningCompleteAt, travelDurationMinutes, miningDurationMinutes, targetYieldUnits });
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
    const target = event.target as HTMLElement | null;
    if (target?.closest("button, a, input, textarea, select, [role='button']")) return;
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

  const handleWheel = useCallback((event: WheelEvent) => {
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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return undefined;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

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
            <GalaxyNodeMarker
              key={node.id}
              node={node}
              renderOffset={renderOffset}
              isLiteMode={isLiteMode}
              onSelect={handleNodeSelect}
              lang={lang}
              localize={localizeGalaxy}
            />
          ))}
          {activeMissionTarget && activeMissionMarkerPosition && (
            <GalaxyDroneMarker
              markerPosition={activeMissionMarkerPosition}
              renderOffset={renderOffset}
              routeLine={activeMissionRouteLine}
              missionStatus={activeMissionStatus}
              focused={isFocusedMissionVisible}
              onToggleFocus={() => {
                if (suppressNextNodeClickRef.current) return;
                setFocusedDroneNodeId((current) =>
                  current === activeMission?.targetNodeId ? null : activeMission?.targetNodeId ?? null,
                );
              }}
            />
          )}
          <AnimatePresence>
            {selectedNode && (
              <GalaxyNodeCard
                lang={lang}
                node={selectedNode}
                travelInfo={selectedNodeTravelInfo}
                activeMission={selectedNodeMission}
                intelLevel={selectedNodeIntel}
                cooldownUntil={selectedNodeCooldown}
                onDispatchDrone={
                  selectedNode.type === "resource" && !activeMission 
                    ? () => dispatchDrone(selectedNode) 
                    : selectedNode.type === "battle"
                    ? () => onLaunchStrike?.(selectedNode)
                    : null
                }
                onOpenScout={
                  selectedNode.type === "battle"
                    ? () => onOpenScout?.(selectedNode)
                    : null
                }
                onRecallDrone={selectedNode.type === "resource" && activeMission ? recallDrone : null}
                onClose={() => setSelectedNodeId(null)}
                recommendedActions={backendNode ? getAvailableActions(state, backendNode) : []}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
