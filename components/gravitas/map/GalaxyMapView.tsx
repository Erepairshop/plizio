"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  Fuel,
  Crosshair,
  Satellite,
  MapPin,
  Home as HomeIcon,
  Anchor,
  Navigation,
} from "lucide-react";
import type {
  GalaxyMapState,
  MapNode,
  FleetMovement,
} from "@/lib/gravitas/sim/map/types";

/* ─── constants ──────────────────────────────────────────────── */

const MIN_ZOOM = 0.35;
const MAX_ZOOM = 3;
const ZOOM_SENSITIVITY = 0.002;

/**
 * The backend generates node coords in a ±100 range.
 * We scale them up for visual spacing on the DOM canvas.
 */
const COORD_SCALE = 12;
const WORLD_CENTER = 1500; // visual center offset so all coords are positive

/* ─── helpers ────────────────────────────────────────────────── */

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

/** Scale backend coords to visual coords */
function toVisual(x: number, y: number): { vx: number; vy: number } {
  return {
    vx: WORLD_CENTER + x * COORD_SCALE,
    vy: WORLD_CENTER + y * COORD_SCALE,
  };
}

/** Fleet progress 0→1 based on tick values */
function fleetProgress(f: FleetMovement, currentTick: number): number {
  if (currentTick <= f.departureTime) return 0;
  if (currentTick >= f.arrivalTime) return 1;
  const total = f.arrivalTime - f.departureTime;
  if (total <= 0) return 1;
  return (currentTick - f.departureTime) / total;
}

/** Interpolate fleet position between base and target node (tick-based) */
function interpolateFleetPosition(
  fleet: FleetMovement,
  base: { x: number; y: number },
  nodes: MapNode[],
  currentTick: number,
): { x: number; y: number } | null {
  const target = nodes.find((n) => n.id === fleet.targetNodeId);
  if (!target) return null;

  const baseV = toVisual(base.x, base.y);
  const targetV = toVisual(target.x, target.y);
  const t = fleetProgress(fleet, currentTick);

  if (fleet.status === "traveling_to") {
    return { x: lerp(baseV.vx, targetV.vx, t), y: lerp(baseV.vy, targetV.vy, t) };
  }
  if (fleet.status === "mining") {
    return { x: targetV.vx, y: targetV.vy };
  }
  // returning
  return { x: lerp(targetV.vx, baseV.vx, t), y: lerp(targetV.vy, baseV.vy, t) };
}

/* ─── node type config ───────────────────────────────────────── */

const NODE_GLOW: Record<string, string> = {
  meteorite:
    "drop-shadow(0 0 6px rgba(167,139,250,0.6)) drop-shadow(0 0 14px rgba(167,139,250,0.25))",
  pve_base:
    "drop-shadow(0 0 6px rgba(239,68,68,0.7)) drop-shadow(0 0 14px rgba(239,68,68,0.3))",
  anomaly:
    "drop-shadow(0 0 8px rgba(56,189,248,0.7)) drop-shadow(0 0 16px rgba(56,189,248,0.3))",
};

const NODE_BORDER: Record<string, string> = {
  meteorite: "border-violet-500/30",
  pve_base: "border-red-500/40",
  anomaly: "border-cyan-400/30",
};

const NODE_LABEL: Record<string, string> = {
  meteorite: "Meteorite",
  pve_base: "Outpost",
  anomaly: "Anomaly",
};

/* ─── fleet status visual ────────────────────────────────────── */

const FLEET_STATUS_COLOR: Record<string, string> = {
  traveling_to: "bg-amber-400",
  mining: "bg-emerald-400",
  returning: "bg-cyan-400",
};

const FLEET_STATUS_GLOW: Record<string, string> = {
  traveling_to: "shadow-[0_0_8px_rgba(251,191,36,0.7)]",
  mining: "shadow-[0_0_8px_rgba(52,211,153,0.7)]",
  returning: "shadow-[0_0_8px_rgba(34,211,238,0.7)]",
};

