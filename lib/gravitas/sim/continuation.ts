import type { StarholdModuleId, StarholdState } from "./types";
import { clamp } from "./shared";
import { isDemoChapter } from "./chapter";

function getModuleCondition(state: StarholdState, moduleId: StarholdModuleId): number {
  const module = state.modules[moduleId];
  if (!module.online) return 0;
  return clamp(module.integrity);
}

export function computeContinuationVitals(state: StarholdState) {
  const reactor = getModuleCondition(state, "reactor");
  const logistics = getModuleCondition(state, "logistics");
  const sensor = getModuleCondition(state, "sensor");

  const stability = clamp(Math.round(reactor * 0.5 + sensor * 0.25 + logistics * 0.25));
  const power = clamp(Math.round(reactor * 0.8 + sensor * 0.1 + logistics * 0.1));
  const entropy = clamp(Math.round(100 - (sensor * 0.8 + reactor * 0.1 + logistics * 0.1)));

  return { stability, power, entropy };
}

export function getContinuationScavengeProfile(state: StarholdState) {
  const logistics = getModuleCondition(state, "logistics");
  const baseDuration = 180;
  const durationPenalty = (100 - logistics) / 100;
  const cycleDuration = Math.ceil(baseDuration * (1 + durationPenalty));

  return {
    cycleDuration,
    materialsGain: 2,
    logisticsEfficiency: logistics / 100,
  };
}

export function normalizeContinuationState(state: StarholdState): StarholdState {
  if (isDemoChapter(state)) return state;
  const vitals = computeContinuationVitals(state);
  return {
    ...state,
    phase: "awakened",
    avatarAwake: true,
    crisis: false,
    lockdown: false,
    lockdownDuration: 0,
    stationLost: false,
    recoveryPriority: null,
    resources: {
      ...state.resources,
      power: vitals.power,
      stability: vitals.stability,
      activation: 100,
    },
    entropy: vitals.entropy,
  };
}
