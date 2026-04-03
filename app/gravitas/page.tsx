"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ChevronLeft, Power, Wrench, Radar, Cpu, Star,
  AlertTriangle, Activity, Zap, ShieldAlert,
  Layers, FileText, X, RotateCcw,
  Terminal, ShieldHalf, LayoutGrid, Brain, UserRound, Rocket, Home
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import GravitasShop from "@/components/gravitas/GravitasShop";
import GravitasImprint from "@/components/gravitas/GravitasImprint";
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
import { saveGravitasState, loadGravitasState } from "@/lib/gravitas/sim/persistence";
import { applyStarholdCommand, getGravitasActionSlots } from "@/lib/gravitas/sim/commands";
import { canStartActivationTransfer } from "@/lib/gravitas/sim/activation";
import { advanceStarholdTick } from "@/lib/gravitas/sim/tick";
import { getUpcomingDamagePreview } from "@/lib/gravitas/sim/threats";
import type { StarholdChapterId, StarholdCommand, StarholdModuleId, StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { GRAVITAS_TEXT } from "@/lib/gravitas/sim/content";
import AwakeningCeremony from "@/components/gravitas/AwakeningCeremony";
import { getStarholdModifiers } from "@/lib/gravitas/sim/modifiers";
import { normalizeContinuationState } from "@/lib/gravitas/sim/continuation";
import {
  GALAXY_DECOR_LAYERS,
  GALAXY_DEMO_NODES,
  GALAXY_PLAYER_BASE_NODE,
  METEOR_MATERIAL_META,
  METEOR_MATERIAL_ORDER,
  GALAXY_WORLD_SIZE,
  getGalaxyTravelDistance,
  getGalaxyTravelDurationMinutes,
  getGalaxyCardStyle,
  getGalaxyLinkStyle,
  getGalaxyNodeAnchorStyle,
  getGalaxyWorldCanvasStyle,
  validateGalaxyNodes,
} from "@/lib/gravitas/world";
import type { GalaxyNode, GalaxyWorldPosition } from "@/lib/gravitas/world";

const GravitasScene = dynamic(() => import("@/components/gravitas/GravitasScene"), { ssr: false });

function reducer(
  state: StarholdState,
  command: StarholdCommand | { type: "__TICK__" } | { type: "__LOAD__"; state: StarholdState }
) {
  if (command.type === "__LOAD__") {
    return command.state;
  }
  if (command.type === "__TICK__") {
    return advanceStarholdTick(state);
  }
  return applyStarholdCommand(state, command);
}

function moduleIcon(moduleId: StarholdModuleId) {
  switch (moduleId) {
    case "reactor": return Power;
    case "logistics": return Wrench;
    case "sensor": return Radar;
    case "core": return Cpu;
  }
}

type Lang = "en" | "hu" | "de" | "ro";
type ResourceHelpKey = "power" | "materials" | "stability" | "activation" | "entropy";
type QuickActionTone = "default" | "warning" | "danger";

type QuickActionItem = {
  key: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
  emphasis?: boolean;
  tone: QuickActionTone;
  mobilePriority: number;
};

type DroneMissionState = {
  id: string;
  targetNodeId: string;
  materialId: GalaxyMaterialId;
  phase: "traveling" | "mining" | "returning";
  startedAt: number;
  arrivalAt: number;
  miningCompleteAt: number;
  travelDurationMinutes: number;
  miningDurationMinutes: number;
  targetYieldUnits: number;
  returnStartedAt?: number;
  returnCompleteAt?: number;
  returnStartPosition?: { x: number; y: number };
  committedUnits?: number;
};

type SavedDroneMission = DroneMissionState | null;

type GalaxyMaterialId = (typeof METEOR_MATERIAL_ORDER)[number];
type GalaxyInventory = Record<GalaxyMaterialId, number>;
type GalaxyLivePreview = {
  materialId: GalaxyMaterialId;
  amount: number;
} | null;

const DRONE_MISSION_STORAGE_KEY = "gravitas_galaxy_drone_mission_v1";
const GALAXY_INVENTORY_STORAGE_KEY = "gravitas_galaxy_inventory_v1";
const GALAXY_LIVE_PREVIEW_STORAGE_KEY = "gravitas_galaxy_live_preview_v1";

function createDefaultGalaxyInventory(): GalaxyInventory {
  return METEOR_MATERIAL_ORDER.reduce((acc, materialId) => {
    acc[materialId] = 0;
    return acc;
  }, {} as GalaxyInventory);
}

function loadSavedDroneMission(): SavedDroneMission {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRONE_MISSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DroneMissionState;
    if (
      !parsed ||
      typeof parsed.startedAt !== "number" ||
      typeof parsed.arrivalAt !== "number" ||
      typeof parsed.miningCompleteAt !== "number" ||
      typeof parsed.phase !== "string" ||
      typeof parsed.targetNodeId !== "string"
    ) {
      return null;
    }
    const now = Date.now();
    if (parsed.phase === "traveling" && now >= parsed.arrivalAt) {
      return {
        ...parsed,
        phase: "mining",
      };
    }
    if (parsed.phase === "mining" && now >= parsed.miningCompleteAt) {
      return {
        ...parsed,
        phase: "mining",
      };
    }
    if (parsed.phase === "returning" && parsed.returnCompleteAt && now >= parsed.returnCompleteAt) {
      localStorage.removeItem(DRONE_MISSION_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function saveSavedDroneMission(mission: SavedDroneMission): void {
  if (typeof window === "undefined") return;
  try {
    if (!mission) {
      localStorage.removeItem(DRONE_MISSION_STORAGE_KEY);
      return;
    }
    localStorage.setItem(DRONE_MISSION_STORAGE_KEY, JSON.stringify(mission));
  } catch {
    // localStorage may be unavailable
  }
}

function getDroneMissionCurrentPosition(
  mission: DroneMissionState,
  targetPosition: GalaxyWorldPosition,
  basePosition: GalaxyWorldPosition,
  now: number,
): GalaxyWorldPosition {
  if (mission.phase === "traveling") {
    const totalMs = Math.max(1, mission.arrivalAt - mission.startedAt);
    const elapsedMs = Math.max(0, now - mission.startedAt);
    const progress = Math.min(1, elapsedMs / totalMs);
    return {
      x: basePosition.x + (targetPosition.x - basePosition.x) * progress,
      y: basePosition.y + (targetPosition.y - basePosition.y) * progress,
    };
  }

  if (mission.phase === "returning") {
    const start = mission.returnStartPosition ?? targetPosition;
    const totalMs = Math.max(1, (mission.returnCompleteAt ?? now) - (mission.returnStartedAt ?? now));
    const elapsedMs = Math.max(0, now - (mission.returnStartedAt ?? now));
    const progress = Math.min(1, elapsedMs / totalMs);
    return {
      x: start.x + (basePosition.x - start.x) * progress,
      y: start.y + (basePosition.y - start.y) * progress,
    };
  }

  return targetPosition;
}

function loadSavedGalaxyInventory(): GalaxyInventory {
  if (typeof window === "undefined") return createDefaultGalaxyInventory();
  try {
    const raw = localStorage.getItem(GALAXY_INVENTORY_STORAGE_KEY);
    if (!raw) return createDefaultGalaxyInventory();
    const parsed = JSON.parse(raw) as Partial<Record<GalaxyMaterialId, number>>;
    const inventory = createDefaultGalaxyInventory();
    METEOR_MATERIAL_ORDER.forEach((materialId) => {
      const value = parsed[materialId];
      inventory[materialId] = Number.isFinite(value) ? Math.max(0, Math.floor(value ?? 0)) : 0;
    });
    return inventory;
  } catch {
    return createDefaultGalaxyInventory();
  }
}

function saveGalaxyInventory(inventory: GalaxyInventory): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(GALAXY_INVENTORY_STORAGE_KEY, JSON.stringify(inventory));
  } catch {
    // localStorage may be unavailable
  }
}

function loadSavedGalaxyLivePreview(): GalaxyLivePreview {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(GALAXY_LIVE_PREVIEW_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GalaxyLivePreview;
    if (!parsed || typeof parsed.materialId !== "string" || typeof parsed.amount !== "number") {
      return null;
    }
    return {
      materialId: parsed.materialId as GalaxyMaterialId,
      amount: Math.max(0, Math.floor(parsed.amount)),
    };
  } catch {
    return null;
  }
}

function saveGalaxyLivePreview(preview: GalaxyLivePreview): void {
  if (typeof window === "undefined") return;
  try {
    if (!preview) {
      localStorage.removeItem(GALAXY_LIVE_PREVIEW_STORAGE_KEY);
      return;
    }
    localStorage.setItem(GALAXY_LIVE_PREVIEW_STORAGE_KEY, JSON.stringify(preview));
  } catch {
    // localStorage may be unavailable
  }
}

function addGalaxyInventoryMaterial(
  inventory: GalaxyInventory,
  materialId: GalaxyMaterialId,
  amount: number,
): GalaxyInventory {
  return {
    ...inventory,
    [materialId]: Math.max(0, (inventory[materialId] ?? 0) + Math.max(0, Math.floor(amount))),
  };
}

function formatCompactStarholdValue(value: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  if (abs < 1000) return `${value}`;

  const units = [
    { value: 1_000_000_000_000, suffix: "t" },
    { value: 1_000_000_000, suffix: "b" },
    { value: 1_000_000, suffix: "m" },
    { value: 1_000, suffix: "k" },
  ];

  for (const unit of units) {
    if (abs < unit.value) continue;
    let scaled = abs / unit.value;
    let decimals = scaled >= 100 ? 0 : scaled >= 10 ? 1 : 2;
    let rounded = Number(scaled.toFixed(decimals));
    if (rounded >= 1000) continue;
    const text = rounded
      .toFixed(decimals)
      .replace(/\.0+$/, "")
      .replace(/(\.\d*[1-9])0+$/, "$1");
    return `${sign}${text}${unit.suffix}`;
  }

  return `${value}`;
}

function formatThreatCountdown(countdown: number): string {
  if (countdown >= 3600) {
    const hours = countdown / 3600;
    const roundedHours = hours >= 10 ? Math.round(hours) : Number(hours.toFixed(1));
    return `${String(roundedHours).replace(/\.0$/, "")}h`;
  }
  if (countdown >= 60) {
    return `${Math.ceil(countdown / 60)}m`;
  }
  return `${countdown}s`;
}

function formatDurationMinutes(totalMinutes: number): string {
  if (totalMinutes < 60) return `${totalMinutes}m`;
  return `${Math.floor(totalMinutes / 60)}h ${String(totalMinutes % 60).padStart(2, "0")}m`;
}

function StationHealthRing({ state }: { state: StarholdState }) {
  const modules = [
    { id: "reactor", integrity: state.modules.reactor.integrity },
    { id: "logistics", integrity: state.modules.logistics.integrity },
    { id: "sensor", integrity: state.modules.sensor.integrity },
    { id: "core", integrity: state.modules.core.integrity },
  ];

  const getColor = (val: number) => val > 60 ? "#10b981" : val > 30 ? "#f59e0b" : "#ef4444";
  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const size = 24;
  const center = size / 2;
  const isAnyLow = modules.some(m => m.integrity < 30);

  return (
    <div className={`relative w-6 h-6 group/health ${isAnyLow ? "animate-pulse" : ""}`}>
      <svg width={size} height={size} className="-rotate-90">
        {modules.map((m, i) => {
          const offset = (circumference / 4) * i;
          const strokeVal = (m.integrity / 100) * (circumference / 4);
          return (
            <circle
              key={m.id}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={getColor(m.integrity)}
              strokeWidth="2.5"
              strokeDasharray={`${strokeVal} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          );
        })}
      </svg>
      {/* Mini Tooltip */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 text-[8px] font-black uppercase whitespace-nowrap opacity-0 group-hover/health:opacity-100 transition-opacity pointer-events-none z-[110] shadow-2xl">
        {modules.map(m => (
          <div key={m.id} className="flex justify-between gap-4">
            <span className="text-white/40">{m.id}</span>
            <span>{m.integrity}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

type MapMiniButtonProps = {
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
  showDot?: boolean;
};

const MapMiniButton = ({ icon, active, onClick, showDot }: MapMiniButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition ${
        active
          ? "border-cyan-300/45 bg-cyan-400/14 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.16)]"
          : "border-white/10 bg-black/28 text-white/70 hover:bg-white/10"
      }`}
    >
      {icon}
      {showDot && <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />}
    </button>
  );
};

export default function GravitasPage() {
  const { lang: currentLang } = useLang();
  const lang = (currentLang as Lang) || "en";
  const content = GRAVITAS_TEXT;
  const ui = content.ui;

  const [state, dispatch] = useReducer(reducer, undefined, createInitialStarholdState);
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("reactor");
  const [galaxyInventory, setGalaxyInventory] = useState<GalaxyInventory>(createDefaultGalaxyInventory);
  const [galaxyLivePreview, setGalaxyLivePreview] = useState<GalaxyLivePreview>(null);
  const [shopOpen, setShopOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<"modules" | "marks" | "journal" | "activation" | null>(null);
  const [showAwakening, setShowAwakening] = useState(false);
  const [impactFlash, setImpactFlash] = useState<string | null>(null);
  const [actionFlash, setActionFlash] = useState<string | null>(null);
  const [actionFeedback, setActionFeedback] = useState<LocalizedString | null>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneDeferred, setSceneDeferred] = useState(false);
  const [lastCommand, setLastCommand] = useState<{ command: StarholdCommand; timestamp: number } | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [resourceHelpOpen, setResourceHelpOpen] = useState<ResourceHelpKey | null>(null);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const [moduleInfoOpen, setModuleInfoOpen] = useState(false);
  const [avatarBaseOpen, setAvatarBaseOpen] = useState(false);
  const [interiorView, setInteriorView] = useState<StarholdModuleId | "galaxy" | null>(null);
  
  const holdRef = useRef<number | null>(null);
  const imprintHoldRef = useRef<number | null>(null);
  const prevThreatRef = useRef(state.threat);
  const prevSurgeRef = useRef(state.postWaveSurgeTicks);
  const prevSurgeModeRef = useRef(state.postWaveSurgeMode);
  const prevStateRef = useRef(state);
  const lastActionRef = useRef<StarholdCommand | null>(null);
  const awakeningShownRef = useRef(false);
  const actionFeedbackTimeoutRef = useRef<number | null>(null);

  const restartGravitasChapter = useCallback((chapter: StarholdChapterId) => {
    const resetState = createInitialStarholdState(chapter);
    saveGravitasState(resetState);
    dispatch({ type: "__LOAD__", state: resetState });
    setShowAwakening(false);
    setShopOpen(false);
    setResourceHelpOpen(null);
    setQuickActionsOpen(false);
    setModuleInfoOpen(false);
    setAvatarBaseOpen(false);
    setInteriorView(null);
    setSelectedModule("reactor");
    setLastCommand(null);
    lastActionRef.current = null;
  }, []);

  const doAction = (command: StarholdCommand, color: string) => {
    if (state.chapter === "demo" && state.stationLost) return;
    if (command.type === "STABILIZE_REACTOR") setSelectedModule("reactor");
    if (command.type === "REPAIR_MODULE") setSelectedModule(command.moduleId);
    if (command.type === "REROUTE_TO_CORE") setSelectedModule("core");
    if (command.type === "SCAVENGE") setSelectedModule("logistics");
    lastActionRef.current = command;
    setLastCommand({ command, timestamp: Date.now() });
    dispatch(command);
    setActionFlash(color);
    setTimeout(() => setActionFlash(null), 300);
  };

  const handleSelectModule = useCallback((moduleId: StarholdModuleId) => {
    if ((moduleId === "sensor" || moduleId === "reactor" || moduleId === "core") && moduleId === selectedModule && moduleInfoOpen) {
      setInteriorView(moduleId);
      setModuleInfoOpen(false);
      return;
    }
    setSelectedModule(moduleId);
    setModuleInfoOpen(true);
  }, [moduleInfoOpen, selectedModule]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    setGalaxyInventory(loadSavedGalaxyInventory());
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveGalaxyInventory(galaxyInventory);
  }, [galaxyInventory, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    setGalaxyLivePreview(loadSavedGalaxyLivePreview());
    const interval = window.setInterval(() => {
      setGalaxyLivePreview(loadSavedGalaxyLivePreview());
    }, 1000);
    return () => window.clearInterval(interval);
  }, [hydrated]);

  const displayedGalaxyInventory = useMemo(() => {
    const display = { ...galaxyInventory };
    if (galaxyLivePreview) {
      display[galaxyLivePreview.materialId] = Math.max(0, display[galaxyLivePreview.materialId] + galaxyLivePreview.amount);
    }
    return display;
  }, [galaxyInventory, galaxyLivePreview]);

  useEffect(() => {
    const saved = loadGravitasState();
    if (saved) {
      dispatch({ type: "__LOAD__", state: saved });
    }
  }, []);

  useEffect(() => {
    const shouldForceContinuation = state.avatarAwake || state.firstLoopComplete;
    if (shouldForceContinuation && state.chapter !== "continuation") {
      dispatch({
        type: "__LOAD__",
        state: normalizeContinuationState({
          ...state,
          chapter: "continuation",
          stationLost: false,
          lockdown: false,
          lockdownDuration: 0,
        }),
      });
      return;
    }

    if ((state.chapter === "continuation" || shouldForceContinuation) && state.stationLost) {
      dispatch({
        type: "__LOAD__",
        state: normalizeContinuationState({
          ...state,
          chapter: "continuation",
          stationLost: false,
          lockdown: false,
          lockdownDuration: 0,
        }),
      });
    }
  }, [state]);

  useEffect(() => {
    if (state.avatarAwake && !awakeningShownRef.current) {
      setShowAwakening(true);
      awakeningShownRef.current = true;
    }
  }, [state.avatarAwake]);

  useEffect(() => {
    if (!state.avatarImprintActive || state.avatarAwake) {
      if (imprintHoldRef.current !== null) {
        window.clearInterval(imprintHoldRef.current);
        imprintHoldRef.current = null;
      }
    }
  }, [state.avatarImprintActive, state.avatarAwake]);

  useEffect(() => {
    const prevThreat = prevThreatRef.current;
    if (prevThreat.countdown > 0 && state.threat.aftershock > 0 && state.threat.countdown === 0) {
      let flashColor = "bg-rose-500/30";
      if (state.threat.type === "distortionWave") flashColor = "bg-purple-500/30";
      if (state.threat.type === "voidStorm") flashColor = "bg-blue-500/30";
      if (state.threat.type === "meteorShower") flashColor = "bg-orange-500/30";
      
      setImpactFlash(flashColor);
      setTimeout(() => setImpactFlash(null), 2000);
    }
    prevThreatRef.current = state.threat;
  }, [state.threat]);

  useEffect(() => {
    const surgeTick = state.postWaveSurgeTicks;
    const surgeMode = state.postWaveSurgeMode ?? "gentle";
    if (
      surgeTick > 0 &&
      surgeTick <= 30 &&
      surgeTick % 10 === 0 &&
      (surgeTick !== prevSurgeRef.current || surgeMode !== prevSurgeModeRef.current)
    ) {
      const color = surgeMode === "aggressive" ? "bg-rose-500/30" : surgeTick <= 10 ? "bg-fuchsia-500/25" : "bg-amber-500/18";
      setImpactFlash(color);
      window.setTimeout(() => setImpactFlash(null), 1100);
    }
    prevSurgeRef.current = surgeTick;
    prevSurgeModeRef.current = state.postWaveSurgeMode;
  }, [state.postWaveSurgeTicks, state.postWaveSurgeMode]);

  useEffect(() => {
    const id = window.setInterval(() => {
      dispatch({ type: "__TICK__" });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let fallbackId: number | null = null;
    let idleId: number | null = null;
    const params = new URLSearchParams(window.location.search);
    const isTestMode = params.get("test") === "1" || params.get("lite") === "1";

    setSceneDeferred(isTestMode);
    if (isTestMode) {
      setSceneReady(false);
      return () => {
        cancelled = true;
      };
    }

    const activate = () => {
      if (!cancelled) setSceneReady(true);
    };

    if ("requestIdleCallback" in window) {
      fallbackId = window.setTimeout(activate, 650);
      idleId = (window as Window & {
        requestIdleCallback: (cb: IdleRequestCallback) => number;
      }).requestIdleCallback(() => activate());

      return () => {
        cancelled = true;
        if (fallbackId !== null) window.clearTimeout(fallbackId);
        if (idleId !== null && "cancelIdleCallback" in window) {
          (window as Window & {
            cancelIdleCallback: (id: number) => void;
          }).cancelIdleCallback(idleId);
        }
      };
    }

    fallbackId = (window as Window).setTimeout(activate, 250);
    return () => {
      cancelled = true;
      if (fallbackId !== null) (window as Window).clearTimeout(fallbackId);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (holdRef.current !== null) {
        window.clearInterval(holdRef.current);
      }
      if (imprintHoldRef.current !== null) {
        window.clearInterval(imprintHoldRef.current);
      }
      if (actionFeedbackTimeoutRef.current !== null) {
        window.clearTimeout(actionFeedbackTimeoutRef.current);
      }
    };
  }, []);

  const isContinuationLike = state.chapter === "continuation" || state.avatarAwake || state.firstLoopComplete;
  const showGameOver = !isContinuationLike && state.stationLost;

  useEffect(() => {
    if (state.tick % 5 === 0) {
      saveGravitasState(state);
    }
  }, [state.tick]);

  useEffect(() => {
    if (!hydrated) return;
    saveGravitasState(state);
  }, [state.chapter, hydrated]);

  useEffect(() => {
    if (activePanel || resourceHelpOpen || state.pendingEvent || showGameOver) {
      setQuickActionsOpen(false);
    }
  }, [activePanel, resourceHelpOpen, state.pendingEvent, showGameOver]);

  useEffect(() => {
    const command = lastActionRef.current;
    const prev = prevStateRef.current;
    prevStateRef.current = state;

    if (!command) return;

    const feedback = buildActionFeedback(prev, state, command);
    lastActionRef.current = null;

    if (!feedback) return;
    setActionFeedback(feedback);
    if (actionFeedbackTimeoutRef.current !== null) {
      window.clearTimeout(actionFeedbackTimeoutRef.current);
    }
    actionFeedbackTimeoutRef.current = window.setTimeout(() => {
      setActionFeedback(null);
      actionFeedbackTimeoutRef.current = null;
    }, 10000);
  }, [state]);

  const localize = (ls: LocalizedString | null | undefined) => {
    if (!ls) return "";
    return ls[lang] ?? ls.en;
  };

  const resourceHelp: Record<ResourceHelpKey, { title: LocalizedString; body: LocalizedString; impact: LocalizedString; fix: LocalizedString }> = {
    power: {
      title: { en: "Power", hu: "Energia", de: "Energie", ro: "Energie" },
      body: {
        en: "Power is the station's immediate operating reserve. Core actions and emergency responses consume it.",
        hu: "Az energia az állomás azonnal használható tartaléka. A fő műveletek és a vészreakciók ezt fogyasztják.",
        de: "Energie ist die unmittelbare Betriebsreserve der Station. Kernaktionen und Notfallreaktionen verbrauchen sie.",
        ro: "Energia este rezerva operațională imediată a stației. Acțiunile principale și reacțiile de urgență o consumă.",
      },
      impact: {
        en: "If it drops too low, reroutes, scans and several defensive actions become unavailable.",
        hu: "Ha túl alacsonyra esik, az átirányítás, a szkennelés és több védekező akció elérhetetlenné válik.",
        de: "Wenn sie zu niedrig fällt, werden Umleitungen, Scans und mehrere Abwehraktionen gesperrt.",
        ro: "Dacă scade prea mult, redirecționările, scanările și mai multe acțiuni defensive devin indisponibile.",
      },
      fix: {
        en: "Raise it by stabilizing the reactor, keeping the grid healthy, and avoiding avoidable crisis drain.",
        hu: "Reaktor-stabilizálással, egészséges hálózattal és a felesleges krízisfogyás elkerülésével növelhető.",
        de: "Erhöhe sie durch Reaktorstabilisierung, ein gesundes Netz und das Vermeiden unnötiger Krisenlast.",
        ro: "Crește prin stabilizarea reactorului, menținerea rețelei sănătoase și evitarea pierderilor din criză.",
      },
    },
    materials: {
      title: { en: "Materials", hu: "Nyersanyag", de: "Material", ro: "Materiale" },
      body: {
        en: "Materials are your repair and fabrication reserve. Stabilizing and patching systems often spends them.",
        hu: "A nyersanyag a javítás és gyártás tartaléka. A stabilizálás és javítás gyakran ebből költ.",
        de: "Material ist deine Reparatur- und Fertigungsreserve. Stabilisierung und Reparaturen verbrauchen sie oft.",
        ro: "Materialele sunt rezerva ta pentru reparații și fabricație. Stabilizarea și repararea le consumă des.",
      },
      impact: {
        en: "If materials run low, repairs fail and some logistics-driven options disappear.",
        hu: "Ha kevés a nyersanyag, a javítások elbuknak, és több logisztikai opció eltűnik.",
        de: "Wenn Material fehlt, scheitern Reparaturen und einige logistikbasierte Optionen verschwinden.",
        ro: "Dacă materialele scad prea mult, reparațiile eșuează și dispar unele opțiuni logistice.",
      },
      fix: {
        en: "Increase it with scavange cycles, logistics upkeep, and by avoiding waste during meteor pressure.",
        hu: "Gyűjtőciklusokkal, a logisztika karbantartásával és a meteoros nyomás alatti pazarlás elkerülésével növelhető.",
        de: "Erhöhe es mit Bergungszyklen, gesunder Logistik und weniger Verschwendung unter Meteordruck.",
        ro: "Crește prin cicluri de colectare, întreținerea logisticii și evitarea risipei sub presiune meteoritică.",
      },
    },
    stability: {
      title: { en: "Stability", hu: "Stabilitás", de: "Stabilität", ro: "Stabilitate" },
      body: {
        en: "Stability is the station's overall balance and safety margin. Threats, entropy and damage push it down.",
        hu: "A stabilitás az állomás általános egyensúlya és biztonsági tartaléka. A fenyegetések, entrópia és sérülések lefelé nyomják.",
        de: "Stabilität ist die allgemeine Balance und Sicherheitsreserve der Station. Bedrohungen, Entropie und Schäden drücken sie nach unten.",
        ro: "Stabilitatea este echilibrul general și marja de siguranță a stației. Amenințările, entropia și daunele o reduc.",
      },
      impact: {
        en: "If it collapses, you enter lockdown pressure and risk losing the station.",
        hu: "Ha összeomlik, lezárási nyomás alá kerülsz, és elveszítheted az állomást.",
        de: "Wenn sie zusammenbricht, gerätst du unter Lockdown-Druck und riskierst den Stationsverlust.",
        ro: "Dacă se prăbușește, intri sub presiune de blocare și riști să pierzi stația.",
      },
      fix: {
        en: "Recover it with reactor stabilization, smart event choices, shield tools and low-entropy play.",
        hu: "Reaktor-stabilizálással, jó eseményválasztásokkal, pajzseszközökkel és alacsony entrópiás játékkal állítható helyre.",
        de: "Stelle sie durch Reaktorstabilisierung, kluge Ereigniswahl, Schildwerkzeuge und niedrige Entropie wieder her.",
        ro: "Se recuperează prin stabilizarea reactorului, alegeri bune la evenimente, unelte de scut și joc cu entropie redusă.",
      },
    },
    activation: {
      title: { en: "Activation", hu: "Aktiválás", de: "Aktivierung", ro: "Activare" },
      body: {
        en: "Activation measures how much charge has been routed into the core chamber toward awakening.",
        hu: "Az aktiválás azt méri, mennyi töltés került a magkamrába az ébresztés felé.",
        de: "Aktivierung misst, wie viel Ladung zur Erweckung in die Kernkammer geleitet wurde.",
        ro: "Activarea măsoară câtă încărcare a fost redirecționată spre camera nucleului pentru trezire.",
      },
      impact: {
        en: "Higher activation moves you toward the activation phase and eventually the awakened state.",
        hu: "A magasabb aktiválás közelebb visz az aktiválási fázishoz, majd végül az ébredt állapothoz.",
        de: "Höhere Aktivierung bringt dich näher an die Aktivierungsphase und schließlich an den erwachten Zustand.",
        ro: "O activare mai mare te apropie de faza de activare și apoi de starea trezită.",
      },
      fix: {
        en: "Build it by rerouting power to the core and sustaining transfer when the chamber is ready.",
        hu: "Az energiának a maghoz irányításával és az átvitellel növelhető, amikor a kamra készen áll.",
        de: "Erhöhe sie durch Energieumleitung zum Kern und gehaltenen Transfer, wenn die Kammer bereit ist.",
        ro: "Crește prin redirecționarea energiei spre nucleu și menținerea transferului când camera este pregătită.",
      },
    },
    entropy: {
      title: { en: "Entropy", hu: "Entrópia", de: "Entropie", ro: "Entropie" },
      body: {
        en: "Entropy is long-term system disorder. It quietly raises pressure, costs and instability if ignored.",
        hu: "Az entrópia a rendszer hosszú távú rendezetlensége. Ha figyelmen kívül hagyod, csendben növeli a nyomást, a költségeket és az instabilitást.",
        de: "Entropie ist die langfristige Unordnung des Systems. Ignoriert man sie, erhöht sie still Druck, Kosten und Instabilität.",
        ro: "Entropia este dezordinea pe termen lung a sistemului. Dacă este ignorată, crește discret presiunea, costurile și instabilitatea.",
      },
      impact: {
        en: "High entropy makes recovery harder and can turn manageable threats into spirals.",
        hu: "A magas entrópia megnehezíti a helyreállítást, és a kezelhető fenyegetéseket is spirállá teheti.",
        de: "Hohe Entropie erschwert die Erholung und kann beherrschbare Bedrohungen in Spiralen verwandeln.",
        ro: "Entropia mare îngreunează recuperarea și poate transforma amenințări gestionabile în spirale.",
      },
      fix: {
        en: "Lower it through clean play, anomaly control, and by preventing cascades before they spread.",
        hu: "Tiszta játékkal, anomáliakezeléssel és a kaszkádok terjedésének megelőzésével csökkenthető.",
        de: "Senke sie durch sauberes Spiel, Anomaliekontrolle und das Stoppen von Kaskaden vor ihrer Ausbreitung.",
        ro: "Se reduce prin joc curat, controlul anomaliilor și oprirea cascadelor înainte să se răspândească.",
      },
    },
  };

  const phaseLabel = useMemo(() => {
    if (state.phase === "boot") return localize(ui.phaseBoot);
    if (state.phase === "activation") return localize(ui.phaseActivation);
    return localize(ui.phaseAwakened);
  }, [state.phase, lang, ui]);

  const patternLabel = useMemo(() => {
    if (state.worldPulse < 15) return localize(ui.patternQuiet);
    if (state.worldPulse < 35) return localize(ui.patternFrayed);
    if (state.worldPulse < 65) return localize(ui.patternStrange);
    return localize(ui.patternThin);
  }, [state.worldPulse, lang, ui]);

  const canReroute = canStartActivationTransfer(state);
  const isRecovering = state.threat.aftershock > 0 || state.crisis;
  const isLockdown = state.lockdown;
  const introStage = state.phase === "boot" && state.tick < 90;
  const earlyStage = !state.avatarAwake && state.tick < 45;
  const avatarImprintStageActive = !state.avatarAwake && (state.avatarProfile?.answers.length ?? 0) >= 3;
  const repairChallengeTarget = state.repairChallenge.active ? state.repairChallenge.sequence[state.repairChallenge.promptIndex] ?? null : null;
  const repairChallengeRemaining = state.repairChallenge.active ? Math.max(0, state.repairChallenge.promptEndsAtTick - state.tick) : 0;
  const activeOperation = state.activeOperation;
  const scavengeOperation = state.scavengeOperation;
  const isScavengeActive = !!scavengeOperation;
  const operationProgress = activeOperation
    ? Math.max(0, Math.min(100, ((activeOperation.duration - activeOperation.remaining) / activeOperation.duration) * 100))
    : 0;
  const scavengeProgress = scavengeOperation
    ? Math.max(0, Math.min(100, ((scavengeOperation.cycleDuration - scavengeOperation.remaining) / scavengeOperation.cycleDuration) * 100))
    : 0;
  const guide = useMemo(() => {
    if (state.repairChallenge.active) {
      const promptCopy =
        repairChallengeTarget === "reactor"
          ? {
              en: "Stability is under strain. Repair the reactor before the timer ends.",
              hu: "A stabilitás terhelés alatt van. Javítsd meg a reaktort, mielőtt lejár az idő.",
              de: "Die Stabilität steht unter Druck. Repariere den Reaktor, bevor die Zeit abläuft.",
              ro: "Stabilitatea este sub presiune. Repară reactorul înainte să se termine timpul.",
            }
          : repairChallengeTarget === "logistics"
            ? {
                en: "Supply pressure is rising. Repair logistics before the next cut hits.",
                hu: "Az ellátási nyomás emelkedik. Javítsd a logisztikát, mielőtt az újabb szakasz üt be.",
                de: "Der Versorgungsdruck steigt. Repariere die Logistik, bevor der nächste Einschnitt kommt.",
                ro: "Presiunea aprovizionării crește. Repară logistica înainte de următoarea tăietură.",
              }
            : repairChallengeTarget === "sensor"
              ? {
                  en: "Signal drift is climbing. Repair the sensor before the line goes blind.",
                  hu: "A jel-drift emelkedik. Javítsd a szenzort, mielőtt a vonal megvakul.",
                  de: "Der Signalschwund steigt. Repariere den Sensor, bevor die Linie blind wird.",
                  ro: "Deriva semnalului crește. Repară senzorul înainte ca linia să orbească.",
                }
              : content.ui.repairWindow;
      return {
        body: localize(promptCopy),
        focus:
          repairChallengeTarget === "reactor"
            ? ("stabilize" as const)
            : repairChallengeTarget === "logistics"
              ? ("repairLogistics" as const)
              : repairChallengeTarget === "sensor"
                ? ("repairSensor" as const)
                : null,
      };
    }

    if (state.avatarAwake) {
      return {
        body: localize(content.ui.awakened),
        focus: null as "scavenge" | "repairLogistics" | "repairSensor" | "stabilize" | "reroute" | "activation" | null,
      };
    }

    if (avatarImprintStageActive) {
      return {
        body: localize({
          en: "Hold the core seal for 30 seconds without letting go.",
          hu: "Tartsd lenyomva a magzárat 30 másodpercig elengedés nélkül.",
          de: "Halte das Kernsiegel 30 Sekunden ohne Loslassen gedrückt.",
          ro: "Ține sigiliul nucleului 30 de secunde fără să eliberezi.",
        }),
        focus: null as string | null,
      };
    }

    if (state.pendingEvent) {
      return {
        body: localize({
          en: "External interference detected. Choose a response and keep the station steady.",
          hu: "Külső beavatkozás érzékelve. Válassz választ, és tartsd stabilan az állomást.",
          de: "Externer Eingriff erkannt. Wähle eine Antwort und halte die Station stabil.",
          ro: "Interferență externă detectată. Alege un răspuns și păstrează stația stabilă.",
        }),
        focus: null as string | null,
      };
    }

    if (state.tick < 90) {
      if (!state.scavengeOperation) {
        return {
          body: localize({
            en: "Start material gathering once. Let the drone sweep run in the background.",
            hu: "Indítsd el egyszer az anyaggyűjtést. Hagyd, hogy a drón a háttérben dolgozzon.",
            de: "Starte die Materialsuche einmal. Lass die Drohne im Hintergrund arbeiten.",
            ro: "Pornește o dată colectarea de materiale. Lasă drona să lucreze în fundal.",
          }),
          focus: "scavenge" as const,
        };
      }
      if (state.modules.logistics.integrity < 68) {
        return {
          body: localize({
            en: "Repair logistics first. A healthy supply line makes the rest easier.",
            hu: "Először a logisztikát javítsd meg. Egy ép ellátási lánc mindent könnyebbé tesz.",
            de: "Repariere zuerst die Logistik. Eine gesunde Versorgungslinie erleichtert alles andere.",
            ro: "Repară mai întâi logistica. O linie de aprovizionare sănătoasă ușurează totul.",
          }),
          focus: "repairLogistics" as const,
        };
      }
      if (state.resources.stability < 74 || state.modules.reactor.integrity < 78) {
        return {
          body: localize({
            en: "Stabilize the reactor and keep the green line healthy before the first interference.",
            hu: "Stabilizáld a reaktort, és tartsd egészségesen a zöld sávot az első beavatkozás előtt.",
            de: "Stabilisiere den Reaktor und halte die grüne Anzeige gesund, bevor der erste Eingriff kommt.",
            ro: "Stabilizează reactorul și menține bara verde sănătoasă înainte de prima intervenție.",
          }),
          focus: "stabilize" as const,
        };
      }
      return {
        body: localize({
          en: "Nothing hostile is entering yet. Learn the station and keep your systems calm.",
          hu: "Még nem érkezik semmi ellenséges. Ismerd meg az állomást, és tartsd nyugodtan a rendszert.",
          de: "Noch dringt nichts Feindliches ein. Lerne die Station kennen und halte das System ruhig.",
          ro: "Încă nu intră nimic ostil. Învață stația și păstrează sistemul calm.",
        }),
        focus: null as string | null,
      };
    }

    if (state.tick < 135) {
      if (state.phase === "boot" && canReroute) {
        return {
          body: localize({
            en: "The station is holding. Begin routing power toward the core when you are ready.",
            hu: "Az állomás tartja magát. Kezdd el a mag felé terelni az energiát, amikor kész vagy.",
            de: "Die Station hält. Leite Energie zum Kern, sobald du bereit bist.",
            ro: "Stația rezistă. Începe să redirecționezi energia spre nucleu când ești pregătit.",
          }),
          focus: "reroute" as const,
        };
      }
      return {
        body: localize({
          en: "Recover from the first disturbance. Keep materials and stability in reserve.",
          hu: "Állj talpra az első zavar után. Tarts tartalékot anyagból és stabilitásból.",
          de: "Erhole dich von der ersten Störung. Halte Material und Stabilität in Reserve.",
          ro: "Recuperează-te după prima perturbare. Păstrează materiale și stabilitate în rezervă.",
        }),
        focus: state.modules.sensor.integrity < 70
          ? "repairSensor" as const
          : state.modules.logistics.integrity < 70
            ? "repairLogistics" as const
            : "stabilize" as const,
      };
    }

    if (state.tick < 180) {
      if (state.phase === "activation" && avatarImprintStageActive) {
        return {
          body: localize({
            en: "The chamber is ready. Open Activation and hold the transfer to wake the avatar.",
            hu: "A kamra készen áll. Nyisd meg az Aktiválást, és tartsd az átvitelt az avatár felébresztéséhez.",
            de: "Die Kammer ist bereit. Öffne die Aktivierung und halte den Transfer, um den Avatar zu wecken.",
            ro: "Camera este pregătită. Deschide Activarea și ține transferul pentru a trezi avatarul.",
          }),
          focus: "activation" as const,
        };
      }
      return {
        body: localize({
          en: "Prepare the core. The activation chamber will open later.",
          hu: "Készítsd elő a magot. Az aktiválási kamra később nyílik meg.",
          de: "Bereite den Kern vor. Die Aktivierungskammer öffnet später.",
          ro: "Pregătește nucleul. Camera de activare se va deschide mai târziu.",
        }),
        focus: state.phase === "activation" ? null : "reroute" as const,
      };
    }

    return {
      body: localize(ui.startDirective),
      focus: null as string | null,
    };
  }, [state, canReroute, lang, content.ui.awakened, ui.startDirective]);

  const rerouteHighlighted = state.phase === "awakened" ? (state.tick - state.lastAvatarPulse >= 20) : (canReroute && !isLockdown) || guide.focus === "reroute";
  const isWavePaused = state.threat.pausedUntilAwake && !state.avatarAwake;
  const postWaveSurgeActive = (state.postWaveSurgeTicks ?? 0) > 0;
  const postWaveSurgeCalm = postWaveSurgeActive && state.postWaveSurgeTicks > 30;
  const postWaveSurgeWarning = postWaveSurgeActive && state.postWaveSurgeTicks <= 30;
  const displayedWaveNumber = isWavePaused
    ? Math.min(3, Math.max(1, state.threatCycle))
    : state.threat.aftershock > 0
      ? Math.max(1, state.threatCycle)
      : state.threatCycle + 1;
  const threatProgressPercent = isWavePaused
    ? 100
    : state.threat.aftershock > 0
    ? Math.max(0, Math.min(100, ((6 - state.threat.aftershock) / 6) * 100))
    : Math.max(0, Math.min(100, ((state.threat.totalDuration - state.threat.countdown) / Math.max(1, state.threat.totalDuration)) * 100));
  const threatCountdownText = isWavePaused
    ? localize({ en: "Standby", hu: "Készenlét", de: "Bereit", ro: "În așteptare" })
    : state.threat.aftershock > 0
    ? String(state.threat.aftershock)
    : formatThreatCountdown(state.threat.countdown);
  const postWaveDisplay = postWaveSurgeActive ? `${Math.floor(state.postWaveSurgeTicks / 60)}:${String(state.postWaveSurgeTicks % 60).padStart(2, "0")}` : "";

  const beginTransfer = () => {
    if (state.phase !== "activation" || holdRef.current !== null || state.avatarAwake) return;
    holdRef.current = window.setInterval(() => {
      dispatch({ type: "CHANNEL_TO_CORE", amount: 0.6 });
    }, 60);
  };

  const stopTransfer = () => {
    if (holdRef.current !== null) {
      window.clearInterval(holdRef.current);
      holdRef.current = null;
    }
  };

  const beginImprintHold = () => {
    if (!avatarImprintStageActive || !state.avatarImprintActive || imprintHoldRef.current !== null) return;
    imprintHoldRef.current = window.setInterval(() => {
      dispatch({ type: "CHANNEL_AVATAR_IMPRINT", amount: 0.2 });
    }, 60);
  };

  const stopImprintHold = () => {
    if (imprintHoldRef.current !== null) {
      window.clearInterval(imprintHoldRef.current);
      imprintHoldRef.current = null;
    }
    if (avatarImprintStageActive && state.avatarImprintActive) {
      dispatch({ type: "RESET_AVATAR_IMPRINT" });
    }
  };

  const hasPredictor = state.progression.unlockedItems.includes("threat_predictor");
  const hasGoldHull = state.progression.unlockedItems.includes("station_paint_gold");
  const unclaimed = state.progression.unclaimedMilestones || [];
  const hasUnclaimed = unclaimed.length > 0;
  const reactorRecovery = state.reactorRecovery ?? {
    active: false,
    completedStabilizations: 0,
    nextPromptTick: 0,
  };
  const isContinuationChapter = state.chapter === "continuation";
  const reactorPromptWindow = reactorRecovery.active && state.tick >= reactorRecovery.nextPromptTick;
  const inFirstWaveRecovery = reactorRecovery.active && state.threatCycle === 1;
  const severeReactorIssue = state.resources.stability < 50 || state.modules.reactor.integrity < 50 || state.modules.reactor.load >= 90 || state.crisis;
  const reactorNeedsAttention = 
    activeOperation?.type === "stabilizeReactor" ||
    reactorPromptWindow ||
    (!inFirstWaveRecovery && severeReactorIssue) ||
    repairChallengeTarget === "reactor";
  const logisticsNeedsAttention = (activeOperation?.type === "repairModule" && activeOperation.moduleId === "logistics") || state.modules.logistics.integrity < 50 || !state.modules.logistics.online || !!(state.recoveryPriority && state.recoveryPriority.moduleId === "logistics") || repairChallengeTarget === "logistics";
  const sensorNeedsAttention = (activeOperation?.type === "repairModule" && activeOperation.moduleId === "sensor") || state.modules.sensor.integrity < 50 || !state.modules.sensor.online || !!(state.recoveryPriority && state.recoveryPriority.moduleId === "sensor") || repairChallengeTarget === "sensor";
  const reactorActionTone: QuickActionTone = repairChallengeTarget
    ? repairChallengeTarget === "reactor"
      ? "danger"
      : "warning"
    : severeReactorIssue
      ? "danger"
      : "warning";
  const logisticsActionTone: QuickActionTone = repairChallengeTarget
    ? repairChallengeTarget === "logistics"
      ? "danger"
      : "warning"
    : state.modules.logistics.integrity < 50 || !state.modules.logistics.online
      ? "danger"
      : "warning";
  const sensorActionTone: QuickActionTone = repairChallengeTarget
    ? repairChallengeTarget === "sensor"
      ? "danger"
      : "warning"
    : state.modules.sensor.integrity < 50 || !state.modules.sensor.online
      ? "danger"
      : "warning";
  const primaryActions: QuickActionItem[] = [
    {
      key: "scavenge",
      label: isScavengeActive ? localize({ en: "Stop Scavenge", hu: "Gyűjtés leállítása", de: "Bergung stoppen", ro: "Oprește colectarea" }) : localize(ui.scavenge),
      shortLabel: isScavengeActive ? localize({ en: "Stop", hu: "Stop", de: "Stop", ro: "Stop" }) : localize({ en: "Scavenge", hu: "Gyűjtés", de: "Bergung", ro: "Colectare" }),
      icon: <Wrench size={15} className="shrink-0" />,
      onClick: () => doAction({ type: "SCAVENGE" }, "rgba(16,185,129,0.4)"),
      disabled: isLockdown && !isScavengeActive,
      highlight: guide.focus === "scavenge",
      tone: "default",
      mobilePriority: isScavengeActive ? 95 : guide.focus === "scavenge" ? 82 : 58,
    },
    ...(reactorNeedsAttention
      ? [{
          key: "reactor",
          label: activeOperation?.type === "stabilizeReactor" ? localize({ en: "Stop Stabilize", hu: "Stabilizálás leállítása", de: "Stabilisierung stoppen", ro: "Oprește stabilizarea" }) : localize(ui.stabilize),
          shortLabel: activeOperation?.type === "stabilizeReactor" ? localize({ en: "Stop", hu: "Stop", de: "Stop", ro: "Stop" }) : localize({ en: "Reactor", hu: "Reaktor", de: "Reaktor", ro: "Reactor" }),
          icon: <Power size={15} className="shrink-0" />,
          onClick: () => doAction({ type: "STABILIZE_REACTOR" }, "rgba(59,130,246,0.4)"),
          disabled: !!activeOperation && activeOperation.type !== "stabilizeReactor",
          highlight: false,
          emphasis: isRecovering && !isLockdown,
          tone: reactorActionTone,
          mobilePriority:
            activeOperation?.type === "stabilizeReactor"
              ? 100
              : repairChallengeTarget === "reactor"
                ? 99
              : reactorActionTone === "danger"
                ? 92
                : 78,
        }]
      : []),
    ...(logisticsNeedsAttention
      ? [{
          key: "logistics",
          label: activeOperation?.type === "repairModule" && activeOperation.moduleId === "logistics" ? localize({ en: "Stop Repair", hu: "Javítás leállítása", de: "Reparatur stoppen", ro: "Oprește reparația" }) : localize(ui.repairLogistics),
          shortLabel: activeOperation?.type === "repairModule" && activeOperation.moduleId === "logistics" ? localize({ en: "Stop", hu: "Stop", de: "Stop", ro: "Stop" }) : localize({ en: "Logistics", hu: "Logiszt.", de: "Logistik", ro: "Logistică" }),
          icon: <Radar size={15} className="shrink-0" />,
          onClick: () => doAction({ type: "REPAIR_MODULE", moduleId: "logistics" }, "rgba(245,158,11,0.4)"),
          disabled: !!activeOperation && !(activeOperation.type === "repairModule" && activeOperation.moduleId === "logistics"),
          highlight: guide.focus === "repairLogistics",
          tone: logisticsActionTone,
          mobilePriority:
            activeOperation?.type === "repairModule" && activeOperation.moduleId === "logistics"
              ? 96
              : repairChallengeTarget === "logistics"
                ? 98
              : logisticsActionTone === "danger"
                ? 88
                : 72,
        }]
      : []),
    ...(sensorNeedsAttention
      ? [{
          key: "sensor",
          label: activeOperation?.type === "repairModule" && activeOperation.moduleId === "sensor" ? localize({ en: "Stop Repair", hu: "Javítás leállítása", de: "Reparatur stoppen", ro: "Oprește reparația" }) : localize(ui.repairSensor),
          shortLabel: activeOperation?.type === "repairModule" && activeOperation.moduleId === "sensor" ? localize({ en: "Stop", hu: "Stop", de: "Stop", ro: "Stop" }) : localize({ en: "Sensor", hu: "Szenzor", de: "Sensor", ro: "Senzor" }),
          icon: <Radar size={15} className="shrink-0" />,
          onClick: () => doAction({ type: "REPAIR_MODULE", moduleId: "sensor" }, "rgba(34,211,238,0.4)"),
          disabled: !!activeOperation && !(activeOperation.type === "repairModule" && activeOperation.moduleId === "sensor"),
          highlight: guide.focus === "repairSensor",
          tone: sensorActionTone,
          mobilePriority:
            activeOperation?.type === "repairModule" && activeOperation.moduleId === "sensor"
              ? 94
              : repairChallengeTarget === "sensor"
                ? 97
              : sensorActionTone === "danger"
                ? 86
                : 68,
        }]
      : []),
    {
      key: "core",
      label: state.phase === "awakened" ? localize({ en: "World Pulse", hu: "Világimpulzus", de: "Weltpuls", ro: "Pulsul lumii" }) : activeOperation?.type === "rerouteCore" ? localize({ en: "Stop Reroute", hu: "Átirányítás leállítása", de: "Umleitung stoppen", ro: "Oprește redirecționarea" }) : localize(ui.reroute),
      shortLabel: state.phase === "awakened" ? localize({ en: "Pulse", hu: "Pulzus", de: "Puls", ro: "Puls" }) : activeOperation?.type === "rerouteCore" ? localize({ en: "Stop", hu: "Stop", de: "Stop", ro: "Stop" }) : localize({ en: "Core", hu: "Mag", de: "Kern", ro: "Nucleu" }),
      icon: <Cpu size={15} className="shrink-0" />,
      onClick: () => doAction({ type: state.phase === "awakened" ? "AVATAR_PULSE" : "REROUTE_TO_CORE" }, "rgba(219,39,119,0.4)"),
      disabled: state.phase === "awakened" ? (state.tick - state.lastAvatarPulse < 20) : (!canReroute || isLockdown || (!!activeOperation && activeOperation.type !== "rerouteCore")),
      highlight: state.phase === "awakened" ? (state.tick - state.lastAvatarPulse >= 20) : rerouteHighlighted || guide.focus === "activation",
      tone: "default",
      mobilePriority:
        activeOperation?.type === "rerouteCore"
          ? 98
          : (state.phase === "awakened" ? (state.tick - state.lastAvatarPulse >= 20) : rerouteHighlighted || guide.focus === "activation")
            ? 90
            : 70,
    },
    {
      key: "systems",
      label: localize({ en: "Systems", hu: "Rendszerek", de: "Systeme", ro: "Sisteme" }),
      shortLabel: localize({ en: "Systems", hu: "Rendsz.", de: "Systeme", ro: "Sisteme" }),
      icon: <LayoutGrid size={15} className="shrink-0" />,
      onClick: () => setActivePanel("modules"),
      disabled: false,
      highlight: activePanel === "modules",
      tone: "default",
      mobilePriority: 40,
    },
  ];
  const quickActions = primaryActions.filter((action) => action.key !== "systems");
  const systemsAction = primaryActions.find((action) => action.key === "systems");
  const prioritizedMobileActions = [...quickActions]
    .sort((a, b) => b.mobilePriority - a.mobilePriority)
    .slice(0, Math.min(3, quickActions.length));
  const pinnedActionKeys = new Set(prioritizedMobileActions.map((action) => action.key));
  const overflowQuickActions = quickActions.filter((action) => !pinnedActionKeys.has(action.key));
  const hiddenUrgentActions = overflowQuickActions.some(
    (action) => action.emphasis || action.highlight || action.tone !== "default"
  );

  const [starFeedback, setStarFeedback] = useState<{ amount: number; id: number } | null>(null);

  useEffect(() => {
    if (state.progression.lastStarGain > 0) {
      setStarFeedback({ amount: state.progression.lastStarGain, id: Date.now() });
      const t = setTimeout(() => setStarFeedback(null), 3000);
      return () => clearTimeout(t);
    }
  }, [state.progression.lastStarGain]);

  const moduleActions = useMemo(
    () => getGravitasActionSlots(selectedModule, state),
    [selectedModule, state]
  );
  const selectedModuleInfo = content.modules[selectedModule];
  const selectedModuleState = state.modules[selectedModule];
  const bootstrapOrder: StarholdModuleId[] = ["reactor", "logistics", "core", "sensor"];
  const bootstrapComplete = bootstrapOrder.every((moduleId) => state.bootstrapChecklist[moduleId]);
  const bootstrapPending = bootstrapOrder.filter((moduleId) => !state.bootstrapChecklist[moduleId]);

  const buildActionFeedback = (
    prev: StarholdState,
    next: StarholdState,
    command: StarholdCommand,
  ): LocalizedString | null => {
    if (next.alert && next.alert !== prev.alert) {
      return next.alert;
    }

    const delta = {
      power: next.resources.power - prev.resources.power,
      materials: next.resources.materials - prev.resources.materials,
      stability: next.resources.stability - prev.resources.stability,
      activation: next.resources.activation - prev.resources.activation,
    };

    const hasResourceShift = Object.values(delta).some((value) => value !== 0);
    const format = (value: number, label: string) => `${value > 0 ? "+" : ""}${value} ${label}`;

    switch (command.type) {
      case "SCAVENGE":
        if (hasResourceShift) {
          return {
            en: `Salvage ${format(delta.materials, "MAT")}${delta.power ? `, ${format(delta.power, "PWR")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            hu: `Bergés ${format(delta.materials, "ANY")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            de: `Bergung ${format(delta.materials, "MAT")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            ro: `Recuperare ${format(delta.materials, "MAT")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
          };
        }
        break;
      case "STABILIZE_REACTOR":
        return {
          en: `Reactor stabilized. ${format(delta.power, "PWR")}, ${format(delta.stability, "STB")}.`,
          hu: `Reaktor stabilizálva. ${format(delta.power, "ENE")}, ${format(delta.stability, "STB")}.`,
          de: `Reaktor stabilisiert. ${format(delta.power, "ENE")}, ${format(delta.stability, "STB")}.`,
          ro: `Reactor stabilizat. ${format(delta.power, "ENE")}, ${format(delta.stability, "STB")}.`,
        };
      case "REPAIR_MODULE": {
        const module = next.modules[command.moduleId];
        const integrityDelta = module.integrity - prev.modules[command.moduleId].integrity;
        if (integrityDelta === 0) {
          return {
            en: `${localize(module.name)} repair team deployed.`,
            hu: `${localize(module.name)} javítócsapata elindult.`,
            de: `Reparaturteam für ${localize(module.name)} entsandt.`,
            ro: `Echipa de reparații pentru ${localize(module.name)} a pornit.`,
          };
        }
        return {
          en: `${localize(module.name)} repaired to ${module.integrity}%. ${format(integrityDelta, "% integrity")}.`,
          hu: `${localize(module.name)} javítva ${module.integrity}%-ra. ${format(integrityDelta, "% integritás")}.`,
          de: `${localize(module.name)} auf ${module.integrity}% repariert. ${format(integrityDelta, "% Integrität")}.`,
          ro: `${localize(module.name)} reparat la ${module.integrity}%. ${format(integrityDelta, "% integritate")}.`,
        };
      }
      case "REROUTE_TO_CORE":
        return {
          en: `Power rerouted to the core. Activation +${delta.activation || 12}.`,
          hu: `Az energia a maghoz lett irányítva. Aktiválás +${delta.activation || 12}.`,
          de: `Energie zum Kern umgeleitet. Aktivierung +${delta.activation || 12}.`,
          ro: `Energia redirecționată spre nucleu. Activare +${delta.activation || 12}.`,
        };
      case "DISTORTION_SWEEP":
        return {
          en: `Distortion sweep cleared the drift. ${format(delta.stability, "STB")}.`,
          hu: `A torzításcsökkentés megtisztította a driftet. ${format(delta.stability, "STB")}.`,
          de: `Der Distortionssweep hat den Drift bereinigt. ${format(delta.stability, "STB")}.`,
          ro: `Scanarea distorsiunilor a curățat deriva. ${format(delta.stability, "STB")}.`,
        };
      case "PURGE_ANOMALY":
        return {
          en: `Anomaly purged from the grid.`,
          hu: `Anomália eltávolítva a hálózatból.`,
          de: `Anomalie aus dem Netz entfernt.`,
          ro: `Anomalie eliminată din rețea.`,
        };
      case "OVERCLOCK_REACTOR":
        return {
          en: `Reactor overclocked. ${format(delta.power, "PWR")} at the cost of deeper strain.`,
          hu: `Reaktor túlhajtva. ${format(delta.power, "ENE")} nagyobb terhelés árán.`,
          de: `Reaktor übertaktet. ${format(delta.power, "ENE")} auf Kosten höherer Belastung.`,
          ro: `Reactor suprasolicitat. ${format(delta.power, "ENE")} cu prețul unei tensiuni mai mari.`,
        };
      case "OPTIMIZE_LOGISTICS":
        return {
          en: `Logistics optimized. ${format(delta.materials, "MAT")} flow improved.`,
          hu: `Logisztika optimalizálva. ${format(delta.materials, "ANY")} áramlás javult.`,
          de: `Logistik optimiert. ${format(delta.materials, "MAT")} Fluss verbessert.`,
          ro: `Logistica optimizată. Fluxul a crescut cu ${format(delta.materials, "MAT")}.`,
        };
      case "DEEP_SCAN":
        return {
          en: `Deep scan complete. Void echo softened.`,
          hu: `Mélyvizsgálat kész. A void visszhang csillapodott.`,
          de: `Tiefenscan abgeschlossen. Das Void-Echo wurde gedämpft.`,
          ro: `Scanare profundă finalizată. Ecoul void a fost atenuat.`,
        };
      case "DAMPEN_SIGNALS":
        return {
          en: `Threat signal dampened.`,
          hu: `A fenyegetés jele csillapítva.`,
          de: `Bedrohungssignal gedämpft.`,
          ro: `Semnalul amenințării a fost atenuat.`,
        };
      case "FORTIFY_SHELL":
        return {
          en: `Shell fortified.`,
          hu: `A test megerősítve.`,
          de: `Hülle verstärkt.`,
          ro: `Corpul a fost fortificat.`,
        };
      case "INTERCEPT_THREAT":
        return {
          en: `Intercept drones deployed.`,
          hu: `Elfogó drónok bevetve.`,
          de: `Abfangdrohnen eingesetzt.`,
          ro: `Drone de intercepție desfășurate.`,
        };
      case "PREDICT_THREAT":
        return {
          en: `Threat trajectory predicted.`,
          hu: `A fenyegetés pályája előrejelezve.`,
          de: `Bedrohungstrajektorie vorhergesagt.`,
          ro: `Traiectoria amenințării a fost prezisă.`,
        };
      case "EMERGENCY_VENT":
        return {
          en: `Pressure vented. ${format(delta.stability, "STB")} returned to the grid.`,
          hu: `A nyomás kivezetve. ${format(delta.stability, "STB")} visszakerült a hálózatba.`,
          de: `Druck abgelassen. ${format(delta.stability, "STB")} kehrten ins Netz zurück.`,
          ro: `Presiunea a fost evacuată. ${format(delta.stability, "STB")} au revenit în rețea.`,
        };
      case "TUNE_SHIELDS":
        return {
          en: `Shield frequencies tuned. Incoming threat reduced.`,
          hu: `A pajzsfrekvenciák beállítva. A bejövő fenyegetés csökkent.`,
          de: `Schildfrequenzen abgestimmt. Eingehende Bedrohung reduziert.`,
          ro: `Frecvențele scutului reglate. Amenințarea a fost redusă.`,
        };
      case "EMERGENCY_DISCHARGE":
        return {
          en: `Emergency discharge released. ${format(delta.stability, "STB")} added.`,
          hu: `Vészkisülés kibocsátva. ${format(delta.stability, "STB")} hozzáadva.`,
          de: `Notentladung ausgelöst. ${format(delta.stability, "STB")} hinzugefügt.`,
          ro: `Descărcare de urgență eliberată. ${format(delta.stability, "STB")} adăugate.`,
        };
      case "RAPID_FABRICATION": {
        const module = next.modules[command.moduleId];
        return {
          en: `Rapid fabrication finished for ${localize(module.name)}.`,
          hu: `Gyorsgyártás kész: ${localize(module.name)}.`,
          de: `Schnellfertigung abgeschlossen für ${localize(module.name)}.`,
          ro: `Fabricare rapidă finalizată pentru ${localize(module.name)}.`,
        };
      }
      case "AVATAR_PULSE":
        return {
          en: `Avatar pulse released. The station steadied.`,
          hu: `Az avatár impulzusa kibocsátva. Az állomás megnyugodott.`,
          de: `Avatarpuls freigesetzt. Die Station stabilisierte sich.`,
          ro: `Pulsul avatarului eliberat. Stația s-a stabilizat.`,
        };
      case "RESOLVE_EVENT": {
        const eventName = prev.pendingEvent ? localize(prev.pendingEvent.title) : "";
        return {
          en: eventName ? `Resolved: ${eventName}.` : "Event resolved.",
          hu: eventName ? `Megoldva: ${eventName}.` : "Esemény megoldva.",
          de: eventName ? `Gelöst: ${eventName}.` : "Ereignis gelöst.",
          ro: eventName ? `Rezolvat: ${eventName}.` : "Eveniment rezolvat.",
        };
      }
      case "BUY_ITEM":
        return {
          en: "Upgrade acquired.",
          hu: "Fejlesztés megvéve.",
          de: "Upgrade erworben.",
          ro: "Îmbunătățire achiziționată.",
        };
      case "ACKNOWLEDGE_PHASE_SHIFT":
        return {
          en: "Phase shift acknowledged.",
          hu: "Fázisváltás tudomásul véve.",
          de: "Phasenwechsel bestätigt.",
          ro: "Schimbarea de fază confirmată.",
        };
      case "CLAIM_MILESTONE":
        return {
          en: "Milestone claimed.",
          hu: "Mérföldkő felvéve.",
          de: "Meilenstein beansprucht.",
          ro: "Obiectiv revendicat.",
        };
      default:
        break;
    }

    if (hasResourceShift) {
      const pieces = [
        delta.power ? format(delta.power, "PWR") : null,
        delta.materials ? format(delta.materials, "MAT") : null,
        delta.stability ? format(delta.stability, "STB") : null,
        delta.activation ? format(delta.activation, "ACT") : null,
      ].filter(Boolean);

      if (pieces.length > 0) {
        return {
          en: `Station state changed: ${pieces.join(", ")}.`,
          hu: `Az állapot változott: ${pieces.join(", ")}.`,
          de: `Stationszustand geändert: ${pieces.join(", ")}.`,
          ro: `Starea stației s-a schimbat: ${pieces.join(", ")}.`,
        };
      }
    }

    return {
      en: "The station responded, but the change is still subtle.",
      hu: "Az állomás reagált, de a változás még finom.",
      de: "Die Station reagierte, aber die Änderung ist noch subtil.",
      ro: "Stația a răspuns, dar schimbarea este încă subtilă.",
    };
  };

  const mods = getStarholdModifiers(state);

  if (!hydrated) {
    return (
      <main className="fixed inset-0 overflow-hidden bg-[#050816] text-white">
        <div className="flex h-full items-center justify-center">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/8 px-5 py-4 text-[11px] font-black uppercase tracking-[0.26em] text-cyan-100">
            Booting gravitas
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={`fixed inset-0 overflow-hidden transition-colors duration-1000 ${isLockdown ? "bg-[#0a0a0a]" : state.crisis ? "bg-[#1a0505]" : "bg-[#050816]"} ${impactFlash ? "animate-shake" : ""} text-white flex flex-col`}>
      <AnimatePresence>
        {shopOpen && (
          <GravitasShop
            key="gravitas-shop"
            state={state}
            lang={lang}
            ui={ui}
            onClose={() => setShopOpen(false)}
            onBuy={(itemId) => dispatch({ type: "BUY_ITEM", itemId })}
            onClaim={(milestoneId) => dispatch({ type: "CLAIM_MILESTONE", milestoneId })}
          />
        )}
        {showAwakening && (
          <AwakeningCeremony key="gravitas-awakening" lang={lang} profile={state.avatarProfile} onDone={() => setShowAwakening(false)} />
        )}
      </AnimatePresence>

      {impactFlash && (
        <div className={`fixed inset-0 z-[100] ${impactFlash} pointer-events-none animate-pulse`} />
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-black/20 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 text-white/40 hover:text-white transition">
            <ChevronLeft size={20} />
          </Link>
          <div className="flex items-center gap-2 group relative">
            <StationHealthRing state={state} />
            <div className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-200">
              {phaseLabel}
            </div>
            <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${state.chapter === "demo" ? "bg-amber-500/20 text-amber-200" : "bg-emerald-500/20 text-emerald-200"}`}>
              {state.chapter === "demo" ? "Chapter I" : "Continuation"}
            </div>
            {/* Phase Description Tooltip */}
            <div className="absolute top-full left-0 mt-2 p-3 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 text-[10px] text-white/60 w-48 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity pointer-events-none z-[100] shadow-2xl">
              {localize(content.lore.phaseDescriptions[state.phase])}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setInteriorView(interiorView === "galaxy" ? null : "galaxy")}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${interiorView === "galaxy" ? "border-cyan-300/50 bg-cyan-400/12 text-cyan-100" : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"}`}
          >
            <Layers size={13} />
          </button>
          <button
            onClick={() => setShopOpen(true)}
            className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 ${hasUnclaimed ? "border-amber-400 bg-amber-400/20 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)] animate-pulse scale-110" : state.progression.stars > 0 ? "border-amber-400/40 bg-amber-400/5 text-amber-400" : "border-white/10 bg-white/5 text-white/40"}`}
          >
            <Star size={12} fill={state.progression.stars > 0 ? "currentColor" : "none"} className={state.progression.stars === 0 ? "opacity-40" : ""} />
            <span className="text-[11px] font-black">{state.progression.stars}</span>
            {hasUnclaimed && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#050816]">
                {unclaimed.length}
              </div>
            )}
            <AnimatePresence>
              {starFeedback && (
                <motion.div
                  key={starFeedback.id}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -30 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 font-black text-amber-400 text-xs pointer-events-none"
                >
                  +{starFeedback.amount} ⭐
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => {
              if (!confirm("Reset game?")) return;
              restartGravitasChapter(state.chapter);
            }}
            className="p-1.5 text-white/20 hover:text-white/60 transition"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </header>

      {/* HUD Chips */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-black/10 border-b border-white/5 overflow-x-auto no-scrollbar gap-3 scrollbar-hide">
        <HUDChip icon={<Zap size={12} />} value={state.resources.power} color="text-amber-400" onClick={() => setResourceHelpOpen("power")} />
        <HUDChip
          icon={<MaterialResourceGlyph active={isScavengeActive} />}
          value={state.resources.materials}
          color="text-indigo-300"
          onClick={() => setResourceHelpOpen("materials")}
        />
        <HUDChip icon={<Activity size={12} />} value={state.resources.stability} color="text-emerald-400" onClick={() => setResourceHelpOpen("stability")} />
        {state.chapter === "demo" && (
          <HUDChip icon={<Brain size={12} />} value={Math.floor(state.resources.activation)} color="text-pink-400" onClick={() => setResourceHelpOpen("activation")} />
        )}
        <HUDChip icon={<Terminal size={12} />} value={state.entropy} color="text-rose-400" onClick={() => setResourceHelpOpen("entropy")} />
        {state.avatarProfile && state.avatarProfile.answers.length > 0 && (
          <AvatarBaseChip
            icon={<UserRound size={12} />}
            onClick={() => setAvatarBaseOpen(true)}
          />
        )}
        <div className={`relative flex items-center gap-1.5 px-2 py-1 rounded-xl bg-white/5 border border-white/5 text-xs font-black shrink-0 ${state.worldPulse < 15 ? "text-slate-400" : state.worldPulse < 35 ? "text-cyan-300" : state.worldPulse < 65 ? "text-violet-300" : "text-rose-300"}`}>
          <Layers size={11} />
          <div className="flex flex-col leading-none">
            <span className="text-[7px] uppercase tracking-[0.16em] text-white/30">{localize(ui.pattern)}</span>
            <span className="text-[9px]">{patternLabel}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/5 bg-black/10 px-2.5 py-1.5 no-scrollbar scrollbar-hide">
        {METEOR_MATERIAL_ORDER.map((materialId, index) => {
          const meta = METEOR_MATERIAL_META[materialId];
          return (
            <button
              key={materialId}
              type="button"
              className={`group flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white/78 transition hover:bg-white/8 ${meta.glowClassName}`}
              title={`${localize(meta.label)} ${displayedGalaxyInventory[materialId]}`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-black/18 text-[8px] ${meta.colorClassName}`}>
                {localize(meta.short)}
              </span>
              <span className={`hidden sm:inline ${meta.colorClassName}`}>{localize(meta.label)}</span>
              <span className="text-white">{formatCompactStarholdValue(displayedGalaxyInventory[materialId])}</span>
            </button>
          );
        })}
      </div>

      {/* Game View */}
      <div className="relative min-h-0 flex-1 overflow-hidden p-2.5 pt-2">
        <div
          className={`relative h-full w-full overflow-hidden rounded-[28px] transition-all duration-500 ${hasGoldHull ? "border-[4px] border-amber-400/30 shadow-[0_0_30px_rgba(251,191,36,0.1)]" : "border border-white/6 bg-black/10"}`}
          style={{ boxShadow: actionFlash ? `inset 0 0 60px ${actionFlash}` : "none" }}
        >
          <div className="pointer-events-none absolute inset-0 z-[1]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.96]"
              style={{ backgroundImage: "url('/gravitas/station-background.webp')" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(34,211,238,0.06),transparent_30%),linear-gradient(180deg,rgba(4,8,18,0.04),rgba(4,8,18,0.18))]" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">
            <motion.div
              className="absolute left-[39%] top-[34%] h-[32%] w-[32%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16),rgba(34,211,238,0.08)_42%,transparent_72%)] blur-2xl"
              animate={{ scale: [0.97, 1.03, 0.99], opacity: [0.28, 0.48, 0.34] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-[18%] top-[13%] h-[18%] w-[18%] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.16),rgba(251,146,60,0.06)_48%,transparent_75%)] blur-2xl"
              animate={{ scale: [0.96, 1.05, 0.98], opacity: [0.14, 0.28, 0.18] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-[24%] top-[61%] h-[18%] w-[18%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.15),rgba(34,211,238,0.05)_50%,transparent_78%)] blur-2xl"
              animate={{ rotate: [0, 7, -5, 0], opacity: [0.12, 0.24, 0.14] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-[32%] top-[58%] h-[1px] w-[23%] bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.0),rgba(34,211,238,0.22),rgba(236,72,153,0.18),transparent)]"
              animate={{ x: ["-4%", "8%", "-4%"], opacity: [0.05, 0.16, 0.05] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-[28%] top-[24%] h-[1px] w-[22%] bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.0),rgba(34,211,238,0.24),transparent)]"
              animate={{ x: ["-5%", "10%", "-5%"], opacity: [0.04, 0.14, 0.04] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-[52%] top-[27%] h-[1px] w-[20%] bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.0),rgba(236,72,153,0.2),transparent)]"
              animate={{ x: ["-6%", "8%", "-6%"], opacity: [0.04, 0.12, 0.04] }}
              transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
            />

            {[
              { left: "24%", top: "19%", color: "bg-amber-300", duration: 2.8, delay: 0 },
              { left: "68%", top: "22%", color: "bg-indigo-300", duration: 3.4, delay: 0.6 },
              { left: "33%", top: "70%", color: "bg-cyan-200", duration: 2.6, delay: 1.1 },
              { left: "52%", top: "49%", color: "bg-fuchsia-300", duration: 3.8, delay: 0.4 },
              { left: "66%", top: "66%", color: "bg-violet-300", duration: 3.1, delay: 1.4 },
            ].map((spark, idx) => (
              <motion.span
                key={`station-spark-${idx}`}
                className={`absolute h-1.5 w-1.5 rounded-full ${spark.color} shadow-[0_0_12px_rgba(255,255,255,0.28)]`}
                style={{ left: spark.left, top: spark.top }}
                animate={{ opacity: [0.18, 0.82, 0.2], scale: [0.8, 1.35, 0.9] }}
                transition={{ duration: spark.duration, delay: spark.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

          {sceneReady ? (
            <GravitasScene
              state={state}
              selectedModule={selectedModule}
              onSelectModule={handleSelectModule}
              lastCommand={lastCommand}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(168,85,247,0.14),transparent_34%),linear-gradient(180deg,#050816_0%,#071120_50%,#050816_100%)]">
              <div className="absolute inset-0 opacity-50">
                <div className="absolute left-1/2 top-[20%] h-20 w-20 -translate-x-1/2 rounded-full border border-cyan-300/25 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.12)]" />
                <div className="absolute left-[18%] top-[48%] h-12 w-12 rounded-full border border-amber-300/20 bg-amber-400/10" />
                <div className="absolute right-[18%] top-[48%] h-12 w-12 rounded-full border border-emerald-300/20 bg-emerald-400/10" />
                <div className="absolute left-[30%] bottom-[16%] h-12 w-12 rounded-full border border-violet-300/20 bg-violet-400/10" />
                <div className="absolute right-[30%] bottom-[16%] h-12 w-12 rounded-full border border-rose-300/20 bg-rose-400/10" />
              </div>
              <div className="absolute inset-x-0 bottom-4 flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white/45 backdrop-blur-sm">
                    {sceneDeferred ? "Scene paused" : "Loading scene"}
                  </div>
                  {sceneDeferred && (
                    <button
                      onClick={() => setSceneReady(true)}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/12 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-sm transition hover:bg-cyan-400/20"
                    >
                      Enable scene
                    </button>
                  )}
                </div>
              </div>
              {sceneDeferred && (
                <div className="absolute left-3 top-3 rounded-full border border-amber-300/25 bg-amber-400/12 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-amber-100 backdrop-blur-sm">
                  Test mode active
                </div>
              )}
            </div>
          )}

          <ModuleArtOverlay
            selectedModule={selectedModule}
            onSelectModule={handleSelectModule}
          />

          <AnimatePresence>
            {state.firstLoopComplete && !state.firstLoopShown && !showAwakening && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="fixed bottom-[100px] right-3 z-[70] w-[min(88vw,320px)] rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/12 backdrop-blur-md p-2.5 shadow-[0_0_24px_rgba(232,121,249,0.14)] lg:bottom-6"
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 text-fuchsia-100">
                    <Star size={12} fill="currentColor" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] font-black uppercase tracking-[0.24em] text-fuchsia-300">
                      {localize(content.ui.phaseShift)}
                    </div>
                    <div className="mt-1 text-[10px] leading-snug text-white/75">
                      {localize(content.victory.continuePlaying)}
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: "ACKNOWLEDGE_PHASE_SHIFT" })}
                    className="shrink-0 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 px-2 py-1 text-[8px] font-black uppercase tracking-widest text-fuchsia-100 hover:bg-fuchsia-400/25 transition"
                  >
                    OK
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {actionFeedback && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="pointer-events-none absolute left-3 top-4 z-[65] w-[min(72vw,340px)]"
              >
                <div className="relative px-1 py-1">
                  <motion.div
                    aria-hidden
                    className="absolute left-0 top-0 text-[8px] font-black uppercase tracking-[0.16em] text-cyan-300/80 mix-blend-screen"
                    initial={{ opacity: 0, x: -6, y: 0, filter: "blur(3px)" }}
                    animate={{ opacity: [0.85, 0.18, 0], x: [-6, 3, 0], y: [0, -1, 0], filter: ["blur(3px)", "blur(1px)", "blur(0px)"] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.34, ease: "easeOut" }}
                  >
                    {localize(actionFeedback)}
                  </motion.div>
                  <motion.div
                    aria-hidden
                    className="absolute left-0 top-0 text-[8px] font-black uppercase tracking-[0.16em] text-fuchsia-300/45 mix-blend-screen"
                    initial={{ opacity: 0, x: 5, y: 0, filter: "blur(2px)" }}
                    animate={{ opacity: [0.65, 0.12, 0], x: [5, -2, 0], y: [0, 1, 0], filter: ["blur(2px)", "blur(0.5px)", "blur(0px)"] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    {localize(actionFeedback)}
                  </motion.div>
                  <motion.div
                    className="relative text-[8px] font-black uppercase tracking-[0.16em] text-cyan-50 drop-shadow-[0_0_8px_rgba(34,211,238,0.28)]"
                    initial={{ opacity: 0, x: -1, filter: "blur(4px)", letterSpacing: "0.28em" }}
                    animate={{
                      opacity: [0.15, 0.45, 1, 1],
                      x: [-1, 1, 0, 0],
                      y: [0, -1, 0, 0],
                      filter: ["blur(4px)", "blur(1.5px)", "blur(0px)", "blur(0px)"],
                      letterSpacing: ["0.28em", "0.2em", "0.16em", "0.16em"],
                    }}
                    exit={{ opacity: [1, 0.4, 0], x: [0, 1, -2], filter: ["blur(0px)", "blur(1px)", "blur(4px)"] }}
                    transition={{ duration: 0.42, ease: "easeOut", times: [0, 0.35, 0.72, 1] }}
                  >
                    {localize(actionFeedback)}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay Status info */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <div className="flex items-center gap-2">
              {isLockdown && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-rose-600 text-white text-[9px] font-black animate-pulse">
                  LOCKDOWN
                </div>
              )}
              {state.crisis && !isLockdown && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[9px] font-black animate-pulse border border-rose-500/30">
                  CRISIS
                </div>
              )}
            </div>
          </div>

          <AnimatePresence>
            {moduleInfoOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ type: "spring", damping: 22, stiffness: 260 }}
                className="absolute left-3 top-14 z-[25] w-[min(54vw,228px)] rounded-[18px] border border-white/10 bg-[#091120]/82 p-2.5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => setModuleInfoOpen(false)}
                  className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={12} />
                </button>
                <div className="flex items-start justify-between gap-3 pr-8">
                  <div className="min-w-0">
                    <div className="text-[8px] font-black uppercase tracking-[0.22em] text-cyan-300/72">
                      {selectedModule === "core"
                        ? localize({ en: "Core Chamber", hu: "Magkamra", de: "Kernkammer", ro: "Camera nucleului" })
                        : localize({ en: "Selected Module", hu: "Kiválasztott modul", de: "Gewähltes Modul", ro: "Modul selectat" })}
                    </div>
                    <div className="mt-1 text-[13px] font-black leading-tight text-white sm:text-sm">
                      {localize(selectedModuleInfo.name)}
                    </div>
                  </div>
                  <div className="rounded-full border border-cyan-400/25 bg-cyan-400/12 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-cyan-100">
                    {selectedModule === "core" ? "CORE LVL 1" : "LVL 1"}
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className={`rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.14em] ${selectedModuleState.online ? "border-emerald-400/30 bg-emerald-400/12 text-emerald-200" : "border-white/10 bg-white/5 text-white/45"}`}>
                    {selectedModule === "core"
                      ? localize({ en: "Core ready", hu: "Mag készen", de: "Kern bereit", ro: "Nucleu pregătit" })
                      : selectedModuleState.online
                        ? localize(ui.online)
                        : localize(ui.offline)}
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.14em] text-white/65">
                    {localize({ en: "Tap node to inspect", hu: "Kopp a node-ra", de: "Node antippen", ro: "Atinge nodul" })}
                  </div>
                </div>
                <p className="mt-2 text-[10px] leading-snug text-white/72 sm:text-[11px]">
                  {localize(selectedModuleInfo.role)}
                </p>
                {(selectedModule === "sensor" || selectedModule === "reactor" || selectedModule === "core") && (
                  <button
                    type="button"
                    onClick={() => {
                      setInteriorView(selectedModule);
                      setModuleInfoOpen(false);
                    }}
                    className="mt-3 w-full rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-cyan-400/16"
                  >
                    {selectedModule === "sensor"
                      ? localize({ en: "Enter sensor", hu: "Belépés a szenzorba", de: "Sensor betreten", ro: "Intră în senzor" })
                      : selectedModule === "reactor"
                        ? localize({ en: "Enter reactor", hu: "Belépés a reaktorba", de: "Reaktor betreten", ro: "Intră în reactor" })
                        : localize({ en: "Enter core", hu: "Belépés a magba", de: "Kern betreten", ro: "Intră în nucleu" })}
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {interiorView === "galaxy" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit] bg-[linear-gradient(180deg,#06101c_0%,#081425_42%,#040914_100%)]"
              >
                <GalaxyInteriorView lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "sensor" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_50%_28%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_50%_64%,rgba(34,211,238,0.12),transparent_34%),linear-gradient(180deg,#06111d_0%,#081425_42%,#040914_100%)]"
              >
                <SensorInteriorView
                  onClose={() => setInteriorView(null)}
                />
              </motion.div>
            )}
            {interiorView === "reactor" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit] bg-[linear-gradient(180deg,#06101c_0%,#081425_42%,#040914_100%)]"
              >
                <ReactorInteriorView onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "core" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit] bg-[linear-gradient(180deg,#06101c_0%,#081425_42%,#040914_100%)]"
              >
                <CoreInteriorView onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute right-3 top-16 z-[32] flex flex-col gap-2">
            <MapMiniButton
              icon={<LayoutGrid size={14} />}
              active={activePanel === "modules"}
              onClick={() => setActivePanel(activePanel === "modules" ? null : "modules")}
            />
            <MapMiniButton
              icon={<ShieldHalf size={14} />}
              active={activePanel === "marks"}
              onClick={() => setActivePanel(activePanel === "marks" ? null : "marks")}
            />
          <MapMiniButton
            icon={<FileText size={14} />}
            active={activePanel === "journal"}
            onClick={() => setActivePanel(activePanel === "journal" ? null : "journal")}
          />
          <MapMiniButton
            icon={<Radar size={14} />}
            active={interiorView === "galaxy"}
            onClick={() => setInteriorView(interiorView === "galaxy" ? null : "galaxy")}
          />
          <MapMiniButton
            icon={<Layers size={14} />}
            active={quickActionsOpen}
            onClick={() => setQuickActionsOpen(true)}
            showDot={hiddenUrgentActions}
            />
          </div>

          {state.recoveryPriority && (
            <motion.button
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => {
                setSelectedModule(state.recoveryPriority!.moduleId);
                setActivePanel("modules");
              }}
              className="absolute left-3 top-16 z-[32] flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/12 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-amber-100 shadow-lg backdrop-blur-md"
            >
              <AlertTriangle size={12} />
              <span>{localize(state.modules[state.recoveryPriority.moduleId].name)}</span>
            </motion.button>
          )}

          {avatarImprintStageActive && state.avatarImprintActive && state.avatarProfile && (
            <div className="absolute inset-x-3 bottom-20 z-[32] sm:inset-x-auto sm:right-3 sm:w-[340px]">
              <GravitasImprint
                state={state}
                profile={state.avatarProfile}
                onBeginHold={beginImprintHold}
                onStopHold={stopImprintHold}
              />
            </div>
          )}

          <div className="absolute inset-x-3 bottom-3 z-[32] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2">
            <div className="mx-auto flex w-full max-w-[560px] items-center justify-center gap-2 rounded-[22px] border border-white/10 bg-black/42 px-2 py-2 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.32)]">
              {prioritizedMobileActions.map((action) => (
                <MiniActionButton
                  key={action.key}
                  icon={action.icon}
                  label={action.shortLabel}
                  onClick={() => {
                    setQuickActionsOpen(false);
                    action.onClick();
                  }}
                  disabled={action.disabled}
                  highlight={action.highlight}
                  tone={action.tone}
                />
              ))}
              {systemsAction && (
                <MiniActionButton
                  key="systems-mini"
                  icon={systemsAction.icon}
                  label={systemsAction.shortLabel}
                  onClick={systemsAction.onClick}
                  disabled={systemsAction.disabled}
                  highlight={systemsAction.highlight}
                  tone={systemsAction.tone}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Panels */}
      <AnimatePresence>
        {resourceHelpOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm p-4 flex items-end sm:items-center sm:justify-center"
            onClick={() => setResourceHelpOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#0b1224]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/75">
                    {localize({ en: "Resource Help", hu: "Erőforrás súgó", de: "Ressourcenhilfe", ro: "Ajutor resurse" })}
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    {localize(resourceHelp[resourceHelpOpen].title)}
                  </div>
                </div>
                <button
                  onClick={() => setResourceHelpOpen(null)}
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70"
                >
                  <X size={16} className="mx-auto" />
                </button>
              </div>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/82">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                    {localize({ en: "What it is", hu: "Mi ez", de: "Was es ist", ro: "Ce este" })}
                  </div>
                  <p className="mt-1">{localize(resourceHelp[resourceHelpOpen].body)}</p>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                    {localize({ en: "What it affects", hu: "Mire hat", de: "Worauf es wirkt", ro: "Ce influențează" })}
                  </div>
                  <p className="mt-1">{localize(resourceHelp[resourceHelpOpen].impact)}</p>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                    {localize({ en: "How to improve it", hu: "Hogyan javítható", de: "Wie man es verbessert", ro: "Cum se îmbunătățește" })}
                  </div>
                  <p className="mt-1">{localize(resourceHelp[resourceHelpOpen].fix)}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {avatarBaseOpen && state.avatarProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[91] bg-black/70 backdrop-blur-sm p-4 flex items-end sm:items-center sm:justify-center"
            onClick={() => setAvatarBaseOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[28px] border border-fuchsia-400/15 bg-[#0b1224]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-300/75">
                    {localize({ en: "Avatar base", hu: "Avatar alap", de: "Avatar-Basis", ro: "Bază avatar" })}
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    {localize(state.avatarProfile.title)}
                  </div>
                </div>
                <button
                  onClick={() => setAvatarBaseOpen(false)}
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70"
                >
                  <X size={16} className="mx-auto" />
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                  {localize({ en: "Developable imprint lines", hu: "Fejleszthető lenyomat ágak", de: "Entwickelbare Prägungslinien", ro: "Linii de amprentă dezvoltabilă" })}
                </div>
                <div className="mt-3 space-y-2">
                  {state.avatarProfile.answers.map((answer, idx) => (
                    <div
                      key={`${answer.questionId}-${answer.optionId}-${idx}`}
                      className="rounded-2xl border border-fuchsia-400/10 bg-black/20 px-3 py-2.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[9px] font-black uppercase tracking-[0.16em] text-fuchsia-200/70">
                            {localize({ en: "Imprint line", hu: "Lenyomat ág", de: "Prägungslinie", ro: "Linie de amprentă" })} {idx + 1}
                          </div>
                          <div className="mt-1 text-sm font-black text-white/90">
                            {localize(answer.label)}
                          </div>
                        </div>
                        <div className="shrink-0 rounded-full border border-cyan-400/15 bg-cyan-400/8 px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-cyan-100/80">
                          {localize({ en: "Locked", hu: "Zárolt", de: "Gesperrt", ro: "Blocat" })}
                        </div>
                      </div>
                      <div className="mt-2 text-[11px] leading-relaxed text-white/55">
                        {localize({
                          en: "This response will open a dedicated avatar growth branch later.",
                          hu: "Ez a válasz később egy külön avatar-fejlődési ágat nyit meg.",
                          de: "Diese Antwort wird später einen eigenen Avatar-Entwicklungszweig öffnen.",
                          ro: "Acest răspuns va deschide mai târziu o ramură dedicată de evoluție a avatarului.",
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/6 px-3 py-2.5">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200/80">
                  {localize({ en: "Status", hu: "Állapot", de: "Status", ro: "Stare" })}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-white/75">
                  {localize({
                    en: "These imprint choices define the avatar base. Each chosen line will become a separate development path.",
                    hu: "Ezek a lenyomat-válaszok adják az avatar alapját. Minden kiválasztott ág külön fejlesztési úttá válik majd.",
                    de: "Diese Prägungsantworten bilden die Avatar-Basis. Jede gewählte Linie wird später ein eigener Entwicklungspfad.",
                    ro: "Aceste răspunsuri definesc baza avatarului. Fiecare linie aleasă va deveni ulterior o cale separată de dezvoltare.",
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {quickActionsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm p-4 pt-24 lg:hidden"
            onClick={() => setQuickActionsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto flex h-full w-full max-w-xl flex-col rounded-[28px] border border-white/10 bg-[#0b1224]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/5 p-5">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/75">
                    {localize({ en: "Command Deck", hu: "Parancspult", de: "Befehlsdeck", ro: "Punte de comandă" })}
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    {localize({ en: "All Quick Commands", hu: "Összes gyors parancs", de: "Alle Schnellbefehle", ro: "Toate comenzile rapide" })}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setQuickActionsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 pb-[calc(6rem+env(safe-area-inset-bottom))]">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {quickActions.map((action) => (
                    <MainAction
                      key={`sheet-${action.key}`}
                      label={action.label}
                      shortLabel={action.shortLabel}
                      icon={action.icon}
                      onClick={() => {
                        setQuickActionsOpen(false);
                        action.onClick();
                      }}
                      disabled={action.disabled}
                      highlight={action.highlight}
                      emphasis={action.emphasis}
                      tone={action.tone}
                      expanded
                    />
                  ))}
                  {systemsAction && (
                    <MainAction
                      key="sheet-systems"
                      label={systemsAction.label}
                      shortLabel={systemsAction.shortLabel}
                      icon={systemsAction.icon}
                      onClick={() => {
                        setQuickActionsOpen(false);
                        systemsAction.onClick();
                      }}
                      disabled={systemsAction.disabled}
                      highlight={systemsAction.highlight}
                      emphasis={systemsAction.emphasis}
                      tone={systemsAction.tone}
                      expanded
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {activePanel && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-20 z-[60] bg-[#0a0f1e]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-[32px] flex flex-col max-h-[85vh] lg:max-h-none"
          >
            <div className="sticky top-0 z-10 bg-[#0a0f1e]/80 backdrop-blur-md flex items-center justify-between p-6 border-b border-white/5 rounded-t-[32px]">
              <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                {activePanel === "modules" && <><LayoutGrid size={20} className="text-cyan-400" /> {localize(ui.modules)}</>}
                {activePanel === "marks" && <><ShieldHalf size={20} className="text-rose-400" /> {localize(ui.marks)}</>}
                {activePanel === "journal" && <><FileText size={20} className="text-amber-400" /> {localize(ui.journal)}</>}
              </h2>
              <button onClick={() => setActivePanel(null)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pb-32">
              {activePanel === "modules" && (
                <div className="space-y-6">
                  {/* Synergies */}
                  {(mods.sensorBoost || mods.coreShield || mods.fullGrid) && (
                    <div className="space-y-2">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Synergies</h3>
                      <div className="flex flex-wrap gap-2">
                        {mods.sensorBoost && (
                          <Badge color="bg-emerald-500/20 text-emerald-400" label={{en: "⚡ Reactor + Sensor synergy: +2 stability/tick", hu: "⚡ Reaktor + Szenzor szinergia: +2 stabilitás/tick", de: "⚡ Reaktor + Sensor Synergie: +2 Stabilität/Tick", ro: "⚡ Sinergie Reactor + Senzor: +2 stabilitate/tic"}} lang={lang} />
                        )}
                        {mods.coreShield && (
                          <Badge color="bg-blue-500/20 text-blue-400" label={{en: "🛡 Logistics + Core synergy: core protected", hu: "🛡 Logisztika + Mag szinergia: mag védve", de: "🛡 Logistik + Kern Synergie: Kern geschützt", ro: "🛡 Sinergie Logistică + Nucleu: nucleu protejat"}} lang={lang} />
                        )}
                        {mods.fullGrid && (
                          <Badge color="bg-amber-500/20 text-amber-400" label={{en: "✨ Full Grid: +2 power, 2× mark decay", hu: "✨ Teljes hálózat: +2 energia, 2× mark fogyás", de: "✨ Volles Netz: +2 Energie, 2× Mark-Abbau", ro: "✨ Rețea completă: +2 energie, 2× degradare marcaje"}} lang={lang} />
                        )}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    {Object.values(state.modules).map((m) => {
                      const Icon = moduleIcon(m.id);
                      const isSelected = m.id === selectedModule;
                      const integrityColor = m.integrity > 60 ? "bg-emerald-500" : m.integrity > 30 ? "bg-amber-500" : "bg-rose-500";
                      
                      return (
                        <button
                          key={m.id}
                          onClick={() => setSelectedModule(m.id)}
                          className={`relative p-4 rounded-2xl border text-left transition overflow-hidden ${isSelected ? "border-cyan-400 bg-cyan-400/10" : "border-white/10 bg-white/5"} ${m.load >= 90 ? "animate-pulse ring-2 ring-rose-500 ring-inset" : ""} ${!m.online ? "opacity-60" : ""}`}
                        >
                          {!m.online && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <span className="text-[8px] font-black text-white/10 rotate-12 tracking-[0.5em] scale-150">OFFLINE</span>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mb-2">
                            <Icon size={16} className={isSelected ? "text-cyan-400" : "text-white/40"} />
                            <div className="flex items-center gap-2">
                              <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-white/65">LVL 1</div>
                              <div className="text-[10px] font-black">{m.integrity}%</div>
                            </div>
                          </div>
                          
                          <div className="text-xs font-black truncate mb-2">{localize(m.name)}</div>
                          
                          {/* Mini Bars */}
                          <div className="space-y-1">
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className={`h-full ${integrityColor} transition-all duration-500`} style={{ width: `${m.integrity}%` }} />
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-rose-500 transition-all duration-500" style={{ width: `${m.load}%` }} />
                            </div>
                          </div>

                          {m.load >= 90 && (
                            <div className="mt-2 text-[8px] font-black text-rose-500 uppercase">
                              {localize({ en: "OVERLOADED", hu: "TÚLTERHELT", de: "ÜBERLASTET", ro: "SUPRAÎNCĂRCAT" })}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {Object.values(state.modules).every(m => m.integrity >= 100) && (
                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-widest text-center">
                      {localize(ui.allSystemsNominal)}
                    </div>
                  )}

                  <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="text-lg font-black">{localize(state.modules[selectedModule].name)}</div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100">LVL 1</div>
                        <div className={`px-2 py-0.5 rounded text-[10px] font-black ${state.modules[selectedModule].online ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-white/40"}`}>
                          {state.modules[selectedModule].online ? localize(ui.online) : localize(ui.offline)}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 mb-4">{localize(content.modules[selectedModule].role)}</p>

                    <div className="space-y-3">
                      {moduleActions.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => { doAction(action.command, "rgba(34,211,238,0.4)"); if (!action.command.type.includes("EVENT")) setActivePanel(null); }}
                          disabled={action.disabled}
                          className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition active:scale-[0.98] active:brightness-125 ${action.disabled ? "opacity-30 grayscale cursor-not-allowed" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
                        >
                          <div>
                            <div className="text-sm font-black">{localize(action.label)}</div>
                            <div className="text-[11px] text-white/40">{localize(action.hint)}</div>
                          </div>
                          <Zap size={14} className={action.emphasis === "primary" ? "text-pink-400 animate-pulse" : "text-white/20"} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activePanel === "marks" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    <MarkBox label={localize(ui.reactorScar)} value={state.marks.reactorScar} color="rose" />
                    <MarkBox label={localize(ui.shellStrain)} value={state.marks.shellStrain} color="pink" />
                    <MarkBox label={localize(ui.supplyStress)} value={state.marks.supplyStress} color="amber" />
                    <MarkBox label={localize(ui.voidEcho)} value={state.marks.voidEcho} color="indigo" />
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-black uppercase tracking-widest text-white/40">{localize(ui.entropy)}</div>
                      <div className="text-xs font-black">{state.entropy}%</div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${state.entropy > 70 ? "bg-rose-500" : state.entropy > 40 ? "bg-amber-500" : "bg-cyan-500"}`}
                        style={{ width: `${state.entropy}%` }}
                      />
                    </div>
                  </div>

                  {state.anomalies.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-rose-400">{localize(ui.anomalies)}</div>
                      {state.anomalies.map(a => (
                        <div key={a.id} className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-center justify-between">
                          <div>
                            <div className="text-sm font-black">{localize(a.name)}</div>
                            <div className="text-[10px] text-rose-300/60 uppercase">Severity: {a.severity}</div>
                          </div>
                          {a.duration !== undefined && <div className="text-xs font-black">{a.duration}T</div>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activePanel === "journal" && (
                <div className="space-y-4">
                  {state.alert && (
                    <div className="p-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-100 text-sm font-medium flex items-center gap-3">
                      <Terminal size={16} className="text-cyan-400 shrink-0" />
                      {localize(state.alert)}
                    </div>
                  )}
                  <div className="space-y-3">
                    {state.journal.map((line, idx) => (
                      <div key={idx} className="p-3 rounded-xl border border-white/5 bg-white/[0.03] text-sm text-white/80 border-l-2 border-l-white/15 flex gap-3">
                        <span className="font-black text-white/45 uppercase shrink-0 mt-0.5 text-[10px]">T{line.tick}</span>
                        <span>{localize(line.text)}</span>
                      </div>
                    ))}
                    {state.journal.length === 0 && (
                      <div className="p-12 text-center text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">
                        {localize(ui.awaitingLog)}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Modal */}
      <AnimatePresence>
        {state.pendingEvent && (
          (() => {
            const isAvatarPrep = state.pendingEvent?.id === "avatarPreparation";
            return (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="pointer-events-none fixed inset-x-0 bottom-[104px] z-[100] px-3 lg:inset-x-auto lg:bottom-6 lg:right-6 lg:px-0"
          >
            <div className={`pointer-events-auto mx-auto w-full max-w-md rounded-[26px] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:mx-0 lg:w-[380px] ${isAvatarPrep ? "border border-fuchsia-400/30 bg-[#130815]/96" : "border border-amber-400/30 bg-[#151005]/96"}`}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${isAvatarPrep ? "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300" : "border-amber-400/20 bg-amber-400/10 text-amber-400"}`}>
                  {isAvatarPrep
                    ? localize({ en: "Avatar preparation", hu: "Avatar-előkészítés", de: "Avatar-Vorbereitung", ro: "Pregătire avatar" })
                    : "Anomaly Detected"}
                </div>
                {state.pendingEvent.chainStep && state.pendingEvent.id !== "waveRecovery" && (
                  <div className="text-[10px] font-black text-white/40">STEP {state.pendingEvent.chainStep}/{state.pendingEvent.chainTotal}</div>
                )}
              </div>
              <h2 className="mb-2 text-lg font-black leading-tight text-white lg:text-xl">{localize(state.pendingEvent.title)}</h2>
              <p className={`mb-4 text-sm leading-relaxed lg:text-[15px] ${isAvatarPrep ? "text-fuchsia-100/72" : "text-white/72"}`}>{localize(state.pendingEvent.body)}</p>
              <div className="grid gap-3">
                {state.pendingEvent.options.map((opt, idx) => (
                  <button
                    key={`${state.pendingEvent?.id ?? "event"}-${state.pendingEvent?.chainStep ?? 0}-${opt.id}-${idx}`}
                    onClick={() => doAction({ type: "RESOLVE_EVENT", optionId: opt.id }, "rgba(251,191,36,0.35)")}
                    className={`w-full rounded-2xl border p-4 text-left transition active:scale-[0.98] ${isAvatarPrep ? "border-fuchsia-400/15 bg-white/5 hover:bg-white/10" : idx === 0 ? "border-amber-400 bg-amber-400/10 hover:bg-amber-400/20" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
                  >
                    <div className={`mb-1 text-[9px] font-black uppercase tracking-[0.2em] ${isAvatarPrep ? "text-fuchsia-300" : idx === 0 ? "text-amber-400" : "text-white/40"}`}>
                      {isAvatarPrep ? localize({ en: "Trait option", hu: "Tulajdonság opció", de: "Eigenschaftsoption", ro: "Opțiune de trăsătură" }) : idx === 0 ? "Priority Protocol" : "Alternative Route"}
                    </div>
                    <div className="text-sm font-black leading-snug text-white">{localize(opt.label)}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
            );
          })()
        )}
      </AnimatePresence>

      {/* Station Lost Overlay */}
      <AnimatePresence>
        {showGameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-md space-y-8"
            >
              <div className="w-24 h-24 rounded-full border-2 border-rose-500/30 flex items-center justify-center mx-auto">
                <ShieldAlert size={48} className="text-rose-500 animate-pulse" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tighter text-rose-500 uppercase">
                  {localize(content.victory.stationLostTitle)}
                </h2>
                <p className="text-white/60 leading-relaxed italic">
                  "{localize(content.victory.stationLostBody)}"
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                <StatItem label="Ticks" value={state.tick} />
                <StatItem label="Chapter" value={state.chapter === "demo" ? "I" : "II"} />
                <StatItem label="Threats" value={state.threatCycle} />
                <StatItem label="Awakened" value={state.avatarAwake ? "YES" : "NO"} />
                <StatItem label="Stars" value={state.progression.stars} />
              </div>

              <button
                onClick={() => {
                  restartGravitasChapter(state.chapter);
                }}
                className="w-full py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl"
              >
                {localize(content.victory.tryAgain)}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

function StatItem({ label, value }: { label: string; value: string | number }) {
  const displayValue = typeof value === "number" ? formatCompactStarholdValue(value) : value;
  return (
    <div className="text-left">
      <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{label}</div>
      <div className="text-xl font-black text-white">{displayValue}</div>
    </div>
  );
}

// Helper Components
function HUDChip({ icon, value, color, onClick }: { icon: React.ReactNode; value: number; color: string; onClick?: () => void }) {
  const prevValueRef = useRef(value);
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      setDiff(value - prevValueRef.current);
      prevValueRef.current = value;
      const t = setTimeout(() => setDiff(null), 1000);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={diff !== null ? { scale: [1, 1.08, 1] } : { scale: 1 }}
      transition={{ duration: 0.35 }}
      className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border font-black text-xs shrink-0 transition-all ${
        diff !== null ? "border-white/15 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "border-white/5 bg-white/5"
      } ${color} ${onClick ? "cursor-pointer hover:bg-white/10" : ""}`}
    >
      {icon}
      <motion.span
        key={value}
        initial={{ y: diff ? (diff > 0 ? 5 : -5) : 0, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-block"
      >
        {formatCompactStarholdValue(value)}
      </motion.span>
      <AnimatePresence>
        {diff !== null && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: diff > 0 ? -20 : 20 }}
            exit={{ opacity: 0 }}
            className={`absolute left-1/2 -translate-x-1/2 text-[10px] font-black ${diff > 0 ? "text-emerald-400" : "text-rose-500"}`}
          >
            {diff > 0 ? `+${diff}` : diff}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function AvatarBaseChip({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-fuchsia-400/15 bg-fuchsia-400/8 text-fuchsia-100 transition-all hover:bg-fuchsia-400/12"
    >
      {icon}
    </button>
  );
}

function SensorInteriorView({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gravitas/sensor-interior-v2.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.08),transparent_26%),linear-gradient(180deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.42)_100%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4 p-4">
        <div />
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-4">
        <div className="relative h-full overflow-hidden rounded-[28px] border border-cyan-400/15 bg-black/10 p-4 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}

function ReactorInteriorView({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gravitas/reactor-interior.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(251,146,60,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.34)_100%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-4">
        <div className="relative h-full overflow-hidden rounded-[28px] border border-amber-400/15 bg-black/10 p-4 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}

function CoreInteriorView({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gravitas/core-interior.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(217,70,239,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.34)_100%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-4">
        <div className="relative h-full overflow-hidden rounded-[28px] border border-fuchsia-400/15 bg-black/10 p-4 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/5 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}

function GalaxyNodeCard({
  lang,
  node,
  travelInfo,
  activeMission,
  onDispatchDrone,
  onRecallDrone,
  onClose,
}: {
  lang: Lang;
  node: GalaxyNode;
  travelInfo?: {
    distanceUnits: number;
    durationMinutes: number;
  } | null;
  activeMission?: {
    status: "traveling" | "mining" | "returning";
    remainingMinutes: number;
    elapsedMiningRatio: number;
    gatheredUnits: number;
    targetYieldUnits: number;
  } | null;
  onDispatchDrone?: (() => void) | null;
  onRecallDrone?: (() => void) | null;
  onClose: () => void;
}) {
  const localize = (ls: LocalizedString) => ls[lang] ?? ls.en;
  const toneClass = (tone?: GalaxyNode["details"][number]["tone"]) => {
    if (tone === "cyan") return "text-cyan-100";
    if (tone === "amber") return "text-amber-200";
    if (tone === "emerald") return "text-emerald-200";
    return "text-white";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ type: "spring", damping: 24, stiffness: 260 }}
      className="absolute z-20 w-[250px] max-w-[calc(100vw-2rem)] rounded-[20px] border border-cyan-300/18 bg-[#081120]/94 p-3 text-white shadow-[0_20px_56px_rgba(0,0,0,0.42)] backdrop-blur-md"
      style={getGalaxyCardStyle(node, GALAXY_WORLD_SIZE)}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <X size={12} />
      </button>

      <div className="pr-8">
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-200/72">
          {localize({
            en: node.type === "resource" ? "Mining Node" : node.type === "battle" ? "Combat Site" : node.type === "base" ? "Home Base" : "Galaxy Node",
            hu: node.type === "resource" ? "Bányászati pont" : node.type === "battle" ? "Harci pont" : node.type === "base" ? "Otthoni bázis" : "Galaxis pont",
            de: node.type === "resource" ? "Abbauknoten" : node.type === "battle" ? "Kampfpunkt" : node.type === "base" ? "Heimatbasis" : "Galaxie-Knoten",
            ro: node.type === "resource" ? "Nod de minerit" : node.type === "battle" ? "Punct de luptă" : node.type === "base" ? "Bază principală" : "Nod galactic",
          })}
        </div>
        <div className="mt-1 text-[15px] font-black leading-tight text-white">{localize(node.title)}</div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-white/68">{localize(node.description)}</p>
      </div>

      {travelInfo && (
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <div className="rounded-2xl border border-cyan-300/16 bg-cyan-300/8 p-2.5">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/42">
              {localize({ en: "Distance", hu: "Távolság", de: "Distanz", ro: "Distanță" })}
            </div>
            <div className="mt-1 text-[12px] font-black leading-tight text-cyan-100">
              {travelInfo.distanceUnits}u
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-300/16 bg-emerald-300/8 p-2.5">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/42">
              {localize({ en: "Drone ETA", hu: "Drón ETA", de: "Drohnen-ETA", ro: "ETA dronă" })}
            </div>
            <div className="mt-1 text-[12px] font-black leading-tight text-emerald-100">
              {formatDurationMinutes(travelInfo.durationMinutes)}
            </div>
          </div>
        </div>
      )}

      {activeMission && (
        <div className="mt-3 rounded-[18px] border border-cyan-300/18 bg-cyan-300/8 p-2.5">
          <div className="flex items-center justify-between gap-3">
            <div className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-100/72">
              {localize({
                en: activeMission.status === "traveling" ? "Drone en route" : activeMission.status === "returning" ? "Drone returning" : "Drone mining",
                hu: activeMission.status === "traveling" ? "Drón úton" : activeMission.status === "returning" ? "Drón hazatér" : "Drón bányászik",
                de: activeMission.status === "traveling" ? "Drohne unterwegs" : activeMission.status === "returning" ? "Drohne kehrt zurück" : "Drohne baut ab",
                ro: activeMission.status === "traveling" ? "Dronă în drum" : activeMission.status === "returning" ? "Dronă se întoarce" : "Dronă extrage",
              })}
            </div>
            <div className="text-[11px] font-black text-white">
              {formatDurationMinutes(activeMission.remainingMinutes)}
            </div>
          </div>
          {activeMission.status !== "traveling" && (
            <>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.9),rgba(16,185,129,0.9))]"
                  style={{ width: `${Math.max(4, Math.min(100, activeMission.elapsedMiningRatio * 100))}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-[10px] font-black">
                <span className="text-white/58">
                  {localize({ en: "Gathered", hu: "Begyűjtve", de: "Gesammelt", ro: "Colectat" })}
                </span>
                <span className="text-emerald-100">
                  {activeMission.gatheredUnits} / {activeMission.targetYieldUnits}
                </span>
              </div>
            </>
          )}
        </div>
      )}

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {node.details.map((detail) => (
          <div key={detail.id} className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/42">
              {localize(detail.label)}
            </div>
            <div className={`mt-1 text-[12px] font-black leading-tight ${toneClass(detail.tone)}`}>
              {typeof detail.value === "object" ? localize(detail.value) : detail.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 rounded-2xl border border-amber-300/16 bg-amber-300/8 px-2.5 py-2 text-[10px] leading-relaxed text-white/72">
        {localize(node.footer)}
      </div>

      {onDispatchDrone && node.type === "resource" && !activeMission && (
        <button
          type="button"
          onClick={onDispatchDrone}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-300/10 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-50 transition hover:bg-cyan-300/16"
        >
          <Rocket size={13} />
          <span>
            {localize({ en: "Dispatch drone", hu: "Drón indítása", de: "Drohne senden", ro: "Trimite drona" })}
          </span>
        </button>
      )}

      {onRecallDrone && activeMission && node.type === "resource" && activeMission.status !== "returning" && (
        <button
          type="button"
          onClick={onRecallDrone}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-300/24 bg-rose-300/10 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-rose-50 transition hover:bg-rose-300/16"
        >
          <RotateCcw size={13} />
          <span>
            {localize({ en: "Recall drone", hu: "Drón visszahívása", de: "Drohne zurückrufen", ro: "Rechemă drona" })}
          </span>
        </button>
      )}
    </motion.div>
  );
}

function GalaxyInteriorView({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const localize = (ls: LocalizedString) => ls[lang] ?? ls.en;
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [activeMission, setActiveMission] = useState<DroneMissionState | null>(() => loadSavedDroneMission());
  const [missionClock, setMissionClock] = useState(() => Date.now());
  const [focusedDroneNodeId, setFocusedDroneNodeId] = useState<string | null>(null);
  const [galaxyInventory, setGalaxyInventory] = useState<GalaxyInventory>(loadSavedGalaxyInventory);
  useEffect(() => { saveGalaxyInventory(galaxyInventory); }, [galaxyInventory]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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
  const activeMissionTravelProgress = useMemo(() => {
    if (!activeMission || !activeMissionTarget || missionClock >= activeMission.arrivalAt) return null;
    const totalMs = Math.max(1, activeMission.arrivalAt - activeMission.startedAt);
    const elapsedMs = Math.max(0, missionClock - activeMission.startedAt);
    const progress = Math.min(1, elapsedMs / totalMs);
    return {
      x: playerBaseNode.position.x + (activeMissionTarget.position.x - playerBaseNode.position.x) * progress,
      y: playerBaseNode.position.y + (activeMissionTarget.position.y - playerBaseNode.position.y) * progress,
    };
  }, [activeMission, activeMissionTarget, missionClock, playerBaseNode.position.x, playerBaseNode.position.y]);
  const activeMissionStatus = useMemo(() => {
    if (!activeMission) return null;
    if (missionClock < activeMission.arrivalAt) {
      const remainingMinutes = Math.max(1, Math.ceil((activeMission.arrivalAt - missionClock) / 60000));
      return {
        status: "traveling" as const,
        remainingMinutes,
        elapsedMiningRatio: 0,
        gatheredUnits: 0,
        targetYieldUnits: activeMission.targetYieldUnits,
      };
    }

    if (activeMission.phase === "returning" && activeMission.returnCompleteAt) {
      const remainingMinutes = Math.max(1, Math.ceil((activeMission.returnCompleteAt - missionClock) / 60000));
      const returnTotalMs = Math.max(1, activeMission.returnCompleteAt - (activeMission.returnStartedAt ?? missionClock));
      const returnElapsedMs = Math.max(0, missionClock - (activeMission.returnStartedAt ?? missionClock));
      const elapsedMiningRatio = Math.min(1, returnElapsedMs / returnTotalMs);
      return {
        status: "returning" as const,
        remainingMinutes,
        elapsedMiningRatio,
        gatheredUnits: activeMission.committedUnits ?? 0,
        targetYieldUnits: activeMission.targetYieldUnits,
      };
    }

    const remainingMinutes = Math.max(0, Math.ceil((activeMission.miningCompleteAt - missionClock) / 60000));
    const miningElapsedMs = Math.max(0, missionClock - activeMission.arrivalAt);
    const miningTotalMs = Math.max(1, activeMission.miningCompleteAt - activeMission.arrivalAt);
    const elapsedMiningRatio = Math.min(1, miningElapsedMs / miningTotalMs);
    return {
      status: "mining" as const,
      remainingMinutes,
      elapsedMiningRatio,
      gatheredUnits: Math.min(activeMission.targetYieldUnits, Math.floor(activeMission.targetYieldUnits * elapsedMiningRatio)),
      targetYieldUnits: activeMission.targetYieldUnits,
    };
  }, [activeMission, missionClock]);
  const selectedNodeMission = selectedNode && activeMission && activeMission.targetNodeId === selectedNode.id ? activeMissionStatus : null;

  useEffect(() => {
    if (!activeMission) return undefined;
    const interval = window.setInterval(() => {
      setMissionClock(Date.now());
    }, 1000);
    return () => window.clearInterval(interval);
  }, [activeMission]);

  useEffect(() => {
    saveSavedDroneMission(activeMission);
  }, [activeMission]);

  useEffect(() => {
    if (!activeMission) return;
    if (activeMission.phase === "traveling" && missionClock >= activeMission.arrivalAt) {
      setActiveMission((current) => (current ? { ...current, phase: "mining" } : current));
      return;
    }
    if (activeMission.phase === "mining" && missionClock >= activeMission.miningCompleteAt) {
      setGalaxyInventory((current) => addGalaxyInventoryMaterial(current, activeMission.materialId, activeMission.targetYieldUnits));
      setActiveMission(null);
      setFocusedDroneNodeId(null);
      return;
    }
    if (activeMission.phase === "returning" && activeMission.returnCompleteAt && missionClock >= activeMission.returnCompleteAt) {
      setActiveMission(null);
      setFocusedDroneNodeId(null);
    }
  }, [activeMission, missionClock]);

  useEffect(() => {
    if (focusedDroneNodeId && (!activeMission || activeMission.targetNodeId !== focusedDroneNodeId)) {
      setFocusedDroneNodeId(null);
    }
  }, [activeMission, focusedDroneNodeId]);

  useEffect(() => {
    if (!placementReport.valid) {
      console.warn("[gravitas/galaxy] invalid node placement", placementReport.issues);
    }
  }, [placementReport]);

  useEffect(() => {
    if (activeMissionStatus?.status === "mining" && activeMission) {
      saveGalaxyLivePreview({
        materialId: activeMission.materialId,
        amount: activeMissionStatus.gatheredUnits,
      });
      return;
    }
    saveGalaxyLivePreview(null);
  }, [activeMission, activeMissionStatus?.gatheredUnits, activeMissionStatus?.status]);

  const dispatchDrone = useCallback((targetNode: GalaxyNode) => {
    if (targetNode.type !== "resource" || activeMission) return;
    const travelDurationMinutes = getGalaxyTravelDurationMinutes(playerBaseNode.position, targetNode.position, "drone");
    const miningDurationMinutes = targetNode.mining?.baseDurationMinutes ?? 60;
    const targetYieldUnits = targetNode.mining?.baseUnitsPerRun ?? 48;
    const startedAt = Date.now();
    const arrivalAt = startedAt + travelDurationMinutes * 60_000;
    const miningCompleteAt = arrivalAt + miningDurationMinutes * 60_000;

    setMissionClock(startedAt);
    setActiveMission({
      id: `mission-${targetNode.id}-${startedAt}`,
      targetNodeId: targetNode.id,
      materialId: targetNode.materialId as GalaxyMaterialId,
      phase: "traveling",
      startedAt,
      arrivalAt,
      miningCompleteAt,
      travelDurationMinutes,
      miningDurationMinutes,
      targetYieldUnits,
    });
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

    if (committedUnits > 0) {
      setGalaxyInventory((current) => addGalaxyInventoryMaterial(current, activeMission.materialId, committedUnits));
    }

    setMissionClock(now);
    setActiveMission({
      ...activeMission,
      phase: "returning",
      committedUnits: (activeMission.committedUnits ?? 0) + committedUnits,
      returnStartedAt,
      returnCompleteAt,
      returnStartPosition: currentPosition,
    });
  }, [activeMission, activeMissionTarget, playerBaseNode.position]);

  const activeMissionMarkerPosition = useMemo(() => {
    if (!activeMission || !activeMissionTarget) return null;
    return getDroneMissionCurrentPosition(activeMission, activeMissionTarget.position, playerBaseNode.position, missionClock);
  }, [activeMission, activeMissionTarget, missionClock, playerBaseNode.position]);

  const activeMissionRouteLine = useMemo(() => {
    if (!activeMission || !activeMissionTarget) return null;
    if (activeMission.phase === "traveling") {
      return {
        from: playerBaseNode.position,
        to: activeMissionTarget.position,
      };
    }
    if (activeMission.phase === "returning") {
      return {
        from: activeMissionMarkerPosition ?? activeMission.returnStartPosition ?? activeMissionTarget.position,
        to: playerBaseNode.position,
      };
    }
    return null;
  }, [activeMission, activeMissionMarkerPosition, activeMissionTarget, playerBaseNode.position]);

  const focusBase = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const left = Math.max(0, playerBaseNode.position.x - container.clientWidth / 2);
    const top = Math.max(0, playerBaseNode.position.y - container.clientHeight / 2);
    container.scrollTo({ left, top, behavior: "smooth" });
    setSelectedNodeId(playerBaseNode.id);
  }, [playerBaseNode.id, playerBaseNode.position]);

  const isFocusedMissionVisible = Boolean(
    activeMission &&
    activeMissionTarget &&
    focusedDroneNodeId === activeMission.targetNodeId
  );

  return (
    <div className="relative h-full w-full overflow-hidden">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/75 transition hover:bg-white/15 hover:text-white"
      >
        <X size={16} />
      </button>

      <div
        className="absolute inset-0 overflow-auto"
        ref={scrollContainerRef}
        style={{
          backgroundImage: "url('/gravitas/galaxy/deep-space-tile.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "460px 460px",
        }}
      >
        <div
          className="relative overflow-hidden"
          style={getGalaxyWorldCanvasStyle(GALAXY_WORLD_SIZE)}
        >
          <div className="absolute left-4 top-4 z-[18] w-[260px] rounded-[20px] border border-cyan-300/14 bg-[#081120]/78 p-3 text-white shadow-[0_18px_42px_rgba(0,0,0,0.26)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="relative h-11 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                <div className="absolute inset-y-[8px] left-[6px] w-[16px] rounded-full border border-white/10 bg-white/5" />
                <motion.div
                  className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-300/18 shadow-[0_0_16px_rgba(34,211,238,0.28)]"
                  animate={activeMissionStatus ? { x: [8, 38, 46], opacity: [0.8, 1, 0.85] } : { x: 8, opacity: 0.72 }}
                  transition={activeMissionStatus ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
                >
                  <div className="absolute inset-[5px] rounded-full bg-cyan-100" />
                </motion.div>
              </div>
            </div>
            <div className="mt-2 text-[10px] leading-relaxed text-white/64">
              {activeMissionTarget
                ? localize({
                    en: `Locked route to ${localize(activeMissionTarget.title)}.`,
                    hu: `Rögzített útvonal ide: ${localize(activeMissionTarget.title)}.`,
                    de: `Fixierte Route zu ${localize(activeMissionTarget.title)}.`,
                    ro: `Rută blocată către ${localize(activeMissionTarget.title)}.`,
                  })
                : localize({
                    en: "Select a meteor and dispatch the drone. Travel and mining timers run live from the base.",
                    hu: "Válassz meteort és indítsd a drónt. Az utazás és a bányászat ideje élőben fut a bázistól.",
                    de: "Wähle einen Meteor und sende die Drohne. Reise- und Abbauzeit laufen live von der Basis aus.",
                  ro: "Alege un meteorit și trimite drona. Timpul de deplasare și minerit rulează live de la bază.",
                  })}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={focusBase}
                className="flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-50 transition hover:bg-cyan-300/16"
              >
                <Home size={12} />
                {localize({ en: "Go to base", hu: "Bázisra", de: "Zur Basis", ro: "La bază" })}
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.08),transparent_20%),radial-gradient(circle_at_76%_24%,rgba(168,85,247,0.08),transparent_18%),radial-gradient(circle_at_52%_68%,rgba(15,23,42,0.38),transparent_36%)]" />

          {GALAXY_DECOR_LAYERS.map((layer) => (
            <img
              key={layer.id}
              src={layer.src}
              alt=""
              draggable={false}
              className={layer.className}
            />
          ))}

          {galaxyNodes.map((node) => (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => setSelectedNodeId(node.id)}
              className="absolute z-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              style={getGalaxyNodeAnchorStyle(node.position, GALAXY_WORLD_SIZE)}
              animate={node.motion as any}
              transition={{
                duration: node.motionDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                animate={{
                  scale: [0.92, 1.08, 0.92],
                  opacity: [0.08, 0.2, 0.08],
                }}
                transition={{
                  duration: 4.6 + (node.motionDuration % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[146px] w-[146px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_36%,transparent_70%)] blur-xl"
                animate={{
                  scale: [0.96, 1.06, 0.98],
                  opacity: [0.14, 0.26, 0.14],
                }}
                transition={{
                  duration: 5.4 + (node.motionDuration % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-white/80 blur-[0.5px]"
                animate={{
                  opacity: [0.08, 0.6, 0.08],
                  scale: [0.8, 1.25, 0.8],
                }}
                transition={{
                  duration: 3.2 + (node.motionDuration % 2),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute right-[14%] top-[26%] h-1.5 w-1.5 rounded-full bg-cyan-200/80 blur-[0.5px]"
                animate={{
                  opacity: [0.06, 0.42, 0.06],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4.2 + (node.motionDuration % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-[20%] bottom-[18%] h-3.5 w-3.5 rounded-full border border-white/10 bg-white/5"
                animate={{
                  x: [0, -3, 1, 0],
                  y: [0, 2, -2, 0],
                  opacity: [0.14, 0.3, 0.16, 0.14],
                }}
                transition={{
                  duration: 6 + (node.motionDuration % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute right-[18%] bottom-[12%] h-2.5 w-2.5 rounded-full border border-white/10 bg-white/5"
                animate={{
                  x: [0, 2, -2, 0],
                  y: [0, -2, 2, 0],
                  opacity: [0.12, 0.24, 0.12],
                }}
                transition={{
                  duration: 5.2 + (node.motionDuration % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {node.pulseClassName && <span className={node.pulseClassName} />}
              <img
                src={node.assetSrc}
                alt={localize(node.assetAlt ?? node.title)}
                draggable={false}
                className={node.assetClassName}
              />
            </motion.button>
          ))}

          {activeMissionTarget && activeMissionMarkerPosition && (
            <>
              {isFocusedMissionVisible && activeMissionRouteLine && (
                <div
                  className="pointer-events-none absolute z-[9] h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.06),rgba(34,211,238,0.9),rgba(34,211,238,0.08))] shadow-[0_0_12px_rgba(34,211,238,0.28)]"
                  style={getGalaxyLinkStyle(activeMissionRouteLine.from, activeMissionRouteLine.to)}
                />
              )}
              <motion.button
                type="button"
                onClick={() => setFocusedDroneNodeId((current) => (current === activeMission?.targetNodeId ? null : activeMission?.targetNodeId ?? null))}
                className="absolute z-[14] flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/26 bg-[#07111d]/80 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.24)] backdrop-blur-md transition hover:scale-[1.04] hover:bg-[#0c1728]/90"
                style={{
                  left: `${activeMissionMarkerPosition.x}px`,
                  top: `${activeMissionMarkerPosition.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: activeMissionStatus?.status === "traveling" ? [0.96, 1.06, 0.96] : [1, 1.06, 1],
                  opacity: [0.88, 1, 0.88],
                }}
                transition={{
                  duration: activeMissionStatus?.status === "traveling" ? 1.4 : 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-label="Drone"
              >
                <Rocket size={16} />
              </motion.button>
              {isFocusedMissionVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute z-[15] pointer-events-none w-[170px] rounded-[16px] border border-cyan-300/18 bg-[#081120]/92 px-3 py-2 text-white shadow-[0_16px_34px_rgba(0,0,0,0.26)] backdrop-blur-md"
                  style={{
                    left: `${activeMissionMarkerPosition.x + 18}px`,
                    top: `${activeMissionMarkerPosition.y - 54}px`,
                  }}
                >
                  <div className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200/72">
                    {activeMissionStatus?.status === "traveling"
                      ? localize({ en: "Drone route", hu: "Drón útvonal", de: "Drohnenroute", ro: "Rută dronă" })
                      : localize({ en: "Drone mining", hu: "Drón bányászik", de: "Drohne baut ab", ro: "Dronă extrage" })}
                  </div>
                  <div className="mt-1 text-[13px] font-black text-white">
                    {activeMissionStatus?.status === "traveling"
                      ? localize({
                          en: `Arrives in ${formatDurationMinutes(activeMissionStatus.remainingMinutes)}`,
                          hu: `${formatDurationMinutes(activeMissionStatus.remainingMinutes)} múlva ér be`,
                          de: `Ankunft in ${formatDurationMinutes(activeMissionStatus.remainingMinutes)}`,
                          ro: `Ajunge în ${formatDurationMinutes(activeMissionStatus.remainingMinutes)}`,
                        })
                      : localize({
                          en: `Finishes in ${formatDurationMinutes(activeMissionStatus!.remainingMinutes)}`,
                          hu: `${formatDurationMinutes(activeMissionStatus!.remainingMinutes)} múlva végez`,
                          de: `Fertig in ${formatDurationMinutes(activeMissionStatus!.remainingMinutes)}`,
                          ro: `Se termină în ${formatDurationMinutes(activeMissionStatus!.remainingMinutes)}`,
                        })}
                  </div>
                  {activeMissionStatus?.status === "mining" && (
                    <div className="mt-1 text-[10px] font-black text-emerald-100/90">
                      {localize({
                        en: `Gathered ${activeMissionStatus.gatheredUnits}/${activeMissionStatus.targetYieldUnits}`,
                        hu: `Begyűjtve ${activeMissionStatus.gatheredUnits}/${activeMissionStatus.targetYieldUnits}`,
                        de: `Gesammelt ${activeMissionStatus.gatheredUnits}/${activeMissionStatus.targetYieldUnits}`,
                        ro: `Colectat ${activeMissionStatus.gatheredUnits}/${activeMissionStatus.targetYieldUnits}`,
                      })}
                    </div>
                  )}
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

function ModuleArtOverlay({
  selectedModule,
  onSelectModule,
}: {
  selectedModule: StarholdModuleId;
  onSelectModule: (moduleId: StarholdModuleId) => void;
}) {
  const modules = [
    {
      id: "reactor" as const,
      src: "/gravitas/modules/reactor-module.webp",
      className:
        "left-[18%] top-[14%] w-[14%] max-w-[124px]",
      hitboxClassName: "inset-[14%]",
      motion: {
        y: [-2, 2, -1],
        x: [0, 1, 0],
        rotate: [-0.4, 0.5, -0.2],
      },
      duration: 6.4,
    },
    {
      id: "logistics" as const,
      src: "/gravitas/modules/logistics-module.webp",
      className:
        "right-[16%] top-[15%] w-[16%] max-w-[136px]",
      hitboxClassName: "inset-[13%]",
      motion: {
        y: [-1, 1.5, -1],
        x: [0, -1, 0],
        rotate: [-0.25, 0.25, -0.15],
      },
      duration: 7.6,
    },
    {
      id: "sensor" as const,
      src: "/gravitas/modules/sensor-module.webp",
      className:
        "left-[24%] bottom-[12%] w-[13%] max-w-[116px]",
      hitboxClassName: "inset-[10%]",
      motion: {
        y: [-2, 1, -2],
        x: [0, 1.5, 0],
        rotate: [-0.6, 0.7, -0.3],
      },
      duration: 5.8,
    },
    {
      id: "core" as const,
      src: "/gravitas/modules/core-module.webp",
      className:
        "left-1/2 top-[51%] w-[38%] max-w-[330px] -translate-x-1/2 -translate-y-1/2",
      hitboxClassName: "inset-[18%]",
      motion: {
        y: [-3, 2, -2],
        x: [0, 0.5, 0],
        rotate: [-0.3, 0.3, -0.15],
      },
      duration: 8.8,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-[6]">
      {modules.map((module) => {
        const isSelected = selectedModule === module.id;
        return (
          <motion.div
            key={module.id}
            className={`absolute transition-all duration-500 ${module.className} ${isSelected ? "scale-[1.03] opacity-100" : "opacity-[0.94]"}`}
            style={{
              filter: isSelected
                ? "drop-shadow(0 0 28px rgba(255,255,255,0.12)) drop-shadow(0 0 26px rgba(34,211,238,0.16)) drop-shadow(0 12px 24px rgba(0,0,0,0.32))"
                : "drop-shadow(0 0 18px rgba(34,211,238,0.06)) drop-shadow(0 10px 22px rgba(0,0,0,0.34))",
            }}
            animate={module.motion}
            transition={{ duration: module.duration, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-[2%] -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_52%,rgba(8,15,30,0.82),rgba(8,15,30,0.28)_58%,transparent_84%)] blur-xl" />
            <div className="absolute inset-[11%] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_50%_56%,rgba(34,211,238,0.07),transparent_68%)] blur-2xl" />
            <motion.div
              className="pointer-events-none absolute inset-[8%] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_50%_56%,rgba(255,255,255,0.06),transparent_62%)] blur-[18px]"
              animate={{ opacity: isSelected ? [0.18, 0.3, 0.2] : [0.08, 0.16, 0.1] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src={module.src}
              alt=""
              className="h-auto w-full select-none object-contain [mask-image:radial-gradient(circle_at_50%_50%,black_66%,rgba(0,0,0,0.92)_78%,transparent_100%)]"
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
              onClick={() => onSelectModule(module.id)}
              className={`absolute ${module.hitboxClassName} pointer-events-auto rounded-[28px] bg-transparent`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function MaterialResourceGlyph({ active }: { active?: boolean }) {
  return (
    <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
      <span className={`absolute inset-0 rounded-[4px] border border-indigo-200/30 bg-indigo-400/10 ${active ? "animate-pulse" : ""}`} />
      <span className="absolute left-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className="absolute right-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className="absolute left-[2px] bottom-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className="absolute right-[2px] bottom-[2px] h-[3px] w-[3px] rounded-full bg-indigo-100/80" />
      <span className={`absolute inset-[4px] rounded-[2px] bg-indigo-100/20 ${active ? "scale-100 opacity-100" : "scale-75 opacity-60"} transition-all`} />
      <span className={`absolute -right-[2px] -top-[2px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-opacity ${active ? "opacity-100" : "opacity-30"}`} />
    </span>
  );
}

function Badge({ color, label, lang }: { color: string; label: LocalizedString; lang: string }) {
  return (
    <div className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-tight border border-white/5 ${color}`}>
      {label[lang as keyof LocalizedString] || label.en}
    </div>
  );
}

function MiniActionButton({
  icon,
  label,
  onClick,
  disabled,
  highlight,
  tone = "default",
}: {
  icon?: React.ReactNode;
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
  tone?: "default" | "warning" | "danger";
}) {
  const toneClass =
    tone === "danger"
      ? "border-rose-500/60 bg-rose-500/14 text-rose-50"
      : tone === "warning"
        ? "border-amber-400/60 bg-amber-400/14 text-amber-50"
        : highlight
          ? "border-cyan-300/50 bg-cyan-400/14 text-cyan-100"
          : "border-white/10 bg-white/5 text-white/80";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition active:scale-95 ${
        disabled ? "cursor-not-allowed border-white/5 bg-white/5 text-white/20 grayscale" : toneClass
      }`}
    >
      {icon}
    </button>
  );
}

function PrepDot({ active, color }: { active: boolean; color: string }) {
  return (
    <div className={`w-2.5 h-2.5 rounded-full border border-white/10 transition-colors duration-500 ${active ? color : "bg-white/5"}`} />
  );
}

function PanelTab({ icon, label, active, onClick, emphasis }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void; emphasis?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-2.5 rounded-xl border transition-all ${active ? "border-white/20 bg-white/10 text-white" : emphasis ? "border-pink-500/30 bg-pink-500/10 text-pink-400 animate-pulse" : "border-white/5 bg-black/20 text-white/40"}`}
    >
      {icon}
      <span className="text-[10px] font-black mt-1 uppercase tracking-tighter">{label}</span>
    </button>
  );
}

function MainAction({
  label,
  shortLabel,
  icon,
  onClick,
  disabled,
  highlight,
  emphasis,
  tone = "default",
  compact,
  expanded,
}: {
  label: string;
  shortLabel?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
  emphasis?: boolean;
  tone?: "default" | "warning" | "danger";
  compact?: boolean;
  expanded?: boolean;
}) {
  const toneClass = tone === "danger"
    ? "border-rose-500/70 bg-rose-500/18 text-rose-50 shadow-[0_0_18px_rgba(244,63,94,0.24)]"
    : tone === "warning"
      ? "border-amber-400/70 bg-amber-400/18 text-amber-50 shadow-[0_0_18px_rgba(251,191,36,0.22)]"
      : "border-cyan-400 bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]";
  const activeClass = highlight || emphasis || tone !== "default" ? toneClass : "border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 text-white";

  if (expanded) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`relative min-h-[64px] rounded-2xl border p-3 text-left transition-all active:scale-[0.98] ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : activeClass}`}
      >
        <div className="flex items-start gap-2.5">
          {icon && (
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/15">
              {icon}
            </div>
          )}
          <div className="min-w-0">
            <div className="text-[13px] font-black uppercase tracking-[0.08em]">{label}</div>
          </div>
        </div>
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-0.5 w-full -rotate-12 bg-white/10" />
          </div>
        )}
        {emphasis && <div className={`absolute right-3 top-3 h-2.5 w-2.5 rounded-full animate-ping ${tone === "danger" ? "bg-rose-400" : tone === "warning" ? "bg-amber-300" : "bg-cyan-400"}`} />}
      </button>
    );
  }

  if (compact) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`relative flex h-12 min-h-[46px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl border px-1.5 text-center transition-all active:scale-95 ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : activeClass}`}
      >
        {icon}
        <span className="line-clamp-2 text-[9px] font-black uppercase leading-tight tracking-[0.08em]">
          {shortLabel ?? label}
        </span>
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-0.5 w-full -rotate-12 bg-white/10" />
          </div>
        )}
        {emphasis && <div className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full animate-ping ${tone === "danger" ? "bg-rose-400" : tone === "warning" ? "bg-amber-300" : "bg-cyan-400"}`} />}
      </button>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative h-12 min-h-[46px] min-w-[108px] rounded-xl border px-2.5 font-black text-[11px] uppercase tracking-tighter transition-all active:scale-90 active:brightness-150 ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : activeClass}`}
    >
      <span className="flex items-center justify-center gap-2">
        {icon}
        <span>{label}</span>
      </span>
      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-white/10 -rotate-12" />
        </div>
      )}
      {emphasis && <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping ${tone === "danger" ? "bg-rose-400" : tone === "warning" ? "bg-amber-300" : "bg-cyan-400"}`} />}
    </button>
  );
}

function MarkBox({ label, value, color }: { label: string; value: number; color: "rose" | "pink" | "amber" | "indigo" }) {
  const colorMap: Record<string, string> = {
    rose: value > 5 ? "text-rose-400 border-rose-500/30 bg-rose-500/5" : "text-rose-200/60 border-white/10 bg-white/5",
    pink: value > 5 ? "text-pink-400 border-pink-500/30 bg-pink-500/5" : "text-pink-200/60 border-white/10 bg-white/5",
    amber: value > 5 ? "text-amber-400 border-amber-500/30 bg-amber-500/5" : "text-amber-200/60 border-white/10 bg-white/5",
    indigo: value > 5 ? "text-indigo-400 border-indigo-500/30 bg-indigo-500/5" : "text-indigo-200/60 border-white/10 bg-white/5",
  };
  return (
    <div className={`p-4 rounded-2xl border transition-all ${colorMap[color]}`}>
      <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">{label}</div>
      <div className="text-2xl font-black">{value}</div>
    </div>
  );
}