const FLEET_STATUS_LABEL: Record<string, string> = {
  traveling_to: "En Route",
  mining: "Mining",
  returning: "Returning",
};

const FLEET_STATUS_TEXT_COLOR: Record<string, string> = {
  traveling_to: "text-amber-300",
  mining: "text-emerald-300",
  returning: "text-cyan-300",
};

/* ═══════════════════════════════════════════════════════════════
   GalaxyMapView — DOM-based galaxy map with pan/zoom
   ═══════════════════════════════════════════════════════════════ */

export default function GalaxyMapView({
  galaxyState,
  currentTick,
  antimatter,
  onNodeClick,
  onFleetClick,
  onBaseClick,
}: {
  galaxyState: GalaxyMapState;
  currentTick: number;
  antimatter: { current: number; max: number };
  onNodeClick?: (nodeId: string) => void;
  onFleetClick?: (fleetId: string) => void;
  onBaseClick?: () => void;
}) {
  /* ── pan / zoom state ──────────────────────────────────────── */
  const containerRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.85);
  const [initialized, setInitialized] = useState(false);

  // pointer drag state
  const dragRef = useRef<{
    active: boolean;
    pointerId: number;
    lastX: number;
    lastY: number;
    startX: number;
    startY: number;
    moved: boolean;
  } | null>(null);

  // pinch zoom state
  const pinchRef = useRef<{ dist: number; baseZoom: number } | null>(null);
  const touchesRef = useRef<Map<number, { x: number; y: number }>>(new Map());

  // Center on base initially
  const baseVisual = useMemo(
    () => toVisual(galaxyState.baseCoordinates.x, galaxyState.baseCoordinates.y),
    [galaxyState.baseCoordinates.x, galaxyState.baseCoordinates.y],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el || initialized) return;
    const rect = el.getBoundingClientRect();
    setPan({
      x: -baseVisual.vx * 0.85 + rect.width / 2,
      y: -baseVisual.vy * 0.85 + rect.height / 2,
    });
    setInitialized(true);
  }, [baseVisual, initialized]);

  /* ── pointer handlers (pan) ────────────────────────────────── */

  const onPointerDown = useCallback(
    (e: ReactPointerEvent) => {
      if (e.pointerType === "touch") {
        touchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (touchesRef.current.size === 2) {
          const pts = Array.from(touchesRef.current.values());
          const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
          pinchRef.current = { dist, baseZoom: zoom };
          dragRef.current = null;
          return;
        }
      }
      dragRef.current = {
        active: true,
        pointerId: e.pointerId,
        lastX: e.clientX,
        lastY: e.clientY,
        startX: e.clientX,
        startY: e.clientY,
        moved: false,
      };
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [zoom],
  );

  const onPointerMove = useCallback((e: ReactPointerEvent) => {
    if (e.pointerType === "touch") {
      touchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touchesRef.current.size === 2 && pinchRef.current) {
        const pts = Array.from(touchesRef.current.values());
        const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
        const scale = dist / pinchRef.current.dist;
        setZoom(Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, pinchRef.current.baseZoom * scale)));
        return;
      }
    }
    const d = dragRef.current;
    if (!d?.active || d.pointerId !== e.pointerId) return;
    const dx = e.clientX - d.lastX;
    const dy = e.clientY - d.lastY;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    if (Math.hypot(e.clientX - d.startX, e.clientY - d.startY) > 4) d.moved = true;
    setPan((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  }, []);

  const onPointerUp = useCallback((e: ReactPointerEvent) => {
    touchesRef.current.delete(e.pointerId);
    if (touchesRef.current.size < 2) pinchRef.current = null;
    if (dragRef.current?.pointerId === e.pointerId) {
      dragRef.current = null;
    }
  }, []);

  /* ── wheel zoom ────────────────────────────────────────────── */

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      setZoom((z) =>
        Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z * (1 - e.deltaY * ZOOM_SENSITIVITY))),
      );
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  /* ── fleet animation re-render ─────────────────────────────── */

  const [renderTick, setRenderTick] = useState(0);
  useEffect(() => {
    if (galaxyState.activeFleets.length === 0) return;
    const id = setInterval(() => setRenderTick((t) => t + 1), 400);
    return () => clearInterval(id);
  }, [galaxyState.activeFleets.length]);

  /* ── memoized fleet positions ──────────────────────────────── */

  const fleetPositions = useMemo(() => {
    const result: { fleet: FleetMovement; x: number; y: number }[] = [];
    for (const f of galaxyState.activeFleets) {
      const pos = interpolateFleetPosition(
        f,
        galaxyState.baseCoordinates,
        galaxyState.transientNodes,
        currentTick,
      );
      if (pos) result.push({ fleet: f, ...pos });
    }
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galaxyState.activeFleets, galaxyState.transientNodes, galaxyState.baseCoordinates, currentTick, renderTick]);

  /* ── memoized node visual positions ────────────────────────── */

  const nodePositions = useMemo(
    () =>
      galaxyState.transientNodes.map((node) => ({
        node,
        ...toVisual(node.x, node.y),
      })),
    [galaxyState.transientNodes],
  );

  /* ── recenter helper ───────────────────────────────────────── */

  const recenter = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPan({
      x: -baseVisual.vx * zoom + rect.width / 2,
      y: -baseVisual.vy * zoom + rect.height / 2,
    });
  }, [baseVisual, zoom]);

  /* ── render ────────────────────────────────────────────────── */

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none">
      {/* ── nebula / star background ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(88,28,135,0.15),transparent_50%),radial-gradient(ellipse_at_70%_75%,rgba(30,58,138,0.12),transparent_45%),radial-gradient(ellipse_at_50%_50%,rgba(6,6,18,1),transparent)]" />
        <StarField />
      </div>

      {/* ── pannable / zoomable world layer ────────────────────── */}
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="absolute origin-top-left will-change-transform"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
          }}
        >
          {/* ── grid overlay ────────────────────────────────────── */}
          <div
            className="absolute pointer-events-none opacity-[0.04]"
            style={{
              left: 0,
              top: 0,
              width: WORLD_CENTER * 2,
              height: WORLD_CENTER * 2,
              backgroundImage:
                "linear-gradient(rgba(167,139,250,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.4) 1px, transparent 1px)",
              backgroundSize: `${COORD_SCALE * 20}px ${COORD_SCALE * 20}px`,
            }}
          />

          {/* ── fleet trail lines ───────────────────────────────── */}
          <FleetTrails
            fleets={galaxyState.activeFleets}
            nodes={galaxyState.transientNodes}
            base={galaxyState.baseCoordinates}
          />

          {/* ── base station ──────────────────────────────────── */}
          <button
            onClick={() => onBaseClick?.()}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-[5]"
            style={{ left: baseVisual.vx, top: baseVisual.vy }}
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* outer scanner ring */}
              <div
                className="absolute -inset-3 rounded-full border border-cyan-400/15"
                style={{ animation: "baseScanRing 4s linear infinite" }}
              />
              {/* glow rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse" />
              <div className="absolute -inset-1 rounded-full border border-cyan-400/10" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-b from-cyan-950/70 to-slate-950/80 backdrop-blur-sm" />
              {/* icon */}
              <Anchor className="relative w-7 h-7 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black tracking-[0.2em] text-cyan-300/70 uppercase">
              Starhold
            </span>
          </button>

          {/* ── map nodes ─────────────────────────────────────── */}
          {nodePositions.map(({ node, vx, vy }) => (
            <MapNodeElement
              key={node.id}
              node={node}
              vx={vx}
              vy={vy}
              onClick={() => onNodeClick?.(node.id)}
            />
          ))}

          {/* ── fleets ────────────────────────────────────────── */}
          {fleetPositions.map(({ fleet, x, y }) => (
            <FleetElement
              key={fleet.id}
              fleet={fleet}
              x={x}
              y={y}
              onClick={() => onFleetClick?.(fleet.id)}
            />
          ))}
        </div>
      </div>

      {/* ── HUD: Antimatter Gauge ─────────────────────────────── */}
      <AntimatterGauge current={antimatter.current} max={antimatter.max} />

      {/* ── HUD: Fleet status strip ───────────────────────────── */}
      {galaxyState.activeFleets.length > 0 && (
        <FleetStatusStrip fleets={galaxyState.activeFleets} />
      )}

      {/* ── HUD: Zoom controls ────────────────────────────────── */}
      <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1">
        <button
          onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z * 1.3))}
          className="w-8 h-8 rounded bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:bg-white/10 flex items-center justify-center text-sm font-mono transition-colors"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z / 1.3))}
          className="w-8 h-8 rounded bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:bg-white/10 flex items-center justify-center text-sm font-mono transition-colors"
        >
          −
        </button>
        <button
          onClick={recenter}
          className="w-8 h-8 rounded bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:bg-white/10 flex items-center justify-center transition-colors"
          title="Recenter"
        >
          <Crosshair className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── keyframes ─────────────────────────────────────────── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes starTwinkle {
  0%, 100% { opacity: 0.12; }
  50% { opacity: 0.55; }
}
@keyframes gaugeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(6px); }
}
@keyframes baseScanRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes fleetPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.8); opacity: 0; }
}
`,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════════════════════════ */

/* ── Star field ──────────────────────────────────────────────── */

function StarField() {
  const stars = useMemo(() => {
    const arr: { x: number; y: number; size: number; opacity: number; delay: number }[] = [];
    for (let i = 0; i < 180; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.4 + Math.random() * 1.4,
        opacity: 0.1 + Math.random() * 0.4,
        delay: Math.random() * 8,
      });
    }
    return arr;
  }, []);

  return (
    <>
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `starTwinkle ${3 + Math.random() * 5}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </>
  );
}

