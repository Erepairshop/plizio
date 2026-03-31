import type { StarholdState } from "./types";
import { applyStarholdEvents } from "./events";
import { clamp } from "./shared";

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
      ? "Power reserves critically low."
      : nextStability < 25
        ? "Station stability slipping."
        : state.alert;

  const nextState = {
    ...state,
    tick: state.tick + 1,
    phase: nextPhase,
    resources: {
      ...state.resources,
      power: nextPower,
      stability: nextStability,
    },
    marks: {
      reactorScar: clamp(state.marks.reactorScar - (state.modules.reactor.integrity >= 70 ? 1 : 0)),
      shellStrain: clamp(state.marks.shellStrain - (state.phase === "boot" ? 1 : 0)),
      supplyStress: clamp(state.marks.supplyStress - (state.modules.logistics.online ? 1 : 0)),
    },
    alert: nextAlert,
  };

  return applyStarholdEvents(nextState);
}
