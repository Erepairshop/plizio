import type { StarholdModuleId, StarholdState, LocalizedString } from "./types";
import { applyStarholdEvents } from "./events";
import { clamp } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { coolDownResonance, unlockActivationTransfer } from "./activation";
import { advanceStarholdThreat } from "./threats";
import { checkStarholdMilestones } from "./progression";
import { addResourceDelta, pushJournal, updateModuleIntegrity, addModuleLoad } from "./shared";
import { getStarholdModifiers } from "./modifiers";
import { getModuleActionProfile } from "./modules";

function completeActiveOperation(state: StarholdState): StarholdState {
  const op = state.activeOperation;
  if (!op) return state;

  const mods = getStarholdModifiers(state);
  switch (op.type) {
    case "stabilizeReactor": {
      const introWindow = state.phase === "boot" && state.tick < 30;
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
              nextPromptTick: state.tick + 24,
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
      const introWindow = state.phase === "boot" && state.tick < 36;
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
      const introWindow = state.phase === "boot" && state.tick < 40;
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

function advanceScavengeOperation(state: StarholdState): StarholdState {
  const op = state.scavengeOperation;
  if (!op) return state;

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

  const introWindow = state.phase === "boot" && state.tick < 40;
  const entropy = state.anomalies.find((a) => a.id === "materialEntropy");
  const entropyPenalty = entropy ? entropy.severity : 0;
  const materialsGain = clamp((state.modules.logistics.online ? 6 : 4) + (introWindow ? 2 : 0) - entropyPenalty, 2);
  const powerGain = state.modules.sensor.online ? (introWindow ? 2 : 1) : 0;
  const stabilityShift = introWindow ? 0 : -1;

  return {
    ...state,
    resources: addResourceDelta(state.resources, {
      materials: materialsGain,
      power: powerGain,
      stability: stabilityShift,
    }),
    worldPulse: clamp(state.worldPulse + 1),
    alert: GRAVITAS_TEXT.alerts.scavengeSuccess,
    journal: pushJournal(state, GRAVITAS_TEXT.journal.recoveredMaterials(materialsGain)),
    scavengeOperation: {
      ...op,
      remaining: op.cycleDuration,
      completedCycles: op.completedCycles + 1,
    },
  };
}

export function advanceStarholdTick(state: StarholdState): StarholdState {
  const scriptedPhaseOne = !state.avatarAwake && state.tick < 300;
  const mods = getStarholdModifiers(state);
  const nextQuietTicks = Math.max(0, (state.eventQuietTicks ?? 0) - 1);
  const introWindow = state.phase === "boot" && state.tick < 18;
  const settlingWindow = !state.avatarAwake && state.tick < 70;
  const earlyWindow = !state.avatarAwake && state.tick < 100;
  const sensorOnline = state.modules.sensor.online;
  const sensorIntegrity = state.modules.sensor.integrity;
  const reactorBoost = state.modules.reactor.online ? (introWindow ? 3 : settlingWindow ? 2 : 2) : 0;
  const logisticsDrainBase = state.modules.logistics.online ? 0 : 1 + Math.floor(state.marks.supplyStress / 4);
  const logisticsDrain = Math.max(0, logisticsDrainBase - (introWindow ? 1 : 0));
  // sensorBoost synergy: Reactor + Sensor both healthy → +2 stability instead of +1
  const sensorStability = state.modules.sensor.online ? ((mods.sensorBoost ? 2 : 1) + (introWindow ? 1 : 0)) : 0;
  const phaseDrain = state.phase === "activation" ? 1 : 0;

  // Crisis / Stability checks
  const isCrisis = state.resources.power < (introWindow ? 6 : 10) && state.resources.stability < (settlingWindow ? 20 : 30);
  const isHighStability = state.resources.stability > (settlingWindow ? 80 : 85);

  // Anomalies impact
  let anomalyPowerDrain = 0;
  let anomalyStabilityDrain = 0;
  state.anomalies.forEach(a => {
    if (a.id === "voidLeak") anomalyStabilityDrain += a.severity;
    if (a.id === "coreTremor") anomalyPowerDrain += Math.floor(a.severity / 2);
    if (a.id === "materialEntropy") { /* handled in commands/scavenge */ }
  });

  // Marks impact
  const scarDrain = Math.max(0, Math.floor(state.marks.reactorScar / 3) - (settlingWindow ? 1 : 0));
  const shellDrain = Math.max(0, Math.floor(state.marks.shellStrain / 2) - (settlingWindow ? 1 : 0));
  const voidDrain = Math.max(0, Math.floor(state.marks.voidEcho / 3) - (settlingWindow ? 1 : 0));
  const totalMarks = state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress + state.marks.voidEcho;
  const driftInstability = totalMarks > 8 ? Math.floor(totalMarks / 4) : 0;

  // Resonance effect
  const resonancePowerDrain = Math.floor(state.resonance / 25);

  // Entropy effect (soft trap)
  const entropyStabilityDrain = Math.max(0, Math.floor(state.entropy / 15) - (settlingWindow ? 1 : 0));
  const entropyPowerDrain = Math.max(0, Math.floor(state.entropy / 20) - (settlingWindow ? 1 : 0));

  // High Stability bonus: reduced drains
  const stabilityBuffer = isHighStability ? 2 : 0;
  const isAwakened = state.phase === "awakened";
  const decayMult = isAwakened ? 1.5 : 1;
  const worldPhase = state.worldPhase;
  const phasePowerDrain = worldPhase === 1 ? 1 : 0;
  const phaseStabilityBonus = worldPhase === 2 ? 1 : 0;
  const phaseEntropyBias = worldPhase === 3 ? 1 : 0;

  const nextPower = clamp(
    state.resources.power + reactorBoost - logisticsDrain - phaseDrain - scarDrain - resonancePowerDrain - entropyPowerDrain - anomalyPowerDrain - phasePowerDrain + (isHighStability ? 1 : 0) + (mods.gridSynergy ? 1 : 0) + (mods.fullGrid ? 2 : 0) + (isAwakened ? 1 : 0)
  );
  let nextStability = clamp(
    state.resources.stability +
      sensorStability +
      stabilityBuffer +
      phaseStabilityBonus -
      (state.modules.reactor.integrity < 40 ? (settlingWindow ? 0 : 1) : 0) -
      (state.modules.core.load > 75 ? (introWindow ? 0 : 1) : 0) -
      shellDrain -
      voidDrain -
      anomalyStabilityDrain -
      entropyStabilityDrain -
      driftInstability -
      (isCrisis ? (settlingWindow ? 1 : 2) : 0)
  );

  let nextModules = { ...state.modules };
  // Module load cooling and overload wear
  Object.keys(nextModules).forEach((id) => {
    const m = nextModules[id as StarholdModuleId];
    // moduleCoolant: load cooling 2x faster
    const coolingBase = mods.moduleCoolant ? 2 : 1;
    const nextLoad = m.online ? clamp(m.load - coolingBase) : clamp(m.load - (coolingBase * 2));
    let nextIntegrity = m.integrity;
    
    if (m.load >= 92) {
      nextIntegrity = clamp(nextIntegrity - 1);
    }
    if (m.load >= 95) {
      nextIntegrity = clamp(nextIntegrity - 1); // Total -2
    }
    
    nextModules[id as StarholdModuleId] = { ...m, load: nextLoad, integrity: nextIntegrity };
  });

  let alert = state.alert;
  let nextJournal = [...state.journal];

  // Station Report every 50 ticks
  if (state.tick % 50 === 0 && state.tick > 0) {
    const avgIntegrity = Math.floor(
      (nextModules.reactor.integrity + nextModules.logistics.integrity +
       nextModules.sensor.integrity + nextModules.core.integrity) / 4
    );
    const statusText = avgIntegrity > 70 ? { en: "STABLE", hu: "STABIL", de: "STABIL", ro: "STABIL" } : 
                       avgIntegrity > 40 ? { en: "DAMAGED", hu: "SÉRÜLT", de: "BESCHÄDIGT", ro: "AVARIAT" } : 
                       { en: "CRITICAL", hu: "KRITIKUS", de: "KRITISCH", ro: "CRITIC" };
    
    const report: LocalizedString = {
      en: `Station Report T${state.tick}: ${statusText.en} — Avg integrity ${avgIntegrity}%, Entropy ${state.entropy}, Marks ${totalMarks}`,
      hu: `Állomás jelentés T${state.tick}: ${statusText.hu} — Átlag integritás ${avgIntegrity}%, Entrópia ${state.entropy}, Nyomok ${totalMarks}`,
      de: `Stationsbericht T${state.tick}: ${statusText.de} — Durchschn. Integrität ${avgIntegrity}%, Entropie ${state.entropy}, Spuren ${totalMarks}`,
      ro: `Raport stație T${state.tick}: ${statusText.ro} — Integritate medie ${avgIntegrity}%, Entropie ${state.entropy}, Marcaje ${totalMarks}`,
    };
    nextJournal = pushJournal({ ...state, journal: nextJournal }, report);
  }

  // Lockdown logic
  let nextLockdown = state.lockdown;
  let nextPendingEvent = state.pendingEvent;
  const lockdownArmed = !scriptedPhaseOne && state.tick >= 95;
  if (nextStability === 0 && !nextLockdown) {
    if (lockdownArmed) {
      nextLockdown = true;
      nextPendingEvent = null; // Force clear to allow override event
      alert = {
        en: "STATION LOCKDOWN: Stability failure. Emergency override required.",
        hu: "ÁLLOMÁS LEZÁRVA: Stabilitási hiba. Kézi felülbírálás szükséges.",
        de: "STATIONS-LOCKDOWN: Stabilitätsfehler. Notfall-Override erforderlich.",
        ro: "BLOCARE STAȚIE: Eșec stabilitate. Este necesară suprascrierea de urgență.",
      };
      nextJournal = pushJournal({ ...state, journal: nextJournal }, alert);
    } else {
      nextStability = 8;
      alert = GRAVITAS_TEXT.alerts.critStability;
    }
  }

  if (!state.avatarAwake && nextStability > 0 && nextStability < 18) {
    nextStability = clamp(
      nextStability +
        (state.modules.reactor.online ? 2 : 1) +
        (state.modules.sensor.online ? 1 : 0)
    );
  }

  // Void Whispers (Psychic atmosphere)
  if (!introWindow && state.marks.voidEcho > 8 && state.tick % 15 === 0 && Math.random() > 0.4) {
    const whispers = GRAVITAS_TEXT.lore.voidWhispers || [];
    if (whispers.length > 0) {
      const randomWhisper = whispers[Math.floor(Math.random() * whispers.length)];
      nextJournal = pushJournal({ ...state, journal: nextJournal }, randomWhisper);
    }
  }

  // Glitch logic (accelerated in Crisis)
  const glitchThreshold = isCrisis ? 8 : 10;
  if (!earlyWindow && totalMarks > glitchThreshold && state.tick % (isCrisis ? 3 : 5) === 0) {
    const affectedModuleId = (["reactor", "logistics", "core", "sensor"] as const)[state.tick % 4];
    const baseDamage = (isCrisis ? 4 : 2) + Math.floor(totalMarks / 5);
    // coreShield synergy: Logistics + Core both healthy → core takes 50% less integrity damage from glitches
    const damage = (affectedModuleId === "core" && mods.coreShield) ? Math.max(1, Math.floor(baseDamage / 2)) : baseDamage;
    nextModules[affectedModuleId] = {
      ...nextModules[affectedModuleId],
      integrity: clamp(nextModules[affectedModuleId].integrity - damage),
    };
    alert = GRAVITAS_TEXT.alerts.driftGlitch(nextModules[affectedModuleId].name);
    nextJournal = pushJournal({ ...state, journal: nextJournal }, alert);
  }

  // Entropy Spike (Aggressive damage at high entropy)
  if (!earlyWindow && state.entropy > 80 && state.tick % 4 === 0) {
    const ids: StarholdModuleId[] = ["reactor", "logistics", "core", "sensor"];
    const targetId = ids[Math.floor(Math.random() * 4)];
    nextModules[targetId] = {
      ...nextModules[targetId],
      integrity: clamp(nextModules[targetId].integrity - 5),
    };
    alert = {
      en: `Critical Entropy Spike! ${nextModules[targetId].name.en} integrity failing.`,
      hu: `Kritikus entrópia-tüske! ${nextModules[targetId].name.hu} integritása omlik.`,
      de: `Kritischer Entropie-Peak! ${nextModules[targetId].name.de}-Integrität versagt.`,
      ro: `Vârf critic de entropie! Integritatea ${nextModules[targetId].name.ro} eșuează.`,
    };
    nextJournal = pushJournal({ ...state, journal: nextJournal }, alert);
  }

  // Activation should keep moving once the chamber is active.
  let nextActivation = state.resources.activation;
  if (state.phase === "activation" && !state.avatarAwake) {
    const passiveGain =
      (state.modules.core.online ? 0.22 : 0) +
      (sensorOnline ? 0.16 : 0) +
      (nextStability >= 60 ? 0.12 : 0);
    const passiveLoss =
      (nextPower < 12 ? 0.22 : 0) +
      (nextStability < 40 ? 0.18 : 0) +
      (!sensorOnline ? 0.08 : 0);
    nextActivation = clamp(nextActivation + passiveGain - passiveLoss, 0, 100);
  } else if (state.phase === "boot" && nextActivation > 0 && !state.activeOperation) {
    nextActivation = clamp(nextActivation - 0.05, 0, 100);
  }

  const nextPhase =
    (state.avatarAwake || nextActivation >= 100) && state.phase !== "awakened" ? "awakened" : state.phase;

  // Auto-Salvage Item Logic
  let nextMaterials = state.resources.materials;
  if (state.progression.unlockedItems.includes("auto_salvage") && state.tick % 10 === 0) {
    nextMaterials = clamp(nextMaterials + 1);
    nextJournal = pushJournal({ ...state, journal: nextJournal }, {
      en: "Auto-salvage unit recovered materials.",
      hu: "Automata gyűjtő anyagokat emelt ki.",
      de: "Auto-Bergungseinheit hat Material gesichert.",
      ro: "Unitatea auto-recuperare a colectat materiale.",
    });
  }

  let nextAlert =
    nextPower < 8
      ? GRAVITAS_TEXT.alerts.critPower
      : nextStability < 25
        ? GRAVITAS_TEXT.alerts.critStability
        : alert;

  // Anomaly duration decay (slower in Crisis)
  const nextAnomalies = state.anomalies
    .map(a => a.duration !== undefined ? { ...a, duration: a.duration - (isCrisis ? 0.5 : 1) } : a)
    .filter(a => a.duration === undefined || a.duration > 0);

  // Entropy logic
  let nextEntropy = state.entropy;
  if (totalMarks > 12 || isCrisis || nextLockdown) {
    const baseGain = Math.floor(totalMarks / 6) + (isCrisis ? 2 : 0) + (nextLockdown ? 3 : 0);
    // entropyDampener: 25% slower entropy growth
    let gain = mods.entropyDampener ? Math.ceil(baseGain * 0.75) : baseGain;
    if (state.tick < 70) gain = Math.min(gain, 1);
    nextEntropy = clamp(nextEntropy + gain);
  } else if (totalMarks < 5 || isHighStability) {
    nextEntropy = clamp(nextEntropy - (isHighStability ? 2 : 1));
  }
  if (phaseEntropyBias > 0) {
    nextEntropy = clamp(nextEntropy - phaseEntropyBias);
  }
  if (!sensorOnline && (state.tick >= 70 || state.threat.countdown <= 12) && state.tick % 12 === 0) {
    nextEntropy = clamp(nextEntropy + 1);
  }
  if (sensorOnline && sensorIntegrity >= 55 && state.tick % 10 === 0) {
    nextEntropy = clamp(nextEntropy - 1);
  }

  const nextWorldPhase = state.tick > 0 && state.tick % 40 === 0 ? (state.worldPhase + 1) % 4 : state.worldPhase;
  const worldPulseGain =
    Math.floor(totalMarks / (settlingWindow ? 6 : 4)) +
    Math.floor(nextEntropy / (settlingWindow ? 28 : 20)) +
    (state.threat.aftershock > 0 ? 2 : 0) +
    (state.phase === "awakened" ? 1 : 0) +
    (nextLockdown ? 2 : 0);
  const worldPulseEase = (isHighStability ? 2 : 0) + (nextWorldPhase === 0 ? 1 : 0);
  const nextWorldPulse = clamp(state.worldPulse + worldPulseGain - worldPulseEase);

  let worldShifted = false;
  if (nextWorldPhase !== state.worldPhase) {
    worldShifted = true;
    const worldTurn = GRAVITAS_TEXT.lore.worldTurns[nextWorldPhase];
    nextJournal = pushJournal({ ...state, journal: nextJournal }, worldTurn);
    alert = GRAVITAS_TEXT.alerts.worldPatternShift;
  }
  if (worldShifted) {
    nextAlert = GRAVITAS_TEXT.alerts.worldPatternShift;
  }

  if (nextLockdown) {
    const ids: StarholdModuleId[] = ["reactor", "logistics", "core", "sensor"];
    const targetId = ids[state.tick % 4];
    nextModules[targetId] = {
      ...nextModules[targetId],
      integrity: clamp(nextModules[targetId].integrity - 2),
    };
  }

  const nextLockdownDuration = nextLockdown ? state.lockdownDuration + 1 : 0;
  const allModulesCrit = Object.values(nextModules).every(m => m.integrity < 10);
  const stationLost = nextLockdownDuration >= 30 && allModulesCrit;

  // Phase shift safety net: if awakening happened outside this tick, keep the transition stable.
  let firstLoopComplete = state.firstLoopComplete;
  let progression = { ...state.progression };
  if (state.phase === "awakened" && !state.firstLoopShown && !state.firstLoopComplete) {
    firstLoopComplete = true;
    progression.stars += 10;
    progression.lastStarGain = 10;
  }

  const nextState = {
    ...state,
    tick: state.tick + 1,
    phase: nextPhase,
    resources: {
      ...state.resources,
      power: nextPower,
      stability: nextStability,
      materials: nextMaterials,
      activation: nextActivation,
    },
    modules: nextModules,
    marks: {
      // fullGrid synergy: All 4 modules online & healthy → marks decay 2× faster
      // Awakened fázisban: marks decay 50%-kal gyorsabb
      // voidLens: voidEcho decay 2x faster
      reactorScar: clamp(state.marks.reactorScar + (state.modules.reactor.load >= 95 ? 1 : 0) - (state.modules.reactor.integrity >= 70 ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult) : 0)),
      shellStrain: clamp(state.marks.shellStrain + (state.modules.core.load >= 95 ? 1 : 0) - (state.phase === "boot" ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult) : 0)),
      supplyStress: clamp(state.marks.supplyStress + (state.modules.logistics.load >= 95 ? 1 : 0) - (state.modules.logistics.online ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult) : 0)),
      voidEcho: clamp(state.marks.voidEcho + (state.modules.sensor.load >= 95 ? 1 : 0) - (state.modules.core.integrity >= 80 ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult * (mods.voidLens ? 2 : 1)) : 0)),
    },
    anomalies: nextAnomalies,
    entropy: nextEntropy,
    alert: nextAlert,
    journal: nextJournal,
    avatarAwake: state.avatarAwake || nextActivation >= 100,
    crisis: isCrisis,
    highStability: isHighStability,
    lockdown: nextLockdown,
    lockdownDuration: nextLockdownDuration,
    stationLost,
    firstLoopComplete,
    pendingEvent: nextPendingEvent,
    eventQuietTicks: nextQuietTicks,
    worldPulse: nextWorldPulse,
    worldPhase: nextWorldPhase,
    lowEntropyStreak: nextEntropy < 10 ? state.lowEntropyStreak + 1 : 0,
    highStabilityStreak: nextStability > 90 ? state.highStabilityStreak + 1 : 0,
    wasCrisis: state.crisis,
    progression,
    activeOperation:
      state.activeOperation
        ? {
            ...state.activeOperation,
            remaining: Math.max(0, state.activeOperation.remaining - 1),
          }
        : null,
  };

  const withOperation =
    nextState.activeOperation && nextState.activeOperation.remaining <= 0
      ? completeActiveOperation(nextState)
      : nextState;

  const withScavenge = advanceScavengeOperation(withOperation);

  let scriptedState = withScavenge;
  if (scriptedPhaseOne && state.tick >= 235 && scriptedState.phase === "boot") {
    scriptedState = {
      ...unlockActivationTransfer(scriptedState),
      resources: {
        ...scriptedState.resources,
        power: clamp(Math.max(scriptedState.resources.power, 28)),
        stability: clamp(Math.max(scriptedState.resources.stability, 72)),
        activation: clamp(Math.max(scriptedState.resources.activation, 28)),
      },
      alert: {
        en: "Core chamber aligned. Prepare the shell for awakening.",
        hu: "A magkamra hangolva. Készítsd elő a testet az ébredésre.",
        de: "Kernkammer ausgerichtet. Bereite die Hülle auf das Erwachen vor.",
        ro: "Camera nucleului este aliniată. Pregătește corpul pentru trezire.",
      },
    };
  }

  if (!state.avatarAwake && state.tick >= 299 && !scriptedState.pendingEvent) {
    scriptedState = {
      ...scriptedState,
      phase: "awakened",
      avatarAwake: true,
      firstLoopComplete: true,
      resources: {
        ...scriptedState.resources,
        activation: 100,
        stability: clamp(Math.max(scriptedState.resources.stability, 88)),
        power: clamp(Math.max(scriptedState.resources.power, 24)),
      },
      alert: GRAVITAS_TEXT.activation.awakenedAlert,
      journal: pushJournal(scriptedState, GRAVITAS_TEXT.ui.phaseShift),
    };
  }

  const withResonance = coolDownResonance(scriptedState);

  // Threat cycle
  const threatResult = advanceStarholdThreat(withResonance);

  // Events - skipped if threat just impacted or during aftershock
  if (
    threatResult.impacted ||
    threatResult.nextState.threat.aftershock > 0 ||
    threatResult.nextState.eventQuietTicks > 0 ||
    threatResult.nextState.resources.stability < 20 ||
    threatResult.nextState.activeOperation ||
    worldShifted
  ) {
    return checkStarholdMilestones(threatResult.nextState);
  }

  return checkStarholdMilestones(applyStarholdEvents(threatResult.nextState));
}
