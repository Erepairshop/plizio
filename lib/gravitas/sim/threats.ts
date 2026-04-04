import type { StarholdState, StarholdThreatState, StarholdThreatType, LocalizedString, StarholdModuleId, StarholdMarks } from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { getStarholdModifiers } from "./modifiers";
import { getModuleActionProfile } from "./modules";
import { createWaveRecoveryEvent } from "./events";
import { isDemoChapter } from "./chapter";

const DAILY_WAVE_TICKS = 24 * 60 * 60;

export function advanceStarholdThreat(state: StarholdState): { nextState: StarholdState; impacted: boolean } {
  if (state.pendingEvent) {
    return { nextState: state, impacted: false };
  }

  const { threat } = state;

  if (threat.pausedUntilAwake && !state.avatarAwake) {
    return { nextState: state, impacted: false };
  }

  // Handle lingering aftershock
  if (threat.aftershock > 0) {
    const demoUniformWave = isDemoChapter(state) && !state.avatarAwake && state.threatCycle <= 3;
    const gentleAftershock = demoUniformWave;
    const nextAftershock = threat.aftershock - 1;
    const nextThreat = { ...threat, aftershock: nextAftershock };

    // Aftershock effects scale with threat intensity and type
    let entropyGain = 0;
    let stabilityLoss = 0;
    let powerDrain = 0;
    let nextModules = { ...state.modules };

    switch (threat.type) {
      case "distortionWave":
        stabilityLoss = gentleAftershock ? 0 : Math.max(1, Math.ceil(threat.intensity * 1.5));
        entropyGain = gentleAftershock ? 0 : 1;
        break;
      case "voidStorm":
        powerDrain = gentleAftershock ? 0 : Math.max(1, Math.ceil(threat.intensity * 1.2));
        entropyGain = gentleAftershock ? 0 : Math.ceil(threat.intensity / 2);
        break;
      case "meteorShower":
        stabilityLoss = gentleAftershock ? 0 : Math.max(1, Math.ceil(threat.intensity * 0.8));
        // Lingering integrity decay for a random module during shower aftershock
        if (!gentleAftershock) {
          const ids: StarholdModuleId[] = ["reactor", "logistics", "core", "sensor"];
          const targetId = ids[state.tick % 4];
          nextModules[targetId] = {
            ...nextModules[targetId],
            integrity: clamp(nextModules[targetId].integrity - 1),
          };
        }
        break;
    }

    const alert = nextAftershock === 0 ? GRAVITAS_TEXT.threats.aftershockCleared : state.alert;
    // Clear recoveryPriority when aftershock fully ends
    const recoveryPriority = nextAftershock === 0 ? null : state.recoveryPriority;

    return {
      nextState: {
        ...state,
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability - (nextAftershock > 0 ? stabilityLoss : 0)),
          power: clamp(state.resources.power - (nextAftershock > 0 ? powerDrain : 0)),
        },
        modules: nextModules,
        entropy: clamp(state.entropy + (nextAftershock > 0 ? entropyGain : 0)),
        threat: nextThreat,
        alert,
        recoveryPriority,
      },
      impacted: false,
    };
  }

  if (threat.countdown > 1) {
    return {
      nextState: {
        ...state,
        threat: {
          ...threat,
          countdown: threat.countdown - 1,
        },
      },
      impacted: false,
    };
  }

  // Threat impacts!
  return {
    nextState: resolveThreatImpact(state),
    impacted: true,
  };
}

