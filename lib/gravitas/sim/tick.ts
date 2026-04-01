import type { StarholdModuleId, StarholdState, LocalizedString } from "./types";
import { applyStarholdEvents, createAvatarPreparationEvent, failRepairChallenge, advanceRepairChallengeWindow } from "./events";
import { clamp } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { coolDownResonance } from "./activation";
import { advanceStarholdThreat, createNextThreat } from "./threats";
import { checkStarholdMilestones } from "./progression";
import { addResourceDelta, pushJournal, updateModuleIntegrity, addModuleLoad } from "./shared";
import { getStarholdModifiers } from "./modifiers";
import { getModuleActionProfile } from "./modules";
import { isBootstrapComplete } from "./bootstrap";

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

  const materialsGain = 2;

  return {
    ...state,
    resources: addResourceDelta(state.resources, {
      materials: materialsGain,
    }),
    worldPulse: clamp(state.worldPulse + 1),
    alert: GRAVITAS_TEXT.alerts.scavengeSuccess,
    scavengeOperation: {
      ...op,
      remaining: op.cycleDuration,
      completedCycles: op.completedCycles + 1,
    },
  };
}

export function advanceStarholdTick(state: StarholdState): StarholdState {
  if (state.pendingEvent?.id === "avatarPreparation" || (state.avatarImprintActive && !state.avatarAwake)) {
    return state;
  }
  if (state.threatCycle === 0 && state.threat.countdown <= 1 && !isBootstrapComplete(state)) {
    const failureAlert = GRAVITAS_TEXT.alerts.bootstrapFailed;
    return checkStarholdMilestones({
      ...state,
      stationLost: true,
      lockdown: true,
      lockdownDuration: state.lockdownDuration + 1,
      alert: failureAlert,
      journal: pushJournal(state, GRAVITAS_TEXT.journal.bootstrapFailedJournal),
      threat: {
        ...state.threat,
        countdown: 0,
      },
    });
  }
  const scriptedPhaseOne = !state.avatarAwake && state.tick < 300;
  const mods = getStarholdModifiers(state);
  const nextQuietTicks = Math.max(0, (state.eventQuietTicks ?? 0) - 1);
  const recoveryCalmWindow = (state.waveRecoveryCalmTicks ?? 0) > 0;
  const nextRecoveryCalmTicks = Math.max(0, (state.waveRecoveryCalmTicks ?? 0) - 1);
  const repairChallengeExpired = state.repairChallenge.active && state.tick > state.repairChallenge.promptEndsAtTick;
  if (repairChallengeExpired) {
    if (state.repairChallenge.windowSatisfied) {
      return checkStarholdMilestones(advanceRepairChallengeWindow({
        ...state,
        pendingEvent: null,
        postWaveSurgeTicks: 0,
        postWaveSurgeMode: null,
        waveRecoveryCalmTicks: 0,
      }));
    }
    return checkStarholdMilestones({
      ...failRepairChallenge({
        ...state,
        pendingEvent: null,
        postWaveSurgeTicks: 0,
        postWaveSurgeMode: null,
        waveRecoveryCalmTicks: 0,
      }),
    });
  }
  const introWindow = state.phase === "boot" && state.tick < 18;
  const settlingWindow = !state.avatarAwake && state.tick < 70;
  const earlyWindow = !state.avatarAwake && state.tick < 100;
  const firstWaveRecoveryActive =
    state.reactorRecovery.active &&
    state.threatCycle === 1 &&
    state.tick < state.reactorRecovery.nextPromptTick;
  const postWaveSurgeActive = (state.postWaveSurgeTicks ?? 0) > 0;
  const postWaveSurgeDangerWindow = postWaveSurgeActive && state.postWaveSurgeTicks <= 30;
  const postWaveSurgeSpike =
    postWaveSurgeDangerWindow &&
    (state.postWaveSurgeTicks % 10 === 0);
  const postWaveSurgeMode = state.postWaveSurgeMode ?? "gentle";
  const sensorOnline = state.modules.sensor.online;
  const sensorIntegrity = state.modules.sensor.integrity;
  const reactorBoost = recoveryCalmWindow ? 0 : state.modules.reactor.online ? (introWindow ? 3 : settlingWindow ? 2 : 2) : 0;
  const logisticsDrainBase = recoveryCalmWindow ? 0 : state.modules.logistics.online ? 0 : 1 + Math.floor(state.marks.supplyStress / 4);
  const logisticsDrain = recoveryCalmWindow ? 0 : Math.max(0, logisticsDrainBase - (introWindow ? 1 : 0));
  // sensorBoost synergy: Reactor + Sensor both healthy → +2 stability instead of +1
  const sensorStability = recoveryCalmWindow ? 0 : state.modules.sensor.online ? ((mods.sensorBoost ? 2 : 1) + (introWindow ? 1 : 0)) : 0;
  const phaseDrain = recoveryCalmWindow ? 0 : state.phase === "activation" ? 1 : 0;

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
  const phasePowerDrain = recoveryCalmWindow ? 0 : worldPhase === 1 ? 1 : 0;
  const phaseStabilityBonus = recoveryCalmWindow ? 0 : worldPhase === 2 ? 1 : 0;
  const phaseEntropyBias = recoveryCalmWindow ? 0 : worldPhase === 3 ? 1 : 0;

  let nextPower = clamp(
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

  if (firstWaveRecoveryActive && !recoveryCalmWindow) {
    nextStability = clamp(
      Math.max(
        nextStability + 2 + (state.modules.reactor.online ? 1 : 0) + (sensorOnline ? 1 : 0),
        Math.min(82, state.resources.stability + 3)
      )
    );
  }
  let nextMaterials = state.resources.materials;
  let nextActivation = state.resources.activation;
  if (state.repairChallenge.active && !recoveryCalmWindow) {
    const repairChallengeTarget = state.repairChallenge.sequence[state.repairChallenge.promptIndex] ?? null;
    const remainingWindow = Math.max(1, state.repairChallenge.promptEndsAtTick - state.tick + 1);
    switch (repairChallengeTarget) {
      case "reactor": {
        const drain = Math.max(1, Math.ceil(nextStability / remainingWindow));
        nextStability = clamp(Math.max(0, nextStability - drain));
        nextPower = clamp(Math.max(6, nextPower - 1));
        break;
      }
      case "logistics": {
        const drain = Math.max(1, Math.ceil(nextMaterials / remainingWindow));
        nextMaterials = clamp(Math.max(0, nextMaterials - drain));
        nextPower = clamp(Math.max(6, nextPower - 1));
        break;
      }
      case "sensor": {
        const drain = Math.max(1, Math.ceil(nextPower / remainingWindow));
        nextPower = clamp(Math.max(0, nextPower - drain));
        nextStability = clamp(Math.max(12, nextStability - 1));
        break;
      }
      case "core": {
        const drain = Math.max(1, Math.ceil(nextActivation / remainingWindow));
        nextActivation = clamp(Math.max(0, nextActivation - drain));
        nextPower = clamp(Math.max(6, nextPower - 1));
        break;
      }
    }
  }
  if (postWaveSurgeDangerWindow && !recoveryCalmWindow) {
    const surgeDrop =
      postWaveSurgeMode === "aggressive"
        ? (state.postWaveSurgeTicks > 20 ? 5 : state.postWaveSurgeTicks > 10 ? 7 : 9)
        : (state.postWaveSurgeTicks > 20 ? 2 : state.postWaveSurgeTicks > 10 ? 4 : 6);
    nextStability = clamp(Math.max(16, nextStability - (postWaveSurgeSpike ? surgeDrop : 1)));
    if (postWaveSurgeSpike) {
      nextPower = clamp(nextPower - (postWaveSurgeMode === "aggressive" ? 2 : 1));
    }
  }

  let nextModules = { ...state.modules };
  // Module load cooling and overload wear
  Object.keys(nextModules).forEach((id) => {
    const m = nextModules[id as StarholdModuleId];
    // moduleCoolant: load cooling 2x faster
    const coolingBase = mods.moduleCoolant ? 2 : 1;
    const nextLoad = recoveryCalmWindow
      ? m.load
      : m.online
        ? clamp(m.load - coolingBase)
        : clamp(m.load - (coolingBase * 2));
    let nextIntegrity = m.integrity;
    if (!recoveryCalmWindow) {
      if (m.load >= 92) {
        nextIntegrity = clamp(nextIntegrity - 1);
      }
      if (m.load >= 95) {
        nextIntegrity = clamp(nextIntegrity - 1); // Total -2
      }
    }
    
    nextModules[id as StarholdModuleId] = { ...m, load: nextLoad, integrity: nextIntegrity };
  });

  let alert = state.alert;
  let nextJournal = [...state.journal];

  // Station Report every 50 ticks
  if (state.tick % 50 === 0 && state.tick > 0 && !recoveryCalmWindow) {
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
  if (nextStability === 0 && !nextLockdown && !recoveryCalmWindow) {
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

  if (!state.avatarAwake && nextStability > 0 && nextStability < 18 && !recoveryCalmWindow) {
    nextStability = clamp(
      nextStability +
        (state.modules.reactor.online ? 2 : 1) +
        (state.modules.sensor.online ? 1 : 0)
    );
  }

  // Void Whispers (Psychic atmosphere)
  if (!introWindow && state.marks.voidEcho > 8 && state.tick % 15 === 0 && Math.random() > 0.4 && !recoveryCalmWindow) {
    const whispers = GRAVITAS_TEXT.lore.voidWhispers || [];
    if (whispers.length > 0) {
      const randomWhisper = whispers[Math.floor(Math.random() * whispers.length)];
      nextJournal = pushJournal({ ...state, journal: nextJournal }, randomWhisper);
    }
  }

  // Glitch logic (accelerated in Crisis)
  const glitchThreshold = isCrisis ? 8 : 10;
  if (!earlyWindow && totalMarks > glitchThreshold && state.tick % (isCrisis ? 3 : 5) === 0 && !recoveryCalmWindow) {
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
  if (!earlyWindow && state.entropy > 80 && state.tick % 4 === 0 && !recoveryCalmWindow) {
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
  if (state.phase === "activation" && !state.avatarAwake && !recoveryCalmWindow) {
    const passiveGain =
      (state.modules.core.online ? 0.22 : 0) +
      (sensorOnline ? 0.16 : 0) +
      (nextStability >= 60 ? 0.12 : 0);
    const passiveLoss =
      (nextPower < 12 ? 0.22 : 0) +
      (nextStability < 40 ? 0.18 : 0) +
      (!sensorOnline ? 0.08 : 0);
    nextActivation = clamp(nextActivation + passiveGain - passiveLoss, 0, 100);
  } else if (state.phase === "boot" && nextActivation > 0 && !state.activeOperation && !recoveryCalmWindow) {
    nextActivation = clamp(nextActivation - 0.05, 0, 100);
  }

  const nextPhase =
    (state.avatarAwake || nextActivation >= 100) && state.phase !== "awakened" ? "awakened" : state.phase;

  // Auto-Salvage Item Logic
  if (state.progression.unlockedItems.includes("auto_salvage") && state.tick % 10 === 0) {
    nextMaterials = clamp(nextMaterials + 1);
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
  if ((totalMarks > 12 || isCrisis || nextLockdown) && !recoveryCalmWindow) {
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
  if (!sensorOnline && (state.tick >= 70 || state.threat.countdown <= 12) && state.tick % 12 === 0 && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy + 1);
  }
  if (sensorOnline && sensorIntegrity >= 55 && state.tick % 10 === 0 && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy - 1);
  }
  if (firstWaveRecoveryActive && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy - 1);
  }
  if (postWaveSurgeDangerWindow && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy + (postWaveSurgeSpike ? 1 : 0));
  }

  const nextWorldPhase = state.tick > 0 && state.tick % 40 === 0 ? (state.worldPhase + 1) % 4 : state.worldPhase;
  if (postWaveSurgeSpike) {
    nextAlert = state.postWaveSurgeTicks >= 20
      ? GRAVITAS_TEXT.alerts.finalWaveSpike
      : state.postWaveSurgeTicks >= 10
        ? GRAVITAS_TEXT.alerts.finalWaveDrop
        : GRAVITAS_TEXT.alerts.finalWaveSettle;
  }
  const worldPulseGain =
    Math.floor(totalMarks / (settlingWindow ? 6 : 4)) +
    Math.floor(nextEntropy / (settlingWindow ? 28 : 20)) +
    (state.threat.aftershock > 0 ? 2 : 0) +
    (state.phase === "awakened" ? 1 : 0) +
    (nextLockdown ? 2 : 0);
  const worldPulseEase = (isHighStability ? 2 : 0) + (nextWorldPhase === 0 ? 1 : 0) + (firstWaveRecoveryActive ? 2 : 0);
  const nextWorldPulse = recoveryCalmWindow ? state.worldPulse : clamp(state.worldPulse + worldPulseGain - worldPulseEase);

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

  if (nextLockdown && !recoveryCalmWindow) {
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
    reactorRecovery:
      firstWaveRecoveryActive && state.tick + 1 >= state.reactorRecovery.nextPromptTick
        ? {
            ...state.reactorRecovery,
            active: false,
          }
        : state.reactorRecovery,
    postWaveSurgeTicks: postWaveSurgeActive ? Math.max(0, state.postWaveSurgeTicks - 1) : 0,
    postWaveSurgeMode: postWaveSurgeActive ? state.postWaveSurgeMode : null,
    waveRecoveryCalmTicks: nextRecoveryCalmTicks,
    activeOperation:
      state.activeOperation
        ? {
          ...state.activeOperation,
          remaining: Math.max(0, state.activeOperation.remaining - 1),
        }
        : null,
  };

  const calmLockedState = recoveryCalmWindow
    ? {
        ...nextState,
        resources: {
          ...nextState.resources,
          power: Math.max(nextState.resources.power, state.resources.power),
          stability: Math.max(nextState.resources.stability, state.resources.stability),
          materials: Math.max(nextState.resources.materials, state.resources.materials),
          activation: Math.max(nextState.resources.activation, state.resources.activation),
        },
        entropy: Math.min(nextState.entropy, state.entropy),
      }
    : nextState;

  const withOperation =
    calmLockedState.activeOperation && calmLockedState.activeOperation.remaining <= 0
      ? completeActiveOperation(calmLockedState)
      : calmLockedState;

  const withScavenge = advanceScavengeOperation(withOperation);

  let scriptedState = withScavenge;
  if (
    !scriptedState.avatarAwake &&
    scriptedState.avatarPrepArmedTick !== null &&
    scriptedState.tick >= scriptedState.avatarPrepArmedTick &&
    !scriptedState.pendingEvent &&
    !scriptedState.repairChallenge.active
  ) {
    const pendingEvent = createAvatarPreparationEvent(1);
    scriptedState = {
      ...withScavenge,
      pendingEvent,
      alert: pendingEvent.title,
      avatarPrepArmedTick: null,
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
    worldShifted ||
    recoveryCalmWindow
  ) {
    return checkStarholdMilestones({
      ...threatResult.nextState,
      waveRecoveryCalmTicks: nextRecoveryCalmTicks,
    });
  }

  return checkStarholdMilestones(applyStarholdEvents({
    ...threatResult.nextState,
    waveRecoveryCalmTicks: nextRecoveryCalmTicks,
  }));
}
