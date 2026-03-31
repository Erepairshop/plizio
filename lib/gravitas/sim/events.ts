import type { StarholdEventDefinition, StarholdState } from "./types";
import { clamp, pushJournal } from "./shared";

function chainedEvent(
  base: {
    id: "powerFluctuation" | "materialBottleneck" | "signalPulse" | "sensorAnomaly" | "logisticsCollapse";
    title: string;
    body: string;
    options: { id: string; label: string }[];
  },
  chainId: string,
  chainStep: number,
  chainTotal: number
) {
  return {
    ...base,
    chainId,
    chainStep,
    chainTotal,
  };
}

const STARHOLD_EVENTS: StarholdEventDefinition[] = [
  {
    id: "powerFluctuation",
    minTick: 4,
    cooldown: 6,
    shouldTrigger: (state) => state.resources.power <= 12 || state.modules.reactor.integrity < 45,
    create: () => ({
      ...chainedEvent(
        {
          id: "powerFluctuation",
          title: "Power fluctuation",
          body: "A current runs through the hull. It was not scheduled. Vent it fast or absorb it carefully.",
          options: [
            { id: "vent", label: "Vent the surge" },
            { id: "absorb", label: "Absorb into reserves" },
          ],
        },
        "reactor-surge",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "absorb") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "powerFluctuation",
              title: "Grid overload",
              body: "The reserve grid is swelling. Lock the excess into the core spine or bleed it through the reactor housing.",
              options: [
                { id: "lockCore", label: "Lock into core spine" },
                { id: "bleedHousing", label: "Bleed through housing" },
              ],
            },
            "reactor-surge",
            2,
            2
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 4),
            stability: clamp(state.resources.stability - 2),
          },
          alert: "Absorbed. But the grid is swelling now.",
          journal: pushJournal(state, "You captured the surge, but the station frame trembled."),
        };
      }

      if (optionId === "lockCore") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 6),
            stability: clamp(state.resources.stability - 3),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 2),
          },
          modules: {
            ...state.modules,
            core: {
              ...state.modules.core,
              load: clamp(state.modules.core.load + 10),
            },
          },
          alert: "Excess charge locked into the core spine.",
          journal: pushJournal(state, "The overload was redirected into the core, accelerating activation at a structural cost."),
        };
      }

      if (optionId === "bleedHousing") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 2),
            stability: clamp(state.resources.stability + 2),
          },
          marks: {
            ...state.marks,
            reactorScar: clamp(state.marks.reactorScar + 2),
          },
          modules: {
            ...state.modules,
            reactor: {
              ...state.modules.reactor,
              integrity: clamp(state.modules.reactor.integrity - 4),
            },
          },
          alert: "The overload burned through the outer housing and cleared.",
          journal: pushJournal(state, "You protected the frame, but the reactor housing took the scar."),
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
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 3),
          },
          alert: "Inner plating was stripped for emergency stock.",
          journal: pushJournal(state, "Plating stripped. The walls are thinner now."),
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
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 1),
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
      ...chainedEvent(
        {
          id: "signalPulse",
          title: "Signal pulse",
          body: "Something inside the shell answers. You can synchronize softly or amplify the response.",
          options: [
            { id: "synchronize", label: "Synchronize softly" },
            { id: "amplify", label: "Amplify response" },
          ],
        },
        "shell-echo",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "amplify") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "signalPulse",
              title: "Echo fracture",
              body: "The echo came back broken. Hold resonance steady or break contact and regroup.",
              options: [
                { id: "holdResonance", label: "Hold resonance" },
                { id: "breakContact", label: "Break contact" },
              ],
            },
            "shell-echo",
            2,
            2
          ),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 8),
            stability: clamp(state.resources.stability - 3),
          },
          alert: "The shell answered harder than expected.",
          journal: pushJournal(state, "You forced a stronger echo from the shell at a structural cost."),
        };
      }

      if (optionId === "holdResonance") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 10),
            stability: clamp(state.resources.stability - 2),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 1),
          },
          alert: "The fractured echo was held in resonance.",
          journal: pushJournal(state, "You kept the shell aligned through the fracture and gained a deeper response."),
        };
      }

      if (optionId === "breakContact") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 2),
            stability: clamp(state.resources.stability + 2),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain - 1),
          },
          alert: "Contact was broken before the shell destabilized further.",
          journal: pushJournal(state, "You cut the resonance and preserved the station at the cost of momentum."),
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
  {
    id: "driftLock",
    minTick: 12,
    cooldown: 14,
    shouldTrigger: (state) =>
      state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress >= 7 &&
      state.phase !== "boot",
    create: () => ({
      id: "driftLock",
      title: "Drift lock warning",
      body: "Too many scars are pulling the station toward a repeating pattern. Break the loop now or let the system fold inward.",
      options: [
        { id: "breakLoop", label: "Break the loop" },
        { id: "foldInward", label: "Let it fold inward" },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "foldInward") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 6),
            stability: clamp(state.resources.stability - 5),
          },
          marks: {
            reactorScar: clamp(state.marks.reactorScar + 1),
            shellStrain: clamp(state.marks.shellStrain + 2),
            supplyStress: clamp(state.marks.supplyStress + 1),
          },
          alert: "The station folded inward and the pattern deepened.",
          journal: pushJournal(state, "You let the repeating pattern close around the station. It answered, but not cleanly."),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          power: clamp(state.resources.power - 4),
          materials: clamp(state.resources.materials - 3),
          stability: clamp(state.resources.stability + 2),
        },
        marks: {
          reactorScar: clamp(state.marks.reactorScar - 1),
          shellStrain: clamp(state.marks.shellStrain - 2),
          supplyStress: clamp(state.marks.supplyStress - 1),
        },
        alert: "The repeating pattern was broken before it sealed.",
        journal: pushJournal(state, "You burned resources to break the drift before it hardened into a loop."),
      };
    },
  },
  {
    id: "sensorAnomaly",
    minTick: 10,
    cooldown: 12,
    shouldTrigger: (state) => state.modules.sensor.online && state.tick > 10,
    create: () => ({
      ...chainedEvent(
        {
          id: "sensorAnomaly",
          title: "Sensor anomaly",
          body: "Something out there is transmitting. Amplify the array or ignore it.",
          options: [
            { id: "amplifyArray", label: "Amplify array" },
            { id: "ignoreSignal", label: "Ignore signal" },
          ],
        },
        "sensor-anomaly",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "amplifyArray") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "sensorAnomaly",
              title: "Partial station map",
              body: "The signal resolved into a partial station map. Integrate it or archive it.",
              options: [
                { id: "integrateMap", label: "Integrate map" },
                { id: "archiveSafely", label: "Archive safely" },
              ],
            },
            "sensor-anomaly",
            2,
            2
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 3),
            stability: clamp(state.resources.stability + 3),
          },
          modules: {
            ...state.modules,
            sensor: {
              ...state.modules.sensor,
              load: clamp(state.modules.sensor.load + 10),
            },
          },
          alert: "The array was amplified. A signal is resolving.",
          journal: pushJournal(state, "You pushed the sensor array harder and caught something beyond the hull."),
        };
      }

      if (optionId === "integrateMap") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 6),
            stability: clamp(state.resources.stability + 2),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress - 2),
          },
          alert: "The partial map was integrated into the navigation layer.",
          journal: pushJournal(state, "Integrating the signal map revealed supply caches and eased logistics strain."),
        };
      }

      if (optionId === "archiveSafely") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability + 3),
          },
          alert: "The signal data was archived without incident.",
          journal: pushJournal(state, "You archived the partial map. The station holds steady."),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability + 1),
        },
        alert: "The faint signal was ignored.",
        journal: pushJournal(state, "You let the signal fade. Nothing outside warranted the risk."),
      };
    },
  },
  {
    id: "logisticsCollapse",
    minTick: 8,
    cooldown: 10,
    shouldTrigger: (state) =>
      state.modules.logistics.integrity < 35 && state.marks.supplyStress >= 3,
    create: () => ({
      ...chainedEvent(
        {
          id: "logisticsCollapse",
          title: "Logistics collapse",
          body: "Supply routes are seizing up. Reroute through backup conduits or force the main line.",
          options: [
            { id: "backupConduits", label: "Backup conduits" },
            { id: "forceMainLine", label: "Force main line" },
          ],
        },
        "logistics-collapse",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "backupConduits") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "logisticsCollapse",
              title: "Conduits under strain",
              body: "Backup conduits are holding but strained. Reinforce them or accept the fragile state.",
              options: [
                { id: "reinforce", label: "Reinforce" },
                { id: "acceptFragile", label: "Accept fragile" },
              ],
            },
            "logistics-collapse",
            2,
            2
          ),
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 2),
            stability: clamp(state.resources.stability + 2),
          },
          alert: "Supply rerouted through backup conduits.",
          journal: pushJournal(state, "You shifted flow to the backup conduits. They're holding, but barely."),
        };
      }

      if (optionId === "forceMainLine") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 4),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 2),
          },
          modules: {
            ...state.modules,
            logistics: {
              ...state.modules.logistics,
              integrity: clamp(state.modules.logistics.integrity - 8),
            },
          },
          alert: "The main line was forced open but took structural damage.",
          journal: pushJournal(state, "You forced the main supply line through. Materials flowed, but the conduit cracked."),
        };
      }

      if (optionId === "reinforce") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 3),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress - 1),
          },
          modules: {
            ...state.modules,
            logistics: {
              ...state.modules.logistics,
              integrity: clamp(state.modules.logistics.integrity + 10),
            },
          },
          alert: "Backup conduits reinforced and holding.",
          journal: pushJournal(state, "You spent materials to shore up the conduits. Supply stress eased and logistics stabilized."),
        };
      }

      if (optionId === "acceptFragile") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability - 2),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 1),
          },
          alert: "The fragile conduit state was accepted.",
          journal: pushJournal(state, "You left the conduits as-is. They'll hold for now, but the stress is building."),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        alert: "Logistics event resolved.",
        journal: pushJournal(state, "The logistics crisis passed without further action."),
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
