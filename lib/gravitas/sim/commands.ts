import type { StarholdCommand, StarholdState, LocalizedString, StarholdModuleId, StarholdAnomalyId } from "./types";
import { addResourceDelta, clamp, pushJournal, updateModuleIntegrity, withAlert, addModuleLoad } from "./shared";
import { canStartActivationTransfer, channelActivationPulse, unlockActivationTransfer } from "./activation";
import { getModuleActionProfile } from "./modules";
import { advanceRepairChallenge, resolveStarholdEvent, getRepairChallengeModule } from "./events";
import { GRAVITAS_TEXT } from "./content";
import { buyStarholdItem, checkStarholdMilestones, claimStarholdMilestone } from "./progression";
import { getStarholdModifiers } from "./modifiers";
import { createNextThreat } from "./threats";
import { markBootstrapCheckpoint } from "./bootstrap";
import { moveToContinuationChapter } from "./chapter";
import { getContinuationScavengeProfile, normalizeContinuationState } from "./continuation";
import { canTrainUnit, startTraining, cancelTraining } from "./warroom";

function startOperation(
  state: StarholdState,
  operation: StarholdState["activeOperation"],
  alert: LocalizedString
): StarholdState {
  return {
    ...state,
    activeOperation: operation,
    alert,
    journal: pushJournal(state, alert),
  };
}

function isSameForegroundOperation(state: StarholdState, command: StarholdCommand): boolean {
  const op = state.activeOperation;
  if (!op) return false;

  if (command.type === "STABILIZE_REACTOR") return op.type === "stabilizeReactor";
  if (command.type === "REROUTE_TO_CORE") return op.type === "rerouteCore";
  if (command.type === "REPAIR_MODULE") {
    return op.type === "repairModule" && op.moduleId === command.moduleId;
  }
  return false;
}

function stopForegroundOperation(state: StarholdState): StarholdState {
  const op = state.activeOperation;
  if (!op) return state;

  return {
    ...state,
    activeOperation: null,
    alert: {
      en: "Operation halted. Systems standing by for a new command.",
      hu: "A művelet leállt. A rendszerek új parancsra várnak.",
      de: "Vorgang gestoppt. Systeme warten auf einen neuen Befehl.",
      ro: "Operațiunea a fost oprită. Sistemele așteaptă o nouă comandă.",
    },
    journal: pushJournal(state, {
      en: "Current operation was recalled before completion.",
      hu: "A futó művelet a befejezés előtt vissza lett hívva.",
      de: "Der laufende Vorgang wurde vor Abschluss zurückgerufen.",
      ro: "Operațiunea curentă a fost retrasă înainte de finalizare.",
    }),
  };
}

