import type { StarholdEventDefinition, StarholdState } from "./types";
import { clamp, pushJournal } from "./shared";

const STARHOLD_EVENTS: StarholdEventDefinition[] = [
  {
    id: "powerFluctuation",
    minTick: 4,
    cooldown: 6,
    shouldTrigger: (state) => state.resources.power <= 12 || state.modules.reactor.integrity < 45,
    create: () => ({
      id: "powerFluctuation",
      title: "Power fluctuation",
      body: "A surge is running through the outer shell. You can vent it fast or absorb it carefully.",
      options: [
        { id: "vent", label: "Vent the surge" },
        { id: "absorb", label: "Absorb into reserves" },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "absorb") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 4),
            stability: clamp(state.resources.stability - 2),
          },
          alert: "The fluctuation was absorbed into the reserve grid.",
          journal: pushJournal(state, "You captured the surge, but the station frame trembled."),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          power: clamp(state.resources.power - 1),
          stability: clamp(state.resources.stability + 1),
        },
        alert: "Excess charge vented into the dark.",
        journal: pushJournal(state, "The surge was vented safely through the outer hull."),
      };
    },
  },
  {
    id: "materialBottleneck",
    minTick: 6,
    cooldown: 7,
    shouldTrigger: (state) => state.resources.materials <= 6 && !state.modules.logistics.online,
    create: () => ({
      id: "materialBottleneck",
      title: "Material bottleneck",
      body: "Supply flow is collapsing. You can send a risky drone sweep or strip dormant plating.",
      options: [
        { id: "droneSweep", label: "Launch drone sweep" },
        { id: "stripPlating", label: "Strip inner plating" },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "stripPlating") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 5),
            stability: clamp(state.resources.stability - 4),
          },
          alert: "Inner plating was stripped for emergency stock.",
          journal: pushJournal(state, "Emergency plating was cut loose to keep systems supplied."),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          materials: clamp(state.resources.materials + 3),
          power: clamp(state.resources.power - 2),
        },
        alert: "Drone sweep returned with limited salvage.",
        journal: pushJournal(state, "Scavenger drones found material, but burned precious power doing it."),
      };
    },
  },
  {
    id: "signalPulse",
    minTick: 8,
    cooldown: 10,
    shouldTrigger: (state) => state.phase === "activation" && state.resources.activation >= 25,
    create: () => ({
      id: "signalPulse",
      title: "Signal pulse",
      body: "Something inside the shell answers. You can synchronize softly or amplify the response.",
      options: [
        { id: "synchronize", label: "Synchronize softly" },
        { id: "amplify", label: "Amplify response" },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "amplify") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 8),
            stability: clamp(state.resources.stability - 3),
          },
          alert: "The shell answered with a stronger pulse.",
          journal: pushJournal(state, "You forced a stronger echo from the shell at a structural cost."),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          activation: clamp(state.resources.activation + 4),
          stability: clamp(state.resources.stability + 1),
        },
        alert: "The shell pulse aligned cleanly.",
        journal: pushJournal(state, "A careful synchronization steadied the shell resonance."),
      };
    },
  },
];

export function applyStarholdEvents(state: StarholdState): StarholdState {
  if (state.pendingEvent) {
    return state;
  }

  let nextState = state;

  for (const event of STARHOLD_EVENTS) {
    const lastTick = nextState.lastEventTick[event.id] ?? -Infinity;
    if (nextState.tick < event.minTick) continue;
    if (nextState.tick - lastTick < event.cooldown) continue;
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
    };
  }

  return event.resolve(state, optionId);
}
