import type { StarholdCommand, StarholdState } from "./types";
import { clamp, pushJournal, updateModuleIntegrity } from "./shared";
import { channelActivationPulse, unlockActivationTransfer } from "./activation";
import { resolveStarholdEvent } from "./events";

export function applyStarholdCommand(state: StarholdState, command: StarholdCommand): StarholdState {
  if (state.pendingEvent && command.type !== "RESOLVE_EVENT") {
    return {
      ...state,
      alert: "Resolve the current anomaly before issuing a new command.",
    };
  }

  switch (command.type) {
    case "SCAVENGE": {
      const materialsGain = state.modules.logistics.online ? 5 : 3;
      const powerGain = state.modules.sensor.online ? 2 : 0;
      return {
        ...state,
        resources: {
          ...state.resources,
          materials: clamp(state.resources.materials + materialsGain),
          power: clamp(state.resources.power + powerGain),
          stability: clamp(state.resources.stability - 1),
        },
        alert: "Scavenger drones returned with salvage.",
        journal: pushJournal(state, `Recovered ${materialsGain} materials from the outer ring.`),
      };
    }
    case "STABILIZE_REACTOR": {
      if (state.resources.materials < 2) {
        return {
          ...state,
          alert: "Not enough materials to stabilize the reactor.",
        };
      }
      return {
        ...state,
        resources: {
          ...state.resources,
          materials: clamp(state.resources.materials - 2),
          power: clamp(state.resources.power + 8),
          stability: clamp(state.resources.stability + 5),
        },
        modules: {
          ...state.modules,
          reactor: {
            ...updateModuleIntegrity(state, "reactor", 6),
            load: clamp(state.modules.reactor.load - 10),
          },
        },
        alert: "Reactor pulse stabilized.",
        journal: pushJournal(state, "Reactor field realigned successfully."),
      };
    }
    case "REPAIR_MODULE": {
      if (state.resources.materials < 4) {
        return {
          ...state,
          alert: "Repair aborted. Materials too low.",
        };
      }
      const target = state.modules[command.moduleId];
      const nextIntegrity = clamp(target.integrity + 18);
      return {
        ...state,
        resources: {
          ...state.resources,
          materials: clamp(state.resources.materials - 4),
          stability: clamp(state.resources.stability + 2),
        },
        modules: {
          ...state.modules,
          [command.moduleId]: {
            ...target,
            integrity: nextIntegrity,
            online: nextIntegrity >= 45 || target.online,
            load: target.online ? target.load : 18,
          },
        },
        alert: `${target.name} patched and recalibrated.`,
        journal: pushJournal(state, `${target.name} integrity restored to ${nextIntegrity}%.`),
      };
    }
    case "REROUTE_TO_CORE": {
      if (state.resources.power < 6) {
        return {
          ...state,
          alert: "Insufficient power to reroute into the core chamber.",
        };
      }
      return unlockActivationTransfer(state);
    }
    case "CHANNEL_TO_CORE": {
      return channelActivationPulse(state, command.amount);
    }
    case "RESOLVE_EVENT": {
      return resolveStarholdEvent(state, command.optionId);
    }
    default:
      return state;
  }
}
