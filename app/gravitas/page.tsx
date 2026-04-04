"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ChevronLeft, Power, Wrench, Radar, Cpu, Star,
  AlertTriangle, Activity, Zap, ShieldAlert,
  Layers, FileText, X, RotateCcw, Package, Shield, Heart,
  Terminal, ShieldHalf, LayoutGrid, Brain, UserRound, ArrowUpCircle
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
import GalaxyInteriorView from "@/components/gravitas/GalaxyInteriorView";
import GravitasMaterialStrip from "@/components/gravitas/GravitasMaterialStrip";
import ModuleUpgradePanel from "@/components/gravitas/ModuleUpgradePanel";
import {
  AvatarBaseChip,
  HUDChip,
  MapMiniButton,
  MiniActionButton,
  StationHealthRing,
} from "@/components/gravitas/GravitasUiParts";
import {
  CoreInteriorView,
  LogisticsInteriorView,
  ModuleArtOverlay,
  ReactorInteriorView,
  SensorInteriorView,
} from "@/components/gravitas/GravitasInteriors";
import GravitasOverlays from "@/components/gravitas/GravitasOverlays";
import { WarRoomPanel } from "@/components/gravitas/warroom";
import ModuleInteriorPanel from "@/components/gravitas/ModuleInteriorPanel";
import ResearchPanel from "@/components/gravitas/ResearchPanel";
import EspionagePanel from "@/components/gravitas/EspionagePanel";
import TradePanel from "@/components/gravitas/TradePanel";
import RepairBayPanel from "@/components/gravitas/RepairBayPanel";
import OfflineProgressPopup from "@/components/gravitas/OfflineProgressPopup";
import { processOfflineProgress, type OfflineProgressReport } from "@/lib/gravitas/sim/offlineProgress";
import { FlaskConical, Eye, ArrowLeftRight } from "lucide-react";

import { resolveBattle } from "@/lib/gravitas/sim/battle/engine";
import { getEnemyBuildingById } from "@/lib/gravitas/sim/battle/enemies";
import { BUILDING_DESCRIPTORS } from "@/lib/gravitas/sim/battle/buildingDescriptors";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";

const GravitasScene = dynamic(() => import("@/components/gravitas/GravitasScene"), { ssr: false });
const BattleView = dynamic(() => import("@/components/gravitas/battle/BattleView"), { ssr: false });
const BattleReport = dynamic(() => import("@/components/gravitas/battle/BattleReport"), { ssr: false });
const ArmySetup = dynamic(() => import("@/components/gravitas/battle/ArmySetup"), { ssr: false });
const ScoutPanel = dynamic(() => import("@/components/gravitas/battle/ScoutPanel"), { ssr: false });

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
type ResourceHelpKey = "power" | "supply" | "stability" | "activation" | "entropy" | "hull" | "shield" | "morale" | "signalRange" | "supplyFlow";
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

