"use client";

import { useEffect, useMemo, useReducer, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ChevronLeft, Power, Wrench, Radar, Cpu, Star,
  AlertTriangle, Activity, Zap, ShieldAlert,
  Layers, Info, FileText, X, RotateCcw,
  Terminal, ShieldHalf, LayoutGrid, Brain
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import GravitasActivation from "@/components/gravitas/GravitasActivation";
import GravitasShop from "@/components/gravitas/GravitasShop";
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
import { saveGravitasState, loadGravitasState, clearGravitasSave } from "@/lib/gravitas/sim/persistence";
import { applyStarholdCommand, getGravitasActionSlots } from "@/lib/gravitas/sim/commands";
import { canStartActivationTransfer } from "@/lib/gravitas/sim/activation";
import { advanceStarholdTick } from "@/lib/gravitas/sim/tick";
import { getUpcomingDamagePreview } from "@/lib/gravitas/sim/threats";
import type { StarholdCommand, StarholdModuleId, StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { GRAVITAS_TEXT } from "@/lib/gravitas/sim/content";
import AwakeningCeremony from "@/components/gravitas/AwakeningCeremony";
import { getStarholdModifiers } from "@/lib/gravitas/sim/modifiers";

const GravitasScene = dynamic(() => import("@/components/gravitas/GravitasScene"), { ssr: false });

function reducer(state: StarholdState, command: StarholdCommand | { type: "__TICK__" }) {
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

export default function GravitasPage() {
  const { lang: currentLang } = useLang();
  const lang = (currentLang as Lang) || "en";
  const content = GRAVITAS_TEXT;
  const ui = content.ui;

  const [state, dispatch] = useReducer(reducer, undefined, () => loadGravitasState() ?? createInitialStarholdState());
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("core");
  const [shopOpen, setShopOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<"modules" | "marks" | "journal" | "activation" | null>(null);
  const [showAwakening, setShowAwakening] = useState(false);
  const [impactFlash, setImpactFlash] = useState<string | null>(null);
  const [actionFlash, setActionFlash] = useState<string | null>(null);
  const [actionFeedback, setActionFeedback] = useState<LocalizedString | null>(null);
  const [tipDismissed, setTipDismissed] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [onboardingDismissed, setOnboardingDismissed] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneDeferred, setSceneDeferred] = useState(false);
  const [lastCommand, setLastCommand] = useState<{ command: StarholdCommand; timestamp: number } | null>(null);
  
  const holdRef = useRef<number | null>(null);
  const prevThreatRef = useRef(state.threat);
  const prevStateRef = useRef(state);
  const lastActionRef = useRef<StarholdCommand | null>(null);
  const awakeningShownRef = useRef(false);

  const doAction = (command: StarholdCommand, color: string) => {
    if (state.stationLost) return;
    lastActionRef.current = command;
    setLastCommand({ command, timestamp: Date.now() });
    dispatch(command);
    setActionFlash(color);
    setTimeout(() => setActionFlash(null), 300);
  };

  useEffect(() => {
    if (state.avatarAwake && !awakeningShownRef.current) {
      setShowAwakening(true);
      awakeningShownRef.current = true;
    }
  }, [state.avatarAwake]);

  useEffect(() => {
    if (state.stationLost && !showGameOver) {
      setShowGameOver(true);
    }
  }, [state.stationLost, showGameOver]);

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
      idleId = (window as Window & {
        requestIdleCallback: (cb: IdleRequestCallback) => number;
      }).requestIdleCallback(() => activate());

      return () => {
        cancelled = true;
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
    };
  }, []);

  useEffect(() => {
    if (state.tick % 5 === 0) {
      saveGravitasState(state);
    }
  }, [state.tick]);

  useEffect(() => {
    const command = lastActionRef.current;
    const prev = prevStateRef.current;
    prevStateRef.current = state;

    if (!command) return;

    const feedback = buildActionFeedback(prev, state, command);
    lastActionRef.current = null;

    if (!feedback) return;
    setActionFeedback(feedback);
    const timeout = window.setTimeout(() => setActionFeedback(null), 2200);
    return () => window.clearTimeout(timeout);
  }, [state]);

  const localize = (ls: LocalizedString | null | undefined) => {
    if (!ls) return "";
    return ls[lang] ?? ls.en;
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

  const onboarding = useMemo(() => {
    if (onboardingDismissed || state.avatarAwake || state.stationLost) return null;

    if (state.tick < 6 && state.resources.materials < 18) {
      return {
        step: 1,
        title: localize(ui.onboardingTitle),
        body: localize(ui.onboardingStep1),
        hint: localize(ui.onboardingTapHint),
        focus: "scavenge" as const,
      };
    }

    if (!state.modules.logistics.online && state.tick < 14) {
      return {
        step: 2,
        title: localize(ui.onboardingTitle),
        body: localize(ui.onboardingStep2),
        hint: localize(ui.onboardingTapHint),
        focus: "repairLogistics" as const,
      };
    }

    if (state.phase === "boot" && state.resources.activation < 20 && state.tick < 24) {
      return {
        step: 3,
        title: localize(ui.onboardingTitle),
        body: localize(ui.onboardingStep3),
        hint: localize(ui.onboardingTapHint),
        focus: "reroute" as const,
      };
    }

    if (state.phase === "activation" && !state.avatarAwake) {
      return {
        step: 4,
        title: localize(ui.onboardingTitle),
        body: localize(ui.onboardingStep4),
        hint: localize(ui.onboardingTapHint),
        focus: "activation" as const,
      };
    }

    return null;
  }, [
    onboardingDismissed,
    state.avatarAwake,
    state.stationLost,
    state.tick,
    state.resources.materials,
    state.modules.logistics.online,
    state.phase,
    state.resources.activation,
    lang,
    ui,
  ]);

  const canReroute = canStartActivationTransfer(state);
  const isRecovering = state.threat.aftershock > 0 || state.crisis;
  const isLockdown = state.lockdown;
  const introStage = state.phase === "boot" && state.tick < 18;
  const earlyStage = !state.avatarAwake && state.tick < 45;
  const rerouteHighlighted = state.phase === "awakened" ? (state.tick - state.lastAvatarPulse >= 20) : (canReroute && !isLockdown) || onboarding?.focus === "reroute";

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

  const hasPredictor = state.progression.unlockedItems.includes("threat_predictor");
  const hasGoldHull = state.progression.unlockedItems.includes("station_paint_gold");
  const unclaimed = state.progression.unclaimedMilestones || [];
  const hasUnclaimed = unclaimed.length > 0;

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

  const currentTip = useMemo(() => {
    if (state.avatarAwake) {
      return {
        en: "Phase II is active. The station is now your anchor, not your limit.",
        hu: "A II. fázis aktív. Az állomás most már horgony, nem határ.",
        de: "Phase II ist aktiv. Die Station ist jetzt dein Anker, nicht dein Limit.",
        ro: "Faza II este activă. Stația este acum ancora ta, nu limita ta.",
      };
    }
    if (state.tick < 6) return content.ui.startDirective;
    if (state.tick < 10) return { en: "Your station is damaged. Scavenge materials to begin repairs.", hu: "Az állomás sérült. Gyűjts anyagot a javítások elindításához.", de: "Ihre Station ist beschädigt. Sammeln Sie Material für Reparaturen.", ro: "Stația este avariată. Colectează materiale pentru reparații." };
    if (state.tick >= 10 && state.tick < 20 && !state.modules.logistics.online) return { en: "Repair Logistics to improve material flow.", hu: "Javítsd meg a logisztikát az anyagáramlás segítéséhez.", de: "Reparieren Sie die Logistik für besseren Materialfluss.", ro: "Repará logistica pentru a îmbunătăți fluxul de materiale." };
    if (state.tick >= 20 && state.tick < 30 && state.phase === "boot") return { en: "When ready, Reroute to Core to begin avatar activation.", hu: "Ha kész vagy, irányítsd az energiát a magba az aktiváláshoz.", de: "Wenn bereit, leiten Sie Energie in den Kern zur Aktivierung.", ro: "Când ești gata, redirecționează spre nucleu pentru activare." };
    return null;
  }, [state.tick, state.modules.logistics.online, state.phase, state.avatarAwake]);

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
            en: `Scavenge complete. ${format(delta.materials, "MAT")}${delta.power ? `, ${format(delta.power, "PWR")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            hu: `Nyersanyaggyűjtés kész. ${format(delta.materials, "ANY")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            de: `Bergung abgeschlossen. ${format(delta.materials, "MAT")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
            ro: `Colectarea s-a terminat. ${format(delta.materials, "MAT")}${delta.power ? `, ${format(delta.power, "ENE")}` : ""}${delta.stability ? `, ${format(delta.stability, "STB")}` : ""}.`,
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

  return (
    <main className={`fixed inset-0 overflow-hidden transition-colors duration-1000 ${isLockdown ? "bg-[#0a0a0a]" : state.crisis ? "bg-[#1a0505]" : "bg-[#050816]"} ${impactFlash ? "animate-shake" : ""} text-white flex flex-col`}>
      <AnimatePresence>
        {shopOpen && (
          <GravitasShop
            state={state}
            lang={lang}
            ui={ui}
            onClose={() => setShopOpen(false)}
            onBuy={(itemId) => dispatch({ type: "BUY_ITEM", itemId })}
            onClaim={(milestoneId) => dispatch({ type: "CLAIM_MILESTONE", milestoneId })}
          />
        )}
        {showAwakening && (
          <AwakeningCeremony lang={lang} onDone={() => setShowAwakening(false)} />
        )}
      </AnimatePresence>

      {impactFlash && (
        <div className={`fixed inset-0 z-[100] ${impactFlash} pointer-events-none animate-pulse`} />
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/20 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 text-white/40 hover:text-white transition">
            <ChevronLeft size={20} />
          </Link>
          <div className="flex items-center gap-2 group relative">
            <StationHealthRing state={state} />
            <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${state.highStability ? "bg-emerald-500/20 text-emerald-400" : "bg-cyan-500/20 text-cyan-300"}`}>
              {phaseLabel}
            </div>
            {state.avatarAwake && (
              <div className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-fuchsia-500/20 text-fuchsia-300">
                {localize(content.victory.firstLoopTitle)}
              </div>
            )}
            {/* Phase Description Tooltip */}
            <div className="absolute top-full left-0 mt-2 p-3 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 text-[10px] text-white/60 w-48 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity pointer-events-none z-[100] shadow-2xl">
              {localize(content.lore.phaseDescriptions[state.phase])}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
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
            onClick={() => { if (confirm("Reset game?")) { clearGravitasSave(); window.location.reload(); } }}
            className="p-2 text-white/20 hover:text-white/60 transition"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </header>

      {/* HUD Chips */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/10 border-b border-white/5 overflow-x-auto no-scrollbar gap-4 scrollbar-hide">
        <HUDChip icon={<Zap size={12} />} value={state.resources.power} color="text-amber-400" />
        <HUDChip icon={<Wrench size={12} />} value={state.resources.materials} color="text-indigo-400" />
        <HUDChip icon={<Activity size={12} />} value={state.resources.stability} color="text-emerald-400" />
        <HUDChip icon={<Brain size={12} />} value={Math.floor(state.resources.activation)} color="text-pink-400" />
        <HUDChip icon={<Terminal size={12} />} value={state.entropy} color="text-rose-400" />
        <div className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs font-black shrink-0 ${state.worldPulse < 15 ? "text-slate-400" : state.worldPulse < 35 ? "text-cyan-300" : state.worldPulse < 65 ? "text-violet-300" : "text-rose-300"}`}>
          <Layers size={12} />
          <div className="flex flex-col leading-none">
            <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">{localize(ui.pattern)}</span>
            <span className="text-[10px]">{patternLabel}</span>
          </div>
        </div>
      </div>

      {/* Game View */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
        <div 
          className={`relative transition-all duration-500 w-full aspect-[840/510] ${hasGoldHull ? "border-[6px] border-amber-400/30 rounded-3xl m-2 overflow-hidden shadow-[0_0_30px_rgba(251,191,36,0.1)]" : ""}`}
          style={{ boxShadow: actionFlash ? `inset 0 0 60px ${actionFlash}` : "none" }}
        >
          {sceneReady ? (
            <GravitasScene
              state={state}
              selectedModule={selectedModule}
              onSelectModule={setSelectedModule}
              activeEventId={state.pendingEvent?.id ?? null}
              lastCommand={lastCommand}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(168,85,247,0.14),transparent_34%),linear-gradient(180deg,#050816_0%,#071120_50%,#050816_100%)]">
              <div className="absolute inset-0 opacity-50">
                <div className="absolute left-1/2 top-[20%] h-20 w-20 -translate-x-1/2 rounded-full border border-cyan-300/25 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.12)]" />
                <div className="absolute left-[18%] top-[48%] h-14 w-14 rounded-full border border-amber-300/20 bg-amber-400/10" />
                <div className="absolute right-[18%] top-[48%] h-14 w-14 rounded-full border border-emerald-300/20 bg-emerald-400/10" />
                <div className="absolute left-[30%] bottom-[16%] h-14 w-14 rounded-full border border-violet-300/20 bg-violet-400/10" />
                <div className="absolute right-[30%] bottom-[16%] h-14 w-14 rounded-full border border-rose-300/20 bg-rose-400/10" />
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
                <div className="absolute left-4 top-4 rounded-full border border-amber-300/25 bg-amber-400/12 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-amber-100 backdrop-blur-sm">
                  Test mode active
                </div>
              )}
            </div>
          )}

          {/* Onboarding Tips & Lore Intro */}
          <AnimatePresence>
            {!tipDismissed && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-20 left-4 right-4 z-30 p-3 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-between gap-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <Info size={14} className="text-blue-400 shrink-0" />
                  <p className="text-[10px] font-black uppercase tracking-tight text-blue-100">
                    {state.tick <= 1 ? localize(content.lore.intro) : localize(currentTip)}
                  </p>
                </div>
                <button onClick={() => setTipDismissed(true)} className="p-1 text-white/40 hover:text-white transition">
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {onboarding && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="absolute top-44 left-4 right-4 z-30 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 backdrop-blur-md p-4 shadow-[0_0_30px_rgba(34,211,238,0.14)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">
                      {onboarding.title} {onboarding.step}/4
                    </div>
                    <div className="mt-2 text-sm font-black text-white leading-snug">
                      {onboarding.body}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                      {onboarding.hint}
                    </div>
                  </div>
                  <button
                    onClick={() => setOnboardingDismissed(true)}
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:bg-white/10 transition"
                  >
                    Skip
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {state.firstLoopComplete && !state.firstLoopShown && !showAwakening && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="fixed bottom-[116px] right-4 z-[70] w-[min(92vw,360px)] rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/12 backdrop-blur-md p-3 shadow-[0_0_24px_rgba(232,121,249,0.14)] lg:bottom-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 text-fuchsia-100">
                    <Star size={14} fill="currentColor" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-fuchsia-300">
                      {localize(content.ui.phaseShift)}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-white/75">
                      {localize(content.victory.continuePlaying)}
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: "ACKNOWLEDGE_PHASE_SHIFT" })}
                    className="shrink-0 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-widest text-fuchsia-100 hover:bg-fuchsia-400/25 transition"
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
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="fixed bottom-[116px] left-4 right-4 z-[65] mx-auto max-w-xl rounded-2xl border border-cyan-400/20 bg-black/85 backdrop-blur-xl px-4 py-3 shadow-2xl pointer-events-none lg:bottom-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)] shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-black uppercase tracking-[0.28em] text-cyan-300">
                      {localize(ui.actions)}
                    </div>
                    <div className="mt-1 text-sm font-black text-white leading-snug">
                      {localize(actionFeedback)}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay Status info */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <h1 className="text-xl font-black tracking-tight opacity-80">{localize(ui.subtitle)}</h1>
            <div className="flex items-center gap-2 mt-1">
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
        </div>

        {/* Compact Threat Bar */}
        <div className={`mx-4 mb-2 p-3 rounded-xl border transition-all duration-500 ${state.threat.aftershock > 0 ? "border-amber-500/40 bg-amber-500/10" : "border-white/10 bg-black/40 backdrop-blur-sm"}`}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-black text-xs ${state.threat.countdown <= 3 ? "border-rose-500 text-rose-500 animate-pulse" : "border-white/20 text-white/60"}`}>
                {state.threat.aftershock > 0 ? state.threat.aftershock : (state.threat.countdown <= 10 || hasPredictor ? state.threat.countdown : "--")}
              </div>
              <div className="flex flex-col">
                <div className="text-[11px] font-black uppercase tracking-widest truncate max-w-[120px]">
                  {localize(content.threats[state.threat.type])}
                </div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-tighter">
                  {earlyStage
                    ? localize({
                        en: "Calibration window",
                        hu: "Kalibrációs szakasz",
                        de: "Kalibrierungsfenster",
                        ro: "Fereastră de calibrare",
                      })
                    : localize({ en: `Wave #${state.threatCycle}`, hu: `${state.threatCycle}. hullám`, de: `Welle #${state.threatCycle}`, ro: `Valul #${state.threatCycle}` })}
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 shrink-0">
              <PrepDot active={state.threat.fortified} color="bg-emerald-400" />
              <PrepDot active={state.threat.dampened} color="bg-indigo-400" />
              <PrepDot active={state.threat.intercepted} color="bg-amber-400" />
              <PrepDot active={state.threat.predicted} color="bg-cyan-400" />
            </div>
          </div>
          <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${state.threat.aftershock > 0 ? "bg-amber-500" : state.threat.countdown <= 3 ? "bg-rose-500" : "bg-cyan-500"}`}
              style={{ width: `${state.threat.aftershock > 0 ? (state.threat.aftershock / 6) * 100 : (state.threat.countdown / state.threat.totalDuration) * 100}%` }}
            />
          </div>

          {earlyStage && state.threat.aftershock === 0 && (
            <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200/65">
              {introStage
                ? localize({
                    en: "Learn the controls. Station pressure is being held back.",
                    hu: "Ismerd meg a vezérlést. Az állomás nyomása most vissza van fogva.",
                    de: "Lerne die Steuerung. Der Stationsdruck wird noch zurückgehalten.",
                    ro: "Învață comenzile. Presiunea stației este încă ținută în frâu.",
                  })
                : localize({
                    en: "Problems are coming in slowly. Build a stable rhythm first.",
                    hu: "A problémák lassan érkeznek. Előbb építs stabil ritmust.",
                    de: "Die Probleme kommen langsam. Baue zuerst einen stabilen Rhythmus auf.",
                    ro: "Problemele vin lent. Construiește mai întâi un ritm stabil.",
                  })}
            </div>
          )}

          {state.threat.countdown <= 5 && state.threat.aftershock === 0 && (
            <div className="mt-2 pt-2 border-t border-white/5">
              {!state.modules.sensor.online ? (
                <div className="text-[9px] font-bold text-white/20 uppercase">
                  {localize({ en: "Sensor offline — no forecast available", hu: "Szenzor offline — előrejelzés nem elérhető", de: "Sensor offline — keine Vorhersage verfügbar", ro: "Senzor offline — prognoză indisponibilă" })}
                </div>
              ) : (
                <div className="text-[9px] font-bold text-amber-400/80 uppercase">
                  {(() => {
                    const preview = getUpcomingDamagePreview(state);
                    if (!preview) return null;
                    const parts = [];
                    if (preview.stabilityLoss > 0) parts.push(`-${preview.stabilityLoss} STB`);
                    if (preview.powerLoss > 0) parts.push(`-${preview.powerLoss} PWR`);
                    Object.entries(preview.moduleDamage).forEach(([id, dmg]) => {
                      if (dmg > 0) parts.push(`${localize(state.modules[id as StarholdModuleId].name)} -${dmg}%`);
                    });
                    Object.entries(preview.markGain).forEach(([id, val]) => {
                      if (val && (val as number) > 0) parts.push(`+${val} ${id}`);
                    });
                    return `${localize({en: "Est. damage: ", hu: "Becsült kár: ", de: "Erw. Schaden: ", ro: "Daune est.: "})} ${parts.join(", ")}`;
                  })()}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Journal Preview */}
        <button 
          onClick={() => setActivePanel("journal")}
          className="mx-4 mb-4 p-2 rounded-lg bg-black/20 border border-white/5 flex flex-col gap-0.5 overflow-hidden group hover:bg-black/40 transition"
        >
          {state.journal.slice(0, 3).map((line, idx) => (
            <div key={idx} className="flex gap-2 text-[10px] text-white/30 truncate group-hover:text-white/50 transition">
              <span className="font-black text-white/20 uppercase shrink-0">T{line.tick}</span>
              <span className="truncate">{localize(line.text)}</span>
            </div>
          ))}
          {state.journal.length === 0 && (
            <div className="text-[10px] text-white/20 italic">System log empty...</div>
          )}
        </button>

        {/* Panel Tabs */}
        <div className="grid grid-cols-3 gap-2 px-4 mb-20 lg:mb-4">
          <PanelTab
            icon={<LayoutGrid size={18} />}
            label={localize(ui.modules)}
            active={activePanel === "modules"}
            onClick={() => setActivePanel(activePanel === "modules" ? null : "modules")}
          />
          <PanelTab
            icon={<ShieldHalf size={18} />}
            label={localize(ui.marks)}
            active={activePanel === "marks"}
            onClick={() => setActivePanel(activePanel === "marks" ? null : "marks")}
          />
          <PanelTab
            icon={<FileText size={18} />}
            label={localize(ui.journal)}
            active={activePanel === "journal"}
            onClick={() => setActivePanel(activePanel === "journal" ? null : "journal")}
          />
          {state.phase === "activation" && (
            <div className="col-span-3">
              <PanelTab
                icon={<Activity size={18} />}
                label={localize(ui.phaseActivation)}
                active={activePanel === "activation"}
                emphasis={onboarding?.focus === "activation"}
                onClick={() => setActivePanel(activePanel === "activation" ? null : "activation")}
              />
            </div>
          )}
        </div>
      </div>

      {state.recoveryPriority && (
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => {
            setSelectedModule(state.recoveryPriority!.moduleId);
            setActivePanel("modules");
          }}
          className="fixed bottom-[88px] left-4 right-4 z-[45] p-3 rounded-xl bg-amber-400 text-black flex items-center justify-between gap-3 animate-pulse shadow-lg lg:static lg:mb-4 lg:mx-6"
        >
          <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-tighter">
            <AlertTriangle size={14} />
            <span>{localize(state.modules[state.recoveryPriority.moduleId].name)} {localize({en: "critical — repair first", hu: "kritikus — javítsd először", de: "kritisch — erst reparieren", ro: "critic — repară mai întâi"})}</span>
          </div>
          <ChevronLeft size={14} className="rotate-180" />
        </motion.button>
      )}

      {/* Main Actions - Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-black/40 backdrop-blur-xl border-t border-white/10 z-40 lg:static lg:bg-transparent lg:border-none lg:p-6 lg:max-w-4xl lg:mx-auto">
        <div className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
          {earlyStage
            ? localize({
                en: "Tap a command and watch the station answer before pressure climbs.",
                hu: "Nyomj egy parancsot, és figyeld, hogyan válaszol az állomás, mielőtt nő a nyomás.",
                de: "Tippe einen Befehl an und beobachte die Reaktion der Station, bevor der Druck steigt.",
                ro: "Apasă o comandă și urmărește cum răspunde stația, înainte să crească presiunea.",
              })
            : localize({
                en: "Keep the grid steady and prepare for the next wave.",
                hu: "Tartsd stabilan a hálót, és készülj a következő hullámra.",
                de: "Halte das Netz stabil und bereite dich auf die nächste Welle vor.",
                ro: "Menține rețeaua stabilă și pregătește-te pentru următorul val.",
              })}
        </div>
        <div className="grid grid-cols-4 gap-2">
        <MainAction label={localize(ui.scavenge)} onClick={() => doAction({ type: "SCAVENGE" }, "rgba(16,185,129,0.4)")} disabled={isLockdown} highlight={onboarding?.focus === "scavenge"} />
        <MainAction label={localize(ui.stabilize)} onClick={() => doAction({ type: "STABILIZE_REACTOR" }, "rgba(59,130,246,0.4)")} emphasis={isRecovering && !isLockdown} />
        <MainAction label={localize(ui.repairLogistics)} onClick={() => doAction({ type: "REPAIR_MODULE", moduleId: "logistics" }, "rgba(245,158,11,0.4)")} highlight={onboarding?.focus === "repairLogistics"} />
        <MainAction
          label={state.phase === "awakened" ? localize({ en: "World Pulse", hu: "Világimpulzus", de: "Weltpuls", ro: "Pulsul lumii" }) : localize(ui.reroute)}
          onClick={() => doAction({ type: state.phase === "awakened" ? "AVATAR_PULSE" : "REROUTE_TO_CORE" }, "rgba(219,39,119,0.4)")}
          disabled={state.phase === "awakened" ? (state.tick - state.lastAvatarPulse < 20) : (!canReroute || isLockdown)}
          highlight={state.phase === "awakened" ? (state.tick - state.lastAvatarPulse >= 20) : rerouteHighlighted}
        />
        </div>
      </nav>

      {/* Sliding Panels */}
      <AnimatePresence>
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
                {activePanel === "activation" && <><Activity size={20} className="text-pink-400" /> {localize(ui.phaseActivation)}</>}
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
                            <div className="text-[10px] font-black">{m.integrity}%</div>
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
                      <div className={`px-2 py-0.5 rounded text-[10px] font-black ${state.modules[selectedModule].online ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-white/40"}`}>
                        {state.modules[selectedModule].online ? localize(ui.online) : localize(ui.offline)}
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
                      <div key={idx} className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-white/60 border-l-2 border-l-white/10 flex gap-3">
                        <span className="font-black text-white/20 uppercase shrink-0 mt-0.5 text-[10px]">T{line.tick}</span>
                        <span>{localize(line.text)}</span>
                      </div>
                    ))}
                    {state.journal.length === 0 && (
                      <div className="p-12 text-center text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">
                        {localize(ui.awaitingLog)}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activePanel === "activation" && (
                <GravitasActivation
                  state={state}
                  t={{
                    transferTitle: localize(ui.transferTitle),
                    transferReady: localize(ui.transferReady),
                    transferLocked: localize(ui.transferLocked),
                    transferStageLabel: localize(ui.transferStageLabel),
                    hold: localize(ui.hold),
                    awakeningMoment: localize(ui.awakeningMoment),
                    awakeningBody: localize(ui.awakeningBody),
                    resonance: localize(ui.resonance),
                  }}
                  onBeginTransfer={beginTransfer}
                  onStopTransfer={stopTransfer}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Modal */}
      <AnimatePresence>
        {state.pendingEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <div className="w-full max-w-lg rounded-[32px] border border-amber-400/30 bg-[#151005] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400 text-[10px] font-black uppercase tracking-widest">
                  Anomaly Detected
                </div>
                {state.pendingEvent.chainStep && (
                  <div className="text-[10px] font-black text-white/40">STEP {state.pendingEvent.chainStep}/{state.pendingEvent.chainTotal}</div>
                )}
              </div>
              <h2 className="text-2xl font-black text-white mb-4">{localize(state.pendingEvent.title)}</h2>
              <p className="text-white/70 leading-relaxed mb-8">{localize(state.pendingEvent.body)}</p>
              <div className="grid gap-3">
                {state.pendingEvent.options.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => doAction({ type: "RESOLVE_EVENT", optionId: opt.id }, "rgba(251,191,36,0.35)")}
                    className={`w-full p-5 rounded-2xl border text-left transition active:scale-[0.98] ${idx === 0 ? "border-amber-400 bg-amber-400/10 hover:bg-amber-400/20" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
                  >
                    <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${idx === 0 ? "text-amber-400" : "text-white/40"}`}>
                      {idx === 0 ? "Priority Protocol" : "Alternative Route"}
                    </div>
                    <div className="font-black text-white">{localize(opt.label)}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
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
                <StatItem label="Waves" value={state.threatCycle} />
                <StatItem label="Awakened" value={state.avatarAwake ? "YES" : "NO"} />
                <StatItem label="Stars" value={state.progression.stars} />
              </div>

              <button
                onClick={() => { clearGravitasSave(); window.location.reload(); }}
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
  return (
    <div className="text-left">
      <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{label}</div>
      <div className="text-xl font-black text-white">{value}</div>
    </div>
  );
}

// Helper Components
function HUDChip({ icon, value, color }: { icon: React.ReactNode; value: number; color: string }) {
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
    <motion.div
      animate={diff !== null ? { scale: [1, 1.08, 1] } : { scale: 1 }}
      transition={{ duration: 0.35 }}
      className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border font-black text-xs shrink-0 transition-all ${
        diff !== null ? "border-white/15 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "border-white/5 bg-white/5"
      } ${color}`}
    >
      {icon}
      <motion.span
        key={value}
        initial={{ y: diff ? (diff > 0 ? 5 : -5) : 0, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-block"
      >
        {value}
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
    </motion.div>
  );
}

function Badge({ color, label, lang }: { color: string; label: LocalizedString; lang: string }) {
  return (
    <div className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-tight border border-white/5 ${color}`}>
      {label[lang as keyof LocalizedString] || label.en}
    </div>
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

function MainAction({ label, onClick, disabled, highlight, emphasis }: { label: string; onClick: () => void; disabled?: boolean; highlight?: boolean; emphasis?: boolean }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative h-14 min-h-[52px] rounded-xl border font-black text-xs uppercase tracking-tighter transition-all active:scale-90 active:brightness-150 ${disabled ? "opacity-20 grayscale border-white/5 bg-white/5 text-white/40 cursor-not-allowed" : highlight || emphasis ? "border-cyan-400 bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]" : "border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 text-white"}`}
    >
      {label}
      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-white/10 -rotate-12" />
        </div>
      )}
      {emphasis && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />}
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
