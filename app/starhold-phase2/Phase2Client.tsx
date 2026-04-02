"use client";

import { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Cpu, Layers, Radar, Zap, LayoutGrid } from "lucide-react";
import { createInitialPhase2State } from "@/lib/starholdPhase2/createInitialState";
import { loadPhase2State, savePhase2State } from "@/lib/starholdPhase2/persistence";
import type { Phase2ModuleId, Phase2ResourceId, Phase2State, Phase2Trait, Phase2View } from "@/lib/starholdPhase2/types";

type Action =
  | { type: "HYDRATE"; state: Phase2State }
  | { type: "TICK" }
  | { type: "SET_VIEW"; view: Phase2View }
  | { type: "SELECT_NODE"; nodeId: string }
  | { type: "SCAN_NODE" }
  | { type: "RUN_MISSION" }
  | { type: "MINE"; resource: Phase2ResourceId }
  | { type: "STABILIZE" }
  | { type: "UPGRADE_MODULE"; moduleId: Phase2ModuleId }
  | { type: "UPGRADE_CORE" }
  | { type: "ACTIVATE_SHIELD" }
  | { type: "ACTIVATE_ARMOR" }
  | { type: "TOGGLE_AUTO_DEFENSE" };

const MATERIAL_LABELS: Record<Phase2ResourceId, string> = {
  alpha: "Material A",
  beta: "Material B",
  gamma: "Material C",
  delta: "Material D",
};

const TRAIT_LABELS: Record<Phase2Trait, string> = {
  calm: "Calm",
  curious: "Curious",
  protective: "Protective",
  bold: "Bold",
};

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function waveCountdown(seed: number) {
  return 60 + ((seed * 17) % 45);
}

function log(state: Phase2State, text: string): Phase2State {
  return {
    ...state,
    log: [{ tick: state.tick, text }, ...state.log].slice(0, 30),
  };
}

function applyAvatarXp(state: Phase2State, gained: number): Phase2State {
  let avatar = { ...state.avatar, xp: state.avatar.xp + gained };
  let nextState = state;
  while (avatar.xp >= avatar.level * 20) {
    avatar = {
      ...avatar,
      xp: avatar.xp - avatar.level * 20,
      level: avatar.level + 1,
      power: avatar.power + 2,
    };
    nextState = log(nextState, `Avatar level increased to ${avatar.level}.`);
  }
  return { ...nextState, avatar };
}

function totalMaterials(resources: Phase2State["resources"]) {
  return resources.alpha + resources.beta + resources.gamma + resources.delta;
}

