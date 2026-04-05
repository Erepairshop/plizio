"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { type StarholdModuleId, type StarholdState, type StarholdCommand } from "@/lib/gravitas/sim/types";
import ModuleInteriorPanel from "./ModuleInteriorPanel";

interface InteriorViewProps {
  state: StarholdState;
  dispatch: (cmd: StarholdCommand) => void;
  lang: string;
  onClose: () => void;
}

function UnifiedInteriorView({
  moduleId,
  state,
  dispatch,
  lang,
  onClose,
  accentColor,
  title,
}: InteriorViewProps & {
  moduleId: "sensor" | "reactor" | "core" | "logistics";
  accentColor: "cyan" | "amber" | "fuchsia" | "indigo" | "red";
  title: string;
}) {
  const accentMap = {
    cyan: {
      glow: "rgba(34,211,238,0.08)",
      gradient: "from-cyan-400/5",
      border: "border-cyan-400/15",
      text: "text-cyan-300",
      accent: "bg-cyan-400/10",
    },
    amber: {
      glow: "rgba(251,146,60,0.08)",
      gradient: "from-amber-400/5",
      border: "border-amber-400/15",
      text: "text-amber-300",
      accent: "bg-amber-400/10",
    },
    fuchsia: {
      glow: "rgba(217,70,239,0.08)",
      gradient: "from-fuchsia-400/5",
      border: "border-fuchsia-400/15",
      text: "text-fuchsia-300",
      accent: "bg-fuchsia-400/10",
    },
    indigo: {
      glow: "rgba(129,140,248,0.08)",
      gradient: "from-indigo-400/5",
      border: "border-indigo-400/15",
      text: "text-indigo-300",
      accent: "bg-indigo-400/10",
    },
    red: {
      glow: "rgba(239,68,68,0.08)",
      gradient: "from-red-400/5",
      border: "border-red-400/15",
      text: "text-red-300",
      accent: "bg-red-400/10",
    },
  } as const;
  const theme = accentMap[accentColor ?? "cyan"];
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 45%, ${theme.glow}, transparent 24%), linear-gradient(180deg, rgba(5,8,22,0.08) 0%, rgba(5,8,22,0.34) 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-3 p-4">
        <div className="flex items-center gap-2">
          <span className={`rounded-full border ${theme.border} ${theme.accent} px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] ${theme.text}`}>
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-4">
        <div className={`relative overflow-hidden rounded-[28px] border ${theme.border} bg-black/10 p-4 backdrop-blur-[1px]`}>
          <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} via-transparent to-black/20 pointer-events-none`} />
          <div className="relative z-10">
            <ModuleInteriorPanel moduleId={moduleId} state={state} dispatch={dispatch} lang={lang} accentColor={accentColor ?? "cyan"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SensorInteriorView(props: InteriorViewProps) {
  return <UnifiedInteriorView {...props} moduleId="sensor" accentColor="cyan" title="Sensor" />;
}

export function ReactorInteriorView(props: InteriorViewProps) {
  return <UnifiedInteriorView {...props} moduleId="reactor" accentColor="amber" title="Reactor" />;
}

export function CoreInteriorView(props: InteriorViewProps) {
  return <UnifiedInteriorView {...props} moduleId="core" accentColor="fuchsia" title="Core" />;
}

export function LogisticsInteriorView(props: InteriorViewProps) {
  return <UnifiedInteriorView {...props} moduleId="logistics" accentColor="indigo" title="Logistics" />;
}

export function ModuleArtOverlay({
  selectedModule,
  onSelectModule,
  onSelectMoveTarget,
  onOpenWarRoom,
  onOpenRepairBay,
  layoutEditModule,
}: {
  selectedModule: StarholdModuleId;
  onSelectModule: (moduleId: StarholdModuleId) => void;
  onSelectMoveTarget?: (moduleId: StarholdModuleId | "repair-bay" | "warroom") => void;
  onOpenWarRoom?: () => void;
  onOpenRepairBay?: () => void;
  layoutEditModule?: StarholdModuleId | "repair-bay" | "warroom" | null;
}) {
  type ModuleId = StarholdModuleId | "repair-bay" | "warroom";
  type ModulePlacement = { left: number; top: number };
  type ModuleDef = {
    id: ModuleId;
    src: string;
    className: string;
    hitboxClassName: string;
    imageClassName: string;
    motion: { x: number[]; y: number[]; rotate: number[] };
    duration: number;
  };

  const STORAGE_KEY = "gravitas_module_layout_v1";
  const defaultPlacements: Record<ModuleId, ModulePlacement> = {
    reactor: { left: 8, top: 11 },
    logistics: { left: 43, top: 8 },
    sensor: { left: 56, top: 52 },
    core: { left: 29, top: 24 },
    "repair-bay": { left: 6, top: 49 },
    warroom: { left: 48, top: 34 },
  };

  const modules: ModuleDef[] = [
    {
      id: "reactor" as const,
      src: "/gravitas/modules/reactor-luminous.webp",
      className: "z-[12] w-[28.9%] max-w-[207px] sm:w-[18.7%] sm:max-w-[209px]",
      hitboxClassName: "inset-[12%]",
      imageClassName: "-translate-y-[2%] scale-[1.02]",
      motion: { y: [-2, 2, -1], x: [0, 1, 0], rotate: [-0.4, 0.5, -0.2] },
      duration: 6.4,
    },
    {
      id: "logistics" as const,
      src: "/gravitas/modules/logistics-hub-v3.webp",
      className: "z-[12] w-[35.8%] max-w-[258px] sm:w-[12.9%] sm:max-w-[142px]",
      hitboxClassName: "inset-[28%]",
      imageClassName: "-translate-y-[2%] scale-[0.98]",
      motion: { y: [-1, 1.5, -1], x: [0, -1, 0], rotate: [-0.25, 0.25, -0.15] },
      duration: 7.6,
    },
    {
      id: "sensor" as const,
      src: "/gravitas/modules/sensor-probe.webp",
      className: "z-[20] w-[18.7%] max-w-[138px] sm:w-[12.75%] sm:max-w-[145px]",
      hitboxClassName: "inset-[10%]",
      imageClassName: "scale-[1.03]",
      motion: { y: [-2, 1, -2], x: [0, 1.5, 0], rotate: [-0.6, 0.7, -0.3] },
      duration: 5.8,
    },
    {
      id: "core" as const,
      src: "/gravitas/modules/core-crystal-v2.webp",
      className: "z-[18] w-[28.9%] max-w-[216px] sm:w-[20.4%] sm:max-w-[211px]",
      hitboxClassName: "inset-[18%]",
      imageClassName: "-translate-y-[2%] scale-[1.02]",
      motion: { y: [-3, 2, -2], x: [0, 0.5, 0], rotate: [-0.3, 0.3, -0.15] },
      duration: 8.8,
    },
    {
      id: "repair-bay",
      src: "/gravitas/modules/repair-station-v2.webp",
      className: "z-[17] w-[28.9%] max-w-[228px] sm:w-[20.4%] sm:max-w-[219px]",
      hitboxClassName: "left-[6%] right-[14%] top-[12%] bottom-[12%]",
      imageClassName: "scale-[1.04]",
      motion: { y: [-1.5, 1, -1.2], x: [0, -0.8, 0], rotate: [-0.18, 0.2, -0.08] },
      duration: 8.8,
    },
    {
      id: "warroom" as const,
      src: "/gravitas/modules/command-deck.webp",
      className: "z-[21] w-[29.75%] max-w-[224px] sm:w-[20.4%] sm:max-w-[218px]",
      hitboxClassName: "left-[12%] right-[16%] top-[8%] bottom-[8%]",
      imageClassName: "-translate-y-[1%] scale-[1.02]",
      motion: { y: [-2, 1.5, -1], x: [0, 0.8, 0], rotate: [-0.2, 0.3, -0.1] },
      duration: 9.6,
    },
  ];

  const storageKey = typeof window === "undefined"
    ? STORAGE_KEY
    : `${STORAGE_KEY}_${localStorage.getItem("plizio_username_id") || localStorage.getItem("plizio_username") || "anonymous"}`;

  const [placements, setPlacements] = useState<Record<ModuleId, ModulePlacement>>(defaultPlacements);
  const [hasLoadedPlacements, setHasLoadedPlacements] = useState(false);
  const dragRef = useRef<{
    moduleId: ModuleId | null;
    pointerId: number | null;
    startX: number;
    startY: number;
    originLeft: number;
    originTop: number;
    dragging: boolean;
  }>({ moduleId: null, pointerId: null, startX: 0, startY: 0, originLeft: 0, originTop: 0, dragging: false });
  const [draggingId, setDraggingId] = useState<ModuleId | null>(null);
  const [dragHintVisible, setDragHintVisible] = useState(true);
  const suppressClickRef = useRef<ModuleId | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Record<ModuleId, ModulePlacement>>;
        setPlacements({
          ...defaultPlacements,
          ...Object.fromEntries(
            Object.entries(parsed).map(([id, value]) => [
              id,
              {
                left: Number.isFinite(value?.left) ? Math.max(-5, Math.min(95, value!.left)) : defaultPlacements[id as ModuleId].left,
                top: Number.isFinite(value?.top) ? Math.max(-5, Math.min(95, value!.top)) : defaultPlacements[id as ModuleId].top,
              },
            ]),
          ) as Record<ModuleId, ModulePlacement>,
        });
      }
    } catch {
      // ignore malformed stored layouts
    } finally {
      setHasLoadedPlacements(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!hasLoadedPlacements) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(placements));
    } catch {
      // ignore persistence failures
    }
  }, [placements, storageKey, hasLoadedPlacements]);

  useEffect(() => {
    const t = window.setTimeout(() => setDragHintVisible(false), 6000);
    return () => window.clearTimeout(t);
  }, []);

  const snap = (value: number) => Math.max(-5, Math.min(95, Math.round(value / 2) * 2));

  const updatePlacement = (moduleId: ModuleId, left: number, top: number) => {
    setPlacements((current) => ({
      ...current,
      [moduleId]: {
        left: snap(left),
        top: snap(top),
      },
    }));
  };

  const placeModuleAtPoint = (moduleId: ModuleId, event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;
    const left = ((event.clientX - rect.left) / rect.width) * 100;
    const top = ((event.clientY - rect.top) / rect.height) * 100;
    updatePlacement(moduleId, snap(left), snap(top));
  };

  const handlePointerDown = (moduleId: ModuleId, event: ReactPointerEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!layoutEditModule) return;
    if (event.button !== 0) return;
    if (layoutEditModule !== moduleId) onSelectMoveTarget?.(moduleId);
    const current = placements[moduleId];
    dragRef.current = {
      moduleId,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originLeft: current.left,
      originTop: current.top,
      dragging: false,
    };
    setDraggingId(moduleId);
    setDragHintVisible(false);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // ignore capture errors
    }
  };

  const handlePointerMove = (moduleId: ModuleId, event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!layoutEditModule) return;
    const drag = dragRef.current;
    if (drag.moduleId !== moduleId || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const moved = Math.hypot(dx, dy);
    if (!drag.dragging && moved > 6) drag.dragging = true;
    if (!drag.dragging) return;
    const rect = event.currentTarget.parentElement?.parentElement?.getBoundingClientRect();
    if (!rect) return;
    const nextLeft = snap(drag.originLeft + (dx / rect.width) * 100);
    const nextTop = snap(drag.originTop + (dy / rect.height) * 100);
    updatePlacement(moduleId, nextLeft, nextTop);
  };

  const finishPointer = (moduleId: ModuleId, event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!layoutEditModule) return;
    const drag = dragRef.current;
    if (drag.moduleId !== moduleId || drag.pointerId !== event.pointerId) return;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore capture errors
    }
    const wasDragging = drag.dragging;
    dragRef.current = { moduleId: null, pointerId: null, startX: 0, startY: 0, originLeft: 0, originTop: 0, dragging: false };
    setDraggingId(null);
    if (wasDragging) {
      suppressClickRef.current = moduleId;
      window.setTimeout(() => {
        if (suppressClickRef.current === moduleId) suppressClickRef.current = null;
      }, 0);
    }
    window.setTimeout(() => {
      if (wasDragging) return;
      setDragHintVisible(false);
    }, 0);
  };

  return (
    <div className="pointer-events-auto absolute inset-0 z-[6]">
      <div className="absolute inset-0 overflow-auto touch-pan-x touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:overflow-hidden">
        <div
          ref={sceneRef}
          className={`relative h-[152%] w-[168%] min-h-full min-w-full sm:left-1/2 sm:top-1/2 sm:h-[118%] sm:w-[118%] sm:min-h-0 sm:min-w-0 sm:-translate-x-1/2 sm:-translate-y-[49%] ${layoutEditModule ? "cursor-crosshair" : ""}`}
          onPointerDown={(event) => {
            if (!layoutEditModule) return;
            const target = event.target as HTMLElement | null;
            if (target?.closest("button")) return;
            placeModuleAtPoint(layoutEditModule as ModuleId, event);
          }}
        >
          {layoutEditModule && (
            <div className="pointer-events-none absolute inset-0 z-[5] opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] sm:bg-[size:72px_72px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_52%)]" />
            </div>
          )}
          {modules.map((module) => {
            const isSelected = selectedModule === module.id;
            const placement = placements[module.id];
            const isDragging = draggingId === module.id;
            const canEdit = layoutEditModule === module.id;
            return (
              <motion.div
                key={module.id}
                className={`absolute transition-all duration-500 ${module.className} ${isSelected ? "scale-[1.03] opacity-100" : "opacity-[0.94]"} ${isDragging ? "scale-[1.05]" : ""} ${layoutEditModule && !canEdit ? "opacity-60 grayscale-[0.2]" : ""}`}
                style={{
                  left: `${placement.left}%`,
                  top: `${placement.top}%`,
                  touchAction: "none",
                  filter: isSelected
                    ? "drop-shadow(0 0 28px rgba(255,255,255,0.12)) drop-shadow(0 0 26px rgba(34,211,238,0.16)) drop-shadow(0 12px 24px rgba(0,0,0,0.32))"
                    : "drop-shadow(0 0 18px rgba(34,211,238,0.06)) drop-shadow(0 10px 22px rgba(0,0,0,0.34))",
                }}
                animate={isDragging ? { x: 0, y: 0, rotate: 0 } : module.motion}
                transition={{ duration: module.duration, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-[2%] -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_52%,rgba(8,15,30,0.82),rgba(8,15,30,0.28)_58%,transparent_84%)] blur-lg sm:blur-xl" />
                <div className="absolute inset-[11%] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_50%_56%,rgba(34,211,238,0.07),transparent_68%)] blur-xl sm:blur-2xl" />
                {module.id !== "logistics" && (
                  <motion.div
                    className="pointer-events-none absolute inset-[8%] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_50%_56%,rgba(255,255,255,0.06),transparent_62%)] blur-[12px] sm:blur-[18px]"
                    animate={{ opacity: isSelected ? [0.18, 0.3, 0.2] : [0.08, 0.16, 0.1] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <img
                  src={module.src}
                  alt=""
                  className={`relative h-auto w-full select-none object-contain ${"imageClassName" in module ? module.imageClassName : ""} [mask-image:radial-gradient(circle_at_50%_46%,black_62%,rgba(0,0,0,0.95)_78%,transparent_100%)]`}
                  style={"imageStyle" in module ? (module.imageStyle as React.CSSProperties) : undefined}
                  draggable={false}
                />
                {module.id === "core" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.18),rgba(34,211,238,0.08)_42%,transparent_72%)] blur-xl"
                      animate={{ scale: [0.95, 1.04, 0.98], opacity: [0.22, 0.46, 0.28] }}
                      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute left-[16%] top-[49%] h-[2px] w-[68%] bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.0),rgba(236,72,153,0.45),rgba(34,211,238,0.36),transparent)] blur-[1px]"
                      animate={{ x: ["-5%", "8%", "-5%"], opacity: [0.08, 0.22, 0.08] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute inset-[10%] rounded-full border border-fuchsia-300/10"
                      animate={{ opacity: [0.08, 0.2, 0.1], scale: [0.98, 1.01, 0.99] }}
                      transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
                {module.id === "reactor" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.16),rgba(251,146,60,0.07)_46%,transparent_74%)] blur-xl"
                      animate={{ scale: [0.96, 1.06, 0.98], opacity: [0.12, 0.28, 0.16] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute left-[22%] top-[56%] h-[2px] w-[52%] bg-[linear-gradient(90deg,transparent,rgba(251,146,60,0.0),rgba(251,146,60,0.56),transparent)]"
                      animate={{ opacity: [0.06, 0.22, 0.06], scaleX: [0.92, 1.04, 0.94] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute left-[38%] top-[28%] h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(251,191,36,0.55)]"
                      animate={{ opacity: [0.24, 0.82, 0.28], scale: [0.8, 1.2, 0.9] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
                {module.id === "sensor" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),rgba(34,211,238,0.04)_48%,transparent_74%)] blur-xl"
                      animate={{ opacity: [0.07, 0.2, 0.08], rotate: [0, 10, -8, 0] }}
                      transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute left-[18%] top-[47%] h-[2px] w-[64%] origin-left bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.0),rgba(34,211,238,0.8),transparent)] blur-[1px]"
                      animate={{ rotate: [-18, 10, -18], opacity: [0.08, 0.26, 0.08] }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
                {module.id === "logistics" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[20%] rounded-[28px] bg-[radial-gradient(circle,rgba(129,140,248,0.14),rgba(129,140,248,0.04)_48%,transparent_76%)] blur-xl"
                      animate={{ opacity: [0.06, 0.18, 0.08], scale: [0.97, 1.02, 0.99] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute left-[24%] top-[34%] h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-[0_0_10px_rgba(165,180,252,0.6)]"
                      animate={{ x: [0, 14, 0], opacity: [0.3, 0.85, 0.3] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute right-[26%] bottom-[26%] h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      animate={{ x: [0, -12, 0], opacity: [0.22, 0.74, 0.22] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    />
                  </>
                )}
                <button
                  type="button"
                  aria-label={module.id}
                  onPointerDown={(e) => handlePointerDown(module.id, e)}
                  onPointerMove={(e) => handlePointerMove(module.id, e)}
                  onPointerUp={(e) => finishPointer(module.id, e)}
                  onPointerCancel={(e) => finishPointer(module.id, e)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (suppressClickRef.current === module.id) {
                      suppressClickRef.current = null;
                      return;
                    }
                    if (dragRef.current.dragging || draggingId === module.id) return;
                    if (layoutEditModule) {
                      if (layoutEditModule !== module.id) onSelectMoveTarget?.(module.id as ModuleId);
                      return;
                    }
                    if (module.id === "warroom") onOpenWarRoom?.();
                    else if (module.id === "repair-bay") onOpenRepairBay?.();
                    else onSelectModule(module.id as StarholdModuleId);
                  }}
                  className={`absolute ${module.hitboxClassName} pointer-events-auto rounded-[28px] bg-transparent ${layoutEditModule ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
                />
              </motion.div>
            );
          })}
          {dragHintVisible && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 z-[25] -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/60 backdrop-blur-md">
              Drag modules to reposition them
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
