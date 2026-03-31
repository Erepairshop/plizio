import type { StarholdEventDefinition, StarholdState, StarholdEventId, StarholdModuleId, LocalizedString } from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";

const T = GRAVITAS_TEXT.events;
const A = GRAVITAS_TEXT.alerts;
const J = GRAVITAS_TEXT.journal;

function chainedEvent(
  base: {
    id: StarholdEventId;
    title: LocalizedString;
    body: LocalizedString;
    options: { id: string; label: LocalizedString }[];
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
    id: "emergencyOverride",
    minTick: 0,
    cooldown: 0,
    shouldTrigger: (state) => state.lockdown,
    create: () => ({
      ...chainedEvent(
        {
          id: "emergencyOverride",
          title: T.emergencyOverride.step1.title,
          body: T.emergencyOverride.step1.body,
          options: [
            { id: "forceGrid", label: T.emergencyOverride.step1.options.forceGrid },
            { id: "purgeBuffer", label: T.emergencyOverride.step1.options.purgeBuffer },
          ],
        },
        "lockdown-override",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "forceGrid") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "emergencyOverride",
              title: T.emergencyOverride.step2.title,
              body: T.emergencyOverride.step2.body,
              options: [
                { id: "patchVents", label: T.emergencyOverride.step2.options.patchVents },
                { id: "absorbSurge", label: T.emergencyOverride.step2.options.absorbSurge },
              ],
            },
            "lockdown-override",
            2,
            2
          ),
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability + 10),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 3),
          },
          alert: A.overrideForced,
          journal: pushJournal(state, J.gridForced),
        };
      }

      if (optionId === "purgeBuffer") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "emergencyOverride",
              title: T.emergencyOverride.step2.title,
              body: T.emergencyOverride.step2.body,
              options: [
                { id: "patchVents", label: T.emergencyOverride.step2.options.patchVents },
                { id: "absorbSurge", label: T.emergencyOverride.step2.options.absorbSurge },
              ],
            },
            "lockdown-override",
            2,
            2
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 15),
          },
          entropy: clamp(state.entropy - 10),
          alert: A.overrideBypass,
          journal: pushJournal(state, J.coolingBypassed),
        };
      }

      if (optionId === "patchVents") {
        return {
          ...state,
          pendingEvent: null,
          lockdown: false,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 15),
            stability: clamp(state.resources.stability + 15),
          },
          alert: A.lockdownLifted,
          journal: pushJournal(state, J.hullPatched),
        };
      }

      if (optionId === "absorbSurge") {
        return {
          ...state,
          pendingEvent: null,
          lockdown: false,
          entropy: clamp(state.entropy + 15),
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability + 10),
          },
          alert: A.lockdownLifted,
          journal: pushJournal(state, J.voidWhisperHeeded),
        };
      }

      return state;
    },
  },
  {
    id: "powerFluctuation",
    minTick: 4,
    cooldown: 6,
    shouldTrigger: (state) => state.resources.power <= 12 || state.modules.reactor.integrity < 45,
    create: () => ({
      ...chainedEvent(
        {
          id: "powerFluctuation",
          title: T.powerFluctuation.title,
          body: T.powerFluctuation.body,
          options: [
            { id: "vent", label: T.powerFluctuation.options.vent },
            { id: "absorb", label: T.powerFluctuation.options.absorb },
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
              title: T.powerFluctuation.overload.title,
              body: T.powerFluctuation.overload.body,
              options: [
                { id: "lockCore", label: T.powerFluctuation.overload.options.lockCore },
                { id: "bleedHousing", label: T.powerFluctuation.overload.options.bleedHousing },
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
          alert: A.absorbed,
          journal: pushJournal(state, J.surgeCaptured),
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
          progression: {
            ...state.progression,
            stars: state.progression.stars + 1,
          },
          alert: A.coreLocked,
          journal: pushJournal(state, J.overloadCore),
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
          alert: A.housingBurn,
          journal: pushJournal(state, J.reactorScar),
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
        alert: A.vented,
        journal: pushJournal(state, J.surgeVented),
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
      title: T.materialBottleneck.title,
      body: T.materialBottleneck.body,
      options: [
        { id: "droneSweep", label: T.materialBottleneck.options.droneSweep },
        { id: "stripPlating", label: T.materialBottleneck.options.stripPlating },
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
          alert: A.stripped,
          journal: pushJournal(state, J.emergencyPlating),
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
          alert: A.scavenged,
          journal: pushJournal(state, J.scavengerDrone),
      };
    },
  },
  {
    id: "entropyCascade",
    minTick: 20,
    cooldown: 25,
    shouldTrigger: (state) => state.entropy > 40,
    create: () => ({
      ...chainedEvent(
        {
          id: "entropyCascade",
          title: T.entropyCascade.step1.title,
          body: T.entropyCascade.step1.body,
          options: [
            { id: "purgeBuffer", label: T.entropyCascade.step1.options.purgeBuffer },
            { id: "isolateModules", label: T.entropyCascade.step1.options.isolateModules },
          ],
        },
        "entropy-cascade",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "purgeBuffer") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 15),
          },
          entropy: clamp(state.entropy - 25),
          alert: A.entropyPurged,
          journal: pushJournal(state, J.entropyStable),
        };
      }
      if (optionId === "isolateModules") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "entropyCascade",
              title: T.entropyCascade.step2.title,
              body: T.entropyCascade.step2.body,
              options: [
                { id: "burnOut", label: T.entropyCascade.step2.options.burnOut },
                { id: "redirectCore", label: T.entropyCascade.step2.options.redirectCore },
              ],
            },
            "entropy-cascade",
            2,
            2
          ),
          alert: A.cascadeIsolated,
          journal: pushJournal(state, {
            en: "You attempted to isolate the entropy, but the grid is failing.",
            hu: "Megpróbáltad izolálni az entrópiát, de a hálózat összeomlik.",
            de: "Du hast versucht, die Entropie zu isolieren, aber das Netz versagt.",
            ro: "Ai încercat să izolezi entropia, dar rețeaua eșuează.",
          }),
        };
      }
      if (optionId === "burnOut") {
        const moduleIds: StarholdModuleId[] = ["reactor", "logistics", "sensor"];
        const targetId = moduleIds[state.tick % 3];
        const target = state.modules[targetId];
        return {
          ...state,
          pendingEvent: null,
          modules: {
            ...state.modules,
            [targetId]: {
              ...target,
              online: false,
              integrity: clamp(target.integrity - 30),
            },
          },
          entropy: clamp(state.entropy - 15),
          alert: A.moduleBurnout(target.name),
          journal: pushJournal(state, J.entropyBurnout),
        };
      }
      if (optionId === "redirectCore") {
        return {
          ...state,
          pendingEvent: null,
          resonance: clamp(state.resonance + 40),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation - 10),
          },
          entropy: clamp(state.entropy - 10),
          alert: A.coreRedirection,
          journal: pushJournal(state, J.coreSpike),
        };
      }
      return state;
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
          title: T.signalPulse.title,
          body: T.signalPulse.body,
          options: [
            { id: "synchronize", label: T.signalPulse.options.synchronize },
            { id: "amplify", label: T.signalPulse.options.amplify },
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
              title: T.signalPulse.fracture.title,
              body: T.signalPulse.fracture.body,
              options: [
                { id: "holdResonance", label: T.signalPulse.fracture.options.holdResonance },
                { id: "breakContact", label: T.signalPulse.fracture.options.breakContact },
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
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho + 1),
          },
          alert: A.echoStrong,
          journal: pushJournal(state, J.forcedEcho),
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
          alert: A.resonanceHeld,
          journal: pushJournal(state, J.deepResponse),
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
          alert: A.contactBroken,
          journal: pushJournal(state, J.resonanceCut),
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
        alert: A.shellAligned,
        journal: pushJournal(state, J.steadiedResonance),
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
      title: T.driftLock.title,
      body: T.driftLock.body,
      options: [
        { id: "breakLoop", label: T.driftLock.options.breakLoop },
        { id: "foldInward", label: T.driftLock.options.foldInward },
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
            voidEcho: clamp(state.marks.voidEcho + 2),
          },
          alert: A.foldedInward,
          journal: pushJournal(state, J.repeatingPattern),
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
          voidEcho: clamp(state.marks.voidEcho),
        },
        alert: A.driftBroken,
        journal: pushJournal(state, J.burnedToBreak),
      };
    },
  },
  {
    id: "voidBreach",
    minTick: 15,
    cooldown: 20,
    shouldTrigger: (state) => state.resources.activation > 40 && state.marks.voidEcho > 2,
    create: () => ({
      ...chainedEvent(
        {
          id: "voidBreach",
          title: T.voidBreach.step1.title,
          body: T.voidBreach.step1.body,
          options: [
            { id: "seal", label: T.voidBreach.step1.options.seal },
            { id: "commune", label: T.voidBreach.step1.options.commune },
          ],
        },
        "void-breach",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "seal") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 10),
            stability: clamp(state.resources.stability + 5),
          },
          alert: A.voidSealed,
          journal: pushJournal(state, J.voidSealedJournal),
        };
      }
      if (optionId === "commune") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "voidBreach",
              title: T.voidBreach.step2.title,
              body: T.voidBreach.step2.body,
              options: [
                { id: "sacrifice", label: T.voidBreach.step2.options.sacrifice },
                { id: "anchor", label: T.voidBreach.step2.options.anchor },
              ],
            },
            "void-breach",
            2,
            2
          ),
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho + 4),
          },
          anomalies: state.anomalies.some((anomaly) => anomaly.id === "voidLeak")
            ? state.anomalies
            : [...state.anomalies, { id: "voidLeak", name: { en: "Void Leak", hu: "Void szivárgás", de: "Void-Leck", ro: "Scurgere Void" }, severity: 3 }],
          alert: A.voidCommune,
          journal: pushJournal(state, J.voidEchoJournal),
        };
      }
      if (optionId === "sacrifice") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 12),
            stability: clamp(state.resources.stability + 10),
          },
          alert: A.voidSacrifice,
          journal: pushJournal(state, J.voidSacrificeJournal),
        };
      }
      if (optionId === "anchor") {
        return {
          ...state,
          pendingEvent: null,
          marks: {
            ...state.marks,
            reactorScar: clamp(state.marks.reactorScar + 5),
            voidEcho: clamp(state.marks.voidEcho - 2),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 1,
          },
          alert: A.voidAnchored,
          journal: pushJournal(state, J.voidReactorScarJournal),
        };
      }
      return state;
    },
  },
  {
    id: "sensorGhosting",
    minTick: 10,
    cooldown: 12,
    shouldTrigger: (state) => state.modules.sensor.online && state.marks.shellStrain > 3,
    create: () => ({
      id: "sensorGhosting",
      title: T.sensorGhosting.title,
      body: T.sensorGhosting.body,
      options: [
        { id: "ignore", label: T.sensorGhosting.options.ignore },
        { id: "recalibrate", label: T.sensorGhosting.options.recalibrate },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "recalibrate") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 4),
          },
          alert: A.sensorRecalibrated,
          journal: pushJournal(state, J.sensorRecalibratedJournal),
        };
      }
      return {
        ...state,
        pendingEvent: null,
        anomalies: state.anomalies.some((anomaly) => anomaly.id === "sensorGhost")
          ? state.anomalies
          : [...state.anomalies, { id: "sensorGhost", name: { en: "Sensor Ghosts", hu: "Szenzor-szellemek", de: "Sensorgeister", ro: "Fantome senzori" }, severity: 2, duration: 10 }],
        alert: A.ghostsIgnored,
        journal: pushJournal(state, J.ghostAnomalyJournal),
      };
    },
  },
  {
    id: "deepTrek",
    minTick: 8,
    cooldown: 15,
    shouldTrigger: (state) => state.modules.logistics.online && state.resources.power > 15,
    create: () => ({
      id: "deepTrek",
      title: T.deepTrek.title,
      body: T.deepTrek.body,
      options: [
        { id: "sendDrone", label: T.deepTrek.options.sendDrone },
        { id: "recall", label: T.deepTrek.options.recall },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "sendDrone") {
        const success = Math.random() > 0.4;
        if (success) {
          return {
            ...state,
            pendingEvent: null,
            resources: {
              ...state.resources,
              materials: clamp(state.resources.materials + 20),
              power: clamp(state.resources.power - 8),
            },
            alert: A.trekSuccess,
            journal: pushJournal(state, J.trekRichesJournal),
          };
        } else {
          return {
            ...state,
            pendingEvent: null,
            resources: {
              ...state.resources,
              power: clamp(state.resources.power - 4),
            },
            marks: {
              ...state.marks,
              supplyStress: clamp(state.marks.supplyStress + 4),
            },
            alert: A.trekFailed,
            journal: pushJournal(state, J.trekLossJournal),
          };
        }
      }
      return {
        ...state,
        pendingEvent: null,
      };
    },
  },
  {
    id: "supplyCascade",
    minTick: 5,
    cooldown: 12,
    shouldTrigger: (state) => state.modules.logistics.online && state.resources.materials < 15,
    create: () => ({
      ...chainedEvent(
        {
          id: "supplyCascade",
          title: T.supplyCascade.step1.title,
          body: T.supplyCascade.step1.body,
          options: [
            { id: "divertPower", label: T.supplyCascade.step1.options.divertPower },
            { id: "riskDrones", label: T.supplyCascade.step1.options.riskDrones },
          ],
        },
        "supply-cascade",
        1,
        3
      ),
    }),
    resolve: (state, optionId) => {
      // Step 1 Resolves
      if (optionId === "divertPower") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step2.title,
              body: T.supplyCascade.step2.body,
              options: [
                { id: "processFuel", label: T.supplyCascade.step2.options.processFuel },
                { id: "stabilizeStructure", label: T.supplyCascade.step2.options.stabilizeStructure },
              ],
            },
            "supply-cascade",
            2,
            3
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 5),
          },
          alert: A.powerDiverted,
          journal: pushJournal(state, J.dronesProtected),
        };
      }
      if (optionId === "riskDrones") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step2.title,
              body: T.supplyCascade.step2.body,
              options: [
                { id: "processFuel", label: T.supplyCascade.step2.options.processFuel },
                { id: "stabilizeStructure", label: T.supplyCascade.step2.options.stabilizeStructure },
              ],
            },
            "supply-cascade",
            2,
            3
          ),
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability - 3),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 2),
          },
          alert: A.dronesLost,
          journal: pushJournal(state, J.droneDamage),
        };
      }

      // Step 2 Resolves
      if (optionId === "processFuel") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step3.title,
              body: T.supplyCascade.step3.body,
              options: [
                { id: "lockLogistics", label: T.supplyCascade.step3.options.lockLogistics },
                { id: "ventSensors", label: T.supplyCascade.step3.options.ventSensors },
              ],
            },
            "supply-cascade",
            3,
            3
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 12),
          },
          alert: A.fuelProcessed,
          journal: pushJournal(state, J.volatilePower),
        };
      }
      if (optionId === "stabilizeStructure") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step3.title,
              body: T.supplyCascade.step3.body,
              options: [
                { id: "lockLogistics", label: T.supplyCascade.step3.options.lockLogistics },
                { id: "ventSensors", label: T.supplyCascade.step3.options.ventSensors },
              ],
            },
            "supply-cascade",
            3,
            3
          ),
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 8),
            stability: clamp(state.resources.stability + 5),
          },
          alert: A.structureStabilized,
          journal: pushJournal(state, J.structuralReinforce),
        };
      }

      // Step 3 Resolves
      if (optionId === "lockLogistics") {
        return {
          ...state,
          pendingEvent: null,
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 3),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 2,
          },
          alert: A.logisticsLocked,
          journal: pushJournal(state, J.logisticsStress),
        };
      }
      if (optionId === "ventSensors") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability - 4),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 2),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 2,
          },
          alert: A.sensorsVented,
          journal: pushJournal(state, J.sensorDistortion),
        };
      }

      return state;
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