export default function GravitasPage() {
  const { lang: currentLang } = useLang();
  const lang = (currentLang as Lang) || "en";
  const content = GRAVITAS_TEXT;
  const ui = content.ui;

  const [state, dispatch] = useReducer(reducer, undefined, createInitialStarholdState);
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("reactor");
  const [shopOpen, setShopOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<"modules" | "marks" | "journal" | "activation" | "upgrades" | null>(null);
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
  const [offlineReport, setOfflineReport] = useState<OfflineProgressReport | null>(null);
  const [interiorView, setInteriorView] = useState<StarholdModuleId | "galaxy" | "warroom" | "research" | "espionage" | "trade" | "repairbay" | null>(null);
  const [battleNode, setBattleNode] = useState<import("@/lib/gravitas/world/types").GalaxyNode | null>(null);
  const [armySetupNode, setArmySetupNode] = useState<import("@/lib/gravitas/world/types").GalaxyNode | null>(null);
  const [scoutNode, setScoutNode] = useState<import("@/lib/gravitas/world/types").GalaxyNode | null>(null);
  const [battleResult, setBattleResult] = useState<import("@/lib/gravitas/sim/battle/types").BattleResult | null>(null);
  const [battleReportResult, setBattleReportResult] = useState<import("@/lib/gravitas/sim/battle/types").BattleResult | null>(null);

  const handleLaunchStrike = useCallback((node: import("@/lib/gravitas/world/types").GalaxyNode) => {
    setArmySetupNode(node);
  }, []);

  const handleOpenScout = useCallback((node: import("@/lib/gravitas/world/types").GalaxyNode) => {
    setScoutNode(node);
  }, []);

  const handleStartScout = useCallback((buildingId: string) => {
    dispatch({ type: "START_SCOUT", buildingId });
  }, []);

  const handleExecuteStrike = useCallback((army: import("@/lib/gravitas/sim/battle/types").BattleArmy, allocation: import("@/lib/gravitas/sim/battle/avatarCombat").AvatarCombatAllocation) => {
    if (!armySetupNode) return;
    
    const node = armySetupNode;
    const enemy = getEnemyBuildingById(node.variantId || node.id || "");
    const descriptorId = node.descriptorId;
    const descriptor = descriptorId ? BUILDING_DESCRIPTORS[descriptorId] : null;
    const factionId = node.factionId;
    const faction = factionId ? GALAXY_FACTIONS[factionId] : null;
    
    if (!enemy || !descriptor || !faction) return;

    const result = resolveBattle({
      army,
      enemy,
      playerState: state,
      avatarCombat: {
        ...state.battleState.avatarCombat,
        allocation
      },
      scoutReport: state.battleState.scoutReports[node.id] || {
        buildingId: enemy.id,
        intelLevel: 0,
        revealedStats: {},
        revealedTraits: [],
        lastScoutedAt: Date.now(),
      },
      descriptor,
      faction,
      battleHistory: [], 
    });

    setBattleNode(node);
    setBattleResult(result);
    setArmySetupNode(null);
  }, [state, armySetupNode]);
  
  const holdRef = useRef<number | null>(null);
  const imprintHoldRef = useRef<number | null>(null);
  const prevThreatRef = useRef(state.threat);
  const prevSurgeRef = useRef(state.postWaveSurgeTicks);
  const prevSurgeModeRef = useRef(state.postWaveSurgeMode);
  const prevStateRef = useRef(state);
  const prevAvatarAwakeRef = useRef(state.avatarAwake);
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
    awakeningShownRef.current = false;
    prevAvatarAwakeRef.current = resetState.avatarAwake;
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
    setSelectedModule(moduleId);
    setModuleInfoOpen(false);
    setInteriorView(moduleId);
  }, []);

  const handleOpenWarRoom = useCallback(() => {
    setModuleInfoOpen(false);
    setInteriorView("warroom");
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    let saved = loadGravitasState();
    if (saved) {
      const now = Date.now();
      if (saved.lastActiveAt && now - saved.lastActiveAt > 5 * 60 * 1000) {
        const { state: updatedState, report } = processOfflineProgress(saved);
        saved = updatedState;
        
        const hasEvents =
          report.completedTraining.length > 0 ||
          report.completedRepairs.length > 0 ||
          report.completedUpgrades.length > 0 ||
          report.decayedWounded > 0 ||
          report.phaseChanges.length > 0 ||
          report.completedMissions > 0;
          
        if (hasEvents) {
          setOfflineReport(report);
        }
      }

      awakeningShownRef.current = saved.avatarAwake;
      prevAvatarAwakeRef.current = saved.avatarAwake;
      setShowAwakening(false);
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
    const wasAwake = prevAvatarAwakeRef.current;
    if (!wasAwake && state.avatarAwake && !awakeningShownRef.current) {
      setShowAwakening(true);
      awakeningShownRef.current = true;
    }
    prevAvatarAwakeRef.current = state.avatarAwake;
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
    supply: {
      title: { en: "Supply", hu: "Ellátás", de: "Versorgung", ro: "Aprovizionare" },
      body: {
        en: "The station's repair and fabrication reserve. Logistics level determines passive generation.",
        hu: "Az állomás javítási és gyártási tartaléka. A logisztika szintje határozza meg az utánpótlás sebességét.",
        de: "Die Reparatur- und Fertigungsreserve der Station. Das Logistik-Level bestimmt die Nachschubrate.",
        ro: "Rezerva de reparații și fabricație a stației. Nivelul de logistică determină rata de aprovizionare.",
      },
      impact: {
        en: "If it runs out, repairs fail and several logistics options are blocked.",
        hu: "Ha kifogy, javítások és egyes akciók blokkolódnak.",
        de: "Wenn sie ausgeht, schlagen Reparaturen fehl und Logistikoptionen werden blockiert.",
        ro: "Dacă se epuizează, reparațiile eșuează și opțiunile logistice sunt blocate.",
      },
      fix: {
        en: "Raise Logistics level and use scavenger drones to recover more.",
        hu: "Logisztika szint emelésével és galaxy bányászattal növelhető.",
        de: "Logistik-Level erhöhen und Bergungsdrohnen für mehr Nachschub nutzen.",
        ro: "Crește nivelul Logisticii și folosește drone de colectare pentru a recupera mai mult.",
      },
    },
    hull: {
      title: { en: "Hull", hu: "Páncél", de: "Hülle", ro: "Blindaj" },
      body: {
        en: "The physical integrity of the base. The Core level determines maximum capacity.",
        hu: "A bázis fizikai állapota. A Core szintje határozza meg a maximumot. Fenyegetések és becsapódások csökkentik.",
        de: "Die physische Integrität der Basis. Das Kern-Level bestimmt die maximale Kapazität.",
        ro: "Integritatea fizică a bazei. Nivelul Core determină capacitatea maximă.",
      },
      impact: {
        en: "If it drops to 0, the station is destroyed.",
        hu: "Ha 0-ra csökken, az állomás megsemmisül.",
        de: "Wenn sie auf 0 fällt, wird die Station zerstört.",
        ro: "Dacă scade la 0, stația este distrusă.",
      },
      fix: {
        en: "Raise Core level to increase max HP. Repairs and low entropy help maintain it.",
        hu: "Core szint emelése növeli a max HP-t. Javítások és alacsony entrópia segít fenntartani.",
        de: "Kern-Level erhöhen für mehr Max-HP. Reparaturen und niedrige Entropie helfen.",
        ro: "Crește nivelul Core pentru mai mult HP maxim. Reparațiile și entropia scăzută ajută.",
      },
    },
    shield: {
      title: { en: "Shield", hu: "Pajzs", de: "Schild", ro: "Scut" },
      body: {
        en: "Energy shield around the base. The Warroom level determines its strength.",
        hu: "Energiapajzs a bázis körül. A Warroom szintje határozza meg az erősségét. Fenyegetések ellen először a pajzs szívja el a sérülést.",
        de: "Energieschild um die Basis. Das Warroom-Level bestimmt seine Stärke.",
        ro: "Scut de energie în jurul bazei. Nivelul Warroom îi determină puterea.",
      },
      impact: {
        en: "If 0, all incoming damage hits the hull directly.",
        hu: "Ha 0, minden sérülés közvetlenül a páncélra hat.",
        de: "Bei 0 trifft jeglicher Schaden direkt die Hülle.",
        ro: "Dacă este 0, toate daunele lovesc direct blindajul.",
      },
      fix: {
        en: "Raise Warroom level, use Fortify Shell, and keep the warroom online to regenerate.",
        hu: "Warroom szint emelés, Fortify Shell parancs, és a warroom online tartása regenerálja.",
        de: "Warroom-Level erhöhen, Fortify Shell nutzen und Warroom online halten zur Regeneration.",
        ro: "Crește nivelul Warroom, folosește Fortify Shell și menține warroom-ul online pentru regenerare.",
      },
    },
    morale: {
      title: { en: "Morale", hu: "Morál", de: "Moral", ro: "Moral" },
      body: {
        en: "Crew and system harmony. Balanced module levels keep it high; lagging modules lower it.",
        hu: "A legénység és rendszerek összehangoltsága. Ha a modulok egyensúlyban vannak (nincs nagy szintkülönbség), magas. Ha modulok lemaradnak a Core-tól, csökken.",
        de: "Harmonie von Crew und Systemen. Ausgeglichene Modul-Level halten sie hoch.",
        ro: "Armonia echipajului și a sistemelor. Nivelurile echilibrate ale modulelor o mențin ridicată.",
      },
      impact: {
        en: "Low morale slows command efficiency and increases anomaly risks.",
        hu: "Alacsony morál lassítja a parancsok hatékonyságát és növeli az anomáliák esélyét.",
        de: "Niedrige Moral verlangsamt Befehlseffizienz und erhöht Anomalierisiken.",
        ro: "Moralul scăzut încetinește eficiența comenzilor și crește riscul de anomalii.",
      },
      fix: {
        en: "Keep module levels balanced—don't let any module fall 3+ levels behind the Core.",
        hu: "Tartsd a modulokat egyensúlyban — ne hagyd, hogy bármelyik 3+ szinttel lemaradjon a Core-tól.",
        de: "Modul-Level ausbalanciert halten — keines 3+ Level hinter den Kern zurückfallen lassen.",
        ro: "Menține nivelurile modulelor echilibrate — nu lăsa niciunul cu 3+ niveluri în urma Core-ului.",
      },
    },
    signalRange: {
      title: { en: "Signal", hu: "Jelzés", de: "Signal", ro: "Semnal" },
      body: {
        en: "Sensor range. Higher Sensor level sees further, warns of threats earlier, and boosts mining.",
        hu: "A szenzor hatótávja. Magasabb szintű szenzor messzebbre lát, korábban figyelmeztet fenyegetésekre, és növeli a galaxy bányászat hatékonyságát.",
        de: "Sensorreichweite. Höheres Sensor-Level sieht weiter, warnt früher und verbessert Bergbau.",
        ro: "Raza senzorului. Un nivel mai mare al Senzorului vede mai departe, avertizează mai devreme și stimulează mineritul.",
      },
      impact: {
        en: "Low signal = late threat warnings, less time to prepare.",
        hu: "Alacsony jelzés = késői figyelmeztetés fenyegetésekre, kevesebb idő felkészülni.",
        de: "Niedriges Signal = späte Warnungen, weniger Vorbereitungszeit.",
        ro: "Semnal slab = avertizări târzii de amenințări, mai puțin timp de pregătire.",
      },
      fix: {
        en: "Upgrade the Sensor module.",
        hu: "Sensor modul szintjének emelésével növelhető.",
        de: "Werte das Sensormodul auf.",
        ro: "Îmbunătățește modulul Senzor.",
      },
    },
    supplyFlow: {
      title: { en: "Flow", hu: "Áramlás", de: "Fluss", ro: "Flux" },
      body: {
        en: "Passive supply generation rate, driven by Logistics level.",
        hu: "A logisztikai rendszer passzív anyagáramlása. Magasabb logisztika szint = gyorsabb automatikus utánpótlás és bányászat.",
        de: "Passive Nachschubrate, angetrieben durch Logistik-Level.",
        ro: "Rata pasivă de generare a aprovizionării, condusă de nivelul Logisticii.",
      },
      impact: {
        en: "Low flow = slower building and repairs, less passive income.",
        hu: "Alacsony áramlás = lassabb építés és javítás, kevesebb passzív bevétel.",
        de: "Niedriger Fluss = langsamer Bau und Reparatur, weniger passives Einkommen.",
        ro: "Flux scăzut = construire și reparații mai lente, mai puține venituri pasive.",
      },
      fix: {
        en: "Upgrade the Logistics module.",
        hu: "Logistics modul fejlesztésével növelhető.",
        de: "Werte das Logistikmodul auf.",
        ro: "Îmbunătățește modulul Logistică.",
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
      supply: next.resources.supply - prev.resources.supply,
      stability: next.resources.stability - prev.resources.stability,
      activation: next.resources.activation - prev.resources.activation,
    };

    const hasResourceShift = Object.values(delta).some((value) => value !== 0);
    const format = (value: number, label: string) => `${value > 0 ? "+" : ""}${value} ${label}`;

    switch (command.type) {
      case "SCAVENGE":
        if (hasResourceShift) {
          return {
            en: `Salvage ${format(delta.supply, "MAT")}${delta.power ? `, ${format(delta.power, "PWR")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            hu: `Bergés ${format(delta.supply, "ANY")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            de: `Bergung ${format(delta.supply, "MAT")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            ro: `Recuperare ${format(delta.supply, "MAT")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
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
          en: `Logistics optimized. ${format(delta.supply, "MAT")} flow improved.`,
          hu: `Logisztika optimalizálva. ${format(delta.supply, "ANY")} áramlás javult.`,
          de: `Logistik optimiert. ${format(delta.supply, "MAT")} Fluss verbessert.`,
          ro: `Logistica optimizată. Fluxul a crescut cu ${format(delta.supply, "MAT")}.`,
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
        delta.supply ? format(delta.supply, "MAT") : null,
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
      <header className="flex items-center justify-between px-2 py-1.5 border-b border-white/5 bg-black/20 backdrop-blur-md z-50 sm:px-3 sm:py-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="p-1.5 -ml-1 text-white/40 hover:text-white transition sm:p-2 sm:-ml-2">
            <ChevronLeft size={18} />
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

      {/* HUD — Row 1: stats chips, Row 2: material chips */}
      <div className="bg-black/10 border-b border-white/5 px-2 py-1 sm:px-3 sm:py-1.5 space-y-1">
        {/* Row 1: Stats */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <HUDChip icon={<Zap size={12} />} value={state.resources.power} color="text-amber-400" onClick={() => setResourceHelpOpen("power")} />
          <HUDChip icon={<Package size={12} />} value={state.resources.supply} color="text-indigo-300" onClick={() => setResourceHelpOpen("supply")} />
          <HUDChip icon={<Activity size={12} />} value={state.resources.stability} color="text-emerald-400" onClick={() => setResourceHelpOpen("stability")} />
          <HUDChip icon={<Heart size={12} />} value={state.resources.hull} color="text-rose-400" onClick={() => setResourceHelpOpen("hull")} />
          <HUDChip icon={<Shield size={12} />} value={state.resources.shield} color="text-blue-400" onClick={() => setResourceHelpOpen("shield")} />
          <HUDChip icon={<Terminal size={12} />} value={state.entropy} color="text-red-400" onClick={() => setResourceHelpOpen("entropy")} />
        </div>
        {/* Row 2: Derived stats */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <HUDChip icon={<Star size={12} />} value={state.resources.morale} color="text-yellow-400" onClick={() => setResourceHelpOpen("morale")} />
          <HUDChip icon={<Radar size={12} />} value={state.resources.signalRange} color="text-cyan-400" onClick={() => setResourceHelpOpen("signalRange")} />
          <HUDChip icon={<ArrowUpCircle size={12} />} value={state.resources.supplyFlow} color="text-indigo-400" onClick={() => setResourceHelpOpen("supplyFlow")} />
          {state.chapter === "demo" && (
            <HUDChip icon={<Brain size={12} />} value={Math.floor(state.resources.activation)} color="text-pink-400" onClick={() => setResourceHelpOpen("activation")} />
          )}
          {state.avatarProfile && state.avatarProfile.answers.length > 0 && (
            <AvatarBaseChip
              icon={<UserRound size={12} />}
              onClick={() => setAvatarBaseOpen(true)}
            />
          )}
          <div className={`relative flex items-center gap-1 px-1.5 py-0.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black shrink-0 sm:gap-1.5 sm:px-2 sm:py-1 sm:rounded-xl sm:text-xs ${state.worldPulse < 15 ? "text-slate-400" : state.worldPulse < 35 ? "text-cyan-300" : state.worldPulse < 65 ? "text-violet-300" : "text-rose-300"}`}>
            <Layers size={10} />
            <div className="flex flex-col leading-none">
              <span className="text-[6px] uppercase tracking-[0.14em] text-white/30 sm:text-[7px]">{localize(ui.pattern)}</span>
              <span className="text-[8px] sm:text-[9px]">{patternLabel}</span>
            </div>
          </div>
        </div>
        {/* Row 2: Materials — single row */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <GravitasMaterialStrip lang={lang} />
        </div>
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
            onOpenWarRoom={handleOpenWarRoom}
          />

          <AnimatePresence>
            {scoutNode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-4 z-[50] sm:inset-x-auto sm:left-1/2 sm:w-[420px] sm:-translate-x-1/2"
              >
                <ScoutPanel
                  buildingId={scoutNode.id}
                  descriptor={BUILDING_DESCRIPTORS[scoutNode.descriptorId!]!}
                  faction={GALAXY_FACTIONS[scoutNode.factionId!]!}
                  scoutReport={state.battleState.scoutReports[scoutNode.id] || {
                    buildingId: scoutNode.id,
                    intelLevel: 0,
                    revealedStats: {},
                    revealedTraits: [],
                    lastScoutedAt: 0,
                  }}
                  state={state}
                  onStartScout={handleStartScout}
                  onClose={() => setScoutNode(null)}
                  lang={lang}
                />
              </motion.div>
            )}
            {armySetupNode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-4 z-[50] sm:inset-x-auto sm:left-1/2 sm:w-[420px] sm:-translate-x-1/2"
              >
                <ArmySetup
                  buildingId={armySetupNode.id}
                  descriptor={BUILDING_DESCRIPTORS[armySetupNode.descriptorId!]!}
                  faction={GALAXY_FACTIONS[armySetupNode.factionId!]!}
                  scoutReport={{
                    buildingId: armySetupNode.id,
                    intelLevel: state.battleState.scoutReports[armySetupNode.id]?.intelLevel ?? 0,
                    revealedStats: {},
                    revealedTraits: [],
                    lastScoutedAt: Date.now(),
                  }}
                  state={state}
                  avatarCombat={state.battleState.avatarCombat}
                  onStartBattle={handleExecuteStrike}
                  onClose={() => setArmySetupNode(null)}
                  lang={lang}
                />
              </motion.div>
            )}
            {battleNode && battleResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-4 z-[50] sm:inset-x-auto sm:left-1/2 sm:w-[420px] sm:-translate-x-1/2"
              >
                <BattleView
                  result={battleResult}
                  enemy={getEnemyBuildingById(battleNode.variantId || battleNode.id || "")!}
                  army={{ units: Object.fromEntries(Object.entries(state.warRoom.garrison).map(([k, entries]) => [k, (entries as any[]).reduce((s: number, e: any) => s + e.count, 0)])), tacticId: "aggressive" }}
                  onComplete={() => {
                    setBattleReportResult(battleResult);
                    setBattleResult(null);
                  }}
                  lang={lang}
                />
              </motion.div>
            )}
            {battleNode && battleReportResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-4 z-[50] sm:inset-x-auto sm:left-1/2 sm:w-[420px] sm:-translate-x-1/2"
              >
                <BattleReport
                  result={battleReportResult}
                  enemy={getEnemyBuildingById(battleNode.variantId || battleNode.id || "")!}
                  army={{ units: Object.fromEntries(Object.entries(state.warRoom.garrison).map(([k, entries]) => [k, (entries as any[]).reduce((s: number, e: any) => s + e.count, 0)])), tacticId: "aggressive" }}
                  intelBefore={state.battleState.scoutReports[battleNode.id]?.intelLevel ?? 0}
                  onBackToGalaxy={() => {
                    dispatch({ type: "APPLY_BATTLE_RESULT", result: battleReportResult, nodeId: battleNode.id });
                    setBattleReportResult(null);
                    setBattleNode(null);
                  }}
                  onRetry={() => {
                    dispatch({ type: "APPLY_BATTLE_RESULT", result: battleReportResult, nodeId: battleNode.id });
                    setBattleReportResult(null);
                    handleLaunchStrike(battleNode);
                  }}
                  lang={lang}
                />
              </motion.div>
            )}
          </AnimatePresence>

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
                    LVL {state.moduleLevels?.[selectedModule] ?? 1}
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
                <GalaxyInteriorView
                  lang={lang}
                  state={state}
                  scoutReports={state.battleState.scoutReports}
                  onLaunchStrike={handleLaunchStrike}
                  onOpenScout={handleOpenScout}
                  onClose={() => setInteriorView(null)}
                />
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
                  state={state} dispatch={dispatch} lang={lang}
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
                <ReactorInteriorView state={state} dispatch={dispatch} lang={lang} onClose={() => setInteriorView(null)} />
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
                <CoreInteriorView state={state} dispatch={dispatch} lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "logistics" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit] bg-[linear-gradient(180deg,#06101c_0%,#0a1028_42%,#040914_100%)]"
              >
                <LogisticsInteriorView state={state} dispatch={dispatch} lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "warroom" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] flex flex-col overflow-hidden rounded-[inherit] bg-[linear-gradient(180deg,#0c0818_0%,#0e0f1c_42%,#060610_100%)]"
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-red-300/70">⚔️ Command Deck</span>
                  <button
                    type="button"
                    onClick={() => setInteriorView(null)}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition"
                  >
                    <X size={12} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  <WarRoomPanel state={state} dispatch={dispatch} lang={lang} />
                  <ModuleInteriorPanel moduleId="warroom" state={state} dispatch={dispatch} lang={lang} accentColor="red" />
                </div>
              </motion.div>
            )}
            {interiorView === "research" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit]"
              >
                <ResearchPanel state={state} doAction={(cmd, color) => { dispatch(cmd); setActionFlash(color); setTimeout(() => setActionFlash(null), 800); }} lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "espionage" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit]"
              >
                <EspionagePanel state={state} doAction={(cmd, color) => { dispatch(cmd); setActionFlash(color); setTimeout(() => setActionFlash(null), 800); }} lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "trade" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit]"
              >
                <TradePanel state={state} doAction={(cmd, color) => { dispatch(cmd); setActionFlash(color); setTimeout(() => setActionFlash(null), 800); }} lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
            {interiorView === "repairbay" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-[28] overflow-hidden rounded-[inherit]"
              >
                <RepairBayPanel state={state} doAction={(cmd, color) => { dispatch(cmd); setActionFlash(color); setTimeout(() => setActionFlash(null), 800); }} lang={lang} onClose={() => setInteriorView(null)} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {offlineReport && (
              <OfflineProgressPopup 
                report={offlineReport} 
                onDismiss={() => setOfflineReport(null)} 
                lang={lang} 
              />
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
            icon={<ArrowUpCircle size={14} />}
            active={activePanel === "upgrades"}
            onClick={() => setActivePanel(activePanel === "upgrades" ? null : "upgrades")}
          />
          <MapMiniButton
            icon={<FileText size={14} />}
            active={activePanel === "journal"}
            onClick={() => setActivePanel(activePanel === "journal" ? null : "journal")}
          />
          <MapMiniButton
            icon={<Users size={14} />}
            active={activePanel === "factions"}
            onClick={() => setActivePanel(activePanel === "factions" ? null : "factions")}
          />
          <MapMiniButton
            icon={<Radar size={14} />}
            active={interiorView === "galaxy"}
            onClick={() => setInteriorView(interiorView === "galaxy" ? null : "galaxy")}
          />
          <MapMiniButton
            icon={<FlaskConical size={14} />}
            active={interiorView === "research"}
            onClick={() => setInteriorView(interiorView === "research" ? null : "research")}
          />
          <MapMiniButton
            icon={<Eye size={14} />}
            active={interiorView === "espionage"}
            onClick={() => setInteriorView(interiorView === "espionage" ? null : "espionage")}
          />
          <MapMiniButton
            icon={<ArrowLeftRight size={14} />}
            active={interiorView === "trade"}
            onClick={() => setInteriorView(interiorView === "trade" ? null : "trade")}
          />
          <MapMiniButton
            icon={<Wrench size={14} />}
            active={interiorView === "repairbay"}
            onClick={() => setInteriorView(interiorView === "repairbay" ? null : "repairbay")}
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

      <GravitasOverlays
        lang={lang}
        content={content}
        ui={ui}
        state={state}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        resourceHelpOpen={resourceHelpOpen}
        setResourceHelpOpen={setResourceHelpOpen}
        resourceHelp={resourceHelp}
        avatarBaseOpen={avatarBaseOpen}
        setAvatarBaseOpen={setAvatarBaseOpen}
        quickActionsOpen={quickActionsOpen}
        setQuickActionsOpen={setQuickActionsOpen}
        showGameOver={showGameOver}
        starFeedback={starFeedback}
        hasUnclaimed={hasUnclaimed}
        unclaimed={unclaimed}
        selectedModule={selectedModule}
        setSelectedModule={setSelectedModule}
        moduleActions={moduleActions}
        quickActions={quickActions}
        systemsAction={systemsAction}
        prioritizedMobileActions={prioritizedMobileActions}
        hiddenUrgentActions={hiddenUrgentActions}
        actionFeedback={actionFeedback}
        localize={localize}
        doAction={doAction}
        restartGravitasChapter={restartGravitasChapter}
        mods={mods}
        contentVictoryStationLostTitle={content.victory.stationLostTitle}
        contentVictoryTryAgain={localize(content.victory.tryAgain)}
      />

    </main>
  );
}
