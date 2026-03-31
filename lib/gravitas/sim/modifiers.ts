import type { StarholdState } from "./types";

export interface StarholdModifiers {
  shellStrainReduction: number;
  recoveryEfficiency: number;
  powerCostMod: number;
  gridSynergy: boolean;    // Reactor + Core > 80% — existing
  sensorBoost: boolean;    // Reactor + Sensor both online & integrity > 60: sensor gives +2 stability/tick instead of +1
  coreShield: boolean;     // Logistics + Core both online & integrity > 60: core takes 50% less integrity damage from glitches
  fullGrid: boolean;       // All 4 modules online & integrity > 60: +2 power/tick, marks decay 2× faster
  entropyDampener: boolean;
  markShield: boolean;
  moduleCoolant: boolean;
  resonanceAmplifier: boolean;
  voidLens: boolean;
}

export function getStarholdModifiers(state: StarholdState): StarholdModifiers {
  const unlocked = state.progression.unlockedItems;
  const { reactor, logistics, core, sensor } = state.modules;

  const gridSynergy = reactor.integrity >= 80 && core.integrity >= 80;

  const reactorHealthy = reactor.online && reactor.integrity > 60;
  const logisticsHealthy = logistics.online && logistics.integrity > 60;
  const coreHealthy = core.online && core.integrity > 60;
  const sensorHealthy = sensor.online && sensor.integrity > 60;

  const sensorBoost = reactorHealthy && sensorHealthy;
  const coreShield = logisticsHealthy && coreHealthy;
  const fullGrid = reactorHealthy && logisticsHealthy && coreHealthy && sensorHealthy;

  return {
    shellStrainReduction: unlocked.includes("shield_efficiency") ? 1 : 0,
    recoveryEfficiency: (state.threat.aftershock > 0 || state.crisis) ? 1.5 : 1.0,
    powerCostMod: 1 + Math.floor(state.entropy / 20),
    gridSynergy,
    sensorBoost,
    coreShield,
    fullGrid,
    entropyDampener: state.progression.unlockedItems.includes("entropy_dampener"),
    markShield: state.progression.unlockedItems.includes("mark_shield"),
    moduleCoolant: state.progression.unlockedItems.includes("module_coolant"),
    resonanceAmplifier: state.progression.unlockedItems.includes("resonance_amplifier"),
    voidLens: state.progression.unlockedItems.includes("void_lens"),
  };
}

