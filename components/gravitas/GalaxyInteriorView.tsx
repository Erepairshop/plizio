"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Rocket, RotateCcw, X } from "lucide-react";
import {
  GALAXY_DECOR_LAYERS,
  GALAXY_DEMO_NODES,
  GALAXY_PLAYER_BASE_NODE,
  GALAXY_WORLD_SIZE,
  METEOR_MATERIAL_META,
  METEOR_MATERIAL_ORDER,
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
  formatCompactGalaxyValue,
  formatDurationMinutes,
  getDroneMissionCurrentPosition,
  loadSavedDroneMission,
  loadSavedGalaxyInventory,
  loadSavedGalaxyLivePreview,
  saveDroneMission,
  saveGalaxyInventory,
  saveGalaxyLivePreview,
  type DroneMissionState,
  type GalaxyInventory,
  type GalaxyLivePreview,
  type GalaxyMaterialId,
} from "@/lib/gravitas/world/mission";
import GalaxyNodeCard, { type GalaxyMissionStatus } from "@/components/gravitas/galaxy/GalaxyNodeCard";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

type Lang = "en" | "hu" | "de" | "ro";
function localize(lang: Lang, ls: LocalizedString) {
  return ls[lang] ?? ls.en;
}

export default function GalaxyInteriorView({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [activeMission, setActiveMission] = useState<DroneMissionState | null>(() => loadSavedDroneMission());
  const [missionClock, setMissionClock] = useState(() => Date.now());
  const [focusedDroneNodeId, setFocusedDroneNodeId] = useState<string | null>(null);
  const [galaxyInventory, setGalaxyInventory] = useState<GalaxyInventory>(() => loadSavedGalaxyInventory());
  const [galaxyLivePreview, setGalaxyLivePreview] = useState<GalaxyLivePreview>(() => loadSavedGalaxyLivePreview());
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const activeMissionRef = useRef<DroneMissionState | null>(activeMission);
  const activeMissionStatusRef = useRef<GalaxyMissionStatus | null>(null);
  const galaxyNodes = useMemo(() => GALAXY_DEMO_NODES, []);
  const placementReport = useMemo(() => validateGalaxyNodes(galaxyNodes, GALAXY_WORLD_SIZE), [galaxyNodes]);
  const selectedNode = galaxyNodes.find((node) => node.id === selectedNodeId) ?? null;
  const playerBaseNode = galaxyNodes.find((node) => node.type === "base") ?? GALAXY_PLAYER_BASE_NODE;

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
    if (galaxyLivePreview) saveGalaxyLivePreview(galaxyLivePreview);
    else saveGalaxyLivePreview(null);
  }, [galaxyLivePreview]);
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
      setGalaxyLivePreview({ materialId: activeMission.materialId, amount: activeMissionStatus.gatheredUnits });
      return;
    }
    setGalaxyLivePreview(null);
  }, [activeMission, activeMissionStatus?.gatheredUnits, activeMissionStatus?.status]);
  useEffect(() => {
    if (focusedDroneNodeId && (!activeMission || activeMission.targetNodeId !== focusedDroneNodeId)) {
      setFocusedDroneNodeId(null);
    }
  }, [activeMission, focusedDroneNodeId]);

  const displayedGalaxyInventory = useMemo(() => {
    const display = { ...galaxyInventory };
    if (galaxyLivePreview) {
      display[galaxyLivePreview.materialId] = Math.max(0, display[galaxyLivePreview.materialId] + galaxyLivePreview.amount);
    }
    return display;
  }, [galaxyInventory, galaxyLivePreview]);

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
    const committedUnits = activeMission.phase === "mining"
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
  const activeMissionRouteLine = useMemo(() => {
    if (!activeMission || !activeMissionTarget) return null;
    if (activeMission.phase === "traveling") return { from: playerBaseNode.position, to: activeMissionTarget.position };
    if (activeMission.phase === "returning") return { from: activeMissionMarkerPosition ?? activeMission.returnStartPosition ?? activeMissionTarget.position, to: playerBaseNode.position };
    return null;
  }, [activeMission, activeMissionMarkerPosition, activeMissionTarget, playerBaseNode.position]);
  const focusBase = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ left: Math.max(0, playerBaseNode.position.x - container.clientWidth / 2), top: Math.max(0, playerBaseNode.position.y - container.clientHeight / 2), behavior: "smooth" });
    setSelectedNodeId(playerBaseNode.id);
  }, [playerBaseNode.id, playerBaseNode.position]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/75 transition hover:bg-white/15 hover:text-white">
        <X size={16} />
      </button>
      <div className="absolute inset-0 overflow-auto" ref={scrollContainerRef} style={{ backgroundImage: "url('/gravitas/galaxy/deep-space-tile.webp')", backgroundRepeat: "repeat", backgroundSize: "460px 460px" }}>
        <div className="relative overflow-hidden" style={getGalaxyWorldCanvasStyle(GALAXY_WORLD_SIZE)}>
          <div className="absolute left-4 top-4 z-[18] w-[260px] rounded-[20px] border border-cyan-300/14 bg-[#081120]/78 p-3 text-white shadow-[0_18px_42px_rgba(0,0,0,0.26)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="relative h-11 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                <div className="absolute inset-y-[8px] left-[6px] w-[16px] rounded-full border border-white/10 bg-white/5" />
                <motion.div className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-300/18 shadow-[0_0_16px_rgba(34,211,238,0.28)]" animate={activeMissionStatus ? { x: [8, 38, 46], opacity: [0.8, 1, 0.85] } : { x: 8, opacity: 0.72 }} transition={activeMissionStatus ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}>
                  <div className="absolute inset-[5px] rounded-full bg-cyan-100" />
                </motion.div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar scrollbar-hide">
              {METEOR_MATERIAL_ORDER.map((materialId) => {
                const meta = METEOR_MATERIAL_META[materialId];
                return (
                  <div key={materialId} className={`group flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white/78 ${meta.glowClassName}`}>
                    <span className={`flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-black/18 text-[8px] ${meta.colorClassName}`}>{localize(lang, meta.short)}</span>
                    <span className={`hidden sm:inline ${meta.colorClassName}`}>{localize(lang, meta.label)}</span>
                    <span className="text-white">{formatCompactGalaxyValue(displayedGalaxyInventory[materialId])}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 text-[10px] leading-relaxed text-white/64">{activeMissionTarget ? `Locked route to ${localize(lang, activeMissionTarget.title)}.` : "Select a meteor and dispatch the drone. Travel and mining timers run live from the base."}</div>
            <div className="mt-3 flex items-center gap-2">
              <button type="button" onClick={focusBase} className="flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-50 transition hover:bg-cyan-300/16">
                <Home size={12} />
                {localize(lang, { en: "Go to base", hu: "Bázisra", de: "Zur Basis", ro: "La bază" })}
              </button>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.08),transparent_20%),radial-gradient(circle_at_76%_24%,rgba(168,85,247,0.08),transparent_18%),radial-gradient(circle_at_52%_68%,rgba(15,23,42,0.38),transparent_36%)]" />
          {GALAXY_DECOR_LAYERS.map((layer) => (<img key={layer.id} src={layer.src} alt="" draggable={false} className={layer.className} />))}
          {galaxyNodes.map((node) => (
            <motion.button key={node.id} type="button" onClick={() => setSelectedNodeId(node.id)} className="absolute z-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70" style={getGalaxyNodeAnchorStyle(node.position, GALAXY_WORLD_SIZE)} animate={node.motion} transition={{ duration: node.motionDuration, repeat: Infinity, ease: "easeInOut" }}>
              <motion.span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.08, 0.2, 0.08] }} transition={{ duration: 4.6 + (node.motionDuration % 3), repeat: Infinity, ease: "easeInOut" }} />
              <motion.span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[146px] w-[146px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_36%,transparent_70%)] blur-xl" animate={{ scale: [0.96, 1.06, 0.98], opacity: [0.14, 0.26, 0.14] }} transition={{ duration: 5.4 + (node.motionDuration % 4), repeat: Infinity, ease: "easeInOut" }} />
              <motion.span aria-hidden className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-white/80 blur-[0.5px]" animate={{ opacity: [0.08, 0.6, 0.08], scale: [0.8, 1.25, 0.8] }} transition={{ duration: 3.2 + (node.motionDuration % 2), repeat: Infinity, ease: "easeInOut" }} />
              <motion.span aria-hidden className="pointer-events-none absolute right-[14%] top-[26%] h-1.5 w-1.5 rounded-full bg-cyan-200/80 blur-[0.5px]" animate={{ opacity: [0.06, 0.42, 0.06], y: [0, -5, 0] }} transition={{ duration: 4.2 + (node.motionDuration % 5), repeat: Infinity, ease: "easeInOut" }} />
              <motion.span aria-hidden className="pointer-events-none absolute left-[20%] bottom-[18%] h-3.5 w-3.5 rounded-full border border-white/10 bg-white/5" animate={{ x: [0, -3, 1, 0], y: [0, 2, -2, 0], opacity: [0.14, 0.3, 0.16, 0.14] }} transition={{ duration: 6 + (node.motionDuration % 4), repeat: Infinity, ease: "easeInOut" }} />
              <motion.span aria-hidden className="pointer-events-none absolute right-[18%] bottom-[12%] h-2.5 w-2.5 rounded-full border border-white/10 bg-white/5" animate={{ x: [0, 2, -2, 0], y: [0, -2, 2, 0], opacity: [0.12, 0.24, 0.12] }} transition={{ duration: 5.2 + (node.motionDuration % 3), repeat: Infinity, ease: "easeInOut" }} />
              {node.pulseClassName && <span className={node.pulseClassName} />}
              <img src={node.assetSrc} alt={localize(lang, node.assetAlt ?? node.title)} draggable={false} className={node.assetClassName} />
            </motion.button>
          ))}
          {activeMissionTarget && activeMissionMarkerPosition && (
            <>
              {isFocusedMissionVisible && activeMissionRouteLine && <div className="pointer-events-none absolute z-[9] h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.06),rgba(34,211,238,0.9),rgba(34,211,238,0.08))] shadow-[0_0_12px_rgba(34,211,238,0.28)]" style={getGalaxyLinkStyle(activeMissionRouteLine.from, activeMissionRouteLine.to)} />}
              <motion.button type="button" onClick={() => setFocusedDroneNodeId((current) => (current === activeMission.targetNodeId ? null : activeMission.targetNodeId))} className="absolute z-[14] flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/26 bg-[#07111d]/80 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.24)] backdrop-blur-md transition hover:scale-[1.04] hover:bg-[#0c1728]/90" style={{ left: `${activeMissionMarkerPosition.x}px`, top: `${activeMissionMarkerPosition.y}px`, transform: "translate(-50%, -50%)" }} animate={{ scale: activeMissionStatus?.status === "traveling" ? [0.96, 1.06, 0.96] : [1, 1.06, 1], opacity: [0.88, 1, 0.88] }} transition={{ duration: activeMissionStatus?.status === "traveling" ? 1.4 : 1.8, repeat: Infinity, ease: "easeInOut" }} aria-label="Drone">
                <Rocket size={16} />
              </motion.button>
              {isFocusedMissionVisible && (
                <motion.div initial={{ opacity: 0, y: 6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute z-[15] pointer-events-none w-[170px] rounded-[16px] border border-cyan-300/18 bg-[#081120]/92 px-3 py-2 text-white shadow-[0_16px_34px_rgba(0,0,0,0.26)] backdrop-blur-md" style={{ left: `${activeMissionMarkerPosition.x + 18}px`, top: `${activeMissionMarkerPosition.y - 54}px` }}>
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