/* ── Fleet trail lines (SVG) ────────────────────────────────── */

function FleetTrails({
  fleets,
  nodes,
  base,
}: {
  fleets: FleetMovement[];
  nodes: MapNode[];
  base: { x: number; y: number };
}) {
  if (fleets.length === 0) return null;
  const baseV = toVisual(base.x, base.y);

  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none"
      style={{ width: WORLD_CENTER * 2, height: WORLD_CENTER * 2, overflow: "visible" }}
    >
      <defs>
        <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(167,139,250,0.25)" />
          <stop offset="50%" stopColor="rgba(167,139,250,0.08)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0.25)" />
        </linearGradient>
      </defs>
      {fleets.map((f) => {
        const target = nodes.find((n) => n.id === f.targetNodeId);
        if (!target) return null;
        const targetV = toVisual(target.x, target.y);
        return (
          <line
            key={f.id}
            x1={baseV.vx}
            y1={baseV.vy}
            x2={targetV.vx}
            y2={targetV.vy}
            stroke="url(#trailGrad)"
            strokeWidth={1.5}
            strokeDasharray="8 12"
            opacity={0.6}
          />
        );
      })}
    </svg>
  );
}

/* ── Map Node ────────────────────────────────────────────────── */

function MapNodeElement({
  node,
  vx,
  vy,
  onClick,
}: {
  node: MapNode;
  vx: number;
  vy: number;
  onClick: () => void;
}) {
  const isOccupied = node.isOccupiedBy !== null;

  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-1/2 group z-[3]"
      style={{ left: vx, top: vy }}
    >
      <div className="relative">
        {/* Ambient glow */}
        <div
          className="absolute -inset-4 rounded-full pointer-events-none opacity-60"
          style={{
            background:
              node.type === "pve_base"
                ? "radial-gradient(circle, rgba(239,68,68,0.2), transparent 70%)"
                : node.type === "anomaly"
                  ? "radial-gradient(circle, rgba(56,189,248,0.2), transparent 70%)"
                  : "radial-gradient(circle, rgba(167,139,250,0.18), transparent 70%)",
          }}
        />

        {/* Occupied pulse ring */}
        {isOccupied && (
          <>
            <div
              className="absolute -inset-4 rounded-full border-2 border-red-500/40"
              style={{ animation: "fleetPulse 2s ease-out infinite" }}
            />
            <div className="absolute -inset-2 rounded-full border border-red-500/25" />
          </>
        )}

        {/* Node visual */}
        <div
          className={`relative w-14 h-14 rounded-full border ${NODE_BORDER[node.type] ?? "border-white/20"}
            bg-black/50 backdrop-blur-sm flex items-center justify-center
            transition-all duration-200 group-hover:scale-110 group-hover:border-white/30`}
        >
          <img
            src="/assets/meteorite.webp"
            alt={node.type}
            className="w-9 h-9 object-contain mix-blend-screen"
            style={{
              filter: NODE_GLOW[node.type] ?? "drop-shadow(0 0 4px rgba(255,255,255,0.3))",
            }}
            draggable={false}
          />
        </div>

        {/* Node label */}
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-bold tracking-wider text-white/40 uppercase group-hover:text-white/70 transition-colors">
          {NODE_LABEL[node.type] ?? node.type}
        </span>

        {/* Occupied label */}
        {isOccupied && (
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-black tracking-wide text-red-400 bg-red-950/70 px-1.5 py-0.5 rounded border border-red-500/20">
            OCCUPIED
          </span>
        )}

        {/* Node type icon overlay */}
        {node.type === "pve_base" && (
          <MapPin className="absolute -top-1 -right-1 w-3.5 h-3.5 text-red-400 drop-shadow-[0_0_4px_rgba(239,68,68,0.6)]" />
        )}
        {node.type === "anomaly" && (
          <Satellite className="absolute -top-1 -right-1 w-3.5 h-3.5 text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.6)]" />
        )}

        {/* Stealth indicator */}
        {node.stealthLevel > 5 && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-black/80 border border-white/15 flex items-center justify-center">
            <span className="text-[7px] text-white/50 font-mono font-bold">{node.stealthLevel}</span>
          </div>
        )}
      </div>
    </button>
  );
}

