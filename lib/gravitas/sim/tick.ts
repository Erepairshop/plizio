import type { StarholdState } from "./types";
import { applyStarholdEvents } from "./events";
import { clamp } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { coolDownResonance } from "./activation";

export function advanceStarholdTick(state: StarholdState): StarholdState {
  const reactorBoost = state.modules.reactor.online ? 2 : 0;
  const logisticsDrain = state.modules.logistics.online ? 0 : 1 + Math.floor(state.marks.supplyStress / 4);
  const sensorStability = state.modules.sensor.online ? 1 : 0;
  const phaseDrain = state.phase === "activation" ? 1 : 0;

  // Anomalies impact
  let anomalyPowerDrain = 0;
  let anomalyStabilityDrain = 0;
  state.anomalies.forEach(a => {
    if (a.id === "voidLeak") anomalyStabilityDrain += a.severity;
    if (a.id === "coreTremor") anomalyPowerDrain += Math.floor(a.severity / 2);
    if (a.id === "materialEntropy") { /* handled in commands/scavenge */ }
  });

  // Marks impact
  const scarDrain = Math.floor(state.marks.reactorScar / 3);
  const shellDrain = Math.floor(state.marks.shellStrain / 2);
  const voidDrain = Math.floor(state.marks.voidEcho / 3);
  const totalMarks = state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress + state.marks.voidEcho;
  const driftInstability = totalMarks > 8 ? Math.floor(totalMarks / 4) : 0;

  // Resonance effect
  const resonancePowerDrain = Math.floor(state.resonance / 25);

  // Entropy effect (soft trap)
  const entropyStabilityDrain = Math.floor(state.entropy / 15);
  const entropyPowerDrain = Math.floor(state.entropy / 20);

  const nextPower = clamp(state.resources.power + reactorBoost - logisticsDrain - phaseDrain - scarDrain - resonancePowerDrain - entropyPowerDrain - anomalyPowerDrain);
  const nextStability = clamp(
    state.resources.stability +
      sensorStability -
      (state.modules.reactor.integrity < 40 ? 1 : 0) -
      (state.modules.core.load > 75 ? 1 : 0) -
      shellDrain -
      voidDrain -
      anomalyStabilityDrain -
      entropyStabilityDrain -
      driftInstability
  );

  let nextModules = { ...state.modules };
  let alert = state.alert;

  // Glitch logic
  if (totalMarks > 10 && state.tick % 5 === 0) {
    const affectedModuleId = (["reactor", "logistics", "core", "sensor"] as const)[state.tick % 4];
    const damage = 2 + Math.floor(totalMarks / 5);
    nextModules[affectedModuleId] = {
      ...nextModules[affectedModuleId],
      integrity: clamp(nextModules[affectedModuleId].integrity - damage),
    };
    alert = GRAVITAS_TEXT.alerts.driftGlitch(nextModules[affectedModuleId].name);
  }

  const nextPhase =
    state.avatarAwake && state.phase !== "awakened" ? "awakened" : state.phase;

  const nextAlert =
    nextPower < 8
      ? GRAVITAS_TEXT.alerts.critPower
      : nextStability < 25
        ? GRAVITAS_TEXT.alerts.critStability
        : alert;

  // Anomaly duration decay
  const nextAnomalies = state.anomalies
    .map(a => a.duration !== undefined ? { ...a, duration: a.duration - 1 } : a)
    .filter(a => a.duration === undefined || a.duration > 0);

  // Entropy logic
  let nextEntropy = state.entropy;
  if (totalMarks > 12) {
    nextEntropy = clamp(nextEntropy + Math.floor(totalMarks / 6));
  } else if (totalMarks < 5) {
    nextEntropy = clamp(nextEntropy - 1);
  }

  const nextState = {
    ...state,
    tick: state.tick + 1,
    phase: nextPhase,
    resources: {
      ...state.resources,
      power: nextPower,
      stability: nextStability,
    },
    modules: nextModules,
    marks: {
      reactorScar: clamp(state.marks.reactorScar - (state.modules.reactor.integrity >= 70 ? 1 : 0)),
      shellStrain: clamp(state.marks.shellStrain - (state.phase === "boot" ? 1 : 0)),
      supplyStress: clamp(state.marks.supplyStress - (state.modules.logistics.online ? 1 : 0)),
      voidEcho: clamp(state.marks.voidEcho - (state.modules.core.integrity >= 80 ? 1 : 0)),
    },
    anomalies: nextAnomalies,
    entropy: nextEntropy,
    alert: nextAlert,
  };

  return applyStarholdEvents(coolDownResonance(nextState));
}