export function applyStarholdCommand(state: StarholdState, command: StarholdCommand): StarholdState {
  const repairChallengeTarget = getRepairChallengeModule(state.repairChallenge);
  const commandModule =
    command.type === "STABILIZE_REACTOR"
      ? "reactor"
      : command.type === "REPAIR_MODULE"
        ? command.moduleId
        : null;
  const isRepairChallengeResolution =
    state.repairChallenge.active &&
    ((repairChallengeTarget === "reactor" && command.type === "STABILIZE_REACTOR") ||
      (command.type === "REPAIR_MODULE" && commandModule === repairChallengeTarget));
  if (
    state.repairChallenge.active &&
    commandModule &&
    repairChallengeTarget &&
    commandModule !== repairChallengeTarget
  ) {
    return withAlert(state, {
      en: `Use the lower ${repairChallengeTarget} repair button now.`,
      hu: `Most a lent lévő ${repairChallengeTarget === "reactor" ? "reaktor" : repairChallengeTarget === "logistics" ? "logisztika" : repairChallengeTarget === "sensor" ? "szenzor" : "mag"} javítás gombot használd.`,
      de: `Nutze jetzt den unteren ${repairChallengeTarget} Reparaturknopf.`,
      ro: `Folosește acum butonul de reparare de jos pentru ${repairChallengeTarget}.`,
    });
  }

  if (state.pendingEvent && command.type !== "RESOLVE_EVENT" && !isRepairChallengeResolution) {
    return withAlert(state, GRAVITAS_TEXT.alerts.resolveAnomaly);
  }

  if (state.activeOperation && isSameForegroundOperation(state, command) && !(state.repairChallenge.active && (command.type === "REPAIR_MODULE" || command.type === "STABILIZE_REACTOR"))) {
    return stopForegroundOperation(state);
  }

  if (
    state.activeOperation &&
    (command.type === "STABILIZE_REACTOR" || command.type === "REROUTE_TO_CORE")
  ) {
    return withAlert(state, {
      en: "An operation is already running. Let it finish before issuing another command.",
      hu: "Már fut egy művelet. Várd meg, amíg befejeződik, mielőtt új parancsot adsz ki.",
      de: "Es läuft bereits ein Vorgang. Lass ihn enden, bevor du den nächsten Befehl gibst.",
      ro: "O operațiune rulează deja. Las-o să se termine înainte de altă comandă.",
    });
  }

  const { threat } = state;
  const mods = getStarholdModifiers(state);

  switch (command.type) {
    case "SCAVENGE": {
      if (state.scavengeOperation) {
        return {
          ...state,
          scavengeOperation: null,
          alert: {
            en: "Scavenge drones recalled.",
            hu: "A gyűjtődrónok visszahívva.",
            de: "Bergungsdrohnen zurückgerufen.",
            ro: "Dronele de colectare au fost rechemate.",
          },
          journal: pushJournal(state, {
            en: "Debris sweep paused. Salvage crews returned to the station.",
            hu: "A törmelékmező átvizsgálása szünetel. A mentődrónok visszatértek az állomásra.",
            de: "Die Trümmersuche pausiert. Bergungsdrohnen kehrten zur Station zurück.",
            ro: "Măturarea resturilor a fost pusă pe pauză. Dronele s-au întors la stație.",
          }),
        };
      }

      if (!state.modules.logistics.online) {
        return withAlert(state, {
          en: "Logistics is offline. Repair it before sending scavenger drones.",
          hu: "A logisztika offline. Javítsd meg, mielőtt gyűjtődrónokat küldesz.",
          de: "Die Logistik ist offline. Repariere sie, bevor du Bergungsdrohnen sendest.",
          ro: "Logistica este offline. Repar-o înainte să trimiți dronele de colectare.",
        });
      }

      const cycleDuration = state.chapter === "continuation"
        ? getContinuationScavengeProfile(state).cycleDuration
        : 5;
      return {
        ...markBootstrapCheckpoint(state, "logistics"),
        scavengeOperation: {
          startedTick: state.tick,
          cycleDuration,
          remaining: cycleDuration,
          completedCycles: 0,
        },
        alert: {
          en: "Scavenge drones launched.",
          hu: "A gyűjtődrónok elindultak.",
          de: "Bergungsdrohnen gestartet.",
          ro: "Dronele de colectare au fost lansate.",
        },
        journal: pushJournal(state, {
          en: "A salvage drone is sweeping the debris field for usable material.",
          hu: "Egy mentődrón átvizsgálja a törmelékmezőt használható anyagért.",
          de: "Eine Bergungsdrohne durchsucht das Trümmerfeld nach verwertbarem Material.",
          ro: "O dronă de salvare scanează câmpul de resturi după materiale utile.",
        }),
      };
    }
    case "STABILIZE_REACTOR": {
      const profile = getModuleActionProfile("reactor");
      const introWindow = state.phase === "boot" && state.tick < 90;
      const cost = Math.max(1, Math.ceil(profile.repairCost * mods.powerCostMod) - (introWindow ? 1 : 0));
      if (state.resources.materials < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noMaterials);
      }
      if (state.chapter === "continuation") {
        const target = state.modules.reactor;
        const nextIntegrity = clamp(Math.max(96, target.integrity + Math.floor(profile.repairGain * mods.recoveryEfficiency)));
        return normalizeContinuationState({
          ...state,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - cost),
          },
          modules: {
            ...state.modules,
            reactor: {
              ...target,
              integrity: nextIntegrity,
              online: true,
              load: 18,
            },
          },
          crisis: false,
          lockdown: false,
          lockdownDuration: 0,
          stationLost: false,
          alert: {
            en: "Reactor field restored. Stability locked back in.",
            hu: "A reaktormező helyreállt. A stabilitás visszaállt.",
            de: "Reaktorfeld wiederhergestellt. Stabilität ist zurück.",
            ro: "Câmpul reactorului a fost restaurat. Stabilitatea a revenit.",
          },
          journal: pushJournal(state, {
            en: "Chapter II reactor stabilization snapped the station back into balance.",
            hu: "A Chapter II reaktor-stabilizálás visszarántotta az állomást az egyensúlyba.",
            de: "Die Kapitel-II-Reaktorstabilisierung brachte die Station sofort zurück ins Gleichgewicht.",
            ro: "Stabilizarea reactorului din Capitolul II a readus instant stația în echilibru.",
          }),
        });
      }
      const repairChallengeTarget = getRepairChallengeModule(state.repairChallenge);
      if (state.repairChallenge.active && repairChallengeTarget === "reactor") {
        const target = state.modules.reactor;
        const nextIntegrity = clamp(target.integrity + Math.floor((profile.repairGain + (introWindow ? 3 : 0)) * mods.recoveryEfficiency));
        const nextLoad = addModuleLoad(state, "reactor", target.online ? 0 : profile.loadShift).load;
        return advanceRepairChallenge({
          ...markBootstrapCheckpoint(state, "reactor"),
          resources: addResourceDelta(state.resources, {
            materials: -cost,
            stability: 100,
          }),
          modules: {
            ...state.modules,
            reactor: {
              ...target,
              integrity: nextIntegrity,
              online: nextIntegrity >= profile.onlineThreshold || target.online,
              load: nextLoad,
            },
          },
          alert: GRAVITAS_TEXT.alerts.modulePatched(target.name),
          journal: pushJournal(state, GRAVITAS_TEXT.journal.integrityRestored(target.name, nextIntegrity)),
        }, "reactor");
      }
      return {
        ...markBootstrapCheckpoint(state, "reactor"),
        resources: addResourceDelta(state.resources, {
          materials: -cost,
        }),
        activeOperation: null,
        modules: {
          ...state.modules,
          reactor: {
            ...updateModuleIntegrity(state, "reactor", Math.floor(profile.repairGain * mods.recoveryEfficiency)),
            load: addModuleLoad(state, "reactor", state.modules.reactor.online ? 0 : profile.loadShift).load,
          },
        },
        reactorRecovery:
          state.reactorRecovery.active && state.threatCycle === 1
            ? {
                ...state.reactorRecovery,
                completedStabilizations: state.reactorRecovery.completedStabilizations + 1,
                active: state.reactorRecovery.completedStabilizations + 1 >= 2 ? false : state.reactorRecovery.active,
                nextPromptTick: state.reactorRecovery.completedStabilizations + 1 >= 2 ? state.tick + 999 : state.tick + 30,
              }
            : state.reactorRecovery,
        alert: {
          en: "Reactor stabilized instantly.",
          hu: "A reaktor azonnal stabilizálva.",
          de: "Reaktor sofort stabilisiert.",
          ro: "Reactor stabilizat instant.",
        },
        journal: pushJournal(state, GRAVITAS_TEXT.journal.reactorRealigned),
      };
    }
    case "REPAIR_MODULE": {
      const profile = getModuleActionProfile(command.moduleId);
      const cost = 10;
      if (state.resources.materials < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      }
      if (state.chapter === "continuation") {
        const target = state.modules[command.moduleId];
        const nextIntegrity = clamp(Math.max(96, target.integrity + Math.floor(profile.repairGain * mods.recoveryEfficiency)));
        const continuationRestored = normalizeContinuationState({
          ...state,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - cost),
          },
          modules: {
            ...state.modules,
            [command.moduleId]: {
              ...target,
              integrity: nextIntegrity,
              online: true,
              load: Math.min(target.load, command.moduleId === "logistics" ? 12 : command.moduleId === "sensor" ? 10 : 16),
            },
          },
          alert: GRAVITAS_TEXT.alerts.modulePatched(target.name),
          journal: pushJournal(state, GRAVITAS_TEXT.journal.integrityRestored(target.name, nextIntegrity)),
        });
        return continuationRestored;
      }
      const introWindow = state.phase === "boot" && state.tick < 90;
      const target = state.modules[command.moduleId];
      const nextIntegrity = clamp(target.integrity + Math.floor((profile.repairGain + (introWindow ? 3 : 0)) * mods.recoveryEfficiency));
      const nextLoad = addModuleLoad(state, command.moduleId, target.online ? 0 : profile.loadShift).load;
      const repairChallengeTarget = getRepairChallengeModule(state.repairChallenge);
      const challengeResourceDelta =
        state.repairChallenge.active && repairChallengeTarget === command.moduleId
          ? command.moduleId === "reactor"
            ? { stability: 100 }
            : command.moduleId === "logistics"
              ? { materials: 100 }
              : command.moduleId === "sensor"
                ? { power: 100 }
                : {}
          : {};
      return advanceRepairChallenge({
        ...markBootstrapCheckpoint(state, command.moduleId),
        resources: addResourceDelta(state.resources, {
          materials: -cost,
          stability: Math.floor((introWindow ? 4 : 3) * mods.recoveryEfficiency),
          ...challengeResourceDelta,
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
      }, command.moduleId);
    }
    case "REROUTE_TO_CORE": {
      const introWindow = state.phase === "boot" && state.tick < 90;
      const cost = Math.max(4, Math.ceil(8 * mods.powerCostMod) - (introWindow ? 2 : 0));
      if (state.resources.power < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerReroute);
      }
      if (!canStartActivationTransfer(state)) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerReroute);
      }
      return startOperation(
        {
          ...markBootstrapCheckpoint(unlockActivationTransfer(state), "core"),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - cost),
          },
        },
        {
          type: "rerouteCore",
          moduleId: "core",
          startedTick: state.tick,
          duration: introWindow ? 4 : 6,
          remaining: introWindow ? 4 : 6,
          title: {
            en: "Core reroute charging",
            hu: "Mag-átirányítás tölt",
            de: "Kernumleitung lädt",
            ro: "Redirecționarea nucleului se încarcă",
          },
          detail: {
            en: "Power is being threaded into the chamber to prime avatar activation.",
            hu: "Az energia a kamrába áramlik, hogy előkészítse az avatár aktiválását.",
            de: "Energie wird in die Kammer geleitet, um die Avatar-Aktivierung vorzubereiten.",
            ro: "Energia este direcționată în cameră pentru a pregăti activarea avatarului.",
          },
        },
        {
          en: "Power reroute to core initiated.",
          hu: "Az energia átirányítása a maghoz elindult.",
          de: "Energieumleitung zum Kern gestartet.",
          ro: "Redirecționarea energiei spre nucleu a pornit.",
        }
      );
    }
    case "CHANNEL_TO_CORE": {
      return channelActivationPulse(markBootstrapCheckpoint(state, "core"), command.amount);
    }
    case "CHANNEL_AVATAR_IMPRINT": {
      if (!state.avatarImprintActive || state.avatarAwake) return state;
      const nextProgress = clamp(state.avatarImprintProgress + command.amount);
      const reachedComplete = nextProgress >= 100;
      const nextState: StarholdState = {
        ...state,
        avatarImprintProgress: nextProgress,
      };

      if (!reachedComplete) {
        return nextState;
      }

      const awakenedBase = moveToContinuationChapter({ ...state, avatarAwake: true, phase: "awakened" });
      const awakenedThreat = state.threat.pausedUntilAwake
        ? createNextThreat(awakenedBase, state.threatCycle + 1)
        : state.threat;

      return {
        ...nextState,
        avatarImprintActive: false,
        avatarImprintProgress: 100,
        avatarAwake: true,
        chapter: "continuation",
        phase: "awakened",
        resources: {
          ...state.resources,
          activation: 100,
          power: clamp(state.resources.power - 6),
          stability: clamp(state.resources.stability + 6),
        },
        worldPulse: clamp(state.worldPulse + 8),
        threat: awakenedThreat,
        firstLoopComplete: true,
        alert: GRAVITAS_TEXT.alerts.avatarImprintComplete,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.avatarImprintCompleteJournal),
      };
    }
    case "RESET_AVATAR_IMPRINT": {
      if (state.avatarAwake) return state;
      return {
        ...state,
        avatarImprintProgress: 0,
      };
    }
    case "DISTORTION_SWEEP": {
      const cost = Math.ceil(8 * mods.powerCostMod);
      if (state.resources.power < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerDistortion);
      }
      return {
        ...markBootstrapCheckpoint(state, "sensor"),
        resources: addResourceDelta(state.resources, {
          power: -cost,
          stability: Math.floor(6 * mods.recoveryEfficiency),
        }),
        worldPulse: clamp(state.worldPulse - 4),
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
      const powerCost = Math.ceil(anomaly.severity * 3 * mods.powerCostMod);
      if (state.resources.power < powerCost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -powerCost,
          stability: 4,
        }),
        anomalies: state.anomalies.filter(a => a.id !== command.anomalyId),
        alert: GRAVITAS_TEXT.alerts.anomalyPurged(anomaly.name),
        journal: pushJournal(state, {
          en: `Purged ${anomaly.name.en} from the station grid.`,
          hu: `${anomaly.name.hu} eltávolítva az állomás hálózatából.`,
          de: `${anomaly.name.de} aus dem Stationsnetz getilgt.`,
          ro: `${anomaly.name.ro} eliminat din rețeaua stației.`,
        }),
      };
    }
    case "OVERCLOCK_REACTOR": {
      const riskMult = mods.recoveryEfficiency > 1.0 ? 1.5 : 1.0;
      return {
        ...markBootstrapCheckpoint(state, "reactor"),
        resources: addResourceDelta(state.resources, {
          power: 30,
          stability: -12 * mods.powerCostMod,
        }),
        marks: {
          ...state.marks,
          reactorScar: clamp(state.marks.reactorScar + 4),
        },
        modules: {
          ...state.modules,
          reactor: {
            ...state.modules.reactor,
            integrity: clamp(state.modules.reactor.integrity - Math.floor(18 * riskMult)),
          }
        },
        alert: GRAVITAS_TEXT.alerts.reactorOverdriven,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.overclockJournal),
      };
    }
    case "OPTIMIZE_LOGISTICS": {
      const riskMult = mods.recoveryEfficiency > 1.0 ? 1.5 : 1.0;
      return {
        ...markBootstrapCheckpoint(state, "logistics"),
        resources: addResourceDelta(state.resources, {
          materials: 18,
          power: -8 * mods.powerCostMod,
        }),
        marks: {
          ...state.marks,
          supplyStress: clamp(state.marks.supplyStress + 5),
        },
        modules: {
          ...state.modules,
          logistics: {
            ...state.modules.logistics,
            load: clamp(state.modules.logistics.load + Math.floor(45 * riskMult)),
          }
        },
        alert: GRAVITAS_TEXT.alerts.logisticsOptimized,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.optimizeJournal),
      };
    }
    case "DEEP_SCAN": {
      const cost = Math.ceil((15 / mods.recoveryEfficiency) * mods.powerCostMod);
      if (state.resources.power < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      }
      return {
        ...markBootstrapCheckpoint(state, "sensor"),
        resources: addResourceDelta(state.resources, {
          power: -cost,
          stability: -2,
        }),
        worldPulse: clamp(state.worldPulse + 2),
        marks: {
          ...state.marks,
          voidEcho: clamp(state.marks.voidEcho - 8),
        },
        alert: GRAVITAS_TEXT.alerts.deepScanComplete,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.deepScanJournal),
      };
    }
    case "DAMPEN_SIGNALS": {
      if (threat.countdown > 5 || threat.dampened) return state;
      const cost = Math.ceil(10 * mods.powerCostMod);
      if (state.resources.power < cost) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      return {
        ...markBootstrapCheckpoint(state, "sensor"),
        resources: addResourceDelta(state.resources, { power: -cost }),
        threat: { ...threat, dampened: true },
        alert: GRAVITAS_TEXT.threats.dampenedJournal,
        journal: pushJournal(state, GRAVITAS_TEXT.threats.dampenedJournal),
      };
    }
    case "FORTIFY_SHELL": {
      if (threat.countdown > 5 || threat.fortified) return state;
      const cost = Math.ceil(12 * mods.powerCostMod);
      if (state.resources.materials < cost) return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { materials: -cost }),
        threat: { ...threat, fortified: true },
        alert: GRAVITAS_TEXT.threats.fortifiedJournal,
        journal: pushJournal(state, GRAVITAS_TEXT.threats.fortifiedJournal),
      };
    }
    case "INTERCEPT_THREAT": {
      if (threat.countdown > 5 || threat.intercepted) return state;
      const cost = Math.ceil(14 * mods.powerCostMod);
      if (state.resources.materials < cost) return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { materials: -cost }),
        threat: { ...threat, intercepted: true },
        alert: { en: "Drone swarm deployed for interception.", hu: "Drónraj bevetve az elfogáshoz.", de: "Drohnenschwarm zum Abfangen eingesetzt.", ro: "Roi de drone desfășurat pentru intercepție." },
        journal: pushJournal(state, { en: "Drones are forming a defensive perimeter.", hu: "A drónok védelmi kordont vonnak az állomás köré.", de: "Drohnen bilden einen Verteidigungsperimeter.", ro: "Dronele formează un perimetru defensiv." }),
      };
    }
    case "PREDICT_THREAT": {
      if (threat.countdown > 10 || threat.predicted) return state;
      const cost = Math.ceil(8 * mods.powerCostMod);
      if (state.resources.power < cost) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      return {
        ...markBootstrapCheckpoint(state, "sensor"),
        resources: addResourceDelta(state.resources, { power: -cost }),
        threat: { ...threat, predicted: true },
        alert: { en: "Threat trajectory calculated.", hu: "Fenyegetés pályája kiszámítva.", de: "Bedrohungstrajektorie berechnet.", ro: "Traiectoria amenințării calculată." },
        journal: pushJournal(state, { en: "Sensor array has locked onto the approaching pattern.", hu: "A szenzorok rögzítették a közelgő minta adatait.", de: "Sensoren haben das herannahende Muster erfasst.", ro: "Senzorii au blocat tiparul iminent." }),
      };
    }
    case "EMERGENCY_VENT": {
      const cost = Math.ceil(18 * mods.powerCostMod);
      if (state.resources.power < cost) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      // Apply recoveryEfficiency: wider vent during aftershock / crisis recovery window
      const ventReduction = Math.floor(4 * mods.recoveryEfficiency);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { power: -cost, stability: Math.floor(6 * mods.recoveryEfficiency) }),
        worldPulse: clamp(state.worldPulse - 2),
        marks: {
          ...state.marks,
          shellStrain: clamp(state.marks.shellStrain - ventReduction),
        },
        alert: { en: "Emergency venting successful.", hu: "Vészhelyzeti szellőztetés sikeres.", de: "Notlüftung erfolgreich.", ro: "Evacuare de urgență reușită." },
        journal: pushJournal(state, { en: "Excess pressure vented from the shell spine.", hu: "Felesleges nyomás távozott a váz gerincéből.", de: "Überdruck aus dem Hüllenrückgrat abgelassen.", ro: "Presiunea în exces a fost evacuată din coloana corpului." }),
      };
    }
    case "TUNE_SHIELDS": {
      const cost = Math.ceil(12 * mods.powerCostMod);
      if (state.resources.power < cost) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { power: -cost }),
        threat: {
          ...threat,
          intensity: Math.max(1, threat.intensity - 1),
        },
        alert: { en: "Shield frequencies tuned.", hu: "Pajzsfrekvenciák behangolva.", de: "Schildfrequenzen abgestimmt.", ro: "Frecvențele scutului au fost reglate." },
        journal: pushJournal(state, { en: "Optimized energy grid reduced incoming threat signature.", hu: "Az optimalizált energiahálózat csökkentette a fenyegetés erejét.", de: "Optimiertes Energienetz senkte Bedrohungssignatur.", ro: "Rețeaua de energie optimizată a redus semnătura amenințării." }),
      };
    }
    case "EMERGENCY_DISCHARGE": {
      const cost = Math.ceil(20 * mods.powerCostMod);
      if (state.resources.power < cost) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { power: -cost, stability: 12 }),
        alert: GRAVITAS_TEXT.alerts.powerDischarged,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.kineticRegen),
      };
    }
    case "RAPID_FABRICATION": {
      const cost = Math.ceil(15 * mods.powerCostMod);
      if (state.resources.materials < cost) return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      const target = state.modules[command.moduleId];
      // Apply recoveryEfficiency: 1.5× during aftershock / crisis
      const fabGain = Math.floor(25 * mods.recoveryEfficiency);
      return {
        ...markBootstrapCheckpoint(state, command.moduleId),
        resources: addResourceDelta(state.resources, { materials: -cost }),
        modules: {
          ...state.modules,
          [command.moduleId]: {
            ...target,
            integrity: clamp(target.integrity + fabGain),
            load: clamp(target.load + 20),
          }
        },
        alert: GRAVITAS_TEXT.alerts.rapidFabSuccess(target.name),
        journal: pushJournal(state, GRAVITAS_TEXT.journal.rapidRepair(target.name)),
      };
    }
    case "AVATAR_PULSE": {
      if (state.phase !== "awakened") return state;
      if (state.tick - state.lastAvatarPulse < 20) {
        return withAlert(state, {
          en: "Avatar Pulse on cooldown.",
          hu: "Avatár impulzus újratöltődik.",
          de: "Avatar-Puls lädt auf.",
          ro: "Pulsul Avatar se reîncărcă.",
        });
      }
      if (state.resources.power < 10) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);

      const alert: LocalizedString = {
        en: "Avatar emitted a stabilizing pulse.",
        hu: "Az Avatár stabilizáló impulzust bocsátott ki.",
        de: "Avatar sandte einen stabilisierenden Puls aus.",
        ro: "Avatarul a emis un puls de stabilizare.",
      };

      const nextModules = { ...state.modules };
      (Object.keys(nextModules) as StarholdModuleId[]).forEach(id => {
        nextModules[id] = { ...nextModules[id], integrity: clamp(nextModules[id].integrity + 1) };
      });

      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -10,
          stability: 15,
        }),
        worldPulse: clamp(state.worldPulse - 6),
        entropy: clamp(state.entropy - 2),
        modules: nextModules,
        lastAvatarPulse: state.tick,
        avatarPulseCount: state.avatarPulseCount + 1,
        alert,
        journal: pushJournal(state, alert),
      };
    }
    case "RESOLVE_EVENT": {
      return checkStarholdMilestones(resolveStarholdEvent(state, command.optionId));
    }
    case "BUY_ITEM": {
      return buyStarholdItem(state, command.itemId);
    }
    case "ACKNOWLEDGE_PHASE_SHIFT": {
      return {
        ...state,
        firstLoopShown: true,
      };
    }
    case "CLAIM_MILESTONE": {
      return claimStarholdMilestone(state, command.milestoneId);
    }
    case "TRAIN_UNIT": {
      if (!canTrainUnit(state, command.unitId)) {
        return withAlert(state, {
          en: "Cannot start training now.",
          hu: "Nem indítható kiképzés most.",
          de: "Ausbildung kann jetzt nicht gestartet werden.",
          ro: "Antrenamentul nu poate fi pornit acum.",
        });
      }
      return startTraining(state, command.unitId);
    }
    case "CANCEL_TRAINING": {
      return cancelTraining(state);
    }
    default:
      return checkStarholdMilestones(state);
  }
}