/* ── Fleet element ───────────────────────────────────────────── */

function FleetElement({
  fleet,
  x,
  y,
  onClick,
}: {
  fleet: FleetMovement;
  x: number;
  y: number;
  onClick: () => void;
}) {
  const statusColor = FLEET_STATUS_COLOR[fleet.status] ?? "bg-white";
  const statusGlow = FLEET_STATUS_GLOW[fleet.status] ?? "";
  const label = FLEET_STATUS_LABEL[fleet.status] ?? fleet.status;

  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
      style={{ left: x, top: y }}
    >
      {/* outer pulse */}
      <div
        className={`absolute -inset-1 rounded-full ${statusColor} opacity-20`}
        style={{ animation: "fleetPulse 1.5s ease-out infinite" }}
      />
      {/* inner glow */}
      <div className={`absolute -inset-0.5 rounded-full ${statusColor} opacity-25 blur-sm`} />
      {/* fleet dot */}
      <div
        className={`relative w-3.5 h-3.5 rounded-full ${statusColor} ${statusGlow} border border-white/30 transition-transform group-hover:scale-[1.8]`}
      />
      {/* navigation arrow for traveling */}
      {fleet.status === "traveling_to" && (
        <Navigation className="absolute -top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 text-amber-300/70" />
      )}
      {/* hover tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[9px] font-bold tracking-wide text-white/90 bg-black/85 px-2 py-1 rounded border border-white/10">
          {label}
        </span>
      </div>
    </button>
  );
}

/* ── Fleet Status Strip (bottom-left HUD) ────────────────────── */

export function FleetStatusStrip({
  fleets,
}: {
  fleets: FleetMovement[];
}) {
  if (fleets.length === 0) return null;

  return (
    <div className="absolute bottom-4 left-3 z-10 flex flex-col gap-1 max-w-[200px]">
      <div className="text-[8px] font-black tracking-[0.2em] uppercase text-white/30 px-1">
        Active Fleets
      </div>
      {fleets.slice(0, 5).map((f) => {
        const textColor = FLEET_STATUS_TEXT_COLOR[f.status] ?? "text-white/60";
        const dotColor = FLEET_STATUS_COLOR[f.status] ?? "bg-white/40";
        return (
          <div
            key={f.id}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/60 border border-white/8 backdrop-blur-sm"
          >
            <div className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />
            <span className={`text-[9px] font-bold ${textColor} truncate`}>
              {FLEET_STATUS_LABEL[f.status] ?? f.status}
            </span>
            <span className="text-[8px] text-white/25 font-mono truncate ml-auto">
              {f.targetNodeId.slice(0, 12)}
            </span>
          </div>
        );
      })}
      {fleets.length > 5 && (
        <div className="text-[8px] text-white/25 px-2 font-mono">
          +{fleets.length - 5} more
        </div>
      )}
    </div>
  );
}

/* ── Antimatter Gauge HUD ────────────────────────────────────── */

export function AntimatterGauge({
  current,
  max,
}: {
  current: number;
  max: number;
}) {
  const pct = max > 0 ? Math.min(1, current / max) : 0;
  const isLow = pct < 0.2;
  const isCritical = pct < 0.1;

  return (
    <div className="absolute top-3 left-3 z-10 select-none pointer-events-none">
      <div className="relative w-52 rounded-lg overflow-hidden border border-purple-500/25 bg-black/75 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 px-3 pt-2 pb-1">
          <Fuel
            className={`w-4 h-4 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)] ${
              isCritical ? "text-red-400" : "text-purple-400"
            }`}
          />
          <span className="text-[9px] font-black tracking-[0.2em] uppercase text-purple-300/70">
            Antimatter
          </span>
        </div>

        {/* Gauge bar */}
        <div className="px-3 pb-1">
          <div className="relative h-5 rounded-sm overflow-hidden bg-purple-950/50 border border-purple-500/15">
            {/* Fill */}
            <div
              className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
              style={{
                width: `${pct * 100}%`,
                background: isCritical
                  ? "linear-gradient(90deg, #991b1b, #dc2626, #f97316)"
                  : isLow
                    ? "linear-gradient(90deg, #92400e, #f97316, #d97706)"
                    : "linear-gradient(90deg, #581c87, #7c3aed, #a855f7, #c084fc)",
              }}
            >
              {/* Energy pulse overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, transparent 0px, transparent 4px, rgba(255,255,255,0.12) 4px, rgba(255,255,255,0.12) 6px)",
                  animation: "gaugeScroll 1.5s linear infinite",
                }}
              />
            </div>

            {/* Glow line at fill edge */}
            {pct > 0.02 && (
              <div
                className="absolute top-0 bottom-0 w-[2px] transition-all duration-700"
                style={{
                  left: `${pct * 100}%`,
                  boxShadow: isCritical
                    ? "0 0 10px 3px rgba(249,115,22,0.9)"
                    : "0 0 10px 3px rgba(168,85,247,0.9)",
                }}
              />
            )}

            {/* Cell dividers */}
            {[0.2, 0.4, 0.6, 0.8].map((p) => (
              <div
                key={p}
                className="absolute top-0 bottom-0 w-px bg-purple-300/8"
                style={{ left: `${p * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Value readout */}
        <div className="px-3 pb-2 flex items-baseline justify-between">
          <span
            className={`text-sm font-mono font-black tabular-nums ${
              isCritical
                ? "text-red-400 animate-pulse"
                : isLow
                  ? "text-amber-400"
                  : "text-purple-200"
            }`}
          >
            {Math.floor(current)}
          </span>
          <span className="text-[10px] font-mono text-white/25">/ {Math.floor(max)}</span>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute -inset-px rounded-lg pointer-events-none"
          style={{
            boxShadow: isCritical
              ? "inset 0 0 14px rgba(239,68,68,0.18), 0 0 24px rgba(239,68,68,0.08)"
              : "inset 0 0 14px rgba(168,85,247,0.1), 0 0 24px rgba(168,85,247,0.05)",
          }}
        />
      </div>
    </div>
  );
}