function resolveThreatImpact(state: StarholdState): StarholdState {
  const { threat, modules, resources, marks } = state;
  const T = GRAVITAS_TEXT.threats;
  const mods = getStarholdModifiers(state);

  let nextPower = resources.power;
  let nextStability = resources.stability;
  let nextMaterials = resources.materials;
  let nextModules = { ...modules };
  let nextMarks = { ...marks };
  let nextAnomalies = [...state.anomalies];
  let impactJournal: LocalizedString;

  const intensityFactor = 1 + (threat.intensity * 0.3);
  const predictionBonus = threat.predicted ? 0.35 : 0;
  const earlyThreatWindow = !state.avatarAwake && state.threatCycle <= 2;
  const earlyThreatScale = earlyThreatWindow ? 0.4 : 1;

  switch (threat.type) {
    case "distortionWave": {
      const baseDmg = 24 * intensityFactor * earlyThreatScale;
      const reduction = (threat.fortified ? 0.75 : 0) + predictionBonus;
      const finalDmg = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));

      nextStability = clamp(nextStability - finalDmg);
      const markPenalty = mods.markShield ? 1 : 0;
      nextMarks.shellStrain = clamp(nextMarks.shellStrain + Math.max(0, (threat.fortified ? 1 : 5) - mods.shellStrainReduction - markPenalty));
      // Aftermath: structural + psychic damage
      nextMarks.shellStrain = clamp(nextMarks.shellStrain + Math.max(0, 3 - markPenalty));
      nextMarks.voidEcho = clamp(nextMarks.voidEcho + Math.max(0, 2 - markPenalty));

      if (!threat.fortified) {
        if (Math.random() > 0.5) {
          nextAnomalies.push({
            id: "coreTremor",
            name: { en: "Core Tremor", hu: "Mag-remegés", de: "Kernbeben", ro: "Tremur nucleu" },
            severity: Math.ceil(threat.intensity / 2) + 2
          });
        }
      }
      impactJournal = T.distortionWaveImpact;
      break;
    }
    case "voidStorm": {
      const baseDmg = 18 * intensityFactor * earlyThreatScale;
      const reduction = (threat.dampened ? 0.7 : 0) + predictionBonus;
      const finalDmg = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));

      nextPower = clamp(nextPower - finalDmg);
      const markPenalty = mods.markShield ? 1 : 0;
      nextMarks.voidEcho = clamp(nextMarks.voidEcho + Math.max(0, (threat.dampened ? 1 : 6) - markPenalty));
      // Aftermath: void + power system damage
      nextMarks.voidEcho = clamp(nextMarks.voidEcho + Math.max(0, 4 - markPenalty));
      nextMarks.reactorScar = clamp(nextMarks.reactorScar + Math.max(0, 2 - markPenalty));

      if (!threat.dampened) {
        nextStability = clamp(nextStability - (earlyThreatWindow ? 3 : 12));
        if (Math.random() > 0.3) {
          nextAnomalies.push({
            id: "voidLeak",
            name: { en: "Void Leak", hu: "Void szivárgás", de: "Void-Leck", ro: "Scurgere Void" },
            severity: Math.ceil(threat.intensity / 2) + 3
          });
        }
      }
      impactJournal = T.voidStormImpact;
      break;
    }
    case "meteorShower": {
      const baseDmg = 14 * intensityFactor * earlyThreatScale;
      const reduction = (threat.intercepted ? 0.85 : 0) + predictionBonus;

      if (reduction >= 0.85) {
        const matCost = threat.intercepted ? 15 : 8;
        nextMaterials = clamp(nextMaterials - matCost);
        nextModules.logistics = {
          ...nextModules.logistics,
          integrity: clamp(nextModules.logistics.integrity - 18),
        };
        impactJournal = {
          en: "Meteors intercepted. Defensive perimeter held but suffered attrition.",
          hu: "Meteorok elfogva. A védelmi vonal kitartott, de veszteségeket szenvedett.",
          de: "Meteore abgefangen. Verteidigung hielt stand, erlitt aber Verluste.",
          ro: "Metoriți interceptați. Perimetrul defensiv a rezistat, dar a suferit pierderi."
        };
      } else {
        const markPenalty = mods.markShield ? 1 : 0;
        const ids = (Object.keys(modules) as Array<keyof typeof modules>);
        ids.forEach(id => {
          const dmg = Math.floor(baseDmg * (1.1 + Math.random() * 0.6) * (1 - reduction));
          nextModules[id] = {
            ...nextModules[id],
            integrity: clamp(nextModules[id].integrity - dmg),
          };
        });
        nextMarks.shellStrain = clamp(nextMarks.shellStrain + Math.max(0, 5 - mods.shellStrainReduction - markPenalty));
        // Aftermath: supply line + hull damage
        nextMarks.supplyStress = clamp(nextMarks.supplyStress + Math.max(0, 3 - markPenalty));
        nextMarks.shellStrain = clamp(nextMarks.shellStrain + Math.max(0, 2 - markPenalty));
        impactJournal = T.meteorShowerImpact;
      }
      break;
    }
  }

  if (isDemoChapter(state) && !state.avatarAwake && state.threatCycle < 3) {
    const demoWaveNumber = state.threatCycle + 1;
    const demoDamage =
      demoWaveNumber === 1
        ? { reactor: 10 }
        : demoWaveNumber === 2
          ? { reactor: 6, logistics: 10 }
          : { reactor: 4, logistics: 8, sensor: 10 };

    (Object.entries(demoDamage) as Array<[StarholdModuleId, number]>).forEach(([id, damage]) => {
      const profile = getModuleActionProfile(id);
      const nextIntegrity = clamp(nextModules[id].integrity - damage);
      nextModules[id] = {
        ...nextModules[id],
        integrity: nextIntegrity,
        online: nextIntegrity >= profile.onlineThreshold,
      };
    });
  }

  // Determine recovery priority: find the most damaged module
  let worstId: StarholdModuleId = "reactor";
  let worstIntegrity = 100;
  for (const id of ["reactor", "logistics", "core", "sensor"] as const) {
    if (nextModules[id].integrity < worstIntegrity) {
      worstIntegrity = nextModules[id].integrity;
      worstId = id;
    }
  }
  const recoveryPriority = worstIntegrity < 50 ? {
    moduleId: worstId,
    reason: {
      en: `${nextModules[worstId].name.en} critical — repair first`,
      hu: `${nextModules[worstId].name.hu} kritikus — először javítsd`,
      de: `${nextModules[worstId].name.de} kritisch — zuerst reparieren`,
      ro: `${nextModules[worstId].name.ro} critic — repară primul`,
    }
  } : null;

  const starReward = Math.ceil(threat.intensity / 2) + (state.worldPhase === 1 ? 1 : 0);
  const nextCycle = state.threatCycle + 1;
  const nextThreat = createNextThreat(state, nextCycle);
  const waveRecoveryEvent = isDemoChapter(state) && !state.avatarAwake && nextCycle <= 3 ? createWaveRecoveryEvent(nextCycle) : null;

  return {
    ...state,
    resources: {
      ...resources,
      power: nextPower,
      stability: nextStability,
      materials: nextMaterials,
    },
    modules: nextModules,
    marks: nextMarks,
    anomalies: nextAnomalies,
    threatCycle: nextCycle,
    threat: nextThreat,
    pendingEvent: waveRecoveryEvent,
    progression: {
      ...state.progression,
      stars: state.progression.stars + starReward,
      lastStarGain: starReward,
    },
    reactorRecovery: nextCycle === 1 && threat.type === "distortionWave"
      ? {
          active: true,
          completedStabilizations: 0,
          nextPromptTick: state.tick + 30,
        }
      : state.reactorRecovery,
    recoveryPriority,
    alert: waveRecoveryEvent ? waveRecoveryEvent.title : impactJournal,
    journal: pushJournal(state, impactJournal),
  };
}