function reducer(state: Phase2State, action: Action): Phase2State {
  switch (action.type) {
    case "HYDRATE":
      return action.state;
    case "SET_VIEW":
      return { ...state, view: action.view };
    case "SELECT_NODE":
      return { ...state, galaxy: { ...state.galaxy, selectedNodeId: action.nodeId } };
    case "MINE": {
      const gain = 2 + state.station.logistics.level + Math.floor(totalMaterials(state.resources) / 120) + Math.floor(state.vitals.stability / 35);
      return applyAvatarXp(
        log(
          {
            ...state,
            resources: {
              ...state.resources,
              [action.resource]: clamp(state.resources[action.resource] + gain),
              gamma: clamp(state.resources.gamma + (action.resource === "gamma" ? 1 : 0)),
              delta: clamp(state.resources.delta + (action.resource === "delta" ? 1 : 0)),
            },
            vitals: {
              stability: clamp(state.vitals.stability - 1 + Math.floor(state.station.reactor.level / 2)),
              energy: clamp(state.vitals.energy - 2 + Math.floor(state.station.sensor.level / 2)),
            },
            wave: { ...state.wave, countdown: Math.max(1, state.wave.countdown - 1) },
          },
          `Mined ${gain} units from ${MATERIAL_LABELS[action.resource]}.`,
        ),
        1 + Math.floor(gain / 2),
      );
    }
    case "STABILIZE":
      return log(
        applyAvatarXp(
          {
            ...state,
            resources: { ...state.resources, alpha: clamp(state.resources.alpha - 3), beta: clamp(state.resources.beta - 1) },
            vitals: { stability: clamp(state.vitals.stability + 14), energy: clamp(state.vitals.energy + 10) },
          },
          1,
        ),
        "Station stabilized and energy routed back to the core.",
      );
    case "SCAN_NODE": {
      const selected = state.galaxy.nodes.find((node) => node.id === state.galaxy.selectedNodeId);
      if (!selected) return state;
      const nodes = state.galaxy.nodes.map((node) => {
        if (node.id !== selected.id) return node;
        const progress = clamp(node.progress + 25, 0, 100);
        return { ...node, discovered: true, progress, missionReady: progress >= 100 };
      });
      return applyAvatarXp(
        log(
          {
            ...state,
            galaxy: { ...state.galaxy, nodes, intel: clamp(state.galaxy.intel + 3) },
            resources: { ...state.resources, beta: clamp(state.resources.beta - 1) },
          },
          `${selected.name} scanned. Galaxy intel increased.`,
        ),
        2,
      );
    }
    case "RUN_MISSION": {
      const selected = state.galaxy.nodes.find((node) => node.id === state.galaxy.selectedNodeId);
      if (!selected || !selected.missionReady) return state;
      const nodes = state.galaxy.nodes.map((node) => (node.id === selected.id ? { ...node, missionReady: false, progress: 0 } : node));
      return applyAvatarXp(
        log(
          {
            ...state,
            galaxy: { ...state.galaxy, nodes, intel: clamp(state.galaxy.intel + selected.reward.intel) },
            resources: {
              ...state.resources,
              alpha: clamp(state.resources.alpha + selected.reward.alpha),
              beta: clamp(state.resources.beta + selected.reward.beta),
              gamma: clamp(state.resources.gamma + selected.reward.gamma),
              delta: clamp(state.resources.delta + selected.reward.delta),
            },
          },
          `Mission completed at ${selected.name}.`,
        ),
        selected.reward.xp,
      );
    }
    case "UPGRADE_MODULE": {
      const cost = 8 + state.station[action.moduleId].level * 4;
      if (state.resources.alpha < cost || state.resources.beta < Math.ceil(cost / 2)) return state;
      const nextLevel = state.station[action.moduleId].level + 1;
      return log(
        {
          ...state,
          resources: { ...state.resources, alpha: clamp(state.resources.alpha - cost), beta: clamp(state.resources.beta - Math.ceil(cost / 2)) },
          station: {
            ...state.station,
            [action.moduleId]: {
              ...state.station[action.moduleId],
              level: nextLevel,
              integrity: clamp(state.station[action.moduleId].integrity + 12),
            },
          },
        },
        `${action.moduleId} upgraded to level ${nextLevel}.`,
      );
    }
    case "UPGRADE_CORE": {
      const core = state.station.core;
      if (core.level >= 2) return state;
      if (state.resources.alpha < 18 || state.resources.gamma < 8) return state;
      return log(
        {
          ...state,
          resources: { ...state.resources, alpha: clamp(state.resources.alpha - 18), gamma: clamp(state.resources.gamma - 8) },
          station: { ...state.station, core: { ...core, level: 2, integrity: clamp(core.integrity + 20) } },
          galaxy: { ...state.galaxy, hubUnlocked: true },
          view: "galaxy",
        },
        "Core level 2 unlocked. Galaxy hub online.",
      );
    }
    case "ACTIVATE_SHIELD":
      if (state.resources.beta < 6) return state;
      return log({ ...state, resources: { ...state.resources, beta: clamp(state.resources.beta - 6) }, wave: { ...state.wave, shieldTicks: 24 } }, "24h shield deployed.");
    case "ACTIVATE_ARMOR":
      if (state.resources.gamma < 8) return state;
      return log({ ...state, resources: { ...state.resources, gamma: clamp(state.resources.gamma - 8) }, wave: { ...state.wave, armorTicks: 8 } }, "8h armor shell deployed.");
    case "TOGGLE_AUTO_DEFENSE":
      return { ...state, wave: { ...state.wave, autoDefense: !state.wave.autoDefense } };
    case "TICK": {
      const wave = { ...state.wave };
      const nextResources = { ...state.resources };
      const nextVitals = { ...state.vitals };
      const nextStation = {
        reactor: { ...state.station.reactor },
        logistics: { ...state.station.logistics },
        sensor: { ...state.station.sensor },
        core: { ...state.station.core },
      };
      const nextGalaxy = { ...state.galaxy, nodes: state.galaxy.nodes.map((node) => ({ ...node })) };
      let nextLog = state.log;
      let nextAvatar = state.avatar;

      wave.countdown -= 1;
      wave.shieldTicks = Math.max(0, wave.shieldTicks - 1);
      wave.armorTicks = Math.max(0, wave.armorTicks - 1);

      nextVitals.stability = clamp(nextVitals.stability - 1 + Math.floor((nextStation.reactor.level + nextStation.core.level) / 2) + (wave.shieldTicks > 0 ? 1 : 0));
      nextVitals.energy = clamp(nextVitals.energy - 1 + Math.floor(nextStation.sensor.level / 2) + (wave.armorTicks > 0 ? 1 : 0));

      const stabilityBonus = Math.floor((nextStation.reactor.level + nextStation.core.level + Math.floor(nextVitals.stability / 25)) / 2);
      const logisticsGain = Math.max(0, nextStation.logistics.level + Math.floor((nextVitals.energy + nextVitals.stability) / 80) - (nextVitals.energy < 25 || nextVitals.stability < 25 ? 1 : 0));
      nextResources.alpha = clamp(nextResources.alpha + logisticsGain);
      nextResources.beta = clamp(nextResources.beta + Math.max(0, Math.floor(logisticsGain / 2)));
      if (nextResources.alpha > 0 && nextResources.beta > 0 && nextResources.gamma > 0) {
        nextResources.alpha = clamp(nextResources.alpha - 1);
        nextResources.beta = clamp(nextResources.beta - 1);
      }
      nextResources.delta = clamp(nextResources.delta + (nextGalaxy.hubUnlocked ? 1 : 0));

      if (wave.countdown <= 0) {
        const defense = (wave.autoDefense ? 3 : 0) + (wave.shieldTicks > 0 ? 4 : 0) + (wave.armorTicks > 0 ? 2 : 0) + stabilityBonus + Math.floor(nextStation.sensor.level / 2);
        const incoming = 10 + Math.floor(state.tick / 180) + (wave.seed % 4);
        const damage = Math.max(1, incoming - defense);
        nextVitals.stability = clamp(nextVitals.stability - Math.max(2, damage * 2));
        nextVitals.energy = clamp(nextVitals.energy - Math.max(1, damage));
        nextResources.alpha = clamp(nextResources.alpha - Math.max(0, Math.floor(damage / 3)));
        nextResources.beta = clamp(nextResources.beta - Math.max(0, Math.floor(damage / 4)));
        nextResources.gamma = clamp(nextResources.gamma - Math.max(0, Math.floor(damage / 5)));
        nextResources.delta = clamp(nextResources.delta - Math.max(0, Math.floor(damage / 6)));
        nextStation.reactor.integrity = clamp(nextStation.reactor.integrity - damage);
        nextStation.core.integrity = clamp(nextStation.core.integrity - Math.max(0, damage - 2));
        nextLog = [{ tick: state.tick, text: `Wave hit absorbed with ${damage} pressure.` }, ...nextLog].slice(0, 30);
        wave.lastImpactTick = state.tick;
        wave.seed += 1;
        wave.countdown = waveCountdown(wave.seed);
      }

      const selected = nextGalaxy.nodes.find((node) => node.id === nextGalaxy.selectedNodeId);
      if (selected && selected.progress >= 100 && !selected.missionReady) selected.missionReady = true;
      if (nextStation.core.level >= 2) nextGalaxy.hubUnlocked = true;
      nextAvatar = { ...nextAvatar, power: clamp(nextAvatar.power + (nextStation.core.level >= 2 ? 1 : 0)) };

      return {
        ...state,
        tick: state.tick + 1,
        resources: nextResources,
        vitals: nextVitals,
        station: nextStation,
        avatar: nextAvatar,
        galaxy: nextGalaxy,
        wave,
        log: nextLog,
      };
    }
    default:
      return state;
  }
}

