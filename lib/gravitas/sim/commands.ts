import type { StarholdCommand, StarholdState } from "./types";
import { addResourceDelta, clamp, pushJournal, updateModuleIntegrity, withAlert, addModuleLoad } from "./shared";
import { canStartActivationTransfer, channelActivationPulse, unlockActivationTransfer } from "./activation";
import { getModuleActionProfile } from "./modules";
import { resolveStarholdEvent } from "./events";

export function applyStarholdCommand(state: StarholdState, command: StarholdCommand): StarholdState {
  if (state.pendingEvent && command.type !== "RESOLVE_EVENT") {
    return withAlert(state, "Resolve the current anomaly before issuing a new command.");
  }

  switch (command.type) {
    case "SCAVENGE": {
      const materialsGain = state.modules.logistics.online ? 5 : 3;
      const powerGain = state.modules.sensor.online ? 2 : 0;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: materialsGain,
          power: powerGain,
          stability: -1,
        }),
        alert: "Scavenger drones returned with salvage.",
        journal: pushJournal(state, `Recovered ${materialsGain} materials from the outer ring.`),
      };
    }
    case "STABILIZE_REACTOR": {
      if (state.resources.materials < 2) {
        return withAlert(state, "Not enough materials to stabilize the reactor.");
      }
      const profile = getModuleActionProfile("reactor");
      const nextLoad = addModuleLoad(state, "reactor", profile.loadShift).load;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: -profile.repairCost,
          power: 8,
          stability: 5,
        }),
        modules: {
          ...state.modules,
          reactor: {
            ...updateModuleIntegrity(state, "reactor", profile.repairGain),
            load: nextLoad,
          },
        },
        alert: "Reactor pulse stabilized.",
        journal: pushJournal(state, "Reactor field realigned successfully."),
      };
    }
    case "REPAIR_MODULE": {
      const profile = getModuleActionProfile(command.moduleId);
      if (state.resources.materials < profile.repairCost) {
        return withAlert(state, "Repair aborted. Materials too low.");
      }
      const target = state.modules[command.moduleId];
      const nextIntegrity = clamp(target.integrity + profile.repairGain);
      const nextLoad = addModuleLoad(state, command.moduleId, target.online ? 0 : profile.loadShift).load;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: -profile.repairCost,
          stability: 2,
        }),
        modules: {
          ...state.modules,
          [command.moduleId]: {
            ...target,
            integrity: nextIntegrity,
            online: nextIntegrity >= profile.onlineThreshold || target.online,
            load: nextLoad,
          },
        },
        alert: `${target.name} patched and recalibrated.`,
        journal: pushJournal(state, `${target.name} integrity restored to ${nextIntegrity}%.`),
      };
    }
    case "REROUTE_TO_CORE": {
      if (!canStartActivationTransfer(state)) {
        return withAlert(state, "Insufficient power to reroute into the core chamber.");
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

export interface GravitasActionSlot {
  id: string;
  label: string;
  hint: string;
  command: StarholdCommand;
  disabled?: boolean;
  emphasis?: "primary" | "secondary";
}

export function getGravitasActionSlots(selectedModule: keyof StarholdState["modules"], state: StarholdState): GravitasActionSlot[] {
  const moduleId = selectedModule;
  const module = state.modules[moduleId];
  const coreReady = canStartActivationTransfer(state);

  switch (moduleId) {
    case "reactor":
      return [
        {
          id: "stabilize",
          label: "Stabilize reactor",
          hint: "Dampen the current drift and refill the station buffer.",
          command: { type: "STABILIZE_REACTOR" },
        },
      ];
    case "logistics":
      return [
        {
          id: "scavenge",
          label: "Scavenge materials",
          hint: "Pull salvage from the outer ring.",
          command: { type: "SCAVENGE" },
        },
        {
          id: "repairLogistics",
          label: `Repair ${module.name}`,
          hint: "Reopen supply routing and reduce future drain.",
          command: { type: "REPAIR_MODULE", moduleId: "logistics" },
        },
      ];
    case "sensor":
      return [
        {
          id: "repairSensor",
          label: `Repair ${module.name}`,
          hint: "Bring the long-range distortion grid back online.",
          command: { type: "REPAIR_MODULE", moduleId: "sensor" },
        },
        {
          id: "scavenge",
          label: "Scavenge materials",
          hint: "Short salvage run to keep the prototype moving.",
          command: { type: "SCAVENGE" },
        },
      ];
    case "core":
    default:
      return [
        {
          id: "reroute",
          label: "Reroute power to core",
          hint: "Unlock the activation chamber and start the transfer.",
          command: { type: "REROUTE_TO_CORE" },
          disabled: !coreReady,
          emphasis: "primary",
        },
        {
          id: "repairCore",
          label: `Repair ${module.name}`,
          hint: "Reduce shell strain before the awakening run.",
          command: { type: "REPAIR_MODULE", moduleId: "core" },
        },
      ];
  }
}