export interface GravitasActionSlot {
  id: string;
  label: LocalizedString;
  hint: LocalizedString;
  command: StarholdCommand;
  disabled?: boolean;
  emphasis?: "primary" | "secondary";
}

export function getGravitasActionSlots(selectedModule: keyof StarholdState["modules"], state: StarholdState): GravitasActionSlot[] {
  const moduleId = selectedModule;
  const module = state.modules[moduleId];
  if (!module) return [];
  const { threat } = state;
  const coreReady = canStartActivationTransfer(state);
  const isRecovering = threat.aftershock > 0 || state.crisis;
  const repairChallengeTarget = getRepairChallengeModule(state.repairChallenge);

  const slots: GravitasActionSlot[] = [];

  const addSlot = (slot: GravitasActionSlot) => {
    const isRestricted = state.lockdown && !["stabilize", "repairLogistics", "repairSensor", "repairCore"].includes(slot.id) && !slot.id.startsWith("purge-");
    slots.push({
      ...slot,
      disabled: slot.disabled || isRestricted,
      hint: isRestricted ? {
        en: "SYSTEM LOCKED. Emergency override required.",
        hu: "RENDSZER LEZÁRVA. Kézi felülbírálás szükséges.",
        de: "SYSTEM GESPERRT. Notfall-Override erforderlich.",
        ro: "SISTEM BLOCAT. Este necesară suprascrierea de urgență."
      } : slot.hint,
    });
  };

  // Add anomalies if relevant to this module
  state.anomalies.forEach(anomaly => {
    if (
      (moduleId === "sensor" && anomaly.id === "sensorGhost") ||
      (moduleId === "logistics" && anomaly.id === "materialEntropy") ||
      (moduleId === "core" && anomaly.id === "voidLeak") ||
      (moduleId === "reactor" && anomaly.id === "coreTremor")
    ) {
      addSlot({
        id: `purge-${anomaly.id}`,
        label: {
          en: `Purge ${anomaly.name.en}`,
          hu: `${anomaly.name.hu} semlegesítése`,
          de: `${anomaly.name.de} tilgen`,
          ro: `Purjare ${anomaly.name.ro}`
        },
        hint: {
          en: `Clear the ${anomaly.name.en} from the module grid at a power cost.`,
          hu: `Eltávolítja a(z) ${anomaly.name.hu} anomáliát energia árán.`,
          de: `Tilge ${anomaly.name.de} aus dem Netz gegen Energie.`,
          ro: `Elimină ${anomaly.name.ro} din rețea contra cost energie.`
        },
        command: { type: "PURGE_ANOMALY", anomalyId: anomaly.id as StarholdAnomalyId },
        emphasis: "secondary",
      });
    }
  });

  switch (moduleId) {
    case "reactor":
      addSlot({
        id: "stabilize",
        label: { en: "Stabilize reactor", hu: "Reaktor stabilizálása", de: "Reaktor stabilisieren", ro: "Stabilizează reactorul" },
        hint: { en: "Dampen current drift and refill buffer. Reduces reactor scars.", hu: "Csökkenti a driftet és feltölti a puffert. Gyógyítja a reaktorsebeket.", de: "Dämpfe Drift und fülle Puffer. Reduziert Reaktornarben.", ro: "Atenuează deriva și umple tamponul. Reduce cicatricile reactorului." },
        command: { type: "STABILIZE_REACTOR" },
        emphasis: repairChallengeTarget === "reactor" ? "primary" : isRecovering ? "primary" : undefined,
      });
      addSlot({
        id: "overclock",
        label: { en: "Overclock Core", hu: "Mag túlhajtása", de: "Kern überlasten", ro: "Suprasolicitare nucleu" },
        hint: { en: "Force reactor past safety for +30 power. Extreme integrity risk.", hu: "Határérték fölé hajtja a reaktort (+30 energia). Extrém integritás-kockázat.", de: "Kern über Limits treiben für +30 Energie. Extremes Risiko.", ro: "Forțează reactorul pentru +30 energie. Risc extrem de integritate." },
        command: { type: "OVERCLOCK_REACTOR" },
        emphasis: "secondary",
      });
      if (threat.countdown <= 5 && !threat.fortified && threat.countdown > 0) {
        addSlot({
          id: "fortify",
          label: { en: "Fortify Shell", hu: "Váz megerősítése", de: "Hülle verstärken", ro: "Fortifică corpul" },
          hint: { en: "Reinforce structure against the coming threat (Costs 12 MAT).", hu: "Szerkezet megerősítése a közelgő veszély ellen (12 ANYAG).", de: "Struktur gegen Bedrohung verstärken (12 MAT).", ro: "Consolidează structura împotriva amenințării (12 MAT)." },
          command: { type: "FORTIFY_SHELL" },
          emphasis: "secondary",
        });
      }
      if (state.marks.shellStrain > 2) {
        addSlot({
          id: "emergencyVent",
          label: { en: "Emergency Venting", hu: "Vész-szellőztetés", de: "Notlüftung", ro: "Evacuare de urgență" },
          hint: { en: "Aggressively reduce shell strain (-4) at high power cost.", hu: "Drasztikusan csökkenti a vázfeszülést (-4) magas energiaköltséggel.", de: "Aggressive Hüllenspannungssenkung (-4) bei hohen Energiekosten.", ro: "Reduce agresiv tensiunea corpului (-4) cu cost mare de energie." },
          command: { type: "EMERGENCY_VENT" },
        });
      }
      addSlot({
        id: "discharge",
        label: { en: "Kinetic Discharge", hu: "Kinetikus kisülés", de: "Kinetische Entladung", ro: "Descărcare cinetică" },
        hint: { en: "Dump power into stabilizers for +12 stability.", hu: "Energia a stabilizátorokba (+12 stabilitás).", de: "Strom in Stabilisatoren leiten für +12 Stabilität.", ro: "Descarcă energia în stabilizatori pentru +12 stabilitate." },
        command: { type: "EMERGENCY_DISCHARGE" },
        emphasis: state.resources.power > 40 ? "secondary" : undefined,
      });
      break;
    case "logistics":
      addSlot({
        id: "scavenge",
        label: { en: "Deep Scavenge", hu: "Mély gyűjtés", de: "Tiefenbergung", ro: "Recuperare profundă" },
        hint: { en: "Deploy drones for +6 materials and +3 power haul.", hu: "Drónok bevetése +6 anyagért és +3 energiáért.", de: "Drohnen für +6 Material und +3 Energie einsetzen.", ro: "Desfășoară dronele pentru +6 materiale și +3 energie." },
        command: { type: "SCAVENGE" },
        emphasis: "primary",
      });
      addSlot({
        id: "optimize",
        label: { en: "Mass Haul", hu: "Tömeges szállítás", de: "Massentransport", ro: "Transport în masă" },
        hint: { en: "Maximize material intake (+18). Heavy grid stress.", hu: "Maximalizálja az anyagbevitelt (+18). Erős hálózati terhelés.", de: "Maximiere Materialaufnahme (+18). Schwere Netzlast.", ro: "Maximizează aportul de materiale (+18). Solicitare mare a rețelei." },
        command: { type: "OPTIMIZE_LOGISTICS" },
      });
      addSlot({
        id: "repairLogistics",
        label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repará ${module.name.ro}` },
        hint: { en: "Reopen supply routing and reduce future drain.", hu: "Újranyitja az ellátási útvonalakat és csökkenti a jövőbeli veszteséget.", de: "Versorgungsrouten öffnen und zukünftigen Abfluss senken.", ro: "Redeschide rutele și reduce pierderile viitoare." },
        command: { type: "REPAIR_MODULE", moduleId: "logistics" },
        emphasis: repairChallengeTarget === "logistics" ? "primary" : isRecovering ? "secondary" : undefined,
      });
      if (threat.countdown <= 5 && !threat.intercepted && module.online && threat.type === "meteorShower" && threat.countdown > 0) {
        addSlot({
          id: "intercept",
          label: { en: "Intercept Meteors", hu: "Meteorok elfogása", de: "Meteore abfangen", ro: "Interceptează meteorii" },
          hint: { en: "Deploy drone swarm to block meteors (Costs 14 MAT).", hu: "Drónraj indítása a meteorok blokkolására (14 ANYAG).", de: "Drohnenschwarm zum Blockieren von Meteoren einsetzen (14 MAT).", ro: "Lansează roiul de drone pentru a bloca meteorii (14 MAT)." },
          command: { type: "INTERCEPT_THREAT" },
          emphasis: "secondary",
        });
      }
      break;
    case "sensor":
      if (state.modules.logistics.online && state.modules.logistics.integrity > 50) {
        addSlot({
          id: "rapidFabSensor",
          label: { en: "Rapid Fab: Sensor", hu: "Gyorsgyártás: Szenzor", de: "Schnellfertigung: Sensor", ro: "Fabricare rapidă: Senzor" },
          hint: { en: "Use logistics to print structural patches (+25 integrity, +20 load).", hu: "Logisztikai gyártás (+25 integritás, +20 terhelés).", de: "Logistik für Patches nutzen (+25 Integrität, +20 Last).", ro: "Folosește logistica pentru patch-uri (+25 integritate, +20 încărcare)." },
          command: { type: "RAPID_FABRICATION", moduleId: "sensor" },
        });
      }
      addSlot({
        id: "distortionSweep",
        label: { en: "Distortion Sweep", hu: "Torzítás-keresés", de: "Distortionssweep", ro: "Scanare distorsiuni" },
        hint: { en: "Use sensors to clear structural anomalies and all marks.", hu: "Szenzorok használata az anomáliák és összes nyom eltávolítására.", de: "Sensoren zur Klärung von Anomalien und allen Spuren nutzen.", ro: "Folosește senzori la distanță pentru a curăța anomaliile és urmele." },
        command: { type: "DISTORTION_SWEEP" },
        emphasis: isRecovering ? "primary" : "secondary",
        disabled: !module.online,
      });
      addSlot({
        id: "deepScan",
        label: { en: "Purge Echoes", hu: "Visszhangok tisztítása", de: "Echos tilgen", ro: "Purjare ecouri" },
        hint: { en: "Directly dampen void echoes (-8). Costly power usage.", hu: "Közvetlenül csökkenti a void visszhangokat (-8). Drága energia.", de: "Void-Echos direkt dämpfen (-8). Teurer Strom.", ro: "Atenuează direct ecourile void (-8). Consum mare de energie." },
        command: { type: "DEEP_SCAN" },
        disabled: !module.online,
      });
      if (threat.countdown > 5 && threat.countdown <= 12 && !threat.predicted && module.online) {
        addSlot({
          id: "predict",
          label: { en: "Trajectory Lock", hu: "Pálya-rögzítés", de: "Trajektoriensperre", ro: "Blocare traiectorie" },
          hint: { en: "Identify impact vector to improve defense efficiency (Costs 8 PWR).", hu: "Azonosítja a becsapódást, javítja a védelmet (8 ENERGIA).", de: "Einschlagvektor identifizieren, um Abwehr zu verbessern (8 PWR).", ro: "Identifică vectorul de impact pentru a îmbunătăți apărarea (8 PWR)." },
          command: { type: "PREDICT_THREAT" },
          emphasis: "secondary",
        });
      }
      if (threat.countdown <= 5 && !threat.dampened && module.online && threat.countdown > 0) {
        addSlot({
          id: "dampen",
          label: { en: "Dampen Signals", hu: "Jelcsillapítás", de: "Signale dämpfen", ro: "Atenuează semnalele" },
          hint: { en: "Dampen psychic signals to reduce void impact (Costs 10 PWR).", hu: "Pszichikai jelek csillapítása a void hatás ellen (10 ENERGIA).", de: "Psychische Signale dämpfen (10 PWR).", ro: "Atenuează semnalele psihice (10 PWR)." },
          command: { type: "DAMPEN_SIGNALS" },
          emphasis: "secondary",
        });
      }
      addSlot({
        id: "repairSensor",
        label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repará ${module.name.ro}` },
        hint: { en: "Bring the long-range distortion grid back online.", hu: "Visszakapcsolja a távoli torzulásfigyelő hálózatot.", de: "Bringt das Langstrecken-Distortionsgitter zurück.", ro: "Repune în funcțiune rețeaua de distorsiuni." },
        command: { type: "REPAIR_MODULE", moduleId: "sensor" },
        emphasis: repairChallengeTarget === "sensor" ? "primary" : isRecovering ? "secondary" : undefined,
      });
      break;
    case "core":
    default:
      if (state.modules.logistics.online && state.modules.logistics.integrity > 50) {
        addSlot({
          id: "rapidFabCore",
          label: { en: "Rapid Fab: Core", hu: "Gyorsgyártás: Mag", de: "Schnellfertigung: Kern", ro: "Fabricare rapidă: Nucleu" },
          hint: { en: "Force logistics to stabilize core shell (+25 integrity).", hu: "Kényszerített logisztikai javítás (+25 integritás).", de: "Logistik zur Kernstabilisierung zwingen (+25 Integrität).", ro: "Forțează logistica să stabilizeze nucleul (+25 integritate)." },
          command: { type: "RAPID_FABRICATION", moduleId: "core" },
        });
      }
      addSlot({
        id: "reroute",
        label: { en: "Prime Core", hu: "Mag élesítése", de: "Kern vorbereiten", ro: "Amorsare nucleu" },
        hint: { en: "Unlock activation chamber and start transfer (+12 ACT).", hu: "Felnyitja a kamrát és elindítja az átvitelt (+12 AKT).", de: "Kernkammer freischalten (+12 AKT).", ro: "Deblochează camera și începe transferul (+12 AKT)." },
        command: { type: "REROUTE_TO_CORE" },
        disabled: !coreReady,
        emphasis: "primary",
      });
      addSlot({
        id: "repairCore",
        label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repará ${module.name.ro}` },
        hint: { en: "Reduce shell strain before the awakening run.", hu: "Csökkenti a testfeszülést az ébredés előtt.", de: "Hüllenspannung vor dem Erwachenslauf senken.", ro: "Reduce tensiunea corpului înainte de trezire." },
        command: { type: "REPAIR_MODULE", moduleId: "core" },
        emphasis: repairChallengeTarget === "core" ? "primary" : isRecovering ? "secondary" : undefined,
      });
      break;
    case "warroom":
      addSlot({
        id: "repairWarroom",
        label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repară ${module.name.ro}` },
        hint: { en: "Restore the command deck to operational status.", hu: "Állítsd helyre a főhadiszállás működését.", de: "Kommandozentrale wieder einsatzbereit machen.", ro: "Restaurează centrul de comandă." },
        command: { type: "REPAIR_MODULE", moduleId: "warroom" },
        emphasis: isRecovering ? "secondary" : undefined,
      });
      break;
  }

  return slots;
}