export function createNextThreat(state: StarholdState, nextCycle: number): StarholdThreatState {
  const uniformDemoWave = isDemoChapter(state) && !state.avatarAwake && nextCycle < 3;
  const pausedUntilAwake = isDemoChapter(state) && !state.avatarAwake && nextCycle >= 3;
  const nextType = uniformDemoWave
    ? "distortionWave"
    : (["distortionWave", "voidStorm", "meteorShower"] as StarholdThreatType[])[Math.floor(Math.random() * 3)];
  const worldPressure = Math.floor(state.worldPulse / 35);
  const nextDuration = uniformDemoWave
    ? 45
    : !isDemoChapter(state)
      ? DAILY_WAVE_TICKS
    : Math.max(
        nextCycle <= 2 ? 28 : 16,
        (nextCycle === 2 ? 30 : 20) - Math.floor(nextCycle / 5) + worldPressure - (state.worldPhase === 2 ? 1 : 0)
      );

  if (pausedUntilAwake) {
    return {
      type: "distortionWave",
      countdown: 0,
      totalDuration: 0,
      intensity: 1,
      fortified: false,
      dampened: false,
      intercepted: false,
      predicted: false,
      aftershock: 0,
      pausedUntilAwake: true,
    };
  }

  const aftershockDuration =
    nextType === "distortionWave"
      ? (uniformDemoWave ? 1 : Math.max(3, 6 - (3 - Math.min(3, nextCycle)) + Math.floor(state.worldPulse / 35)))
      : nextType === "voidStorm"
        ? (uniformDemoWave ? 1 : Math.max(3, 5 - (2 - Math.min(2, nextCycle)) + Math.floor(state.worldPulse / 35)))
        : (uniformDemoWave ? 1 : Math.max(3, 4 - (1 - Math.min(1, nextCycle)) + Math.floor(state.worldPulse / 40)));

  return {
    type: nextType,
    countdown: nextDuration,
    totalDuration: nextDuration,
    intensity: uniformDemoWave ? 1 : Math.min(10, nextCycle === 2 ? 2 : 2 + Math.floor(nextCycle / 3)),
    fortified: false,
    dampened: false,
    intercepted: false,
    predicted: false,
    aftershock: aftershockDuration,
    pausedUntilAwake: false,
  };
}

