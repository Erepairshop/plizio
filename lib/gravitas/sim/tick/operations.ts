import type { StarholdState, LocalizedString } from "../types";
import { getStarholdModifiers } from "../modifiers";
import { getModuleActionProfile } from "../modules";
import { addModuleLoad, addResourceDelta, updateModuleIntegrity, pushJournal, clamp } from "../shared";
import { GRAVITAS_TEXT } from "../content";
import { isDemoChapter } from "../chapter";
import { getContinuationScavengeProfile } from "../continuation";

export function completeActiveOperation(state: StarholdState): StarholdState {
  const op = state.activeOperation;
  if (!op) return state;

  const mods = getStarholdModifiers(state);
  switch (op.type) {
    case "stabilizeReactor": {
      const introWindow = state.phase === "boot" && state.tick < 90;
      const profile = getModuleActionProfile("reactor");
      const nextLoad = addModuleLoad(state, "reactor", profile.loadShift).load;
      const gainMult = mods.recoveryEfficiency;
      const recoveringFirstWave = state.reactorRecovery.active && state.threatCycle === 1;
      const completedStabilizations = recoveringFirstWave
        ? state.reactorRecovery.completedStabilizations + 1
        : state.reactorRecovery.completedStabilizations;
      const reactorRecovery = recoveringFirstWave
        ? completedStabilizations >= 2
          ? {
              active: false,
              completedStabilizations,
              nextPromptTick: state.tick + 999,
            }
          : {
              active: true,
              completedStabilizations,
              nextPromptTick: state.tick + 30,
            }
        : state.reactorRecovery;
      const recoveryAlert: LocalizedString = recoveringFirstWave && completedStabilizations >= 2
        ? {
            en: "Reactor restored. Wave 1 held.",
            hu: "Reaktor helyreállt. 1. hullám kivédve.",
            de: "Reaktor wiederhergestellt. Welle 1 abgewehrt.",
            ro: "Reactor restaurat. Valul 1 respins.",
          }
        : GRAVITAS_TEXT.alerts.reactorStabilized;
      return {
        ...state,
        activeOperation: null,
        resources: addResourceDelta(state.resources, {
          power: Math.floor((introWindow ? 12 : 10) * gainMult),
          stability: Math.floor((introWindow ? 10 : 8) * gainMult),
        }),
        marks: {
          ...state.marks,
          reactorScar: clamp(state.marks.reactorScar - 1),
        },
        modules: {
          ...state.modules,
          reactor: {
            ...updateModuleIntegrity(state, "reactor", Math.floor(profile.repairGain * gainMult)),
            load: nextLoad,
          },
        },
        reactorRecovery,
        alert: recoveryAlert,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.reactorRealigned),
      };
    }
    case "repairModule": {
      if (!op.moduleId) return { ...state, activeOperation: null };
      const introWindow = state.phase === "boot" && state.tick < 90;
      const profile = getModuleActionProfile(op.moduleId);
      const target = state.modules[op.moduleId];
      const nextIntegrity = clamp(target.integrity + Math.floor((profile.repairGain + (introWindow ? 3 : 0)) * mods.recoveryEfficiency));
      const nextLoad = addModuleLoad(state, op.moduleId, target.online ? 0 : profile.loadShift).load;
      return {
        ...state,
        activeOperation: null,
        resources: addResourceDelta(state.resources, {
          stability: Math.floor((introWindow ? 4 : 3) * mods.recoveryEfficiency),
        }),
        modules: {
          ...state.modules,
          [op.moduleId]: {
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
    case "rerouteCore": {
      const introWindow = state.phase === "boot" && state.tick < 90;
      return {
        ...state,
        activeOperation: null,
        resources: {
          ...state.resources,
          activation: clamp(state.resources.activation + (introWindow ? 14 : 12)),
        },
        worldPulse: clamp(state.worldPulse + 3),
        alert: {
          en: "Power reroute completed. Core chamber primed.",
          hu: "Az átirányítás befejeződött. A magkamra készen áll.",
          de: "Energieumleitung abgeschlossen. Kernkammer bereit.",
          ro: "Redirecționarea s-a încheiat. Camera nucleului este pregătită.",
        },
        journal: pushJournal(state, {
          en: "Core conduits locked and the chamber accepted the incoming charge.",
          hu: "A magvezetékek rögzültek, a kamra befogadta a töltést.",
          de: "Kernleitungen verriegelten sich und die Kammer nahm die Ladung an.",
          ro: "Conductele nucleului s-au fixat, iar camera a acceptat încărcarea.",
        }),
      };
    }
    default:
      return { ...state, activeOperation: null };
  }
}

export function advanceScavengeOperation(state: StarholdState): StarholdState {
  const op = state.scavengeOperation;
  if (!op) return state;

  if (!state.modules.logistics.online) {
    return {
      ...state,
      scavengeOperation: null,
      alert: {
        en: "Scavenge flight aborted. Logistics must be repaired first.",
        hu: "A gyűjtés megszakadt. Előbb a logisztikát kell megjavítani.",
        de: "Bergung abgebrochen. Die Logistik muss zuerst repariert werden.",
        ro: "Colectarea a fost oprită. Logistica trebuie reparată mai întâi.",
      },
      journal: pushJournal(state, {
        en: "The drone route failed because logistics could not support the salvage run.",
        hu: "A drónútvonal megszakadt, mert a logisztika nem tudta kiszolgálni a gyűjtést.",
        de: "Die Drohnenroute brach ab, weil die Logistik den Bergungslauf nicht tragen konnte.",
        ro: "Ruta dronelor a eșuat, deoarece logistica nu a putut susține colectarea.",
      }),
    };
  }

  const nextRemaining = op.remaining - 1;
  if (nextRemaining > 0) {
    return {
      ...state,
      scavengeOperation: {
        ...op,
        remaining: nextRemaining,
      },
    };
  }

  const continuationScavengeProfile = isDemoChapter(state)
    ? null
    : getContinuationScavengeProfile(state);
  const materialsGain = continuationScavengeProfile?.materialsGain ?? 2;
  const nextCycleDuration = continuationScavengeProfile?.cycleDuration ?? op.cycleDuration;

  return {
    ...state,
    resources: addResourceDelta(state.resources, {
      supply: materialsGain,
    }),
    worldPulse: clamp(state.worldPulse + 1),
    alert: GRAVITAS_TEXT.alerts.scavengeSuccess,
    scavengeOperation: {
      ...op,
      cycleDuration: nextCycleDuration,
      remaining: nextCycleDuration,
      completedCycles: op.completedCycles + 1,
    },
  };
}
