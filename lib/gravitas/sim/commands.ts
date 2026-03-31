import type { StarholdCommand, StarholdState } from "./types";
import { addResourceDelta, clamp, pushJournal, updateModuleIntegrity, withAlert, addModuleLoad } from "./shared";
import { canStartActivationTransfer, channelActivationPulse, unlockActivationTransfer } from "./activation";
import { getModuleActionProfile } from "./modules";
import { resolveStarholdEvent } from "./events";
import { GRAVITAS_TEXT } from "./content";

export function applyStarholdCommand(state: StarholdState, command: StarholdCommand): StarholdState {
  if (state.pendingEvent && command.type !== "RESOLVE_EVENT") {
    return withAlert(state, GRAVITAS_TEXT.alerts.resolveAnomaly);
  }

  switch (command.type) {
    case "SCAVENGE": {
      const entropy = state.anomalies.find(a => a.id === "materialEntropy");
      const entropyPenalty = entropy ? entropy.severity : 0;
      const materialsGain = clamp((state.modules.logistics.online ? 5 : 3) - entropyPenalty, 1);
      const powerGain = state.modules.sensor.online ? 2 : 0;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: materialsGain,
          power: powerGain,
          stability: -1,
        }),
        alert: GRAVITAS_TEXT.alerts.scavengeSuccess,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.recoveredMaterials(materialsGain)),
      };
    }
    case "STABILIZE_REACTOR": {
      if (state.resources.materials < 2) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noMaterials);
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
        alert: GRAVITAS_TEXT.alerts.reactorStabilized,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.reactorRealigned),
      };
    }
    case "REPAIR_MODULE": {
      const profile = getModuleActionProfile(command.moduleId);
      if (state.resources.materials < profile.repairCost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
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
        alert: GRAVITAS_TEXT.alerts.modulePatched(target.name),
        journal: pushJournal(state, GRAVITAS_TEXT.journal.integrityRestored(target.name, nextIntegrity)),
      };
    }
    case "REROUTE_TO_CORE": {
      if (!canStartActivationTransfer(state)) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerReroute);
      }
      return unlockActivationTransfer(state);
    }
    case "CHANNEL_TO_CORE": {
      return channelActivationPulse(state, command.amount);
    }
    case "DISTORTION_SWEEP": {
      if (state.resources.power < 6) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerDistortion);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -6,
          stability: 4,
        }),
        marks: {
          reactorScar: clamp(state.marks.reactorScar - 1),
          shellStrain: clamp(state.marks.shellStrain - 1),
          supplyStress: clamp(state.marks.supplyStress - 1),
          voidEcho: clamp(state.marks.voidEcho - 1),
        },
        alert: GRAVITAS_TEXT.alerts.distortionCleared,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.driftDampened),
      };
    }
    case "PURGE_ANOMALY": {
      const anomaly = state.anomalies.find(a => a.id === command.anomalyId);
      if (!anomaly) return state;
      const powerCost = anomaly.severity * 2;
      if (state.resources.power < powerCost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -powerCost,
          stability: 2,
        }),
        anomalies: state.anomalies.filter(a => a.id !== command.anomalyId),
        alert: GRAVITAS_TEXT.alerts.anomalyPurged(anomaly.name),
        journal: pushJournal(state, `Purged ${anomaly.name} from the station grid.`),
      };
    }
    case "OVERCLOCK_REACTOR": {
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: 20,
          stability: -8 * entropyMod,
        }),
        marks: {
          ...state.marks,
          reactorScar: clamp(state.marks.reactorScar + 3),
        },
        modules: {
          ...state.modules,
          reactor: {
            ...state.modules.reactor,
            integrity: clamp(state.modules.reactor.integrity - 12),
          }
        },
        alert: "Reactor core overdriven! Output surging!",
        journal: pushJournal(state, "You forced the reactor past safety limits for an immediate power surge."),
      };
    }
    case "OPTIMIZE_LOGISTICS": {
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: 12,
          power: -4 * entropyMod,
        }),
        marks: {
          ...state.marks,
          supplyStress: clamp(state.marks.supplyStress + 4),
        },
        modules: {
          ...state.modules,
          logistics: {
            ...state.modules.logistics,
            load: clamp(state.modules.logistics.load + 30),
          }
        },
        alert: "Logistics routes optimized for maximum throughput.",
        journal: pushJournal(state, "Drone flight paths were recalculated for better salvage yields at a cost of grid stress."),
      };
    }
    case "DEEP_SCAN": {
      if (state.resources.power < 12) {
        return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -12,
          stability: -3,
        }),
        marks: {
          ...state.marks,
          voidEcho: clamp(state.marks.voidEcho - 4),
        },
        alert: "Deep sensor scan completed. Void echoes dampened.",
        journal: pushJournal(state, "A focused sensor pulse cleared local psychic resonance in the shell."),
      };
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

  const slots: GravitasActionSlot[] = [];

  // Add anomalies if relevant to this module
  state.anomalies.forEach(anomaly => {
    if (
      (moduleId === "sensor" && anomaly.id === "sensorGhost") ||
      (moduleId === "logistics" && anomaly.id === "materialEntropy") ||
      (moduleId === "core" && anomaly.id === "voidLeak") ||
      (moduleId === "reactor" && anomaly.id === "coreTremor")
    ) {
      slots.push({
        id: `purge-${anomaly.id}`,
        label: `Purge ${anomaly.name}`,
        hint: `Clear the ${anomaly.name} from the module grid at a power cost.`,
        command: { type: "PURGE_ANOMALY", anomalyId: anomaly.id },
        emphasis: "secondary",
      });
    }
  });

  switch (moduleId) {
    case "reactor":
      slots.push({
        id: "stabilize",
        label: "Stabilize reactor",
        hint: "Dampen the current drift and refill the station buffer.",
        command: { type: "STABILIZE_REACTOR" },
      }, {
        id: "overclock",
        label: "Overclock Core",
        hint: "Push reactor beyond limits for +20 power. High integrity risk.",
        command: { type: "OVERCLOCK_REACTOR" },
        emphasis: "secondary",
      });
      break;
    case "logistics":
      slots.push(
        {
          id: "scavenge",
          label: "Full Scavenge",
          hint: "Deploy all available drones for a heavy material haul.",
          command: { type: "SCAVENGE" },
          emphasis: "primary",
        },
        {
          id: "optimize",
          label: "Route Optimization",
          hint: "Boost material intake (+12). Stress the supply grid.",
          command: { type: "OPTIMIZE_LOGISTICS" },
        },
        {
          id: "repairLogistics",
          label: `Repair ${module.name}`,
          hint: "Reopen supply routing and reduce future drain.",
          command: { type: "REPAIR_MODULE", moduleId: "logistics" },
        }
      );
      break;
    case "sensor":
      slots.push(
        {
          id: "distortionSweep",
          label: "Distortion Sweep",
          hint: "Use long-range sensors to clear structural anomalies and marks.",
          command: { type: "DISTORTION_SWEEP" },
          emphasis: "primary",
          disabled: !module.online,
        },
        {
          id: "deepScan",
          label: "Deep Sensor Scan",
          hint: "Directly dampen void echoes. Costly power usage.",
          command: { type: "DEEP_SCAN" },
          disabled: !module.online,
        },
        {
          id: "repairSensor",
          label: `Repair ${module.name}`,
          hint: "Bring the long-range distortion grid back online.",
          command: { type: "REPAIR_MODULE", moduleId: "sensor" },
        }
      );
      break;
    case "core":
    default:
      slots.push(
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
        }
      );
      break;
  }

  return slots;
}
