import type { Phase2State } from "./types";

export function createInitialPhase2State(): Phase2State {
  return {
    tick: 0,
    view: "station",
    resources: {
      alpha: 36,
      beta: 24,
      gamma: 16,
      delta: 8,
    },
    vitals: {
      stability: 92,
      energy: 84,
    },
    station: {
      reactor: { level: 1, integrity: 100 },
      logistics: { level: 1, integrity: 100 },
      sensor: { level: 1, integrity: 100 },
      core: { level: 1, integrity: 100 },
    },
    avatar: {
      level: 1,
      xp: 0,
      trait: "curious",
      power: 12,
    },
    galaxy: {
      intel: 0,
      hubUnlocked: false,
      selectedNodeId: "helios-belt",
      nodes: [
        {
          id: "helios-belt",
          name: "Helios Belt",
          kind: "asteroid",
          discovered: true,
          missionReady: false,
          progress: 0,
          reward: { alpha: 6, beta: 2, gamma: 0, delta: 0, xp: 8, intel: 2 },
        },
        {
          id: "luna-relay",
          name: "Luna Relay",
          kind: "relay",
          discovered: false,
          missionReady: false,
          progress: 0,
          reward: { alpha: 2, beta: 4, gamma: 3, delta: 0, xp: 10, intel: 4 },
        },
        {
          id: "cinder-planet",
          name: "Cinder Planet",
          kind: "planet",
          discovered: false,
          missionReady: false,
          progress: 0,
          reward: { alpha: 2, beta: 2, gamma: 5, delta: 2, xp: 14, intel: 6 },
        },
        {
          id: "abyss-mine",
          name: "Abyss Mine",
          kind: "mine",
          discovered: false,
          missionReady: false,
          progress: 0,
          reward: { alpha: 1, beta: 2, gamma: 4, delta: 5, xp: 16, intel: 8 },
        },
      ],
    },
    wave: {
      countdown: 90,
      seed: 0,
      shieldTicks: 0,
      armorTicks: 0,
      autoDefense: true,
      lastImpactTick: null,
    },
    log: [
      { tick: 0, text: "Phase 2 scaffold initialized." },
      { tick: 0, text: "Station, galaxy and avatar layers are now separated." },
    ],
  };
}
