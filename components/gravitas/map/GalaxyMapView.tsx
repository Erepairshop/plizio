"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Fuel,
  Home,
  Minus,
  Plus,
  RotateCcw,
  ShieldAlert,
  Sparkles,
  X,
} from "lucide-react";
import type { GalaxyMapState, FleetMovement, MapNode } from "@/lib/gravitas/sim/map/types";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

type Lang = "en" | "hu" | "de" | "ro";

type GalaxyMapViewProps = {
  lang: Lang;
  galaxyState: GalaxyMapState;
  currentTick: number;
  antimatter: { current: number; max: number };
  onNodeClick?: (node: MapNode) => void;
  onNodeCollect?: (node: MapNode) => void;
  onNodeAttack?: (node: MapNode) => void;
  onNodeInspect?: (node: MapNode) => void;
  onFleetClick?: (fleet: FleetMovement) => void;
  onBaseClick?: () => void;
  className?: string;
};

type WorldPoint = { x: number; y: number };
type FleetVisual = {
  fleet: FleetMovement;
  from: WorldPoint;
  to: WorldPoint;
  current: WorldPoint;
  progress: number;
  statusLabel: LocalizedString;
  statusTone: string;
};

type NodeVisual = {
  node: MapNode;
  point: WorldPoint;
  assetSrc: string;
  label: LocalizedString;
  toneClass: string;
};

type NodeAction = {
  id: string;
  label: string;
  icon: React.ReactNode;
  toneClass: string;
  onClick: () => void;
  disabled?: boolean;
};

const WORLD_SIZE = 12000;
const WORLD_CENTER = WORLD_SIZE / 2;
/** Backend coords are ±3.0; scale to fill ~80% of the 12000px world canvas */
const COORD_SCALE = 1600;
const MIN_ZOOM = 0.18;
const MAX_ZOOM = 1.8;

