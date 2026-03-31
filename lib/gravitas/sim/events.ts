import type {
  StarholdEventDefinition,
  StarholdEventId,
  StarholdPendingEvent,
  StarholdState,
  LocalizedString,
} from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";

const T = GRAVITAS_TEXT;

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
): StarholdPendingEvent {
  return {
    ...base,
    chainId,
    chainStep,
    chainTotal,
  };
}

const STARHOLD_EVENTS: StarholdEventDefinition[] = [
  // ── Power Fluctuation ──────────────────────────────────────────────────────
  {
    id: "powerFluctuation",
    minTick: 4,
    cooldown: 6,
    shouldTrigger: (state) =>
      state.resources.power <= 12 || state.modules.reactor.integrity < 45,
    create: () =>
      chainedEvent(
        {
          id: "powerFluctuation",
          title: T.events.powerFluctuation.title,
          body: T.events.powerFluctuation.body,
          options: [
            { id: "vent", label: T.events.powerFluctuation.options.vent },
            { id: "absorb", label: T.events.powerFluctuation.options.absorb },
          ],
        },
        "reactor-surge",
        1,
        2
      ),
    resolve: (state, optionId) => {
      if (optionId === "absorb") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "powerFluctuation",
              title: T.events.powerFluctuation.overload.title,
              body: T.events.powerFluctuation.overload.body,
              options: [
                {
                  id: "lockCore",
                  label: T.events.powerFluctuation.overload.options.lockCore,
                },
                {
                  id: "bleedHousing",
                  label:
                    T.events.powerFluctuation.overload.options.bleedHousing,
                },
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
          alert: T.alerts.absorbed,
          journal: pushJournal(state, T.journal.surgeCaptured),
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
          alert: T.alerts.coreLocked,
          journal: pushJournal(state, T.journal.overloadCore),
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
          alert: T.alerts.housingBurn,
          journal: pushJournal(state, T.journal.reactorScar),
        };
      }

      // vent (default)
      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          power: clamp(state.resources.power - 1),
          stability: clamp(state.resources.stability + 1),
        },
        alert: T.alerts.vented,
        journal: pushJournal(state, T.journal.surgeVented),
      };
    },
  },

  // ── Material Bottleneck ────────────────────────────────────────────────────
  {
    id: "materialBottleneck",
    minTick: 6,
    cooldown: 7,
    shouldTrigger: (state) =>
      state.resources.materials <= 6 && !state.modules.logistics.online,
    create: () => ({
      id: "materialBottleneck" as StarholdEventId,
      title: T.events.materialBottleneck.title,
      body: T.events.materialBottleneck.body,
      options: [
        {
          id: "droneSweep",
          label: T.events.materialBottleneck.options.droneSweep,
        },
        {
          id: "stripPlating",
          label: T.events.materialBottleneck.options.stripPlating,
        },
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
          alert: T.alerts.stripped,
          journal: pushJournal(state, T.journal.emergencyPlating),
        };
      }

      // droneSweep (default)
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
        alert: T.alerts.scavenged,
        journal: pushJournal(state, T.journal.scavengerDrone),
      };
    },
  },

  // ── Signal Pulse ───────────────────────────────────────────────────────────
  {
    id: "signalPulse",
    minTick: 8,
    cooldown: 10,
    shouldTrigger: (state) =>
      state.phase === "activation" && state.resources.activation >= 25,
    create: () =>
      chainedEvent(
        {
          id: "signalPulse",
          title: T.events.signalPulse.title,
          body: T.events.signalPulse.body,
          options: [
            {
              id: "synchronize",
              label: T.events.signalPulse.options.synchronize,
            },
            { id: "amplify", label: T.events.signalPulse.options.amplify },
          ],
        },
        "shell-echo",
        1,
        2
      ),
    resolve: (state, optionId) => {
      if (optionId === "amplify") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "signalPulse",
              title: T.events.signalPulse.fracture.title,
              body: T.events.signalPulse.fracture.body,
              options: [
                {
                  id: "holdResonance",
                  label: T.events.signalPulse.fracture.options.holdResonance,
                },
                {
                  id: "breakContact",
                  label: T.events.signalPulse.fracture.options.breakContact,
                },
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
          alert: T.alerts.echoStrong,
          journal: pushJournal(state, T.journal.forcedEcho),
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
          alert: T.alerts.resonanceHeld,
          journal: pushJournal(state, T.journal.deepResponse),
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
          alert: T.alerts.contactBroken,
          journal: pushJournal(state, T.journal.resonanceCut),
        };
      }

      // synchronize (default)
      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          activation: clamp(state.resources.activation + 4),
          stability: clamp(state.resources.stability + 1),
        },
        alert: T.alerts.shellAligned,
        journal: pushJournal(state, T.journal.steadiedResonance),
      };
    },
  },

  // ── Drift Lock ─────────────────────────────────────────────────────────────
  {
    id: "driftLock",
    minTick: 12,
    cooldown: 14,
    shouldTrigger: (state) =>
      state.marks.reactorScar +
        state.marks.shellStrain +
        state.marks.supplyStress >=
        7 && state.phase !== "boot",
    create: () => ({
      id: "driftLock" as StarholdEventId,
      title: T.events.driftLock.title,
      body: T.events.driftLock.body,
      options: [
        { id: "breakLoop", label: T.events.driftLock.options.breakLoop },
        { id: "foldInward", label: T.events.driftLock.options.foldInward },
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
            voidEcho: state.marks.voidEcho,
          },
          alert: T.alerts.foldedInward,
          journal: pushJournal(state, T.journal.repeatingPattern),
        };
      }

      // breakLoop (default)
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
          voidEcho: state.marks.voidEcho,
        },
        alert: T.alerts.driftBroken,
        journal: pushJournal(state, T.journal.burnedToBreak),
      };
    },
  },

  // ── Sensor Ghosting (was: sensorAnomaly) ──────────────────────────────────
  {
    id: "sensorGhosting",
    minTick: 10,
    cooldown: 12,
    shouldTrigger: (state) =>
      state.modules.sensor.online && state.tick > 10,
    create: () =>
      chainedEvent(
        {
          id: "sensorGhosting",
          title: T.events.sensorGhosting.title,
          body: T.events.sensorGhosting.body,
          options: [
            {
              id: "recalibrate",
              label: T.events.sensorGhosting.options.recalibrate,
            },
            {
              id: "ignore",
              label: T.events.sensorGhosting.options.ignore,
            },
          ],
        },
        "sensor-ghosting",
        1,
        1
      ),
    resolve: (state, optionId) => {
      if (optionId === "recalibrate") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 3),
            stability: clamp(state.resources.stability + 3),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress - 2),
          },
          modules: {
            ...state.modules,
            sensor: {
              ...state.modules.sensor,
              load: clamp(state.modules.sensor.load + 10),
            },
          },
          alert: T.alerts.sensorRecalibrated,
          journal: pushJournal(state, T.journal.sensorRecalibratedJournal),
        };
      }

      // ignore (default)
      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability + 1),
        },
        marks: {
          ...state.marks,
          voidEcho: clamp(state.marks.voidEcho + 1),
        },
        alert: T.alerts.ghostsIgnored,
        journal: pushJournal(state, T.journal.ghostAnomalyJournal),
      };
    },
  },

  // ── Supply Cascade (was: logisticsCollapse) ────────────────────────────────
  {
    id: "supplyCascade",
    minTick: 8,
    cooldown: 10,
    shouldTrigger: (state) =>
      state.modules.logistics.integrity < 35 &&
      state.marks.supplyStress >= 3,
    create: () =>
      chainedEvent(
        {
          id: "supplyCascade",
          title: T.events.supplyCascade.step1.title,
          body: T.events.supplyCascade.step1.body,
          options: [
            {
              id: "divertPower",
              label: T.events.supplyCascade.step1.options.divertPower,
            },
            {
              id: "riskDrones",
              label: T.events.supplyCascade.step1.options.riskDrones,
            },
          ],
        },
        "supply-cascade",
        1,
        3
      ),
    resolve: (state, optionId) => {
      if (optionId === "divertPower") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 4),
            stability: clamp(state.resources.stability + 2),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress - 1),
          },
          alert: T.alerts.powerDiverted,
          journal: pushJournal(state, T.journal.dronesProtected),
        };
      }

      if (optionId === "riskDrones") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.events.supplyCascade.step2.title,
              body: T.events.supplyCascade.step2.body,
              options: [
                {
                  id: "processFuel",
                  label: T.events.supplyCascade.step2.options.processFuel,
                },
                {
                  id: "stabilizeStructure",
                  label:
                    T.events.supplyCascade.step2.options.stabilizeStructure,
                },
              ],
            },
            "supply-cascade",
            2,
            3
          ),
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
          alert: T.alerts.dronesLost,
          journal: pushJournal(state, T.journal.droneDamage),
        };
      }

      if (optionId === "processFuel") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.events.supplyCascade.step3.title,
              body: T.events.supplyCascade.step3.body,
              options: [
                {
                  id: "lockLogistics",
                  label:
                    T.events.supplyCascade.step3.options.lockLogistics,
                },
                {
                  id: "ventSensors",
                  label: T.events.supplyCascade.step3.options.ventSensors,
                },
              ],
            },
            "supply-cascade",
            3,
            3
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 8),
          },
          alert: T.alerts.fuelProcessed,
          journal: pushJournal(state, T.journal.volatilePower),
        };
      }

      if (optionId === "stabilizeStructure") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 3),
            stability: clamp(state.resources.stability + 3),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress - 1),
          },
          alert: T.alerts.structureStabilized,
          journal: pushJournal(state, T.journal.structuralReinforce),
        };
      }

      if (optionId === "lockLogistics") {
        return {
          ...state,
          pendingEvent: null,
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 2),
          },
          modules: {
            ...state.modules,
            logistics: {
              ...state.modules.logistics,
              integrity: clamp(state.modules.logistics.integrity - 5),
            },
          },
          alert: T.alerts.logisticsLocked,
          journal: pushJournal(state, T.journal.logisticsStress),
        };
      }

      if (optionId === "ventSensors") {
        return {
          ...state,
          pendingEvent: null,
          modules: {
            ...state.modules,
            sensor: {
              ...state.modules.sensor,
              integrity: clamp(state.modules.sensor.integrity - 8),
              load: clamp(state.modules.sensor.load + 15),
            },
          },
          alert: T.alerts.sensorsVented,
          journal: pushJournal(state, T.journal.sensorDistortion),
        };
      }

      // fallback
      return { ...state, pendingEvent: null };
    },
  },

  // ── Void Breach (new) ──────────────────────────────────────────────────────
  {
    id: "voidBreach",
    minTick: 14,
    cooldown: 16,
    shouldTrigger: (state) =>
      state.marks.voidEcho >= 4 && state.phase !== "boot",
    create: () =>
      chainedEvent(
        {
          id: "voidBreach",
          title: T.events.voidBreach.step1.title,
          body: T.events.voidBreach.step1.body,
          options: [
            {
              id: "seal",
              label: T.events.voidBreach.step1.options.seal,
            },
            {
              id: "commune",
              label: T.events.voidBreach.step1.options.commune,
            },
          ],
        },
        "void-breach",
        1,
        2
      ),
    resolve: (state, optionId) => {
      if (optionId === "seal") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 8),
          },
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho - 2),
          },
          alert: T.alerts.voidSealed,
          journal: pushJournal(state, T.journal.voidSealedJournal),
        };
      }

      if (optionId === "commune") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "voidBreach",
              title: T.events.voidBreach.step2.title,
              body: T.events.voidBreach.step2.body,
              options: [
                {
                  id: "sacrifice",
                  label: T.events.voidBreach.step2.options.sacrifice,
                },
                {
                  id: "anchor",
                  label: T.events.voidBreach.step2.options.anchor,
                },
              ],
            },
            "void-breach",
            2,
            2
          ),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 5),
            stability: clamp(state.resources.stability - 4),
          },
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho + 3),
          },
          alert: T.alerts.voidCommune,
          journal: pushJournal(state, T.journal.voidEchoJournal),
        };
      }

      if (optionId === "sacrifice") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 5),
            stability: clamp(state.resources.stability + 5),
          },
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho - 3),
          },
          alert: T.alerts.voidSacrifice,
          journal: pushJournal(state, T.journal.voidSacrificeJournal),
        };
      }

      if (optionId === "anchor") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 5),
          },
          marks: {
            ...state.marks,
            reactorScar: clamp(state.marks.reactorScar + 3),
            voidEcho: clamp(state.marks.voidEcho - 1),
          },
          alert: T.alerts.voidAnchored,
          journal: pushJournal(state, T.journal.voidReactorScarJournal),
        };
      }

      // fallback
      return { ...state, pendingEvent: null };
    },
  },

  // ── Deep Trek (new) ────────────────────────────────────────────────────────
  {
    id: "deepTrek",
    minTick: 10,
    cooldown: 12,
    shouldTrigger: (state) =>
      state.modules.logistics.online && state.resources.materials < 10,
    create: () => ({
      id: "deepTrek" as StarholdEventId,
      title: T.events.deepTrek.title,
      body: T.events.deepTrek.body,
      options: [
        { id: "sendDrone", label: T.events.deepTrek.options.sendDrone },
        { id: "recall", label: T.events.deepTrek.options.recall },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "sendDrone") {
        const success = Math.random() < 0.6;

        if (success) {
          return {
            ...state,
            pendingEvent: null,
            resources: {
              ...state.resources,
              materials: clamp(state.resources.materials + 8),
              power: clamp(state.resources.power - 3),
            },
            alert: T.alerts.trekSuccess,
            journal: pushJournal(state, T.journal.trekRichesJournal),
          };
        } else {
          return {
            ...state,
            pendingEvent: null,
            resources: {
              ...state.resources,
              power: clamp(state.resources.power - 2),
            },
            modules: {
              ...state.modules,
              logistics: {
                ...state.modules.logistics,
                integrity: clamp(state.modules.logistics.integrity - 10),
              },
            },
            alert: T.alerts.trekFailed,
            journal: pushJournal(state, T.journal.trekLossJournal),
          };
        }
      }

      // recall (default)
      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability + 2),
        },
        alert: T.alerts.sensorRecalibrated,
        journal: pushJournal(state, T.journal.driftDampened),
      };
    },
  },

  // ── Entropy Cascade (new) ──────────────────────────────────────────────────
  {
    id: "entropyCascade",
    minTick: 16,
    cooldown: 18,
    shouldTrigger: (state) => state.entropy >= 40,
    create: () =>
      chainedEvent(
        {
          id: "entropyCascade",
          title: T.events.entropyCascade.step1.title,
          body: T.events.entropyCascade.step1.body,
          options: [
            {
              id: "purgeBuffer",
              label: T.events.entropyCascade.step1.options.purgeBuffer,
            },
            {
              id: "isolateModules",
              label: T.events.entropyCascade.step1.options.isolateModules,
            },
          ],
        },
        "entropy-cascade",
        1,
        2
      ),
    resolve: (state, optionId) => {
      if (optionId === "purgeBuffer") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 6),
            stability: clamp(state.resources.stability + 4),
          },
          entropy: clamp(state.entropy - 20),
          alert: T.alerts.entropyPurged,
          journal: pushJournal(state, T.journal.entropyStable),
        };
      }

      if (optionId === "isolateModules") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "entropyCascade",
              title: T.events.entropyCascade.step2.title,
              body: T.events.entropyCascade.step2.body,
              options: [
                {
                  id: "burnOut",
                  label: T.events.entropyCascade.step2.options.burnOut,
                },
                {
                  id: "redirectCore",
                  label:
                    T.events.entropyCascade.step2.options.redirectCore,
                },
              ],
            },
            "entropy-cascade",
            2,
            2
          ),
          alert: T.alerts.cascadeIsolated,
          journal: pushJournal(state, T.journal.cascadeStart),
        };
      }

      if (optionId === "burnOut") {
        // Pick a random online module to take the damage
        const moduleIds = (
          Object.keys(state.modules) as (keyof typeof state.modules)[]
        ).filter((id) => state.modules[id].online);
        const targetId =
          moduleIds[Math.floor(Math.random() * moduleIds.length)] ??
          "logistics";
        const targetModule = state.modules[targetId];
        const burnedName = targetModule.name;

        return {
          ...state,
          pendingEvent: null,
          modules: {
            ...state.modules,
            [targetId]: {
              ...targetModule,
              online: false,
              integrity: clamp(targetModule.integrity - 20),
            },
          },
          entropy: clamp(state.entropy - 15),
          alert: T.alerts.moduleBurnout(burnedName),
          journal: pushJournal(state, T.journal.entropyBurnout),
        };
      }

      if (optionId === "redirectCore") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation - 8),
          },
          entropy: clamp(state.entropy - 10),
          resonance: clamp(state.resonance + 15),
          alert: T.alerts.coreRedirection,
          journal: pushJournal(state, T.journal.coreSpike),
        };
      }

      // fallback
      return { ...state, pendingEvent: null };
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

export function resolveStarholdEvent(
  state: StarholdState,
  optionId: string
): StarholdState {
  if (!state.pendingEvent) return state;

  const event = STARHOLD_EVENTS.find(
    (entry) => entry.id === state.pendingEvent?.id
  );
  if (!event) {
    return { ...state, pendingEvent: null };
  }

  return event.resolve(state, optionId);
}