export default function StarholdPhase2Page() {
  const [state, dispatch] = useReducer(reducer, undefined, () => createInitialPhase2State());
  const [bootstrapped, setBootstrapped] = useState(false);
  const [activeQuick, setActiveQuick] = useState<"station" | "galaxy" | "avatar" | "defense" | "journal">("station");

  useEffect(() => {
    const saved = loadPhase2State();
    if (saved) dispatch({ type: "HYDRATE", state: saved });
    setBootstrapped(true);
  }, []);

  useEffect(() => {
    if (!bootstrapped) return;
    savePhase2State(state);
  }, [bootstrapped, state]);

  useEffect(() => {
    const id = window.setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => window.clearInterval(id);
  }, []);

  const selectedNode = state.galaxy.nodes.find((node) => node.id === state.galaxy.selectedNodeId) ?? state.galaxy.nodes[0];
  const moduleCards = [
    { id: "reactor" as const, label: "Reactor", desc: "Stability backbone", icon: Zap },
    { id: "logistics" as const, label: "Logistics", desc: "Material throughput", icon: Layers },
    { id: "sensor" as const, label: "Sensor", desc: "Galaxy intel and defense", icon: Radar },
    { id: "core" as const, label: "Core", desc: state.galaxy.hubUnlocked ? "Galaxy hub online" : "Unlocks the galaxy hub", icon: Cpu },
  ];

  const quickActions = [
    { key: "mine-alpha", group: "station" as const, label: "Mine A", onClick: () => { setActiveQuick("station"); dispatch({ type: "MINE", resource: "alpha" as const }); } },
    { key: "mine-beta", group: "station" as const, label: "Mine B", onClick: () => { setActiveQuick("station"); dispatch({ type: "MINE", resource: "beta" as const }); } },
    { key: "stabilize", group: "station" as const, label: "Stabilize", onClick: () => { setActiveQuick("station"); dispatch({ type: "STABILIZE" }); } },
    { key: "shield", group: "defense" as const, label: "Shield", onClick: () => { setActiveQuick("defense"); dispatch({ type: "ACTIVATE_SHIELD" }); } },
    { key: "armor", group: "defense" as const, label: "Armor", onClick: () => { setActiveQuick("defense"); dispatch({ type: "ACTIVATE_ARMOR" }); } },
    { key: "scan", group: "galaxy" as const, label: "Scan", onClick: () => { setActiveQuick("galaxy"); dispatch({ type: "SCAN_NODE" }); } },
    { key: "mission", group: "galaxy" as const, label: "Mission", onClick: () => { setActiveQuick("galaxy"); dispatch({ type: "RUN_MISSION" }); } },
    { key: "core", group: "avatar" as const, label: "Core", onClick: () => { setActiveQuick("avatar"); dispatch({ type: "UPGRADE_CORE" }); } },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_26%),linear-gradient(180deg,#06111f_0%,#050816_55%,#02050b_100%)]" />
      <div className="relative z-10 flex min-h-screen flex-col gap-4 px-3 py-3 lg:px-4 lg:py-4">
        <header className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Link href="/gravitas" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white">
              <ArrowLeftRight size={18} />
            </Link>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.32em] text-cyan-300/80">Starhold Phase 2</div>
              <h1 className="mt-1 text-2xl font-black tracking-tight lg:text-4xl">Station, galaxy, avatar</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-cyan-200">Tick {state.tick}</span>
            <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-2 text-fuchsia-200">Wave in {state.wave.countdown}s</span>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-200">Auto defense {state.wave.autoDefense ? "ON" : "OFF"}</span>
          </div>
        </header>

        <section className="flex-1 relative overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[840/560] overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(168,85,247,0.14),transparent_34%),linear-gradient(180deg,#050816_0%,#071120_50%,#050816_100%)]" />
            <div className="absolute inset-0 p-4 lg:p-5">
              <div className="flex h-full flex-col gap-4">
                <div className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-black/20 p-4 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2.5 text-cyan-100">
                      <LayoutGrid size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300/75">
                        {state.view === "station" ? "Station shell" : "Galaxy shell"}
                      </div>
                      <h2 className="mt-1 text-xl font-black">
                        {state.view === "station" ? "Reactor, logistics, sensor and core" : "Planetary map, relays and extraction points"}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em]">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">Selected {selectedNode.name}</span>
                    <button
                      onClick={() => dispatch({ type: "SET_VIEW", view: state.view === "station" ? "galaxy" : "station" })}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70 transition hover:text-white"
                    >
                      {state.view === "station" ? "Galaxy view" : "Station view"}
                    </button>
                  </div>
                </div>

                <div className="grid flex-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[28px] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300/75">Live map</div>
                        <h3 className="mt-1 text-lg font-black">{state.view === "station" ? "Station modules" : "Galaxy nodes"}</h3>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                        {state.view === "station" ? "Core pulse" : "Galaxy intel"}
                      </div>
                    </div>

                    <div className="mt-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {moduleCards.map((module) => {
                          const current = state.station[module.id];
                          return (
                            <button
                              key={module.id}
                              onClick={() => dispatch({ type: "UPGRADE_MODULE", moduleId: module.id })}
                              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-left transition hover:bg-white/[0.08]"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-white/70">
                                    <Cpu size={16} className="text-cyan-300" />
                                    {module.label}
                                  </div>
                                  <div className="mt-1 text-xs text-white/45">{module.desc}</div>
                                </div>
                                <div className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] font-black text-white/70">L{current.level}</div>
                              </div>
                              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" style={{ width: `${current.integrity}%` }} />
                              </div>
                              <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">{current.integrity}% integrity</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-4 rounded-[28px] border border-white/10 bg-black/25 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-300/75">Galaxy nodes</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Selected: {selectedNode.name}</div>
                      </div>
                      <div className="mt-3 grid gap-3">
                        {state.galaxy.nodes.map((node) => {
                          const selected = node.id === state.galaxy.selectedNodeId;
                          return (
                            <button
                              key={node.id}
                              onClick={() => {
                                dispatch({ type: "SELECT_NODE", nodeId: node.id });
                                dispatch({ type: "SET_VIEW", view: "galaxy" });
                                setActiveQuick("galaxy");
                              }}
                              className={`rounded-2xl border p-3 text-left transition ${selected ? "border-cyan-400/30 bg-cyan-400/10" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"}`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <div className="text-sm font-black uppercase tracking-[0.2em]">{node.name}</div>
                                  <div className="text-[11px] text-white/45">{node.kind}</div>
                                </div>
                                <div
                                  className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
                                    node.missionReady
                                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                                      : node.discovered
                                        ? "border-amber-400/20 bg-amber-400/10 text-amber-100"
                                        : "border-white/10 bg-white/5 text-white/45"
                                  }`}
                                >
                                  {node.missionReady ? "Mission ready" : node.discovered ? "Scanning" : "Hidden"}
                                </div>
                              </div>
                              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${node.progress}%` }} />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[28px] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                      <div className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-300/75">Quick state</div>
                      <h3 className="mt-1 text-lg font-black">Station, resources, avatar</h3>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {[
                          { key: "alpha" as const, label: MATERIAL_LABELS.alpha, value: state.resources.alpha, color: "from-amber-400 to-orange-500" },
                          { key: "beta" as const, label: MATERIAL_LABELS.beta, value: state.resources.beta, color: "from-sky-400 to-cyan-400" },
                          { key: "gamma" as const, label: MATERIAL_LABELS.gamma, value: state.resources.gamma, color: "from-fuchsia-400 to-violet-500" },
                          { key: "delta" as const, label: MATERIAL_LABELS.delta, value: state.resources.delta, color: "from-emerald-400 to-lime-400" },
                        ].map((item) => (
                          <div key={item.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/45">{item.label}</div>
                            <div className="mt-1 text-2xl font-black">{item.value}</div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                              <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${Math.min(100, item.value)}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Stability</div>
                          <div className="mt-1 text-lg font-black">{state.vitals.stability}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Energy</div>
                          <div className="mt-1 text-lg font-black">{state.vitals.energy}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Avatar</div>
                          <div className="mt-1 text-lg font-black">L{state.avatar.level}</div>
                          <div className="text-[11px] text-white/45">{TRAIT_LABELS[state.avatar.trait]}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Wave</div>
                          <div className="mt-1 text-lg font-black">{state.wave.countdown}s</div>
                          <div className="text-[11px] text-white/45">{state.wave.autoDefense ? "Auto defense" : "Manual"}</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                      <div className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300/75">Active shell</div>
                      <div className="mt-2 text-xl font-black">{state.view === "station" ? "Station focus" : "Galaxy focus"}</div>
                      <div className="mt-2 text-sm text-white/45">
                        {state.view === "station"
                          ? "Reactor and support systems drive the current loop."
                          : "Map nodes, missions and unlocks are now the primary layer."}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.18em]">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">Tick {state.tick}</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">View {state.view}</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">Quick {activeQuick}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-white/10 bg-white/[0.03] px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                  Phase 2 keeps the same shell. Only the state and progression layer change.
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className="fixed bottom-0 left-0 right-0 p-2.5 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-black/40 backdrop-blur-xl border-t border-white/10 z-40 lg:static lg:bg-transparent lg:border-none lg:p-4 lg:max-w-4xl lg:mx-auto">
          <div className="mb-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white/40">
            Keep the grid steady and prepare for the next wave.
          </div>
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <div className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300/75">Quick Commands</div>
            <button
              type="button"
              onClick={() => dispatch({ type: "SET_VIEW", view: state.view === "station" ? "galaxy" : "station" })}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-white/70"
            >
              {state.view === "station" ? "Galaxy" : "Station"}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-1.5 lg:hidden">
            {quickActions.slice(0, 3).map((action) => (
              <button
                key={action.key}
                onClick={action.onClick}
                className={`flex h-12 min-h-[46px] flex-col items-center justify-center gap-0.5 rounded-xl border px-1.5 text-white/80 ${activeQuick === action.group ? "border-cyan-300/30 bg-cyan-400/10" : "border-white/10 bg-white/5"}`}
              >
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.1em]">
                  <LayoutGrid size={12} />
                  <span>{action.label}</span>
                </div>
              </button>
            ))}
            <button type="button" className="relative flex h-12 min-h-[46px] flex-col items-center justify-center gap-0.5 rounded-xl border border-white/10 bg-white/5 px-1.5 text-white/80">
              <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.1em]">
                <Layers size={12} />
                <span>More</span>
              </div>
              <div className="text-[8px] uppercase tracking-[0.14em] text-white/45">+{quickActions.length - 3}</div>
            </button>
          </div>
          <div className="hidden gap-2 overflow-x-auto no-scrollbar scrollbar-hide pb-1 lg:flex">
            {quickActions.map((action) => (
              <button
                key={action.key}
                onClick={action.onClick}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/80 ${activeQuick === action.group ? "border-cyan-300/30 bg-cyan-400/10" : "border-white/10 bg-white/5"}`}
              >
                <Zap size={12} />
                {action.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {state.galaxy.hubUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,620px)] -translate-x-1/2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            Core level 2 is online. Galaxy headquarters is now part of the shell.
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