function localize(lang: Lang, ls: LocalizedString) {
  return ls[lang] ?? ls.en;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function formatDurationMs(ms: number) {
  if (!Number.isFinite(ms) || ms <= 0) return "0s";
  if (ms >= 3_600_000) return `${Math.ceil(ms / 3_600_000)}h`;
  if (ms >= 60_000) return `${Math.ceil(ms / 60_000)}m`;
  return `${Math.ceil(ms / 1000)}s`;
}

function formatTickDuration(ticks: number) {
  return formatDurationMs(Math.max(0, ticks) * 1000);
}

function formatDecimal(value: number, digits = 1) {
  return Number.isFinite(value) ? value.toFixed(digits) : "0.0";
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function shortId(value: string, length = 12) {
  return value.length > length ? `${value.slice(0, length)}…` : value;
}

function getNodeLabel(node: MapNode): LocalizedString {
  if (node.type === "meteorite") {
    return {
      en: "Meteorite",
      hu: "Meteorit",
      de: "Meteorit",
      ro: "Meteorit",
    };
  }
  if (node.type === "pve_base") {
    return {
      en: "Enemy Base",
      hu: "Ellenséges bázis",
      de: "Feindbasis",
      ro: "Bază inamică",
    };
  }
  return {
    en: "Anomaly",
    hu: "Anomália",
    de: "Anomalie",
    ro: "Anomalie",
  };
}

function getNodeDescription(node: MapNode): LocalizedString {
  if (node.type === "meteorite") {
    return {
      en: "Transient ore-bearing object detected by long-range sensors.",
      hu: "Ideiglenes, ércet hordozó objektum a szenzorok szerint.",
      de: "Vergängliches, erzführendes Objekt, von Langstreckensensoren erfasst.",
      ro: "Obiect temporar purtător de minereu detectat de senzorii de rază lungă.",
    };
  }
  if (node.type === "pve_base") {
    return {
      en: "Hostile construction with active defenses.",
      hu: "Ellenséges építmény aktív védelemmel.",
      de: "Feindliche Struktur mit aktiver Verteidigung.",
      ro: "Structură ostilă cu apărare activă.",
    };
  }
  return {
    en: "Unstable spatial anomaly.",
    hu: "Instabil téranomália.",
    de: "Instabile Raumanomalie.",
    ro: "Anomalie spațială instabilă.",
  };
}

function getNodeAsset(node: MapNode) {
  if (node.type === "pve_base") return "/gravitas/galaxy/enemy-hq.webp";
  if (node.type === "anomaly") return "/gravitas/galaxy/signal-fog.webp";
  const variants = [
    "/gravitas/galaxy/meteor-aether.webp",
    "/gravitas/galaxy/meteor-ember.webp",
    "/gravitas/galaxy/meteor-lumen.webp",
    "/gravitas/galaxy/meteor-sable.webp",
    "/gravitas/galaxy/meteor-verdant.webp",
    "/gravitas/galaxy/meteor-rift.webp",
  ];
  return variants[hashString(node.id) % variants.length];
}

function getNodeTone(node: MapNode) {
  if (node.type === "pve_base") return "text-rose-100";
  if (node.type === "anomaly") return "text-violet-100";
  return "text-cyan-100";
}

function getNodeHalo(node: MapNode) {
  if (node.type === "pve_base") return "rgba(248,113,113,0.28)";
  if (node.type === "anomaly") return "rgba(168,85,247,0.24)";
  return "rgba(34,211,238,0.24)";
}

function getFleetStatusMeta(fleet: FleetMovement) {
  switch (fleet.status) {
    case "mining":
      return {
        label: {
          en: "Mining",
          hu: "Bányászat",
          de: "Abbau",
          ro: "Extragere",
        } satisfies LocalizedString,
        tone: "text-emerald-200",
        glow: "rgba(16,185,129,0.72)",
      };
    case "returning":
      return {
        label: {
          en: "Returning",
          hu: "Visszatérés",
          de: "Rückkehr",
          ro: "Întoarcere",
        } satisfies LocalizedString,
        tone: "text-cyan-200",
        glow: "rgba(34,211,238,0.72)",
      };
    default:
      return {
        label: {
          en: "Traveling",
          hu: "Utazás",
          de: "Reise",
          ro: "Călătorie",
        } satisfies LocalizedString,
        tone: "text-amber-200",
        glow: "rgba(251,191,36,0.72)",
      };
  }
}

function getFleetProgress(fleet: FleetMovement, now: number) {
  const total = Math.max(1, fleet.arrivalTime - fleet.departureTime);
  if (fleet.status === "mining" && fleet.miningCompletesAt) {
    const start = fleet.arrivalTime;
    const miningTotal = Math.max(1, fleet.miningCompletesAt - start);
    return clamp((now - start) / miningTotal, 0, 1);
  }
  return clamp((now - fleet.departureTime) / total, 0, 1);
}

export default function GalaxyMapView({
  lang,
  galaxyState,
  currentTick,
  antimatter,
  onNodeClick,
  onNodeCollect,
  onNodeAttack,
  onNodeInspect,
  onFleetClick,
  onBaseClick,
  className,
}: GalaxyMapViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const pointerMapRef = useRef(new Map<number, { x: number; y: number }>());
  const dragRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    startOffsetX: number;
    startOffsetY: number;
    panX: number;
    panY: number;
    mode: "pan" | "pinch" | null;
    pinchStartDistance: number;
    pinchStartZoom: number;
    pinchWorldPoint: WorldPoint | null;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startOffsetX: 0,
    startOffsetY: 0,
    panX: 0,
    panY: 0,
    mode: null,
    pinchStartDistance: 0,
    pinchStartZoom: 1,
    pinchWorldPoint: null,
  });
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [selectedFleetId, setSelectedFleetId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(0.88);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 1, height: 1 });
  const [isPanning, setIsPanning] = useState(false);
  const zoomRef = useRef(zoom);
  const offsetRef = useRef(offset);

  const base = galaxyState.baseCoordinates ?? { x: 0, y: 0 };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const update = () => {
      setViewport({
        width: container.clientWidth || 1,
        height: container.clientHeight || 1,
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(container);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const centerX = viewport.width / 2 - WORLD_CENTER * zoom;
    const centerY = viewport.height / 2 - WORLD_CENTER * zoom;
    setOffset({ x: centerX, y: centerY });
  }, [viewport.width, viewport.height]);

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  const visibleStars = useMemo(
    () =>
      Array.from({ length: 200 }, (_, index) => {
        const seed = hashString(`star:${index}`);
        return {
          id: index,
          x: (seed % 4000) / 40,
          y: (Math.floor(seed / 4000) % 4000) / 40,
          size: 1 + (seed % 3),
          opacity: 0.2 + ((seed % 80) / 100),
          delay: (seed % 17) / 10,
        };
      }),
    [],
  );

  const nodeVisuals = useMemo<NodeVisual[]>(() => {
    return galaxyState.transientNodes.map((node) => {
      const point = {
        x: WORLD_CENTER + (node.x - base.x) * COORD_SCALE,
        y: WORLD_CENTER + (node.y - base.y) * COORD_SCALE,
      };
      return {
        node,
        point,
        assetSrc: getNodeAsset(node),
        label: getNodeLabel(node),
        toneClass: getNodeTone(node),
      };
    });
  }, [base.x, base.y, galaxyState.transientNodes]);

  const fleetVisuals = useMemo<FleetVisual[]>(() => {
    const nodeById = new Map(galaxyState.transientNodes.map((node) => [node.id, node] as const));
    return galaxyState.activeFleets.map((fleet) => {
      const targetNode = nodeById.get(fleet.targetNodeId);
      const targetPoint = targetNode
        ? {
            x: WORLD_CENTER + (targetNode.x - base.x) * COORD_SCALE,
            y: WORLD_CENTER + (targetNode.y - base.y) * COORD_SCALE,
          }
        : { x: WORLD_CENTER, y: WORLD_CENTER };
      const originPoint =
        fleet.status === "returning"
          ? targetPoint
          : {
              x: WORLD_CENTER + 0,
              y: WORLD_CENTER + 0,
            };
      const progress = getFleetProgress(fleet, currentTick);
      const current = {
        x: originPoint.x + (targetPoint.x - originPoint.x) * progress,
        y: originPoint.y + (targetPoint.y - originPoint.y) * progress,
      };
      return {
        fleet,
        from: originPoint,
        to: targetPoint,
        current,
        progress,
        statusLabel: getFleetStatusMeta(fleet).label,
        statusTone: getFleetStatusMeta(fleet).tone,
      };
    });
  }, [base.x, base.y, currentTick, galaxyState.activeFleets, galaxyState.transientNodes]);

  const selectedNode = useMemo(() => nodeVisuals.find((entry) => entry.node.id === selectedNodeId) ?? null, [nodeVisuals, selectedNodeId]);
  const selectedFleet = useMemo(() => fleetVisuals.find((entry) => entry.fleet.id === selectedFleetId) ?? null, [fleetVisuals, selectedFleetId]);
  const selectedNodeDistance = useMemo(
    () => (selectedNode ? Math.hypot(selectedNode.node.x - base.x, selectedNode.node.y - base.y) : 0),
    [base.x, base.y, selectedNode],
  );
  const selectedFleetTarget = useMemo(
    () => (selectedFleet ? galaxyState.transientNodes.find((item) => item.id === selectedFleet.fleet.targetNodeId) ?? null : null),
    [galaxyState.transientNodes, selectedFleet],
  );
  const selectedFleetRouteDistance = useMemo(
    () => (selectedFleetTarget ? Math.hypot(selectedFleetTarget.x - base.x, selectedFleetTarget.y - base.y) : 0),
    [base.x, base.y, selectedFleetTarget],
  );
  const selectedFleetTotalTicks = useMemo(
    () => (selectedFleet ? Math.max(0, selectedFleet.fleet.arrivalTime - selectedFleet.fleet.departureTime) : 0),
    [selectedFleet],
  );
  const selectedFleetMiningTicks = useMemo(
    () => (selectedFleet?.fleet.miningCompletesAt ? Math.max(0, selectedFleet.fleet.miningCompletesAt - selectedFleet.fleet.arrivalTime) : 0),
    [selectedFleet],
  );
  const selectedNodeActions = useMemo<NodeAction[]>(() => {
    if (!selectedNode) return [];
    const fallbackInspect = () => onNodeInspect?.(selectedNode.node) ?? onNodeClick?.(selectedNode.node);
    const fallbackCollect = () => onNodeCollect?.(selectedNode.node) ?? fallbackInspect();
    const fallbackAttack = () => onNodeAttack?.(selectedNode.node) ?? fallbackInspect();

    if (selectedNode.node.type === "meteorite") {
      return [
        {
          id: "collect",
          label: localize(lang, { en: "Collect", hu: "Gyűjtés", de: "Sammeln", ro: "Colectează" }),
          icon: <Fuel size={12} />,
          toneClass: "text-emerald-100 border-emerald-300/18 bg-emerald-300/10",
          onClick: fallbackCollect,
        },
        {
          id: "inspect",
          label: localize(lang, { en: "Inspect", hu: "Vizsgálat", de: "Untersuchen", ro: "Inspectează" }),
          icon: <Sparkles size={12} />,
          toneClass: "text-cyan-100 border-cyan-300/18 bg-cyan-300/10",
          onClick: fallbackInspect,
        },
      ];
    }

    if (selectedNode.node.type === "pve_base") {
      return [
        {
          id: "attack",
          label: localize(lang, { en: "Attack", hu: "Támadás", de: "Angriff", ro: "Atacă" }),
          icon: <ShieldAlert size={12} />,
          toneClass: "text-rose-100 border-rose-300/18 bg-rose-300/10",
          onClick: fallbackAttack,
        },
        {
          id: "inspect",
          label: localize(lang, { en: "Scout", hu: "Felderítés", de: "Aufklärung", ro: "Recunoaștere" }),
          icon: <Sparkles size={12} />,
          toneClass: "text-cyan-100 border-cyan-300/18 bg-cyan-300/10",
          onClick: fallbackInspect,
        },
      ];
    }

    return [
      {
        id: "inspect",
        label: localize(lang, { en: "Inspect", hu: "Vizsgálat", de: "Untersuchen", ro: "Inspectează" }),
        icon: <Sparkles size={12} />,
        toneClass: "text-violet-100 border-violet-300/18 bg-violet-300/10",
        onClick: fallbackInspect,
      },
      {
        id: "focus",
        label: localize(lang, { en: "Focus", hu: "Fókusz", de: "Fokus", ro: "Focus" }),
        icon: <Home size={12} />,
        toneClass: "text-white/80 border-white/12 bg-white/5",
        onClick: fallbackInspect,
      },
    ];
  }, [lang, onNodeAttack, onNodeClick, onNodeCollect, onNodeInspect, selectedNode]);

  const recenter = useCallback(() => {
    const centerX = viewport.width / 2 - WORLD_CENTER * zoom;
    const centerY = viewport.height / 2 - WORLD_CENTER * zoom;
    const nextOffset = { x: centerX, y: centerY };
    offsetRef.current = nextOffset;
    setOffset(nextOffset);
  }, [viewport.height, viewport.width, zoom]);

  const applyZoom = useCallback(
    (nextZoom: number, focusPoint?: { x: number; y: number }) => {
      const clamped = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
      const currentZoom = zoomRef.current;
      const currentOffset = offsetRef.current;

      if (!focusPoint) {
        zoomRef.current = clamped;
        setZoom(clamped);
        return;
      }

      const worldX = (focusPoint.x - currentOffset.x) / currentZoom;
      const worldY = (focusPoint.y - currentOffset.y) / currentZoom;
      const nextOffset = {
        x: focusPoint.x - worldX * clamped,
        y: focusPoint.y - worldY * clamped,
      };
      zoomRef.current = clamped;
      offsetRef.current = nextOffset;
      setOffset(nextOffset);
      setZoom(clamped);
    },
    [],
  );

  const beginDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest("button, a, input, textarea, select, [role='button']")) return;

    pointerMapRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const activePointers = Array.from(pointerMapRef.current.values());

    if (activePointers.length === 1) {
      dragRef.current = {
        ...dragRef.current,
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startOffsetX: offset.x,
        startOffsetY: offset.y,
        panX: event.clientX,
        panY: event.clientY,
        mode: "pan",
      };
      setIsPanning(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (activePointers.length === 2) {
      const [p1, p2] = activePointers;
      const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      dragRef.current = {
        ...dragRef.current,
        active: true,
        pointerId: event.pointerId,
        mode: "pinch",
        pinchStartDistance: Math.max(1, distance),
        pinchStartZoom: zoom,
        pinchWorldPoint: {
          x: (mid.x - offset.x) / zoom,
          y: (mid.y - offset.y) / zoom,
        },
      };
      setIsPanning(true);
    }
  }, [offset.x, offset.y, zoom]);

  const moveDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    pointerMapRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const drag = dragRef.current;
    if (!drag.active) return;

    if (drag.mode === "pinch") {
      const pointers = Array.from(pointerMapRef.current.values());
      if (pointers.length < 2 || !drag.pinchWorldPoint) return;
      const [p1, p2] = pointers;
      const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      const distance = Math.max(1, Math.hypot(p1.x - p2.x, p1.y - p2.y));
      const nextZoom = clamp(drag.pinchStartZoom * (distance / drag.pinchStartDistance), MIN_ZOOM, MAX_ZOOM);
      const nextOffset = {
        x: mid.x - drag.pinchWorldPoint.x * nextZoom,
        y: mid.y - drag.pinchWorldPoint.y * nextZoom,
      };
      zoomRef.current = nextZoom;
      offsetRef.current = nextOffset;
      setZoom(nextZoom);
      setOffset(nextOffset);
      return;
    }

    if (drag.mode !== "pan" || drag.pointerId !== event.pointerId) return;

    const moved = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
    if (moved < 4) return;

    setOffset({
      x: drag.startOffsetX + (event.clientX - drag.startX),
      y: drag.startOffsetY + (event.clientY - drag.startY),
    });
  }, []);

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    pointerMapRef.current.delete(event.pointerId);
    const remaining = Array.from(pointerMapRef.current.values());
    if (remaining.length === 0) {
      dragRef.current.active = false;
      dragRef.current.mode = null;
      setIsPanning(false);
    }
    if (dragRef.current.pointerId === event.pointerId) {
      dragRef.current.pointerId = null;
    }
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore capture release failures
    }
  }, []);

  // Native wheel handler (non-passive) so we can preventDefault
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY;
      const nextZoom = clamp(zoom + (delta > 0 ? -0.06 : 0.06), MIN_ZOOM, MAX_ZOOM);
      const rect = el.getBoundingClientRect();
      const focus = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      applyZoom(nextZoom, focus);
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [applyZoom, zoom]);

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
      transformOrigin: "0 0",
      width: `${WORLD_SIZE}px`,
      height: `${WORLD_SIZE}px`,
    }),
    [offset.x, offset.y, zoom],
  );


  return (
    <div className={`relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.08),transparent_26%),linear-gradient(180deg,#04070f_0%,#06101b_38%,#02040a_100%)] ${className ?? ""}`}>
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden touch-none"
        onPointerDown={beginDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ touchAction: "none" }}
      >
        <div ref={worldRef} className="absolute left-0 top-0" style={containerStyle}>
          <div className="absolute inset-0 overflow-hidden">
            {visibleStars.map((star) => (
              <span
                key={star.id}
                className="absolute rounded-full bg-white/80"
                style={{
                  left: `${star.x}px`,
                  top: `${star.y}px`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  animation: `gravitasTwinkle ${5 + (star.id % 7)}s ease-in-out ${star.delay}s infinite`,
                }}
              />
            ))}
          </div>

          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            {fleetVisuals.map((entry) => (
              <line
                key={`trail-${entry.fleet.id}`}
                x1={entry.from.x}
                y1={entry.from.y}
                x2={entry.to.x}
                y2={entry.to.y}
                stroke={entry.statusTone}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="7 12"
                opacity={0.22}
              />
            ))}
          </svg>

          <button
            type="button"
            onClick={() => {
              setSelectedNodeId(null);
              setSelectedFleetId(null);
              onBaseClick?.();
              recenter();
            }}
            className="absolute z-[4] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-[#08111f]/72 p-5 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.16)] backdrop-blur-sm transition hover:scale-[1.03] hover:bg-[#0d182c]/84"
            style={{ left: `${WORLD_CENTER}px`, top: `${WORLD_CENTER}px` }}
            aria-label="Base"
          >
            <span className="absolute inset-[-18px] animate-pulse rounded-full border border-cyan-300/20 bg-cyan-300/6 blur-md" />
            <span className="absolute inset-[-7px] rounded-full border border-cyan-200/25" />
            <Home size={28} className="relative drop-shadow-[0_0_12px_rgba(34,211,238,0.42)]" />
          </button>

          {nodeVisuals.map(({ node, point, assetSrc, label, toneClass }) => {
            const occupied = Boolean(node.isOccupiedBy);
            const isSelected = selectedNodeId === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => {
                  setSelectedNodeId(node.id);
                  setSelectedFleetId(null);
                  onNodeClick?.(node);
                }}
                className={`absolute z-[6] -translate-x-1/2 -translate-y-1/2 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${occupied ? "animate-pulse" : ""}`}
                style={{ left: `${point.x}px`, top: `${point.y}px` }}
              >
                <span
                  className={`absolute inset-[-20px] rounded-full blur-xl transition-opacity ${occupied ? "opacity-100" : "opacity-75"}`}
                  style={{
                    background: occupied
                      ? "radial-gradient(circle, rgba(248,113,113,0.35), rgba(248,113,113,0.14) 45%, transparent 72%)"
                      : `radial-gradient(circle, ${getNodeHalo(node)}, rgba(255,255,255,0.06) 42%, transparent 72%)`,
                  }}
                />
                {occupied && (
                  <span className="absolute inset-[-10px] rounded-full border border-rose-400/70 animate-pulse" />
                )}
                <div className="relative flex flex-col items-center">
                  <img
                    src={assetSrc}
                    alt={localize(lang, label)}
                    draggable={false}
                    className={`h-[74px] w-[74px] select-none object-contain drop-shadow-[0_0_14px_rgba(34,211,238,0.22)] ${node.type === "pve_base" ? "drop-shadow-[0_0_18px_rgba(248,113,113,0.25)]" : ""} ${node.type === "anomaly" ? "mix-blend-screen" : ""}`}
                  />
                  <span className={`mt-1 rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] ${toneClass} border-white/10 bg-[#07111d]/82`}>
                    {localize(lang, label)}
                  </span>
                  <span className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
                    {formatNumber(node.x)} / {formatNumber(node.y)}
                  </span>
                </div>
                {isSelected && (
                  <span className="pointer-events-none absolute inset-[-4px] rounded-full border border-cyan-200/60 shadow-[0_0_0_1px_rgba(34,211,238,0.18)]" />
                )}
                {occupied && (
                  <span className="pointer-events-none absolute -right-2 -top-2 rounded-full border border-rose-400/50 bg-rose-500/20 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.18em] text-rose-100 shadow-[0_0_16px_rgba(248,113,113,0.18)]">
                    {localize(lang, {
                      en: "Occupied",
                      hu: "Foglalt",
                      de: "Besetzt",
                      ro: "Ocupat",
                    })}
                  </span>
                )}
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/4" />
              </button>
            );
          })}

          {fleetVisuals.map((entry) => {
            const meta = getFleetStatusMeta(entry.fleet);
            const node = galaxyState.transientNodes.find((item) => item.id === entry.fleet.targetNodeId);
            const isSelected = selectedFleetId === entry.fleet.id;
            return (
              <button
                key={entry.fleet.id}
                type="button"
                onClick={() => {
                  setSelectedFleetId(entry.fleet.id);
                  setSelectedNodeId(null);
                  onFleetClick?.(entry.fleet);
                }}
                className="absolute z-[7] -translate-x-1/2 -translate-y-1/2 rounded-full transition hover:scale-[1.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                style={{ left: `${entry.current.x}px`, top: `${entry.current.y}px` }}
              >
                <span
                  className="absolute inset-[-14px] rounded-full blur-lg"
                  style={{
                    background: `radial-gradient(circle, ${meta.glow}, transparent 70%)`,
                  }}
                />
                <span
                  className={`relative block h-4 w-4 rounded-full border border-white/20 shadow-[0_0_18px_rgba(255,255,255,0.18)] ${entry.fleet.status === "mining" ? "bg-emerald-300" : entry.fleet.status === "returning" ? "bg-cyan-300" : "bg-amber-300"}`}
                />
                {isSelected && (
                  <span className="pointer-events-none absolute inset-[-5px] rounded-full border border-white/80" />
                )}
                <span className={`absolute left-1/2 top-[-24px] -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#07111d]/90 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.18em] ${meta.tone}`}>
                  {localize(lang, meta.label)}
                </span>
                {node && (
                  <span className="absolute left-1/2 top-[16px] -translate-x-1/2 text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
                    {localize(lang, getNodeLabel(node))}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(180deg,rgba(4,9,18,0.92),rgba(4,9,18,0.6),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-[linear-gradient(0deg,rgba(4,9,18,0.94),rgba(4,9,18,0.58),transparent)]" />



      <div className="absolute right-4 bottom-4 z-[20] flex items-center gap-2 rounded-full border border-white/10 bg-[#08111f]/92 p-1.5 text-white shadow-[0_16px_42px_rgba(0,0,0,0.38)] backdrop-blur-md">
        <button type="button" onClick={() => applyZoom(zoom + 0.12, { x: viewport.width / 2, y: viewport.height / 2 })} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
          <Plus size={16} />
        </button>
        <button type="button" onClick={() => applyZoom(zoom - 0.12, { x: viewport.width / 2, y: viewport.height / 2 })} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
          <Minus size={16} />
        </button>
        <button type="button" onClick={recenter} className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-cyan-100 transition hover:bg-cyan-400/16">
          <RotateCcw size={16} />
        </button>
      </div>

      <AnimatePresence>
        {(selectedNode || selectedFleet) && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="absolute bottom-4 left-4 z-[22] w-[min(92vw,340px)] rounded-[24px] border border-white/10 bg-[#08111f]/94 p-4 text-white shadow-[0_20px_48px_rgba(0,0,0,0.42)] backdrop-blur-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[8px] font-black uppercase tracking-[0.22em] text-cyan-200/58">
                  {selectedFleet
                    ? localize(lang, {
                        en: "Fleet Status",
                        hu: "Flotta állapot",
                        de: "Flottenstatus",
                        ro: "Starea flotei",
                      })
                    : localize(lang, {
                        en: "Map Node",
                        hu: "Térképpont",
                        de: "Kartennode",
                        ro: "Nod de hartă",
                      })}
                </div>
                <div className="mt-1 text-[15px] font-black leading-tight text-white">
                  {selectedFleet
                    ? localize(lang, getFleetStatusMeta(selectedFleet.fleet).label)
                    : selectedNode
                      ? localize(lang, selectedNode.label)
                      : ""}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedNodeId(null);
                  setSelectedFleetId(null);
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X size={12} />
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {selectedNode && (
                <>
                  <p className="text-[11px] leading-snug text-white/68">
                    {localize(lang, getNodeDescription(selectedNode.node))}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-cyan-300/14 bg-cyan-400/8 px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-cyan-100/88">
                      {localize(lang, { en: "ID", hu: "Azonosító", de: "ID", ro: "ID" })}: {shortId(selectedNode.node.id)}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/5 px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-white/65">
                      {localize(lang, { en: "Owner", hu: "Tulaj", de: "Besitzer", ro: "Proprietar" })}:{" "}
                      {selectedNode.node.isOccupiedBy ? shortId(selectedNode.node.isOccupiedBy) : localize(lang, { en: "None", hu: "Nincs", de: "Keiner", ro: "Nimeni" })}
                    </span>
                    <span className="rounded-full border border-violet-300/14 bg-violet-400/8 px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-violet-100/88">
                      {localize(lang, { en: "Lifetime", hu: "Élettartam", de: "Lebenszeit", ro: "Durată" })}:{" "}
                      {selectedNode.node.expiresAt <= currentTick
                        ? localize(lang, { en: "Expired", hu: "Lejárt", de: "Abgelaufen", ro: "Expirat" })
                        : formatTickDuration(selectedNode.node.expiresAt - currentTick)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Coordinates", hu: "Koordináta", de: "Koordinaten", ro: "Coordonate" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-cyan-100">
                        {formatNumber(selectedNode.node.x)} / {formatNumber(selectedNode.node.y)}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Stealth", hu: "Rejtség", de: "Tarnung", ro: "Furtivitate" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-amber-100">
                        {formatNumber(selectedNode.node.stealthLevel)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
                    {selectedNode.node.isOccupiedBy ? <ShieldAlert size={12} className="text-rose-300" /> : <Sparkles size={12} className="text-cyan-200" />}
                    <span>
                      {selectedNode.node.isOccupiedBy
                        ? localize(lang, { en: "Occupied", hu: "Foglalt", de: "Besetzt", ro: "Ocupat" })
                        : localize(lang, { en: "Free target", hu: "Szabad célpont", de: "Freies Ziel", ro: "Țintă liberă" })}
                    </span>
                    <span className="ml-auto text-white/35">
                      {selectedNode.node.expiresAt <= currentTick
                        ? localize(lang, { en: "Expired", hu: "Lejárt", de: "Abgelaufen", ro: "Expirat" })
                        : formatTickDuration(selectedNode.node.expiresAt - currentTick)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Range", hu: "Távolság", de: "Reichweite", ro: "Distanță" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-violet-100">
                        {formatDecimal(selectedNodeDistance, 1)}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Type", hu: "Típus", de: "Typ", ro: "Tip" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-amber-100">
                        {localize(lang, selectedNode.label)}
                      </div>
                    </div>
                  </div>
                  {selectedNodeActions.length > 0 && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {selectedNodeActions.map((action) => (
                        <button
                          key={action.id}
                          type="button"
                          onClick={action.onClick}
                          className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition hover:brightness-110 ${action.toneClass}`}
                        >
                          {action.icon}
                          <span>{action.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}

              {selectedFleet && (
                <>
                  <p className="text-[11px] leading-snug text-white/68">
                    {selectedFleetTarget
                      ? localize(lang, {
                          en: `Target: ${localize(lang, getNodeLabel(selectedFleetTarget))}`,
                          hu: `Célpont: ${localize(lang, getNodeLabel(selectedFleetTarget))}`,
                          de: `Ziel: ${localize(lang, getNodeLabel(selectedFleetTarget))}`,
                          ro: `Țintă: ${localize(lang, getNodeLabel(selectedFleetTarget))}`,
                        })
                      : localize(lang, {
                          en: "Target coordinates unavailable.",
                          hu: "A célpont koordinátái nem elérhetők.",
                          de: "Zielkoordinaten nicht verfügbar.",
                          ro: "Coordonatele țintei nu sunt disponibile.",
                        })}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-cyan-300/14 bg-cyan-400/8 px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-cyan-100/88">
                      {localize(lang, { en: "ID", hu: "Azonosító", de: "ID", ro: "ID" })}: {shortId(selectedFleet.fleet.id)}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/5 px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-white/65">
                      {localize(lang, { en: "Target", hu: "Cél", de: "Ziel", ro: "Țintă" })}:{" "}
                      {selectedFleetTarget ? shortId(selectedFleetTarget.id) : localize(lang, { en: "Unknown", hu: "Ismeretlen", de: "Unbekannt", ro: "Necunoscut" })}
                    </span>
                    <span className="rounded-full border border-violet-300/14 bg-violet-400/8 px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-violet-100/88">
                      {localize(lang, { en: "Route", hu: "Útvonal", de: "Route", ro: "Rută" })}:{" "}
                      {selectedFleet.fleet.status === "returning"
                        ? localize(lang, { en: "Back", hu: "Vissza", de: "Zurück", ro: "Înapoi" })
                        : localize(lang, { en: "Outbound", hu: "Kimenő", de: "Hinweg", ro: "Dus" })}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Progress", hu: "Előrehaladás", de: "Fortschritt", ro: "Progres" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-cyan-100">
                        {Math.round(selectedFleet.progress * 100)}%
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "ETA", hu: "Érkezés", de: "Ankunft", ro: "Sosire" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-emerald-100">
                        {formatTickDuration(selectedFleet.fleet.arrivalTime - currentTick)}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Route", hu: "Útvonal", de: "Route", ro: "Rută" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-cyan-100">
                        {selectedFleet.fleet.status === "returning"
                          ? localize(lang, { en: "Target → Base", hu: "Célpont → Bázis", de: "Ziel → Basis", ro: "Țintă → Bază" })
                          : localize(lang, { en: "Base → Target", hu: "Bázis → Célpont", de: "Basis → Ziel", ro: "Bază → Țintă" })}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Travel", hu: "Utazás", de: "Reise", ro: "Călătorie" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-violet-100">
                        {formatTickDuration(selectedFleetTotalTicks || selectedFleetMiningTicks || 0)}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "Range", hu: "Távolság", de: "Reichweite", ro: "Distanță" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-fuchsia-100">
                        {formatDecimal(selectedFleetRouteDistance, 1)}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-2.5">
                      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-white/42">
                        {localize(lang, { en: "State", hu: "Állapot", de: "Status", ro: "Stare" })}
                      </div>
                      <div className="mt-1 text-[12px] font-black text-amber-100">
                        {localize(lang, selectedFleet.statusLabel)}
                      </div>
                    </div>
                  </div>
                  <div className={`rounded-2xl border px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] ${selectedFleet.statusTone} border-white/8 bg-white/5`}>
                    {localize(lang, selectedFleet.statusLabel)}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gravitasTwinkle {
          0%, 100% { opacity: 0.18; transform: scale(0.92); }
          50% { opacity: 0.95; transform: scale(1.18); }
        }
      `}</style>
    </div>
  );
}
