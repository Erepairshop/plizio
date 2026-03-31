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
        alert: "Sweep complete. Cargo locked.",
        journal: pushJournal(state, `Salvage drones returned. ${materialsGain} units recovered from the dark.`),
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
        alert: "Reactor harmonics restored. The hum steadied.",
        journal: pushJournal(state, "Field alignment holding. The spine remembers."),
      };
    }
    case "REPAIR_MODULE": {
      const profile = getModuleActionProfile(command.moduleId);
      if (state.resources.materials < profile.repairCost) {
        return withAlert(state, "Not enough material. The station cannot give what it does not have.");
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
        alert: `${target.name} patched. Signal returning.`,
        journal: pushJournal(state, `${target.name} integrity now ${nextIntegrity}%. Holding.`),
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
    case "DEEP_SCAN": {
      if (!state.modules.sensor.online) {
        return withAlert(state, "Deep scan requires the sensor array to be online.");
      }
      if (state.resources.power < 4) {
        return withAlert(state, "Insufficient power for a deep scan. Need at least 4.");
      }
      const scannedMarks = {
        reactorScar: Math.max(0, state.marks.reactorScar - 1),
        shellStrain: Math.max(0, state.marks.shellStrain - 1),
        supplyStress: Math.max(0, state.marks.supplyStress - 1),
      };
      return {
        ...state,
        resources: addResourceDelta(state.resources, { power: -4, stability: 6 }),
        marks: scannedMarks,
        alert: "Deep scan complete. Structural interference reduced.",
        journal: pushJournal(state, "Deep scan cleared interference and eased structural stress."),
      };
    }
    case "EMERGENCY_REROUTE": {
      if (state.resources.materials < 3) {
        return withAlert(state, "Emergency reroute requires at least 3 materials.");
      }
      const extraDrain = state.modules.logistics.integrity < 50 ? 5 : 0;
      const nextLogisticsLoad = addModuleLoad(state, "logistics", 15).load;
      const journalLine = extraDrain > 0
        ? "Emergency reroute pushed reserves through fragile conduits."
        : "Emergency reroute siphoned power reserves through the logistics grid.";
      return {
        ...state,
        resources: addResourceDelta(state.resources, { materials: -3, power: 10 }),
        modules: {
          ...state.modules,
          logistics: {
            ...state.modules.logistics,
            integrity: clamp(state.modules.logistics.integrity - extraDrain),
            load: nextLogisticsLoad,
          },
        },
        alert: extraDrain > 0
          ? "Reroute strained the degraded conduits."
          : "Power reserves rerouted successfully.",
        journal: pushJournal(state, journalLine),
      };
    }
    case "RESONANCE_LOCK": {
      if (state.phase !== "activation") {
        return withAlert(state, "Resonance lock only available during the activation phase.");
      }
      if (state.resources.activation < 20) {
        return withAlert(state, "Not enough activation charge for a resonance lock. Need at least 20.");
      }
      if (state.resources.stability < 30) {
        return withAlert(state, "Stability too low for a resonance lock. Need at least 30.");
      }
      const nextCoreLoad = addModuleLoad(state, "core", 20).load;
      return {
        ...state,
        resources: addResourceDelta(state.resources, { activation: 12, stability: -5 }),
        marks: {
          ...state.marks,
          shellStrain: state.marks.shellStrain + 1,
        },
        modules: {
          ...state.modules,
          core: {
            ...state.modules.core,
            load: nextCoreLoad,
          },
        },
        alert: "Resonance lock engaged. Shell strain increased.",
        journal: pushJournal(state, "Resonance lock forced a deep pulse into the shell."),
      };
    }
    case "OVERCLOCK_REACTOR": {
      if (!state.modules.reactor.online) {
        return withAlert(state, "Cannot overclock an offline reactor.");
      }
      if (state.resources.materials < 2) {
        return withAlert(state, "Overclock requires at least 2 materials.");
      }
      const nextReactorLoad = addModuleLoad(state, "reactor", 20).load;
      return {
        ...state,
        resources: addResourceDelta(state.resources, { materials: -2, power: 15, stability: -4 }),
        marks: {
          ...state.marks,
          reactorScar: state.marks.reactorScar + 1,
        },
        modules: {
          ...state.modules,
          reactor: {
            ...state.modules.reactor,
            load: nextReactorLoad,
          },
        },
        alert: "Reactor overclocked. Power surge incoming.",
        journal: pushJournal(state, "Reactor overclocked beyond safe limits for a surge of power."),
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

  switch (moduleId) {
    case "reactor":
      return [
        {
          id: "stabilize",
          label: "Stabilize reactor",
          hint: "Dampen the current drift and refill the station buffer.",
          command: { type: "STABILIZE_REACTOR" },
        },
        {
          id: "overclock",
          label: "Overclock reactor",
          hint: "Burn 2 materials for +15 power, but leave a reactor scar. Requires reactor online.",
          command: { type: "OVERCLOCK_REACTOR" },
          disabled: !module.online || state.resources.materials < 2,
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
        {
          id: "emergencyReroute",
          label: "Emergency reroute",
          hint: "Spend 3 materials for +10 power. Strains conduits if integrity < 50.",
          command: { type: "EMERGENCY_REROUTE" },
          disabled: state.resources.materials < 3,
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
        {
          id: "deepScan",
          label: "Deep scan",
          hint: "Spend 4 power to clear all marks by 1 and gain +6 stability. Requires sensor online.",
          command: { type: "DEEP_SCAN" },
          disabled: !module.online || state.resources.power < 4,
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
        {
          id: "resonanceLock",
          label: "Resonance lock",
          hint: "Force +12 activation at the cost of stability and shell strain. Requires activation phase, 20+ activation, 30+ stability.",
          command: { type: "RESONANCE_LOCK" },
          disabled: state.phase !== "activation" || state.resources.activation < 20 || state.resources.stability < 30,
          emphasis: "secondary",
        },
      ];
  }
}
