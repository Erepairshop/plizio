import type { StarholdState } from "../types";
import { isDemoChapter } from "../chapter";
import { STARHOLD_EVENTS } from "./catalog";

const SCRIPTED_PHASE_ONE_END_TICK = 180;
const SCRIPTED_PHASE_ONE_EVENT_1_TICK = 90;
const SCRIPTED_PHASE_ONE_EVENT_2_TICK = 135;

export function applyStarholdEvents(state: StarholdState): StarholdState {
  if (!isDemoChapter(state)) {
    return state;
  }

  if (state.pendingEvent || (state.eventQuietTicks ?? 0) > 0) {
    return state;
  }

  if (state.repairChallenge.active) {
    return state;
  }

  if (state.avatarPrepArmedTick !== null && state.tick < state.avatarPrepArmedTick) {
    return state;
  }

  // Demo tutorial flow: during the first three waves, only the wave recovery prompt should appear.
  if (!state.avatarAwake && state.threatCycle > 0 && state.threatCycle <= 3 && state.avatarPrepArmedTick === null) {
    return state;
  }

  if (!state.avatarAwake && state.tick < SCRIPTED_PHASE_ONE_END_TICK) {
    if ((state.lastEventTick.powerFluctuation ?? -Infinity) < 0 && state.tick >= SCRIPTED_PHASE_ONE_EVENT_1_TICK) {
      const pendingEvent = STARHOLD_EVENTS.find((event) => event.id === "powerFluctuation")!.create(state);
      return {
        ...state,
        pendingEvent,
        alert: pendingEvent.title,
        lastEventTick: {
          ...state.lastEventTick,
          powerFluctuation: state.tick,
        },
      };
    }

    if ((state.lastEventTick.signalPulse ?? -Infinity) < 0 && state.tick >= SCRIPTED_PHASE_ONE_EVENT_2_TICK) {
      const pendingEvent = STARHOLD_EVENTS.find((event) => event.id === "signalPulse")!.create(state);
      return {
        ...state,
        pendingEvent,
        alert: pendingEvent.title,
        lastEventTick: {
          ...state.lastEventTick,
          signalPulse: state.tick,
        },
      };
    }

    return state;
  }

  const introWindow = state.phase === "boot" && state.tick < 90;
  const onboardingWindow = !state.avatarAwake && state.tick < 80;
  if (introWindow) {
    return state;
  }

  let nextState = state;

  for (const event of STARHOLD_EVENTS) {
    const lastTick = nextState.lastEventTick[event.id] ?? -Infinity;
    const effectiveMinTick = onboardingWindow ? event.minTick + 16 : event.minTick;
    if (nextState.tick < effectiveMinTick) continue;
    if (nextState.tick - lastTick < event.cooldown) continue;
    if (onboardingWindow && event.id !== "powerFluctuation" && event.id !== "materialBottleneck" && event.id !== "signalPulse") continue;
    if (!event.shouldTrigger(nextState)) continue;

    const pendingEvent = event.create(nextState);

    nextState = {
      ...nextState,
      pendingEvent,
      alert: pendingEvent.title,
      lastEventTick: {
        ...nextState.lastEventTick,
        [event.id]: nextState.tick,
      },
    };
    break;
  }

  return nextState;
}

export function resolveStarholdEvent(state: StarholdState, optionId: string): StarholdState {
  if (!state.pendingEvent) return state;

  const event = STARHOLD_EVENTS.find((entry) => entry.id === state.pendingEvent?.id);
  if (!event) {
    return {
      ...state,
      pendingEvent: null,
      eventQuietTicks: Math.max(state.eventQuietTicks ?? 0, state.tick < 80 ? 14 : 8),
    };
  }

  const nextState = event.resolve(state, optionId);
  if (nextState.pendingEvent === null) {
    const quietTicks = state.tick < 80 ? 14 : 8;
    const cooldownPadding = state.tick < 80 ? 18 : 10;
    return {
      ...nextState,
      lastEventTick: {
        ...nextState.lastEventTick,
        [event.id]: state.tick + Math.max(cooldownPadding, event.cooldown + (state.tick < 80 ? 8 : 2)),
      },
      eventQuietTicks: Math.max(nextState.eventQuietTicks ?? 0, quietTicks),
    };
  }
  return nextState;
}