export function getUpcomingDamagePreview(state: StarholdState): { 
  stabilityLoss: number; 
  powerLoss: number;
  moduleDamage: Record<StarholdModuleId, number>; 
  markGain: Partial<StarholdMarks> 
} | null {
  const { threat } = state;
  if (threat.pausedUntilAwake && !state.avatarAwake) return null;
  const mods = getStarholdModifiers(state);
  
  const intensityFactor = 1 + (threat.intensity * 0.3);
  const predictionBonus = threat.predicted ? 0.35 : 0;
  
  let stabilityLoss = 0;
  let powerLoss = 0;
  let moduleDamage: Record<StarholdModuleId, number> = { reactor: 0, logistics: 0, core: 0, sensor: 0 };
  let markGain: Partial<StarholdMarks> = {};

  switch (threat.type) {
    case "distortionWave": {
      const baseDmg = 28 * intensityFactor;
      const reduction = (threat.fortified ? 0.75 : 0) + predictionBonus;
      stabilityLoss = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));
      markGain.shellStrain = Math.max(0, (threat.fortified ? 1 : 5) - mods.shellStrainReduction) + 3;
      markGain.voidEcho = 2;
      break;
    }
    case "voidStorm": {
      const baseDmg = 22 * intensityFactor;
      const reduction = (threat.dampened ? 0.7 : 0) + predictionBonus;
      powerLoss = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));
      markGain.voidEcho = (threat.dampened ? 1 : 6) + 4;
      markGain.reactorScar = 2;
      break;
    }
    case "meteorShower": {
      const baseDmg = 18 * intensityFactor;
      const reduction = (threat.intercepted ? 0.85 : 0) + predictionBonus;
      if (reduction >= 0.85) {
        moduleDamage.logistics = 18;
      } else {
        const ids: StarholdModuleId[] = ["reactor", "logistics", "core", "sensor"];
        ids.forEach(id => {
          moduleDamage[id] = Math.floor(baseDmg * 1.4 * (1 - reduction));
        });
        markGain.supplyStress = 3;
        markGain.shellStrain = Math.max(0, 5 - mods.shellStrainReduction) + 2;
      }
      break;
    }
  }
  return { stabilityLoss, powerLoss, moduleDamage, markGain };
}
