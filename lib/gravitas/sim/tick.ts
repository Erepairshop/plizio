import type { StarholdState } from "./types";
import { applyStarholdEvents } from "./events";
import { clamp, pushJournal } from "./shared";

export function advanceStarholdTick(state: StarholdState): StarholdState {
  const reactorBoost = state.modules.reactor.online ? 2 : 0;
  const logisticsDrain = state.modules.logistics.online ? 0 : 1 + Math.floor(state.marks.supplyStress / 4);
  const sensorStability = state.modules.sensor.online ? 1 : 0;
  const phaseDrain = state.phase === "activation" ? 1 : 0;
  const scarDrain = Math.floor(state.marks.reactorScar / 3);
  const shellDrain = Math.floor(state.marks.shellStrain / 3);

  const nextPower = clamp(state.resources.power + reactorBoost - logisticsDrain - phaseDrain - scarDrain);
  const nextStability = clamp(
    state.resources.stability +
      sensorStability -
      (state.modules.reactor.integrity < 40 ? 1 : 0) -
      (state.modules.core.load > 75 ? 1 : 0) -
      shellDrain
  );

  const nextPhase =
    state.avatarAwake && state.phase !== "awakened" ? "awakened" : state.phase;

  const nextAlert =
    nextPower < 8
      ? "Power critical. The lights are dimming."
      : nextStability < 25
        ? "Stability falling. The frame groans."
        : state.alert;

  const nextMarks = {
    reactorScar: clamp(state.marks.reactorScar - (state.modules.reactor.integrity >= 70 ? 1 : 0)),
    shellStrain: clamp(state.marks.shellStrain - (state.phase === "boot" ? 1 : 0)),
    supplyStress: clamp(state.marks.supplyStress - (state.modules.logistics.online ? 1 : 0)),
  };

  // ── Drift spiral ─────────────────────────────────────────────────────────
  const marksTotal = nextMarks.reactorScar + nextMarks.shellStrain + nextMarks.supplyStress;

  const newDriftLevel =
    marksTotal >= 10 ? 3 :
    marksTotal >= 7  ? 2 :
    marksTotal >= 4  ? 1 :
    0;

  const prevDriftLevel = state.driftLevel;

  // Per-tick penalties while trapped / critical
  const driftPowerDrain  = newDriftLevel >= 2 ? 1 : 0;
  const driftStabDrain   = newDriftLevel >= 2 ? 1 : 0;
  const driftActiveDrain = newDriftLevel === 3 ? 1 : 0;

  const driftedPower      = clamp(nextPower - driftPowerDrain);
  const driftedStability  = clamp(nextStability - driftStabDrain);
  const driftedActivation = clamp(state.resources.activation - driftActiveDrain);

  // Drift tick counter: increment while trapped/critical, reset when safe/warning
  const newDriftTick =
    newDriftLevel >= 2 ? state.driftTick + 1 : 0;

  // Journal entry only when the level changes
  let nextJournal = state.journal;
  if (newDriftLevel !== prevDriftLevel) {
    const msg =
      prevDriftLevel > 0 && newDriftLevel === 0
        ? "Drift pattern broken. The station is breathing again."
        : newDriftLevel === 1
          ? "Station drift detected. Accumulated damage is weighing on the system."
          : newDriftLevel === 2
            ? "The station is caught in a repeating pattern. Breaking free will cost resources."
            : "Critical drift spiral. The station is losing coherence.";
    nextJournal = pushJournal({ ...state, journal: state.journal }, msg);
  }
  // ─────────────────────────────────────────────────────────────────────────

  const nextState = {
    ...state,
    tick: state.tick + 1,
    phase: nextPhase,
    resources: {
      ...state.resources,
      power: driftedPower,
      stability: driftedStability,
      activation: driftedActivation,
    },
    marks: nextMarks,
    alert: nextAlert,
    driftLevel: newDriftLevel,
    driftTick: newDriftTick,
    journal: nextJournal,
  };

  return applyStarholdEvents(nextState);
}
